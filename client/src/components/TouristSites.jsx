import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom"
import { touristSites } from "../util.js"
import { dalgopol, dolniChiflik, provadia } from "../assets/index.js";

const TouristSites = () => {

    const { t, i18n } = useTranslation();

    const sitesWithLogos = [
        { key: 'dalgopol', logo: dalgopol },
        { key: 'dolniChiflik', logo: dolniChiflik },
        { key: 'provadia', logo: provadia },
    ]

    return (

        <div className="w-full flex flex-col justify-center items-center">
            <h1 className="font-body text-primary text-4xl font-bold uppercase mb-10 mt-10">{t('touristSites')}</h1>
            <div className='flex flex-col md:flex-row w-2/3 justify-center mb-5 '>
                {sitesWithLogos.map((site) => (
                    <Link key={site.key} to={`/location/${site.key}`}>
                        <div className='flex flex-col space-x-20 items-center relative'>
                            <h2 className="font-heading uppercase font-bold text-2xl absolute bottom-8 text-white drop-shadow-lg z-10">{touristSites[site.key].name[i18n.language]}</h2>
                            <img src={site.logo} alt={`${touristSites[site.key].name[i18n.language]} Logo`} className="w-80 object-fit mb-5 mt-2 hover:opacity-70" />
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default TouristSites
