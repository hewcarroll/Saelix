import React, { useState } from 'react';
import { FileText, Download, Calendar, BarChart, CheckSquare } from 'lucide-react';
import { useDemoToast } from '../components/DemoToast';

const ReportBuilder: React.FC = () => {
  const { showDemoToast } = useDemoToast();

  // Static display state (not interactive)
  const reportType = 'summary';
  const selectedModules = {
      inspections: true,
      workOrders: false,
      inventory: false,
      assets: false
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-slate-800">Custom Report Builder</h1>
        <p className="text-slate-500 mt-1">Generate detailed PDF or CSV reports based on specific data modules.</p>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 md:p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

              {/* Configuration Section */}
              <div className="space-y-6">
                  <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Report Type</label>
                      <select
                        value={reportType}
                        onChange={() => showDemoToast('Report type')}
                        className="w-full border-slate-300 rounded-lg shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2.5 border"
                      >
                          <option value="summary">Executive Summary</option>
                          <option value="compliance">Compliance & Regulatory</option>
                          <option value="maintenance">Maintenance Logs</option>
                          <option value="inventory">Inventory Audit</option>
                      </select>
                  </div>

                  <div>
                      <label className="block text-sm font-medium text-slate-700 mb-3">Include Data Modules</label>
                      <div className="space-y-3">
                          <label className="flex items-center space-x-3 cursor-pointer">
                              <input
                                type="checkbox"
                                checked={selectedModules.inspections}
                                onChange={() => showDemoToast('Module selection')}
                                className="h-4 w-4 text-blue-600 rounded border-slate-300 focus:ring-blue-500"
                              />
                              <span className="text-slate-700">Inspection Results (POSM/Envirosight)</span>
                          </label>
                          <label className="flex items-center space-x-3 cursor-pointer">
                              <input
                                type="checkbox"
                                checked={selectedModules.workOrders}
                                onChange={() => showDemoToast('Module selection')}
                                className="h-4 w-4 text-blue-600 rounded border-slate-300 focus:ring-blue-500"
                              />
                              <span className="text-slate-700">Work Order History & Costs</span>
                          </label>
                          <label className="flex items-center space-x-3 cursor-pointer">
                              <input
                                type="checkbox"
                                checked={selectedModules.assets}
                                onChange={() => showDemoToast('Module selection')}
                                className="h-4 w-4 text-blue-600 rounded border-slate-300 focus:ring-blue-500"
                              />
                              <span className="text-slate-700">Asset Condition Status</span>
                          </label>
                          <label className="flex items-center space-x-3 cursor-pointer">
                              <input
                                type="checkbox"
                                checked={selectedModules.inventory}
                                onChange={() => showDemoToast('Module selection')}
                                className="h-4 w-4 text-blue-600 rounded border-slate-300 focus:ring-blue-500"
                              />
                              <span className="text-slate-700">Material Usage & Inventory</span>
                          </label>
                      </div>
                  </div>

                  <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Date Range</label>
                      <div className="flex items-center space-x-2 border border-slate-300 rounded-lg p-2.5 bg-slate-50">
                          <Calendar className="h-5 w-5 text-slate-400" />
                          <span className="text-slate-600 text-sm">Last 30 Days</span>
                      </div>
                  </div>

                  <button
                    onClick={() => showDemoToast('Generate Report')}
                    className="w-full bg-blue-600 text-white font-medium py-3 rounded-lg hover:bg-blue-700 transition-colors shadow-sm flex justify-center items-center"
                  >
                      <BarChart className="h-5 w-5 mr-2" />
                      Generate Report
                  </button>
              </div>

              {/* Preview / Result Section */}
              <div className="bg-slate-50 rounded-xl border border-slate-200 p-6 flex flex-col justify-center items-center text-center">
                  <div className="text-slate-400">
                      <FileText className="h-16 w-16 mx-auto mb-4 opacity-20" />
                      <p>Select parameters and click Generate to create a preview.</p>
                  </div>
              </div>
          </div>
      </div>
    </div>
  );
};

export default ReportBuilder;
