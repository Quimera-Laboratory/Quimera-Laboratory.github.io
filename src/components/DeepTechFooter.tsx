import React from 'react';
import { 
  Terminal, 
  ExternalLink, 
  Search, 
  Grid, 
  ArrowUp, 
  ShieldCheck, 
  Activity, 
  CheckCircle2, 
  GitFork,
  BookOpen,
  Cpu,
  Layers,
  Compass,
  GraduationCap
} from 'lucide-react';

interface DeepTechFooterProps {
  onOpenCommandPalette: () => void;
  onToggleBlueprintGrid: () => void;
  isBlueprintGridActive: boolean;
}

export const DeepTechFooter: React.FC<DeepTechFooterProps> = ({
  onOpenCommandPalette,
  onToggleBlueprintGrid,
  isBlueprintGridActive,
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/10 pt-16 pb-28 text-gray-400 text-xs sm:text-sm relative z-10 bg-[#020306]/95 backdrop-blur-2xl">
      <div className="w-full max-w-[1240px] mx-auto px-6">
        
        {/* Top Telemetry Strip */}
        <div className="mb-12 p-4 sm:p-5 rounded-2xl bg-[#060810]/80 border border-white/10 flex flex-wrap items-center justify-between gap-4 font-code text-xs">
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <span className="flex items-center gap-2 text-white font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00F5D4] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00F5D4]"></span>
              </span>
              ALL SYSTEMS OPERATIONAL
            </span>
            <span className="text-gray-400 hidden md:inline">
              PoP: <strong className="text-gray-200">GRU-01 (Fastly Anycast CDN)</strong>
            </span>
            <span className="text-gray-400 hidden lg:inline">
              PROTOCOL: <strong className="text-[#00F5D4]">HTTP/3 + QUIC</strong>
            </span>
            <span className="text-gray-400 hidden xl:inline">
              DRIFT: <strong className="text-[#FFB703]">δ &lt; 10⁻¹⁸</strong>
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onOpenCommandPalette}
              className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white border border-white/10 transition-colors cursor-pointer text-xs"
            >
              <Search className="w-3.5 h-3.5 text-[#00F5D4]" />
              <span>Command Palette [ ⌘K ]</span>
            </button>

            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white border border-white/10 transition-colors cursor-pointer text-xs"
              title="Back to top"
            >
              <ArrowUp className="w-3.5 h-3.5 text-sky-400" />
              <span>Top ↑</span>
            </button>
          </div>
        </div>

        {/* 5-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6 mb-14">
          
          {/* Col 1: Identity & Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 text-white font-bold text-base mb-3 font-display">
              <div className="w-10 h-10 rounded-xl bg-[#030305] border border-white/15 p-1 flex items-center justify-center shadow-[0_0_15px_rgba(0,245,212,0.3)] overflow-hidden">
                <img 
                  src="/assets/aistudio/quimera_8332871b.svg" 
                  alt="Quimera Laboratory Insignia" 
                  className="w-full h-full object-contain filter drop-shadow-[0_0_6px_rgba(0,245,212,0.4)]"
                />
              </div>
              <div className="flex flex-col">
                <span className="leading-tight font-bold text-white">Quimera Labs</span>
                <span className="text-[10px] font-code text-gray-400">Quimera Laboratory</span>
              </div>
            </div>
            <p className="text-gray-400 text-xs leading-relaxed mb-4 font-sans">
              Autonomous cybernetic systems, discrete differential geometry, mechanical sympathy, and deterministic distributed engines.
            </p>
            <div className="space-y-1.5 text-[11px] font-code text-gray-500">
              <p>Quimera Laboratory Research</p>
              <p className="text-emerald-400">Kernel Bypass: Active (io_uring)</p>
              <p className="text-sky-400">Deterministic SIMD AVX-512</p>
            </div>
          </div>

          {/* Col 2: Core Engines */}
          <div>
            <h4 className="font-code text-xs font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
              <Layers className="w-3.5 h-3.5 text-[#00F5D4]" />
              Core Engines
            </h4>
            <ul className="space-y-2 font-code text-xs">
              <li>
                <a href="#ecossistema" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <span className="text-[#00F5D4]">01.</span> Quimera Core (Ricci CFG)
                </a>
              </li>
              <li>
                <a href="#ecossistema" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <span className="text-[#9d4edd]">02.</span> KineQuet / KineSQL VFS
                </a>
              </li>
              <li>
                <a href="#kineplex" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <span className="text-sky-400">03.</span> Kineplex Stream Engine
                </a>
              </li>
              <li>
                <a href="#ecossistema" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <span className="text-[#FFB703]">04.</span> Synapse Protocol (Arrow)
                </a>
              </li>
              <li>
                <a href="#ecossistema" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <span className="text-purple-400">05.</span> Ephemeral Kinetic Cells
                </a>
              </li>
              <li>
                <a href="#ecossistema" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <span className="text-pink-400">06.</span> Quimera Anatomy WebGPU
                </a>
              </li>
              <li>
                <a href="#ecossistema" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <span className="text-indigo-400">07.</span> COBOL-Flow & bare-sql
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Publications & Papers */}
          <div>
            <h4 className="font-code text-xs font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
              <BookOpen className="w-3.5 h-3.5 text-[#9d4edd]" />
              Publications & Papers
            </h4>
            <ul className="space-y-2 font-code text-xs">
              <li>
                <a href="#papers" className="hover:text-white transition-colors line-clamp-1" title="Urban Population Dynamics">
                  Urban Population Dynamics (SIAM MMS)
                </a>
              </li>
              <li>
                <a href="#papers" className="hover:text-white transition-colors line-clamp-1" title="Lock-Free Invariant Enforcement">
                  Lock-Free Invariants (io_uring VFS)
                </a>
              </li>
              <li>
                <a href="#papers" className="hover:text-white transition-colors line-clamp-1" title="Synaptic Topological Routing">
                  Synaptic Topological Routing
                </a>
              </li>
              <li>
                <a href="#papers" className="hover:text-white transition-colors line-clamp-1" title="Sub-Centile Financial Accounting">
                  Sub-Centile Accounting Invariants
                </a>
              </li>
              <li>
                <a href="#pesquisadores" className="hover:text-white transition-colors flex items-center gap-1.5 text-[#00F5D4]">
                  <GraduationCap className="w-3 h-3 text-[#00F5D4]" />
                  <span>Faculty & UNICAMP Collaborators</span>
                </a>
              </li>
              <li className="pt-2">
                <button
                  onClick={onOpenCommandPalette}
                  className="text-xs text-[#00F5D4] hover:underline flex items-center gap-1 cursor-pointer"
                >
                  <span>Export All BibTeX Citations</span>
                  <ExternalLink className="w-3 h-3" />
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Philosophy & Stack */}
          <div>
            <h4 className="font-code text-xs font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
              <Compass className="w-3.5 h-3.5 text-[#FFB703]" />
              Philosophy & Stack
            </h4>
            <ul className="space-y-2 font-code text-xs">
              <li>
                <a href="#filosofia" className="hover:text-white transition-colors">
                  Mechanical Sympathy (64B Cache)
                </a>
              </li>
              <li>
                <a href="#filosofia" className="hover:text-white transition-colors">
                  Mathematical Rigor & Geometry
                </a>
              </li>
              <li>
                <a href="#filosofia" className="hover:text-white transition-colors">
                  Immutability & Determinism
                </a>
              </li>
              <li>
                <a href="#stack" className="hover:text-white transition-colors">
                  Linux Kernel: io_uring + eBPF
                </a>
              </li>
              <li>
                <a href="#stack" className="hover:text-white transition-colors">
                  Java 21+ Project Panama FFM
                </a>
              </li>
              <li>
                <a href="#pesquisa" className="hover:text-white transition-colors flex items-center gap-1 text-teal-400">
                  <span>06.</span> Bio-Inspired Systems
                </a>
              </li>
            </ul>
          </div>

          {/* Col 5: Tools & External Links */}
          <div>
            <h4 className="font-code text-xs font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
              <Terminal className="w-3.5 h-3.5 text-emerald-400" />
              Resources & GitHub
            </h4>
            <ul className="space-y-2 font-code text-xs">
              <li>
                <a
                  href="https://github.com/Quimera-Laboratory"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <GitFork className="w-3.5 h-3.5 text-gray-400" />
                  <span>GitHub Organization</span>
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Quimera-Laboratory/kineplex"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <ExternalLink className="w-3.5 h-3.5 text-gray-400" />
                  <span>kineplex Engine Repo</span>
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Quimera-Laboratory/Quimera-Laboratory.github.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <ExternalLink className="w-3.5 h-3.5 text-gray-400" />
                  <span>Portal Source Code</span>
                </a>
              </li>
              <li className="pt-2">
                <button
                  onClick={onToggleBlueprintGrid}
                  className={`flex items-center gap-1.5 px-2.5 py-1 rounded text-[11px] border transition-colors cursor-pointer ${
                    isBlueprintGridActive
                      ? 'bg-[#00F5D4]/15 border-[#00F5D4]/40 text-[#00F5D4]'
                      : 'bg-white/5 border-white/10 text-gray-400 hover:text-white'
                  }`}
                >
                  <Grid className="w-3 h-3" />
                  <span>{isBlueprintGridActive ? 'Grid Mode: ON' : 'Grid Mode: OFF'}</span>
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Institutional & Cryptographic Verification Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col lg:flex-row justify-between items-center gap-4 text-[11px] font-code text-gray-400 text-center lg:text-left">
          <div>
            <span>© {new Date().getFullYear()} Quimera Labs (Quimera Laboratory) • All research rights reserved.</span>
            <span className="hidden sm:inline"> Dual-licensed under MIT & Apache 2.0.</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 text-gray-400">
            <span className="flex items-center gap-1 text-emerald-400/90">
              <ShieldCheck className="w-3.5 h-3.5" />
              GPG Verified Release (SHA-256)
            </span>
            <span>SIAM MMS Monograph 2026</span>
            <span>Reed-Solomon FEC Enabled</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
