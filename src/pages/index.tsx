import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Photo from '../../public/news-homepage-main/assets/images/image-top-laptops.jpg'
import { useRouter } from 'next/router'
import {CopyToClipboard} from 'react-copy-to-clipboard';
import useSwr from "swr";


const index = () => {
    const router = useRouter()

    return (
        <div className='h-screen w-screen text-white bg-red-400 font-inter flex items-center justify-center flex-col'>

            <div className='flex flex-col w-full justify-center items-center gap-y-3'>
                <button onClick={() => router.push('/EcomPage')} className='p-3 hover:text-2xl bg-black cursor-pointer rounded-full px-5'>Ecommerce Page</button>
                {/* <button onClick={() => router.push('/newsHomePage')} className='p-3 hover:text-2xl hover:bg-black cursor-pointer rounded-full px-5'>News Page</button>
                <button onClick={() => router.push('/notiPage')} className='p-3 hover:text-2xl hover:bg-black cursor-pointer rounded-full px-5'>Notification Page</button>
                <button onClick={() => router.push('/resultsSum')} className='p-3 hover:text-2xl hover:bg-black cursor-pointer rounded-full px-5'>Results Summary Page</button> */}
                <button onClick={() => router.push('/shortlyPage')} className='p-3 hover:text-2xl bg-black cursor-pointer rounded-full px-5'>Shortly Page</button>
                <button onClick={() => router.push('/a')} className='p-3 hover:text-2xl bg-black cursor-pointer rounded-full px-5'>A</button>
                
            </div>
        </div>
    )
}

export default index





