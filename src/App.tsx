import profile from "./assets/profile.jpg";
import { useState, useEffect, type ComponentType, type Dispatch, type FormEvent, type SetStateAction, type SVGProps } from 'react';
import { 
  ExternalLink, 
  Code2, 
  Sparkles, 
  Terminal, 
  Brain, 
  Cpu, 
  Layers, 
  Download, 
  ChevronRight, 
  CircleDot,
  CheckCircle2,
  Send,
  BookOpen,
  X,
  Copy,
  Check,
  Sun,
  Moon,
  FolderGit2,
  Calendar,
  Briefcase,
  TrendingUp,
  CheckCircle
} from 'lucide-react';

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const globalStyles = `
@keyframes float {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-10px) rotate(1deg); }
}

@keyframes pulseGlow {
  0%, 100% { opacity: 0.4; transform: scale(1); }
  50% { opacity: 0.8; transform: scale(1.08); }
}

@keyframes shimmer {
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}

.animate-pulse-glow {
  animation: pulseGlow 4s ease-in-out infinite;
}

.shimmer-text {
  background: linear-gradient(90deg, #93c5fd 0%, #ffffff 50%, #c084fc 100%);
  background-size: 200% auto;
  color: transparent;
  -webkit-background-clip: text;
  animation: shimmer 5s linear infinite;
}

.light-mode .shimmer-text {
  background: linear-gradient(90deg, #1d4ed8 0%, #4f46e5 50%, #9333ea 100%);
  background-size: 200% auto;
  color: transparent;
  -webkit-background-clip: text;
}

@keyframes cursorBlink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}

.animate-cursor {
  animation: cursorBlink 0.8s infinite;
}

.glass-card {
  background: rgba(18, 22, 33, 0.6);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.08);
}

.glass-card:hover {
  border-color: rgba(255, 255, 255, 0.2);
  box-shadow: 0 10px 30px -10px rgba(124, 58, 237, 0.15);
}

.light-mode .glass-card {
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(0, 0, 0, 0.08);
  box-shadow: 0 4px 20px -2px rgba(0, 0, 0, 0.05);
}

.light-mode .glass-card:hover {
  border-color: rgba(124, 58, 237, 0.3);
  box-shadow: 0 10px 30px -10px rgba(124, 58, 237, 0.12);
}

html {
  scroll-behavior: smooth;
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 8px;
}
::-webkit-scrollbar-track {
  background: #090d16;
}
::-webkit-scrollbar-thumb {
  background: #1e293b;
  border-radius: 4px;
}
::-webkit-scrollbar-thumb:hover {
  background: #334155;
}

.light-mode ::-webkit-scrollbar-track {
  background: #f1f5f9;
}
.light-mode ::-webkit-scrollbar-thumb {
  background: #cbd5e1;
}
.light-mode ::-webkit-scrollbar-thumb:hover {
  background: #94a3b8;
}
`;

const KaggleIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.825 23.859h-3.225l-5.4-8.044-2.5 2.45v5.594H4.5V.141h3.2v12.25l7.325-12.25h3.65l-6.85 11.2 7 12.518z" />
  </svg>
);

type IconType = ComponentType<SVGProps<SVGSVGElement>>;

type Project = {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  tech: string[];
  github: string;
  demo: string;
  gradient: string;
  icon: IconType;
};

type AnimatedHeadlineProps = { isDark: boolean };
type NavbarProps = { activeSection: string; setActiveSection: (id: string) => void; isDark: boolean; setIsDark: Dispatch<SetStateAction<boolean>>; };
// type HeroProps = { onOpenResume: () => void; isDark: boolean };
type AboutProps = { isDark: boolean };
type SkillsProps = { isDark: boolean };
type ProjectsProps = { onSelectProject: (project: Project) => void; isDark: boolean };
type ProjectModalProps = { project: Project | null; onClose: () => void; isDark: boolean };
type ExperienceProps = { isDark: boolean };
type LearningRoadmapProps = { isDark: boolean };
type ContactProps = { isDark: boolean };
type FooterProps = { isDark: boolean };
// type ResumeModalProps = { isOpen: boolean; onClose: () => void; isDark: boolean };

