import About from '@/Components/About';
import Contact from '@/Components/Contact';
import Hero from '@/Components/Hero';
import MobileNav from '@/Components/MobileNav';
import Nav from '@/Components/Nav';
import Projects from '@/Components/Projects';
import Services from '@/Components/Services';
import Skills from '@/Components/Skills';
import React, { useState, useRef } from 'react';

const Homepage = () => {
  const [nav, setNav] = useState(false);
  const openNav = () => setNav(true);
  const closeNav = () => setNav(false);

  // Crear refs para las secciones
  const aboutRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className='overflow-x-hidden'>
      <div>
        <MobileNav  nav={nav}
  closeNav={closeNav}
  scrollToSection={scrollToSection}
  aboutRef={aboutRef}
  servicesRef={servicesRef}
  skillsRef={skillsRef}
  projectsRef={projectsRef}
  contactRef={contactRef}/>
        <Nav 
          openNav={openNav} 
          scrollToSection={scrollToSection}
          aboutRef={aboutRef}
          servicesRef={servicesRef}
          skillsRef={skillsRef}
          projectsRef={projectsRef}
          contactRef={contactRef}
        />
        <Hero />
        <div className='relative z-[30]'>
          <div ref={aboutRef}><About /></div>
          <div ref={servicesRef}><Services /></div>
          <div ref={skillsRef}><Skills /></div>
          <div ref={projectsRef}><Projects /></div>
          <div ref={contactRef}><Contact /></div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;

