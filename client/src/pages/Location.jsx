import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { manImg } from '../assets'
import { useTranslation } from 'react-i18next'
import { touristSites } from '../util'
import Breadcrumbs from '../components/Breadcrumbs'

const Location = () => {

    const { t, i18n } = useTranslation();
    const { name } = useParams();
    const site = touristSites[name];

    if (!site) {
        return <div>Location not found</div>
    }


    return (
        <div className='w-full lg:max-w-screen-xl flex flex-col mt-28 md:mt-44 mx-auto relative'>
            <Breadcrumbs />

            <div className='flex justify-center py-2'>
                <h1 className='font-body font-bold text-secondary text-4xl uppercase'>{site.name[i18n.language]}</h1>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 justify-items-center'>
                {site.places.map((place, index) => (
                    <Link key={index} to={`/site-details/${name}/${place.id}`}>
                        <div className='flex flex-col items-center w-[90%] mx-auto lg:w-80 mt-5'>
                            <h2 className='font-body font-bold w-full justify-center items-center text-center md:mb-4 h-12 md:h-10'>{place.name[i18n.language]}</h2>
                            <div className='flex w-full h-40 justify-center mb-2'>
                                <img src={place.displayPhoto} alt="" className='w-full rounded-md object-cover' />
                            </div>
                            <div className='w-full md:mt-1 flex flex-col mb-5 '>
                                <p className='w-full font-body'>{place.description[i18n.language].substring(52, length) + '...'}</p>
                                <button className='text-sm mt-2 w-40 text-center font-body bg-secondary px4 py-2 rounded-full text-white'>{t('seeMore')}</button>
                            </div>
                        </div>
                    </Link>
                ))}

            </div>
            <img className="w-64 absolute -bottom-24 -right-36 mb-1 hidden md:block" src={manImg} alt="Man Image" />
        </div>
    )
}

export default Location
