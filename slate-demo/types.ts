export enum Role {
  ADMIN = 'Admin',
  OPERATOR = 'Operator',
  QA_REVIEWER = 'QA Reviewer',
  CLIENT_VIEWER = 'Client Viewer'
}

export type Permission = 
  | 'dashboard.view'
  | 'map.view'
  | 'map.edit'
  | 'inspections.view'
  | 'inspections.edit'
  | 'work_orders.view'
  | 'work_orders.edit'
  | 'reports.view'
  | 'scheduling.view'
  | 'inventory.view'
  | 'inventory.edit'
  | 'analytics.view'
  | 'settings.view'
  | 'settings.manage';

export interface RoleDefinition {
  id: string;
  name: string;
  description: string;
  permissions: Permission[];
  isSystem?: boolean;
}

export enum InspectionSource {
  POSM = 'POSM',
  ENVIROSIGHT = 'Envirosight',
  MANUAL = 'Manual'
}

export enum Status {
  PENDING = 'Pending',
  IN_PROGRESS = 'In Progress',
  COMPLETED = 'Completed',
  FLAGGED = 'Flagged'
}

export enum Urgency {
  LOW = 'Low',
  MEDIUM = 'Medium',
  HIGH = 'High',
  CRITICAL = 'Critical'
}

export interface Inspection {
  id: string;
  locationId: string;
  date: string;
  source: InspectionSource;
  status: Status;
  operator: string;
  defectsFound: number;
  reportUrl: string;
  thumbnail: string;
}

export interface WorkOrder {
  id: string;
  title: string;
  description: string;
  assignedTo: string; // Employee ID or Name
  status: Status;
  priority: Urgency;
  dueDate: string;
  location: string;
}

export interface Task {
  id: string;
  workOrderId: string;
  title: string;
  isCompleted: boolean;
  assignedTo?: string;
}

export interface Notification {
  id: string;
  title: string;
  message: string;
  type: 'critical' | 'warning' | 'info' | 'success';
  timestamp: string;
  isRead: boolean;
}

export interface Asset {
  id: string;
  name?: string;
  type: 'Manhole' | 'Pipe' | 'Lateral';
  lat: number;
  lng: number;
  status: 'Good' | 'Needs Repair' | 'Critical';
  lastInspected: string;
}

export interface Employee {
  id: string;
  name: string;
  role: string;
  status: 'Available' | 'On Shift' | 'Time Off';
  certifications: string[];
}

export interface InventoryItem {
  id: string;
  sku: string;
  name: string;
  quantity: number;
  minThreshold: number;
  category: string;
}