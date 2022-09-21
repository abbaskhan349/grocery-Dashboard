import React from 'react'
import Aside from './Aside'
import Header from './Header'

const index = ({children}) => {
  return (
    <section className='flex bg-primaryExtraLight pt-5'>
        <Aside className="" />
        <div className='pl-[250px]'>
            <Header/>
            <main className='mt-8'>{children}</main>
        </div>
    </section>
  )
}

export default index