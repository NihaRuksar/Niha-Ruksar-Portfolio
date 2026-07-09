import { useEffect, useState, useMemo } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'motion/react';

export function PremiumBackground() {
  const { scrollYProgress } = useScroll();
  const [isHovering, setIsHovering] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    // initial check
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // 3D Glass Discs Background Image with subtle mouse parallax
  const bgImage = "https://i.ibb.co/chxNypW4/laptop.png";

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "5%"]);

  // Mouse interactivity
  const mouseX = useMotionValue(typeof window !== 'undefined' ? window.innerWidth / 2 : 0);
  const mouseY = useMotionValue(typeof window !== 'undefined' ? window.innerHeight / 2 : 0);

  // Smooth mouse coordinates
  const smoothMouseX = useSpring(mouseX, { stiffness: 40, damping: 25 });
  const smoothMouseY = useSpring(mouseY, { stiffness: 40, damping: 25 });

  // Parallax offsets based on mouse movement
  const windowWidth = typeof window !== 'undefined' ? window.innerWidth : 1000;
  const windowHeight = typeof window !== 'undefined' ? window.innerHeight : 1000;
  
  const mouseMoveX = useTransform(smoothMouseX, [0, windowWidth], [-20, 20]);
  const mouseMoveY = useTransform(smoothMouseY, [0, windowHeight], [-20, 20]);
  const mouseMoveXReverse = useTransform(smoothMouseX, [0, windowWidth], [20, -20]);
  const mouseMoveYReverse = useTransform(smoothMouseY, [0, windowHeight], [20, -20]);

  // A light that loosely follows the cursor
  const mouseGlowX = useTransform(smoothMouseX, (x) => x - 300);
  const mouseGlowY = useTransform(smoothMouseY, (y) => y - 300);

  // Pre-calculate particle properties to prevent jumping on re-renders
  const particles = useMemo(() => {
    return Array.from({ length: 12 }).map((_, i) => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      delay: Math.random() * 5,
      baseDuration: 6 + Math.random() * 4,
      isEven: i % 2 === 0
    }));
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);

      const target = e.target as HTMLElement;
      if (target.closest('a, button, [role="button"]')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#05050A]">
      {/* Container for the background that handles responsive rotation */}
      <div 
        className="absolute top-1/2 left-1/2 flex items-center justify-center will-change-transform"
        style={{
          width: isMobile ? '110vh' : '110vw',
          height: isMobile ? '110vw' : '110vh',
          transform: `translate(-50%, -50%) rotate(${isMobile ? 90 : 0}deg)`,
          transition: 'transform 0.6s ease-in-out',
        }}
      >
        {/* 3D Glass Discs Background Image with subtle mouse parallax */}
        <motion.div 
          className="w-full h-full"
          style={{
            backgroundImage: `url(${bgImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            y: bgY,
            x: mouseMoveX,
          }}
          animate={{
            scale: isHovering ? [1, 1.03, 1] : [1, 1.02, 1],
            filter: isHovering ? 'brightness(1.1) contrast(1.05)' : 'brightness(1) contrast(1)',
          }}
          transition={{
            scale: {
              duration: isHovering ? 10 : 20,
              repeat: Infinity,
              ease: "easeInOut"
            },
            filter: { duration: 0.8, ease: "easeOut" }
          }}
        />
      </div>

      {/* Dark overlay for readability */}
      <div 
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.70)',
          transition: 'background-color 0.6s ease-in-out'
        }}
      />

      {/* Mouse Follow Glow - Interactive */}
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full mix-blend-screen blur-[120px]"
        style={{
          x: mouseGlowX,
          y: mouseGlowY,
        }}
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: isHovering ? 1 : 0.8,
          scale: isHovering ? 1.4 : 1,
          backgroundColor: isHovering ? 'rgba(124, 140, 255, 0.2)' : 'rgba(124, 140, 255, 0.08)'
        }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      />

      {/* Ambient blue light drift */}
      <motion.div
        className="absolute top-[30%] left-[20%] w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] rounded-full mix-blend-screen blur-[120px] bg-[#5663FF]/[0.05]"
        style={{ x: mouseMoveXReverse, y: mouseMoveYReverse }}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Soft radial glow breathing effect */}
      <motion.div
        className="absolute bottom-[20%] right-[10%] w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] rounded-full mix-blend-screen blur-[100px] bg-[#7C8CFF]/[0.04]"
        style={{ x: mouseMoveX, y: mouseMoveY }}
        animate={{
          scale: [1, 1.05, 1],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Soft moving light streaks reacting to mouse */}
      <motion.div
        className="absolute top-[30%] left-[-20%] w-[150%] h-[1px] blur-[2px] transform -rotate-12"
        style={{ y: mouseMoveYReverse, x: mouseMoveXReverse }}
        animate={{
          opacity: isHovering ? [0, 0.8, 0] : [0, 0.5, 0],
          scaleY: isHovering ? [1, 4, 1] : [1, 2, 1],
          backgroundImage: isHovering 
            ? 'linear-gradient(to right, transparent, rgba(124, 140, 255, 0.4), transparent)'
            : 'linear-gradient(to right, transparent, rgba(124, 140, 255, 0.15), transparent)'
        }}
        transition={{ duration: isHovering ? 6 : 12, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Minimal floating particles reacting to mouse */}
      {particles.map((p, i) => (
        <motion.div
          key={i}
          className="absolute w-1.5 h-1.5 rounded-full blur-[1px]"
          style={{
            top: p.top,
            left: p.left,
            x: p.isEven ? mouseMoveX : mouseMoveXReverse,
            y: p.isEven ? mouseMoveY : mouseMoveYReverse,
          }}
          animate={{
            opacity: isHovering ? [0.4, 1, 0.4] : [0.1, 0.6, 0.1],
            scale: isHovering ? [1.5, 3, 1.5] : [1, 1.5, 1],
            backgroundColor: isHovering ? '#7C8CFF' : 'rgba(245, 247, 255, 0.3)'
          }}
          transition={{
            duration: isHovering ? p.baseDuration / 2 : p.baseDuration,
            repeat: Infinity,
            delay: p.delay,
            ease: "easeInOut"
          }}
        />
      ))}

      {/* Smooth animated grain texture */}
      <div 
        className="absolute inset-0 w-full h-full opacity-[0.04] mix-blend-overlay pointer-events-none"
        style={{ backgroundImage: `url('https://grainy-gradients.vercel.app/noise.svg')` }}
      />
    </div>
  );
}
