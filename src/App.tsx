import { Navbar } from './components/layout/Navbar';
import { CustomCursor } from './components/layout/CustomCursor';
import { PremiumBackground } from './components/layout/PremiumBackground';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { AllProjectsAccordion } from './components/sections/AllProjectsAccordion';
import { TechStack } from './components/sections/TechStack';
import { Contact } from './components/sections/Contact';
import { Footer } from './components/layout/Footer';

export default function App() {
  return (
    <div className="min-h-screen w-full font-sans text-[#F5F5F5] overflow-x-hidden relative bg-transparent m-0 p-0">
      <PremiumBackground />
      <CustomCursor />
      <Navbar />
      <main className="relative z-10 flex flex-col w-full m-0 p-0">
        <Hero />
        <AllProjectsAccordion />
        <TechStack />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}