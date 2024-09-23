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

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2 mt-6'>
                {/* GitHub Profile Card */}
                <div className='bg-[#1e1e2f] p-4 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl'>
                    <Link href="https://github.com/JoseMari242" passHref>
                        <div className='relative w-full h-[250px]'>
                            <div className='absolute top-2 right-2 z-10'>
                                <Image 
                                    src="/images/github-icon.png" // Cambia esta línea con la ruta de tu icono de GitHub
                                    alt="GitHub Icon"
                                    width={30} 
                                    height={30}
                                />
                            </div>
                            <Image 
                                src="/images/JMGITHUB.png"
                                alt="GitHub Portfolio"
                                layout="fill"
                                className="object-contain"
                            />
                        </div>
                        <p className='text-center text-white mt-2 text-sm'>Perfil de GitHub: Explora mis proyectos.</p>
                    </Link>
                </div>

                {/* E-commerce Project Card */}
                <div className='bg-[#1e1e2f] p-4 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl'>
                    <Link href="https://github.com/JoseMari242/ecommerce" passHref>
                        <div className='relative w-full h-[250px]'>
                            <div className='absolute top-2 right-2 z-10'>
                                <Image 
                                    src="/images/github-icon.png" // Cambia esta línea con la ruta de tu icono de GitHub
                                    alt="GitHub Icon"
                                    width={30} 
                                    height={30}
                                />
                            </div>
                            <Image 
                                src="/images/ecom.png" 
                                alt="E-commerce Platform" 
                                layout="fill" 
                                className="object-contain" 
                            />
                        </div>
                        <p className='text-center text-white mt-2 text-sm'>E-commerce: Plataforma desarrollada con React, TypeScript y Vite.</p>
                    </Link>
                </div>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2 mt-6'>
                {/* Game Project Card */}
                <div className='bg-[#1e1e2f] p-4 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl'>
                    <Link href="https://github.com/JoseMari242/invasion_espacial_game" passHref>
                        <div className='relative w-full h-[250px]'>
                            <div className='absolute top-2 right-2 z-10'>
                                <Image 
                                    src="/images/github-icon.png" // Cambia esta línea con la ruta de tu icono de GitHub
                                    alt="GitHub Icon"
                                    width={30} 
                                    height={30}
                                />
                            </div>
                            <Image 
                                src="/images/game.png" 
                                alt="Invasión Espacial" 
                                layout="fill" 
                                className="object-contain" 
                            />
                        </div>
                        <p className='text-center text-white mt-2 text-sm'>Invasión Espacial: Juego de disparos en 2D creado con Python y Pygame.</p>
                    </Link>
                </div>

                {/* Task App Project Card */}
                <div className='bg-[#1e1e2f] p-4 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl'>
                    <Link href="https://github.com/JoseMari242/asistente_tareas" passHref>
                        <div className='relative w-full h-[250px]'>
                            <div className='absolute top-2 right-2 z-10'>
                                <Image 
                                    src="/images/github-icon.png" // Cambia esta línea con la ruta de tu icono de GitHub
                                    alt="GitHub Icon"
                                    width={30} 
                                    height={30}
                                />
                            </div>
                            <Image 
                                src="/images/tarea.png" 
                                alt="Aplicación Multifuncional" 
                                layout="fill" 
                                className="object-contain" 
                            />
                        </div>
                        <p className='text-center text-white mt-2 text-sm'>Aplicación Multifuncional: Construida con Python y Django.</p>
                    </Link>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Projects;






