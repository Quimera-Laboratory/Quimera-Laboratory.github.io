import React, { useEffect, useRef, useState } from 'react';
import { Activity, Radio, Cpu, RefreshCw, Zap } from 'lucide-react';

interface Node3D {
  x: number;
  y: number;
  z: number;
  baseX: number;
  baseY: number;
  baseZ: number;
  vx: number;
  vy: number;
  vz: number;
  ricciCurvature: number; // Curvatura discreta de Ollivier-Ricci
  size: number;
  color: string;
}

interface Edge {
  source: number;
  target: number;
  dist: number;
}

interface SynapticPulse {
  edgeIndex: number;
  progress: number;
  speed: number;
  color: string;
  size: number;
}

export const TopologicalManifoldCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [activeMetric, setActiveMetric] = useState<'riemann' | 'synapse'>('riemann');
  const [pulseSpeed, setPulseSpeed] = useState<number>(1);
  const [stats, setStats] = useState({
    curvatureMean: 'κ = +0.842',
    synapseRate: '1.42 M pkts/s',
    activeNodes: 64,
  });

  const mouseRef = useRef<{ x: number; y: number; active: boolean }>({ x: 0, y: 0, active: false });

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = container.clientWidth || 980;
    const height = 340;

    const handleResize = () => {
      if (!canvas || !container) return;
      const dpr = window.devicePixelRatio || 1;
      width = container.clientWidth;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    // Initialize 3D Riemannian Manifold Nodes in a torus/saddle topological grid
    const cols = 9;
    const rows = 7;
    const nodes: Node3D[] = [];
    const spacingX = width / (cols + 1);
    const spacingY = height / (rows + 1);

    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const u = (c / (cols - 1)) * 2 - 1; // -1 to 1
        const v = (r / (rows - 1)) * 2 - 1; // -1 to 1

        // Hyperbolic paraboloid / Riemann manifold elevation
        const baseZ = (u * u - v * v) * 45;
        const baseX = (c + 1) * spacingX;
        const baseY = (r + 1) * spacingY;

        // Ollivier-Ricci curvature metric computation
        const ricci = 1 - 0.5 * (u * u + v * v);

        nodes.push({
          x: baseX,
          y: baseY,
          z: baseZ,
          baseX,
          baseY,
          baseZ,
          vx: 0,
          vy: 0,
          vz: 0,
          ricciCurvature: ricci,
          size: Math.max(2, 3 + ricci * 1.5),
          color: ricci > 0.7 ? '#00F5D4' : (ricci > 0.3 ? '#9d4edd' : '#FFB703'),
        });
      }
    }

    // Connect nearest nodes with topological edges
    const edges: Edge[] = [];
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dx = nodes[i].baseX - nodes[j].baseX;
        const dy = nodes[i].baseY - nodes[j].baseY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist <= spacingX * 1.45) {
          edges.push({ source: i, target: j, dist });
        }
      }
    }

    // Active Synaptic Pulses along topological edges
    const pulses: SynapticPulse[] = [];
    for (let k = 0; k < 28; k++) {
      pulses.push({
        edgeIndex: Math.floor(Math.random() * edges.length),
        progress: Math.random(),
        speed: Math.random() * 0.015 + 0.008,
        color: k % 3 === 0 ? '#00F5D4' : (k % 3 === 1 ? '#7B2CBF' : '#FFB703'),
        size: Math.random() * 2 + 2,
      });
    }

    let time = 0;
    let animId: number;

    const render = () => {
      time += 0.02 * pulseSpeed;

      // Dark background with subtle trail decay
      ctx.fillStyle = 'rgba(3, 3, 5, 0.4)';
      ctx.fillRect(0, 0, width, height);

      // Node gravitational reaction & sinusoidal wave manifold
      const mouse = mouseRef.current;
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        
        // 3D Harmonic topological oscillation
        const waveZ = Math.sin(time + (n.baseX * 0.01) + (n.baseY * 0.01)) * 24;
        const waveY = Math.cos(time * 0.8 + (n.baseX * 0.008)) * 6;

        let targetX = n.baseX;
        let targetY = n.baseY + waveY;
        let targetZ = n.baseZ + waveZ;

        // Gravitational reaction if mouse is over canvas
        if (mouse.active) {
          const mdx = mouse.x - n.x;
          const mdy = mouse.y - n.y;
          const mdist = Math.sqrt(mdx * mdx + mdy * mdy);
          if (mdist < 180 && mdist > 1) {
            const force = (1 - mdist / 180) * 22;
            targetX += (mdx / mdist) * force;
            targetY += (mdy / mdist) * force;
            targetZ += force * 1.5;
          }
        }

        n.x += (targetX - n.x) * 0.1;
        n.y += (targetY - n.y) * 0.1;
        n.z += (targetZ - n.z) * 0.1;
      }

      // Render Topological Edges with Ricci curvature gradients
      for (let e = 0; e < edges.length; e++) {
        const edge = edges[e];
        const s = nodes[edge.source];
        const t = nodes[edge.target];

        const avgRicci = (s.ricciCurvature + t.ricciCurvature) / 2;
        const alpha = Math.max(0.12, Math.min(0.5, 0.2 + avgRicci * 0.25));

        ctx.beginPath();
        ctx.moveTo(s.x, s.y);
        ctx.lineTo(t.x, t.y);
        ctx.lineWidth = 1;
        ctx.strokeStyle = `rgba(0, 245, 212, ${alpha * 0.7})`;
        ctx.stroke();
      }

      // Render Synaptic Pulses (Zero-Copy Synapse Protocol packets)
      for (let p = 0; p < pulses.length; p++) {
        const pulse = pulses[p];
        pulse.progress += pulse.speed * pulseSpeed;
        if (pulse.progress >= 1) {
          pulse.progress = 0;
          pulse.edgeIndex = Math.floor(Math.random() * edges.length);
        }

        const edge = edges[pulse.edgeIndex];
        const s = nodes[edge.source];
        const t = nodes[edge.target];

        const px = s.x + (t.x - s.x) * pulse.progress;
        const py = s.y + (t.y - s.y) * pulse.progress;

        ctx.beginPath();
        ctx.arc(px, py, pulse.size, 0, Math.PI * 2);
        ctx.fillStyle = pulse.color;
        ctx.shadowColor = pulse.color;
        ctx.shadowBlur = 10;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      // Render Manifold Nodes
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        const perspective = 1 + n.z / 300;
        const renderRadius = Math.max(1.8, n.size * perspective);

        ctx.beginPath();
        ctx.arc(n.x, n.y, renderRadius, 0, Math.PI * 2);
        ctx.fillStyle = n.color;
        ctx.shadowColor = n.color;
        ctx.shadowBlur = n.ricciCurvature > 0.7 ? 12 : 5;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
        active: true,
      };
    };

    const handleMouseLeave = () => {
      mouseRef.current.active = false;
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [pulseSpeed]);

  return (
    <div 
      ref={containerRef}
      className="w-full mt-12 rounded-2xl border border-white/10 bg-[#06080e]/90 overflow-hidden shadow-[0_30px_70px_-15px_rgba(0,0,0,0.85),0_0_35px_rgba(0,245,212,0.08)] relative"
    >
      {/* HUD Telemetry Top Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 px-6 py-3 bg-[#0a0d18]/90 border-b border-white/5 backdrop-blur-md">
        <div className="flex flex-wrap items-center gap-4 sm:gap-6 font-code text-xs">
          <span className="flex items-center gap-2 text-gray-400">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00F5D4] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00F5D4]"></span>
            </span>
            MANIFOLD: <strong className="text-white font-medium">RIEMANNIAN_CURVATURE</strong>
          </span>

          <span className="flex items-center gap-1.5 text-gray-400">
            RICCI METRIC: <strong className="text-[#00F5D4] font-medium">{stats.curvatureMean}</strong>
          </span>

          <span className="hidden sm:flex items-center gap-1.5 text-gray-400">
            SYNAPSE PULSES: <strong className="text-[#9d4edd] font-medium">ACTIVE (28 ZERO-COPY CHANNELS)</strong>
          </span>

          <span className="hidden md:flex items-center gap-1.5 text-gray-400">
            DISRUPTOR RATE: <strong className="text-[#FFB703] font-medium">{stats.synapseRate}</strong>
          </span>
        </div>

        {/* Speed & Mode Toggles */}
        <div className="flex items-center gap-2.5">
          <button
            onClick={() => setPulseSpeed(s => s === 1 ? 2.2 : (s === 2.2 ? 0.4 : 1))}
            className="flex items-center gap-1.5 px-2.5 py-1 rounded text-[11px] font-code bg-white/5 hover:bg-white/10 text-gray-300 border border-white/10 transition-colors cursor-pointer"
            title="Adjust synaptic pulse propagation rate"
          >
            <Zap className="w-3 h-3 text-[#00F5D4]" />
            <span>{pulseSpeed === 1 ? '1x Normal' : (pulseSpeed > 1 ? '2.2x Turbo' : '0.4x Slow')}</span>
          </button>

          <span className="font-code text-[11px] text-[#00F5D4] font-semibold tracking-wider flex items-center gap-1.5 bg-teal-950/60 border border-teal-500/20 px-2.5 py-1 rounded-full">
            <Activity className="w-3 h-3 animate-pulse" />
            60 FPS SYNAPTIC HUD
          </span>
        </div>
      </div>

      {/* Canvas Viewport */}
      <div className="relative">
        <canvas
          ref={canvasRef}
          className="w-full h-[320px] sm:h-[340px] block bg-[#030305] cursor-crosshair"
          title="Topological Manifold — Pointer coordinates dynamically perturb curvature tensors"
        />

        {/* Subtle Canvas Legend */}
        <div className="absolute bottom-3 left-4 pointer-events-none flex items-center gap-4 text-[11px] font-code text-gray-400 bg-black/60 backdrop-blur-md px-3 py-1 rounded-lg border border-white/5">
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#00F5D4]" />
            κ &gt; 0 (Positive Curvature)
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#9d4edd]" />
            κ ≈ 0 (Euclidean Flat)
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#FFB703]" />
            κ &lt; 0 (Hyperbolic)
          </span>
        </div>

        <div className="absolute bottom-3 right-4 pointer-events-none text-[10px] font-code text-gray-400/80 bg-black/50 px-2.5 py-1 rounded border border-white/5">
          Pointer Gravitational Coupling (x, y)
        </div>
      </div>
    </div>
  );
};
