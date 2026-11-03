import React, { useState } from 'react';
import ElementTile from './ElementTile';
import { labAudio } from '../utils/audio';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { 
  Terminal, 
  GitBranch, 
  Cpu, 
  Network, 
  Code2, 
  FlaskConical, 
  Sparkles, 
  Play, 
  CheckCircle2, 
  X, 
  Layers, 
  AlertCircle,
  Binary
} from 'lucide-react';

export default function LabBenchSkills() {
  const [activeStationModal, setActiveStationModal] = useState(null);
  const revealRef = useScrollReveal();

  // Python demo state
  const [pythonSnippet, setPythonSnippet] = useState('variables');
  const [pythonOutput, setPythonOutput] = useState('Run code to observe output');

  // Logic gate demo state
  const [logicA, setLogicA] = useState(1);
  const [logicB, setLogicB] = useState(0);

  // Neural network demo state
  const [neuralPulse, setNeuralPulse] = useState(false);

  // Python snippets data
  const pythonSnippets = {
    variables: {
      code: `# Experiment 01: Chemical Purity Calculation\nsubstance = "Methylamine Solution"\nvolume_ml = 250.0\npurity_percent = 99.1\n\nyield_val = volume_ml * (purity_percent / 100)\nprint(f"Substance: {substance}")\nprint(f"Calculated pure yield: {yield_val} mL")`,
      output: `Substance: Methylamine Solution\nCalculated pure yield: 247.75 mL\n>>> Execution finished with code 0.`
    },
    loops: {
      code: `# Experiment 02: Thermal Stability Loop\ntemperatures = [68, 72, 75, 78, 80]\nfor i, temp in enumerate(temperatures):\n    if temp > 76:\n        print(f"Warning: Step {i} temp {temp}°C exceeds normal!")\n    else:\n        print(f"Step {i}: Reactor stable at {temp}°C")`,
      output: `Step 0: Reactor stable at 68°C\nStep 1: Reactor stable at 72°C\nStep 2: Reactor stable at 75°C\nWarning: Step 3 temp 78°C exceeds normal!\nWarning: Step 4 temp 80°C exceeds normal!\n>>> Loop cycle complete.`
    },
    conditions: {
      code: `# Experiment 03: Catalyst Decision Logic\ndef check_reaction(catalyst, temp_c):\n    if catalyst == "Aluminum" and temp_c >= 70:\n        return "OPTIMAL REACTION ACHIEVED"\n    elif temp_c < 70:\n        return "INSUFFICIENT THERMAL ENERGY"\n    return "INCORRECT CATALYST"\n\nprint(check_reaction("Aluminum", 78))`,
      output: `OPTIMAL REACTION ACHIEVED\n>>> Reaction synthesis confirmed.`
    }
  };

  const runPythonCode = () => {
    labAudio.playKeyClick();
    setPythonOutput('Synthesizing execution...');
    setTimeout(() => {
      setPythonOutput(pythonSnippets[pythonSnippet].output);
    }, 250);
  };

  const triggerNeuralPulse = () => {
    labAudio.playClick();
    setNeuralPulse(true);
    setTimeout(() => setNeuralPulse(false), 900);
  };

  const openStation = (station) => {
    labAudio.playClick();
    setActiveStationModal(station);
  };

  const closeStation = () => {
    labAudio.playClick();
    setActiveStationModal(null);
  };

  const stations = [
    {
      id: 'python',
      title: 'PYTHON SYNTHESIS',
      element: { symbol: 'Py', number: 3, name: 'Python', mass: '3.12' },
      subtitle: 'The Reaction Flask & Script Engine',
      summary: 'Writing beginner programs covering core programming constructs, control flow, functions, and structured problem-solving.',
      status: 'PHASE: FOUNDATION SYNTHESIS',
      statusColor: 'emerald',
      concepts: ['Variables & Data Types', 'Conditional Logic (if/else)', 'Iteration (for/while loops)', 'Functions & Modular Design', 'Basic Problem Solving'],
      equipment: 'Erlenmeyer Reaction Flask & Python REPL'
    },
    {
      id: 'git',
      title: 'GIT & GITHUB CUSTODY',
      element: { symbol: 'Gt', number: 8, name: 'Git Repo', mass: '2.44' },
      subtitle: 'Sample Tracking & Version History',
      summary: 'Tracking experimental revisions, maintaining chain of custody for codebases, and collaborating through commits and branches.',
      status: 'PHASE: WORKFLOW DRILLS',
      statusColor: 'amber',
      concepts: ['Repository Initialization', 'Staging & Atomic Commits', 'Branching & Merging', 'Remote Synchronization (Push/Pull)', 'Pull Requests & Code Review'],
      equipment: 'Specimen Chain-of-Custody Log'
    },
    {
      id: 'linux',
      title: 'LINUX & TERMINAL',
      element: { symbol: 'Lx', number: 12, name: 'Linux OS', mass: '6.8' },
      subtitle: 'Laboratory Central Computer & Shell',
      summary: 'Navigating Unix environments, file permissions, streams, and writing basic shell scripts to automate lab workflows.',
      status: 'PHASE: CLI FLUENCY',
      statusColor: 'emerald',
      concepts: ['File System Navigation (cd, ls, mkdir)', 'Permissions & Ownership (chmod, chown)', 'I/O Redirection & Pipes (|)', 'Process Inspection (ps, top)', 'Shell Scripting Basics (bash)'],
      equipment: 'Cathode Ray Tube (CRT) Terminal Console'
    },
    {
      id: 'systems',
      title: 'COMPUTER SYSTEMS',
      element: { symbol: 'Cs', number: 16, name: 'Systems', mass: '64.0' },
      subtitle: 'Digital Circuit Board & Hardware Bus',
      summary: 'Exploring how binary logic, transistors, CPU arithmetic, and memory hierarchies enable physical machines to execute code.',
      status: 'PHASE: ARCHITECTURAL STUDY',
      statusColor: 'cyan',
      concepts: ['Binary & Hexadecimal Numbers', 'Boolean Logic & Gates (AND, OR, NOT)', 'Von Neumann Architecture', 'Registers, Cache & RAM', 'Assembly & Machine Instructions'],
      equipment: 'Digital Logic Breadboard & Oscilloscope'
    },
    {
      id: 'ai',
      title: 'ARTIFICIAL INTELLIGENCE',
      element: { symbol: 'Ai', number: 21, name: 'Intelligence', mass: '99.1' },
      subtitle: 'Molecular Neural Network Bench',
      summary: 'Beginning exploration into machine learning models, perceptrons, data analysis, and the mathematical intuitions behind AI.',
      status: 'PHASE: EXPLORATORY RESEARCH',
      statusColor: 'amber',
      concepts: ['Introductory ML Concepts', 'Perceptrons & Neural Nodes', 'Supervised vs Unsupervised Learning', 'Data Preprocessing Intuition', 'Algorithmic Experimentation'],
      equipment: 'Synaptic Activation Array'
    }
  ];

  return (
    <section id="chemistry" ref={revealRef} className="reveal-on-scroll py-20 px-4 sm:px-6 max-w-7xl mx-auto select-none">
      {/* Hazard Section Header */}
      <div className="flex items-center gap-3 mb-6">
        <div className="h-1 flex-1 hazard-stripe opacity-40" />
        <span className="font-mono text-xs uppercase tracking-widest text-amber-400 bg-amber-950/80 px-3 py-1 border border-amber-800">
          EXPERIMENT STATIONS // BENCH OPERATIONS
        </span>
        <div className="h-1 flex-1 hazard-stripe opacity-40" />
      </div>

      <div className="text-center mb-14">
        <h2 className="font-heading font-black text-3xl sm:text-5xl uppercase tracking-wider text-white">
          THE CHEMISTRY LAB
        </h2>
        <p className="font-mono text-xs sm:text-sm text-stone-400 mt-2 uppercase tracking-widest max-w-2xl mx-auto">
          Interactive laboratory workstations showcasing foundational engineering skills. Each station represents a core discipline.
        </p>
      </div>

      {/* Grid of Interactive Stations */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Station 1: PYTHON */}
        <div className="bg-[#0b120f] border-2 border-emerald-900/80 p-5 flex flex-col justify-between hover:border-emerald-500 transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.7)] group">
          <div>
            <div className="flex items-start justify-between mb-4">
              <ElementTile
                symbol="Py"
                number={3}
                name="Python"
                mass="3.12"
                size="md"
                variant="toxic"
              />
              <span className="font-mono text-[10px] uppercase tracking-wider px-2 py-1 bg-emerald-950 border border-emerald-700 text-emerald-300">
                STATION 01 // ACTIVE
              </span>
            </div>

            <h3 className="font-heading font-bold text-2xl uppercase tracking-wider text-white group-hover:text-emerald-400 transition-colors">
              PYTHON SYNTHESIS
            </h3>
            <p className="font-mono text-xs text-stone-400 mt-1 mb-4">
              Beginner programs: variables, conditions, iteration & math.
            </p>

            {/* Interactive Mini Python Console */}
            <div className="bg-black/90 border border-emerald-950 p-3 rounded-sm font-mono text-xs">
              <div className="flex items-center justify-between pb-2 mb-2 border-b border-stone-800 text-[10px] text-stone-400">
                <span className="text-emerald-400 flex items-center gap-1">
                  <Terminal className="w-3 h-3" />
                  python3 main.py
                </span>
                <div className="flex gap-1">
                  {['variables', 'loops', 'conditions'].map((mode) => (
                    <button
                      key={mode}
                      onClick={() => setPythonSnippet(mode)}
                      className={`px-1.5 py-0.5 text-[9px] uppercase border ${
                        pythonSnippet === mode
                          ? 'border-emerald-500 text-emerald-300 bg-emerald-950/80'
                          : 'border-stone-800 text-stone-500 hover:text-stone-300'
                      }`}
                    >
                      {mode}
                    </button>
                  ))}
                </div>
              </div>

              {/* Code Snippet Box */}
              <pre className="text-emerald-300/90 text-[11px] overflow-x-auto whitespace-pre-wrap font-mono max-h-24 leading-snug">
                {pythonSnippets[pythonSnippet].code}
              </pre>

              {/* Run Trigger */}
              <div className="mt-3 pt-2 border-t border-stone-900 flex items-center justify-between">
                <button
                  onClick={runPythonCode}
                  className="flex items-center gap-1.5 px-2.5 py-1 bg-emerald-600 hover:bg-emerald-500 text-black font-heading font-bold text-xs uppercase tracking-wider transition-colors"
                >
                  <Play className="w-3 h-3 fill-current" />
                  <span>Execute Code</span>
                </button>
                <span className="text-[10px] text-stone-500">REPL READY</span>
              </div>

              {/* Output Preview */}
              <div className="mt-2 p-2 bg-stone-950 border border-stone-900 text-stone-300 text-[10px] whitespace-pre-wrap leading-tight">
                {pythonOutput}
              </div>
            </div>
          </div>

          <div className="mt-5 pt-3 border-t border-stone-900 flex items-center justify-between">
            <span className="font-mono text-[10px] text-emerald-400">STATUS: CORE FOUNDATION</span>
            <button
              onClick={() => openStation(stations[0])}
              className="text-xs font-mono text-stone-300 hover:text-emerald-400 underline underline-offset-4"
            >
              [Station Specs]
            </button>
          </div>
        </div>

        {/* Station 2: GIT & GITHUB */}
        <div className="bg-[#0b120f] border-2 border-stone-800 p-5 flex flex-col justify-between hover:border-amber-500 transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.7)] group">
          <div>
            <div className="flex items-start justify-between mb-4">
              <ElementTile
                symbol="Gt"
                number={8}
                name="Git"
                mass="2.44"
                size="md"
                variant="amber"
              />
              <span className="font-mono text-[10px] uppercase tracking-wider px-2 py-1 bg-amber-950 border border-amber-700 text-amber-300">
                STATION 02 // CUSTODY
              </span>
            </div>

            <h3 className="font-heading font-bold text-2xl uppercase tracking-wider text-white group-hover:text-amber-400 transition-colors">
              GIT & GITHUB
            </h3>
            <p className="font-mono text-xs text-stone-400 mt-1 mb-4">
              Sample tracking system: version-control, branches & commits.
            </p>

            {/* Visual Specimen Tracking & Commit Log */}
            <div className="bg-black/90 border border-stone-800 p-3 rounded-sm font-mono text-xs space-y-2.5">
              <div className="flex items-center justify-between text-[10px] text-stone-400 border-b border-stone-800 pb-1.5">
                <span className="flex items-center gap-1.5 text-amber-400 font-bold">
                  <GitBranch className="w-3.5 h-3.5" />
                  BRANCH: origin/main
                </span>
                <span>CHAIN OF CUSTODY</span>
              </div>

              {/* Commit Nodes */}
              <div className="space-y-2 text-[11px]">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#10b981]" />
                  <span className="text-amber-400 font-bold">a91c4e</span>
                  <span className="text-stone-300 truncate">feat: initial python math solver</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#10b981]" />
                  <span className="text-amber-400 font-bold">7b02d1</span>
                  <span className="text-stone-300 truncate">refactor: modular function pipeline</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-amber-400 shadow-[0_0_8px_#f59e0b] animate-pulse" />
                  <span className="text-amber-400 font-bold">HEAD</span>
                  <span className="text-emerald-300 truncate">fix: verify edge case inputs</span>
                </div>
              </div>

              <div className="p-2 bg-amber-950/20 border border-amber-900/50 text-[10px] text-amber-200">
                ✓ Purity verified across 18 revisions. Remote synced to GitHub.
              </div>
            </div>
          </div>

          <div className="mt-5 pt-3 border-t border-stone-900 flex items-center justify-between">
            <span className="font-mono text-[10px] text-amber-400">STATUS: WORKFLOW VERIFIED</span>
            <button
              onClick={() => openStation(stations[1])}
              className="text-xs font-mono text-stone-300 hover:text-amber-400 underline underline-offset-4"
            >
              [Station Specs]
            </button>
          </div>
        </div>

        {/* Station 3: LINUX & TERMINAL */}
        <div className="bg-[#0b120f] border-2 border-stone-800 p-5 flex flex-col justify-between hover:border-emerald-500 transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.7)] group">
          <div>
            <div className="flex items-start justify-between mb-4">
              <ElementTile
                symbol="Lx"
                number={12}
                name="Linux"
                mass="6.80"
                size="md"
                variant="toxic"
              />
              <span className="font-mono text-[10px] uppercase tracking-wider px-2 py-1 bg-emerald-950 border border-emerald-700 text-emerald-300">
                STATION 03 // BASH
              </span>
            </div>

            <h3 className="font-heading font-bold text-2xl uppercase tracking-wider text-white group-hover:text-emerald-400 transition-colors">
              LINUX & TERMINAL
            </h3>
            <p className="font-mono text-xs text-stone-400 mt-1 mb-4">
              Laboratory central computer: navigation, permissions & scripts.
            </p>

            {/* Simulated Bash Terminal */}
            <div className="bg-black/90 border border-emerald-950 p-3 rounded-sm font-mono text-xs space-y-2">
              <div className="text-[10px] text-emerald-600 flex items-center justify-between border-b border-stone-800 pb-1">
                <span>ananya@abq-lab:~/experiments</span>
                <span>TTY1</span>
              </div>

              <div className="space-y-1 text-[11px] text-emerald-300 font-mono">
                <div className="flex items-center gap-1">
                  <span className="text-emerald-500 font-bold">$</span>
                  <span>ls -la /lab/data</span>
                </div>
                <div className="text-stone-400 text-[10px] pl-3">
                  -rwxr-xr-x 1 ananya staff  240 Oct 28 run_batch.sh<br/>
                  -rw-r--r-- 1 ananya staff 1024 Oct 28 telemetry.log
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-emerald-500 font-bold">$</span>
                  <span>chmod +x run_batch.sh && ./run_batch.sh</span>
                </div>
                <div className="text-emerald-400 text-[10px] pl-3">
                  [+] Batch execution authorized. Status 200 OK.
                </div>
              </div>
            </div>
          </div>

          <div className="mt-5 pt-3 border-t border-stone-900 flex items-center justify-between">
            <span className="font-mono text-[10px] text-emerald-400">STATUS: COMMAND PROFICIENT</span>
            <button
              onClick={() => openStation(stations[2])}
              className="text-xs font-mono text-stone-300 hover:text-emerald-400 underline underline-offset-4"
            >
              [Station Specs]
            </button>
          </div>
        </div>

        {/* Station 4: COMPUTER SYSTEMS */}
        <div className="bg-[#0b120f] border-2 border-stone-800 p-5 flex flex-col justify-between hover:border-cyan-500 transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.7)] group">
          <div>
            <div className="flex items-start justify-between mb-4">
              <ElementTile
                symbol="Cs"
                number={16}
                name="Systems"
                mass="64.0"
                size="md"
                variant="dark"
                className="border-cyan-500 text-cyan-400 shadow-[0_0_12px_rgba(6,182,212,0.3)]"
              />
              <span className="font-mono text-[10px] uppercase tracking-wider px-2 py-1 bg-cyan-950 border border-cyan-700 text-cyan-300">
                STATION 04 // LOGIC
              </span>
            </div>

            <h3 className="font-heading font-bold text-2xl uppercase tracking-wider text-white group-hover:text-cyan-400 transition-colors">
              COMPUTER SYSTEMS
            </h3>
            <p className="font-mono text-xs text-stone-400 mt-1 mb-4">
              Digital circuit board, CPU bus, binary arithmetic & memory.
            </p>

            {/* Interactive Logic Gate Visualizer */}
            <div className="bg-black/90 border border-stone-800 p-3 rounded-sm font-mono text-xs space-y-3">
              <div className="flex items-center justify-between text-[10px] text-stone-400 border-b border-stone-800 pb-1">
                <span className="text-cyan-400 font-bold flex items-center gap-1">
                  <Binary className="w-3 h-3" />
                  LOGIC GATE BENCH (AND GATE)
                </span>
                <span>VOLTAGE: 5.0V</span>
              </div>

              {/* Interactive Inputs */}
              <div className="flex items-center justify-around py-1">
                <div className="flex flex-col items-center gap-1">
                  <span className="text-[10px] text-stone-400">INPUT A</span>
                  <button
                    onClick={() => {
                      labAudio.playClick();
                      setLogicA(logicA ? 0 : 1);
                    }}
                    className={`w-8 h-8 font-bold border transition-colors ${
                      logicA ? 'bg-cyan-500 text-black border-cyan-300 shadow-[0_0_8px_#06b6d4]' : 'bg-stone-900 text-stone-500 border-stone-700'
                    }`}
                  >
                    {logicA}
                  </button>
                </div>

                <div className="text-stone-600 font-bold text-sm">+</div>

                <div className="flex flex-col items-center gap-1">
                  <span className="text-[10px] text-stone-400">INPUT B</span>
                  <button
                    onClick={() => {
                      labAudio.playClick();
                      setLogicB(logicB ? 0 : 1);
                    }}
                    className={`w-8 h-8 font-bold border transition-colors ${
                      logicB ? 'bg-cyan-500 text-black border-cyan-300 shadow-[0_0_8px_#06b6d4]' : 'bg-stone-900 text-stone-500 border-stone-700'
                    }`}
                  >
                    {logicB}
                  </button>
                </div>

                <div className="text-stone-600 font-bold text-sm">→</div>

                <div className="flex flex-col items-center gap-1">
                  <span className="text-[10px] text-stone-400">OUTPUT (A ∧ B)</span>
                  <div
                    className={`w-8 h-8 flex items-center justify-center font-bold border ${
                      logicA && logicB
                        ? 'bg-emerald-500 text-black border-emerald-300 shadow-[0_0_12px_#10b981]'
                        : 'bg-stone-950 text-stone-600 border-stone-800'
                    }`}
                  >
                    {logicA && logicB ? 1 : 0}
                  </div>
                </div>
              </div>

              <div className="text-[10px] text-stone-400 text-center">
                Click inputs to toggle bits and evaluate logic transistor output.
              </div>
            </div>
          </div>

          <div className="mt-5 pt-3 border-t border-stone-900 flex items-center justify-between">
            <span className="font-mono text-[10px] text-cyan-400">STATUS: ARCHITECTURE STUDY</span>
            <button
              onClick={() => openStation(stations[3])}
              className="text-xs font-mono text-stone-300 hover:text-cyan-400 underline underline-offset-4"
            >
              [Station Specs]
            </button>
          </div>
        </div>

        {/* Station 5: ARTIFICIAL INTELLIGENCE */}
        <div className="bg-[#0b120f] border-2 border-stone-800 p-5 flex flex-col justify-between hover:border-amber-500 transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.7)] group">
          <div>
            <div className="flex items-start justify-between mb-4">
              <ElementTile
                symbol="Ai"
                number={21}
                name="Intelligence"
                mass="99.1"
                size="md"
                variant="amber"
              />
              <span className="font-mono text-[10px] uppercase tracking-wider px-2 py-1 bg-amber-950 border border-amber-700 text-amber-300">
                STATION 05 // NEURAL
              </span>
            </div>

            <h3 className="font-heading font-bold text-2xl uppercase tracking-wider text-white group-hover:text-amber-400 transition-colors">
              ARTIFICIAL INTELLIGENCE
            </h3>
            <p className="font-mono text-xs text-stone-400 mt-1 mb-4">
              Molecular network: weights, activation signals & learning.
            </p>

            {/* Interactive Neural Molecular Visual */}
            <div className="bg-black/90 border border-stone-800 p-3 rounded-sm font-mono text-xs space-y-2">
              <div className="flex items-center justify-between text-[10px] text-stone-400 border-b border-stone-800 pb-1">
                <span className="text-amber-400 font-bold flex items-center gap-1">
                  <Network className="w-3 h-3" />
                  SYNAPTIC ACTIVATION MAP
                </span>
                <span>LEARNING RATE: 0.01</span>
              </div>

              {/* Molecular Network Nodes SVG */}
              <div className="h-24 w-full flex items-center justify-center relative">
                <svg viewBox="0 0 200 80" className="w-full h-full">
                  {/* Synaptic Lines */}
                  <line x1="30" y1="20" x2="100" y2="40" stroke={neuralPulse ? '#f59e0b' : '#334155'} strokeWidth="1.5" />
                  <line x1="30" y1="60" x2="100" y2="40" stroke={neuralPulse ? '#f59e0b' : '#334155'} strokeWidth="1.5" />
                  <line x1="100" y1="40" x2="170" y2="40" stroke={neuralPulse ? '#10b981' : '#334155'} strokeWidth="2" />

                  {/* Input Nodes */}
                  <circle cx="30" cy="20" r="8" fill="#1e293b" stroke="#38bdf8" strokeWidth="2" />
                  <circle cx="30" cy="60" r="8" fill="#1e293b" stroke="#38bdf8" strokeWidth="2" />

                  {/* Hidden Node */}
                  <circle
                    cx="100"
                    cy="40"
                    r="10"
                    fill="#1e293b"
                    stroke={neuralPulse ? '#fbbf24' : '#f59e0b'}
                    strokeWidth="2"
                    className={neuralPulse ? 'animate-ping' : ''}
                  />

                  {/* Output Node */}
                  <circle
                    cx="170"
                    cy="40"
                    r="9"
                    fill="#052e16"
                    stroke={neuralPulse ? '#34d399' : '#10b981'}
                    strokeWidth="2"
                  />
                </svg>
              </div>

              <div className="pt-1 flex items-center justify-between">
                <button
                  onClick={triggerNeuralPulse}
                  className="px-2.5 py-1 bg-amber-600 hover:bg-amber-500 text-black font-heading font-bold text-xs uppercase tracking-wider transition-colors"
                >
                  Fire Synaptic Impulse
                </button>
                <span className="text-[10px] text-stone-500 font-mono">
                  {neuralPulse ? 'ACTIVATED' : 'STANDBY'}
                </span>
              </div>
            </div>
          </div>

          <div className="mt-5 pt-3 border-t border-stone-900 flex items-center justify-between">
            <span className="font-mono text-[10px] text-amber-400">STATUS: THEORETICAL EXPLORATION</span>
            <button
              onClick={() => openStation(stations[4])}
              className="text-xs font-mono text-stone-300 hover:text-amber-400 underline underline-offset-4"
            >
              [Station Specs]
            </button>
          </div>
        </div>
      </div>

      {/* Station Modal Detail Drawer */}
      {activeStationModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-[#0d1411] border-2 border-emerald-600 max-w-xl w-full p-6 relative shadow-[0_0_50px_rgba(0,0,0,0.9)] animate-in fade-in zoom-in-95 duration-200">
            {/* Modal Header */}
            <div className="flex items-start justify-between border-b border-emerald-900 pb-4 mb-4">
              <div className="flex items-center gap-3">
                <ElementTile
                  symbol={activeStationModal.element.symbol}
                  number={activeStationModal.element.number}
                  name={activeStationModal.element.name}
                  mass={activeStationModal.element.mass}
                  size="sm"
                  variant="toxic"
                />
                <div>
                  <h3 className="font-heading font-black text-2xl uppercase tracking-wider text-white">
                    {activeStationModal.title}
                  </h3>
                  <div className="font-mono text-xs text-emerald-400">
                    {activeStationModal.subtitle}
                  </div>
                </div>
              </div>

              <button
                onClick={closeStation}
                className="p-1 border border-stone-700 bg-stone-900 text-stone-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="space-y-4 font-mono text-xs">
              <div>
                <span className="text-stone-400 block mb-1 uppercase tracking-wider">LABORATORY OVERVIEW:</span>
                <p className="font-body text-stone-200 text-sm leading-relaxed">
                  {activeStationModal.summary}
                </p>
              </div>

              <div className="p-3 bg-black/60 border border-emerald-950">
                <span className="text-emerald-400 block mb-2 font-bold uppercase tracking-wider">
                  CORE CONCEPTS PRACTICED:
                </span>
                <ul className="space-y-1.5 text-stone-300">
                  {activeStationModal.concepts.map((concept, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      <span>{concept}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex items-center justify-between pt-2 border-t border-stone-800 text-[11px]">
                <span className="text-stone-400">EQUIPMENT: {activeStationModal.equipment}</span>
                <span className="text-amber-400 font-bold">{activeStationModal.status}</span>
              </div>
            </div>

            <div className="mt-6 flex justify-end">
              <button
                onClick={closeStation}
                className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-black font-heading font-bold uppercase tracking-wider text-sm transition-colors"
              >
                Acknowledge Log
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

