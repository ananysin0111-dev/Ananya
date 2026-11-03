import React, { useState } from 'react';
import ElementTile from './ElementTile';
import { labAudio } from '../utils/audio';
import { 
  Volume2, 
  VolumeX, 
  Tv, 
  Terminal as TerminalIcon, 
  Menu, 
  X, 
  Radio, 
  Activity,
  Layers,
  FlaskConical,
  FolderArchive,
  BookOpen,
  Send
} from 'lucide-react';

export default function LabNavbar({
  activeSection,
  onNavigate,
  isAudioOn,
  onToggleAudio,
  isScanlineOn,
  onToggleScanlines,
  onOpenTerminal
}) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'lab', label: 'THE LAB', icon: FlaskConical },
    { id: 'scientist', label: 'THE SCIENTIST', icon: Activity },
    { id: 'chemistry', label: 'CHEMISTRY', icon: Layers },
    { id: 'casefiles', label: 'CASE FILES', icon: FolderArchive },
    { id: 'originstory', label: 'ORIGIN STORY', icon: BookOpen },
    { id: 'transmission', label: 'TRANSMISSION', icon: Send },
  ];

  const handleNavClick = (id) => {
    labAudio.playClick();
    onNavigate(id);
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-30 w-full bg-lab-darker/90 backdrop-blur-md border-b border-lab-cardBorder select-none">
      {/* Top Equipment Status Bar */}
      <div className="hidden lg:flex items-center justify-between px-6 py-1 bg-black/60 border-b border-stone-900 text-[11px] font-mono text-stone-400">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1.5 text-emerald-400">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="font-bold">LAB STATUS: OPERATIONAL</span>
          </div>
          <span className="text-stone-700">|</span>
          <span className="text-amber-400 font-semibold">PURITY INDEX: 99.1%</span>
          <span className="text-stone-700">|</span>
          <span>REACTOR TEMP: 78.4°C</span>
          <span className="text-stone-700">|</span>
          <span>PRESSURE: 1.18 ATM</span>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-stone-500">NST FIRST-YEAR B.TECH DIVISION</span>
          <span className="text-emerald-500/80 animate-pulse font-bold tracking-widest">[TERMINAL READY]</span>
        </div>
      </div>

      {/* Main Navigation Panel */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16 sm:h-20">
        {/* Brand / Element Logo */}
        <div 
          onClick={() => handleNavClick('lab')}
          className="flex items-center gap-3 cursor-pointer group"
        >
          <ElementTile 
            symbol="As"
            number={33}
            name="Arsenic"
            mass="74.92"
            size="sm"
            variant="toxic"
            className="group-hover:scale-105 transition-transform"
          />
          <div className="flex flex-col">
            <div className="flex items-center gap-1">
              <span className="font-display text-2xl sm:text-3xl tracking-wide text-white group-hover:text-emerald-400 transition-colors">
                ANANYA SINGH
              </span>
            </div>
            <span className="font-mono text-[10px] tracking-widest text-emerald-500/80 uppercase">
              Albuquerque Lab // Developer
            </span>
          </div>
        </div>

        {/* Desktop Nav Items */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`flex items-center gap-1.5 px-3 py-2 text-xs lg:text-sm font-heading font-bold uppercase tracking-wider transition-all duration-200 border ${
                  isActive
                    ? 'bg-emerald-950/70 border-emerald-500 text-emerald-300 shadow-[0_0_12px_rgba(16,185,129,0.3)]'
                    : 'bg-transparent border-transparent text-stone-400 hover:text-stone-200 hover:border-stone-800 hover:bg-stone-900/50'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-emerald-400' : 'text-stone-500'}`} />
                <span>{item.label}</span>
                {isActive && (
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 ml-0.5 animate-pulse" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Lab Hardware Control Toggles */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Quick Terminal Button */}
          <button
            onClick={() => {
              labAudio.playClick();
              onOpenTerminal();
            }}
            title="Open Hidden Lab Computer (CLI)"
            className="flex items-center gap-1.5 px-2.5 py-1.5 bg-stone-900 border border-emerald-900/80 hover:border-emerald-500 text-emerald-400 hover:text-emerald-300 text-xs font-mono transition-colors"
          >
            <TerminalIcon className="w-4 h-4 text-emerald-400" />
            <span className="hidden xl:inline text-[11px] font-bold">TERMINAL</span>
          </button>

          {/* CRT Scanline Toggle */}
          <button
            onClick={() => {
              labAudio.playClick();
              onToggleScanlines();
            }}
            title={isScanlineOn ? 'Disable CRT Scanlines' : 'Enable CRT Scanlines'}
            className={`p-2 border transition-colors ${
              isScanlineOn
                ? 'bg-emerald-950/60 border-emerald-500 text-emerald-400'
                : 'bg-stone-900/70 border-stone-800 text-stone-500 hover:text-stone-300'
            }`}
          >
            <Tv className="w-4 h-4" />
          </button>

          {/* Master Sound Toggle */}
          <button
            onClick={() => {
              onToggleAudio();
            }}
            title={isAudioOn ? 'Mute Lab Audio' : 'Unmute Lab Audio (Synthesizer)'}
            className={`flex items-center gap-1.5 px-2.5 py-1.5 border transition-all ${
              isAudioOn
                ? 'bg-emerald-950/70 border-emerald-500 text-emerald-400 shadow-[0_0_10px_rgba(16,185,129,0.3)]'
                : 'bg-stone-900/70 border-stone-800 text-stone-500 hover:text-stone-300'
            }`}
          >
            {isAudioOn ? (
              <>
                <Volume2 className="w-4 h-4 text-emerald-400" />
                <span className="hidden sm:inline text-[11px] font-mono font-bold text-emerald-400">AUDIO ON</span>
              </>
            ) : (
              <>
                <VolumeX className="w-4 h-4 text-stone-500" />
                <span className="hidden sm:inline text-[11px] font-mono text-stone-500">MUTE</span>
              </>
            )}
          </button>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 border border-stone-800 bg-stone-900 text-stone-300 hover:text-emerald-400"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-stone-950 border-b border-emerald-900/80 p-4 space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full flex items-center justify-between p-3 font-heading text-base font-bold tracking-wider uppercase border ${
                  isActive
                    ? 'bg-emerald-950/80 border-emerald-500 text-emerald-300'
                    : 'bg-stone-900/40 border-stone-800 text-stone-400 hover:bg-stone-900 hover:text-white'
                }`}
              >
                <div className="flex items-center gap-3">
                  <Icon className={`w-4 h-4 ${isActive ? 'text-emerald-400' : 'text-stone-500'}`} />
                  <span>{item.label}</span>
                </div>
                {isActive && <span className="text-emerald-400 font-mono text-xs">[ACTIVE]</span>}
              </button>
            );
          })}

          <div className="pt-2 border-t border-stone-900 flex justify-between text-xs font-mono text-stone-500">
            <span>ALBUQUERQUE SECTOR 7</span>
            <span className="text-emerald-500">PURITY: 99.1%</span>
          </div>
        </div>
      )}
    </header>
  );
}

