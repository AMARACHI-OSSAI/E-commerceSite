import React, { useState } from 'react'

const LoginForm = () => {

    const[username, SetUsername]=useState("");
    const[email, SetEmail]=useState("");

   
    return (
        <div>
            <h1 className='text-zinc-950 text-2xl font-extrabold text-center mt-10'>LOG IN FORM</h1>
            <form className='w-full flex flex-col justify-center items-center mt-16 mb-16 '>
                <div className='bg-zinc-200 w-2/5 px-20'>
                    <div className='mb-5 mt-10'>
                        <label htmlFor='username'>Username:</label>
                        <input className='ml-2 w-3/4 h-10 border-2 rounded-lg' id='username' type="text" placeholder='Enter username' />
                    </div>
                    <div className=''>
                        <label htmlFor="email">User Email:</label>
                        <input className=' ml-2 w-3/4  h-10 border-2 rounded-lg' id='password' type="text" placeholder='Enter email' />
                    </div>
                    <div className='flex my-5'>
                        <input type="checkbox" className=" checked:bg-zinc-500" />
                        <p className='ml-3'>Remember me</p>
                    </div>
                    <div className='flex w-full' >
                        <button className='rounded-full bg-zinc-500 justify-center  h-10 w-32 text-white hover:bg-zinc-600'>Log In</button>
                    </div>
                    <p className='mt-10 text-zinc-500'>Forgot your password?</p>
                    <p className='mt-1 text-zinc-500'>Forgot your username?</p>
                    <p className='mt-1 mb-10 text-zinc-500'>Don't have an account?</p>
                </div>
            </form>

        </div>
    )
}

export default LoginForm
