import React, { useState } from 'react';
import ElementTile from './ElementTile';
import { labAudio } from '../utils/audio';
import { GithubIcon } from './SocialIcons';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { 
  Folder, 
  FileCode, 
  Terminal, 
  Cpu, 
  ExternalLink, 
  X, 
  CheckCircle2, 
  Clock, 
  Paperclip, 
  Tag, 
  AlertTriangle, 
  FileCheck,
  Sparkles
} from 'lucide-react';

// 3D Tilt Card with pointer depth and dynamic gloss reflection
function ProjectTiltCard({ exp, onClick }) {
  const [transformStyle, setTransformStyle] = useState('perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)');
  const [gloss, setGloss] = useState(null);

  const handleMouseMove = (e) => {
    // Check for reduced motion preference
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -7; // max 7 deg tilt
    const rotateY = ((x - centerX) / centerX) * 7;

    setTransformStyle(`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.025, 1.025, 1.025)`);
    setGloss({ x: (x / rect.width) * 100, y: (y / rect.height) * 100 });
  };

  const handleMouseLeave = () => {
    setTransformStyle('perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)');
    setGloss(null);
  };

  const handleMouseEnter = () => {
    labAudio.playGeiger();
  };

  return (
    <div
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ transform: transformStyle }}
      className="relative bg-[#0e1612] border-2 border-stone-800 hover:border-emerald-500 transition-all duration-200 ease-out p-6 flex flex-col justify-between cursor-pointer group shadow-[0_10px_30px_rgba(0,0,0,0.85)] rounded-none will-change-transform overflow-hidden"
    >
      {/* Dynamic reflective cursor gloss sheen */}
      {gloss && (
        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-300 opacity-25 z-20"
          style={{
            background: `radial-gradient(circle 180px at ${gloss.x}% ${gloss.y}%, rgba(16, 185, 129, 0.4), transparent 80%)`
          }}
        />
      )}

      {/* Paperclip top detail */}
      <div className="absolute -top-3 right-6 text-stone-500 group-hover:text-amber-400 group-hover:rotate-12 transition-all duration-300 z-10">
        <Paperclip className="w-6 h-6 rotate-45" />
      </div>

      <div>
        {/* Folder Top Bar */}
        <div className="flex items-center justify-between pb-3 border-b border-stone-800 mb-4">
          <div className="flex items-center gap-2">
            <Folder className="w-4 h-4 text-emerald-400 group-hover:scale-110 transition-transform" />
            <span className="font-mono text-xs font-bold tracking-wider text-stone-300">
              FILE #{exp.code}
            </span>
          </div>
          <span className={`font-mono text-[10px] uppercase font-bold px-2 py-0.5 border ${
            exp.statusType === 'complete' 
              ? 'border-emerald-600 bg-emerald-950/70 text-emerald-300 shadow-[0_0_8px_rgba(16,185,129,0.3)]' 
              : 'border-amber-600 bg-amber-950/70 text-amber-300 shadow-[0_0_8px_rgba(245,158,11,0.3)]'
          }`}>
            {exp.tag}
          </span>
        </div>

        {/* Element & Title */}
        <div className="flex items-start gap-3 mb-4">
          <ElementTile
            symbol={exp.element.symbol}
            number={exp.element.number}
            name={exp.element.name}
            mass={exp.element.mass}
            size="sm"
            variant={exp.statusType === 'complete' ? 'toxic' : 'amber'}
            className="group-hover:scale-105 transition-transform"
          />
          <div>
            <span className="font-mono text-[10px] uppercase tracking-widest text-emerald-500/80 block">
              {exp.category}
            </span>
            <h3 className="font-heading font-bold text-xl uppercase tracking-wider text-white group-hover:text-emerald-300 transition-colors leading-tight">
              {exp.title}
            </h3>
          </div>
        </div>

        {/* Description */}
        <p className="font-body text-xs text-stone-300 line-clamp-3 leading-relaxed mb-4">
          {exp.description}
        </p>

        {/* Concepts list tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {exp.tools.slice(0, 3).map((tool, idx) => (
            <span
              key={idx}
              className="px-2 py-0.5 bg-black/60 border border-stone-800 group-hover:border-stone-700 text-[10px] font-mono text-stone-400"
            >
              {tool}
            </span>
          ))}
          {exp.tools.length > 3 && (
            <span className="px-1.5 py-0.5 bg-black/60 border border-stone-800 text-[10px] font-mono text-stone-500">
              +{exp.tools.length - 3} more
            </span>
          )}
        </div>
      </div>

      {/* Bottom Action Footer */}
      <div className="pt-3 border-t border-stone-900 flex items-center justify-between text-xs font-mono">
        <span className="text-stone-500">{exp.evidenceDate}</span>
        <span className="text-emerald-400 font-bold group-hover:underline flex items-center gap-1 group-hover:translate-x-1 transition-transform">
          <span>Inspect Evidence</span>
          <span>→</span>
        </span>
      </div>

      {/* Red rubber stamp watermark */}
      <div className="absolute bottom-12 right-4 opacity-15 pointer-events-none rubber-stamp border-emerald-500 text-emerald-400 rotate-[-12deg] text-xs">
        CONFIDENTIAL
      </div>
    </div>
  );
}

