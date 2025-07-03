import React from 'react'
import { Link } from 'react-router-dom'
import { updatesData } from '../data/updatesdata'
import Arrow from '../../assets/arrow-right.svg'

const Updates = () => {
  // Get the latest 4 updates (assuming newest are first in the array)
  const latestUpdates = updatesData.slice(0, 4)

  return (
    <div className='flex flex-col gap-4'>
      <h1 className='text-[23px] font-poppins tracking-tighter flex items-center gap-2'><img src={Arrow} className='w-5 h-5'/> Updates</h1>
      <div className='flex flex-col'>
        {latestUpdates.map((update, index) => (
          <button
            key={index}
            className='font-noto text-[12px] text-left py-[10px] border-b border-black hover:text-[#777777] transition'
            onClick={() => {
              if (update.url) {
                window.open(update.url, '_blank')
              }
            }}
          >
            {update.title}
          </button>
        ))}
      </div>
      <Link
        to="/updates"
        className='w-[160px] px-[10px] py-[2px] mt-3 font-ibm text-[14px] rounded-full border border-black flex justify-between hover:bg-black hover:text-white transition'
      >
        <h1>More</h1>
        <h1 className='rotate-180'>⟵</h1>
      </Link>
    </div>
  )
}

export default Updates
