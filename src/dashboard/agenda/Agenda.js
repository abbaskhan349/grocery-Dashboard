import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { Scheduler } from "@aldabil/react-scheduler";

import Layout from '../../components/Layout';



const Agenda = () => {
    const EVENTS = [
        {
            event_id: 1,
            title: "Grocey Inspection Team",
            start: new Date("2022 9 13 7:00"),
            end: new Date("2022 9 13 8:00"),
            color: "#2BC8D8"
        },
        {
            event_id: 2,
            title: "Grocey Inspection Team",
            start: new Date("2022 9 11 8:00"),
            end: new Date("2022 9 11 9:00"),
            color: "#2BC8D8"
        },
        {
            event_id: 3,
            title: "Inventory Update",
            start: new Date("2022 9 14 8:00"),
            end: new Date("2022 9 14 9:00"),
            color: '#52B467'
        },
        {
            event_id: 4,
            title: "Doctor Website Client Call",
            start: new Date("2022 9 13 9:00"),
            end: new Date("2022 9 13 10:00"),
            color: '#FF6E6E'
        },
        {
            event_id: 5,
            title: "Grocey Inspection Team",
            start: new Date("2022 9 11 10:00"),
            end: new Date("2022 9 11 11:00"),
            color: '#6F52ED'
        },
        {
            event_id: 6,
            title: "Project design meeting",
            start: new Date("2022 9 14 10:00"),
            end: new Date("2022 9 11 14:00"),
            color: '#6F52ED'
        },
    ];
    // const EVENTS = [
    //     {
    //         event_id: 1,
    //         title: "Event 1",
    //         start: new Date("2021 5 2 09:30"),
    //         end: new Date("2021 5 2 10:30"),
    //         disabled: true
    //     },
    //     {
    //         event_id: 2,
    //         title: "Event 2",
    //         start: new Date("2021 5 4 10:00"),
    //         end: new Date("2021 5 4 11:00"),
    //         color: "green"
    //     },
    //     {
    //         event_id: 3,
    //         title: "Event 3",
    //         start: new Date("2021 4 27 09:00"),
    //         end: new Date("2021 4 28 10:00")
    //     },
    //     {
    //         event_id: 4,
    //         title: "Event 4",
    //         start: new Date("2021 5 4 9:00"),
    //         end: new Date("2021 5 4 10:36")
    //     },
    //     {
    //         event_id: 5,
    //         title: "Event 5",
    //         start: new Date("2021 5 1 10:00"),
    //         end: new Date("2021 5 18 11:00")
    //     },
    //     {
    //         event_id: 6,
    //         title: "Event 6",
    //         start: new Date("2021 5 2 11:00"),
    //         end: new Date("2021 5 2 12:00")
    //     },
    //     {
    //         event_id: 7,
    //         title: "Event 7",
    //         start: new Date("2021 5 1 12:00"),
    //         end: new Date("2021 5 1 13:00")
    //     },
    //     {
    //         event_id: 8,
    //         title: "Event 8",
    //         start: new Date("2021 5 1 13:00"),
    //         end: new Date("2021 5 1 14:00")
    //     },
    //     {
    //         event_id: 9,
    //         title: "Event 11",
    //         start: new Date("2021 5 5 16:00"),
    //         end: new Date("2021 5 5 17:00")
    //     },
    //     {
    //         event_id: 10,
    //         title: "Event 9",
    //         start: new Date("2021 5 6  15:00"),
    //         end: new Date("2021 5 6 16:00")
    //     },
    //     {
    //         event_id: 11,
    //         title: "Event 10",
    //         start: new Date("2021 5 6 14:00"),
    //         end: new Date("2021 5 6 15:00")
    //     }
    // ];


    return (
        <Layout>
            <section className='flex-1 h-auto xl:h-[911px] bg-white rounded-[32px] px-10 py-8 border-2 '>
                <div className='flex justify-between flex-wrap gap-5 px-3'>
                    <h1 className='font-medium text-xl md:text-[24px]'>All Agendas</h1>
                    <Link to="/dashboard/agenda/addagenda">
                        <button
                            className='w-[150px] h-[44px] md:w-[199px] md:h-[48px] text-sm md:text-base text-white bg-primary rounded-xl font-light ml-auto'
                        >New Agenda</button>
                    </Link>
                </div>
                <div className='w-full xl:w-[946px] mt-16 mx-auto agenda_schedular'>
                    <Scheduler
                        view="week"
                        events={EVENTS}
                        selectedDate={new Date()}
                        week={
                            {
                                weekDays: [0, 1, 2, 3, 4, 5],
                                weekStartOn: 6,
                                startHour: 7,
                                endHour: 11,
                                step: 60,
                            }
                        }
                        fields={
                            [
                                {
                                    name: "description",
                                    type: "input",
                                    config: {
                                        label: "Description", required: true, min: 3, variant: "outlined",
                                    }
                                },
                            ]
                        }
                        loading={false}
                    />
                </div>
            </section>
        </Layout>
    )
}


export default Agenda