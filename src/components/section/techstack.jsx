import { stackData } from '../data/stackdata';

const techstack = () => {
    return (
        <div className='flex flex-col gap-5 pb-[20px] border-b border-black'>
            <h1 className='text-[23px] font-poppins tracking-tighter'>🡢 Tech Stack</h1>
            <div className='flex flex-col gap-1'>
                {stackData.map((row, i) => (
                    <div className='flex gap-1' key={i}>
                        {row.map((item) => (
                            <p
                                key={item.name}
                                className='w-fit flex gap-2 items-center font-ibmmono lowercase text-[12px] text-left py-[3px] px-[12px] border border-black rounded-full hover:text-[#777777] transition'
                            >
                                {item.name}
                                <img src={item.image} className='w-3 h-3' alt={item.name} />
                            </p>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default techstack