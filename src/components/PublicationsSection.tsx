import React, { useState } from 'react';
import { 
  BookOpen, 
  Copy, 
  Check, 
  FileText, 
  ExternalLink, 
  ChevronDown, 
  ChevronUp, 
  Sparkles, 
  Binary, 
  Code2 
} from 'lucide-react';
import { MathFormula } from './MathFormula';

export interface ScientificPaper {
  id: string;
  category: 'math.DS' | 'cs.DC' | 'math.DG' | 'q-fin.CP';
  categoryLabel: string;
  badge: string;
  title: string;
  authors: string;
  year: string;
  abstract: string;
  invariantDescription: string;
  latexFormula: string;
  bibtex: string;
}

export const papersDatabase: ScientificPaper[] = [
  {
    id: 'decentralized-routing',
    category: 'cs.DC',
    categoryLabel: 'Distributed Systems & Mechanical Sympathy [cs.DC / cs.PF]',
    badge: '[cs.DC / cs.PF] — World Journal of Artificial Intelligence & Robotics Research (WJAIRR) / SSRN (2026)',
    title: 'Decentralized Topological Routing for High-Frequency Data Reconciliation: An Approach via Mechanical Sympathy',
    authors: 'Gemirson dos Santos Silva (Quimera Laboratory)',
    year: '2026',
    abstract: 'Design, empirical benchmark, and formal verification of the KineQuet high-frequency custody reconciliation architecture. Combines deterministic Jump Consistent Hash partitioning with in-memory vectorized columnar structures (Apache Arrow memory layout) and zero-copy hardware alignment to eliminate cache misses and serialization overhead. In an experimental evaluation on 200 million transactional records, the decentralized routing architecture completes reconciliation in 11.08 seconds with a peak memory footprint of 161 MB of RAM per process.',
    invariantDescription: 'Deterministic Jump Consistent Hash partition function & latency bound:',
    latexFormula: `h(k, j) = \\left\\lfloor (b + 1) \\cdot \\frac{R}{2^{31}} \\right\\rfloor, \\quad T_{\\text{reconcile}}(2 \\times 10^8) = 11.08\\,\\text{s} \\; (\\text{RAM} \\le 161\\,\\text{MB})`,
    bibtex: `@article{silva2026decentralized,
  title={Decentralized Topological Routing for High-Frequency Data Reconciliation: An Approach via Mechanical Sympathy},
  author={Silva, Gemirson dos Santos},
  journal={World Journal of Artificial Intelligence and Robotics Research},
  year={2026},
  volume={2026},
  note={SSRN Working Paper Series / KineQuet Engine Architecture}
}`,
  },
  {
    id: 'arithmetic-gradient',
    category: 'q-fin.CP',
    categoryLabel: 'Quantitative Modeling & Financial Engineering [q-fin.CP / math.NA]',
    badge: '[q-fin.CP / math.NA] — SSRN Research Monograph (2026)',
    title: 'Arithmetic Gradient Model for Approximating Seasonal/Irregular Cash Flows',
    authors: 'Gemirson dos Santos Silva (Quimera Laboratory)',
    year: '2026',
    abstract: 'A generalized mathematical model adapting classical arithmetic gradient formulations to approximate irregular and seasonal multi-period cash flow dynamics in financial event sourcing systems. Establishes sub-centile numerical bounds, proves uniform convergence across discrete payment epochs, and eliminates accumulated rounding divergence under high-concurrency transactional processing.',
    invariantDescription: 'Multi-period arithmetic gradient series formulation:',
    latexFormula: `P = A \\left[ \\frac{(1+i)^n - 1}{i(1+i)^n} \\right] + \\frac{G}{i} \\left[ \\frac{(1+i)^n - 1}{i(1+i)^n} - \\frac{n}{(1+i)^n} \\right]`,
    bibtex: `@article{silva2026arithmetic,
  title={Arithmetic Gradient Model for Approximating Seasonal/Irregular Cash Flows},
  author={Silva, Gemirson dos Santos},
  journal={SSRN Electronic Journal},
  year={2026},
  note={Research Monograph / Financial Mathematics}
}`,
  },
  {
    id: 'urban-dynamics',
    category: 'math.DS',
    categoryLabel: 'Dynamical Systems [math.DS]',
    badge: '[math.DS / physics.soc-ph] — Submitted to SIAM Journal on Multiscale Modeling & Simulation (MMS)',
    title: 'Urban Population Dynamics via Elastic Carrying Capacity and Saturable Social Friction',
    authors: 'Silva, Gemirson dos Santos and Meyer, João Frederico da Costa Azevedo (in collaboration with IMECC/UNICAMP)',
    year: '2026',
    abstract: 'A multiscale continuous-discrete framework for urban population dynamics that replaces classical logistic carrying capacity with an elastic formulation coupled to Holling Type II functional responses and saturable social friction. Anisotropic spatial diffusion across the metropolitan network is governed by weighted graph Laplacian operators and calibrated via Levenberg-Marquardt nonlinear optimization over census time series (2000–2025).',
    invariantDescription: 'Urban carrying capacity invariant and graph diffusion operator:',
    latexFormula: `\\frac{\\partial u_i}{\\partial t} = r_i u_i \\left(1 - \\frac{u_i}{K_i(u, t)}\\right) - \\sum_{j \\in \\mathcal{N}(i)} L_{ij} \\frac{\\alpha_{ij} u_j}{1 + \\beta_{ij} \\tau_{ij} u_j}`,
    bibtex: `@article{silva2026urban,
  title={Urban Population Dynamics via Elastic Carrying Capacity and Saturable Social Friction},
  author={Silva, Gemirson dos Santos and Meyer, Jo{\\~a}o Frederico da Costa Azevedo},
  journal={SIAM Journal on Multiscale Modeling \\& Simulation (Submitted)},
  year={2026},
  note={Preprint / Quimera Laboratory Technical Monograph}
}`,
  },
  {
    id: 'kinesql-io_uring',
    category: 'cs.DC',
    categoryLabel: 'Distributed Systems [cs.DC]',
    badge: '[cs.DC / cs.DS] — Quimera Monograph on Distributed Storage & Consensus',
    title: 'Lock-Free Invariant Enforcement and Sub-Millisecond Event Sourcing over io_uring VFS',
    authors: 'Gemirson dos Santos Silva & Quimera Distributed Systems Group',
    year: '2026',
    abstract: 'Design, formal verification, and empirical benchmark of KineSQL, an append-only storage engine coupled to Linux io_uring and L-CRDT state primitives. We demonstrate deterministic convergence under network partitions with 35% packet loss using Reed-Solomon forward error correction integrated directly into the UDP gossip transport layer.',
    invariantDescription: 'Conservation of balances and packet reconstruction invariant:',
    latexFormula: `\\mathcal{I}_{\\text{inv}} = \\left\\{ s \\in \\mathcal{S} \\;\\middle|\\; \\sum_{k=1}^M \\Delta b_k(s) \\equiv 0 \\;\\land\\; \\forall p \\in \\mathcal{P}, \\; \\mathrm{rank}(G_{\\text{FEC}} \\cdot \\mathbf{m}_p) = k_{\\text{sym}} \\right\\}`,
    bibtex: `@article{quimera2026kinesql,
  title={Lock-Free Invariant Enforcement and Sub-Millisecond Event Sourcing over io\\_uring VFS},
  author={Silva, Gemirson dos Santos and Quimera Research Systems Group},
  journal={ACM Transactions on Computer Systems (Preprint)},
  year={2026},
  note={Technical Report QL-2026-DC02}
}`,
  },
  {
    id: 'synapse-routing',
    category: 'math.DG',
    categoryLabel: 'Differential Geometry [math.DG]',
    badge: '[math.DG / cs.NI] — Applied Differential Geometry in Distributed Networks',
    title: 'Synaptic Topological Routing under Riemannian Metric and Fisher Information Invariants',
    authors: 'Gemirson dos Santos Silva & Quimera Cybernetic Research Lab',
    year: '2026',
    abstract: 'Formulation of self-balancing network topologies based on discrete Ollivier-Ricci curvature bounds and Fisher information metric tensors. Message dissemination in Synapse Protocol achieves Pareto-optimal flow on directed graphs with zero-copy buffer transfers via Apache Arrow IPC and FlatBuffers in Rust.',
    invariantDescription: 'Ricci curvature lower bound and Fisher metric tensor:',
    latexFormula: `\\kappa(x, y) = 1 - \\frac{W_1(m_x, m_y)}{d(x, y)} \\ge \\kappa_0 > 0, \\quad g_{ij}(\\theta) = \\mathbb{E}\\left[ \\frac{\\partial \\log f}{\\partial \\theta_i} \\frac{\\partial \\log f}{\\partial \\theta_j} \\right]`,
    bibtex: `@article{quimera2026synapse,
  title={Synaptic Topological Routing under Riemannian Metric and Fisher Information Invariants},
  author={Silva, Gemirson dos Santos and Quimera Cybernetic Architecture Group},
  journal={Journal of Differential Geometry \\& Network Topology},
  year={2026},
  note={Monograph QL-2026-DG03}
}`,
  },
  {
    id: 'subcentile-accounting',
    category: 'q-fin.CP',
    categoryLabel: 'Quantitative Finance [q-fin.CP]',
    badge: '[q-fin.CP / cs.PF] — Axiomatic Financial Verification',
    title: 'Sub-Centile Financial Accounting and Deterministic Floating-Point Drift Elimination',
    authors: 'Gemirson dos Santos Silva & Quimera Quantitative Systems Group',
    year: '2026',
    abstract: 'Axiomatic formalization of continuous financial reconciliation that eliminates rounding residuals in high-frequency trading engines using scaled arbitrary-precision integer representations and idempotent event algebras under massive concurrency.',
    invariantDescription: 'Asymptotic drift elimination and sub-centile bounds:',
    latexFormula: `\\lim_{N \\to \\infty} \\sum_{n=1}^N \\left( \\mathcal{Q}(x_n) - \\pi_0(x_n) \\right) = 0 \\quad \\text{com} \\quad \\delta_{\\text{drift}} < 10^{-18}`,
    bibtex: `@article{quimera2026subcentile,
  title={Sub-Centile Financial Accounting and Deterministic Floating-Point Drift Elimination},
  author={Silva, Gemirson dos Santos and Quimera Quantitative Engineering Team},
  journal={SIAM Journal on Financial Mathematics (Monograph)},
  year={2026},
  note={Technical Monograph QL-2026-QF04}
}`,
  },
];

