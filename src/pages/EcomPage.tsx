import React from 'react'
import EcomNav from '../../components/EcomNav'
import Sneaker from '../../components/Sneaker'
const EcomPage = () => {
  return (
    <div className='font-body font-kumbh-sans h-screen w-screen'>
        <EcomNav />
        <div className='sm:mx-20 sm:my-16 lg:mx-48 lg:my-20'>
          <Sneaker />
        </div>
    </div>
  )
}

export default EcomPage;