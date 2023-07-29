import React from 'react'
import heroImage from '../assets/hero.png'

function Hero() {
  return (
    <div className='md:px-[11%] px-6 mt-16 w-full h-[90vh] md:h-[80vh] bg-white dark:bg-[#09111f] flex md:flex-row flex-col-reverse items-center justify-center  md:justify-between'>
     <div className='flex md:items-start gap-3 flex-col items-center '>
      <h2 className='md:text-5xl max-[460px]:text-3xl text-4xl  md:text-left text-center font-bold text-[#f5c32c]'>Do you need a website?</h2>
      <h3 className='md:text-6xl max-[460px]:text-3xl text-5xl font-bold text-[#242D49] md:text-left text-center dark:text-white'>Start Your Dream <br/> Website!</h3>
      <p className=' md:text-left text-center text-1xl text-[#929292]'>We have been building website for more than a decade.</p>
      <button className='md:mt-4 p-3 w-[12rem] bg-[#f5c32c] hover:bg-[#e6b421] text-xl text-white rounded-[10px]'>Contact us</button>
     </div>
     <div className='md:w-[36rem] max-[460px]:w-[18rem] w-[20rem]'>
      <img src={heroImage} alt="Ameesa Solutions" className='w-full'/>
     </div>
    </div>
  )
}

export default Hero