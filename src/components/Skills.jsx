import React from 'react'
import skilsImage from '../assets/skills.png'
import { BiLogoReact } from 'react-icons/bi'
import { SiNodedotjs } from 'react-icons/si'
import { FaWordpressSimple } from 'react-icons/fa'
import { PiFigmaLogo } from 'react-icons/pi'
import { MdDesignServices } from 'react-icons/md'
import ProgressBar from "@ramonak/react-progress-bar";
import Aos from 'aos'
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function Skills() {
  useEffect(() => {
    Aos.init({duration: 2000});
    Aos.refresh({duration: 2000})
  }, [])

  return (
    <div className='flex md:flex-row flex-col items-center justify-around  mt-9'>

      {/* skill progres */}

      <div className='w-full md:w-auto flex-col items-center text-left p-7' >
        <h2 className='text-3xl font-bold dark:text-white'>SKILLS</h2>

        <div className='flex flex-col'>
          <div className='flex flex-row text-left pt-6 ' >
            {/* icon */}
            <BiLogoReact size={34} className='text-left dark:text-white' />
            <span className='pl-3 text-justify font-semibold text-2xl dark:text-white'>React</span>
          </div>
          {/* progres */}
          <div className='w-full md:w-96 items-center '>
            <ProgressBar
              className='pt-2'
              completed={90}
              bgColor='#F5C32C'
              animateOnRender={true}
              height={13}
              labelSize='11px'

            />
          </div>
        </div>

        <div className='flex flex-col'>
          <div className='flex flex-row text-left pt-6 ' >
            {/* icon */}
            <SiNodedotjs size={34} className='text-left dark:text-white' />
            <span className='pl-3 text-justify font-semibold text-2xl dark:text-white'>Node</span>
          </div>
          {/* progres */}
          <div className='w-full md:w-96 items-center '>
            <ProgressBar
              className='pt-2'
              completed={60}
              bgColor='#F5C32C'
              animateOnRender={true}
              height={13}
              labelSize='11px'

            />
          </div>
        </div>


        <div className='flex flex-col'>
          <div className='flex flex-row text-left pt-6 ' >
            {/* icon */}
            <FaWordpressSimple size={34} className='text-left dark:text-white' />
            <span className='pl-3 text-justify font-semibold text-2xl dark:text-white'>WordPress</span>
          </div>
          {/* progres */}
          <div className='w-full md:w-96 items-center '>
            <ProgressBar
              className='pt-2'
              completed={96}
              bgColor='#F5C32C'
              animateOnRender={true}
              height={13}
              labelSize='11px'

            />
          </div>
        </div>


        <div className='flex flex-col'>
          <div className='flex flex-row text-left pt-6 ' >
            {/* icon */}
            <PiFigmaLogo size={34} className='text-left dark:text-white' />
            <span className='pl-3 text-justify font-semibold text-2xl dark:text-white'>Figma UI/UX</span>
          </div>
          {/* progres */}
          <div className='w-full md:w-96 items-center '>
            <ProgressBar
              className='pt-2'
              completed={65}
              bgColor='#F5C32C'
              animateOnRender={true}
              height={13}
              labelSize='11px'

            />
          </div>
        </div>


        <div className='flex flex-col'>
          <div className='flex flex-row text-left pt-6 ' >
            {/* icon */}
            <MdDesignServices size={34} className='text-left dark:text-white' />
            <span className='pl-3 text-justify font-semibold text-2xl dark:text-white'>Graphic Design</span>
          </div>
          {/* progres */}
          <div className='w-full md:w-96 items-center '>
            <ProgressBar
              className='pt-2 '
              completed={76}
              bgColor='#F5C32C'
              animateOnRender={true}
              height={13}
              labelSize='11px'

            />
          </div>
        </div>


        {/* </div> */}

      </div>

      {/* image */}
      <div className='flex items-center justify-center w-auto h-[430px]'>
      <img src={skilsImage} alt="Skills image" className='w-full h-full' data-aos="fade-left" />

      </div>

    </div>
  )
}

export default Skills