import { heroImg } from "../assets"

const HeroSection = () => {
    return (
        <div className="w-full flex flex-col justify-center items-center mt-40">
            <h1 className="font-heading font-bold text-primary uppercase text-3xl mb-10">Book your trips</h1>
            <img className="w-1/4" src={heroImg} alt="TouristsImage" />
            <p className="text-body w-80 text-center mt-10">Lorem ipsum dolor sit amet consectetur. Tellus quisque lacus semper tortor mauris porta mi viverra tellus. Quisque interdum dui etiam laoreet sed. Sed </p>
        </div>
    )
}

export default HeroSection
