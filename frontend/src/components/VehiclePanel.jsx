import React from 'react'

const VehiclePanel = ({setVehiclePanelOpen , setConfirmRidePanel}) => {
  return (
    <div>
         <h5 onClick={() => {
          setVehiclePanelOpen(false)
        }} className='p-3 text-center absolute w-[93%]  top-0  mb-3'><i className="ri-arrow-down-wide-fill text-3xl text-gray-900"></i></h5>
        <h3 className='text-2xl font-semibold mb-5'>Choose a Vehicle</h3>
        <div  onClick={()=>setConfirmRidePanel(true)} className='flex border-2 mb-3   rounded-xl active:border-black  bg-gray-100 p-3 items-center justify-between'>
          <img className='h-12' src="https://static.vecteezy.com/system/resources/previews/029/947/474/original/white-city-car-isolated-on-transparent-background-3d-rendering-illustration-free-png.png" alt="" />
          <div className=' w-50'>
            <h4 className='font-medium text-lg'>UberGo <span><i className="ri-user-3-fill"></i>4</span></h4>
            <h5 className='text-sm font-medium'>2 mins Away</h5>
            <p className='text-xm font-normal text-gray-600'>Affordable Compact Rides</p>
          </div>
          <h2 className='text-lg font-semibold'>$193</h2>
        </div>

        <div onClick={()=>setConfirmRidePanel(true)} className='flex border-2 mb-3 rounded-xl active:border-black  bg-gray-100 p-3 items-center justify-between'>
          <img className='h-12' src="https://th.bing.com/th/id/OIP.omqEEXeYkH82UxIvZdr_zQHaFR?rs=1&pid=ImgDetMain" alt="" />
          <div className=' w-50'>
            <h4 className='font-medium text-lg'>Moto <span><i className="ri-user-3-fill"></i>1</span></h4>
            <h5 className='text-sm font-medium'>3 mins Away</h5>
            <p className='text-xm font-normal text-gray-600'>Fast Motorcycle Rides</p>
          </div>
          <h2 className='text-lg font-semibold'>$65</h2>
        </div>

        <div onClick={()=>setConfirmRidePanel(true)} className='flex border-2 mb-3   rounded-xl  active:border-black  bg-gray-100 p-3 items-center justify-between'>
          <img className='h-12' src="https://5.imimg.com/data5/SELLER/Default/2022/10/FJ/GN/EH/104337066/piaggio-ape-city-plus-cng-passenger-auto-1000x1000.jpeg" alt="" />
          <div className=' w-50'>
            <h4 className='font-medium text-lg'>UberAuto <span><i className="ri-user-3-fill"></i>3</span></h4>
            <h5 className='text-sm font-medium'>5 mins Away</h5>
            <p className='text-xm font-normal text-gray-600'>Affordable Auto Rides</p>
          </div>
          <h2 className='text-lg font-semibold'>$193</h2>
        </div>
    </div>
  )
}

export default VehiclePanel