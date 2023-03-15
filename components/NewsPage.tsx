import React from 'react'
import Image from 'next/image'
import TheBright from '../public/news-homepage-main/assets/images/image-web-3-desktop.jpg'
import GrowthGaming from '../public/news-homepage-main/assets/images/image-gaming-growth.jpg'
import TopLabtop from '../public/news-homepage-main/assets/images/image-top-laptops.jpg'
import RevivingRetro from '../public/news-homepage-main/assets/images/image-retro-pcs.jpg'

const NewsPage = () => {
  return (
    <div className='grid grid-cols-3 grid-rows-3 h-[730px] gap-4 lg:gap-8'>
      <div className='col-span-2 row-span-2 flex flex-col max-h-full max-w-full gap-y-4 lg:gap-y-8 '>
        <div className='flex w-full h-2/3 bg-red-300'>
          <Image className='object-cover' src={TheBright} alt='' />
        </div>
        <div className='flex w-full h-1/3 gap-x-4 lg:gap-x-8'>
          <div className='w-1/2 text-4xl xl:text-5xl font-bold'>
            The Bright Future of Web 3.0?
          </div>
          <div className='w-1/2 relative'>
            <div className='absolute inset-x-0 top-0 text-sm lg:text-base xl:text-md tracking-wide text-gray-600'>
              We dive into the next evolution of the web that claims to put the power of the people. But is it really fulfilling its promise?
            </div>
            <div className='absolute inset-x-0 bottom-0 tracking-widest py-2 px-8 font-semibold text-sm bg-red-500 text-white w-fit'>
              READ MORE
            </div>
          </div>
        </div> 
      </div>
      <div className='row-span-2 bg-black text-white px-4 py-6'>
        <div className='text-amber-300 font-bold text-2xl xl:text-3xl '>
          New
        </div>
        <div className='mt-6 border-b pb-6 text-sm xl:text-base'>
          <div className='font-bold '>
            Hydrogen VS Electric Cars
          </div>
          <div className='text-gray-300 pt-2'>
            Will hydrogen-fueled cars ever catch up to EVs?
          </div>
        </div>
        <div className='mt-6 border-b pb-6 text-sm xl:text-base'>
          <div className='font-bold'>
            The Downsides of AI Artistry
          </div>
          <div className='text-gray-300 pt-2'>
            What are the possitive adverse effects of on-demand AI image generation?
          </div>
        </div>
        <div className='mt-6 text-sm xl:text-base'>
          <div className='font-bold'>
            Is VC Funding Drying Up?
          </div>
          <div className='text-gray-300 pt-2'>
            Private funding by VC firms is down 50% YOY. We take a look at what that means.
          </div>
        </div>
      </div>
      <div className='flex flex-row'> 
        <Image className='w-1/3 h-full object-cover' src={RevivingRetro} alt='/'/>
        <div className='flex flex-col w-2/3 h-full p-4 gap-y-1 xl:gap-y-4 items-center justify-center'>
          <div className='text-gray-500 font-bold tracking-wide text-2xl xl:text-4xl w-full'>01</div>
          <div className='font-bold text-lg xl:text-xl w-full'>Reviving Retro PCs</div>
          <div className='text-gray-500 xl:text-xl'>What happens when did PCs are given modern upgrades?</div>
        </div>
      </div>
      <div className='flex flex-row'> 
        <Image className='w-1/3 h-full object-cover' src={TopLabtop} alt='/'/>
        <div className='flex flex-col w-2/3 h-full p-4 gap-y-1 xl:gap-y-4 items-center justify-center'>
          <div className='text-gray-500 text-2xl xl:text-4xl w-full'>02</div>
          <div className='font-bold text-lg xl:text-xl w-full'>Top 10 Laptops of 2022</div>
          <div className='text-gray-500 xl:text-xl'>Out best picks for various needs and budgets.</div>
        </div>
      </div>
      <div className='flex flex-row'> 
        <Image className='w-1/3 h-full object-cover' src={GrowthGaming} alt='/'/>
        <div className='flex flex-col w-2/3 h-full p-4 gap-y-1 xl:gap-y-4 items-center justify-center'>
          <div className='text-gray-500 text-2xl xl:text-4xl w-full'>03</div>
          <div className='font-bold text-lg xl:text-xl w-full'>The Growth of Gaming</div>
          <div className='text-gray-500 xl:text-xl'>How the pandemic has sparked fresh opportunities.</div>
        </div>
      </div>
    </div>
   
  )
}

export default NewsPage