import React from 'react';
import Logo from '../public/ecommerce-product-page-main/images/logo.svg';
import Image from 'next/image';
import Cart from '../public/ecommerce-product-page-main/images/icon-cart.svg';
import Profile from '../public/ecommerce-product-page-main/images/image-avatar.png';
import Menu from '../public/ecommerce-product-page-main/images/icon-menu.svg'
import Close from '../public/ecommerce-product-page-main/images/icon-close.svg'
import { useState } from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai'


const EcomNav = () => {
    const [nav,setNav]= useState(false);

    const handleNav = () => {
        setNav(!nav);
    }

    return (
        <div className='mx-4 sm:mx-16 md:mx-24'>
            <div className='body-font font-kumbh-sans h-12 w-full flex flex-row justify-between items-center sm:gap-x-6'>
                <div className='flex flex-row gap-4 sm:gap-x-12 items-center'>
                    <Image onClick={handleNav} className='sm:hidden' src ={Menu} alt ="/"/>
                    <Image className='w-24 sm:w-28 h-full'  src={Logo} alt="" />
                    <ul className='hidden sm:flex flex-row sm:gap-x-8 text-gray-500 text-xs'>
                        <li>Collections</li>
                        <li>Men</li>
                        <li>Women</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div className={!nav ? "relative left-[-200%]" : 'absolute top-0 left-0 w-full h-full bg-black/50 z-50 sm:hidden'}>
                    <div className='p-6 w-3/4 h-full bg-white'>
                        <div onClick={handleNav} >
                            {!nav ? <div></div> : <Image className='' src ={Close} alt ="/" />}
                        </div>
                        <div className={!nav ? "absolute" : "flex flex-col font-bold text-xl gap-6 duration-300 ease-linear mt-24" }>
                            <div>Collections</div>
                            <div>Men</div>
                            <div>Women</div>
                            <div>About</div>
                            <div>Contact</div>
                        </div>
                    </div>
                </div>
                <div className='flex flex-row gap-x-4 items-center'>
                    <AiOutlineShoppingCart className='text-gray-500'  size={20}/>
                    <div className='border rounded-full bg-[#FF6E00] p-[1px] w-6 h-6'>
                        <Image className='object-cover' src={Profile} alt=""/>
                    </div> 
                    
                </div>
            </div>
        </div>
    )
}

export default EcomNav;



