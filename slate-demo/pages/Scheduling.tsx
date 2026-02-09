import React from 'react';
import { Calendar as CalendarIcon, User, ChevronLeft, ChevronRight } from 'lucide-react';
import { MOCK_EMPLOYEES } from '../constants';
import { useDemoToast } from '../components/DemoToast';

const Scheduling: React.FC = () => {
  const days = ['Mon, Oct 23', 'Tue, Oct 24', 'Wed, Oct 25', 'Thu, Oct 26', 'Fri, Oct 27'];
  const { showDemoToast } = useDemoToast();

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
           <h1 className="text-2xl font-bold text-slate-800">Crew Scheduling</h1>
           <p className="text-slate-500 text-sm">Manage shifts, time-off, and certifications.</p>
        </div>
        <div className="flex items-center space-x-2 bg-white rounded-lg shadow-sm border border-slate-200 p-1">
             <button onClick={() => showDemoToast('Week navigation')} className="p-1 hover:bg-slate-100 rounded">
                 <ChevronLeft className="h-5 w-5 text-slate-500" />
             </button>
             <span className="px-2 text-sm font-medium text-slate-700">Week 43, 2023</span>
             <button onClick={() => showDemoToast('Week navigation')} className="p-1 hover:bg-slate-100 rounded">
                 <ChevronRight className="h-5 w-5 text-slate-500" />
             </button>
        </div>
      </div>

      <div className="bg-white shadow-sm rounded-xl border border-slate-200 overflow-hidden">
        <div className="grid grid-cols-6 border-b border-slate-200 bg-slate-50">
          <div className="p-4 border-r border-slate-200 font-medium text-slate-500 text-sm">Employee</div>
          {days.map(day => (
              <div key={day} className="p-4 border-r border-slate-200 last:border-r-0 font-medium text-slate-700 text-sm text-center">
                  {day}
              </div>
          ))}
        </div>

        {MOCK_EMPLOYEES.map((employee) => (
            <div key={employee.id} className="grid grid-cols-6 border-b border-slate-100 last:border-b-0 hover:bg-slate-50/50">
                <div className="p-4 border-r border-slate-200 flex flex-col justify-center">
                    <div className="flex items-center space-x-3 mb-1">
                        <div className="h-8 w-8 rounded-full bg-slate-200 flex items-center justify-center text-slate-600">
                            <User className="h-4 w-4" />
                        </div>
                        <span className="font-medium text-slate-900 text-sm">{employee.name}</span>
                    </div>
                    <div className="text-xs text-slate-500 pl-11">{employee.role}</div>
                    <div className="flex flex-wrap gap-1 mt-2 pl-11">
                        {employee.certifications.map(c => (
                            <span key={c} className="text-[10px] bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded border border-slate-200">
                                {c}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Mock Schedule Blocks */}
                <div className="p-2 border-r border-slate-200 relative group">
                    <div className="w-full h-full bg-blue-100 rounded border border-blue-200 flex items-center justify-center text-xs text-blue-700 font-medium cursor-pointer hover:bg-blue-200 transition-colors">
                        08:00 - 16:00
                    </div>
                </div>
                <div className="p-2 border-r border-slate-200 relative">
                     <div className="w-full h-full bg-blue-100 rounded border border-blue-200 flex items-center justify-center text-xs text-blue-700 font-medium">
                        08:00 - 16:00
                    </div>
                </div>
                <div className="p-2 border-r border-slate-200 relative">
                     {employee.status === 'Time Off' ? (
                         <div className="w-full h-full bg-yellow-50 rounded border border-yellow-200 flex items-center justify-center text-xs text-yellow-700 font-medium stripe-bg">
                             Time Off
                         </div>
                     ) : (
                        <div className="w-full h-full bg-blue-100 rounded border border-blue-200 flex items-center justify-center text-xs text-blue-700 font-medium">
                             08:00 - 16:00
                        </div>
                     )}
                </div>
                <div className="p-2 border-r border-slate-200 relative">
                    <div className="w-full h-full bg-blue-100 rounded border border-blue-200 flex items-center justify-center text-xs text-blue-700 font-medium">
                        08:00 - 16:00
                    </div>
                </div>
                <div className="p-2 border-r border-slate-200 relative">
                    <div className="w-full h-full bg-blue-100 rounded border border-blue-200 flex items-center justify-center text-xs text-blue-700 font-medium">
                        08:00 - 16:00
                    </div>
                </div>
            </div>
        ))}
      </div>
    </div>
  );
};

export default Scheduling;
