import React, { useRef, useState } from 'react'
import { Link } from "react-router-dom"
import CaptainsDetails from '../components/CaptainsDetails'
import RidePopUp from '../components/RidePopUp'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import ConfirmRidePopUp from '../components/ConfirmRidePopUp'
const CaptainHome = () => {
  const [ridePopUpPanel, setRidePopUpPanel] = useState(true)
  const ridePopUpPanelRef = useRef(null)
  const [confirmRidePopUpPanel, setConfirmRidePopUpPanel] = useState(false)
  const confirmRidePopUpPanelRef = useRef(null)
  
  useGSAP(() => {
    if (ridePopUpPanel) {
      gsap.to(ridePopUpPanelRef.current, {
        transform: "translateY(0)"
      })
    }
    else {
      gsap.to(ridePopUpPanelRef.current, {
        transform: "translateY(100%)"
      })
    }
  }, [ridePopUpPanel])

  useGSAP(() => {
    if (confirmRidePopUpPanel) {
      gsap.to(confirmRidePopUpPanelRef.current, {
        transform: "translateY(0)"
      })
    }
    else {
      gsap.to(confirmRidePopUpPanelRef.current, {
        transform: "translateY(100%)"
      })
    }
  }, [confirmRidePopUpPanel])

  return (
    <div className='h-screen'>
      <div className='fixed p-4 top-0 flex items-center w-full justify-between'>
        <img className='w-16 ' src="https://clipground.com/images/logo-uber-png-2.png" alt="" />
        <Link to="/" className=' h-10 w-10  bg-white flex justify-center items-center rounded-full'>
          <i className=" text-lg font-medium ri-logout-box-r-line"></i>
        </Link>
      </div>
      <div className='h-2/3'>
        <img className='h-full w-full object-cover object-center' src="https://static.vecteezy.com/system/resources/previews/019/842/898/large_2x/gps-navigator-pin-checking-point-a-to-point-b-vector.jpg" alt="" />
      </div>

      <div className="h-1/3 p-4 pt-6">
        <CaptainsDetails/>
      </div>

      <div ref={ridePopUpPanelRef} className='fixed w-full z-10 bottom-0  translate-y-full bg-white px-3 py-10 pt-12'>
        <RidePopUp setRidePopUpPanel={setRidePopUpPanel} setConfirmRidePopUpPanel={setConfirmRidePopUpPanel}  />
      </div>

      <div ref={confirmRidePopUpPanelRef} className='fixed w-full h-screen z-10 bottom-0  translate-y-full bg-white px-3 py-10 pt-12'>
        <ConfirmRidePopUp setConfirmRidePopUpPanel={setConfirmRidePopUpPanel}   setRidePopUpPanel={setRidePopUpPanel} />
      </div>
    </div>
  )
}

export default CaptainHome