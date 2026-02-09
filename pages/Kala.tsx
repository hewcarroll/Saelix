import React from 'react';
import { Brain, Shield, Eye, Layers, QrCode, Hexagon, Atom, Check, ArrowRight } from 'lucide-react';
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
    'Nested QR Code Encoding': <QrCode size={28} />,
    'Golden Ratio Fractal Indexing': <Hexagon size={28} />,
    'Quantum Probability Bias': <Atom size={28} />,
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
            <div className="kala-status-badge">Research & Development</div>
            <h1 className="kala-hero-title">KALA</h1>
            <p className="kala-hero-fullname">{KALA.fullName}</p>
            <p className="kala-hero-description">{KALA.description}</p>
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

      {/* Persistent Memory */}
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

      {/* How It Works Together */}
      <section className="kala-architecture-section">
        <div className="container">
          <h2 className="section-title" style={{ textAlign: 'center' }}>Architecture</h2>
          <p className="section-subtitle">
            Three layers work together to create persistent, ethical, and associative memory.
          </p>
          <div className="kala-arch-flow">
            <div className="kala-arch-step">
              <div className="kala-arch-icon"><QrCode size={24} /></div>
              <div className="kala-arch-label">Encode</div>
              <p>Knowledge compressed into nested QR structures</p>
            </div>
            <div className="kala-arch-arrow"><ArrowRight size={20} /></div>
            <div className="kala-arch-step">
              <div className="kala-arch-icon"><Hexagon size={24} /></div>
              <div className="kala-arch-label">Index</div>
              <p>Organized by golden ratio fractal patterns</p>
            </div>
            <div className="kala-arch-arrow"><ArrowRight size={20} /></div>
            <div className="kala-arch-step">
              <div className="kala-arch-icon"><Atom size={24} /></div>
              <div className="kala-arch-label">Retrieve</div>
              <p>Context collapses quantum probability for relevance</p>
            </div>
            <div className="kala-arch-arrow"><ArrowRight size={20} /></div>
            <div className="kala-arch-step">
              <div className="kala-arch-icon"><Shield size={24} /></div>
              <div className="kala-arch-label">Validate</div>
              <p>Every output filtered through the ethics kernel</p>
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
            <h2>KALA Powers Saelix Slate</h2>
            <p>KALA's ethical AI and persistent memory architecture are integrated into Saelix Slate's analytics and decision-support modules.</p>
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
