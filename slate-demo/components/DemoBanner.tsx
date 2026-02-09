import React, { useState } from 'react';
import { Info, X } from 'lucide-react';

const DemoBanner: React.FC = () => {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <div className="bg-indigo-600 text-white px-4 py-2 flex items-center justify-between text-sm shrink-0">
      <div className="flex items-center space-x-2">
        <Info className="h-4 w-4 shrink-0" />
        <span className="font-medium">Interactive Demo</span>
        <span className="hidden sm:inline text-indigo-200">— Actions are view-only. Data shown is sample data.</span>
      </div>
      <button
        onClick={() => setDismissed(true)}
        className="p-1 hover:bg-indigo-500 rounded transition-colors"
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  );
};

export default DemoBanner;
