import React from 'react'

const Footer = () => {
  return (
    <div className='bg-purple-800 flex justify-evenly items-center gap-1 fixed bottom-0 w-full'>
        <div className='logo font-bold text-2xl'>
        <span className='text-orange-600'>
            &#123;
        </span>
           <span className='text-white'>Pass</span>
           <span className='text-orange-500'>Manage</span> 
          <span className='text-orange-600'>
            &#125;
        </span>
        </div>
      <h2 className='font-bold text-md text-white'>Made by @Keshav_Bagad</h2>
    </div>
  )
}

export default Footer
