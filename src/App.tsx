/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from './components/layout/Navbar';
import { CustomCursor } from './components/layout/CustomCursor';
import { PremiumBackground } from './components/layout/PremiumBackground';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { AllProjectsAccordion } from './components/sections/AllProjectsAccordion';
import { TechStack } from './components/sections/TechStack';
import { Contact } from './components/sections/Contact';
import { Footer } from './components/layout/Footer';
import { motion } from 'motion/react';

export default function App() {
  return (
    <div className="min-h-screen font-sans text-[#F5F5F5] overflow-x-clip pt-safe selection:bg-[#7C8CFF] selection:text-white relative bg-transparent">
      <PremiumBackground />
      <CustomCursor />
      <Navbar />
      <main className="relative z-10">
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
