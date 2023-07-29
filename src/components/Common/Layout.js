import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Sidebar from './Sidebar'
import { Toaster } from 'react-hot-toast'

const Layout = ({ children }) => {
    return (
        <div className='flex flex-col gap-10 mb-10'>
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
            <Header />

            <div className='flex gap-10  '>
                <div>
                    <Sidebar />
                </div>
                <div className=''>
                    {children}
                </div>
            </div>

        </div>
    )
}

export default Layout