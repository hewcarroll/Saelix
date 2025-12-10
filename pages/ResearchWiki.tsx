import React, { useState, useMemo } from 'react';
    import { PAPERS } from '../constants';
    import { FileText, Search, DownloadCloud, BookOpen } from 'lucide-react';
    import { Paper } from '../types';

    const ResearchWiki: React.FC = () => {
      const [searchTerm, setSearchTerm] = useState('');
      const [selectedCategory, setSelectedCategory] = useState<string>('All');

      const categories = ['All', ...Array.from(new Set(PAPERS.map(p => p.category)))];

      const filteredPapers = useMemo(() => {
        return PAPERS.filter(paper => {
          const matchesSearch = paper.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                                paper.abstract.toLowerCase().includes(searchTerm.toLowerCase());
          const matchesCategory = selectedCategory === 'All' || paper.category === selectedCategory;
          return matchesSearch && matchesCategory;
        });
      }, [searchTerm, selectedCategory]);

      return (
        <div className="pt-24 pb-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h1 className="text-4xl font-serif font-bold text-white mb-4">Open Research Wiki</h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              A public repository of foundational papers on Coherology, Ethical AI, and Cognitive Systems.
              Free for academic and non-commercial use.
            </p>
          </div>

          {/* Search and Filter */}
          <div className="max-w-3xl mx-auto mb-16 space-y-6">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
              <input 
                type="text"
                placeholder="Search papers by title, author, or keyword..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-slate-800/50 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
              />
            </div>
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    selectedCategory === cat 
                      ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/25' 
                      : 'bg-white/5 text-gray-400 hover:bg-white/10'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Papers Grid */}
          <div className="grid gap-6">
            {filteredPapers.length > 0 ? (
              filteredPapers.map((paper) => (
                <div key={paper.id} className="glass-panel p-6 rounded-xl hover:border-indigo-500/30 transition-colors group">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="shrink-0 hidden md:flex flex-col items-center justify-center w-24 bg-white/5 rounded-lg border border-white/5">
                      <FileText className="w-8 h-8 text-indigo-400 mb-2" />
                      <span className="text-xs font-mono text-gray-500">PDF</span>
                    </div>
                    
                    <div className="flex-grow">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="px-2 py-1 rounded text-xs font-semibold bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
                          {paper.category}
                        </span>
                        <span className="text-sm text-gray-500">{paper.date}</span>
                      </div>
                      
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-indigo-300 transition-colors">
                        {paper.title}
                      </h3>
                      <p className="text-sm text-gray-400 italic mb-4">by {paper.author}</p>
                      
                      <p className="text-gray-300 leading-relaxed mb-6">
                        {paper.abstract}
                      </p>

                      <div className="flex items-center gap-4">
                        <button className="flex items-center gap-2 text-sm font-semibold text-white hover:text-indigo-400 transition-colors">
                          <BookOpen className="w-4 h-4" /> Read Abstract
                        </button>
                        <button className="flex items-center gap-2 text-sm font-semibold text-gray-400 hover:text-white transition-colors">
                          <DownloadCloud className="w-4 h-4" /> Download PDF
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-20 text-gray-500">
                <p>No papers found matching your criteria.</p>
              </div>
            )}
          </div>
        </div>
      );
    };

    export default ResearchWiki;
