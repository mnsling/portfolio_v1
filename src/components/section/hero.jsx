import { projectsData } from '../data/projectsdata';
import { Link } from 'react-router-dom';

const hero = () => {
    return (
        <div className='h-full w-full bg-white overflow-auto custom-scrollbar flex flex-col gap-5 pb-[30px]'>
            <h1 className='font-italiana text-[20px] md:text-left lg:text-[30px] lg:text-center transition'>Creative Sparks for Infinite Futures.</h1>
            <div className='flex flex-col gap-20'>
                {projectsData.map((project) => (
                    <button
                        key={project.id}
                        className='w-full h-[65vw] md:h-[38vw] xl:h-[30vw] flex flex-col gap-2 group'
                    >
                        <div className='relative w-full h-full'>
                            <div
                                className='w-full h-full bg-cover bg-center'
                                style={{ backgroundImage: `url(${project.image})` }}
                            />
                            <div className='absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition duration-300'></div>
                        </div>
                        <div className='flex flex-col leading-6 text-left'>
                            <h1 className='text-[20px] font-ibmmono tracking-tight'>{project.title}</h1>
                            <p className='text-[14px] font-ibm'>{project.description}</p>
                        </div>
                    </button>
                ))}
            </div>
            <div className='w-full flex justify-center mt-[20px]'>
                <Link
                    to="/projects"
                    className='w-[160px] px-[10px] py-[2px] mt-3 font-ibm text-[14px] rounded-full border border-black flex justify-between hover:bg-black hover:text-white transition'
                >
                    <h1>View Works</h1>
                    <h1 className='rotate-180'>⟵</h1>
                </Link>
            </div>
        </div>
    )
}

export default hero