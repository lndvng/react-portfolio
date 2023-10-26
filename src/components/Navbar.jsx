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

    const closeNav = () => {
        setNav(false);
    }

    return (
        <div>
            <AiOutlineMenu onClick={() => setNav(!nav)} className='absolute top-4 right-4 z-[99] md:block hidden cursor-pointer' />
            {
                nav ? (
                    // navbar will appear on top right corner with medium or larger browser
                    <div className='fixed w-full h-screen bg-white/90 flex flex-col justify-center items-center z-20'>
                        <a href='#main' onClick={closeNav} className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                            <AiOutlineHome size={20} />
                            <span className='pl-4'>Home</span>
                        </a>
                        <a href='#aboutme' onClick={closeNav} className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                            <AiOutlineUser size={20} />
                            <span className='pl-4'>About Me</span>
                        </a>
                        <a href='#projects' onClick={closeNav} className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                            <AiOutlineProject size={20} />
                            <span className='pl-4'>Projects</span>
                        </a>
                        <a href='https://resume.io/r/fSjU7AnqN' target='blank' onClick={closeNav} className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                            <AiOutlineSolution size={20} />
                            <span className='pl-4'>Resume</span>
                        </a>
                        <a href='#contact' onClick={closeNav} className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                            <AiOutlineMail size={20} />
                            <span className='pl-4'>Contact</span>
                        </a>
                    </div>
                ) : (
                    ''
                )}
                {/* for mobile screens, navbar will appear as icons on left side of browser */}
            <div className='md:hidden fixed top-[25%] z-10'>
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
                    <a href='https://resume.io/r/fSjU7AnqN' target='blank' className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
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