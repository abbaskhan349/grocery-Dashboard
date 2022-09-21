import React from 'react';
import Layout from '../../components/Layout';
import Select from 'react-select';

const AddUser = () => {
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
            <section className='flex-1 h-auto md:h-[911px] bg-white rounded-[32px] px-4 md:px-8 py-8'>
                <div className='flex flex-wrap gap-y-3 justify-between'>
                    <h1 className='font-medium text-xl md:text-[24px]'>Add new User</h1>
                    <button
                        className='w-[150px] h-[44px] md:w-[199px] md:h-[48px] text-sm md:text-base text-white bg-primary rounded-xl font-light'
                    >New Role</button>
                </div>
                <div className='w-full xl:w-[822px] mt-10'>
                    <form className=''>
                        <div className='w-full mb-10'>
                            <label className='text-base text-black'>Name</label>
                            <div className='w-full h-[60px] rounded-[14px] border border-primary bg-[#F7F7F7] mt-2 px-5 flex items-center'>
                                <input type="text" className="border-none bg-transparent text-base focus:outline-none ml-4" />
                            </div>
                        </div>
                        <div className='w-full mb-10'>
                            <label className='text-base text-black'>Email</label>
                            <div className='w-full h-[60px] rounded-[14px] border border-primary bg-[#F7F7F7] mt-2 px-5 flex items-center'>
                                <input type="email" className="border-none bg-transparent text-base focus:outline-none ml-4" />
                            </div>
                        </div>
                        <div className='w-full mb-10'>
                            <label className='text-base text-black'>Username</label>
                            <div className='w-full h-[60px] rounded-[14px] border border-primary bg-[#F7F7F7] mt-2 px-5 flex items-center'>
                                <input type="text" className="border-none bg-transparent text-base focus:outline-none ml-4" />
                            </div>
                        </div>
                        <div className='w-full mb-10'>
                            <label className='text-base text-black'>Password</label>
                            <div className='w-full h-[60px] rounded-[14px] border border-primary bg-[#F7F7F7] mt-2 px-5 flex items-center'>
                                <input type="password" className="border-none bg-transparent text-base focus:outline-none ml-4" />
                            </div>
                        </div>
                        <div className='select_wrapper'>
                            <label className='text-black text-base'>
                                Role Type
                                <span className='text-red-500'> *</span>
                                <br />
                                <div className='w-full h-[60px] rounded-[14px] border border-primary bg-[#F7F7F7] mt-2 px-5'>
                                    <Select
                                        // value={selectedOption}
                                        // onChange={setSelectedOption}
                                        options={status}
                                        placeholder="Supplier"
                                    />
                                </div>
                            </label>
                        </div>
                        <div className='text-right'>
                            <button className='w-[199px] h-[48px] text-base text-white bg-primary rounded-xl font-light mt-10'>Save</button>
                        </div>
                    </form>
                </div>
            </section>
        </Layout>
    )
}

export default AddUser