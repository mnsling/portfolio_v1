import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import ProjectsNavbar from '../components/projectsnavbar';
import { projectsByCategory } from '../components/data/projectsdata';

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const navigate = useNavigate();

  // Flatten all projects for "all" category
  const allProjects = Object.values(projectsByCategory).flat();

  const currentProjects =
    activeCategory === 'all'
      ? allProjects
      : projectsByCategory[activeCategory] || [];

  // Navigate to project detail page
  const handleProjectClick = (project) => {
    navigate(`/projects/${project.id}`);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 0 }}
      animate={{ opacity: 1, y: -20 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="w-full flex flex-col items-center justify-start pt-[110px] md:px-[40px] h-screen"
    >
      {/* Header */}
      <div className="w-full xl:w-[75%] flex flex-col gap-10 px-[10px] flex-shrink-0 mb-5">
        <div className="w-full h-fit flex items-end">
          <Link
            to="/"
            className="text-[38px] font-poppins font-bold tracking-tighter leading-9"
          >
            Nick
          </Link>
          <p className="font-ibm font-bold text-[18px] leading-6 ml-[12px] mr-[6px]">
            /
          </p>
          <p className="font-ibm font-bold text-[18px] leading-6 tracking-tight">
            Projects
          </p>
        </div>

        {/* Navbar */}
        <ProjectsNavbar
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />
      </div>

      {/* Scrollable Projects Grid */}
      <div className="w-full xl:w-[75%] px-[10px] flex-1 overflow-y-auto mt-6 custom-scrollbar">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {currentProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white overflow-hidden transition-transform duration-300 flex flex-col cursor-pointer"
              onClick={() => handleProjectClick(project)}
            >
              {/* Fixed image height for uniform grid */}
              <div className="w-full h-[250px] md:h-[350px] overflow-hidden">
                <img
                  src={project.main}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Caption wraps content naturally */}
              <div className="p-4 mb-10">
                <h3 className="text-lg font-noto">{project.title}</h3>
                <p className="text-sm text-gray-600 font-noto mt-1">
                  {project.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
