import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import ModalBox from '../../components/modal'

const Header = () => {
  const [show, setShow] = useState(false);
  const [showNav, setShowNav] = useState(false);
  const [showModal, setModalShow] = useState(false);
  const [showEndDayModal, setShowEndDayModal] = useState(false);

  return (
    <>
      <ModalBox open={showModal} close={setModalShow} className="md:w-[753px] rounded-xl py-3">
                <section className='py-10 px-7 md:px-28 md:py-16 flex flex-col items-center'>
                    <div className='w-[129px] h-[129px] bg-primaryExtraLight rounded-full flex justify-center items-center'>
                        <img src='/images/logout-green.svg' alt='dollar' />
                    </div>
                    <h1 className='text-[24px] font-medium text-black mt-4 text-center'>Are you sure to log out?</h1>
                    <div className='flex gap-5 mt-10'>
                        <button
                            className='w-[199px] h-[48px] text-base text-black bg-primaryExtraLight rounded-xl font-light border border-primary'
                            onClick={() => setModalShow(false)}
                        >Cancel</button>
                        <button
                            className='w-[199px] h-[48px] text-base text-white bg-primary rounded-xl font-light'
                            onClick={() => setShowEndDayModal(true)}
                        >Log out</button>
                    </div>
                </section>
            </ModalBox>
            {/* Logout for ending day */}
            <ModalBox open={showEndDayModal} close={setShowEndDayModal} className="md:w-[753px] rounded-xl py-3">
                <section className='py-10 px-7 md:px-28 md:py-16 flex flex-col items-center'>
                    <div className='w-[129px] h-[129px] bg-[#FFDFDF] rounded-full flex justify-center items-center'>
                        <img src='/images/logout-red.svg' alt='dollar' />
                    </div>
                    <h1 className='text-[24px] font-medium text-black mt-4 text-center'>Are you sure to log out?</h1>
                    <div className='flex gap-5 mt-10'>
                        <button
                            className='w-[199px] h-[48px] text-base text-black bg-primaryExtraLight rounded-xl font-light border border-primary'
                            onClick={() => setShowEndDayModal(false)}
                        >Cancel</button>
                        <Link to="/">
                            <button
                                className='w-[199px] h-[48px] text-base text-white bg-[#FF0E47] rounded-xl font-light'
                            >End day</button>
                        </Link>
                    </div>
                </section>
            </ModalBox>
            <div className='flex space-x-6 '>
          <div className='w-[800px] rounded-lg space-x-3  h-10 flex bg-[#F7F7F7]'>
            <img className='h-5 w-5 mt-3 ml-2' src='../images/search.svg' />
            <input className='w-11/12 focus:outline-0 bg-[#F7F7F7]' placeholder='Search for products, Categories etc' />
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
                  href='/editprofile' 
                  onClick={{color: 'primary'}}
                >
                  Profile Settings
                </a>
              </li>
              <li  className='font-semibold text-[10px] text-[#ef4444] py-1 hover:text-red-600'>
                <a 
                  href=''
                  onClick={() => setShowEndDayModal(true)}
                >
                  End Workday
                </a>
              </li>
              <li  className='font-semibold text-[10px] py-1 hover:text-red-600'>
                <a 
                  href='#' 
                  onClick={() => setModalShow(true)}
                >
                  Logout
                </a>
              </li>
            </ul>
            )}
          </div>
      </div>
    </>
    
  )
}

export default Header