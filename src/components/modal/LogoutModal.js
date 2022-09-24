import React from 'react';
import ModalBox from '../../components/modal/index';
import { Link } from 'react-router-dom';

const LogoutModal = ({ showModal, setModalShow }) => {
    return (
        <ModalBox open={showModal} close={setModalShow} className="md:w-[753px] rounded-xl py-3">
            <section className='py-10 px-7 md:px-28 md:py-16 flex flex-col items-center'>
                <div className='w-[129px] h-[129px] bg-primaryExtraLight rounded-full flex justify-center items-center'>
                    <img src='/images/logout-green.svg' alt='dollar' />
                </div>
                <h1 className='text-[24px] font-medium text-black mt-4 text-center'>Are you sure to log out?</h1>
                <div className='flex gap-5 mt-10'>
                    <button
                        className='w-[199px] h-[48px] text-base text-black bg-primaryExtraLight rounded-xl font-light border border-primary'
                        onClick={() => setModalShow(false)}
                    >Cancel</button>
                    <Link href="/">
                        <button
                            className='w-[199px] h-[48px] text-base text-white bg-primary rounded-xl font-light'
                        >Log out</button>
                    </Link>
                </div>
            </section>
        </ModalBox>
    )
}

export default LogoutModal