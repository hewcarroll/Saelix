import React, { useEffect, useState, useMemo } from 'react';
import { Download, Eye, Database, Search, X } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import { Status, InspectionSource, Inspection } from '../types';
import { MOCK_INSPECTIONS } from '../constants';
import { useDemoToast } from '../components/DemoToast';

const Inspections: React.FC = () => {
  const location = useLocation();
  const [filterSource, setFilterSource] = useState<string>('All');
  const [searchTerm, setSearchTerm] = useState('');
  const { showDemoToast } = useDemoToast();

  useEffect(() => {
    if (location.state?.filterAssetId) {
        setSearchTerm(location.state.filterAssetId);
    }
  }, [location.state]);

  const inspections = useMemo(() => {
    return MOCK_INSPECTIONS.filter(insp => {
      const matchesSource = filterSource === 'All' || insp.source === filterSource;
      const matchesSearch = !searchTerm ||
        insp.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
        insp.locationId.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesSource && matchesSearch;
    });
  }, [filterSource, searchTerm]);

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
        <div>
           <h1 className="text-2xl font-bold text-slate-800">Inspection Reports</h1>
           <p className="text-slate-500 mt-1">Integrated data from POSM, Envirosight, and field uploads.</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="relative">
              <input
                  type="text"
                  placeholder="Search ID or Location..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-9 pr-8 py-2 border border-slate-300 rounded-lg text-sm focus:ring-blue-500 focus:border-blue-500 w-full sm:w-64"
              />
              <Search className="w-4 h-4 absolute left-3 top-2.5 text-slate-400" />
              {searchTerm && (
                  <button
                    onClick={() => setSearchTerm('')}
                    className="absolute right-2 top-2 text-slate-400 hover:text-slate-600"
                  >
                      <X className="h-4 w-4" />
                  </button>
              )}
          </div>

          <select
            className="bg-white border border-slate-300 text-slate-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2"
            value={filterSource}
            onChange={(e) => setFilterSource(e.target.value)}
          >
            <option value="All">All Sources</option>
            <option value={InspectionSource.POSM}>POSM</option>
            <option value={InspectionSource.ENVIROSIGHT}>Envirosight</option>
            <option value={InspectionSource.MANUAL}>Manual Upload</option>
          </select>

          <button
            onClick={() => showDemoToast('Export')}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center justify-center shadow-sm"
          >
            <Download className="w-4 h-4 mr-2" />
            Export
          </button>
        </div>
      </div>

      <div className="bg-white shadow-sm rounded-xl border border-slate-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left text-slate-500">
            <thead className="text-xs text-slate-700 uppercase bg-slate-50 border-b border-slate-200">
              <tr>
                <th scope="col" className="px-6 py-4">ID / Location</th>
                <th scope="col" className="px-6 py-4">Source System</th>
                <th scope="col" className="px-6 py-4">Date</th>
                <th scope="col" className="px-6 py-4">Status</th>
                <th scope="col" className="px-6 py-4">Defects</th>
                <th scope="col" className="px-6 py-4">Operator</th>
                <th scope="col" className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {inspections.map((inspection) => (
                <tr key={inspection.id} className="bg-white border-b border-slate-100 hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-3">
                        <img className="w-10 h-10 rounded object-cover" src={inspection.thumbnail} alt="thumb" />
                        <div>
                            <div className="font-medium text-slate-900">{inspection.id}</div>
                            <div className="text-xs text-slate-500">{inspection.locationId}</div>
                        </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                        <Database className="w-3 h-3 mr-1.5 text-slate-400" />
                        <span className="font-medium">{inspection.source}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">{inspection.date}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2.5 py-1 rounded-full text-xs font-medium border ${
                        inspection.status === Status.COMPLETED ? 'bg-green-50 text-green-700 border-green-200' :
                        inspection.status === Status.FLAGGED ? 'bg-red-50 text-red-700 border-red-200' :
                        inspection.status === Status.IN_PROGRESS ? 'bg-blue-50 text-blue-700 border-blue-200' :
                        'bg-slate-100 text-slate-600 border-slate-200'
                    }`}>
                      {inspection.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                     {inspection.defectsFound > 0 ? (
                         <span className="text-red-600 font-semibold">{inspection.defectsFound} Detected</span>
                     ) : (
                         <span className="text-slate-400">None</span>
                     )}
                  </td>
                  <td className="px-6 py-4">{inspection.operator}</td>
                  <td className="px-6 py-4 text-right">
                    <button
                      onClick={() => showDemoToast('View Report')}
                      className="text-blue-600 hover:text-blue-900 font-medium text-sm flex items-center justify-end ml-auto"
                    >
                        <Eye className="w-4 h-4 mr-1" /> View Report
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {inspections.length === 0 && (
            <div className="p-12 text-center text-slate-400">
                <Search className="h-10 w-10 mx-auto mb-3 opacity-20" />
                <p>No inspections found matching your criteria.</p>
                {searchTerm && (
                    <button onClick={() => setSearchTerm('')} className="text-blue-600 hover:underline mt-2 text-sm">
                        Clear Search
                    </button>
                )}
            </div>
        )}
      </div>
    </div>
  );
};

export default Inspections;
