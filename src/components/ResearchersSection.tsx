import React, { useState } from 'react';
import { 
  GraduationCap, 
  ExternalLink, 
  Mail, 
  Copy, 
  Check, 
  BookOpen, 
  GitFork, 
  Binary, 
  Cpu, 
  Network, 
  Layers, 
  ArrowUpRight,
  ShieldCheck,
  ChevronRight,
  Users,
  Award,
  Zap,
  Globe
} from 'lucide-react';
import { MathFormula } from './MathFormula';

export interface ResearcherProfile {
  id: string;
  name: string;
  role: string;
  affiliation: string;
  institutionSub: string;
  education?: string;
  location: string;
  email?: string;
  externalLink?: string;
  externalLinkLabel?: string;
  orcid?: string;
  orcidUrl?: string;
  scholarUrl?: string;
  scholarLabel?: string;
  domains: string[];
  bio: string;
  methodology: string;
  empiricalBenchmark?: {
    metric: string;
    description: string;
  };
  primaryMonographs: {
    title: string;
    venue: string;
    year: string;
    paperId?: string;
    doiOrNote?: string;
  }[];
  architecturalContributions: string[];
  latexSnippet?: string;
}

export interface ResearchCollective {
  id: string;
  name: string;
  code: string;
  mandate: string;
  leadArchitectures: string[];
  governingInvariant: string;
  latexInvariant: string;
  hardwareTargets: string[];
  activeProjects: string[];
}

