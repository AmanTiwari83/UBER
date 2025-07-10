import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { CaptainDataContext } from '../context/CaptainContext'
import axios from 'axios'

const CaptainSignUp = () => {
  const navigate = useNavigate()

  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [vehicleColor, setVehicleColor] = useState("")
  const [vehiclePlate, setVehiclePlate] = useState("")
  const [vehicleCapacity, setVehicleCapacity] = useState("")
  const [vehicleType, setVehicleType] = useState("")

  const {captain , setCaptain} = React.useContext(CaptainDataContext)


  const submitHandler = async (e) => {
    e.preventDefault()

    const captainData = {
      fullname : {
        firstname:firstName,
        lastname:lastName
      },
      email,
      password,
      vehicle : {
        color : vehicleColor,
        plate:vehiclePlate,
        capacity : vehicleCapacity,
        vehicleType : vehicleType
      }
    }

    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/register` , captainData)
    if(response.status === 201){
      const data = response.data
      setCaptain(data.captain)
      localStorage.setItem("token" , data.token)
      navigate("/captain-home")
    }

     setFirstName("")
     setLastName("")
     setEmail("")
     setPassword("")
     setVehicleCapacity("")
     setVehicleColor("")
     setVehiclePlate("")
     setVehicleType("")
  }

  return (
    <div className='p-7 flex flex-col justify-between h-screen'>
      <div>
      <img className='w-20 mb-8' src="https://logohistory.net/wp-content/uploads/2023/06/Uber-Symbol.png" alt="" />
       <form action="" onSubmit={submitHandler} autoComplete='false'>
        <h3 className='text-lg font-medium mb-2'>Whats your Name</h3>
        <div className='flex gap-4 justify-between mb-5'>
        <input type="text" value={firstName} onChange={(e)=>setFirstName(e.target.value)}  className='bg-[#eeeeee]  w-1/2 rounded px-4 py-2 text-lg placeholder:text-base' required placeholder='First Name' />
         <input type="text" value={lastName} onChange={(e)=>setLastName(e.target.value)}  className='bg-[#eeeeee] w-1/2 rounded px-4 py-2  text-lg placeholder:text-base' required placeholder='Last Name' />
        </div>
      <h3 className='text-lg font-medium mb-2'>Whats your Email</h3>
      <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)}  className='bg-[#eeeeee] mb-5 rounded px-4 py-2  w-full text-lg placeholder:text-base' required placeholder='email@example.com' />
      <h3  className='text-lg font-medium mb-2'>Enter Passowrd</h3>
      <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} className='bg-[#eeeeee] mb-5 rounded px-4 py-2  w-full text-lg placeholder:text-base' required placeholder='Password' />

      <h3 className='text-lg font-medium mb-2'>Vehicle Information</h3>
          <div className='flex gap-4 mb-7'>
            <input
              required
              className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border-0 text-lg placeholder:text-base'
              type="text"
              placeholder='Vehicle Color'
              value={vehicleColor}
              onChange={(e) => {
                setVehicleColor(e.target.value)
              }}
            />
            <input
              required
              className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border-0 text-lg placeholder:text-base'
              type="text"
              placeholder='Vehicle Plate'
              value={vehiclePlate}
              onChange={(e) => {
                setVehiclePlate(e.target.value)
              }}
            />
          </div>
          <div className='flex gap-4 mb-7'>
            <input
              required
              className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border-0 text-lg placeholder:text-base'
              type="number"
              placeholder='Vehicle Capacity'
              value={vehicleCapacity}
              onChange={(e) => {
                setVehicleCapacity(e.target.value)
              }}
            />
            <select
              required
              className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border-0 text-lg placeholder:text-base'
              value={vehicleType}
              onChange={(e) => {
                setVehicleType(e.target.value)
              }}
            >
              <option value="" disabled>Select Vehicle Type</option>
              <option value="car">Car</option>
              <option value="auto">Auto</option>
              <option value="moto">Moto</option>
            </select>
          </div>


      <button className='bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2 border w-full text-lg placeholder:text-base'>Create Captain Account</button>
      </form>
      <p className='text-center'>Already have a Account? <Link to="/captain-login" className='text-blue-600'>Login Here</Link></p>
      </div>
      <div>
      <p className='text-[14px] text-justify mb-4 leading-tight'>
        This site is Protected by reCAPTCHA and the <b><u>Google Privacy Policy</u></b> and <b><u>Terms of Service</u></b> apply. 
      </p>
      </div>
    </div>
  )
}

export default CaptainSignUp