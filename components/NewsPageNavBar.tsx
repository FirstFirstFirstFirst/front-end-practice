import React from 'react'
import Image from 'next/image'
import Logo from '../public/news-homepage-main/assets/images/logo.svg'

const NavBar = () => {
  return (
    <div className='flex flex-row justify-between mb-8 '>
        <div className='flex justify-center items-center text-6xl font-bold'>
            <Image src={Logo} alt='/'/>
        </div>
        <ul className='flex flex-row justify-center items-center gap-x-6'>
            <li>Home</li>
            <li>New</li>
            <li>Popular</li>
            <li>Trending</li>
            <li>Categories</li>
        </ul>
    </div>
  )
}

export default NavBar