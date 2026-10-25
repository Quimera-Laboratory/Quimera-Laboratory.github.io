import React from 'react';
import { Cpu, Compass, History, CheckCircle2 } from 'lucide-react';
import { BentoCard } from './BentoCard';

export const EngineeringPhilosophy: React.FC = () => {
  const principles = [
    {
      num: '01',
      title: 'Mechanical Sympathy',
      badge: 'HARDWARE CONGRUENCE',
      icon: <Cpu className="w-6 h-6 text-sky-400" />,
      desc: 'Software must align with underlying CPU microarchitecture: cache-line padding, branch prediction predictability, amortized arena allocation, and zero-copy kernel bypass.',
      details: [
        'L1/L2/L3 cache-line padding (64-byte alignment)',
        'Deterministic branch prediction and AVX-512 SIMD vectorization',
        'Elimination of context switching and page faults via io_uring rings',
      ],
    },
    {
      num: '02',
      title: 'Mathematical Rigor',
      badge: 'FORMAL PROOFS',
      icon: <Compass className="w-6 h-6 text-indigo-400" />,
      desc: 'Distributed consistency, partition balancing, and failure domains are modeled using discrete differential geometry, information geometry, and real analysis prior to implementation.',
      details: [
        'Fisher Information Matrix partition topologies',
        'Riemannian manifolds and discrete Ricci curvature routing',
        'Strict ledger balance invariants and sub-centile drift bounds',
      ],
    },
    {
      num: '03',
      title: 'Immutability & Determinism',
      badge: 'EVENT SOURCING',
      icon: <History className="w-6 h-6 text-emerald-400" />,
      desc: 'Historical state and event lineage are immutable facts. Current projections are pure functions of time and ordered event logs.',
      details: [
        'Append-only commit streams and zero in-place mutation',
        'State-based Conflict-free Replicated Data Types (L-CRDTs)',
        'Reproducible reconciliation at any arbitrary timestamp t(0) -> t(n)',
      ],
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {principles.map((p, idx) => (
        <BentoCard key={idx} className="border-white/10 hover:border-sky-400/40 p-7 sm:p-8 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="font-code text-xs font-bold text-sky-400 bg-sky-400/10 border border-sky-400/20 px-2.5 py-1 rounded">
                PRINCIPLE {p.num}
              </span>
              <span className="p-2 rounded-xl bg-white/5 border border-white/10">
                {p.icon}
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-3">
              {p.title}
            </h3>

            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              {p.desc}
            </p>
          </div>

          <div className="pt-4 border-t border-white/5 space-y-2">
            {p.details.map((item, dIdx) => (
              <div key={dIdx} className="flex items-start gap-2 text-xs font-code text-gray-400">
                <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 shrink-0 mt-0.5" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </BentoCard>
      ))}
    </div>
  );
};
