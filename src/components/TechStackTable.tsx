import React, { useState } from 'react';
import { 
  Cpu, 
  Layers, 
  Database, 
  ArrowLeftRight, 
  Monitor, 
  Server, 
  Search,
  Check
} from 'lucide-react';
import { BentoCard } from './BentoCard';

interface StackLayer {
  layer: string;
  icon: React.ReactNode;
  technologies: {
    name: string;
    description: string;
    category: string;
  }[];
}

const stackLayers: StackLayer[] = [
  {
    layer: 'Systems & Low-Level',
    icon: <Cpu className="w-4 h-4 text-sky-400" />,
    technologies: [
      { name: 'Rust', description: 'Memory safety without GC, zero-cost abstractions, strict concurrency', category: 'Language' },
      { name: 'C++20/23', description: 'Mission-critical systems, template metaprogramming, and SIMD vectorization', category: 'Language' },
      { name: 'Linux Kernel (io_uring, eBPF)', description: 'High-throughput asynchronous I/O and kernel-ring instrumentation', category: 'Kernel' },
      { name: 'Bare-Metal x86_64 SIMD (AVX2/AVX-512)', description: 'Parallel vector execution and wide register hardware pipelines', category: 'Instruction Set' },
    ],
  },
  {
    layer: 'Managed Runtimes',
    icon: <Layers className="w-4 h-4 text-indigo-400" />,
    technologies: [
      { name: 'Java 21+ (Panama FFM, Disruptor)', description: 'Zero-overhead Foreign Function & Memory API and lock-free ring buffers', category: 'JVM' },
      { name: 'Scala', description: 'Reactive architectures with expressive type systems and categorical algebras', category: 'Language' },
      { name: '.NET 8/9', description: 'High-throughput execution with Span<T>, Memory<T>, and native P/Invoke', category: 'Runtime' },
      { name: 'Python Internals', description: 'Native C-API extensions, custom allocators, and GIL bypass routines', category: 'Runtime' },
    ],
  },
  {
    layer: 'Storage & Database Engines',
    icon: <Database className="w-4 h-4 text-emerald-400" />,
    technologies: [
      { name: 'In-Memory SQLite VFS', description: 'Virtual File System over io_uring with lock-free page caching', category: 'Storage' },
      { name: 'DuckDB', description: 'Vectorized embedded columnar analytical processing (OLAP)', category: 'OLAP' },
      { name: 'PostgreSQL / Citus', description: 'Distributed extensions for horizontal sharding and relational storage', category: 'RDBMS' },
      { name: 'Apache Parquet', description: 'Compressed columnar storage with SIMD-accelerated decoding', category: 'Format' },
    ],
  },
  {
    layer: 'IPC & Serialization',
    icon: <ArrowLeftRight className="w-4 h-4 text-amber-400" />,
    technologies: [
      { name: 'Apache Arrow IPC', description: 'Standardized columnar memory layout for zero-copy data exchange', category: 'IPC' },
      { name: 'FlatBuffers', description: 'Direct access to serialized hierarchical buffers without unpack overhead', category: 'Format' },
      { name: 'Protocol Buffers', description: 'Typed schema contracts with backward and forward binary compatibility', category: 'RPC' },
      { name: 'Zero-Copy Shared Memory', description: 'POSIX mmap memory regions shared across processes without context copies', category: 'Memory' },
    ],
  },
  {
    layer: 'Graphics & Simulation',
    icon: <Monitor className="w-4 h-4 text-pink-400" />,
    technologies: [
      { name: 'WebGPU', description: 'Direct GPU compute pipeline with WGSL for scientific visualization', category: 'GPU' },
      { name: 'WebAssembly (Wasm)', description: 'In-browser C++ and Rust execution at near-native performance', category: 'Web' },
      { name: 'Three.js', description: 'Scene graph management, spatial cameras, and custom WebGL/WebGPU shaders', category: '3D' },
      { name: 'Compute Shaders (GLSL/WGSL)', description: 'Massively parallel physical calculation over anatomical meshes', category: 'Shaders' },
    ],
  },
  {
    layer: 'Infrastructure & Isolation',
    icon: <Server className="w-4 h-4 text-purple-400" />,
    technologies: [
      { name: 'Firecracker MicroVMs', description: 'KVM-based container isolation with sub-millisecond boot times', category: 'Virtualization' },
      { name: 'Docker', description: 'Reproducible service packaging and OCI runtime containers', category: 'Containers' },
      { name: 'LocalStack', description: 'Deterministic local cloud emulation and fault injection testing', category: 'Testing' },
      { name: 'Bare-Metal Linux (RHEL)', description: 'Dedicated production hosts without hypervisor virtualization layers', category: 'OS' },
    ],
  },
];

