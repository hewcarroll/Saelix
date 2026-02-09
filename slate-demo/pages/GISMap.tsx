import React, { useState, useRef, useEffect, MouseEvent, ChangeEvent } from 'react';
import { Layers, Locate, Filter, Search, PenTool, X, ZoomIn, ZoomOut, Square, Circle as CircleIcon, Hexagon, Trash2, Maximize, AlertTriangle, CheckCircle, Clock, Upload, Save, Map as MapIcon, Minus, Navigation, MoreVertical, MousePointer2, Download, Edit2, Disc, GitBranch, Palette, Sliders, FolderOpen, Eye, EyeOff } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { MOCK_ASSETS } from '../constants';
import { Asset } from '../types';
import { useDemoToast } from '../components/DemoToast';

type ShapeType = 'polygon' | 'rectangle' | 'circle' | 'line';

interface ShapeProperties {
  strokeColor: string;
  strokeWidth: number;
  fillColor: string;
  fillOpacity: number;
}

interface Shape {
  id: string;
  type: ShapeType;
  points?: { x: number; y: number }[]; // For polygon/line
  start?: { x: number; y: number };    // For rect/circle
  end?: { x: number; y: number };      // For rect/circle
  properties: ShapeProperties;
}

interface SavedView {
  id: string;
  name: string;
  transform: { x: number; y: number; scale: number };
  filterTypes: string[];
  statusFilter: string;
}

interface SavedShapeSet {
  id: string;
  name: string;
  shapes: Shape[];
}

const DEFAULT_PROPS: ShapeProperties = {
    strokeColor: '#2563eb',
    strokeWidth: 2,
    fillColor: '#2563eb',
    fillOpacity: 0.2
};

