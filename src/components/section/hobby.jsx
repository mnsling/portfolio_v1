import React from 'react'
import { hobbiesData } from '../data/hobbydata'

const Hobbies = () => {
  return (
    <div className='w-full flex flex-col gap-5 justify-end pb-40'>
      <div className='w-full flex flex-col gap-5 md:gap-20'>
        <h1 className='font-poppins text-[22px] md:text-[30px] leading-7 tracking-tight'>
          Life Outside Tech 6/6
        </h1>
        <div className='w-full flex flex-col md:flex-row gap-5 lg:gap-10'>
          <p className='w-full md:w-[440px] lg:w-[600px] xl:w-[400px] font-noto text-[14px] lg:pl-[38px]'>
            A glimpse of my human side—beyond the digital and into the part of me that still feels, learns, and grows in a world moving fast toward the future.
          </p>
          <div className='w-full xl:w-[902px] grid grid-cols-1 xl:grid-cols-2 gap-x-5 gap-y-10'>
            {hobbiesData.map((hobby, index) => (
              <div key={index} className='flex flex-col gap-3'>
                <div
                  className='w-full h-[50vw] md:h-[30vw] lg:h-[26vw] xl:h-[12vw] bg-center bg-cover'
                  style={{ backgroundImage: `url(${hobby.image})` }}
                />
                <div className='flex flex-col gap-2'>
                  <h1 className='text-[22px] font-noto tracking-tight'>{hobby.title}</h1>
                  <p className='text-[13px] text-[#777777] font-noto tracking-tight'>{hobby.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hobbies
