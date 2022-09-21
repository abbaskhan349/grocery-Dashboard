// import React from 'react';
// import Layout from '../../components/Layout';
// import { Link } from 'react-router-dom';

// //import ModalBox from '../../../components/modal';

// const Sales = () => {
    
//     return (
//         <Layout>
            
//             <section className=''>
//                 <div className='flex-1 md:h-[902px] bg-white rounded-[32px] p-3 md:p-8'>
//                     <div className='flex flex-wrap justify-between px-5'>
//                         <h1 className='font-medium text-xl md:text-[24px]'>Sale</h1>
//                         <button
//                             className='w-[150px] h-[44px] md:w-[199px] md:h-[48px] text-sm md:text-base text-white bg-primary rounded-xl font-light mt-4'
//                         >Add Sale</button>
//                     </div>
//                     <section className='mt-20 overflow-x-auto'>
//                         <div className='w-[700px] lg:w-full'>
//                             <div className='w-full flex items-center px-5'>
//                                 <span className='text-sm font-medium w-[20%]'>Sales ID</span>
//                                 <span className='text-sm font-medium w-[20%]'>Gross Sales value</span>
//                                 <span className='text-sm font-medium w-[20%]'>Tax vale</span>
//                                 <span className='text-sm font-medium w-[15%]'>Date time</span>
//                                 <span className='text-sm font-medium w-[15%]'>State</span>
//                                 <span className='text-sm font-medium w-[10%]'>Action</span>
//                             </div>
//                             <div className='mt-3'>
//                                 {[0, 1].map((prod, index) => (
//                                     <div
//                                         className={`w-full h-[89px] flex items-center my-2 px-4 border-b border-gray-300 ${prod.background && "bg-primaryExtraLight"}`}
//                                         key={index}
//                                     >
//                                         <Link to="/dashboard/sales/saleitem">
//                                             <span className='text-sm font-medium w-[20%] flex gap-2 items-center'>
//                                                 <span>Product name</span>
//                                             </span>
//                                         </Link>
//                                         <span className='text-xs font-medium w-[20%]'>120097979</span>
//                                         <span className='text-xs font-medium w-[20%]'>
//                                             <span>1200.00</span>
//                                         </span>
//                                         <span className='text-xs font-medium w-[15%]'>
//                                             <span className='ml-3'>244</span>
//                                         </span>
//                                         <span className='text-sm font-medium w-[15%]'>
//                                             <span className='w-[77px] h-[25px] bg-primary text-[9px] rounded-lg text-white px-6 py-2'
                                               
//                                             >
//                                                 Emitted
//                                             </span>
//                                         </span>
//                                         <span className='text-sm font-medium w-[10%] relative'>
//                                             <img
//                                                 src='/images/delete.svg'
//                                                 alt='edit'
//                                                 className='ml-3 cursor-pointer'
                                                
//                                             />
//                                         </span>
//                                     </div>
//                                 ))}
//                             </div>
//                         </div>
//                     </section>
//                 </div>
//             </section>
//         </Layout>
//     )
// }

// export default Sales


import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../../components/Layout';
// import { Link } from 'react-router-dom';
import ModalBox from '../../components/modal';

