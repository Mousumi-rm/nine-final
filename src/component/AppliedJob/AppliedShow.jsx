import React from 'react';
import { Link } from 'react-router-dom';
import Location from '../../assets/icons/Location.png'
import money from '../../assets/icons/money.png'

const AppliedShow = ({data}) => {
    const {company_name, id, logo, job_title, remote_or_onsite, job_type, location, salary} = data;
    return (
        <div className='my-10 mx-20'>
               <section className= 'border border-red-500 lg:px-4 py-4 flex flex-col lg:flex-row items-center justify-between sm:mx-32 lg:mx-20'>
                     <div className=' rounded-md bg-gray-100 border-red-500 px-16 py-16 inline-block '>
                        <img className='w-20 h-10 md:mx-8' src={logo} alt="" />
                     </div>
                     <div className='lg:mr-32'>
                        {/* show-1 */}
                           <div>
                             <p className='lg:-mx-10 mt-5 font-bold text-center'>{job_title}</p>
                             <p className='text-center'>{company_name}</p>
                           </div>
                            {/* show-2 */}
                            <div className='flex items-center justify-center mt-4 sm:mx-10'>
                                <p className=' mr-10 border  border-sky-500 text-sky-400 sm:px-10 px-5 '>{remote_or_onsite}</p>
                                <p className='border border-sky-500 text-sky-400 lg:-mx-5 lg:px-5 sm:mx-5 sm:px-3'>{job_type}</p>
                             
                            </div>
                             {/* show-3 */}
                            <div className= 'mb-5  flex items-center justify-center mt-4'>
                                <div className=' flex items-center justify-around'>
                                 <img className='-mx-1' src={Location} alt="location" />
                                  <p className='mr-8 ml-2 -mx-5'>{location}</p>
                                </div>
                                <div className=' flex items-center justify-around'>
                                    <img src={money} alt="money" />
                                  <p className=''>{salary}</p>
                                </div>
                            </div>
                     </div>
                          <div>
                            <Link to = {`/jobs/${id}`}>
                          <button  className=' px-8 py-4 text-white  bg-gradient-to-r
                           from-indigo-400 to-purple-500  rounded-md'>
                            View Details</button></Link>
                          </div>
                  </section>
                  
                
        </div>
    );
};

export default AppliedShow;