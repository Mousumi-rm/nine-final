import React from 'react';
import social from "../../assets/icons/social.png";

const Footer = () => {
    return (
        <div className=' bg-black text-white '>
            <footer className="p-10 bg-base-200 text-base-content">
            <div className="footer max-w-6xl mx-auto flex flex-col lg:flex-row items-start justify-evenly mb-10">
                <div className='mr-16 p-5'>
                    <h1 className='text-4xl font-bold font-sans'>Step-On</h1>
                    <small className=' text-gray-400'>There are many variations of passages <br /> of Lorem Ipsum , but the majority have <br /> suffered alteration in some form.</small>
                    <img className='w-30 mt-5' src={social} alt="" />
                </div>
                <div className='mx-10'>
                    <header className=" text-md mb-4 font-bold">Company</header>
                    <div className='flex flex-col items-start justify-evenly text-gray-400 '>
                        <small className="mb-4">About</small>
                        <small className="mb-4">Work</small>
                        <small className="mb-4">Latest News</small>
                        <small className="mb-4">Careers</small>
                    </div>
                </div>
                <div className='mx-10'>
                    <header className="text-md mb-4 font-bold">Product</header>
                       <div className='flex flex-col items-start justify-evenly text-gray-400'>
                        <small className="mb-4">Prototype</small>
                        <small className="mb-4">Plans & Pricing</small>
                        <small className="mb-4">Customers</small>
                        <small className="mb-4">Integrations</small>
                       </div>
                </div>
                <div className='mx-10'>
                    <header className="text-md mb-4 font-bold">Support</header>
                    <div className='flex flex-col items-start justify-evenly text-gray-400'>
                        <small className="mb-4">Help Desk</small>
                        <small className="mb-4">Sales</small>
                        <small className="mb-4">Become a Partner</small>
                        <small className="mb-4">Developers</small>
                    </div>
                </div>
                <div className='mx-10'>
                    <header className="text-md mb-4 font-bold">Contact</header>
                       <div className='flex flex-col items-start justify-evenly text-gray-400'>
                        <small className="mb-4">524 Broadway , NYC</small>
                        <small className="mb-4">Privacy policy</small>
                        <small className="mb-4">+1 777 - 978 - 5570</small>
                       </div>
                </div>
            </div>
                   <hr className='mx-52 w-50 text-gray-500 opacity-50 mb-10'></hr>
                    <div className ='flex items-center justify-around  text-gray-500 opacity-100 '>
                     <small>@2023 CareerHub. All Rights Reserved</small>
                  <small>Powered by Step-On</small>
              </div>
        </footer>
        </div>
    );
};


export default Footer;

