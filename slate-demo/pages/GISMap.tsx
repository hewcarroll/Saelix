import React, { useState, useRef, useEffect } from 'react';
import { Locate, Filter, Search, X, Square, Circle as CircleIcon, Hexagon, Trash2, Clock, Upload, Save, Map as MapIcon, Minus, MousePointer2, Download, FolderOpen } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { MOCK_ASSETS } from '../constants';
import { useDemoToast } from '../components/DemoToast';

declare const L: any;

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

  // Leaflet map refs
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const leafletMapRef = useRef<any>(null);
  const markersRef = useRef<Record<string, any>>({});

  // --- Filtering & Searching Logic ---
  const toggleFilterType = (type: string) => {
    setFilterTypes(prev =>
      prev.includes(type) ? prev.filter(t => t !== type) : [...prev, type]
    );
  };

  const filteredAssets = MOCK_ASSETS.filter(asset => {
    const matchesType = filterTypes.includes(asset.type);
    const matchesStatus = statusFilter === 'All' || asset.status === statusFilter;

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

  const navigateToHistory = (assetId: string, locationId?: string) => {
    navigate('/inspections', { state: { filterAssetId: locationId || assetId } });
  };

  const getStatusColor = (status: string): string => {
    switch (status) {
      case 'Critical': return '#ef4444';
      case 'Needs Repair': return '#f59e0b';
      default: return '#22c55e';
    }
  };

  // Initialize Leaflet map
  useEffect(() => {
    if (!mapContainerRef.current || leafletMapRef.current) return;

    const map = L.map(mapContainerRef.current, {
      center: [34.0524, -118.2437],
      zoom: 16,
      zoomControl: true,
    });

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      maxZoom: 19,
    }).addTo(map);

    // Add markers for each asset
    MOCK_ASSETS.forEach(asset => {
      const color = getStatusColor(asset.status);
      const marker = L.circleMarker([asset.lat, asset.lng], {
        radius: 10,
        fillColor: color,
        color: '#ffffff',
        weight: 2,
        opacity: 1,
        fillOpacity: 0.9,
      }).addTo(map);

      marker.bindTooltip(`${asset.id} — ${asset.name}`, {
        direction: 'top',
        offset: [0, -10],
      });

      marker.on('click', () => {
        setSelectedAsset(asset.id);
      });

      markersRef.current[asset.id] = marker;
    });

    leafletMapRef.current = map;

    // Fix tile rendering after container becomes visible
    setTimeout(() => map.invalidateSize(), 100);

    return () => {
      map.remove();
      leafletMapRef.current = null;
      markersRef.current = {};
    };
  }, []);

  // Sync marker visibility with filters
  useEffect(() => {
    const map = leafletMapRef.current;
    if (!map) return;

    const filteredIds = new Set(filteredAssets.map(a => a.id));

    Object.entries(markersRef.current).forEach(([id, marker]) => {
      if (filteredIds.has(id)) {
        if (!map.hasLayer(marker)) marker.addTo(map);
      } else {
        if (map.hasLayer(marker)) marker.remove();
      }
    });
  }, [filteredAssets]);

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
              className="p-2 rounded bg-blue-100 text-blue-600"
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
                    <p className="text-xs text-slate-400 text-center py-2">No saved sets</p>
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
                    <p className="text-xs text-slate-400 text-center py-2">No saved views</p>
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

      {/* Map Viewport */}
      <div className="flex-1 relative rounded-xl overflow-hidden border border-slate-200 shadow-inner">
        {/* Leaflet Map Container */}
        <div ref={mapContainerRef} className="absolute inset-0 z-0" />

        {/* Search Overlay */}
        <div className="absolute top-4 left-4 right-16 sm:right-auto sm:w-80 z-[1000]">
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
