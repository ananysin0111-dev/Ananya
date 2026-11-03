import React from 'react';
import ElementTile from './ElementTile';
import { labAudio } from '../utils/audio';
import { 
  FlaskConical, 
  Terminal, 
  ChevronDown, 
  Activity, 
  Sparkles, 
  ShieldAlert,
  Flame,
  ArrowRight
} from 'lucide-react';

export default function TheLabHero({ onNavigate, onOpenTerminal }) {
  const handleScrollTo = (id) => {
    labAudio.playClick();
    onNavigate(id);
  };

  return (
    <section id="lab" className="relative min-h-[90vh] flex flex-col justify-center items-center px-4 sm:px-6 pt-12 pb-20 select-none">
      {/* Background Subtle Lab Atmospheric Glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-950/15 to-transparent pointer-events-none" />

      {/* Albuquerque Desert Coordinates Pill - Entrance 1 */}
      <div className="mb-6 inline-flex items-center gap-2 px-3.5 py-1.5 border border-emerald-800/80 bg-emerald-950/50 text-emerald-300 font-mono text-xs uppercase tracking-widest backdrop-blur-sm animate-in fade-in slide-in-from-top-4 duration-700">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
        <span>ALBUQUERQUE RV FACILITY // NEWTON SCHOOL OF TECH</span>
      </div>

      {/* Breaking Bad Name Representation with Periodic Tiles - Entrance 2 */}
      <div className="text-center mb-6">
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 mb-4 animate-in zoom-in-95 fade-in duration-800 delay-150">
          {/* ANANYA */}
          <div className="flex items-center gap-1 sm:gap-2">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-600 to-green-500 rounded-none blur-sm opacity-40 group-hover:opacity-75 transition duration-500 pointer-events-none" />
              <ElementTile
                symbol="As"
                number={33}
                name="Arsenic"
                mass="74.92"
                size="hero"
                variant="toxic"
                className="hover:scale-105 transition-transform"
              />
            </div>
            <span className="font-display text-5xl sm:text-7xl lg:text-9xl tracking-tight text-white uppercase drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)]">
              NANYA
            </span>
          </div>

          {/* SINGH */}
          <div className="flex items-center gap-1 sm:gap-2">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-600 to-green-500 rounded-none blur-sm opacity-40 group-hover:opacity-75 transition duration-500 pointer-events-none" />
              <ElementTile
                symbol="Si"
                number={14}
                name="Silicon"
                mass="28.08"
                size="hero"
                variant="toxic"
                className="hover:scale-105 transition-transform"
              />
            </div>
            <span className="font-display text-5xl sm:text-7xl lg:text-9xl tracking-tight text-white uppercase drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)]">
              NGH
            </span>
          </div>
        </div>

        {/* Cinematic Headline - Entrance 3 */}
        <h1 className="font-heading font-black text-2xl sm:text-4xl lg:text-5xl uppercase tracking-wider text-amber-400 drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)] animate-in fade-in slide-in-from-bottom-3 duration-700 delay-300">
          “NO GREAT DISCOVERY HAPPENS BY ACCIDENT.”
        </h1>

        {/* Subtitle - Entrance 4 */}
        <p className="font-body text-base sm:text-xl text-stone-300 font-light tracking-wide max-w-2xl mx-auto mt-3 leading-relaxed animate-in fade-in slide-in-from-bottom-3 duration-700 delay-500">
          Engineering ideas. Testing possibilities. Building the future.
        </p>
      </div>

      {/* Lab Telemetry Status Pill Grid - Entrance 5 (Staggered Cards) */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl w-full mb-10 font-mono text-xs">
        <div className="p-3 bg-black/60 border border-emerald-900/60 hover:border-emerald-500 transition-colors flex flex-col items-center animate-in fade-in duration-500 delay-500">
          <span className="text-stone-500 text-[10px] uppercase">BATCH PURITY</span>
          <span className="text-emerald-400 font-bold text-sm sm:text-base">99.1% PURE</span>
        </div>
        <div className="p-3 bg-black/60 border border-emerald-900/60 hover:border-amber-500 transition-colors flex flex-col items-center animate-in fade-in duration-500 delay-600">
          <span className="text-stone-500 text-[10px] uppercase">ACADEMIC STAGE</span>
          <span className="text-amber-400 font-bold text-sm sm:text-base">1ST YEAR B.TECH</span>
        </div>
        <div className="p-3 bg-black/60 border border-emerald-900/60 hover:border-cyan-500 transition-colors flex flex-col items-center animate-in fade-in duration-500 delay-700">
          <span className="text-stone-500 text-[10px] uppercase">PRIMARY FORGE</span>
          <span className="text-cyan-400 font-bold text-sm sm:text-base">PYTHON & SYSTEMS</span>
        </div>
        <div className="p-3 bg-black/60 border border-emerald-900/60 hover:border-stone-500 transition-colors flex flex-col items-center animate-in fade-in duration-500 delay-800">
          <span className="text-stone-500 text-[10px] uppercase">HEADQUARTERS</span>
          <span className="text-white font-bold text-sm sm:text-base">NEWTON SCHOOL</span>
        </div>
      </div>

      {/* Interactive Action Hub - Entrance 6 */}
      <div className="flex flex-wrap items-center justify-center gap-4 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-900">
        <button
          onClick={() => handleScrollTo('scientist')}
          className="flex items-center gap-2 px-6 py-3.5 bg-emerald-600 hover:bg-emerald-500 text-black font-heading font-black text-base uppercase tracking-wider transition-all duration-300 shadow-[0_0_20px_rgba(16,185,129,0.5)] hover:shadow-[0_0_30px_rgba(16,185,129,0.8)] hover:scale-105 active:scale-95"
        >
          <Activity className="w-4 h-4 text-black" />
          <span>INSPECT PERSONNEL DOSSIER</span>
        </button>

        <button
          onClick={() => handleScrollTo('chemistry')}
          className="flex items-center gap-2 px-6 py-3.5 bg-stone-900 hover:bg-stone-800 border-2 border-emerald-700 hover:border-emerald-500 text-emerald-300 font-heading font-black text-base uppercase tracking-wider transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0_0_15px_rgba(0,0,0,0.6)]"
        >
          <FlaskConical className="w-4 h-4 text-emerald-400" />
          <span>ENTER CHEMISTRY BENCH</span>
        </button>

        <button
          onClick={() => {
            labAudio.playClick();
            onOpenTerminal();
          }}
          className="flex items-center gap-2 px-6 py-3.5 bg-black hover:bg-stone-900 border border-stone-700 hover:border-stone-500 text-stone-300 hover:text-white font-mono text-xs uppercase tracking-wider transition-all duration-300 hover:scale-105 active:scale-95"
        >
          <Terminal className="w-4 h-4 text-emerald-400" />
          <span>LAUNCH LAB CLI</span>
        </button>
      </div>

      {/* Down Indicator */}
      <div 
        onClick={() => handleScrollTo('scientist')}
        className="mt-14 flex flex-col items-center text-stone-500 hover:text-emerald-400 cursor-pointer transition-colors"
      >
        <span className="font-mono text-[10px] uppercase tracking-widest mb-1">PROCEED TO EXPERIMENTS</span>
        <ChevronDown className="w-4 h-4 animate-bounce" />
      </div>
    </section>
  );
}
