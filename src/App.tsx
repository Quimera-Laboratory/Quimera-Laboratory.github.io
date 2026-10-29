import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  ExternalLink, 
  Zap, 
  Globe, 
  ShieldCheck, 
  GitFork, 
  Layers, 
  CheckCircle2,
  Sparkles,
  Terminal,
  Activity,
  Compass,
  Cpu,
  BookOpen,
  Search,
  Grid
} from 'lucide-react';
import { TopNavbar } from './components/TopNavbar';
import { BottomFloatingBar } from './components/BottomFloatingBar';
import { DeepTechFooter } from './components/DeepTechFooter';
import { TopologicalManifoldCanvas } from './components/TopologicalManifoldCanvas';
import { KineticCanvas } from './components/KineticCanvas';
import { EcosystemEnginesGrid } from './components/EcosystemEnginesGrid';
import { PublicationsSection, ScientificPaper, papersDatabase } from './components/PublicationsSection';
import { ResearchersSection } from './components/ResearchersSection';
import { BibtexDrawer } from './components/BibtexDrawer';
import { CommandPalette } from './components/CommandPalette';
import { ResearchPillars } from './components/ResearchPillars';
import { TechStackTable } from './components/TechStackTable';
import { EngineeringPhilosophy } from './components/EngineeringPhilosophy';

