import React from 'react';
import { Link } from 'react-router-dom';
import location2 from '../../assets/icons/location2.png'
import money from '../../assets/icons/money.png'




const ShowJob = ({job}) => {
   

    const{company_name, id, logo, job_title, remote_or_onsite, job_type, location, salary}=job
    return (
        <div className='mt-10'>
            <section>  
                 <div className= 'border px-10 py-10 shadow-sm '>
                      <div className='flex flex-col items-center justify-start px-4'>
                        <img className='w-40 h-10' src={logo} alt="" />
                            <p className='-mx-10 mt-5 font-bold'>{job_title}</p>
                            <p >{company_name}</p>
                         </div>
                            <div className='flex items-center justify-center mt-4'>
                                <p className='mr-20 border  border-sky-500 text-sky-400 px-5'>{remote_or_onsite}</p>
                                <p className='border border-sky-500 text-sky-400 -mx-5 px-5'>{job_type}</p>
                            </div>
                            <div className= 'mb-5  flex items-center justify-center mt-4'>
                                <div className=' flex items-center justify-around'>
                                 <img src={location2} alt="location2" />
                                  <p className='mr-20 ml-2 -mx-5'>{location}</p>
                                </div>
                                <div className=' flex items-center justify-around'>
                                    <img src={money} alt="money" />
                                  <p className=''>{salary}</p>
                                </div>
                            </div>
                            <div className=' flex items-center justify-center'>
                             <Link to = {`/jobs/${id}`}>
                                <button  className=' px-8 py-4 text-white  bg-gradient-to-r from-indigo-400 to-purple-500  rounded-md'>View Details</button>
                                </Link>    
                            </div>
                          
                  </div>
            </section>
              
        </div>
    );
};

export default ShowJob;