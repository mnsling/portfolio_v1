import React, { useEffect, useState, useRef } from 'react';
import Navbar from '../components/navbar';
import Home from './home.jsx';
import About from '../pages/about.jsx';
import Exp from '../pages/experience.jsx';
import Proj from '../pages/projects.jsx';

const App = () => {
  const [colorMode, setColorMode] = useState('white');

  const sections = {
    home: useRef(null),
    about: useRef(null),
    exp: useRef(null),
    proj: useRef(null),
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            if (id === 'home' || id === 'proj') {
              setColorMode('white');
            } else {
              setColorMode('dark');
            }
          }
        });
      },
      { threshold: 0.6 }
    );

    Object.values(sections).forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="font-poppins scroll-smooth">
      <Navbar colorMode={colorMode} />

      <div id="home" ref={sections.home} className="h-screen bg-white sticky top-0 z-[10]">
        <Home />
      </div>
      <div id="about" ref={sections.about} className="h-screen bg-orange-500 sticky top-0 z-[20]">
        <About />
      </div>
      <div id="exp" ref={sections.exp} className="h-screen bg-black sticky top-0 z-[30]">
        <Exp />
      </div>
      <div id="proj" ref={sections.proj} className="h-screen bg-white sticky top-0 z-[40]">
        <Proj />
      </div>
    </div>
  );
};

export default App;
