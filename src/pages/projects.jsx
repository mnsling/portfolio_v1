import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { projects } from '../components/data/projectsdata';

const Projects = () => {
  const navigate = useNavigate();

  const handleProjectClick = (project) => {
    navigate(`/projects/${project.id}`);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 0 }}
      animate={{ opacity: 1, y: -20 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="w-full flex flex-col items-center justify-start pt-[110px] md:px-[40px] min-h-screen bg-[#fcfcfc] text-black select-none"
    >
      {/* ---------------------------------------------------------------------- */}
      {/* FIXED HEADER BREADCRUMB (Preserved)                                    */}
      {/* ---------------------------------------------------------------------- */}
      <div className="w-full xl:w-[75%] flex flex-col gap-10 px-[10px] flex-shrink-0 mb-12">
        <div className="w-full h-fit flex items-end">
          <Link
            to="/"
            className="text-[38px] font-poppins font-bold tracking-tighter leading-9 text-black"
          >
            Nick
          </Link>
          <p className="font-ibm font-bold text-[18px] leading-6 ml-[12px] mr-[6px] text-gray-500">
            /
          </p>
          <p className="font-ibm font-bold text-[18px] leading-6 tracking-tight text-black">
            Projects
          </p>
        </div>
      </div>

      {/* ---------------------------------------------------------------------- */}
      {/* HOVER BACKGROUND REVEAL GRID REPLICATED                                */}
      {/* ---------------------------------------------------------------------- */}
      <div className="w-full xl:w-[75%] px-[10px] flex flex-col gap-8 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          <AnimatePresence mode="popLayout">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ type: 'spring', stiffness: 100, damping: 22 }}
                onClick={() => handleProjectClick(project)}
                className="w-full h-[440px] p-8 flex flex-col justify-between cursor-pointer relative overflow-hidden group transition-all duration-500 bg-black shadow-[0_10px_35px_rgba(0,0,0,0.015)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)]"
              >
                
                {/* Upper Metadata Row */}
                <div className="z-10 flex justify-between items-start w-full">
                  <span className="text-[11px] font-ibm font-bold tracking-widest uppercase transition-colors duration-500 text-white">
                    {project.industry || 'Case Study'}
                  </span>
                  <span className="text-[11px] font-ibm font-medium transition-colors duration-500 text-white">
                    0{index + 1}
                  </span>
                </div>

                {/* Typography Block */}
                <div className="z-10 flex flex-col gap-3 mt-auto mb-6">
                  <h3 className="font-poppins font-medium text-[26px] tracking-tight leading-tight transition-colors duration-500 text-white">
                    {project.title}
                  </h3>
                  <p className="font-noto text-[13.5px] font-light leading-relaxed transition-colors duration-500 text-white group-hover:text-white/70 line-clamp-3">
                    <span className="font-medium mr-1.5 transition-colors duration-500 text-white group-hover:text-white/90">
                      {project.caption}
                    </span>
                  </p>
                </div>

                {/* Bottom Interactive Row Container */}
                <div className="z-10 w-full flex justify-between items-center pt-2">
                  <span className="text-[11px] font-medium font-ibm opacity-0 -translate-x-2 transition-all duration-500 text-white group-hover:opacity-100 group-hover:translate-x-0">
                    Explore Project
                  </span>
                  <div className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-500 bg-gray-50 border text-black group-hover:bg-white group-hover:border-white group-hover:text-black">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transform transition-transform duration-500 -rotate-45 group-hover:rotate-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </div>

                {/* Hidden Image Card Mask Revealed on Hover */}
                <div className="absolute inset-0 w-full h-full opacity-0 pointer-events-none transition-all duration-700 ease-out scale-105 group-hover:opacity-100 group-hover:scale-100">
                  <img
                    src={project.main}
                    alt={project.title}
                    className="w-full h-full object-cover brightness-[0.7]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60" />
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;