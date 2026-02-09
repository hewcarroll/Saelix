import React from 'react';
import { User, Bell, Shield, Sliders, Check, Plus, Trash2, Edit2, X, Lock } from 'lucide-react';
import { useAppContext } from '../contexts/AppContext';
import { ALL_PERMISSIONS } from '../constants';
import { Permission, RoleDefinition } from '../types';
import { useDemoToast } from '../components/DemoToast';

const Settings: React.FC = () => {
  const { activeRoleId, roles } = useAppContext();
  const { showDemoToast } = useDemoToast();

  return (
    <div className="max-w-4xl mx-auto space-y-8 pb-12">
      <h1 className="text-2xl font-bold text-slate-800">System Settings</h1>

      {/* Role Simulator */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="p-6 border-b border-slate-100 bg-slate-50 flex items-center space-x-3">
            <div className="bg-blue-100 p-2 rounded-lg">
                <User className="h-6 w-6 text-blue-600" />
            </div>
            <div>
                <h2 className="text-lg font-semibold text-slate-800">Active Role Simulator</h2>
                <p className="text-sm text-slate-500">View the application as if you were assigned one of these roles.</p>
            </div>
        </div>
        <div className="p-6">
            <label className="block text-sm font-medium text-slate-700 mb-3">Current Active Role</label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {roles.map((r) => (
                    <div
                        key={r.id}
                        onClick={() => showDemoToast('Role Simulator')}
                        className={`cursor-pointer border rounded-lg p-4 flex items-center justify-between transition-all ${
                            activeRoleId === r.id
                                ? 'border-blue-500 bg-blue-50 ring-1 ring-blue-500'
                                : 'border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                        }`}
                    >
                        <div>
                            <span className={`block font-medium ${activeRoleId === r.id ? 'text-blue-700' : 'text-slate-700'}`}>{r.name}</span>
                            <span className="text-xs text-slate-500 block mt-1">
                                {r.permissions.length} permissions enabled
                            </span>
                        </div>
                        <div className={`h-4 w-4 rounded-full border flex items-center justify-center ${
                             activeRoleId === r.id ? 'border-blue-500' : 'border-slate-300'
                        }`}>
                             {activeRoleId === r.id && <div className="h-2 w-2 rounded-full bg-blue-500" />}
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </div>

      {/* Role Configuration / Editor */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="p-6 border-b border-slate-100 bg-slate-50 flex justify-between items-center">
            <div className="flex items-center space-x-3">
                <div className="bg-purple-100 p-2 rounded-lg">
                    <Shield className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                    <h2 className="text-lg font-semibold text-slate-800">Role & Permission Management</h2>
                    <p className="text-sm text-slate-500">Configure access levels for each license.</p>
                </div>
            </div>
            <button
                onClick={() => showDemoToast('New Role')}
                className="flex items-center px-3 py-2 bg-slate-900 text-white rounded-lg text-sm font-medium hover:bg-slate-800"
            >
                <Plus className="h-4 w-4 mr-2" />
                New Role
            </button>
        </div>

        <div className="p-6">
            {/* List Mode */}
            <div className="space-y-3">
                {roles.map((role) => (
                    <div key={role.id} className="flex items-center justify-between p-4 bg-white border border-slate-200 rounded-lg hover:shadow-sm transition-shadow">
                        <div>
                            <div className="flex items-center space-x-2">
                                <h3 className="font-semibold text-slate-800">{role.name}</h3>
                                {role.isSystem && (
                                    <span className="bg-slate-100 text-slate-500 text-[10px] px-2 py-0.5 rounded-full uppercase tracking-wider font-bold flex items-center">
                                        <Lock className="h-2 w-2 mr-1" /> System
                                    </span>
                                )}
                            </div>
                            <p className="text-sm text-slate-500 mt-1">{role.description}</p>
                        </div>
                        <div className="flex space-x-2">
                            {!role.isSystem ? (
                                <>
                                    <button
                                        onClick={() => showDemoToast('Edit Role')}
                                        className="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded"
                                        title="Edit Permissions"
                                    >
                                        <Edit2 className="h-4 w-4" />
                                    </button>
                                    <button
                                        onClick={() => showDemoToast('Delete Role')}
                                        className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded"
                                        title="Delete Role"
                                    >
                                        <Trash2 className="h-4 w-4" />
                                    </button>
                                </>
                            ) : (
                                <button
                                    className="p-2 text-slate-300 cursor-not-allowed"
                                    title="System roles cannot be edited"
                                >
                                    <Lock className="h-4 w-4" />
                                </button>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </div>

      {/* Notification Settings */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="p-6 border-b border-slate-100 bg-slate-50 flex items-center space-x-3">
            <div className="bg-orange-100 p-2 rounded-lg">
                <Bell className="h-6 w-6 text-orange-600" />
            </div>
            <div>
                <h2 className="text-lg font-semibold text-slate-800">Alert Configuration</h2>
                <p className="text-sm text-slate-500">Manage what triggers a system notification.</p>
            </div>
        </div>
        <div className="p-6 space-y-4">
            <ToggleOption
                title="Critical Work Orders"
                desc="Notify immediately when a work order is marked critical."
                defaultChecked={true}
                onToggle={() => showDemoToast('Alert toggles')}
            />
            <ToggleOption
                title="Low Inventory Warning"
                desc="Alert when stock levels drop below defined thresholds."
                defaultChecked={true}
                onToggle={() => showDemoToast('Alert toggles')}
            />
             <ToggleOption
                title="System Updates"
                desc="Receive news about Saelix Slate platform updates."
                defaultChecked={true}
                onToggle={() => showDemoToast('Alert toggles')}
            />
        </div>
      </div>
    </div>
  );
};

const ToggleOption = ({ title, desc, defaultChecked, onToggle }: { title: string, desc: string, defaultChecked: boolean, onToggle: () => void }) => {
    return (
        <div className="flex items-start justify-between">
            <div>
                <h4 className="text-sm font-medium text-slate-800">{title}</h4>
                <p className="text-xs text-slate-500">{desc}</p>
            </div>
            <button
                onClick={onToggle}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                    defaultChecked ? 'bg-blue-600' : 'bg-slate-200'
                }`}
            >
                <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    defaultChecked ? 'translate-x-6' : 'translate-x-1'
                }`} />
            </button>
        </div>
    )
}

export default Settings;
