import { useTranslation } from "react-i18next"
import { partnersLogos } from "../assets"

const Partners = () => {

    const { t } = useTranslation();

    return (
        <div className="max-w-screen-xl mx-auto items-center flex flex-col mt-10">
            <h1 className="font-body uppercase text-primary text-2xl mb-2">{t("partners")}</h1>
            <img className="w-2/3" src={partnersLogos} alt="Partners" />
            <div className="w-2/3 h-[1px] bg-gray-300 my-10"></div>
            <div className="w-2/3 justify-center items-center text-center flex flex-col">
                <h3 className="text-center font-body">{t('partnersDesc')} <span className="font-bold">(DISCOVERY)</span>”
                    <br></br>
                </h3>
                <span className="mt-5">BG176789478-2023-01-0008</span>
                <h3 className="text-center font-body mt-5">{t('partnersText')}</h3>
            </div>
        </div>
    )
}

export default Partners
