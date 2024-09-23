import { ArrowDownTrayIcon } from '@heroicons/react/20/solid';
import React from 'react';

const About = () => {
  return (
    <div className='bg-[#121121] pb-[3rem] pt-[4rem] md:pt-[8rem]'>
      <div className='grid grid-cols-1 md:grid-cols-2 w-[80%] mx-auto gap-[3rem] items-center'>
        <div>
          <h1 className='text-[30px] font-bold uppercase text-[#55e6a5] mb-[1rem]'>
            ABOUT ME
          </h1>
          <h2 className='text-[24px] font-semibold text-[#55e6a5]'>Formación Full Stack</h2>
          <div className='mb-[3rem] flex items-center md:space-x-10'>
            <span className='w-[100px] hidden md:block h-[5px] bg-slate-400 rounded-sm'></span>
            <p className='text-[19px] text-slate-300'>
              Soy un Full-stack Developer con más de 1200 horas de práctica en diversas tecnologías, utilizando metodologías ágiles como Scrum. 
              Durante mi formación, he desarrollado proyectos frontend, backend y completos de full stack.
              <br />
              <br />
              Mi experiencia previa de cuatro años gestionando equipos en la administración local me ha enseñado la importancia de un buen ambiente laboral y la colaboración en equipo. Creo que un entorno positivo es clave para maximizar el rendimiento y la creatividad.
              <br />
              <br />
              Actualmente, estoy ampliando mis habilidades en Python e Inteligencia Artificial con IBM.
            </p>
          </div>
            <h2 className='text-[24px] font-semibold text-[#55e6a5]'>Experiencia en Derecho</h2>
          <div className='mb-[3rem] flex items-center md:space-x-10'>
              <span className='w-[100px] hidden md:block h-[5px] bg-slate-400 rounded-sm'></span>
            <p className='text-[19px] text-slate-300'>
              Cuento con la especialización en derecho laboral. He estado cuatro años en la administración pública gestionando el departamento de hacienda y contratación pública. 
              Además, como abogado, he gestionado expedientes de asuntos civiles, administrativos y ley de segunda oportunidad 
              durante más de dos años en despachos de abogados.
            </p>
          </div>
          <div className='mt-[2rem] flex items-center'>
            <a
              href='/item/CV_Jose_Maria_Gil_Lopez.pdf'
              download="CV_Jose_Maria_Gil_Lopez.pdf"
              className='px-[2rem] hover:bg-yellow-400 transition-all duration-200 py-[1rem] text-[18px] font-bold uppercase bg-[#55e6a5] text-black flex items-center space-x-2'
            >
              <p>Download CV</p>
              <ArrowDownTrayIcon className='w-[1.6rem] h-[1.7rem] text-black' />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
