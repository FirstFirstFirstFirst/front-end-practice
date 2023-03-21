import React, { useState } from 'react'
import Image from 'next/image'
import Working from "../public/url-shortening-api-master/url-shortening-api-master/images/illustration-working.svg"
import Brand from "../public/url-shortening-api-master/url-shortening-api-master/images/icon-brand-recognition.svg"
import { AiFillFacebook, AiOutlineTwitter } from 'react-icons/ai'
import { FaInstagram } from 'react-icons/fa'
import { BsPinterest } from 'react-icons/bs'


const ShortPage = () => {
    
    const [showDiv, setShowDiv] = useState({
        boolen
    });

    const handleShorten = () => {
        setShowDiv(!showDiv);
    }

    return (
        <div className='font-poppins flex flex-col justify-center items-center'>
            <div className='px-6 md:px-12 lg:px-24 flex flex-col items-center h-full w-full pb-32'>
                <Image src={Working} alt="/" />
                <div className='font-bold text-3xl pt-8 flex justify-center items-center text-center'>More than just <br className='md:hidden'/> shorter links</div>
                <div className='text-gray-400 text-center p-3'>Build your brand's recognition and get detailed insights on how your links are performing.</div>
                <div className='p-3 my-6 bg-[#2acfcf] w-1/2 text-center font-bold rounded-full text-white'>Get Started</div>
            </div>

            <div className='relative flex flex-col px-6 py-24 md:px-12 lg:px-24 h-full w-full bg-[#f0f1f6]'>
                
                <div className='px-6 w-full flex justify-center items-center'>
                    <div style={{ backgroundImage: `url(/url-shortening-api-master/url-shortening-api-master/images/bg-shorten-mobile.svg)`,
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'right top',
                    }} className='absolute translate-y-[-50%] top-0 left-0 bg-[#3b3054] h-fit p-5 rounded-xl flex w-[90%] mx-6 flex-col gap-y-3'>
                        <textarea rows={1} className='p-3 rounded-xl px-6 text-gray-500 bg-white truncate'>
                            Shorten a link here...
                        </textarea>
                        <div className='p-3 rounded-xl text-center font-bold text-white bg-[#2acfcf]'>
                            Shorten It!
                        </div>
                    </div>
                </div>
                
                <div className='pb-5 gap-y-5 flex flex-col mb-10'>
                    <div className='w-full flex justify-center items-center'>
                        <div className='bg-white h-fit rounded-xl flex w-full flex-col'>
                            <div className='w-full p-4 border-b border-gray-300 truncate'>
                                Lorem ipsum dolor sit amet.
                            </div>
                            <div className='w-full p-4 flex flex-col gap-y-3'>
                                <div className='w-full truncate text-[#2acfcf]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, laboriosam. Commodi voluptatem, voluptas neque harum non assumenda voluptatibus eaque, sapiente accusantium ratione odio quam aliquam unde eligendi nemo, cumque necessitatibus. </div>
                                <div className='w-full p-3 rounded-xl text-center font-bold text-white bg-[#2acfcf]'>
                                    Copy
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>


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