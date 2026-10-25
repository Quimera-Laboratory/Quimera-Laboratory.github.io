import React, { useEffect, useRef, useState, useCallback } from 'react';
import { Activity, Zap, Play, Pause, RefreshCw } from 'lucide-react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
}

export const KineticCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isRunning, setIsRunning] = useState<boolean>(true);
  const [packetCount, setPacketCount] = useState<number>(50);
  const [showWaves, setShowWaves] = useState<boolean>(true);
  const [livePacketsPerSec, setLivePacketsPerSec] = useState<number>(1420840);
  const [liveJitterMs, setLiveJitterMs] = useState<number>(0.38);
  const particlesRef = useRef<Particle[]>([]);
  const animFrameId = useRef<number | null>(null);

  // Initialize and maintain particles
  const initParticles = useCallback((width: number, height: number, count: number) => {
    const colors = ['#38bdf8', '#818cf8', '#34d399'];
    const newParticles: Particle[] = [];
    for (let i = 0; i < count; i++) {
      newParticles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: Math.random() * 1.8 + 0.9,
        vy: (Math.random() - 0.5) * 0.45,
        size: Math.random() * 2.2 + 1.5,
        color: colors[i % colors.length],
      });
    }
    particlesRef.current = newParticles;
  }, []);

  // Spawn packets on canvas click
  const handleCanvasClick = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const clickY = e.clientY - rect.top;

    const burstColors = ['#38bdf8', '#818cf8', '#34d399', '#ffffff'];
    for (let i = 0; i < 15; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 3 + 1.5;
      particlesRef.current.push({
        x: clickX,
        y: clickY,
        vx: Math.cos(angle) * speed + 1.2,
        vy: Math.sin(angle) * speed,
        size: Math.random() * 2.5 + 2,
        color: burstColors[Math.floor(Math.random() * burstColors.length)],
      });
    }

    // Limit maximum particles to prevent memory bloat
    if (particlesRef.current.length > 150) {
      particlesRef.current = particlesRef.current.slice(-100);
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = container.clientWidth || 900;
    const height = 240;

    const handleResize = () => {
      if (!canvas || !container) return;
      const dpr = window.devicePixelRatio || 1;
      width = container.clientWidth;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);
      if (particlesRef.current.length === 0) {
        initParticles(width, height, packetCount);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    if (particlesRef.current.length === 0) {
      initParticles(width, height, packetCount);
    }

    let time = 0;
    let lastMetricUpdate = performance.now();

    const render = (now: number) => {
      if (isRunning) {
        time += 0.02;

        // Micro-fluctuate telemetry metrics realistically every 600ms
        if (now - lastMetricUpdate > 600) {
          const jitterDelta = (Math.random() - 0.5) * 0.04;
          setLiveJitterMs(Number(Math.max(0.31, Math.min(0.48, 0.38 + jitterDelta)).toFixed(2)));
          const pktVariation = Math.floor((Math.random() - 0.5) * 12000);
          setLivePacketsPerSec(1420000 + pktVariation);
          lastMetricUpdate = now;
        }

        // Semi-transparent fade for motion trails
        ctx.fillStyle = 'rgba(3, 7, 18, 0.28)';
        ctx.fillRect(0, 0, width, height);

        if (showWaves) {
          // Primary harmonic kinetic sine carrier
          ctx.beginPath();
          ctx.lineWidth = 1.6;
          ctx.strokeStyle = 'rgba(56, 189, 248, 0.35)';
          for (let x = 0; x < width; x += 4) {
            const y = height / 2 + Math.sin(x * 0.015 + time) * 36 * Math.sin(time * 0.5);
            if (x === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
          }
          ctx.stroke();

          // Second harmonic carrier
          ctx.beginPath();
          ctx.lineWidth = 1.1;
          ctx.strokeStyle = 'rgba(129, 140, 248, 0.25)';
          for (let x = 0; x < width; x += 6) {
            const y = height / 2 + Math.cos(x * 0.012 - time * 0.8) * 26;
            if (x === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
          }
          ctx.stroke();

          // Third subtle high-frequency edge sync ripple
          ctx.beginPath();
          ctx.lineWidth = 0.8;
          ctx.strokeStyle = 'rgba(52, 211, 153, 0.18)';
          for (let x = 0; x < width; x += 8) {
            const y = height / 2 + Math.sin(x * 0.03 + time * 1.4) * 12;
            if (x === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
          }
          ctx.stroke();
        }

        // Flowing stream packets
        const particles = particlesRef.current;
        for (let i = 0; i < particles.length; i++) {
          const p = particles[i];
          p.x += p.vx;
          p.y += p.vy;

          if (p.x > width) p.x = 0;
          if (p.x < 0) p.x = width;
          if (p.y < 0 || p.y > height) p.vy *= -1;

          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fillStyle = p.color;
          ctx.shadowColor = p.color;
          ctx.shadowBlur = 8;
          ctx.fill();
        }
        ctx.shadowBlur = 0;
      }

      animFrameId.current = requestAnimationFrame(render);
    };

    animFrameId.current = requestAnimationFrame(render);

    return () => {
      if (animFrameId.current) {
        cancelAnimationFrame(animFrameId.current);
      }
      window.removeEventListener('resize', handleResize);
    };
  }, [isRunning, showWaves, initParticles, packetCount]);

  return (
    <div
      ref={containerRef}
      className="w-full mt-12 rounded-2xl border border-white/10 bg-[#050b18] overflow-hidden shadow-[0_25px_60px_-15px_rgba(0,0,0,0.7),0_0_40px_rgba(56,189,248,0.1)] relative"
    >
      {/* Top telemetry status bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 px-6 py-3.5 bg-slate-900/80 border-b border-white/5 backdrop-blur-md">
        <div className="flex flex-wrap items-center gap-4 sm:gap-6 font-code text-xs">
          <span className="flex items-center gap-2 text-gray-400">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Status: <strong className="text-white font-medium">ACTIVE PIPELINE</strong>
          </span>

          <span className="flex items-center gap-1.5 text-gray-400">
            Multiplexer: <strong className="text-sky-400 font-medium">kineplex-v1.4</strong>
          </span>

          <span className="hidden sm:flex items-center gap-1.5 text-gray-400">
            Zero-Copy: <strong className="text-emerald-400 font-medium">ENABLED</strong>
          </span>

          <span className="hidden md:flex items-center gap-1.5 text-gray-400">
            Jitter: <strong className="text-sky-400 font-medium">{liveJitterMs} ms</strong>
          </span>

          <span className="hidden lg:flex items-center gap-1.5 text-gray-400">
            Throughput: <strong className="text-emerald-400 font-medium">{(livePacketsPerSec / 1000000).toFixed(2)} M/s</strong>
          </span>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setShowWaves(!showWaves)}
            className={`px-2.5 py-1 rounded text-[11px] font-code transition-colors border ${
              showWaves 
                ? 'bg-sky-500/10 text-sky-400 border-sky-500/30' 
                : 'bg-white/5 text-gray-400 border-white/10 hover:text-white'
            }`}
            title="Toggle carrier harmonics"
          >
            Harmonics
          </button>

          <button
            onClick={() => setIsRunning(!isRunning)}
            className="flex items-center gap-1 px-2.5 py-1 rounded text-[11px] font-code bg-white/5 text-gray-300 border border-white/10 hover:bg-white/10 transition-colors"
            title={isRunning ? "Pause simulator" : "Resume simulator"}
          >
            {isRunning ? <Pause className="w-3 h-3 text-amber-400" /> : <Play className="w-3 h-3 text-emerald-400" />}
            <span>{isRunning ? "Pause" : "Run"}</span>
          </button>

          <span className="font-code text-[11px] text-emerald-400 font-semibold tracking-wider flex items-center gap-1.5 bg-emerald-950/60 border border-emerald-500/20 px-2.5 py-1 rounded-full">
            <Activity className="w-3 h-3 animate-pulse" />
            LIVE TELEMETRY
          </span>
        </div>
      </div>

      {/* Canvas Viewport */}
      <div className="relative">
        <canvas
          ref={canvasRef}
          onClick={handleCanvasClick}
          className="w-full h-[240px] block bg-[#030712] cursor-crosshair"
          title="Click to inject stream packets into kinetic pipeline"
        />

        {/* Subtle helper tooltip */}
        <div className="absolute bottom-2 right-4 pointer-events-none text-[10px] font-code text-gray-400/80 bg-black/50 px-2 py-0.5 rounded border border-white/5">
          Click canvas to inject micro-packets
        </div>
      </div>
    </div>
  );
};
