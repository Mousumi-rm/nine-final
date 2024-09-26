import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const Root = () => {
    return (
        <div>
            <div className='bg-purple-50'>
                <Header/>
                <Outlet/>
            </div>
            <div> 
              <Footer/>
            </div>
        </div>
    );
};

export default Root;