import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import About from '../components/About'
import Skills from '../components/Skills'
import Works from '../components/Works'
import Contact from '../components/Contact'
import Social from '../components/Social'

function Home() {
  return (
    <div className='w-full bg-white dark:bg-[#09111f] relative'>
      <Header/>
      <Hero/>
      <About/>
      <Skills/>
      {/* <Works/> */}
      <Contact/>
      <Social/>
      <Footer/>
    </div>
  )
}

export default Home