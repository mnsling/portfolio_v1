import React, { useState, useEffect } from 'react';
import Type from '../components/type'
import About from '../pages/about'
import Exp from '../pages/experience'
import Proj from '../pages/projects'

const Home = () => {
  const [bgColor, setBgColor] = useState('white');

  useEffect(() => {
    const sections = document.querySelectorAll('.section');

    const onScroll = () => {
      let activeSection = null;

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const sectionHeight = rect.bottom - rect.top;

        if (rect.top <= window.innerHeight * 0.5 && rect.bottom >= window.innerHeight * 0.3) {
          activeSection = section;
        }
      });

      if (activeSection) {
        setBgColor(activeSection.dataset.bgColor);
      }
    };


    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <div className="relative h-[400vh] font-poppins min-w-[30%]">
      {/* Navbar */}
      <div className="w-full flex justify-center">
        <div className={`fixed flex justify-between items-center min-w-[70%] z-50 pt-10 text-[2vw] md:text-[1.4vw] lg:text-[1.2vw] xl:text-[1vw] 2xl:text-[0.8vw] ${bgColor === 'white' ? 'text-black' : 'text-white'}`}>
          <h1 className={`font-semibold z-50 ${bgColor === 'white' ? 'text-[#d61723]' : 'text-[#fff]'}`}>NICK.</h1>
          <div className={`w-[10vw] md:w-[20vw] lg:w-[30vw] xl:w-[35vw] h-[1px] button ${bgColor === 'white' ? 'bg-[#d61723]' : 'bg-[#fff]'}`} />
          <div className={`flex gap-2 md:gap-4 xl:gap-8 font-semibold items-start ${bgColor === 'white' ? 'text-[#d61723]' : 'text-[#fff]'}`}>
            <button onClick={() => handleScroll('landing')}>home.</button>
            <button onClick={() => handleScroll('about')}>about.</button>
            <button onClick={() => handleScroll('experiences')}>experiences.</button>
            <button onClick={() => handleScroll('projects')}>projects.</button>
          </div>
        </div>
      </div>

      {/* Landing Section */}
      <div id="landing" className="sticky top-0 h-screen w-full z-10 flex items-center justify-center bg-[#f2f2f2] section" data-bg-color="white" style={{ scrollPaddingTop: '50px' }}>
        <h1 className='absolute text-[16.5vw] font-bold stroke'>PORTFOLIO.</h1>
        <div className='min-w-[70%] min-h-[20%] py-8 md:min-h-[30%] lg:min-h-[35%] xl:min-h-[50%] 2xl:min-h-[60%] flex justify-between z-50 button'>
          <Type />
        </div>
      </div>

      {/* About Section */}
      <About />

      {/* Experiences Section */}
      <Exp />

      {/* Projects Section */}
      <Proj/>
    </div>
  );
};

export default Home;