export const TechStackTable: React.FC = () => {
  const [filterQuery, setFilterQuery] = useState('');
  const [selectedLayer, setSelectedLayer] = useState<string>('all');

  const filteredLayers = stackLayers.filter(layer => {
    if (selectedLayer !== 'all' && layer.layer !== selectedLayer) {
      return false;
    }
    if (!filterQuery) return true;
    const q = filterQuery.toLowerCase();
    return (
      layer.layer.toLowerCase().includes(q) ||
      layer.technologies.some(t => t.name.toLowerCase().includes(q) || t.description.toLowerCase().includes(q))
    );
  });

  return (
    <div className="w-full">
      {/* Header & Filter Controls */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        {/* Layer Selector */}
        <div className="flex flex-wrap gap-1.5">
          <button
            onClick={() => setSelectedLayer('all')}
            className={`font-code text-xs px-3 py-1.5 rounded-lg border transition-all cursor-pointer ${
              selectedLayer === 'all'
                ? 'bg-sky-400/20 text-sky-300 border-sky-400/40'
                : 'bg-white/5 text-gray-400 border-white/5 hover:text-white'
            }`}
          >
            All Layers
          </button>
          {stackLayers.map(l => (
            <button
              key={l.layer}
              onClick={() => setSelectedLayer(l.layer)}
              className={`font-code text-xs px-3 py-1.5 rounded-lg border transition-all cursor-pointer flex items-center gap-1.5 ${
                selectedLayer === l.layer
                  ? 'bg-sky-400/20 text-sky-300 border-sky-400/40'
                  : 'bg-white/5 text-gray-400 border-white/5 hover:text-white'
              }`}
            >
              {l.icon}
              <span>{l.layer.split(' ')[0]}</span>
            </button>
          ))}
        </div>

        {/* Search */}
        <div className="relative min-w-[240px]">
          <Search className="w-3.5 h-3.5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={filterQuery}
            onChange={(e) => setFilterQuery(e.target.value)}
            placeholder="Filter systems & libraries..."
            className="w-full pl-9 pr-3 py-1.5 text-xs bg-slate-900/80 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-sky-400/60 font-code"
          />
        </div>
      </div>

      {/* Main Table / Grid Container */}
      <div className="rounded-2xl border border-white/10 bg-[#060c1c]/80 overflow-hidden backdrop-blur-xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-white/10 bg-slate-900/60 font-code text-xs text-gray-400 uppercase tracking-wider">
                <th className="py-3.5 px-6 font-semibold w-1/4">Layer</th>
                <th className="py-3.5 px-6 font-semibold w-3/4">Key Technologies & Specifications</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 font-code text-xs sm:text-sm">
              {filteredLayers.map((layerItem, idx) => (
                <tr 
                  key={idx}
                  className="hover:bg-white/[0.02] transition-colors"
                >
                  {/* Layer Cell */}
                  <td className="py-5 px-6 align-top">
                    <div className="flex items-center gap-2.5 font-bold text-white mb-1">
                      <span className="p-1 rounded bg-white/5 border border-white/10">
                        {layerItem.icon}
                      </span>
                      <span>{layerItem.layer}</span>
                    </div>
                    <span className="text-[11px] text-gray-400">
                      {layerItem.technologies.length} core components
                    </span>
                  </td>

                  {/* Technologies Cell */}
                  <td className="py-5 px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {layerItem.technologies.map((tech, tIdx) => (
                        <div 
                          key={tIdx}
                          className="p-3 rounded-lg bg-black/40 border border-white/5 hover:border-sky-500/25 transition-all"
                        >
                          <div className="flex items-center justify-between mb-1">
                            <span className="font-bold text-sky-300 text-xs sm:text-sm">
                              {tech.name}
                            </span>
                            <span className="text-[10px] uppercase tracking-wider px-1.5 py-0.5 rounded bg-sky-500/10 text-sky-400 border border-sky-500/20">
                              {tech.category}
                            </span>
                          </div>
                          <p className="text-gray-400 text-xs font-sans leading-relaxed">
                            {tech.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
