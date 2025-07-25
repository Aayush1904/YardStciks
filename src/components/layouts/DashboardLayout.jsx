import React from 'react'
import Navbar from './Navbar'
import SideMenu from './SideMenu'

const DashboardLayout = ({children , activeMenu}) => {
  return (
    <div className=''>
      <Navbar activeMenu = {activeMenu} />

      <div className='flex'>
        <div className='max-[1080px]:hidden'>
            <SideMenu activeMenu = {activeMenu} />
        </div>
        <div className='grow mx-5'>
            {children}
        </div>
      </div>
    </div>
  )
}

export default DashboardLayout
