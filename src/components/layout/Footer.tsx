export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 px-6 md:px-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between text-center md:text-left gap-4 bg-[#05050A]/40 backdrop-blur-xl backdrop-saturate-150 backdrop-brightness-110">
      <div className="font-serif text-lg tracking-widest text-[#B5B8C5]">NR.</div>
      
      <div className="font-mono text-[10px] text-[#B5B8C5]/60 uppercase tracking-widest">
        &copy; {currentYear} Niha Ruksar. All rights reserved.
      </div>
      
      <div className="font-mono text-[10px] text-[#B5B8C5]/60 uppercase tracking-widest">
        Design & Eng / NR
      </div>
    </footer>
  );
}
