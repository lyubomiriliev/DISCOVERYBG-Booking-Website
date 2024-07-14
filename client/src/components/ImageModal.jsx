
const ImageModal = ({ photo, photos, onClose, currentIndex, onNext, onPrevious }) => {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50" onClick={onClose}>
            <div className="relative" onClick={(e) => e.stopPropagation()}>
                <img src={photo} alt="Full Size Photo" className="w-auto h-auto max-h-full max-w-full" />
                <div className="absolute top-1/2 left-2 transform -translate-y-1/2 cursor-pointer" onClick={onPrevious}>
                    <span className="text-white text-3xl">&#10094;</span>
                </div>
                <div className="absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer" onClick={onNext}>
                    <span className="text-white text-3xl">&#10095;</span>
                </div>
                <div className="flex justify-center mt-4">
                    {photos.map((_, index) => (
                        <div
                            key={index}
                            className={`w-3 h-3 rounded-full mx-1 ${index === currentIndex ? 'bg-white' : 'bg-gray-500'}`}
                        ></div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ImageModal
