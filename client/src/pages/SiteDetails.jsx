import { useParams } from "react-router-dom"
import { girlImg, manImg, ovech1 } from "../assets"
import { useTranslation } from "react-i18next";
import { touristSites } from "../util";
import { useEffect, useState } from "react";
import ImageModal from "../components/ImageModal";
import { LuClipboardList } from "react-icons/lu";
import { TbArrowGuide } from "react-icons/tb";
import { IoMdTime } from "react-icons/io";
import { ImLocation2 } from "react-icons/im";

const SiteDetails = () => {

    const { site, place } = useParams();
    const { t, i18n } = useTranslation();
    const siteData = touristSites[site];
    const placeData = siteData.places.find(p => p.id === place);

    const [galleryOpen, setGalleryOpen] = useState(false);
    const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(0);

    if (!placeData) {
        return <div>Place not found</div>
    }

    const photos = Object.values(placeData.photos[0]);

    const handleOpenGallery = (index) => {
        setSelectedPhotoIndex(index)
        setGalleryOpen(true)
    }

    const handleCloseGallery = (photo) => {
        setGalleryOpen(false)

    }

    const handleNextPhoto = () => {
        setSelectedPhotoIndex((prevIndex) => (prevIndex + 1) % photos.length);
    };


    const handlePreviousPhoto = () => {
        setSelectedPhotoIndex((prevIndex) => (prevIndex - 1 + photos.length) % photos.length);
    };

    const handleKeyDown = (event) => {
        if (event.key === "ArrowRight") {
            handleNextPhoto();
        } else if (event.key === "ArrowLeft") {
            handlePreviousPhoto();
        } else if (event.key === "Escape") {
            handleCloseGallery();
        }
    };

    useEffect(() => {
        if (galleryOpen) {
            window.addEventListener("keydown", handleKeyDown);
        } else {
            window.removeEventListener("keydown", handleKeyDown);
        }

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [galleryOpen]);

    return (
        <div className="w-full flex flex-col mt-32 md:mt-48 items-center relative">
            <h1 className="font-body text-center text-2xl md:text-3xl uppercase font-bold">{placeData.name[i18n.language]}</h1>
            <div className="flex w-full md:max-w-screen-xl mt-10 overflow-x-auto hide-scrollbar md:overflow-x-clip px-5 md:px-0">
                <div className="flex flex-nowrap space-x-4 md:space-x-10">
                    {photos.map((photo, index) => (
                        <div key={index} className="w-72 flex-shrink-0 cursor-pointer" onClick={() => handleOpenGallery(index)}>
                            <img src={photo} alt={`Photo ${index + 1}`} className="w-full h-48 object-cover md:hover:scale-110 duration-300 ease-out" />
                        </div>
                    ))}
                </div>
            </div>
            <div className="w-full md:w-2/4 flex justify-between items-center px-4 md:px-0 mt-6">
                <a href={placeData.googleMapsLink} target="_blank" rel="noopener noreferrer" className="font-body text-sm md:text-base uppercase font-light">Google Maps</a>
                <div className="w-[1px] h-6 bg-black mt-1"></div>
                <a href={placeData.bookingLink} target="_blank" rel="noopener noreferrer" className="font-body text-sm md:text-base uppercase font-light">Booking</a>
                <div className="w-[1px] h-6 bg-black mt-1"></div>
                <a href={placeData.restaurantsLink} target="_blank" rel="noopener noreferrer" className="font-body text-sm md:text-base uppercase font-light">Restaurants</a>
                <div className="w-[1px] h-6 bg-black mt-1"></div>
                <a href={placeData.airbnbLink} target="_blank" rel="noopener noreferrer" className="font-body text-sm md:text-base uppercase font-light">Airbnb</a>
            </div>
            <div className="w-full md:w-2/4 flex flex-col px-10 md:px-0 mt-16">
                <div className="flex items-center">
                    <LuClipboardList className="w-8 h-8 mr-2 text-primary" />
                    <h3 className="text-3xl font-body uppercase font-bold text-primary">{t('siteDetails.placeDescription')}</h3>
                </div>
                <p className="font-body text-sm md:text-base text-left mt-5">{placeData.description[i18n.language]}</p>
            </div>
            <div className="w-full md:w-2/4 flex flex-col px-10 md:px-0 mt-16">
                <div className="flex items-center">
                    <TbArrowGuide className="w-8 h-8 mr-2 font-bold text-primary" />
                    <h3 className="text-3xl font-body uppercase font-bold text-primary">{t('siteDetails.access')}</h3>
                </div>
                <p className="font-body text-sm md:text-base text-left mt-5">{placeData.access[i18n.language]}</p>
            </div>
            <div className="w-full md:w-2/4  flex flex-col px-10 md:px-0 mt-16">
                <div className="flex items-center">
                    <IoMdTime className="w-8 h-8 mr-2 font-bold text-primary" />
                    <h3 className="text-3xl font-body uppercase font-bold text-primary">{t('siteDetails.workTime')}</h3>
                </div>
                <div>
                    <p className="font-body text-sm md:text-base text-left mt-5">{placeData.summerWorkTime[i18n.language]}</p>
                    <p className="font-body text-sm md:text-base text-left mt-5">{placeData.winterWorkTime[i18n.language]}</p>
                </div>
            </div>
            <div className="max-w-screen-xl justify-center items-center flex flex-col">
                <h3 className="mt-10 font-bold font-body uppercase">Location:</h3>
                <h2 className="font-bold font-body uppercase">GPS: {placeData.coordinates.gps}</h2>
                <a href={placeData.googleMapsLink} target="_blank" rel="noopener noreferrer">
                    <img className="w-40 h-40" src={placeData.qrCode} alt="QR CODE" />
                </a>
                <h2 className="font-light font-body uppercase">SCAN FOR DIRECTIONS</h2>
            </div>
            <div className="w-full md:w-[70%] h-96 justify-center px-5 md:px-0 items-center mt-10">
                <iframe
                    className="w-full object-cover rounded-2xl"
                    src={placeData.googleMaps}
                    height="450"
                    allowfullscreen
                >
                </iframe>
            </div>
            <img className="w-1/5 absolute -bottom-24 -right-12 pointer-events-none hidden md:block" src={girlImg} alt="Girl Image" />
            <img className="w-64 absolute -bottom-24 left-10 mb-1 pointer-events-none hidden md:block" src={manImg} alt="Man Image" />

            {galleryOpen && <ImageModal photo={photos[selectedPhotoIndex]} onClose={handleCloseGallery} photos={photos} currentIndex={selectedPhotoIndex} onNext={handleNextPhoto} onPrevious={handlePreviousPhoto} />}
        </div>
    )
}

export default SiteDetails
