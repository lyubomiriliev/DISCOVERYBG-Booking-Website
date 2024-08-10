import React from 'react'

const TouristPackageVariants = ({ variantNumber, tourTitle, details, lunch, bgColor }) => {
    return (
        <div className="w-2/3  mx-auto">
            <div className="flex items-center flex-col">
                <div className={`w-72 h-14 flex justify-center items-center ${bgColor} bg mt-5`}>
                    <h1 className="font-body uppercase font-bold text-white text-3xl ">{`ВАРИАНТ ${variantNumber}`}</h1>
                </div>
            </div>
            <div className="w-2/6 text-center flex flex-col justify-center items-center mx-auto mt-5 ">
                <p className="font-body uppercase font-bold mt-2">{tourTitle}</p>
                <p className="font-body mt-2">{details}</p>
                <p className="font-body font-bold text-2xl mt-4 text-secondary">{lunch}</p>
            </div>
        </div>
    )
}

export default TouristPackageVariants