const facultyMembers: ResearcherProfile[] = [
  {
    id: 'gemirson-silva',
    name: 'Gemirson dos Santos Silva',
    role: 'Principal Investigator & Chief Systems Architect',
    affiliation: 'Quimera Laboratory',
    institutionSub: 'Cybernetics, Distributed Systems & Applied Mathematics Group',
    education: 'B.S. Electrical Engineering (UNIVASF) · Systems Architecture & Applied Software Engineering',
    location: 'São Paulo / Petrolina / Campinas, Brazil',
    email: 'gemirson.silva@gmail.com',
    orcid: '0009-0004-6491-3818',
    orcidUrl: 'https://orcid.org/0009-0004-6491-3818',
    scholarUrl: 'https://scholar.google.com/citations?view_op=search_authors&mauthors=Gemirson+dos+Santos+Silva',
    scholarLabel: 'Google Scholar Profile',
    externalLink: 'https://github.com/Quimera-Laboratory',
    externalLinkLabel: 'GitHub Lab Organization',
    domains: [
      'High-Performance Distributed Systems',
      'Discrete Differential Geometry',
      'Mechanical Sympathy & Cache Geometries',
      'Low-Level Systems & io_uring VFS',
      'Nonlinear Multiscale Population Dynamics',
      'Financial Event Sourcing & Invariants'
    ],
    bio: 'Software engineer, solutions architect, and principal researcher directing research at Quimera Laboratory. His work investigates the intersection of low-level hardware alignment (Mechanical Sympathy), discrete differential geometry on control flow graphs, kernel-bypass asynchronous I/O with io_uring, and deterministic high-frequency financial reconciliation.',
    methodology: 'Mechanical Sympathy combined with topological rigor: zero-copy in-memory Arrow columnar layouts, 64-byte L1 cache-line packing, elimination of system call overhead via io_uring submission queues, and asymptotic drift elimination in financial event algebras.',
    empiricalBenchmark: {
      metric: '200M Records in 11.08s (161 MB RAM)',
      description: 'Decentralized custody reconciliation completed over 200,000,000 transaction records with zero locks and deterministic Jump Consistent Hash routing.'
    },
    primaryMonographs: [
      {
        title: 'Decentralized Topological Routing for High-Frequency Data Reconciliation: An Approach via Mechanical Sympathy',
        venue: 'World Journal of Artificial Intelligence and Robotics Research (WJAIRR) / SSRN',
        year: '2026',
        paperId: 'decentralized-routing',
        doiOrNote: 'SSRN Working Paper · Benchmark: 200M Records in 11.08s'
      },
      {
        title: 'Arithmetic Gradient Model for Approximating Seasonal/Irregular Cash Flows',
        venue: 'SSRN Electronic Journal / Research Monograph Series',
        year: '2026',
        paperId: 'arithmetic-gradient',
        doiOrNote: 'SSRN Financial Mathematics Monograph'
      },
      {
        title: 'Urban Population Dynamics via Elastic Carrying Capacity and Saturable Social Friction',
        venue: 'SIAM Journal on Multiscale Modeling & Simulation (MMS)',
        year: '2026',
        paperId: 'urban-dynamics',
        doiOrNote: 'Submitted · Co-authored with Prof. Dr. João Frederico Meyer (IMECC/UNICAMP)'
      },
      {
        title: 'Lock-Free Invariant Enforcement and Sub-Millisecond Event Sourcing over io_uring VFS',
        venue: 'ACM Transactions on Computer Systems (Preprint)',
        year: '2026',
        paperId: 'kinesql-io_uring',
        doiOrNote: 'Technical Report QL-2026-DC02'
      },
      {
        title: 'Synaptic Topological Routing under Riemannian Metric and Fisher Information Invariants',
        venue: 'Journal of Differential Geometry & Network Topology',
        year: '2026',
        paperId: 'synapse-routing',
        doiOrNote: 'Monograph QL-2026-DG03'
      },
      {
        title: 'Sub-Centile Financial Accounting and Deterministic Floating-Point Drift Elimination',
        venue: 'SIAM Journal on Financial Mathematics (Monograph)',
        year: '2026',
        paperId: 'subcentile-accounting',
        doiOrNote: 'Technical Monograph QL-2026-QF04'
      },
      {
        title: 'Ephemeral Bare-Metal Router: Routing Events from Inside Your Own microVM Snapshot',
        venue: 'High-Performance Systems & MicroVM Architecture Monograph',
        year: '2026',
        doiOrNote: 'Firecracker Snapshot Routing & Bumpalo Arena Allocator'
      },
      {
        title: 'The Mathematical Lens of Spatial and Temporal Complexity in Software Engineering',
        venue: 'Foundations of Applied Computing & Systems Optimization',
        year: '2026',
        doiOrNote: 'Asymptotic Analysis & Cache Hierarchy Bounds'
      }
    ],
    architecturalContributions: [
      'KineQuet high-performance data engineering engine with Jump Consistent Hash and zero-copy Arrow layouts',
      'KineSQL io_uring VFS storage engine with AVX-512 SIMD vectorization and Reed-Solomon FEC',
      'kineplex cache-aligned 64-byte broadcast multiplexer and real-time streaming engine',
      'Cytokine & Mutator discrete curvature artificial immune test harness (Ollivier-Ricci CFG bounds)',
      'Synapse Protocol decentralized topological message routing over Arrow IPC and FlatBuffers'
    ],
    latexSnippet: 'h(k, j) = \\left\\lfloor (b + 1) \\cdot \\frac{R}{2^{31}} \\right\\rfloor, \\quad T_{\\text{reconcile}}(2 \\times 10^8) = 11.08\\,\\text{s} \\; (\\text{RAM} \\le 161\\,\\text{MB})'
  },
  {
    id: 'joao-frederico-meyer',
    name: 'Prof. Dr. João Frederico da Costa Azevedo Meyer',
    role: 'Senior Collaborating Academic Researcher & Faculty Advisor',
    affiliation: 'State University of Campinas (UNICAMP)',
    institutionSub: 'Department of Applied Mathematics — IMECC (Institute of Mathematics, Statistics and Scientific Computing)',
    education: 'Ph.D. in Applied Mathematics · Distinguished Biomathematics & Mathematical Ecology Chair',
    location: 'Campinas, São Paulo, Brazil',
    externalLink: 'https://www.ime.unicamp.br',
    externalLinkLabel: 'IMECC / UNICAMP Faculty Profile',
    domains: [
      'Biomathematics & Mathematical Biology',
      'Partial Differential Equations (PDEs)',
      'Ecological Modeling & Dispersion Dynamics',
      'Holling Type II & III Functional Responses',
      'Environmental & Urban Transport Models'
    ],
    bio: 'Distinguished professor of applied mathematics at IMECC/UNICAMP with decades of foundational contributions to biomathematics, ecological population dynamics, and boundary value problems in partial differential equations. Collaborates with Quimera Laboratory on multiscale urban systems, non-local diffusion operators, and saturable nonlinear response regimes.',
    methodology: 'Coupling nonlinear reaction-diffusion partial differential equations with empirical demographic time series, investigating topological stability, threshold dynamics, and boundary controllability in complex social and biological networks.',
    primaryMonographs: [
      {
        title: 'Urban Population Dynamics via Elastic Carrying Capacity and Saturable Social Friction',
        venue: 'SIAM Journal on Multiscale Modeling & Simulation (MMS)',
        year: '2026',
        paperId: 'urban-dynamics',
        doiOrNote: 'Submitted · Joint monograph with Gemirson dos Santos Silva'
      }
    ],
    architecturalContributions: [
      'Formal derivation of elastic carrying capacity K_i(u, t) under infrastructural strain',
      'Formulation of Holling Type II saturable friction terms for metropolitan transit bottlenecks',
      'Weighted graph Laplacian parameter calibration via Levenberg-Marquardt optimization'
    ],
    latexSnippet: '\\frac{\\partial u_i}{\\partial t} = r_i u_i \\left(1 - \\frac{u_i}{K_i(u, t)}\\right) - \\sum_{j \\in \\mathcal{N}(i)} L_{ij} \\frac{\\alpha_{ij} u_j}{1 + \\beta_{ij} \\tau_{ij} u_j}'
  }
];

