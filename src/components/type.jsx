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
        <div className="relative w-full min-w-[70%] min-h-[50%] flex justify-between z-50">
            <h1 className='font-semibold text-[4.2vw] text-[#d61723] tracking-tighter leading-[3.5vw]'>
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
                <div className='w-[40%] flex flex-col justify-between items-end'>
                    <div className='w-[1vw] h-[1vw] bg-[#d61723] rounded-full animate-blink' />
                    <div className='flex w-full items-center pb-4 md:pb-5 xl:pb-16 animate-wipeRight'>
                        <div className='w-[50%] xl:w-full h-[1px] bg-[#d61723]' />
                        <h1 className='w-[50%] text-[3vw] xl:text-[2vw] text-[#d61723] text-right leading-[2vw] font-bold tracking-tighter'>Est. 2025</h1>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Typewriter;
