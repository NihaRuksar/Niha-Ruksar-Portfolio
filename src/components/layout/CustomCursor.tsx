import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';

export function CustomCursor() {
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Elastic springs for that signature heavy liquid mercury movement
  const springX = useSpring(mouseX, { stiffness: 220, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 220, damping: 20 });

  // Dimension states that update dynamically based on the hovered element
  const [cursorDimensions, setCursorDimensions] = useState({ width: 32, height: 32 });
  const [isHovering, setIsHovering] = useState(false);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement;
      // Look for clickable elements (links, buttons, menu items, etc.)
      const interactiveEl = target.closest('a, button, [role="button"], .glass-card, input, textarea');

      if (interactiveEl) {
        setIsHovering(true);
        
        // Check if we want a full magnetic stick effect (like navbar links/buttons)
        const isStickyTarget = interactiveEl.tagName === 'A' || interactiveEl.tagName === 'BUTTON' || interactiveEl.getAttribute('role') === 'button';
        setIsSticky(isStickyTarget);

        const rect = interactiveEl.getBoundingClientRect();
        
        if (isStickyTarget) {
          // Snap the cursor directly to center lock position of the target element
          mouseX.set(rect.left + rect.width / 2);
          mouseY.set(rect.top + rect.height / 2);
          // Expand dimensions slightly beyond target border padding for a gorgeous containment capsule
          setCursorDimensions({
            width: rect.width + 16,
            height: rect.height + 12,
          });
        } else {
          // If it's a card but not a link, track mouse freely but grow dynamically
          mouseX.set(e.clientX);
          mouseY.set(e.clientY);
          setCursorDimensions({ width: 64, height: 64 });
        }
      } else {
        // Default free-roaming idle state
        setIsHovering(false);
        setIsSticky(false);
        mouseX.set(e.clientX);
        mouseY.set(e.clientY);
        setCursorDimensions({ width: 32, height: 32 });
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseDown = () => setIsMouseDown(true);
    const handleMouseUp = () => setIsMouseDown(false);

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [mouseX, mouseY, isVisible]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] hidden md:block">
      {/* Liquid Mercury Morphing Outer Blob */}
      <motion.div
        className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 border border-white/25 bg-gradient-to-br from-white/10 via-[#7C8CFF]/15 to-[#5663FF]/5 mix-blend-screen backdrop-blur-[1px]"
        style={{
          x: springX,
          y: springY,
          width: cursorDimensions.width,
          height: cursorDimensions.height,
        }}
        animate={{
          scale: isMouseDown ? 0.9 : 1,
          // Morph seamlessly into a rounded capsule pill shape when hovering text layouts
          borderRadius: isHovering ? "14px" : "50%",
          boxShadow: isHovering
            ? "inset 0 2px 4px rgba(255,255,255,0.3), 0 0 24px rgba(124,140,255,0.45)"
            : "inset 0 1px 2px rgba(255,255,255,0.15), 0 4px 12px rgba(0,0,0,0.4)",
          backgroundColor: isHovering ? "rgba(124, 140, 255, 0.12)" : "rgba(255, 255, 255, 0.04)"
        }}
        transition={{
          type: "spring",
          stiffness: isSticky ? 180 : 250, // More relaxed fluid physics when mapping over layout elements
          damping: isSticky ? 18 : 22,
        }}
      />

      {/* Tiny Core Center Indicator */}
      <motion.div
        className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white shadow-[0_0_8px_#ffffff]"
        style={{
          x: springX,
          y: springY,
        }}
        animate={{
          width: isHovering ? 0 : 6,
          height: isHovering ? 0 : 6,
          opacity: isHovering ? 0 : 1
        }}
        transition={{ duration: 0.15 }}
      />
    </div>
  );
}