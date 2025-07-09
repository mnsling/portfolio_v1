import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useForm, ValidationError } from '@formspree/react';

const Contacts = () => {
  const [state, handleSubmit] = useForm("xdkzrykw");

  return (
    <motion.div
      initial={{ opacity: 0, y: 0 }}
      animate={{ opacity: 1, y: -20 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <div className='w-full flex pt-[110px] md:px-[40px] md:justify-center'>
        <div className='w-full xl:w-[70%] flex flex-col gap-20 md:gap-40 px-[10px]'>
          <div className='w-full h-fit flex items-end'>
            <Link to="/" className='text-[38px] font-poppins font-bold tracking-tighter leading-9'>Nick</Link>
            <p className='font-ibm font-bold text-[18px] leading-6 ml-[12px] mr-[6px]'>/</p>
            <p className='font-ibm font-bold text-[18px] leading-6 tracking-tight'>Contact</p>
          </div>
          <div className='flex flex-col gap-60'>
            <div className='w-full flex justify-end'>
              <div className='w-full md:w-[450px] flex flex-col gap-5 justify-end'>
                <h1 className='font-noto text-[25px] md:text-[30px]'>Start New Project</h1>
                <p className='font-noto text-[12px] md:text-[14px]'>
                  I’m open to new opportunities, collaborations, and exciting projects. If you’d like to discuss working
                  together, interviews, internships, or any creative ideas, feel free to get in touch via the form below. I’d love to hear from you!
                </p>
                <button className='flex justify-between mt-8 font-noto text-[14px] tracking-tight py-2 border-b border-black hover:text-[#777777] transition'>
                  <h1>Download My CV & Contact Me</h1>
                  <h1 className='rotate-180'>⟵</h1>
                </button>
              </div>
            </div>
            <div className='w-full flex flex-col items-start gap-40'>
              <div className='w-full md:w-[700px] flex flex-col gap-5 justify-end'>
                <h1 className='font-poppins text-[30px] tracking-tight'>Tap in — I’m listening</h1>

                {state.succeeded ? (
                  <p className='font-light font-noto'>Thanks for your message! I’ll get back to you soon.</p>
                ) : (
                  <form onSubmit={handleSubmit} className='flex flex-col gap-5 font-noto text-[14px] mb-20'>
                    <div className='flex flex-col gap-2'>
                      <label htmlFor='name'>Name *</label>
                      <input
                        id='name'
                        type='text'
                        name='name'
                        required
                        className='border-b border-black py-2 focus:outline-none transition'
                        placeholder='🡢'
                      />
                      <ValidationError prefix="Name" field="name" errors={state.errors} />
                    </div>
                    <div className='flex flex-col gap-2'>
                      <label htmlFor='email'>Email *</label>
                      <input
                        id='email'
                        type='email'
                        name='email'
                        required
                        className='border-b border-black py-2 focus:outline-none transition'
                        placeholder='🡢'
                      />
                      <ValidationError prefix="Email" field="email" errors={state.errors} />
                    </div>
                    <div className='flex flex-col gap-2'>
                      <label htmlFor='subject'>Subject</label>
                      <input
                        id='subject'
                        type='text'
                        name='subject'
                        className='border-b border-black py-2 focus:outline-none transition'
                        placeholder='🡢'
                      />
                      <ValidationError prefix="Subject" field="subject" errors={state.errors} />
                    </div>
                    <div className='flex flex-col gap-2'>
                      <label htmlFor='message'>Message *</label>
                      <textarea
                        id='message'
                        name='message'
                        rows='5'
                        required
                        className='border-b border-black py-2 focus:outline-none transition'
                        placeholder='🡢'
                      ></textarea>
                      <ValidationError prefix="Message" field="message" errors={state.errors} />
                    </div>
                    <button
                      type='submit'
                      disabled={state.submitting}
                      className='mt-4 w-fit border rounded-full border-black px-20 py-2 hover:text-[#777777] transition'
                    >
                      {state.submitting ? 'Sending...' : 'Send Message'}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contacts;
