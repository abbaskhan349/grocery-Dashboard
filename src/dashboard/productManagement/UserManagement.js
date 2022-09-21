// import React from 'react'
// import Layout from '../../components/Layout'

// function UserManagement() {
//   return (
//     <Layout>
//         <div className='w-[900px] h-[500px] rounded-xl bg-white p-8'>
//             <div className='mb-16 flex justify-between'>
//                 <h1 className='font-bold text-xl'>User Management</h1>
//                 <button className="bg-primary h-10 w-[170px] hover:bg-blue-700 text-white font-semibold  px-4 rounded-lg focus:outline-none focus:shadow-outline" type="button">
//                     New Role
//                 </button>
//             </div>
//             <div className='w-full flex items-center px-5'>
//                                 <span className='text-sm font-medium w-[25%]'>User Name</span>
//                                 <span className='text-sm font-medium w-[15%]'>Name</span>
//                                 <span className='text-sm font-medium w-[18%]'>Email</span>
//                                 <span className='text-sm font-medium w-[20%]'>Last Login</span>
//                                 <span className='text-sm font-medium w-[15%]'>Role</span>
//                                 <span className='text-sm font-medium w-[7%]'>Action</span>
//                             </div>
//             <div className='flex justify-between items-center mb-6'>
//                 <div className='flex gap-2 items-center'>
//                     <img src='/images/admin.png' />
//                     <h4>AlexAdmin</h4>
//                 </div>   
//                 <h4>Alexe Smith</h4>
//                 <h4>alexe@gmail.com</h4> 
//                 <h4>11 am 25 july 2022</h4> 
//                 <button className="bg-primary h-8  text-white text-sm  px-4 rounded-xl focus:outline-none focus:shadow-outline" type="button">
//                     Admin
//                 </button>
//                 <img src='/images/edit.svg' />
//             </div>
//             <hr />
//         </div>
//     </Layout>
//   )
// }

// export default UserManagement



import React from 'react';
import Layout from '../../components/Layout';
import { Link } from 'react-router-dom';

const UserManagement = () => {
    return (
        <Layout>
            <section className=''>
                <div className='flex-1 md:h-[902px] bg-white rounded-[32px] p-3 md:p-8'>
                    <div className='flex flex-wrap justify-between px-5 pt-5 md:pt-0'>
                        <h1 className='font-medium text-xl md:text-[24px]'>User Management</h1>
                        <Link to="/dashboard/usermanagement/adduser">
                            <button
                                className='w-[150px] h-[44px] md:w-[199px] md:h-[48px] text-sm md:text-base text-white bg-primary rounded-xl font-light mt-4'
                            >New Role</button>
                        </Link>
                    </div>
                    <section className='mt-20 overflow-x-auto'>
                        <div className='w-[750px] md:w-full'>
                            <div className='w-full flex items-center px-5'>
                                <span className='text-sm font-medium w-[25%] pl-4'>User Name</span>
                                <span className='text-sm font-medium w-[15%] pl-2'>Name</span>
                                <span className='text-sm font-medium w-[18%] pl-3'>Email</span>
                                <span className='text-sm font-medium w-[20%] pl-3'>Last Login</span>
                                <span className='text-sm font-medium w-[15%] pl-4'>Role</span>
                                <span className='text-sm font-medium w-[7%] pl-2'>Action</span>
                            </div>
                            <div className='mt-3'>
                                <div
                                    className='w-full h-[89px] flex items-center my-2 px-4 border-b border-gray-300 cursor-pointer'
                                >
                                    <span className='text-sm w-[25%] flex gap-2 items-center'>
                                        <img src='/images/admin.png' alt='Admin' />
                                        <span>AlexAdmin</span>
                                    </span>
                                    <span className='text-xs w-[15%]'>
                                        <span className='mr-2'>Alexe Smith</span>
                                    </span>
                                    <span className='text-xs w-[18%]'>
                                        Alexe@gmail.com
                                    </span>
                                    <span className='text-xs w-[20%]'>
                                        <span >11:00 am 25 July 2022</span>
                                    </span>
                                    <span className='text-sm w-[15%]'>
                                        <span className='w-[62px] h-[22px] bg-primary text-[9px] rounded-full text-white px-6 py-2'
                                        >
                                            admin
                                        </span>
                                    </span>
                                    <span className='text-sm font-medium w-[7%] relative'>
                                        <img
                                            src='/images/edit.svg'
                                            alt='edit'
                                            className='ml-3 cursor-pointer'
                                        />
                                    </span>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </section>
        </Layout>
    )
}

export default UserManagement