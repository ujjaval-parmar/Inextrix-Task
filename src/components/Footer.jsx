import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className='bg-blue-500 text-white '>

            <div className='container mx-auto px-2 py-4'>

                <div className='flex flex-col  gap-6 md:flex-row justify-between  lg:justify-around  lg:gap-16 px-5 md:px-0'>

                    <div className='flex flex-col gap-3 uppercase font-bold'>


                        <NavLink className='w-16 h-16 rounded-full overflow-hidden flex items-center justify-center cursor-pointer md:mx-auto'>
                            <img src="/logo.jpg" alt="logo" className='w-full h-full object-cover' />
                        </NavLink>

                        <p className='max-w-[300px] font-medium text-sm text-gray-300'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos inventore commodi non, labore animi eveniet!</p>


                    </div>

                    <nav className='flex flex-col gap-3 pl-2'>

                        <h3  className='text-lg  font-semibold uppercase'>Links</h3>


                        <NavLink to='/'
                            className={({ isActive }) => isActive ? 'text-blue-200' : 'hover:text-blue-200'}
                        >
                            Home
                        </NavLink>

                        <span to='/'>
                            Products
                        </span>

                        <NavLink
                            to='/favorites'
                            className={({ isActive }) => isActive ? 'text-blue-200' : 'hover:text-blue-200'}
                        >
                            Favorites
                        </NavLink>

                        <NavLink
                            to='/contact'
                            className={({ isActive }) => isActive ? 'text-blue-200' : 'hover:text-blue-200'}
                        >
                            Contact Us
                        </NavLink>

                        <span to='/'>
                            About Us
                        </span>


                    </nav>


                    <div className='flex flex-col gap-3'>

                        <h2 className='text-lg font-semibold uppercase'>Contact Us</h2>

                        <address className='flex flex-col gap-1 max-w-[300px]'>

                            <p>Address:</p>
                            <p>E-305, Panchslok Residency, Chnadkheda, Ahmedabad</p>

                        </address>

                        <div className='flex justify-between mt-2'>

                            <FaFacebook size={25} className='hover:text-red-500 transition-all duration-300'/>

                            <FaInstagramSquare size={25} className='hover:text-red-500 transition-all duration-300'/>

                            <FaTwitter size={25} className='hover:text-red-500 transition-all duration-300'/>

                            <FaGoogle size={25} className='hover:text-red-500 transition-all duration-300'/>

                        </div>





                    </div>

                </div>


            </div>

            <div className='bg-blue-600 py-2 text-center  mt-2'>
                Ecommerce All Rights Reserved  © 2024.
            </div>


        </footer>
    )
}

export default Footer
