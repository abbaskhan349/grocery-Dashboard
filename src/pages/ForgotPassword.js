// import { Link } from "react-router-dom"

// export default function ForgotPassword() {
//     return (
//         <div>
//             <main className='w-full h-full bg-primaryExtraLight py-28 px-28'>
//                 <section className='container h-full xl:h-[733px] bg-white'>
//                     <div className='w-full h-full md:flex border border-[#D6F1DA] rounded-xl'>
//                         <div className='w-full h- lg:w-[434px] bg-primaryLight flex justify-center items-center rounded-xl'>
//                             <img src='/images/logo.png' alt='Logo' className='w-[225px] h-[225px]' />
//                         </div>
//                         <section className='flex-1 flex items-center'>
//                             <div className='w-full md:w-[497px] mx-auto my-[100px]'>
//                                 <h1 className='text-[28px] font-semibold text-center'>Forgot Your Password</h1>
//                                 <form className='mt-14'>
//                                     <div className='w-full mb-10'>
//                                         <label className='text-base text-black'>Email</label>
//                                         <div className='w-full h-[60px] rounded-[14px] border border-primary bg-[#F7F7F7] mt-2 px-5 flex items-center'>
//                                             <img src='/images/mail.svg' alt='Mail' />
//                                             <input type="text" className="border-none bg-transparent text-base focus:outline-none ml-4 w-96" />
//                                         </div>
//                                     </div>
                                    
//                                     <div className='mt-16 flex justify-between'>
//                                         <Link to="/login">
//                                             <button className='w-[199px] h-[48px] rounded-xl bg-primaryExtraLight text-base border border-primary'>
//                                                 Cancel
//                                             </button>
//                                         </Link>
//                                         <Link to="/confirmpassword">
//                                             <button className='w-[199px] h-[48px] rounded-xl bg-primary text-base text-white border border-primary font-light'>
//                                                 Send Code
//                                             </button>
//                                         </Link>
//                                     </div>
//                                 </form>
//                             </div>
//                         </section>
//                     </div>
//                 </section>
//             </main>
//         </div>
//     )
// }

import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      
      <main className='w-full h-full bg-primaryExtraLight py-0 lg:py-28'>
        <section className='container h-full lg:h-[733px] bg-white ml-[100px]'>
          <div className='w-full h-full lg:flex gap-5 xl:gap-0 border border-[#D6F1DA] rounded-xl'>
            <div className='w-full h-full lg:w-[434px] bg-primaryLight flex justify-center items-center rounded-none lg:rounded-xl'>
              <img src='/images/logo.png' alt='Logo' className='w-[150px] h-[150px] md:w-[225px] md:h-[225px]' />
            </div>
            <section className='flex-1 flex items-center px-8 py-10 sm:py-16 lg:py-0 lg:px-0'>
              <div className='w-full md:w-[497px] mx-auto'>
                <h1 className='text-2xl md:text-[28px] font-semibold text-center'>Forget your password?</h1>
                <form className='mt-16'>
                  <div className='w-full'>
                    <label className='text-sm md:text-base text-black'>Email</label>
                    <div className='w-full h-[45px] md:h-[60px] rounded-[14px] border border-primary bg-[#F7F7F7] mt-2 px-5 flex items-center'>
                      <img src='/images/mail.svg' alt='Mail' />
                      <input type="text" className="w-full border-none bg-transparent text-base focus:outline-none ml-4 bg-[#f7f7f7]" />
                    </div>
                  </div>
                  <div className='mt-20 flex flex-wrap gap-y-5 justify-between'>
                    <Link to="/">
                      <button className='w-[130px] h-[40px] md:w-[199px] md:h-[48px] rounded-xl bg-primaryExtraLight text-sm md:text-base border border-primary'>
                        Cancel
                      </button>
                    </Link>
                    <Link to="/confirmpassword">
                      <button
                        className='w-[130px] h-[40px] md:w-[199px] md:h-[48px] rounded-xl bg-primary text-sm md:text-base text-white border border-primary font-light'
                      >
                        Send Code
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
