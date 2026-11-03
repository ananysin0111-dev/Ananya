import React, { useState } from 'react';
import ElementTile from './ElementTile';
import { labAudio } from '../utils/audio';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { 
  Radio, 
  Send, 
  Mail, 
  MapPin, 
  ShieldAlert, 
  CheckCircle2, 
  ExternalLink,
  Signal,
  Flame
} from 'lucide-react';

export default function TransmissionContact() {
  const [formData, setFormData] = useState({
    sender: '',
    frequency: '',
    message: ''
  });
  const [isTransmitting, setIsTransmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const revealRef = useScrollReveal();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.sender || !formData.frequency || !formData.message) return;

    labAudio.playClick();
    setIsTransmitting(true);

    setTimeout(() => {
      labAudio.playBootChime();
      setIsTransmitting(false);
      setIsSuccess(true);
      setFormData({ sender: '', frequency: '', message: '' });
      setTimeout(() => setIsSuccess(false), 6000);
    }, 1200);
  };

  return (
    <section id="transmission" ref={revealRef} className="reveal-on-scroll py-20 px-4 sm:px-6 max-w-7xl mx-auto select-none relative">
      {/* Top Hazard Warning Header */}
      <div className="flex items-center gap-3 mb-6">
        <div className="h-1 flex-1 hazard-stripe opacity-40" />
        <span className="font-mono text-xs uppercase tracking-widest text-amber-400 bg-amber-950/80 px-3 py-1 border border-amber-800">
          ALBUQUERQUE TRANSMITTER // SECURE LINK
        </span>
        <div className="h-1 flex-1 hazard-stripe opacity-40" />
      </div>

      <div className="text-center mb-14">
        <h2 className="font-heading font-black text-3xl sm:text-5xl uppercase tracking-wider text-white">
          READY FOR THE NEXT EXPERIMENT?
        </h2>
        <p className="font-mono text-xs sm:text-sm text-stone-400 mt-2 uppercase tracking-widest max-w-xl mx-auto">
          Transmit your inquiries, project ideas, or collaborative feedback directly into the laboratory terminal.
        </p>
      </div>

      {/* Main Terminal Box */}
      <div className="max-w-4xl mx-auto bg-[#0c120f] border-2 border-emerald-900/90 shadow-[0_15px_45px_rgba(0,0,0,0.9)] overflow-hidden">
        {/* Terminal Header */}
        <div className="bg-[#121c17] border-b border-emerald-800/80 px-6 py-3 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2 font-mono text-xs text-emerald-400">
            <Radio className="w-4 h-4 text-emerald-400 animate-pulse" />
            <span className="font-bold tracking-wider">SECURE RF TRANSMISSION PROTOCOL // 142.85 MHz</span>
          </div>

          <div className="flex items-center gap-2 font-mono text-xs text-amber-400">
            <Signal className="w-3.5 h-3.5" />
            <span>ENCRYPTION: 256-BIT SYMMETRIC</span>
          </div>
        </div>

        {/* Form and Transmission Channels */}
        <div className="p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Transmission Channel Links */}
          <div className="lg:col-span-5 space-y-6 font-mono text-xs">
            <div>
              <span className="text-emerald-400 font-bold uppercase tracking-wider block mb-2">
                DIRECT COMMUNICATION BEACONS:
              </span>
              <p className="font-body text-stone-300 text-sm leading-relaxed mb-4">
                Available for collaborative student projects, technical queries, or academic conversations.
              </p>
            </div>

            {/* Email Beacon */}
            <a
              href="mailto:ananya.singh@newtonschool.edu.in"
              className="flex items-center justify-between p-3.5 bg-black/70 border border-stone-800 hover:border-emerald-500 hover:bg-emerald-950/30 transition-all group"
            >
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-emerald-400" />
                <div>
                  <div className="text-[10px] text-stone-500 uppercase tracking-wider">CAMPUS DISPATCH</div>
                  <div className="text-white text-xs font-bold group-hover:text-emerald-300 transition-colors">
                    ananya.singh@newtonschool.edu.in
                  </div>
                </div>
              </div>
              <ExternalLink className="w-3.5 h-3.5 text-stone-600 group-hover:text-emerald-400" />
            </a>

            {/* GitHub Beacon */}
            <a
              href="https://github.com/ananya-singh"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between p-3.5 bg-black/70 border border-stone-800 hover:border-emerald-500 hover:bg-emerald-950/30 transition-all group"
            >
              <div className="flex items-center gap-3">
                <GithubIcon className="w-4 h-4 text-amber-400" />
                <div>
                  <div className="text-[10px] text-stone-500 uppercase tracking-wider">VERSION CONTROL HUB</div>
                  <div className="text-white text-xs font-bold group-hover:text-amber-300 transition-colors">
                    github.com/ananya-singh
                  </div>
                </div>
              </div>
              <ExternalLink className="w-3.5 h-3.5 text-stone-600 group-hover:text-amber-400" />
            </a>

            {/* LinkedIn Beacon */}
            <a
              href="https://linkedin.com/in/ananya-singh"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between p-3.5 bg-black/70 border border-stone-800 hover:border-emerald-500 hover:bg-emerald-950/30 transition-all group"
            >
              <div className="flex items-center gap-3">
                <LinkedinIcon className="w-4 h-4 text-cyan-400" />
                <div>
                  <div className="text-[10px] text-stone-500 uppercase tracking-wider">PROFESSIONAL DOSSIER</div>
                  <div className="text-white text-xs font-bold group-hover:text-cyan-300 transition-colors">
                    linkedin.com/in/ananya-singh
                  </div>
                </div>
              </div>
              <ExternalLink className="w-3.5 h-3.5 text-stone-600 group-hover:text-cyan-400" />
            </a>

            {/* Lab Coordinates Box */}
            <div className="p-3 bg-stone-900/60 border border-stone-800 text-[11px] text-stone-400 space-y-1">
              <div className="flex items-center gap-1.5 text-emerald-400 font-bold">
                <MapPin className="w-3.5 h-3.5" />
                <span>PHYSICAL DISPATCH LOCATION:</span>
              </div>
              <div>Newton School of Technology // B.Tech Division</div>
              <div className="text-stone-500 text-[10px]">Albuquerque Coordinates: 35.0844° N, 106.6504° W</div>
            </div>
          </div>

          {/* Interactive Secure Transmission Form */}
          <div className="lg:col-span-7">
            <form onSubmit={handleSubmit} className="space-y-4 font-mono text-xs">
              <div>
                <label className="block text-stone-300 uppercase tracking-wider mb-1.5">
                  OPERATOR IDENTIFIER (YOUR NAME):
                </label>
                <input
                  type="text"
                  required
                  value={formData.sender}
                  onChange={(e) => setFormData({ ...formData, sender: e.target.value })}
                  placeholder="e.g. Walter White / Dr. Aris"
                  className="w-full bg-black/90 border border-stone-800 focus:border-emerald-500 px-3 py-2 text-stone-200 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-stone-300 uppercase tracking-wider mb-1.5">
                  RETURN FREQUENCY (EMAIL / CONTACT):
                </label>
                <input
                  type="email"
                  required
                  value={formData.frequency}
                  onChange={(e) => setFormData({ ...formData, frequency: e.target.value })}
                  placeholder="e.g. investigator@albuquerque.gov"
                  className="w-full bg-black/90 border border-stone-800 focus:border-emerald-500 px-3 py-2 text-stone-200 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-stone-300 uppercase tracking-wider mb-1.5">
                  TRANSMISSION PAYLOAD (MESSAGE):
                </label>
                <textarea
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Enter your message, project idea, or lab review..."
                  className="w-full bg-black/90 border border-stone-800 focus:border-emerald-500 px-3 py-2 text-stone-200 focus:outline-none resize-none"
                />
              </div>

              {isSuccess && (
                <div className="p-3 bg-emerald-950/80 border border-emerald-500 text-emerald-300 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>TRANSMISSION ACKNOWLEDGED. Signal logged into laboratory ledger.</span>
                </div>
              )}

              <button
                type="submit"
                disabled={isTransmitting}
                className="w-full py-3 bg-emerald-600 hover:bg-emerald-500 disabled:bg-stone-800 text-black font-heading font-black text-lg uppercase tracking-wider flex items-center justify-center gap-2 transition-colors shadow-[0_0_20px_rgba(16,185,129,0.4)]"
              >
                <Send className="w-4 h-4" />
                <span>{isTransmitting ? 'ENCRYPTING & TRANSMITTING...' : 'DISPATCH TRANSMISSION'}</span>
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Cinematic Sunset Banner & Footer */}
      <div className="mt-20 pt-10 border-t border-stone-900 text-center font-mono">
        <div className="flex items-center justify-center gap-2 mb-4">
          <ElementTile symbol="As" number={33} name="Arsenic" mass="74.92" size="sm" variant="toxic" />
          <ElementTile symbol="Si" number={14} name="Silicon" mass="28.08" size="sm" variant="toxic" />
        </div>

        <h3 className="font-heading font-black text-2xl sm:text-4xl uppercase tracking-widest text-amber-400 mb-2">
          “THE EXPERIMENT CONTINUES.”
        </h3>

        <p className="text-xs text-stone-400 max-w-md mx-auto leading-relaxed mb-4">
          Ananya Singh — First-Year B.Tech in Computer Science & Engineering.
          Portfolio inspired by Breaking Bad. All academic details genuine and unembellished.
        </p>

        <div className="text-[11px] text-stone-600 uppercase tracking-widest">
          © {new Date().getFullYear()} ANANYA SINGH // NEWTON SCHOOL OF TECHNOLOGY
        </div>
      </div>
    </section>
  );
}
