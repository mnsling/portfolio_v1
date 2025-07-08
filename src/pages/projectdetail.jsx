import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { projectsByCategory } from '../components/data/projectsdata';

// Typing text component (inline in this file)
const TypingText = ({ text, delayPerLetter = 0.1, className = '' }) => {
    const [visibleCount, setVisibleCount] = useState(0);

    useEffect(() => {
        setVisibleCount(0);
        if (text) {
            const interval = setInterval(() => {
                setVisibleCount((prev) => {
                    if (prev < text.length) {
                        return prev + 1;
                    } else {
                        clearInterval(interval);
                        return prev;
                    }
                });
            }, delayPerLetter * 1000);
            return () => clearInterval(interval);
        }
    }, [text, delayPerLetter]);

    return <span className={className}>{text.slice(0, visibleCount)}</span>;
};

const ProjectDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const allProjects = Object.values(projectsByCategory).flat();
    const project = allProjects.find((p) => p.id === Number(id));

    const [showImages, setShowImages] = useState(false);
    const [showText, setShowText] = useState(false);

    useEffect(() => {
        // animate after mount
        const imagesTimer = setTimeout(() => {
            setShowImages(true);
        }, 500);
        const textTimer = setTimeout(() => {
            setShowText(true);
        }, 1000);

        return () => {
            clearTimeout(imagesTimer);
            clearTimeout(textTimer);
        };
    }, []);

    if (!project) {
        return (
            <div className="h-screen flex justify-center items-center">
                <p className="text-red-500 font-bold">Project not found.</p>
            </div>
        );
    }

    return (
        <div className="relative pt-16 px-5 md:px-10 overflow-y-auto">
            {/* Exit Button */}
            <button
                onClick={() => navigate('/projects')}
                className="fixed bottom-5 left-1/2 transform -translate-x-1/2 h-fit w-fit px-28 py-1 leading-4 rounded-full text-[12px] font-poppins font-light text-white bg-black/40 backdrop-blur-md border border-white/20 transition z-50 xl:hidden"
                aria-label="Close Project Detail"
            >
                CLOSE
            </button>

            {/* Mobile Details */}
            <AnimatePresence>
                {showText && (
                    <motion.div
                        className="xl:hidden grid grid-cols-2 gap-x-4 gap-y-10 mb-8 text-[14px] font-ibm"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="flex flex-col gap-2">
                            <h1 className="pb-2 border-b border-black font-ibmmono text-[13px]">
                                <TypingText text="[ PROJECT ]" />
                            </h1>
                            <p className="font-poppins tracking-tight text-[10px] md:text-[13px]">
                                {project.description}
                            </p>
                        </div>
                        <div className="flex flex-col gap-2">
                            <h1 className="pb-2 border-b border-black font-ibmmono text-[13px]">
                                <TypingText text="[ CLIENT ]" />
                            </h1>
                            <p className="font-poppins tracking-tight text-[10px] md:text-[13px]">
                                {project.client}
                            </p>
                        </div>
                        <div className="flex flex-col gap-2">
                            <h1 className="pb-2 border-b border-black font-ibmmono text-[13px]">
                                <TypingText text="[ SERVICE ]" />
                            </h1>
                            <p className="font-poppins tracking-tight text-[10px] md:text-[13px]">
                                {project.service}
                            </p>
                        </div>
                        <div className="flex flex-col gap-2">
                            <h1 className="pb-2 border-b border-black font-ibmmono text-[13px]">
                                <TypingText text="[ INDUSTRY ]" />
                            </h1>
                            <p className="font-poppins tracking-tight text-[10px] md:text-[13px]">
                                {project.industry}
                            </p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Images and Desktop Sidebar */}
            <div className="xl:flex gap-32">
                {/* Images */}
                <div className="w-full xl:w-[70%] lg:overflow-y-auto custom-scrollbar xl:max-h-[90vh]">
                    <AnimatePresence>
                        {showImages && (
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                {project.images?.map((img, i) => (
                                    <img
                                        key={i}
                                        src={img}
                                        alt={`${project.title}-${i}`}
                                        className="w-full mb-4 object-cover"
                                    />
                                ))}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {/* Desktop Sidebar */}
                <AnimatePresence>
                    {showText && (
                        <motion.div
                            className="hidden w-[18%] xl:flex flex-col gap-40"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <button
                                onClick={() => navigate('/projects')}
                                className="text-left font-ibmmono w-full pt-16"
                            >
                                <TypingText text="[ BACK ]" />
                            </button>
                            <div className="xl:flex flex-col gap-10 w-full justify-center font-ibm text-[14px]">
                                <div className="flex flex-col gap-2">
                                    <h1 className="pb-2 border-b border-black font-ibmmono">
                                        <TypingText text="[ PROJECT ]" />
                                    </h1>
                                    <p className="font-poppins tracking-tight">
                                        {project.description}
                                    </p>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <h1 className="pb-2 border-b border-black font-ibmmono">
                                        <TypingText text="[ CLIENT ]" />
                                    </h1>
                                    <p className="font-poppins tracking-tight">
                                        {project.client}
                                    </p>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <h1 className="pb-2 border-b border-black font-ibmmono">
                                        <TypingText text="[ SERVICE ]" />
                                    </h1>
                                    <p className="font-poppins tracking-tight">
                                        {project.service}
                                    </p>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <h1 className="pb-2 border-b border-black font-ibmmono">
                                        <TypingText text="[ INDUSTRY ]" />
                                    </h1>
                                    <p className="font-poppins tracking-tight">
                                        {project.industry}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default ProjectDetail;
