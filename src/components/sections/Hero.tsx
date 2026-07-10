import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight, ChevronDown } from 'lucide-react';

const heroSkills = [
  { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg' },
  { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg' },
  { name: 'HTML & CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg' },
  { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
  { name: 'Redux', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg' },
  { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' },
  { name: 'Django & FastAPI', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg' },
  { name: 'REST APIs', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg' },
  { name: 'LangGraph & LangChain', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-original.svg' },
  { name: 'httpx', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/axios/axios-plain.svg' },
  { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg' },
  { name: 'SQLAlchemy ORM', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlalchemy/sqlalchemy-original.svg' },
  { name: 'Groq API', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg' },
  { name: 'Gemma2-9b-it', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/google/google-original.svg' },
  { name: 'Prompt Engineering', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/openapi/openapi-original.svg' },
  { name: 'AI Models', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg' },
  { name: 'OOP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg' },
  { name: 'RBAC', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg' },
  { name: 'State Management', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg' },
  { name: 'API Design', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/graphql/graphql-plain.svg' },
  { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg' },
  { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg' }
];

export function Hero() {
  const ref = useRef(null);
  const [hoveredButton, setHoveredButton] = useState<'projects' | 'contact' | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.8], [0, -100]);
  const filter = useTransform(scrollYProgress, [0, 0.8], ["blur(0px)", "blur(10px)"]);

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        const offset = 100;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
        window.history.pushState(null, '', href);
      }
    }
  };

  return (
    <section ref={ref} id="home" className="relative w-full flex flex-col items-start overflow-hidden -mt-16 sm:-mt-24 md:-mt-32 pt-0 pb-6 md:pb-8">
      
      <motion.div 
        style={{ opacity, y, filter }}
        className="relative z-10 w-full max-w-3xl mx-auto px-4 sm:px-6 flex flex-col items-center"
      >
        
        {/* Outer Glass Panel Card */}
        <motion.div 
          initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="glass-panel w-full h-fit flex flex-col items-center justify-start relative overflow-hidden rounded-[36px] text-center transition-all duration-700 ease-out z-10 p-3 md:p-4"
        >
          {/* Inner Layer Background Glows */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
            <motion.div 
              animate={{ opacity: [0.1, 0.25, 0.1], scale: [1, 1.1, 1] }} 
              transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-[#7C8CFF]/10 rounded-full blur-[60px]" 
            />
            <motion.div 
              animate={{ opacity: [0.05, 0.15, 0.05], scale: [1, 1.2, 1] }} 
              transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
              className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-white/10 rounded-full blur-[50px]" 
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-white/[0.02] via-transparent to-[#7C8CFF]/[0.05]"></div>
          </div>

          {/* Reactive hover background glows */}
          <div 
            className={`absolute top-0 right-0 w-[400px] h-[400px] rounded-full blur-[100px] pointer-events-none transition-colors duration-700 z-0 ${
              hoveredButton === 'projects' ? 'bg-[#7C8CFF]/25' : hoveredButton === 'contact' ? 'bg-white/15' : 'bg-[#7C8CFF]/15'
            }`} 
          />
          <div 
            className={`absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full blur-[90px] pointer-events-none transition-colors duration-700 z-0 ${
              hoveredButton === 'projects' ? 'bg-[#5663FF]/25' : hoveredButton === 'contact' ? 'bg-white/10' : 'bg-[#5663FF]/15'
            }`} 
          />

          {/* Inner Beautifully Suspended Glass Content Frame (Double Layout Glass Look) */}
          <div className="w-full h-full flex flex-col items-center justify-start relative z-20 rounded-[28px] bg-[#020205]/40 border border-white/5 shadow-inner backdrop-blur-xl px-4 py-8 md:p-10">
            
            {/* Available for work Pill */}
            <div className="mb-6 inline-flex items-center gap-2.5 py-1.5 px-4 rounded-full border border-[#7C8CFF]/30 bg-[#7C8CFF]/10 backdrop-blur-md shadow-[0_0_15px_rgba(124,140,255,0.2)]">
              <span className="w-2 h-2 rounded-full bg-[#7C8CFF] animate-pulse shadow-[0_0_8px_rgba(124,140,255,0.8)]" />
              <span className="font-mono text-[10px] md:text-xs text-[#E0E5FF] tracking-widest uppercase">Available for work</span>
            </div>

            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-[1px] w-6 md:w-12 bg-gradient-to-r from-transparent to-[#F5F7FF]/30"></div>
              <h2 className="font-mono text-[10px] md:text-xs tracking-[0.2em] md:tracking-[0.25em] text-[#B5B8C5] uppercase drop-shadow-md">
                AI & Software Engineer
              </h2>
              <div className="h-[1px] w-6 md:w-12 bg-gradient-to-l from-transparent to-[#F5F7FF]/30"></div>
            </div>

            <h1 className="font-serif text-3xl md:text-5xl tracking-tight text-[#F5F5F5] mb-6 md:mb-8 font-light">
              <span className="italic text-[#B5B8C5]">Hi, I'm</span> <span className="font-medium drop-shadow-md">Niha Ruksar</span>
            </h1>

            <p className="font-sans text-sm sm:text-base md:text-lg text-[#B5B8C5] max-w-xl leading-relaxed mb-8 font-light mx-auto px-2 drop-shadow-sm">
              I craft intelligent systems and premium digital experiences by merging robust software engineering with advanced AI architectures. Building the future, elegantly.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
              <a 
                href="#projects" 
                onClick={(e) => handleAnchorClick(e, '#projects')}
                onMouseEnter={() => setHoveredButton('projects')}
                onMouseLeave={() => setHoveredButton(null)}
                className="group relative flex items-center justify-center space-x-2 bg-[#7C8CFF]/90 backdrop-blur-xl backdrop-saturate-150 backdrop-brightness-110 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-[16px] sm:rounded-[20px] transition-all duration-500 ease-out shadow-[0_8px_32px_rgba(124,140,255,0.3)] hover:shadow-[0_16px_48px_rgba(124,140,255,0.5)] active:shadow-[0_16px_48px_rgba(124,140,255,0.5)] hover:-translate-y-1 active:-translate-y-1 hover:bg-[#7C8CFF] active:bg-[#7C8CFF] overflow-hidden"
              >
                <span className="absolute inset-0 rounded-[16px] sm:rounded-[20px] bg-white/20 opacity-0 group-hover:opacity-100 group-active:opacity-100 group-hover:animate-ping group-active:animate-ping duration-1000 origin-center pointer-events-none" />
                <span className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.4)_0%,transparent_70%)] opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-500 pointer-events-none mix-blend-overlay" />
                
                <span className="font-sans tracking-wider text-xs font-medium relative z-10 uppercase transition-colors">View Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 group-active:translate-x-1 transition-transform relative z-10" />
              </a>
              
              <a 
                href="#contact" 
                onClick={(e) => handleAnchorClick(e, '#contact')} 
                onMouseEnter={() => setHoveredButton('contact')}
                onMouseLeave={() => setHoveredButton(null)}
                className="group relative flex items-center justify-center px-6 py-3 sm:px-8 sm:py-4 rounded-[16px] sm:rounded-[20px] border border-white/10 text-[#F5F5F5] hover:bg-white/10 active:bg-white/10 backdrop-blur-xl backdrop-saturate-150 backdrop-brightness-110 transition-all duration-500 ease-out hover:-translate-y-1 active:-translate-y-1 hover:border-white/30 active:border-white/30 overflow-hidden"
              >
                <span className="absolute inset-0 bg-[#7C8CFF]/5 opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-500 pointer-events-none mix-blend-overlay" />
                <span className="absolute inset-0 rounded-[16px] sm:rounded-[20px] border border-white/20 scale-100 group-hover:scale-[1.05] group-active:scale-[1.05] group-hover:opacity-0 group-active:opacity-0 transition-all duration-700 pointer-events-none" />

                <span className="font-sans tracking-wider text-xs font-light uppercase relative z-10">Contact</span>
              </a>
            </div>

            {/* Tech Icons Marquee Moving Right to Left */}
            <div className="w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] pt-6 border-t border-white/10 mt-2">
              <motion.div
                className="flex items-center gap-8 md:gap-12 w-max"
                animate={{ x: ["0%", "-50%"] }}
                transition={{ repeat: Infinity, ease: "linear", duration: 70 }}
              >
                {[...heroSkills, ...heroSkills].map((skill, index) => (
                  <div key={index} className="flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-white/[0.03] border border-white/5 hover:border-white/15 hover:bg-white/[0.06] transition-colors shrink-0">
                    <img src={skill.icon} alt={skill.name} className="w-5 h-5 md:w-6 md:h-6 object-contain" />
                    <span className="font-mono text-[10px] md:text-xs text-[#B5B8C5] tracking-wider uppercase">{skill.name}</span>
                  </div>
                ))}
              </motion.div>
            </div>

          </div>
        </motion.div>

      </motion.div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        style={{ opacity: useTransform(scrollYProgress, [0, 0.2], [1, 0]) }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-3 text-[#B5B8C5] z-40 hover:opacity-100 active:opacity-100 transition-opacity"
      >
        <span className="font-mono text-[10px] tracking-[0.3em] font-light uppercase">Scroll to explore</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
        >
          <ChevronDown className="w-4 h-4 text-[#7C8CFF]" />
        </motion.div>
      </motion.div>
    </section>
  );
}
