import { useState } from 'react';
import OtpInput from 'react-otp-input';

export default function ConfirmPassword() {

    const [OTP, setOTP] = useState("");

    return (
        <div>
            <main className='w-full h-full bg-primaryExtraLight py-28 px-28'>
                <section className='container h-full xl:h-[733px] bg-white'>
                    <div className='w-full h-full md:flex border border-[#D6F1DA] rounded-xl'>
                        <div className='w-full h-full lg:w-[434px] bg-primaryLight flex justify-center items-center rounded-xl'>
                            <img src='/images/logo.png' alt='Logo' className='w-[225px] h-[225px]' />
                        </div>
                        <section className='flex-1 flex items-center'>
                            <div className='w-full md:w-[497px] mx-auto'>
                                <h1 className='text-[28px] font-semibold text-center'>confirm your Email</h1>
                                <form className='mt-14'>
                                    
                                    <div className='text-center mt-2 mb-10'>
                                        <p>6 Digits code has been send to your email</p>
                                        <a href='./' className='text-s text-black font-[500]'>Steve@example.com</a>
                                    </div>
                                    <div className='w-full mb-10 h-[113px] rounded-[14px] border border-primary mt-2 px-12 flex items-center'>
                                        <div className='border-b-2 w-96 '>
                                            <OtpInput 
                                                className='w-48'
                                                value={OTP} 
                                                onChange={setOTP} 
                                                autoFocus 
                                                OTPLength={6} 
                                                otpType="number" 
                                                disabled={false} 
                                                secure 
                                            />
                                        </div>
                                    </div>
                                                    
                                    <div className='text-center mt-2'>
                                        <p>Didn't recieve it?</p>
                                        <a href='./' className='text-s text-black font-[500]'>Send Again?</a>
                                    </div>
                                    <div className='mt-16 flex justify-between'>
                                        <button className='w-[199px] h-[48px] rounded-xl bg-primaryExtraLight text-base border border-primary'>
                                            Cancel
                                        </button>
                                        
                                        <button className='w-[199px] h-[48px] rounded-xl bg-primary text-base text-white border border-primary font-light'>
                                            Send Code
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </section>
                    </div>
                </section>
            </main>
        </div>
    )
}