import React, { useState } from 'react'
import StarRating from '../components/StarRating'

const ContactPage = () => {

   


  return (
    <section  className='container mx-auto px-2 py-10 mt-28 min-h-screen'>


        <div className='px-2 mb-16'>

            <h2 className='text-2xl font-semibold my-6 text-center  tracking-wider uppercase'>Contact Us</h2>

            <form 
            className='max-w-[600px] mx-auto  p-5 shadow-2xl rounded-2xl flex flex-col gap-5'
            >

               

                    <div>
                       
                        <input type="text" name='name' placeholder='Enter Your Name' required />
                    </div>

                    <div>
                        
                        <input type="email" name="email"  placeholder='Enter Your Email'  required/>
                    </div>

                    <div>
                        
                        <textarea name="message" id=""  placeholder='Enter Your Message'  required/>
                    </div>


                    <button className='submit-btn'>
                        Submit
                    </button>
      
            </form>

        </div>


        <div className='px-2'>

            <h2 className='text-2xl font-semibold my-6 text-center  tracking-wider uppercase mt-10'>Give your feedback</h2>

            <form 
            className='max-w-[600px] mx-auto  p-5 shadow-2xl rounded-2xl flex flex-col gap-5'
            >

                    <div>
                        
                        <textarea name="message" id=""  placeholder='Enter Your Suggestion or Comment'  required/>
                    </div>

                    <StarRating />


                    <button className='submit-btn'>
                        Submit
                    </button>
      
            </form>

        </div>









    </section>
  )
}

export default ContactPage