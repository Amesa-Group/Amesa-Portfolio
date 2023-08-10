import Header from './components/Header'
import Footer from './components/Footer'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Works from './components/Works'
import Contact from './components/Contact'

function App() {
  return (
    <div className='w-full bg-white dark:bg-[#09111f]'>
      <Header/>
      <Hero/>
      <About/>
      <Skills/>
      {/* <Works/> */}
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
