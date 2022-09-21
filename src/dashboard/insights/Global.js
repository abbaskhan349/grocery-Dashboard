import React from 'react'

import ReactApexChart from 'react-apexcharts';
import TransactionChart from 'react-apexcharts'

 const Global = () => {

    // Total Revenu chart
    const seriesYears = [{
        name: 'Total Revenue',
        data: [{
            x: new Date('2018-05-20').getTime(),
            y: 76
        }, {
            x: new Date('2019-02-12').getTime(),
            y: 76
        }]
    }]
    var optionsYears = {
        chart: {
            type: 'area',
            stacked: false,
            height: 130,
            // zoom: {
            //     type: 'x',
            //     enabled: true,
            //     autoScaleYaxis: true
            // },
            toolbar: {
                autoSelected: 'zoom'
            }
        },
        dataLabels: {
            enabled: false
        },
        markers: {
            size: 0,
        },
        fill: {
            type: 'gradient',
            gradient: {
                shadeIntensity: 1,
                inverseColors: false,
                opacityFrom: 1,
                opacityTo: 8,
                stops: [0, 90, 100]
            },
        },
        yaxis: {
            labels: {
                formatter: function (val) {
                    return (val / 1000000).toFixed(0);
                },
            },
            // title: {
            //     text: 'Price'
            // },
        },
        xaxis: {
            type: 'datetime',
        },
        tooltip: {
            shared: false,
            y: {
                formatter: function (val) {
                    return (val / 1000000).toFixed(0)
                }
            }
        }
    };

    // Transaction chart
    const TransactionSeries = [
        {
            name: 'transaction',
            data: [200, 210, 240, 270, 290],
        }
    ];
    const TransactionOptions = {
        chart: {
            height: 100,
            type: 'area',
        },
        dataLabels: {
            enabled: false
        },
        colors: ['#FA3252', '#FA5539'],
        fill: {
            type: '',
            // gradient: {
            //     opacityFrom: 1,
            //     opacityTo: 1,
            // }
            opacity: 1,
            type: 'solid',
            gradient: {
                shade: '#FA3252',
                type: "vertical",
                opacityFrom: 1,
                opacityTo: 5,
                stops: [0, 50, 100],
            },
            pattern: {
                style: 'verticalLines',
                width: 6,
                height: 6,
                strokeWidth: 2,
            },
        },

        stroke: {
            curve: 'smooth',
        },
        markers: {
            size: 5,
            hover: {
                size: 7,
                sizeOffset: 1
            }
        },
        xaxis: {
            type: 'days',
            categories: ["Jan", "Feb", "Mar", "Apr", "May"]
        },
        tooltip: {
            x: {
                format: 'dd/MM/yy HH:mm'
            },
        },
        grid: {
            show: false,
            borderColor: '#C1C1C1',
            strokeDashArray: 3,
        },
        // responsive: [{
        //     breakpoint: 480,
        //     options: {
        //         chart: {
        //             width: 280,
        //             height: 200
        //         },
        //     },
        // }],
    }

    // market overview chart ]
    const overviewSeries = [{
        name: 'PRODUCT A',
        data: [44, 55, 41, 67, 22, 43, 21, 49]
    }, {
        name: 'PRODUCT B',
        data: [13, 23, 20, 8, 13, 27, 33, 12]
    }, {
        name: 'PRODUCT C',
        data: [11, 17, 15, 15, 21, 14, 15, 13]
    }]
    const overviewOptions = {
        chart: {
            type: 'bar',
            height: 350,
            stacked: true,
            stackType: '100%'
        },
        responsive: [{
            breakpoint: 480,
            options: {
                legend: {
                    position: 'bottom',
                    offsetX: 0,
                    offsetY: 0
                }
            }
        }],
        xaxis: {
            categories: ['Jun', 'Feb', 'Mar', 'April', 'May', 'Jun',
                'Jul', 'Aug'
            ],
        },
        fill: {
            opacity: 1
        },
        legend: {
            show: false,
            position: 'bottom',
            offsetX: 0,
            offsetY: 0
        },
        colors: ['#826AF9', '#D0AEFF', '#F7D2FF'],
        plotOptions: {
            bar: {
                borderRadius: 5,
                columnWidth: 10,
            }
        },
        dataLabels: {
            enabled: false
        },
        grid: {
            yaxis: {
                lines: {
                    show: false,
                }
            },
            xaxis: {
                lines: {
                    show: true,
                }
            }
        },
    }
    return (
        <section className='w-full xl:w-[826px]'>
            <div className='flex flex-wrap justify-center lg:justify-start gap-7 mt-12'>
                <div className='w-[346px] h-[163px] bg-white border'>
                    <div className='p-5'>
                        <span className='flex justify-between'>
                            <span className='text-sm text-black'>Total revenue</span>
                            <span className='text-sm text-black font-semibold'>+1.37%</span>
                        </span>
                        <h1 className='text-[24px] font-semibold mt-1'>184.82K</h1>
                        {/* <ReactApexChart options={optionsYears} series={seriesYears} type="area" height={100} /> */}
                    </div>
                </div>
                <div className='w-[346px] h-[163px] bg-white border relative'>
                    <div className='p-5'>
                        <span className='flex justify-between'>
                            <span className='text-sm text-black'>Transactions</span>
                            <span className='text-sm text-black font-semibold'>-2.87%</span>
                        </span>
                        <h1 className='text-[24px] font-semibold mt-1'>149.7K</h1>
                    </div>
                    <div className='transaction__chart apex__chart flex justify-center absolute top-9 -right-5'>
                        <TransactionChart options={TransactionOptions} series={TransactionSeries} type="area" width={406} height={160} />
                    </div>
                </div>
            </div>
            <div className='w-full xl:w-[719px] border-2 bg-white mt-16 pt-6 px-4 md:px-8'>
                <h6 className='font-bold text-[15px]'>Market overview</h6>
                <div className='flex justify-between flex-wrap gap-y-4'>
                    <p className='text-[13px] text-black '>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
                    <span className='w-[106px] h-[27px] border flex justify-center items-center text-[#bbb] text-[13px] rounded-[2px]'>
                        This month
                    </span>
                </div>
                <div className='flex mt-2 gap-5 items-center'>
                    <h1 className='text-bold text-[30px] text-black'>$36,2531.00</h1>
                    <span className='flex gap-2'>
                        <span className='text-[15px]'>USD</span>
                        <span className='text-sm text-[#06D186] font-bold'>(+1.37%)</span>
                    </span>
                </div>

                <div className='mx-auto flex justify-center items-center apex__chart'>
                    <ReactApexChart options={overviewOptions} series={overviewSeries} type="bar" style={{ width: '100%', height: '350px' }} />
                </div>
            </div>
        </section>
    )
}

export default Global