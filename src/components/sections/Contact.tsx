import { motion } from 'motion/react';
import { Linkedin, Github, Mail, ArrowUpRight } from 'lucide-react';

export function Contact() {
  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="relative py-4 md:py-8 px-6 md:px-12 lg:px-24 overflow-hidden z-50"
    >
      
      <div className="max-w-4xl mx-auto flex flex-col items-center justify-start text-center relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 80, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="glass-panel w-full p-6 md:p-8 relative overflow-hidden group"
        >
          {/* Internal Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] aspect-square bg-[#7C8CFF]/5 rounded-full blur-[100px] pointer-events-none mix-blend-screen transition-opacity duration-700 group-hover:opacity-100 group-active:opacity-100 opacity-60" />

          <div className="flex flex-col items-center relative z-10">
            <span className="font-mono text-[10px] md:text-[11px] text-[#B5B8C5] tracking-[0.3em] uppercase mb-6 flex items-center gap-3">
              <div className="w-8 h-[1px] bg-[#7C8CFF]" />
              Get In Touch
              <div className="w-8 h-[1px] bg-[#7C8CFF]" />
            </span>

            <h3 className="font-serif text-3xl md:text-4xl text-[#F5F5F5] mb-12 md:mb-16 leading-tight drop-shadow-md text-center">
              <span className="italic font-light text-[#B5B8C5]">Let's</span> talk
            </h3>
            
            <p className="font-sans text-base md:text-lg text-[#B5B8C5] max-w-xl font-light leading-relaxed mb-12 text-center">
              Open for Full Stack Developer, Backend Engineer, and AI Developer roles. If you're looking for someone meticulous about architecture and prompt design, I'd love to connect.
            </p>

            <div className="flex items-center justify-center mb-10 w-full sm:w-auto">
              <a href="mailto:niharuksar2002@gmail.com" className="group/btn flex items-center gap-4 bg-white/5 border border-white/5 px-6 py-4 rounded-[20px] hover:bg-white/10 active:bg-white/10 hover:border-white/20 active:border-white/20 transition-all duration-300 pointer-events-auto w-full sm:w-auto">
                <div className="p-3 rounded-full bg-white/5 border border-white/10 group-hover/btn:bg-[#7C8CFF]/10 group-hover/btn:border-[#7C8CFF]/30 transition-colors">
                  <Mail className="w-5 h-5 text-[#B5B8C5] group-hover/btn:text-[#F5F7FF] transition-colors" />
                </div>
                <div className="text-left">
                  <p className="font-mono text-[9px] text-[#B5B8C5] tracking-widest uppercase mb-1">Email</p>
                  <p className="font-sans text-[13px] text-[#F5F5F5] font-light tracking-wide break-all sm:break-normal">niharuksar2002@gmail.com</p>
                </div>
              </a>
            </div>

            <div className="flex items-center justify-center gap-4">
              <a href="https://www.linkedin.com/in/niha-ruksar-750048270/" target="_blank" rel="noreferrer" className="group/link flex items-center justify-center w-14 h-14 rounded-full border border-white/10 bg-white/5 hover:bg-[#7C8CFF]/20 active:bg-[#7C8CFF]/20 hover:border-[#7C8CFF]/40 active:border-[#7C8CFF]/40 hover:shadow-[0_0_20px_rgba(124,140,255,0.3)] active:shadow-[0_0_20px_rgba(124,140,255,0.3)] hover:-translate-y-1 active:-translate-y-1 transition-all duration-300 relative">
                <Linkedin className="w-5 h-5 text-[#B5B8C5] group-hover/link:text-[#F5F7FF] transition-colors" />
                <ArrowUpRight className="absolute -top-1 -right-1 w-3 h-3 text-[#7C8CFF] opacity-0 group-hover/link:opacity-100 transition-opacity" />
              </a>
              <a href="https://github.com/NihaRuksar/Niha-Ruksar" target="_blank" rel="noreferrer" className="group/link flex items-center justify-center w-14 h-14 rounded-full border border-white/10 bg-white/5 hover:bg-[#7C8CFF]/20 active:bg-[#7C8CFF]/20 hover:border-[#7C8CFF]/40 active:border-[#7C8CFF]/40 hover:shadow-[0_0_20px_rgba(124,140,255,0.3)] active:shadow-[0_0_20px_rgba(124,140,255,0.3)] hover:-translate-y-1 active:-translate-y-1 transition-all duration-300 relative">
                <Github className="w-5 h-5 text-[#B5B8C5] group-hover/link:text-[#F5F7FF] transition-colors" />
                <ArrowUpRight className="absolute -top-1 -right-1 w-3 h-3 text-[#7C8CFF] opacity-0 group-hover/link:opacity-100 transition-opacity" />
              </a>
            </div>

          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
