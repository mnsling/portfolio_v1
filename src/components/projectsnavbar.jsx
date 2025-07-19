import React from 'react';

const ProjectsNavbar = ({ onCategoryChange, activeCategory }) => {
  const categories = [
    { label: 'All', value: 'all' },
    { label: 'Web Development', value: 'web' },
    { label: 'Figma Prototypes', value: 'uiux' },
    { label: 'Branding', value: 'branding' },
    { label: 'Motion Design', value: 'motiondesign' },
    { label: 'Graphic Design', value: 'graphicdesign' },
  ];

  return (
    <div className="w-full overflow-x-auto pb-2">
      <div className="flex gap-5 lg:gap-10 font-ibmmono text-[15px] whitespace-nowrap px-2">
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
    </div>
  );
};

export default ProjectsNavbar;