interface PublicationsSectionProps {
  onSelectBibtex: (paper: ScientificPaper) => void;
}

export const PublicationsSection: React.FC<PublicationsSectionProps> = ({ onSelectBibtex }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [expandedAbstracts, setExpandedAbstracts] = useState<Record<string, boolean>>({
    'urban-dynamics': true,
  });
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const categories = [
    { key: 'all', label: 'All Fields' },
    { key: 'math.DS', label: 'Dynamical Systems [math.DS]' },
    { key: 'cs.DC', label: 'Distributed Systems [cs.DC]' },
    { key: 'math.DG', label: 'Differential Geometry [math.DG]' },
    { key: 'q-fin.CP', label: 'Quantitative Finance [q-fin.CP]' },
  ];

  const filteredPapers = papersDatabase.filter((p) => {
    if (activeCategory === 'all') return true;
    return p.category === activeCategory;
  });

  const toggleAbstract = (id: string) => {
    setExpandedAbstracts((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handleCopyBibtex = async (paper: ScientificPaper) => {
    try {
      await navigator.clipboard.writeText(paper.bibtex);
      setCopiedId(paper.id);
      onSelectBibtex(paper);
      setTimeout(() => setCopiedId(null), 2500);
    } catch {
      onSelectBibtex(paper);
      setCopiedId(paper.id);
      setTimeout(() => setCopiedId(null), 2500);
    }
  };

  return (
    <section id="papers" className="py-24 border-t border-white/5 relative">
      <div className="mb-12">
        <div className="inline-flex items-center gap-2 font-code text-xs text-[#00F5D4] bg-[#00F5D4]/10 border border-[#00F5D4]/25 px-3 py-1 rounded-md mb-4">
          <BookOpen className="w-3.5 h-3.5" />
          <span>03. PUBLICATIONS & PREPRINTS // SIAM & ARXIV STYLE</span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight mb-4 text-white">
          Publications, Preprints & Mathematical Monographs
        </h2>
        <p className="text-gray-400 text-base sm:text-lg max-w-3xl leading-relaxed">
          Peer-reviewed papers, technical monographs, and formal proofs submitted to applied mathematics and distributed computing proceedings.
        </p>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap gap-2 mt-8">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`font-code text-xs px-3.5 py-1.5 rounded-lg border transition-all cursor-pointer ${
                activeCategory === cat.key
                  ? 'bg-[#00F5D4]/15 text-[#00F5D4] border-[#00F5D4]/35 shadow-[0_0_15px_rgba(0,245,212,0.15)] font-semibold'
                  : 'bg-white/5 text-gray-400 border-white/5 hover:text-white hover:bg-white/10'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Papers Grid / List */}
      <div className="space-y-8">
        {filteredPapers.map((paper) => {
          const isAbstractOpen = !!expandedAbstracts[paper.id];
          const isCopied = copiedId === paper.id;

          return (
            <article
              key={paper.id}
              className="spotlight-card rounded-2xl p-6 sm:p-9 border border-white/10 bg-[#0a0b12]/90 relative overflow-hidden transition-all duration-300"
            >
              {/* Category indicator line */}
              <div 
                className={`absolute left-0 top-0 bottom-0 w-1 ${
                  paper.category === 'math.DS' 
                    ? 'bg-[#00F5D4]' 
                    : (paper.category === 'cs.DC' ? 'bg-[#9d4edd]' : (paper.category === 'math.DG' ? 'bg-[#38bdf8]' : 'bg-[#FFB703]'))
                }`} 
              />

              <div className="relative z-10 pl-2">
                {/* Header Badge */}
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                  <span className="font-code text-xs font-semibold px-2.5 py-1 rounded bg-white/5 border border-white/10 text-[#00F5D4]">
                    {paper.badge}
                  </span>
                  <span className="font-code text-xs text-gray-400">
                    ANNO DOMINI {paper.year}
                  </span>
                </div>

                {/* Paper Title (Instrument Serif / Newsreader style) */}
                <h3 className="text-2xl sm:text-3xl font-serif-math font-normal text-white mb-2 leading-tight">
                  {paper.title}
                </h3>

                {/* Authors & Affiliation */}
                <p className="text-xs sm:text-sm font-code text-gray-400 mb-6">
                  {paper.authors}
                </p>

                {/* Key LaTeX Invariant Formula */}
                <div className="my-6 p-4 sm:p-5 rounded-xl bg-black/60 border border-white/10">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-code text-[#00F5D4] flex items-center gap-1.5 font-medium">
                      <Binary className="w-3.5 h-3.5" />
                      {paper.invariantDescription}
                    </span>
                    <span className="text-[10px] font-code text-gray-400">KaTeX Authentic Typography</span>
                  </div>
                  <MathFormula formula={paper.latexFormula} displayMode={true} />
                </div>

                {/* Abstract Accordion */}
                <div className="mt-4">
                  <div className="flex items-center justify-between">
                    <button
                      onClick={() => toggleAbstract(paper.id)}
                      className="text-xs font-code text-gray-300 hover:text-white flex items-center gap-1.5 transition-colors cursor-pointer py-1"
                    >
                      {isAbstractOpen ? <ChevronUp className="w-4 h-4 text-[#00F5D4]" /> : <ChevronDown className="w-4 h-4" />}
                      <span>{isAbstractOpen ? 'Hide Abstract' : 'View Abstract'}</span>
                    </button>

                    {/* Action buttons */}
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handleCopyBibtex(paper)}
                        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-code transition-all cursor-pointer border ${
                          isCopied
                            ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40'
                            : 'bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white border-white/10'
                        }`}
                        title="Copiar entrada BibTeX formatada"
                      >
                        {isCopied ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-emerald-400" />
                            <span>Copied to clipboard ✓</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5 text-[#00F5D4]" />
                            <span>[ Copy BibTeX ]</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>

                  {isAbstractOpen && (
                    <div className="mt-3 p-4 rounded-xl bg-white/[0.02] border border-white/5 text-gray-300 text-xs sm:text-sm font-sans leading-relaxed animate-in fade-in duration-200">
                      <p className="italic">
                        "{paper.abstract}"
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};
