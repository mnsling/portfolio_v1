import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { projectsByCategory } from '../components/data/projectsdata';
import ProjectsNavbar from '../components/projectsnavbar';

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  let currentProjects = [];

  if (activeCategory === 'all') {
    // Combine all projects across categories into one list
    Object.values(projectsByCategory).forEach((arr) => {
      currentProjects = currentProjects.concat(arr);
    });
  } else {
    currentProjects = projectsByCategory[activeCategory] || [];
  }

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
                <div key={project.id} className="flex flex-col gap-2">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-[20vw] object-cove mb-[15px]"
                  />
                  <h1 className='text-[20px] font-noto tracking-tight leading-5'>{project.title}</h1>
                  <p className='text-[12px] md:text-[14px] font-ibm leading-5 truncate'>{project.description}</p>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center text-gray-500 text-[50px] font-thin font-poppins tracking-tighter mt-60">
              Content yet to be uploaded.
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
