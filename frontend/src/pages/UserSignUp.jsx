import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import {UserDataContext} from '../context/UserContext'

const UserSignUp = () => {
  const navigate = useNavigate()
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const {user , setUser} = React.useContext(UserDataContext)

  const submitHandler =async  (e) => {
    e.preventDefault()
    const newUser = {
      fullname : {
        firstname :firstName,
        lastname : lastName
      },
      email,
      password
     }

     const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/register`, newUser)
     if(response.status === 201){
        const data = response.data
        setUser(data.user)
        localStorage.setItem("token", data.token)
        navigate('/home')
     }
     setFirstName("")
     setLastName("")
     setEmail("")
     setPassword("")
  }

  return (
    <div className='p-7 flex flex-col justify-between h-screen'>
      <div>
      <img className='w-16 mb-8' src="https://clipground.com/images/logo-uber-png-2.png" alt="" />
      <form action="" onSubmit={submitHandler}>
        <h3 className='text-lg font-medium mb-2'>Whats your Name</h3>
        <div className='flex gap-4 justify-between mb-5'>
        <input type="text" value={firstName} onChange={(e)=>setFirstName(e.target.value)}  className='bg-[#eeeeee]  w-1/2 rounded px-4 py-2 text-lg placeholder:text-base' required placeholder='First Name' />
         <input type="text" value={lastName} onChange={(e)=>setLastName(e.target.value)}  className='bg-[#eeeeee] w-1/2 rounded px-4 py-2  text-lg placeholder:text-base' required placeholder='Last Name' />
        </div>
      <h3 className='text-lg font-medium mb-2'>Whats your Email</h3>
      <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)}  className='bg-[#eeeeee] mb-5 rounded px-4 py-2  w-full text-lg placeholder:text-base' required placeholder='email@example.com' />
      <h3  className='text-lg font-medium mb-2'>Enter Passowrd</h3>
      <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} className='bg-[#eeeeee] mb-5 rounded px-4 py-2  w-full text-lg placeholder:text-base' required placeholder='Password' />
      <button className='bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2 border w-full text-lg placeholder:text-base'> Register</button>
      </form>
      <p className='text-center'>Already have a Account? <Link to="/login" className='text-blue-600'>Login Here</Link></p>
      </div>
      <div>
      <p className='text-[14px] text-justify mb-4 leading-tight'>By Proceeding, you concent to get calls, whatsapp or SMS message, incuding by automated means
         from Uber and its affililates to the number Provider. </p>
      </div>
    </div>
  )
}

export default UserSignUp