import React from 'react';
import Logo from '../public/ecommerce-product-page-main/images/logo.svg';
import Image from 'next/image';
import Cart from '../public/ecommerce-product-page-main/images/icon-cart.svg';
import Profile from '../public/ecommerce-product-page-main/images/image-avatar.png';
import Menu from '../public/ecommerce-product-page-main/images/icon-menu.svg'
import Close from '../public/ecommerce-product-page-main/images/icon-close.svg'
import { useState } from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { useCartStore } from '../components/Sneaker'
import { FaTrashAlt } from 'react-icons/fa'


const EcomNav = () => {
    const [nav,setNav]= useState(false);
    const [showCart,setShowCart]= useState(false);
    
    const cartNum = useCartStore(state => state.cartNum);
    const setCartNum = useCartStore( state => state.setCartNum);
    const resetCartNum = useCartStore(state => state.resetCartNum)
    

    const handleNav = () => {
        setNav(!nav);
    }

    const handleCart = () => {
        setShowCart(!showCart);
    }

    return (
        <div className='mx-4 sm:mx-12 md:mx-14 lg:mx-32 border-b border-b-gray-300'>
            <div className='body-font font-kumbh-sans h-16 sm:h-24 w-full flex flex-row justify-between items-center sm:gap-x-4 md:gap-x-8'>
                <div className='flex flex-row gap-4 sm:gap-x-8 md:gap-x-8 lg:gap-x-12 items-center h-full'>
                    <Image onClick={handleNav} className='sm:hidden cursor-pointer' src ={Menu} alt ="/" />
                    <div>
                        <Image className='w-24 sm:w-28 md:w-44 h-full'  src={Logo} alt="/" />
                    </div>
                    <ul className='hidden sm:flex flex-row sm:gap-x-4 lg:gap-x-10 text-gray-500 text-xs sm:text-base lg:text-lg sm:h-full sm:justify-center sm:items-center'>
                        <div className='h-full flex items-center cursor-pointer border-b-[#FF6E00] hover:border-b-4'>Collections</div>
                        <div className='h-full flex items-center cursor-pointer border-b-[#FF6E00] hover:border-b-4'>Men</div>
                        <div className='h-full flex items-center cursor-pointer border-b-[#FF6E00] hover:border-b-4'>Women</div>
                        <div className='h-full flex items-center cursor-pointer border-b-[#FF6E00] hover:border-b-4'>About</div>
                        <div className='h-full flex items-center cursor-pointer border-b-[#FF6E00] hover:border-b-4'>Contact</div>
                    </ul>
                </div>

                <div className={!nav ? "relative left-[-200%] top-[-200%]" : 'absolute top-0 left-0 w-full h-full bg-black/50 z-50 sm:hidden'}>
                    <div className='p-6 w-3/4 h-full bg-white'>
                        <div onClick={handleNav}>
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

                <div className='z-20 flex flex-row gap-x-4 items-center lg:gap-x-10'>
                    <div onClick={handleCart} className='relative cursor-pointer'>
                        
                        <div className={cartNum === 0? "" : "absolute flex text-[0.60rem] sm:text-xs font-bold px-[0.35rem] py-[0.075rem] sm:px-2 sm:py-1 text-white bg-[#FF6E00] rounded-full items-center justify-center right-[-25%] top- sm:top-0  translate-y-[-25%] "}>{cartNum !== 0 && cartNum}</div>
                        <AiOutlineShoppingCart  className='text-gray-500 sm:h-8 sm:w-8' size={20}/>

                    </div>
                    <div className='border rounded-full cursor-pointer bg-[#FF6E00] p-[1px] w-6 h-6 sm:w-8 sm:h-8 md:h-12 md:w-12'>
                        <Image className='object-cover' src={Profile} alt="" />
                    </div> 
                    
                </div>
            </div>

            {showCart? <div className='z-10 absolute top-0 left-0 w-full sm:w-1/3 sm:top-0 sm:left-2/3 h-1/3 flex items-start justify-center'>
                <div className='w-full h-full mt-16 p-4 pb-16 '>
                    <div className='bg-white w-full h-full drop-shadow-2xl rounded-xl'>
                        <div className='p-6 border-b border-b-black h-1/3'>
                            <div className='font-bold '>
                                <p>Cart</p>
                            </div>
                        </div>
                        
                        {cartNum === 0 ? 
                        <div className='flex justify-center items-center font-bold h-2/3 text-gray-500'>
                            Your cart is empty.
                        </div> :
                        <div className='h-2/3 w-full'>
                            <div className='h-1/2 p-6 flex flex-row justify-between items-center'>
                                <div className='h-12 w-12'>
                                    <img className='rounded-lg' src="/ecommerce-product-page-main/images/image-product-1.jpg" alt="/" />
                                </div>
                                <div className='text-gray-500'>
                                    Fall Limited Edition Snerakers <br/>
                                    $125.00 x {cartNum} <span className='font-bold text-black'>${cartNum*(125.00)}.00</span>
                                </div>
                                <div onClick={resetCartNum} className='text-gray-300 z-20 cursor-pointer'>
                                    <FaTrashAlt size={20}/>
                                </div>
                            </div>
                            <div className='flex justify-center bg-[#FF6E00] mx-6 py-4 rounded-lg text-white font-bold cursor-pointer'>
                                Checkout
                            </div>
                        </div>}
                        
                    </div>  
                </div>

            </div> : <></>}
        </div>
    )
}

export default EcomNav;



