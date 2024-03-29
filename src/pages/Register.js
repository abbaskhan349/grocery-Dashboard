import { Link } from "react-router-dom";


export default function Register() {
    return (
        <div>
            <main className='w-full h-full bg-primaryExtraLight py-28 px-28'>
                <section className='container h-full xl:h-[733px] bg-white'>
                    <div className='w-full h-full md:flex border border-[#D6F1DA] rounded-xl'>
                        <div className='w-full h-[750px]  lg:w-[434px] bg-primaryLight flex justify-center items-center rounded-xl'>
                            <img src='/images/logo.png' alt='Logo' className='w-[225px] h-[225px]' />
                        </div>
                        <section className='flex-1 flex items-center'>
                            <div className='w-full md:w-[497px] mx-auto pt-10'>
                                <h1 className='text-[28px] font-semibold text-center'>Register</h1>
                                <form className='mt-14'>
                                    <div className='w-full mb-4'>
                                        <label className='text-base text-black'>First Name</label>
                                        <div className='w-full h-[60px] rounded-[14px] border border-primary bg-[#F7F7F7] mt-2 px-5 flex items-center'>
                                            <input type="text" className="border-none bg-transparent text-base focus:outline-none ml-4 w-96" />
                                        </div>
                                    </div>
                                    <div className='w-full mb-4'>
                                        <label className='text-base text-black'>Last Name</label>
                                        <div className='w-full h-[60px] rounded-[14px] border border-primary bg-[#F7F7F7] mt-2 px-5 flex items-center'>
                                            <input type="password" className="border-none bg-transparent text-base focus:outline-none ml-4 w-96" />
                                        </div>
                                    </div>
                                    <div className='w-full mb-4'>
                                        <label className='text-base text-black'>Email</label>
                                        <div className='w-full h-[60px] rounded-[14px] border border-primary bg-[#F7F7F7] mt-2 px-5 flex items-center'>
                                            <img src='/images/mail.svg' alt='Mail' />
                                            <input type="text" className="border-none bg-transparent text-base focus:outline-none ml-4 w-96" />
                                        </div>
                                    </div>
                                    <div className='w-full mb-4'>
                                        <label className='text-base text-black'>Password</label>
                                        <div className='w-full h-[60px] rounded-[14px] border border-primary bg-[#F7F7F7] mt-2 px-5 flex items-center'>
                                            <img src='/images/password.svg' alt='Mail' />
                                            <input type="password" className="border-none bg-transparent text-base focus:outline-none ml-4 w-96" />
                                        </div>
                                    </div>
                                    <div className='mt-16 flex justify-between'>
                                        <Link to="/login">
                                            <button className='w-[199px] h-[48px] rounded-xl bg-primaryExtraLight text-base border border-primary'>
                                                Login
                                            </button>
                                        </Link>
                                        <Link to="/login">
                                            <button className='w-[199px] h-[48px] rounded-xl bg-primary text-base text-white border border-primary font-light'>
                                                Register
                                            </button>
                                        </Link>
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