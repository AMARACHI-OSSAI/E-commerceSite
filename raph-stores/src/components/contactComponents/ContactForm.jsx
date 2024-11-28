import React from 'react'

const ContactForm = () => {


    return (
        <div className='mx-14 overflow-x-hidden'>
            <h1 className='text-zinc-950 text-2xl font-extrabold text-center mt-10'>CONTACT FORM</h1>
            <h2 className=' text-zinc-950 text-center font-bold'>Get In Touch!</h2>
            <form className='overflow-x-hidden'>
                <div className='flex mt-10'>
                    <div className='w-1/2'>
                        <label htmlFor='username'>Username:</label>
                        <input className=' w-9/12 h-12 border-2' id='username' type="text" placeholder='Enter username' />
                    </div>

                    <div className='w-1/2'>
                        <label htmlFor="password">User Email:</label>
                        <input className='w-9/12  h-12 border-2'  id='useremail' type="text" placeholder='Enter email' />
                    </div>
                </div>

                <div className='flex mt-10'>
                    <div className='w-1/2'>
                        <label htmlFor="subject">Subject:</label>
                        <input className='w-9/12 h-12 border-2 ml-5'  id='subject' type="text" placeholder='Enter subject' />
                    </div>

                    <div className='w-1/2'>
                        <label htmlFor="date">Date:</label>
                        <input className='w-9/12 h-12 border-2 ml-10'  id='date' type="date" />
                    </div>


                </div>
                <div className='my-10'>
                    <label htmlFor="message">Message:</label>
                    <input className='w-5/6 h-56 border-2 ml-2'  id='message' type="text" placeholder='Enter Your Message' />
                </div>
                <div className='flex w-full' >
                    <button className='rounded-full bg-zinc-500 hover:bg-zinc-600 justify-center h-14 w-40 ml-[36rem] text-white mb-24'>Send Message</button>
                </div>


            </form>

        </div>
    )
}

export default ContactForm
