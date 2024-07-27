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

    console.log(site.places[0].displayPhoto)

    return (
        <div className='max-w-screen-xl flex flex-col mt-32 mx-auto relative'>
            <div className='flex  justify-center mb-10'>
                <h1 className='font-heading font-bold text-secondary text-4xl uppercase'>{site.name[i18n.language]}</h1>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 justify-items-center'>
                {site.places.map((place, index) => (
                    <Link key={index} to={`/site-details/${name}/${place.id}`}>
                        <div className='flex flex-col items-center w-full mt-5'>
                            <h2 className='font-heading mb-2 w-full justify-center items-center text-center'>{place.name[i18n.language]}</h2>
                            <div className='flex w-80 h-40 justify-center gap-5 mb-2'>
                                <img src={place.displayPhoto} alt="" className='w-full object-cover' />
                            </div>
                            <div className='w-80 mt-1 flex flex-col mb-5 '>
                                <p className='w-full'>{place.description[i18n.language].substring(50, length) + '...'}</p>
                                <p className='text-sm mt-2 text-end text-gray-600'>{t('seeMore')}</p>
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
