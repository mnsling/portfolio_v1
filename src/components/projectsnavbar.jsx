import React from 'react';

const ProjectsNavbar = ({ onCategoryChange, activeCategory }) => {
  const categories = [
    { label: 'All', value: 'all' },
    { label: 'Frontend Development', value: 'frontend' },
    { label: 'Figma Prototypes', value: 'uiux' },
    { label: 'Branding', value: 'branding' },
    { label: 'Motion Design', value: 'motiondesign' },
    { label: 'Graphic Design', value: 'graphicdesign' },
  ];

  return (
    <div className="w-full flex flex-wrap gap-5 leading-3 lg:gap-10 font-ibmmono text-[15px]">
      {categories.map((cat) => (
        <button
          key={cat.value}
          onClick={() => onCategoryChange(cat.value)}
          className={`transition ${
            activeCategory === cat.value
              ? 'text-black underline'
              : 'text-[#777777]'
          }`}
        >
          {cat.label}
        </button>
      ))}
    </div>
  );
};

export default ProjectsNavbar;
