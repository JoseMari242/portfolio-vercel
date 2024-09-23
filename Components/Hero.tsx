import React from 'react';
import Particle from './Particle';
import TextEffect from './TextEffect';
import Image from 'next/image';
import { ArrowDownTrayIcon } from '@heroicons/react/20/solid';

const Hero = () => {
  return (
    <div className="h-[88vh] bg-[url('/images/banner.jpg')] bg-cover bg-center">
      <Particle />
      <div className="w-[80%] grid-cols-1 mx-auto grid lg:grid-cols-2 gap-[3rem] h-[100%] items-center">
        {/* Texto de introducción */}
        <div>
          <h1 className="text-[35px] md:text-[50px] text-white font-bold">
            HOLA, SOY <span className='text-green-400'>JOSÉ MARÍA GIL!</span>
          </h1>
          <TextEffect />
          <p className='mt-[1.5rem] text-[18px] text-[#ffffff92]'>
            Soy desarrollador full stack especializado en tecnologías como JavaScript, TypeScript, React, Node.js y Python. 
            He trabajado en diversos proyectos, desde aplicaciones frontend hasta aplicaciones backend complejas.
          </p>
          {/* Botón para descargar el CV */}
          <div className='mt-[2rem] flex-col space-y-6 sm:space-y-0 sm:flex sm:flex-row items-center sm:space-x-6'>
            <a
              href='/item/CV_Jose_Maria_Gil_Lopez.pdf'
              download="CV_Jose_Maria_Gil_Lopez.pdf"
              className='px-[2rem] hover:bg-yellow-400 transition-all duration-200 py-[1rem] text-[18px]
              font-bold uppercase bg-[#55e6a5] text-black flex items-center space-x-2'
            >
              <p>Download CV</p>
              <ArrowDownTrayIcon className='w-[1.6rem] h-[1.7rem] text-black' />
            </a>
          </div>
        </div>
        {/* Imagen del perfil */}
        <div className='w-[500px] hidden bg-[#55e6a5] relative lg:flex items-center rounded-full h-[500px]'>
          <Image 
            src="/images/josemari.png" 
            alt="user" 
            layout="fill" 
            className='object-cover rounded-full'
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
