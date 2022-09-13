import React from 'react'
import Layout from '../../components/Layout'

export const UserManagement = () => {
  return (
    <Layout>
        <div className="w-[950px] shadow-md rounded-[20px] bg-white">
            <form className=" w-[835px] px-8 pt-6 pb-8">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm mb-2" for="username">
                        Name
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="" />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm mb-2" for="username">
                        UserName
                    </label>
                    <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700  leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="" />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm mb-2" for="username">
                        Email
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="" />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm mb-2" for="password">
                        Password
                    </label>
                    <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="" />
                </div>

                {/* <!-- This example requires Tailwind CSS v2.0+ --> */}
                <div class="relative inline-block text-left">
                    <div>
                        <button type="button" class="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100" id="menu-button" aria-expanded="true" aria-haspopup="true">
                        Options
                        {/* <!-- Heroicon name: mini/chevron-down --> */}
                        <svg class="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
                        </svg>
                        </button>
                    </div>

                    
                    <div class="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                        <div class="py-1" role="none">
                        {/* <!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" --> */}
                        <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-0">Account settings</a>
                        <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-1">Support</a>
                        <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-2">License</a>
                       
                        </div>
                    </div>
                </div>

                
                <div className="flex items-center">
                    <button className="bg-primary h-7 w-[190px] float-right hover:bg-blue-700 text-white font-semibold  px-4 rounded-lg focus:outline-none focus:shadow-outline" type="button">
                        Save
                    </button>
                </div>
                
            </form>
            
        </div>
    </Layout>
  )
}
