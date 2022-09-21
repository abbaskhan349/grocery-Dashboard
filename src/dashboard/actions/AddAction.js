import React from 'react';
import Layout from '../../components/Layout';
import Select from 'react-select';

const AddAction = () => {
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
            <section className='flex-1 h-auto md:h-[911px] bg-white rounded-[32px] px-8 py-8'>
                <div className='flex justify-between'>
                    <h1 className='font-medium text-[24px]'>Add Action</h1>
                </div>
                <div className='w-full xl:w-[822px] mt-10 px-6'>
                    <form className=''>
                        <div className='w-full mb-6'>
                            <label className='text-xs text-black'>Action Type</label>
                            <div className='w-full h-[48px] rounded-[14px] border border-[#C6F5CF] bg-[#F7F7F7] mt-2 px-5 flex items-center'>
                                <input type="text" className="w-full border-none bg-transparent text-sm focus:outline-none ml-4" />
                            </div>
                        </div>
                        <div className='w-full mb-6'>
                            <label className='text-xs text-black'>Quantity
                                <span> *</span>
                            </label>
                            <div className='w-full h-[48px] rounded-[14px] border border-[#C6F5CF] bg-[#F7F7F7] mt-2 px-5 flex items-center'>
                                <input type="number" className="w-full border-none bg-transparent text-sm focus:outline-none ml-4" />
                            </div>
                        </div>
                        <div className='w-full mb-6'>
                            <label className='text-xs text-black'>Money
                                <span> *</span>
                            </label>
                            <div className='w-full h-[48px] rounded-[14px] border border-[#C6F5CF] bg-[#F7F7F7] mt-2 px-5 flex items-center'>
                                <input type="number" className="w-full border-none bg-transparent text-sm focus:outline-none ml-4" />
                            </div>
                        </div>
                        <div className='w-full mb-6'>
                            <label className='text-xs text-black'>Print Counter
                                <span> *</span>
                            </label>
                            <div className='w-full h-[48px] rounded-[14px] border border-[#C6F5CF] bg-[#F7F7F7] mt-2 px-5 flex items-center'>
                                <input type="number" className="w-full border-none bg-transparent text-sm focus:outline-none ml-4" />
                            </div>
                        </div>

                        <div className='select_wrapper mb-6'>
                            <label className='text-black text-xs'>
                                Resources
                                <span className='text-red-500'> *</span>
                                <br />
                                <div className='w-full h-[48px] rounded-[14px] border border-[#C6F5CF] bg-[#F7F7F7] mt-2 px-5'>
                                    <Select
                                        // value={selectedOption}
                                        // onChange={setSelectedOption}
                                        options={ivaType}
                                        placeholder="Name of the main"
                                    />
                                </div>
                            </label>
                        </div>
                        <div className="flex gap-5 mb-16">
                            <input type="checkbox" />
                            <span className="text-xs">Is for internal usage</span>
                        </div>
                        <button className='w-[199px] h-[48px] text-base text-white bg-primary rounded-xl font-light mt-4'>Add</button>
                    </form>
                </div>
            </section>
        </Layout>
    )
}

export default AddAction