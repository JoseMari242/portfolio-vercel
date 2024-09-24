import { CodeBracketSquareIcon, CommandLineIcon, RocketLaunchIcon, AcademicCapIcon } from '@heroicons/react/20/solid'
import React from 'react'

const Services = () => {
  return (
    <div className='bg-[#121212] pt-[4rem] md:pt-[8rem] pb-[5rem]'>
        <p className='heading'>
            My <span className='text-green-400'>Services</span>
        </p>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-[80%] mx-auto items-center 
        gap-[3rem] mt-[4rem] text-white'>
          <div>
              <div className='bg-red-700 hover:scale-110 transform transition-all duration-300 hover:-rotate-6 
              uppercase font-semibold text-center p-[2rem] h-[400px] flex flex-col justify-between'>
                <CodeBracketSquareIcon className='w-[6rem] h-[6rem] mx-auto text-[#d3fae8]'/>
                <h1 className='text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]'>
                  Frontend
                </h1>
                <p className='text-[15px] text-[#d3d2d2] font-normal'>
                  Desarrollo de interfaces responsivas que maximizan la experiencia del usuario y aceleran el tiempo de carga.
                </p>
              </div>
          </div>
          <div>
              <div className='bg-violet-700 hover:scale-110 transform transition-all duration-300 
              uppercase font-semibold text-center p-[2rem] h-[400px] flex flex-col justify-between'>
                <RocketLaunchIcon className='w-[6rem] h-[6rem] mx-auto text-[#d3fae8]'/>
                <h1 className='text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]'>
                  Backend
                </h1>
                <p className='text-[15px] text-[#d3d2d2] font-normal'>
                  Diseño de sistemas backend escalables para aplicaciones web y móviles, optimizando el rendimiento y la seguridad.
                </p>
              </div>
          </div>
          <div>
              <div className='bg-green-700 hover:scale-110 transform transition-all duration-300 
              uppercase font-semibold text-center p-[2rem] h-[400px] flex flex-col justify-between'>
                <CommandLineIcon className='w-[6rem] h-[6rem] mx-auto text-[#d3fae8]'/>
                <h1 className='text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]'>
                  Full stack
                </h1>
                <p className='text-[15px] text-[#d3d2d2] font-normal'>
                  Combino la destreza del frontend y la lógica del backend para crear aplicaciones completas y funcionales. 
                  Desde interfaces interactivas hasta sistemas robustos de manejo de datos. 
                </p>
              </div>
          </div>
          <div>
              <div className='bg-blue-700 hover:scale-110 transform transition-all duration-300 hover:rotate-6 
              uppercase font-semibold text-center p-[2rem] h-[400px] flex flex-col justify-between'>
                <AcademicCapIcon className='w-[6rem] h-[6rem] mx-auto text-[#d3fae8]'/>
                <h1 className='text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]'>
                  Abogado
                </h1>
                <p className='text-[15px] text-[#d3d2d2] font-normal'>
                  Asesoría legal en derecho laboral, administrativo, civil y ley de segunda oportunidad, ofreciendo soluciones personalizadas.
                </p>
              </div>
          </div>
        </div>
    </div>
  )
}

export default Services

