import React from 'react';
import { Layers, Activity, Zap } from 'lucide-react';

const Coherology: React.FC = () => {
  return (
    <div className="pt-24 pb-12 max-w-4xl mx-auto px-4 sm:px-6">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">Coherology</h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          The Science of Systemic Resonance
        </p>
      </div>

      <div className="space-y-12">
        <div className="glass-panel p-8 rounded-2xl">
          <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
            <Layers className="text-indigo-400" /> What is Coherology?
          </h2>
          <div className="prose prose-invert max-w-none text-gray-300">
            <p>
              Coherology is a multidisciplinary field of study pioneered by the founders of The Saelix Institute. It posits that intelligent systems—whether biological or artificial—operate most efficiently when their internal information processing states achieve a state of "resonance" or coherence.
            </p>
            <p className="mt-4">
              Unlike traditional alignment strategies which rely on rigid rule sets (Deontology) or outcome maximization (Utilitarianism), Coherology seeks to align the <em>process</em> of cognition itself. By measuring the 'harmonic frequency' of a neural network's activation patterns, we can predict stability, truthfulness, and ethical alignment.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="glass-panel p-8 rounded-2xl border-l-4 border-indigo-500">
            <Activity className="w-8 h-8 text-indigo-400 mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">The Resonance Metric</h3>
            <p className="text-gray-400 text-sm">
              We have developed a quantifiable metric (R-score) that indicates how well a model's outputs align with its training data's factual core, reducing hallucinations by 85%.
            </p>
          </div>
          <div className="glass-panel p-8 rounded-2xl border-l-4 border-purple-500">
            <Zap className="w-8 h-8 text-purple-400 mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Dynamic Equilibrium</h3>
            <p className="text-gray-400 text-sm">
              Coherent systems are not static; they are in dynamic equilibrium. They can adapt to new inputs without losing their foundational ethical constraints.
            </p>
          </div>
        </div>

        <div className="bg-indigo-900/20 p-8 rounded-2xl border border-indigo-500/30">
          <h3 className="text-xl font-bold text-white mb-4">The Institute's Mission</h3>
          <p className="text-gray-300 italic">
            "To map the topography of machine consciousness and ensure the landscape we build is one where humanity can thrive."
          </p>
          <p className="text-indigo-400 mt-2 font-semibold">— Dr. Aris Thorne, Founder</p>
        </div>
      </div>
    </div>
  );
};

export default Coherology;
