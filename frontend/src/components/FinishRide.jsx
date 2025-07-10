import React from 'react'
import { Link } from 'react-router-dom'

const FinishRide = ({setFinishRidePanel}) => {
    
  return (
    <div>
      <div className='p-3 '>
        <h5 onClick={() => {
          setFinishRidePanel(false)
        }} className='p-3 text-center absolute w-[93%]  top-0  mb-3'><i className="ri-arrow-down-wide-fill text-3xl text-gray-900"></i></h5>
        <h3 className='text-2xl font-bold mb-5'>Confirm this ride to Start!</h3>
        <div className='flex items-center justify-between  mt-6 border-2 border-yellow-400 rounded-lg p-3'>
          <div className='flex items-center gap-3'>
            <img className='h-12 w-12 rounded-full object-cover' src="https://th.bing.com/th/id/OIP.FHVgXMO1bE7c_8jW2XMsfQAAAA?w=400&h=400&rs=1&pid=ImgDetMain" alt="" />
            <h2 className='text-lg font-bold'>Amit Bharti</h2>
          </div>
          <h5 className='text-lg font-bold'>
            2.2 KM
          </h5>
        </div>
        <div className='flex gap-2 justify-between  flex-col '>
          <div className='w-full mt-5'>
            <div className='flex  items-center gap-5 p-3 border-b-1 border-gray-300'>
              <i className="text-lg ri-map-pin-fill"></i>
              <div>
                <h3 className='text-lg font-bold'>562/11-A</h3>
                <p className='text-sm -mt-1 text-gray-600'>Kankariya Talab, Lucknow</p>
              </div>
            </div>
            <div className='flex  items-center gap-5 p-3 border-b-1 border-gray-300'>
              <i className="ri-map-pin-3-fill"></i>
              <div>
                <h3 className='text-lg font-bold'>562/11-A</h3>
                <p className='text-sm -mt-1 text-gray-600'>Kankariya Talab, Lucknow</p>
              </div>
            </div>
            <div className='flex  items-center gap-5 p-3 border-b-1 border-gray-300'>
              <i className="ri-currency-line"></i>
              <div>
                <h3 className='text-lg font-bold'>₹193.50</h3>
                <p className='text-sm -mt-1 text-gray-600'>Cash Cash</p>
              </div>
            </div>
          </div>

          <div className='mt-6 p-0 '>
            <Link to="/captain-home" className='w-full text-lg flex justify-center mt-7 bg-green-600 text-white font-semibold p-2 rounded-lg '>Finish This Ride
              </Link>
              {/* <p className='mt-15 text-xm'>Click on finish ride if you have completed the payment.</p> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default FinishRide