import React from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

function PInfo() {

  useEffect(()=>{
    AOS.init();
  },[])

  return (
    <div data-aos="fade-left">
      <div className='personal-info'>
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email-sign" placeholder="Type your email"/>
        <label htmlFor="email">Full Name</label>
        <input type="text" name="name" id="name-sign" placeholder="Type your full name"/>
        <label htmlFor="passw">Password</label>
        <input type="password" name="passw" id="passw-sign" placeholder="Type your password"/>
      </div>
    </div>
  )
}

export default PInfo