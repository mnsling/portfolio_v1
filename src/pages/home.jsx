import React, { useEffect, useState } from 'react';

const Home = () => {
  const lines = ['Where clean code', 'meets clear', 'design.'];
  const [displayedText, setDisplayedText] = useState(['', '', '']);
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [doneTyping, setDoneTyping] = useState(false);

  useEffect(() => {
    if (lineIndex < lines.length) {
      if (charIndex < lines[lineIndex].length) {
        const timeout = setTimeout(() => {
          setDisplayedText((prev) => {
            const updated = [...prev];
            updated[lineIndex] += lines[lineIndex][charIndex];
            return updated;
          });
          setCharIndex((prev) => prev + 1);
        }, 60);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setLineIndex((prev) => prev + 1);
          setCharIndex(0);
        }, 300);
        return () => clearTimeout(timeout);
      }
    } else {
      setDoneTyping(true);
    }
  }, [charIndex, lineIndex]);

  return (
    <div className='h-screen flex justify-center items-center bg-[#f2f2f2]'>
      <div className='w-[90%] md:w-[75%]'>
        <div className='flex items-center'>
          <h1 className='absolute bottom-[52vh] text-[#d61723] text-[6vw] font-semibold leading-[5.5vw] tracking-tighter transition 
          md:text-[5vw] md:leading-[4.5vw]
          lg:text-[4.5vw] lg:leading-[4vw] lg:bottom-[52vh]
          xl:text-[4vw] xl:leading-[3.5vw] xl:bottom-[55vh]'>
            {displayedText.map((line, i) => (
              <span key={i} className="block">
                {line}
                {((i === lineIndex && lineIndex < lines.length) || (i === lines.length - 1 && lineIndex === lines.length)) && (
                  <span className="inline-block ml-1 animate-blink">|</span>
                )}
              </span>
            ))}
          </h1>

          <h1 className='absolute left-0 text-[18.2vw] font-bold tracking-tighter stroke'>PORTFOLIO.</h1>

          {doneTyping && (
            <div className='absolute bottom-[43vh] w-[90%] flex justify-end items-center gap-3 transition animate-wipeRight
            md:w-[75%] md:bottom-[38vh]
            lg:bottom-[35vh]
            xl:bottom-[32vh]
            2xl:bottom-[28vh]'>
              <div className='h-[1px] w-[30%] bg-[#d61723]' />
              <h1 className='h-full w-[18%] text-[3vw] text-right text-[#d61723] font-bold transition
              md:text-[2.5vw]
              lg:text-[2vw]'>EST. 2025</h1>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
