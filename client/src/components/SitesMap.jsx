
const SitesMap = ({ selectedStation }) => {

    const siteMaps = [
        { key: 'dalgopol', map: "https://www.google.com/maps/d/u/3/embed?mid=1OduJkIc-InenDtSwaVLx0mBQyZf6Q-k&ehbc=2E312F" },
        { key: 'dolniChiflik', map: "https://www.google.com/maps/d/u/3/embed?mid=1Z8fkjBh-mlKyZVaAHhgrYG8UoWkKoXQ&ehbc=2E312F" },
        { key: 'provadia', map: "https://www.google.com/maps/d/u/3/embed?mid=1JkogoukQkMIivhUd60Oq_r07y-SuJbg&ehbc=2E312F" },
    ]

    const selectedMap = siteMaps.find(site => site.key === selectedStation)?.map;

    if (!selectedMap) {
        return null;
    }


    return (
        <div className='w-full mx-auto flex flex-col justify-center items-center'>
            <div className="w-full md:w-[90%] mt-10">
                <iframe src={selectedMap} className="w-full object-cover rounded-2xl" height="600" allowFullScreen></iframe>
            </div>
        </div>
    )
}

export default SitesMap
