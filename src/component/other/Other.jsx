import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const JobDetails = () => {
  const { id } = useParams();
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch('/jobs.json') // Ensure the path is correct
      .then(res => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then(data => {
        const jobDetails = data.find(job => job.id === parseInt(id));
        if (jobDetails) {
          setJob(jobDetails);
        } else {
          setError(true);
        }
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error || !job) return <div>Job not found.</div>;

  const { company_name, logo, job_title, remote_or_onsite, job_type, location, salary } = job;

  return (
    <div className='container mx-auto p-10 bg-white'>
      <div className='flex items-center mb-6'>
        <img className='w-40 h-10 mr-5' src={logo} alt={`${company_name} logo`} />
        <div>
          <h1 className='text-2xl font-bold'>{job_title}</h1>
          <p className='text-gray-600'>{company_name}</p>
        </div>
      </div>
      <div className='flex space-x-4 mb-6'>
        <span className='px-4 py-2 border border-sky-500 text-sky-400'>{remote_or_onsite}</span>
        <span className='px-4 py-2 border border-sky-500 text-sky-400'>{job_type}</span>
      </div>
      <div className='flex space-x-10 mb-6'>
        <div className='flex items-center'>
          <img src='/icons/location2.png' alt='Location Icon' className='w-5 h-5 mr-2' />
          <span>{location}</span>
        </div>
        <div className='flex items-center'>
          <img src='/icons/money.png' alt='Salary Icon' className='w-5 h-5 mr-2' />
          <span>{salary}</span>
        </div>
      </div>
      <button className='px-8 py-4 text-white bg-gradient-to-r from-indigo-400 to-purple-500 rounded-md'>
        Apply Now
      </button>
    </div>
  );
};

export default JobDetails;

/* othe other part-2*/ 

// import React from 'react';
// import { Link } from 'react-router-dom';
// import location2 from '../../assets/icons/location2.png';
// import money from '../../assets/icons/money.png';

// const ShowJob = ({ job }) => {
//   const { company_name, id, logo, job_title, remote_or_onsite, job_type, location, salary } = job;

//   return (
//     <div className='mt-10'>
//       <div className='border px-10 py-10 shadow-sm '>
//         <div className='flex flex-col items-center justify-start px-4'>
//           <img className='w-40 h-10' src={logo} alt={`${company_name} logo`} />
//           <p className='-mx-10 mt-5 font-bold'>{job_title}</p>
//           <p>{company_name}</p>
//         </div>
//         <div className='flex items-center justify-center mt-4'>
//           <p className='mr-20 border border-sky-500 text-sky-400 px-5'>{remote_or_onsite}</p>
//           <p className='border border-sky-500 text-sky-400 -mx-5 px-5'>{job_type}</p>
//         </div>
//         <div className='mb-5 flex items-center justify-center mt-4'>
//           <div className='flex items-center justify-around'>
//             <img src={location2} alt="Location Icon" className='w-5 h-5' />
//             <p className='mr-20 ml-2 -mx-5'>{location}</p>
//           </div>
//           <div className='flex items-center justify-around'>
//             <img src={money} alt="Salary Icon" className='w-5 h-5' />
//             <p>{salary}</p>
//           </div>
//         </div>
//         <div className='flex items-center justify-center'>
//           <Link to={`/jobs/${id}`}>
//             <button className='px-8 py-4 text-white bg-gradient-to-r from-indigo-400 to-purple-500 rounded-md'>
//               View Details
//             </button>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ShowJob;
/*


routing part----3
*/  

import { createRoot } from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './component/Root/Root.jsx';
import AppliedJob from './component/AppliedJob/AppliedJob';
import Blog from './component/Blog/Blog';
import Home from './component/Home/Home';
import ErrorPage from './component/ErrorPage/ErrorPage';
import JobDetails from './component/JobDetails/JobDetails'; // New Import

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root/>,
    errorElement:<ErrorPage/>,
    children: [
      {
        path:'/',
        element:<Home/>
      },
      {
        path:'/appliedJob',
        element:<AppliedJob/>
      },
      {
        path:'/blog',
        element:<Blog/>
      },
      {
        path:'/jobs/:id', // New Route for Job Details
        element:<JobDetails/>
      }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);


// // Incorrect
// <Link to={`/FeatureJob/ShowJob.jsx/${id}`}>
//   <button>View Details</button>
// </Link>

// // Correct
// <Link to={`/jobs/${id}`}>
//   <button>View Details</button>
// </Link>
// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';

// const JobDetails = () => {
//   const { id } = useParams();
//   const [job, setJob] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(false);

//   useEffect(() => {
//     fetch('/jobs.json') // Ensure the path is correct
//       .then(res => {
//         if (!res.ok) {
//           throw new Error('Network response was not ok');
//         }
//         return res.json();
//       })
//       .then(data => {
//         const jobDetails = data.find(job => job.id === parseInt(id));
//         if (jobDetails) {
//           setJob(jobDetails);
//         } else {
//           setError(true);
//         }
//         setLoading(false);
//       })
//       .catch(() => {
//         setError(true);
//         setLoading(false);
//       });
//   }, [id]);

//   if (loading) return <div>Loading...</div>;
//   if (error || !job) return <div>Job not found.</div>;

//   const { company_name, logo, job_title, remote_or_onsite, job_type, location, salary } = job;

//   return (
//     <div className='container mx-auto p-10 bg-white'>
//       <div className='flex items-center mb-6'>
//         <img className='w-40 h-10 mr-5' src={logo} alt={`${company_name} logo`} />
//         <div>
//           <h1 className='text-2xl font-bold'>{job_title}</h1>
//           <p className='text-gray-600'>{company_name}</p>
//         </div>
//       </div>
//       <div className='flex space-x-4 mb-6'>
//         <span className='px-4 py-2 border border-sky-500 text-sky-400'>{remote_or_onsite}</span>
//         <span className='px-4 py-2 border border-sky-500 text-sky-400'>{job_type}</span>
//       </div>
//       <div className='flex space-x-10 mb-6'>
//         <div className='flex items-center'>
//           <img src='/icons/location2.png' alt='Location Icon' className='w-5 h-5 mr-2' />
//           <span>{location}</span>
//         </div>
//         <div className='flex items-center'>
//           <img src='/icons/money.png' alt='Salary Icon' className='w-5 h-5 mr-2' />
//           <span>{salary}</span>
//         </div>
//       </div>
//       <button className='px-8 py-4 text-white bg-gradient-to-r from-indigo-400 to-purple-500 rounded-md'>
//         Apply Now
//       </button>
//     </div>
//   );
// };

// export default JobDetails;