import { useLoaderData } from 'react-router-dom';
import bg1 from '../../assets/images/bg1.png';
import './JobDetails.css';

const JobDetails = () => {
    const job = useLoaderData();
    const { company_name, logo, job_title, remote_or_onsite, job_type, location, salary, address, phone, email } = job;

    return (
        <div className='job-details-page'>

            {/* Header Section */}
            <section className='relative vh-100 overflow-hidden bg-gray-100'>
                <img className='w-48 h-28 absolute top-32 mt-3 left-0 z-0' src={bg1} alt="Background" />
                <div className='relative flex items-center justify-center mb-20 mt-36'>
                    <h1 className='text-4xl font-bold font-sans'>Job Details</h1>
                </div>
            </section>

            {/* Main Content */}
            <div className='flex flex-col lg:flex-row items-start justify-between bg-white mt-10 px-10 py-16'>

                {/* Job Description Section */}
                <div className='lg:w-2/3'>
                    <h2 className='text-2xl font-semibold mb-6'>Job Description</h2>
                    <p className='mb-4'>
                        A UI/UX (User Interface/User Experience) designer is responsible for designing and creating engaging and effective interfaces for software and web applications. This includes designing the layout, visual design, and interactivity of the user interface.
                    </p>
                    <h3 className='font-semibold mb-2'>Job Responsibility:</h3>
                    <p className='mb-4'>
                        Collaborating with cross-functional teams, UI/UX designers often work closely with other teams, including product management, engineering, and marketing, to ensure that the user interface is aligned with business and technical requirements.
                    </p>
                    <h3 className='font-semibold mb-2'>Educational Requirements:</h3>
                    <p className='mb-4'>Bachelor degree to complete any reputational university.</p>
                    <h3 className='font-semibold mb-2'>Experience:</h3>
                    <p>2-3 Years in this field.</p>
                </div>

                {/* Job Details Section */}
                <div className='lg:w-1/3 bg-gray-100 p-6 rounded-lg shadow-md'>
                    <h2 className='text-2xl font-semibold mb-6'>Job Details</h2>
                    <p className='mb-4'>
                        <span className='font-semibold'>Salary:</span> 100K - 150K (Per Month)
                    </p>
                    <p className='mb-4'>
                        <span className='font-semibold'>Job Title:</span> {job_title}
                    </p>

                    <h3 className='font-semibold text-lg mb-2'>Contact Information</h3>
                    <p className='mb-2'>
                        <span className='font-semibold'>Phone:</span> {phone}
                    </p>
                    <p className='mb-2'>
                        <span className='font-semibold'>Email:</span> {email}
                    </p>
                    <p className='mb-2'>
                        <span className='font-semibold'>Address:</span> {address}
                    </p>

                    <button className='w-full bg-purple-500 text-white rounded-lg py-3 mt-6'>Apply Now</button>
                </div>
            </div>

            {/* Footer Section */}
            <footer className='bg-gray-900 text-white py-10'>
                <div className='text-center'>
                    <p>CareerHub © 2024. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default JobDetails;
