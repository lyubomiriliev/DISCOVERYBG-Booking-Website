import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { manImg, ovech1, pametnik1 } from '../assets'
import { useTranslation } from 'react-i18next'
import { touristSites } from '../util'

const Location = () => {

    const { t, i18n } = useTranslation();
    const { name } = useParams();
    const site = touristSites[name];

    if (!site) {
        return <div>Location not found</div>
    }


    const displayPhoto = site.places.map(place => {
        switch (place.photos[0]) {
            case 'ovech1':
                return ovech1;
            case 'pametnik1':
                return pametnik1;
            default:
                return null;
        }
    })



    return (
        <div className='w-2/3 flex flex-col mt-32 mx-auto relative'>
            <div className='flex  justify-center mb-10'>
                <h1 className='font-heading font-bold text-secondary text-4xl uppercase'>{site.name[i18n.language]}</h1>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center'>
                {site.places.map((place, index) => (
                    <Link key={index} to={`/site-details/${name}/${place.id}`}>
                        <div className='flex flex-col items-center'>
                            <h2>{place.name[i18n.language]}</h2>
                            <div className='w-64 h-32'>
                                <img src={displayPhoto[index]} className='w-full h-full object-cover mb-2' />
                            </div>
                            <div className='w-full mt-1 flex justify-end'>
                                <p className='text-sm text-gray-600'>See more...</p>
                            </div>
                        </div>
                    </Link>
                ))}

            </div>
            <p className='w-1/3 pl-8 mt-10'>Lorem ipsum dolor sit amet consectetur. Tellus quisque lacus semper tortor mauris porta mi viverra tellus. Quisque interdum dui etiam laoreet sed. Sed </p>
            <img className="w-64 absolute -bottom-24 -right-36 mb-1" src={manImg} alt="Man Image" />
        </div>
    )
}

export default Location
