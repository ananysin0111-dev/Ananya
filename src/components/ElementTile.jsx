import React from 'react';
import { labAudio } from '../utils/audio';

export default function ElementTile({
  symbol = 'As',
  number = 33,
  name = 'Arsenic',
  mass = '74.92',
  size = 'md',
  variant = 'green',
  className = '',
  onClick,
  showDetails = true,
  interactive = true,
}) {
  const sizeClasses = {
    sm: 'w-12 h-12 p-1 text-xs',
    md: 'w-16 h-16 p-1.5 text-sm',
    lg: 'w-24 h-24 p-2 text-base',
    xl: 'w-32 h-32 p-3 text-lg',
    hero: 'w-28 h-28 sm:w-36 sm:h-36 p-2 sm:p-3 text-xl'
  };

  const symbolSizes = {
    sm: 'text-xl',
    md: 'text-2xl',
    lg: 'text-4xl',
    xl: 'text-5xl',
    hero: 'text-4xl sm:text-6xl'
  };

  const variantStyles = {
    green: 'bg-emerald-950/80 border-2 border-emerald-500 text-white shadow-[0_0_15px_rgba(16,185,129,0.35)]',
    toxic: 'bg-green-950/90 border-2 border-[#00ff66] text-white shadow-[0_0_20px_rgba(0,255,102,0.4)]',
    amber: 'bg-amber-950/80 border-2 border-amber-500 text-white shadow-[0_0_15px_rgba(245,158,11,0.35)]',
    dark: 'bg-stone-900/90 border-2 border-stone-600 text-stone-200',
  };

  const handleMouseEnter = () => {
    if (interactive) {
      labAudio.playGeiger();
    }
  };

  return (
    <div
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      className={`relative inline-flex flex-col justify-between font-mono select-none rounded-none transition-all duration-300 ${sizeClasses[size] || sizeClasses.md} ${variantStyles[variant] || variantStyles.green} ${interactive ? 'hover:scale-105 hover:border-white hover:shadow-[0_0_25px_rgba(16,185,129,0.7)] cursor-pointer' : ''} ${className}`}
      title={`${name} (${number})`}
    >
      {/* Top Row: Atomic Number */}
      <div className="flex justify-between items-start leading-none opacity-90 font-bold">
        <span className="text-[10px] sm:text-xs tracking-tighter text-emerald-300 font-mono">
          {number}
        </span>
        {showDetails && (
          <span className="text-[9px] sm:text-[10px] tracking-tight opacity-75 hidden sm:inline">
            {mass}
          </span>
        )}
      </div>

      {/* Center: Element Symbol */}
      <div className={`font-black font-sans tracking-tight text-center leading-none text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] ${symbolSizes[size] || symbolSizes.md}`}>
        {symbol}
      </div>

      {/* Bottom: Element Name */}
      {showDetails && (
        <div className="text-[8px] sm:text-[10px] text-center uppercase tracking-wider text-emerald-200/90 truncate font-mono font-semibold">
          {name}
        </div>
      )}

      {/* Inner vintage border detail */}
      <div className="absolute inset-0.5 border border-emerald-400/20 pointer-events-none" />
    </div>
  );
}

