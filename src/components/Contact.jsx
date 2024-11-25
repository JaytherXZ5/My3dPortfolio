import React from 'react'
import {useState, useRef} from 'react';
import {motion} from 'framer-motion';
import emailjs from '@emailjs/browser';

//import {useOnclickOutside} from 'hooks';

import {styles} from '../styles';
import {EarthCanvas} from './canvas';
import {SectionWrapper} from '../hoc';
import {slideIn} from '../utils/motion';

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email:'',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {};
  const handleSubmit = (e) => {};

  return (
    <div className='xl:mt-2 xl:flex-row
    flex-col-reverse flex gap-10 overflow-hidden'>
      <motion.div 
        variants={slideIn('left', 'tween', 0.2, 1)}
        className='flex-[0.75] bg-tertiary p-8 rounded-xl'>
          <p className={`${styles.sectionSubText } text-customOrange-100`}>
            Get in touch
          </p>
          <h3 className={styles.sectionHeadText}>
            Contact.

            <form 
              ref={formRef}
              onSubmit={handleSubmit}
              className='mt-12 flex flex-col gap-8'>
                <label className='flex flex-col'>
                  <span className='text-white
                    font-medium mb-4'>Your Name
                  </span>
                  <input 
                    type="text"
                    name= "name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="What's your name?"
                    className='bg-tertiary py-4 px-6
                        placeholder:text-secondary text-white rounded-lg outlined-none
                        border-none font-medium'/>
                </label>
              </form>
          </h3>
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, "contact")