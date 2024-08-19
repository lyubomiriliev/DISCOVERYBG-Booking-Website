import React from 'react'

const TouristPackageDays = ({ dayNumber, bgColor, details, lunchDetails, night }) => {
    return (
        <div className="flex flex-col items-center mt-5 bg-secondaryOpacity20">
            <div className={`w-full h-14 flex justify-center items-center ${bgColor}`}>
                <h1 className="font-body uppercase font-bold text-white text-3xl ">{`ДЕН ${dayNumber}`}</h1>
            </div>
            <div className="text-center mt-5 w-[80%]">
                <p className="font-body mt-2">{details}</p>
                <p className="font-body font-bold text-xl my-5 text-secondary">ОБЯД</p>
                <p className="font-body my-5">{lunchDetails}</p>
                <p className='font-body my-5 font-bold text-lg text-secondary uppercase'>{night}</p>
            </div>
        </div>
    )
}

export default TouristPackageDays
