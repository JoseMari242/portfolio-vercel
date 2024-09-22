import React from 'react'
import SkillsItem from './SkillsItem'
import SkillsLanguage from './SkillsLanguage'

const Skills = () => {
  return (
    <div className='pt-[4rem] md:pt-[8rem] pb-[5rem] bg-[#09101a]'>
      <h1 className='heading'>
        Education & <span className='text-green-400'>Skill</span>
      </h1>
      <div className='w-[80%] mx-auto pt-[4rem] md:pt-[8rem] grid grid-cols-1 md:grid-cols-2 gap-[2rem] items-center'>
        <div>
          <SkillsItem title="Full stack Developer" year="2023 - 2024" />
          <SkillsLanguage 
          skill1="html"
          skill2="css"
          skill3="javascript"
          skill4='Bootstrap'
           />
        </div>
        <div>
          <SkillsItem title="Frontend Developer" year="2023 - 2024"/>
          <SkillsLanguage 
          skill1="React"
          skill2="Typescript"
          skill3="Tailwind CSS"
          skill4='Next' />
        </div>
        <div>
          <SkillsItem title="Backend" year="2023 - 2024"/>
          <SkillsLanguage 
          skill1="Node"
          skill2="PostgreSQL"
          skill3='MONGODB'
          skill4='Prisma' />
        </div>
        <div>
          <SkillsItem title="Abogado" year="2013 - 2020"/>
          <SkillsLanguage 
          skill1="Derecho laboral"
          skill2="Derecho administrativo"
          skill3="Derecho civil"
          skill4='Ley de Segunda Oportunidad' />
        </div>
      </div>
    </div>
  )
}

export default Skills