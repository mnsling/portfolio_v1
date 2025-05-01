import React, { useRef, useState, useEffect } from 'react';
import Navbar from '../components/navbar';
import Home from '../pages/home';
import About from '../pages/about';
import Exp from '../pages/experience';
import Proj from '../pages/projects';
import Footer from '../components/footer'

const App = () => {
  const homeRef = useRef();
  const aboutRef = useRef();
  const experienceRef = useRef();
  const projectsRef = useRef();
  const [bgColor, setBgColor] = useState('white');

  const handleScroll = (sectionId) => {
    const sectionMap = {
      landing: homeRef,
      about: aboutRef,
      experience: experienceRef,
      projects: projectsRef,
    };
    sectionMap[sectionId]?.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            // Set based on your section background color
            if (id === 'home' || id === 'projects') {
              setBgColor('white');
            } else {
              setBgColor('dark');
            }
          }
        }
      },
      { threshold: 0.6 }
    );

    const sections = [homeRef, aboutRef, experienceRef, projectsRef];
    sections.forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => {
      sections.forEach((ref) => {
        if (ref.current) observer.unobserve(ref.current);
      });
    };
  }, []);

  return (
    <div className="font-poppins">
      <Navbar bgColor={bgColor} handleScroll={handleScroll} />
      <section id="home" ref={homeRef} className="sticky top-0 h-screen z-10">
        <Home />
      </section>
      <section id="about" ref={aboutRef} className="sticky top-0 h-screen z-20">
        <About />
      </section>
      <section id="experience" ref={experienceRef} className="sticky top-0 h-screen z-30">
        <Exp />
      </section>
      <section id="projects" ref={projectsRef} className="sticky top-0 h-screen z-40">
        <Proj />
        <Footer/>
      </section>
    </div>
  );
};

export default App;
