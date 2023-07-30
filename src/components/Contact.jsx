import React from 'react'
import ContactImg from '../assets/Contact us.png'
import {Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'

function Contact() {


  const initialValues = {
    name: '',
    email: '',
    Message: '',
  }

  const validationSchema = Yup.object({
    name: Yup.string().required("Please Enter your First Name"),
    email: Yup.string().email("Please Enter your Email").required("Please Enter Email"),
    Message: Yup.string().required("Please Enter your Message")
  })

  const handleSubmit = (values) => {
    console.log(values)
  }

  return (
    <div className='md:px-[11%] px-6 mt-1 md:mt-16 w-full h-[70vh] md:h-[80vh] bg-white dark:bg-[#09111f]'>
       {/* title */}
       <div className='mx-auto lg:mb-8'>
       <h1 className='font-bold text-3xl text-[#f5c32c] text-center'>
        Contact us
       </h1>
      </div>
      {/* content */}
      <div className='md:mt-0 mt-4 w-full md:w-auto flex md:flex-row flex-col md:gap-6 items-center justify-center'>
         <div className='hidden md:flex mt-4 md:mt-0 md:w-[24rem]'>
            <img src={ContactImg} alt="Ameesa Solutions" className='w-full'/>
          </div>
          <Formik 
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
          >
           <div className="w-[100%] md:w-1/2 flex flex-col gap-4">
           <h2 className='text-xl font-medium text-slate-800 dark:text-gray-100'>Get In Touch  Us</h2>
            <Form className='flex flex-col gap-3'>
             <div >
                <Field
                type='text'
                name="name"
                placeholder="Name"
                id="input"
                className="bg-gray-200 dark:bg-slate-800 transition-all focus:border-b-[3px] border-slate-800 dark:border-[#f5c32c] dark:text-white"
                />
              </div> 


              <div>
                <Field
                type='email'
                name="email"
                placeholder="E-mail"
                id="input"
                className="bg-gray-200 dark:bg-slate-800 transition-all focus:border-b-[3px] border-slate-800 dark:border-[#f5c32c] dark:text-white"

                />
              </div>

              <div>
                <Field
                  as='textarea'
                  name="Message"
                  placeholder="Message"
                  id="input"
                  className="h-[140px] bg-gray-200 dark:bg-slate-800 transition-all focus:border-b-[3px] border-slate-800 dark:border-[#f5c32c] dark:text-white"
                  />
              </div>

              <button type='submit' id="btn" className='w-[9rem] bg-[#242D49] dark:bg-[#f5c32c] hover:bg-[#] text-xl text-white rounded-[4px]  shadow-[0px_4px_0px_0px_#191e2e] hover:shadow-[0px_-4px_0px_0px_#191e2e] dark:shadow-[0px_4px_0px_0px_#8d6b05] dark:hover:shadow-[0px_-4px_0px_0px_#8d6b05]'>Submit</button>
            </Form> 
           </div>
          </Formik>
      </div>
    </div>
  )
}

export default Contact