import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

const Projects = () => {
  return (
    <div className='bg-[#02050a] pt-[4rem] md:pt-[8rem] pb-[1rem]'>
        <h1 className='heading'>
            Pro<span className='text-green-400'>Jects</span>
        </h1>
        <div className='w-[80%] pt-[2rem] mx-auto'>
            <Link href="https://github.com/JoseMari242" passHref>
                <div className='transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]'>
                    <Image 
                        src="/images/JMGITHUB.png"
                        alt="GitHub Portfolio"
                        layout="fill"
                        className="object-contain"
                    />
                </div>
            </Link>
            <p className='text-[19px] text-slate-300 w-[80%] mt-4 text-center'>
              Este es mi perfil de GitHub, donde puedes encontrar una variedad de proyectos desarrollados con tecnologías como JavaScript, 
              TypeScript, React, y Node.js. También estoy aprendiendo Python e Inteligencia Artificial. 
              He construido aplicaciones full-stack que van desde calendarios y ecommerce, 
              hasta plataformas backend que permiten a los usuarios subir y gestionar información. 
              ¡Echa un vistazo a mis proyectos!
            </p>
        </div>
    </div>
  )
}

export default Projects
