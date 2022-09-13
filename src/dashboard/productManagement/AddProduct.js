import React from 'react'
import Layout from '../../components/Layout';
import LineChart from '../LineChart';

function AddProduct() {
  return (
    <Layout>
      <div className="flex space-x-4 ">
        <div className='bg-white h-[500px] w-[300px] p-4 pt-12 rounded-[24px] shadow space-y-5'>
          <div className="flex space-x-4 items-center">
            <p className="font-semibold">
              All Categories
            </p>
            <img className="h-4 w-4" src="../images/plus.svg" />
          </div>
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <img className='w-11 h-11' src="../images/product.png" />
              <p>Category name</p>
            </div>
            <img src="../images/dots.svg" />
          </div>
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <img className='w-11 h-11' src="../images/product.png" />
              <p>Category name</p>
            </div>
            <img src="../images/dots.svg" />
          </div>
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <img className='w-11 h-11' src="../images/product.png" />
              <p>Category name</p>
            </div>
            <img src="../images/dots.svg" />
          </div>
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <img className='w-11 h-11' src="../images/product.png" />
              <p>Category name</p>
            </div>
            <img src="../images/dots.svg" />
          </div>
        </div>
        <div className="h-[500px] w-[650px] bg-white rounded-[24px] shadow">

        </div>
      </div>
    </Layout>
  )
}

export default AddProduct