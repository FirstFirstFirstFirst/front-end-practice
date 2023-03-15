import React from 'react'
import Image from 'next/image'
import Photo from '../../public/news-homepage-main/assets/images/image-top-laptops.jpg'

const index = () => {
  return (
    <div className='h-screen bg-red-500'>
      {/* <img className='h-screen' src="image-top-laptops.jpg" alt="" /> */}
      <Image className='h-screen' src={Photo} alt='' />
    </div>
  )
}

export default index