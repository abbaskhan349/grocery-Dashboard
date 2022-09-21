import react from 'react';
import Layout from '../../components/Layout';

const EditProduct = () => {
    return (
        <Layout>
            <section className='flex-1 h-auto md:h-[711px] bg-white rounded-[32px] px-8 py-8'>
                <div className='flex justify-between'>
                    <h1 className='font-medium text-[24px]'>Edit Product</h1>
                </div>
                <div className='w-full xl:w-[822px] mt-10'>
                    <form className=''>
                        <div className='w-full mb-10'>
                            <label className='text-base text-black'>Edit product</label>
                            <div className='w-full h-[60px] rounded-[14px] border border-primary bg-[#F7F7F7] mt-2 px-5 flex items-center'>
                                <input type="text" className="w-full border-none bg-transparent text-base focus:outline-none ml-4" />
                            </div>
                        </div>
                        <div className='w-full mb-10'>
                            <label className='text-base text-black'>Quantity</label>
                            <div className='w-full h-[60px] rounded-[14px] border border-primary bg-[#F7F7F7] mt-2 px-5 flex items-center'>
                                <input type="text" className="w-full border-none bg-transparent text-base focus:outline-none ml-4" />
                            </div>
                        </div>
                        <div className='text-right'>
                            <button className='w-[199px] h-[48px] text-base text-white bg-primary rounded-xl font-light mt-4'>Save Edit</button>
                        </div>
                    </form>
                </div>
            </section>
        </Layout>
    )
}

export default EditProduct