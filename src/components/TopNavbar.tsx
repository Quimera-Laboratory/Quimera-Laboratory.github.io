import React, { useState, useEffect } from 'react';
import { 
  Search, 
  Grid, 
  Menu, 
  X, 
  ExternalLink, 
  Activity, 
  Zap, 
  Layers, 
  BookOpen, 
  Cpu, 
  Compass, 
  GitFork 
} from 'lucide-react';

interface TopNavbarProps {
  onOpenCommandPalette: () => void;
  onToggleBlueprintGrid: () => void;
  isBlueprintGridActive: boolean;
  activeSection: string;
}

export const TopNavbar: React.FC<TopNavbarProps> = ({
  onOpenCommandPalette,
  onToggleBlueprintGrid,
  isBlueprintGridActive,
  activeSection,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [liveLatency, setLiveLatency] = useState(0.38);

  // Micro-fluctuate latency realistically
  useEffect(() => {
    const timer = setInterval(() => {
      const delta = (Math.random() - 0.5) * 0.04;
      setLiveLatency(Number(Math.max(0.32, Math.min(0.44, 0.38 + delta)).toFixed(2)));
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  const navLinks = [
    { id: 'ecossistema', label: 'Ecosystem', href: '#ecossistema' },
    { id: 'papers', label: 'Publications', href: '#papers' },
    { id: 'pesquisa', label: 'Research', href: '#pesquisa' },
    { id: 'stack', label: 'Stack', href: '#stack' },
    { id: 'filosofia', label: 'Philosophy', href: '#filosofia' },
  ];

  return (
    <header className="fixed top-3.5 left-0 right-0 z-50 flex justify-center px-4">
      <nav 
        aria-label="Main Navigation"
        className="w-full max-w-[1180px] flex items-center justify-between px-4 sm:px-6 py-2.5 bg-[#08090e]/85 backdrop-blur-2xl border border-white/10 rounded-full shadow-[0_12px_40px_rgba(0,0,0,0.7),0_0_1px_rgba(255,255,255,0.12)] transition-all"
      >
        {/* Left: Brand Identity & Kernel Ticker */}
        <div className="flex items-center gap-3.5">
          <a href="#" className="flex items-center gap-2.5 group text-white no-underline">
            <div className="w-9 h-9 rounded-xl bg-[#030305] border border-white/15 flex items-center justify-center p-1 shadow-[0_0_15px_rgba(0,245,212,0.3)] group-hover:shadow-[0_0_22px_rgba(0,245,212,0.65)] group-hover:border-[#00F5D4]/50 transition-all overflow-hidden">
              <img 
                src="/assets/aistudio/quimera_8332871b.svg" 
                alt="Quimera Laboratory Insignia" 
                className="w-full h-full object-contain filter drop-shadow-[0_0_6px_rgba(0,245,212,0.4)] group-hover:scale-105 transition-transform" 
              />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-[0.95rem] tracking-tight text-white group-hover:text-[#00F5D4] transition-colors leading-none font-display">
                Quimera Labs
              </span>
              <span className="text-[10px] font-code text-gray-400">
                Quimera Laboratory
              </span>
            </div>
          </a>

          {/* Kernel Bypass & Latency Micro Badge */}
          <div className="hidden lg:flex items-center gap-2.5 px-3 py-1 rounded-full bg-slate-900/80 border border-white/10 text-[10px] font-code text-gray-300">
            <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
              </span>
              KERNEL_BYPASS
            </span>
            <span className="text-gray-600">•</span>
            <span className="text-gray-400">
              JITTER: <strong className="text-[#00F5D4] font-medium">{liveLatency}ms</strong>
            </span>
          </div>
        </div>

        {/* Center: Desktop Active Section Spy Links */}
        <ul className="hidden xl:flex items-center gap-1.5 list-none m-0 p-0 text-xs font-code">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <li key={link.id}>
                <a
                  href={link.href}
                  className={`px-3 py-1.5 rounded-full transition-all text-xs no-underline cursor-pointer ${
                    isActive
                      ? 'bg-[#00F5D4]/15 text-[#00F5D4] border border-[#00F5D4]/35 font-semibold shadow-[0_0_15px_rgba(0,245,212,0.15)]'
                      : 'text-gray-400 hover:text-white hover:bg-white/5 border border-transparent'
                  }`}
                >
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Right: Search, Grid Toggle, and GitHub */}
        <div className="flex items-center gap-2 sm:gap-2.5">
          {/* Command Palette Trigger [ ⌘K ] */}
          <button
            onClick={onOpenCommandPalette}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white border border-white/10 hover:border-[#00F5D4]/30 transition-all font-code text-xs cursor-pointer shadow-sm group"
            title="Open Command Palette (Cmd + K / Ctrl + K)"
          >
            <Search className="w-3.5 h-3.5 text-[#00F5D4] group-hover:scale-110 transition-transform" />
            <span className="hidden sm:inline">Search</span>
            <span className="px-1.5 py-0.2 rounded bg-black/60 text-[10px] text-gray-400 border border-white/10 group-hover:text-white">
              ⌘K
            </span>
          </button>

          {/* Blueprint Grid Mode Quick Toggle */}
          <button
            onClick={onToggleBlueprintGrid}
            className={`p-2 rounded-full border transition-all cursor-pointer ${
              isBlueprintGridActive 
                ? 'bg-[#00F5D4]/20 border-[#00F5D4]/40 text-[#00F5D4] shadow-[0_0_12px_rgba(0,245,212,0.2)]' 
                : 'bg-white/5 border-white/10 text-gray-400 hover:text-white hover:bg-white/10'
            }`}
            title={isBlueprintGridActive ? 'Disable Blueprint Grid' : 'Enable Blueprint Grid Mode'}
          >
            <Grid className="w-3.5 h-3.5" />
          </button>

          {/* GitHub Organization with Release Tag */}
          <a
            href="https://github.com/Quimera-Laboratory"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 bg-white/10 hover:bg-white/20 text-white border border-white/15 hover:border-white/30 rounded-full px-3.5 py-1.5 text-xs font-semibold transition-all hover:-translate-y-0.5"
            title="Quimera Laboratory on GitHub"
          >
            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
              />
            </svg>
            <span>GitHub</span>
            <span className="hidden md:inline text-[10px] text-sky-300 font-code px-1.5 py-0.2 rounded bg-sky-500/20">
              v2.4
            </span>
          </a>

          {/* Mobile hamburger menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 text-gray-400 hover:text-white rounded-full hover:bg-white/5 border border-white/10"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Dropdown */}
      {mobileMenuOpen && (
        <div className="xl:hidden absolute top-16 left-4 right-4 bg-[#080a14]/95 backdrop-blur-2xl border border-white/15 rounded-2xl p-5 shadow-[0_20px_60px_rgba(0,0,0,0.9)] flex flex-col gap-3 font-code text-xs animate-in fade-in slide-in-from-top-2 duration-200">
          {/* Quick search input in mobile drawer */}
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenCommandPalette();
            }}
            className="w-full flex items-center justify-between p-2.5 rounded-xl bg-white/5 border border-white/10 text-gray-300 text-xs mb-2"
          >
            <div className="flex items-center gap-2">
              <Search className="w-4 h-4 text-[#00F5D4]" />
              <span>Search Command Palette...</span>
            </div>
            <span className="px-1.5 py-0.5 rounded bg-black/50 text-[10px] text-gray-400">
              ⌘K
            </span>
          </button>

          {/* Mobile links */}
          <a
            href="#ecossistema"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center justify-between px-3 py-2 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg"
          >
            <span className="flex items-center gap-2">
              <Layers className="w-3.5 h-3.5 text-[#00F5D4]" />
              [01. Ecosystem] — Core Engines
            </span>
            <span className="text-gray-500 text-[11px]">7 Engines</span>
          </a>

          <a
            href="#papers"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center justify-between px-3 py-2 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg"
          >
            <span className="flex items-center gap-2">
              <BookOpen className="w-3.5 h-3.5 text-[#9d4edd]" />
              [02. Publications] — SIAM & ArXiv
            </span>
            <span className="text-gray-500 text-[11px]">4 Papers</span>
          </a>

          <a
            href="#pesquisa"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center justify-between px-3 py-2 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg"
          >
            <span className="flex items-center gap-2">
              <Compass className="w-3.5 h-3.5 text-sky-400" />
              [03. Research] — Research Pillars
            </span>
            <span className="text-gray-500 text-[11px]">6 Pillars</span>
          </a>

          <a
            href="#stack"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center justify-between px-3 py-2 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg"
          >
            <span className="flex items-center gap-2">
              <Cpu className="w-3.5 h-3.5 text-[#FFB703]" />
              [04. Stack] — Low-Level Systems
            </span>
            <span className="text-gray-500 text-[11px]">Matrix</span>
          </a>

          <a
            href="#filosofia"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center justify-between px-3 py-2 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg"
          >
            <span className="flex items-center gap-2">
              <Zap className="w-3.5 h-3.5 text-emerald-400" />
              [05. Philosophy] — Mechanical Sympathy
            </span>
            <span className="text-gray-500 text-[11px]">3 Axioms</span>
          </a>

          <div className="pt-2 border-t border-white/10 flex items-center justify-between mt-1">
            <span className="text-[11px] text-gray-500">Blueprint Grid:</span>
            <button
              onClick={onToggleBlueprintGrid}
              className={`px-3 py-1 rounded text-[11px] border ${
                isBlueprintGridActive ? 'bg-[#00F5D4]/20 border-[#00F5D4]/40 text-[#00F5D4]' : 'bg-white/5 text-gray-400 border-white/10'
              }`}
            >
              {isBlueprintGridActive ? 'Enabled' : 'Disabled'}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
