import React from 'react';
import Rat from './Rat';

const ErrorPage = () => {
    return (
        <div className='h-screen flex flex-col items-center justify-center'>
            <h2 className='text-4xl text-red-600 mb-10'>Sorry Try Again!!!!oops</h2>
          
                <Rat></Rat>
        </div>
    );
};

export default ErrorPage;