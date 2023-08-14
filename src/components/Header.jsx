import React, { useEffect, useState } from 'react'
import { FaMoon } from 'react-icons/fa'
import { BsSunFill } from 'react-icons/bs'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import Logow from '../assets/Logow.png'
import logodark from '../assets/logodark.png'

function Header() {

  // Menu Responsive logic
  const [menu, setMenu] = useState(false)
  // darkMode Logic
  const [theme, setTheme] = useState("darl")

  // darkMode logic
  useEffect(() => {
    if (localStorage.getItem("theme") === null) {
      localStorage.setItem("theme", 'dark')
    }
  }, [])

  useEffect(() => {
    if (localStorage.getItem("theme") === 'dark') {
      document.documentElement.classList.add("dark")
      setTheme("dark")
    } else {
      document.documentElement.classList.remove("dark");
      setTheme("light")
    }
  }, [theme])

  const handleThemeSwitch = () => {
    if (localStorage.getItem("theme") === 'light') {
      setTheme("dark")
      localStorage.setItem("theme", 'dark')
    } else {
      setTheme("light")
      localStorage.setItem("theme", 'light')
    }
  }

  return (
    <header className='fixed top-0 left-0 z-10 w-full h-[70px] bg-white dark:bg-slate-900 shadow flex items-center justify-between px-5 md:px-[12%] '>
      {/* logo */}
      <img src={theme === 'dark' ? logodark : Logow} alt="" className='cursor-pointer w-[9rem]' />

      {/* Menu Responsive */}
      <div onClick={() => setMenu(!menu)}
        className='flex md:hidden bg-[#f5c32c] text-slate-800 text-xl shadow dark:bg-slate-800 rounded mx-4 items-center justify-center cursor-pointer w-[40px] h-[40px] dark:text-[#f5c32c]'>
        {!menu ? <AiOutlineMenu /> : <AiOutlineClose />}
      </div>

      {/* navbar */}
      <div className={`${menu ? 'flex md:flex ' : ' hidden md:flex'} fixed md:static  top-[71px] dark:top-[71.3px] md:top-0  right-0 md:right-0 flex flex-col md:flex-row shadow md:shadow-none   md:items-center bg-white md:bg-none  dark:bg-slate-900 w-[80%] md:w-auto  h-[100vh] md:h-auto `}>

        {/* navs */}
        <span className='p-3 px-4 font-medium dark:text-gray-100 dark:hover:text-[#f5c32c] relative cursor-pointer transition-all after:hidden md:hover:after:block after:absolute
         after:bottom-[-10.9px] after:left-0 md:after:w-full hover:after:hidden after:h-[3px] after:bg-[#F5C32C] hover:text-[#F5C32C]'>Home</span>
        <span className='p-3 px-4 font-medium dark:text-gray-100 dark:hover:text-[#f5c32c] relative cursor-pointer transition-all after:hidden md:hover:after:block after:absolute
         after:bottom-[-10.9px] after:left-0 md:after:w-full hover:after:hidden after:h-[3px] after:bg-[#F5C32C] hover:text-[#F5C32C]'>About</span>
        <span className='p-3 px-4 font-medium dark:text-gray-100 dark:hover:text-[#f5c32c] relative cursor-pointer transition-all after:hidden md:hover:after:block after:absolute
         after:bottom-[-10.9px] after:left-0 md:after:w-full  hover:after:hidden after:h-[3px] after:bg-[#F5C32C] hover:text-[#F5C32C]'>Skills</span>
        <span className='p-3 px-4 font-medium dark:text-gray-100 dark:hover:text-[#f5c32c] relative cursor-pointer transition-all after:hidden md:hover:after:block after:absolute
         after:bottom-[-10.9px] after:left-0 md:after:w-full hover:after:hidden after:h-[3px] after:bg-[#F5C32C] hover:text-[#F5C32C]'>Our Works</span>
        <span className='p-3 px-4 font-medium dark:text-gray-100 dark:hover:text-[#f5c32c] relative cursor-pointer transition-all after:hidden md:hover:after:block after:absolute
         after:bottom-[-10.9px] after:left-0 md:after:w-full hover:after:hidden after:h-[3px] after:bg-[#F5C32C] hover:text-[#F5C32C]'>Contact Us</span>

        {/* DarkMode */}
        <div className="bg-[#f5c32c] text-slate-800 shadow dark:bg-slate-800 rounded mx-4 flex items-center justify-center cursor-pointer w-[40px] h-[40px] dark:text-[#f5c32c] md:mt-0 mt-3"
          onClick={() => handleThemeSwitch()}>
          {theme === 'dark' ? <FaMoon className='' /> : <BsSunFill />}
        </div>

      </div>

    </header>
  )
}

export default Header