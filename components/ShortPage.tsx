import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Working from "../public/url-shortening-api-master/url-shortening-api-master/images/illustration-working.svg"
import Brand from "../public/url-shortening-api-master/url-shortening-api-master/images/icon-brand-recognition.svg"
import Detailed from "../public/url-shortening-api-master/url-shortening-api-master/images/icon-detailed-records.svg"
import Fully from "../public/url-shortening-api-master/url-shortening-api-master/images/icon-fully-customizable.svg"
import { AiFillFacebook, AiOutlineTwitter } from 'react-icons/ai'
import { FaInstagram } from 'react-icons/fa'
import { BsPinterest } from 'react-icons/bs'
import {CopyToClipboard} from 'react-copy-to-clipboard';


type UrlType = {
    short_link: string;
    original_link: string | undefined;
}


const ShortPage = () => {
    const [inputUrl, setInputUrl] = useState<string | undefined>();
    const [data, setdata] = useState<UrlType[]>([]);
    const [errorMsg, setErrorMsg] = useState<string>();
    const [isValid, setIsValid] = useState<boolean>(true);
    const fetcher = (url:string) => fetch(`https://api.shrtco.de/v2/shorten?url=${url}`).then(res=> res.json());  


    const handleClick = async () : Promise<void> => {
        const _data = await fetcher(inputUrl);
        if (!inputUrl) {
            setErrorMsg('Please add a link');
            setIsValid(false);
          } else if (!/^https:\/\/.*/.test(inputUrl)) {
            setErrorMsg('Please correct your URL');
            setIsValid(false);

          } else {
            const res = await fetcher(inputUrl);
            setdata([ ...data, _data.result]);
            setIsValid(true);
        }     
    } 



    const showShorten = () => {
        return data && data?.map((url: UrlType, index:number) => {
            if(JSON.stringify(url) !== undefined ) {
                return (
                    <div key={index} className='md:w-full md:flex'>
                        <div className='gap-y-5 flex flex-col mb-5 md:mb-6 lg:mb-7 w-full'>
                            <div className='w-full flex justify-center items-center'>
                                <div className='bg-white h-fit rounded-xl flex w-full flex-col md:flex-row'>
                                    <div className='w-full text-black p-4 border-b md:border-none md:flex md:items-center border-gray-300 truncate'>
                                        {url.original_link}
                                    </div>
                                    <div className='w-full p-4 flex flex-col md:flex-row gap-y-3 md:items-center '>
                                        <div className='w-full truncate text-[#2acfcf] md:text-right md:mr-4'>
                                            {url.short_link}    
                                        </div>
                                        <CopyToClipboard text={url.short_link} > 
                                            <button id='btn' className='hover:bg-[#9be3e2] cursor-pointer w-full p-3 rounded-xl text-center font-bold text-white bg-[#2acfcf] focus:bg-[#3b3054]'></button>
                                        </CopyToClipboard>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )   
            }
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
                    <div className='lg:text-2xl md:text-xl md:my-0 p-3 my-6  bg-[#2acfcf] w-1/2 text-center font-bold rounded-full text-white cursor-pointer hover:bg-[#9be3e2]'>Get Started</div>
                </div>
            </div>

            <div className='relative flex flex-col px-6 py-28 md:py-20 lg:py-28 md:px-12 lg:px-24 h-full w-full bg-[#f0f1f6]'>
                {showShorten()}

                <div className='md:h-[80vh] md:flex md:justify-center md:items-center md:flex-col'>
                    <div className='px-6 w-full flex justify-center items-center'>
                        <div className='absolute translate-y-[-50%] top-0 left-0 px-6 md:px-12 lg:px-24 h-fit rounded-xl flex w-full flex-col'>
                            <div id="error" className='bg-shorten bg-[#3b3054] w-full h-full p-5 rounded-xl flex flex-col md:gap-x-5 lg:p-10 lg:gap-x-10 md:flex-row gap-y-3'>
                                <form  action="/" className='lg:text-2xl md:h-1/2 md:text-xl md:flex md:flex-col md:w-full' >
                                   <div className='gap-4 lg:gap-8 flex flex-col md:flex-row w-full'>
                                        <input 
                                            type="text" 
                                            className={!isValid ? "p-3 rounded-xl px-6 border-2 border-red-400 bg-white truncate md:w-4/5 placeholder:text-red-400 " : "p-3 rounded-xl px-6 bg-white truncate md:w-4/5" } 
                                            required 
                                            placeholder="Shorten a link here..."
                                            onChange={(e)=>setInputUrl(e.target.value)} 
                                        />
                                        {!isValid && <p className="md:hidden text-red-400 text-sm -my-2">
                                            {errorMsg}
                                        </p>}
                                        <div onClick={handleClick} className='hover:bg-[#9be3e2] cursor-pointer truncate lg:text-2xl md:text-xl w-full md:w-1/5 p-3 rounded-xl text-center font-bold text-white bg-[#2acfcf]'>
                                            Shorten it!
                                        </div> 
                                   </div>
                                   {!isValid && <p className="hidden md:flex text-red-400 text-sm mt-2 lg:mt-4 ">
                                        Please add a link
                                    </p>}
                                </form>
                            </div>
                        </div>
                    </div>

                    <div className='lg:text-5xl md:text-3xl font-bold text-xl text-center p-3'>
                        Advanced Statistics
                    </div>
                    <div className='text-gray-500 p-3 text-xs md:text-base text-center mb-10 md:mb-20'>
                        Track how your links are performing across the web with our 
                        advanced statistics dashboard.
                    </div>


                    <div className='flex flex-col md:flex-row md:gap-x-5 lg:gap-x-10'>
                        <div className='flex flex-col relative items-center justify-center pb-20'>
                            <div className='flex justify-center items-center'>
                                <div className='absolute top-0 translate-y-[-50%] rounded-full p-4 bg-[#3b3054]'>
                                    <Image className=''  src={Brand} alt=""/>
                                </div>
                                <div className='pt-12 bg-white'>
                                    <div className='md:text-xl lg:text-2xl font-bold text-lg text-center'>
                                        Brand Recognition
                                    </div>
                                    <div className='md:text-base lg:text-lg text-gray-400 p-3 text-xs text-center mb-4'>
                                        Boost your brand recognition with each click. Generic links don't 
                                        mean a thing. Branded links help instil confidence in your content
                                    </div>
                                </div>
                            </div>
                            <div className='absolute bottom-0 md:bottom-auto md:right-0 md:translate-x-[100%] md:translate-y-[-500%] md-transalte-y-[500%] translate-y-0 p-1 bg-[#2cd0d1] h-20 md:h-fit md:w-5 lg:w-10'/>
                        </div>
                        <div className='flex flex-col relative md:translate-y-[10%] items-center justify-center pb-20'>
                            <div className='flex justify-center items-center'>
                                <div className='absolute top-0 translate-y-[-50%] rounded-full p-4 bg-[#3b3054]'>
                                    <Image className=''  src={Detailed} alt=""/>
                                </div>
                                <div className='pt-12 bg-white'>
                                    <div className='md:text-xl lg:text-2xl font-bold text-lg text-center'>
                                        Detailed Records
                                    </div>
                                    <div className='md:text-base lg:text-lg text-gray-400 p-3 text-xs text-center mb-4'>
                                        Gain insights into who is clicking your links. Knowing when and where 
                                        people engage with your content helps inform better decisions.
                                    </div>
                                </div>
                            </div>
                            <div className='absolute bottom-0 md:bottom-auto md:right-0 md:translate-x-[100%] md:translate-y-[-500%] md-transalte-y-[500%] translate-y-0 p-1 bg-[#2cd0d1] h-20 md:h-fit md:w-5 lg:w-10'/>         
                        </div>
                        <div className='flex flex-col relative md:translate-y-[20%] items-center justify-center pb-20'>
                            <div className='flex justify-center items-center'>
                                <div className='absolute top-0 translate-y-[-50%] rounded-full p-4 bg-[#3b3054]'>
                                    <Image className=''  src={Fully} alt=""/>
                                </div>
                                <div className='pt-12 bg-white'>
                                    <div className='md:text-xl lg:text-2xl font-bold text-lg text-center'>
                                        Fully Customizable
                                    </div>
                                    <div className='md:text-base lg:text-lg text-gray-400 p-3 text-xs text-center mb-4'>
                                        Improve brand awareness and content discoverability through customizable 
                                        links, supercharging audience engagement.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                


                
            </div>
            <div className='w-full h-[80vh] md:h-[40vh] lg:h-[60vh] text-white bg-[#232027]'>
                <div className='bg-boostLink h-1/4 md:h-2/5 bg-[#3b3054] flex justify-center items-center flex-col gap-y-4 md:gap-y-6'>
                    <div className='lg:text-5xl md:text-3xl text-2xl font-bold text-white'>Boost your links today</div>
                    <div className='lg:text-2xl md:text-xl p-3 bg-[#2acfcf] w-1/2 md:w-fit md:py-2 md:px-6 lg:py-4 lg:px-8 text-center font-bold rounded-full text-white cursor-pointer hover:bg-[#9be3e2] '>Get Started</div>
                </div>
                <div className='h-3/4 md:h-3/5 md:gap-x-6 lg:gap-x-12 w-full justify-center md:items-start items-center flex flex-col md:flex-row text-center p-6'>
                    <div className='lg:text-3xl md:text-xl text-2xl font-bold p-3 md:w-1/3'>Shortly</div>
                    <div className='md:w-2/3 md:flex flex-row md:gap-x-6 lg:gap-x-12'>
                        <div className='md:text-base lg:text-lg md:text-left text-xs gap-3 py-3 flex flex-col md:flex-row md:w-2/3'>
                            <div className='gap-3 flex flex-col md:w-1/3'>
                                <div className='font-bold p-2 md:p-0'>
                                    Features
                                </div>
                                <div className='flex gap-2 flex-col'>
                                    <div>Link Shortening</div>
                                    <div>Branded Links</div>
                                    <div>Analytics</div>
                                </div>
                            </div>
                            <div className='gap-3 flex flex-col md:w-1/3'>
                                <div className='font-bold p-2 md:p-0'>
                                    Resources
                                </div>
                                <div className='flex gap-2 flex-col'>
                                    <div>Blog</div>
                                    <div>Developors</div>
                                    <div>Support</div>
                                </div>
                            </div>
                            <div className='gap-3 flex flex-col md:w-1/3'>
                                <div className='font-bold p-2 md:p-0'>
                                    Company
                                </div>
                                <div className='flex gap-2 flex-col'>
                                    <div>About</div>
                                    <div>Our Team</div>
                                    <div>Careers</div>
                                    <div>Contact</div>
                                </div>
                            </div>
                            
                        </div>
                        <div className='p-4 gap-3 flex flex-row md:w-1/3'>
                            <AiFillFacebook size={25} />
                            <AiOutlineTwitter size={25} />
                            <BsPinterest size={25} />
                            <FaInstagram size={25} />
                        </div>
                    </div>
                </div>
            </div>
            

        </div>
  )
}

export default ShortPage