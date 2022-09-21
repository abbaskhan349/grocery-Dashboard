import React from 'react';
import Layout from '../../components/Layout';
import { Link, useNavigate } from 'react-router-dom';

const SaleItem = () => {
    const navigate = useNavigate();

    const SaleItems = [
        {
            title: 'Sale ID',
            value: '098098'
        },
        {
            title: 'Gross sales value',
            value: '1200,0000'
        },
        {
            title: 'Tax Value',
            value: '1200,00'
        },
        {
            title: 'Date time',
            value: '20th June 2022'
        },
        {
            title: 'State',
            value: 'Purchased'
        },
    ]
    return (
        <Layout>
            <section className='flex gap-4'>
                <div className='flex-1 md:h-[902px] bg-white rounded-[32px] px-16 py-8'>
                    <div className='flex flex-wrap justify-between'>
                        <h1 className='font-medium text-xl md:text-[24px]'>Sale Item</h1>
                        <Link to="/dashboard/productmanagement/allcategories/addcategory">
                            <button
                                className='w-[150px] h-[44px] md:w-[199px] md:h-[48px] text-sm md:text-base text-white bg-primary rounded-xl font-light mt-4'
                            >Add Sale</button>
                        </Link>
                    </div>
                    <section className='mt-20 w-full md:w-2/3'>
                        {SaleItems.map((sale, index) => (
                            <div className='flex justify-between my-5' key={index}>
                                <span className='text-sm text-black'>{sale.title}</span>
                                <span className='sm:w-[150px] text-[#1D2129] text-sm font-medium'>{sale.value}</span>
                            </div>
                        ))}
                        <div className='text-right'>
                            <button
                                className='w-[150px] h-[44px] md:w-[199px] md:h-[48px] text-sm md:text-base text-black bg-primaryExtraLight rounded-xl font-light mt-8 border-2 border-primary'
                                onClick={() => navigate(-1)}
                            >Back</button>
                        </div>
                    </section>
                </div>
            </section>
        </Layout>
    )
}

export default SaleItem