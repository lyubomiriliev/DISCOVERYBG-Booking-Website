
const TouristSites = () => {
    return (

        <div className="w-full  flex flex-col justify-center items-center mt-32">
            <h1 className="text-heading text-primary text-4xl font-bold uppercase mb-10">Tourist Sites</h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 justify-items-center mb-5'>
                {['Byala', 'Primorsko', 'Nessebar'].map((place, index) => (
                    <div key={index} className='flex flex-col items-center'>
                        <h2 className="text-heading uppercase font-bold text-2xl">{place}</h2>
                        <div className='w-64 h-32 bg-gray-300'></div>
                    </div>
                ))}

            </div>
            <div className="w-1/3 flex justify-center">
                <p className="font-body text-center">Lorem ipsum dolor sit amet consectetur. Tellus quisque lacus semper tortor mauris porta mi viverra tellus. Quisque interdum dui etiam laoreet sed. Sed </p>
            </div>
        </div>
    )
}

export default TouristSites
