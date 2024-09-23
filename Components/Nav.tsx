import { Bars3Icon } from '@heroicons/react/16/solid';
import React from 'react';

interface Props {
  openNav: () => void;
  scrollToSection: (ref: React.RefObject<HTMLDivElement>) => void;
  aboutRef: React.RefObject<HTMLDivElement>;
  servicesRef: React.RefObject<HTMLDivElement>;
  skillsRef: React.RefObject<HTMLDivElement>;
  projectsRef: React.RefObject<HTMLDivElement>;
  contactRef: React.RefObject<HTMLDivElement>;
}

const Nav = ({ openNav, scrollToSection, aboutRef, servicesRef, skillsRef, projectsRef, contactRef }: Props) => {
  return (
    <div className='w-[100%] sticky z-[10000] top-0 h-[12vh] bg-[#141c27] shadow-md'>
      <div className='flex items-center justify-between w-[80%] mx-auto h-[100%]'>
        <h1 className='flex-[0.6] cursor-pointer text-[25px] text-white font-bold'>
          WEB
          <span className='text-green-400'>DEV</span>
        </h1>
        <div className='nav-link' onClick={() => scrollToSection(aboutRef)}>ABOUT</div>
        <div className='nav-link' onClick={() => scrollToSection(servicesRef)}>SERVICES</div>
        <div className='nav-link' onClick={() => scrollToSection(skillsRef)}>SKILLS</div>
        <div className='nav-link' onClick={() => scrollToSection(projectsRef)}>PROJECTS</div>
        <div className='nav-link' onClick={() => scrollToSection(contactRef)}>CONTACT</div>
        <div onClick={openNav}>
          <Bars3Icon className='w-[2rem] md:hidden h-[2rem] cursor-pointer text-green-400' />
        </div>
      </div>
    </div>
  );
}

export default Nav;
