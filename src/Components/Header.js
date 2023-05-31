import React from 'react'
import { Link } from 'react-router-dom'
import bell from '../assets/bell.png'
import logo from '../assets/logo.png'
import user from '../assets/user.png'
const Header = () => {
    return (
        <div className='top-0 sticky bg-white z-30'>
            <ul className='flex shadow-md h-16 justify-between m-6 pt-4 mb-2 rounded-full border-solid border-1 p-2'>
                <li className='h-6'>
                    <img className='h-8 ml-2' src={logo} alt='Not found' />
                </li>
                <li className='flex space-x-8'>
                    <Link to='/'>
                        <li className='text-xl hover:border-b-blue-400 hover:border-b-2'>
                            Home
                        </li>
                    </Link>
                    <Link to='/campaign'>
                        <li className='text-xl hover:border-b-blue-400 hover:border-b-2'>
                            Campaign
                        </li>
                    </Link>
                </li>


                <li className='h-6 flex'>
                    <img className='h-8 mr-2' src={bell} alt='Not found' />
                    <img className='h-8 ml-4 mr-2' src={user} alt='Not found' />
                </li>
            </ul>

        </div>
    )
}

export default Header