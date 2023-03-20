import React from 'react'
import Image from 'next/image'
import NextSneaker from '../public/ecommerce-product-page-main/images/icon-next.svg'
import PreviousSneaker from '../public/ecommerce-product-page-main/images/icon-previous.svg'
import Plus from '../public/ecommerce-product-page-main/images/icon-plus.svg'
import Minus from '../public/ecommerce-product-page-main/images/icon-minus.svg'
import { AiOutlineShoppingCart, AiOutlineClose } from 'react-icons/ai'
import { useState } from 'react'
import { create } from 'zustand'
import Close from '../public/ecommerce-product-page-main/images/icon-close.svg'


type CartStateType = {
  cartNum: number;
  show: boolean;
  setCartNum: Function;
  resetCartNum: Function;
  showCartList: Function;
  }

export const useCartStore = create((set:Function) => ({
  cartNum: 0,
  show: false,
  setCartNum: (num:number) => set((state: CartStateType) => ({ cartNum: num + state.cartNum })),
  resetCartNum: () => set({ cartNum: 0 }),
  showCartList: () => set((state: CartStateType) => ({ show : !state.show })),
}));

type NumStateType = {
  num: number;
  increaseNum: Function;
  decreaseNum: Function;
  }

const useNumStore = create((set:Function) => ({
  num: 0,
  increaseNum: () => set((state: NumStateType) => ({ num: state.num + 1 })),
  decreaseNum: () => set((state: NumStateType) => (state.num === 0 ? { num: 0 }: { num: state.num - 1 })),
}));

