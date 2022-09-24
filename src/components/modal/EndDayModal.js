import React, { useState } from 'react';
import ModalBox from '../../components/modal/index';
import { Link } from 'react-router-dom';

const EndDayModal = ({ showEndDayModal, setShowEndDayModal }) => {
    return (
        <ModalBox open={showEndDayModal} close={setShowEndDayModal} className="md:w-[753px] rounded-xl py-3">
            <section className='py-10 px-7 md:px-28 md:py-16 flex flex-col items-center'>
                <div className='w-[129px] h-[129px] bg-[#FFDFDF] rounded-full flex justify-center items-center'>
                    <img src='/images/logout-red.svg' alt='dollar' />
                </div>
                <h1 className='text-[24px] font-medium text-black mt-4 text-center'>Are you sure to log out?</h1>
                <div className='flex gap-5 mt-10'>
                    <button
                        className='w-[199px] h-[48px] text-base text-black bg-primaryExtraLight rounded-xl font-light border border-primary'
                        onClick={() => setShowEndDayModal(false)}
                    >Cancel</button>
                    <Link href="/">
                        <button
                            className='w-[199px] h-[48px] text-base text-white bg-[#FF0E47] rounded-xl font-light'
                        >End day</button>
                    </Link>
                </div>
            </section>
        </ModalBox>
    )
}

export default EndDayModal