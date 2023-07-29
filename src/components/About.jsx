import React from 'react'
import aboutImg from '../assets/about.png'

function About() {
  return (
    <div className='md:px-[11%] px-6 mt-16 w-full h-[100vh] md:h-[70vh] bg-white dark:bg-[#09111f]'>
      {/* title */}
      <div className='mx-auto lg:mb-8'>
       <h1 className='font-bold text-3xl text-[#f5c32c] text-center'>
        About us
       </h1>
      </div>
      {/* content */}
      <div className='flex md:flex-row flex-col md:gap-16 items-center justify-center  md:justify-between'>
         <div className='w-[80%] mt-4 md:mt-0 md:w-[120rem]'>
            <img src={aboutImg} alt="Ameesa Solutions" className='w-full'/>
          </div>
          <div className='text-center md:text-left flex flex-col gap-4 md:items-start items-center '>
            <h2 className='font-bold text-3xl text-[#242D49] dark:text-white'><span className="text-[#f5c32c]">Amesa</span> Solutions</h2>
            <p className='md:text-left text-center md:text-2xl break-words break-before-left dark:text-white'>We have been building websites for more than a decade.
              From small businesses to large corporations, and across
              industries and markets, our creative team is determined
              to unleash innovative and effective designs that boost
              your brand and grow your business to achieve your goals.
            </p>
            <button className='md:mt-4 p-3 w-[9rem] bg-[#242D49] dark:bg-[#f5c32c] hover:bg-[#] text-xl text-white rounded-[10px]'>
              Contact us
            </button>
          </div>
      </div>
    
    </div>
  )
}

export default About