import React, { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { IconButton } from '@mui/material';

const Navbar = ({ colorMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isWhiteBG = colorMode === 'white';
  const textColor = isWhiteBG ? 'text-[#d61723]' : 'text-white';

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const navItems = [
    { id: 'home', label: 'home' },
    { id: 'about', label: 'about' },
    { id: 'exp', label: 'experience' },
    { id: 'proj', label: 'projects' },
  ];

  return (
    <div className="w-screen flex justify-center pt-10 fixed z-50">
      <div className="w-[90%] md:w-[75%] flex justify-between items-center">
        <h1 className={`text-[16px] 2xl:text-[18px] font-semibold tracking-tighter ${textColor}`}>NICK.</h1>

        <div className={`hidden h-[1px] ${isWhiteBG ? 'bg-[#d61723]' : 'bg-white'} 
          md:block md:w-[30%] lg:w-[48%] xl:w-[60%]`} />

        <div className="hidden md:flex gap-5 2xl:gap-8 font-semibold tracking-tighter">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleScroll(item.id)}
              className={`${textColor} text-[16px] 2xl:text-[18px] tracking-tighter hover:text-black transition`}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="md:hidden">
          <IconButton
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            size="large"
            edge="end"
            aria-label="menu"
            className="z-50"
          >
            {isMenuOpen ? (
              <CloseIcon className={`${textColor}`} />
            ) : (
              <MenuIcon className={`${textColor}`} />
            )}
          </IconButton>
        </div>

        {isMenuOpen && (
          <div className="fixed inset-0 bg-white flex flex-col justify-center items-start z-40 md:hidden">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleScroll(item.id)}
                className="text-[#d61723] uppercase w-full text-2xl text-left font-light py-2 px-10 border-b border-[#d61723] tracking-tighter hover:bg-[#d61723] hover:text-white transition"
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
