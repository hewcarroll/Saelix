import React from 'react';
import { PRODUCTS } from '../constants';
import { Download, Share2, Search, Cpu, CheckCircle } from 'lucide-react';

const iconMap: Record<string, React.FC<any>> = {
  'search': Search,
  'share-2': Share2,
  'cpu': Cpu
};

const Products: React.FC = () => {
  return (
    <div className="pt-24 pb-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-12">
        <h1 className="text-4xl font-serif font-bold text-white mb-4">Research Applications</h1>
        <p className="text-gray-400 text-lg max-w-2xl">
          Tools built upon Coherology to assist researchers, developers, and ethicists in creating safer AI systems.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {PRODUCTS.map((product) => {
          const Icon = iconMap[product.icon] || Cpu;
          return (
            <div key={product.id} className="glass-panel rounded-2xl p-8 flex flex-col h-full hover:bg-white/5 transition-colors duration-300 border border-white/5 hover:border-indigo-500/30">
              <div className="flex items-center justify-between mb-6">
                <div className="p-3 bg-indigo-500/10 rounded-xl">
                  <Icon className="w-8 h-8 text-indigo-400" />
                </div>
                <span className="text-xs font-mono text-gray-500 bg-white/5 px-2 py-1 rounded">v{product.version}</span>
              </div>
              
              <h2 className="text-2xl font-bold text-white mb-2">{product.name}</h2>
              <p className="text-indigo-300 text-sm font-medium mb-4 uppercase tracking-wide">{product.tagline}</p>
              
              <p className="text-gray-400 mb-8 flex-grow leading-relaxed">
                {product.description}
              </p>

              <div className="mb-8">
                <h4 className="text-sm font-semibold text-white mb-3">Key Capabilities:</h4>
                <ul className="space-y-2">
                  {product.features.map((feature, i) => (
                    <li key={i} className="flex items-start text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <a 
                href={product.downloadUrl}
                className="w-full py-3 bg-white text-slate-900 rounded-lg font-semibold hover:bg-indigo-50 transition-colors flex items-center justify-center gap-2"
                onClick={(e) => e.preventDefault()} // Mock download
              >
                <Download className="w-4 h-4" />
                Download Suite
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Products;
