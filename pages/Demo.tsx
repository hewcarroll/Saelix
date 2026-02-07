import React, { useState } from 'react';
import {
  BarChart3, MapPin, ClipboardCheck, FileText, Calendar,
  Package, PieChart, TrendingUp, Bell, Search, User,
  ChevronDown, AlertTriangle, CheckCircle, Clock, ArrowLeft,
  Filter, Plus, MoreHorizontal, X
} from 'lucide-react';
import { PageView } from '../types';

interface DemoProps {
  setPage: (page: PageView) => void;
}

type DemoModule = 'dashboard' | 'gis-map' | 'inspections' | 'work-orders' | 'scheduling' | 'inventory' | 'reports' | 'analytics';

const DEMO_MODULES: { id: DemoModule; label: string; icon: React.ReactNode }[] = [
  { id: 'dashboard', label: 'Dashboard', icon: <BarChart3 size={18} /> },
  { id: 'gis-map', label: 'GIS Map', icon: <MapPin size={18} /> },
  { id: 'inspections', label: 'Inspections', icon: <ClipboardCheck size={18} /> },
  { id: 'work-orders', label: 'Work Orders', icon: <FileText size={18} /> },
  { id: 'scheduling', label: 'Scheduling', icon: <Calendar size={18} /> },
  { id: 'inventory', label: 'Inventory', icon: <Package size={18} /> },
  { id: 'reports', label: 'Reports', icon: <PieChart size={18} /> },
  { id: 'analytics', label: 'Analytics', icon: <TrendingUp size={18} /> },
];

