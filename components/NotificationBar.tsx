import React from 'react'

const NotificationBar = () => {
  return (
    <div className='w-1/2 flex flex-row justify-between items-center mt-16'>
        <div className='flex flex-row '>
            <div className='font-bold text-2xl'>
            Notifications
            </div>
            <div className='flex items-center mx-4 px-3 text-white bg-blue-900 rounded-md'>
            3
            </div>
        </div>
        <div className='text-gray-500 hover:cursor-pointer hover:text-blue-500 '>
            Mark all as read
        </div>
    </div>
  )
}

export default NotificationBar