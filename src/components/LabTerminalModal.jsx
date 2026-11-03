import React, { useState, useEffect, useRef } from 'react';
import { labAudio } from '../utils/audio';
import { Terminal, X, Minimize2, Maximize2, Sparkles, Send } from 'lucide-react';

export default function LabTerminalModal({ isOpen, onClose, onNavigate }) {
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState([
    { text: 'ALBUQUERQUE CHEMICAL LAB OS // METH_OS v4.19.0', type: 'system' },
    { text: 'TERMINAL READY. Type "help" to view available laboratory commands.', type: 'info' },
  ]);
  const [commandHistory, setCommandHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [isChemicalReaction, setIsChemicalReaction] = useState(false);

  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        if (inputRef.current) inputRef.current.focus();
      }, 100);
    }
  }, [isOpen]);

  useEffect(() => {
    if (bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [history, isChemicalReaction]);

  if (!isOpen) return null;

  const handleCommand = (rawCmd) => {
    const cmd = rawCmd.trim().toLowerCase();
    if (!cmd) return;

    // Add to history list
    const newEntry = { text: `$ ${rawCmd}`, type: 'user' };
    const nextHistory = [...history, newEntry];

    // Track command history for Up/Down arrows
    setCommandHistory((prev) => [rawCmd, ...prev]);
    setHistoryIndex(-1);

    switch (cmd) {
      case 'help':
        nextHistory.push({
          type: 'output',
          text: `AVAILABLE COMMANDS:
  help        - List all diagnostic commands
  about       - Display subject personnel dossier (Ananya Singh)
  skills      - Inspect laboratory experiment benches & technical tools
  projects    - List classified experiment case files
  education   - View the Origin Story episodic timeline
  contact     - Display secure Albuquerque transmission channels
  status      - Report current facility telemetry (purity, temp, pressure)
  chemistry   - [CLASSIFIED] Trigger chemical synthesis catalyst
  clear       - Clear terminal console screen
  exit        - Close laboratory computer terminal`
        });
        break;

      case 'about':
        nextHistory.push({
          type: 'output',
          text: `[DOSSIER #ABQ-2024-AS]
NAME: Ananya Singh
ROLE: First-year B.Tech student at Newton School of Technology
FOCUS: Programming, computer systems, artificial intelligence, and engineering.
PHILOSOPHY: "Every experiment begins with a question. I'm learning how to turn curiosity into working solutions through hands-on practice, debugging, experimentation, and collaboration."`
        });
        break;

      case 'skills':
        nextHistory.push({
          type: 'output',
          text: `LABORATORY STATIONS & SKILLS:
  1. PYTHON SYNTHESIS       - Beginner programs: variables, conditions, loops, arithmetic, functions.
  2. GIT & GITHUB CUSTODY   - Sample tracking, version control, commits, branches, PRs.
  3. LINUX & TERMINAL       - File system navigation, POSIX permissions, shell scripting.
  4. COMPUTER SYSTEMS       - Digital logic gates, CPU architecture, binary arithmetic.
  5. ARTIFICIAL INTELLIGENCE - Neural molecular network exploration & ML foundations.`
        });
        break;

      case 'projects':
        nextHistory.push({
          type: 'output',
          text: `CLASSIFIED EXPERIMENT FILES:
  EXP-001: PYTHON ALGORITHMIC FOUNDATIONS
           Variables, conditions, loops, arithmetic problem-solving. [BATCH COMPLETED]
  EXP-002: SYSTEM OPERATIONS & TERMINAL AUTOMATION
           Linux CLI navigation, POSIX permissions, shell scripting. [ACTIVE DRILL]
  EXP-003: ENGINEERING WORKFLOWS & ROBOTICS EXPLORATION
           Project planning, hardware-software interfacing. [IN PROGRESS]`
        });
        break;

      case 'education':
        nextHistory.push({
          type: 'output',
          text: `EPISODIC TIMELINE:
  S01E01 - "PILOT: THE AWAKENING" (Foundations in Science & Logic)
  S01E02 - "THE BEGINNING" (Newton School of Technology, B.Tech First Year - CURRENT CHAPTER)
  S01E03 - "CATALYST: SYSTEM ARCHITECTURES" (Upcoming Year 2)
  S02E01 - "EMPIRE BUILDING: AI & AUTONOMOUS SYSTEMS" (Future Horizon)`
        });
        break;

      case 'contact':
        nextHistory.push({
          type: 'output',
          text: `SECURE ALBUQUERQUE TRANSMISSION CHANNELS:
  EMAIL:    ananya.singh@newtonschool.edu.in
  GITHUB:   https://github.com/ananya-singh
  LINKEDIN: https://linkedin.com/in/ananya-singh
  LOCATION: Albuquerque Lab RV // Newton School of Technology`
        });
        break;

      case 'status':
        nextHistory.push({
          type: 'output',
          text: `TELEMETRY REPORT:
  FACILITY:    Tohajiilee Desert RV Chemistry Laboratory
  COORDINATES: 35.0844° N, 106.6504° W (Albuquerque, NM)
  LAB STATUS:  ONLINE & OPERATIONAL
  BATCH PURITY: 99.1%
  REACTOR TEMP: 78.4°C
  PRESSURE:    1.18 ATM`
        });
        break;

      case 'chemistry':
        // Secret command!
        labAudio.playVaporReaction();
        setIsChemicalReaction(true);
        setTimeout(() => setIsChemicalReaction(false), 2400);

        nextHistory.push({
          type: 'special',
          text: `🧪 [CATALYST REACTION INITIALIZED]
==================================================
“Curiosity is the catalyst. Creation is the reaction.”
==================================================
99.1% Purity achieved. Reaction synthesized successfully.`
        });
        break;

      case 'clear':
        setHistory([]);
        setInputVal('');
        return;

      case 'exit':
      case 'quit':
        onClose();
        return;

      default:
        nextHistory.push({
          type: 'error',
          text: `Command not recognized: "${rawCmd}". Type "help" for a list of valid commands.`
        });
        break;
    }

    setHistory(nextHistory);
    setInputVal('');
  };

  const handleKeyDown = (e) => {
    labAudio.playKeyClick();

    if (e.key === 'Enter') {
      handleCommand(inputVal);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const nextIdx = Math.min(historyIndex + 1, commandHistory.length - 1);
        setHistoryIndex(nextIdx);
        setInputVal(commandHistory[nextIdx]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > 0) {
        const nextIdx = historyIndex - 1;
        setHistoryIndex(nextIdx);
        setInputVal(commandHistory[nextIdx]);
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setInputVal('');
      }
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md">
      <div 
        className={`relative w-full max-w-3xl bg-[#070b09] border-2 border-emerald-500 rounded-sm shadow-[0_0_50px_rgba(16,185,129,0.3)] flex flex-col h-[75vh] max-h-[650px] overflow-hidden ${
          isChemicalReaction ? 'ring-4 ring-emerald-400 shadow-[0_0_80px_#00ff66]' : ''
        }`}
      >
        {/* Chemical Vapor Explosion Animation Overlay */}
        {isChemicalReaction && (
          <div className="absolute inset-0 bg-emerald-500/20 backdrop-blur-[2px] z-30 pointer-events-none animate-pulse flex items-center justify-center">
            <div className="text-center font-heading font-black text-3xl sm:text-5xl text-emerald-300 uppercase tracking-widest drop-shadow-[0_0_20px_#00ff66]">
              REACTION CATALYSIS
            </div>
          </div>
        )}

        {/* Terminal Header */}
        <div className="bg-[#0e1612] border-b border-emerald-800 px-4 py-2.5 flex items-center justify-between text-xs font-mono text-emerald-400 select-none">
          <div className="flex items-center gap-2">
            <Terminal className="w-4 h-4 text-emerald-400" />
            <span className="font-bold tracking-wider">LAB_TERMINAL // ALBUQUERQUE_SYS</span>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-[10px] text-stone-500 hidden sm:inline">TYPE "help" OR "chemistry"</span>
            <button
              onClick={() => {
                labAudio.playClick();
                onClose();
              }}
              className="p-1 border border-stone-800 bg-stone-900 text-stone-400 hover:text-white hover:border-emerald-500 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Terminal Body */}
        <div className="flex-1 p-4 overflow-y-auto font-mono text-xs sm:text-sm space-y-2 text-stone-300">
          {history.map((entry, idx) => {
            if (entry.type === 'system') {
              return (
                <div key={idx} className="text-emerald-500 font-bold tracking-wider border-b border-emerald-950 pb-1">
                  {entry.text}
                </div>
              );
            }
            if (entry.type === 'info') {
              return (
                <div key={idx} className="text-stone-400">
                  {entry.text}
                </div>
              );
            }
            if (entry.type === 'user') {
              return (
                <div key={idx} className="text-amber-400 font-bold flex items-center gap-1">
                  <span>{entry.text}</span>
                </div>
              );
            }
            if (entry.type === 'special') {
              return (
                <pre key={idx} className="p-3 bg-emerald-950/70 border-2 border-emerald-400 text-emerald-300 font-bold whitespace-pre-wrap leading-relaxed shadow-[0_0_15px_rgba(16,185,129,0.5)]">
                  {entry.text}
                </pre>
              );
            }
            if (entry.type === 'error') {
              return (
                <div key={idx} className="text-red-400">
                  {entry.text}
                </div>
              );
            }
            return (
              <pre key={idx} className="text-emerald-400 whitespace-pre-wrap leading-relaxed">
                {entry.text}
              </pre>
            );
          })}
          <div ref={bottomRef} />
        </div>

        {/* Command Line Input Row */}
        <div className="bg-black border-t border-emerald-950 px-4 py-3 flex items-center gap-2 font-mono text-xs sm:text-sm">
          <span className="text-emerald-500 font-bold">&gt;</span>
          <input
            ref={inputRef}
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="enter command (e.g. help, chemistry, about)..."
            className="flex-1 bg-transparent text-emerald-300 focus:outline-none placeholder-stone-700 font-mono"
            autoFocus
          />
          <button
            onClick={() => handleCommand(inputVal)}
            className="px-2.5 py-1 bg-emerald-950 hover:bg-emerald-900 border border-emerald-800 text-emerald-400 text-xs font-mono uppercase"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

