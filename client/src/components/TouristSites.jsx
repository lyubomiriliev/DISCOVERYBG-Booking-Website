import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom"
import { touristSites } from "../util.js"
import { dalgopolPackages, dolniChiflikPackages, provadiqPackages } from "../assets/index.js";

const TouristSites = () => {

    const { t, i18n } = useTranslation();

    const sitesWithLogos = [
        { key: 'dalgopol', logo: dalgopolPackages },
        { key: 'dolniChiflik', logo: dolniChiflikPackages },
        { key: 'provadia', logo: provadiqPackages },
    ]



    return (

        <div className="w-full flex flex-col justify-center items-center -mt-6 md:mt-48 ">
            <h1 className="font-body text-primary text-2xl md:text-3xl font-bold uppercase mb-5">{t('touristSites')}</h1>
            <div className='flex flex-col md:flex-row w-2/3 justify-center mb-5'>
                {sitesWithLogos.map((site) => (
                    <Link key={site.key} to={`/location/${site.key}`}>
                        <div className='flex flex-col md:space-x-20 items-center relative'>
                            <h2 className="font-heading uppercase font-bold text-2xl absolute md:right-3 mx-auto bottom-5 text-white drop-shadow-lg z-10">{touristSites[site.key].name[i18n.language]}</h2>
                            <img src={site.logo} alt={`${touristSites[site.key].name[i18n.language]} Logo`} className="w-80 object-fit my-4 hover:opacity-70" />
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default TouristSites
