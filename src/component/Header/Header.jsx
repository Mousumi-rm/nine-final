import React from 'react';
import {  NavLink} from 'react-router-dom';
import './Header.css'
import bg2 from '../../assets/images/bg2.png'
import { useState } from 'react';




const Header = () => {
  const [show, setShow] = useState(false);

  const link =<>
      <NavLink className={({isActive})=>(isActive ? 'text-cyan-500':'')} onClick={()=>setShow(false)}
      to='/'> <small className='mr-5'>Home</small></NavLink>

      <NavLink className={({isActive})=>(isActive ? 'text-cyan-500':'')}  onClick={()=>setShow(true)}
       to='/appliedJob'><small className='mr-5'>Applied Job</small></NavLink>

      <NavLink className={({isActive})=>(isActive ? 'text-cyan-500':'')} onClick={()=>setShow(true)} to='/Blog'><small  
      className='mr-5'>Blog</small></NavLink> 

      

       
  </>  
  
  

    return (
      <div className='relative overflow-hidden vh-100 my-container'>   
                  <label className='flex items-end justify-end absolute top-0 right-0 bg-cover bg-center z-0'>
                         {show ? <img className='w-40 h-30 ' src={bg2} alt="" /> : null}
                     </label>
                   
          <nav  className=' flex flex-col items-center justify-between sm:flex-row  my-container  z-0'>
           
            <p className='banner pr-0 font-bold sm:flex-col mt-10'>Step-On</p>
              <div className=' text-gray-500 mt-10'>
                {link}
              </div>
             <div className=' '>
                <button className=' mt-10 Banner-button   bg-gradient-to-r from-indigo-400 to-purple-500 px-5 py-3
                 rounded-md'>Applied-Now</button>
                </div>
            
            </nav>
           

                  
      </div> 
          
                
      
       
    );
};

export default Header;

