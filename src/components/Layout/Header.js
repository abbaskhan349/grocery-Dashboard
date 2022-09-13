import React, { useState } from 'react'

const Header = () => {
  const [show, setShow] = useState(false);
  return (
    <div className='flex space-x-6 '>
      <div className='w-[800px] rounded-lg border space-x-3 border-primary h-10 flex bg-white'>
        <img className='h-5 w-5 mt-2 ml-2' src='../images/search.svg' />
        <input className='w-11/12 focus:outline-0' placeholder='Search for products, Categories etc' />
      </div>
      <img 
        src='../images/settings.svg' 
        className='opacity-25'
      />
      <img 
        className='opacity-25'
        src='../images/notification.svg' 
      />
      <img src='../images/user.svg' />
      <div className='relative'>
        <img 
          className='mt-5 cursor-pointer'
          src='../images/dropdown.svg' 
          onClick={() => setShow(!show)}
        />
        {show && (
        <ul className=' h-[89px] w-[119px] absolute  right-0 mt-5 pt-2 bg-white text-center border border-slate-300 rounded-xl'
        >
          <li  className='font-semibold text-[10px] py-1 hover:text-red-600'>
            <a 
              href='/dashboard/usermanagement' 
              onClick={{color: 'primary'}}
            >
              Profile Settings
            </a>
          </li>
          <li  className='font-semibold text-[10px] py-1 hover:text-red-600'>
            <a 
              href='#' 
              onClick={{color: 'primary'}}
            >
              End Workday
            </a>
          </li>
          <li  className='font-semibold text-[10px] py-1 hover:text-red-600'>
            <a 
              href='#' 
              onClick={{color: 'primary'}}
            >
              Logout
            </a>
          </li>
        </ul>
        )}
      </div>
      
      
  </div>
  )
}

export default Header