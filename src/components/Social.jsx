import React from 'react'
import {FaWhatsapp, FaFacebook, FaTwitter} from "react-icons/fa"

function Social() {

  return (
    <div className='mt-16 md:mt-12 flex flex-wrap gap-4 items-center justify-center mb-[4rem]'>
        {/* WhatsApp */}
        <div className='border dark:border-slate-950 w-[190px] flex flex-col gap-1 items-center justify-center dark:bg-slate-800 bg-white shadow-xl rounded-lg p-6'
        data-aos="fade-right">
          <a href='https://wa.link/27nf32' target="__blank" className='text-3xl text-[#f5c32c] '><FaWhatsapp/></a>
          <span className='text-sm font-medium text-[#f5c32c]'>WhatsApp</span>
          <span className='dark:text-white text-slate-800'>+254 743 537705</span>
        </div>
        {/* Facebook */}
        <div className='border dark:border-slate-950 w-[190px] flex flex-col gap-1 items-center justify-center dark:bg-slate-800 bg-white shadow-xl rounded-lg p-6' 
        data-aos="zoom-in">
          <a href="https://www.facebook.com/AmesaSolutions" target="__blank" className='text-3xl text-[#f5c32c] '><FaFacebook/></a>
          <span className='text-sm font-medium text-[#f5c32c]'>Facebook</span>
          <span className='dark:text-white text-slate-800'>Amesa Solutions</span>
        </div>
        {/* Twitter */}
        <div className='border dark:border-slate-950 w-[190px] flex flex-col gap-1 items-center justify-center dark:bg-slate-800 bg-white shadow-xl rounded-lg p-6'
        data-aos="zoom-out">
          <a href="https://twitter.com/AmesaSolutions" target="__blank" className='text-3xl text-[#f5c32c] '><FaTwitter/></a>
          <span className='text-sm font-medium text-[#f5c32c]'>Twitter</span>
          <span className='dark:text-white text-slate-800'>Amesa Solutions</span>
        </div>
    </div>
  )
}

export default Social