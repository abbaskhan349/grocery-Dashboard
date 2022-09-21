import React from 'react'
import Layout from '../../components/Layout'
import Select from 'react-select'

export const EditProfile = () => {
    const ivaType = [
        {
            value: 'type1',
            label: 'type 1',
        },
        {
            value: 'type2',
            label: 'type 2',
        },
    ];
    const status = [
        {
            value: 'active',
            label: 'Active',
        },
        {
            value: 'inactive',
            label: 'InActive',
        },
    ];

  return (
    <Layout>
        <div className="w-[950px]  shadow-md rounded-[20px] bg-white">
            <form className=" w-[835px] px-8 pt-6 pb-16">
                <h1 className='font-semibold text-xl mb-4'>Edit Profile</h1>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm mb-2" for="username">
                        Name
                    </label>
                    <input className="border-primary border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="" />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm mb-2" for="username">
                        UserName
                    </label>
                    <input className="border border-primary rounded w-full py-2 px-3 text-gray-700  leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="" />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm mb-2" for="username">
                        Email
                    </label>
                    <input className=" border border-primary rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="" />
                </div>
                <div className="mb-4">
                    <label className="block text-sm mb-2" for="password">
                        Password
                    </label>
                    <input className="border border-primary rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="" />
                </div>

                <div className='select_wrapper mb-6'>
                            <label className='text-black text-base'>
                                Role type
                                <br />
                                <div className='w-full bg-[#F7F7F7] border-primary mt-2'>
                                    <Select
                                        options={status}
                                        placeholder="Supplier"
                                    />
                                </div>
                            </label>
                        </div>
                
                <div className="">
                    <button className="bg-primary h-8 w-[190px] float-right hover:bg-blue-700 text-white font-semibold  px-4 rounded-lg focus:outline-none focus:shadow-outline" type="button">
                        Save
                    </button>
                </div>
                
            </form>
            
        </div>
    </Layout>
  )
}
