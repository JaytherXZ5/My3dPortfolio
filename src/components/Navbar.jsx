import React, { useState } from 'react'

import { styles } from '../styles';
import { Link } from 'react-router-dom';
import { logo,menu,close} from '../assets';

import { navLinks } from './../constants/';

const Navbar = () => {

  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);

  return (
    <nav className={`
      ${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`
    }
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link to="/" 
              className=' flex items-center gap-2'
              onClick={()=>{
                setActive("");
                window.scrollTo(0,0);
              }}>
                <img src={logo} alt='logo' className='w-9 h-9   object-contain' />
                <p className="text-white text-[18px] font-bold cursor-pointer flex">Jayther Jann Bua-ay &nbsp;
                  <span className='md:block sm:block hidden'>| Portfolio</span>
                </p>

        </Link>

        {/**lists data from /constants/index.js as Tabs to the page */}
        <ul className='list-none hidden sm:flex flex-row gap-10'>
              {navLinks.map((link)=>(
                <li 
                  key={link.id} 
                  className={`${active === link.title ? "text-white" : "text-secondary"} 
                            hover:text-white text-[18px] font-medium cursor-pointer`
                            }
                  onClick={()=> setActive(link.title)}>
                    <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
        </ul>
        
        <div className="sm:hidden flex flex-1 justify-end items-center">
          {/**(src)show the close icon if toggle is true else show menu */}
          <img 
            src={toggle ? close : menu} alt="menu" srcset="" 
            className='w-[28px] h-[28px] object-contain cursor-pointer'
            onClick={()=>setToggle(!toggle)}/>

            {/**if this is not toggled then hide this section */}
            <div className={`${!toggle ? 'hidden' : 'flex'} border p-6 black-gradient absolute top-20 right-0 mx-0 my-2 min-w-[140px] z-10 rounded-xl`}>
              <ul className='list-none flex justify-end items-start flex-col gap-4'>
                {navLinks.map((link)=>(
                  <li 
                    key={link.id} 
                    className={`${active === link.title ? "text-white" : "text-secondary"} 
                              hover:text-white font-poppins font-medium cursor-pointer text-[16px ]`
                              }
                    onClick={()=> {
                        setToggle(!toggle);
                        setActive(link.title)
                      }}>
                      <a href={`#${link.id}`}>{link.title}</a>
                  </li>
                ))}
            </ul>
            </div>
        </div>

      </div>

    </nav>
  )
}

export default Navbar