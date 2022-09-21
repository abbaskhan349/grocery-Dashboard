import React from 'react'
import { Link } from 'react-router-dom'
import Layout from '../../components/Layout'

const AddProduct = () => {
  return (
    <Layout>
        <div className='h-[500px] w-[900px] bg-white rounded-xl p-7'>
            <div className='flex justify-between mb-5'>
                <h4 className='font-semibold'>Add new product</h4>
                <Link to='/dashboard/allcatagories'> 
                    <button className="bg-primaryLight h-10 w-[170px] mt-3 hover:bg-blue-700  px-4 rounded-lg focus:outline-none focus:shadow-outline" type="button">
                        All Categories
                    </button>
                </Link>
            </div>
            <div className='max-w-[680px]'>
                <div className="mb-10">
                    <label className="block text-sm mb-2">
                        Product name
                    </label>
                    <input className="border border-primary rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="" />
                </div>
                <div className="mb-10">
                    <label className="block text-sm mb-2">
                        Quantity
                    </label>
                    <input className="border border-primary rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="" />
                </div>
                <Link to='/dashboard/allproducts'> 
                    <button className="bg-primary h-8 w-[170px] mt-3 hover:bg-blue-700 text-white font-semibold float-right rounded-lg focus:outline-none focus:shadow-outline" type="button">
                        Add Product
                    </button>
                </Link>
            </div>
        </div>
    </Layout>
  )
}

export default AddProduct