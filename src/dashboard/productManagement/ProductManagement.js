import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Layout from '../../components/Layout';

function ProductManagement() {
  
    const [show, setShow] = useState(false);
    const [showMore, setShowMore] = useState(false);
    const Categories = [
        {
            name: '',
            img: '/images/product.png',
            more: true
        },
        {
            name: '',
            img: '/images/product.png',
            more: false,
            background: true,
        },
        {
            name: '',
            img: '/images/product.png',
            more: false
        },
        {
            name: '',
            img: '/images/product.png',
            more: false,
            background: true,
        },
    ];
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
      <div className="flex space-x-4 ">
        <div className='bg-white h-[500px] w-[300px] p-4 pt-12 rounded-[24px] shadow space-y-5'>
          <div className="flex space-x-4 items-center">
            <p className="font-semibold">
              All Categories
            </p>
            <img className="h-4 w-4" src="../images/plus.svg" />
          </div>
          
          <div className='pb-5 lg:pb-0'>
                        {Categories.map((item, index) => (
                            <div className={`flex justify-between items-center h-[89px] my-2 px-3 md:px-5 ${item.background && "bg-primaryExtraLight"}`} key={index}>
                                <span className='flex items-center gap-x-2'>
                                    <img src='/images/product.png' alt='Product' className='w-[56px] h-[56px] rounded-full' />
                                    <p className='text-base font-medium'>Catagory name</p>
                                </span>
                                {item.more && (
                                    <div className='relative'>
                                        <img
                                            src='/images/dots.svg'
                                            alt='more'
                                            onClick={() => setShow(!show)}
                                            className="cursor-pointer"
                                        />
                                        <ul
                                            className='w-[119px] border border-[#0B102333] rounded-[11px] py-2 list-none text-center absolute top-full right-0 mt-1 bg-white transition-all duration-300'
                                            style={{ opacity: show ? 1 : 0 }}
                                        >
                                            <li className='border-b pb-1'>
                                                <Link
                                                    to="/dashboard/productmanagement/allcategories/editcategory"
                                                >
                                                    <span className='font-medium text-xs'>Edit</span>
                                                </Link>
                                            </li>
                                            <li className='pb-1'>
                                                <Link to="#">
                                                    <span className='font-medium text-xs text-[#FF3D4E]'>Delete</span>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                )}

                            </div>
                        ))}
                    </div>
         
          
          
        </div>

        <div className="h-[800px] w-[650px] bg-white rounded-[24px] shadow p-6">
          <div className="flex justify-between">
            <h1 className='font-semibold'>All Products</h1>
            <Link to='/dashboard/allproducts/addproduct'> 
              <button className="bg-primary h-8 w-[170px] mt-3 hover:bg-blue-700 text-white font-semibold  px-4 rounded-lg focus:outline-none focus:shadow-outline" type="button">
                Add Product
              </button>
            </Link>
          </div>
          <div className='flex justify-between mt-8'>
            <p className='pl-3'>Product name</p>
            <p className='pl-12'>ID</p>
            <p className='pl-3'>Quantity</p>
            <p>Status</p>
            <p className='pr-2'>Action</p>
          </div>

          <div>
            <div className='mt-3'>
              {ProductsList.map((product, index) => (
                <div className={`w-full h-[89px] flex items-center my-2  ${product.background && "bg-primaryExtraLight"}`} key={index}>
                  <Link to="/dashboard/productmanagement/editproduct" className='text-sm font-medium w-[35%] flex gap-2 items-center'>
                    <img src='/images/product.png' alt='product' className='w-11 h-11' />
                      <span>Product name</span>
                  </Link>
                  <span className='text-xs font-medium w-[16%]'>#3432434</span>
                  <span className='text-xs font-medium w-[16%] pl-3'>
                    <span className='ml-3'>244</span>
                  </span>
                  <span className='text-sm font-medium w-[16%] pl-7'>
                    <span className='w-[62px] h-[22px] bg-[#E7ECF1] text-[9px] rounded-full flex justify-center items-center'>
                      Purchased
                    </span>
                  </span>
                  <span className='text-sm font-medium w-[16%] relative pl-12'>
                    <img
                      src='/images/edit.svg'
                      alt='edit'
                      className='ml-3 cursor-pointer'
                      onClick={() => setShowMore(!showMore)}
                    />
                    <ul
                      className='w-[209px] border border-[#0B102333] rounded-[11px] py-2 list-none text-center absolute top-full right-0 mt-1 bg-white transition-all duration-300'                        style={{ opacity: showMore ? 0 : 1 }}
                    >
                      <li className='border-b pb-1'>
                        <Link to="#">
                          <span className='font-medium text-xs'>Add Actions</span>
                        </Link>
                      </li>
                      <li className='pb-1'>
                        <Link to="#">
                          <span className='font-medium text-xs'>Add Proceed resource action</span>
                        </Link>
                      </li>
                    </ul>        
                  </span>
                </div>
              ))}              
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default ProductManagement

