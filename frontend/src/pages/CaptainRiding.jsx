import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import FinishRide from '../components/FinishRide'

const CaptainRiding = () => {
    const [finishRidePanel, setFinishRidePanel] = useState(false)
    const finishRidePanelRef = useRef(null)

    useGSAP(() => {
        if (finishRidePanel) {
          gsap.to(finishRidePanelRef.current, {
            transform: "translateY(0)"
          })
        }
        else {
          gsap.to(finishRidePanelRef.current, {
            transform: "translateY(100%)"
          })
        }
      }, [finishRidePanel])

    return (
        <div className='h-screen relative'>
            <div className='fixed p-6 top-0 flex items-center  w-screen justify-between'>
                <img className='w-16 ' src="https://clipground.com/images/logo-uber-png-2.png" alt="" />
                <Link to="/captain-home" className=' h-10 w-10  bg-white flex justify-center items-center rounded-full'>
                    <i className=" text-lg font-medium ri-logout-box-r-line"></i>
                </Link>
            </div>
            <div className='h-4/5'>
                <img className='h-full w-full  object-cover object-center' src="https://static.vecteezy.com/system/resources/previews/019/842/898/large_2x/gps-navigator-pin-checking-point-a-to-point-b-vector.jpg" alt="" />
            </div>

            <div className="h-1/5  flex items-center justify-between relative bg-yellow-400 "
            onClick={()=>setFinishRidePanel(true)}>
                <h5 onClick={() => {

                }} className=' text-center p-1 absolute w-full top-0'>
                    <i className="ri-arrow-down-wide-fill text-3xl text-gray-900"></i>
                </h5>
               <div className='p-6 flex justify-between w-full mt-6'>
               <h4 className='text-xl  font-bold'>4 KM Away</h4>
               <button className=' px-8  bg-green-600 text-white font-s p-2 rounded-lg'>Complete Ride</button>
               </div>
            </div>

            
      <div className='fixed w-full z-10 bottom-0  translate-y-full bg-white px-3 py-10 pt-12' ref={finishRidePanelRef}>
        <FinishRide setFinishRidePanel={setFinishRidePanel}  />
      </div>

        </div>
    )
}

export default CaptainRiding