import React from 'react';
import { 
  ShieldAlert, 
  Database, 
  Zap, 
  Network, 
  Server, 
  Eye, 
  Binary, 
  Terminal, 
  CheckCircle2, 
  ExternalLink 
} from 'lucide-react';
import { BentoCard } from './BentoCard';
import { CodeBox } from './CodeBox';

export const EcosystemEnginesGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
      {/* 1. Quimera Core (Col-span-7) */}
      <BentoCard className="md:col-span-7 border-sky-400/30">
        <div>
          <div className="flex items-center justify-between mb-4">
            <span className="font-code text-xs font-semibold text-[#00F5D4] bg-[#00F5D4]/10 border border-[#00F5D4]/25 px-2.5 py-1 rounded-md">
              ENGINE 01 // CYBERNETIC IMMUNE CORE
            </span>
            <span className="font-code text-[11px] text-gray-400">
              Ollivier-Ricci Metric
            </span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-3">
            Quimera Core — Cybernetic Immune System
          </h3>

          <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6">
            Automated mutation testing framework. Computes discrete Ollivier-Ricci curvature over Control Flow Graphs (CFG) to track failure propagation paths, coupled with synthetic mRNA-style asynchronous message dispatch and non-intrusive kernel telemetry.
          </p>

          <div className="p-3.5 rounded-xl bg-black/50 border border-white/5 font-code text-xs text-sky-300 mb-6 flex flex-wrap gap-2">
            <span className="text-gray-400">Stack:</span>
            <span className="text-[#00F5D4]">Rust</span> · 
            <span className="text-[#9d4edd]">JVM / Python / .NET</span> · 
            <span className="text-emerald-400">io_uring</span> · 
            <span className="text-[#FFB703]">Ollivier-Ricci Curvature</span>
          </div>
        </div>

        <div className="pt-4 border-t border-white/5 flex flex-wrap gap-2 text-xs font-code text-gray-400">
          <span className="flex items-center gap-1.5 bg-white/5 px-2.5 py-1 rounded">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#00F5D4]" />
            CFG Ricci Curvature Analysis
          </span>
          <span className="flex items-center gap-1.5 bg-white/5 px-2.5 py-1 rounded">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#9d4edd]" />
            Synthetic mRNA Messaging
          </span>
        </div>
      </BentoCard>

      {/* 2. KineQuet / KineSQL (Col-span-5) */}
      <BentoCard className="md:col-span-5 border-indigo-400/30">
        <div>
          <div className="flex items-center justify-between mb-4">
            <span className="font-code text-xs font-semibold text-[#9d4edd] bg-[#9d4edd]/10 border border-[#9d4edd]/25 px-2.5 py-1 rounded-md">
              ENGINE 02 // EVENT SOURCING
            </span>
            <span className="font-code text-[11px] text-gray-400">
              Reed-Solomon FEC
            </span>
          </div>

          <h3 className="text-2xl font-bold tracking-tight text-white mb-3">
            KineQuet / KineSQL — Distributed Storage
          </h3>

          <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-6">
            Distributed append-only event sourcing storage engine. Runs SQLite as an immutable commit log over a custom <code className="text-emerald-400">io_uring</code> VFS, using leaderless UDP gossip transport with integrated Reed-Solomon forward error correction.
          </p>

          <div className="p-3 rounded-xl bg-black/50 border border-white/5 font-code text-[11px] text-gray-300 mb-6 flex flex-wrap gap-1.5">
            <span className="text-gray-400">Stack:</span>
            <span className="text-sky-300">C++23</span> · 
            <span className="text-[#00F5D4]">Rust</span> · 
            <span className="text-emerald-400">SQLite VFS</span> · 
            <span className="text-[#FFB703]">AVX2</span> · 
            <span className="text-purple-300">L-CRDTs</span>
          </div>
        </div>

        <div className="pt-4 border-t border-white/5 text-xs font-code text-gray-400 flex items-center justify-between">
          <span>Invariant: Zero-Lost Commit Log</span>
          <span className="text-emerald-400">AVX2 VECTORIZED</span>
        </div>
      </BentoCard>

      {/* 3. Kineplex — Stream Multiplexer (Col-span-4) */}
      <BentoCard id="kineplex" className="md:col-span-4 border-emerald-400/30">
        <div>
          <div className="flex items-center justify-between mb-4">
            <span className="font-code text-xs font-semibold text-[#00F5D4] bg-[#00F5D4]/10 border border-[#00F5D4]/25 px-2.5 py-1 rounded-md">
              ENGINE 03 // MULTIPLEXER
            </span>
          </div>

          <h3 className="text-xl font-bold tracking-tight text-white mb-2">
            Kineplex Engine
          </h3>

          <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-4">
            Real-time telemetry and stream multiplexer built on cache-aligned lock-free ring buffers (64-byte padded) with smooth diffeomorphism-based time synchronization.
          </p>

          <div className="font-code text-[11px] text-gray-400 mb-4">
            <strong className="text-white">Stack:</strong> Rust · LMAX Disruptor · AVX-512 · Zero-Copy
          </div>
        </div>

        <div className="pt-3 border-t border-white/5 text-[11px] font-code text-gray-400 flex items-center justify-between">
          <span>Cache-line aligned (64B)</span>
          <span className="text-[#00F5D4]">0.38 ms Jitter</span>
        </div>
      </BentoCard>

      {/* 4. Synapse Protocol (Col-span-4) */}
      <BentoCard className="md:col-span-4 border-amber-400/30">
        <div>
          <div className="flex items-center justify-between mb-4">
            <span className="font-code text-xs font-semibold text-[#FFB703] bg-[#FFB703]/10 border border-[#FFB703]/25 px-2.5 py-1 rounded-md">
              ENGINE 04 // PROTOCOL
            </span>
          </div>

          <h3 className="text-xl font-bold tracking-tight text-white mb-2">
            Synapse Protocol
          </h3>

          <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-4">
            High-frequency topological reconciliation protocol operating under mechanical sympathy principles, with partition sharding parameterized by Fisher information metrics and game-theoretic equilibria.
          </p>

          <div className="font-code text-[11px] text-gray-400 mb-4">
            <strong className="text-white">Stack:</strong> Rust · Arrow IPC · FlatBuffers · Fisher Metric
          </div>
        </div>

        <div className="pt-3 border-t border-white/5 text-[11px] font-code text-gray-400 flex items-center justify-between">
          <span>Zero-Copy Transfer</span>
          <span className="text-[#FFB703]">Game Theory Balance</span>
        </div>
      </BentoCard>

      {/* 5. Ephemeral Kinetic Cells (EKC) (Col-span-4) */}
      <BentoCard className="md:col-span-4 border-purple-400/30">
        <div>
          <div className="flex items-center justify-between mb-4">
            <span className="font-code text-xs font-semibold text-[#9d4edd] bg-[#9d4edd]/10 border border-[#9d4edd]/25 px-2.5 py-1 rounded-md">
              ENGINE 05 // TRANSIENT
            </span>
          </div>

          <h3 className="text-xl font-bold tracking-tight text-white mb-2">
            Ephemeral Kinetic Cells (EKC)
          </h3>

          <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-4">
            Transient execution micro-sandboxes providing isolated serverless task execution and deterministic data lineage, backed by Firecracker microVMs and <code className="text-sky-300">bumpalo</code> arena memory allocators.
          </p>

          <div className="font-code text-[11px] text-gray-400 mb-4">
            <strong className="text-white">Stack:</strong> Rust · Firecracker MicroVM · Bumpalo Arena
          </div>
        </div>

        <div className="pt-3 border-t border-white/5 text-[11px] font-code text-gray-400 flex items-center justify-between">
          <span>Sub-1ms MicroVM boot</span>
          <span className="text-emerald-400">Immutable Lineage</span>
        </div>
      </BentoCard>

      {/* 6. Quimera Labs Anatomy (Col-span-6) */}
      <BentoCard className="md:col-span-6 border-pink-400/30">
        <div>
          <div className="flex items-center justify-between mb-4">
            <span className="font-code text-xs font-semibold text-pink-400 bg-pink-400/10 border border-pink-400/25 px-2.5 py-1 rounded-md">
              ENGINE 06 // PROCEDURAL SIMULATION
            </span>
            <span className="font-code text-[11px] text-gray-400">
              WebGPU & WGSL
            </span>
          </div>

          <h3 className="text-2xl font-bold tracking-tight text-white mb-2">
            Quimera Labs Anatomy — WebGPU Procedural Engine
          </h3>

          <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-5">
            Interactive 3D medical visualization and digital histopathology engine supporting over 1,000 clinical models and 5,000 digital histology slides via direct WebGPU compute pipelines.
          </p>

          <div className="p-3 rounded-xl bg-black/50 border border-white/5 font-code text-xs text-gray-300 mb-4 flex flex-wrap gap-2">
            <strong className="text-white">Stack:</strong> WebGPU · WGSL Shaders · WebAssembly (Wasm) · Three.js
          </div>
        </div>

        <div className="pt-3 border-t border-white/5 text-xs font-code text-gray-400 flex items-center justify-between">
          <span>1,000+ Clinical Scenarios</span>
          <span className="text-pink-400 font-semibold">5,000+ Digital Slides</span>
        </div>
      </BentoCard>

      {/* 7. COBOL-Flow V5 & bare-sql-engine (Col-span-6) */}
      <BentoCard className="md:col-span-6 border-purple-400/30">
        <div>
          <div className="flex items-center justify-between mb-4">
            <span className="font-code text-xs font-semibold text-purple-400 bg-purple-400/10 border border-purple-400/25 px-2.5 py-1 rounded-md">
              ENGINE 07 // AOT COMPILERS & TRANSPILERS
            </span>
            <span className="font-code text-[11px] text-gray-400">
              Java 21+ Project Panama
            </span>
          </div>

          <h3 className="text-2xl font-bold tracking-tight text-white mb-2">
            COBOL-Flow V5 & bare-sql-engine
          </h3>

          <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-5">
            Automated mainframe transpiler converting legacy COBOL into OpenAPI 3.0 contracts and executable BDD suites via Keith Cooper SSA data-flow analysis, alongside an Ahead-of-Time in-memory SQL execution engine via Project Panama FFM.
          </p>

          <div className="p-3 rounded-xl bg-black/50 border border-white/5 font-code text-xs text-gray-300 mb-4 flex flex-wrap gap-2">
            <strong className="text-white">Stack:</strong> Java 21+ (Panama FFM) · Keith Cooper SSA · OpenAPI 3.0 · BDD
          </div>
        </div>

        <div className="pt-3 border-t border-white/5 text-xs font-code text-gray-400 flex items-center justify-between">
          <span>AOT SQL In-Memory</span>
          <span className="text-purple-400 font-semibold">Zero JNI Overhead</span>
        </div>
      </BentoCard>
    </div>
  );
};
