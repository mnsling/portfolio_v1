import React from 'react'
import { hobbiesData } from '../data/hobbydata'

const Hobbies = () => {
  return (
    <div className='w-full flex flex-col gap-5 justify-end pb-40'>
      <div className='w-full flex flex-col gap-20'>
        <h1 className='font-poppins text-[30px] leading-7 tracking-tight'>
          Life Outside<br />Tech
        </h1>
        <div className='w-full flex gap-20'>
          <p className='w-[440px] font-noto text-[14px] pl-[38px]'>
            A glimpse of my human side—beyond the digital and into the part of me that still feels, learns, and grows in a world moving fast toward the future.
          </p>
          <div className='w-[902px] grid grid-cols-2 gap-x-20 gap-y-10'>
            {hobbiesData.map((hobby, index) => (
              <div key={index} className='flex flex-col gap-3'>
                <div
                  className='w-[431px] h-[215px] bg-center bg-cover'
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
