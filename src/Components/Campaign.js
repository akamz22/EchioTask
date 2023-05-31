import React from 'react'
import Sidebar from './Sidebar'
import Userdetails from './Userdetails'

const Campaign = () => {
  return (
    <div className='flex'>
      <div className='h-[60rem] shadow-md border-[1px] mt-10 ml-10 p-4'>
        <Sidebar />
      </div>
      <div className='m-10 w-[100%] p-2 border-gray-200 shadow-md'>
        <Userdetails />
      </div>
    </div>
  )
}

export default Campaign