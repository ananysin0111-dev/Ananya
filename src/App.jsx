import React, { useState, useEffect } from 'react';
import LabNavbar from './components/LabNavbar';
import OpeningSequence from './components/OpeningSequence';
import TheLabHero from './components/TheLabHero';
import TheScientist from './components/TheScientist';
import LabBenchSkills from './components/LabBenchSkills';
import ClassifiedProjects from './components/ClassifiedProjects';
import OriginStoryEducation from './components/OriginStoryEducation';
import TransmissionContact from './components/TransmissionContact';
import LabTerminalModal from './components/LabTerminalModal';
import VaporCanvas from './components/VaporCanvas';
import ScanlineOverlay from './components/ScanlineOverlay';
import { labAudio } from './utils/audio';
import { ChevronUp } from 'lucide-react';

export default function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [activeSection, setActiveSection] = useState('lab');
  const [isAudioOn, setIsAudioOn] = useState(false);
  const [isScanlineOn, setIsScanlineOn] = useState(true);
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Check if visitor previously completed intro in this session
  useEffect(() => {
    try {
      const hasSeenIntro = sessionStorage.getItem('abq_lab_intro_seen');
      if (hasSeenIntro === 'true') {
        setShowIntro(false);
      }
    } catch {}
  }, []);

  const handleEnterLab = () => {
    setShowIntro(false);
    try {
      sessionStorage.setItem('abq_lab_intro_seen', 'true');
    } catch {}
  };

  const handleToggleAudio = () => {
    const nextState = !isAudioOn;
    setIsAudioOn(nextState);
    labAudio.setMuted(!nextState);
    if (nextState) {
      labAudio.playClick();
    }
  };

  const handleToggleScanlines = () => {
    setIsScanlineOn((prev) => !prev);
  };

  const handleNavigate = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Observe scroll position to highlight active section in navbar
  useEffect(() => {
    if (showIntro) return;

    const sections = ['lab', 'scientist', 'chemistry', 'casefiles', 'originstory', 'transmission'];
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setShowBackToTop(scrollY > 400);
      const offset = 240;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop - offset <= scrollY) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [showIntro]);

  return (
    <div className="min-h-screen bg-lab-black text-desert-100 font-body relative overflow-x-hidden selection:bg-emerald-500 selection:text-black">
      {/* CRT Scanline Screen Overlay */}
      <ScanlineOverlay active={isScanlineOn} />

      {/* Atmospheric Chemical Vapor & Desert Dust Canvas */}
      <VaporCanvas />

      {/* Cinematic Opening Sequence */}
      {showIntro ? (
        <OpeningSequence onEnterLab={handleEnterLab} />
      ) : (
        <>
          {/* Laboratory Control Panel HUD Navigation */}
          <LabNavbar
            activeSection={activeSection}
            onNavigate={handleNavigate}
            isAudioOn={isAudioOn}
            onToggleAudio={handleToggleAudio}
            isScanlineOn={isScanlineOn}
            onToggleScanlines={handleToggleScanlines}
            onOpenTerminal={() => setIsTerminalOpen(true)}
          />

          {/* Sound Experience Notification Pill (if audio is currently muted) */}
          {!isAudioOn && (
            <div className="bg-amber-950/80 border-b border-amber-800 text-amber-300 text-xs font-mono py-1.5 px-4 text-center flex items-center justify-center gap-2 select-none">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
              <span>LAB AUDIO SYSTEM MUTED. Click "AUDIO ON" in the top bar to enable synthesized lab sounds & Geiger counter.</span>
              <button
                onClick={handleToggleAudio}
                className="underline font-bold text-amber-200 hover:text-white ml-2"
              >
                [ENABLE AUDIO]
              </button>
            </div>
          )}

          {/* Main Portfolio Sections */}
          <main className="relative z-10">
            {/* 1. THE LAB — Hero */}
            <TheLabHero
              onNavigate={handleNavigate}
              onOpenTerminal={() => setIsTerminalOpen(true)}
            />

            {/* 2. THE SCIENTIST — About Me / Personnel Dossier */}
            <TheScientist />

            {/* 3. CHEMISTRY — Skills Bench */}
            <LabBenchSkills />

            {/* 4. CASE FILES — Projects */}
            <ClassifiedProjects />

            {/* 5. ORIGIN STORY — Education Episode Arc */}
            <OriginStoryEducation />

            {/* 6. TRANSMISSION — Contact & Final Sunset */}
            <TransmissionContact />
          </main>

          {/* Interactive Lab Computer Terminal (CLI Modal) */}
          <LabTerminalModal
            isOpen={isTerminalOpen}
            onClose={() => setIsTerminalOpen(false)}
            onNavigate={handleNavigate}
          />

          {/* Working Back-To-Top Control */}
          {showBackToTop && (
            <button
              onClick={() => {
                labAudio.playClick();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              title="Return to RV Lab Top"
              className="fixed bottom-6 right-6 z-40 p-3 bg-stone-950/90 border-2 border-emerald-600 hover:border-emerald-400 text-emerald-400 hover:text-white shadow-[0_0_20px_rgba(16,185,129,0.5)] transition-all duration-300 hover:scale-110 active:scale-95 group font-mono text-xs flex items-center gap-1.5 backdrop-blur-md animate-in fade-in slide-in-from-bottom-2 duration-300"
            >
              <ChevronUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
              <span className="hidden sm:inline font-bold">TOP</span>
            </button>
          )}
        </>
      )}
    </div>
  );
}

