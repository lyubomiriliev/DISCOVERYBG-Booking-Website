import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { manImg } from '../assets'

const Location = () => {

    const { name } = useParams();
    const places = ['Place 1', 'Place 2', 'Place 3', 'Place 4', 'Place 5', 'Place 6', 'Place 7', 'Place 8', 'Place 9', 'Place 10'];

    return (
        <div className='w-2/3 flex flex-col mt-32 mx-auto relative'>
            <div className='flex  justify-center mb-10'>
                <h1 className='text-heading font-bold text-secondary text-4xl uppercase'>{name}</h1>
            </div>
            <Link to="/site-details">
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center'>
                    {places.map((place, index) => (
                        <Link key={index} to={`/site-details/${name.toLowerCase()}/${place.toLowerCase().replace(' ', '-')}`}>
                            <div className='flex flex-col items-center'>
                                <h2>{place}</h2>
                                <div className='w-64 h-32 bg-gray-300'></div>
                                <div className='w-full mt-1 flex justify-end'>
                                    <p className='text-sm text-gray-600'>See more...</p>
                                </div>
                            </div>
                        </Link>
                    ))}

                </div>
            </Link>
            <p className='w-1/3 pl-8 mt-10'>Lorem ipsum dolor sit amet consectetur. Tellus quisque lacus semper tortor mauris porta mi viverra tellus. Quisque interdum dui etiam laoreet sed. Sed </p>
            <img className="w-64 absolute -bottom-24 -right-36 mb-1" src={manImg} alt="Man Image" />
        </div>
    )
}

export default Location
