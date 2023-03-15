import React from 'react'
import Image from 'next/image'
import Product1 from '../public/ecommerce-product-page-main/images/image-product-1.jpg'
import Product2 from '../public/ecommerce-product-page-main/images/image-product-2.jpg'
import Product3 from '../public/ecommerce-product-page-main/images/image-product-3.jpg'
import Product4 from '../public/ecommerce-product-page-main/images/image-product-4.jpg'
import NextSneaker from '../public/ecommerce-product-page-main/images/icon-next.svg'
import PreviousSneaker from '../public/ecommerce-product-page-main/images/icon-previous.svg'
import Plus from '../public/ecommerce-product-page-main/images/icon-plus.svg'
import Minus from '../public/ecommerce-product-page-main/images/icon-minus.svg'
import Cart from '../public/ecommerce-product-page-main/images/icon-cart.svg';
import { AiOutlineShoppingCart } from 'react-icons/ai'


import { useState } from 'react'
const Sneaker = () => {
  const [num, setNum] = useState();

  return (
    <div className='bg-[FF6E00] h-full w-full flex flex-col sm:flex-row sm:justify-center sm:items-center sm:gap-x-12'>
        <div className='relative h-1/3 sm:h-full sm:w-1/2'> 
          <div className='h-full '>
            <Image className='h-full object-cover' src={Product1} alt =""  />
            <Image className='absolute top-[50%] left-[5%]  translate-y-[-50%] bg-white rounded-full h-8 w-8 p-[9.25px] text-center' src={PreviousSneaker} alt ="" />
            <Image className='absolute top-[50%] right-[5%]  translate-y-[-50%] bg-white rounded-full h-8 w-8 p-[9.25px] text-center' src={NextSneaker} alt =""/>
          </div>
        </div> 
        <div className='sm:h-full sm:w-1/2'>
          <div className='h-1/3 p-5 gap-y-5 flex flex-col'>
            <div className='text-sm font-bold text-[#FF6E00]'>Sneaker Company</div>
            <div className='text-xl font-bold'>Fall Limited Edition Sneakers</div>
            <div className='text-xs text-gray-500'>These low-profile sneakers are your perfect casual wear companion. Featuring a 
              durable rubber outer sole, they'll withstand everything the weather can offer.</div>
          </div>
          <div className='h-1/3 flex flex-col w-full px-5'>
            <div className='h-1/2 gap-y-5 flex flex-col w-full '>
              <div className='flex flex-row w-full'>
                  <div className='h-1/2 w-1/2 flex flex-row justify-between'>
                    <div className='text-xl font-bold tracking-wider h-fit '>$125.00</div>
                    <div className='text-sm font-bold text-[#FF6E00] bg-[#ffeedf] p-1 h-fit rounded-lg items-center justify-center'>50%</div>
                  </div>
                  <div className='h-1/2 w-1/2 flex justify-end'>
                    <div className='text-[#babeca] font-bold text-sm p-1 justify-center items-center rounded-lg h-fit'>
                      $250.00
                    </div>
                  </div>
                </div>
              <div className='flex justify-between items-center'>
                <div className='text-[#FF6E00] p-1'>
                  <Image src={Minus} alt="/"/>
                </div>
                <div className='p-1 font-bold text-sm'>0</div>
                <div className='text-[#FF6E00] p-1'>
                  <Image src={Plus} alt="/"/>
                </div>
              </div>
            </div>
            <div>
              <div className='h-1/2 flex flex-row items-center justify-center px-auto w-full py-5 text-sm font-bold text-white bg-[#FF6E00] shadow-lg shadow-[#ffaf72] rounded-lg gap-x-4'> 
                <AiOutlineShoppingCart size={20}/>
                <div>Add to cart</div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Sneaker

