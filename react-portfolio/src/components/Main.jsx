import React from 'react';
// import type animation
import { TypeAnimation } from 'react-type-animation';
import { FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa'

const Main = () => {
    return (
        <div id='main'>
            {/* <img className='w-full h-screen object-cover object-left scale-x-[-1]' src="../../assets/images/Desk.png" alt="desk profile picture" /> */}
            <div className='w-full h-screen top-0 left-0 bg-white/50'>
            <div className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center'>
                <h1 className='sm:text-5xl text-4xl font-bold text-white-800'>Linda Vuong</h1>
                <h2 className='flex sm:text-3xl text-2xl pt-4 text-gray-800'>
                    I am a
                    <TypeAnimation
                        sequence={[
                            'Developer',
                            1000, // wait 1s before replacing "Developer" with "Coder"
                            'Coder',
                            1000, 
                            'Designer',
                            1000,
                        ]}
                        wrapper='div'
                        style={{ fontSize: '1em', paddingLeft: '5px' }}
                        repeat={Infinity}
                    />
                </h2>
                <div className='flex justify-between pt-6 max-w-[200px] w-full'>
                    <FaTwitter className='cursor-pointer' size={20}/>
                    <FaFacebookF className='cursor-pointer' size={20}/>
                    <FaInstagram className='cursor-pointer' size={20}/>
                    <FaLinkedinIn className='cursor-pointer' size={20}/>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Main;