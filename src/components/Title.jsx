import React from 'react'

const Title = ({title}) => {
  return (
    <div className=' mt-[70px] sm:px-6 px-2  2xl:px-44 lg:px-[3rem] relative flex items-center'>
        <span className=' h-[1.5px] bg-custom-blue w-[150px] hidden md:block lg:w-[270px]'></span>
        <h3 className='  h-[60px] text-[19px] sm:text-[20px] mt-10 md:mt-2  md:text-[22px] lg:text-[34px] text-center  font-bold after:content[""] after:bg-custom-blue after:w-[100%] after:h-1 text-main-color m-auto w-fit'>{title}</h3>
        <span className=' hidden md:block h-[1.5px] bg-custom-blue w-[150px] lg:w-[270px]'></span>
    </div>
  )
}

export default Title