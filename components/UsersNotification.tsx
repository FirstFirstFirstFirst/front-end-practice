import React from 'react'
import Image from 'next/image'
import MarkWebber from '../public/notifications-page-main/assets/avatar-mark-webber.webp'
import AngelaGray from '../public/notifications-page-main/assets/avatar-angela-gray.webp'
import JacobThompson from '../public/notifications-page-main/assets/avatar-jacob-thompson.webp'
import RizkyHassanuddin from '../public/notifications-page-main/assets/avatar-rizky-hasanuddin.webp'
import KimberlySmith from '../public/notifications-page-main/assets/avatar-kimberly-smith.webp'
import NathanPeterson from '../public/notifications-page-main/assets/avatar-nathan-peterson.webp'
import AnnaKim from '../public/notifications-page-main/assets/avatar-anna-kim.webp'
import ChessImg from '../public/notifications-page-main/assets/image-chess.webp'


const UsersNotification = () => {
  return (

    <div className='items-center gap-y-40 h-full mt-8 w-1/2'>
      <div className='w-full flex flex-col justify-start items-center'>
        <div className='flex flex-row w-full'>
          <div className='flex flex-row justify-center items-center w-1/6'>
              <Image src={MarkWebber} alt='/' width={50} height={50}/>
          </div>
          <div className='flex items-center w-5/6'>
            <div>
              <div className='flex flex-row'>
                <div className='text-xs items-center justify-center'>
                    <span className='font-bold text-black hover:cursor-pointer hover:text-blue-800 hover:font-extrabold'>Mark Webber</span>&nbsp;
                    <span className='text-gray-500'>reacted to your recent post</span>&nbsp;
                    <span className='text-black font-semibold hover:cursor-pointer hover:text-blue-800 hover:font-extrabold'>My first tournament today!</span>
                </div>
                <div className='bg-red-500 rounded-full p-1 m-1 w-1 h-1' />
              </div>
              <div className='flex justify-start w-full items-center text-gray-500 text-xs my-1'>
                  1m ago
              </div>
            </div>
          </div>
        </div>  
      </div>

      <div className='w-full flex flex-col justify-start items-center mt-4'>
        <div className='flex flex-row w-full'>
          <div className='flex flex-row justify-center items-center w-1/6'>
            <Image src={AngelaGray} alt='/' width={50} height={50} />
          </div>
          <div className='flex items-center w-5/6'>
            <div>
              <div className='flex flex-row'>
                <div className='text-xs items-center justify-center'>
                    <span className='font-bold text-black hover:cursor-pointer hover:text-blue-800 hover:font-extrabold'>Angela Gray</span>&nbsp;
                    <span className='text-gray-500'>followed you</span>
                </div>
                <div className='bg-red-500 rounded-full p-1 m-1 w-1 h-1'/>
              </div>
              <div className='flex justify-start w-full items-center text-gray-500 text-xs my-1'>
                  5m ago
              </div>
            </div>
          </div>
        </div>  
      </div>

      <div className='w-full flex flex-col justify-start items-center mt-4'>
        <div className='flex flex-row w-full'>
          <div className='flex flex-row justify-center items-center w-1/6'>
            <Image src={JacobThompson} alt='/' width={50} height={50}/>
          </div>
          <div className='flex items-center w-5/6'>
            <div>
              <div className='flex flex-row'>
                <div className='text-xs items-center justify-center'>
                    <span className='font-bold text-black hover:cursor-pointer hover:text-blue-800 hover:font-extrabold'>Jacob Thompson</span>&nbsp;
                    <span className='text-gray-500'>has joined your group</span>&nbsp;
                    <span className='text-blue-900 font-bold hover:cursor-pointer hover:text-blue-800 hover:font-extrabold'>Chess Club</span>
                </div>
                <div className='bg-red-500 rounded-full p-1 m-1 w-1 h-1' />
              </div>
              <div className='flex justify-start w-full items-center text-gray-500 text-xs my-1'>
                  1day ago
              </div>
            </div>
          </div>
        </div>  
      </div>

      <div className='w-full flex flex-col justify-start items-center mt-4'>
        <div className='flex flex-row w-full'>
          <div className='flex flex-row justify-center items-start w-1/6'>
            <Image src={RizkyHassanuddin} alt='/' width={50} height={50}/>
          </div>
          <div className='flex items-center w-5/6'>
            <div>
              <div className='flex flex-row'>
                <div className='text-xs items-center justify-center'>
                  <span className='font-bold text-black hover:cursor-pointer hover:text-blue-800 hover:font-extrabold'>Rizky Hassanuddin</span>&nbsp;
                  <span className='text-gray-500'>sent you a private message</span>
                </div>
              </div>
              <div className='flex justify-start w-full items-center text-gray-500 text-xs my-1'>
                5days ago
              </div>
              <div className='text-xs p-4 flex justify-center items-center text-gray-500 hover:bg-blue-100'>
                Hello, thanks for setting up the Chess Club. I've b een a member for a few weeks
                now and I'm already having lots of fun and improving my game.
              </div>
            </div>
          </div>
        </div>  
        
      </div>
      
      <div className='w-full flex flex-row justify-start items-center mt-4'>
        <div className='flex flex-row w-full'>
          <div className='flex flex-row justify-center items-center w-1/6'>
            <Image src={KimberlySmith} alt='/' width={50} height={50}/>
          </div>
          <div className='flex items-center w-4/6'>
            <div>
              <div className='flex flex-row'>
                <div className='text-xs items-center justify-center'>
                    <span className='font-bold text-black hover:cursor-pointer hover:text-blue-800 hover:font-extrabold'>Kimberly Smith</span>&nbsp;
                    <span className='text-gray-500'>commented on your picture</span>&nbsp;
                </div>
              </div>
              <div className='flex justify-start w-full items-center text-gray-500 text-xs my-1'>
                  1week ago
              </div>
            </div>
          </div>
        </div>  
        <div className='flex items-center hover:cursor-pointer w-1/6 justify-center'>
          <Image  src={ChessImg} alt='/' width={50} height={50}/>
        </div>
      </div>

      <div className='w-full flex flex-row justify-start items-center mt-4'>
        <div className='flex flex-row w-full'>
          <div className='flex flex-row justify-center items-center m-2 w-1/6'>
            <Image  src={NathanPeterson} alt='/' width={50} height={50}/>
          </div>
          <div className='flex items-center w-5/6'>
            <div>
              <div className='flex flex-row'>
                <div className='text-xs w-full'>
                    <span className='font-bold text-black hover:cursor-pointer hover:text-blue-800 hover:font-extrabold'>Nathan Peterson</span>&nbsp;
                    <span className='text-gray-500'>reacted to your recent post</span>&nbsp;
                    <span className='text-blue-900 font-bold hover:cursor-pointer hover:text-blue-800 hover:font-extrabold'>5 end-game strategies</span>&nbsp;
                    <span className='text-gray-500'>to increase your win rate</span>
                </div>
              </div>
              <div className='flex justify-start w-full items-center text-gray-500 text-xs my-1'>
                  2weeks ago
              </div>
            </div>
          </div>
        </div>     
      </div>

      <div className='w-full flex flex-col justify-start items-center mt-4 mb-8 '>
        <div className='flex flex-row w-full'>
          <div className='flex flex-row justify-center items-center m-2 w-1/6'>
            <Image src={AnnaKim} alt='/' width={50} height={50}/>
          </div>
          <div className='flex items-center w-5/6'>
            <div>
              <div className='flex flex-row'>
                <div className='text-xs items-center justify-center'>
                    <span className='font-bold text-black hover:cursor-pointer hover:text-blue-800 hover:font-extrabold'>Anna Kim</span>&nbsp;
                    <span className='text-gray-500'>left the group</span>&nbsp;
                    <span className='text-blue-900 font-bold hover:cursor-pointer hover:text-blue-800 hover:font-extrabold'>Chess Club</span>
                </div>
              </div>
              <div className='flex justify-start w-full items-center text-gray-500 text-xs my-1'>
                  2weeks ago
              </div>
            </div>
          </div>
        </div>  
      </div>

    </div>
  )
}

export default UsersNotification;