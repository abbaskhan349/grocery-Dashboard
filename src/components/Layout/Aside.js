import React, { useState } from 'react'
import { Link } from 'react-router-dom';

import ModalBox from '../../components/modal';

const Aside = () => {
    const [showNav, setShowNav] = useState(false);
    const [showModal, setModalShow] = useState(false);
    const [showEndDayModal, setShowEndDayModal] = useState(false);
   
  return (
    <>
        {/* Modal for Logout */}
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
                        <Link to="/">
                            <button
                                className='w-[199px] h-[48px] text-base text-white bg-primary rounded-xl font-light'
                                // onClick={() => setShowEndDayModal(true)}
                            >Log out</button>
                        </Link>
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
                        <Link href="/">
                            <button
                                className='w-[199px] h-[48px] text-base text-white bg-[#FF0E47] rounded-xl font-light'
                            >End day</button>
                        </Link>
                    </div>
                </section>
            </ModalBox>
        <div className="flex flex-col fixed pl-5 w-[260px]">
            
            <div className="space-y-3 ">
                <div className="flex items-center -translate-y-4">
                    <a href="/dashboard">
                        <img src='/images/logo.png' alt='Logo' className='w-[80px] h-[80px] ml-8' />
                    </a>
                </div>
                
                <div className="flex-1">
                    <ul className="pt-2 pb-4 space-y-1 text-sm">
                        <li className="rounded-sm">
                            <a
                                href='/dashboard'
                                className="flex p-2 space-x-3 items-center"
                            >
                                <img className='h-4 w-4' src='/images/dashboard.svg' alt='dashboard' />
                                <span>Dashboard</span>
                            </a>
                        </li>
                        <li className="">
                            <p
                                href=""
                                className="flex p-2 space-x-3 items-center cursor-pointer"                                    
                            >
                                <img className='h-4 w-4' src='/images/cart.svg' alt='Mail' />
                                <span onClick={() => setShowNav(!showNav)}>Product Management</span>
                            </p>
                                <ul className="flex flex-col ml-14 my-0"
                                    style={showNav ? {
                                        height: '30px',
                                        opacity: 1,
                                    } : {
                                        opacity: 0,
                                        height: "0",
                                        margin: '0',
                                        marginLeft: "28px"
                                    }}
                                >
                                

                                    <li className="my-1 py-1">
                                        <Link to='/dashboard/productmanagement' className='flex'>
                                            <span className='ml-3 text-black text-sm font-semibold'>All products </span>
                                        </Link>
                                    </li>
                            
                            </ul>
                        </li>
                        <li className="">
                            <Link
                                to="/dashboard/actions"
                                className="flex p-2 space-x-3 items-center"
                            >
                                <img className='h-4 w-4' src='/images/actions.svg' alt='Mail' />
                                <span>Actions</span>
                            </Link>
                        </li>
                        <li className="">
                            <a
                                href="/dashboard/insights"
                                className="flex p-2 space-x-3 items-center"
                            >
                                <img className='h-4 w-4' src='/images/insights.svg' alt='Mail' />
                                <span>Insights</span>
                            </a>
                        </li>
                        <li className="">
                            <a
                                href="/dashboard/sales"
                                className="flex p-2 space-x-3 items-center"
                            >
                                <img className='h-4 w-4' src='/images/sales.svg' alt='Mail' />
                                <span>Sales</span>
                            </a>
                        </li>
                        <li className="">
                            <a
                                href="/dashboard/usermanagement"
                                className="flex p-2 space-x-3 items-center"
                            >
                                <img className='h-4 w-4' src='/images/users.svg' alt='Mail' />
                                <span>User Management</span>
                            </a>
                        </li>
                        <li className="">
                            <a
                                href="#"
                                className="flex p-2 space-x-3 items-center"
                            >
                                <img className='h-4 w-4' src='/images/config.svg' alt='Mail' />
                                <span>Configuration View</span>
                            </a>
                        </li>
                        <li className="">
                            <a
                                href="/dashboard/agenda"
                                className="flex p-2 space-x-3 items-center"
                            >
                                <img className='h-4 w-4' src='/images/agenda.svg' alt='Mail' />
                                <span>Agenda</span>
                            </a>
                        </li>
                        <li className="">
                            <a
                                href="#"
                                className="flex p-2 space-x-3 items-center"
                                onClick={() => setModalShow(true)}
                            >
                                <img className='h-4 w-4' src='/images/logout.svg' alt='Mail' />
                                <span>Logout</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </>
  )
}

export default Aside