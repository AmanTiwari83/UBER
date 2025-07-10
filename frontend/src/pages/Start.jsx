import React from 'react'
import { Link } from 'react-router-dom'

const Start = () => {
  return (
    <div className=' bg-cover bg-center bg-[url(https://images.unsplash.com/photo-1624724126923-e2c021df1311?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)]  h-screen pt-8 w-full flex justify-between flex-col'>
      <img className='w-16 m-8' src="https://clipground.com/images/logo-uber-png-2.png" alt="" />
      <div className='bg-white pb-7  px-4 py-10 '> 
        <h2 className='text-[30px] text-center font-bold'>Get Started with Uber</h2>
        <Link to="/login" className='flex justify-center align-middle w-full bg-black text-white py-3 mb-8 rounded mt-3'>Continue</Link>
      </div>
    </div>
  )
}

export default Start