import React, { useState, useEffect } from 'react';
// import { useLoaderData } from 'react-router-dom';
import bg1 from '../../assets/images/bg1.png';
import { ChevronDownIcon } from '@heroicons/react/24/solid';
import AppliedShow from './AppliedShow';
import {getStoredJobApplication} from '../utility/DataBd'







const AppliedJob = () => {
    const [isOpen, setOpen] = useState(false); // Dropdown open state
    const [display, setDisplay] = useState([]); // Displayed jobs (filtered)
    const [isApplied, setApplied] = useState([]); // Applied jobs
      // Fetch the jobs and filter applied jobs
      useEffect(()=>{
        fetch('jobs.json')
        .then(res=>res.json())
        .then(data =>{
            setDisplay(data);
        })
    },[])
    
    useEffect(() => {
        const storedJobIds = getStoredJobApplication() ;
        // Get stored applied job IDs
         const jobApplied = [];
            for (const id in storedJobIds) {
                const job = display.find((job) => job.id === id);
                if (job) {
                    jobApplied.push(job);
                }
          
            setApplied(jobApplied);
            setDisplay(jobApplied) // Initially show all applied jobs
          }
        
    }, [display]);

    // Handle filtering logic
    const handleToFilter = (filter) => {
        let newCart = [];
        if (filter === 'remote') {
            newCart = isApplied.filter((job) => job.remote_or_onsite === 'remote');
            setDisplay(newCart)
        } else if (filter === 'all') {
            newCart = (isApplied);
            setDisplay(newCart)
        } else if (filter === 'onsite') {
            newCart = isApplied.filter((job) => job.remote_or_onsite === 'onsite');
            setDisplay(newCart);
        }
         // Update the displayed jobs based on filter
    };

   
  
     // Toggle dropdown
     const close = () => {
        setOpen(!isOpen)
    };

    return (
        <div>
            <section className='relative vh-100 overflow-hidden'>
                <img
                    className='w-48 h-28 absolute top-36 mt-3 left-0 z-0'
                    src={bg1}
                    alt=''
                />
                <div className='relative flex items-center justify-center mb-20 mt-36'>
                    <h1 className='text-2xl font-semibold font-sans'>Applied Jobs</h1>
                </div>
            </section>

            <section className='px-40 pt-20 bg-white'>
                <div className='mr-20 flex items-end justify-end bg-white'>
                    <button
                        onClick={close}
                        className='py-2 px-4 rounded-md flex item-center justify-center gap-x-1.5
                         text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50'
                        id='menu-button'
                        aria-expanded={isOpen}
                        aria-haspopup='true'
                    >
                        <p className='px-1'>
                            <span>Filter By</span>
                        </p>
                        <span>
                            <ChevronDownIcon className='w-4 mt-2' />
                        </span>
                    </button>

                    {isOpen && (
                        <div
                            className='absolute right-0 z-10 mt-2 w-60 mx-2'
                            role='menu'
                            aria-orientation='vertical'
                            aria-labelledby='menu-button'
                            tabIndex='-1'
                        >
                            <div className='py-1' role='none'>
                                <button
                                    className='dropdown-menu'
                                    onClick={() => handleToFilter('all')}
                                    role='menuitem'
                                    tabIndex='-1'
                                    id='menu-item-0'
                                >
                                    All
                                </button>
                                <button
                                    className='dropdown-menu'
                                    onClick={() => handleToFilter('remote')}
                                    role='menuitem'
                                    tabIndex='-1'
                                    id='menu-item-2'
                                >
                                    Remote
                                </button>
                                <button
                                    className='dropdown-menu'
                                    onClick={() => handleToFilter('onsite')}
                                    role='menuitem'
                                    tabIndex='-1'
                                    id='menu-item-1'
                                >
                                    Onsite
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </section>

            {/* Display filtered jobs here */}
            <section className='bg-white'>
                <div className='grid grid-cols-1 my-container'>
                    {display.map((data) => (
                        <AppliedShow key={data.id} data={data} />
                    ))}
                </div>
            </section>
        </div>
    );
};

export default AppliedJob;
