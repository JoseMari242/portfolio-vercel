import React from 'react'


interface Props {

  skill1: string,
  skill2: string,
  skill3: string,
  skill4?: string

}

const SkillsLanguage = ({skill1, skill2, skill3, skill4}: Props) => {
  return (
    <div>
      <div className='relative mb-[3rem]'>
        <h1 className='p-5 w-[100%] uppercase bg-gray-800 rounded-sm text-white text-[20px] font-bold'>
          {skill1}
        </h1>
      </div>
      <div className='relative mb-[3rem]'>
        <h1 className='p-5 w-[100%] uppercase bg-gray-800 rounded-sm text-white text-[20px] font-bold'>
          {skill2}
        </h1>
      </div>
      <div className='relative mb-[3rem]'>
        <h1 className='p-5 w-[100%] uppercase bg-gray-800 rounded-sm text-white text-[20px] font-bold'>
          {skill3}
        </h1>
      </div>
      <div className='relative mb-[3rem]'>
        <h1 className='p-5 w-[100%] uppercase bg-gray-800 rounded-sm text-white text-[20px] font-bold'>
          {skill4}
        </h1>
      </div>
    </div>
  )
}

export default SkillsLanguage