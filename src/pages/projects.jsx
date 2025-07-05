import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projectsByCategory } from '../components/data/projectsdata';
import ProjectsNavbar from '../components/projectsnavbar';

const TypingText = ({ text, delayPerLetter = 0.1 }) => {
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    setVisibleCount(0);
    if (text) {
      const interval = setInterval(() => {
        setVisibleCount((prev) => {
          if (prev < text.length) {
            return prev + 1;
          } else {
            clearInterval(interval);
            return prev;
          }
        });
      }, delayPerLetter * 1000);
      return () => clearInterval(interval);
    }
  }, [text, delayPerLetter]);

  return <span>{text.slice(0, visibleCount)}</span>;
};

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  const [showImages, setShowImages] = useState(false);
  const [showText, setShowText] = useState(false);

  let currentProjects = [];

  if (activeCategory === 'all') {
    Object.values(projectsByCategory).forEach((arr) => {
      currentProjects = currentProjects.concat(arr);
    });
  } else {
    currentProjects = projectsByCategory[activeCategory] || [];
  }

  useEffect(() => {
    if (selectedProject) {
      setShowImages(false);
      setShowText(false);

      const imgTimeout = setTimeout(() => {
        setShowImages(true);
      }, 500);

      const textTimeout = setTimeout(() => {
        setShowText(true);
      }, 1000);

      return () => {
        clearTimeout(imgTimeout);
        clearTimeout(textTimeout);
      };
    }
  }, [selectedProject]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 0 }}
      animate={{ opacity: 1, y: -20 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <div className="w-full h-screen flex pt-[110px] md:px-[40px] md:justify-center">
        <div className="w-full xl:w-[70%] h-full flex flex-col gap-20 px-[10px]">
          <ProjectsNavbar
            onCategoryChange={setActiveCategory}
            activeCategory={activeCategory}
          />

          {currentProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {currentProjects.map((project) => (
                <button
                  key={project.id}
                  className="flex flex-col gap-2 text-left"
                  onClick={() => setSelectedProject(project)}
                >
                  <img
                    src={project.main}
                    alt={project.title}
                    className="w-full h-[50vw] md:h-[25vw] xl:h-[18vw] object-cover mb-[15px]"
                  />
                  <h1 className="text-[20px] font-noto tracking-tight leading-5">
                    {project.title}
                  </h1>
                  <p className="text-[12px] md:text-[14px] font-ibm leading-5 truncate">
                    {project.caption}
                  </p>
                </button>
              ))}
            </div>
          ) : (
            <div className="text-center text-gray-500 text-[20px] lg:text-[50px] font-thin font-poppins tracking-tighter mt-32 lg:mt-60">
              Content yet to be uploaded.
            </div>
          )}
        </div>
      </div>
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 left-0 w-full h-full bg-white backdrop-blur-md flex justify-start items-center z-50"
            onClick={() => setSelectedProject(null)}
          >
            <div className='w-full flex flex-col lg:flex-row justify-start items-center gap-5 lg:gap-20 custom-scrollbar pt-[85px] px-5'>
              <div className='h-[800px] w-full lg:w-[70%] overflow-y-auto'>
                <AnimatePresence>
                  {showText && (
                    <motion.div
                      className='w-full flex flex-col gap-10 justify-start items-start text-left mb-20 lg:hidden'
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <div className='w-full grid grid-cols-2 gap-x-3 gap-y-10'>
                        <div className='w-full flex flex-col gap-2'>
                          <h1 className='w-full pb-2 border-b border-black font-ibmmono text-[15px]'>
                            <TypingText text='[ PROJECT ]' />
                          </h1>
                          <motion.p
                            className='text-[14px] font-poppins tracking-tighter custom-truncate'
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                          >
                            {selectedProject.description}
                          </motion.p>
                        </div>
                        <div className='w-full flex flex-col gap-2'>
                          <h1 className='w-full pb-2 border-b border-black font-ibmmono text-[15px]'>
                            <TypingText text='[ CLIENT ]' />
                          </h1>
                          <motion.p
                            className='text-[14px] font-poppins tracking-tighter custom-truncate'
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                          >
                            {selectedProject.client}
                          </motion.p>
                        </div>
                        <div className='w-full flex flex-col gap-2'>
                          <h1 className='w-full pb-2 border-b border-black font-ibmmono text-[15px]'>
                            <TypingText text='[ SERVICE ]' />
                          </h1>
                          <motion.p
                            className='text-[14px] font-poppins tracking-tighter custom-truncate'
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                          >
                            {selectedProject.service}
                          </motion.p>
                        </div>
                        <div className='w-full flex flex-col gap-2'>
                          <h1 className='w-full pb-2 border-b border-black font-ibmmono text-[15px]'>
                            <TypingText text='[ INDUSTRY ]' />
                          </h1>
                          <motion.p
                            className='text-[14px] font-poppins tracking-tighter custom-truncate'
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                          >
                            {selectedProject.industry}
                          </motion.p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
                <AnimatePresence>
                  {showImages && selectedProject.images && (
                    <motion.div
                      className="grid grid-cols-1 gap-5 lg:gap-10 xl:gap-20 lg:pt-0 pb-6"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      {selectedProject.images.map((img, idx) => (
                        <img
                          key={idx}
                          src={img}
                          alt={`Preview ${idx + 1}`}
                          className="w-full object-cover"
                        />
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <AnimatePresence>
                {showText && (
                  <motion.div
                    className='hidden h-full max-w-[430px] md:max-w-[900px] lg:flex flex-col gap-10 justify-start items-start text-left lg:p-4 pb-40'
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className='max-w-[350px] grid grid-cols-1 gap-x-10 gap-y-10'>
                      <div className='w-full flex flex-col gap-2'>
                        <h1 className='w-full pb-2 border-b border-black font-ibmmono text-[15px]'>
                          <TypingText text='[ PROJECT ]' />
                        </h1>
                        <motion.p
                          className='text-[14px] font-noto'
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5 }}
                        >
                          {selectedProject.title}
                        </motion.p>
                        <motion.p
                          className='text-[14px] font-noto'
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.2 }}
                        >
                          {selectedProject.description}
                        </motion.p>
                      </div>
                      <div className='w-full flex flex-col gap-2'>
                        <h1 className='w-full pb-2 border-b border-black font-ibmmono text-[15px]'>
                          <TypingText text='[ CLIENT ]' />
                        </h1>
                        <motion.p
                          className='text-[14px] font-noto'
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5 }}
                        >
                          {selectedProject.client}
                        </motion.p>
                      </div>
                      <div className='w-full flex flex-col gap-2'>
                        <h1 className='w-full pb-2 border-b border-black font-ibmmono text-[15px]'>
                          <TypingText text='[ SERVICE ]' />
                        </h1>
                        <motion.p
                          className='text-[14px] font-noto'
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5 }}
                        >
                          {selectedProject.service}
                        </motion.p>
                      </div>
                      <div className='w-full flex flex-col gap-2'>
                        <h1 className='w-full pb-2 border-b border-black font-ibmmono text-[15px]'>
                          <TypingText text='[ INDUSTRY ]' />
                        </h1>
                        <motion.p
                          className='text-[14px] font-noto'
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5 }}
                        >
                          {selectedProject.industry}
                        </motion.p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Projects;
