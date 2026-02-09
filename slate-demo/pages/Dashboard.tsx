import React from 'react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, LineChart, Line } from 'recharts';
import { ArrowUpRight, ArrowDownRight, Activity, AlertTriangle, CheckCircle } from 'lucide-react';
import { MOCK_DASHBOARD_METRICS } from '../constants';

const Dashboard: React.FC = () => {
  const metrics = MOCK_DASHBOARD_METRICS;

  const data = [
    { name: 'Mon', Defects: 4, Repairs: 2 },
    { name: 'Tue', Defects: 3, Repairs: 1 },
    { name: 'Wed', Defects: 2, Repairs: 3 },
    { name: 'Thu', Defects: 6, Repairs: 4 },
    { name: 'Fri', Defects: 8, Repairs: 5 },
    { name: 'Sat', Defects: 1, Repairs: 1 },
    { name: 'Sun', Defects: 0, Repairs: 0 },
  ];

  const complianceData = [
    { name: 'Wk 1', Score: 92 },
    { name: 'Wk 2', Score: 94 },
    { name: 'Wk 3', Score: 89 },
    { name: 'Wk 4', Score: 96 },
  ];
  const criticalOrders = metrics.critical_work_orders;
  const completedInspections = metrics.completed_inspections;

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-slate-800">Operational Overview</h1>
        <div className="text-sm text-slate-500">Sample Data</div>
      </div>

      {/* Stat Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-medium text-slate-500">Critical Work Orders</p>
              <h3 className="text-2xl font-bold text-slate-900 mt-1">{criticalOrders}</h3>
            </div>
            <div className="p-2 bg-red-50 rounded-lg">
              <AlertTriangle className="h-5 w-5 text-red-500" />
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm text-red-600">
            <ArrowUpRight className="h-4 w-4 mr-1" />
            <span>12% increase</span>
            <span className="text-slate-400 ml-2">vs last week</span>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-medium text-slate-500">Inspections Done</p>
              <h3 className="text-2xl font-bold text-slate-900 mt-1">{completedInspections}</h3>
            </div>
            <div className="p-2 bg-green-50 rounded-lg">
              <CheckCircle className="h-5 w-5 text-green-500" />
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm text-green-600">
            <ArrowUpRight className="h-4 w-4 mr-1" />
            <span>8% increase</span>
            <span className="text-slate-400 ml-2">vs last week</span>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-medium text-slate-500">System Health</p>
              <h3 className="text-2xl font-bold text-slate-900 mt-1">98.5%</h3>
            </div>
            <div className="p-2 bg-blue-50 rounded-lg">
              <Activity className="h-5 w-5 text-blue-500" />
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm text-slate-500">
            <span>Uptime consistent</span>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-medium text-slate-500">Compliance Score</p>
              <h3 className="text-2xl font-bold text-slate-900 mt-1">96/100</h3>
            </div>
            <div className="p-2 bg-purple-50 rounded-lg">
              <ClipboardListIcon className="h-5 w-5 text-purple-500" />
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm text-green-600">
            <ArrowUpRight className="h-4 w-4 mr-1" />
            <span>2 points</span>
            <span className="text-slate-400 ml-2">vs last month</span>
          </div>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
          <h3 className="text-lg font-semibold text-slate-800 mb-4">Defects vs Repairs (Weekly)</h3>
          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#64748b'}} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#64748b'}} />
                <Tooltip cursor={{fill: '#f1f5f9'}} contentStyle={{borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'}} />
                <Legend iconType="circle" />
                <Bar dataKey="Defects" fill="#ef4444" radius={[4, 4, 0, 0]} barSize={32} />
                <Bar dataKey="Repairs" fill="#3b82f6" radius={[4, 4, 0, 0]} barSize={32} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
          <div className="flex justify-between items-center mb-4">
             <h3 className="text-lg font-semibold text-slate-800">Regulatory Compliance Trend (EPA)</h3>
             <span className="text-xs bg-emerald-100 text-emerald-800 px-2 py-1 rounded-full font-medium">FDEP Compliant</span>
          </div>
          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={complianceData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#64748b'}} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#64748b'}} domain={[80, 100]} />
                <Tooltip contentStyle={{borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'}} />
                <Line type="monotone" dataKey="Score" stroke="#8b5cf6" strokeWidth={3} dot={{r: 4, fill: '#8b5cf6', strokeWidth: 2, stroke: '#fff'}} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

const ClipboardListIcon = ({ className }: { className: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
  </svg>
);

export default Dashboard;