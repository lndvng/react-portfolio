import React from 'react';

const ProjectItem = ({img, title}) => {
    return (
        <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-white-[50%] cursor-pointer'>
            {/* change hover color? */}
            <img src={img} alt="/" className='rounded-xl group-hover:opacity-10' />
            <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                <h3 className='text-2xl text-white tracking-wider text-center'>
                    {title}
                    <p className='pb-4 pt-2 text-black text-center font-serif'>Visit Project</p>
                </h3>
            </div>
        </div>
    )
}

export default ProjectItem;