const AnimatedHeadline = ({ isDark }: AnimatedHeadlineProps) => {
  const titles = ["Hey, I'm Ved", "Hey, I'm Vedant"];
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentTitle = titles[textIndex];
    let speed = isDeleting ? 40 : 90;

    if (!isDeleting && charIndex === currentTitle.length) {
      speed = 2200;
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setTextIndex((prev) => (prev + 1) % titles.length);
      speed = 400;
    }

    const timeout = setTimeout(() => {
      setCharIndex((prev) => prev + (isDeleting ? -1 : 1));
      if (!isDeleting && charIndex === currentTitle.length) {
        setIsDeleting(true);
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, textIndex, titles]);

  const currentString = titles[textIndex].substring(0, charIndex);
  const prefix = "Hey, I'm ";
  const namePart = currentString.startsWith(prefix) ? currentString.slice(prefix.length) : currentString;

  return (
    <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-4 leading-tight min-h-[1.2em] flex items-center flex-wrap ${
      isDark ? 'text-white' : 'text-slate-900'
    }`}>
      {currentString.length <= prefix.length ? (
        <span>{currentString}</span>
      ) : (
        <>
          <span className={isDark ? 'text-white' : 'text-slate-900'}>Hey, I'm&nbsp;</span>
          <span className="shimmer-text font-extrabold drop-shadow-[0_0_20px_rgba(168,85,247,0.4)]">
            {namePart}
          </span>
        </>
      )}
      <span className="inline-block w-[3px] h-[0.8em] bg-cyan-400 ml-1.5 rounded-full animate-cursor align-middle shadow-[0_0_10px_#22d3ee]" />
    </h1>
  );
};

const Navbar = ({ activeSection, setActiveSection, isDark, setIsDark }: NavbarProps) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'learning', label: 'Roadmap' },
    { id: 'contact', label: 'Contact' }
  ];

  const scrollTo = (id: string) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? isDark 
          ? 'py-3 bg-[#090d16]/80 backdrop-blur-xl border-b border-white/10 shadow-2xl' 
          : 'py-3 bg-white/80 backdrop-blur-xl border-b border-slate-200/80 shadow-md'
        : 'py-5 bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Brand Logo */}
        <a 
          href="#hero" 
          onClick={(e) => { e.preventDefault(); scrollTo('hero'); }}
          className="flex items-center gap-2.5 group cursor-pointer"
        >
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-violet-600 via-indigo-500 to-cyan-400 p-[1px] transition-transform duration-300 group-hover:scale-105">
            <div className={`w-full h-full rounded-[11px] flex items-center justify-center ${isDark ? 'bg-[#0b0f19]' : 'bg-white'}`}>
              <span className="font-mono font-bold text-sm bg-gradient-to-r from-violet-600 to-cyan-500 bg-clip-text text-transparent">
                V
              </span>
            </div>
          </div>
          <span className={`font-medium text-sm sm:text-base tracking-tight transition-colors ${
            isDark ? 'text-slate-200 group-hover:text-white' : 'text-slate-800 group-hover:text-black'
          }`}>
            Vedant
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className={`hidden md:flex items-center gap-1 p-1.5 rounded-full backdrop-blur-md border ${
          isDark ? 'bg-slate-900/60 border-white/10' : 'bg-slate-200/60 border-slate-300/60'
        }`}>
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                activeSection === item.id 
                  ? isDark 
                    ? 'bg-white/10 text-white shadow-sm border border-white/10' 
                    : 'bg-white text-slate-900 shadow-sm border border-slate-200'
                  : isDark 
                    ? 'text-slate-400 hover:text-slate-200 hover:bg-white/5' 
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-300/40'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Status Badge + Mode Switcher */}
        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 text-xs font-medium">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>Open to AI Collabs</span>
          </div>

          <button
            onClick={() => setIsDark(!isDark)}
            className={`p-2 rounded-xl border transition-all cursor-pointer flex items-center justify-center ${
              isDark 
                ? 'bg-slate-900 border-white/10 text-amber-400 hover:bg-slate-800' 
                : 'bg-slate-100 border-slate-300 text-indigo-600 hover:bg-slate-200'
            }`}
            title={isDark ? "Switch to Bright Mode" : "Switch to Dark Mode"}
            aria-label="Toggle Bright/Dark Theme"
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`md:hidden p-2 rounded-lg border focus:outline-none ${
              isDark ? 'bg-slate-900 border-white/10 text-slate-300 hover:text-white' : 'bg-slate-100 border-slate-300 text-slate-700 hover:text-slate-900'
            }`}
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={20} /> : (
              <div className="space-y-1.5 w-5">
                <span className={`block h-0.5 w-full rounded ${isDark ? 'bg-slate-300' : 'bg-slate-700'}`}></span>
                <span className={`block h-0.5 w-3/4 rounded ${isDark ? 'bg-slate-300' : 'bg-slate-700'}`}></span>
                <span className={`block h-0.5 w-full rounded ${isDark ? 'bg-slate-300' : 'bg-slate-700'}`}></span>
              </div>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className={`md:hidden mt-2 px-4 py-4 border-b backdrop-blur-2xl transition-all ${
          isDark ? 'bg-[#0d121f] border-white/10' : 'bg-white border-slate-200'
        }`}>
          <div className="flex flex-col gap-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`text-left px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                  activeSection === item.id 
                    ? isDark 
                      ? 'bg-violet-600/20 text-violet-300 border border-violet-500/30' 
                      : 'bg-violet-50 text-violet-700 border border-violet-200'
                    : isDark 
                      ? 'text-slate-400 hover:bg-slate-800/60 hover:text-slate-200' 
                      : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

interface HeroProps {
  isDark: boolean;
}
const Hero = ({  isDark }: HeroProps) => {
  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      <div className={`absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] blur-[120px] rounded-full pointer-events-none animate-pulse-glow ${
        isDark ? 'bg-violet-600/15' : 'bg-violet-400/20'
      }`}></div>
      <div className={`absolute top-1/3 left-1/3 w-[300px] h-[250px] blur-[100px] rounded-full pointer-events-none ${
        isDark ? 'bg-cyan-500/10' : 'bg-cyan-400/15'
      }`}></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-14">

          {/* Avatar with Glow */}
          <div className="relative group shrink-0">
            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-violet-600 via-indigo-500 to-cyan-400 opacity-70 blur-md group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse-glow"></div>

            <div className={`relative w-32 h-32 sm:w-36 sm:h-36 rounded-full p-[3px] backdrop-blur-xl animate-float ${
              isDark ? 'bg-gradient-to-b from-white/20 to-white/5' : 'bg-gradient-to-b from-black/10 to-black/5'
            }`}>
              <div className={`w-full h-full rounded-full overflow-hidden flex items-center justify-center border relative ${
                isDark ? 'bg-[#0b0e17] border-white/10' : 'bg-slate-50 border-slate-200'
              }`}>
                <div className={`absolute inset-0 flex items-center justify-center ${
                  isDark ? 'bg-gradient-to-tr from-violet-900/40 via-slate-900 to-cyan-900/30' : 'bg-gradient-to-tr from-violet-100 via-slate-100 to-cyan-100'
                }`}>
                  <div className="text-center p-4">
                    <div className="relative">
                      <div className="relative w-36 h-36 rounded-full p-1 bg-gradient-to-r from-violet-500 via-blue-500 to-cyan-400 animate-pulse">
                            <img
                              src={profile}
                              alt="Vedant"
                              className="w-full h-full rounded-full object-cover border-4 border-slate-900"
                            />
                          </div>
                    </div>
                  </div>
                </div>

                {/* <div className={`absolute bottom-2 px-3 py-1 rounded-full border backdrop-blur-md text-[10px] font-mono shadow-xl flex items-center gap-1.5 ${
                  isDark ? 'bg-slate-900/90 border-white/15 text-cyan-300' : 'bg-white/90 border-slate-200 text-violet-700'
                }`}>
                  <Sparkles size={11} className={isDark ? "text-cyan-400" : "text-violet-600"} />
                  <span>AI / ML Dev</span>
                </div> */}
              </div>
            </div>
          </div>

          {/* Hero Content Text */}
          <div className="flex-1 text-center md:text-left">
            <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-xs font-mono mb-5 ${
              isDark ? 'bg-slate-800/80 border-slate-700/60 text-slate-300' : 'bg-slate-100 border-slate-300 text-slate-700'
            }`}>
              <Terminal size={14} className="text-violet-500" />
              <span>hello_world.py</span>
            </div>

            <AnimatedHeadline isDark={isDark} />

            <p className={`text-lg sm:text-xl font-light max-w-2xl mb-4 leading-relaxed ${
              isDark ? 'text-slate-300' : 'text-slate-700'
            }`}>
              Engineering intelligent AI solutions and building machine learning models that solve real-world problems.
            </p>

            <p className={`text-sm max-w-xl mb-8 leading-relaxed ${
              isDark ? 'text-slate-400' : 'text-slate-600'
            }`}>
              Passionate about turning raw data into practical AI solutions. Currently focused on expanding my depth in Generative AI, LLMs, and RAG architectures.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 mb-8">
              <a
                href="#projects"
                className={`px-6 py-3 rounded-xl font-medium text-sm transition-all shadow-lg flex items-center gap-2 group cursor-pointer ${
                  isDark ? 'bg-white text-slate-950 hover:bg-slate-200' : 'bg-slate-900 text-white hover:bg-slate-800'
                }`}
              >
                <span>View Projects</span>
                <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                  href="/Vedant_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`px-6 py-3 rounded-xl border font-medium text-sm transition-all flex items-center gap-2 cursor-pointer ${
                    isDark
                      ? "bg-slate-900/80 text-slate-200 border-white/10 hover:bg-slate-800"
                      : "bg-white text-slate-700 border-slate-300 hover:bg-slate-50"
                  }`}
                >
                  <Download size={16} className="text-violet-500" />
                  <span>Resume</span>
                </a>
            </div>

            {/* Social Icons Bar */}
            <div className="flex items-center justify-center md:justify-start gap-3">
              {[
                { label: 'GitHub', href: 'https://github.com/vedddev', icon: FaGithub, color: 'hover:text-slate-900 dark:hover:text-white' },
                { label: 'LinkedIn', href: 'https://www.linkedin.com/in/veddev/', icon: FaLinkedin, color: 'hover:text-blue-500' },
                { label: 'Kaggle', href: 'https://www.kaggle.com/', icon: KaggleIcon, color: 'hover:text-cyan-500' },
                { label: 'Email', href: 'mailto:vedantshelake28@gmail.com', icon: MdEmail, color: 'hover:text-emerald-500' }
              ].map((social, idx) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={social.label}
                    className={`p-2.5 rounded-xl border transition-all hover:scale-105 ${
                      isDark 
                        ? 'bg-slate-900/50 border-white/10 text-slate-400 hover:bg-slate-800' 
                        : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-100'
                    } ${social.color}`}
                  >
                    <IconComponent size={18} />
                  </a>
                );
              })}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

const About = ({ isDark }: AboutProps) => {
  return (
    <section id="about" className={`py-20 border-t relative ${isDark ? 'border-white/5' : 'border-slate-200'}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        <div className="flex items-center gap-2 text-violet-500 font-mono text-xs tracking-wider uppercase mb-3">
          <Brain size={14} />
          <span>01. About Me</span>
        </div>

        <h2 className={`text-2xl sm:text-3xl font-bold tracking-tight mb-8 ${isDark ? 'text-white' : 'text-slate-900'}`}>
          Driven by curiosity in Machine Learning and AI engineering.
        </h2>

        <div className={`glass-card p-6 sm:p-8 rounded-2xl space-y-5 leading-relaxed text-sm sm:text-base font-light ${
          isDark ? 'text-slate-300' : 'text-slate-700'
        }`}>
          <p>
            I am Vedant, an AI enthusiast and developer passionate about building Machine Learning applications that solve tangible problems. My approach centers on clarity, practical utility, and modern engineering practices.
          </p>
          <p>
            Rather than relying solely on manual iterations, I actively integrate modern AI tools into my daily workflow to speed up development, debug complex pipelines, generate cleaner code, and streamline project architecture.
          </p>
          <p className={isDark ? 'text-slate-400' : 'text-slate-600'}>
            I am continuously learning and growing—presently diving deep into Generative AI, Large Language Models (LLMs), Retrieval-Augmented Generation (RAG), and Advanced Prompt Engineering through hands-on project building.
          </p>
        </div>

        {/* Highlight Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
          <div className={`p-4 rounded-xl border flex items-center gap-3 ${
            isDark ? 'bg-slate-900/40 border-white/5' : 'bg-white border-slate-200/80 shadow-sm'
          }`}>
            <div className="p-2.5 rounded-lg bg-violet-500/10 text-violet-500">
              <Cpu size={20} />
            </div>
            <div>
              <div className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>Focus</div>
              <div className={`text-sm font-medium ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>Applied ML & Vision</div>
            </div>
          </div>

          <div className={`p-4 rounded-xl border flex items-center gap-3 ${
            isDark ? 'bg-slate-900/40 border-white/5' : 'bg-white border-slate-200/80 shadow-sm'
          }`}>
            <div className="p-2.5 rounded-lg bg-cyan-500/10 text-cyan-500">
              <Sparkles size={20} />
            </div>
            <div>
              <div className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>Workflow</div>
              <div className={`text-sm font-medium ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>AI-Augmented Dev</div>
            </div>
          </div>

          <div className={`p-4 rounded-xl border flex items-center gap-3 ${
            isDark ? 'bg-slate-900/40 border-white/5' : 'bg-white border-slate-200/80 shadow-sm'
          }`}>
            <div className="p-2.5 rounded-lg bg-emerald-500/10 text-emerald-500">
              <BookOpen size={20} />
            </div>
            <div>
              <div className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>Current Phase</div>
              <div className={`text-sm font-medium ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>Exploring GenAI & RAG</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

const Skills = ({ isDark }: SkillsProps) => {
  const skillList = [
    { name: 'Python', category: 'Core', highlight: true },
    { name: 'Machine Learning', category: 'Core', highlight: true },
    { name: 'Deep Learning', category: 'Core', highlight: false },
    { name: 'NLP', category: 'Specialization', highlight: false },
    { name: 'EDA', category: 'Data Analysis', highlight: false },
    { name: 'Feature Engineering', category: 'Data Analysis', highlight: false },
    { name: 'Flask', category: 'Deployment', highlight: false },
    { name: 'Generative AI (Learning)', category: 'Next-Gen', learning: true },
    { name: 'RAG (Learning)', category: 'Next-Gen', learning: true }
  ];

  return (
    <section id="skills" className={`py-20 border-t relative ${isDark ? 'border-white/5' : 'border-slate-200'}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        <div className="flex items-center gap-2 text-cyan-500 font-mono text-xs tracking-wider uppercase mb-3">
          <Code2 size={14} />
          <span>02. Tech Stack</span>
        </div>

        <h2 className={`text-2xl sm:text-3xl font-bold tracking-tight mb-3 ${isDark ? 'text-white' : 'text-slate-900'}`}>
          Technical Toolkit
        </h2>
        <p className={`text-sm mb-8 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
          Core concepts, frameworks, and methodologies I work with and actively explore.
        </p>

        <div className="flex flex-wrap gap-3">
          {skillList.map((skill, index) => (
            <div
              key={index}
              className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 flex items-center gap-2.5 border ${
                skill.learning
                  ? isDark 
                    ? 'bg-gradient-to-r from-violet-950/40 to-indigo-950/40 border-violet-500/30 text-violet-300 hover:border-violet-400' 
                    : 'bg-violet-50 border-violet-200 text-violet-700 hover:border-violet-300'
                  : skill.highlight
                  ? isDark 
                    ? 'bg-slate-800/80 border-slate-700 text-slate-100 hover:border-cyan-500/40' 
                    : 'bg-slate-100 border-slate-300 text-slate-900 hover:border-cyan-500'
                  : isDark 
                    ? 'bg-slate-900/50 border-white/10 text-slate-300 hover:border-white/20' 
                    : 'bg-white border-slate-200 text-slate-700 hover:border-slate-300 shadow-sm'
              }`}
            >
              <CircleDot size={12} className={skill.learning ? "text-violet-500 animate-pulse" : "text-cyan-500"} />
              <span>{skill.name}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

const Projects = ({ onSelectProject, isDark }: ProjectsProps) => {
  const projectList = [
    {
      id: 'traffic',
      title: 'AI Traffic Management System',
      shortDesc: 'Real-time vehicle detection and queue analysis using YOLO and OpenCV.',
      fullDesc: 'An intelligent computer vision system that monitors traffic flow in real-time, counts vehicles, estimates congestion levels, and dynamically calculates signal durations using custom YOLO models and OpenCV pipelines.',
      tech: ['Python', 'YOLO', 'OpenCV', 'Flask'],
      github: 'https://github.com',
      demo: 'https://demo.example.com',
      gradient: 'from-violet-600 to-indigo-800',
      icon: Cpu
    },
    {
      id: 'fakenews',
      title: 'Fake News Detection',
      shortDesc: 'NLP model for automated fake news classification with probability scoring.',
      fullDesc: 'End-to-end natural language processing pipeline that cleans, tokenizes, and classifies textual news articles to determine credibility and flag potential misinformation.',
      tech: ['Python', 'NLP', 'Scikit-Learn', 'EDA'],
      github: 'https://github.com',
      demo: 'https://demo.example.com',
      gradient: 'from-blue-600 to-cyan-800',
      icon: Layers
    },
    {
      id: 'irrigation',
      title: 'Irrigation Need Prediction',
      shortDesc: 'Machine Learning model predicting optimal crop irrigation schedules.',
      fullDesc: 'Predictive analytics application leveraging soil moisture levels, ambient temperature, humidity, and weather forecasts to predict precise water requirements for smart agriculture.',
      tech: ['Python', 'Machine Learning', 'EDA', 'Feature Engineering'],
      github: 'https://github.com',
      demo: 'https://demo.example.com',
      gradient: 'from-emerald-600 to-teal-800',
      icon: Brain
    }
  ];

  return (
    <section id="projects" className={`py-20 border-t relative ${isDark ? 'border-white/5' : 'border-slate-200'}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        <div className="flex items-center gap-2 text-violet-500 font-mono text-xs tracking-wider uppercase mb-3">
          <FolderGit2 size={14} />
          <span>03. Featured Projects</span>
        </div>

        <h2 className={`text-2xl sm:text-3xl font-bold tracking-tight mb-3 ${isDark ? 'text-white' : 'text-slate-900'}`}>
          Hands-on AI & ML Applications
        </h2>
        <p className={`text-sm mb-10 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
          Practical machine learning solutions built to tackle real-world challenges.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projectList.map((project) => {
            const IconComp = project.icon;
            return (
              <div
                key={project.id}
                onClick={() => onSelectProject(project)}
                className={`glass-card rounded-2xl overflow-hidden cursor-pointer flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 group border ${
                  isDark ? 'border-white/10' : 'border-slate-200'
                }`}
              >
                {/* Decorative header thumbnail */}
                <div className={`h-36 bg-gradient-to-br ${project.gradient} p-4 flex items-end justify-between relative overflow-hidden`}>
                  <div className="absolute top-3 right-3 p-2 rounded-xl bg-black/30 backdrop-blur-md text-white/90">
                    <IconComp size={20} />
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-white/80 bg-black/20 backdrop-blur-sm px-2.5 py-1 rounded-md">
                    Featured Project
                  </span>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className={`text-lg font-bold mb-2 group-hover:text-violet-400 transition-colors ${
                      isDark ? 'text-white' : 'text-slate-900'
                    }`}>
                      {project.title}
                    </h3>

                    <p className={`text-xs leading-relaxed mb-4 line-clamp-2 ${
                      isDark ? 'text-slate-400' : 'text-slate-600'
                    }`}>
                      {project.shortDesc}
                    </p>
                  </div>

                  <div>
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.tech.map((t, i) => (
                        <span 
                          key={i} 
                          className={`text-[10px] font-mono px-2 py-0.5 rounded-md ${
                            isDark ? 'bg-slate-800 text-slate-300 border border-white/5' : 'bg-slate-100 text-slate-700 border border-slate-200'
                          }`}
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className={`flex items-center justify-between pt-3 border-t text-xs font-medium ${
                      isDark ? 'border-white/5 text-slate-400' : 'border-slate-200 text-slate-600'
                    }`}>
                      <span className="flex items-center gap-1 group-hover:text-violet-400 transition-colors">
                        <span>Details</span>
                        <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                      </span>
                      <div className="flex items-center gap-2">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="p-1.5 rounded-lg hover:bg-slate-800/50 hover:text-white transition-colors"
                          title="View Source on GitHub"
                        >
                          <FaGithub size={15} />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

const ProjectModal = ({ project, onClose, isDark }: ProjectModalProps) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md">
      <div className={`glass-card max-w-xl w-full rounded-2xl overflow-hidden border p-6 relative max-h-[90vh] overflow-y-auto ${
        isDark ? 'border-white/15' : 'border-slate-200 bg-white'
      }`}>
        <button
          onClick={onClose}
          className={`absolute top-4 right-4 p-1.5 rounded-lg ${
            isDark ? 'bg-slate-800 text-slate-400 hover:text-white' : 'bg-slate-100 text-slate-600 hover:text-black'
          }`}
        >
          <X size={18} />
        </button>

        <div className="inline-flex items-center gap-2 text-violet-500 font-mono text-xs uppercase mb-2">
          <FolderGit2 size={14} />
          <span>Project Overview</span>
        </div>

        <h3 className={`text-2xl font-bold mb-3 ${isDark ? 'text-white' : 'text-slate-900'}`}>{project.title}</h3>

        <p className={`text-sm leading-relaxed mb-6 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
          {project.fullDesc}
        </p>

        <div className="mb-6">
          <h4 className={`text-xs font-mono uppercase mb-2 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>Technologies Used</h4>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t, i) => (
              <span key={i} className={`text-xs px-3 py-1 rounded-lg border font-mono ${
                isDark ? 'bg-slate-800/80 border-white/10 text-cyan-300' : 'bg-slate-100 border-slate-300 text-violet-700'
              }`}>
                {t}
              </span>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-3 pt-4 border-t border-slate-700/40">
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="flex-1 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-medium flex items-center justify-center gap-2 border border-white/10"
          >
            <FaGithub size={15} />
            <span>GitHub Repo</span>
          </a>
          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            className="flex-1 py-2.5 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white text-xs font-medium flex items-center justify-center gap-2 shadow-md"
          >
            <ExternalLink size={15} />
            <span>Live Demo</span>
          </a>
        </div>
      </div>
    </div>
  );
};

const Experience = ({ isDark }: ExperienceProps) => {
  const expItems = [
    {
      role: 'Machine Learning Developer',
      type: 'Self-Directed Projects',
      period: '2025 - Present',
      desc: 'Architected and deployed applied ML models including real-time vehicle monitoring, NLP news veracity classification, and agricultural predictive analytics.',
      highlights: ['Computer Vision (YOLO)', 'NLP pipelines', 'Feature engineering']
    },
    {
      role: 'Kaggle Contributor',
      type: 'Open Science Community',
      period: '2025 - Present',
      desc: 'Actively participating in datasets exploration, benchmark notebooks creation, and predictive modeling challenges to continuously refine analytical skills.',
      highlights: ['Exploratory Data Analysis', 'Model optimization', 'Dataset curation']
    }
  ];

  return (
    <section id="experience" className={`py-20 border-t relative ${isDark ? 'border-white/5' : 'border-slate-200'}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        <div className="flex items-center gap-2 text-cyan-500 font-mono text-xs tracking-wider uppercase mb-3">
          <Briefcase size={14} />
          <span>04. Experience</span>
        </div>

        <h2 className={`text-2xl sm:text-3xl font-bold tracking-tight mb-8 ${isDark ? 'text-white' : 'text-slate-900'}`}>
          Hands-on Journey
        </h2>

        <div className="space-y-6 relative before:absolute before:inset-0 before:left-3.5 before:w-0.5 before:bg-gradient-to-b before:from-violet-500/50 before:to-transparent">
          {expItems.map((item, idx) => (
            <div key={idx} className="relative pl-10">
              <div className="absolute left-1.5 top-1.5 w-4 h-4 rounded-full bg-violet-600 border-4 border-[#090d16] shadow-md" />
              
              <div className="glass-card p-6 rounded-2xl">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                  <h3 className={`text-base font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    {item.role} <span className="text-violet-500 font-normal">({item.type})</span>
                  </h3>
                  <div className="flex items-center gap-1.5 text-xs font-mono text-cyan-400">
                    <Calendar size={13} />
                    <span>{item.period}</span>
                  </div>
                </div>

                <p className={`text-xs leading-relaxed mb-4 ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                  {item.desc}
                </p>

                <div className="flex flex-wrap gap-2">
                  {item.highlights.map((h, i) => (
                    <span key={i} className={`text-[10px] font-mono px-2.5 py-1 rounded-md border ${
                      isDark ? 'bg-slate-900/80 border-white/5 text-slate-300' : 'bg-slate-100 border-slate-200 text-slate-700'
                    }`}>
                      #{h}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

const LearningRoadmap = ({ isDark }: LearningRoadmapProps) => {
  const roadmapItems = [
    { title: 'Python', status: 'Proficient', level: 'Core Foundation' },
    { title: 'Machine Learning', status: 'Proficient', level: 'Classical Algorithmic Modeling' },
    { title: 'Deep Learning', status: 'Intermediate', level: 'Neural Networks & PyTorch' },
    { title: 'NLP', status: 'Intermediate', level: 'Text Processing & Classification' },
    { title: 'LLMs', status: 'Actively Learning', level: 'Prompting & Fine-tuning concepts', active: true },
    { title: 'RAG Architecture', status: 'Actively Learning', level: 'Vector DBs & Embeddings Retrieval', active: true }
  ];

  return (
    <section id="learning" className={`py-20 border-t relative ${isDark ? 'border-white/5' : 'border-slate-200'}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        <div className="flex items-center gap-2 text-violet-500 font-mono text-xs tracking-wider uppercase mb-3">
          <TrendingUp size={14} />
          <span>05. Learning Roadmap</span>
        </div>

        <h2 className={`text-2xl sm:text-3xl font-bold tracking-tight mb-3 ${isDark ? 'text-white' : 'text-slate-900'}`}>
          Growth & Exploration
        </h2>
        <p className={`text-sm mb-8 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
          I enjoy continuously learning new AI technologies and staying at the forefront of modern intelligent systems.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {roadmapItems.map((item, idx) => (
            <div
              key={idx}
              className={`p-4 rounded-xl border flex flex-col justify-between transition-all ${
                item.active 
                  ? isDark 
                    ? 'bg-gradient-to-br from-violet-950/30 to-slate-900 border-violet-500/40 shadow-lg' 
                    : 'bg-violet-50/70 border-violet-300'
                  : isDark 
                    ? 'bg-slate-900/40 border-white/5' 
                    : 'bg-white border-slate-200 shadow-sm'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-sm font-bold ${isDark ? 'text-slate-100' : 'text-slate-900'}`}>{item.title}</span>
                  {item.active ? (
                    <span className="w-2 h-2 rounded-full bg-violet-400 animate-ping" />
                  ) : (
                    <CheckCircle size={14} className="text-emerald-500" />
                  )}
                </div>
                <p className={`text-xs mb-3 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>{item.level}</p>
              </div>

              <span className={`text-[10px] font-mono px-2.5 py-1 rounded-md w-fit ${
                item.active 
                  ? 'bg-violet-500/20 text-violet-300 border border-violet-500/30' 
                  : isDark ? 'bg-slate-800 text-slate-400' : 'bg-slate-100 text-slate-600'
              }`}>
                {item.status}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

const Contact = ({ isDark }: ContactProps) => {
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const email = "vedantshelake28@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 4000);
  };

  return (
    <section id="contact" className={`py-20 border-t relative ${isDark ? 'border-white/5' : 'border-slate-200'}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        <div className="text-center max-w-xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-cyan-500 font-mono text-xs tracking-wider uppercase mb-3">
            <MdEmail size={14} />
            <span>06. Get in Touch</span>
          </div>

          <h2 className={`text-3xl sm:text-4xl font-bold tracking-tight mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
            Let's build something amazing together.
          </h2>

          <p className={`text-sm leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            Whether you want to collaborate on an AI project, discuss machine learning pipelines, or simply connect—my inbox is always open.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-start">
          
          <div className="md:col-span-2 space-y-4">
            <div className="glass-card p-5 rounded-2xl space-y-4">
              <h3 className={`text-sm font-semibold font-mono uppercase tracking-wider ${isDark ? 'text-white' : 'text-slate-900'}`}>
                Direct Contact
              </h3>

              <div className={`p-3 rounded-xl border flex items-center justify-between ${
                isDark ? 'bg-slate-900/80 border-white/5' : 'bg-slate-50 border-slate-200'
              }`}>
                <div className="overflow-hidden">
                  <div className={`text-[10px] uppercase font-mono ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>Email</div>
                  <div className={`text-xs truncate font-mono ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>{email}</div>
                </div>
                <button
                  onClick={handleCopy}
                  className={`p-2 rounded-lg transition-colors cursor-pointer ${
                    isDark ? 'bg-slate-800 text-slate-300 hover:text-white' : 'bg-slate-200 text-slate-700 hover:text-black'
                  }`}
                  title="Copy email"
                >
                  {copied ? <Check size={14} className="text-emerald-500" /> : <Copy size={14} />}
                </button>
              </div>

              <div className="space-y-2 pt-2">
                <div className={`text-[10px] uppercase font-mono ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>Social Links</div>
                <div className="grid grid-cols-2 gap-2">
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noreferrer"
                    className={`p-2.5 rounded-xl border text-xs flex items-center gap-2 transition-all ${
                      isDark ? 'bg-slate-900/60 border-white/5 text-slate-300 hover:text-white' : 'bg-slate-50 border-slate-200 text-slate-700 hover:text-slate-900'
                    }`}
                  >
                    <FaGithub size={14} />
                    <span>GitHub</span>
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noreferrer"
                    className={`p-2.5 rounded-xl border text-xs flex items-center gap-2 transition-all ${
                      isDark ? 'bg-slate-900/60 border-white/5 text-slate-300 hover:text-white' : 'bg-slate-50 border-slate-200 text-slate-700 hover:text-slate-900'
                    }`}
                  >
                    <FaLinkedin size={14} />
                    <span>LinkedIn</span>
                  </a>
                  <a
                    href="https://kaggle.com"
                    target="_blank"
                    rel="noreferrer"
                    className={`p-2.5 rounded-xl border text-xs flex items-center gap-2 transition-all ${
                      isDark ? 'bg-slate-900/60 border-white/5 text-slate-300 hover:text-white' : 'bg-slate-50 border-slate-200 text-slate-700 hover:text-slate-900'
                    }`}
                  >
                    <KaggleIcon className="w-3.5 h-3.5" />
                    <span>Kaggle</span>
                  </a>
                  <a
                    href={`mailto:${email}`}
                    className={`p-2.5 rounded-xl border text-xs flex items-center gap-2 transition-all ${
                      isDark ? 'bg-slate-900/60 border-white/5 text-slate-300 hover:text-white' : 'bg-slate-50 border-slate-200 text-slate-700 hover:text-slate-900'
                    }`}
                  >
                    <MdEmail size={14} />
                    <span>Email Me</span>
                  </a>
                </div>
              </div>

            </div>
          </div>

          <div className="md:col-span-3">
            <form onSubmit={handleSubmit} className="glass-card p-6 rounded-2xl space-y-4">
              {formSubmitted && (
                <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 text-xs flex items-center gap-2">
                  <CheckCircle2 size={16} />
                  <span>Message sent successfully! I'll get back to you soon.</span>
                </div>
              )}

              <div>
                <label className={`block text-xs font-mono mb-1 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>Your Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Alex Rivera"
                  className={`w-full px-4 py-2.5 rounded-xl border text-sm focus:outline-none focus:border-violet-500 transition-colors ${
                    isDark ? 'bg-slate-900/80 border-white/10 text-slate-200 placeholder-slate-500' : 'bg-white border-slate-200 text-slate-800 placeholder-slate-400'
                  }`}
                />
              </div>

              <div>
                <label className={`block text-xs font-mono mb-1 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>Your Email</label>
                <input
                  type="email"
                  required
                  placeholder="e.g. alex@example.com"
                  className={`w-full px-4 py-2.5 rounded-xl border text-sm focus:outline-none focus:border-violet-500 transition-colors ${
                    isDark ? 'bg-slate-900/80 border-white/10 text-slate-200 placeholder-slate-500' : 'bg-white border-slate-200 text-slate-800 placeholder-slate-400'
                  }`}
                />
              </div>

              <div>
                <label className={`block text-xs font-mono mb-1 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>Message</label>
                <textarea
                  rows={4}
                  required
                  placeholder="Tell me about your project or idea..."
                  className={`w-full px-4 py-2.5 rounded-xl border text-sm focus:outline-none focus:border-violet-500 transition-colors resize-none ${
                    isDark ? 'bg-slate-900/80 border-white/10 text-slate-200 placeholder-slate-500' : 'bg-white border-slate-200 text-slate-800 placeholder-slate-400'
                  }`}
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-medium text-sm hover:from-violet-500 hover:to-indigo-500 transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer"
              >
                <Send size={15} />
                <span>Send Message</span>
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
};

const Footer = ({ isDark }: FooterProps) => {
  return (
    <footer className={`py-8 border-t text-xs ${
      isDark ? 'border-white/5 bg-[#070a11] text-slate-500' : 'border-slate-200 bg-slate-100 text-slate-600'
    }`}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span>Made with ❤️ using React</span>
        </div>

        <div className={`text-center sm:text-right font-mono ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
          Designed by <span className={`font-medium ${isDark ? 'text-slate-200' : 'text-slate-900'}`}>Vedant</span>
        </div>
      </div>
    </footer>
  );
};

// const ResumeModal = ({ isOpen, onClose, isDark }: ResumeModalProps) => {
//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md">
//       <div className={`glass-card max-w-2xl w-full rounded-2xl overflow-hidden border p-6 sm:p-8 relative max-h-[85vh] overflow-y-auto ${
//         isDark ? 'border-white/15' : 'border-slate-200 bg-white'
//       }`}>
//         <button
//           onClick={onClose}
//           className={`absolute top-4 right-4 p-1.5 rounded-lg ${
//             isDark ? 'bg-slate-800 text-slate-400 hover:text-white' : 'bg-slate-100 text-slate-600 hover:text-black'
//           }`}
//         >
//           <X size={18} />
//         </button>

//         <div className="flex items-center gap-2 text-violet-500 font-mono text-xs uppercase mb-2">
//           <Download size={14} />
//           <span>Resume Preview</span>
//         </div>

//         <h3 className={`text-2xl font-bold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>Vedant</h3>

//         <div className={`space-y-4 text-xs sm:text-sm font-light border-t border-b py-4 my-4 ${
//           isDark ? 'text-slate-300 border-white/10' : 'text-slate-700 border-slate-200'
//         }`}>
//           <div>
//             <h4 className="font-semibold uppercase text-xs font-mono mb-1 text-cyan-500">Profile Summary</h4>
//             <p className={isDark ? 'text-slate-400' : 'text-slate-600'}>AI enthusiast and developer dedicated to Machine Learning applications, predictive analytics, and adopting modern AI tools for agile development.</p>
//           </div>

//           <div>
//             <h4 className="font-semibold uppercase text-xs font-mono mb-1 text-cyan-500">Core Skills</h4>
//             <p className={isDark ? 'text-slate-400' : 'text-slate-600'}>Python, Machine Learning, Deep Learning, NLP, EDA, Feature Engineering, Flask, Generative AI (Learning), RAG (Learning).</p>
//           </div>

//           <div>
//             <h4 className="font-semibold uppercase text-xs font-mono mb-1 text-cyan-500">Projects</h4>
//             <ul className={`list-disc list-inside space-y-1 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
//               <li><strong>AI Traffic Management System:</strong> Real-time vehicle detection using YOLO & OpenCV.</li>
//               <li><strong>Fake News Detection:</strong> NLP classification pipeline for textual veracity.</li>
//               <li><strong>Irrigation Need Prediction:</strong> Predictive ML for agricultural irrigation optimization.</li>
//             </ul>
//           </div>
//         </div>

//         <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
//           <span className={`text-xs font-mono ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>Format: PDF</span>
//           <div className="flex gap-2 w-full sm:w-auto">
//             <button
//               onClick={() => {
//                 onClose();
//               }}
//               className="flex-1 sm:flex-initial px-5 py-2.5 rounded-xl bg-violet-600 text-xs text-white font-medium hover:bg-violet-500 flex items-center justify-center gap-2 cursor-pointer"
//             >
//               <Download size={14} />
//               <span>Download PDF</span>
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  // const [resumeOpen, setResumeOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);

  // Intersection observer for navigation highlighting
  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  return (
    <div className={`min-h-screen font-sans selection:bg-violet-500/30 relative transition-colors duration-300 overflow-x-hidden ${
      isDark ? 'bg-[#090d16] text-slate-100 selection:text-white' : 'bg-[#f8fafc] text-slate-800 light-mode selection:text-slate-900'
    }`}>
      <style>{globalStyles}</style>

      {/* Grid pattern background overlay */}
      <div className={`fixed inset-0 [background-size:24px_24px] pointer-events-none z-0 ${
        isDark 
          ? 'bg-[radial-gradient(#1e293b_1px,transparent_1px)] opacity-25' 
          : 'bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] opacity-40'
      }`}></div>

      <div className="relative z-10">
        <Navbar 
          activeSection={activeSection} 
          setActiveSection={setActiveSection} 
          isDark={isDark} 
          setIsDark={setIsDark} 
        />
        
        <main>
          <Hero isDark={isDark} />
          <About isDark={isDark} />
          <Skills isDark={isDark} />
          <Projects onSelectProject={(p) => setSelectedProject(p)} isDark={isDark} />
          <Experience isDark={isDark} />
          <LearningRoadmap isDark={isDark} />
          <Contact isDark={isDark} />
        </main>

        <Footer isDark={isDark} />
      </div>

      {/* Modals */}
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} isDark={isDark} />
      {/* <ResumeModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} isDark={isDark} /> */}
    </div>
  );
}