import { Role, InspectionSource, Status, Urgency, Inspection, WorkOrder, Asset, Employee, InventoryItem, Task, Notification, RoleDefinition, Permission } from './types';

export const DEMO_MODE = true;

export const MOCK_DASHBOARD_METRICS = {
  critical_work_orders: 3,
  completed_inspections: 47
};

export const ALL_PERMISSIONS: { id: Permission; label: string; group: string }[] = [
  { id: 'dashboard.view', label: 'View Dashboard', group: 'General' },
  { id: 'map.view', label: 'View GIS Map', group: 'Map' },
  { id: 'map.edit', label: 'Edit Map Data (Draw/Snap)', group: 'Map' },
  { id: 'inspections.view', label: 'View Inspections', group: 'Inspections' },
  { id: 'inspections.edit', label: 'Manage Inspections', group: 'Inspections' },
  { id: 'work_orders.view', label: 'View Work Orders', group: 'Work Orders' },
  { id: 'work_orders.edit', label: 'Manage Work Orders', group: 'Work Orders' },
  { id: 'reports.view', label: 'Generate Reports', group: 'Reports' },
  { id: 'scheduling.view', label: 'View Schedule', group: 'Scheduling' },
  { id: 'inventory.view', label: 'View Inventory', group: 'Inventory' },
  { id: 'inventory.edit', label: 'Manage Inventory', group: 'Inventory' },
  { id: 'analytics.view', label: 'View Analytics', group: 'Analytics' },
  { id: 'settings.view', label: 'View Settings', group: 'Settings' },
  { id: 'settings.manage', label: 'Manage System Settings', group: 'Settings' },
];

export const DEFAULT_ROLES: RoleDefinition[] = [
  {
    id: Role.ADMIN,
    name: 'Administrator',
    description: 'Full system access with ability to manage configuration.',
    permissions: ALL_PERMISSIONS.map(p => p.id),
    isSystem: true
  },
  {
    id: Role.OPERATOR,
    name: 'Operator',
    description: 'Field staff focused on execution and data entry.',
    permissions: [
      'dashboard.view',
      'map.view',
      'map.edit',
      'inspections.view',
      'inspections.edit',
      'work_orders.view',
      'work_orders.edit',
      'inventory.view',
      'inventory.edit'
    ],
    isSystem: true
  },
  {
    id: Role.QA_REVIEWER,
    name: 'QA Reviewer',
    description: 'Validates inspection data and reports.',
    permissions: [
      'dashboard.view',
      'map.view',
      'inspections.view',
      'inspections.edit',
      'reports.view',
      'analytics.view'
    ],
    isSystem: true
  },
  {
    id: Role.CLIENT_VIEWER,
    name: 'Client Viewer',
    description: 'Read-only access for external stakeholders.',
    permissions: [
      'dashboard.view',
      'map.view',
      'inspections.view',
      'work_orders.view',
      'reports.view'
    ],
    isSystem: true
  }
];

export const MOCK_INSPECTIONS: Inspection[] = [
  {
    id: 'INS-2023-001',
    locationId: 'MH-102 to MH-103',
    date: '2023-10-24',
    source: InspectionSource.POSM,
    status: Status.COMPLETED,
    operator: 'J. Smith',
    defectsFound: 3,
    reportUrl: '#',
    thumbnail: 'https://picsum.photos/200/200?random=1'
  },
  {
    id: 'INS-2023-002',
    locationId: 'MH-105 Lateral A',
    date: '2023-10-25',
    source: InspectionSource.ENVIROSIGHT,
    status: Status.FLAGGED,
    operator: 'M. Doe',
    defectsFound: 1,
    reportUrl: '#',
    thumbnail: 'https://picsum.photos/200/200?random=2'
  },
  {
    id: 'INS-2023-003',
    locationId: 'MH-200 to MH-201',
    date: '2023-10-26',
    source: InspectionSource.POSM,
    status: Status.IN_PROGRESS,
    operator: 'A. Johnson',
    defectsFound: 0,
    reportUrl: '#',
    thumbnail: 'https://picsum.photos/200/200?random=3'
  },
  {
    id: 'INS-2023-004',
    locationId: 'Main St. Collector',
    date: '2023-10-26',
    source: InspectionSource.ENVIROSIGHT,
    status: Status.COMPLETED,
    operator: 'B. Williams',
    defectsFound: 5,
    reportUrl: '#',
    thumbnail: 'https://picsum.photos/200/200?random=4'
  }
];

