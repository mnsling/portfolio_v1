import React, { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Navbar = ({ bgColor = 'white', handleScroll }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => setMenuOpen(!menuOpen);

    const textColor = bgColor === 'white' ? '#d61723' : '#ffffff';
    const menuItems = ['home', 'about', 'experience', 'projects'];

    return (
        <div className="fixed top-0 left-0 w-full flex justify-center z-50">
            {/* Main Navbar */}
            <div
                className="w-[90%] md:w-[70%] flex justify-between items-center gap-10 py-8 text-base font-semibold transition"
                style={{ color: textColor }}
            >
                <h1 className="z-20" style={{ color: textColor }}>NICK.</h1>

                <div className="hidden md:flex w-full h-[1px]" style={{ backgroundColor: textColor }} />

                {/* Desktop buttons */}
                <div className="hidden md:flex gap-5 z-20">
                    {menuItems.map(item => (
                        <button key={item} onClick={() => handleScroll(item)} style={{ color: textColor }}>
                            {item}.
                        </button>
                    ))}
                </div>

                {/* Mobile menu icon (still based on current bg color) */}
                <div className="md:hidden z-50">
                    <button onClick={toggleMenu} style={{ color: textColor }}>
                        {menuOpen ? <CloseIcon fontSize="small" /> : <MenuIcon fontSize="small" />}
                    </button>
                </div>
            </div>

            {/* Mobile fullscreen menu (ALWAYS orange text) */}
            {menuOpen && (
                <div className="fixed inset-0 w-full h-full bg-[#f2f2f2] flex items-start justify-center text-3xl md:hidden z-50">
                    <div className="h-full w-full flex flex-col items-start justify-center relative">
                        {menuItems.map(item => (
                            <button
                                key={item}
                                onClick={() => {
                                    handleScroll(item);
                                    toggleMenu();
                                }}
                                className="w-full py-3 flex justify-center border-b border-[#cfc8c8] hover:text-white hover:bg-[#d61723] transition text-[#d61723]"
                            >
                                <h1 className="w-[70%] text-left font-light tracking-tight">{item.toUpperCase()}.</h1>
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Navbar;
