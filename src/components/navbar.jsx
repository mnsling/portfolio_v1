// Navbar.jsx
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleOverlay = () => {
    setIsOpen(prev => !prev)
  }

  const closeOverlay = () => {
    setIsOpen(false)
  }

  return (
    <>
      {/* Fixed Navbar */}
      <div className="fixed top-0 left-0 w-full z-40 bg-white border-b border-black">
        <div className="flex justify-between px-[15px] py-[12px] text-[14px] font-ibm">
          <button className='hover:text-[#9c9c9c] transition' onClick={toggleOverlay}>
            {isOpen ? 'Close' : 'Menu'}
          </button>
          <div className="flex gap-1">
            <button>EN</button>
            <h1>/</h1>
            <button>JP</button>
          </div>
          <Link to="/contact" className='hover:text-[#9c9c9c] transition'>Contacts</Link>
        </div>
      </div>

      {/* Full-page Overlay with Transition */}
      <div
        className={`fixed inset-0 z-30 bg-white px-[15px] pt-[80px] transition ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
      >
        <div className="flex flex-col items-start gap-2 text-[14px] font-ibm">
          <Link to="/" onClick={closeOverlay} className='hover:text-[#9c9c9c] transition'>Home</Link>
          <Link to="/about" onClick={closeOverlay} className='hover:text-[#9c9c9c] transition'>About</Link>
          <Link to="/updates" onClick={closeOverlay} className='hover:text-[#9c9c9c] transition'>Updates</Link>
          <Link to="/projects" onClick={closeOverlay} className='hover:text-[#9c9c9c] transition'>Projects</Link>
          <Link to="/services" onClick={closeOverlay} className='hover:text-[#9c9c9c] transition'>Services</Link>
          <Link to="/contact" onClick={closeOverlay} className='hover:text-[#9c9c9c] transition'>Contact</Link>
        </div>
      </div>
    </>
  )
}

export default Navbar
