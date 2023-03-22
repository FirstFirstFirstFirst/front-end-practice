import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Working from "../public/url-shortening-api-master/url-shortening-api-master/images/illustration-working.svg"
import Brand from "../public/url-shortening-api-master/url-shortening-api-master/images/icon-brand-recognition.svg"
import { AiFillFacebook, AiOutlineTwitter } from 'react-icons/ai'
import { FaInstagram } from 'react-icons/fa'
import { BsPinterest } from 'react-icons/bs'
import {CopyToClipboard} from 'react-copy-to-clipboard';


type UrlType = {
    short_link: string;
    original_link: string;
}

const ShortPage = () => {
    const [shortenLink, setShortenLink] = useState();
    const [inputValue, setInputValue] = useState("");
    const [copied, setCopied] = useState<string[]>(["Copy"]);
    const [data, setdata] = useState<any[]>([]);
   
    
    const fetcher = (url:string) => fetch(`https://api.shrtco.de/v2/shorten?url=${url}`).then(res=> res.json());
    const handleClick = async () => {
        const _data = await fetcher(inputValue);
        setdata([ ...data, _data.result]);
    }
    

    const showShorten = () => {
        return data && data?.map((url: any, index:number) => {
            
            return (
                <div key={index} className='px-6'>
                    <div className='gap-y-5 flex flex-col mb-5 w-full'>
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
        <div className='font-poppins flex flex-col justify-center items-center'>
            <div className='px-6 md:px-12 lg:px-24 flex flex-col md:flex-row items-center h-full md:h-[88vh] w-full pb-32'>
                <div className='md:flex md:w-1/2 md:relative md:translate-x-[25%] md:order-2'>
                    <Image className='object-contain' src={Working} alt="/" />
                </div>
                <div className='md:order-1 md:w-1/2 flex justify-center md:items-start items-center flex-col md:gap-y-3'>
                    <div className='xl:text-7xl lg:text-6xl lg:font-extrabold md:text-left md:text-5xl  font-bold text-3xl pt-12 flex justify-center items-center text-center'>More than just <br className='md:hidden'/> shorter links</div>
                    <div className=' lg:text-2xl md:text-xl md:text-start md:px-0 text-gray-400 text-center p-3'>Build your brand's recognition and get detailed insights on how your links are performing.</div>
                    <div className='lg:text-2xl md:text-xl md:my-3 p-3 my-6 bg-[#2acfcf] w-1/2 text-center font-bold rounded-full text-white'>Get Started</div>
                </div>
            </div>

            <div className='relative flex flex-col px-6 py-24 md:px-12 lg:px-24 h-full w-full bg-[#f0f1f6]'>
                
                <div className='px-6 w-full flex justify-center items-center'>
                    <div className='absolute translate-y-[-50%] top-0 left-0 px-6 md:px-12 lg:px-24 h-fit rounded-xl flex w-full flex-col'>

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
                
                {showShorten()}
                {/* <div>
                    <div className='pb-5 gap-y-5 flex flex-col mb-10'>
                        <div className='w-full flex justify-center items-center'>
                            <div className='bg-white h-fit rounded-xl flex w-full flex-col'>
                                <div className='w-full p-4 border-b border-gray-300 truncate'>
                                    {inputValue}
                                </div>
                                <div className='w-full p-4 flex flex-col gap-y-3'>
                                    <div className='w-full truncate text-[#2acfcf]'>
                                        {shortenLink}    
                                    </div>
                                    <CopyToClipboard 
                                        text={shortenLink}
                                        onCopy={()=>setCopied(true)}
                                    > 
                                        <button className={copied? 'w-full p-3 rounded-xl text-center font-bold text-white bg-[#3b3054]':'w-full p-3 rounded-xl text-center font-bold text-white bg-[#2acfcf]' }>
                                            {copied? "Copied!" : "Copy"}
                                        </button>
                                    </CopyToClipboard>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
                
                                


                <div className='font-bold text-xl text-center p-3'>
                    Advanced Statistics
                </div>
                <div className='text-gray-500 p-3 text-xs text-center mb-10'>
                    Track how your links are performing across the web with our 
                    advanced statistics dashboard.
                </div>


                <div className='flex flex-col relative items-center justify-center pb-20'>
                    <div className='flex justify-center items-center'>
                        <div className='absolute top-0 translate-y-[-50%] rounded-full p-4 bg-[#3b3054]'>
                            <Image className=''  src={Brand} alt=""/>
                        </div>
                        <div className='pt-12 bg-white'>
                            <div className='font-bold text-lg text-center'>
                                Brand Recognition
                            </div>
                            <div className='text-gray-400 p-3 text-xs text-center mb-4'>
                                Boost your brand recognition with each click. Generic links don't 
                                mean a thing. Branded links help instil confidence in your content
                            </div>
                        </div>
                    </div>
                    <div className='absolute bottom-0 translate-y-0 p-1 bg-[#2cd0d1] h-20'/>         
                </div>
                <div className='flex flex-col relative items-center justify-center pb-20'>
                    <div className='flex justify-center items-center'>
                        <div className='absolute top-0 translate-y-[-50%] rounded-full p-4 bg-[#3b3054]'>
                            <Image className=''  src={Brand} alt=""/>
                        </div>
                        <div className='pt-12 bg-white'>
                            <div className='font-bold text-lg text-center'>
                                Detailed Records
                            </div>
                            <div className='text-gray-400 p-3 text-xs text-center mb-4'>
                                Gain insights into who is clicking your links. Knowing when and where 
                                people engage with your content helps inform better decisions.
                            </div>
                        </div>
                    </div>
                    <div className='absolute bottom-0 translate-y-0 p-1 bg-[#2cd0d1] h-20'/>         
                </div>
                <div className='flex flex-col relative items-center justify-center pb-20'>
                    <div className='flex justify-center items-center'>
                        <div className='absolute top-0 translate-y-[-50%] rounded-full p-4 bg-[#3b3054]'>
                            <Image className=''  src={Brand} alt=""/>
                        </div>
                        <div className='pt-12 bg-white'>
                            <div className='font-bold text-lg text-center'>
                                Fully Customizable
                            </div>
                            <div className='text-gray-400 p-3 text-xs text-center mb-4'>
                                Improve brand awareness and content discoverability through customizable 
                                links, supercharging audience engagement.
                            </div>
                        </div>
                    </div>
                </div>
                


                
            </div>
            <div className='w-full h-[80vh] text-white bg-[#232027]'>
                <div style={{ backgroundImage: `url(/url-shortening-api-master/url-shortening-api-master/images/bg-boost-mobile.svg)`,
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'right top',
                    }}className='h-1/4 bg-[#3b3054] flex justify-center items-center flex-col gap-y-4'>
                    <div className='text-2xl font-bold text-white'>Boost your links today</div>
                    <div className='p-3 bg-[#2acfcf] w-1/2 text-center font-bold rounded-full text-white'>Get Started</div>

                </div>
                <div className='h-3/4 w-full justify-ceenter items-center flex flex-col text-center p-6'>
                    <div className='text-2xl font-bold p-3'>Shortly</div>
                    <div className='text-xs gap-3 py-3 flex flex-col'>
                        <div className='gap-3 flex flex-col'>
                            <div className='font-bold p-2'>
                                Features
                            </div>
                            <div className='flex gap-2 flex-col'>
                                <div>Link Shortening</div>
                                <div>Branded Links</div>
                                <div>Analytics</div>
                            </div>
                        </div>
                        <div className='gap-3 flex flex-col'>
                            <div className='font-bold p-2'>
                            Resources
                            </div>
                            <div className='flex gap-2 flex-col'>
                                <div>Blog</div>
                                <div>Developors</div>
                                <div>Support</div>
                            </div>
                        </div>
                        <div className='gap-3 flex flex-col'>
                            <div className='font-bold p-2'>
                                Features
                            </div>
                            <div className='flex gap-2 flex-col'>
                                <div>About</div>
                                <div>Our Team</div>
                                <div>Careers</div>
                                <div>Contact</div>
                            </div>
                        </div>
                        
                    </div>
                    <div className='p-4 gap-3 flex flex-row'>
                        <AiFillFacebook size={25} />
                        <AiOutlineTwitter size={25} />
                        <BsPinterest size={25} />
                        <FaInstagram size={25} />
                    </div>
                </div>
            </div>
            

        </div>
  )
}

export default ShortPage