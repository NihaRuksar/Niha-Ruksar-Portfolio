import { motion, useScroll } from 'motion/react';
import { useRef } from 'react';

const roles = [
  'Full Stack Developer',
  'Backend Engineer',
  'AI Developer',
  'Software Engineer',
  'API Architect',
  'LLM Application Builder',
];

const paragraphs = [
  "I'm a Full Stack Developer with a strong foundation in AI-powered application architecture. I specialise in building end-to-end systems — from designing intelligent LangGraph agents and FastAPI backends to crafting clean, reactive frontends with React and Redux.",
  "My work sits at the intersection of software engineering and AI — I take complex real-world workflows and translate them into robust, maintainable, production-grade systems. I'm meticulous about architecture, prompt design, and API reliability.",
  "I'm actively seeking roles wherever intelligent systems need to be built right."
];

export function About() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  return (
    <motion.section
      ref={ref}
      id="about"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="relative -mt-20 md:-mt-32 z-20 py-16 md:py-24 px-6 md:px-12 lg:px-24 overflow-hidden"
    >
      
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-20 items-center justify-between relative z-10">
        
        {/* Left Side: Editorial Image */}
        <div className="w-full lg:w-[45%] relative min-h-[500px] flex items-center justify-center lg:justify-start">
          <motion.div 
            initial={{ opacity: 0, y: 80, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="glass-panel relative aspect-[4/5] w-[90%] max-w-[420px] mx-auto lg:mx-0 overflow-hidden p-3 md:p-4 group"
          >
            <div className="absolute inset-0 overflow-hidden rounded-[20px] m-3 md:m-4 bg-[#05050A]/30">
              <motion.img 
                whileHover={{ scale: 1.05 }}
                src="https://i.ibb.co/VpwDR173/Chat-GPT-Image-Jun-6-2026-02-41-08-AM.png" 
                referrerPolicy="no-referrer"
                loading="lazy"
                alt="Workspace" 
                className="w-full h-full object-cover object-center transition-all duration-700 ease-out opacity-90 group-hover:opacity-100 group-active:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#05050A]/60 via-transparent to-transparent pointer-events-none" />
            </div>
          </motion.div>
        </div>

        {/* Right Side: Text/Content Column */}
        <div className="w-full lg:w-[50%] flex flex-col justify-center">
          
          <div className="relative z-10 w-full mb-12 md:mb-16">
            <motion.div
               initial={{ opacity: 0, y: 80, filter: 'blur(10px)' }}
               whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
               viewport={{ once: true, margin: "-100px" }}
               transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
               className="flex items-center gap-3"
            >
              <h2 className="font-serif text-3xl md:text-4xl text-[#F5F5F5] font-light">
                <span className="italic text-[#B5B8C5]">A bit</span> about me
              </h2>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 80, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="glass-card p-8 md:p-10"
          >
              <motion.div 
              className="space-y-6 font-sans text-base md:text-lg text-[#B5B8C5] font-light leading-relaxed mb-10"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.008, delayChildren: 0.1 }
                }
              }}
            >
              {paragraphs.map((paragraph, pIdx) => (
                <p key={pIdx} className="leading-relaxed">
                  {paragraph.split(" ").map((word, wIdx) => (
                    <span key={wIdx} className="inline-flex overflow-hidden mr-[0.25em] align-bottom pb-[0.1em]">
                      <motion.span
                        className="inline-block origin-bottom-left"
                        variants={{
                          hidden: { y: "120%", opacity: 0, rotateZ: 2 },
                          visible: { y: "0%", opacity: 1, rotateZ: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } }
                        }}
                      >
                        {word}
                      </motion.span>
                    </span>
                  ))}
                </p>
              ))}
            </motion.div>

            <div className="relative group">
              <h4 className="font-mono text-[10px] text-[#F5F7FF] tracking-[0.2em] uppercase mb-5 flex items-center gap-3">
                <div className="w-6 h-[1px] bg-[#7C8CFF]" />
                Target Roles
              </h4>
              <motion.div 
                className="flex flex-wrap gap-3"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: { staggerChildren: 0.1, delayChildren: 0.6 }
                  }
                }}
              >
                {roles.map((role) => (
                  <motion.span
                    key={role}
                    variants={{
                      hidden: { opacity: 0, scale: 0.8, y: 15 },
                      visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
                    }}
                    className="px-5 py-2.5 rounded-[12px] border border-white/5 bg-white/[0.03] font-mono text-[10px] md:text-[11px] text-[#7C8CFF] tracking-widest hover:-translate-y-[2px] active:-translate-y-[2px] hover:bg-white/[0.08] active:bg-white/[0.08] hover:border-[#7C8CFF]/50 active:border-[#7C8CFF]/50 transition-all duration-300"
                  >
                    {role}
                  </motion.span>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
