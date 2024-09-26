import React from 'react';

const FeaturedJob = () => {
    return (
        <div className='bg-white'>
             <section className='text-center p-10'>
                <h2 className='text-4xl font-bold font-sans '>Featured Jobs</h2>
                <p className=' text-gray-500 mt-5'><small>Explore thousands of job opportunities with all the information you need. Its your future</small></p>
            </section>
            <section>
                <div className='h-screen flex items-center justify-center mt-10'>
                 <button className='text-white  bg-gradient-to-r from-indigo-400 to-purple-500 px-4 py-2 rounded-md'>See All Jobs</button>
                </div>

            </section>
        </div>
    );
};

export default FeaturedJob;