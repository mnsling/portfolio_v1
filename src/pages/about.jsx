import React from 'react'
import { Link } from 'react-router-dom'
import ADDU from '../assets/ateneo.jpg'
import MCM from '../assets/mapua.jpg'
import PASD from '../assets/sakya.jpg'
import H1 from '../assets/hobby1.jpg'
import H2 from '../assets/hobby2.jpg'
import H3 from '../assets/hobby3.jpg'
import H4 from '../assets/hobby4.jpg'
import H5 from '../assets/hobby5.jpg'
import H6 from '../assets/hobby6.jpg'


const about = () => {
  return (
    <div className='hidden 2xl:flex pt-[90px] justify-center'>
      <div className='w-[70%] flex flex-col gap-28'>
        <div className='w-full h-fit flex items-end'>
          <Link to="/" className='text-[38px] font-poppins font-bold tracking-tighter leading-9'>Nick</Link>
          <p className='font-ibm font-bold text-[18px] leading-6 ml-[12px] mr-[6px]'>/</p>
          <p className='font-ibm font-bold text-[18px] leading-6 tracking-tight'>About</p>
        </div>
        <div className='flex flex-col gap-40'>
          <div className='w-full flex justify-end'>
            <div className='w-[500px] flex flex-col gap-5 justify-end'>
              <h1 className='font-noto text-[30px]'>Where Art Breathes in Code...</h1>
              <p className='font-noto text-[14px]'>I was born with an eye for creativity—but not the talent. What I lacked, I made up for with hard work.
                Everything I do, I treat as art—whether black and white or full of color.<br /><br />In college, I left art behind,
                thinking it had no place in my future. I turned to tech, searching for a path where creativity could still
                live. I may not be a coding genius, but I found passion in designing and building websites—a place where
                logic meets beauty.<br /><br />This is where art breathes in code. And where I finally breathe with it.</p>
            </div>
          </div>
          <div className='w-full flex flex-col items-start gap-40'>
            <div className='w-[700px] flex flex-col gap-5 justify-end'>
              <h1 className='font-poppins text-[30px] tracking-tight'>Hi, mike here!</h1>
              <p className='font-noto text-[14px]'>I am a frontend developer based in Davao City, Philippines. Currently,
                I am pursuing a Bachelor of Science degree majoring in Computer Science at Ateneo de Davao University, where I am in my third year of studies.<br /><br />
                Beyond coding, I have a strong artistic background in graphic design, portrait sketches, and photography. Initially, my interest was not focused
                on coding; however, I discovered a passion for frontend development due to its creative elements, particularly in website design and UI/UX design..</p>
            </div>
            <div className='w-full flex flex-col gap-20 justify-end'>
              <h1 className='font-poppins text-[30px] leading-7 tracking-tight'>Educational<br />History</h1>
              <div className='pl-[38px] flex flex-col gap-20'>
                <div className='w-full h-[435px] flex gap-32'>
                  <div className='w-[440px] h-full flex flex-col gap-4'>
                    <div className='flex flex-col leading-7'>
                      <h1 className='text-[22px] font- tracking-tight'>Ateneo de Davao University</h1>
                      <h1 className='text-[15px] font-ibmmono'>2020 - PRESENT</h1>
                    </div>
                    <p className='text-[14px] text-[#777777] font-noto'>At Ateneo de Davao University, I started in Business Management, earning a 3.53 QPI and a spot on the President’s
                      List, before shifting to Computer Science. Since then, I’ve earned two Dean’s List awards, developed a POS and inventory system with my groupmates, and recently completed my internship
                      at Gray Lemon Tech as a Fullstack Software Engineer.</p>
                    <div className='flex flex-col gap-1'>
                      <div className='flex flex-col leading-5'>
                        <h1 className='text-[12px] font-noto font-medium'>Address</h1>
                        <p className='text-[12px] text-[#777777] font-noto'>Roxas Ave, Poblacion District, Davao City,
                          8000 Davao del Sur</p>
                      </div>
                      <div className='flex flex-col leading-5'>
                        <button
                          className='w-[160px] px-[10px] py-[2px] mt-3 font-ibm text-[14px] rounded-full border border-black flex justify-between hover:bg-black hover:text-white transition'
                          onClick={() => window.open('https://www.google.com/maps/place/Ateneo+de+Davao+University/@7.0711329,125.6108451,17z/data=!3m1!4b1!4m6!3m5!1s0x32f9115554d3f877:0xd50ec690ed6db9b4!8m2!3d7.0711276!4d125.61342!16zL20vMDQwMmxz?entry=ttu&g_ep=EgoyMDI1MDYyNi4wIKXMDSoASAFQAw%3D%3D', '_blank')}
                        >
                          <h1>Google Maps</h1>
                          <h1 className='rotate-180'>⟵</h1>
                        </button>
                        <button className='w-[160px] px-[10px] py-[2px] mt-3 font-ibm text-[14px] rounded-full border border-black flex justify-between hover:bg-black hover:text-white transition'
                          onClick={() => window.open('https://www.addu.edu.ph/', '_blank')}>
                          <h1>Official Site</h1>
                          <h1 className='rotate-180'>⟵</h1>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className='w-[900px] h-[90%] bg-cover bg-center' style={{ backgroundImage: `url(${ADDU})` }} />
                </div>
                <div className='w-full h-[435px] flex gap-32'>
                  <div className='w-[440px] h-full flex flex-col gap-4'>
                    <div className='flex flex-col leading-7'>
                      <h1 className='text-[22px] font- tracking-tight'>Malayan Colleges Mindanao</h1>
                      <h1 className='text-[15px] font-ibmmono'>2018 - 2020</h1>
                    </div>
                    <p className='text-[14px] text-[#777777] font-noto'>At Malayan Colleges Mindanao, I was part of the pioneering batch and an ABM honors student in Grades 11 and 12. I led a
                      mini art and photobooth business, won 1st runner-up in a poster-making contest, and represented MCM ABM at Ateneo’s Siklab poster-making competition.</p>
                    <div className='flex flex-col gap-1'>
                      <div className='flex flex-col leading-5'>
                        <h1 className='text-[12px] font-noto font-medium'>Address</h1>
                        <p className='text-[12px] text-[#777777] font-noto'>Gen. Douglas MacArthur Hwy, Talomo, Davao City, 8000 Davao del Sur</p>
                      </div>
                      <div className='flex flex-col leading-5'>
                        <button
                          className='w-[160px] px-[10px] py-[2px] mt-3 font-ibm text-[14px] rounded-full border border-black flex justify-between hover:bg-black hover:text-white transition'
                          onClick={() => window.open('https://www.google.com/maps/place/Map%C3%BAa+Malayan+Colleges+Mindanao/@7.063077,125.5934284,17z/data=!3m1!4b1!4m6!3m5!1s0x32f96d630de05087:0x4676cfbea16633c2!8m2!3d7.0630717!4d125.5960033!16s%2Fg%2F11c1sz4fv4?entry=ttu&g_ep=EgoyMDI1MDYyNi4wIKXMDSoASAFQAw%3D%3D', '_blank')}
                        >
                          <h1>Google Maps</h1>
                          <h1 className='rotate-180'>⟵</h1>
                        </button>
                        <button className='w-[160px] px-[10px] py-[2px] mt-3 font-ibm text-[14px] rounded-full border border-black flex justify-between hover:bg-black hover:text-white transition'
                          onClick={() => window.open('https://mcm.edu.ph/', '_blank')}>
                          <h1>Official Site</h1>
                          <h1 className='rotate-180'>⟵</h1>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className='w-[900px] h-[90%] bg-cover bg-center' style={{ backgroundImage: `url(${MCM})` }} />
                </div>
                <div className='w-full h-[435px] flex gap-32'>
                  <div className='w-[440px] h-full flex flex-col gap-4'>
                    <div className='flex flex-col leading-7'>
                      <h1 className='text-[22px] font- tracking-tight'>Philippine Academy of Sakya</h1>
                      <h1 className='text-[15px] font-ibmmono'>2005 - 2018</h1>
                    </div>
                    <p className='text-[14px] text-[#777777] font-noto'>At Philippine Academy of Sakya Davao, I was an average student in my elementary years, but in high school, I worked my
                      way closer to the honors list and finally earned a spot in Grades 9 and 10. During my last two years, I also served as art director for a school event, designing the stage backdrop, a
                      project my teachers entrusted to me because they believed in my artistic skills.</p>
                    <div className='flex flex-col gap-1'>
                      <div className='flex flex-col leading-5'>
                        <h1 className='text-[12px] font-noto font-medium'>Address</h1>
                        <p className='text-[12px] text-[#777777] font-noto'>Cabaguio Ave, Davao City, 8000 Davao del Sur</p>
                      </div>
                      <div className='flex flex-col leading-5'>
                        <button
                          className='w-[160px] px-[10px] py-[2px] mt-3 font-ibm text-[14px] rounded-full border border-black flex justify-between hover:bg-black hover:text-white transition'
                          onClick={() => window.open('https://www.google.com/maps/place/Philippine+Academy+of+Sakya+Davao,+Inc./@7.0956736,125.6174659,17z/data=!3m1!4b1!4m6!3m5!1s0x32f96c52cd5b5edb:0x51f5b2c85a4b575f!8m2!3d7.0956683!4d125.6200408!16s%2Fg%2F1tkqxt3m?entry=ttu&g_ep=EgoyMDI1MDYyNi4wIKXMDSoASAFQAw%3D%3D', '_blank')}
                        >
                          <h1>Google Maps</h1>
                          <h1 className='rotate-180'>⟵</h1>
                        </button>
                        <button className='w-[160px] px-[10px] py-[2px] mt-3 font-ibm text-[14px] rounded-full border border-black flex justify-between hover:bg-black hover:text-white transition'
                          onClick={() => window.open('https://www.facebook.com/sakyadavao', '_blank')}>
                          <h1>Official Site</h1>
                          <h1 className='rotate-180'>⟵</h1>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className='w-[900px] h-[90%] bg-cover bg-center' style={{ backgroundImage: `url(${PASD})` }} />
                </div>
              </div>
            </div>
            <div className='w-full flex flex-col gap-5 justify-end pb-40'>
              <div className='w-full flex flex-col gap-20'>
                <h1 className='font-poppins text-[30px] leading-7 tracking-tight'>
                  Life Outside<br />Tech
                </h1>
                <div className='w-full flex gap-20'>
                  <p className='w-[440px] font-noto text-[14px] pl-[38px]'>
                    A glimpse of my human side—beyond the digital and into the part of me that still feels, learns, and grows in a world moving fast toward the future.
                  </p>
                  <div className='w-[902px] grid grid-cols-2 gap-x-20 gap-y-10'>
                    <div className='flex flex-col gap-3'>
                      <div className='w-[431px] h-[215px] bg-center bg-cover' style={{ backgroundImage: `url(${H1})` }} />
                      <div className='flex flex-col ga-2'>
                        <h1 className='text-[22px] font-noto tracking-tight'>Traveling</h1>
                        <p className='text-[13px] text-[#777777] font-noto tracking-tight'>Traveling resets my system, like witnessing the world for the first time with eyes wide open and the clarity to truly appreciate every detail, unlike a newborn still decoding the 
                          signals of existence.</p>
                      </div>
                    </div>
                    <div className='flex flex-col gap-3'>
                      <div className='w-[431px] h-[215px] bg-center bg-cover' style={{ backgroundImage: `url(${H2})` }} />
                      <div className='flex flex-col ga-2'>
                        <h1 className='text-[22px] font-noto tracking-tight'>Sketching</h1>
                        <p className='text-[13px] text-[#777777] font-noto tracking-tight'>I can’t fully explain it, but sketching makes me calm and at ease. There’s something surreal about creating art with my own hands and knowing I have the ability to bring ideas to life.</p>
                      </div>
                    </div><div className='flex flex-col gap-3'>
                      <div className='w-[431px] h-[215px] bg-center bg-cover' style={{ backgroundImage: `url(${H3})` }} />
                      <div className='flex flex-col ga-2'>
                        <h1 className='text-[22px] font-noto tracking-tight'>Photography / Videography</h1>
                        <p className='text-[13px] text-[#777777] font-noto tracking-tight'>I love capturing moments, whether it’s traveling or a simple day out with family. Through my lenses, even ordinary scenes reveal something unexpected or amusing, turning fleeting moments into 
                          memories worth keeping.</p>
                      </div>
                    </div><div className='flex flex-col gap-3'>
                      <div className='w-[431px] h-[215px] bg-center bg-cover' style={{ backgroundImage: `url(${H4})` }} />
                      <div className='flex flex-col ga-2'>
                        <h1 className='text-[22px] font-noto tracking-tight'>Cleaning / Organizing</h1>
                        <p className='text-[13px] text-[#777777] font-noto tracking-tight'>When boredom strikes, I find myself cleaning and rearranging my space, transforming it into something new. There’s a quiet satisfaction in seeing everything in order, a sense of clarity when the world around me feels clean and aligned.</p>
                      </div>
                    </div><div className='flex flex-col gap-3'>
                      <div className='w-[431px] h-[215px] bg-center bg-cover' style={{ backgroundImage: `url(${H5})` }} />
                      <div className='flex flex-col ga-2'>
                        <h1 className='text-[22px] font-noto tracking-tight'>Playing Soccer / Badminton</h1>
                        <p className='text-[13px] text-[#777777] font-noto tracking-tight'>I used to play soccer in high school until an injury made me step away from it. Now in college, I play badminton for movement and joy, not competition. I’ve never been drawn to the pressure of winning—just the rhythm of play itself.</p>
                      </div>
                    </div><div className='flex flex-col gap-3'>
                      <div className='w-[431px] h-[215px] bg-center bg-cover' style={{ backgroundImage: `url(${H6})` }} />
                      <div className='flex flex-col ga-2'>
                        <h1 className='text-[22px] font-noto tracking-tight'>Being a Fan</h1>
                        <p className='text-[13px] text-[#777777] font-noto tracking-tight'>Whether it’s a TV series, K-pop, or wrestling, being a fan keeps me inspired and entertained. I admire the craft behind what they create and hope one day to experience their worlds in person at live events.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default about 