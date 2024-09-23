// import Image from 'next/image'
// import React from 'react'
// import Link from 'next/link'

// const Projects = () => {
//   return (
//     <div className='bg-[#02050a] pt-[4rem] md:pt-[8rem] pb-[1rem]'>
//         <h1 className='heading'>
//             Pro<span className='text-green-400'>Jects</span>
//         </h1>
//         <div className='w-[80%] pt-[2rem] mx-auto'>
//             <Link href="https://github.com/JoseMari242" passHref>
//                 <div className='transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]'>
//                     <Image 
//                         src="/images/JMGITHUB.png"
//                         alt="GitHub Portfolio"
//                         layout="fill"
//                         className="object-contain"
//                     />
//                 </div>
//             </Link>
//             <p className='text-[19px] text-slate-300 w-[80%] mt-4 text-center'>
//               Este es mi perfil de GitHub, donde puedes encontrar una variedad de proyectos desarrollados con tecnologías como JavaScript, 
//               TypeScript, React, y Node.js. También estoy aprendiendo Python e Inteligencia Artificial. 
//               He construido aplicaciones full-stack que van desde calendarios y ecommerce, 
//               hasta plataformas backend que permiten a los usuarios subir y gestionar información. 
//               ¡Echa un vistazo a mis proyectos!
//             </p>
//         </div>
//     </div>
//   )
// }

// export default Projects

import Image from 'next/image';
import React from 'react';
import Link from 'next/link';

const Projects = () => {
  return (
    <div className='bg-[#02050a] pt-[4rem] md:pt-[8rem] pb-[1rem]'>
        <h1 className='heading'>
            Pro<span className='text-green-400'>Jects</span>
        </h1>
        <div className='w-[80%] pt-[2rem] mx-auto'>
            <p className='text-[19px] text-slate-300 w-[80%] mt-4 text-center'>
              Este es mi perfil de GitHub, donde puedes encontrar proyectos realizados con tecnologías como JavaScript, TypeScript, React y Node.js. 
              También estoy aprendiendo Python e Inteligencia Artificial. Mis aplicaciones van desde un e-commerce hasta juegos y plataformas multifuncionales. Haz click para ver mis proyectos!
            </p>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mt-6'>
                {/* GitHub Profile */}
                <Link href="https://github.com/JoseMari242" passHref>
                    <div className='transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-full h-[200px] md:h-[300px]'>
                        <Image 
                            src="/images/JMGITHUB.png"
                            alt="GitHub Portfolio"
                            layout="fill"
                            className="object-contain"
                        />
                    </div>
                </Link>
                <p className='text-center text-white mt-2'>Perfil de GitHub: Explora mis proyectos.</p>

                {/* E-commerce Project */}
                <Link href="https://github.com/JoseMari242/ecommerce" passHref>
                    <div className='transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-full h-[250px] md:h-[350px]'>
                        <Image 
                            src="/images/ecom.png" 
                            alt="E-commerce Platform" 
                            layout="fill" 
                            className="object-contain" 
                        />
                    </div>
                </Link>
                <p className='text-center text-white mt-2'>E-commerce: Plataforma desarrollada con React, TypeScript y Vite.</p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mt-6'>
                {/* Game Project */}
                <Link href="https://github.com/JoseMari242/invasion_espacial_game" passHref>
                    <div className='transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-full h-[200px] md:h-[300px]'>
                        <Image 
                            src="/images/game.png" 
                            alt="Invasión Espacial" 
                            layout="fill" 
                            className="object-contain" 
                        />
                    </div>
                </Link>
                <p className='text-center text-white mt-2'>Invasión Espacial: Juego de disparos en 2D creado con Python y Pygame.</p>

                {/* Task App Project */}
                <Link href="https://github.com/JoseMari242/asistente_tareas" passHref>
                    <div className='transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-full h-[150px] md:h-[200px]'>
                        <Image 
                            src="/images/tarea.png" 
                            alt="Aplicación Multifuncional" 
                            layout="fill" 
                            className="object-contain" 
                        />
                    </div>
                </Link>
                <p className='text-center text-white mt-2'>Aplicación Multifuncional: Construida con Python y Django.</p>
            </div>
        </div>
    </div>
  );
};

export default Projects;
