import React, { useState } from 'react'
import Logo from '../public/url-shortening-api-master/url-shortening-api-master/images/logo.svg'
import Image from 'next/image'
import {AiOutlineMenu } from "react-icons/ai"
const ShortNav = () => {

  const [nav,setNav]= useState(false);
  const handleNav = () => {
    setNav(!nav);
  }

  return (
    <div className='mx-6 md:mx-12 lg:mx-24 font-poppins font-bold'>
        <div className='flex flex-row justify-between items-center h-24 text-gray-500'>
            <div className='flex md:gap-x-0 lg:gap-x-6 items-center h-full'>
                <Image src={Logo} alt=''/>
                <div className='hidden md:flex flex-row gap-x-8 lg:gap-x-12'>
                  <div className='md:ml-12'>Features</div>
                  <div className='md:flex'>Pricing</div>
                  <div>Resources</div>
                </div>
            </div>
            <div className='hidden md:flex flex-row justify-center items-center gap-x-6'>
                <div>Login</div>
                <div className='text-white rounded-full bg-[#2acfcf] p-1 px-5'>Sign up</div>
            </div>
            <div onClick={handleNav} className='z-10 cursor-pointer md:hidden'>
              <AiOutlineMenu size={30}/>
            </div>
        </div>
        {nav? <div className="absolute top-0 left-0 w-full h-full duration-300 ease-in md:hidden">
          <div className='w-full h-full flex'>
            <div className='flex flex-col p-6 py-10 justify-center items-center h-fit w-full bg-[#3b3054] text-white mx-6 mt-32 rounded-xl'>
              <div className='flex flex-col border-b border-b-white w-full pb-4  gap-y-2'>
                <div className='w-full flex items-center justify-center p-3'>Features</div>
                <div className='w-full flex items-center justify-center p-3'>Pricing</div>
                <div className='w-full flex items-center justify-center p-3'>Resources</div>
              </div>
              <div className='flex flex-col pt-4 gap-y-2 w-full'>
                <div className='w-full flex items-center justify-center p-3'>Login</div>
                <div className='w-full flex items-center justify-center p-3 rounded-full bg-[#2acfcf]'>Sign up</div>
              </div>
            </div>
          </div>
        </div> : <></>}
    </div>
  )
}

export default ShortNav;