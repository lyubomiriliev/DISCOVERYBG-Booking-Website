import { useTranslation } from "react-i18next"
import { heroImg } from "../assets"

const HeroSection = () => {

    const { t } = useTranslation()

    return (
        <div className="w-full flex flex-col justify-center items-center mt-28 md:mt-48">
            <div className="w-full px-4 flex flex-col justify-center items-center text-center">
                <h1 className="font-body font-bold text-primary uppercase text-2xl md:text-3xl mb-2">{t('homeTitle')}</h1>
                <h3 className="font-body font-medium text-secondary uppercase text-base md:text-xl mb-6 md:mb-10">{t('homeSubTitle')}</h3>
            </div>
            <img className="w-3/4 md:w-1/4 object-cover mb-6 md:mb-0" src={heroImg} alt="TouristsImage" />
            <div className="w-full h-auto bg-secondary flex flex-col justify-around mt-6 md:mt-10 py-10">
                <div className="flex flex-col text-center mx-auto w-11/12 md:w-2/4 space-y-8">
                    <p className="font-body text-base md:text-lg">{t('homeDescription')}</p>
                    <p className="font-body text-base md:text-lg font-bold my-3">{t('homeDescription2')}</p>
                    <p className="font-body text-base md:text-lg">{t('homeDescription3')}</p>
                </div>
            </div>
        </div>
    )
}

export default HeroSection
