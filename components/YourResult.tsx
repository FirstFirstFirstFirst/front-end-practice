import React from 'react'

const YourResult = () => {
  return (
    <div className='z-40 w-1/3 h-96 drop-shadow-2xl'>
        <div className='flex flex-col rounded-3xl p-8 justify-center items-center bg-gradient-to-t from-[#322bea] to-[#6642fe] h-full'>
            <div className='text-xl font-bold mb-4 text-white opacity-80'>
                Your Result
            </div>
            <div className='p-2'>
                <div className='p-2 rounded-full bg-gradient-to-b text-white from-[#4c23ca] to-[#4734f0] w-28 h-28 flex flex-col justify-center items-center'>
                    <div className='text-4xl font-semibold'>
                    76
                    </div>
                    <div className='opacity-60 text-center'>
                    of 100
                    </div>
                </div>
            </div>
            <div className='font-medium text-white text-2xl p-4'>
            Great
            </div>
            
            <div className='flex justify-center items-center text-white'>
            <p className='flex text-center'>You scored higher than 65% of <br/> the people who have taken <br/> these tests.</p>
            </div>
        </div>
    </div>
  )
}

export default YourResult