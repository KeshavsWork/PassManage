import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-purple-800 fixed top-0 w-full'>
      <div className="mycontainer flex justify-between items-center px-4 py-5 h-14">
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
        {/* <ul >
        <li className='flex gap-4 '>
        <a  className='hover:font-bold'  href="/">Home</a>
        <a className='hover:font-bold'  href="#">About</a>
        <a  className='hover:font-bold' href="#">Contact Us</a>
        </li>
        
      </ul> */}
      <div className='flex gap-5'>

             <button className='w-32 flex cursor-pointer items-center text-white '>
          <img className='invert w-16 px-2' src="/icons8-github.svg" alt="GitHub" />
          <span className='font-bold text-lg'>GitHub</span>
        </button>

        <div>
          <button className='signin flex cursor-pointer items-center text-white'>
            <img width={40} className='py-2' src="/icons8-sign-in-50.png" alt="Sign in" />
            <span>Sign In</span>
          </button>
        </div>
      </div>
          

        

      </div>
        
      
    </nav>
  )
}

export default Navbar
