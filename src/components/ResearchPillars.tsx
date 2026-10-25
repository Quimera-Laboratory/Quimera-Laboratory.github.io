import React, { useState } from 'react';
import { 
  ShieldAlert, 
  Database, 
  Network, 
  Binary, 
  Eye, 
  Dna,
  ChevronRight, 
  Cpu, 
  Activity, 
  Zap, 
  Layers, 
  Radio, 
  Sparkles 
} from 'lucide-react';
import { BentoCard } from './BentoCard';

export interface ResearchPillar {
  id: string;
  number: string;
  title: string;
  tagline: string;
  icon: React.ReactNode;
  badge: string;
  items: {
    title: string;
    description: string;
    tags: string[];
  }[];
}

export const researchPillarsData: ResearchPillar[] = [
  {
    id: 'immune-systems',
    number: '01',
    title: 'Cybernetic Immune Systems & Mutation Testing',
    tagline: 'Automated fault injection, kernel event interception, and adaptive mutation frameworks.',
    icon: <ShieldAlert className="w-5 h-5 text-sky-400" />,
    badge: 'AUTONOMOUS ADAPTATION',
    items: [
      {
        title: 'Artificial Immune Systems',
        description: 'Predictive and adaptive mutation testing engines targeting JVM bytecode, Python internals, and .NET runtimes.',
        tags: ['JVM Internals', 'CPython C-API', '.NET 8/9', 'Adaptive Mutation', 'Fuzzing'],
      },
      {
        title: 'Low-Overhead Kernel Telemetry',
        description: 'Asynchronous event stream collection via io_uring rings and eBPF probes for non-intrusive runtime introspection.',
        tags: ['io_uring', 'eBPF Probes', 'Linux Kernel', 'Zero Overhead', 'Async I/O'],
      },
    ],
  },
  {
    id: 'consensus-storage',
    number: '02',
    title: 'Distributed Consensus, Storage & Event Sourcing',
    tagline: 'High-throughput append-only engines, L-CRDT state replication, and strict accounting invariants.',
    icon: <Database className="w-5 h-5 text-indigo-400" />,
    badge: 'DETERMINISTIC CONSENSUS',
    items: [
      {
        title: 'Append-Only Engines (KineQuet / KineSQL)',
        description: 'Distributed high-throughput storage combining custom SQLite VFS over io_uring, vectorized serialization, and AVX2 SIMD acceleration.',
        tags: ['SQLite VFS', 'io_uring', 'SIMD AVX2', 'Parquet', 'Lock-Free Buffers'],
      },
      {
        title: 'Leaderless Consensus & Stochastic Resilience',
        description: 'Distributed state replication via Conflict-free Replicated Data Types (L-CRDTs), UDP gossip transport, and progressive Reed-Solomon forward error correction.',
        tags: ['L-CRDTs', 'Gossip Protocol', 'UDP Transport', 'Reed-Solomon FEC', 'Partition Tolerance'],
      },
      {
        title: 'Axiomatic Balance Verification',
        description: 'Formalized event-sourced transactional state machines enforcing strict concurrency invariants and sub-centile balance reconciliation.',
        tags: ['Event Sourcing', 'Strict Invariants', 'Sub-Centile Reconciliation', 'Formal Verification'],
      },
    ],
  },
  {
    id: 'topological-routing',
    number: '03',
    title: 'High-Frequency Topological Routing & Protocols',
    tagline: 'Nanosecond-scale topology discovery, Fisher information sharding, and transient runtimes.',
    icon: <Network className="w-5 h-5 text-emerald-400" />,
    badge: 'MECHANICAL SYMPATHY',
    items: [
      {
        title: 'Synapse Protocol',
        description: 'Decentralized topological routing for real-time reconciliation adhering to mechanical sympathy principles, zero-copy Apache Arrow IPC, and FlatBuffers in Rust.',
        tags: ['Rust Core', 'Arrow IPC', 'FlatBuffers', 'Zero-Copy', 'Mechanical Sympathy'],
      },
      {
        title: 'Optimal Sharding & Information Metrics',
        description: 'Message partition and distribution algorithms guided by the Fisher Information Matrix, game-theoretic equilibria, and analytic number theory.',
        tags: ['Fisher Information', 'Game Theory', 'Number Theory', 'Adaptive Sharding'],
      },
      {
        title: 'Transient Micro-Runtimes (Ephemeral Kinetic Cells)',
        description: 'Isolated transient execution sandboxes on Firecracker microVMs with bumpalo arena memory allocation and intrinsic data lineage tracking.',
        tags: ['Firecracker MicroVMs', 'bumpalo Arenas', 'Data Lineage', 'Sub-1ms Boot'],
      },
    ],
  },
  {
    id: 'aot-transpilation',
    number: '04',
    title: 'AOT Transpilation & Domain-Specific Compilers',
    tagline: 'Legacy system modernization, mainframe decomposition, and zero-overhead in-memory execution.',
    icon: <Binary className="w-5 h-5 text-purple-400" />,
    badge: 'COMPILER ENGINEERING',
    items: [
      {
        title: 'Mainframe-to-Cloud Migration (COBOL-Flow Transpiler)',
        description: 'Automated source-to-source translation of legacy systems into OpenAPI 3.0 specs and executable BDD suites using Keith Cooper SSA data-flow analysis.',
        tags: ['COBOL-Flow', 'OpenAPI 3.0', 'BDD Suites', 'Keith Cooper SSA', 'Formal Grammar'],
      },
      {
        title: 'Bare Engines & In-Memory Execution',
        description: 'Ahead-of-Time compiled SQL engines coupled to in-memory SQLite on modern JVM (Java 21+) via the Foreign Function & Memory API (Project Panama).',
        tags: ['Project Panama FFM', 'Java 21+', 'In-Memory SQLite', 'AOT SQL', 'Zero JNI Overhead'],
      },
    ],
  },
  {
    id: 'visual-computing',
    number: '05',
    title: 'Procedural Simulation & Visual Computing',
    tagline: 'Quimera Anatomy: WebGPU-driven clinical visualization, digital histopathology, and physical modeling.',
    icon: <Eye className="w-5 h-5 text-pink-400" />,
    badge: 'BIO-INFORMATICS & WEBGPU',
    items: [
      {
        title: 'WebGPU & Wasm Graphics Engines',
        description: 'Interactive 3D medical visualization and high-resolution digital histopathology pipelines rendered with compute shaders.',
        tags: ['WebGPU', 'WebAssembly (Wasm)', 'Three.js', 'Compute Shaders', 'Digital Pathology'],
      },
      {
        title: 'Procedural Biomechanical Modeling',
        description: 'Real-time physical and histological simulations executing on massively parallel WGSL and compute shader pipelines.',
        tags: ['Biomechanics', 'Histology Simulation', 'WGSL Shaders', 'Massive Parallelism'],
      },
    ],
  },
  {
    id: 'bio-inspired-systems',
    number: '06',
    title: 'Applied Bio-Inspired Systems & Metabolic Computing',
    tagline: 'Multiscale dynamic modeling, coupled population kinetics, synthetic mRNA signaling, and stigmergic intelligence.',
    icon: <Dna className="w-5 h-5 text-teal-400" />,
    badge: 'BIO-COMPUTATION & STIGMERGY',
    items: [
      {
        title: 'Population Dynamics & Holling Type II Response',
        description: 'Formalization of coupled partial differential equations with elastic carrying capacity K_i(u, t), saturable social friction, and Turing bifurcation analysis on graphs.',
        tags: ['Holling Type II', 'Elastic Capacity', 'Lotka-Volterra', 'Turing Bifurcations', 'Coupled PDEs'],
      },
      {
        title: 'Synthetic mRNA Signaling & Clonal Selection',
        description: 'Asynchronous signal dispatch inspired by mRNA translation and genetic recombination for automated fault neutralization and software self-healing.',
        tags: ['Synthetic mRNA', 'Clonal Selection', 'Immune Memory', 'Cybernetic Homeostasis', 'Self-Healing'],
      },
      {
        title: 'Stigmergic Topological Routing (Swarm Intelligence)',
        description: 'Decentralized mesh coordination using evaporating digital pheromones and Friston variational free-energy minimization for continuous network optimization.',
        tags: ['Stigmergy', 'Swarm Intelligence', 'Digital Pheromones', 'Friston Free Energy', 'Adaptive Mesh'],
      },
    ],
  },
];

