import { Link } from "react-router-dom"
import { siteLogo } from "../assets"

const Header = () => {
    return (
        <div className="w-full h-20 bg-white shadow-md fixed top-0 left-0 z-50 flex justify-around items-center px-4">
            <div className="w-1/2 flex justify-around items-center">
                <Link to="/">
                    <h2 className="font-heading uppercase text-primary font-bold">Home</h2>
                </Link>
                <Link to="/tourist-site">
                    <h2 className="font-heading uppercase text-primary font-bold">Tourist Sites</h2>
                </Link>
                <Link to="/">
                    <img className="w-20" src={siteLogo} alt="Logo" />
                </Link>
                <h2 className="font-heading uppercase text-primary font-bold">Booking</h2>
                <h2 className="font-heading uppercase text-primary font-bold">EN</h2>
            </div>
        </div>
    )
}

export default Header
