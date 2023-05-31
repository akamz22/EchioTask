import React from 'react'
import User from '../assets/cardimg.jpg'

const UserCard = () => {
    return (
        <div className='m-8 shadow-md border-1 border-gray-500 flex'>
            <div className='flex'>
                <img className='p-4 w-60 h-60' src={User} alt='Not Found' />
                <div className=''>
                    <ul className='mt-6'>
                        <li>
                            <span className='font-bold'>
                                Name
                            </span>
                        </li>
                        <li>

                            <span className=' py-4 w-auto'>
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.
                            </span>
                        </li>
                        <li className='mt-2'>
                            <span className='font-bold'>Instagram</span>
                        </li>
                    </ul>
                    <ul className='mt-2 flex'>
                        <li>
                            <button className='text-white bg-green-500 rounded-md px-2'>Accepted</button>
                        </li>
                        <li>
                            <button className='text-white bg-purple-500 ml-4 rounded-md px-2'>Barter</button>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='m-10'>
                <ul>
                    <li className='text-white border-2 my-2 bg-indigo-500 border-indigo-500 px-4 rounded-md'>
                        DETAILS
                    </li>
                    <li className='text-indigo-500 my-6 border-2 border-black-200 px-4 rounded-md'>
                        INVITE
                    </li>
                    <li className='text-indigo-500 my-6 px-4 rounded-md'>
                        ANALYSE
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default UserCard