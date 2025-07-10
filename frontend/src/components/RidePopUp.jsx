import React from 'react'

const RidePopUp = ({ setRidePopUpPanel, setConfirmRidePopUpPanel }) => {
    return (
        <div>
            <div className='p-3'>
                <h5 onClick={() => {
                    setRidePopUpPanel(false)
                }} className='p-3 text-center absolute w-[93%]  top-0  mb-3'><i className="ri-arrow-down-wide-fill text-3xl text-gray-900"></i></h5>
                <h3 className='text-2xl font-semibold mb-5'>New Ride Available!</h3>
                <div className='flex items-center justify-between  mt-6 bg-yellow-400 rounded-lg p-3'>
                    <div className='flex items-center gap-3'>
                        <img className='h-12 w-12 rounded-full object-cover' src="https://th.bing.com/th/id/OIP.FHVgXMO1bE7c_8jW2XMsfQAAAA?w=400&h=400&rs=1&pid=ImgDetMain" alt="" />
                        <h2 className='text-lg font-bold'>Amit Bharti</h2>
                    </div>
                    <h5 className='text-lg font-bold'>
                        2.2 KM
                    </h5>
                </div>
                <div className='flex gap-2 justify-between flex-col items-center'>
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
                    <div className='flex mt- w-full items-center justify-between '>
                        <button
                            onClick={() => setConfirmRidePopUpPanel(true)} className=' mt-5 px-8 bg-green-600 text-white font-s p-2 rounded-lg '>
                            Accept Ride
                        </button>
                        <button onClick={() => {
                            setRidePopUpPanel(false)
                        }} className=' mt-5 bg-gray-300 text-gray-700 font-semibold p-2 px-8 rounded-lg '>
                            Ignore
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RidePopUp