import React, { useState, useEffect } from 'react';
import SkillCard from '../components/skillcard'; // adjust the path as needed
import { skills } from '../components/skillsdata';
import FB from '../assets/facebook.svg'
import IG from '../assets/instagram.svg'
import LD from '../assets/linkedin.svg'

const About = () => {
  const [openSection, setOpenSection] = useState(null);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleSection = (section) => {
    if (!isDesktop) {
      setOpenSection(openSection === section ? null : section);
    }
  };

  return (
    <div className='h-full bg-[#d61723] flex justify-center items-center'>
      <div className='w-[90%] md:w-[70%] h-[80%] md:h-[70%] flex flex-col gap-10 xl:flex-row'>
        <div className='h-full w-full flex flex-col gap-10'>
          <div className='w-full flex flex-col gap-5 text-white xl:gap-5'>
            <div className='flex flex-col xl:pr-5'>
              <h1 className='text-[25px] md:text-[35px] 2xl:text-[50px] font-semibold tracking-tighter uppercase'>Introduction.</h1>
              <p className='text-[14px] 2xl:text-[20px] italic'>Mike Nicklaus S. Ling | June 05, 2001</p>
            </div>
            <p className='text-[12px] md:text-[15px] xl:text-[14px] text-pretty'>
              Hi, names Mike Nicklaus Ling, and I am a frontend developer based in Davao City, Philippines.
              Currently, I am pursuing a Bachelor of Science degree majoring in Computer Science at Ateneo
              de Davao University, where I am in my third year of studies.<br /><br />
              Beyond coding, I have a strong artistic background in graphic design, portrait sketches, and
              photography. Initially, my interest was not focused on coding; however, I discovered a passion
              for frontend development due to its creative elements, particularly in website design and UI/UX
              design.
            </p>
          </div>
          <div className='hidden xl:flex flex-col gap-5'>
            <h1 className='text-white text-[25px] md:text-[35px] 2xl:text-[50px] font-semibold tracking-tighter uppercase'>Links.</h1>
            <div className='flex gap-3'>
              <a href='https://www.facebook.com/nicklaus.ling/' target='blank'><button><img src={FB} className='p-3 rounded-full border bg-white' /></button></a>
              <a href='https://www.instagram.com/lingnicklaus/' target='blank'><button><img src={IG} className='p-3 rounded-full border bg-white' /></button></a>
              <a href='https://www.linkedin.com/in/mike-nicklaus-ling-9a2695362/' target='blank'><button><img src={LD} className='p-3 rounded-full border bg-white' /></button></a>
            </div>
          </div>
        </div>

        <div className='w-full h-full xl:w-[80%] flex flex-col gap-5 text-white'>
          <h1 className='text-[25px] md:text-[30px] xl:pr-5 2xl:text-[50px] font-semibold tracking-tighter uppercase'>Skills.</h1>
          <div className='w-full h-[70%] flex flex-col gap-3 md:gap-5'>
            {skills.map((skillSet, index) => (
              <SkillCard key={index} title={skillSet.title} items={skillSet.items} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
