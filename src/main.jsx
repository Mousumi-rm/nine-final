import { StrictMode } from 'react'
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
      }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    < RouterProvider
    router={router}
    >
    </RouterProvider>
  </StrictMode>,
)
