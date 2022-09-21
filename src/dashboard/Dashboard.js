import React from 'react'
import Aside from '../components/Layout/Aside';
import Header from '../components/Layout/Header';
import Layout from '../components/Layout'

import LineChart from "./LineChart";


function Dashboard() {    

  return (
        <Layout>
            
            <div className="">
              
                <div className="grid grid-cols-1 mb-6 gap-2 mt-10 lg:grid-cols-4">
                    <div className="w-[245px] h-[90px] pl-5  bg-white rounded-[24px] flex gap-4 items-center shadow ">
                        <div>
                            <p className="text-sm">
                                Monthly Cost
                            </p>
                            <p className="mt-1 text-2xl font-bold text-gray-900">
                                €5.000
                            </p>
                        </div>
                        <div className='w-[123px] h-[46px]'>
                          <img className='' src='../images/graph.svg' />
                        </div> 
                    </div>
                    <div className="w-[245px] h-[92px] pl-5  bg-white rounded-[24px] flex gap-4 items-center shadow ">
                        <div>
                            <p className="text-sm truncate">
                                Sales Cost
                            </p>
                            <p className="mt-1 text-2xl font-bold text-gray-900">
                                €7.000
                            </p>
                        </div>
                        <div className='w-[123px] h-[46px]'>
                          <img className='' src='../images/graph.svg' />
                        </div> 
                    </div>
                    <div className="w-[245px] h-[92px] pl-5  bg-white rounded-[24px] flex gap-4 items-center shadow ">
                        <div>
                            <p className="text-sm truncate">
                                Monthly Revenue
                            </p>
                            <p className="mt-1 text-2xl font-bold text-gray-900">
                                €2.000
                            </p>
                        </div>
                        <div className='w-[123px] h-[46px]'>
                          <img className='' src='../images/graph.svg' />
                        </div> 
                    </div>
                    <div className="w-[245px] h-[92px] pl-5  bg-white rounded-[24px] flex gap-4 items-center shadow ">
                        <div>
                            <p className="text-sm truncate">
                                Last Yearly Projection
                            </p>
                            <p className="mt-1 text-2xl font-bold text-gray-900">
                                +20%
                            </p>
                        </div>
                        <div className='w-[123px] h-[46px]'>
                          <img className='' src='../images/graph.svg' />
                        </div> 
                    </div>
                </div>
                <div className='flex space-x-4'>
                    <div className='h-[440px] w-[650px] bg-white rounded-[14px] p-3'>
                        <div className='flex justify-between'>
                            <p>Overall Activity</p>
                            <div className='shadow h-8 w-[110px] rounded-lg font-light'>
                                <select className='p-1 focus:outline-0'>
                                    <option>Last Week</option>
                                    <option>2</option>
                                </select>
                            </div>
                        </div>
                        <div className='pl-2'>
                            <LineChart />
                        </div>
                    </div>
                    
                   
                    <div className='h-[350px] w-[330px]'>
                        <div className="max-w-sm  ">
                        
                            <div className="mb-4 flex items-center justify-between">
                            <h5 className="text-xl leading-none text-gray-900 dark:text-white pb-3">
                                Inventory
                            </h5>
                            <a
                                href="#"
                                className="text-sm hover:underline dark:text-blue-500 pt-5"
                            >
                                View all
                            </a>
                            </div>
                            <div className="">
                                <ul className="space-y-4 rounded-xl">
                                    <li className="py-3 sm:py-4 bg-white">
                                        <div className="flex items-center space-x-5">
                                            <div className="pl-2">
                                                <img
                                                    className="h-10 w-10 rounded-full"
                                                    src="../images/product.png"
                                                    alt=""
                                                />
                                            </div>
                                            <div className="min-w-0">
                                                <p className=" text-sm font-medium text-gray-900 dark:text-white">
                                                    Product name
                                                </p>
                                                <p className="truncate text-sm text-gray-500 dark:text-gray-400">
                                                    Category
                                                </p>
                                            </div>
                                            <div>
                                                <p>
                                                    #3432434
                                                </p>
                                            </div>
                                            <span className='text-sm font-medium w-[16%]'>
                                                <span className='w-[62px] h-[22px] bg-[#E7ECF1] text-[9px] rounded-full flex justify-center items-center'>
                                                    Purchased
                                                </span>
                                            </span>
                                        </div>
                                    </li>
                                    <li className="py-3 sm:py-4 bg-white">
                                        <div className="flex items-center space-x-5">
                                            <div className="pl-2">
                                                <img
                                                    className="h-10 w-10 rounded-full"
                                                    src="../images/product.png"
                                                    alt=""
                                                />
                                            </div>
                                            <div className="min-w-0">
                                                <p className=" text-sm font-medium text-gray-900 dark:text-white">
                                                    Product name
                                                </p>
                                                <p className="truncate text-sm text-gray-500 dark:text-gray-400">
                                                    Category
                                                </p>
                                            </div>
                                            <div>
                                                <p>
                                                    #3432434
                                                </p>
                                            </div>
                                            <span className='text-sm font-medium w-[16%]'>
                                                <span className='w-[62px] h-[22px] bg-[#E7ECF1] text-[9px] rounded-full flex justify-center items-center'>
                                                    Purchased
                                                </span>
                                            </span>
                                        </div>
                                    </li>
                                    <li className="py-3 sm:py-4 bg-white">
                                        <div className="flex items-center space-x-5">
                                            <div className="pl-2">
                                                <img
                                                    className="h-10 w-10 rounded-full"
                                                    src="../images/product.png"
                                                    alt=""
                                                />
                                            </div>
                                            <div className="min-w-0 ">
                                                <p className=" text-sm font-medium text-gray-900 dark:text-white">
                                                    Product name
                                                </p>
                                                <p className="truncate text-sm text-gray-500 dark:text-gray-400">
                                                    Category
                                                </p>
                                            </div>
                                            <div>
                                                <p>
                                                    #3432434
                                                </p>
                                            </div>
                                            <span className='text-sm font-medium w-[16%]'>
                                                <span className='w-[62px] h-[22px] bg-[#E7ECF1] text-[9px] rounded-full flex justify-center items-center'>
                                                    Purchased
                                                </span>
                                            </span>
                                        </div>
                                    </li>
                                    <li className="py-3 sm:py-4 bg-white">
                                        <div className="flex items-center space-x-5">
                                            <div className="pl-2">
                                                <img
                                                    className="h-10 w-10 rounded-full"
                                                    src="../images/product.png"
                                                    alt=""
                                                />
                                            </div>
                                            <div className="min-w-0">
                                                <p className=" text-sm font-medium text-gray-900 dark:text-white">
                                                    Product name
                                                </p>
                                                <p className="truncate text-sm text-gray-500 dark:text-gray-400">
                                                    Category
                                                </p>
                                            </div>
                                            <div>
                                                <p>
                                                    #3432434
                                                </p>
                                            </div>
                                            <span className='text-sm font-medium w-[16%]'>
                                                <span className='w-[62px] h-[22px] bg-[#E7ECF1] text-[9px] rounded-full flex justify-center items-center'>
                                                    Purchased
                                                </span>
                                            </span>
                                        </div>
                                    </li>
                                
                                </ul>
                            </div>
                        
                        </div>
                    </div>
                </div>
            </div> 

        </Layout>
        
  )
}

export default Dashboard