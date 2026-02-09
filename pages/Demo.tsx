import React from 'react';
import { ArrowLeft, Play } from 'lucide-react';
import { PageView } from '../types';

interface DemoProps {
  setPage: (page: PageView) => void;
}

const Demo: React.FC<DemoProps> = ({ setPage }) => {
  return (
    <div className="demo-placeholder">
      <div className="demo-placeholder-content">
        <div className="demo-placeholder-icon">
          <Play size={48} />
        </div>
        <h1>Saelix Slate Demo</h1>
        <p>The interactive demo is coming soon. Check back for a full walkthrough of the platform.</p>
        <button className="btn btn-secondary" onClick={() => setPage('home')}>
          <ArrowLeft size={16} />
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default Demo;
