// components/SkillCard.jsx
import React from 'react';

const SkillCard = ({ title, items }) => {
  return (
    <div className='w-full flex flex-col md:flex-row items-start xl:w-full xl:flex-col xl:p-5 xl:bg-white xl:rounded-lg xl:text-[#d61723] xl:shadow-2xl xl:hover:scale-110 xl:gap-3 transition'>
      <div className='md:w-[23%] lg:w-[15%] xl:w-full flex gap-5 items-center justify-between'>
        <h1 className='md:w-full xl:font-bold xl:tracking-tighter xl:text-[25px]'>{title}</h1>
        <div className='h-[1px] w-full bg-white md:hidden' />
      </div>
      <ul className="w-[90%] md:w-[70%] md:text-[12px] lg:w-[50%] xl:text-black xl:grid-cols-2 xl:w-full xl:text-[14px] 2xl:text-[12px] grid grid-cols-2 list-disc list-inside text-white text-[8px] my-2 pl-5 md:my-0 md:border-l xl:border-none">
        {items.map((item, index) => (
          <li key={index}>{item.toUpperCase()}</li>
        ))}
      </ul>
    </div>
  );
};

export default SkillCard;
