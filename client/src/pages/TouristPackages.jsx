import { useState, useTransition } from "react"
import { dolniChiflik, touristPackagesHero } from "../assets"
import TouristPackageDays from "../components/TouristPackageDays"
import TouristPackageVariants from "../components/TouristPackageVariants"
import { useTranslation } from "react-i18next"

const TouristPackages = () => {

    const { t } = useTranslation();

    const packageVariants = {

        dalgopol: [

        ],
        dolniChiflik: [

        ],
        provadia: [
            {
                variantNumber: 1,
                tourTitle: "Пешеходен Тур",
                details: '- Крепост "Овеч" - Исторически музей Провадия - Градска художествена галерия Провадия',
                lunch: "ОБЯД",
                bgColor: "bg-secondary",
            },
            {
                variantNumber: 2,
                tourTitle: "Пешеходен Тур",
                details: 'Крепост "Овеч" - Скален манастир "Шашкъни" - Тракийско светилище',
                lunch: "ОБЯД",
                bgColor: "bg-primary",

            },
            {
                variantNumber: 3,
                tourTitle: "Пешеходен Тур",
                details: 'Исторически музей гр. Провадия - Солницата',
                lunch: "ОБЯД",
                bgColor: "bg-darkGreen",
            }
        ],

    }

    const twoDayPackages = [
        {
            dayNumber: 1,
            bgColor: "bg-primary",
            details: "- Късноантична и средновековна крепост Градище /Голямото кале/, с. Петров дол - Исторически музей в гр. Провадия - Първата българска църква „Св. Николай Мирликийски Чудотворец“, в комплекс Вароша гр. Провадия Църква “Св. Благовещение” гр. Провадия - Крепост 'Овеч'",
            lunchDetails: "- Градска галерия в гр. Провадия - Провадия Солницата",
            night: "Нощувка"

        },
        {
            dayNumber: 2,
            bgColor: "bg-primary",
            details: "- Крепост 'Овеч', Провадия - Скален манастир м. Шашкъните - Тракийско светилище м. Шашкъните - Късноантична крепост Калето /Кичюк хисар/, с. Славейково Дегустация на вино във винарска изба, с. Блъсково",
            lunchDetails: "- Етнографска сбирка в читалището на село Манастир - Скален манастир 'Кара Пещера', между с. Староселец и с. Манастир",

        }
    ]

    const threeDayPackages = [
        {
            dayNumber: 1,
            bgColor: "bg-secondary",
            details: "- Исторически музей - Часовниковата кула - Турската баня, Войнишки паметник на загиналите през ІІ св. Война - 	Ансамбъл “Вароша” с Ламбовата и Панайотовата къща запазени от Възрождението - Крепост 'Овеч'",
            lunchDetails: "- Градска галерия в гр. Провадия - Провадия Солницата",
            night: "Нощувка",

        },
        {
            dayNumber: 2,
            bgColor: "bg-secondary",
            details: "- Крепост 'Овеч' - Скален манастир 'Шашкъни' - Късноантична и средновекова крепост на Мухалийското кале. Скален манастир от XIII-XIV век. -	Скални килии в склоновете на Мухалийска кале.",
            lunchDetails: "Средновековен скален манастир, североизточно в местност Тъпанчето, с. Кривня",
            night: "Нощувка в къщи за гости от селски тип с. Добрина",

        },
        {
            dayNumber: 3,
            bgColor: "bg-secondary",
            details: "-	Вкопана църква 'Свети Теодор', с. Добрина - Етнографска сбирка в НЧ „Васил Левски – 1901“, с. Добрина -	Надгробна могила в местността Чалъка, могилен некропол с. Златина",
        },

    ]

    const [selectedStation, setSelectedStation] = useState('dalgopol')

    const getButtonClass = (station) => {
        return station === selectedStation
            ? "bg-primary text-white px-2 py-2 uppercase font-body font-bold text-sm duration-200 ease-out"
            : "bg-secondary text-white px-2 py-2 uppercase font-body font-bold text-sm hover:bg-primary duration-200 ease-out";
    };

    const handleStationClick = (station) => {
        setSelectedStation(station)
    }

    const filteredPackages = packageVariants[selectedStation] || []


    return (
        <div className="w-full flex flex-col mt-28 md:mt-48 px-4 md:px-0 ">
            <div className="w-full md:w-2/3 flex flex-col md:flex-row mx-auto justify-center gap-10 md:gap-20 items-center ">
                <h1 className="font-body text-3xl md:text-5xl uppercase font-bold text-secondary text-center md:text-left md:hidden">{t('touristPackages')}</h1>
                <div className="w-2/3 md:hidden">
                    <img className="w-full" src={touristPackagesHero} alt="Hero Image" />
                </div>
                <div className="md:w-1/3">
                    <h1 className="font-body text-3xl md:text-5xl uppercase font-bold text-secondary hidden md:block text-center md:text-left">{t('touristPackages')}</h1>
                    <p className="font-body md:mt-5">Lorem ipsum dolor sit amet consectetur. Tellus quisque lacus semper tortor mauris porta mi viverra tellus. Quisque interdum dui etiam laoreet sed. Sed Lorem ipsum dolor sit amet consectetur.</p>
                    <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-5">
                        <button onClick={() => handleStationClick('dalgopol')} className={getButtonClass('dalgopol')}>Дългопол</button>
                        <button onClick={() => handleStationClick('dolniChiflik')} className={getButtonClass('dolniChiflik')}>Долни Чифлик</button>
                        <button onClick={() => handleStationClick('provadia')} className={getButtonClass('provadia')}>Провадия</button>
                    </div>
                </div>
                <div className="w-1/3 hidden md:block">
                    <img className="w-full" src={touristPackagesHero} alt="Hero Image" />
                </div>
            </div>

            {selectedStation && (
                <div className="w-full flex flex-col items-center mt-10 ">
                    <h1 className="font-body text-3xl md:text-4xl uppercase font-bold">One day Packages</h1>
                    <div className="w-full md:w-2/4 text-center mx-auto">
                        <p className="font-body mt-5 text-sm md:text-base">Еднодневните пакети включват основно посещение на гр. Провадия с възможност за обиколка на близки забележителности. Представени са следните варианти:</p>
                    </div>
                </div>
            )}
            <div className="w-full md:w-2/4 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-5 md:mt-10">
                {filteredPackages.map((variant, index) => (
                    <TouristPackageVariants
                        key={index}
                        variantNumber={variant.variantNumber}
                        tourTitle={variant.tourTitle}
                        details={variant.details}
                        lunch={variant.lunch}
                        bgColor={variant.bgColor}
                    />
                ))}
            </div>
            <div className="w-full flex flex-col items-center mt-20 ">
                <h1 className="font-body text-3xl md:text-4xl uppercase font-bold text-primary">Two day Packages</h1>
                <div className="w-full md:w-2/4 text-center mx-auto">
                    <p className="font-body mt-5 text-base">Двудневните пакети могат да комбинират посещение на обекти от еднодневните маршрути, заедно със следните:</p>
                </div>
            </div>
            <div className="w-full md:w-2/4 mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
                {twoDayPackages.map((day, index) => (
                    <TouristPackageDays
                        key={index}
                        dayNumber={day.dayNumber}
                        bgColor={day.bgColor}
                        details={day.details}
                        lunchDetails={day.lunchDetails}
                        night={day.night}
                    />
                ))}
            </div>
            <div className="w-full flex flex-col items-center mt-20 ">
                <h1 className="font-body text-3xl md:text-4xl uppercase font-bold text-secondary">Three day Packages</h1>
            </div>
            <div className="w-full md:w-2/4 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
                {threeDayPackages.map((day, index) => (
                    <TouristPackageDays
                        key={index}
                        dayNumber={day.dayNumber}
                        bgColor={day.bgColor}
                        details={day.details}
                        lunchDetails={day.lunchDetails}
                        night={day.night}
                    />
                ))}
            </div>
        </div>
    )
}

export default TouristPackages
