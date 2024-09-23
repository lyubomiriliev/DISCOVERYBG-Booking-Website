import { Link } from "react-router-dom"
import { BGflag, discoveryToShare, ENGflag, MTlogo, PLflag, siteLogo } from "../assets"
import { useTranslation } from "react-i18next"
import { useEffect, useRef, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

const Header = () => {

    const { i18n } = useTranslation();
    const languageRef = useRef(null);
    const { t } = useTranslation();

    const [showLanguage, setShowLanguage] = useState(false);
    const [showLanguageText, setShowLanguageText] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const getFlagForLanguage = (lang) => {
        switch (lang) {
            case "en":
                return ENGflag;
            case "bg":
                return BGflag;
            case "pl":
                return PLflag;
            default:
                return ENGflag;
        }
    }

    const currentFlag = getFlagForLanguage(i18n.language)

    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang);
        setShowLanguage(false);
        setIsMobileMenuOpen(false);
    }

    const handleClickOutside = (event) => {
        if (languageRef.current && !languageRef.current.contains(event.target)) {
            setShowLanguage(false);
            setShowLanguageText(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [])

    const handleLanguageHover = () => {
        setShowLanguageText(true);
        setShowLanguage(true);
    };

    const handleLanguageLeave = () => {
        setShowLanguageText(false);
        setShowLanguage(false);
    };


    const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen)

    return (
        <div className="w-full h-24 md:h-40 bg-white shadow-md fixed top-0 left-0 z-50 flex flex-col px-4 md:px-8 items-center">
            <div className="flex justify-between items-center my-auto w-full md:w-2/3 md:pl-10 ">
                <div className="flex justify-between space-x-2 items-center">
                    <Link to="/">
                        <img className="w-32 md:w-56 object-cover -mr-3" src={siteLogo} alt="" />
                    </Link>
                    <Link to="/">
                        <img className="w-40 md:w-64 object-cover" src={MTlogo} alt="" />
                    </Link>
                    <Link to="/">
                        <img className="w-14 md:w-20 object-cover" src={discoveryToShare} alt="" />
                    </Link>
                </div>
                {isMobileMenuOpen ? (
                    <AiOutlineClose className="text-3xl cursor-pointer" onClick={toggleMobileMenu} />
                ) :
                    (
                        <GiHamburgerMenu onClick={toggleMobileMenu} className="text-2xl md:hidden cursor-pointer" />
                    )
                }
            </div>
            {/* MOBILE MENU */}
            {isMobileMenuOpen && (
                <div className="absolute top-24 left-0 w-full h-60 px-4 py-4 space-y-6 bg-white flex flex-col z-50 drop-shadow-lg">
                    <Link to="/" onClick={toggleMobileMenu}>
                        <h2 className="font-body uppercase text-black hover:text-secondary duration-300">{t('header.home')}</h2>
                    </Link>
                    <Link to="/tourist-site" onClick={toggleMobileMenu}>
                        <h2 className="font-body uppercase text-black hover:text-secondary duration-300">{t('header.touristSites')}</h2>
                    </Link>
                    <Link to="/tourist-packages" onClick={toggleMobileMenu}>
                        <h2 className="font-body uppercase text-black hover:text-secondary duration-300">{t('header.packages')}</h2>
                    </Link>

                    <div className="relative">
                        <div ref={languageRef} className="absolute left-0">
                            <div className=" flex items-center justify-center space-x-4 bg-gray-200 rounded-md p-2">
                                <img className="w-8 h-auto cursor-pointer" src={BGflag} onClick={() => changeLanguage('bg')} alt="BG" />
                                <img className="w-8 h-5 cursor-pointer" src={ENGflag} onClick={() => changeLanguage('en')} alt="EN" />
                                <img className="w-8 h-auto cursor-pointer" src={PLflag} onClick={() => changeLanguage('pl')} alt="PL" />
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* DESKTOP MENU */}
            <div className="hidden md:flex h-16 w-full justify-start items-center ">
                <nav className="w-2/3 mx-auto flex space-x-20 items-center pl-20">
                    <Link to="/">
                        <h2 className="font-body uppercase text-black text-sm hover:text-secondary duration-300 font-bold hidden md:block">{t('header.home')}</h2>
                    </Link>
                    <Link to="/tourist-site">
                        <h2 className="font-body uppercase text-black text-sm hover:text-secondary duration-300 font-bold hidden md:block">{t('header.touristSites')}</h2>
                    </Link>
                    <Link to="/tourist-packages">
                        <h2 className="font-body uppercase text-black text-sm hover:text-secondary duration-300 font-bold">{t('header.packages')}</h2>
                    </Link>
                </nav>
                <div className="flex justify-around items-center">
                    <div className="relative">
                        <button
                            className="font-body uppercase text-black hover:text-secondary duration-300 font-bold"
                            onMouseEnter={handleLanguageHover}
                            onMouseLeave={handleLanguageLeave}
                        >
                            <img className="w-10 h-auto object-cover" src={currentFlag} alt={i18n.language} />
                        </button>

                        {showLanguageText && (
                            <h3 className="text-sm font-bold text-primary font-body">
                                {i18n.language.toUpperCase()}
                            </h3>
                        )}
                        {showLanguage && (
                            <div ref={languageRef} className="absolute left-0 mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                                <div className="flex flex-col items-center space-y-2">
                                    <img className="w-8 h-auto cursor-pointer" src={ENGflag} onClick={() => changeLanguage('en')} alt="EN" />
                                    <img className="w-8 h-auto cursor-pointer" src={BGflag} onClick={() => changeLanguage('bg')} alt="BG" />
                                    <img className="w-8 h-auto cursor-pointer" src={PLflag} onClick={() => changeLanguage('pl')} alt="PL" />
                                </div>
                            </div>
                        )}
                        {showLanguageText && (
                            <h3 className="text-sm font-bold text-primary font-body">BG</h3>
                        )}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Header
