import React, { useState, useEffect } from 'react';
import ElementTile from './ElementTile';
import { labAudio } from '../utils/audio';
import { Play, SkipForward, Terminal, FlaskConical, ShieldAlert, Sparkles } from 'lucide-react';

export default function OpeningSequence({ onEnterLab }) {
  const [bootStep, setBootStep] = useState(0);
  const [isReady, setIsReady] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // Progressive timed boot sequence with authentic chemical lab pacing
    const timers = [
      setTimeout(() => {
        setBootStep(1);
        labAudio.playKeyClick();
      }, 500),
      setTimeout(() => {
        setBootStep(2);
        labAudio.playKeyClick();
      }, 1400),
      setTimeout(() => {
        setBootStep(3);
        labAudio.playBootChime();
      }, 2300),
      setTimeout(() => {
        setIsReady(true);
      }, 3100),
    ];

    return () => timers.forEach(clearTimeout);
  }, []);

  const handleEnter = () => {
    labAudio.playClick();
    setIsExiting(true);
    setTimeout(() => {
      onEnterLab();
    }, 450);
  };

  const handleSkip = () => {
    labAudio.playClick();
    setIsExiting(true);
    setTimeout(() => {
      onEnterLab();
    }, 200);
  };

  return (
    <div 
      className={`fixed inset-0 z-50 bg-desert-950 flex flex-col justify-between overflow-hidden select-none transition-opacity duration-500 ${
        isExiting ? 'opacity-0 pointer-events-none' : 'opacity-100 animate-in fade-in duration-700'
      }`}
    >
      {/* Film Grain & Desert Vignette */}
      <div className="absolute inset-0 film-grain pointer-events-none z-10" />

      {/* Cinematic Desert Sunset & RV Laboratory Silhouette Backdrop */}
      <div className="absolute inset-0 z-0">
        <svg
          viewBox="0 0 1440 900"
          preserveAspectRatio="xMidYMid slice"
          className="w-full h-full object-cover"
        >
          <defs>
            {/* Desert Sunset Sky Gradient */}
            <linearGradient id="skyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#0a0a0c" />
              <stop offset="35%" stopColor="#1e130c" />
              <stop offset="65%" stopColor="#451e0d" />
              <stop offset="85%" stopColor="#7c2d12" />
              <stop offset="100%" stopColor="#b45309" />
            </linearGradient>

            {/* Albuquerque Sandia Mountains Silhouette */}
            <linearGradient id="mountainGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#1f110a" />
              <stop offset="100%" stopColor="#0c0705" />
            </linearGradient>

            {/* Chemical Lab Green Glow */}
            <radialGradient id="labGreenGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#10b981" stopOpacity="0.45" />
              <stop offset="100%" stopColor="#052e16" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Sky */}
          <rect width="1440" height="900" fill="url(#skyGrad)" />

          {/* Distant Sandia Mountains silhouette */}
          <path
            d="M0,580 L90,540 L210,570 L340,490 L480,550 L620,470 L790,530 L940,460 L1080,510 L1220,450 L1360,520 L1440,480 L1440,900 L0,900 Z"
            fill="url(#mountainGrad)"
            opacity="0.85"
          />

          {/* Midground Desert Ridge */}
          <path
            d="M0,640 L160,620 L380,660 L620,630 L880,670 L1140,640 L1320,675 L1440,650 L1440,900 L0,900 Z"
            fill="#090706"
          />

          {/* Distant RV Silhouette (1986 Fleetwood Bounder) */}
          <g transform="translate(860, 560) scale(0.9)" opacity="0.95">
            {/* RV Body */}
            <rect x="0" y="25" width="220" height="75" rx="4" fill="#080706" />
            <rect x="180" y="38" width="55" height="62" rx="6" fill="#080706" />
            {/* Rooftop AC unit & vents */}
            <rect x="50" y="16" width="35" height="10" rx="2" fill="#080706" />
            <rect x="130" y="18" width="25" height="8" rx="2" fill="#080706" />
            <line x1="210" y1="25" x2="215" y2="2" stroke="#080706" strokeWidth="2" />
            {/* Glowing laboratory windows (chemical green illumination) */}
            <rect x="35" y="42" width="40" height="25" fill="#10b981" opacity="0.8" rx="2" className="animate-pulse" />
            <rect x="95" y="42" width="50" height="25" fill="#10b981" opacity="0.65" rx="2" />
            <polygon points="190,45 225,48 220,70 190,70" fill="#34d399" opacity="0.5" />
            {/* Hazmat suit silhouette in RV window */}
            <circle cx="55" cy="50" r="4" fill="#fbbf24" opacity="0.9" />
            <path d="M49,54 C49,54 55,54 61,54 L62,64 L48,64 Z" fill="#fbbf24" opacity="0.9" />
            {/* Wheels */}
            <circle cx="50" cy="100" r="14" fill="#040302" stroke="#1c1917" strokeWidth="4" />
            <circle cx="170" cy="100" r="14" fill="#040302" stroke="#1c1917" strokeWidth="4" />
            <circle cx="195" cy="100" r="14" fill="#040302" stroke="#1c1917" strokeWidth="4" />
            {/* Chemical Vapor puff from RV stove vent */}
            <ellipse cx="65" cy="8" rx="20" ry="10" fill="#34d399" opacity="0.25" className="animate-pulse" />
            <ellipse cx="75" cy="-8" rx="30" ry="14" fill="#10b981" opacity="0.18" />
          </g>

          {/* Hanging Hazmat Suits inside Foreground Lab Bay */}
          <g transform="translate(110, 480) scale(1.1)" opacity="0.85">
            {/* Ceiling hanger rack */}
            <line x1="0" y1="20" x2="220" y2="20" stroke="#292524" strokeWidth="4" />
            {/* Hazmat Suit 1 (Yellow) */}
            <g transform="translate(40, 20)">
              <line x1="0" y1="0" x2="0" y2="15" stroke="#78716c" strokeWidth="2" />
              {/* Hood */}
              <circle cx="0" cy="22" r="12" fill="#fbbf24" stroke="#d97706" strokeWidth="1" />
              <rect x="-8" y="16" width="16" height="8" rx="2" fill="#1e293b" opacity="0.9" />
              {/* Body */}
              <path d="M-18,34 Q0,32 18,34 L22,110 L-22,110 Z" fill="#f59e0b" stroke="#b45309" strokeWidth="1" />
              {/* Sleeves */}
              <line x1="-18" y1="36" x2="-28" y2="85" stroke="#f59e0b" strokeWidth="7" strokeLinecap="round" />
              <line x1="18" y1="36" x2="28" y2="85" stroke="#f59e0b" strokeWidth="7" strokeLinecap="round" />
              {/* Blue Nitrile Gloves */}
              <circle cx="-28" cy="88" r="4" fill="#0284c7" />
              <circle cx="28" cy="88" r="4" fill="#0284c7" />
              {/* Lab Respirator */}
              <circle cx="0" cy="26" r="4" fill="#e2e8f0" />
            </g>

            {/* Hazmat Suit 2 (Yellow) */}
            <g transform="translate(130, 20)">
              <line x1="0" y1="0" x2="0" y2="15" stroke="#78716c" strokeWidth="2" />
              <circle cx="0" cy="22" r="12" fill="#eab308" stroke="#ca8a04" strokeWidth="1" />
              <rect x="-8" y="16" width="16" height="8" rx="2" fill="#1e293b" opacity="0.9" />
              <path d="M-18,34 Q0,32 18,34 L22,110 L-22,110 Z" fill="#d97706" stroke="#92400e" strokeWidth="1" />
              <line x1="-18" y1="36" x2="-28" y2="85" stroke="#d97706" strokeWidth="7" strokeLinecap="round" />
              <line x1="18" y1="36" x2="28" y2="85" stroke="#d97706" strokeWidth="7" strokeLinecap="round" />
              <circle cx="-28" cy="88" r="4" fill="#0284c7" />
              <circle cx="28" cy="88" r="4" fill="#0284c7" />
            </g>
          </g>

          {/* Foreground Laboratory Bench with Flasks & Vapor */}
          <g transform="translate(0, 720)">
            <rect x="0" y="50" width="1440" height="150" fill="#060505" />
            <line x1="0" y1="50" x2="1440" y2="50" stroke="#1c2e24" strokeWidth="3" />
            {/* Erlenmeyer Flask 1 */}
            <polygon points="1220,50 1200,10 1210,10 1210,-20 1220,-20 1220,10 1230,10 1250,50" fill="#042f2e" stroke="#10b981" strokeWidth="2" opacity="0.8" />
            <polygon points="1218,50 1208,25 1242,25 1248,50" fill="#10b981" opacity="0.6" />
            {/* Flask bubbles */}
            <circle cx="1222" cy="35" r="2" fill="#34d399" className="animate-ping" />
            <circle cx="1228" cy="42" r="3" fill="#6ee7b7" />
            <circle cx="1235" cy="30" r="1.5" fill="#a7f3d0" />
            {/* Condenser Tube */}
            <path d="M1215,-10 L1150,-30 L1150,50" fill="none" stroke="#34d399" strokeWidth="2" opacity="0.5" />
          </g>
        </svg>

        {/* Ambient atmospheric green lighting & flickering fluorescents */}
        <div className="absolute inset-0 bg-radial from-emerald-950/20 via-transparent to-black/80 pointer-events-none" />
        <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-emerald-500/40 to-transparent animate-flicker pointer-events-none" />
      </div>

      {/* Top Bar with Albuquerque Coordinates & Skip Button */}
      <div className="relative z-20 flex justify-between items-center p-4 sm:p-6 text-xs font-mono text-emerald-400/80">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
          <span className="tracking-widest uppercase">ALBUQUERQUE, NM // 35.0844° N, 106.6504° W</span>
        </div>

        <button
          onClick={handleSkip}
          className="flex items-center gap-2 px-3 py-1.5 border border-stone-700 bg-stone-900/80 hover:bg-emerald-950/60 hover:border-emerald-500 text-stone-400 hover:text-emerald-300 transition-colors uppercase tracking-wider text-[11px]"
        >
          <span>Skip Intro</span>
          <SkipForward className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Main Terminal Centerpiece */}
      <div className="relative z-20 max-w-4xl mx-auto px-4 w-full my-auto flex flex-col items-center text-center">
        {/* Terminal Boot Sequence Box */}
        <div className="w-full max-w-xl bg-black/85 border border-emerald-900/80 rounded-sm p-4 sm:p-5 shadow-[0_0_35px_rgba(0,0,0,0.9)] backdrop-blur-md mb-6 font-mono text-left transition-all duration-300">
          <div className="flex items-center justify-between border-b border-emerald-950 pb-2 mb-3 text-[11px] text-emerald-600">
            <span className="flex items-center gap-2">
              <Terminal className="w-3.5 h-3.5 text-emerald-400" />
              OS_BOOT // METH_OS_v4.19.0
            </span>
            <span className="animate-pulse text-emerald-500 font-bold">SECURE LAB CONSOLE</span>
          </div>

          <div className="space-y-1.5 text-xs sm:text-sm">
            {bootStep >= 1 && (
              <div className="text-emerald-400 flex items-center gap-2 animate-in fade-in duration-300">
                <span className="text-emerald-600 font-bold">&gt;</span>
                <span className="tracking-wider">SYSTEM INITIALIZING...</span>
                <span className="text-[10px] text-emerald-600 font-mono">[OK]</span>
              </div>
            )}
            {bootStep >= 2 && (
              <div className="text-emerald-400 flex items-center gap-2 animate-in fade-in duration-300">
                <span className="text-emerald-600 font-bold">&gt;</span>
                <span className="tracking-wider">LABORATORY ONLINE...</span>
                <span className="text-[10px] text-emerald-500 font-mono font-bold">[99.1% PURITY DETECTED]</span>
              </div>
            )}
            {bootStep >= 3 && (
              <div className="text-emerald-300 font-bold flex items-center gap-2 animate-in fade-in duration-300">
                <span className="text-emerald-500">&gt;</span>
                <span className="tracking-wider text-emerald-300 drop-shadow-[0_0_8px_#10b981]">
                  SUBJECT IDENTIFIED: ANANYA SINGH
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Breaking Bad Element Logo Reveal: [As] 33 Arsenic + [Si] 14 Silicon */}
        <div className={`transition-all duration-1000 transform ${bootStep >= 3 ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-4 pointer-events-none'}`}>
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 mb-4">
            {/* ANANYA */}
            <div className="flex items-center gap-1 sm:gap-2">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-emerald-600 to-green-500 rounded-none blur-sm opacity-50 group-hover:opacity-80 transition duration-500 pointer-events-none animate-pulse" />
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
              <span className="font-display text-5xl sm:text-7xl lg:text-8xl tracking-tight text-white uppercase drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)]">
                NANYA
              </span>
            </div>

            {/* SINGH */}
            <div className="flex items-center gap-1 sm:gap-2">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-emerald-600 to-green-500 rounded-none blur-sm opacity-50 group-hover:opacity-80 transition duration-500 pointer-events-none animate-pulse" />
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
              <span className="font-display text-5xl sm:text-7xl lg:text-8xl tracking-tight text-white uppercase drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)]">
                NGH
              </span>
            </div>
          </div>

          {/* Headline & Subtitle */}
          <div className="space-y-3 max-w-2xl mx-auto px-4">
            <h2 className="font-heading font-black text-2xl sm:text-3xl lg:text-4xl uppercase tracking-wider text-amber-400 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
              “NO GREAT DISCOVERY HAPPENS BY ACCIDENT.”
            </h2>
            <p className="font-body text-sm sm:text-base text-stone-300 font-light tracking-wide max-w-xl mx-auto leading-relaxed">
              Engineering ideas. Testing possibilities. Building the future.
            </p>
          </div>

          {/* Action Buttons with green radioactive pulse */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={handleEnter}
              className="group relative inline-flex items-center gap-3 px-9 py-4 bg-emerald-500 hover:bg-emerald-400 text-black font-heading font-black uppercase text-lg sm:text-xl tracking-wider transition-all duration-300 shadow-[0_0_30px_rgba(16,185,129,0.7)] hover:shadow-[0_0_45px_rgba(0,255,102,1)] hover:scale-105 active:scale-95"
            >
              <FlaskConical className="w-5 h-5 text-black group-hover:rotate-12 transition-transform duration-300" />
              <span>ENTER THE LAB</span>
              <div className="absolute inset-0 border-2 border-white/40 pointer-events-none" />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Disclaimer & Environment Stats */}
      <div className="relative z-20 flex flex-col sm:flex-row justify-between items-center p-4 sm:p-6 text-[11px] font-mono text-stone-500 gap-2 border-t border-stone-900 bg-black/60 backdrop-blur-sm">
        <div className="flex items-center gap-3">
          <span className="inline-block w-2 h-2 rounded-full bg-amber-500" />
          <span>FACILITY: TOHAJIILEE DESERT RV FACILITY</span>
          <span className="hidden md:inline">|</span>
          <span className="hidden md:inline text-emerald-400 font-semibold">PRESSURE: 1.18 ATM</span>
        </div>
        <div className="text-emerald-400/80 font-bold">
          BREAKING BAD CINEMATIC PORTFOLIO PROTOCOL // NST B.TECH
        </div>
      </div>
    </div>
  );
}
