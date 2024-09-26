import React from 'react';
import accounts from '../../assets/icons/accounts.png'
import creative from '../../assets/icons/creative.png'
import marketing from '../../assets/icons/marketing.png'
import chip from '../../assets/icons/chip.png'
const Category = () => {
    return (
        <div className='p-10 bg-white'>
            <section className='text-center mt-16'>
                <h2 className='text-4xl font-bold font-sans'>Job Category List</h2>
                <p className=' text-gray-500 mt-5'> <small>Explore thousands of job opportunities with all the information you need. Its your future</small></p>
            </section>
            <section className='flex flex-col lg:flex-row items-center justify-evenly mt-20'>

                <div className='mx-5 mb-10 p-10 bg-purple-50 rounded-md'>
                    <img className='ml-10 mb-2' src={accounts} alt="" />
                    <h3 className='font-bold font-sans'>Account & Finance</h3>
                    <p className='text-center'><small className='text-gray-500'>300 Jobs Available</small></p>
                </div>
                <div className='mx-5 p-10 mb-10 bg-purple-50 rounded-md'>
                    <img className='ml-10 mb-2' src={creative} alt="" />
                    <h3 className='font-bold font-sans'>Creative Design</h3>
                    <p className='text-center'><small className='text-gray-500'>100+ Jobs Available</small></p>
                </div>
                <div className='mx-5 p-10 mb-10 bg-purple-50 rounded-md'>
                    <img className='ml-10 mb-2' src={marketing} alt="" />
                    <h3 className='font-bold font-sans'>Marketing & Sales</h3>
                    <p className='text-center'><small className='text-gray-500'>150 Jobs Available</small></p>
                </div>
                <div className='mx-5 p-10 mb-10 bg-purple-50 rounded-md'>
                    <img className='ml-10 mb-2' src={chip} alt="" />
                    <h3 className='font-bold font-sans'>Engineering Job</h3>
                    <p className='text-center'><small className='text-gray-500'>224 Jobs Available</small></p>
                </div>
            </section>
        </div>
    );
};

export default Category;