import React from 'react'
import Range from './Slider';
const Sidebar = () => {
  return (
    <div className=''>
      <ul className=''>
        <li>
          <span className='font-bold'>
            POPULARITY
          </span>
          <ul className='mt-2'>
            <li>
              <label>
                <input type='checkbox' />Nano(1k-9k)
              </label>
            </li>
            <li>
              <label>
                <input type='checkbox' />Micro(100k-999k)
              </label>
            </li>
            <li>
              <label>
                <input type='checkbox' />Macro(1M-10M)
              </label>
            </li>
            <li>
              <label>
                <input type='checkbox' />Custom
              </label>
            </li>
            <li>
              <label>
                <div className=''>
                  <Range />
                </div>
                <div>
                  <ul className='flex justify-between w-40'>
                    <li>0M</li>
                    <li>10M</li>
                  </ul>
                </div>
              </label>
            </li>
          </ul>
        </li>


        <li>
          <span className='font-bold mt-2'>
            CAMPAIGN REFERENCE
          </span>
          <ul className='mt-2'>
            <li>
              <label>
                <input type='checkbox' />Barter
              </label>
            </li>
            <li>
              <label>
                <input type='checkbox' />Paid
              </label>
            </li>
          </ul>
        </li>

        <li>
          <span className='font-bold mt-2'>
            PLATFORM
          </span>
          <ul className='mt-2'>
            <li>
              <label>
                <input type='checkbox' />Youtube
              </label>
            </li>
            <li>
              <label>
                <input type='checkbox' />Instagram
              </label>
            </li>
          </ul>
        </li>


        <li>
          <div className='font-bold'>ENGAGEMENT RATE
          </div>
          <div className=''>
            <Range />
          </div>
          <div>
            <ul className='flex justify-between w-40'>
              <li>0M</li>
              <li>10M</li>
            </ul>
          </div>
        </li>

        <li>
          <div className='font-bold'>AVERAGE</div>
          <div className=''>
            <Range />
          </div>
          <div>
            <ul className='flex justify-between w-40'>
              <li>0M</li>
              <li>10M</li>
            </ul>
          </div>
        </li>

        <li>
          <span className='font-bold mt-2'>
            CATEGORIES
          </span>
          <ul>
            <li>
              <label>
                <input className='h-10 px-2 border-b-2 border-black focus:outline-none' type='text' placeholder='Search Category....' />
              </label>
            </li>
            <li>
              <label>
                <input type='checkbox' />Autos & Vehicles
              </label>
            </li>
            <li>
              <label>
                <input type='checkbox' />Animation
              </label>
            </li>
            <li>
              <label>
                <input type='checkbox' />Agricultue & Allied Sectors
              </label>
            </li>
            <li>
              <label>
                <input type='checkbox' />Art and Craft
              </label>
            </li>
            <li>
              <label>
                <input type='checkbox' />Beauty
              </label>
            </li>
            <li>
              <label>
                <input type='checkbox' />Blogs and Travel
              </label>
            </li>
          </ul>
        </li>

        <li className='mt-2 text-blue-400'>
          more category
        </li>

      </ul>
    </div>
  )
}

export default Sidebar