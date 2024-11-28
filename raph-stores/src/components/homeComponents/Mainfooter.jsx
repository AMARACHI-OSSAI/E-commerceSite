import React from 'react'
import { MdOutlineLocationOn } from "react-icons/md";
import { AiOutlinePhone } from "react-icons/ai";
import { FaRegEnvelope } from "react-icons/fa6";
import img4 from "../../assets/applestore.png"
import img5 from "../../assets/googlestore.png"
import img6 from "../../assets/windowsstore.png"

const Mainfooter = () => {
    return (
        <div className='mx-14'>
            <div>
                <h1 className="text-zinc-950 font-mono text-5xl text-center mt-10">RAPH STORES</h1>
                <p className='text-center mt-5'>Don't be slow! Our prices are low.</p>
            </div>
            <div className='flex mt-2 justify-center'>
                <div className='flex px-5'>
                    <MdOutlineLocationOn className='mt-1' />
                    <p className='px-2'>27 Moon Crescent, Port Harcourt; Nigeria</p>
                </div>
                <div className='flex px-5'>
                    <AiOutlinePhone className='mt-1' />
                    <p className='px-2'>+2345678910</p>
                </div>
                <div className='flex px-5'>
                    <FaRegEnvelope className='mt-1' />
                    <p className='px-2'>Sales@RaphStores.com</p>
                </div>
            </div>
            <div className='flex mx-14 gap-3 justify-center mt-5'>
                <img src={img4} alt="apple store" />
                <img src={img5} alt="google store" />
                <img src={img6} alt="windows store" />
            </div>


        </div>

    )
}

export default Mainfooter
