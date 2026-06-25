import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useParams } from 'react-router-dom';
// Correct import targeting the flat projects array
import { projects } from '../components/data/projectsdata';
import link from '../assets/up-right-from-square.png';

const ProjectDetail = () => {
    const { id } = useParams();

    // Query directly from the new flat array format
    const project = projects.find((p) => p.id === Number(id));

    if (!project) {
        return (
            <div className="flex items-center justify-center h-screen bg-[#111111] text-white">
                <p className="font-ibm">Project not found.</p>
            </div>
        );
    }

    // Helper utility to safely pull out your dynamic repository URLs for the fallback buttons
    const githubLink = project.links?.find(l => l.label.toLowerCase().includes('github'))?.url;

    return (
        <motion.div
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: -20 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="w-full flex flex-col items-center justify-start pt-[110px] md:px-[40px] min-h-screen bg-white text-black"
        >
            {/* Header */}
            <div className="w-full xl:w-[75%] flex flex-col gap-10 px-[10px] flex-shrink-0">
                <div className="w-full h-fit flex items-end">
                    <Link
                        to="/"
                        className="text-[38px] font-poppins font-bold tracking-tighter leading-9 text-black"
                    >
                        Nick
                    </Link>
                    <p className="font-ibm font-bold text-[18px] leading-6 ml-[12px] mr-[6px] text-black">
                        /
                    </p>
                    <Link
                        to="/projects"
                        className="font-ibm font-bold text-[18px] leading-6 tracking-tight text-black hover:text-red-500 transition"
                    >
                        Projects
                    </Link>
                </div>

                <div className='flex flex-col gap-10'>
                    {/* Mobile Title Block */}
                    <div className='flex flex-col lg:hidden'>
                        <h1 className='font-noto text-[20px] font-bold text-black'>{project.title}</h1>
                        <p className='font-ibm text-[14px] text-[#777777]'>{project.caption}</p>
                        {githubLink && (
                            <button onClick={() => window.open(githubLink, '_blank')} className='flex gap-3 text-[#777777] hover:text-black items-center mt-3 transition-colors'>
                                <img src={link} className='w-[14px] h-[14px] invert' alt="external link" />
                                <h1 className='text-[14px] font-ibm'>Github Link</h1>
                            </button>
                        )}
                    </div>
                    
                    {/* Primary Hero Image */}
                    <div
                        className="w-full h-[60vw] lg:h-[60vh] xl:h-[75vh] bg-cover bg-center mb-5 border border-white/5"
                        style={{ backgroundImage: `url(${project.main})` }} 
                    />

                    {/* Desktop Title Block */}
                    <div className='hidden lg:flex flex-col'>
                        <h1 className='font-noto text-[20px] font-light lg:text-[40px] text-black'>{project.title}</h1>
                        <p className='font-ibm text-[14px] text-[#777777]'>{project.caption}</p>
                        {githubLink && (
                            <button onClick={() => window.open(githubLink, '_blank')} className='flex gap-3 text-[#777777] hover:text-black items-center mt-3 transition-colors w-fit'>
                                <img src={link} className='w-[14px] h-[14px] invert' alt="external link" />
                                <h1 className='text-[14px] font-ibm'>Github Link</h1>
                            </button>
                        )}
                    </div>
                    <hr className="border-white/10" />
                    
                    {/* Subheading & Core Description */}
                    <div className='flex flex-col gap-5 my-10 w-full lg:w-[75%] lg:my-10'>
                        <h1 className='text-[26px] lg:text-[40px] font-noto font-light tracking-[0.5px] text-black'>{project.title2}</h1>
                        <p className='text-[15px] font-noto text-[#777777] leading-relaxed'>{project.description}</p>
                    </div>
                    <hr className="border-white/10" />
                    
                    {/* Image Slider Component */}
                    {project.images && project.images.length > 0 && (
                        <div className="mt-6 flex gap-4 overflow-x-auto scrollbar-thin pb-4">
                            {project.images.map((img, index) => (
                                <img
                                    key={index}
                                    src={img}
                                    alt={`${project.title} screenshot ${index + 1}`}
                                    className="h-[200px] lg:h-[500px] w-auto flex-shrink-0 object-cover border border-white/5 shadow-md"
                                />
                            ))}
                        </div>
                    )}

                    {/* Extended Technical Specs Metadata Display */}
                    <div className='mt-10 flex flex-col gap-16 pb-20'>
                        <h1 className='font-ibm text-[32px] font-bold text-black tracking-tight'>Project Information</h1>
                        <div className='flex flex-col gap-12'>
                            
                            {/* Collaborator Manifest Row */}
                            <div className='flex flex-col gap-3 border-b border-white/5 pb-6'>
                                <h1 className='text-[16px] font-poppins text-black uppercase text-xs'>Project Creator / Collaborators</h1>
                                <p className='text-[12px] font-ibmmono text-black ml-[20px]'>
                                    {project.collaborators?.map(person => person.name).join(", ")}
                                </p>
                            </div>

                            {/* Detailed Task Breakdowns */}
                            <div className='flex flex-col gap-3 border-b border-white/5 pb-6'>
                                <h1 className='text-[16px] font-poppins text-black uppercase text-xs'>Role Distribution Breakdown</h1>
                                <div className="ml-[20px] text-[12px] font-ibmmono space-y-3">
                                    {project.collaborators?.map((person, index) => (
                                        <div key={index} className="flex justify-between max-w-[600px] text-black">
                                            <span>{person.role}</span>
                                            <span className="text-black">{person.name}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Dynamic Multi-Link Menu Row */}
                            <div className='flex flex-col gap-3 border-b border-white/5 pb-6'>
                                <h1 className='text-[16px] font-poppins text-black uppercase text-xs'>Resource & Media Links</h1>
                                <div className='ml-[20px] text-[12px] font-ibmmono flex flex-col gap-3 items-start'>
                                    {project.links?.map((item, index) => (
                                        <button
                                            key={index}
                                            onClick={() => window.open(item.url, "_blank")}
                                            className="flex items-center gap-3 text-black transition-colors"
                                        >
                                            <img src={link} className='w-[14px] h-[14px]' alt="external shortcut" />
                                            <span className="underline decoration-black/20">{item.label}</span>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Guarded Fullscreen Figma Simulation Node Canvas embed */}
                            {project.figmaEmbed && (
                                <div className="w-full mt-6">
                                    <h1 className="text-[16px] font-poppins text-black uppercase text-xs mb-4">Interactive Blueprint Canvas</h1>
                                    <iframe
                                        className="w-full h-[450px] md:h-[600px] bg-[#1e1e1e]"
                                        src={project.figmaEmbed}
                                        allowFullScreen
                                        title={`${project.title} Canvas Mock`}
                                    />
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectDetail;