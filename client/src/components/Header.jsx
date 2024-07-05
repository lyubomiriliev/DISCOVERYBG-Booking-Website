import { siteLogo } from "../assets"

const Header = () => {
    return (
        <div className="w-full h-20 bg-white shadow-md fixed top-0 left-0 z-50 flex justify-around items-center px-4">
            <div className="w-1/2 flex justify-around items-center">
                <h2 className="font-heading uppercase text-primary font-bold">Home</h2>
                <h2 className="font-heading uppercase text-primary font-bold">Locations</h2>
                <img className="w-20" src={siteLogo} alt="Logo" />
                <h2 className="font-heading uppercase text-primary font-bold">Booking</h2>
                <h2 className="font-heading uppercase text-primary font-bold">EN</h2>
            </div>
        </div>
    )
}

export default Header
