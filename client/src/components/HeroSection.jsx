import { useTranslation } from "react-i18next"
import { heroImg } from "../assets"

const HeroSection = () => {

    const { t } = useTranslation()

    return (
        <div className="w-full flex flex-col justify-center items-center mt-48">
            <h1 className="font-body font-bold text-primary uppercase text-3xl mb-2">{t('homeTitle')}</h1>
            <h3 className="font-body font-medium text-secondary uppercase mb-10">{t('homeSubTitle')}</h3>
            <img className="w-1/4" src={heroImg} alt="TouristsImage" />
            <div className="w-full h-80 bg-secondary flex flex-col justify-around mt-10">
                <div className="flex flex-col text-center mx-auto w-2/4">
                    <p className="font-body text-center">{t('homeDescription')}</p>
                    <p className="font-body text-center font-bold my-5">{t('homeDescription2')}</p>
                    <p className="font-body text-center">{t('homeDescription3')}</p>
                </div>
            </div>
        </div>
    )
}

export default HeroSection
