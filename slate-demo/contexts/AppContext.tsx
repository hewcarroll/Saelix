import React, { createContext, useContext, useState, ReactNode, useMemo } from 'react';
import { Role, Notification, Task, RoleDefinition, Permission } from '../types';
import { MOCK_NOTIFICATIONS, MOCK_TASKS, DEFAULT_ROLES } from '../constants';

interface AppContextType {
  activeRoleId: string;
  setActiveRoleId: (id: string) => void;
  activeRole: RoleDefinition;
  roles: RoleDefinition[];
  addRole: (role: RoleDefinition) => void;
  updateRole: (id: string, updates: Partial<RoleDefinition>) => void;
  deleteRole: (id: string) => void;
  hasPermission: (permission: Permission) => boolean;
  
  // Data props
  notifications: Notification[];
  markAsRead: (id: string) => void;
  tasks: Task[];
  addTask: (task: Task) => void;
  toggleTaskCompletion: (taskId: string) => void;
  
  // Backwards compat for legacy role enum usage if needed (optional)
  role: string; 
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [activeRoleId, setActiveRoleId] = useState<string>(Role.ADMIN);
  const [roles, setRoles] = useState<RoleDefinition[]>(DEFAULT_ROLES);
  
  const [notifications, setNotifications] = useState<Notification[]>(MOCK_NOTIFICATIONS);
  const [tasks, setTasks] = useState<Task[]>(MOCK_TASKS);

  const activeRole = useMemo(() => 
    roles.find(r => r.id === activeRoleId) || roles[0], 
  [roles, activeRoleId]);

  const hasPermission = (permission: Permission): boolean => {
    return activeRole.permissions.includes(permission);
  };

  const addRole = (newRole: RoleDefinition) => {
    setRoles(prev => [...prev, newRole]);
  };

  const updateRole = (id: string, updates: Partial<RoleDefinition>) => {
    setRoles(prev => prev.map(r => r.id === id ? { ...r, ...updates } : r));
  };

  const deleteRole = (id: string) => {
    // Prevent deleting system roles
    const roleToDelete = roles.find(r => r.id === id);
    if (roleToDelete?.isSystem) return;
    
    setRoles(prev => prev.filter(r => r.id !== id));
    if (activeRoleId === id) {
      setActiveRoleId(Role.ADMIN);
    }
  };

  const markAsRead = (id: string) => {
    setNotifications(prev => prev.map(n => n.id === id ? { ...n, isRead: true } : n));
  };

  const addTask = (task: Task) => {
    setTasks(prev => [...prev, task]);
  };

  const toggleTaskCompletion = (taskId: string) => {
    setTasks(prev => prev.map(t => t.id === taskId ? { ...t, isCompleted: !t.isCompleted } : t));
  };

  return (
    <AppContext.Provider value={{ 
      activeRoleId, 
      setActiveRoleId, 
      activeRole, 
      roles, 
      addRole, 
      updateRole, 
      deleteRole, 
      hasPermission,
      notifications, 
      markAsRead, 
      tasks, 
      addTask, 
      toggleTaskCompletion,
      role: activeRole.name // Legacy/Display support
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};