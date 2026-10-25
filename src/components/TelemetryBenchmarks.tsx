import React, { useState } from 'react';
import { Gauge, Cpu, Network, CheckCircle2 } from 'lucide-react';

interface MetricItem {
  label: string;
  val: string;
  status?: string;
  pct?: number;
}

type TabKey = 'stream' | 'memory' | 'network';

export const TelemetryBenchmarks: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabKey>('stream');

  const tabs: Record<TabKey, { title: string; icon: React.ReactNode; data: MetricItem[] }> = {
    stream: {
      title: 'Stream',
      icon: <Gauge className="w-3.5 h-3.5" />,
      data: [
        { label: 'Mean Latency', val: '0.38 ms', pct: 96 },
        { label: '99th Percentile', val: '1.12 ms', pct: 92 },
        { label: 'Throughput / Node', val: '1.42 M pkts/s', pct: 98 },
        { label: 'Packet Loss Rate', val: '0.00002 %', pct: 99.9 },
      ],
    },
    memory: {
      title: 'Memory',
      icon: <Cpu className="w-3.5 h-3.5" />,
      data: [
        { label: 'Buffer Allocation', val: 'Zero-Copy Heap', pct: 100 },
        { label: 'Memory Overhead', val: '< 14.2 MB', pct: 94 },
        { label: 'L1/L2 Cache Hit Rate', val: '99.4 %', pct: 99.4 },
        { label: 'Garbage Collections', val: '0 (Lock-Free)', pct: 100 },
      ],
    },
    network: {
      title: 'Network',
      icon: <Network className="w-3.5 h-3.5" />,
      data: [
        { label: 'Fanout Ratio', val: '1 : 64,000', pct: 95 },
        { label: 'Multiplex Channels', val: '1,024 Active', pct: 90 },
        { label: 'Protocol Transport', val: 'QUIC + UDP Fallback', pct: 100 },
        { label: 'Regional Anycast', val: '24 PoPs', pct: 96 },
      ],
    },
  };

  const currentTabData = tabs[activeTab];

  return (
    <div className="w-full">
      {/* Tab Switcher */}
      <div className="flex gap-2 mb-5 pb-3 border-b border-white/10">
        {(Object.keys(tabs) as TabKey[]).map((tabKey) => {
          const tab = tabs[tabKey];
          const isActive = activeTab === tabKey;
          return (
            <button
              key={tabKey}
              onClick={() => setActiveTab(tabKey)}
              className={`flex items-center gap-1.5 font-code text-xs px-3.5 py-1.5 rounded-md transition-all cursor-pointer ${
                isActive
                  ? 'bg-sky-400/15 text-sky-400 font-semibold border border-sky-400/30 shadow-[0_0_12px_rgba(56,189,248,0.15)]'
                  : 'text-gray-400 hover:text-white hover:bg-white/5 border border-transparent'
              }`}
            >
              {tab.icon}
              <span>{tab.title}</span>
            </button>
          );
        })}
      </div>

      {/* Metrics List */}
      <div className="space-y-3 font-code">
        {currentTabData.data.map((item, idx) => (
          <div
            key={idx}
            className="pb-2.5 border-b border-dashed border-white/10 last:border-b-0"
          >
            <div className="flex items-center justify-between text-xs sm:text-sm">
              <span className="text-gray-400 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400/70" />
                {item.label}:
              </span>
              <span className="font-semibold text-emerald-400">{item.val}</span>
            </div>
            {/* Visual subtle micro-meter bar */}
            {item.pct !== undefined && (
              <div className="w-full bg-white/5 h-1 rounded-full mt-1.5 overflow-hidden">
                <div
                  className="bg-gradient-to-r from-sky-400 to-emerald-400 h-full rounded-full transition-all duration-500 ease-out"
                  style={{ width: `${item.pct}%` }}
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
