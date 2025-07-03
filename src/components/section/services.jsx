import serviceData from '../data/servicesdata';
import Arrow from '../../assets/arrow-right.svg'

const services = () => {
    return (
        <div className='flex flex-col gap-4'>
            <h1 className='text-[23px] font-poppins tracking-tighter flex items-center gap-2'><img src={Arrow} className='w-5 h-5'/>Services</h1>
            <div className='flex flex-col border-y border-black py-[10px]'>
                <h1 className='font-noto font-light tracking-tight leading-6 text-[20px] mb-[20px]'>
                    Solutions built at the edge of design and tech.
                </h1>
                {serviceData.map((item, index) => (
                    <button
                        key={index}
                        className='font-noto text-[12px] text-left py-[5px] hover:text-[#777777] transition'
                    >
                        {item.title}
                    </button>
                ))}
            </div>
        </div>
    )
}

export default services