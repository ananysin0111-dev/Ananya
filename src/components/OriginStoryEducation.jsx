import React from 'react';
import ElementTile from './ElementTile';
import { labAudio } from '../utils/audio';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { 
  Film, 
  Calendar, 
  BookOpen, 
  GraduationCap, 
  Lock, 
  CheckCircle, 
  Sparkles,
  ChevronRight
} from 'lucide-react';

export default function OriginStoryEducation() {
  const revealRef = useScrollReveal();
  const episodes = [
    {
      season: 'SEASON 01',
      episode: 'EPISODE 01',
      title: 'PILOT: THE AWAKENING',
      timeframe: 'PRE-ENGINEERING FOUNDATION',
      institution: 'Secondary & High School Science',
      tag: 'CANONICAL ORIGIN',
      status: 'COMPLETED',
      isCurrent: false,
      summary: 'The ignition of scientific curiosity. Discovered a deep fascination for how software, logic rules, and electronic circuits power the modern world.',
      takeaways: ['Mathematical Logic & Analysis', 'Physics of Electronics', 'Self-Initiated Curiosity in Code']
    },
    {
      season: 'SEASON 01',
      episode: 'EPISODE 02',
      title: 'THE BEGINNING',
      timeframe: 'CURRENT CHAPTER // 2024–PRESENT',
      institution: 'Newton School of Technology',
      tag: 'CURRENT CHAPTER',
      degree: 'B.Tech — First Year',
      status: 'CURRENTLY AIRING',
      isCurrent: true,
      summary: 'Beginning a rigorous undergraduate journey into computing. Immersing into practical programming, computer systems architecture, algorithmic problem-solving, and laboratory collaboration.',
      takeaways: [
        'Programming in Python & Algorithmic Problem Solving',
        'Computer Systems, Logic Gates & Von Neumann Model',
        'Terminal Mastery, Linux CLI & Git Version Control',
        'Engineering Workflows & Peer Code Review'
      ]
    },
    {
      season: 'SEASON 01',
      episode: 'EPISODE 03',
      title: 'CATALYST: SYSTEM ARCHITECTURES',
      timeframe: 'UPCOMING CHAPTER // YEAR 2',
      institution: 'Newton School of Technology',
      tag: 'IN WRITERS ROOM',
      status: 'UPCOMING',
      isCurrent: false,
      summary: 'Deepening into Data Structures, Object-Oriented Programming, Database Systems, and Hardware-Software Interfacing.',
      takeaways: ['Data Structures & Algorithms', 'Operating Systems Internals', 'Full-Stack Engineering Foundations']
    },
    {
      season: 'SEASON 02',
      episode: 'EPISODE 01',
      title: 'EMPIRE BUILDING: AI & AUTONOMOUS SYSTEMS',
      timeframe: 'FUTURE CHAPTER // YEARS 3–4',
      institution: 'Engineering Specialization',
      tag: 'FUTURE ROADMAP',
      status: 'LOCKED // UNDER DEVELOPMENT',
      isCurrent: false,
      summary: 'Advanced research in Artificial Intelligence, Neural Architectures, Robotics, and Real-world Engineering Solutions.',
      takeaways: ['Applied Machine Learning', 'Robotics Systems Interfacing', 'Capstone Engineering Innovations']
    }
  ];

  return (
    <section id="originstory" ref={revealRef} className="reveal-on-scroll py-20 px-4 sm:px-6 max-w-7xl mx-auto select-none">
      {/* Hazard Section Header */}
      <div className="flex items-center gap-3 mb-6">
        <div className="h-1 flex-1 hazard-stripe opacity-40" />
        <span className="font-mono text-xs uppercase tracking-widest text-amber-400 bg-amber-950/80 px-3 py-1 border border-amber-800">
          EPISODIC TIMELINE // ACADEMIC ARC
        </span>
        <div className="h-1 flex-1 hazard-stripe opacity-40" />
      </div>

      <div className="text-center mb-14">
        <h2 className="font-heading font-black text-3xl sm:text-5xl uppercase tracking-wider text-white">
          EDUCATION — THE ORIGIN STORY
        </h2>
        <p className="font-mono text-xs sm:text-sm text-stone-400 mt-2 uppercase tracking-widest max-w-2xl mx-auto">
          An evolving educational experiment documented like a cinematic series progression. Current chapter: The Beginning.
        </p>
      </div>

      {/* Episode Timeline Cards */}
      <div className="space-y-6 max-w-4xl mx-auto">
        {episodes.map((ep, idx) => (
          <div
            key={idx}
            className={`relative p-6 sm:p-8 border-2 transition-all duration-300 ${
              ep.isCurrent
                ? 'bg-[#0e1713] border-emerald-500 shadow-[0_0_30px_rgba(16,185,129,0.25)]'
                : 'bg-[#090e0c] border-stone-800 opacity-90 hover:opacity-100 hover:border-stone-700'
            }`}
          >
            {/* Episode Banner Header */}
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-stone-800 pb-3 mb-4">
              <div className="flex items-center gap-2 font-mono text-xs">
                <Film className={`w-4 h-4 ${ep.isCurrent ? 'text-emerald-400' : 'text-stone-500'}`} />
                <span className="text-stone-400 font-bold">{ep.season} // {ep.episode}</span>
              </div>

              <div className="flex items-center gap-2">
                <span className={`px-2.5 py-0.5 font-mono text-[10px] uppercase font-bold border ${
                  ep.isCurrent
                    ? 'border-emerald-500 bg-emerald-950 text-emerald-300 shadow-[0_0_10px_rgba(16,185,129,0.5)]'
                    : ep.status === 'COMPLETED'
                    ? 'border-stone-700 bg-stone-900 text-stone-400'
                    : 'border-amber-700 bg-amber-950/60 text-amber-300'
                }`}>
                  {ep.tag}
                </span>
              </div>
            </div>

            {/* Episode Main Title */}
            <div className="mb-3">
              <div className="font-mono text-xs text-stone-400 uppercase tracking-widest">
                {ep.institution} {ep.degree ? `— ${ep.degree}` : ''}
              </div>
              <h3 className={`font-heading font-black text-2xl sm:text-3xl uppercase tracking-wider mt-1 ${
                ep.isCurrent ? 'text-amber-400' : 'text-white'
              }`}>
                “{ep.title}”
              </h3>
            </div>

            {/* Summary */}
            <p className="font-body text-stone-300 text-sm sm:text-base leading-relaxed mb-5">
              {ep.summary}
            </p>

            {/* Syllabus / Focus areas */}
            <div className="space-y-2">
              <span className="font-mono text-[11px] text-stone-400 uppercase tracking-wider block">
                {ep.isCurrent ? 'ACTIVE EXPERIMENTAL CURRICULUM:' : 'SYNOPSIS MILESTONES:'}
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 font-mono text-xs">
                {ep.takeaways.map((item, itemIdx) => (
                  <div
                    key={itemIdx}
                    className={`flex items-center gap-2 p-2 border ${
                      ep.isCurrent
                        ? 'bg-black/60 border-emerald-900 text-emerald-300'
                        : 'bg-black/40 border-stone-900 text-stone-400'
                    }`}
                  >
                    {ep.isCurrent ? (
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    ) : ep.status === 'COMPLETED' ? (
                      <CheckCircle className="w-3.5 h-3.5 text-stone-500" />
                    ) : (
                      <Lock className="w-3 h-3 text-stone-600" />
                    )}
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Episode Status Footnote */}
            <div className="mt-5 pt-3 border-t border-stone-800/80 flex items-center justify-between text-[11px] font-mono text-stone-500">
              <span>{ep.timeframe}</span>
              <span className={ep.isCurrent ? 'text-emerald-400 font-bold' : ''}>
                {ep.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

