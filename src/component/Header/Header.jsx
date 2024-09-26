import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './Header.css'
import bg2 from '../../assets/images/bg2.png'
import { useState } from 'react';




const Header = () => {
  const [show, setShow] = useState(false);

  const link =<>
      <NavLink className={({isActive})=>(isActive ? 'text-cyan-500':'')} onClick={()=>setShow(false)}
      to='/'> <small className='mr-5' >Home</small></NavLink>

      <NavLink className={({isActive})=>(isActive ? 'text-cyan-500':'')}  onClick={()=>setShow(true)}
       to='/appliedJob'><small className='mr-5'>appliedJob</small></NavLink>

      <NavLink className={({isActive})=>(isActive ? 'text-cyan-500':'')} onClick={()=>setShow(false)} to='/Blog'><small  
      className='mr-5'>Blog</small></NavLink>
  </>  
  
  

    return (
        <nav className='my-container flex items-center justify-between bg-purple-50 '>
           <p className='banner mt-10 font-bold sm:flex-col'>Step-On</p>
              <div className='mt-10 text-gray-500'>
                {link}
              </div>
             <label className='flex justify-center items-center relative' htmlFor="">
                <button className='relative Banner-button mt-10  bg-gradient-to-r from-indigo-400 to-purple-500 px-5 py-3
                 rounded-md'>Applied-Now</button>
                  {
                    show ? <img className='banner-img' src={bg2} alt="" /> : null
                  }
                </label>
           
        </nav>
    );
};

export default Header;
