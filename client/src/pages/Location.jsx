import React from 'react'

const Location = () => {
    return (
        <div className='w-2/3 flex flex-col mt-32 mx-auto'>
            <div className='flex  justify-center mb-10'>
                <h1 className='text-heading font-bold text-secondary text-4xl uppercase'>Nessebar</h1>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center'>
                {['Place 1', 'Place 2', 'Place 3', 'Place 4'].map((place, index) => (
                    <div key={index} className='flex flex-col items-center'>
                        <h2>{place}</h2>
                        <div className='w-64 h-32 bg-gray-300'></div>
                        <div className='w-full mt-1 flex justify-end'>
                            <p className='text-sm text-gray-600'>See more...</p>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default Location
