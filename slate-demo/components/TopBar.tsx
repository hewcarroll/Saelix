import React, { useState } from 'react';
import { Menu, Bell, Search, Bot, Check, AlertTriangle, Info, AlertOctagon } from 'lucide-react';
import { useAppContext } from '../contexts/AppContext';

interface TopBarProps {
  toggleSidebar: () => void;
  onOpenAi: () => void;
}

const TopBar: React.FC<TopBarProps> = ({ toggleSidebar, onOpenAi }) => {
  const { activeRole, notifications, markAsRead } = useAppContext();
  const [isNotifOpen, setIsNotifOpen] = useState(false);

  const unreadCount = notifications.filter(n => !n.isRead).length;

  const getIcon = (type: string) => {
    switch (type) {
        case 'critical': return <AlertOctagon className="h-4 w-4 text-white" />;
        case 'warning': return <AlertTriangle className="h-4 w-4 text-white" />;
        case 'success': return <Check className="h-4 w-4 text-white" />;
        default: return <Info className="h-4 w-4 text-white" />;
    }
  };

  const getBgColor = (type: string) => {
    switch (type) {
        case 'critical': return 'bg-red-500';
        case 'warning': return 'bg-orange-500';
        case 'success': return 'bg-green-500';
        default: return 'bg-blue-500';
    }
  };

  return (
    <header className="bg-white border-b border-slate-200 h-16 flex items-center justify-between px-4 sm:px-6 sticky top-0 z-40">
      <div className="flex items-center">
        <button
          onClick={toggleSidebar}
          className="p-2 rounded-md text-slate-500 hover:bg-slate-100 focus:outline-none md:hidden"
        >
          <Menu className="h-6 w-6" />
        </button>
        
        {/* Global Search */}
        <div className="hidden md:flex ml-4 relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-4 w-4 text-slate-400" />
          </div>
          <input
            type="text"
            placeholder="Search assets, reports, orders..."
            className="block w-64 pl-10 pr-3 py-2 border border-slate-300 rounded-md leading-5 bg-slate-50 placeholder-slate-400 focus:outline-none focus:bg-white focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition duration-150 ease-in-out"
          />
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <div className="hidden sm:flex px-3 py-1 bg-slate-100 rounded-full border border-slate-200 text-xs font-semibold text-slate-600">
            Role: {activeRole.name}
        </div>

        <button 
          onClick={onOpenAi}
          className="hidden sm:flex items-center px-3 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full hover:shadow-lg transition-all text-sm font-medium"
        >
          <Bot className="h-4 w-4 mr-2" />
          Ask Saelix AI
        </button>
        <button 
          onClick={onOpenAi}
          className="sm:hidden p-2 text-blue-600 hover:bg-blue-50 rounded-full"
        >
           <Bot className="h-6 w-6" />
        </button>

        <div className="relative">
          <button 
            onClick={() => setIsNotifOpen(!isNotifOpen)}
            className="p-2 text-slate-500 hover:bg-slate-100 rounded-full relative"
          >
            <Bell className="h-6 w-6" />
            {unreadCount > 0 && (
                <span className="absolute top-2 right-2 block h-2 w-2 rounded-full bg-red-500 ring-2 ring-white"></span>
            )}
          </button>

          {isNotifOpen && (
            <>
                <div className="fixed inset-0 z-10" onClick={() => setIsNotifOpen(false)}></div>
                <div className="absolute right-0 mt-2 w-80 bg-white rounded-xl shadow-xl border border-slate-100 z-20 overflow-hidden">
                    <div className="p-4 border-b border-slate-100 flex justify-between items-center bg-slate-50">
                        <h3 className="font-semibold text-slate-800">Notifications</h3>
                        <span className="text-xs text-slate-500">{unreadCount} unread</span>
                    </div>
                    <div className="max-h-96 overflow-y-auto">
                        {notifications.length === 0 ? (
                            <div className="p-4 text-center text-slate-500 text-sm">No notifications</div>
                        ) : (
                            notifications.map(n => (
                                <div 
                                    key={n.id} 
                                    className={`p-4 border-b border-slate-100 hover:bg-slate-50 transition-colors cursor-pointer ${n.isRead ? 'opacity-60' : ''}`}
                                    onClick={() => markAsRead(n.id)}
                                >
                                    <div className="flex items-start space-x-3">
                                        <div className={`p-1.5 rounded-full mt-0.5 flex-shrink-0 ${getBgColor(n.type)}`}>
                                            {getIcon(n.type)}
                                        </div>
                                        <div className="flex-1">
                                            <p className={`text-sm ${n.isRead ? 'font-medium text-slate-600' : 'font-bold text-slate-800'}`}>
                                                {n.title}
                                            </p>
                                            <p className="text-xs text-slate-500 mt-0.5">{n.message}</p>
                                            <p className="text-[10px] text-slate-400 mt-1">{n.timestamp}</p>
                                        </div>
                                        {!n.isRead && <div className="h-2 w-2 bg-blue-500 rounded-full"></div>}
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default TopBar;