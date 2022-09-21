import React, { useState } from 'react';
import Layout from '../../components/Layout';
import { Link } from 'react-router-dom';

const AllCatagories = () => {
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
            <section className='flex-1'>
                <div className='flex-1 md:h-[902px] bg-white rounded-[32px] px-3 md:px-4 py-5'>
                    <div className='flex flex-wrap justify-between px-5'>
                        <h1 className='font-medium text-[24px]'>All Categories</h1>
                        <Link to="/dashboard/allcatagories/addcatagory">
                            <button
                                className='w-[150px] h-[45px] md:w-[199px] md:h-[48px] text-sm md:text-base text-white bg-primary rounded-xl font-light mt-4'
                            >Add Category</button>
                        </Link>
                    </div>
                    <div
                        className='relative pl-5'
                    >
                        <div
                            className='cursor-pointer border rounded-lg w-[121px] h-[36px] flex justify-between px-4 items-center'
                            onClick={() => setShow(!show)}
                        >
                            <p className='text-sm text-[#5C5C5C]'>Actions</p>
                            <img src='/images/dropdown.svg' alt='Dropdown' />
                        </div>
                        <ul
                            className='w-[121px] border border-[#0B102333] rounded-[11px] py-2 list-none text-center absolute top-full mt-1 bg-white transition-all duration-300'
                            style={{ opacity: show ? 1 : 0 }}
                        >
                            <li>
                                <Link to="#">
                                    <span className='font-medium text-xs my-2'>Profile setting</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="#">
                                    <span className='font-medium text-xs my-2 text-[#FF3D4E]'>End work day</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="#">
                                    <span className='font-medium text-xs my-2'>Log out</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <section className='mt-10 overflow-x-auto'>
                        <div className='w-[750px] md:w-full'>
                            <div className='w-full flex items-center px-0 md:px-4'>
                                <span className='text-sm font-medium w-[30%]'>Category name</span>
                                <span className='text-sm font-medium w-[25%]'>IVA Type</span>
                                <span className='text-sm font-medium w-[30%]'>Aliquota_iva</span>
                                <span className='text-sm font-medium w-[20%]'>Status</span>
                                <span className='text-sm font-medium w-[20%]'>Action</span>
                            </div>
                            <div className='mt-3'>
                                {ProductsList.map((prod, index) => (
                                    <div className={`w-full h-[89px] flex items-center my-2 px-1 md:px-4 ${prod.background && "bg-primaryExtraLight"}`} key={index}>
                                        <span className='text-sm font-medium w-[30%] flex gap-2 items-center'>
                                            <img src='/images/product.png' alt='product' className='w-[56px] h-[56px]' />
                                            <span>Product name</span>
                                        </span>
                                        <span className='text-xs font-medium w-[25%]'>Category name</span>
                                        <span className='text-xs font-medium w-[30%]'>
                                            <span className='ml-3'>#3432434</span>
                                        </span>
                                        <span className='text-sm font-medium w-[20%]'>
                                            <span className='w-[62px] h-[22px] bg-[#E7ECF1] text-[9px] rounded-full flex justify-center items-center'>
                                                Purchased
                                            </span>
                                        </span>
                                        <span className='text-sm font-medium w-[20%] relative'>
                                            <Link to="/dashboard/allcatagories/editcatagory">
                                                <img
                                                    src='/images/edit.svg'
                                                    alt='edit'
                                                    className='ml-3 cursor-pointer'
                                                />
                                            </Link>
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                </div>
            </section>
        </Layout>
    )
}

export default AllCatagories