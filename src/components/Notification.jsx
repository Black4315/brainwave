import React from 'react'
import { notificationImages } from '../constants'
import { notification1 } from '../assets'

const Notification = ({className , title}) => {
  return (
    <div
        className={`${className||''} items-center p-4 pr-6 
        bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl gap-5`}
    >
      <img
        src={notification1}
        width={62}
        height={62}
        alt="image"
        className="rounded-xl"
      />
      <div className='flex-1'>
        <h6 className='mb-1 font-semibold text-base'>{title}</h6>
        <div className='flex justify-between w-full'>
          <div>
            <ul className="flex -m-0.5">
              {
                notificationImages.map((item, index) => (
                  <li key={index} 
                    className='flex rounded-full w-6 h-6 border-2 border-n-12
                        overflow-hidden'>
                    <img src={item} 
                      width={20} 
                      className="w-full"
                      height={20} 
                      alt={item} />

                  </li>
                ))
              }
            </ul>
          </div>
          <span className='body-2 text-n-13'>1m ago</span>
        </div>
      </div>
    </div>
  )
}

export default Notification
