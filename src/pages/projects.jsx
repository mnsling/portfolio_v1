import React, { useState } from 'react';
import projectsData from '../components/projdata'; // import your project data
import git from '../assets/github.svg';

const Projects = () => {
    // State to keep track of the current slide
    const [currentSlide, setCurrentSlide] = useState(0);

    // Number of projects to show at once
    const projectsToShow = 3;

    // Function to go to the next slide
    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % (projectsData.length - projectsToShow + 1));
    };

    // Function to go to the previous slide
    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + projectsData.length - projectsToShow + 1) % (projectsData.length - projectsToShow + 1));
    };

    // Get the projects to show on the current slide
    const displayedProjects = projectsData.slice(currentSlide, currentSlide + projectsToShow);

    return (
        <div id="projects" className="sticky top-0 h-screen w-full z-40 flex items-center justify-center bg-[#f2f2f2] section" data-bg-color="white" style={{ scrollPaddingTop: '50px' }}>
            <div className="w-[70%] h-[70%] flex flex-col items-start justify-between gap-10">
                <div className='flex justify-between'>
                    <h1 className="text-[5vw] text-[#d61723] font-bold tracking-tighter leading-[4vw]">MY<br />PROJECTS.</h1>
                    <p className='text-[0.8vw] text-justify w-[50%]'>As a frontend developer and UI/UX designer, I bring ideas to life with clean lines, smooth flows, and
                        thoughtful details. I build interfaces that feel as good as they look minimalist, intuitive, and always a step ahead. Every project is a dance
                        between beauty and function, crafted to create experiences that just click.</p>
                </div>

                <div className="relative flex w-full h-full gap-2 overflow-hidden">
                    <button onClick={prevSlide} className="absolute left-0 top-1/2 transform -translate-y-1/2 text-white text-3xl">
                        &#60;
                    </button>

                    <div className="flex w-full h-full gap-2">
                        {displayedProjects.map((project, index) => (
                            <div key={index} className="w-[calc(100%/3)] h-full bg-[#1f1f1f] flex flex-col items-end justify-between px-10 py-4 gap-32 text-white hover:bg-[#d61723] transition-all duration-300">
                                <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-blue-400 underline mt-2">
                                    <img src={git} />
                                </a>
                                <div className='h-full w-full flex flex-col justify-between'>
                                    <div className='flex flex-col gap-5'>
                                        <div>
                                            <h1 className='text-[0.7vw] font-extralight'>{project.date}</h1>
                                            <h2 className="text-[1.3vw] tracking-tighter leading-8 font-bold uppercase">{project.title}.</h2>
                                        </div>
                                        <p className="text-sm">{project.description}</p>
                                    </div>
                                    <div className='flex gap-2 py-5 border-t'>
                                        {project.collaborators.map((collaborator, index) => (
                                            <h1 key={index} className='py-1 px-5 bg-white text-black text-[0.6vw] rounded-full'>{collaborator}</h1>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <button onClick={nextSlide} className="absolute right-0 top-1/2 transform -translate-y-1/2 text-white text-3xl">
                        &#62;
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Projects;
