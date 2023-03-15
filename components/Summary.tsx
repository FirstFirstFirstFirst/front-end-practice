import React from 'react';
import { AiOutlineThunderbolt, AiOutlineMessage, AiOutlineEye } from 'react-icons/ai';
import { BiBrain } from 'react-icons/bi'
const Summary = () => {
  return (
    <div className='ml-[-20px] pl-[40px] z-0 w-1/3 h-96 flex flex-col rounded-r-3xl p-8 gap-5 justify-center items-center bg-white drop-shadow-2xl'>
        
        <div className='w-full text-xl font-bold text-gray-800'>
            Summary
        </div>

        <div className='flex flex-row p-2 mx-4 justify-between items-center w-full '>
            <div className='flex flex-row px-2 text-red-600'>
                <div className='px-2 flex items-center justify mr-1'>
                    <AiOutlineThunderbolt />
                </div>
                <div className='px-2'>
                    Reaction 
                </div>             
            </div>
            <div className='px-2'>
                <span className='font-semibold'>80 </span>
                <span className='text-gray-500'>/ 100</span>
            </div>
        </div>

        <div className='flex flex-row p-2 mx-4 justify-between items-center w-full '>
            <div className='flex flex-row px-2 text-yellow-600'>
                <div className='px-2 flex items-center justify mr-1'>
                    <BiBrain />
                </div>
                <div className='px-2'>
                    Memory
                </div>             
            </div>
            <div className='px-2'>
                <span className='font-semibold'>92 </span>
                <span className='text-gray-500'>/ 100</span>
            </div>
        </div>

        <div className='flex flex-row p-2 mx-4 justify-between items-center w-full '>
            <div className='flex flex-row px-2 text-green-600'>
                <div className='px-2 flex items-center justify mr-1'>
                    <AiOutlineMessage />
                </div>
                <div className='px-2'>
                    Verbal
                </div>             
            </div>
            <div className='px-2'>
                <span className='font-semibold'>61 </span>
                <span className='text-gray-500'>/ 100</span>
            </div>
        </div>

        <div className='flex flex-row p-2 mx-4 justify-between items-center w-full '>
            <div className='flex flex-row px-2 text-blue-600'>
                <div className='px-2 flex items-center justify mr-1'>
                    <AiOutlineEye />
                </div>
                <div className='px-2'>
                    Visual 
                </div>             
            </div>
            <div className='px-2'>
                <span className='font-semibold'>72 </span>
                <span className='text-gray-500'>/ 100</span>
            </div>
        </div>

        <div className='flex justify-center items-center py-2 w-full rounded-3xl mt-2 text-white bg-gray-600'>
            Continue
        </div>
    </div>
  )
}

export default Summary