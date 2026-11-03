# 🧪 ANANYA SINGH — ALBUQUERQUE LAB PORTFOLIO
### A Breaking Bad-Inspired Cinematic Developer Experience

> **“NO GREAT DISCOVERY HAPPENS BY ACCIDENT.”**  
> *Engineering ideas. Testing possibilities. Building the future.*

---

## 🔬 Overview

This is a complete, immersive personal portfolio website for **Ananya Singh** (First-Year B.Tech student at **Newton School of Technology**). Inspired by the TV series *Breaking Bad*, the entire site reimagines a developer portfolio as a high-security chemistry laboratory hidden inside an RV in the Albuquerque desert.

Every section, interaction, sound effect, and visual element follows the atmosphere, periodic-table typography, and storytelling of the show—while keeping all academic credentials and technical skills 100% honest, beginner-focused, and ready to present to teachers and mentors.

---

## ⚡ Quick Start (Launch Locally)

To launch the portfolio locally on your machine, open your terminal inside this project directory (`/Users/ananyasingh/Desktop/Ananya`) and run:

```bash
# 1. Start the Vite development server
npm run dev
```

Then open your browser at:
👉 **`http://localhost:5173`**

To create an optimized production build:
```bash
npm run build
npm run preview
```

---

## 🧭 Laboratory Map & Architecture

### 1. Opening Sequence — The Chemistry Lab
- **Atmosphere**: Albuquerque desert sunset with the silhouette of the iconic 1986 Fleetwood Bounder RV and hanging yellow hazmat suits.
- **Terminal Boot**: Retro CRT boot animation:
  - `SYSTEM INITIALIZING...`
  - `LABORATORY ONLINE...`
  - `SUBJECT IDENTIFIED: ANANYA SINGH`
- **Element Reveal**: Ananya Singh revealed via periodic-table element tiles:
  - **`[33 As]` Arsenic** + **`[14 Si]` Silicon**
- **Headline**: *“NO GREAT DISCOVERY HAPPENS BY ACCIDENT.”*
- **Controls**: "ENTER THE LAB" with radioactive green glow + "Skip Intro" option.

### 2. The Control Panel HUD (Navigation)
- Top telemetry bar with live lab status:
  - `STATUS: OPERATIONAL` | `PURITY: 99.1%` | `TEMP: 78.4°C` | `PRESSURE: 1.18 ATM`
- CRT scanline overlay toggle (`CRT ON/OFF`)
- Master audio synthesizer toggle (`AUDIO ON/MUTE`)
- Quick-launch button for the hidden lab terminal

### 3. The Scientist — Personnel Dossier (About Me)
- Manila lab case file (`DOSSIER #ABQ-2024-AS`)
- Animated green laser scanning line
- Redacted text elements that declassify on hover or click
- Rubber stamps: `CLASSIFIED // EYES ONLY` and `LEVEL 1 CLEARANCE`
- Student ID badge with hazmat helmet avatar, barcode, and digital fingerprint
- Authentic first-year profile at **Newton School of Technology**

### 4. Chemistry — The Laboratory Bench (Skills)
Interactive laboratory workstations showcasing foundational engineering skills:
1. **Python Synthesis Station**: Interactive mini REPL with runnable code snippets for variables, thermal stability loops, and condition logic.
2. **Git & GitHub Station**: Sample tracking rack showing commit histories (`a91c4e`, `7b02d1`), branches, and pull requests.
3. **Linux & Terminal Station**: Laboratory computer terminal running simulated Unix commands (`ls -la`, `chmod +x`, shell scripts).
4. **Computer Systems Station**: Digital logic breadboard with interactive AND/OR gate truth tables and binary inputs.
5. **Artificial Intelligence Station**: Synaptic molecular network with clickable impulse activations.

### 5. Case Files — Classified Experiment Files (Projects)
Evidence folders pinned to a corkboard with warning labels and document stamps:
- **`EXP-001` — Python Algorithmic Foundations**: Beginner scripts covering variables, loops, conditionals, and math.
- **`EXP-002` — System Operations & Terminal Automation**: Command-line navigation, permissions, shell automation, and Git.
- **`EXP-003` — Engineering Workflows & Robotics Exploration**: System architecture, sensor telemetry, and agile sprints.
- Click any case file to open a full **Evidence Report** with objectives, concepts learned, source code preview, and repository links.

### 6. Origin Story — Episode Progression (Education)
Structured like a cinematic series episode guide:
- **S01E01**: *“PILOT: THE AWAKENING”* — Pre-Engineering Foundations.
- **S01E02**: *“THE BEGINNING”* — **Newton School of Technology, B.Tech First Year (Current Chapter)**.
- **S01E03**: *“CATALYST: SYSTEM ARCHITECTURES”* — Upcoming Year 2.
- **S02E01**: *“EMPIRE BUILDING: AI & AUTONOMOUS SYSTEMS”* — Future Roadmap.

### 7. Interactive Terminal — The Hidden Lab Computer (CLI)
A fully simulated CRT console accessible via the HUD or keyboard:
- Commands: `help`, `about`, `skills`, `projects`, `education`, `contact`, `status`, `clear`, `exit`
- **Secret Command**:
  ```bash
  chemistry
  ```
  Triggers a green chemical vapor reaction, audio hiss, and the quote:  
  *“Curiosity is the catalyst. Creation is the reaction.”*

### 8. Transmission — Contact Terminal
- Encrypted communication terminal inside the RV lab
- Direct beacons for:
  - Email: `ananya.singh@newtonschool.edu.in`
  - GitHub: `https://github.com/ananya-singh`
  - LinkedIn: `https://linkedin.com/in/ananya-singh`
- Interactive transmission dispatch form with audio confirmation
- Footer: *“THE EXPERIMENT CONTINUES.”*

---

## 🔊 Native Web Audio API Sound Synthesizer

The sound system uses browser-native **Web Audio API** oscillators and noise filters (no external audio files required, zero broken links):
- Ambient 55Hz laboratory electrical hum & lowpass drone
- High-frequency mechanical terminal keystrokes
- Geiger counter ionizing radiation crackles on classified file hover
- Chemical reaction sweep on secret commands
- **Audio is muted by default** to respect visitors and can be enabled with a single click.

---

## 🎨 Visual System & Technical Stack

- **Framework**: React 18 + Vite 6
- **Styling**: Tailwind CSS with custom palette (Desert Dusk, Chemical Green, Hazmat Yellow, Amber)
- **Typography**: Bebas Neue (Titles), Space Mono (Terminal/Data), Barlow Condensed (Headings), Inter (Body)
- **Icons**: Lucide React + Custom SVG icons
- **Visual FX**: Real-time 2D Canvas particles for chemical vapor and desert dust drift, CRT scanlines, and laser scanner beams.

