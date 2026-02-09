import React from 'react';
import { LayoutDashboard, Map, ClipboardList, HardHat, Calendar, Box, Settings, Activity, FileBarChart } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useAppContext } from '../contexts/AppContext';
import { Permission } from '../types';

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen }) => {
  const location = useLocation();
  const { activeRole, hasPermission } = useAppContext();

  // Define menu items with required permissions
  const menuItems: { name: string; icon: any; path: string; permission: Permission }[] = [
    { name: 'Dashboard', icon: LayoutDashboard, path: '/', permission: 'dashboard.view' },
    { name: 'GIS Map', icon: Map, path: '/map', permission: 'map.view' },
    { name: 'Inspections', icon: ClipboardList, path: '/inspections', permission: 'inspections.view' },
    { name: 'Work Orders', icon: HardHat, path: '/work-orders', permission: 'work_orders.view' },
    { name: 'Reports', icon: FileBarChart, path: '/reports', permission: 'reports.view' },
    { name: 'Scheduling', icon: Calendar, path: '/scheduling', permission: 'scheduling.view' },
    { name: 'Inventory', icon: Box, path: '/inventory', permission: 'inventory.view' },
    { name: 'Analytics', icon: Activity, path: '/analytics', permission: 'analytics.view' },
    { name: 'Settings', icon: Settings, path: '/settings', permission: 'settings.view' },
  ];

  return (
    <aside 
      className={`fixed inset-y-0 left-0 z-50 w-64 bg-slate-900 text-white transition-transform duration-300 ease-in-out ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } md:relative md:translate-x-0 shadow-xl`}
    >
      <div className="h-full flex flex-col">
        {/* Logo Area */}
        <div className="flex items-center justify-center h-16 bg-slate-950 border-b border-slate-800">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">S</span>
            </div>
            <span className="text-xl font-semibold tracking-tight">Saelix Slate</span>
          </div>
        </div>

        {/* Navigation Items */}
        <nav className="flex-1 px-4 py-6 space-y-1 overflow-y-auto">
          {menuItems.map((item) => {
            if (!hasPermission(item.permission)) return null;

            const isActive = location.pathname === item.path;
            const Icon = item.icon;
            
            return (
              <Link
                key={item.name}
                to={item.path}
                className={`flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                  isActive 
                    ? 'bg-blue-600 text-white' 
                    : 'text-slate-400 hover:bg-slate-800 hover:text-white'
                }`}
              >
                <Icon className="mr-3 h-5 w-5" />
                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* User Profile Snippet */}
        <div className="p-4 border-t border-slate-800 bg-slate-950">
          <div className="flex items-center">
            <img
              className="h-9 w-9 rounded-full border-2 border-slate-700"
              src="https://picsum.photos/200/200?random=user"
              alt="User avatar"
            />
            <div className="ml-3">
              <p className="text-sm font-medium text-white">Current User</p>
              <p className="text-xs text-slate-500 truncate w-32">{activeRole.name}</p>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;