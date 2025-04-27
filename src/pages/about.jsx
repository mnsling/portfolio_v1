import React from 'react'
import Fb from '../assets/facebook.svg';
import Ig from '../assets/instagram.svg';
import Li from '../assets/linkedin.svg';

const about = () => {
    return (
        <div id="about" className="sticky top-0 h-screen w-full z-20 flex items-center justify-center bg-[#d61723] section" data-bg-color="d61723" style={{ scrollPaddingTop: '50px' }}>
            <div className='w-[70%] min-h-[50%] flex flex-col lg:flex-row items-start justify-center gap-10 lg:gap-10 z-50 button'>
                <div className='w-full lg:w-[70%] min-h-[50%] flex flex-col items-center justify-center gap-10 z-50'>
                    <div className='w-full flex lg:flex-col lg:gap-10 button'>
                        <div className='flex flex-col w-fit pr-5 border-r lg:pr-0 lg:border-none button'>
                            <h1 className='text-[4vw] md lg:text-[3vw] 2xl:text-[2vw] text-white font-semibold tracking-tighter button'>Introduction.</h1>
                            <h1 className='text-white text-[1.8vw] lg:text-[1.5vw] 2xl:text-[0.8vw] font-light button'>Mike Nicklaus S. Ling | June 05, 2001</h1>
                        </div>
                        <p className='text-white text-[1.8vw] lg:text-[1.5vw] 2xl:text-[0.8vw] text-justify font-light w-full pl-5 lg:p-0 button'>Hi, names Mike Nicklaus Ling, and I am a frontend developer based in Davao City, 
                            Philippines. Currently, I am pursuing a Bachelor of Science degree majoring in Computer Science at Ateneo de Davao University, where I am in my 
                            third year of studies.<br /><br />Beyond coding, I have a strong artistic background in graphic design, portrait sketches, and photography. 
                            Initially, my interest was not focused on coding; however, I discovered a passion for frontend development due to its creative elements, 
                            particularly in website design and UI/UX design.
                        </p>
                    </div>
                    <div className='hidden lg:block w-full'>
                        <div className='w-full flex flex-col gap-2'>
                            <h1 className='text-white text-[4vw] lg:text-[3vw] 2xl:text-[2vw] font-semibold tracking-tighter button'>Social Media Links.</h1>
                            <div className='flex gap-2 lg:gap-5'>
                                <a href='https://www.facebook.com/nicklaus.ling/' target='blank'><button><img src={Fb} className='p-3 rounded-full border bg-white' /></button></a>
                                <a href='https://www.instagram.com/lingnicklaus/' target='blank'><button><img src={Ig} className='p-3 rounded-full border bg-white' /></button></a>
                                <a href='https://www.linkedin.com/in/mike-nicklaus-ling-9a2695362/' target='blank'><button><img src={Li} className='p-3 rounded-full border bg-white' /></button></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-full lg:w-[70%] min-h-[50%] flex flex-col items-center justify-center gap-20 z-50'>
                    <div className="w-full flex flex-col gap-2 lg:gap-10">
                        <h1 className="text-[4vw] lg:text-[3vw] 2xl:text-[2vw] text-white font-semibold tracking-tighter button">Skills.</h1>
                        <div className='flex flex-col gap-2 lg:gap-5'>
                            <div className='flex flex-col gap-4 px-10 py-5 bg-white rounded-lg shadow-2xl'>
                                <h1 className="text-[#d61723] text-justify text-[3vw] lg:text-[1vw] font-semibold w-full underline underline-offset-8 button">WEB DEVELOPMENT.</h1>
                                <ul className="grid grid-cols-2 list-disc list-inside text-[#d61723] text-[1.8vw] lg:text-[0.9vw] 2xl:text-[0.7vw] button">
                                    <li>HTML, CSS, JAVASCRIPT</li>
                                    <li>REACTJS, TAILWINDCSS</li>
                                    <li>NODEJS, EXPRESS</li>
                                    <li>MYSQL</li>
                                </ul>
                            </div>
                            <div className='flex flex-col gap-4 px-10 py-5 bg-white rounded-lg shadow-2xl'>
                                <h1 className="text-[#d61723] text-justify text-[3vw] lg:text-[1vw] font-semibold w-full underline underline-offset-8 button">TOOLS / PLATFORM.</h1>
                                <ul className="grid grid-cols-2 list-disc list-inside text-[#d61723] text-[1.8vw] lg:text-[0.9vw] 2xl:text-[0.7vw] button">
                                    <li>VISUAL STUDIO CODE</li>
                                    <li>CANVA</li>
                                    <li>PHOTOSHOP</li>
                                    <li>FIGMA</li>
                                    <li>FRAMER</li>
                                </ul>
                            </div>
                            <div className='flex flex-col gap-4 px-10 py-5 bg-white rounded-lg shadow-2xl'>
                                <h1 className="text-[#d61723] text-justify text-[3vw] lg:text-[1vw] font-semibold w-full underline underline-offset-8 button">SOFT SKILLS.</h1>
                                <ul className="grid grid-cols-2 list-disc list-inside text-[#d61723] text-[1.8vw] lg:text-[0.9vw] 2xl:text-[0.7vw] button">
                                    <li>TIME MANAGEMENT</li>
                                    <li>PUNCTUAL</li>
                                    <li>SELF-MOTIVATED</li>
                                    <li>EMPATHY</li>
                                    <li>OPEN TO CRITICSM</li>
                                    <li>CREATIVE THINKING</li>
                                    <li>DETAIL ORIENTED</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default about