import React from 'react';
import { Brain, Shield, Eye, Layers, Database, Check, ArrowRight, TrendingUp, Search, MessageSquare } from 'lucide-react';
import { KALA } from '../constants';
import { PageView } from '../types';

interface KalaProps {
  setPage: (page: PageView) => void;
}

const Kala: React.FC<KalaProps> = ({ setPage }) => {
  const lawIcons = [
    <Shield size={24} />,
    <Shield size={24} />,
    <Check size={24} />,
    <Layers size={24} />,
    <Eye size={24} />,
  ];

  const memoryIcons: Record<string, React.ReactNode> = {
    'Structured Knowledge Encoding': <Database size={28} />,
    'Scalable Pattern Indexing': <Layers size={28} />,
    'Context-Aware Relevance': <Brain size={28} />,
  };

  return (
    <>
      {/* Hero */}
      <section className="kala-hero">
        <div className="container">
          <div className="kala-hero-content">
            <div className="kala-hero-orb">
              <div className="kala-orb large">
                <div className="kala-orb-ring ring-1" />
                <div className="kala-orb-ring ring-2" />
                <div className="kala-orb-ring ring-3" />
                <div className="kala-orb-core">
                  <Brain size={56} />
                </div>
              </div>
            </div>
            <div className="kala-status-badge">R&D / AI Lab</div>
            <h1 className="kala-hero-title">KALA</h1>
            <p className="kala-hero-fullname">{KALA.fullName}</p>
            <p className="kala-hero-description">{KALA.description}</p>
          </div>
        </div>
      </section>

      {/* How KALA Powers Slate */}
      <section className="kala-powers-section">
        <div className="container">
          <h2 className="section-title" style={{ textAlign: 'center', color: 'white' }}>How KALA Powers Saelix Slate</h2>
          <div className="kala-powers-grid">
            <div className="kala-powers-card">
              <div className="kala-powers-card-icon">
                <TrendingUp size={24} />
              </div>
              <h3>Predictive Maintenance</h3>
              <p>Prioritize rehabilitation by predicting which pipe segments are most likely to fail, based on inspection history, material, age, and environmental factors.</p>
            </div>
            <div className="kala-powers-card">
              <div className="kala-powers-card-icon">
                <Search size={24} />
              </div>
              <h3>Anomaly Detection</h3>
              <p>Flag unusual patterns in inspection data, work order volumes, or operational metrics before they become emergencies.</p>
            </div>
            <div className="kala-powers-card">
              <div className="kala-powers-card-icon">
                <MessageSquare size={24} />
              </div>
              <h3>Explainable Recommendations</h3>
              <p>Every AI recommendation includes a clear reasoning chain so operators and regulators can understand and audit decisions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Ethics Kernel */}
      <section className="kala-ethics-section">
        <div className="container">
          <h2 className="section-title" style={{ textAlign: 'center' }}>{KALA.ethicsKernel.name}</h2>
          <p className="kala-ethics-intro">{KALA.ethicsKernel.description}</p>
          <div className="kala-laws-list">
            {KALA.ethicsKernel.laws.map((law, index) => (
              <div key={index} className="kala-law-card">
                <div className="kala-law-header">
                  <div className="kala-law-icon">
                    {lawIcons[index]}
                  </div>
                  <div className="kala-law-number">
                    {law.number === 0 ? 'Law Zero' : `Law ${law.number}`}
                  </div>
                </div>
                <h3 className="kala-law-name">{law.name}</h3>
                <p className="kala-law-text">{law.text}</p>
                <div className="kala-law-basis">{law.basis}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Adaptive Learning Architecture */}
      <section className="kala-memory-section">
        <div className="container">
          <h2 className="section-title" style={{ textAlign: 'center' }}>{KALA.persistentMemory.name}</h2>
          <p className="kala-memory-intro">{KALA.persistentMemory.description}</p>
          <div className="kala-memory-grid">
            {KALA.persistentMemory.methods.map((method, index) => (
              <div key={index} className="kala-memory-card">
                <div className="kala-memory-icon">
                  {memoryIcons[method.name] || <Brain size={28} />}
                </div>
                <div className="kala-memory-role">{method.role}</div>
                <h3 className="kala-memory-name">{method.name}</h3>
                <p className="kala-memory-desc">{method.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture */}
      <section className="kala-architecture-section">
        <div className="container">
          <h2 className="section-title" style={{ textAlign: 'center' }}>Architecture</h2>
          <p className="section-subtitle">
            Four stages work together to deliver transparent, ethical, and context-aware AI recommendations.
          </p>
          <div className="kala-arch-flow">
            <div className="kala-arch-step">
              <div className="kala-arch-icon"><Database size={24} /></div>
              <div className="kala-arch-label">Capture</div>
              <p>Operational data ingested from inspections, work orders, and GIS</p>
            </div>
            <div className="kala-arch-arrow"><ArrowRight size={20} /></div>
            <div className="kala-arch-step">
              <div className="kala-arch-icon"><Layers size={24} /></div>
              <div className="kala-arch-label">Organize</div>
              <p>Patterns indexed across assets, time, and condition data</p>
            </div>
            <div className="kala-arch-arrow"><ArrowRight size={20} /></div>
            <div className="kala-arch-step">
              <div className="kala-arch-icon"><Brain size={24} /></div>
              <div className="kala-arch-label">Analyze</div>
              <p>Context-aware analysis surfaces relevant insights</p>
            </div>
            <div className="kala-arch-arrow"><ArrowRight size={20} /></div>
            <div className="kala-arch-step">
              <div className="kala-arch-icon"><Shield size={24} /></div>
              <div className="kala-arch-label">Verify</div>
              <p>Every output validated against the ethics kernel</p>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="kala-capabilities-section">
        <div className="container">
          <h2 className="section-title" style={{ textAlign: 'center' }}>Capabilities</h2>
          <div className="kala-capabilities-grid">
            {KALA.capabilities.map((cap, index) => (
              <div key={index} className="kala-capability-item">
                <Check size={18} className="kala-cap-check" />
                <span>{cap}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="kala-cta-section">
        <div className="container">
          <div className="kala-cta-content">
            <h2>KALA is Coming to Saelix Slate</h2>
            <p>KALA's predictive maintenance, anomaly detection, and explainable AI capabilities are being integrated into Saelix Slate. Want to be among the first to try it?</p>
            <button className="btn btn-primary btn-lg" onClick={() => setPage('saelix-slate')}>
              Explore Saelix Slate
              <ArrowRight className="btn-icon" />
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Kala;
