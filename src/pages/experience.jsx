import React, { useState, useEffect } from 'react';
import data from '../components/expdata'; // fix spelling!

const Experience = () => {
    const [showExperienceTitle, setShowExperienceTitle] = useState(false);
    const [showExperienceInfo, setShowExperienceInfo] = useState(false);
    const [active2024, setActive2024] = useState(0);
    const [active2025, setActive2025] = useState(0);

    useEffect(() => {
        const onScroll = () => {
            const section = document.querySelector('#experiences');
            const rect = section.getBoundingClientRect();
            if (rect.top <= window.innerHeight * 0.5 && rect.bottom >= 0) {
                setShowExperienceTitle(true);

                // After title animation, show info after 1s
                setTimeout(() => {
                    setShowExperienceInfo(true);
                }, 1000); // You can adjust the delay timing to match your animation
            }
        };

        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <div id="experiences" className="sticky top-0 h-screen w-full z-30 flex flex-col items-center justify-center bg-[#1f1f1f] section gap-10">
            <h1 className={`absolute top-10 left-0 text-[19vw] font-bold text-[#ffffff2d] tracking-tighter stroke2 ${showExperienceTitle ? 'animate-wipeDown' : 'opacity-0'}`}>2024.</h1>
            <h1 className={`absolute right-0 bottom-0 text-[19vw] text-[#ffffff2d] tracking-tighter font-bold ${showExperienceTitle ? 'animate-wipeRight' : 'opacity-0'}`}>2025.</h1>

            {/* EXPERIENCE INFOS */}
            <div className={`flex gap-5 h-[60%] w-[70%] transition-opacity duration-700 ${showExperienceInfo ? 'opacity-100' : 'opacity-0'}`}>
                {/* 2025 Experience */}
                <div className='flex flex-col w-[70%] gap-4 justify-end'>
                    <div className='flex justify-between items-start'>
                        <div className='flex flex-col leading-9'>
                            <h1 className='text-white text-[2vw] font-semibold'>{data["2025"][active2025].title}</h1>
                            <h1 className='text-white text-[0.8vw]'>{data["2025"][active2025].date}</h1>
                        </div>
                        <div className='flex gap-2 text-white text-[0.6vw]'>
                            {data["2025"].map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setActive2025(index)}
                                    className={`w-[1.8vw] h-[1.8vw] rounded-full border hover:bg-white hover:text-black button ${active2025 === index ? 'bg-white text-black' : 'border-white'}`}
                                >
                                    {index + 1}
                                </button>
                            ))}
                        </div>
                    </div>
                    <ul className="list-disc ml-4 text-white text-[0.8vw] flex flex-col gap-2">
                        {data["2025"][active2025].bullets.map((bullet, idx) => (
                            <li key={idx}>{bullet}</li>
                        ))}
                    </ul>
                </div>

                {/* 2024 Experience */}
                <div className='flex flex-col w-[70%] gap-4'>
                    <div className='flex justify-between items-start'>
                        <div className='flex flex-col leading-9'>
                            <h1 className='text-white text-[2vw] font-semibold'>{data["2024"][active2024].title}</h1>
                            <h1 className='text-white text-[0.8vw]'>{data["2024"][active2024].date}</h1>
                        </div>
                        <div className='flex gap-2 text-white text-[0.6vw]'>
                            {data["2024"].map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setActive2024(index)}
                                    className={`w-[1.8vw] h-[1.8vw] rounded-full border hover:bg-white hover:text-black button ${active2024 === index ? 'bg-white text-black' : 'border-white'}`}
                                >
                                    {index + 1}
                                </button>
                            ))}
                        </div>
                    </div>
                    <ul className="list-disc ml-4 text-white text-[0.8vw] flex flex-col gap-2">
                        {data["2024"][active2024].bullets.map((bullet, idx) => (
                            <li key={idx}>{bullet}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Experience;
``
