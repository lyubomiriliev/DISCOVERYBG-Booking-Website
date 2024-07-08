import { useParams } from "react-router-dom"
import { girlImg, manImg } from "../assets"

const SiteDetails = () => {

    const { site } = useParams();

    return (
        <div className="w-full flex flex-col mt-32 items-center relative">
            <h1 className="text-heading text-4xl uppercase font-bold">{site.replace('-', ' ')}</h1>
            <div className="w-2/5 h-96 justify-center items-center bg-gray-500 mt-10"></div>
            <div className="w-2/5 flex justify-between items-center px-4 mt-2">
                <h3 className="font-heading uppercase font-light">Google Maps</h3>
                <div className="w-[1px] h-6 bg-black mt-1"></div>
                <h3 className="font-heading uppercase font-light">Booking</h3>
                <div className="w-[1px] h-6 bg-black mt-1"></div>
                <h3 className="font-heading uppercase font-light">Restaurants</h3>
                <div className="w-[1px] h-6 bg-black mt-1"></div>
                <h3 className="font-heading uppercase font-light">Airbnb</h3>
            </div>
            <div className="w-2/5 flex flex-col justify-center items-center mt-15">
                <h2 className="text-heading text-4xl uppercase font-bold mt-10 mb-10">Description</h2>
                <p className="text-body text-sm text-gray-700 text-center">Lorem ipsum dolor sit amet consectetur. Tellus quisque lacus semper tortor mauris porta mi viverra tellus. Quisque interdum dui etiam laoreet sed. Sed Lorem ipsum dolor sit amet consectetur. Tellus quisque lacus semper tortor mauris porta mi viverra tellus. Quisque interdum dui etiam laoreet sed. Sed Lorem ipsum dolor sit amet consectetur. Tellus quisque lacus semper tortor mauris porta mi viverra tellus. Quisque interdum dui etiam laoreet sed. Sed </p>
            </div>
            <h3 className="py-10">Location:</h3>
            <div className="w-40 h-40 bg-gray-500"></div>
            <div className="w-[70%] h-96 justify-center items-center bg-gray-300 mt-10"></div>
            <img className="w-1/5 absolute -bottom-24 right-5" src={girlImg} alt="Girl Image" />
            <img className="w-64 absolute -bottom-24 left-10 mb-1" src={manImg} alt="Man Image" />

        </div>
    )
}

export default SiteDetails
