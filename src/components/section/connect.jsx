import connectData from '../data/connectdata';
import Arrow from '../../assets/arrow-right.svg'

const connect = () => {
  return (
    <div className='flex flex-col gap-4'>
      <h1 className='text-[23px] font-poppins tracking-tighter flex items-center gap-2'><img src={Arrow} className='w-5 h-5'/>Connect</h1>
      <div className='flex flex-col border-y border-black py-[10px] pb-[20px]'>
        {connectData.map((item, index) => (
          <a
            key={index}
            href={item.url}
            target='_blank'
            rel='noopener noreferrer'
            className='font-noto text-[12px] text-left py-[5px] hover:text-[#777777] transition'
          >
            {item.platform}
          </a>
        ))}
      </div>
    </div>
  )
}

export default connect