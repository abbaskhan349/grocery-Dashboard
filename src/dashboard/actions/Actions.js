import React, { useState } from 'react';
import Layout from '../../components/Layout';
import { Link } from 'react-router-dom';

const Actions = () => {
    const [show, setShow] = useState(false);
    const ProductsList = [
        {
            name: '',
            img: '/images/product.png',
        },
        {
            name: '',
            img: '/images/product.png',
            background: true,
        },
        {
            name: '',
            img: '/images/product.png',
        },
        {
            name: '',
            img: '/images/product.png',
            background: true,
        },
        {
            name: '',
            img: '/images/product.png',
        },
    ];
    return (
        <Layout>
            <section className=''>
                <div className='flex-1 md:h-[902px] bg-white rounded-[32px] px-4 py-5'>
                    <div className='flex justify-between px-0 md:px-10'>
                        <h1 className='font-medium text-xl md:text-[24px]'>Actions</h1>
                        <Link to="/dashboard/actions/addaction">
                            <button
                                className='w-[150px] h-[44px] md:w-[199px] md:h-[48px] text-sm md:text-base text-white bg-primary rounded-xl font-light mt-4'
                            >Add Action</button>
                        </Link>
                    </div>
                    <div
                        className='relative md:pr-10 mt-8'
                    >
                        <div
                            className='w-[148px] h-[45px] rounded-xl border border-gray-400 flex justify-center gap-x-6 items-center ml-auto cursor-pointer'
                            onClick={() => setShow(!show)}
                        >
                            <img src='/images/filter.svg' alt='Dropdown' />
                            <p className='text-sm text-black'>Filter</p>
                        </div>
                        <ul
                            className='w-[221px] border border-[#0B102333] rounded-[11px] text-center absolute top-full right-5 mt-1 bg-white transition-all duration-300 pl-7'
                            style={{ opacity: show ? 1 : 0 }}
                        >
                            <li className="flex gap-x-9 my-2 cursor-pointer">
                                <img src="/images/calendar.svg" alt="Calendar" />
                                <span className='font-medium text-xs my-2'>From</span>
                            </li>
                            <li className="flex gap-x-9 my-2 cursor-pointer">
                                <img src="/images/calendar.svg" alt="Calendar" />
                                <span className='font-medium text-xs my-2'>To</span>
                            </li>
                        </ul>
                    </div>
                    <section className='mt-10 md:mx-10 border-b-2 border-primaryExtraLight overflow-x-auto'>
                        <div className='w-[700px] md:w-full'>
                            <div className='w-full flex items-center px-12'>
                                <span className='text-sm font-medium w-[30%]'>Action type</span>
                                <span className='text-sm font-medium w-[25%]'>Quantity</span>
                                <span className='text-sm font-medium w-[30%]'>Money</span>
                                <span className='text-sm font-medium w-[20%]'>Status</span>
                                <span className='text-sm font-medium w-[20%]'>Action</span>
                            </div>
                            <div className='mt-3'>
                                {ProductsList.map((prod, index) => (
                                    <div className={`w-full h-[89px] flex items-center my-2 px-12 ${prod.background && "bg-primaryExtraLight"}`} key={index}>
                                        <span className='text-sm font-normal w-[30%] flex gap-2 items-center'>
                                            <span>Action name</span>
                                        </span>
                                        <span className='text-xs font-normal w-[25%]'>98989</span>
                                        <span className='text-xs font-normal w-[30%]'>
                                            <span className='ml-3'>$22</span>
                                        </span>
                                        <span className='text-sm font-medium w-[20%]'>
                                            <span className='w-[62px] h-[22px] bg-[#E7ECF1] text-[9px] rounded-full flex justify-center items-center'>
                                                Purchased
                                            </span>
                                        </span>
                                        <span className='text-sm w-[20%] relative'>
                                            <span className="flex gap-2">
                                                <img
                                                    src='/images/edit.svg'
                                                    alt='edit'
                                                    className='ml-3 cursor-pointer'
                                                />
                                                <img
                                                    src='/images/delete.svg'
                                                    alt='edit'
                                                    className='ml-3 cursor-pointer'
                                                />
                                            </span>
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                    <div className="w-[246px] h-[50px] flex justify-between items-center gap-5 sm:px-4 bg-primaryExtraLight mx-auto mt-12 rounded-xl">
                        <button className="w-[46px] h-[38px] rounded-lg bg-primary flex justify-center items-center">
                            <img src="/images/left.svg" alt="Left arrow" />
                        </button>
                        <a href="#" className="text-black text-sm">1</a>
                        <a href="#" className="text-gray-500 text-sm">2</a>
                        <a href="#" className="text-gray-500 text-sm">3</a>
                        <button className="w-[46px] h-[38px] rounded-lg bg-primary flex justify-center items-center">
                            <img src="/images/right.svg" alt="Right arrow" />
                        </button>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default Actions