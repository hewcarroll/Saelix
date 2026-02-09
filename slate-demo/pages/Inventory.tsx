import React from 'react';
import { ShoppingCart, AlertTriangle, Package } from 'lucide-react';
import { MOCK_INVENTORY } from '../constants';
import { useDemoToast } from '../components/DemoToast';

const Inventory: React.FC = () => {
  const { showDemoToast } = useDemoToast();

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-slate-800">Materials & Procurement</h1>
        <button
          onClick={() => showDemoToast('Vendor Orders')}
          className="bg-white border border-slate-300 text-slate-700 px-4 py-2 rounded-lg hover:bg-slate-50 flex items-center shadow-sm"
        >
          <ShoppingCart className="w-4 h-4 mr-2" />
          Vendor Orders
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {MOCK_INVENTORY.map(item => {
              const lowStock = item.quantity <= item.minThreshold;
              return (
                <div key={item.id} className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 flex flex-col">
                    <div className="flex justify-between items-start mb-4">
                        <div className="p-3 bg-slate-100 rounded-lg">
                            <Package className="h-6 w-6 text-slate-600" />
                        </div>
                        {lowStock && (
                            <div className="flex items-center text-red-600 bg-red-50 px-2 py-1 rounded text-xs font-bold uppercase">
                                <AlertTriangle className="h-3 w-3 mr-1" />
                                Low Stock
                            </div>
                        )}
                    </div>

                    <h3 className="text-lg font-bold text-slate-800">{item.name}</h3>
                    <div className="text-xs text-slate-500 mb-4 font-mono">{item.sku}</div>

                    <div className="mt-auto space-y-3">
                        <div className="flex justify-between text-sm">
                            <span className="text-slate-500">In Stock:</span>
                            <span className={`font-bold ${lowStock ? 'text-red-600' : 'text-slate-900'}`}>{item.quantity} units</span>
                        </div>
                        <div className="flex justify-between text-sm">
                             <span className="text-slate-500">Min Threshold:</span>
                             <span className="text-slate-900">{item.minThreshold} units</span>
                        </div>

                        <div className="w-full bg-slate-100 rounded-full h-2 mt-2">
                             <div
                                className={`h-2 rounded-full ${lowStock ? 'bg-red-500' : 'bg-green-500'}`}
                                style={{ width: `${Math.min((item.quantity / (item.minThreshold * 2)) * 100, 100)}%` }}
                             />
                        </div>

                        <button
                          onClick={() => showDemoToast('Restock')}
                          className="w-full mt-4 border border-slate-200 text-slate-700 py-2 rounded-lg text-sm font-medium hover:bg-slate-50 hover:border-slate-300 transition-all"
                        >
                            Restock
                        </button>
                    </div>
                </div>
              )
          })}
      </div>
    </div>
  );
};

export default Inventory;
