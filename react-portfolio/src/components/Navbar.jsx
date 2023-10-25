import React, { useState } from 'react';
// import ai icons
import { 
    AiOutlineMenu, 
    AiOutlineHome, 
    AiOutlineSolution,
    AiOutlineProject,
    AiOutlineMail, 
    AiOutlineUser } from 'react-icons/ai';

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleNav = () => {
        setNav(!nav);
    };

    return (
        <div>
            <AiOutlineMenu onClick={handleNav} className='absolute top-4 right-4 z-[99] md:hidden cursor-pointer' />
            {
                nav ? (
                    <div className='fixed w-full h-screen bg-white/90 flex flex-col justify-center items-center z-20'>
                        <a href='#main' className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                            <AiOutlineHome size={20} />
                            <span className='pl-4'>Home</span>
                        </a>
                        <a href='#aboutme' className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                            <AiOutlineUser size={20} />
                            <span className='pl-4'>About Me</span>
                        </a>
                        <a href='#projects' className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                            <AiOutlineProject size={20} />
                            <span className='pl-4'>Projects</span>
                        </a>
                        <a href='#resume' className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                            <AiOutlineSolution size={20} />
                            <span className='pl-4'>Resume</span>
                        </a>
                        <a href='#contact' className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                            <AiOutlineMail size={20} />
                            <span className='pl-4'>Contact</span>
                        </a>
                    </div>
                ) : (
                    ''
                )}
            <div className='md:block hidden fixed top-[25%] z-10'>
                <div className='flex flex-col'>
                    <a href='#main' className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <AiOutlineHome size={20} />
                    </a>
                    <a href='#aboutme' className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <AiOutlineUser size={20} />
                    </a>
                    <a href='#projects' className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <AiOutlineProject size={20} />
                    </a>
                    <a href='#resume' className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <AiOutlineSolution size={20} />
                    </a>
                    <a href='#contact' className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <AiOutlineMail size={20} />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;