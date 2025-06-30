import React from 'react'
import Navbar from '../components/navbar'
import GM from '../assets/thumbnail/Thumbnail.jpg'
import GL from '../assets/thumbnail/Thumbnail2.png'
import Html from '../assets/logo/html5.svg'
import Css from '../assets/logo/tailwindcss.svg'
import Javascript from '../assets/logo/javascript.svg'
import ReactJs from '../assets/logo/react.svg'
import Node from '../assets/logo/nodedotjs.svg'
import Prisma from '../assets/logo/prisma.svg'
import Sql from '../assets/logo/mysql.svg'
import Figma from '../assets/logo/figma.svg'
import Framer from '../assets/logo/framer.svg'
import Canva from '../assets/logo/canva.svg'
import Trello from '../assets/logo/trello.svg'
import Notion from '../assets/logo/notion.svg'
import Brush from '../components/trail'




const app = () => {
  return (
    <div className='hidden 2xl:block h-screen w-screen'>
      <Brush/>
      <Navbar />
      <div className='h-full pt-[110px] bg-white flex justify-center'>
        <div className='h-full w-[1720px] mx-[40px] bg-white flex justify-between'>
          <div className='h-full w-[290px] bg-white flex flex-col gap-16 overflow-auto custom-scrollbar2 pb-[30px]'>
            <div className='flex flex-col gap-8'>
              <h1 className='text-[38px] font-poppins font-bold tracking-tighter leading-9'>Nick</h1>
              <div className='flex flex-col gap-2'>
                <h1 className='font-ibmmono text-[18px] leading-5 tracking-tighter'>Where Art Breathes<br />in Code.</h1>
                <p className='font-ibmmono text-[12px] text-[#00000096] leading-5 tracking-tight'>I design websites that are visually striking and thoughtfully crafted. Every project I build
                  is guided by a deep appreciation for art, ensuring that beauty, function, and user experience
                  move in harmony.</p>
                <button className='w-[160px] px-[10px] py-[2px] mt-3 font-ibm text-[14px] rounded-full border border-black flex justify-between hover:bg-black hover:text-white transition'>
                  <h1>About</h1>
                  <h1 className='rotate-180'>⟵</h1>
                </button>
              </div>
            </div>
            <div className='flex flex-col gap-4'>
              <h1 className='text-[23px] font-poppins tracking-tighter'>🡢 Updates</h1>
              <div className='flex flex-col'>
                <button className='font-noto text-[12px] text-left py-[10px] border-y border-black hover:text-[#9c9c9c] transition'>Gray Lemon Technology Inc. Streamlined Employee Platform UI</button>
                <button className='font-noto text-[12px] text-left py-[10px] border-b border-black hover:text-[#9c9c9c] transition'>Digital Showcase Built Hardcoded for Gentle Monster</button>
                <button className='font-noto text-[12px] text-left py-[10px] border-b border-black hover:text-[#9c9c9c] transition'>Gentle Monster Figma Digital Redesign and UX Evolution</button>
                <button className='font-noto text-[12px] text-left py-[10px] border-b border-black hover:text-[#9c9c9c] transition'>4U Grocery System | A Modern POS and Inventory Management Interface</button>
              </div>
              <button className='w-[160px] px-[10px] py-[2px] mt-3 font-ibm text-[14px] rounded-full border border-black flex justify-between hover:bg-black hover:text-white transition'>
                <h1>More</h1>
                <h1 className='rotate-180'>⟵</h1>
              </button>
            </div>
            <div className='flex flex-col gap-4 pb-[20px] border-b border-black'>
              <h1 className='text-[23px] font-poppins tracking-tighter'>🡢 Tech Stack</h1>
              <div className='flex flex-col gap-1'>
                {/* first row */}
                <div className='flex gap-1'>
                  <p className='w-fit flex gap-2 items-center font-ibmmono lowercase text-[13px] text-left py-[3px] px-[12px] border border-black rounded-full hover:text-[#9c9c9c] transition'>
                    HTML<img src={Html} className='w-4 h-4' />
                  </p>
                  <p className='w-fit flex gap-2 items-center font-ibmmono lowercase text-[13px] text-left py-[3px] px-[12px] border border-black rounded-full hover:text-[#9c9c9c] transition'>
                    CSS<img src={Css} className='w-4 h-4' />
                  </p>
                  <p className='w-fit flex gap-2 items-center font-ibmmono lowercase text-[13px] text-left py-[3px] px-[12px] border border-black rounded-full hover:text-[#9c9c9c] transition'>
                    JAVASCRIPT<img src={Javascript} className='w-4 h-4' />
                  </p>
                </div>
                {/* second row */}
                <div className='flex gap-1'>
                  <p className='w-fit flex gap-2 items-center font-ibmmono lowercase text-[13px] text-left py-[3px] px-[12px] border border-black rounded-full hover:text-[#9c9c9c] transition'>
                    REACTJS<img src={ReactJs} className='w-4 h-4' />
                  </p>
                  <p className='w-fit flex gap-2 items-center font-ibmmono lowercase text-[13px] text-left py-[3px] px-[12px] border border-black rounded-full hover:text-[#9c9c9c] transition'>
                    NODEJS<img src={Node} className='w-4 h-4' />
                  </p>
                  <p className='w-fit flex gap-2 items-center font-ibmmono lowercase text-[13px] text-left py-[3px] px-[12px] border border-black rounded-full hover:text-[#9c9c9c] transition'>
                    PRISMA<img src={Prisma} className='w-4 h-4' />
                  </p>
                </div>
                {/* third row */}
                <div className='flex gap-1'>
                  <p className='w-fit flex gap-2 items-center font-ibmmono lowercase text-[13px] text-left py-[3px] px-[12px] border border-black rounded-full hover:text-[#9c9c9c] transition'>
                    MYSQL<img src={Sql} className='w-4 h-4' />
                  </p>
                  <p className='w-fit flex gap-2 items-center font-ibmmono lowercase text-[13px] text-left py-[3px] px-[12px] border border-black rounded-full hover:text-[#9c9c9c] transition'>
                    FIGMA<img src={Figma} className='w-4 h-4' />
                  </p>
                  <p className='w-fit flex gap-2 items-center font-ibmmono lowercase text-[13px] text-left py-[3px] px-[12px] border border-black rounded-full hover:text-[#9c9c9c] transition'>
                    FRAMER<img src={Framer} className='w-4 h-4' />
                  </p>
                </div>
                {/* fourth row */}
                <div className='flex gap-1'>
                  <p className='w-fit flex gap-2 items-center font-ibmmono lowercase text-[13px] text-left py-[3px] px-[12px] border border-black rounded-full hover:text-[#9c9c9c] transition'>
                    CANVA<img src={Canva} className='w-4 h-4' />
                  </p>
                  <p className='w-fit flex gap-2 items-center font-ibmmono lowercase text-[13px] text-left py-[3px] px-[12px] border border-black rounded-full hover:text-[#9c9c9c] transition'>
                    TRELLO<img src={Trello} className='w-4 h-4' />
                  </p>
                  <p className='w-fit flex gap-2 items-center font-ibmmono lowercase text-[13px] text-left py-[3px] px-[12px] border border-black rounded-full hover:text-[#9c9c9c] transition'>
                    NOTION<img src={Notion} className='w-4 h-4' />
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className='h-full w-[60%] bg-white overflow-auto custom-scrollbar2 flex flex-col gap-5 pb-[30px]'>
            <h1 className='font-italiana text-[30px] text-center'>Creative Sparks for Infinite Futures.</h1>
            <div className='flex flex-col gap-20'>
              <button className='w-full h-[600px] flex flex-col gap-2 group'>
                <div className="relative w-full h-full">
                  <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: `url(${GL})` }} />
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition duration-300"></div>
                </div>
                <div className='flex flex-col leading-6 text-left'>
                  <h1 className='text-[20px] font-ibmmono tracking-tight'>Gray Lemon: Workforce UX Reinvented</h1>
                  <p className='text-[14px] font-ibm'>Engineered a future-ready UI for employee management, transforming complex data into seamless digital experiences.</p>
                </div>
              </button>
              <button className='w-full h-[600px] flex flex-col gap-2 group'>
                <div className="relative w-full h-full">
                  <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: `url(${GM})` }} />
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition duration-300"></div>
                </div>
                <div className='flex flex-col leading-6 text-left'>
                  <h1 className='text-[20px] font-ibmmono tracking-tight'>GENTLE MONSTER ✕ REACTJS</h1>
                  <p className='text-[14px] font-ibm'>A fresh digital face for an iconic brand.</p>
                </div>
              </button>
            </div>
            <div className='w-full flex justify-center mt-[20px]'>
              <button className='w-[160px] px-[10px] py-[2px] mt-3 font-ibm text-[14px] rounded-full border border-black flex justify-between hover:bg-black hover:text-white transition'>
                <h1>View Works</h1>
                <h1 className='rotate-180'>⟵</h1>
              </button>
            </div>
          </div>
          <div className='h-full w-[290px] bg-white flex flex-col gap-16 overflow-auto custom-scrollbar2'>
            <div className='flex flex-col gap-4'>
              <h1 className='text-[23px] font-poppins tracking-tighter'>🡢 Projects</h1>
              <div className='flex flex-col'>
                <button className='font-noto text-[12px] text-left py-[10px] border-y border-black hover:text-[#9c9c9c] transition truncate'>Gray Lemon Technology Inc. Employee Management System (Figma Prototype)</button>
                <button className='font-noto text-[12px] text-left py-[10px] border-b border-black hover:text-[#9c9c9c] transition truncate'>Gentle Monster Re-Engineered Website</button>
                <button className='font-noto text-[12px] text-left py-[10px] border-b border-black hover:text-[#9c9c9c] transition truncate'>4U Grocery POS System and Inventory Management System</button>
                <button className='font-noto text-[12px] text-left py-[10px] border-b border-black hover:text-[#9c9c9c] transition truncate'>Ateneo Library Catalog</button>
              </div>
              <button className='w-[160px] px-[10px] py-[2px] mt-3 font-ibm text-[14px] rounded-full border border-black flex justify-between hover:bg-black hover:text-white transition'>
                <h1>More</h1>
                <h1 className='rotate-180'>⟵</h1>
              </button>
            </div>
            <div className='flex flex-col gap-4'>
              <h1 className='text-[23px] font-poppins tracking-tighter'>🡢 Service</h1>
              <div className='flex flex-col border-y border-black py-[5px]'>
                <h1 className='font-noto font-light tracking-tight leading-6 text-[20px] mb-[20px]'>Solutions built at the edge of design and tech.</h1>
                <button className='font-noto text-[12px] text-left py-[5px] hover:text-[#9c9c9c] transition'>Frontend Development.</button>
                <button className='font-noto text-[12px] text-left py-[5px] hover:text-[#9c9c9c] transition'>UI/UX Design</button>
                <button className='font-noto text-[12px] text-left py-[5px] hover:text-[#9c9c9c] transition'>Interactive Prototypes</button>
                <button className='font-noto text-[12px] text-left py-[5px] hover:text-[#9c9c9c] transition'>Creative Coding</button>
                <button className='font-noto text-[12px] text-left py-[5px] hover:text-[#9c9c9c] transition'>Animation & Motion Design</button>
              </div>
              <button className='w-[160px] px-[10px] py-[2px] mt-3 font-ibm text-[14px] rounded-full border border-black flex justify-between hover:bg-black hover:text-white transition'>
                <h1>More</h1>
                <h1 className='rotate-180'>⟵</h1>
              </button>
            </div>
            <div className='flex flex-col gap-4'>
              <h1 className='text-[23px] font-poppins tracking-tighter'>🡢 Connect</h1>
              <div className='flex flex-col border-y border-black py-[5px] mb-[30px]'>
                <button className='font-noto text-[12px] text-left py-[5px] hover:text-[#9c9c9c] transition'>Facebook</button>
                <button className='font-noto text-[12px] text-left py-[5px] hover:text-[#9c9c9c] transition'>Instagram</button>
                <button className='font-noto text-[12px] text-left py-[5px] hover:text-[#9c9c9c] transition'>Linkedin</button>
                <button className='font-noto text-[12px] text-left py-[5px] hover:text-[#9c9c9c] transition'>Pinterest</button>
                <button className='font-noto text-[12px] text-left py-[5px] hover:text-[#9c9c9c] transition'>Youtube</button>
                <button className='font-noto text-[12px] text-left py-[5px] hover:text-[#9c9c9c] transition'>Github</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default app