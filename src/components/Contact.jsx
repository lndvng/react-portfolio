import React from 'react'

const Contact = () => {
    return (
        <div id='contact' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
        <h1 className='py-4 text-4xl font-serif text-center text-black'>
            Contact
        </h1>
        <form action="https://getform.io/f/efd88ed2-aeb5-444f-a0f9-841953cd6235" method='POST' encType='multipart/form-data'>
            <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                {/* name input field */}
                <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2'>Name</label>
                    <input className='border-2 rounded-lg p-3 flex border-gray-300' type="text" name='name' />
                </div>
                {/* number input field */}
                <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2'>Number</label>
                    <input className='border-2 rounded-lg p-3 flex border-gray-300' type="text" name='number' />
                </div>
            </div>
            {/* email input field */}
            <div className='flex flex-col py-2'>
                <label className='uppercase text-sm py-2'>Email</label>
                <input className='border-2 rounded-lg p-3 flex border-gray-300' type="text" name='email' />
            </div>
            {/* subject input field */}
            <div className='flex flex-col py-2'>
                <label className='uppercase text-sm py-2'>Subject</label>
                <input className='border-2 rounded-lg p-3 flex border-gray-300' type="text" name='subject' />
            </div>
            {/* message input field */}
            <div className='flex flex-col py-2'>
                <label className='uppercase text-sm py-2'>Message</label>
                <textarea className='border-2 rounded-lg p-3 border-gray-300' rows='10' name='message' ></textarea>
            </div>
            {/* form submit button */}
            <button className='bg-[#d4d4d4] text-black mt-4 w-full p-4 rounded-lg cursor-pointer'>Send Message</button>
        </form>
        </div>
    )
}

export default Contact;