const GISMap: React.FC = () => {
  const navigate = useNavigate();
  const { showDemoToast } = useDemoToast();

  // Asset & Filter State
  const [selectedAsset, setSelectedAsset] = useState<string | null>(null);
  const [statusFilter, setStatusFilter] = useState<string>('All');
  const [filterTypes, setFilterTypes] = useState<string[]>(['Manhole', 'Pipe', 'Lateral']);
  const [searchTerm, setSearchTerm] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [showViews, setShowViews] = useState(false);
  const [showShapeSets, setShowShapeSets] = useState(false);

  // Map Transform State (Pan & Zoom)
  const [transform, setTransform] = useState({ x: 0, y: 0, scale: 1 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  // Drawing & Editing State
  const [shapes, setShapes] = useState<Shape[]>(() => {
    const saved = localStorage.getItem('gisShapes');
    const parsed = saved ? JSON.parse(saved) : [];
    // Migration: ensure properties exist
    return parsed.map((s: any) => ({ ...s, properties: s.properties || DEFAULT_PROPS }));
  });
  const [drawingTool, setDrawingTool] = useState<ShapeType | null>(null);
  const [currentShape, setCurrentShape] = useState<Shape | null>(null);
  const [selectedShapeId, setSelectedShapeId] = useState<string | null>(null);
  const [draggingPoint, setDraggingPoint] = useState<{ shapeId: string, pointIndex: number | 'start' | 'end' } | null>(null);
  const [mousePos, setMousePos] = useState<{ x: number; y: number } | null>(null);

  // GeoJSON & Views State
  const [geoJsonFeatures, setGeoJsonFeatures] = useState<any[]>([]);
  const [savedViews, setSavedViews] = useState<SavedView[]>(() => {
    const saved = localStorage.getItem('gisViews');
    return saved ? JSON.parse(saved) : [];
  });
  const [savedShapeSets, setSavedShapeSets] = useState<SavedShapeSet[]>(() => {
      const saved = localStorage.getItem('gisSavedShapeSets');
      return saved ? JSON.parse(saved) : [];
  });

  const fileInputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Persist Data
  useEffect(() => {
    localStorage.setItem('gisShapes', JSON.stringify(shapes));
  }, [shapes]);

  useEffect(() => {
    localStorage.setItem('gisViews', JSON.stringify(savedViews));
  }, [savedViews]);

  useEffect(() => {
    localStorage.setItem('gisSavedShapeSets', JSON.stringify(savedShapeSets));
  }, [savedShapeSets]);

  // --- Helper: Convert Screen Coordinates to World Coordinates ---
  const getWorldCoordinates = (clientX: number, clientY: number) => {
    if (!containerRef.current) return { x: 0, y: 0 };
    const rect = containerRef.current.getBoundingClientRect();
    return {
      x: (clientX - rect.left - transform.x) / transform.scale,
      y: (clientY - rect.top - transform.y) / transform.scale
    };
  };

  // --- Export GeoJSON ---
  const exportGeoJSON = () => {
    const features = shapes.map(s => {
        let geometry: any = null;
        let properties: any = { id: s.id, type: s.type, ...s.properties };

        if (s.type === 'polygon' && s.points) {
            const coords = s.points.map(p => [p.x, p.y]);
            if (coords.length > 0) coords.push(coords[0]);
            geometry = { type: 'Polygon', coordinates: [coords] };
        } else if (s.type === 'line' && s.points) {
            geometry = { type: 'LineString', coordinates: s.points.map(p => [p.x, p.y]) };
        } else if (s.type === 'rectangle' && s.start && s.end) {
            const minX = Math.min(s.start.x, s.end.x);
            const maxX = Math.max(s.start.x, s.end.x);
            const minY = Math.min(s.start.y, s.end.y);
            const maxY = Math.max(s.start.y, s.end.y);
            geometry = { 
                type: 'Polygon', 
                coordinates: [[[minX, minY], [maxX, minY], [maxX, maxY], [minX, maxY], [minX, minY]]] 
            };
        } else if (s.type === 'circle' && s.start && s.end) {
            const radius = Math.sqrt(Math.pow(s.end.x - s.start.x, 2) + Math.pow(s.end.y - s.start.y, 2));
            geometry = { type: 'Point', coordinates: [s.start.x, s.start.y] };
            properties.radius = radius;
            properties.subType = 'Circle';
        }

        return { type: 'Feature', geometry, properties };
    }).filter(f => f.geometry !== null);

    const featureCollection = { type: 'FeatureCollection', features };
    const blob = new Blob([JSON.stringify(featureCollection, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `saelix_map_export_${new Date().toISOString().slice(0, 10)}.geojson`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  // --- Mouse Event Handlers ---
  const handleMouseDown = (e: MouseEvent) => {
    if (e.button !== 0) return; 
    if (draggingPoint) return;

    const { x, y } = getWorldCoordinates(e.clientX, e.clientY);

    if (drawingTool) {
      if (drawingTool === 'polygon' || drawingTool === 'line') {
        const points = currentShape?.points ? [...currentShape.points, { x, y }] : [{ x, y }];
        setCurrentShape({ id: 'temp', type: drawingTool, points, properties: { ...DEFAULT_PROPS } });
      } else {
        setCurrentShape({ 
          id: 'temp', 
          type: drawingTool, 
          start: { x, y }, 
          end: { x, y },
          properties: { ...DEFAULT_PROPS }
        });
      }
    } else {
      setIsDragging(true);
      setDragStart({ x: e.clientX - transform.x, y: e.clientY - transform.y });
      if ((e.target as HTMLElement).tagName === 'div' || (e.target as HTMLElement).tagName === 'svg') {
          setSelectedShapeId(null);
      }
    }
  };

  const handleHandleMouseDown = (e: MouseEvent, shapeId: string, pointIndex: number | 'start' | 'end') => {
      e.stopPropagation(); 
      e.preventDefault();
      setDraggingPoint({ shapeId, pointIndex });
  };

  const handleMouseMove = (e: MouseEvent) => {
    const { x, y } = getWorldCoordinates(e.clientX, e.clientY);
    setMousePos({ x, y });

    if (draggingPoint) {
        setShapes(prev => prev.map(s => {
            if (s.id !== draggingPoint.shapeId) return s;
            
            if ((s.type === 'polygon' || s.type === 'line') && s.points) {
                const newPoints = [...s.points];
                if (typeof draggingPoint.pointIndex === 'number') {
                    newPoints[draggingPoint.pointIndex] = { x, y };
                }
                return { ...s, points: newPoints };
            } else if ((s.type === 'rectangle' || s.type === 'circle')) {
                const update: any = {};
                if (draggingPoint.pointIndex === 'start') update.start = { x, y };
                if (draggingPoint.pointIndex === 'end') update.end = { x, y };
                return { ...s, ...update };
            }
            return s;
        }));
    } else if (drawingTool && currentShape) {
      if (drawingTool === 'rectangle' || drawingTool === 'circle') {
        setCurrentShape({ ...currentShape, end: { x, y } });
      }
    } else if (isDragging) {
      setTransform({
        ...transform,
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y
      });
    }
  };

  const handleMouseUp = () => {
    if (draggingPoint) {
        setDraggingPoint(null);
    } else if (isDragging) {
      setIsDragging(false);
    } else if (drawingTool && currentShape && (drawingTool === 'rectangle' || drawingTool === 'circle')) {
      const newShape: Shape = { ...currentShape, id: `shape-${Date.now()}` };
      setShapes([...shapes, newShape]);
      setCurrentShape(null);
      setDrawingTool(null); 
      setSelectedShapeId(newShape.id); 
    }
  };

  const handleMouseLeave = () => {
      if (isDragging) setIsDragging(false);
      if (draggingPoint) setDraggingPoint(null);
  };

  const handleDoubleClick = (e: MouseEvent) => {
     if (drawingTool || draggingPoint) return;
     const { x, y } = getWorldCoordinates(e.clientX, e.clientY);
     const zoomFactor = 1.5;
     const newScale = Math.min(4, transform.scale * zoomFactor);
     
     setTransform({
         x: transform.x - x * (newScale - transform.scale),
         y: transform.y - y * (newScale - transform.scale),
         scale: newScale
     });
  };

  const handlePolygonFinish = () => {
    if (currentShape && (currentShape.type === 'polygon' || currentShape.type === 'line') && (currentShape.points?.length || 0) > 1) {
      const newShape = { ...currentShape, id: `shape-${Date.now()}` };
      setShapes([...shapes, newShape]);
      setCurrentShape(null);
      setSelectedShapeId(newShape.id);
    }
  };

  const handleZoom = (delta: number) => {
    setTransform(prev => ({
      ...prev,
      scale: Math.max(0.5, Math.min(4, prev.scale + delta))
    }));
  };

  const handleLocateMe = () => {
      if ('geolocation' in navigator) {
          navigator.geolocation.getCurrentPosition(() => {
              setTransform({ x: 0, y: 0, scale: 1.5 });
              alert("Location found. Centering map.");
          }, (err) => {
              console.error(err);
              alert("Could not access location. Centering on default view.");
              setTransform({ x: 0, y: 0, scale: 1 });
          });
      }
  };

  const handleDeleteShape = () => {
      if (selectedShapeId) {
          setShapes(shapes.filter(s => s.id !== selectedShapeId));
          setSelectedShapeId(null);
      }
  };

  const clearShapes = () => {
    if (confirm('Clear all drawn shapes?')) {
      setShapes([]);
      setCurrentShape(null);
      setSelectedShapeId(null);
    }
  };

  // --- Filtering & Searching Logic ---
  const toggleFilterType = (type: string) => {
      setFilterTypes(prev => 
        prev.includes(type) ? prev.filter(t => t !== type) : [...prev, type]
      );
  };

  const filteredAssets = MOCK_ASSETS.filter(asset => {
    const matchesType = filterTypes.includes(asset.type);
    const matchesStatus = statusFilter === 'All' || asset.status === statusFilter;
    
    // Enhanced Search: Multi-term, case-insensitive
    let matchesSearch = true;
    if (searchTerm) {
        const lowerTerm = searchTerm.toLowerCase();
        const terms = lowerTerm.split(' ').filter(t => t.trim() !== '');
        matchesSearch = terms.every(t => 
            asset.id.toLowerCase().includes(t) || 
            asset.type.toLowerCase().includes(t) || 
            asset.status.toLowerCase().includes(t)
        );
    }

    return matchesType && matchesStatus && matchesSearch;
  });

  const selectedAssetData = MOCK_ASSETS.find(a => a.id === selectedAsset);

  // --- GeoJSON Import ---
  const handleFileImport = (e: ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (file) {
          const reader = new FileReader();
          reader.onload = (event) => {
              try {
                  const json = JSON.parse(event.target?.result as string);
                  if (json.type === 'FeatureCollection' && json.features) {
                      setGeoJsonFeatures(prev => [...prev, ...json.features]);
                      alert(`Imported ${json.features.length} features.`);
                  } else if (json.type === 'Feature') {
                      setGeoJsonFeatures(prev => [...prev, json]);
                      alert('Imported 1 feature.');
                  } else {
                      alert('Format not supported. Please use FeatureCollection or Feature.');
                  }
              } catch (err) {
                  alert('Invalid GeoJSON file');
              }
          };
          reader.readAsText(file);
      }
  };

  // --- View Management ---
  const saveCurrentView = () => {
      const name = prompt("Enter a name for this view:");
      if (name) {
          const newView: SavedView = {
              id: Date.now().toString(),
              name,
              transform,
              filterTypes,
              statusFilter
          };
          setSavedViews([...savedViews, newView]);
      }
  };

  const loadView = (view: SavedView) => {
      setTransform(view.transform);
      setFilterTypes(view.filterTypes);
      setStatusFilter(view.statusFilter);
      setShowViews(false);
  };

  const deleteView = (id: string, e: MouseEvent) => {
      e.stopPropagation();
      setSavedViews(savedViews.filter(v => v.id !== id));
  };

  // --- Drawing Set Management ---
  const saveDrawingSet = () => {
      const name = prompt("Enter a name for this drawing set:");
      if (name) {
          const newSet: SavedShapeSet = {
              id: Date.now().toString(),
              name,
              shapes: shapes
          };
          setSavedShapeSets([...savedShapeSets, newSet]);
      }
  };

  const loadDrawingSet = (set: SavedShapeSet) => {
      if (confirm(`Load "${set.name}"? This will replace your current drawings.`)) {
          setShapes(set.shapes);
          setShowShapeSets(false);
      }
  };

  const deleteDrawingSet = (id: string, e: MouseEvent) => {
      e.stopPropagation();
      setSavedShapeSets(savedShapeSets.filter(s => s.id !== id));
  };

  const navigateToHistory = (assetId: string, locationId?: string) => {
      navigate('/inspections', { state: { filterAssetId: locationId || assetId } });
  };

  // --- Styling Helpers ---
  const updateSelectedShapeStyle = (key: keyof ShapeProperties, value: any) => {
      if (!selectedShapeId) return;
      setShapes(prev => prev.map(s => {
          if (s.id !== selectedShapeId) return s;
          return { ...s, properties: { ...s.properties, [key]: value } };
      }));
  };

  const getAssetIcon = (type: string) => {
    switch (type) {
        case 'Manhole': return <Disc className="w-3 h-3 text-white" />;
        case 'Pipe': return <Square className="w-3 h-3 text-white fill-current" />;
        case 'Lateral': return <GitBranch className="w-3 h-3 text-white" />;
        default: return <CircleIcon className="w-3 h-3 text-white" />;
    }
  };

  const selectedShape = shapes.find(s => s.id === selectedShapeId);

  return (
    <div className="h-[calc(100vh-8rem)] flex flex-col space-y-4">
      {/* Top Controls */}
      <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center gap-4">
        <div>
           <h1 className="text-2xl font-bold text-slate-800">GIS Spatial Reporting</h1>
        </div>
        
        <div className="flex flex-wrap gap-2 items-center">
            {/* Drawing Toolbar */}
            <div className="flex bg-white rounded-lg shadow-sm border border-slate-300 p-1">
                 <button 
                    onClick={() => { setDrawingTool(null); setSelectedShapeId(null); }}
                    className={`p-2 rounded ${!drawingTool ? 'bg-blue-100 text-blue-600' : 'hover:bg-slate-100 text-slate-600'}`}
                    title="Select / Pan"
                >
                    <MousePointer2 className="h-4 w-4" />
                </button>
                <div className="w-px bg-slate-200 mx-1"></div>
                <button
                    onClick={() => showDemoToast('Drawing tools')}
                    className="p-2 rounded hover:bg-slate-100 text-slate-600"
                    title="Draw Line/Pipe"
                >
                    <Minus className="h-4 w-4 transform -rotate-45" />
                </button>
                <button
                    onClick={() => showDemoToast('Drawing tools')}
                    className="p-2 rounded hover:bg-slate-100 text-slate-600"
                    title="Draw Polygon"
                >
                    <Hexagon className="h-4 w-4" />
                </button>
                <button
                    onClick={() => showDemoToast('Drawing tools')}
                    className="p-2 rounded hover:bg-slate-100 text-slate-600"
                    title="Draw Rectangle"
                >
                    <Square className="h-4 w-4" />
                </button>
                <button
                    onClick={() => showDemoToast('Drawing tools')}
                    className="p-2 rounded hover:bg-slate-100 text-slate-600"
                    title="Draw Circle"
                >
                    <CircleIcon className="h-4 w-4" />
                </button>
                
                <div className="w-px bg-slate-200 mx-1"></div>
                
                 {/* Saved Drawings Button */}
                 <div className="relative">
                     <button
                        onClick={() => setShowShapeSets(!showShapeSets)}
                        className="p-2 rounded hover:bg-slate-100 text-slate-600"
                        title="Saved Drawings"
                     >
                         <FolderOpen className="h-4 w-4" />
                     </button>
                     {showShapeSets && (
                         <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-slate-200 z-30 p-2">
                             <button
                                onClick={() => showDemoToast('Save Drawings')}
                                className="w-full flex items-center justify-center space-x-2 bg-blue-50 text-blue-700 px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-100 mb-2"
                             >
                                 <Save className="h-4 w-4" />
                                 <span>Save Current Drawings</span>
                             </button>
                             <div className="max-h-48 overflow-y-auto space-y-1">
                                 {savedShapeSets.length === 0 && <p className="text-xs text-slate-400 text-center py-2">No saved sets</p>}
                                 {savedShapeSets.map(set => (
                                     <div key={set.id} className="flex items-center justify-between group p-2 hover:bg-slate-50 rounded cursor-pointer" onClick={() => showDemoToast('Load Drawing Set')}>
                                         <span className="text-sm text-slate-700">{set.name}</span>
                                         <button onClick={(e) => { e.stopPropagation(); showDemoToast('Delete Drawing Set'); }} className="text-slate-400 hover:text-red-500">
                                             <X className="h-3 w-3" />
                                         </button>
                                     </div>
                                 ))}
                             </div>
                         </div>
                     )}
                 </div>

                <div className="w-px bg-slate-200 mx-1"></div>

                <button onClick={() => showDemoToast('Delete shapes')} className="p-2 rounded hover:bg-red-50 text-red-500" title="Clear All">
                    <Trash2 className="h-4 w-4" />
                </button>
            </div>

            {/* Filter Dropdown */}
            <div className="relative">
                <button 
                    onClick={() => setShowFilters(!showFilters)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg border text-sm font-medium transition-colors ${
                        (statusFilter !== 'All' || filterTypes.length < 3) ? 'bg-blue-50 border-blue-200 text-blue-700' : 'bg-white border-slate-300 text-slate-700 hover:bg-slate-50'
                    }`}
                >
                    <Filter className="h-4 w-4" />
                    <span>Layers</span>
                </button>
                {showFilters && (
                    <div className="absolute top-full right-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-slate-200 z-20 p-4">
                        <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Asset Types</h3>
                        <div className="space-y-2 mb-4">
                            {['Manhole', 'Pipe', 'Lateral'].map(type => (
                                <label key={type} className="flex items-center space-x-2 text-sm text-slate-700 cursor-pointer">
                                    <input 
                                        type="checkbox" 
                                        checked={filterTypes.includes(type)}
                                        onChange={() => toggleFilterType(type)}
                                        className="rounded border-slate-300 text-blue-600 focus:ring-blue-500"
                                    />
                                    <span>{type}</span>
                                </label>
                            ))}
                        </div>
                        <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Status</h3>
                        <select 
                            value={statusFilter}
                            onChange={(e) => setStatusFilter(e.target.value)}
                            className="w-full text-sm border-slate-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        >
                            <option value="All">All Statuses</option>
                            <option value="Good">Good</option>
                            <option value="Needs Repair">Needs Repair</option>
                            <option value="Critical">Critical</option>
                        </select>
                    </div>
                )}
            </div>

            {/* Views, Export & Import */}
            <div className="flex space-x-2">
                 <div className="relative">
                    <button 
                        onClick={() => setShowViews(!showViews)}
                        className="flex items-center space-x-2 bg-white px-4 py-2 rounded-lg border border-slate-300 hover:bg-slate-50 text-sm font-medium text-slate-700"
                    >
                        <MapIcon className="h-4 w-4" />
                        <span>Views</span>
                    </button>
                    {showViews && (
                        <div className="absolute top-full right-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-slate-200 z-20 p-2">
                             <button
                                onClick={() => showDemoToast('Save View')}
                                className="w-full flex items-center justify-center space-x-2 bg-blue-50 text-blue-700 px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-100 mb-2"
                             >
                                 <Save className="h-4 w-4" />
                                 <span>Save Current View</span>
                             </button>
                             <div className="max-h-48 overflow-y-auto space-y-1">
                                 {savedViews.length === 0 && <p className="text-xs text-slate-400 text-center py-2">No saved views</p>}
                                 {savedViews.map(view => (
                                     <div key={view.id} className="flex items-center justify-between group p-2 hover:bg-slate-50 rounded cursor-pointer" onClick={() => showDemoToast('Load View')}>
                                         <span className="text-sm text-slate-700">{view.name}</span>
                                         <button onClick={(e) => { e.stopPropagation(); showDemoToast('Delete View'); }} className="text-slate-400 hover:text-red-500">
                                             <X className="h-3 w-3" />
                                         </button>
                                     </div>
                                 ))}
                             </div>
                        </div>
                    )}
                 </div>
                 
                 <button
                    onClick={() => showDemoToast('Export GeoJSON')}
                    className="flex items-center space-x-2 bg-white px-4 py-2 rounded-lg border border-slate-300 hover:bg-slate-50 text-sm font-medium text-slate-700"
                    title="Export drawn shapes as GeoJSON"
                 >
                     <Download className="h-4 w-4" />
                 </button>

                 <button
                    onClick={() => showDemoToast('Import GeoJSON')}
                    className="flex items-center space-x-2 bg-white px-4 py-2 rounded-lg border border-slate-300 hover:bg-slate-50 text-sm font-medium text-slate-700"
                    title="Import GeoJSON Data"
                 >
                     <Upload className="h-4 w-4" />
                     <span className="hidden lg:inline">Import</span>
                 </button>
            </div>
        </div>
      </div>

      {/* Drawing Instructions Overlay */}
      {(drawingTool) && (
          <div className="bg-blue-600 text-white px-4 py-3 rounded-lg flex justify-between items-center text-sm shadow-md animate-fade-in z-10">
              <div className="flex items-center space-x-2">
                  <Edit2 className="h-4 w-4" />
                  <span className="font-medium">
                      {drawingTool === 'polygon' || drawingTool === 'line' 
                        ? `Click to place points for ${drawingTool}. Click 'Finish' or double-click to complete.` 
                        : `Click and drag to draw ${drawingTool}.`}
                  </span>
              </div>
              <div className="flex space-x-3">
                 {(drawingTool === 'polygon' || drawingTool === 'line') && (
                     <button onClick={handlePolygonFinish} className="bg-white text-blue-700 px-3 py-1 rounded font-bold hover:bg-blue-50">
                         Finish
                     </button>
                 )}
                 <button onClick={() => { setCurrentShape(null); setDrawingTool(null); }} className="hover:text-blue-200 underline">
                     Cancel
                 </button>
              </div>
          </div>
      )}
      
      {/* Shape Properties Editor (Floating) */}
      {!drawingTool && selectedShapeId && selectedShape && (
           <div className="absolute top-24 left-4 z-20 bg-white border border-slate-200 rounded-lg shadow-xl p-4 w-64 animate-fade-in">
                <div className="flex justify-between items-center mb-3">
                    <span className="font-semibold text-sm text-slate-800 flex items-center">
                        <Sliders className="h-4 w-4 mr-2" /> Style Editor
                    </span>
                    <button onClick={() => setSelectedShapeId(null)} className="text-slate-400 hover:text-slate-600">
                        <X className="h-4 w-4" />
                    </button>
                </div>
                
                <div className="space-y-3">
                    <div>
                        <label className="text-xs text-slate-500 block mb-1">Stroke Color</label>
                        <div className="flex items-center space-x-2">
                             <input 
                                type="color" 
                                value={selectedShape.properties.strokeColor}
                                onChange={(e) => updateSelectedShapeStyle('strokeColor', e.target.value)}
                                className="h-8 w-full rounded cursor-pointer"
                             />
                        </div>
                    </div>
                     <div>
                        <label className="text-xs text-slate-500 block mb-1">Fill Color</label>
                        <div className="flex items-center space-x-2">
                             <input 
                                type="color" 
                                value={selectedShape.properties.fillColor}
                                onChange={(e) => updateSelectedShapeStyle('fillColor', e.target.value)}
                                className="h-8 w-full rounded cursor-pointer"
                             />
                        </div>
                    </div>
                    <div>
                        <label className="text-xs text-slate-500 block mb-1">Stroke Width: {selectedShape.properties.strokeWidth}px</label>
                        <input 
                            type="range" min="1" max="10" 
                            value={selectedShape.properties.strokeWidth}
                            onChange={(e) => updateSelectedShapeStyle('strokeWidth', parseInt(e.target.value))}
                            className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer"
                        />
                    </div>
                     <div>
                        <label className="text-xs text-slate-500 block mb-1">Opacity: {Math.round(selectedShape.properties.fillOpacity * 100)}%</label>
                        <input 
                            type="range" min="0" max="1" step="0.1"
                            value={selectedShape.properties.fillOpacity}
                            onChange={(e) => updateSelectedShapeStyle('fillOpacity', parseFloat(e.target.value))}
                            className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer"
                        />
                    </div>
                </div>
           </div>
      )}

      {/* Map Viewport */}
      <div className="flex-1 relative rounded-xl overflow-hidden border border-slate-200 shadow-inner bg-slate-100 select-none">
        
        {/* Transform Container (World) */}
        <div 
            ref={containerRef}
            className={`absolute origin-top-left w-full h-full ${isDragging ? 'cursor-grabbing' : drawingTool ? 'cursor-crosshair' : 'cursor-grab'}`}
            style={{ 
                transform: `translate(${transform.x}px, ${transform.y}px) scale(${transform.scale})`,
                transition: isDragging ? 'none' : 'transform 0.1s ease-out'
            }}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
            onDoubleClick={handleDoubleClick}
        >
            {/* Background Map Image */}
            <div 
                className="absolute inset-0 w-[200%] h-[200%]" 
                style={{ 
                    backgroundImage: 'url("https://upload.wikimedia.org/wikipedia/commons/e/ec/OpenStreetMap_in_Wikidata.png")',
                    backgroundSize: 'cover',
                    filter: 'grayscale(20%) contrast(1.1)',
                    pointerEvents: 'none'
                }}
            />

            {/* GeoJSON Layer */}
            <svg className="absolute top-0 left-0 w-[200%] h-[200%] pointer-events-none overflow-visible">
                 {geoJsonFeatures.map((feature, idx) => {
                     if (!feature.geometry) return null;
                     
                     switch(feature.geometry.type) {
                         case 'Point':
                             const [x, y] = feature.geometry.coordinates;
                             return <circle key={idx} cx={x} cy={y} r={5} fill="#8b5cf6" stroke="white" strokeWidth="1" opacity={0.8} />;
                         case 'LineString':
                             const points = feature.geometry.coordinates.map((p: number[]) => p.join(',')).join(' ');
                             return <polyline key={idx} points={points} fill="none" stroke="#8b5cf6" strokeWidth="3" opacity={0.8} />;
                         case 'Polygon':
                             const polyPoints = feature.geometry.coordinates[0].map((p: number[]) => p.join(',')).join(' ');
                             return <polygon key={idx} points={polyPoints} fill="rgba(139, 92, 246, 0.2)" stroke="#8b5cf6" strokeWidth="2" />;
                         default:
                             return null;
                     }
                 })}
            </svg>

            {/* Drawn Shapes Layer */}
            <svg className="absolute top-0 left-0 w-[200%] h-[200%] pointer-events-none overflow-visible">
                {shapes.map((shape) => {
                    const isSelected = selectedShapeId === shape.id;
                    const props = shape.properties;
                    const strokeColor = isSelected ? '#ef4444' : props.strokeColor;
                    
                    return (
                        <g key={shape.id} onClick={(e) => { e.stopPropagation(); setSelectedShapeId(shape.id); }} className="pointer-events-auto cursor-pointer">
                            {shape.type === 'polygon' && shape.points && (
                                <>
                                    <polygon 
                                        points={shape.points.map(p => `${p.x},${p.y}`).join(' ')}
                                        fill={props.fillColor}
                                        fillOpacity={props.fillOpacity}
                                        stroke={strokeColor}
                                        strokeWidth={isSelected ? props.strokeWidth + 1 : props.strokeWidth}
                                    />
                                    {isSelected && shape.points.map((p, idx) => (
                                        <circle 
                                            key={idx} 
                                            cx={p.x} 
                                            cy={p.y} 
                                            r={6} 
                                            fill="white" 
                                            stroke="#ef4444" 
                                            strokeWidth={2}
                                            className="hover:scale-125 transition-transform cursor-move"
                                            onMouseDown={(e) => handleHandleMouseDown(e, shape.id, idx)}
                                        />
                                    ))}
                                </>
                            )}
                            {shape.type === 'line' && shape.points && (
                                <>
                                    <polyline 
                                        points={shape.points.map(p => `${p.x},${p.y}`).join(' ')}
                                        fill="none"
                                        stroke={strokeColor}
                                        strokeWidth={isSelected ? props.strokeWidth + 2 : props.strokeWidth}
                                    />
                                    {isSelected && shape.points.map((p, idx) => (
                                        <circle 
                                            key={idx} 
                                            cx={p.x} 
                                            cy={p.y} 
                                            r={6} 
                                            fill="white" 
                                            stroke="#ef4444" 
                                            strokeWidth={2}
                                            className="hover:scale-125 transition-transform cursor-move"
                                            onMouseDown={(e) => handleHandleMouseDown(e, shape.id, idx)}
                                        />
                                    ))}
                                </>
                            )}
                            {shape.type === 'rectangle' && shape.start && shape.end && (
                                <>
                                    <rect 
                                        x={Math.min(shape.start.x, shape.end.x)}
                                        y={Math.min(shape.start.y, shape.end.y)}
                                        width={Math.abs(shape.end.x - shape.start.x)}
                                        height={Math.abs(shape.end.y - shape.start.y)}
                                        fill={props.fillColor}
                                        fillOpacity={props.fillOpacity}
                                        stroke={strokeColor}
                                        strokeWidth={isSelected ? props.strokeWidth + 1 : props.strokeWidth}
                                    />
                                    {isSelected && (
                                        <>
                                            <circle 
                                                cx={shape.start.x} cy={shape.start.y} r={6} 
                                                fill="white" stroke="#ef4444" strokeWidth={2} className="cursor-move"
                                                onMouseDown={(e) => handleHandleMouseDown(e, shape.id, 'start')}
                                            />
                                            <circle 
                                                cx={shape.end.x} cy={shape.end.y} r={6} 
                                                fill="white" stroke="#ef4444" strokeWidth={2} className="cursor-move"
                                                onMouseDown={(e) => handleHandleMouseDown(e, shape.id, 'end')}
                                            />
                                        </>
                                    )}
                                </>
                            )}
                            {shape.type === 'circle' && shape.start && shape.end && (
                                <>
                                    <circle 
                                        cx={shape.start.x}
                                        cy={shape.start.y}
                                        r={Math.sqrt(Math.pow(shape.end.x - shape.start.x, 2) + Math.pow(shape.end.y - shape.start.y, 2))}
                                        fill={props.fillColor}
                                        fillOpacity={props.fillOpacity}
                                        stroke={strokeColor}
                                        strokeWidth={isSelected ? props.strokeWidth + 1 : props.strokeWidth}
                                    />
                                    {isSelected && (
                                        <>
                                            <circle 
                                                cx={shape.start.x} cy={shape.start.y} r={4} 
                                                fill="white" stroke="#ef4444" strokeWidth={2} className="cursor-move"
                                                onMouseDown={(e) => handleHandleMouseDown(e, shape.id, 'start')}
                                            />
                                            <circle 
                                                cx={shape.end.x} cy={shape.end.y} r={6} 
                                                fill="white" stroke="#ef4444" strokeWidth={2} className="cursor-move"
                                                onMouseDown={(e) => handleHandleMouseDown(e, shape.id, 'end')}
                                            />
                                            <line x1={shape.start.x} y1={shape.start.y} x2={shape.end.x} y2={shape.end.y} stroke="#ef4444" strokeDasharray="4" />
                                        </>
                                    )}
                                </>
                            )}
                        </g>
                    );
                })}
                
                {/* Current Drawing Shape */}
                {currentShape && (
                    <g>
                        {(currentShape.type === 'polygon' || currentShape.type === 'line') && currentShape.points && (
                            <>
                                <polyline 
                                    points={currentShape.points.map(p => `${p.x},${p.y}`).join(' ')}
                                    fill={currentShape.type === 'polygon' ? "rgba(37, 99, 235, 0.1)" : "none"}
                                    stroke="#2563eb"
                                    strokeWidth="2"
                                    strokeDasharray="5,5"
                                />
                                {currentShape.points.map((p, i) => (
                                    <circle key={i} cx={p.x} cy={p.y} r="3" fill="#2563eb" />
                                ))}
                                {/* Rubber banding line to cursor */}
                                {currentShape.points.length > 0 && mousePos && (
                                    <line
                                        x1={currentShape.points[currentShape.points.length - 1].x}
                                        y1={currentShape.points[currentShape.points.length - 1].y}
                                        x2={mousePos.x}
                                        y2={mousePos.y}
                                        stroke="#2563eb"
                                        strokeWidth="2"
                                        strokeDasharray="5,5"
                                        opacity="0.6"
                                    />
                                )}
                            </>
                        )}
                        {currentShape.type === 'rectangle' && currentShape.start && currentShape.end && (
                            <rect 
                                x={Math.min(currentShape.start.x, currentShape.end.x)}
                                y={Math.min(currentShape.start.y, currentShape.end.y)}
                                width={Math.abs(currentShape.end.x - currentShape.start.x)}
                                height={Math.abs(currentShape.end.y - currentShape.start.y)}
                                fill="rgba(16, 185, 129, 0.2)"
                                stroke="#10b981"
                                strokeWidth="2"
                                strokeDasharray="5,5"
                            />
                        )}
                        {currentShape.type === 'circle' && currentShape.start && currentShape.end && (
                            <circle 
                                cx={currentShape.start.x}
                                cy={currentShape.start.y}
                                r={Math.sqrt(Math.pow(currentShape.end.x - currentShape.start.x, 2) + Math.pow(currentShape.end.y - currentShape.start.y, 2))}
                                fill="rgba(245, 158, 11, 0.2)"
                                stroke="#f59e0b"
                                strokeWidth="2"
                                strokeDasharray="5,5"
                            />
                        )}
                    </g>
                )}
            </svg>

            {/* Assets (Pins) */}
            {filteredAssets.map((asset, index) => {
                const top = 300 + (index * 150);
                const left = 200 + (index * 200);
                
                let colorClass = 'bg-green-500 ring-green-300';
                if (asset.status === 'Critical') colorClass = 'bg-red-500 ring-red-300 animate-pulse';
                if (asset.status === 'Needs Repair') colorClass = 'bg-yellow-500 ring-yellow-300';

                return (
                    <div 
                        key={asset.id}
                        className="absolute cursor-pointer transform -translate-x-1/2 -translate-y-1/2 group z-10"
                        style={{ top, left }}
                        onClick={(e) => { 
                            if (!drawingTool) {
                                e.stopPropagation(); 
                                setSelectedAsset(asset.id); 
                            }
                        }}
                    >
                        <div className={`w-6 h-6 rounded-full border-2 border-white shadow-lg ring-4 ring-opacity-30 transition-all hover:scale-125 ${colorClass} flex items-center justify-center`}>
                             {getAssetIcon(asset.type)}
                        </div>
                        {transform.scale > 0.8 && (
                            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 whitespace-nowrap bg-slate-900/80 backdrop-blur text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                                {asset.id}
                            </div>
                        )}
                    </div>
                )
            })}
        </div>
        
        {/* Overlay Controls (Zoom/Pan Reset) */}
        <div className="absolute bottom-4 right-4 flex flex-col space-y-2">
            <button
                onClick={() => showDemoToast('Locate Me')}
                className="p-2 bg-white rounded-lg shadow-md hover:bg-slate-50 border border-slate-200 text-blue-600"
                title="Locate Me"
            >
                <Navigation className="h-5 w-5" />
            </button>
            <div className="h-2"></div>
            <button 
                onClick={() => handleZoom(0.2)} 
                className="p-2 bg-white rounded-lg shadow-md hover:bg-slate-50 border border-slate-200 text-slate-700"
                title="Zoom In"
            >
                <ZoomIn className="h-5 w-5" />
            </button>
            <button 
                onClick={() => handleZoom(-0.2)}
                className="p-2 bg-white rounded-lg shadow-md hover:bg-slate-50 border border-slate-200 text-slate-700"
                title="Zoom Out"
            >
                <ZoomOut className="h-5 w-5" />
            </button>
            <button 
                onClick={() => setTransform({ x: 0, y: 0, scale: 1 })}
                className="p-2 bg-white rounded-lg shadow-md hover:bg-slate-50 border border-slate-200 text-slate-700"
                title="Reset View"
            >
                <Maximize className="h-5 w-5" />
            </button>
        </div>

        {/* Enhanced Search Overlay */}
        <div className="absolute top-4 left-4 right-16 sm:right-auto sm:w-80">
            <div className="relative shadow-lg">
                <input 
                    type="text" 
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search 'Pipe Critical'..." 
                    className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/95 backdrop-blur shadow-sm"
                />
                <Search className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                {searchTerm && (
                    <button 
                        onClick={() => setSearchTerm('')}
                        className="absolute right-2 top-2.5 text-slate-400 hover:text-slate-600"
                    >
                        <X className="h-4 w-4" />
                    </button>
                )}
            </div>
        </div>
      </div>

      {/* Asset Details Modal */}
      {selectedAsset && selectedAssetData && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm animate-fade-in">
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden border border-slate-200 flex flex-col max-h-[90vh]">
                <div className="p-6 border-b border-slate-100 flex justify-between items-start bg-slate-50">
                    <div>
                        <div className="flex items-center space-x-3 mb-1">
                            <h2 className="text-xl font-bold text-slate-800">{selectedAssetData.id}</h2>
                            <span className={`px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wide border ${
                                selectedAssetData.status === 'Critical' ? 'bg-red-100 text-red-700 border-red-200' : 
                                selectedAssetData.status === 'Needs Repair' ? 'bg-yellow-100 text-yellow-700 border-yellow-200' : 'bg-green-100 text-green-700 border-green-200'
                            }`}>
                                {selectedAssetData.status}
                            </span>
                        </div>
                        <p className="text-sm text-slate-500">{selectedAssetData.type} • Asset Detail View</p>
                    </div>
                    <button 
                        onClick={() => setSelectedAsset(null)}
                        className="p-1 rounded-full hover:bg-slate-200 text-slate-400 hover:text-slate-600 transition-colors"
                    >
                        <X className="h-6 w-6" />
                    </button>
                </div>
                
                <div className="p-6 overflow-y-auto space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                        <div className="bg-slate-50 p-3 rounded-lg border border-slate-100">
                            <div className="flex items-center text-slate-500 text-xs mb-1">
                                <Locate className="h-3 w-3 mr-1" /> Latitude
                            </div>
                            <div className="font-mono text-sm font-medium">{selectedAssetData.lat.toFixed(6)}</div>
                        </div>
                        <div className="bg-slate-50 p-3 rounded-lg border border-slate-100">
                            <div className="flex items-center text-slate-500 text-xs mb-1">
                                <Locate className="h-3 w-3 mr-1" /> Longitude
                            </div>
                            <div className="font-mono text-sm font-medium">{selectedAssetData.lng.toFixed(6)}</div>
                        </div>
                    </div>

                    <div className="space-y-3">
                        <h3 className="font-semibold text-slate-800 flex items-center">
                            <Clock className="h-4 w-4 mr-2 text-slate-400" />
                            Inspection History
                        </h3>
                        <div className="border rounded-lg divide-y divide-slate-100">
                            <div className="p-3 flex justify-between items-center text-sm">
                                <div>
                                    <div className="font-medium text-slate-700">Routine Inspection</div>
                                    <div className="text-xs text-slate-500">{selectedAssetData.lastInspected}</div>
                                </div>
                                <span className="text-green-600 text-xs font-medium bg-green-50 px-2 py-1 rounded">Passed</span>
                            </div>
                            <div className="p-3 flex justify-between items-center text-sm">
                                <div>
                                    <div className="font-medium text-slate-700">Maintenance Check</div>
                                    <div className="text-xs text-slate-500">2023-05-10</div>
                                </div>
                                <span className="text-slate-500 text-xs font-medium bg-slate-100 px-2 py-1 rounded">Archived</span>
                            </div>
                        </div>
                    </div>

                    <div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
                        <h3 className="text-sm font-bold text-blue-900 mb-2">Actions</h3>
                        <div className="flex gap-3">
                            <button 
                                onClick={() => navigateToHistory(selectedAssetData.id)}
                                className="flex-1 bg-white border border-blue-200 text-blue-700 py-2 rounded-lg text-sm font-medium hover:bg-blue-50 shadow-sm"
                            >
                                View Inspection History
                            </button>
                            <button
                                onClick={() => showDemoToast('Create Work Order')}
                                className="flex-1 bg-blue-600 text-white py-2 rounded-lg text-sm font-medium hover:bg-blue-700 shadow-sm"
                            >
                                Create Work Order
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      )}
    </div>
  );
};

export default GISMap;