const Sneaker = () => {
  
  const slides = [
    {
      src: "/ecommerce-product-page-main/images/image-product-1.jpg"
    },
    {
      src: "/ecommerce-product-page-main/images/image-product-2.jpg"
    },
    {
      src: "/ecommerce-product-page-main/images/image-product-3.jpg"
    },
    {
      src: "/ecommerce-product-page-main/images/image-product-4.jpg"
    },
  ]

  
  const [curIndex, setCurIndex] = useState(0);
  const [showLightBox, setShowLightBox] = useState(false);
  const num = useNumStore(state => state.num);
  const increaseNum = useNumStore( state => state.increaseNum);
  const decreaseNum = useNumStore( state => state.decreaseNum);
  const cartNum = useCartStore(state => state.cartNum);
  const setCartNum = useCartStore( state => state.setCartNum);
  
  
 
  const handleLightBox = () => {
    setShowLightBox(!showLightBox);
  }
  const plusNum = () => {
    increaseNum;
  }
  const minusNum = () => {
    decreaseNum;
  }
  

  const prevSlide = () => {
    const isFirstSlide = curIndex === 0 ; 
    const newIndex = isFirstSlide ? slides.length - 1 : curIndex - 1 ;
    setCurIndex(newIndex);
  }

  const nextSlide = () => {
    const isFirstSlide = curIndex === slides.length - 1 ; 
    const newIndex = isFirstSlide ? 0 : curIndex + 1 ;
    setCurIndex(newIndex);
  }

  return (
    <div className='h-[880px] w-full flex flex-col sm:h-full sm:flex-row sm:justify-between sm:gap-x-12 md:gap-x-16 lg:gap-x-32 sm:items-center  body-font font-kumbh-sans'>
      
      
      
      
      
      {showLightBox? <div className='z-30 absolute top-0 left-0 h-full w-full bg-black/80'>
        <div className='z-40 absolute top-0 left-0 translate-x-[50%] h-full w-1/2 mx-auto bg-blue'>
          <div className='m-auto flex flex-col items-center justify-center w-full h-full opacity-100'>
            <div onClick={handleLightBox} className='cursor-pointer z-40 text-white hover:text-[#FF6E00] w-full flex justify-end my-6'>
              <AiOutlineClose className='h-6 w-auto font-ex '/>
            </div>
            <div className='flex items-center h-auto w-auto '>
              <img className='object-cover max-h-[600px] sm:rounded-xl sm:flex items-center justify-center mx-auto'  src = {slides[curIndex].src} alt= "/" />
            </div>
            <div className='flex flex-row gap-4 sm:gap-9 p-4 sm:p-8'>
              <div className='w-auto h-auto max-h-[150px] max-w-[150px]'>
                <img onClick={() => {setCurIndex(0)}} className={curIndex === 0? "cursor-pointer object-cover rounded-xl opacity-50 w-full h-full": "cursor-pointer object-cover w-full h-full rounded-lg"} src = {slides[0].src} alt= "/"  />
              </div>
              <div className='w-auto h-auto max-h-[150px] max-w-[150px]'>
                <img onClick={() => {setCurIndex(1)}} className={curIndex === 1? "cursor-pointer object-cover rounded-xl opacity-50 w-full h-full": "cursor-pointer object-cover w-full h-full rounded-lg"} src = {slides[1].src} alt= "/"  />
              </div>
              <div className='w-auto h-auto max-h-[150px] max-w-[150px]'>
                <img onClick={() => {setCurIndex(2)}} className={curIndex === 2? "cursor-pointer object-cover rounded-xl opacity-50 w-full h-full": "cursor-pointer object-cover w-full h-full rounded-lg"} src = {slides[2].src} alt= "/"  />
              </div>
              <div className='w-auto h-auto max-h-[150px] max-w-[150px]'>
                <img onClick={() => {setCurIndex(3)}} className={curIndex === 3? "cursor-pointer object-cover rounded-xl opacity-50 w-full h-full": "cursor-pointer object-cover w-full h-full rounded-lg"} src = {slides[3].src} alt= "/"  />
              </div>
            </div>
          </div>
          
        </div>
      </div>: <></>}






      <div className='w-full h-1/3 sm:w-1/2 sm:h-2/3 lg:h-[700px] '>
          <div className='w-full h-full sm:h-4/5 relative'>
            <div className='h-full w-full'>
              <img onClick={handleLightBox} className='cursor-pointer object-cover sm:rounded-xl h-full w-full sm:flex items-center justify-center mx-auto'  src = {slides[curIndex].src} alt= "/" />
            </div>
            <Image onClick={prevSlide} className='cursor-pointer absolute top-[50%] left-[5%] sm:translate-y-[-200%] md:translate-y-[-150%] translate-y-[-50%] bg-white rounded-full h-8 w-8 p-[9.25px] text-center' src={PreviousSneaker} alt ="" />
            <Image onClick={nextSlide} className='cursor-pointer absolute top-[50%] right-[5%] sm:translate-y-[-200%] md:translate-y-[-150%] translate-y-[-50%] bg-white rounded-full h-8 w-8 p-[9.25px] text-center' src={NextSneaker} alt ="" />
          </div>
            
          <div className='hidden sm:flex flex-row pt-4 md:pt-6 justify-between w-full h-1/5 gap-x-2 md:gap-6  '>
            <div className='w-1/4 h-full'>
              <img onClick={() => {setCurIndex(0)}} className={curIndex === 0? "cursor-pointer object-cover rounded-xl opacity-50 w-full h-full": "cursor-pointer object-cover w-full h-full rounded-lg"} src = {slides[0].src} alt= "/"  />
            </div>
            <div className='w-1/4 h-full'>
              <img onClick={() => {setCurIndex(1)}} className={curIndex === 1? "cursor-pointer object-cover rounded-xl opacity-50 w-full h-full": "cursor-pointer object-cover w-full h-full rounded-lg"} src = {slides[1].src} alt= "/"  />
            </div>
            <div className='w-1/4 h-full'>
              <img onClick={() => {setCurIndex(2)}} className={curIndex === 2? "cursor-pointer object-cover rounded-xl opacity-50 w-full h-full": "cursor-pointer object-cover w-full h-full rounded-lg"} src = {slides[2].src} alt= "/"  />
            </div>
            <div className='w-1/4 h-full'>
              <img onClick={() => {setCurIndex(3)}} className={curIndex === 3? "cursor-pointer object-cover rounded-xl opacity-50 w-full h-full": "cursor-pointer object-cover w-full h-full rounded-lg"} src = {slides[3].src} alt= "/"  />
            </div>
            
          </div>
        </div>

      <div className='w-full h-2/3 sm:w-1/2'>
        <div className='w-full h-1/2'>
            <div className='p-5 gap-y-6 flex flex-col h-full w-full'>
              <div className='text-sm font-bold text-[#FF6E00] uppercase tracking-widest'>Sneaker Company</div>
              <div className='text-3xl font-extrabold tracking-wider lg:text-5xl md:mb-2 lg:mb-6'>Fall Limited Edition Sneakers</div>
              <div className='text-gray-500 sm:text-xs md:mb-2 lg:mb-4 md:text-lg leading-6'>These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.</div>
            </div>
        </div>

        <div className='w-full h-1/2'>
          <div className='w-full h-full'>
            <div className='px-5'>
              <div className='flex flex-row w-full sm:flex-col sm:gap-y-4'>

                <div className='h-1/2 w-1/2 flex flex-row justify-between items-center sm:justify-start sm:gap-x-8 md:gap-x-12 sm:w-full'>
                  <div className='text-3xl font-extrabold tracking-wider h-fit md:text-4xl '>$125.00</div>
                  <div className='text-sm md:text-lg font-extrabold text-[#FF6E00] bg-[#ffeedf] p-1 md:px-2 h-fit rounded-lg items-center justify-center'>50%</div>
                </div>

                <div className='w-1/2 h-1/2 flex justify-end items-center m-auto sm:justify-start sm:w-full'>
                  <div className='text-[#babeca] line-through font-extrabold text-sm md:text-lg p-1 md:px-2 justify-center items-center rounded-lg h-fit'>
                    $250.00
                  </div>
                </div>

              </div>

            </div>
            <div className='px-5 w-full h-1/2 mt-6 gap-y-6 flex flex-col sm:flex-row  sm:gap-x-4 md:gap-x-8 sm:items-center'>

              <div className='sm:w-1/3 sm:h-full sm:flex sm:justify-center sm:text-xs'>
                <div className='flex justify-between items-center px-4 sm:p-0 sm:w-full'>
                  <div className='w-full p-4 sm:py-4 sm:px-2 md:px-4 flex justify-between bg-gray-50 items-center rounded-xl'>

                    <div className='text-[#FF6E00] p-1 w-fit sm:w-5 h-fit sm:h-5 flex sm:items-center sm:justify-items-center' >
                        <Image className='cursor-pointer' onClick={decreaseNum} src={Minus} alt="/"/> 
                    </div>

                    <div className='p-1 font-bold text-sm md:text-lg'>{num}</div>

                    <div className='text-[#FF6E00] p-1 w-fit sm:w-5 h-fit sm:h-5 flex sm:items-center sm:justify-items-center' >
                        <Image className='cursor-pointer' onClick={increaseNum} src={Plus} alt="/"/>
                    </div>
                  </div>
                </div>
              </div>

              <div className='sm:w-2/3 sm:h-full cursor-pointer'>
                <div className='w-full p-4 sm:p-0 flex justify-between items-center '>
                  <div onClick={() => setCartNum(num)} className='w-full'>
                    <div className='h-1/2 flex flex-row items-center justify-center px-2 w-full py-5 text-sm font-bold text-white bg-[#FF6E00] shadow-lg shadow-[#ffaf72] gap-x-4 sm:gap-x-2 md:gap-x-4 lg:gap-x-6 rounded-xl'> 
                      <AiOutlineShoppingCart className='md:h-8 md:w-8' size={20}/>
                      <div className='sm:text-xs md:text-lg'>Add to cart</div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
      
    </div>
    
  )
}

export default Sneaker






