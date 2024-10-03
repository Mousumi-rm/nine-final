// option---1
import { useLoaderData } from "react-router-dom";
import bg1 from "../../assets/images/bg1.png";
import "./JobDetails.css";
import money from "../../assets/icons/money.png";
import phone from "../../assets/icons/phone.png";
import location2 from "../../assets/icons/location2.png";
import calendar from "../../assets/icons/calendar.png";
import email from "../../assets/icons/email.png";
import toast from "react-hot-toast";
import { Toaster } from 'react-hot-toast';

const JobDetails = () => {
  const job = useLoaderData(); // Retrieve the job data from the loader
  const {
    experiences,
    job_title,
    salary,
    job_description,
    job_responsibility,
    educational_requirements,
  } = job;

  const MyTost = () => {
    toast("You have applied successfully ");
  };

  return (
    <div className="">
      <section className="relative vh-100 overflow-hidden  ">
        <img
          className="w-48 h-28 absolute top-36 mt-3 left-0 z-0"
          src={bg1}
          alt=""
        />
        <div className="relative  flex items-center justify-center mb-20 mt-36">
          <h1 className="text-2xl font-semibold font-sans">Job Details</h1>
        </div>
      </section>
      <div className="flex flex-col lg:flex-row items-start justify-between  bg-white px-40 pt-20">
        <div className="lg:w-2/3 mx-10">
          <h1 className=" mb-4">
            <span className="text-md font-semibold mb-2">
              Job-Responsibility:
            </span>
            <small>{job_responsibility}</small>
          </h1>
          <h1 className=" mb-4">
            <span className="text-md font-semibold mb-2">Job-Description:</span>
            <small>{job_description}</small>
          </h1>
          <h1 className=" mb-4 flex flex-col">
            <span className="text-md font-semibold mb-2">
              Educational-Requirements:
            </span>
            <small className="mt-2">{educational_requirements}</small>
          </h1>
          <h3 className=" mb-8 flex flex-col">
            <span className="font-semibold -">Experience:</span>
            <small className="mt-3">{experiences}</small>
          </h3>
        </div>

        <div className="lg:w-1/3 sm:1/3 mx-10 ">
          <div className=" bg-purple-50 pt-8 pl-10  rounded-lg shadow-md text-start">
            <p className="text-xl font-semibold mb-4 ">Job-Details</p>
            <hr className="mr-8 border-b " />
            <div className=" flex items-start justify-start">
              <img className="mt-4 pr-1 w-6 " src={money} alt="" />
              <p className="mt-4 font-semibold text-sm">
                Salary:<small className="">{salary}</small>
              </p>
            </div>
            <div className="mt-2 flex items-start justify-start">
              <img className="m-1 pr-1 w-6" src={calendar} alt="" />
              <p className="mb-4 mt-0 font-semibold text-sm">
                JobTitle:<small className="">{job_title}</small>
              </p>
            </div>
            <p className="font-semibold text-lg mb-2">Contact Information</p>
            <hr className="mr-8 border-b " />
            <div className=" flex items-start justify-start">
              <img className="m-1 pr-1 w-5 mt-2" src={phone} alt="" />
              <p className="mt-2 font-semibold text-sm">
                Phone:<small className="font-semibold">01750-00 00 00</small>
              </p>
            </div>
            <div className=" flex items-start justify-start mb-2">
              <img className="m-1 pr-1 w-5 mt-3" src={email} alt="" />
              <p className="mt-2 font-semibold text-sm">
                Email:<small className="font-semibold">info@gmail.com</small>
              </p>
            </div>
            <div className=" flex items-start justify-start">
              <img className=" pr-1 w-6" src={location2} alt="" />
              <p className="mb-4 mt-0 font-semibold text-sm">
                {" "}
                Address:
                <small className="">
                  Dhanmondi 32,<br></br> Sukrabad Dhaka, Bangladesh
                </small>
              </p>
            </div>
            <br />
          </div>
          <link></link>
          <div className=" mb-20 mt-8 flex place-items-center justify-center bg-white">
            <button
              onClick={MyTost}
              className=" text-white  bg-gradient-to-r from-indigo-400 to-purple-500 py-2  lg:px-36  rounded-md">
              <small>Apply</small>
              <small className="ml-1">Now</small>
            </button>
            <Toaster/>
          </div>
        </div>
      </div>
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
