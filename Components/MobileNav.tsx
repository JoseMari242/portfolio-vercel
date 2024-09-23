import { XMarkIcon } from '@heroicons/react/16/solid';
import React from 'react';

interface Props {
  nav: boolean;
  closeNav: () => void;
  scrollToSection: (ref: React.RefObject<HTMLDivElement>) => void;
  aboutRef: React.RefObject<HTMLDivElement>;
  servicesRef: React.RefObject<HTMLDivElement>;
  skillsRef: React.RefObject<HTMLDivElement>;
  projectsRef: React.RefObject<HTMLDivElement>;
  contactRef: React.RefObject<HTMLDivElement>;
}

const MobileNav = ({
  nav,
  closeNav,
  scrollToSection,
  aboutRef,
  servicesRef,
  skillsRef,
  projectsRef,
  contactRef,
}: Props) => {
  const navAnimation = nav ? 'translate-x-0' : 'translate-x-[-100%]';

  return (
    <div
      className={`fixed ${navAnimation} transform transition-all duration-300 top-0 left-0 right-0 bottom-0 z-[1000000] bg-[#09101a]`}
    >
      {/* Menú con opciones */}
      <div className="w-full h-full flex flex-col items-center justify-center space-y-8">
        <div className="nav-link-mobile" onClick={() => { scrollToSection(aboutRef); closeNav(); }}>ABOUT</div>
        <div className="nav-link-mobile" onClick={() => { scrollToSection(servicesRef); closeNav(); }}>SERVICES</div>
        <div className="nav-link-mobile" onClick={() => { scrollToSection(skillsRef); closeNav(); }}>SKILLS</div>
        <div className="nav-link-mobile" onClick={() => { scrollToSection(projectsRef); closeNav(); }}>PROJECTS</div>
        <div className="nav-link-mobile" onClick={() => { scrollToSection(contactRef); closeNav(); }}>CONTACT</div>
      </div>
      {/* Icono de cierre */}
      <div
        onClick={closeNav}
        className="absolute cursor-pointer top-[2rem] right-[2rem] w-[2rem] h-[2rem] text-green-300"
      >
        <XMarkIcon />
      </div>
    </div>
  );
};

export default MobileNav;
