import React from 'react'
import {Link} from "react-router-dom"
const Riding = () => {
    return (
        <div className='h-screen'>
            <Link to="/" className='fixed h-10 w-10 top-3 right-3 bg-white flex justify-center items-center rounded-full'>
            <i className="ri-home-9-fill  text-lg font-medium"></i>
            </Link>
            <div className='h-1/2'>
                <img className='h-full w-full object-cover object-center' src="https://static.vecteezy.com/system/resources/previews/019/842/898/large_2x/gps-navigator-pin-checking-point-a-to-point-b-vector.jpg" alt="" />
            </div>
            <div className="h-1/2 p-4 pt-6">
                <div className='flex items-center justify-between'>
                    <img className='h-25' src="https://static.vecteezy.com/system/resources/previews/029/947/474/original/white-city-car-isolated-on-transparent-background-3d-rendering-illustration-free-png.png" alt="" />
                    <div className='text-right'>
                        <h2 className='text-lg font-bold'>Sathak</h2>
                        <h4 className='text-xl -mt-1 -mb-1 font-semibold'>MP 04 AB 3456</h4>
                        <p className='text-sm text-gray-600'>Maruti Suzuki Alto</p>
                    </div>

                </div>

                <div className='flex gap-2 justify-between flex-col items-center'>
                    <div className='w-full mt-5'>
                        
                        <div className='flex  items-center gap-5 p-3 my-3 border-b-1 border-gray-300'>
                            <i className="ri-map-pin-3-fill"></i>
                            <div>
                                <h3 className='text-lg font-bold'>562/11-A</h3>
                                <p className='text-sm -mt-1 text-gray-600'>Kankariya Talab, Lucknow</p>
                            </div>
                        </div>
                        <div className='flex  items-center gap-5 p-3 my-3 border-b-1 border-gray-300'>
                            <i className="ri-currency-line"></i>
                            <div>
                                <h3 className='text-lg font-bold'>₹193.50</h3>
                                <p className='text-sm -mt-1 text-gray-600'>Cash Cash</p>
                            </div>
                        </div>
                    </div>

                </div>

                <button className='w-full mt-5 bg-green-600 text-white font-s p-2 rounded-lg '>Make a Payment</button>
            </div>
        </div>
    )
}

export default Riding