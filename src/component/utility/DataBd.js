// Function to get stored job applications from localStorage
const getStoredJobApplication = () => {
    const storedJob = localStorage.getItem('job-applications'); // Make sure key is consistent
    return storedJob ? JSON.parse(storedJob) : [];
};

// Function to save a job application by id
const saveJob = (id) => {
    const storedJobApplications = getStoredJobApplication();
    const exists = storedJobApplications.find(jobId => jobId === id); // Check if job ID already exists
    if (!exists) {
        storedJobApplications.push(id); // Add the new job ID
        localStorage.setItem('job-applications', JSON.stringify(storedJobApplications)); // Update localStorage
    }
};

export { getStoredJobApplication, saveJob };










// Consistent Key (job-applications):
// The key in localStorage is now consistent between both functions (job-applications).

// id Passed as a Parameter:
// The saveJob function now expects an id parameter to save the correct job ID.

// Simplified getStoredJobApplication Function:
// The return statement is cleaner using a conditional (storedJob ? ... : []).

// Final Thoughts:
// This should work correctly as long as you're passing the id when saving a job. The saveJob function will check for duplicate IDs and only add new ones if they don't exist, ensuring you don't save the same job twice.





// const getStoredJobApplication =()=>{
//     const storedJob= localStorage.getItem('job-application');
//     if(storedJob){
//         return JSON.parse(storedJob);
//     } 
//     return[];
// } 

// const saveJob = ()=>{
//     const storedJobApplications = getStoredJobApplication();
//     const exists = storedJobApplications.find
//     (jobId =>jobId === id);
//     if(!exists){
//         storedJobApplications.push(id); 
//         localStorage.setItem('job-applications',
//         JSON.stringify(storedJobApplications))  
//     } 
// }
// export { getStoredJobApplication, saveJob}
