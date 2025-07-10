import React from 'react'

const ConfirmRide = ({ setConfirmRidePanel , setVehicleFound }) => {
    return (
        <div className='p-3'>
            <h5 onClick={() => {
                setConfirmRidePanel(false)
            }} className='p-3 text-center absolute w-[93%]  top-0  mb-3'><i className="ri-arrow-down-wide-fill text-3xl text-gray-900"></i></h5>
            <h3 className='text-2xl font-semibold mb-5'>Confirm  Your Ride</h3>
            <div className='flex gap-2 justify-between flex-col items-center'>
                <img className='h-25' src="https://static.vecteezy.com/system/resources/previews/029/947/474/original/white-city-car-isolated-on-transparent-background-3d-rendering-illustration-free-png.png" alt="" />
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
                <button onClick={()=>{
                    setVehicleFound(true)
                    setConfirmRidePanel(false)
                }} className='w-full mt-5 bg-green-600 text-white font-s p-2 rounded-lg '>Confirm</button>
            </div>
        </div>
    )
}

export default ConfirmRide