import React, { useState } from 'react';
import Layout from '../../components/Layout';
import { Link } from 'react-router-dom';
import ModalBox from '../../components/modal';

const AgendaList = () => {
    const [showModal, setModalShow] = useState(false);
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
    ];
    return (
        <Layout>
            {/* Agenda details agenda */}
            <ModalBox open={showModal} close={setModalShow} className="w-full xl:w-[1050px] rounded-xl">
                <section className='py-10 px-7 md:px-28 md:pt-12 pb-8 flex flex-col items-center lg:w-[920px] mx-auto'>
                    <div className='flex flex-col items-center gap-4 justify-center'>
                        <img src='/images/calendar-green.svg' alt='dollar' />
                        <h1 className='text-[24px] font-medium text-black'>Agenda</h1>
                    </div>
                    <div>
                        <p className='text-base text-[#6C6C6C]'>Title</p>
                        <p className='text-base text-black mt-3 font-medium'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        <div className='mt-7'>
                            <p className='text-base text-[#6C6C6C]'>Description</p>
                            <p className='text-base font-medium text-black mt-3'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the {"industry's"} standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                        </div>
                        <div className='mt-7'>
                            <p className='text-base text-[#6C6C6C]'>Date {"&"} time</p>
                            <p className='text-base font-medium text-black mt-3'>10:00 to 11:00 AM 25, Jan 2022</p>
                        </div>
                        <div className='mt-7'>
                            <p className='text-base text-[#6C6C6C]'>Location</p>
                            <div className='flex justify-between'>
                                <p className='text-base font-medium text-black mt-3'>135 the mall road Italy City</p>
                                <p className='text-base font-medium text-black mt-3'>View location</p>
                            </div>
                        </div>
                    </div>
                    <div className='ml-auto mt-12'>
                        <button
                            className='w-[199px] h-[48px] text-base text-white bg-primary rounded-xl font-light'
                        >Done</button>
                    </div>
                </section>
            </ModalBox>
            <section className='flex-1 h-auto md:h-[911px] bg-white rounded-[32px] px-4 sm:px-10 py-8'>
                <div className='flex justify-between gap-5 px-3'>
                    <h1 className='font-medium text-xl md:text-[24px]'>List of Agendas</h1>
                    <Link to="/admin/agenda/addagenda">
                        <button
                            className='w-[150px] h-[44px] md:w-[199px] md:h-[48px] text-sm md:text-base text-white bg-primary rounded-xl font-light mt-4 ml-auto'
                        >Add Agenda</button>
                    </Link>
                </div>
                {/* Table data */}
                <section className='mt-16 w-full overflow-x-auto'>
                    <div className='w-[850px] md:w-full'>
                        <div className='w-full flex items-center px-4'>
                            <span className='text-sm font-medium w-[30%]'>Agenda</span>
                            <span className='text-sm font-medium w-[13%]'>Hour</span>
                            <span className='text-sm font-medium w-[20%]'>Date</span>
                            <span className='text-sm font-medium w-[15%]'>Location</span>
                            <span className='text-sm font-medium w-[15%]'>Role</span>
                            <span className='text-sm font-medium w-[7%]'>Action</span>
                        </div>
                        <div className='mt-3'>
                            {ProductsList.map((prod, index) => (
                                <div
                                    className={`w-full h-[89px] flex items-center my-2 px-4 cursor-pointer ${prod.background && "bg-primaryExtraLight"}`}
                                    key={index}
                                    onClick={() => setModalShow(true)}
                                >
                                    <span className='text-sm font-medium w-[30%] flex gap-x-5 items-center'>
                                        <span className='w-[56px] h-[56px] bg-[#88C488] rounded-full'></span>
                                        <span>Title of the Agenda</span>
                                    </span>
                                    <span className='text-xs font-normal w-[13%]'>Alexe Smith</span>
                                    <span className='text-xs font-normal w-[20%]'>
                                        <span className=''>11:00 am 25 July 2022</span>
                                    </span>
                                    <span className='w-[15%]'>
                                        <span className='text-xs'>
                                            New York
                                        </span>
                                    </span>
                                    <span className='w-[15%]'>
                                        <span className='w-[62px] h-[22px] bg-primary text-[9px] rounded-full text-white px-6 py-2'
                                        >
                                            Active
                                        </span>
                                    </span>
                                    <span className='text-sm w-[7%] relative'>
                                        <span className="flex gap-2">
                                            <img
                                                src='/images/edit.svg'
                                                alt='edit'
                                                className='ml-3 cursor-pointer'
                                            />
                                        </span>
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </section>
        </Layout>
    )
}

export default AgendaList