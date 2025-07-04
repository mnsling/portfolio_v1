import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { updatesData } from '../components/data/updatesdata'

const Updates = () => {
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
            <Link to="/" className='text-[38px] font-poppins font-bold tracking-tighter leading-9'>
              Nick
            </Link>
            <p className='font-ibm font-bold text-[18px] leading-6 ml-[12px] mr-[6px]'>/</p>
            <p className='font-ibm font-bold text-[18px] leading-6 tracking-tight'>Updates</p>
          </div>
          <div className='flex flex-col gap-16 pb-[70px]'>
            {updatesData.map((update, index) => (
              <div key={index} className='flex flex-col gap-3'>
                <div className='flex flex-col gap-1 md:flex-row md:gap-10'>
                  <p className='text-[15px] font-ibmmono tracking-tight pt-[5px]'>
                    {update.date}
                  </p>
                  <div className='w-full flex flex-col gap-1 pb-[70px] border-b border-black'>
                    <h1 className='text-[22px] font-noto tracking-tight mb-[14px]'>
                      {update.title}
                      <p className='text-[13px] md:text-[16px] font-noto font-light tracking-tight mt-[24px]'>
                        {update.description}
                      </p>
                      <p className='text-[13px] md:text-[16px] text-[#777777] font-noto tracking-tight mt-[24px]'>
                        Collaborators: {update.collaborators.join(', ')}
                      </p>
                    </h1>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </motion.div>
  )
}

export default Updates
