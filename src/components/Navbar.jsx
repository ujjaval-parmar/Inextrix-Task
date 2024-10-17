import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { IoMdCart } from "react-icons/io";
import { useSelector } from 'react-redux';
import { motion } from "framer-motion"


const Navbar = () => {

    const [showMenu, setShowMenu] = useState(false);

    const { totalItems } = useSelector(state => state.cart);

    console.log(totalItems);



    const handleShowMenu = () => {
        setShowMenu(!showMenu);
    }


    return (
        <header className='fixed bg-blue-500 z-50 w-full top-0 left-0'>

            <div className=' container mx-auto px-2 py-2 flex justify-between items-center '>


                <NavLink className='w-16 h-16 rounded-full overflow-hidden flex items-center justify-center cursor-pointer'>
                    <img src="/logo.jpg" alt="logo" className='w-full h-full object-cover' />
                </NavLink>


                <nav className='flex-1  hidden md:flex items-center justify-center gap-8 text-white uppercase font-semibold '>

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

                <div className='flex items-center gap-5'>

                    <NavLink to='/cart' className='relative'>
                        <IoMdCart size={30} className='text-white hover:hover:text-blue-200' />
                        {totalItems ?
                            <motion.div
                                className='absolute -top-3 -right-3 w-6 h-6 bg-blue-800 rounded-full text-white font-bold flex items-center justify-center'
                                initial={{
                                    scale: 0
                                }}
                                animate={{
                                    scale: [0, 1.5, 1]
                                }}
                                transition={{
                                    duration: 0.5,
                                    ease: 'backInOut',
                                    times: [0, 0.5, 1]
                                   
                                }}
                                >
                                {totalItems}
                            </motion.div>
                            : ''}
                    </NavLink>

                    <div className='w-8 h-8  flex md:hidden flex-col justify-between p-1 ' onClick={handleShowMenu}>

                        <div className={`line line-1 ${showMenu ? 'active' : ''}`}></div>
                        <div className={`line line-2 ${showMenu ? 'active' : ''}`}></div>
                        <div className={`line line-3 ${showMenu ? 'active' : ''}`}></div>

                    </div>


                </div>


                <nav className={` flex md:hidden w-full bg-blue-500 text-white uppercase font-semibold flex-col gap-5 px-6 py-6 absolute top-[80px] left-0 z-50 translate-x-[-100%] transition-all duration-500 ${showMenu ? 'translate-x-[0%]' : ''}`}>
                    <NavLink to='/'
                        className={({ isActive }) => isActive ? 'text-blue-200' : ''}
                        onClick={handleShowMenu}
                    >
                        Home
                    </NavLink>

                    <span to='/'>
                        Products
                    </span>

                    <NavLink
                        to='/favorites'
                        className={({ isActive }) => isActive ? 'text-blue-200' : ''}
                        onClick={handleShowMenu}
                    >
                        Favorites
                    </NavLink>

                    <NavLink
                        to='/contact'
                        className={({ isActive }) => isActive ? 'text-blue-200' : ''}
                        onClick={handleShowMenu}
                    >
                        Contact Us
                    </NavLink>

                    <span to='/'>
                        About Us
                    </span>
                </nav>




            </div>



        </header>
    )
}

export default Navbar