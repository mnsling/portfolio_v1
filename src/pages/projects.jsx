import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navbar from '../components/projectsnavbar';
import { projectsByCategory } from '../components/data/projectsdata';

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  // Flatten all projects for 'all' category
  const allProjects = Object.values(projectsByCategory).flat();

  const currentProjects =
    activeCategory === 'all'
      ? allProjects
      : projectsByCategory[activeCategory] || [];

  return (
    <motion.div
      initial={{ opacity: 0, y: 0 }}
      animate={{ opacity: 1, y: -20 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <div className="w-full flex flex-col gap-16 pt-[110px] md:px-[40px] items-center justify-center">
        {/* Header + Navbar */}
        <div className="w-full xl:w-[70%] flex flex-col gap-10 px-[10px]">
          <div className="w-full h-fit flex items-end">
            <Link
              to="/"
              className="text-[38px] font-poppins font-bold tracking-tighter leading-9"
            >
              Nick
            </Link>
            <p className="font-ibm font-bold text-[18px] leading-6 ml-[12px] mr-[6px]">/</p>
            <p className="font-ibm font-bold text-[18px] leading-6 tracking-tight">
              Projects
            </p>
          </div>
          <Navbar
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />
        </div>

        {/* Project Grid */}
        <div className="w-full xl:w-[70%] h-full grid grid-cols-1 lg:grid-cols-2 gap-10 pb-20">
          {currentProjects.map((project) => (
            <Link
              key={project.id}
              to={`/projects/${project.id}`}
              className="flex flex-col gap-3 px-[10px] text-left hover:opacity-80 transition"
            >
              <div className="w-full h-[50vw] lg:h-[20vw] bg-black overflow-hidden">
                <img
                  src={project.main || project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col gap-1">
                <h1 className="font-noto tracking-tight text-[17px]">
                  {project.title}
                </h1>
                <p className="font-noto font-light text-[12px] md:text-[14px]">
                  {project.caption}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
