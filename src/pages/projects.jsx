import React from 'react';
import projectsData from '../components/projdata'; // import your project data
import git from '../assets/github.svg'
import link from '../assets/link.svg'

const Projects = () => {
    return (
        <div id="projects" className="sticky top-0 h-screen w-full z-40 flex items-center justify-center bg-[#f2f2f2] section" data-bg-color="white" style={{ scrollPaddingTop: '50px' }}>
            <div className="w-[70%] h-[70%] flex flex-col items-start justify-between gap-10">
                <h1 className="text-[5vw] text-[#d61723] font-bold tracking-tighter leading-[4vw]">MY<br />PROJECTS.</h1>
                <div className="flex w-full h-full gap-2">
                    {projectsData.map((project, index) => (
                        <div key={index} className="w-full h-full bg-black flex flex-col items-end justify-between px-10 py-4 gap-14 text-white hover:bg-[#d61723] transition-all duration-300">
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
                                    <h1 className='py-1 px-5 bg-white text-black text-[0.6vw] rounded-full'>{project.collaborators[0]}</h1>
                                    <h1 className='py-1 px-5 bg-white text-black text-[0.6vw] rounded-full'>{project.collaborators[1]}</h1>
                                    <h1 className='py-1 px-5 bg-white text-black text-[0.6vw] rounded-full'>{project.collaborators[2]}</h1>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <p>As a frontend developer and UI/UX designer, I craft interfaces that are sleek, intuitive, and built with precision.
                    My projects focus on seamless interactions, minimalist structures, and fluid responsiveness, aiming to create experiences
                    that feel effortless yet powerful. Every design is a balance between form and function, engineered to anticipate user
                    needs and move a step ahead of expectation.</p>
            </div>
        </div>
    );
};

export default Projects;
