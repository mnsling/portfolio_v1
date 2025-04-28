import React from 'react'
import Fb from '../assets/facebook.svg';
import Ig from '../assets/instagram.svg';
import Li from '../assets/linkedin.svg';

const footer = () => {
    return (
        <div className='w-full h-[8%] bg-[#d61723] flex justify-center items-center text-white'>
            <div className='w-[70%] h-[60%]'>
                <div className='h-full w-full flex justify-end'>
                    <div className='w-full h-full gap-10 flex flex-col justify-end'>
                        <div className='w-[50%] flex gap-5'>
                            <h1 className='w-[30%] text-[1vw] font-bold pr-3 border-r'>I. Contact</h1>
                            <div className='flex flex-col text-[0.7vw] gap-1'>
                                <h1>Location: Davao City, Philippines</h1>
                                <h1>Phone #: +63 942 024 6599</h1>
                            </div>
                        </div>
                        <div className='w-[50%] flex gap-5'>
                            <h1 className='w-[30%] text-[1vw] font-bold pr-7 border-r'>II. Follow</h1>
                            <div className='flex flex-col gap-1 text-[0.7vw]'>
                                <a href='https://www.facebook.com/nicklaus.ling/' target='blank'><button className='hover:underline'>Facebook.</button></a>
                                <a href='https://www.instagram.com/lingnicklaus/' target='blank'><button className='hover:underline'>Instagram.</button></a>
                                <a href='https://www.linkedin.com/in/mike-nicklaus-ling-9a2695362/' target='blank'><button className='hover:underline'>Linkedin.</button></a>
                            </div>
                        </div>
                    </div>
                    <div className='w-[50%] flex flex-col gap-2 justify-end'>
                        <h1 className='text-[1vw] font-bold'>III. Say Hi</h1>
                        <div className='w-full flex border-b py-1 px-2'>
                            <input type='email' placeholder='ENTER YOUR EMAIL ADDRESS' className='lowercase text-[0.7vw] outline-none bg-transparent w-full placeholder:text-[#ffffff79]'/>
                            <button className='text-[0.6vw]'>SEND</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default footer