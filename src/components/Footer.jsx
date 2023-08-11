import React, { useEffect, useState} from 'react'

function Footer() {
  const [year, setYear] = useState('')

  useEffect(() => {
    const date = new Date();
    setYear(date.getFullYear())
  }, [])
  return (
    <div className='flex items-center justify-center flex-col gap-4 w-full p-6 bg-[#e9e8e8] dark:bg-slate-900 mt-7 '>
    <span className='max-[480px]:text-sm text-xl text-[#222] dark:text-gray-300 mt-3'>© {year} Amesa Solutions . All rigths reserved</span>
      <ul className='max-[480px]:hidden flex items-center justify-center gap-4 text-gray-400'>
        <li>Home</li>
        <li>About us</li>
        <li>Skills</li>
        <li>Works</li>
        <li>Contact us</li>
      </ul>
    </div>
  )
}

export default Footer