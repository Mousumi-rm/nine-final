// option---1
import { useLoaderData } from 'react-router-dom';

const JobDetails = () => {
    const job = useLoaderData(); // Retrieve the job data from the loader
    const {job_description, id} = job;

    return (
        <div>
            <h3>{job_description}</h3>
            <p>{id}</p>
        </div>
    );
};

export default JobDetails;




// option-2--------------------------------------------------------------------------------------------------


// import React from 'react';
// import { useEffect } from 'react';
// import { useState } from 'react';
// import { useParams } from 'react-router-dom';




// const JobDetails = () => {
// const {id} = useParams()
// const [loader, setLoader] = useState([])
// useEffect(()=>{
//     fetch('/jobs.json')
//     .then(res =>res.json())
//     .then(data =>{
//         const myJob = data.find(p=>p.id === parseInt(id))
//         setLoader(myJob)
//     })

// },[id])

//    const {job_description} =  loader; 
//     return (
//         <div>
      
//             <h3>{job_description}</h3>
//             <p>{id}</p>
//         </div>
//     );
// };

// export default JobDetails;



