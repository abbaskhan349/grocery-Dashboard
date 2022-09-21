import React from 'react';
import Layout from '../../components/Layout';
import Select from 'react-select';

const AddAgenda = () => {
    const locations = [
        {
            value: '1',
            label: 'karachi',
        },
        {
            value: '2',
            label: 'Peshawar',
        },
        {
            value: '3',
            label: 'New York',
        },
        {
            value: '4',
            label: 'Islamabad',
        },
    ];
    return (
        <Layout>
            <section className='flex-1 h-auto md:h-[911px] bg-white rounded-[32px] px-7 sm:px-16 py-8'>
                <div className='flex flex-wrap gap-y-3 justify-between'>
                    <h1 className='font-medium text-xl md:text-[24px]'>Add Agenda</h1>
                    <button
                        className='w-[150px] h-[44px] md:w-[199px] md:h-[48px] text-sm md:text-base text-white bg-primary rounded-xl font-light'
                    >All Agenda</button>
                </div>
                <div className='w-full xl:w-[822px] mt-10'>
                    <form className=''>
                        <div className='w-full mb-10'>
                            <label className='text-base text-black'>Title of agenda</label>
                            <div className='w-full h-[60px] rounded-[14px] border border-primary bg-[#F7F7F7] mt-2 px-5 flex items-center'>
                                <input type="text" className="border-none bg-transparent text-base focus:outline-none ml-4" />
                            </div>
                        </div>
                        <div className='w-full mb-10'>
                            <label className='text-base text-black'>Description of agenda</label>
                            <div className='w-full rounded-[14px] border border-primary bg-[#F7F7F7] mt-2 px-5 flex items-center'>
                                <textarea rows={6} className="border-none bg-transparent text-base focus:outline-none ml-4 py-4" />
                            </div>
                        </div>
                        <div className='w-full mb-10'>
                            <label className='text-base text-black'>Time and Date</label>
                            <div className='w-full h-[60px] rounded-[14px] border border-primary bg-[#F7F7F7] mt-2 px-5 flex items-center'>
                                <input type="text" className="border-none bg-transparent text-base focus:outline-none ml-4" />
                            </div>
                        </div>
                        <div className='select_wrapper'>
                            <label className='text-black text-base'>
                                Location
                                <span className='text-red-500'> *</span>
                                <br />
                                <div className='w-full h-[60px] rounded-[14px] border border-primary bg-[#F7F7F7] mt-2 px-5'>
                                    <Select
                                        // value={selectedOption}
                                        // onChange={setSelectedOption}
                                        options={locations}
                                        placeholder="Select by Google Map"
                                    />
                                </div>
                            </label>
                        </div>
                        <div className='text-right'>
                            <button className='w-[199px] h-[48px] text-base text-white bg-primary rounded-xl font-light mt-10'>Add</button>
                        </div>
                    </form>
                </div>
            </section>
        </Layout>
    )
}

export default AddAgenda