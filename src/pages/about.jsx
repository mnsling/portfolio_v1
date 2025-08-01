import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Educ from '../components/section/educ'
import Hobby from '../components/section/hobby'


const about = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 0 }}
      animate={{ opacity: 1, y: -20 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <div className='w-full flex pt-[110px] md:px-[40px] md:justify-center'>
        <div className='w-full xl:w-[70%] flex flex-col gap-20 md:gap-40 px-[10px]'>
          <div className='w-full h-fit flex items-end'>
            <Link to="/" className='text-[38px] font-poppins font-bold tracking-tighter leading-9'>Nick</Link>
            <p className='font-ibm font-bold text-[18px] leading-6 ml-[12px] mr-[6px]'>/</p>
            <p className='font-ibm font-bold text-[18px] leading-6 tracking-tight'>About</p>
          </div>
          <div className='flex flex-col gap-40'>
            <div className='w-full flex justify-end'>
              <div className='w-full md:w-[450px] flex flex-col gap-5 justify-end'>
                <h1 className='font-noto text-[25px] md:text-[30px]'>Where Art Breathes in Code...</h1>
                <p className='font-noto text-[12px] md:text-[14px]'>I was born with an eye for creativity—but not the talent. What I lacked, I made up for with hard work.
                  Everything I do, I treat as art—whether black and white or full of color.<br /><br />In college, I left art behind,
                  thinking it had no place in my future. I turned to tech, searching for a path where creativity could still
                  live. I may not be a coding genius, but I found passion in designing and building websites—a place where
                  logic meets beauty.<br /><br />This is where art breathes in code. And where I finally breathe with it.</p>
              </div>
            </div>
            <div className='w-full flex flex-col items-start gap-40'>
              <div className='w-full md:w-[700px] flex flex-col gap-5 justify-end'>
                <h1 className='font-poppins text-[30px] tracking-tight'>Hi, mike here!</h1>
                <p className='font-noto text-[12px] md:text-[14px]'>I am a frontend developer based in Davao City, Philippines. Currently,
                  I am pursuing a Bachelor of Science degree majoring in Computer Science at Ateneo de Davao University, where I am in my third year of studies.<br /><br />
                  Beyond coding, I have a strong artistic background in graphic design, portrait sketches, and photography. Initially, my interest was not focused
                  on coding; however, I discovered a passion for frontend development due to its creative elements, particularly in website design and UI/UX design..</p>
              </div>
              <Educ />
              <Hobby />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default about 