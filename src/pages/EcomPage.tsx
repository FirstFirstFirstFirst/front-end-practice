import React from 'react'
import EcomNav from '../../components/EcomNav'
import Sneaker from '../../components/Sneaker'
const EcomPage = () => {
  return (
    <div className='font-body font-kumbh-sans h-screen w-screen'>
        <EcomNav />
        <div className='sm:mx-24 sm:my-16 md:my-20 md:mx-36'>
          <Sneaker />
        </div>
    </div>
  )
}

export default EcomPage