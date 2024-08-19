import React from 'react'

const TouristPackageVariants = ({ variantNumber, tourTitle, details, lunch, bgColor }) => {
    return (
        <div className="flex flex-col items-center mt-5 bg-secondaryOpacity20">
            <div className={`w-full h-14 flex justify-center items-center ${bgColor} `}>
                <h1 className="font-body uppercase font-bold text-white text-3xl">{`ВАРИАНТ ${variantNumber}`}</h1>
            </div>
            <div className="text-center mt-5 w-[80%]">
                <p className="font-body uppercase font-bold mt-2">{tourTitle}</p>
                <p className="font-body mt-4  mx-auto">{details}</p>
                <p className="font-body font-bold text-2xl mt-4 mb-10 text-secondary">{lunch}</p>
            </div>
        </div>
    )
}

export default TouristPackageVariants