export default function ClassifiedProjects() {
  const [activeExperiment, setActiveExperiment] = useState(null);
  const revealRef = useScrollReveal();

  const experiments = [
    {
      id: 'exp-001',
      code: 'EXP-001',
      title: 'PYTHON ALGORITHMIC FOUNDATIONS',
      category: 'SOFTWARE SYNTHESIS',
      element: { symbol: 'Py', number: 1, name: 'Python', mass: '1.008' },
      tag: 'COMPLETED BATCH',
      tagColor: 'emerald',
      description: 'Hands-on beginner exercises and computational scripts exploring variables, conditional branching, iteration loops, arithmetic operators, and basic problem-solving algorithms.',
      objective: 'Establish rigorous programming foundations by writing pure Python scripts that solve mathematical problems, parse structured data, and implement procedural algorithms without reliance on high-level external frameworks.',
      tools: ['Python 3.12', 'VS Code', 'Git CLI', 'Algorithmic Logic', 'Data Structures (Lists, Tuples, Dicts)'],
      learned: 'Learned fundamental control flow, how to handle boundary conditions, avoiding off-by-one errors in loops, breaking mathematical formulas into modular functions, and practicing disciplined code formatting.',
      status: 'VERIFIED & TESTED // BATCH ARCHIVED',
      statusType: 'complete',
      codeSnippet: `def solve_reaction_yield(reactants, catalyst_efficiency=0.991):\n    """Computes chemical theoretical vs actual yield."""\n    total_mass = sum(reactants.values())\n    actual_yield = total_mass * catalyst_efficiency\n    return round(actual_yield, 3)\n\nbatch_reactants = {"compound_a": 120.5, "compound_b": 79.5}\nprint(f"Batch Yield: {solve_reaction_yield(batch_reactants)} g")`,
      githubUrl: 'https://github.com/ananyasingh',
      evidenceDate: 'BATCH LOG: OCT 2024'
    },
    {
      id: 'exp-002',
      code: 'EXP-002',
      title: 'SYSTEM OPERATIONS & TERMINAL AUTOMATION',
      category: 'UNIX INFRASTRUCTURE',
      element: { symbol: 'Sh', number: 2, name: 'Shell', mass: '4.002' },
      tag: 'ACTIVE DRILL',
      tagColor: 'amber',
      description: 'Terminal practice and shell scripts involving POSIX file navigation, permission management, environment pipelines, and Git version control workflows.',
      objective: 'Master the command-line interface as the primary developer workbench. Automate routine repetitive file organization, inspect system processes, and maintain clean atomic Git commit histories.',
      tools: ['Bash / Zsh', 'Linux Utilities (grep, awk, sed)', 'Git & GitHub', 'POSIX Permissions', 'Standard Streams (stdin/stdout/stderr)'],
      learned: 'Discovered the power of Unix pipelines, chaining commands with pipes, understanding read/write/execute permission octals (755, 644), automating log monitoring, and resolving basic Git merge conflicts.',
      status: 'ACTIVE DRILL // SYSTEM LOG VERIFIED',
      statusType: 'active',
      codeSnippet: `#!/usr/bin/env bash\n# System Operations Experiment: Lab Backup Automation\nset -euo pipefail\nBACKUP_DIR="./lab_backups/$(date +%Y%m%d_%H%M%S)"\nmkdir -p "$BACKUP_DIR"\ncp -r ./src "$BACKUP_DIR"\necho "[+] Laboratory state successfully archived to $BACKUP_DIR"`,
      githubUrl: 'https://github.com/ananyasingh',
      evidenceDate: 'BATCH LOG: NOV 2024'
    },
    {
      id: 'exp-003',
      code: 'EXP-003',
      title: 'ENGINEERING WORKFLOWS & ROBOTICS EXPLORATION',
      category: 'SYSTEMS ARCHITECTURE',
      element: { symbol: 'Rb', number: 3, name: 'Robotics', mass: '6.941' },
      tag: 'IN RESEARCH',
      tagColor: 'amber',
      description: 'Exploration of engineering project planning, task coordination, hardware-software interfacing, and preliminary robotics architecture.',
      objective: 'Investigate the intersection of physical computation and software control. Design modular engineering workflows for robotics tasks, sensor data aggregation, and agile project planning.',
      tools: ['System Architecture Specs', 'Sensor Interfacing Concepts', 'Agile Engineering Sprints', 'Markdown Documentation', 'Hardware Logic Diagrams'],
      learned: 'Studied how sensor signals are converted from analog to digital, the importance of deterministic timing in embedded systems, and how to structure collaborative multi-discipline engineering projects into manageable milestones.',
      status: 'RESEARCH IN PROGRESS // PROTOTYPING PHASE',
      statusType: 'in-progress',
      codeSnippet: `// Embedded Architecture Pseudocode: Sensor Telemetry Loop\nvoid loop() {\n  float temperature = readAnalogSensor(PIN_REACTOR_TEMP);\n  if (temperature > CRITICAL_THRESHOLD) {\n    triggerEmergencyCoolantValve();\n    logEvent("EMERGENCY_VENT", temperature);\n  }\n  delay(100); // 10Hz sampling rate\n}`,
      githubUrl: 'https://github.com/ananyasingh',
      evidenceDate: 'BATCH LOG: IN PROGRESS'
    }
  ];

  const handleOpenReport = (exp) => {
    labAudio.playClick();
    setActiveExperiment(exp);
  };

  const handleCloseReport = () => {
    labAudio.playClick();
    setActiveExperiment(null);
  };

  return (
    <section id="casefiles" ref={revealRef} className="reveal-on-scroll py-20 px-4 sm:px-6 max-w-7xl mx-auto select-none">
      {/* Evidence Board Header */}
      <div className="flex items-center gap-3 mb-6">
        <div className="h-1 flex-1 hazard-stripe-green opacity-40" />
        <span className="font-mono text-xs uppercase tracking-widest text-emerald-400 bg-emerald-950/80 px-3 py-1 border border-emerald-800">
          CLASSIFIED EVIDENCE BOARD // CASE FILES
        </span>
        <div className="h-1 flex-1 hazard-stripe-green opacity-40" />
      </div>

      <div className="text-center mb-14">
        <h2 className="font-heading font-black text-3xl sm:text-5xl uppercase tracking-wider text-white">
          CLASSIFIED EXPERIMENT FILES
        </h2>
        <p className="font-mono text-xs sm:text-sm text-stone-400 mt-2 uppercase tracking-widest max-w-2xl mx-auto">
          Laboratory records, empirical problem-solving scripts, and documented technical experiments with 3D tactile evidence folders.
        </p>
      </div>

      {/* 3D Tilt Evidence Folders Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 tilt-card-container">
        {experiments.map((exp) => (
          <ProjectTiltCard
            key={exp.id}
            exp={exp}
            onClick={() => handleOpenReport(exp)}
          />
        ))}
      </div>

      {/* Classified Evidence Modal Report */}
      {activeExperiment && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
          <div className="bg-[#0b120f] border-2 border-emerald-500 max-w-2xl w-full p-6 sm:p-8 relative shadow-[0_0_60px_rgba(0,0,0,0.95)] max-h-[90vh] overflow-y-auto animate-in zoom-in-95 duration-200">
            {/* Modal Header */}
            <div className="flex items-start justify-between border-b border-stone-800 pb-4 mb-5">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="rubber-stamp border-emerald-500 text-emerald-400 text-[10px] py-0.5 px-2">
                    EVIDENCE RECORD
                  </span>
                  <span className="font-mono text-xs text-stone-400">
                    ID: {activeExperiment.code} // CLASSIFIED
                  </span>
                </div>
                <h3 className="font-heading font-black text-2xl sm:text-3xl uppercase tracking-wider text-white">
                  {activeExperiment.title}
                </h3>
              </div>

              <button
                onClick={handleCloseReport}
                className="p-1 border border-stone-700 bg-stone-900 text-stone-400 hover:text-white hover:border-emerald-500 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Dossier Report Sections */}
            <div className="space-y-5 font-mono text-xs">
              {/* Objective */}
              <div className="bg-stone-900/60 p-3.5 border border-stone-800">
                <h4 className="text-emerald-400 uppercase tracking-wider font-bold mb-1 flex items-center gap-1.5">
                  <FileCheck className="w-4 h-4" />
                  <span>EXPERIMENTAL OBJECTIVE</span>
                </h4>
                <p className="font-body text-stone-200 text-sm leading-relaxed">
                  {activeExperiment.objective}
                </p>
              </div>

              {/* Tools & Concepts */}
              <div>
                <h4 className="text-amber-400 uppercase tracking-wider font-bold mb-2">
                  TOOLS & CONCEPTS EMPLOYED:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeExperiment.tools.map((t, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 bg-black border border-stone-700 text-stone-200 text-xs"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* What I Learned */}
              <div className="border-l-2 border-emerald-500 pl-3 py-1">
                <h4 className="text-emerald-300 uppercase tracking-wider font-bold mb-1">
                  WHAT WAS LEARNED:
                </h4>
                <p className="font-body text-stone-300 text-sm leading-relaxed">
                  {activeExperiment.learned}
                </p>
              </div>

              {/* Code Evidence Preview */}
              <div>
                <h4 className="text-stone-400 uppercase tracking-wider font-bold mb-2 flex items-center justify-between">
                  <span>EVIDENCE CODE ARCHIVE:</span>
                  <span className="text-[10px] text-emerald-500">SYNTHESIS REPL</span>
                </h4>
                <pre className="bg-black border border-emerald-950 p-3 text-emerald-400 text-xs font-mono overflow-x-auto whitespace-pre-wrap leading-relaxed shadow-inner">
                  {activeExperiment.codeSnippet}
                </pre>
              </div>

              {/* Status & Repository */}
              <div className="pt-3 border-t border-stone-800 flex flex-wrap items-center justify-between gap-4">
                <div>
                  <span className="text-stone-500 block text-[10px]">CURRENT EXPERIMENT STATUS</span>
                  <strong className="text-emerald-400 text-xs">{activeExperiment.status}</strong>
                </div>

                <a
                  href={activeExperiment.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-stone-900 border border-emerald-800 hover:border-emerald-500 text-white hover:text-emerald-300 transition-colors uppercase font-heading font-bold text-sm shadow-[0_0_15px_rgba(16,185,129,0.2)]"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>GitHub Repository</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
