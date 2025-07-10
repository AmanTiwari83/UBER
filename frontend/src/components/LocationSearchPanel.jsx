import React from 'react'

const LocationSearchPanel = ({setVehiclePanelOpen , setPanelOpen}) => {
    const location = [
        "345 Techpile Technology Pvt Ltd, Vikash Nagar Lucknow",
        "567 Jagrani Hospital, Vikash Nagar Lucknow",
        "222 Metro Station, Munshi Puliya , Lucknow"
    ]
    return (
        <div>
            {
                location.map((name,idx) => {
                    return (
                        <>
                            <div key={name} onClick={()=>{
                                setVehiclePanelOpen(true)
                                setPanelOpen(false)
                            }} className='flex items-center p-3 rounded-xl mb-2 border-transparent active:border-black justify-start gap-4'>
                                <h2 className='bg-[#eee] h-10 w-14 flex items-center justify-center  rounded-full'><i className="ri-map-pin-line "></i></h2>
                                <h4 className='font-medium'>{name}</h4>
                            </div>
                        </>
                    )
                })
            }
        </div>
    )
}

export default LocationSearchPanel