const collectives: ResearchCollective[] = [
  {
    id: 'dist-sys-group',
    name: 'Distributed Systems & Storage Group',
    code: 'QL-LAB-DSG',
    mandate: 'Zero-overhead persistent storage engines, custom Linux kernel io_uring VFS backends, leaderless state machine replication via L-CRDTs, and Reed-Solomon forward error correction over UDP gossip.',
    leadArchitectures: ['KineQuet Append-Only Engine', 'KineSQL io_uring VFS', 'kineplex Broadcast Multiplexer'],
    governingInvariant: 'Strict conservation of balance invariants and deterministic state recovery under 35% network packet loss.',
    latexInvariant: '\\mathcal{I}_{\\text{inv}} = \\left\\{ s \\in \\mathcal{S} \\;\\middle|\\; \\sum_{k=1}^M \\Delta b_k(s) \\equiv 0 \\right\\}',
    hardwareTargets: ['x86_64 AVX-512', 'Linux 6.x io_uring', 'Direct NVMe DMA', 'UDP Kernel Bypass'],
    activeProjects: ['kinesql-core', 'kineplex-rs', 'vfs-uring-cxx']
  },
  {
    id: 'cybernetic-arch-lab',
    name: 'Cybernetic Architecture & Topological Routing Lab',
    code: 'QL-LAB-CAR',
    mandate: 'Topological routing on discrete Riemannian manifolds, Fisher Information matrix continuous partitioning, zero-copy Apache Arrow IPC serializations in pure Rust, and Ephemeral Kinetic Cells sandboxed with Firecracker microVMs.',
    leadArchitectures: ['Synapse Topological Protocol', 'Cytokine Artificial Immune System', 'Ephemeral Kinetic Cells'],
    governingInvariant: 'Ollivier-Ricci curvature bounds ensuring bottleneck-free packet trajectories and sub-millisecond route convergence.',
    latexInvariant: 'g_{ij}(\\theta) = \\mathbb{E}\\left[ \\frac{\\partial \\log f}{\\partial \\theta_i} \\frac{\\partial \\log f}{\\partial \\theta_j} \\right], \\quad \\kappa(x, y) \\ge \\kappa_0',
    hardwareTargets: ['Rust no_std', 'Apache Arrow Memory Buffers', 'KVM / Firecracker microVM', 'eBPF TC Filters'],
    activeProjects: ['synapse-mesh', 'cytokine-engine', 'firecracker-cell-runtime']
  },
  {
    id: 'quantitative-eng-team',
    name: 'Quantitative Systems & Formal Invariants Team',
    code: 'QL-LAB-QSE',
    mandate: 'Axiomatic verification of double-entry ledger topologies, elimination of sub-centile floating-point rounding drift, and Project Panama FFM interfaces bridging modern JVM 21+ with bare C/Rust runtimes.',
    leadArchitectures: ['Sub-Centile Balance Engine', 'COBOL-Flow Transpiler', 'Panamax SQLite Panama Bridge'],
    governingInvariant: 'Asymptotic rounding drift convergence bounded strictly below machine epsilon.',
    latexInvariant: '\\lim_{N \\to \\infty} \\sum_{n=1}^N \\left( \\mathcal{Q}(x_n) - \\pi_0(x_n) \\right) = 0, \\quad \\delta_{\\text{drift}} < 10^{-18}',
    hardwareTargets: ['Java 21+ Project Panama', 'DuckDB Columnar Vectors', 'IEEE-754 Strict Guard Runtimes'],
    activeProjects: ['subcentile-ledger', 'cobol-flow-ast', 'panama-bare-sqlite']
  }
];

