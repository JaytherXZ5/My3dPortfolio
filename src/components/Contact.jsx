import React from 'react'
import {useState, useRef} from 'react';
import {motion} from 'framer-motion';
import emailjs from '@emailjs/browser';
import chevron_down from '../assets/chevron-down.png'
//import {useOnclickOutside} from 'hooks';

import {styles} from '../styles';
import {EarthCanvas} from './canvas';
import {SectionWrapper} from '../hoc';
import {slideIn} from '../utils/motion';
import { Linkedin, Mail, Phone, Facebook, Instagram, Github } from 'lucide-react';

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email:'',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    const {name, value } = e.target;

    setForm({...form, [name]: value})
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    //send email
    emailjs.send(
      import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
      {
        from_name: form.name,
        to_name: 'Jayther Jann',
        from_email: form.email,
        to_email: 'jaytherjanbuaay2.0@gmail.com',
        message: form.message,
      },
      import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
    ).then(()=>{
      setLoading(false);
      alert("Thank you. I'll get back to you as soon as possible.")
      
      //clear form
      setForm({
        name:'',
        email:'',
        message:'',
      });
    
    }, (error)=>{
      setLoading(false)

      console.error(error);
      alert('Something went wrong.');
    })
  };

  return (
    
    <div className='xl:mt-2 xl:flex-row
    flex-col-reverse flex gap-10 overflow-hidden'>
      <motion.div 
        variants={slideIn('left', 'tween', 0.2, 1)}
        className='flex-[0.75] bg-tertiary p-8 rounded-xl'>
          <p className={`${styles.sectionSubText }`}>
            Get in touch
          </p>
          <h3 className={styles.sectionHeadText}>
            Contact Me.
          </h3>
            <form 
              ref={formRef}
              onSubmit={handleSubmit}
              className='mt-12 flex flex-col gap-8'>
                <label className='flex flex-col'>
                  <span className={`text-white font-sm mb-4`}>Your Name</span>
                  <input
                    type='text'
                    name='name'
                    value={form.name}
                    onChange={handleChange}
                    placeholder="What's your name?"
                    className='bg-primary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
                  />
                </label>
                <label className='flex flex-col'>
                  <span className='text-white
                    font-medium mb-4'>Your Email
                  </span>
                    <input 
                      type="email"
                      name= "email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="What's your Email?"
                      className='bg-primary py-4 px-6
                          placeholder:text-secondary text-white rounded-lg outlined-none
                          border-none font-medium'/>
                </label>
                <label className='flex flex-col'>
                  <span className='text-white
                    font-medium mb-4'>Send your message
                  </span>
                    <textarea
                        rows="7"
                        name= "message"
                        value={form.message}
                        onChange={handleChange}
                        placeholder="What do you want to say?"
                        className='bg-primary py-4 px-6
                            placeholder:text-secondary text-white rounded-lg outlined-none
                            border-none font-medium'
                    />
                    
                </label>

                <div className=' flex justify-end'>
                <button 
                  type='submit'
                  className='bg-tertiary py-3 px-8 outline-none
                    w-fit text-white font-bold shadow-sm shadow-white
                    rounded-xl border
                    hover:bg-white hover:text-black transform duration-300'>
                  {loading ? 'Sending...': 'Send'}
                </button>      
                </div>

                <div className="flex flex-col gap-4 justify-start">
                  
                  <div className={`${styles.sectionSubText2}  `}>
                      <span className='text-customOrange-100'>Socials</span>
                      <div className="flex flex-row gap-6 justify-start mt-1">
                        <a href="https://web.facebook.com/JaytherXZ52">
                          <Facebook size={40} className='border p-1 rounded-lg'/>
                        </a>
                        <a href="https://www.linkedin.com/in/jayther-jann-bua-ay-6b6a82233/">
                          <Linkedin size={40} className='border p-1 rounded-lg'/>
                        </a>
                        <a href="https://github.com/JaytherXZ5">
                          <Github size={40} className='border p-1 rounded-lg'/>
                        </a>
                      </div>
                  </div>
                  

                  <div className={`${styles.sectionSubText2} flex flex-col`}>
                    <div className="flex flex-row">
                      <span className='text-customOrange-100'>Email</span>
                      <Mail className='p-1' />
                    </div>
                    <span>jaytherjanbuaay2.0@gmail.com</span>
                  </div>


                  <div className={`${styles.sectionSubText2} flex flex-col `}>
                    <div className="flex flex-row">
                      <span className='text-customOrange-100'>Phone</span>
                      <Phone className='p-1' />
                    </div>
                    <span>(+63) 9289940716</span>
                  </div>
                </div>


              </form>
      </motion.div>

      <motion.div 
        variants={slideIn('right', "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
        >
          <EarthCanvas />
      </motion.div>

    </div>
  )
}

export default SectionWrapper(Contact, "contact")