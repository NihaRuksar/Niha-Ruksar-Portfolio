import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = [
  { name: 'HOME', href: '#home' },
  { name: 'PROJECTS', href: '#projects' },
  { name: 'STACK', href: '#stack' },
  { name: 'ABOUT', href: '#about' },
  { name: 'CONTACT', href: '#contact' },
];

export function Navbar() {
  const { scrollY } = useScroll();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navTop = useTransform(scrollY, [0, 300], ['2rem', '0.5rem']);
  
  // Fade out background and border for that "transparent" effect
  const navBackground = useTransform(
    scrollY, 
    [0, 300], 
    ['rgba(15, 15, 30, 0.18)', 'rgba(15, 15, 30, 0.03)']
  );
  
  const navBorder = useTransform(
    scrollY, 
    [0, 300], 
    ['rgba(255, 255, 255, 0.08)', 'rgba(255, 255, 255, 0.01)']
  );

  const navBackdropBlur = useTransform(scrollY, [0, 300], ['30px', '8px']);
  
  const textOpacity = useTransform(scrollY, [0, 300], [1, 0.4]);
  
  const navWidth = useTransform(scrollY, [0, 300], ['min(95vw,800px)', 'min(90vw,700px)']);
  const navPaddingX = useTransform(scrollY, [0, 300], ['2.5rem', '2rem']);
  const navPaddingY = useTransform(scrollY, [0, 300], ['1rem', '0.75rem']);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        let offset = 0;
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
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
      style={{ top: navTop }}
      className="fixed left-1/2 -translate-x-1/2 z-50 flex items-center justify-center font-sans"
    >
      <motion.div 
        style={{ 
          background: navBackground,
          borderColor: navBorder,
          backdropFilter: useTransform(navBackdropBlur, blur => `blur(${blur})`),
          WebkitBackdropFilter: useTransform(navBackdropBlur, blur => `blur(${blur})`),
          width: navWidth,
          paddingLeft: navPaddingX,
          paddingRight: navPaddingX,
          paddingTop: navPaddingY,
          paddingBottom: navPaddingY,
          opacity: textOpacity
        }}
        whileHover={{
          opacity: 1,
          background: 'rgba(15, 15, 30, 0.25)',
          borderColor: 'rgba(255, 255, 255, 0.15)',
          backdropFilter: 'blur(30px)',
          WebkitBackdropFilter: 'blur(30px)'
        }}
        transition={{ duration: 0.3 }}
        className="flex items-center justify-between border rounded-[28px] shadow-[0_12px_40px_rgba(0,0,0,0.4)]"
      >
        <a 
          href="#home" 
          onClick={(e) => handleNavClick(e, '#home')}
          className="text-lg font-serif font-light tracking-[0.2em] text-[#F5F5F5] hover:text-[#7C8CFF] hover:drop-shadow-[0_0_8px_rgba(124,140,255,0.6)] transition-all duration-300"
        >
          NR.
        </a>

        <div className="hidden md:flex items-center space-x-6 sm:space-x-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="relative group text-[11px] font-sans font-light tracking-[0.25em] text-[#B5B8C5] hover:text-[#F5F7FF] transition-colors uppercase"
            >
              {item.name}
              <span className="absolute -bottom-[6px] left-0 w-0 h-[1px] bg-[#7C8CFF] shadow-[0_0_8px_#7C8CFF] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        <button
          className="md:hidden flex items-center justify-center p-2 text-[#B5B8C5] hover:text-[#F5F5F5] transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </motion.div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            style={{ width: navWidth }}
            className="absolute top-full mt-4 left-0 right-0 mx-auto p-4 rounded-2xl bg-[#0F0F1E]/95 backdrop-blur-xl border border-white/10 shadow-2xl flex flex-col space-y-4 md:hidden"
          >
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  setIsMobileMenuOpen(false);
                  handleNavClick(e, item.href);
                }}
                className="text-center text-xs font-sans font-medium tracking-[0.2em] text-[#B5B8C5] hover:text-[#F5F7FF] uppercase py-2"
              >
                {item.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
