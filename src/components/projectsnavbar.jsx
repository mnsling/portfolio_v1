import React from 'react';
import { motion } from 'framer-motion';

const ProjectsNavbar = ({ onCategoryChange, activeCategory }) => {
  const categories = [
    { label: 'All', value: 'all' },
    { label: 'Development', value: 'dev' },
    { label: 'Figma Prototypes', value: 'uiux' },
    { label: 'Branding', value: 'branding' },
    { label: 'Motion Design', value: 'motiondesign' },
    { label: 'Graphic Design', value: 'graphicdesign' },
  ];

  return (
    <div className="w-full flex justify-center overflow-x-auto pb-4">
      {/* Main Container */}
      <div className="flex items-center gap-1 bg-[#EBECEF] p-1.5 rounded-full font-poppins text-[15px] whitespace-nowrap">
        {categories.map((cat) => {
          const isActive = activeCategory === cat.value;
          return (
            <button
              key={cat.value}
              onClick={() => onCategoryChange(cat.value)}
              className="relative px-5 py-2.5 rounded-full transition-colors duration-300 select-none outline-none text-[#1A1A1A]"
              style={{
                // Webkit tap highlight fix for mobile testing
                WebkitTapHighlightColor: 'transparent',
              }}
            >
              {/* This is the black pill that physically slides across */}
              {isActive && (
                <motion.span
                  layoutId="sliding-black-pill"
                  className="absolute inset-0 bg-[#1A1A1A] rounded-full"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              
              {/* Text label forced on top of the sliding pill */}
              <span className={`relative z-10 block transition-colors duration-200 ${
                isActive ? 'text-white' : 'text-[#1A1A1A] hover:text-black/70'
              }`}>
                {cat.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsNavbar;