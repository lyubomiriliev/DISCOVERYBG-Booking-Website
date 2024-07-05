
const TouristSites = () => {
    return (

        <div className="w-full flex flex-col justify-center items-center mt-20">
            <h1 className="text-heading text-primary text-4xl font-bold uppercase mb-10">Tourist Sites</h1>
            <div className="w-2/4 justify-around flex mb-5">
                <h3 className="text-heading uppercase font-bold text-2xl">Byala</h3>
                <h3 className="text-heading uppercase font-bold text-2xl">Primorsko</h3>
                <h3 className="text-heading uppercase font-bold text-2xl">Nessebar</h3>
            </div>
            <div className="flex gap-5 mb-10">
                <div className="w-80 h-40 bg-gray-300"></div>
                <div className="w-80 h-40 bg-gray-300"></div>
                <div className="w-80 h-40 bg-gray-300"></div>
            </div>
        </div>
    )
}

export default TouristSites
