import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom"
import { touristSites } from "../util.js"
import { dalgopolLogo, dolniChiflikLogo, provadiaLogo } from "../assets/index.js";

const TouristSites = () => {

    const { t, i18n } = useTranslation();

    const sitesWithLogos = [
        { key: 'dalgopol', logo: dalgopolLogo },
        { key: 'dolniChiflik', logo: dolniChiflikLogo },
        { key: 'provadia', logo: provadiaLogo },
    ]

    return (

        <div className="w-full  flex flex-col justify-center items-center mt-32">
            <h1 className="font-heading text-primary text-4xl font-bold uppercase mb-10">{t('touristSites')}</h1>
            <div className='flex flex-col md:flex-row w-1/3 justify-around mb-5 '>
                {sitesWithLogos.map((site) => (
                    <Link key={site.key} to={`/location/${site.key}`}>
                        <div className='flex flex-col items-center'>
                            <h2 className="font-heading uppercase font-bold text-2xl ">{touristSites[site.key].name[i18n.language]}</h2>
                            <img src={site.logo} alt={`${touristSites[site.key].name[i18n.language]} Logo`} className="w-48 h-48 object-fill mb-5 mt-2" />
                        </div>
                    </Link>
                ))}
            </div>
            <div className="w-1/3 flex flex-col justify-center">
                <p className="font-body text-center">{t('homeDescription')}</p>
            </div>
        </div>
    )
}

export default TouristSites
