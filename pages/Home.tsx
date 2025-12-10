import React from 'react';
import { ArrowRight, Brain, Network, ShieldCheck } from 'lucide-react';
import { PageView } from '../types';

interface HomeProps {
  setPage: (page: PageView) => void;
}

const Home: React.FC<HomeProps> = ({ setPage }) => {
  return (
    <div className="space-y-24 pb-12">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Abstract Background Element */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-500/20 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-indigo-400/30 bg-indigo-900/20 backdrop-blur-sm">
            <span className="text-indigo-300 text-xs font-semibold tracking-widest uppercase">Pioneering Coherology</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-8 leading-tight">
            Harmonizing <span className="gradient-text">Artificial</span> and <br />
            <span className="gradient-text">Organic</span> Intelligence
          </h1>
          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            The Saelix Institute is dedicated to the ethical advancement of AI through the foundational study of Coherology—ensuring systems that resonate with human values.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button 
              onClick={() => setPage('products')}
              className="px-8 py-4 bg-white text-slate-900 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center gap-2 group"
            >
              Explore Solutions
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={() => setPage('wiki')}
              className="px-8 py-4 bg-white/5 border border-white/10 text-white rounded-lg font-semibold hover:bg-white/10 transition-colors backdrop-blur-sm"
            >
              Read White Papers
            </button>
          </div>
        </div>
      </section>

      {/* Core Pillars */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: Brain,
              title: "Ethical Development",
              desc: "We build systems that prioritize safety, transparency, and alignment with universal human rights."
            },
            {
              icon: Network,
              title: "Coherence Theory",
              desc: "Our proprietary Coherology framework optimizes information flow for maximum resonance and minimum entropy."
            },
            {
              icon: ShieldCheck,
              title: "Open Verification",
              desc: "All our foundational research papers are open-access to foster global collaboration and scrutiny."
            }
          ].map((pillar, idx) => (
            <div key={idx} className="glass-panel p-8 rounded-2xl hover:border-indigo-500/50 transition-colors group">
              <div className="w-12 h-12 bg-indigo-900/50 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <pillar.icon className="w-6 h-6 text-indigo-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{pillar.title}</h3>
              <p className="text-gray-400 leading-relaxed">{pillar.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Feature Highlight */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="relative glass-panel rounded-3xl p-12 overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-indigo-900/20 to-transparent pointer-events-none" />
          <div className="relative z-10 max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">Introducing Aether Lens</h2>
            <p className="text-lg text-gray-300 mb-8">
              The first bias detection tool built on Coherology principles. Visualize semantic drift in real-time and correct alignments before deployment.
            </p>
            <button 
              onClick={() => setPage('products')}
              className="text-indigo-400 font-semibold flex items-center gap-2 hover:text-indigo-300 transition-colors"
            >
              Learn more about Aether Lens <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
