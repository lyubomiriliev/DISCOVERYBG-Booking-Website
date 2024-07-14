import { useParams } from "react-router-dom"
import { girlImg, manImg, ovech1 } from "../assets"
import { useTranslation } from "react-i18next";
import { touristSites } from "../util";
import { useEffect, useState } from "react";
import ImageModal from "../components/ImageModal";

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
        <div className="w-full flex flex-col mt-32 items-center relative">
            <h1 className="font-heading text-4xl uppercase font-bold">{placeData.name[i18n.language]}</h1>
            <div className="flex max-w-screen-xl mx-auto mt-10 gap-5">
                {photos.map((photo, index) => (
                    <div key={index} className="w-full flex items-center" onClick={() => handleOpenGallery(index)}>
                        <img src={photo} alt={`Photo ${index + 1}`} className="w-full h-full object-cover hover:scale-110 duration-300 ease-out" />
                    </div>
                ))}
            </div>
            <div className="w-2/5 flex justify-between items-center px-4 mt-6">
                <h3 className="font-heading uppercase font-light">Google Maps</h3>
                <div className="w-[1px] h-6 bg-black mt-1"></div>
                <h3 className="font-heading uppercase font-light">Booking</h3>
                <div className="w-[1px] h-6 bg-black mt-1"></div>
                <h3 className="font-heading uppercase font-light">Restaurants</h3>
                <div className="w-[1px] h-6 bg-black mt-1"></div>
                <h3 className="font-heading uppercase font-light">Airbnb</h3>
            </div>
            <div className="w-2/5 flex flex-col justify-center items-center mt-15">
                <p className="text-body text-sm text-gray-700 text-center mt-10">{placeData.description[i18n.language]}</p>
            </div>
            <h3 className="py-10">Location:</h3>
            <div className="w-40 h-40 bg-gray-500"></div>
            <div className="w-[70%] h-96 justify-center items-center bg-gray-300 mt-10"></div>
            <img className="w-1/5 absolute -bottom-24 right-5" src={girlImg} alt="Girl Image" />
            <img className="w-64 absolute -bottom-24 left-10 mb-1" src={manImg} alt="Man Image" />

            {galleryOpen && <ImageModal photo={photos[selectedPhotoIndex]} onClose={handleCloseGallery} photos={photos} currentIndex={selectedPhotoIndex} onNext={handleNextPhoto} onPrevious={handlePreviousPhoto} />}
        </div>
    )
}

export default SiteDetails
