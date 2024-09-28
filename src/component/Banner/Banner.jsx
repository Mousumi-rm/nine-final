import React from 'react';
import './Banner.css'
import user from '../../assets/images/user.png'
const Banner = () => {
    return (
        <div className='my-container'>
            <section className='flex flex-col md:flex-row items-center justify-center mb mt-16 bg-purple-50'>
                    <div className=''>
                        <div className=''>
                            <h1 className='flex flex-col text-6xl font-sans font-bold'>
                             <span>One Step</span> 
                                <span>Closer To your</span>
                                <span className='bg-gradient-to-r from-indigo-400 to-purple-500  bg-clip-text  text-transparent'>Dream Job</span></h1>
                                </div>
                                <p className='mt-5 text-gray-500'>Explore thousands of job opportunities with all the <br className=''/>
                                information you need. Its your future. 
                                Come find it. Manage all your job application from start to finish.</p>
                          <button className='text-white mt-5  bg-gradient-to-r from-indigo-400 to-purple-500 px-4 py-2 rounded-md'>Get Started</button>
                      </div>
                    <div>
                    <img className='man-img ' src={user} alt="" />
                </div>
            </section>
           
        </div>
    );
};

export default Banner;