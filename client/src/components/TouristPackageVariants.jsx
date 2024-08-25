import React from 'react'

const TouristPackageVariants = ({ variantNumber, details, lunch, bgColor, timeStamps, id }) => {
    return (
        <div className="w-full flex flex-col items-center mt-5 bg-secondaryOpacity20">
            <div className={`w-full h-14 flex justify-center items-center ${bgColor} `}>
                <h1 className="font-body uppercase font-bold text-white text-3xl">{`ВАРИАНТ ${variantNumber}`}</h1>
            </div>
            <div className="text-left flex flex-col mt-5 w-[85%]">

                <div className='grid grid-cols-[1fr_auto] gap-x-4 mb-4'>
                    <div className='font-body font-bold text-base uppercase'>Активност</div>
                    <div className='font-body font-bold text-base text-right uppercase'>Времетраене</div>
                </div>

                <div className='grid grid-cols-[1fr_auto] gap-x-4'>
                    {details.map((detail, index) => (
                        <React.Fragment key={index}>
                            <div className='font-body text-sm mb-4 w-full'>{detail}</div>
                            <div className='font-body text-sm mb-4 text-right'>
                                {timeStamps[index]} мин.
                            </div>
                        </React.Fragment>
                    ))}
                </div>
                <p className="font-body font-bold text-2xl mt-4 mb-10 text-secondary">{lunch}</p>

            </div>
        </div>
    )
}

export default TouristPackageVariants
