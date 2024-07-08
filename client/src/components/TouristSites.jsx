import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom"

const TouristSites = () => {

    const { t } = useTranslation();
    const destinations = [t('provadiya'), t('primorsko'), t('nessebar')];


    return (

        <div className="w-full  flex flex-col justify-center items-center mt-32">
            <h1 className="text-heading text-primary text-4xl font-bold uppercase mb-10">{t('touristSites')}</h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 justify-items-center mb-5'>
                {destinations.map((destination, index) => (
                    <Link key={index} to={`/location/${destination.toLowerCase()}`}>
                        <div className='flex flex-col items-center'>
                            <h2 className="text-heading uppercase font-bold text-2xl">{destination}</h2>
                            <div className='w-64 h-32 bg-gray-300'></div>
                        </div>
                    </Link>
                ))}

            </div>
            <div className="w-1/3 flex justify-center">
                <p className="font-body text-center">Lorem ipsum dolor sit amet consectetur. Tellus quisque lacus semper tortor mauris porta mi viverra tellus. Quisque interdum dui etiam laoreet sed. Sed </p>
            </div>
        </div>
    )
}

export default TouristSites
