import React from 'react'
import { Tilt } from 'react-tilt';
import {motion} from 'framer-motion';
import { styles } from '../styles';
import {services} from '../constants';
import {fadeIn, textVariant} from '../utils/motion';
import {SectionWrapper} from '../hoc';
import AudioVisualizer from './AudioVisualizer/Visualizer';

const ServiceCard = ({index, title, icon}) =>{
  return (
    <Tilt className={"xs:w-[250px] w-full"}>
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className='w-full bg-customOrange-100 p-[2px] rounded-[20px] shadow-card'
        >
          <div 
            className='bg-card-pattern rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
            options={{
              max: 45,
              scale:1,
              speed:450
          }}
          >
            <img src={icon} alt={title} 
              className="w-16 h-16 object-contain"
              />
              <h3 
                className='text-white bg-gradient-tr text-[20px] font-bold text-center'>
                {title}
              </h3>
          </div>
      </motion.div>
    </Tilt>
  )
}
const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}` }>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p 
        variants={fadeIn("", "",0.1,1)}
        className='mt-4 text-secondary text-[17px]'
      >
      I a recent graduate from Mariano Marcos State University, aspiring professional software developer.
      I have a a strong foundation in TypeScript and JavaScript, specializing 
      in modern frameworks like React, Node.js, Next.js, and 
      Three.js. I thrive on learning quickly and collaborating 
      effectively to deliver efficient, scalable, and user-friendly 
      solutions that address real-world challenges.
      <br />
      <br />
      If you're looking for a developer who can transform ideas into impactful digital experiences, let's connect and make it happen!
      </motion.p>
      <AudioVisualizer />
      {/**displaying and passing an iteration of values from the services list*/}
      <div className='mt-20 flex flex-wrap justify-center gap-10'>
        {services.map((service, index)=>(
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about")