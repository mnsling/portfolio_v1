import React from 'react'
import Updates from '../components/section/updates'
import Tech from '../components/section/techstack'
import Hero from '../components/section/hero'
import Projects from '../components/section/projects'
import Services from '../components/section/services'
import Connect from '../components/section/connect'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'


const app = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 0 }}
      animate={{ opacity: 1, y: -20 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <div className='h-screen w-screen'>
        <div className=' px-[10px] h-full pt-[110px] bg-white flex justify-center'>
          <div className='h-full w-full xl:w-[1720px] mx-[40px] bg-white flex gap-10'>
            <div className='h-full w-full md:w-[300px] flex-shrink-0 bg-white flex flex-col gap-16 overflow-auto custom-scrollbar'>
              <div className='w-full flex flex-col gap-8'>
                <h1 className='text-[38px] font-poppins font-bold tracking-tighter leading-9'>Nick</h1>
                <div className='flex flex-col gap-2'>
                  <h1 className='font-ibmmono text-[18px] leading-5 tracking-tighter'>Where Art Breathes<br />in Code.</h1>
                  <p className='font-ibmmono text-[12px] text-[#777777] leading-[18px] tracking-tight'>I design websites that are visually striking and thoughtfully crafted. Every project I build
                    is guided by a deep appreciation for art, ensuring that beauty, function, and user experience
                    move in harmony.</p>
                  <Link to="/about" className='w-[160px] px-[10px] py-[2px] mt-3 font-ibm text-[14px] rounded-full border border-black flex justify-between hover:bg-black hover:text-white transition'>
                    <h1>About</h1>
                    <h1 className='rotate-180'>⟵</h1>
                  </Link>
                </div>
              </div>
              <div className='md:hidden'>
                <Hero />
              </div>
              <Updates />
              <Tech />
              <div className='flex flex-col gap-8 xl:hidden'>
                <Projects />
                <Services />
                <Connect />
              </div>
            </div>
            <Hero />
            <div className='hidden h-full w-[280px] flex-shrink-0 bg-white xl:flex flex-col gap-16 overflow-auto custom-scrollbar transition'>
              <Projects />
              <Services />
              <Connect />
            </div>
          </div>
        </div>
      </div>
    </motion.div >

  )
}

export default app