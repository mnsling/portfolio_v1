import { useEffect, useState } from 'react';

const Typewriter = () => {
    const lines = ['Where clean code', 'meets clear', 'design.'];
    const [displayedText, setDisplayedText] = useState(['', '', '']);
    const [lineIndex, setLineIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [doneTyping, setDoneTyping] = useState(false);

    useEffect(() => {
        if (lineIndex < lines.length) {
            if (charIndex < lines[lineIndex].length) {
                const timeout = setTimeout(() => {
                    setDisplayedText(prev => {
                        const updated = [...prev];
                        updated[lineIndex] += lines[lineIndex][charIndex];
                        return updated;
                    });
                    setCharIndex(prev => prev + 1);
                }, 60);
                return () => clearTimeout(timeout);
            } else {
                const timeout = setTimeout(() => {
                    setLineIndex(prev => prev + 1);
                    setCharIndex(0);
                }, 300);
                return () => clearTimeout(timeout);
            }
        } else {
            // done typing
            setDoneTyping(true);
        }
    }, [charIndex, lineIndex]);

    return (
        <div className='w-full h-[18%] md:h-[29%] lg:h-[38%] xl:h-[40%] 2xl:h-[52%] flex justify-center transition z-0'>
            <div className="relative w-[90%] md:w-[70%] h-full flex justify-between z-50">
                <h1 className='font-semibold text-[18px] md:text-[38px] lg:text-[51px] xl:text-[62px] 2xl:text-[75px] text-[#d61723] tracking-tighter leading-4 md:leading-8 lg:leading-[45px] xl:leading-[52px] 2xl:leading-[62px] transition'>
                    {displayedText.map((line, i) => (
                        <span key={i} className="block">
                            {line}
                            {((i === lineIndex && lineIndex < lines.length) || (i === lines.length - 1 && lineIndex === lines.length)) && (
                                <span className="inline-block ml-1 animate-blink">|</span>
                            )}
                        </span>
                    ))}
                </h1>

                {doneTyping && (
                    <div className='w-[40%] h-full flex flex-col justify-between items-end'>
                        <div className='w-[1vw] h-[1vw] bg-[#d61723] rounded-full animate-blink' />
                        <div className='w-full flex items-end'>
                            <div className='w-full h-full flex justify-between items-center pb-8 md:pb-12 lg:pb-[72px] xl:pb-14 2xl:pb-18 animate-wipeRight transition'>
                                <div className='w-[50%] md:w-[60%] lg:w-[70%] h-[1px] bg-[#d61723] transition' />
                                <h1 className='w-fit h-fit text-xs md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl text-[#d61723] text-right leading-[2vw] font-bold tracking-tighter transition'>Est. 2025</h1>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Typewriter;