export const MOCK_WORK_ORDERS: WorkOrder[] = [
  {
    id: 'WO-8821',
    title: 'Root Cutting - Sector 4',
    description: 'Heavy root intrusion detected in pipe segment 104.',
    assignedTo: 'Crew Alpha',
    status: Status.IN_PROGRESS,
    priority: Urgency.HIGH,
    dueDate: '2023-10-30',
    location: 'Sector 4, North District'
  },
  {
    id: 'WO-8822',
    title: 'Manhole Resurfacing',
    description: 'Standard degradation repair required.',
    assignedTo: 'Crew Beta',
    status: Status.PENDING,
    priority: Urgency.MEDIUM,
    dueDate: '2023-11-05',
    location: '123 Oak St'
  },
  {
    id: 'WO-8823',
    title: 'Emergency Collapse Response',
    description: 'Reported sinkhole near commercial zone.',
    assignedTo: 'Emergency Response',
    status: Status.PENDING,
    priority: Urgency.CRITICAL,
    dueDate: '2023-10-27',
    location: '5th Ave & Pine'
  }
];

export const MOCK_TASKS: Task[] = [
  { id: 'T-1', workOrderId: 'WO-8821', title: 'Setup traffic control', isCompleted: true },
  { id: 'T-2', workOrderId: 'WO-8821', title: 'Perform root cutting', isCompleted: false },
  { id: 'T-3', workOrderId: 'WO-8821', title: 'Post-cut inspection', isCompleted: false },
  { id: 'T-4', workOrderId: 'WO-8822', title: 'Clean manhole surface', isCompleted: true },
  { id: 'T-5', workOrderId: 'WO-8822', title: 'Apply resurfacing compound', isCompleted: false },
  { id: 'T-6', workOrderId: 'WO-8823', title: 'Secure perimeter', isCompleted: true },
];

export const MOCK_NOTIFICATIONS: Notification[] = [
  { id: 'N-1', title: 'Critical Work Order', message: 'WO-8823 requires immediate attention.', type: 'critical', timestamp: '10 mins ago', isRead: false },
  { id: 'N-2', title: 'Low Inventory', message: '8" Rubber Seal Ring stock is below threshold.', type: 'warning', timestamp: '1 hour ago', isRead: false },
  { id: 'N-3', title: 'Inspection Completed', message: 'INS-2023-004 has been finalized.', type: 'success', timestamp: '2 hours ago', isRead: true },
];

export const MOCK_ASSETS: Asset[] = [
  { id: 'MH-101', name: 'Downtown Main Junction', type: 'Manhole', lat: 34.0522, lng: -118.2437, status: 'Good', lastInspected: '2023-09-01' },
  { id: 'MH-102', name: 'Oak St. Access Point', type: 'Manhole', lat: 34.0525, lng: -118.2440, status: 'Needs Repair', lastInspected: '2023-10-15' },
  { id: 'P-500', name: 'Main Street Pipe', type: 'Pipe', lat: 34.0530, lng: -118.2450, status: 'Critical', lastInspected: '2023-10-20' },
  { id: 'L-22', name: 'Residential Lateral 4B', type: 'Lateral', lat: 34.0518, lng: -118.2425, status: 'Good', lastInspected: '2023-08-12' },
];

export const MOCK_EMPLOYEES: Employee[] = [
  { id: 'E-001', name: 'John Smith', role: 'Operator', status: 'On Shift', certifications: ['NASSCO', 'OSHA 10'] },
  { id: 'E-002', name: 'Sarah Connor', role: 'Lead Tech', status: 'Available', certifications: ['NASSCO', 'PACP', 'MACP'] },
  { id: 'E-003', name: 'Mike Ross', role: 'Driver', status: 'Time Off', certifications: ['CDL'] },
];

export const MOCK_INVENTORY: InventoryItem[] = [
  { id: 'INV-001', sku: 'PIPE-PVC-8IN', name: '8" PVC Pipe Segment (10ft)', quantity: 45, minThreshold: 10, category: 'Materials' },
  { id: 'INV-002', sku: 'SEAL-RING-8', name: '8" Rubber Seal Ring', quantity: 8, minThreshold: 20, category: 'Parts' },
  { id: 'INV-003', sku: 'CEMENT-FAST', name: 'Fast Set Cement (50lb)', quantity: 120, minThreshold: 50, category: 'Materials' },
];