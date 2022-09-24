import React from 'react'
import { Link } from 'react-router-dom'
import Layout from '../../components/Layout'

const AddProduct = () => {
  return (
    <Layout>
        <div className='h-[700px] w-[900px] bg-[#fff] rounded-[14px] p-7'>
            <div className='flex justify-between mb-5'>
                <h1 className='font-semibold text-2xl'>Add new product</h1>
                <Link to='/dashboard/allcatagories'> 
                    <button className="bg-primaryLight h-12 w-[199px] mt-3 hover:bg-blue-700  px-4 rounded-[14px] focus:outline-none focus:shadow-outline" type="button">
                        All Categories
                    </button>
                </Link>
            </div>
            <div className='max-w-[680px]'>
                <div className="mb-10">
                    <label className="block mb-2">
                        Product name
                    </label>
                    <input className="border border-primary bg-[#f7f7f7] rounded-[14px] w-full h-[60px] py-2 px-5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="" />
                </div>
                <div className="mb-10">
                    <label className="block mb-2">
                        Quantity
                    </label>
                    <input className="border border-primary bg-[#f7f7f7] rounded-[14px] w-full h-[60px] py-2 px-5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="" />
                </div>
                <Link to='/dashboard/allproducts'> 
                    <button className="bg-primary h-12 w-[199px] mt-3 hover:bg-blue-700 text-[#fff] float-right rounded-[14px] focus:outline-none focus:shadow-outline" type="button">
                        Add Product
                    </button>
                </Link>
            </div>
        </div>
    </Layout>
  )
}

export default AddProduct