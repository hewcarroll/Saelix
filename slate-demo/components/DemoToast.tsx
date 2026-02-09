import React, { createContext, useContext, useState, useCallback, useRef } from 'react';
import { Lock } from 'lucide-react';

interface DemoToastContextValue {
  showDemoToast: (feature?: string) => void;
}

const DemoToastContext = createContext<DemoToastContextValue>({ showDemoToast: () => {} });

export const useDemoToast = () => useContext(DemoToastContext);

export const DemoToastProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [visible, setVisible] = useState(false);
  const [message, setMessage] = useState('');
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const showDemoToast = useCallback((feature?: string) => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setMessage(feature ? `"${feature}" is disabled in the demo` : 'This feature is disabled in the demo');
    setVisible(true);
    timerRef.current = setTimeout(() => setVisible(false), 2500);
  }, []);

  return (
    <DemoToastContext.Provider value={{ showDemoToast }}>
      {children}
      {visible && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] animate-fade-in">
          <div className="bg-slate-900 text-white px-5 py-3 rounded-xl shadow-2xl flex items-center space-x-2 text-sm font-medium">
            <Lock className="h-4 w-4 text-slate-400 shrink-0" />
            <span>{message}</span>
          </div>
        </div>
      )}
    </DemoToastContext.Provider>
  );
};
