import React from 'react'
import img12 from "../../assets/paypal.png"

function Checkout() {
    return (
        <div className='flex mx-5 mt-10  bg-zinc-300'>
            <div className='w-1/2 mb-10 px-10 '>
                <h1 className='font-bold mt-5'>DELIVERY ADDRESS</h1>
                <div className='mt-5'>
                    <label htmlFor="email">Email address:</label>
                    <input className='w-full p-2  h-10 border-2 rounded-lg' id='email' type="text" placeholder='Enter email' />
                </div>
                <div className='mt-5'>
                    <label htmlFor="firstname">First name:</label>
                    <input className='w-full p-2  h-10 border-2 rounded-lg' id='firstname' type="text" placeholder='Enter first name' />
                </div>
                <div className='mt-5'>
                    <label htmlFor="lastname">Last name:</label>
                    <input className='w-full p-2  h-10 border-2 rounded-lg' id='lastname' type="text" placeholder='Enter last name' />
                </div>
                <div className='mt-5'>
                    <label htmlFor="telephone">Telephone:</label>
                    <input className='w-full p-2  h-10 border-2 rounded-lg' id='telephone' type="number" placeholder='Enter telephone' />
                </div>
                <div className='mt-5'>
                    <label htmlFor="deliveryaddress">Delivery address:</label>
                    <input className='w-full p-2  h-10 border-2 rounded-lg' id='deliveryaddress' type="text" placeholder='e.g. 27 Moon Crescent Street' />
                
                </div>
                <div className='mt-5'>
                    <label htmlFor="suburb/town">Suburb/town:</label>
                    <input className='w-full p-2 h-10 border-2 rounded-lg' id='town' type="text" placeholder='' />
                </div>
                <div className='mt-5'>
                    <label htmlFor="state/territory">State/Territory:</label>
                    <input className='w-full   h-10 border-2 p-2 rounded-lg' id='state' type="text" placeholder='' />
                </div>
                <div className='mt-5'>
                    <label htmlFor="postcode/zip">Postcode/ZIP Code:</label>
                    <input className='w-full   h-10 border-2 p-2 rounded-lg' id='postcoe' type="number" placeholder='' />
                </div>
                <div className='mt-5'>
                    <label for="country">Select Country:</label>
                    <select className='w-full pl-1 ml-2   h-10 border-2 rounded-lg' name='country' id='country' type="text" placeholder='Nigeria'>
                        <option value='burkinafaso'>Burkina Faso</option>
                        <option value='cameroun'>Cameroun</option>
                        <option value='cotedivoire'>Cote d'Ivoire</option>
                        <option value='ghana'>Ghana</option>
                        <option value='nigeria'>Nigeria</option>
                        <option > Senegal</option>
                        <option>South-Africa</option>
                        <option>Togo</option>
                    </select>

                </div>
            </div>


            <div className='pl-10 w-1/2 mb-10 px-10 '>
                <h1 className='font-bold mt-5'>SELECT PAYMENT METHOD</h1>
                <div className=''>
                    <img className='mt-5' src={img12} alt="payment options" />
                </div>
                <div className='mt-5'>
                    <label for="card">Select Card Type:</label>
                    <select className='w-full pl-1   h-10 border-2 rounded-lg' name='card' id='card' type="text" placeholder='Nigeria'>
                        <option value='mastercard'>Master Card</option>
                        <option value='visacard'>Visa</option>
                        <option value='american'>American Express</option>
                    </select>

                </div>
                <div className='mt-5'>
                    <label htmlFor="postcode/zip">Cardholder Name:</label>
                    <input className='w-full   h-10 border-2 rounded-lg p-2' id='postcoe' type="text" placeholder='Enter name' />
                </div>
                <div className='mt-5'>
                    <label htmlFor="postcode/zip">Debit Card Number:</label>
                    <input className='w-full   h-10 border-2 rounded-lg p-2' id='postcoe' type="number" placeholder='' />
                </div>
                <div className='mt-5'>
                    <label htmlFor="expiration">Card Expiration Date:</label>
                    <input className='w-full h-10 border-2 rounded-lg p-2' id='expiration' type="date" placeholder='' />
                </div>
                {/* <div className='mt-5'>
                    <label htmlFor="postcode/zip">Permanent Account Number (PAN):</label>
                    <input className='w-1/2 ml-2   h-10 border-2 rounded-lg p-2' id='postcoe' type="number" placeholder='' />
                </div> */}
                <div className='mt-5'>
                    <label htmlFor="postcode/zip">Debit Card Security Code (CCV):</label>
                    <input className='w-full h-10 border-2 rounded-lg p-2' id='postcoe' type="number" placeholder='' />
                </div>
                <div className='mt-10'>
                    <button className=' w-1/2 bg-zinc-500 text-white rounded p-4 cursor-pointer mt-5  hover:bg-zinc-600 '>COMPLETE CHECKOUT</button>
                </div>
            </div>
        </div>
    )
}

export default Checkout
