import { Link } from "react-router-dom"
import { discoveryToShare, MTlogo, siteLogo } from "../assets"
import { useTranslation } from "react-i18next"
import { useEffect, useRef, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {

    const { i18n } = useTranslation();
    const languageRef = useRef(null);
    const { t } = useTranslation();

    const [showLanguage, setShowLanguage] = useState(false);
    const [changeLanguageText, setChangeLanguageText] = useState("")

    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang);
        setShowLanguage(false);
    }

    const toggleLanguageMenu = () => setShowLanguage(!showLanguage);

    const handleClickOutside = (event) => {
        if (languageRef.current && !languageRef.current.contains(event.target)) {
            setShowLanguage(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [])

    useEffect(() => {
        setChangeLanguageText(i18n.language.toUpperCase());
    }, [i18n.language]);


    return (
        <div className="w-full h-40 bg-white shadow-md fixed top-0 left-0 z-50 flex flex-col items-center">
            <div className="flex space-x-2 items-center 0">
                <img className="w-52 object-cover -mr-3" src={siteLogo} alt="" />
                <img className="w-60 object-cover" src={MTlogo} alt="" />
                <img className="w-20 object-cover" src={discoveryToShare} alt="" />
            </div>
            <div className="w-full h-[1px] bg-gray-300"></div>
            <div className="flex justify-between items-center w-full max-w-screen-lg mt-7">
                <div className="flex justify-around items-center w-2/3 ">
                    <GiHamburgerMenu className="flex md:hidden" />
                    <Link to="/">
                        <h2 className="font-body uppercase text-textPrimary hover:text-secondary duration-300 font-bold hidden md:block">{t('header.home')}</h2>
                    </Link>
                    <Link to="/tourist-site">
                        <h2 className="font-body uppercase text-textPrimary hover:text-secondary duration-300 font-bold hidden md:block">{t('header.touristSites')}</h2>
                    </Link>
                </div>
                <div className="flex justify-around items-center w-2/3 ">
                    <h2 className="font-body uppercase text-textPrimary hover:text-secondary duration-300 font-bold">{t('header.packages')}</h2>
                    <div className="relative">
                        <button
                            className="font-body uppercase text-textPrimary hover:text-secondary duration-300 font-bold"
                            onClick={toggleLanguageMenu}
                        >
                            {changeLanguageText}
                        </button>

                        {showLanguage && (
                            <div ref={languageRef} className="absolute right-0 mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                                <div>
                                    <button
                                        className="block px-4 py-2 text-sm text-primary hover:bg-gray-100"
                                        onClick={() => changeLanguage('en')}
                                    >
                                        EN
                                    </button>
                                    <button
                                        className="block px-4 py-2 text-sm text-primary hover:bg-gray-100"
                                        onClick={() => changeLanguage('bg')}
                                    >
                                        BG
                                    </button>
                                    <button
                                        className="block px-4 py-2 text-sm text-primary hover:bg-gray-100"
                                        onClick={() => changeLanguage('pl')}
                                    >
                                        PL
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
