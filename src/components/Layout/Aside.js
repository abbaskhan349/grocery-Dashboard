import React from 'react'

const Aside = () => {
  return (
    <div className="flex flex-col h-screen pl-5 w-[260px]">
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
                                    href="#"
                                    className="flex p-2 space-x-3 items-center"
                                >
                                    <img className='h-4 w-4' src='/images/dashboard.svg' alt='dashboard' />
                                    <span>Dashboard</span>
                                </a>
                            </li>
                            <li className="">
                                <a
                                    href=""
                                    className="flex p-2 space-x-3 items-center"
                                >
                                    <img className='h-4 w-4' src='/images/cart.svg' alt='Mail' />
                                    <span>Product Management</span>
                                </a>
                            </li>
                            <li className="">
                                <a
                                    href="#"
                                    className="flex p-2 space-x-3 items-center"
                                >
                                    <img className='h-4 w-4' src='/images/actions.svg' alt='Mail' />
                                    <span>Actions</span>
                                </a>
                            </li>
                            <li className="">
                                <a
                                    href="#"
                                    className="flex p-2 space-x-3 items-center"
                                >
                                    <img className='h-4 w-4' src='/images/insights.svg' alt='Mail' />
                                    <span>Insights</span>
                                </a>
                            </li>
                            <li className="">
                                <a
                                    href="#"
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
                                    href="#"
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
                                >
                                    <img className='h-4 w-4' src='/images/logout.svg' alt='Mail' />
                                    <span>Logout</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
  )
}

export default Aside