interface ResearchersSectionProps {
  onOpenBibtexForPaper?: (paperId: string) => void;
}

export const ResearchersSection: React.FC<ResearchersSectionProps> = ({ onOpenBibtexForPaper }) => {
  const [activeTab, setActiveTab] = useState<'all' | 'faculty' | 'collectives'>('all');
  const [copiedEmail, setCopiedEmail] = useState<string | null>(null);

  const handleCopyEmail = (email: string) => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(email);
    setTimeout(() => setCopiedEmail(null), 2500);
  };

  const handleScrollToPaper = (paperId?: string) => {
    if (!paperId) return;
    const el = document.getElementById('papers');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="pesquisadores" className="py-24 border-t border-white/5 relative">
      {/* Background Accent Gradients */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-gradient-to-b from-[#00F5D4]/5 to-transparent blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-0 w-[450px] h-[450px] bg-gradient-to-t from-[#9d4edd]/5 to-transparent blur-3xl pointer-events-none -z-10" />

      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <div className="inline-flex items-center gap-2 font-code text-xs text-[#00F5D4] bg-[#00F5D4]/10 border border-[#00F5D4]/25 px-3 py-1 rounded-md mb-4">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>03. SCIENTIFIC FACULTY & RESEARCH DIRECTORS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight mb-4 text-white font-display">
            Researchers & Scientific Faculty
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-3xl leading-relaxed">
            Principal investigators, collaborating university faculty, and specialized engineering collectives directing mathematical research and low-latency systems architectures at Quimera Laboratory.
          </p>
        </div>

        {/* Tab Filters (Interactive Buttons - Styled cleanly without pills) */}
        <div className="flex items-center gap-1.5 p-1 bg-[#0c0e17] border border-white/10 rounded-xl self-start md:self-auto font-code text-xs">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
              activeTab === 'all'
                ? 'bg-white/10 text-white font-semibold shadow-sm'
                : 'text-gray-400 hover:text-gray-200 hover:bg-white/5'
            }`}
          >
            All Faculty & Labs ({facultyMembers.length + collectives.length})
          </button>
          <button
            onClick={() => setActiveTab('faculty')}
            className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
              activeTab === 'faculty'
                ? 'bg-white/10 text-[#00F5D4] font-semibold shadow-sm'
                : 'text-gray-400 hover:text-gray-200 hover:bg-white/5'
            }`}
          >
            Faculty Dossiers ({facultyMembers.length})
          </button>
          <button
            onClick={() => setActiveTab('collectives')}
            className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
              activeTab === 'collectives'
                ? 'bg-white/10 text-[#9d4edd] font-semibold shadow-sm'
                : 'text-gray-400 hover:text-gray-200 hover:bg-white/5'
            }`}
          >
            Research Collectives ({collectives.length})
          </button>
        </div>
      </div>

      {/* Main Faculty Dossiers */}
      {(activeTab === 'all' || activeTab === 'faculty') && (
        <div className="space-y-8 mb-14">
          <div className="flex items-center gap-2 text-xs font-code text-gray-400 tracking-wider uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00F5D4]" />
            <span>Principal Investigators & University Appointments</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {facultyMembers.map((member) => (
              <div
                key={member.id}
                className="group relative rounded-2xl bg-[#090b12]/90 border border-white/10 hover:border-white/20 p-7 sm:p-9 transition-all duration-300 backdrop-blur-xl flex flex-col justify-between shadow-[0_20px_50px_rgba(0,0,0,0.6)]"
              >
                {/* Top Spotlight Hue */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-radial from-[#00F5D4]/10 via-transparent to-transparent rounded-tr-2xl pointer-events-none" />

                <div>
                  {/* Institutional Header & Status */}
                  <div className="flex items-start justify-between gap-4 mb-5 border-b border-white/10 pb-5">
                    <div>
                      <div className="flex items-center gap-2 text-xs font-code text-gray-400 mb-1.5 flex-wrap">
                        <span className="text-[#00F5D4] font-medium">{member.affiliation}</span>
                        <span>/</span>
                        <span>{member.location}</span>
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-display mb-1 group-hover:text-[#00F5D4] transition-colors">
                        {member.name}
                      </h3>
                      <p className="text-xs sm:text-sm font-medium text-gray-300 font-sans">
                        {member.role}
                      </p>
                      <p className="text-xs text-gray-400 font-code mt-0.5">
                        {member.institutionSub}
                      </p>
                      {member.education && (
                        <p className="text-[11px] text-gray-500 font-code mt-1.5">
                          {member.education}
                        </p>
                      )}
                    </div>

                    <div className="w-12 h-12 rounded-xl bg-[#030305] border border-white/15 p-2 flex items-center justify-center shrink-0 shadow-inner">
                      <GraduationCap className="w-6 h-6 text-[#00F5D4]" />
                    </div>
                  </div>

                  {/* Academic Registries (ORCID & Google Scholar) */}
                  {(member.orcid || member.scholarUrl) && (
                    <div className="mb-5 flex flex-wrap items-center gap-3 text-xs font-code">
                      {member.orcid && (
                        <a
                          href={member.orcidUrl || `https://orcid.org/${member.orcid}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#a6ce39]/10 border border-[#a6ce39]/25 text-[#a6ce39] hover:bg-[#a6ce39]/20 transition-colors"
                          title="View Verified ORCID Registry"
                        >
                          <span className="w-2 h-2 rounded-full bg-[#a6ce39]" />
                          <span>ORCID: {member.orcid}</span>
                          <ExternalLink className="w-3 h-3 ml-0.5" />
                        </a>
                      )}

                      {member.scholarUrl && (
                        <a
                          href={member.scholarUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-sky-500/10 border border-sky-500/25 text-sky-400 hover:bg-sky-500/20 transition-colors"
                          title="View Google Scholar Citations & Publications"
                        >
                          <BookOpen className="w-3 h-3" />
                          <span>{member.scholarLabel || 'Google Scholar'}</span>
                          <ExternalLink className="w-3 h-3 ml-0.5" />
                        </a>
                      )}
                    </div>
                  )}

                  {/* Empirical Benchmark Metric (If available) */}
                  {member.empiricalBenchmark && (
                    <div className="mb-6 p-4 rounded-xl bg-[#00F5D4]/5 border border-[#00F5D4]/20 flex items-start gap-3">
                      <Zap className="w-4 h-4 text-[#00F5D4] shrink-0 mt-0.5" />
                      <div>
                        <span className="text-xs font-bold text-white font-code block">
                          Empirical Benchmark: {member.empiricalBenchmark.metric}
                        </span>
                        <span className="text-[11px] text-gray-300 font-sans leading-relaxed block mt-0.5">
                          {member.empiricalBenchmark.description}
                        </span>
                      </div>
                    </div>
                  )}

                  {/* Scientific Domains (Zero-pill: Unboxed text with subtle separators) */}
                  <div className="mb-5">
                    <p className="text-[11px] font-code uppercase tracking-wider text-gray-400 mb-2">
                      Primary Scientific Disciplines
                    </p>
                    <div className="text-xs font-code text-gray-300 leading-relaxed flex flex-wrap items-center gap-x-2 gap-y-1">
                      {member.domains.map((domain, i) => (
                        <React.Fragment key={domain}>
                          <span className="text-gray-200 hover:text-white transition-colors">{domain}</span>
                          {i < member.domains.length - 1 && <span className="text-gray-600">·</span>}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>

                  {/* Bio & Scientific Methodology */}
                  <div className="space-y-3 mb-6 text-xs sm:text-sm text-gray-300 leading-relaxed font-sans">
                    <p>{member.bio}</p>
                    <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 font-mono text-xs text-gray-300 leading-relaxed">
                      <strong className="text-white block font-code text-[11px] uppercase tracking-wider mb-1 text-[#FFB703]">
                        Methodological Thesis:
                      </strong>
                      {member.methodology}
                    </div>
                  </div>

                  {/* Primary Monograph Highlights */}
                  <div className="mb-6">
                    <p className="text-[11px] font-code uppercase tracking-wider text-gray-400 mb-2.5 flex items-center justify-between">
                      <span className="flex items-center gap-1.5">
                        <BookOpen className="w-3.5 h-3.5 text-[#9d4edd]" />
                        <span>Authored Monographs & Manuscripts ({member.primaryMonographs.length})</span>
                      </span>
                      <span className="text-[10px] text-gray-500 font-normal">Click to inspect</span>
                    </p>
                    <div className="space-y-2 max-h-[320px] overflow-y-auto pr-1">
                      {member.primaryMonographs.map((mono, idx) => (
                        <div
                          key={idx}
                          onClick={() => handleScrollToPaper(mono.paperId)}
                          className="p-3 rounded-xl bg-[#0e111c]/70 border border-white/5 hover:border-white/20 transition-all cursor-pointer group/mono flex items-start justify-between gap-3"
                          title="Navigate to Monograph in Publications Section"
                        >
                          <div>
                            <p className="text-xs font-semibold text-white group-hover/mono:text-[#00F5D4] transition-colors leading-snug">
                              {mono.title}
                            </p>
                            <p className="text-[11px] font-code text-gray-400 mt-1">
                              <span>{mono.venue}</span>
                              <span className="mx-1.5 text-gray-600">·</span>
                              <span className="text-gray-300">{mono.year}</span>
                              {mono.doiOrNote && (
                                <>
                                  <span className="mx-1.5 text-gray-600">·</span>
                                  <span className="text-sky-400">{mono.doiOrNote}</span>
                                </>
                              )}
                            </p>
                          </div>
                          <ArrowUpRight className="w-4 h-4 text-gray-500 group-hover/mono:text-white shrink-0 transition-transform group-hover/mono:translate-x-0.5 group-hover/mono:-translate-y-0.5" />
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Mathematical Invariant Formulation */}
                  {member.latexSnippet && (
                    <div className="mb-6 p-4 rounded-xl bg-[#040508] border border-white/10">
                      <p className="text-[10px] font-code uppercase tracking-wider text-gray-400 mb-2">
                        Governing Formal Operator
                      </p>
                      <div className="overflow-x-auto py-1">
                        <MathFormula formula={member.latexSnippet} displayMode={true} />
                      </div>
                    </div>
                  )}

                  {/* Core Architectural Contributions */}
                  <div className="mb-6">
                    <p className="text-[11px] font-code uppercase tracking-wider text-gray-400 mb-2">
                      Engine Artifacts & Systems
                    </p>
                    <ul className="space-y-1.5 text-xs text-gray-300 font-sans">
                      {member.architecturalContributions.map((contrib, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-[#00F5D4] mt-0.5 font-code">▸</span>
                          <span>{contrib}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Footer Action Links */}
                <div className="pt-5 border-t border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs font-code">
                  <div className="flex items-center gap-3">
                    {member.email && (
                      <button
                        onClick={() => handleCopyEmail(member.email!)}
                        className="flex items-center gap-1.5 text-gray-300 hover:text-white transition-colors cursor-pointer"
                        title="Copy direct email address"
                      >
                        {copiedEmail === member.email ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-emerald-400" />
                            <span className="text-emerald-400">Copied to Clipboard</span>
                          </>
                        ) : (
                          <>
                            <Mail className="w-3.5 h-3.5 text-[#00F5D4]" />
                            <span>{member.email}</span>
                          </>
                        )}
                      </button>
                    )}
                  </div>

                  <div className="flex items-center gap-4">
                    {member.scholarUrl && (
                      <a
                        href={member.scholarUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sky-400 hover:text-sky-300 transition-colors"
                      >
                        <span>Scholar Citations</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                    {member.externalLink && (
                      <a
                        href={member.externalLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-gray-300 hover:text-white transition-colors"
                      >
                        <span>{member.externalLinkLabel || 'Academic Profile'}</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Research Collectives & Working Groups */}
      {(activeTab === 'all' || activeTab === 'collectives') && (
        <div>
          <div className="flex items-center gap-2 text-xs font-code text-gray-400 tracking-wider uppercase mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#9d4edd]" />
            <span>Specialized Research Collectives & Working Groups</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {collectives.map((group) => (
              <div
                key={group.id}
                className="rounded-2xl bg-[#080a12]/80 border border-white/10 hover:border-white/20 p-6 flex flex-col justify-between transition-all duration-300 backdrop-blur-md"
              >
                <div>
                  {/* Top Badge */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[11px] font-code text-[#9d4edd] font-semibold">
                      {group.code}
                    </span>
                    <span className="text-[10px] font-code text-gray-500">
                      ACTIVE R&D
                    </span>
                  </div>

                  <h4 className="text-lg font-bold text-white mb-2 font-display">
                    {group.name}
                  </h4>

                  <p className="text-xs text-gray-300 leading-relaxed mb-4 font-sans">
                    {group.mandate}
                  </p>

                  {/* Mathematical Formulation */}
                  <div className="p-3 rounded-xl bg-[#040508] border border-white/5 mb-4">
                    <p className="text-[10px] font-code uppercase text-gray-400 mb-1.5">
                      Governing State Invariant
                    </p>
                    <div className="overflow-x-auto py-0.5">
                      <MathFormula formula={group.latexInvariant} displayMode={true} />
                    </div>
                  </div>

                  {/* Architectures */}
                  <div className="mb-4">
                    <p className="text-[10px] font-code uppercase tracking-wider text-gray-400 mb-1.5">
                      Key Architectures
                    </p>
                    <div className="space-y-1 text-xs text-gray-300">
                      {group.leadArchitectures.map((arch, i) => (
                        <div key={i} className="flex items-center gap-1.5">
                          <span className="text-xs text-[#00F5D4]">▪</span>
                          <span className="font-sans">{arch}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Hardware Target Vector */}
                  <div className="mb-4">
                    <p className="text-[10px] font-code uppercase tracking-wider text-gray-400 mb-1.5">
                      Hardware Vector
                    </p>
                    <div className="text-[11px] font-code text-gray-400 flex flex-wrap gap-x-2 gap-y-0.5">
                      {group.hardwareTargets.map((hw, i) => (
                        <React.Fragment key={hw}>
                          <span className="text-gray-300">{hw}</span>
                          {i < group.hardwareTargets.length - 1 && <span className="text-gray-600">·</span>}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Active Projects Footer */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-[11px] font-code text-gray-400">
                  <span>Repositories:</span>
                  <div className="flex items-center gap-1.5 text-gray-300">
                    {group.activeProjects.join(', ')}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Institutional Note */}
      <div className="mt-12 p-5 rounded-2xl bg-[#060810]/70 border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-code text-gray-400">
        <div className="flex items-center gap-3">
          <ShieldCheck className="w-4 h-4 text-[#00F5D4] shrink-0" />
          <span>
            Quimera Laboratory operates peer-reviewed research collaborations with academic institutions including IMECC / UNICAMP under open scientific inquiry principles.
          </span>
        </div>
        <a
          href="mailto:gemirson.silva@gmail.com?subject=Academic%20Inquiry%20-%20Quimera%20Laboratory"
          className="text-[#00F5D4] hover:underline shrink-0 flex items-center gap-1"
        >
          <span>Contact Research Office</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </section>
  );
};
