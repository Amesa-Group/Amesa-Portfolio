import Home from "./pages/Home"
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Aos from 'aos'
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    Aos.init({duration: 2000});
    Aos.refresh({duration: 2000})
  }, [])

  return (
    <div className="!w-full">
     <ToastContainer/>
      <Home/>
    </div>
  )
}

export default App
