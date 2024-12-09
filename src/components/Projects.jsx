import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import {styles} from '../styles';
import { github } from '../assets';
import { SectionWrapper } from '../hoc';
import { projects } from '../constants';
import {fadeIn, textVariant} from '../utils/motion';
import { useEffect, useState } from 'react';

const ProjectCard =({index, name, description, 
  tags, image, source_code_link})=>{
    const [isMobile, setIsMobile] = useState(false);

    useEffect(()=>{
      //lets add a listener for changes to the screen size
      const mediaQuery = window.matchMedia('(max-width: 500px)')
  
      //Set initial value of the isMobile state variable
      setIsMobile(mediaQuery.matches);
      
      //Define a callback function to handle changes to the media query
      const handleMediaQueryChange = (event) =>{
        setIsMobile(event.matches);
      }
  
      //Add the callback function as a listener for changes to the media query
      mediaQuery.addEventListener('change',handleMediaQueryChange);
    
      //Remove the Listener when the component os unmounted
      return () =>{
        mediaQuery.removeEventListener('change',handleMediaQueryChange)
      }
    },[])
    return (
            
          <motion.div className=''
            variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
              {isMobile?
              <div 
                className="bg-tertiary p-4 rounded-2xl sm:w-[360px] w-full">
    
                  <div className="transform transition py-4 duration-300  hover:scale-125 relative w-full h-[230px]">
                    <img src={image}
                          alt={name}
                          className='w-full h-full object-fit 
                          rounded-md shadow-sm shadow-white' />
                    
                    <div className="absolute inset-0 flex 
                      justify-end m-3 card-img_hover">
                        <div onClick={()=> window.open(source_code_link,"_blank")}
                          className='black-gradient w-10 mt-2 h-10 rounded-full
                          flex justify-center items-center cursor-pointer'>
                          
                          <img src={github} 
                                alt="github" 
                                className='w-1/2 h-1/2 object-contain'/>
                        </div>
                    </div>
                  </div>
    
              {/**Project Descriptions */}
                  <div className='mt-5'>
                    <h3 className="text-white font-bold 
                      text-[24px]">{name}
                    </h3>
                    <p className='mt-2 text-secondary text-14px'>{description}</p>
                  </div>
              </div>
              :<Tilt options={{ max: 40, scale: 1, speed:400 }}
              className="bg-tertiary p-4 rounded-2xl sm:w-[360px] w-full">
  
                <div className="transform transition py-4 duration-300  hover:scale-125 relative w-full h-[230px]">
                  <img src={image}
                        alt={name}
                        className='w-full h-full object-fit 
                        rounded-md shadow-sm shadow-white' />
                  
                  <div className="absolute inset-0 flex 
                    justify-end m-3 card-img_hover">
                      <div onClick={()=> window.open(source_code_link,"_blank")}
                        className='black-gradient w-10 mt-2 h-10 rounded-full
                        flex justify-center items-center cursor-pointer'>
                        
                        <img src={github} 
                              alt="github" 
                              className='w-1/2 h-1/2 object-contain'/>
                      </div>
                  </div>
                </div>
  
            {/**Project Descriptions */}
                <div className='mt-5'>
                  <h3 className="text-white font-bold 
                    text-[24px]">{name}
                  </h3>
                  <p className='mt-2 text-secondary text-14px'>{description}</p>
                </div>
            </Tilt>
              }
          </motion.div> 
             

    )
}

const Projects = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>
            My Work
          </p>
          <h2 className={styles.sectionHeadText}>
            Projects
          </h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p variants={fadeIn("", "", 0.1, 1)}
                  className='mt-3 text-secondary 
                  text-[17px] max-w-3xl leading-[30px]'>
                    Following projects showcases my skills and experience through
                    real world examples of my work. Each project is briefly described
                    with links to code repositories. It reflects
                    my ability to solve complex problems, work with different
                    technologies, and manage projects effectively.
        </motion.p>
      </div>
      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index)=>(
          <ProjectCard
            //key={`project-${index}`}
            index={index}
            {...project} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Projects, "projects");