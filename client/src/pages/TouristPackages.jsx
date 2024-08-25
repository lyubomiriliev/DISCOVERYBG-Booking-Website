import { useState, useTransition } from "react"
import { dalgopol, dolniChiflik, touristPackagesHero } from "../assets"
import TouristPackageDays from "../components/TouristPackageDays"
import TouristPackageVariants from "../components/TouristPackageVariants"
import { useTranslation } from "react-i18next"

const TouristPackages = () => {

    const { t } = useTranslation();

    const packageVariants = {

        dalgopol: [
            {
                variantNumber: 1,
                tourTitle: "",
                details: ["Исторически музей, „Дългопол“", "Часовникова кула", "Местни изби и дегустации на вино с. Дебелец", "Работилница по грънчарство в с. Аспарухово", "Обяд в местен ресторант, заведение за хранене и др.", "ПЗ Чудните скали"],
                timeStamps: ["60", "15", "75", "45", "90", "60"],
                lunch: "",
                bgColor: "bg-secondary",
            },
            {
                variantNumber: 2,
                tourTitle: "",
                details: ["Исторически музей, „Дългопол“", "Часовникова кула", "Храм „Св. Иван Рилски” – гр. Дългопол", "Обяд в местен ресторант, заведение за хранене и др.", "Риболовен туризъм на язовир Цонево и язовир Тича", "Еко поход до скални светилища, манастири"],
                timeStamps: ["60", "15", "15", "90", "60", "90"],
                lunch: "",
                bgColor: "bg-primary",
            }

        ],
        dolniChiflik: [

        ],
        provadia: [
            {
                variantNumber: 1,
                tourTitle: "Пешеходен Тур",
                details: ["Крепост Овеч", "Исторически музей Провадия", "Градска художествена галерия Провадия"],
                lunch: "ОБЯД",
                bgColor: "bg-secondary",
                timeStamps: [""],
            },
            {
                variantNumber: 2,
                tourTitle: "Пешеходен Тур",
                details: ["Крепост Овеч", "Скален манастир Шашкъни", "Тракийско светилище"],
                lunch: "ОБЯД",
                bgColor: "bg-primary",
                timeStamps: [""],

            },
            {
                variantNumber: 3,
                tourTitle: "Пешеходен Тур",
                details: ["Исторически музей гр. Провадия - Солницата"],
                lunch: "ОБЯД",
                bgColor: "bg-darkGreen",
                timeStamps: [""],
            }
        ],

    }

    const twoDayPackages = {
        dalgopol: [
            {
                dayNumber: 1,
                bgColor: "bg-primary",
                details: ["Средновековен скален манастир - с. Рояк", "Крепост Овчага", "Обяд в местен ресторант, заведение за хранене и др.", "Тича Водопад „Куза Скока“, край с. Поляците", "Местност „Манастира”", "Местностите „Беджината” и „Топаловата воденица”"],
                lunchDetails: "- Градска галерия в гр. Провадия - Провадия Солницата",
                timeStamps: ["45", "45", "60", "60", "45", "45"],
                night: "Нощувка. В с. Аспарухово са създадени множество къщи за гости, заведения за настаняване от семеен тип, хотели, които предлагат отлични възможности за отдих и туризъм. В с. Дебелец също предлагат места за настаняване – стаи за гости, къщи за гости."

            },
            {
                dayNumber: 2,
                bgColor: "bg-primary",
                details: ["Гребане в язовир Цонево", "Крепост Овчага", "Риболовен туризъм на язовир Цонево и язовир Тича", "Скално катерене, ориентиране",],
                lunchDetails: "Обяд",
                timeStamps: ["120", "120", "90", "60"],
                night: ""

            },

        ],
        dolniChiflik: [
            {
                dayNumber: 1,
                bgColor: "bg-primary",
                details: ["Средновековен скален манастир - с. Рояк", "Крепост Овчага", "Обяд в местен ресторант, заведение за хранене и др.", "Тича Водопад „Куза Скока“, край с. Поляците", "Местност „Манастира”", "Местностите „Беджината” и „Топаловата воденица”"],
                lunchDetails: "- Градска галерия в гр. Провадия - Провадия Солницата",
                timeStamps: ["45", "45", "60", "60", "45", "45"],
                night: "Нощувка"

            },
            {
                dayNumber: 2,
                bgColor: "bg-primary",
                details: ["Средновековен скален манастир - с. Рояк", "Крепост Овчага", "Обяд в местен ресторант, заведение за хранене и др.", "Тича Водопад „Куза Скока“, край с. Поляците", "Местност „Манастира”", "Местностите „Беджината” и „Топаловата воденица”"],
                lunchDetails: "- Градска галерия в гр. Провадия - Провадия Солницата",
                timeStamps: ["45", "45", "60", "60", "45", "45"],
                night: "Нощувка"

            },

        ],
        provadia: [
            {
                dayNumber: 1,
                bgColor: "bg-primary",
                details: ["Средновековен скален манастир - с. Рояк", "Крепост Овчага", "Обяд в местен ресторант, заведение за хранене и др.", "Тича Водопад „Куза Скока“, край с. Поляците", "Местност „Манастира”", "Местностите „Беджината” и „Топаловата воденица”"],
                lunchDetails: "- Градска галерия в гр. Провадия - Провадия Солницата",
                timeStamps: ["45", "45", "60", "60", "45", "45"],
                night: "Нощувка"

            },
            {
                dayNumber: 2,
                bgColor: "bg-primary",
                details: ["Средновековен скален манастир - с. Рояк", "Крепост Овчага", "Обяд в местен ресторант, заведение за хранене и др.", "Тича Водопад „Куза Скока“, край с. Поляците", "Местност „Манастира”", "Местностите „Беджината” и „Топаловата воденица”"],
                lunchDetails: "- Етнографска сбирка в читалището на село Манастир - Скален манастир 'Кара Пещера', между с. Староселец и с. Манастир",
                timeStamps: ["45", "45", "60", "60", "45", "45"],

            },
        ],

    }

    const threeDayPackages = {
        provadia: [
            {
                dayNumber: 1,
                bgColor: "bg-secondary",
                details: ["Средновековен скален манастир - с. Рояк", "Крепост Овчага", "Обяд в местен ресторант, заведение за хранене и др.", "Тича Водопад „Куза Скока“, край с. Поляците", "Местност „Манастира”", "Местностите „Беджината” и „Топаловата воденица”"],
                lunchDetails: "- Градска галерия в гр. Провадия - Провадия Солницата",
                timeStamps: ["45", "45", "60", "60", "45", "45"],
                night: "Нощувка",

            },
            {
                dayNumber: 2,
                bgColor: "bg-secondary",
                details: ["Средновековен скален манастир - с. Рояк", "Крепост Овчага", "Обяд в местен ресторант, заведение за хранене и др.", "Тича Водопад „Куза Скока“, край с. Поляците", "Местност „Манастира”", "Местностите „Беджината” и „Топаловата воденица”"],
                lunchDetails: "Средновековен скален манастир, североизточно в местност Тъпанчето, с. Кривня",
                timeStamps: ["45", "45", "60", "60", "45", "45"],
                night: "Нощувка в къщи за гости от селски тип с. Добрина",

            },
            {
                dayNumber: 3,
                bgColor: "bg-secondary",
                timeStamps: ["45", "45", "60", "60", "45", "45"],
                details: ["Средновековен скален манастир - с. Рояк", "Крепост Овчага", "Обяд в местен ресторант, заведение за хранене и др.", "Тича Водопад „Куза Скока“, край с. Поляците", "Местност „Манастира”", "Местностите „Беджината” и „Топаловата воденица”"],
            },
        ],
        dolniChiflik: [
            {
                dayNumber: 1,
                bgColor: "bg-secondary",
                details: ["Средновековен скален манастир - с. Рояк", "Крепост Овчага", "Обяд в местен ресторант, заведение за хранене и др.", "Тича Водопад „Куза Скока“, край с. Поляците", "Местност „Манастира”", "Местностите „Беджината” и „Топаловата воденица”"],
                lunchDetails: "- Градска галерия в гр. Провадия - Провадия Солницата",
                timeStamps: ["45", "45", "60", "60", "45", "45"],
                night: "Нощувка",

            },
            {
                dayNumber: 2,
                bgColor: "bg-secondary",
                details: ["Средновековен скален манастир - с. Рояк", "Крепост Овчага", "Обяд в местен ресторант, заведение за хранене и др.", "Тича Водопад „Куза Скока“, край с. Поляците", "Местност „Манастира”", "Местностите „Беджината” и „Топаловата воденица”"],
                lunchDetails: "Средновековен скален манастир, североизточно в местност Тъпанчето, с. Кривня",
                timeStamps: ["45", "45", "60", "60", "45", "45"],
                night: "Нощувка в къщи за гости от селски тип с. Добрина",

            },
            {
                dayNumber: 3,
                bgColor: "bg-secondary",
                timeStamps: ["45", "45", "60", "60", "45", "45"],
                details: ["Средновековен скален манастир - с. Рояк", "Крепост Овчага", "Обяд в местен ресторант, заведение за хранене и др.", "Тича Водопад „Куза Скока“, край с. Поляците", "Местност „Манастира”", "Местностите „Беджината” и „Топаловата воденица”"],
            },
        ],
        dalgopol: [
            {
                dayNumber: 1,
                bgColor: "bg-secondary",
                details: ["Средновековен скален манастир - с. Рояк", "Крепост Овчага", "Обяд в местен ресторант, заведение за хранене и др.", "Тича Водопад „Куза Скока“, край с. Поляците", "Местност „Манастира”", "Местностите „Беджината” и „Топаловата воденица”"],
                lunchDetails: "- Градска галерия в гр. Провадия - Провадия Солницата",
                timeStamps: ["45", "45", "60", "60", "45", "45"],
                night: "Нощувка",

            },
            {
                dayNumber: 2,
                bgColor: "bg-secondary",
                details: ["Средновековен скален манастир - с. Рояк", "Крепост Овчага", "Обяд в местен ресторант, заведение за хранене и др.", "Тича Водопад „Куза Скока“, край с. Поляците", "Местност „Манастира”", "Местностите „Беджината” и „Топаловата воденица”"],
                lunchDetails: "Средновековен скален манастир, североизточно в местност Тъпанчето, с. Кривня",
                timeStamps: ["45", "45", "60", "60", "45", "45"],
                night: "Нощувка в къщи за гости от селски тип с. Добрина",

            },
            {
                dayNumber: 3,
                bgColor: "bg-secondary",
                timeStamps: ["45", "45", "60", "60", "45", "45"],
                details: ["Средновековен скален манастир - с. Рояк", "Крепост Овчага", "Обяд в местен ресторант, заведение за хранене и др.", "Тича Водопад „Куза Скока“, край с. Поляците", "Местност „Манастира”", "Местностите „Беджината” и „Топаловата воденица”"],
            },
        ],

    }

    const [selectedStation, setSelectedStation] = useState('dalgopol')

    const getButtonClass = (station) => {
        return station === selectedStation
            ? "bg-primary text-white px-2 py-2 uppercase font-body font-bold text-sm duration-200 ease-out"
            : "bg-secondary text-white px-2 py-2 uppercase font-body font-bold text-sm hover:bg-primary duration-200 ease-out";
    };

    const handleStationClick = (station) => {
        setSelectedStation(station)
    }

    const filteredVariants = packageVariants[selectedStation] || []
    const filteredTwoDayPackages = twoDayPackages[selectedStation] || []
    const filteredThreeDayPackages = threeDayPackages[selectedStation] || []



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
            <div className={`w-full md:w-2/4 mx-auto grid grid-cols-1 md:grid-cols-2 ${filteredVariants.length >= 3 ? "lg:grid-cols-3" : "lg:grid-cols-2"} gap-6 mt-5 md:mt-10}`}>
                {filteredVariants.map((variant, index) => (
                    <TouristPackageVariants
                        key={index}
                        variantNumber={variant.variantNumber}
                        tourTitle={variant.tourTitle}
                        details={variant.details}
                        lunch={variant.lunch}
                        bgColor={variant.bgColor}
                        timeStamps={variant.timeStamps}
                        id={variant.id}

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
                {filteredTwoDayPackages.map((day, index) => (
                    <TouristPackageDays
                        key={index}
                        dayNumber={day.dayNumber}
                        bgColor={day.bgColor}
                        details={day.details}
                        lunchDetails={day.lunchDetails}
                        night={day.night}
                        timeStamps={day.timeStamps}
                    />
                ))}
            </div>
            <div className="w-full flex flex-col items-center mt-20 ">
                <h1 className="font-body text-3xl md:text-4xl uppercase font-bold text-secondary">Three day Packages</h1>
            </div>
            <div className="w-full md:w-2/4 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-5 md:mt-10">
                {filteredThreeDayPackages.map((day, index) => (
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
