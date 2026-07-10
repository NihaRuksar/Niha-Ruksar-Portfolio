import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const techCategories = [
  {
    title: 'Languages',
    skills: [
      { name: 'Python', imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg' },
      { name: 'JavaScript', imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg' }
    ]
  },
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML & CSS', imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg' },
      { name: 'React', imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
      { name: 'Redux', imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg' },
      { name: 'Tailwind CSS', imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' }
    ]
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Django & FastAPI', imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg' },
      { name: 'REST APIs', imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg' },
      { name: 'LangGraph & LangChain', imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-original.svg' },
      { name: 'httpx', imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/axios/axios-plain.svg' }
    ]
  },
  {
    title: 'Databases',
    skills: [
      { name: 'MySQL', imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg' },
      { name: 'SQLAlchemy ORM', imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlalchemy/sqlalchemy-original.svg' }
    ]
  },
  {
    title: 'AI & LLM',
    skills: [
      { name: 'Groq API', imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg' },
      { name: 'Gemma2-9b-it', imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/google/google-original.svg' },
      { name: 'Prompt Engineering', imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/openapi/openapi-original.svg' },
      { name: 'AI Models', imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg' }
    ]
  },
  {
    title: 'Core Concepts',
    skills: [
      { name: 'OOP', imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg' },
      { name: 'RBAC', imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg' },
      { name: 'State Management', imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg' },
      { name: 'API Design', imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/graphql/graphql-plain.svg' }
    ]
  },
  {
    title: 'Version Control',
    skills: [
      { name: 'Git', imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg' },
      { name: 'GitHub', imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg' }
    ]
  }
];

export function TechStack() {
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const filterOptions = ['All', ...techCategories.map(c => c.title)];

  const filteredCategories = activeFilter === 'All' 
    ? techCategories 
    : techCategories.filter(c => c.title === activeFilter);

  return (
    <motion.section
      id="stack"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="py-16 md:py-24 px-6 md:px-12 lg:px-24 overflow-hidden relative z-40"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="relative z-10 w-full mb-12 md:mb-16">
          <motion.div
             initial={{ opacity: 0, y: 80, filter: 'blur(10px)' }}
             whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
             viewport={{ once: true, margin: "-100px" }}
             transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
             className="flex flex-col md:flex-row md:items-end justify-between gap-6"
          >
            <div className="flex items-center gap-3">
              <h2 className="font-serif text-3xl md:text-4xl text-[#F5F5F5] font-light">
                Technical <span className="text-[#7C8CFF] italic font-medium">Stack</span>
              </h2>
            </div>
            
            <div className="flex flex-wrap items-center gap-3">
              {filterOptions.map((option) => (
                <button
                  key={option}
                  onClick={() => setActiveFilter(option)}
                  className={`px-4 py-2 rounded-full text-[10px] sm:text-xs font-mono uppercase tracking-widest transition-all duration-300 border backdrop-blur-xl backdrop-saturate-150 backdrop-brightness-110 ${
                    activeFilter === option
                      ? 'bg-[#7C8CFF]/20 border-[#7C8CFF]/50 text-[#7C8CFF] shadow-[0_0_20px_rgba(124,140,255,0.3)]'
                      : 'bg-white/5 border-white/10 text-[#B5B8C5] hover:bg-white/10 active:bg-white/10 hover:border-white/20 active:border-white/20 hover:text-[#F5F5F5] active:text-[#F5F5F5]'
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Content */}
        <motion.div layout className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6 relative z-10 mt-8">
          <AnimatePresence>
            {filteredCategories.map((category, index) => (
              <motion.div
                key={category.title}
                layout
                initial={{ opacity: 0, scale: 0.95, y: 80, filter: 'blur(10px)' }}
                whileInView={{ opacity: 1, scale: 1, y: 0, filter: 'blur(0px)' }}
                viewport={{ once: true, margin: "-50px" }}
                exit={{ opacity: 0, scale: 0.95, y: 20, filter: 'blur(5px)' }}
                transition={{ duration: 0.6, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
                className="glass-card break-inside-avoid p-6 rounded-[24px]"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#7C8CFF] shadow-[0_0_8px_#7C8CFF]"></div>
                  <h3 className="font-mono text-sm tracking-[0.1em] uppercase text-[#F5F5F5]">
                    {category.title}
                  </h3>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {category.skills.map((skill) => (
                    <div 
                      key={skill.name}
                      className="group cursor-pointer flex flex-col items-center justify-center gap-3 p-4 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.06] active:bg-white/[0.06] hover:border-white/10 active:border-white/10 transition-all duration-300 pointer-events-auto shadow-sm"
                    >
                      <div className="relative w-10 h-10 flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-active:scale-110 group-hover:-translate-y-1 group-active:-translate-y-1">
                        <img 
                          src={skill.imgSrc} 
                          alt={skill.name} 
                          className="w-full h-full object-contain filter brightness-90 saturate-50 group-hover:filter-none group-active:filter-none transition-all duration-500"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-[#7C8CFF]/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-300 pointer-events-none" />
                      </div>
                       <span className="font-mono text-[10px] text-[#B5B8C5] tracking-wider text-center group-hover:text-[#F5F5F5] group-active:text-[#F5F5F5] transition-colors">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </motion.section>
  );
}