// Dashboard module
const DashboardModule: React.FC = () => (
  <div className="demo-module-content">
    <div className="demo-stats-row">
      <div className="demo-stat-card">
        <div className="demo-stat-header">
          <span className="demo-stat-label">Total Assets</span>
          <MapPin size={16} className="demo-stat-icon" />
        </div>
        <div className="demo-stat-value">1,247</div>
        <div className="demo-stat-change positive">+23 this month</div>
      </div>
      <div className="demo-stat-card">
        <div className="demo-stat-header">
          <span className="demo-stat-label">Open Work Orders</span>
          <FileText size={16} className="demo-stat-icon" />
        </div>
        <div className="demo-stat-value">38</div>
        <div className="demo-stat-change negative">+5 from last week</div>
      </div>
      <div className="demo-stat-card">
        <div className="demo-stat-header">
          <span className="demo-stat-label">Inspections Due</span>
          <ClipboardCheck size={16} className="demo-stat-icon" />
        </div>
        <div className="demo-stat-value">14</div>
        <div className="demo-stat-change">Next 7 days</div>
      </div>
      <div className="demo-stat-card">
        <div className="demo-stat-header">
          <span className="demo-stat-label">Active Crews</span>
          <User size={16} className="demo-stat-icon" />
        </div>
        <div className="demo-stat-value">12</div>
        <div className="demo-stat-change positive">3 available</div>
      </div>
    </div>

    <div className="demo-panels-row">
      <div className="demo-panel" style={{ flex: 2 }}>
        <div className="demo-panel-header">
          <h3>Recent Activity</h3>
          <button className="demo-link-btn">View All</button>
        </div>
        <div className="demo-activity-list">
          {[
            { icon: <CheckCircle size={16} />, text: 'Work Order #1042 completed — Main St valve replacement', time: '2h ago', type: 'success' },
            { icon: <AlertTriangle size={16} />, text: 'Critical defect found — Pipe segment PS-0892 Grade 5', time: '3h ago', type: 'warning' },
            { icon: <Clock size={16} />, text: 'Inspection scheduled — Zone 4 CCTV survey', time: '4h ago', type: 'info' },
            { icon: <CheckCircle size={16} />, text: 'Crew Alpha completed daily route — 8 inspections', time: '5h ago', type: 'success' },
            { icon: <AlertTriangle size={16} />, text: 'Inventory alert — PVC Pipe 8" below reorder point', time: '6h ago', type: 'warning' },
          ].map((item, i) => (
            <div key={i} className={`demo-activity-item ${item.type}`}>
              <div className="demo-activity-icon">{item.icon}</div>
              <div className="demo-activity-text">{item.text}</div>
              <div className="demo-activity-time">{item.time}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="demo-panel" style={{ flex: 1 }}>
        <div className="demo-panel-header">
          <h3>Alerts</h3>
          <span className="demo-badge">3 New</span>
        </div>
        <div className="demo-alerts-list">
          <div className="demo-alert critical">
            <AlertTriangle size={14} />
            <span>Grade 5 defect — PS-0892</span>
          </div>
          <div className="demo-alert warning">
            <AlertTriangle size={14} />
            <span>Overdue inspection — Zone 7</span>
          </div>
          <div className="demo-alert warning">
            <AlertTriangle size={14} />
            <span>Low inventory — PVC Pipe 8"</span>
          </div>
          <div className="demo-alert info">
            <Bell size={14} />
            <span>Compliance report due Friday</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// GIS Map module
const GISMapModule: React.FC = () => (
  <div className="demo-module-content">
    <div className="demo-map-toolbar">
      <div className="demo-toolbar-group">
        <button className="demo-toolbar-btn active">All Assets</button>
        <button className="demo-toolbar-btn">Pipes</button>
        <button className="demo-toolbar-btn">Manholes</button>
        <button className="demo-toolbar-btn">Valves</button>
      </div>
      <div className="demo-toolbar-group">
        <button className="demo-toolbar-btn"><Filter size={14} /> Filter</button>
        <button className="demo-toolbar-btn"><Search size={14} /> Search</button>
      </div>
    </div>
    <div className="demo-map-container">
      <div className="demo-map-area">
        {/* Simulated map with asset markers */}
        <svg viewBox="0 0 800 400" className="demo-map-svg">
          {/* Grid lines */}
          {Array.from({ length: 9 }).map((_, i) => (
            <line key={`h${i}`} x1="0" y1={i * 50} x2="800" y2={i * 50} stroke="#E5E7EB" strokeWidth="0.5" />
          ))}
          {Array.from({ length: 17 }).map((_, i) => (
            <line key={`v${i}`} x1={i * 50} y1="0" x2={i * 50} y2="400" stroke="#E5E7EB" strokeWidth="0.5" />
          ))}
          {/* Roads */}
          <line x1="100" y1="0" x2="100" y2="400" stroke="#D1D5DB" strokeWidth="8" />
          <line x1="0" y1="200" x2="800" y2="200" stroke="#D1D5DB" strokeWidth="8" />
          <line x1="400" y1="0" x2="400" y2="400" stroke="#D1D5DB" strokeWidth="6" />
          <line x1="0" y1="100" x2="800" y2="100" stroke="#D1D5DB" strokeWidth="4" />
          <line x1="0" y1="300" x2="800" y2="300" stroke="#D1D5DB" strokeWidth="4" />
          {/* Pipe segments */}
          <line x1="120" y1="80" x2="380" y2="80" stroke="#0066CC" strokeWidth="3" opacity="0.7" />
          <line x1="120" y1="180" x2="380" y2="180" stroke="#0066CC" strokeWidth="3" opacity="0.7" />
          <line x1="120" y1="80" x2="120" y2="180" stroke="#0066CC" strokeWidth="3" opacity="0.7" />
          <line x1="420" y1="220" x2="700" y2="220" stroke="#0066CC" strokeWidth="3" opacity="0.7" />
          <line x1="420" y1="280" x2="700" y2="280" stroke="#0066CC" strokeWidth="3" opacity="0.7" />
          <line x1="550" y1="100" x2="550" y2="300" stroke="#EF4444" strokeWidth="3" opacity="0.7" />
          {/* Asset markers — manholes */}
          {[[150, 80], [250, 80], [350, 80], [120, 130], [150, 180], [250, 180], [450, 220], [550, 220], [650, 220], [450, 280], [550, 280], [650, 280]].map(([cx, cy], i) => (
            <circle key={`mh${i}`} cx={cx} cy={cy} r="6" fill="#0066CC" stroke="#fff" strokeWidth="2" />
          ))}
          {/* Critical asset */}
          <circle cx="550" cy="180" r="10" fill="#EF4444" stroke="#fff" strokeWidth="2" />
          <text x="570" y="175" fill="#EF4444" fontSize="10" fontWeight="600">Grade 5</text>
          {/* Valve markers */}
          {[[200, 80], [300, 180], [500, 220], [600, 280]].map(([cx, cy], i) => (
            <rect key={`v${i}`} x={cx - 5} y={cy - 5} width="10" height="10" fill="#10B981" stroke="#fff" strokeWidth="2" transform={`rotate(45, ${cx}, ${cy})`} />
          ))}
        </svg>
        <div className="demo-map-legend">
          <div className="legend-item"><span className="legend-dot" style={{ backgroundColor: '#0066CC' }} /> Manholes</div>
          <div className="legend-item"><span className="legend-dot" style={{ backgroundColor: '#10B981', borderRadius: '0', transform: 'rotate(45deg)' }} /> Valves</div>
          <div className="legend-item"><span className="legend-dot" style={{ backgroundColor: '#EF4444' }} /> Critical</div>
        </div>
      </div>
      <div className="demo-map-sidebar">
        <h4>Asset Details</h4>
        <div className="demo-asset-detail">
          <div className="demo-detail-row">
            <span className="demo-detail-label">ID</span>
            <span className="demo-detail-value">PS-0892</span>
          </div>
          <div className="demo-detail-row">
            <span className="demo-detail-label">Type</span>
            <span className="demo-detail-value">Pipe Segment</span>
          </div>
          <div className="demo-detail-row">
            <span className="demo-detail-label">Material</span>
            <span className="demo-detail-value">VCP 8"</span>
          </div>
          <div className="demo-detail-row">
            <span className="demo-detail-label">Condition</span>
            <span className="demo-detail-value" style={{ color: '#EF4444', fontWeight: 600 }}>Grade 5 — Critical</span>
          </div>
          <div className="demo-detail-row">
            <span className="demo-detail-label">Last Inspected</span>
            <span className="demo-detail-value">2025-01-15</span>
          </div>
          <div className="demo-detail-row">
            <span className="demo-detail-label">Zone</span>
            <span className="demo-detail-value">Zone 4 — Downtown</span>
          </div>
          <button className="btn btn-primary" style={{ width: '100%', marginTop: '1rem', justifyContent: 'center' }}>
            Create Work Order
          </button>
        </div>
      </div>
    </div>
  </div>
);

// Inspections module
const InspectionsModule: React.FC = () => (
  <div className="demo-module-content">
    <div className="demo-table-toolbar">
      <div className="demo-toolbar-group">
        <button className="demo-toolbar-btn"><Plus size={14} /> New Inspection</button>
        <button className="demo-toolbar-btn"><Filter size={14} /> Filter</button>
      </div>
      <div className="demo-search-box">
        <Search size={14} />
        <span>Search inspections...</span>
      </div>
    </div>
    <div className="demo-table">
      <div className="demo-table-header">
        <div className="demo-th" style={{ flex: 1 }}>ID</div>
        <div className="demo-th" style={{ flex: 2 }}>Asset</div>
        <div className="demo-th" style={{ flex: 1.5 }}>Type</div>
        <div className="demo-th" style={{ flex: 1 }}>Grade</div>
        <div className="demo-th" style={{ flex: 1.5 }}>Date</div>
        <div className="demo-th" style={{ flex: 1 }}>Status</div>
        <div className="demo-th" style={{ flex: 0.5 }}></div>
      </div>
      {[
        { id: 'INS-2041', asset: 'PS-0892 Main St', type: 'CCTV', grade: '5', date: '2025-01-15', status: 'Critical' },
        { id: 'INS-2040', asset: 'MH-0445 Oak Ave', type: 'CCTV', grade: '3', date: '2025-01-14', status: 'Review' },
        { id: 'INS-2039', asset: 'PS-0776 Elm Dr', type: 'CCTV', grade: '2', date: '2025-01-14', status: 'Complete' },
        { id: 'INS-2038', asset: 'MH-0312 Pine Rd', type: 'Manhole', grade: '1', date: '2025-01-13', status: 'Complete' },
        { id: 'INS-2037', asset: 'PS-0654 Cedar Ln', type: 'CCTV', grade: '4', date: '2025-01-12', status: 'WO Created' },
        { id: 'INS-2036', asset: 'VL-0089 Maple Ct', type: 'Valve', grade: 'N/A', date: '2025-01-11', status: 'Complete' },
      ].map((row, i) => (
        <div key={i} className="demo-table-row">
          <div className="demo-td" style={{ flex: 1, fontWeight: 500, color: '#0066CC' }}>{row.id}</div>
          <div className="demo-td" style={{ flex: 2 }}>{row.asset}</div>
          <div className="demo-td" style={{ flex: 1.5 }}>{row.type}</div>
          <div className="demo-td" style={{ flex: 1 }}>
            <span className={`demo-grade grade-${row.grade === 'N/A' ? 'na' : row.grade}`}>{row.grade}</span>
          </div>
          <div className="demo-td" style={{ flex: 1.5 }}>{row.date}</div>
          <div className="demo-td" style={{ flex: 1 }}>
            <span className={`demo-status-badge ${row.status.toLowerCase().replace(' ', '-')}`}>{row.status}</span>
          </div>
          <div className="demo-td" style={{ flex: 0.5 }}>
            <MoreHorizontal size={16} style={{ color: '#9CA3AF', cursor: 'pointer' }} />
          </div>
        </div>
      ))}
    </div>
  </div>
);

// Work Orders module
const WorkOrdersModule: React.FC = () => (
  <div className="demo-module-content">
    <div className="demo-table-toolbar">
      <div className="demo-toolbar-group">
        <button className="demo-toolbar-btn"><Plus size={14} /> New Work Order</button>
        <button className="demo-toolbar-btn"><Filter size={14} /> Filter</button>
      </div>
      <div className="demo-toolbar-group">
        <button className="demo-toolbar-btn active">All</button>
        <button className="demo-toolbar-btn">Open</button>
        <button className="demo-toolbar-btn">In Progress</button>
        <button className="demo-toolbar-btn">Complete</button>
      </div>
    </div>
    <div className="demo-table">
      <div className="demo-table-header">
        <div className="demo-th" style={{ flex: 1 }}>WO #</div>
        <div className="demo-th" style={{ flex: 2 }}>Description</div>
        <div className="demo-th" style={{ flex: 1 }}>Priority</div>
        <div className="demo-th" style={{ flex: 1.5 }}>Assigned Crew</div>
        <div className="demo-th" style={{ flex: 1 }}>Due Date</div>
        <div className="demo-th" style={{ flex: 1 }}>Status</div>
      </div>
      {[
        { id: 'WO-1043', desc: 'Emergency repair — PS-0892 Grade 5 defect', priority: 'Critical', crew: 'Crew Alpha', due: '2025-01-20', status: 'Open' },
        { id: 'WO-1042', desc: 'Valve replacement — Main St & 5th Ave', priority: 'High', crew: 'Crew Beta', due: '2025-01-18', status: 'Complete' },
        { id: 'WO-1041', desc: 'Manhole rehab — MH-0445 Oak Ave', priority: 'Medium', crew: 'Crew Gamma', due: '2025-01-22', status: 'In Progress' },
        { id: 'WO-1040', desc: 'Lateral lining — Cedar Ln block 200', priority: 'Medium', crew: 'Crew Alpha', due: '2025-01-25', status: 'Scheduled' },
        { id: 'WO-1039', desc: 'Root removal — PS-0654 Cedar Ln', priority: 'Low', crew: 'Unassigned', due: '2025-01-30', status: 'Open' },
      ].map((row, i) => (
        <div key={i} className="demo-table-row">
          <div className="demo-td" style={{ flex: 1, fontWeight: 500, color: '#0066CC' }}>{row.id}</div>
          <div className="demo-td" style={{ flex: 2 }}>{row.desc}</div>
          <div className="demo-td" style={{ flex: 1 }}>
            <span className={`demo-priority ${row.priority.toLowerCase()}`}>{row.priority}</span>
          </div>
          <div className="demo-td" style={{ flex: 1.5 }}>{row.crew}</div>
          <div className="demo-td" style={{ flex: 1 }}>{row.due}</div>
          <div className="demo-td" style={{ flex: 1 }}>
            <span className={`demo-status-badge ${row.status.toLowerCase().replace(' ', '-')}`}>{row.status}</span>
          </div>
        </div>
      ))}
    </div>
  </div>
);

// Scheduling module
const SchedulingModule: React.FC = () => {
  const days = ['Mon 1/20', 'Tue 1/21', 'Wed 1/22', 'Thu 1/23', 'Fri 1/24'];
  const crews = [
    { name: 'Crew Alpha', slots: ['WO-1043', 'WO-1043', 'WO-1040', 'WO-1040', 'Available'] },
    { name: 'Crew Beta', slots: ['Available', 'INS Zone 4', 'INS Zone 4', 'INS Zone 5', 'INS Zone 5'] },
    { name: 'Crew Gamma', slots: ['WO-1041', 'WO-1041', 'WO-1041', 'Available', 'Available'] },
    { name: 'Crew Delta', slots: ['Training', 'INS Zone 2', 'INS Zone 2', 'INS Zone 3', 'INS Zone 3'] },
  ];

  return (
    <div className="demo-module-content">
      <div className="demo-table-toolbar">
        <div className="demo-toolbar-group">
          <button className="demo-toolbar-btn">Week of Jan 20, 2025</button>
          <button className="demo-toolbar-btn"><ChevronDown size={14} /></button>
        </div>
        <div className="demo-toolbar-group">
          <button className="demo-toolbar-btn"><Plus size={14} /> Assign Crew</button>
        </div>
      </div>
      <div className="demo-schedule-grid">
        <div className="demo-schedule-header">
          <div className="demo-schedule-label">Crew</div>
          {days.map((d, i) => <div key={i} className="demo-schedule-day">{d}</div>)}
        </div>
        {crews.map((crew, ci) => (
          <div key={ci} className="demo-schedule-row">
            <div className="demo-schedule-crew">{crew.name}</div>
            {crew.slots.map((slot, si) => (
              <div key={si} className={`demo-schedule-slot ${slot === 'Available' ? 'available' : slot === 'Training' ? 'training' : slot.startsWith('INS') ? 'inspection' : 'work-order'}`}>
                {slot}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

// Inventory module
const InventoryModule: React.FC = () => (
  <div className="demo-module-content">
    <div className="demo-table-toolbar">
      <div className="demo-toolbar-group">
        <button className="demo-toolbar-btn"><Plus size={14} /> Add Item</button>
        <button className="demo-toolbar-btn"><Filter size={14} /> Filter</button>
      </div>
      <div className="demo-search-box">
        <Search size={14} />
        <span>Search inventory...</span>
      </div>
    </div>
    <div className="demo-table">
      <div className="demo-table-header">
        <div className="demo-th" style={{ flex: 2 }}>Item</div>
        <div className="demo-th" style={{ flex: 1 }}>Category</div>
        <div className="demo-th" style={{ flex: 1 }}>In Stock</div>
        <div className="demo-th" style={{ flex: 1 }}>Reorder Point</div>
        <div className="demo-th" style={{ flex: 1 }}>Status</div>
      </div>
      {[
        { item: 'PVC Pipe 8"', cat: 'Pipe', stock: 12, reorder: 25, status: 'Low' },
        { item: 'PVC Pipe 12"', cat: 'Pipe', stock: 45, reorder: 20, status: 'OK' },
        { item: 'Manhole Cover — Standard', cat: 'Covers', stock: 8, reorder: 5, status: 'OK' },
        { item: 'Gate Valve 8"', cat: 'Valves', stock: 3, reorder: 5, status: 'Low' },
        { item: 'CCTV Camera Head', cat: 'Equipment', stock: 4, reorder: 2, status: 'OK' },
        { item: 'Lateral Liner Kit', cat: 'Rehab', stock: 18, reorder: 10, status: 'OK' },
      ].map((row, i) => (
        <div key={i} className="demo-table-row">
          <div className="demo-td" style={{ flex: 2, fontWeight: 500 }}>{row.item}</div>
          <div className="demo-td" style={{ flex: 1 }}>{row.cat}</div>
          <div className="demo-td" style={{ flex: 1 }}>{row.stock}</div>
          <div className="demo-td" style={{ flex: 1 }}>{row.reorder}</div>
          <div className="demo-td" style={{ flex: 1 }}>
            <span className={`demo-status-badge ${row.status.toLowerCase()}`}>{row.status}</span>
          </div>
        </div>
      ))}
    </div>
  </div>
);

// Reports module
const ReportsModule: React.FC = () => (
  <div className="demo-module-content">
    <div className="demo-reports-grid">
      {[
        { title: 'Monthly Inspection Summary', desc: 'Inspection counts, defect grades, and completion rates', date: 'Jan 2025', type: 'Inspection' },
        { title: 'Work Order Performance', desc: 'Average completion time, crew efficiency, backlog metrics', date: 'Jan 2025', type: 'Operations' },
        { title: 'NASSCO Compliance Report', desc: 'Coding standards compliance and defect classification', date: 'Q4 2024', type: 'Compliance' },
        { title: 'Asset Condition Summary', desc: 'Infrastructure condition ratings by zone and material', date: 'Jan 2025', type: 'Assets' },
        { title: 'Crew Utilization Report', desc: 'Crew hours, downtime, and productivity metrics', date: 'Jan 2025', type: 'Operations' },
        { title: 'Inventory Usage Report', desc: 'Materials consumed, reorder alerts, cost tracking', date: 'Jan 2025', type: 'Inventory' },
      ].map((report, i) => (
        <div key={i} className="demo-report-card">
          <div className="demo-report-type">{report.type}</div>
          <h4 className="demo-report-title">{report.title}</h4>
          <p className="demo-report-desc">{report.desc}</p>
          <div className="demo-report-footer">
            <span>{report.date}</span>
            <button className="demo-link-btn">View Report</button>
          </div>
        </div>
      ))}
    </div>
  </div>
);

// Analytics module
const AnalyticsModule: React.FC = () => (
  <div className="demo-module-content">
    <div className="demo-stats-row">
      <div className="demo-stat-card">
        <div className="demo-stat-header">
          <span className="demo-stat-label">Avg. Repair Time</span>
        </div>
        <div className="demo-stat-value">3.2 days</div>
        <div className="demo-stat-change positive">-1.1 days vs. last quarter</div>
      </div>
      <div className="demo-stat-card">
        <div className="demo-stat-header">
          <span className="demo-stat-label">Crew Utilization</span>
        </div>
        <div className="demo-stat-value">87%</div>
        <div className="demo-stat-change positive">+5% vs. last month</div>
      </div>
      <div className="demo-stat-card">
        <div className="demo-stat-header">
          <span className="demo-stat-label">Compliance Rate</span>
        </div>
        <div className="demo-stat-value">98.5%</div>
        <div className="demo-stat-change positive">On target</div>
      </div>
    </div>
    <div className="demo-panels-row">
      <div className="demo-panel" style={{ flex: 1 }}>
        <div className="demo-panel-header">
          <h3>Defect Distribution</h3>
        </div>
        <div className="demo-chart-placeholder">
          <div className="demo-bar-chart">
            {[
              { label: 'Grade 1', value: 45, color: '#10B981' },
              { label: 'Grade 2', value: 30, color: '#22C55E' },
              { label: 'Grade 3', value: 18, color: '#F59E0B' },
              { label: 'Grade 4', value: 8, color: '#F97316' },
              { label: 'Grade 5', value: 3, color: '#EF4444' },
            ].map((bar, i) => (
              <div key={i} className="demo-bar-item">
                <div className="demo-bar" style={{ height: `${bar.value * 2}px`, backgroundColor: bar.color }} />
                <span className="demo-bar-label">{bar.label}</span>
                <span className="demo-bar-value">{bar.value}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="demo-panel" style={{ flex: 1 }}>
        <div className="demo-panel-header">
          <h3>Monthly Trends</h3>
        </div>
        <div className="demo-chart-placeholder">
          <div className="demo-line-chart">
            <svg viewBox="0 0 300 120" className="demo-line-svg">
              <polyline
                points="10,100 60,80 110,85 160,60 210,45 260,30 290,25"
                fill="none"
                stroke="#0066CC"
                strokeWidth="2"
              />
              <polyline
                points="10,90 60,85 110,70 160,65 210,55 260,50 290,45"
                fill="none"
                stroke="#10B981"
                strokeWidth="2"
                strokeDasharray="4,4"
              />
              {['Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan'].map((m, i) => (
                <text key={i} x={10 + i * 46.7} y="115" fill="#9CA3AF" fontSize="8" textAnchor="middle">{m}</text>
              ))}
            </svg>
            <div className="demo-chart-legend">
              <span><span style={{ color: '#0066CC' }}>---</span> Inspections Completed</span>
              <span><span style={{ color: '#10B981' }}>- - -</span> Work Orders Closed</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const MODULE_COMPONENTS: Record<DemoModule, React.FC> = {
  'dashboard': DashboardModule,
  'gis-map': GISMapModule,
  'inspections': InspectionsModule,
  'work-orders': WorkOrdersModule,
  'scheduling': SchedulingModule,
  'inventory': InventoryModule,
  'reports': ReportsModule,
  'analytics': AnalyticsModule,
};

const Demo: React.FC<DemoProps> = ({ setPage }) => {
  const [activeModule, setActiveModule] = useState<DemoModule>('dashboard');
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const ActiveComponent = MODULE_COMPONENTS[activeModule];

  return (
    <div className="demo-app">
      {/* Demo banner */}
      <div className="demo-banner">
        <button className="demo-back-btn" onClick={() => setPage('home')}>
          <ArrowLeft size={16} />
          Back to Saelix
        </button>
        <span className="demo-banner-label">Interactive Demo — Saelix Slate v1.0</span>
        <button className="demo-back-btn" onClick={() => setPage('saelix-slate')}>
          Learn More
        </button>
      </div>

      <div className="demo-layout">
        {/* Sidebar */}
        <aside className={`demo-sidebar ${sidebarCollapsed ? 'collapsed' : ''}`}>
          <div className="demo-sidebar-header">
            <span className="demo-sidebar-logo">Saelix Slate</span>
            <button className="demo-collapse-btn" onClick={() => setSidebarCollapsed(!sidebarCollapsed)}>
              {sidebarCollapsed ? <ChevronDown size={16} style={{ transform: 'rotate(-90deg)' }} /> : <X size={16} />}
            </button>
          </div>
          <nav className="demo-sidebar-nav">
            {DEMO_MODULES.map((mod) => (
              <button
                key={mod.id}
                className={`demo-sidebar-item ${activeModule === mod.id ? 'active' : ''}`}
                onClick={() => setActiveModule(mod.id)}
              >
                {mod.icon}
                {!sidebarCollapsed && <span>{mod.label}</span>}
              </button>
            ))}
          </nav>
        </aside>

        {/* Main content */}
        <main className="demo-main">
          {/* Top bar */}
          <div className="demo-topbar">
            <h2 className="demo-page-title">
              {DEMO_MODULES.find(m => m.id === activeModule)?.label}
            </h2>
            <div className="demo-topbar-actions">
              <div className="demo-search-box">
                <Search size={14} />
                <span>Search...</span>
              </div>
              <button className="demo-icon-btn"><Bell size={18} /></button>
              <div className="demo-user-avatar">
                <User size={16} />
              </div>
            </div>
          </div>

          {/* Module content */}
          <div className="demo-content-area">
            <ActiveComponent />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Demo;
