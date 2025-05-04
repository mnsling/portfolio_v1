import React from 'react'
import myPhoto from '../assets/me.png' // replace with your actual image path

const About = () => {
  return (
    <div className='w-full h-screen bg-[#d61723] flex justify-center items-center'>
      <div className='w-[90%] h-full flex flex-col lg:flex-row justify-center gap-10 items-center transition
      md:w-[75%]
      lg:gap-0'>

        {/* Left: Text Content */}
        <div className='flex flex-col justify-center gap-5 lg:w-[50%] transition'>
          <div className='flex flex-col gap-2'>
            <h1 className='text-[8.5vw] text-white text-left font-semibold tracking-tighter md:text-[5vw] lg:text-[4vw] xl:text-[3vw] transition'>
              hi, mike here.
            </h1>
            <p className='text-[3vw] text-left text-white md:text-[1.6vw] lg:text-[1.3vw] xl:text-[1vw] 2xl:text-[0.8vw] transition'>
              I'm currently a 3rd Yr. Computer Science student from Ateneo de Davao University, fascinated by the creative side of tech especially frontend development and UI/UX design. I enjoy crafting clean, user-centered interfaces that make a real impact.
            </p>
          </div>

          <div className='flex flex-col gap-2'>
            <p className='text-[3vw] text-left text-white md:text-[1.6vw] lg:text-[1.3vw] xl:text-[1vw] 2xl:text-[0.8vw] transition'>Tools and Languages I have been working with:</p>
            <ul className='text-[2.5vw] grid grid-cols-2 list-disc pl-5 text-white md:text-[1.3vw] md:grid-cols-3 lg:text-[1vw] lg:grid-cols-2 xl:text-[0.8vw] 2xl:text-[0.6vw] transition'>
              <li>ReactJS</li>
              <li>NodeJS, Express</li>
              <li>Javascript</li>
              <li>Tailwindcss</li>
              <li>MySQL</li>
              <li>Figma</li>
              <li>Framer</li>
            </ul>
          </div>

          <p className='text-[3vw] text-left text-white md:text-[1.6vw] lg:text-[1.3vw] xl:text-[1vw] 2xl:text-[0.8vw] transition'>
            When I’m not immersed in code or design, I drift into my own universe sketching, or exploring new worlds through travel and photography. Strangely therapeutic, cleaning my space feels like realigning my energy core.
          </p>
        </div>

        {/* Right: Image on large screens */}
        <div className='hidden lg:block lg:w-[40vw] xl:w-[30vw] transition'>
          <img src={myPhoto} alt='Mike Nicklaus Ling' className='w-full' />
        </div>
      </div>
    </div>
  )
}

export default About
