import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useParams } from 'react-router-dom';
import { projectsByCategory } from '../components/data/projectsdata';
import link from '../assets/up-right-from-square.png'

const ProjectDetail = () => {
    const { id } = useParams();

    // Flatten all projects across categories
    const allProjects = Object.values(projectsByCategory).flat();

    // Convert id to number to match project.id
    const project = allProjects.find((p) => p.id === Number(id));

    if (!project) {
        return (
            <div className="flex items-center justify-center h-screen">
                <p>Project not found.</p>
            </div>
        );
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: -20 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="w-full flex flex-col items-center justify-start pt-[110px] md:px-[40px] min-h-screen"
        >
            {/* Header */}
            <div className="w-full xl:w-[75%] flex flex-col gap-10 px-[10px] flex-shrink-0">
                <div className="w-full h-fit flex items-end">
                    <Link
                        to="/"
                        className="text-[38px] font-poppins font-bold tracking-tighter leading-9"
                    >
                        Nick
                    </Link>
                    <p className="font-ibm font-bold text-[18px] leading-6 ml-[12px] mr-[6px]">
                        /
                    </p>
                    <p className="font-ibm font-bold text-[18px] leading-6 tracking-tight">
                        Projects
                    </p>
                </div>

                <div className='flex flex-col gap-10'>
                    <div className='flex flex-col lg:hidden'>
                        <h1 className='font-noto text-[20px]'>{project.title}</h1>
                        <p className='font-ibm text-[14px] text-[#777777]'>{project.caption}</p>
                        <button onClick={() => window.open(project.github, '_blank')} className='flex gap-3 text-[#777777] items-center mt-3'>
                            <img src={link} className='w-[14px] h-[14px]' />
                            <h1 className='text-[14px] font-ibm'>Github Link</h1>
                        </button>
                    </div>
                    <div
                        className="w-full h-[60vw] lg:h-[60vh] xl:h-[75vh] bg-cover bg-center mb-5"
                        style={{ backgroundImage: `url(${project.main})` }} />
                    <div className='hidden flex flex-col lg:block'>
                        <h1 className='font-noto text-[20px] font-light lg:text-[40px]'>{project.title}</h1>
                        <p className='font-ibm text-[14px] text-[#777777] lg:[10px]'>{project.caption}</p>
                        <button onClick={() => window.open(project.github, '_blank')} className='flex gap-3 text-[#777777] items-center mt-3'>
                            <img src={link} className='w-[14px] h-[14px]' />
                            <h1 className='text-[14px] font-ibm'>Github Link</h1>
                        </button>
                    </div>
                    <hr />
                    <div className='flex flex-col gap-5 w-[45%] px-20 my-20'>
                        <h1 className='text-[40px] font-noto font-light tracking-[0.5px]'>{project.title2}</h1>
                        <p className='text-[14px] font-noto'>{project.description}</p>
                    </div>
                    <hr />
                    {/* Image Slider */}
                    <div className="mt-6 flex gap-4 overflow-x-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
                        {project.images.map((img, index) => (
                            <img
                                key={index}
                                src={img}
                                alt={`${project.title} screenshot ${index + 1}`}
                                className="h-[500px] w-auto flex-shrink-0 rounded-lg object-cover"
                            />
                        ))}
                    </div>
                    <div className='mt-20'>
                        <h1 className='font-ibm text-[40px]'>Project Information</h1>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectDetail;
