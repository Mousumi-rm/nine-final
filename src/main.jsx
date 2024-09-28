import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './component/Root/Root.jsx';
import AppliedJob from './component/AppliedJob/AppliedJob';
import Blog from './component/Blog/Blog';
import Home from './component/Home/Home';
import ErrorPage from './component/ErrorPage/ErrorPage'
import JobDetails from './component/JobDetails/JobDetails';



const router = createBrowserRouter([
  {
    path: '/',
    element: <Root/>,
    errorElement:<ErrorPage/>,
    children: [
      {
        path:'/',
        element:<Home/>,
      },
      {
        path:'/appliedJob',
        element:<AppliedJob/>,
      },
      {
        path:'/blog',
        element:<Blog/>,
      },
      {
        path:'/jobs/:id',
        element:<JobDetails></JobDetails>,
        loader: async ({ params }) => {
          const response = await fetch('/public/jobs.json');
          const data = await response.json();
          const job = data.find(job => job.id === parseInt(params.id)); // Find the job by id
          return job; // Return the job to the component
           },
      }
  
    ]
  }
]);

createRoot(document.getElementById('root')).render(
    < RouterProvider
    router={router}
    >
    </RouterProvider>
 ,
)



// Static Files: When you have a static JSON file like jobs.json, you cannot append dynamic paths (like /jobs.json/1). You need to fetch the whole file and then filter the data.
// Loader: The loader fetches data before the component renders, which means useLoaderData() will already have the job details when JobDetails is rendered.