const Index = () => {
    const [showModal, setModalShow] = useState(false);
    const [showConfirmEmission, setShowConfirmEmission] = useState(false);
    return (
        <Layout>
            {/* Modal for already emitted receipt */}
            <ModalBox open={showModal} close={setModalShow} className="md:w-[753px] rounded-xl">
                <section className='py-10 px-7 md:px-28 md:py-16 flex flex-col items-center'>
                    <div className='w-[129px] h-[129px] bg-primaryExtraLight rounded-full flex justify-center items-center'>
                        <img src='/images/dollar.svg' alt='dollar' />
                    </div>
                    <h1 className='text-[24px] font-medium text-black mt-4 text-center'>The receipt is already been emitted, would you like it to emit it again?</h1>
                    <div className='flex gap-5 mt-10'>
                        <button
                            className='w-[199px] h-[48px] text-base text-black bg-primaryExtraLight rounded-xl font-light border border-primary cursor-pointer'
                            onClick={() => setModalShow(false)}
                        >Cancel</button>
                        <button
                            className='w-[199px] h-[48px] text-base text-white bg-primary rounded-xl font-light'
                            onClick={() => setModalShow(false)}
                        >Confirm</button>
                    </div>
                </section>
            </ModalBox>

            {/* Modal for emission the receipt */}
            <ModalBox open={showConfirmEmission} close={setShowConfirmEmission} className="md:w-[753px] rounded-xl">
                <section className='py-10 px-7 md:px-28 md:py-16 flex flex-col items-center'>
                    <div className='w-[129px] h-[129px] bg-[#FFDFDF] rounded-full flex justify-center items-center'>
                        <img src='/images/cross.svg' alt='dollar' />
                    </div>
                    <h1 className='text-[24px] font-medium text-black mt-4 text-center'>Would you like to confirm emission for this receipt?</h1>
                    <div className='flex gap-5 mt-10'>
                        <button
                            className='w-[199px] h-[48px] text-base text-black bg-primaryExtraLight rounded-xl font-light border border-primary'
                            onClick={() => setShowConfirmEmission(false)}
                        >Cancel</button>
                        <button
                            className='w-[199px] h-[48px] text-base text-white bg-[#FF5252] rounded-xl font-light'
                        >Confirm</button>
                    </div>
                </section>
            </ModalBox>
            <section className=''>
                <div className='flex-1 md:h-[902px] bg-white rounded-[32px] p-3 md:p-8'>
                    <div className='flex flex-wrap justify-between px-5'>
                        <h1 className='font-medium text-xl md:text-[24px]'>Sale</h1>
                        <button
                            className='w-[150px] h-[44px] md:w-[199px] md:h-[48px] text-sm md:text-base text-white bg-primary rounded-xl font-light mt-4'
                        >Add Sale</button>
                    </div>
                    <section className='mt-20 overflow-x-auto'>
                        <div className='w-[700px] lg:w-full'>
                            <div className='w-full flex items-center px-5'>
                                <span className='text-sm font-medium w-[20%]'>Sales ID</span>
                                <span className='text-sm font-medium w-[20%]'>Gross Sales value</span>
                                <span className='text-sm font-medium w-[20%]'>Tax vale</span>
                                <span className='text-sm font-medium w-[15%]'>Date time</span>
                                <span className='text-sm font-medium w-[15%]'>State</span>
                                <span className='text-sm font-medium w-[10%]'>Action</span>
                            </div>
                            <div className='mt-3'>
                                {[0, 1].map((prod, index) => (
                                    // <Link href="/admin/sale/sale_item" key={index}>
                                    <div
                                        className={`w-full h-[89px] flex items-center my-2 px-4 border-b border-gray-300 cursor-pointer ${prod.background && "bg-primaryExtraLight"}`}
                                        key={index}
                                    >
                                        <Link to="/dashboard/sales/saleitem" className='text-sm font-medium w-[20%] flex gap-2 items-center'>
                                            <span>Product name</span>
                                        </Link>
                                        <span className='text-xs font-medium w-[20%]'>120097979</span>
                                        <span className='text-xs font-medium w-[20%]'>
                                            <span>1200.00</span>
                                        </span>
                                        <span className='text-xs font-medium w-[15%]'>
                                            <span className='ml-3'>244</span>
                                        </span>
                                        <span className='text-sm font-medium w-[15%]'>
                                            <span className='w-[77px] h-[25px] bg-primary text-[9px] rounded-lg text-white px-6 py-2'
                                                onClick={() => setModalShow(true)}
                                            >
                                                Emitted
                                            </span>
                                        </span>
                                        <span className='text-sm font-medium w-[10%] relative'>
                                            <img
                                                src='/images/delete.svg'
                                                alt='edit'
                                                className='ml-3 cursor-pointer'
                                                onClick={() => setShowConfirmEmission(true)}
                                            />
                                        </span>
                                    </div>
                                    // </Link>
                                ))}
                            </div>
                        </div>
                    </section>
                </div>
            </section>
        </Layout>
    )
}

export default Index