export const App: React.FC = () => {
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);
  const [blueprintGridActive, setBlueprintGridActive] = useState(false);
  const [selectedBibtexPaper, setSelectedBibtexPaper] = useState<ScientificPaper | null>(null);
  const [heroViewMode, setHeroViewMode] = useState<'manifold' | 'stream'>('manifold');
  const [activeSection, setActiveSection] = useState<string>('hero');

  // Command Palette Keyboard Shortcut (Cmd + K / Ctrl + K)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setCommandPaletteOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Active section scroll spy
  useEffect(() => {
    const sectionIds = ['ecossistema', 'papers', 'pesquisadores', 'pesquisa', 'stack', 'filosofia'];
    
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const buffer = 200;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop - buffer;
          if (scrollY >= top) {
            setActiveSection(id);
            return;
          }
        }
      }
      setActiveSection('hero');
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleOpenBibtexById = (paperId: string) => {
    const paper = papersDatabase.find((p) => p.id === paperId) || papersDatabase[0];
    setSelectedBibtexPaper(paper);
  };

  return (
    <div className="min-h-screen bg-[#030305] text-[#f9fafb] relative selection:bg-[#00F5D4]/25 selection:text-[#00F5D4]">
      {/* Dynamic Backgrounds */}
      <div className="quantum-noise" />
      <div className={`blueprint-grid ${blueprintGridActive ? 'blueprint-grid-high opacity-100' : 'opacity-40'}`} />

      {/* [00] Enhanced Top Telemetry HUD & Navigation */}
      <TopNavbar
        onOpenCommandPalette={() => setCommandPaletteOpen(true)}
        onToggleBlueprintGrid={() => setBlueprintGridActive(!blueprintGridActive)}
        isBlueprintGridActive={blueprintGridActive}
        activeSection={activeSection}
      />

      {/* Main Content Wrap */}
      <main className="w-full max-w-[1240px] mx-auto px-6 relative z-10">
        
        {/* [01] HERO SECTION: Where Differential Geometry Meets Mechanical Sympathy */}
        <section id="hero" className="min-h-screen flex flex-col justify-center items-center text-center pt-32 pb-20 relative">
          
          {/* Quimera Emblem Insignia */}
          <div className="relative mb-6 group cursor-pointer" title="Quimera Laboratory Insignia">
            <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-r from-[#00F5D4] via-[#9d4edd] to-[#FFB703] opacity-35 blur-xl group-hover:opacity-75 transition duration-500 animate-pulse-glow" />
            <div className="relative w-24 h-24 sm:w-28 sm:h-28 p-2.5 rounded-2xl bg-[#030305] border border-white/20 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.85),0_0_35px_rgba(0,245,212,0.2)] flex items-center justify-center overflow-hidden">
              <img 
                src="/assets/aistudio/quimera_8332871b.svg" 
                alt="Quimera Laboratory Insignia" 
                className="w-full h-full object-contain filter drop-shadow-[0_0_10px_rgba(0,245,212,0.4)] group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>

          {/* Eyebrow Tag */}
          <div className="inline-flex items-center gap-2 font-code text-xs text-[#00F5D4] bg-[#00F5D4]/10 border border-[#00F5D4]/25 px-4 py-1.5 rounded-full mb-6 shadow-[0_0_25px_rgba(0,245,212,0.12)]">
            <span className="w-2 h-2 rounded-full bg-[#00F5D4] shadow-[0_0_8px_#00F5D4]" />
            <span>[ QUIMERA LABORATORY // APPLIED MATH & SYSTEMS R&D ]</span>
          </div>

          {/* Master Headline */}
          <h1 className="w-full max-w-[1100px] text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-[1.05] mb-6 font-display bg-gradient-to-b from-white via-white to-white/60 bg-clip-text text-transparent">
            Where Differential Geometry Meets{' '}
            <span className="bg-gradient-to-r from-[#00F5D4] via-[#9d4edd] to-[#FFB703] bg-clip-text text-transparent">
              Mechanical Sympathy.
            </span>
          </h1>

          {/* Sub-headline */}
          <p className="max-w-[820px] text-base sm:text-lg text-gray-300 font-normal leading-relaxed mb-8">
            An applied research and systems engineering laboratory operating at the intersection of discrete differential geometry, mechanical sympathy, and high-throughput computing. We engineer deterministic consensus engines over <code className="text-[#00F5D4] font-code">io_uring</code>, topological routing primitives, and formal compilers.
          </p>

          {/* Tabular Monospace Instant Metrics Bar */}
          <div className="w-full max-w-[1080px] p-3.5 sm:p-4 rounded-xl bg-[#070912]/80 border border-white/10 backdrop-blur-md mb-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 font-code text-xs">
            <div className="flex flex-col items-center sm:items-start p-2 rounded bg-black/40 border border-white/5">
              <span className="text-gray-400 text-[10px]">IPC SERIALIZATION</span>
              <span className="text-[#00F5D4] font-semibold">0-Copy (Arrow/FlatBuffers)</span>
            </div>
            <div className="flex flex-col items-center sm:items-start p-2 rounded bg-black/40 border border-white/5">
              <span className="text-gray-400 text-[10px]">I/O ENGINE</span>
              <span className="text-emerald-400 font-semibold">Linux io_uring + eBPF</span>
            </div>
            <div className="flex flex-col items-center sm:items-start p-2 rounded bg-black/40 border border-white/5">
              <span className="text-gray-400 text-[10px]">VECTORIZATION</span>
              <span className="text-[#9d4edd] font-semibold">AVX2 / AVX-512 SIMD</span>
            </div>
            <div className="flex flex-col items-center sm:items-start p-2 rounded bg-black/40 border border-white/5">
              <span className="text-gray-400 text-[10px]">ROUNDING DRIFT</span>
              <span className="text-[#FFB703] font-semibold">0.0000 (Sub-centile Invariant)</span>
            </div>
          </div>

          {/* Hero Action Buttons */}
          <div className="flex items-center gap-4 flex-wrap justify-center mb-6">
            <a
              href="#ecossistema"
              className="bg-white text-gray-950 font-bold text-sm sm:text-base px-8 py-3.5 rounded-xl inline-flex items-center gap-2.5 transition-all duration-200 hover:-translate-y-0.5 shadow-[0_4px_25px_rgba(255,255,255,0.25)] hover:shadow-[0_8px_35px_rgba(255,255,255,0.4)]"
            >
              <span>Explore Core Engines</span>
              <ArrowRight className="w-4 h-4 stroke-[2.5]" />
            </a>

            <a
              href="#papers"
              className="bg-gray-900/80 text-white font-semibold text-sm sm:text-base px-7 py-3.5 rounded-xl inline-flex items-center gap-2.5 border border-white/10 backdrop-blur-md transition-all duration-200 hover:bg-gray-800 hover:border-white/25 hover:-translate-y-0.5"
            >
              <BookOpen className="w-4 h-4 text-[#00F5D4]" />
              <span>Publications & Monographs</span>
            </a>
          </div>

          {/* Interactive Hero Canvas: Topological Manifold or Kinetic Stream */}
          <div className="w-full">
            <div className="flex items-center justify-between mb-2 px-2 text-xs font-code text-gray-400">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#00F5D4]" />
                INTERACTIVE TOPOLOGY SIMULATOR (60 FPS)
              </span>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setHeroViewMode('manifold')}
                  className={`px-3 py-1 rounded-md transition-all border cursor-pointer ${
                    heroViewMode === 'manifold'
                      ? 'bg-[#00F5D4]/20 text-[#00F5D4] border-[#00F5D4]/40 font-semibold'
                      : 'bg-white/5 text-gray-400 border-white/5 hover:text-white'
                  }`}
                >
                  Riemannian 3D Manifold
                </button>
                <button
                  onClick={() => setHeroViewMode('stream')}
                  className={`px-3 py-1 rounded-md transition-all border cursor-pointer ${
                    heroViewMode === 'stream'
                      ? 'bg-sky-500/20 text-sky-400 border-sky-500/40 font-semibold'
                      : 'bg-white/5 text-gray-400 border-white/5 hover:text-white'
                  }`}
                >
                  kineplex Stream Waveform
                </button>
              </div>
            </div>

            {heroViewMode === 'manifold' ? (
              <TopologicalManifoldCanvas />
            ) : (
              <KineticCanvas />
            )}
          </div>
        </section>

        {/* [02] INTERACTIVE BENTO GRID: CORE ECOSYSTEM ENGINES */}
        <section id="ecossistema" className="py-24 border-t border-white/5">
          <div className="mb-14">
            <div className="inline-flex items-center gap-2 font-code text-xs text-[#00F5D4] bg-[#00F5D4]/10 border border-[#00F5D4]/20 px-3 py-1 rounded-md mb-4">
              <span>01. CORE ECOSYSTEM ENGINES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight mb-4 text-white font-display">
              Core Ecosystem Engines
            </h2>
            <p className="text-gray-400 text-base sm:text-lg max-w-3xl leading-relaxed">
              From discrete curvature-based mutation testing and 64-byte cache-aligned multiplexers to zero-copy network routing and AOT transpilation.
            </p>
          </div>

          <EcosystemEnginesGrid />
        </section>

        {/* [03] SEÇÃO ESPECIAL: PUBLICATIONS, PREPRINTS & MATHEMATICAL MONOGRAPHS */}
        <PublicationsSection onSelectBibtex={(paper) => setSelectedBibtexPaper(paper)} />

        {/* [04] RESEARCHERS & SCIENTIFIC FACULTY */}
        <ResearchersSection onOpenBibtexForPaper={handleOpenBibtexById} />

        {/* [05] LINHAS DE PESQUISA E PILARES TECNOLÓGICOS */}
        <section id="pesquisa" className="py-24 border-t border-white/5">
          <div className="mb-12">
            <div className="inline-flex items-center gap-2 font-code text-xs text-[#9d4edd] bg-[#9d4edd]/10 border border-[#9d4edd]/25 px-3 py-1 rounded-md mb-4">
              <span>04. RESEARCH AXIS & THEOREMS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight mb-4 text-white font-display">
              Research Divisions & Foundational Pillars
            </h2>
            <p className="text-gray-400 text-base sm:text-lg max-w-3xl leading-relaxed">
              Axiomatic formalization of autonomous systems, sub-centile balance invariants, multiscale population dynamics, and zero-cost runtime abstractions.
            </p>
          </div>

          <ResearchPillars />
        </section>

        {/* [06] SYSTEMS ARCHITECTURE & RUNTIME MATRIX */}
        <section id="stack" className="py-24 border-t border-white/5">
          <div className="mb-12">
            <div className="inline-flex items-center gap-2 font-code text-xs text-[#FFB703] bg-[#FFB703]/10 border border-[#FFB703]/25 px-3 py-1 rounded-md mb-4">
              <span>05. LOW-LEVEL SYSTEMS & RUNTIMES MATRIX</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight mb-4 text-white font-display">
              Systems Architecture & Runtime Matrix
            </h2>
            <p className="text-gray-400 text-base sm:text-lg max-w-3xl leading-relaxed">
              Low-level primitives in Rust, C++23, io_uring, eBPF, and AVX-512 interfaced with modern managed runtimes including Java 21+ Project Panama, DuckDB, WebGPU, and Firecracker microVMs.
            </p>
          </div>

          <TechStackTable />
        </section>

        {/* [07] ENGINEERING PHILOSOPHY */}
        <section id="filosofia" className="py-24 border-t border-white/5">
          <div className="mb-12">
            <div className="inline-flex items-center gap-2 font-code text-xs text-sky-400 bg-sky-400/10 border border-sky-400/25 px-3 py-1 rounded-md mb-4">
              <span>06. THREE INVIOLABLE PRINCIPLES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight mb-4 text-white font-display">
              Engineering Philosophy & Axioms
            </h2>
            <p className="text-gray-400 text-base sm:text-lg max-w-3xl leading-relaxed">
              Core mathematical and computational principles governing state replication, hardware utilization, and deterministic execution.
            </p>
          </div>

          <EngineeringPhilosophy />
        </section>

        {/* OPEN RESEARCH CTA SECTION */}
        <section className="pt-16 pb-28 text-center">
          <div className="relative rounded-3xl p-10 sm:p-20 overflow-hidden border border-[#00F5D4]/30 bg-[radial-gradient(circle_at_50%_0%,rgba(0,245,212,0.15)_0%,rgba(10,13,24,0.85)_75%)] shadow-[0_30px_90px_-20px_rgba(0,0,0,0.9)]">
            <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#00F5D4]/15 blur-3xl pointer-events-none rounded-full" />

            <div className="relative z-10">
              <div className="inline-flex items-center gap-1.5 text-xs font-code text-[#00F5D4] bg-[#00F5D4]/10 px-3 py-1 rounded-full mb-6 border border-[#00F5D4]/20">
                <Sparkles className="w-3.5 h-3.5" />
                <span>CYBERNETIC R&D // OPEN INITIATIVE</span>
              </div>

              <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight text-white mb-5 font-display">
                Open Research & Applied Computing
              </h2>

              <p className="max-w-[640px] mx-auto text-base sm:text-lg text-gray-300 mb-10 leading-relaxed font-sans">
                Review research monographs in SIAM and arXiv, contribute to open-source low-latency engines in Rust and C++, or run a topological relay node.
              </p>

              <div className="flex items-center gap-4 flex-wrap justify-center">
                <a
                  href="https://github.com/Quimera-Laboratory"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-gray-950 font-bold text-sm sm:text-base px-8 py-3.5 rounded-xl inline-flex items-center gap-3 transition-all duration-200 hover:-translate-y-0.5 shadow-[0_4px_25px_rgba(255,255,255,0.25)] hover:shadow-[0_8px_35px_rgba(255,255,255,0.4)]"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    />
                  </svg>
                  <span>View GitHub Organization</span>
                </a>

                <button
                  onClick={() => setCommandPaletteOpen(true)}
                  className="bg-black/60 text-white font-semibold text-sm sm:text-base px-8 py-3.5 rounded-xl inline-flex items-center gap-2.5 border border-white/15 backdrop-blur-md transition-all duration-200 hover:bg-white/10 hover:border-white/30 cursor-pointer"
                >
                  <Search className="w-4 h-4 text-[#00F5D4]" />
                  <span>Open Command Palette (⌘K)</span>
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* [07] Enhanced Institutional Deep-Tech Footer */}
      <DeepTechFooter
        onOpenCommandPalette={() => setCommandPaletteOpen(true)}
        onToggleBlueprintGrid={() => setBlueprintGridActive(!blueprintGridActive)}
        isBlueprintGridActive={blueprintGridActive}
      />

      {/* Floating Bottom Quick-Action Dock (Menu de Baixo) */}
      <BottomFloatingBar
        onOpenCommandPalette={() => setCommandPaletteOpen(true)}
        onToggleBlueprintGrid={() => setBlueprintGridActive(!blueprintGridActive)}
        isBlueprintGridActive={blueprintGridActive}
        activeSection={activeSection}
      />

      {/* Floating Raycast Command Palette Modal */}
      <CommandPalette
        isOpen={commandPaletteOpen}
        onClose={() => setCommandPaletteOpen(false)}
        onToggleBlueprintGrid={() => setBlueprintGridActive(!blueprintGridActive)}
        isBlueprintGridActive={blueprintGridActive}
        onOpenBibtex={handleOpenBibtexById}
      />

      {/* Floating BibTeX Drawer / Modal */}
      <BibtexDrawer
        paper={selectedBibtexPaper}
        onClose={() => setSelectedBibtexPaper(null)}
      />
    </div>
  );
};
