import React, { useState } from 'react';
import ElementTile from './ElementTile';
import { labAudio } from '../utils/audio';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { 
  FileText, 
  Fingerprint, 
  ShieldCheck, 
  Binary, 
  Cpu, 
  Search, 
  ExternalLink,
  Code,
  Terminal,
  Award,
  Compass
} from 'lucide-react';

export default function TheScientist() {
  const [revealedRedactions, setRevealedRedactions] = useState(false);
  const revealRef = useScrollReveal();

  const handleToggleRedactions = () => {
    labAudio.playGeiger();
    setRevealedRedactions(!revealedRedactions);
  };

  return (
    <section id="scientist" ref={revealRef} className="reveal-on-scroll py-20 px-4 sm:px-6 max-w-7xl mx-auto relative select-none">
      {/* Hazard Border Accents */}
      <div className="flex items-center gap-3 mb-6">
        <div className="h-1 flex-1 hazard-stripe-green opacity-40" />
        <span className="font-mono text-xs uppercase tracking-widest text-emerald-400 bg-emerald-950/80 px-3 py-1 border border-emerald-800">
          SECURE PERSONNEL FILE // DOSSIER #ABQ-2024-AS
        </span>
        <div className="h-1 flex-1 hazard-stripe-green opacity-40" />
      </div>

      {/* Main Section Header */}
      <div className="text-center mb-12">
        <h2 className="font-heading font-black text-3xl sm:text-5xl uppercase tracking-wider text-white">
          THE PERSON BEHIND THE EXPERIMENTS
        </h2>
        <p className="font-mono text-xs sm:text-sm text-stone-400 mt-2 uppercase tracking-widest">
          Albuquerque Laboratory Personnel Classification // Newton School of Technology
        </p>
      </div>

      {/* The Dossier Folder Card */}
      <div className="relative bg-[#0d1310] border-2 border-emerald-900/80 hover:border-emerald-700/90 transition-all duration-300 shadow-[0_15px_40px_rgba(0,0,0,0.85)] max-w-5xl mx-auto overflow-hidden">
        {/* Animated Laser Scanner Line */}
        <div className="absolute inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-emerald-400 to-transparent shadow-[0_0_12px_#10b981] animate-scanner opacity-80 pointer-events-none z-20" />

        {/* Dossier Top Manila Tab */}
        <div className="bg-[#14201a] border-b border-emerald-800/80 px-6 py-3 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <FileText className="w-5 h-5 text-emerald-400 animate-pulse" />
            <span className="font-mono text-sm font-bold tracking-wider text-emerald-300">
              CASE RECORD: AS-8902-BTECH
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs font-mono">
            <span className="text-stone-400">CLEARANCE: <strong className="text-amber-400 font-bold">RESEARCH ASSOCIATE (YEAR 1)</strong></span>
            <button
              onClick={handleToggleRedactions}
              className="text-[11px] px-2.5 py-1 border border-emerald-700 bg-emerald-950/60 hover:bg-emerald-900 text-emerald-300 font-mono tracking-wider uppercase transition-colors"
            >
              {revealedRedactions ? 'Hide Redactions' : 'Declassify Document'}
            </button>
          </div>
        </div>

        {/* Dossier Body */}
        <div className="p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 relative">
          {/* Left Column: ID Badge & Bio Seal */}
          <div className="lg:col-span-4 flex flex-col items-center">
            {/* ID Badge Frame */}
            <div className="w-full max-w-xs bg-black/70 border-2 border-stone-700 p-4 relative shadow-inner hover:border-emerald-600 transition-colors duration-300">
              {/* Badge Clip */}
              <div className="w-12 h-3 bg-stone-500 mx-auto -mt-6 mb-3 rounded-t-sm border border-stone-400" />

              {/* Avatar Box with Hazmat Glow */}
              <div className="relative aspect-square w-full bg-stone-900 border border-emerald-800 flex flex-col items-center justify-center overflow-hidden group">
                {/* SVG Laboratory Avatar */}
                <svg viewBox="0 0 100 100" className="w-36 h-36">
                  {/* Background Lab Grid */}
                  <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                    <path d="M 10 0 L 0 0 0 10" fill="none" stroke="#1c2e24" strokeWidth="0.5" />
                  </pattern>
                  <rect width="100" height="100" fill="url(#grid)" />

                  {/* Hazmat Hood & Mask Silhouette */}
                  <g transform="translate(10, 5)">
                    {/* Yellow Hazmat Suit Hood */}
                    <path d="M40,20 C24,20 20,35 20,55 L60,55 C60,35 56,20 40,20 Z" fill="#f59e0b" stroke="#b45309" strokeWidth="1.5" />
                    {/* Dark Visor */}
                    <rect x="28" y="32" width="24" height="14" rx="4" fill="#0f172a" stroke="#38bdf8" strokeWidth="1" />
                    {/* Reflection on visor */}
                    <path d="M30,34 L42,34 L36,44 L30,44 Z" fill="#38bdf8" opacity="0.4" />
                    {/* Dual Respirator Filters */}
                    <circle cx="32" cy="48" r="4.5" fill="#e2e8f0" stroke="#64748b" strokeWidth="1" />
                    <circle cx="48" cy="48" r="4.5" fill="#e2e8f0" stroke="#64748b" strokeWidth="1" />
                    {/* Shoulders */}
                    <path d="M10,75 C10,55 20,55 40,55 C60,55 70,55 70,75 Z" fill="#d97706" />
                  </g>
                </svg>

                {/* Overlaid Badge Details */}
                <div className="absolute bottom-2 inset-x-2 bg-black/80 border border-emerald-900 px-2 py-1 flex items-center justify-between text-[10px] font-mono text-emerald-400">
                  <span>NST // B.TECH</span>
                  <span className="animate-pulse">ACTIVE</span>
                </div>
              </div>

              {/* Personnel Details */}
              <div className="mt-4 text-center font-mono space-y-1">
                <div className="font-heading font-black text-2xl uppercase tracking-wider text-white">
                  ANANYA SINGH
                </div>
                <div className="text-xs text-emerald-400 font-bold uppercase tracking-wider">
                  STUDENT DEVELOPER // FIRST YEAR
                </div>
                <div className="text-[11px] text-stone-400">
                  ID: NST-2024-BTECH-ENG
                </div>
              </div>

              {/* Barcode & Fingerprint */}
              <div className="mt-6 pt-4 border-t border-stone-800 flex items-center justify-between">
                <div className="space-y-0.5">
                  {/* Simulated Barcode */}
                  <div className="flex h-6 items-end gap-[2px]">
                    {[3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5, 8, 9, 7, 9, 3, 2, 3].map((w, idx) => (
                      <div
                        key={idx}
                        className="bg-stone-300"
                        style={{ width: `${w > 5 ? 3 : 1.5}px`, height: '100%' }}
                      />
                    ))}
                  </div>
                  <div className="text-[9px] font-mono text-stone-500">SEC-HASH: 99.1-AS</div>
                </div>

                <Fingerprint className="w-8 h-8 text-emerald-500/60 hover:text-emerald-400 transition-colors" />
              </div>
            </div>

            {/* Stamp 1: CLASSIFIED */}
            <div className="mt-6 rubber-stamp border-red-600/80 text-red-500 rotate-[-4deg] text-sm shadow-[0_0_15px_rgba(239,68,68,0.2)]">
              CLASSIFIED // EYES ONLY
            </div>
          </div>

          {/* Right Column: Personnel Dossier Content */}
          <div className="lg:col-span-8 space-y-6">
            {/* Rubber Stamp 2 */}
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="rubber-stamp border-emerald-500/80 text-emerald-400 text-xs shadow-[0_0_12px_rgba(16,185,129,0.2)]">
                LEVEL 1 CLEARANCE // RESEARCH IN PROGRESS
              </div>
              <div className="font-mono text-xs text-stone-500">
                LOGGED DATE: ACADEMIC YEAR 2024–2025
              </div>
            </div>

            {/* Official Profile Statement */}
            <div className="border-l-4 border-emerald-500 pl-4 py-2 bg-emerald-950/20 hover:bg-emerald-950/30 transition-colors">
              <h3 className="font-mono text-xs uppercase tracking-widest text-emerald-400 mb-1">
                [SECTION 01: SUBJECT DOSSIER & PROFILE]
              </h3>
              <p className="font-body text-base sm:text-lg text-stone-200 leading-relaxed font-normal">
                “First-year B.Tech student at{' '}
                <span className={revealedRedactions ? 'bg-emerald-950/60 text-emerald-300 px-1 border border-emerald-700' : 'redacted-bar'}>
                  Newton School of Technology
                </span>
                , beginning a journey into{' '}
                <strong className="text-amber-400 font-semibold">programming</strong>,{' '}
                <strong className="text-emerald-400 font-semibold">computer systems</strong>,{' '}
                <strong className="text-cyan-400 font-semibold">artificial intelligence</strong>, and{' '}
                <strong className="text-white font-semibold">engineering</strong>.”
              </p>
            </div>

            {/* Fictional Lab Description */}
            <div className="border-l-4 border-amber-500 pl-4 py-2 bg-amber-950/15 hover:bg-amber-950/25 transition-colors">
              <h3 className="font-mono text-xs uppercase tracking-widest text-amber-400 mb-1">
                [SECTION 02: EXPERIMENTAL PHILOSOPHY]
              </h3>
              <p className="font-body text-base sm:text-lg text-stone-200 leading-relaxed font-normal italic">
                “Every experiment begins with a question. I'm learning how to turn curiosity into working solutions through hands-on practice, debugging, experimentation, and collaboration.”
              </p>
            </div>

            {/* Laboratory Core Values Grid */}
            <div>
              <h4 className="font-mono text-xs uppercase tracking-widest text-stone-400 mb-3 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>LABORATORY OPERATING PRINCIPLES</span>
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono text-xs">
                <div className="p-3 bg-stone-900/80 border border-stone-800 hover:border-emerald-600 transition-colors flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-emerald-400 mt-1.5 shadow-[0_0_6px_#10b981]" />
                  <div>
                    <strong className="text-white block uppercase tracking-wider mb-0.5">FIRST PRINCIPLES</strong>
                    <span className="text-stone-400">Deconstructing code and machine architecture to basic fundamentals.</span>
                  </div>
                </div>

                <div className="p-3 bg-stone-900/80 border border-stone-800 hover:border-amber-600 transition-colors flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-amber-400 mt-1.5 shadow-[0_0_6px_#f59e0b]" />
                  <div>
                    <strong className="text-white block uppercase tracking-wider mb-0.5">RELENTLESS DEBUGGING</strong>
                    <span className="text-stone-400">Treating runtime errors as catalysts for chemical discovery.</span>
                  </div>
                </div>

                <div className="p-3 bg-stone-900/80 border border-stone-800 hover:border-cyan-600 transition-colors flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-cyan-400 mt-1.5 shadow-[0_0_6px_#06b6d4]" />
                  <div>
                    <strong className="text-white block uppercase tracking-wider mb-0.5">EMPIRICAL TESTING</strong>
                    <span className="text-stone-400">Testing code systematically via Git commits and unit execution.</span>
                  </div>
                </div>

                <div className="p-3 bg-stone-900/80 border border-stone-800 hover:border-emerald-600 transition-colors flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-emerald-400 mt-1.5 shadow-[0_0_6px_#10b981]" />
                  <div>
                    <strong className="text-white block uppercase tracking-wider mb-0.5">COLLABORATIVE SYNTHESIS</strong>
                    <span className="text-stone-400">Pair programming, peer review, and engineering teamwork.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Official Academic Footnote */}
            <div className="pt-4 border-t border-stone-800 flex flex-wrap items-center justify-between text-[11px] font-mono text-stone-500">
              <span>STATUS: ACADEMIC JOURNEY ACTIVE (NO EMBELLISHMENT)</span>
              <span className="text-emerald-500/90 font-bold">ALBUQUERQUE BENCH LOG #001</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