export const ResearchPillars: React.FC = () => {
  const [selectedPillarId, setSelectedPillarId] = useState<string>('immune-systems');
  const activePillar = researchPillarsData.find(p => p.id === selectedPillarId) || researchPillarsData[0];

  return (
    <div className="w-full">
      {/* Pills / Selector Buttons */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-8">
        {researchPillarsData.map((pillar) => {
          const isSelected = pillar.id === selectedPillarId;
          return (
            <button
              key={pillar.id}
              onClick={() => setSelectedPillarId(pillar.id)}
              className={`p-4 rounded-xl border text-left transition-all duration-200 cursor-pointer flex flex-col justify-between ${
                isSelected
                  ? 'bg-sky-500/15 border-sky-400/40 shadow-[0_0_20px_rgba(56,189,248,0.2)]'
                  : 'bg-slate-900/40 border-white/5 hover:border-white/20 hover:bg-slate-900/70 text-gray-400 hover:text-white'
              }`}
            >
              <div className="flex items-center justify-between w-full mb-2">
                <span className="font-code text-xs font-bold text-sky-400">
                  {pillar.number}
                </span>
                <span className={`p-1.5 rounded-lg ${isSelected ? 'bg-sky-400/20 text-sky-300' : 'bg-white/5 text-gray-400'}`}>
                  {pillar.icon}
                </span>
              </div>
              <span className={`text-xs font-semibold line-clamp-2 leading-snug ${isSelected ? 'text-white' : 'text-gray-300'}`}>
                {pillar.title}
              </span>
            </button>
          );
        })}
      </div>

      {/* Active Pillar Full Bento Breakdown */}
      <BentoCard className="w-full border-sky-500/30 bg-gradient-to-b from-[#091122]/90 to-[#040814]/90 p-6 sm:p-10">
        <div>
          {/* Header */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
            <div className="flex items-center gap-3">
              <span className="font-code text-xs font-bold text-sky-400 bg-sky-400/10 border border-sky-400/20 px-3 py-1 rounded-full">
                PILLAR {activePillar.number} // {activePillar.badge}
              </span>
            </div>
            <span className="font-code text-xs text-emerald-400 flex items-center gap-1.5">
              <Activity className="w-3.5 h-3.5 animate-pulse" />
              STATUS: ACTIVE RESEARCH
            </span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-2 flex items-center gap-3">
            {activePillar.icon}
            <span>{activePillar.title}</span>
          </h3>
          <p className="text-gray-400 text-sm sm:text-base mb-8 max-w-3xl">
            {activePillar.tagline}
          </p>

          {/* Research Modules */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {activePillar.items.map((item, idx) => (
              <div 
                key={idx}
                className="p-5 sm:p-6 rounded-xl bg-slate-950/60 border border-white/10 hover:border-sky-400/30 transition-all flex flex-col justify-between"
              >
                <div>
                  <h4 className="text-base sm:text-lg font-bold text-sky-200 mb-2.5 flex items-start gap-2">
                    <ChevronRight className="w-4 h-4 text-sky-400 shrink-0 mt-1" />
                    <span>{item.title}</span>
                  </h4>
                  <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-5">
                    {item.description}
                  </p>
                </div>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/5">
                  {item.tags.map((tag, tIdx) => (
                    <span 
                      key={tIdx}
                      className="font-code text-[11px] px-2 py-0.5 rounded bg-white/5 text-gray-400 border border-white/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </BentoCard>
    </div>
  );
};
