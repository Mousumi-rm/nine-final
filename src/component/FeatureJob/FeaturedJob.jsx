import React from 'react';
import { useEffect} from 'react';
import { useState  } from 'react';
import ShowJob from './ShowJob';

const FeaturedJob = () => {
    const  [loader, setLoader] = useState([]) 
    const[dataLength,setDataLength]= useState(4)

    useEffect(()=>{
        fetch('jobs.json')
        .then(res => res.json())
        .then(data =>setLoader(data))
    },[])
   

    return (
        <div className='bg-white'>
             <section className='text-center p-10'>
                <h2 className='text-4xl font-bold font-sans '>Featured Jobs</h2>
                <p className=' text-gray-500 mt-5'><small>Explore thousands of job opportunities with all the information you need. Its your future</small></p>
            </section>
            <section className= ' my-container gap-5 grid lg:grid-cols-2 sm:grid-rows-1 '>
                {
                    loader.slice(0,dataLength).map(job =><ShowJob
                      key={job.id}
                      job={job}
                    ></ShowJob>)
                }
            </section>
             <section className='my-36 flex items-center justify-center'>
                    <div className={dataLength === loader.length ? 'hidden':''}>
                     <button className='text-white  bg-gradient-to-r from-indigo-400 to-purple-500 px-4 py-2 rounded-md' 
                     onClick={()=>setDataLength(loader.length)}>See All Jobs</button>
                    </div>  
                    <div className={ loader.length === dataLength  ? 'visible':'hidden'}>
                     <button className='text-white  bg-gradient-to-r from-indigo-400 to-purple-500 px-4 py-2 rounded-md' onClick={()=>setDataLength(4)} >Go back to home</button>
                    </div>             
            </section>
        </div>
    );
};

export default FeaturedJob;
