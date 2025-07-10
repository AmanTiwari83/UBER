import React from 'react'

const CaptainsDetails = () => {
  return (
    <div>
        
        <div className='flex items-center justify-between'>
          <div className='flex items-center gap-3'>
            <img className='h-10 w-10 rounded-full object-cover' src="https://th.bing.com/th/id/OIP.Q7yhZrQicdf60lDnwzvywAHaLH?rs=1&pid=ImgDetMain" alt="" />
            <h4 className='text-xl font-bold'>Harsh Tripathi</h4>
          </div>
          <div>
            <h4 className='text-xl font-bold'>₹295.2</h4>
            <p className='text-sm px-3 py-1 rounded-2xl mt-2 bg-gray-300'>Earned</p>
          </div>
        </div>
        <div className='flex justify-center p-3 mt-6 bg-gray-100 rounded-xl gap-5 items-start'>
          <div className='text-center '>
            <i className="ri-time-line text-3xl mb-2 font-thin"></i>
            <h5 className='text-lg font-bold'>10.2</h5>
            <p className='text-sm text-gray-600'>Hours Online</p>
          </div>
          <div className='text-center'>
            <i className="ri-speed-up-fill text-3xl mb-2 font-thin"></i>
            <h5 className='text-lg font-bold'>10.2</h5>
            <p className='text-sm text-gray-600'>Hours Online</p>
          </div>
          <div className='text-center'>
            <i className="ri-booklet-line text-3xl mb-2 font-thin"></i>
            <h5 className='text-lg font-bold'>10.2</h5>
            <p className='text-sm text-gray-600'>Hours Online</p>
          </div>
        </div>
      
    </div>
  )
}

export default CaptainsDetails