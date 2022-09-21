import React, { useState } from 'react';
import Layout from '../../components/Layout';
import Analytics from './Analytics';
import Global from './Global';

const Insights = () => {
    const [selectedTab, setSelectedTab] = useState(1);
    const tabs = [
        {
            id: 1,
            title: 'Analytityc'
        },
        {
            id: 2,
            title: 'Global'
        },
    ]

    return (
        <Layout>
            <section className='w-full p-5 md:p-12 border-2 rounded-[32px] bg-white py-8'>
                <div className='flex gap-x-20'>
                    {tabs.map((tab, index) => (
                        <p
                            className={`text-base text-black cursor-pointer ${selectedTab?.id === tab?.id ? "border-b-2 border-primary font-medium" : ''}`}
                            onClick={() => setSelectedTab(tab)}
                            key={index}
                        >{tab.title}</p>
                    ))}
                </div>
                {selectedTab?.title === "Analytityc" ? (
                    <Analytics />
                ) : (
                    <Global />
                )}
            </section>
        </Layout>
    )
}

export default Insights