import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Photo from '../../public/news-homepage-main/assets/images/image-top-laptops.jpg'
import { useRouter } from 'next/router'
import {CopyToClipboard} from 'react-copy-to-clipboard';
import useSwr from "swr";

type UrlType = {
    short_link: string;
    original_link: string;
}

const a = () => {

    const fetcher = (url:string) => fetch(`https://api.shrtco.de/v2/shorten?url=${url}`).then(res=> res.json());


    const [inputValue, setInputValue] = useState("Loading...");
    const [data, setdata] = useState<any[]>([]);
    
    const [copied, setCopied] = useState<string[]>([""]);

  
    const handleClick = async () => {
        const _data = await fetcher(inputValue);
        setdata([ ...data, _data.result]);
    }

    const showShorten = () => {
        return data && data?.map((url: any, index:number) => {
            return (
                <div key={index} className='px-6'>
                    <div className='pb-3 gap-y-5 flex flex-col mb-10 w-full'>
                        <div className='w-full flex justify-center items-center'>
                            <div className='bg-white h-fit rounded-xl flex w-full flex-col'>
                                <div className='w-full text-black p-4 border-b border-gray-300 truncate'>
                                    {url.original_link}
                                </div>
                                <div className='w-full p-4 flex flex-col gap-y-3'>
                                    <div className='w-full truncate text-[#2acfcf]'>
                                        {url.short_link}    
                                    </div>
                                    <CopyToClipboard 
                                        text={url.short_link}
                                        onCopy={()=>setCopied([...copied, "Copied"])}
                                    > 
                                        <button className={copied[index+1]? 'w-full p-3 rounded-xl text-center font-bold text-white bg-[#3b3054] ':'w-full p-3 rounded-xl text-center font-bold text-white bg-[#2acfcf]'}>
                                            { copied[index+1] === "Copied" ? "Copied!" : "Copy"}
                                        </button>
                                    </CopyToClipboard>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        })
    }




    return (
        <div className='h-screen w-screen text-white bg-red-400 font-inter flex items-center justify-center flex-col'>
        
        
        
            <div className='px-6 w-full flex justify-center items-center'>
                <div style={{ backgroundImage: `url(/url-shortening-api-master/url-shortening-api-master/images/bg-shorten-mobile.svg)`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'right top',
                }} className='bg-[#3b3054] w-full h-full p-5 rounded-xl flex flex-col gap-y-3'>
                    <input 
                        placeholder='Shorten a link here...' 
                        className='p-3 rounded-xl px-6 text-gray-500 bg-white truncate'
                        onChange={(e)=>setInputValue(e.target.value)}
                    />       
                    <button onClick={handleClick} className='w-full p-3 rounded-xl text-center font-bold text-white bg-[#2acfcf]'>
                        Shorten it!
                    </button>                 
                </div>
            </div>
            
            
            

            

            



        </div>
  )
}

export default a