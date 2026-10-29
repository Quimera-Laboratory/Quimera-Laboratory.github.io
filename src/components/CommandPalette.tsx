import React, { useState, useEffect } from 'react';
import { 
  Search, 
  Terminal, 
  FileText, 
  Layers, 
  Cpu, 
  Database, 
  Network, 
  ExternalLink, 
  Copy, 
  Check, 
  X, 
  Sparkles,
  Grid,
  GraduationCap
} from 'lucide-react';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onToggleBlueprintGrid: () => void;
  isBlueprintGridActive: boolean;
  onOpenBibtex: (paperId: string) => void;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({
  isOpen,
  onClose,
  onToggleBlueprintGrid,
  isBlueprintGridActive,
  onOpenBibtex,
}) => {
  const [query, setQuery] = useState('');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // Close on Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const quickActions = [
    {
      id: 'toggle-grid',
      label: isBlueprintGridActive ? 'Disable Blueprint Grid' : 'Enable Blueprint Grid Mode',
      category: 'System / Display',
      icon: <Grid className="w-4 h-4 text-[#00F5D4]" />,
      action: () => {
        onToggleBlueprintGrid();
        onClose();
      },
    },
    {
      id: 'nav-ecosystem',
      label: 'Navigate to: Core Ecosystem Engines',
      category: 'Navigation',
      icon: <Layers className="w-4 h-4 text-[#9d4edd]" />,
      action: () => {
        window.location.hash = '#ecossistema';
        onClose();
      },
    },
    {
      id: 'nav-papers',
      label: 'Navigate to: Publications & Preprints (SIAM / ArXiv)',
      category: 'Navigation',
      icon: <FileText className="w-4 h-4 text-[#FFB703]" />,
      action: () => {
        window.location.hash = '#papers';
        onClose();
      },
    },
    {
      id: 'nav-researchers',
      label: 'Navigate to: Researchers & Scientific Faculty',
      category: 'Navigation',
      icon: <GraduationCap className="w-4 h-4 text-[#00F5D4]" />,
      action: () => {
        window.location.hash = '#pesquisadores';
        onClose();
      },
    },
    {
      id: 'nav-stack',
      label: 'Navigate to: Systems Architecture & Runtime Matrix',
      category: 'Navigation',
      icon: <Cpu className="w-4 h-4 text-emerald-400" />,
      action: () => {
        window.location.hash = '#stack';
        onClose();
      },
    },
    {
      id: 'nav-philosophy',
      label: 'Navigate to: Engineering Philosophy & Axioms',
      category: 'Navigation',
      icon: <Terminal className="w-4 h-4 text-sky-400" />,
      action: () => {
        window.location.hash = '#filosofia';
        onClose();
      },
    },
    {
      id: 'bibtex-paper-1',
      label: 'Copy BibTeX: Urban Population Dynamics (SIAM MMS 2026)',
      category: 'Publications / BibTeX',
      icon: <Copy className="w-4 h-4 text-[#00F5D4]" />,
      action: () => {
        onOpenBibtex('urban-dynamics');
        onClose();
      },
    },
    {
      id: 'bibtex-paper-2',
      label: 'Copy BibTeX: Lock-Free Invariant Enforcement & io_uring VFS',
      category: 'Publications / BibTeX',
      icon: <Copy className="w-4 h-4 text-[#FFB703]" />,
      action: () => {
        onOpenBibtex('kinesql-io_uring');
        onClose();
      },
    },
  ];

  const searchResults = [
    { title: 'Gemirson dos Santos Silva', tag: 'PI / Systems', desc: 'Principal Investigator: Discrete Differential Geometry, io_uring, AVX-512, sub-centile invariants', hash: '#pesquisadores' },
    { title: 'Prof. Dr. João Frederico Meyer', tag: 'Faculty / UNICAMP', desc: 'Senior Collaborating Researcher (IMECC/UNICAMP): Biomathematics, PDEs, Holling Type II', hash: '#pesquisadores' },
    { title: 'Quimera Research Collectives', tag: 'Working Groups', desc: 'Distributed Systems, Cybernetic Architecture, and Quantitative Engineering Labs', hash: '#pesquisadores' },
    { title: 'Quimera Core', tag: 'cs.SE / math.DS', desc: 'Cybernetic immune testing platform with Ollivier-Ricci curvature and synthetic mRNA', hash: '#ecossistema' },
    { title: 'KineQuet / KineSQL', tag: 'cs.DC', desc: 'Append-only engine with SQLite VFS over io_uring, AVX2, and Reed-Solomon FEC', hash: '#ecossistema' },
    { title: 'Kineplex Engine', tag: 'cs.PF', desc: 'Cache-aligned lock-free stream multiplexer with AVX-512 SIMD vectorization', hash: '#kineplex' },
    { title: 'Synapse Protocol', tag: 'cs.NI / math.DG', desc: 'Decentralized topological routing guided by Fisher information metrics and Arrow IPC', hash: '#ecossistema' },
    { title: 'Ephemeral Kinetic Cells (EKC)', tag: 'cs.OS', desc: 'Firecracker microVM sandboxes with bumpalo arena memory allocators', hash: '#ecossistema' },
    { title: 'Quimera Labs Anatomy', tag: 'cs.GR', desc: 'WebGPU clinical visualization and real-time digital histopathology engine', hash: '#ecossistema' },
    { title: 'COBOL-Flow V5 & bare-sql', tag: 'cs.PL', desc: 'AOT Keith Cooper SSA mainframe decompilation and Project Panama FFM SQL', hash: '#ecossistema' },
    { title: 'Paper: Holling Type II & Elastic Capacity', tag: 'math.DS', desc: 'Elastic carrying capacity coupled to saturable social friction and graph diffusion', hash: '#papers' },
    { title: 'Paper: Event Sourcing & Sub-Centile Invariants', tag: 'q-fin.CP', desc: 'Deterministic sub-centile balance reconciliation and drift elimination', hash: '#papers' },
    { title: 'Applied Bio-Inspired Systems', tag: '06 // q-bio.MN', desc: 'Coupled population kinetics, synthetic mRNA signaling, and stigmergic intelligence', hash: '#pesquisa' },
  ].filter(item => {
    if (!query) return true;
    const q = query.toLowerCase();
    return item.title.toLowerCase().includes(q) || item.desc.toLowerCase().includes(q) || item.tag.toLowerCase().includes(q);
  });

  return (
    <div className="fixed inset-0 z-[1000] flex items-start justify-center pt-20 px-4 bg-black/75 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="w-full max-w-2xl bg-[#090b14] border border-white/15 rounded-2xl shadow-[0_25px_80px_rgba(0,0,0,0.9),0_0_40px_rgba(0,245,212,0.15)] overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center gap-3 px-4 py-3.5 border-b border-white/10 bg-[#0d101c]/90">
          <div className="w-6 h-6 rounded-md bg-[#030305] border border-white/15 p-0.5 flex items-center justify-center shrink-0">
            <img 
              src="/assets/aistudio/quimera_8332871b.svg" 
              alt="Quimera Logo" 
              className="w-full h-full object-contain" 
            />
          </div>
          <Search className="w-4 h-4 text-[#00F5D4]" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search papers, engines, theorems (e.g. Holling Type II, Arrow IPC, io_uring)..."
            className="w-full bg-transparent text-sm sm:text-base text-white placeholder-gray-500 focus:outline-none font-code"
          />
          {query && (
            <button 
              onClick={() => setQuery('')}
              className="p-1 text-gray-400 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <span className="hidden sm:inline-block px-2 py-0.5 rounded bg-white/10 text-[10px] font-code text-gray-400">
            ESC
          </span>
        </div>

        {/* Content Area */}
        <div className="max-h-[60vh] overflow-y-auto p-3 space-y-4">
          {/* Quick Actions if query is empty */}
          {!query && (
            <div>
              <div className="px-3 py-1 text-[11px] font-code text-gray-500 uppercase tracking-wider">
                System Quick Actions
              </div>
              <div className="space-y-1 mt-1">
                {quickActions.map((act) => (
                  <button
                    key={act.id}
                    onClick={act.action}
                    className="w-full flex items-center justify-between p-2.5 rounded-lg text-left hover:bg-white/5 transition-colors group cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <span className="p-1.5 rounded-md bg-white/5 border border-white/10 group-hover:border-[#00F5D4]/40">
                        {act.icon}
                      </span>
                      <span className="text-sm font-medium text-gray-200 group-hover:text-white">
                        {act.label}
                      </span>
                    </div>
                    <span className="text-[11px] font-code text-gray-500 group-hover:text-gray-300">
                      {act.category}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Search Results */}
          <div>
            <div className="px-3 py-1 text-[11px] font-code text-gray-500 uppercase tracking-wider">
              {query ? `Matching Results (${searchResults.length})` : 'Laboratory Engines & Publications'}
            </div>
            <div className="space-y-1 mt-1">
              {searchResults.length === 0 ? (
                <div className="p-6 text-center text-sm text-gray-500 font-code">
                  No modules or papers found for "{query}".
                </div>
              ) : (
                searchResults.map((item, idx) => (
                  <a
                    key={idx}
                    href={item.hash}
                    onClick={onClose}
                    className="flex items-center justify-between p-2.5 rounded-lg hover:bg-white/5 transition-colors group text-left block no-underline"
                  >
                    <div className="pr-4">
                      <div className="flex items-center gap-2 mb-0.5">
                        <span className="text-sm font-bold text-white group-hover:text-[#00F5D4] transition-colors">
                          {item.title}
                        </span>
                        <span className="text-[10px] font-code px-1.5 py-0.2 rounded bg-white/5 text-gray-400 border border-white/5">
                          {item.tag}
                        </span>
                      </div>
                      <p className="text-xs text-gray-400 line-clamp-1">
                        {item.desc}
                      </p>
                    </div>
                    <ExternalLink className="w-4 h-4 text-gray-500 group-hover:text-[#00F5D4] shrink-0" />
                  </a>
                ))
              )}
            </div>
          </div>
        </div>

        {/* Footer info */}
        <div className="px-4 py-2.5 border-t border-white/5 bg-[#070912] flex items-center justify-between text-[11px] font-code text-gray-400">
          <span>Quimera Command Palette v2.4</span>
          <span className="text-gray-500">Navigate with ↑ ↓ and press Enter</span>
        </div>
      </div>
    </div>
  );
};
