import React, { useState } from 'react';
import { X, Copy, Check, FileCode, ExternalLink } from 'lucide-react';
import { ScientificPaper } from './PublicationsSection';

interface BibtexDrawerProps {
  paper: ScientificPaper | null;
  onClose: () => void;
}

export const BibtexDrawer: React.FC<BibtexDrawerProps> = ({ paper, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!paper) return null;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(paper.bibtex);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div 
      className="fixed inset-0 z-[1050] flex items-end sm:items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="w-full max-w-2xl bg-[#090b14] border border-white/15 rounded-2xl shadow-[0_30px_90px_rgba(0,0,0,0.9),0_0_50px_rgba(0,245,212,0.15)] overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#0d101d] border-b border-white/10">
          <div className="flex items-center gap-2.5">
            <FileCode className="w-4 h-4 text-[#00F5D4]" />
            <span className="font-code text-xs sm:text-sm font-bold text-white">
              BibTeX Citation Source — {paper.id}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleCopy}
              className={`flex items-center gap-1.5 px-3 py-1 rounded text-xs font-code border transition-all cursor-pointer ${
                copied
                  ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40'
                  : 'bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white border-white/10'
              }`}
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Copied to clipboard ✓</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-[#00F5D4]" />
                  <span>Copy BibTeX</span>
                </>
              )}
            </button>

            <button
              onClick={onClose}
              className="p-1 rounded-md text-gray-400 hover:text-white hover:bg-white/10"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Paper title preview */}
        <div className="px-6 py-3 bg-black/40 border-b border-white/5">
          <h4 className="text-sm font-serif-math text-gray-200 italic">
            "{paper.title}"
          </h4>
          <span className="text-[11px] font-code text-gray-400">
            {paper.badge}
          </span>
        </div>

        {/* BibTeX Code block */}
        <div className="p-6 bg-[#04060b] overflow-x-auto">
          <pre className="font-code text-xs sm:text-sm text-sky-200 leading-relaxed">
            <code>{paper.bibtex}</code>
          </pre>
        </div>

        {/* Footer */}
        <div className="px-6 py-3 bg-[#080a12] border-t border-white/5 flex items-center justify-between text-[11px] font-code text-gray-400">
          <span>Compatible with standard LaTeX, Overleaf, BibDesk, and Zotero</span>
          <span className="text-[#00F5D4]">Quimera Laboratory Preprints</span>
        </div>
      </div>
    </div>
  );
};
