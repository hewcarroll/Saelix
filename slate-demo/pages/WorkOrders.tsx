import React, { useState } from 'react';
import { Plus, Clock, CheckCircle, ChevronDown, ChevronUp, AlertOctagon } from 'lucide-react';
import { MOCK_WORK_ORDERS, MOCK_TASKS } from '../constants';
import { Status, Urgency, Task } from '../types';
import { useDemoToast } from '../components/DemoToast';

const WorkOrders: React.FC = () => {
  const { showDemoToast } = useDemoToast();
  const [expandedOrderId, setExpandedOrderId] = useState<string | null>(null);

  // Use static mock tasks (read-only)
  const tasks = MOCK_TASKS;

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-slate-800">Work Orders</h1>
        <button
          onClick={() => showDemoToast('Create Order')}
          className="bg-slate-900 text-white px-4 py-2 rounded-lg hover:bg-slate-800 flex items-center shadow-md transition-all"
        >
          <Plus className="w-4 h-4 mr-2" />
          Create Order
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {MOCK_WORK_ORDERS.map((order) => {
          const orderTasks = tasks.filter(t => t.workOrderId === order.id);
          const completedTasks = orderTasks.filter(t => t.isCompleted).length;
          const progress = orderTasks.length > 0 ? (completedTasks / orderTasks.length) * 100 : 0;
          const isExpanded = expandedOrderId === order.id;

          return (
            <div key={order.id} className="bg-white rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow flex flex-col h-fit">
                <div className="p-5">
                    <div className="flex justify-between items-start mb-3">
                    <span className="text-xs font-mono text-slate-400">{order.id}</span>
                    <span className={`px-2 py-0.5 rounded text-xs font-medium uppercase tracking-wide ${
                        order.priority === Urgency.CRITICAL ? 'bg-red-100 text-red-700' :
                        order.priority === Urgency.HIGH ? 'bg-orange-100 text-orange-700' :
                        'bg-blue-100 text-blue-700'
                    }`}>
                        {order.priority}
                    </span>
                    </div>

                    <h3 className="text-lg font-bold text-slate-800 mb-2">{order.title}</h3>
                    <p className="text-slate-600 text-sm mb-4 line-clamp-2">{order.description}</p>

                    <div className="flex items-center justify-between text-sm mb-4">
                        <div className="flex items-center text-slate-500">
                            <Clock className="w-4 h-4 mr-1.5" />
                            Due: {order.dueDate}
                        </div>
                        <div className="text-slate-900 font-medium">
                            {order.assignedTo}
                        </div>
                    </div>

                    {/* Progress Bar */}
                    <div className="mb-4">
                        <div className="flex justify-between text-xs text-slate-500 mb-1">
                            <span>Progress</span>
                            <span>{completedTasks}/{orderTasks.length} tasks</span>
                        </div>
                        <div className="w-full bg-slate-100 rounded-full h-1.5">
                            <div
                                className="bg-green-500 h-1.5 rounded-full transition-all duration-300"
                                style={{ width: `${progress}%` }}
                            />
                        </div>
                    </div>

                    <div className="flex space-x-2">
                        <button className="flex-1 bg-slate-50 hover:bg-slate-100 text-slate-700 py-2 rounded-lg border border-slate-200 text-sm font-medium transition-colors">
                            Details
                        </button>
                        <button
                            onClick={() => setExpandedOrderId(isExpanded ? null : order.id)}
                            className={`flex-1 flex items-center justify-center py-2 rounded-lg text-sm font-medium transition-colors ${
                                isExpanded ? 'bg-slate-200 text-slate-800' : 'bg-blue-600 text-white hover:bg-blue-700'
                            }`}
                        >
                            Tasks {isExpanded ? <ChevronUp className="h-4 w-4 ml-1" /> : <ChevronDown className="h-4 w-4 ml-1" />}
                        </button>
                    </div>
                </div>

                {/* Task List (Expandable) */}
                {isExpanded && (
                    <div className="border-t border-slate-100 bg-slate-50/50 p-4 rounded-b-xl animate-fade-in">
                        <h4 className="text-sm font-semibold text-slate-700 mb-3">Task Checklist</h4>
                        <div className="space-y-2 mb-3">
                            {orderTasks.map(task => (
                                <div key={task.id} className="flex items-start space-x-2 p-2 bg-white rounded border border-slate-200">
                                    <input
                                        type="checkbox"
                                        checked={task.isCompleted}
                                        onChange={() => showDemoToast('Task completion')}
                                        className="mt-1 h-4 w-4 text-blue-600 rounded border-slate-300 focus:ring-blue-500"
                                    />
                                    <span className={`text-sm ${task.isCompleted ? 'text-slate-400 line-through' : 'text-slate-700'}`}>
                                        {task.title}
                                    </span>
                                </div>
                            ))}
                            {orderTasks.length === 0 && <p className="text-xs text-slate-400 italic">No tasks assigned.</p>}
                        </div>

                        <div className="flex space-x-2">
                            <input
                                type="text"
                                placeholder="Add new task..."
                                className="flex-1 text-sm border border-slate-300 rounded px-2 py-1.5 focus:outline-none focus:ring-1 focus:ring-blue-500"
                                readOnly
                                onFocus={() => showDemoToast('Add task')}
                            />
                            <button
                                onClick={() => showDemoToast('Add task')}
                                className="bg-slate-900 text-white px-3 py-1.5 rounded text-sm hover:bg-slate-800"
                            >
                                Add
                            </button>
                        </div>
                    </div>
                )}
            </div>
          );
        })}

        {/* Empty State / Add New Placeholder */}
        <div
          onClick={() => showDemoToast('New Work Order')}
          className="border-2 border-dashed border-slate-300 rounded-xl p-5 flex flex-col items-center justify-center text-slate-400 hover:border-blue-400 hover:text-blue-500 transition-colors cursor-pointer bg-slate-50/50 min-h-[200px]"
        >
            <Plus className="w-12 h-12 mb-2 opacity-50" />
            <span className="font-medium">New Work Order</span>
        </div>
      </div>
    </div>
  );
};

export default WorkOrders;
