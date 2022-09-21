import React from 'react'
import Chart from 'react-apexcharts';

const Analytics = () => {
    const series = [
        {
            name: 'sales',
            data: ["170k", "100k", "300k", "200k", "350k", "150k", "500k"],
        },
        {
            name: 'revenue',
            data: ["120k", "50k", "150k", "100k", "200k", "70k", "400k"],
        },
    ];
    const options = {
        chart: {
            width: "100%",
            height: 350,
            type: 'area',
            id: 'chartyear',
        },
        dataLabels: {
            enabled: false
        },
        colors: ['#2CD9C5', '#8C54FF'],
        fill: {
            type: 'gradient',
            gradient: {
                opacityFrom: 0.6,
                opacityTo: 0.2,
            }
        },
        stroke: {
            show: true,
            curve: 'straight',
            width: 1,

        },
        xaxis: {
            type: '',
            categories: []
        },
        tooltip: {
            x: {
                format: 'dd/MM/yy HH:mm'
            },
        },
        grid: {
            show: true,
            borderColor: '#E9EBF1',
            strokeDashArray: 2,
            xaxis: {
                lines: {
                    show: true
                }
            },
        },
        markers: {
            size: 5,
            // colors: undefined,
            strokeColors: '#fff',
            hover: {
                size: 7,
                sizeOffset: 1
            }
        },
        responsive: [{
            breakpoint: 1280,
            options: {
                chart: {
                    width: 600,
                    type: 'area',
                },
            },
        }],
        responsive: [{
            breakpoint: 1080,
            options: {
                chart: {
                    width: 500,
                },
            },
        }],
        responsive: [{
            breakpoint: 640,
            options: {
                chart: {
                    width: 380,
                    height: 280
                },
            },
        }],
        responsive: [{
            breakpoint: 480,
            options: {
                chart: {
                    width: 280,
                    height: 200
                },
            },
        }],
    }
    return (
        <>
            <div className='mt-10 flex justify-center md:justify-start flex-wrap gap-4'>
                {[0, 1, 2].map((item, index) => (
                    <div
                        className='w-[267px] h-[92px] rounded-[24px] border border-[#0B102333] bg-white flex items-center gap-x-5 px-5'
                        key={index}
                    >
                        <div className='w-[64px] h-[64px] rounded-full bg-appPink flex justify-center items-center'>
                            <img src='/images/cart-white.svg' alt='Cart' />
                        </div>
                        <div className=''>
                            <p className='text-xs'>All Inventory</p>
                            <h1 className='text-[24px] font-semibold'>2500</h1>
                        </div>
                    </div>
                ))}
            </div>
            <div className='w-full h-auto xl:w-[826px] xl:h-[600px] border-2 bg-white mt-6 pt-6 px-4 md:px-8'>
                <h6 className='font-bold text-base'>Sales Statistical Overview</h6>
                <p className='text-[13px] text-black '>Lorem ipsum is placeholder text commonly used</p>
                <div className='flex flex-wrap gap-y-4 justify-between mt-4'>
                    <div className='flex gap-3 items-center'>
                        <span>
                            <span className='text-[15px]'>Total cost</span>
                            <h3 className='text-xl font-bold text-[15,236]'>15,236</h3>
                        </span>
                        <span className='text-[13px]'>89.5% of 20,000 Total</span>
                    </div>
                    <div className='flex gap-3 items-center'>
                        <span>
                            <span className='text-[15px]'>Total Revenue</span>
                            <h3 className='text-xl font-bold text-[15,236]'>$753,098</h3>
                        </span>
                        <span className='text-[13px]'>10.5% of 20,000 Total</span>
                    </div>
                    <div className='flex gap-3 mt-5'>
                        <span className='text-[13px] font-semibold'>1D</span>
                        <span className='text-[13px] font-semibold'>5D</span>
                        <span className='text-[13px] font-semibold'>1M</span>
                        <span className='text-[13px] font-semibold'>1Y</span>
                        <span className='text-[13px] font-semibold'>MAX</span>
                    </div>
                </div>
                <div className='py-8 flex flex-wrap gap-y-4 justify-between'>
                    <div className='flex gap-12'>
                        <div className='flex gap-3 items-center'>
                            <input type="checkbox" />
                            <p className='text-[13px] text-black'>Catagory name</p>
                        </div>
                        <div className='flex gap-3 items-center'>
                            <input type="checkbox" />
                            <p className='text-[13px] text-black'>Catagory name</p>
                        </div>
                    </div>
                    <div className='flex gap-6'>
                        <div className='flex gap-3 items-center'>
                            <span className='w-6 h-[4px] bg-[#2CD9C5] rounded-[5px]'></span>
                            <p className="text-[13px] text-black">Sales</p>
                        </div>
                        <div className='flex gap-3 items-center'>
                            <span className='w-6 h-[4px] bg-[#8C54FF] rounded-[5px]'></span>
                            <p className="text-[13px] text-black">Revenue</p>
                        </div>
                    </div>
                </div>
                <div className='mx-auto flex justify-center items-center apex__chart'>
                    <Chart options={options} series={series} type="area" height={350} style={{ width: "100%" }} />
                </div>
            </div>
        </>)
}

export default Analytics