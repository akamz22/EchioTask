import React from 'react'
import UserCard from './UserCard'

const Userdetails = () => {
  return (
    <div>
      <div>
        <span className='font-bold'>
          Sort by
        </span>
        <ul className='flex justify-between mt-2'>
          <ul className='flex mx-2'>
            <li className='ml-2 bg-gray-400 px-2 rounded-full'>High to Low</li>
            <li className='ml-2 bg-gray-400 px-2 rounded-full'>Low to High</li>
            <li className='ml-2 bg-gray-400 px-2 rounded-full'>Newest</li>
            <li className='ml-2 bg-blue-500 px-2 rounded-full'>Popular</li>
          </ul>
          <ul className='flex mx-2'>
            <li className='ml-2 text-indigo-500'>SELECT ALL</li>
            <li className='ml-2 text-indigo-500 border-2 rounded-md border-indigo-500 px-2'>INVITE</li>
            <li className='ml-2 text-white bg-indigo-500 px-2 rounded-md'>ADD CAMPAIGN</li>
          </ul>
        </ul>
      </div>
      {
        Array(5).fill(<UserCard />)
      }
    </div>
  )
}

export default Userdetails