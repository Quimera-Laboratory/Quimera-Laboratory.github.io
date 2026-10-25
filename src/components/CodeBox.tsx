import React, { useState } from 'react';
import { Copy, Check, Terminal } from 'lucide-react';

const CODE_STRING = `// Quimera Kinetic Stream multiplexing setup
const engine = await KineplexEngine.init({
  bufferStrategy: "zero-copy-ring",
  maxPacketJitterMs: 0.45,
  concurrencyWorkers: navigator.hardwareConcurrency || 16
});
await engine.attachFanoutRelay("quimera-laboratory.edge");`;

export const CodeBox: React.FC = () => {
  const [copied, setCopied] = useState<boolean>(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(CODE_STRING);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="relative mt-2 rounded-xl bg-[#020617] border border-white/10 overflow-hidden font-code text-xs sm:text-sm">
      {/* Code Header Bar */}
      <div className="flex items-center justify-between px-4 py-2 bg-slate-900/60 border-b border-white/5">
        <div className="flex items-center gap-2 text-gray-400 text-xs">
          <Terminal className="w-3.5 h-3.5 text-sky-400" />
          <span>kineplex-init.ts</span>
        </div>
        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 px-2.5 py-1 text-xs rounded bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white transition-colors cursor-pointer border border-white/5"
          title="Copy code"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-emerald-400" />
              <span className="text-emerald-400 font-medium">Copied!</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5" />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>

      {/* Code Content */}
      <pre className="p-4 overflow-x-auto text-sky-200 leading-relaxed font-code text-[12px] sm:text-[13px]">
        <code>
          <span className="text-slate-500">// Quimera Kinetic Stream multiplexing setup</span>
          {'\n'}
          <span className="text-purple-400 font-semibold">const</span> engine = <span className="text-purple-400 font-semibold">await</span> <span className="text-sky-400">KineplexEngine</span>.<span className="text-sky-400">init</span>({'{'}
          {'\n'}  bufferStrategy: <span className="text-emerald-400">"zero-copy-ring"</span>,
          {'\n'}  maxPacketJitterMs: <span className="text-emerald-400">0.45</span>,
          {'\n'}  concurrencyWorkers: <span className="text-purple-400 font-semibold">navigator</span>.hardwareConcurrency || <span className="text-emerald-400">16</span>
          {'\n'}{'}'});
          {'\n'}
          <span className="text-purple-400 font-semibold">await</span> engine.<span className="text-sky-400">attachFanoutRelay</span>(<span className="text-emerald-400">"quimera-laboratory.edge"</span>);
        </code>
      </pre>
    </div>
  );
};
