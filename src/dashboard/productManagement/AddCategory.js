import React from 'react';
import Layout from '../../components/Layout';
import Select from 'react-select';

const AddCatagory = () => {
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
            <section className='flex-1 h-auto md:h-[711px] bg-white rounded-[32px] px-8 py-8'>
                <div className='flex justify-between'>
                    <h1 className='font-medium text-[24px]'>Add new Category</h1>
                </div>
                <div className='w-full xl:w-[680px] mt-10'>
                    <form className=''>
                        <div className='w-full mb-6'>
                            <label className='text-base text-black'>Product name</label>
                            <div className='w-full h-10 rounded-[14px] border border-primary bg-[#F7F7F7] mt-2 px-5 flex items-center'>
                                <input type="text" className="border-none w-full bg-transparent text-base focus:outline-none ml-4" />
                            </div>
                        </div>
                        <div className='w-full mb-6'>
                            <label className='text-base text-black'>aliquota_iva</label>
                            <div className='w-full h-10 rounded-[14px] border border-primary bg-[#F7F7F7] mt-2 px-5 flex items-center'>
                                <input type="text" className="border-none w-full bg-transparent text-base focus:outline-none ml-4" />
                            </div>
                        </div>
                        <div className='select_wrapper mb-6'>
                            <label className='text-black text-base '>
                                IVA Type
                            </label>
                            <div className='w-full h-10 rounded-[14px] border border-primary bg-[#F7F7F7] mt-2 px-5'>
                                <Select
                                    // value={selectedOption}
                                    // onChange={setSelectedOption}
                                    options={ivaType}
                                    placeholder="Select the IVA Type"
                                    className=''
                                />
                            </div>
                            
                        </div>
                        <div className='select_wrapper mb-6'>
                            <label className='text-black text-base'>
                                Status
                            </label>
                            <div className='w-full h-10 rounded-[14px] border border-primary bg-[#F7F7F7] mt-2 px-5'>
                                <Select
                                    // value={selectedOption}
                                    // onChange={setSelectedOption}
                                    options={status}
                                    placeholder="Active"
                                />
                            </div>
                        </div>
                        <div className='text-right'>
                            <button className='w-[199px] h-10 text-base text-white bg-primary rounded-xl font-light'>Add Product</button>
                        </div>
                    </form>
                </div>
            </section>
        </Layout>
    )
}

export default AddCatagory