import React from 'react'
import { educationData } from '../data/educdata'

const EducationalHistory = () => {
  return (
    <div className='w-full flex flex-col gap-20 justify-end'>
      <h1 className='font-poppins text-[30px] leading-7 tracking-tight'>
        Educational<br />History
      </h1>
      <div className='pl-[38px] flex flex-col gap-20'>
        {educationData.map((edu, index) => (
          <div
            key={index}
            className='w-full h-[435px] flex gap-32'
          >
            <div className='w-[440px] h-full flex flex-col gap-4'>
              <div className='flex flex-col leading-7'>
                <h1 className='text-[22px] font- tracking-tight'>{edu.school}</h1>
                <h1 className='text-[15px] font-ibmmono'>{edu.period}</h1>
              </div>
              <p className='text-[14px] text-[#777777] font-noto'>{edu.description}</p>
              <div className='flex flex-col gap-1'>
                <div className='flex flex-col leading-5'>
                  <h1 className='text-[12px] font-noto font-medium'>Address</h1>
                  <p className='text-[12px] text-[#777777] font-noto'>{edu.address}</p>
                </div>
                <div className='flex flex-col leading-5'>
                  <button
                    className='w-[160px] px-[10px] py-[2px] mt-3 font-ibm text-[14px] rounded-full border border-black flex justify-between hover:bg-black hover:text-white transition'
                    onClick={() => window.open(edu.googleMaps, '_blank')}
                  >
                    <h1>Google Maps</h1>
                    <h1 className='rotate-180'>⟵</h1>
                  </button>
                  <button
                    className='w-[160px] px-[10px] py-[2px] mt-3 font-ibm text-[14px] rounded-full border border-black flex justify-between hover:bg-black hover:text-white transition'
                    onClick={() => window.open(edu.officialSite, '_blank')}
                  >
                    <h1>Official Site</h1>
                    <h1 className='rotate-180'>⟵</h1>
                  </button>
                </div>
              </div>
            </div>
            <div
              className='w-[900px] h-[90%] bg-cover bg-center'
              style={{ backgroundImage: `url(${edu.image})` }}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default EducationalHistory
