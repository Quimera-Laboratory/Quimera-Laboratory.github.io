import React, { useState, useEffect } from 'react';
import { 
  Layers, 
  BookOpen, 
  Cpu, 
  Compass, 
  Search, 
  ArrowUp,
  Activity,
  Terminal,
  Grid
} from 'lucide-react';

interface BottomFloatingBarProps {
  onOpenCommandPalette: () => void;
  onToggleBlueprintGrid: () => void;
  isBlueprintGridActive: boolean;
  activeSection: string;
}

export const BottomFloatingBar: React.FC<BottomFloatingBarProps> = ({
  onOpenCommandPalette,
  onToggleBlueprintGrid,
  isBlueprintGridActive,
  activeSection,
}) => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navItems = [
    { id: 'ecossistema', label: 'Engines', icon: <Layers className="w-3.5 h-3.5" />, href: '#ecossistema' },
    { id: 'papers', label: 'Papers', icon: <BookOpen className="w-3.5 h-3.5" />, href: '#papers' },
    { id: 'stack', label: 'Stack', icon: <Cpu className="w-3.5 h-3.5" />, href: '#stack' },
    { id: 'filosofia', label: 'Philosophy', icon: <Compass className="w-3.5 h-3.5" />, href: '#filosofia' },
  ];

  return (
    <div className="fixed bottom-5 left-1/2 -translate-x-1/2 z-40 max-w-[95vw] pointer-events-auto animate-in fade-in slide-in-from-bottom-4 duration-300">
      <nav 
        aria-label="Quick Navigation Dock"
        className="flex items-center gap-1 sm:gap-2 px-3 sm:px-4 py-2 rounded-full bg-[#080a14]/90 backdrop-blur-2xl border border-white/15 shadow-[0_15px_40px_rgba(0,0,0,0.8),0_0_25px_rgba(0,245,212,0.12)] transition-all font-code text-xs"
      >
        {/* Navigation Anchor Links */}
        <div className="flex items-center gap-1">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={item.href}
                className={`flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-full transition-all text-xs cursor-pointer no-underline ${
                  isActive
                    ? 'bg-[#00F5D4]/20 text-[#00F5D4] border border-[#00F5D4]/40 font-semibold shadow-[0_0_12px_rgba(0,245,212,0.2)]'
                    : 'text-gray-400 hover:text-white hover:bg-white/5 border border-transparent'
                }`}
              >
                {item.icon}
                <span className="hidden sm:inline">{item.label}</span>
              </a>
            );
          })}
        </div>

        {/* Divider */}
        <div className="h-4 w-px bg-white/10 mx-1" />

        {/* Quick Command Palette Button [ ⌘K ] */}
        <button
          onClick={onOpenCommandPalette}
          className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/15 text-gray-200 hover:text-white border border-white/10 transition-colors cursor-pointer group"
          title="Open Command Palette (Cmd + K / Ctrl + K)"
        >
          <Search className="w-3.5 h-3.5 text-[#00F5D4] group-hover:scale-110 transition-transform" />
          <span className="hidden md:inline text-[11px]">Search</span>
          <span className="px-1.5 py-0.2 rounded bg-black/60 text-[9px] text-[#00F5D4] border border-[#00F5D4]/30">
            ⌘K
          </span>
        </button>

        {/* Blueprint Grid Toggle */}
        <button
          onClick={onToggleBlueprintGrid}
          className={`p-1.5 rounded-full border transition-all cursor-pointer ${
            isBlueprintGridActive
              ? 'bg-[#00F5D4]/20 border-[#00F5D4]/40 text-[#00F5D4]'
              : 'bg-white/5 border-white/10 text-gray-400 hover:text-white hover:bg-white/10'
          }`}
          title={isBlueprintGridActive ? 'Disable Blueprint Grid' : 'Enable Blueprint Grid Mode'}
        >
          <Grid className="w-3.5 h-3.5" />
        </button>

        {/* Back to Top */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="flex items-center justify-center p-1.5 rounded-full bg-white/10 hover:bg-[#00F5D4]/20 text-white hover:text-[#00F5D4] border border-white/15 hover:border-[#00F5D4]/40 transition-all cursor-pointer ml-1"
            title="Back to Top"
            aria-label="Back to Top"
          >
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        )}
      </nav>
    </div>
  );
};
