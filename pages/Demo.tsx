import React from 'react';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { PageView } from '../types';

interface DemoProps {
  setPage: (page: PageView) => void;
}

const Demo: React.FC<DemoProps> = ({ setPage }) => {
  return (
    <div className="demo-placeholder">
      <div className="demo-placeholder-content">
        <div className="demo-placeholder-icon">
          <ExternalLink size={48} />
        </div>
        <h1>Saelix Slate Demo</h1>
        <p>Explore the interactive demo of Saelix Slate — our infrastructure management platform.</p>
        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a
            href="./slate-demo/"
            className="btn btn-primary"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', textDecoration: 'none' }}
          >
            Launch Demo
            <ExternalLink size={16} />
          </a>
          <button className="btn btn-secondary" onClick={() => setPage('home')}>
            <ArrowLeft size={16} />
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default Demo;
