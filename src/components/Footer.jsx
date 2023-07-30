import React, { useEffect, useState} from 'react'
// import logo_dark from '../assets/logo_dark.png'
import logo_light from '../assets/logo_light.png'
import { AiFillLinkedin, AiFillFacebook, AiOutlineTwitter } from 'react-icons/ai';

function Footer() {
 
  return (
    <div className=' sm: w-full h-[55vh] bg-gray-100 dark:bg-slate-900 mt-7 pt-8   '>
      <div className=' flex flex-row justify-around item-center leading-9 '>
      <div className='text-sm text-white '>
        <img src={ logo_light  } className='w-[200px]' />
        <p className='pt-4 dark:text-gray-200 text-[#242D49]'>We have been building <br />
        websites for more than a <br />
        decade. </p>
      </div>
      <div className='text-sm flex flex-col sm:items-start  dark:text-gray-200 text-[#242D49] leading-7'>
          <a href="">Links</a> 
          <a href="">About Us </a> 
          <a href="">Contact Us</a> 
          <a href="">Works </a> 
          <a href="">Skills</a>
      </div>
      <div className='text-sm   dark:text-gray-200 text-[#242D49] leading-7'>
        <h3>Contact Info</h3>
        <p className='pt-3'>Email: example@abc.com</p>
        <p>Number: 00000000</p>
        <address>Somalia, Muqdisho</address>
      </div>
      </div>
      <div className='flex  justify-between items-center m-[6%]   border-t-[1px] dark:border-gray-200'>
        <div className='flex flex-row dark:text-gray-200 text-[#242D49] space-x-3 m-7'>
          <AiOutlineTwitter size={25} />
          <AiFillLinkedin size={25} />
          <AiFillFacebook  size={25} />
        </div>
        <p className='dark:text-white text-[#242D49] m-5'>
           © Amesa. All rigths reserved
        </p>
      </div>
    </div>
  )
}

export default Footer