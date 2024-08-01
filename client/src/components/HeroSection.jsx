import { useTranslation } from "react-i18next"
import { heroImg } from "../assets"

const HeroSection = () => {

    const { t } = useTranslation()

    return (
        <div className="w-full flex flex-col justify-center items-center mt-48">
            <h1 className="font-heading font-bold text-primary uppercase text-3xl mb-10">{t('bookTrips')}</h1>
            <img className="w-1/4" src={heroImg} alt="TouristsImage" />
        </div>
    )
}

export default HeroSection
