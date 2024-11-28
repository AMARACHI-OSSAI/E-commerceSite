import React from 'react'

const FaqQuestions =() =>{
  return (
    <div className='mx-14 mb-24' >
      <h1 className= 'text-zinc-950 text-2xl font-extrabold text-center my-12'>FREQUENTLY ASKED QUESTIONS</h1>
      <ul className='space-y-8 divide-y-2 py-2  text-lg'>
        <li className='pt-5'>Is the purple jacket available in other colours?
       <p className='font-bold'> Notify us on your preferred colour choice, and we'll provide feedback within 2 days </p></li>
        <li className='pt-8'>Does the bagpack exist in larger sizes?
          <p className='font-bold'>No, it's only available in a fit size. Nonetheless, if purchase is intended in bulk, custom sizes can be provided</p>
        </li>
        <li className='pt-8'>What if i receive "what i ordered vs what i got?
          <p className='font-bold'>All our products are delivered as exactly what is shown on the site</p>
        </li>
        <li className='pt-8'>How legit is this e-commerce site?
          <p className='font-bold'>Raph Stores is extremely legit, as we're registered under the CAC and other necessary body governing sales and marketing in the country </p>
        </li>
        <li className='pt-8'>Hope you won't disappear with my money?
          <p className='font-bold'>Reliablity is our watchword !!</p>
        </li>
      </ul>
    </div>
  )
}

export default FaqQuestions
