import connectData from '../data/connectdata';

const connect = () => {
  return (
    <div className='flex flex-col gap-4'>
      <h1 className='text-[23px] font-poppins tracking-tighter'>🡢 Connect</h1>
      <div className='flex flex-col border-y border-black py-[10px] mb-[30px]'>
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