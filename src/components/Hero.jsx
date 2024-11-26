import {motion} from 'framer-motion';
import { styles } from '../styles';
import {ComputersCanvas} from './canvas';
import chevron_down from '../assets/chevron-down.png'
import jayther from '../assets/Jayther.png'
import { useEffect, useState } from 'react';

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(()=>{
    //lets add a listener for changes to the screen size
    const mediaQuery = window.matchMedia('(max-width: 900px)')

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
    <section className="relative w-full h-screen mx-auto">
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex ${isMobile? "flex-col" : "flex-row"} `}>
         <div className={`flex flex-row items-start gap-5`}>
          <div className='flex flex-col justify-center items-center mt-5'>

            <div className="w-5 h-5 rounded-full bg-customOrange-100"/>
            <div className='w-1 sm:h-60 h-40 lg:h-96 md:h-20 bg-gradient-to-b from-customOrange-100' />


          </div>
          <div className=''>
              <h1 className={`${styles.heroHeadText} mt-2 text-white transform animate-fade-in`}> 
                  Hi, Im <span className='text-customOrange-100'>Jayther</span>
              
              </h1>
              <p className={`${styles.heroSubText} mt-5 text-slate-300 animate-fade-in`}>
                  A Passionate <span className='text-customOrange-100'>Software Developer</span> <br /> Turning Ideas into Reality
              </p>
            
          </div>
           
          
      </div>

          <div className={`${isMobile? "w-[450px] h-[450px]": "hidden"}`}>
            <img src={jayther} alt="" className='mobile' />
          </div> 

        <div className={`${isMobile? "hidden": "w-[700px] h-[700px] overflow-auto"}`}>
            <img src={jayther} alt="" className='large' />
        </div>

        </div>
      
       
        
        ComputersCanvas
 
        <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center'>
          <a href="#about">
            <div className='w-[35px] h-[74px] rounded-3xl border-4 border-customOrange-100 flex justify-center items-center p-1 '>
              <motion.div 
                className =" w-full h-5 mb-1 "
                  animate={{
                    y: [0,24,0]
                  }}
                  transition ={{
                    duration: 1.5,
                    repeat:Infinity,
                    repeatType: 'loop'
                  }}
                  >
                    <img src={chevron_down} />
                  
                  </motion.div>
            </div>
          </a>
        </div>
    </section>
  )
}

export default Hero