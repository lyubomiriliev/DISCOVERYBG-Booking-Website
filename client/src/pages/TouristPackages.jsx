import { useState, useTransition } from "react"
import { dalgopol, dalgopolPackages, dolniChiflik, dolniChiflikPackages, provadiqPackages, touristPackagesHero } from "../assets"
import TouristPackageDays from "../components/TouristPackageDays"
import TouristPackageVariants from "../components/TouristPackageVariants"
import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom"

const TouristPackages = () => {

    const { t } = useTranslation();

    const packageVariants = {

        dalgopol: [
            {
                variantNumber: 1,
                tourTitle: "История, бит, обичаи",
                details: ["Исторически музей, „Дългопол“", "Часовникова кула", "Местни изби и дегустации на вино с. Дебелец", "Работилница по грънчарство в с. Аспарухово", "Обяд в местен ресторант, заведение за хранене и др.", "ПЗ Чудните скали"],
                timeStamps: ["60", "15", "75", "45", "90", "60"],
                lunch: "",
                bgColor: "bg-secondary",
            },
            {
                variantNumber: 2,
                tourTitle: "История, природа и забавления",
                details: ["Исторически музей, „Дългопол“", "Часовникова кула", "Храм „Св. Иван Рилски” – гр. Дългопол", "Обяд в местен ресторант, заведение за хранене и др.", "Риболовен туризъм на язовир Цонево и язовир Тича", "Еко поход до скални светилища, манастири"],
                timeStamps: ["60", "15", "15", "90", "60", "90"],
                lunch: "",
                bgColor: "bg-primary",
            }

        ],
        dolniChiflik: [
            {
                variantNumber: 1,
                tourTitle: "Културен туризъм",
                details: ["Етнографски музей при НЧ „Изгрев“, гр. Долни чифлик. Беседа", "Паметник на Георги Трайков,  гр.Долни чифлик", "Паметник на Иван Сокачев, гр. Долни Чифлик", "Храм „Св.Рождество богородично“, гр. Долни чифлик", "Извор „ Горящата вода – местността „Ботево“, гр. Долни чифлик", "Извор „ Горящата вода – местността „Ботево“, гр. Долни чифлик", "Обяд в местен ресторант, заведение за хранене и др.", "Антична крепост Шкорпиловци, с Шкорпиловци", "Крайбрежна алея кк Шкорпиловци. Плаж. Разходка"],
                timeStamps: ["45", "15", "15", "15", "30", "30", "60", "30", "120"],
                lunch: "",
                bgColor: "bg-secondary",
            },
            {
                variantNumber: 2,
                tourTitle: "Културен и морски туризъм",
                details: ["Етнографски музей при НЧ „Изгрев“, гр. Долни чифлик. Беседа", "Обиколка на централната част на гр. Долни чифлик", "Етнографски комплекс Кривини, с. Кривини", "Обяд в местно заведение за хранене", "Антична крепост Шкорпиловци, с Шкорпиловци (по желание)", "Плаж в съчетание с морски дейности"],
                timeStamps: ["60", "30", "30", "60", "30", "120"],
                lunch: "",
                bgColor: "bg-primary",
            },
            {
                variantNumber: 3,
                tourTitle: "Еко и опознавателен туризъм",
                details: ["Ботаническа градина, с Гроздьово", "Държавно ловно стопанство „Шерба“, с Горен Чифлик", "Обяд в местно заведение за хранене", "Късноантична крепост „Голямото кале“, гр. Долни чифлик", "Паметник на Георги Трайков,  гр.Долни чифлик", "Паметник на Иван Сокачев, гр. Долни Чифлик", "Храм „Св.Рождество богородично“, гр. Долни чифлик"],
                timeStamps: ["60", "60", "60", "30", "20", "20", "20"],
                lunch: "",
                bgColor: "bg-darkGreen",
            },

        ],
        provadia: [
            {
                variantNumber: 1,
                tourTitle: "Пешеходен Тур",
                details: ["Исторически музей", "Градска художествена галерия", "Часовникова кула", "Обяд", "Крепост 'Овеч'"],
                lunch: "",
                bgColor: "bg-secondary",
                timeStamps: ["60", "45", "15", "90", "60"],
            },
            {
                variantNumber: 2,
                tourTitle: "Пешеходен Тур",
                details: ["Крепост Овеч", "Скален манастир Шашкъни", "Тракийско светилище", "Обяд"],
                lunch: "",
                bgColor: "bg-primary",
                timeStamps: ["60", "45", "45", "90"],

            },
            {
                variantNumber: 3,
                tourTitle: "Пешеходен Тур + автобусен/собствен транспорт",
                details: ["Исторически музей гр. Провадия", "Провадия – Солницата", "Обяд", "Неновски водопад „Совата“ (пешеходен преход 30 мин. от центъра на с. Неново)"],
                lunch: "",
                bgColor: "bg-darkGreen",
                timeStamps: ["60", "45", "60", "90"],
            }
        ],

    }

    const twoDayPackages = {
        dalgopol: [
            {
                dayNumber: 1,
                bgColor: "bg-primary",
                details: ["Средновековен скален манастир - с. Рояк", "Крепост Овчага", "Обяд в местен ресторант, заведение за хранене и др.", "Тича Водопад „Куза Скока“, край с. Поляците", "Местност „Манастира”", "Местностите „Беджината” и „Топаловата воденица”"],
                lunchDetails: "",
                timeStamps: ["45", "45", "60", "60", "45", "45"],
                night: "Нощувка. Във с. Аспарухово са създадени множество къщи за гости, заведения за настаняване от семеен тип, хотели, които предлагат отлични възможности за отдих и туризъм. В с. Дебелец също предлагат места за настаняване – стаи за гости, къщи за гости. Семеен хотел-ресторант има и в с. Арковна и с. Партизани."

            },
            {
                dayNumber: 2,
                bgColor: "bg-primary",
                details: ["Гребане в язовир Цонево", "Риболовен туризъм на язовир Цонево и язовир Тича", "Скално катерене, ориентиране", "Обяд"],
                lunchDetails: "",
                timeStamps: ["120", "120", "90", "60"],
                night: ""

            },

        ],
        dolniChiflik: [
            {
                dayNumber: 1,
                tourTitle: "Гр. Долни чифлик и наоколо",
                bgColor: "bg-primary",
                details: [
                    "Писта за картинг, гр. Долни чифлик",
                    "Късноантична крепост „Голямото кале“, гр. Долни чифлик",
                    "Разходка из центъра на Долни чифлик и посещение на:<br />• Паметник на Георги Трайков<br />• Паметник на Иван Сокачев<br />• Храм „Св.Рождество богородично“<br />• Етнографски музей при НЧ „Изгрев“",
                    "Обяд в местен ресторант, заведение за хранене и др.",
                    "Църква „Свето възнесение Господне“, с. Пчелник",
                    "Тракийска Крепост „Ерак“, с. Гроздьово", "Държавно ловно стопанство „Шерба“, с Горен Чифлик", "Водопад „Орлов камък“, с. Горен чифлик", "Извор „ Горящата вода – местността „Ботево“, гр. Долни чифлик"],
                lunchDetails: "",
                timeStamps: ["60", "30", "30", "60", "30", "30", "45", "45", "30"],
                night: "Нощувка"

            },
            {
                tourTitle: "Малките селища около Долни чифлик",
                dayNumber: 2,
                bgColor: "bg-primary",
                details: [
                    "Късноантична крепост Бурун градище, с. Голица",
                    "Център на с. Голица:<br />• Паметна плоча на Вълчан Войвода<br />• Паметник на петела<br />• Храм „Св. Димитрий Мироточиви“<br />",
                    "Късноантичен и средновековен крепостен комплекс Хемските порти/Гермето, с. Голица",
                    "Средновековен комплекс „Ниазларско герме“ Булаир, с.Солник", "Водопад „Скока“, с. Солник",
                    "Обяд",
                    "ПМ „Лонгоза“, с.Ново Оряхово, с Старо Оряхово, с Шкорпиловци",
                    "Плаж кк Шкорпиловци"],
                lunchDetails: "",
                timeStamps: ["45", "30", "30", "60", "45", "60", "60", "120"],
                night: ""

            },

        ],
        provadia: [
            {
                dayNumber: 1,
                variant: 1,
                bgColor: "bg-primary",
                details: ["Исторически музей в град Провадия", "Провадия – Солницата", "Обяд в местно заведение", "Крепост „Овеч“", "Нощувка "],
                lunchDetails: "",
                timeStamps: ["60", "60", "90", "60"],
                night: "Нощувка"

            },
            {
                dayNumber: 2,
                variant: 1,
                bgColor: "bg-primary",
                details: ["Пешеходен преход: с. Петров - Скални манастири „Градище“ и „Свети Георги“  - с. Петров дол", "Обяд в местно заведение", "Исторически музей в гр. Провадия", "Крепост „Овеч“"],
                lunchDetails: "",
                timeStamps: ["240", "60", "60", "60"],
                night: ""


            },
            {
                dayNumber: 1,
                variant: 2,
                bgColor: "bg-primary",
                details: ["Етнографска сбирка в Народно читалище „Илия Добрев – 1899“, с. Манастир", "Пешеходен преход: Скален манастир „Кара пещера“/отиване и връщане/", "Обяд в местно заведение", "Етнографска сбирка в Народно читалище „Васил Левски - 1901“, с. Добрина", "Вкопаната църква „Свети Теодор“ в село Добрина"],
                lunchDetails: "",
                timeStamps: ["60", "150", "90", "60", "30"],
                night: "Нощувка"


            },
            {
                dayNumber: 2,
                variant: 2,
                bgColor: "bg-primary",
                details: ["Крепост „Овеч“", "Исторически музей в град Провадия", "Обяд в местно заведение", "Провадия – Солницата", "Винарска изба, с. Блъсково."],
                lunchDetails: "",
                timeStamps: ["60", "60", "90", "60", "90"],

            },

        ],

    }

    const threeDayPackages = {
        provadia: [
            {
                dayNumber: 1,
                bgColor: "bg-secondary",
                details: ["Исторически музей", "Градска художествена галерия и разходка из централната част на града", "Обяд в местно заведение", "Провадия – Солницата", "Крепост „Овеч“"],
                lunchDetails: "",
                timeStamps: ["60", "60", "60", "60", "60"],
                night: "Нощувка",

            },
            {
                dayNumber: 2,
                bgColor: "bg-secondary",
                details: ["Етнографска сбирка в Народно читалище „Илия Добрев – 1899“ в с. Манастир", "Скален манастир „Кара пещера“ /пешеходен преход - 2ч. и 30 мин отиване и връщане/", "Обяд в местно заведение за хранене", "Етнографска сбирка в Народно читалище „Васил Левски - 1901“ в с. Добрина", "Вкопаната църква „Свети Теодор“ в село Добрина"],
                lunchDetails: "",
                timeStamps: ["60", "150", "60", "60", "30"],
                night: "Нощувка в къщи за гости от селски тип с. Добрина",

            },
            {
                dayNumber: 3,
                bgColor: "bg-secondary",
                timeStamps: ["90", "300"],
                details: ["Пешеходен преход до Венчанско кале“ /до село Венчан", "Пешеходен преход до Природна забележителност „Пробития камък“ /от жп спирка Венчан до жп спирка Равна/"],
            },
        ],
        dolniChiflik: [
            {
                dayNumber: 1,
                bgColor: "bg-secondary",
                details: [
                    "Посещение на централната градска част на Долни чифлик и беседа:<br />• Паметник на Георги Трайков<br />• Паметник на Иван Сокачев<br />• Храм „Св.Рождество богородично“<br />• Етнографски музей при НЧ „Изгрев“",
                    "Късноантична крепост „Голямото кале“, гр. Долни чифлик",
                    "Обяд комбиниран с участие на туристите в приготвянето на местни гозби, ястия и др.",
                    "Държавно ловно стопанство „Шерба“, с Горен Чифлик (с еко и опознаварелен туризъм)",
                    "Ботаническа градина, с Гроздьово", "Крепост Градище, с.Гроздьово", "Римска Крепост „Паниса“, с. Гроздьово"],
                lunchDetails: "",
                timeStamps: ["60", "30", "90", "60", "45", "45", "30"],
                night: "Нощувка",

            },
            {
                dayNumber: 2,
                bgColor: "bg-secondary",
                details: [
                    "Храм „Св Архангел Михаил“, с. Венелин", "Църква „Свето възнесение Господне“, с. Пчелник",
                    "Етнографски комплекс Кривини, с. Кривини", "Средновековен комплекс „Ниазларско герме“ Булаир, с.Солник",
                    "Водопад „Скока“, с. Солник", "Обяд в местно заведение", "Храм „Възнесение Господне“, с Бърдарево", "Късноантична крепост Бурун градище, с. Голица",
                    "Посещение на с. Голица:<br />•	Паметна плоча на Вълчан Войвода, с. Голица<br />•	Паметник на петела, център на с. Голица<br />•	Храм „Св. Димитрий Мироточиви“, с. Голица"],
                lunchDetails: "",
                timeStamps: ["45", "45", "45", "30", "30", "60", "30", "45", "45"],
                night: "Нощувка",

            },
            {
                dayNumber: 3,
                bgColor: "bg-secondary",
                details: ["Скални светилище „Орта кая“, с. Булаир", "Скални светилище, ‚Ярамаз кая“, с. Булаир", "Късноантичен и средновековен отбранителен компплекс Ниазларско герме, с. Булаир", "Обяд", "„Лонгоза“, с.Ново Оряхово, с Старо Оряхово, с Шкорпиловци", "Антична крепост Шкорпиловци, комбинирана с посещение на обекти в с. Шкорпиловци", "КК Шкорпиловци"],
                lunchDetails: "",
                timeStamps: ["40", "40", "40", "60", "40", "40", "120"],
                night: "",

            },
        ],
        dalgopol: [
            {
                dayNumber: 1,
                bgColor: "bg-secondary",
                tourTitle: "Историческо наследство",
                details: [
                    "Исторически музей „Дългопол“",
                    "Храм „Св. Иван Рилски” – гр. Дългопол", "Часовникова кула – Дългопол",
                    "Средновековен манастир „Св. Атанасий” до с. Аспарухово",
                    "Възрожденска църква „Св. Петка Параскева” с. Аспарухово",
                    "Обяд в местен ресторант, заведение за хранене и др.",
                    "ПЗ Чудните скали",
                    "Посещение на винарна, др. забавления",
                ],
                lunchDetails: "",
                timeStamps: ["45", "30", "15", "30", "30", "60", "60", "60"],
                night: "Нощувка",

            },
            {
                dayNumber: 2,
                bgColor: "bg-secondary",
                tourTitle: "Еко туризъм / Еко поход",
                details: [
                    "Защитена местност „Водениците“",
                    "ПЗ „Куза скока”",
                    "Крепост „Овчага“ (Града)",
                    "Обяд",
                    "Скален манастир с. Рояк",
                    "Гребане/скални катерене/колоездене",
                ],
                lunchDetails: "",
                timeStamps: ["90", "90", "90", "60", "90", "120"],
                night: "Нощувка",

            },
            {
                dayNumber: 3,
                bgColor: "bg-secondary",
                tourTitle: "Развлечения: почивка, плажуване",
                details: [
                    "Посещение на грънчарско ателие – единственото запазено в региона",
                    "Посещение на етнографски музей - читалище „Добри Недев – 1894 г.” с. Аспарухово",
                    "Посещение на възрожденска църква „Св. Петка Параскева“, с. Аспарухово",
                    "Исторически музей Дългопол"
                ],
                timeStamps: ["30", "45", "45", "60"],
                night: "",
            },
        ],

    }

    const [selectedStation, setSelectedStation] = useState('')

    const handleStationClick = (station) => {
        setSelectedStation(station)
    }

    const filteredVariants = packageVariants[selectedStation] || []
    const filteredTwoDayPackages = twoDayPackages[selectedStation] || []
    const filteredThreeDayPackages = threeDayPackages[selectedStation] || []

    const sitesWithLogos = [
        { key: 'dalgopol', logo: dalgopolPackages },
        { key: 'dolniChiflik', logo: dolniChiflikPackages },
        { key: 'provadia', logo: provadiqPackages },
    ]


    return (
        <div className="w-full flex flex-col mt-28 md:mt-48 px-4 md:px-0 ">
            <div className="w-full md:w-2/3 flex flex-col md:flex-row mx-auto justify-center gap-10 md:gap-20 items-center ">
                <h1 className="font-body text-3xl md:text-5xl uppercase font-bold text-secondary text-center md:text-left md:hidden">{t('touristPackages')}</h1>
                <div className="w-2/3 md:hidden">
                    <img className="w-full" src={touristPackagesHero} alt="Hero Image" />
                </div>
                <div className="md:w-1/3">
                    <h1 className="font-body text-3xl md:text-5xl uppercase font-bold text-secondary hidden md:block text-center md:text-left">{t('touristPackages')}</h1>
                    <p className="font-body text-sm md:mt-5">{t("packagesDesc")}</p>

                </div>
                <div className="w-1/3 hidden md:block">
                    <img className="w-full" src={touristPackagesHero} alt="Hero Image" />
                </div>

            </div>
            <div className="flex flex-col relative w-full md:w-2/3 overflow-x-auto hide-scrollbar md:overflow-x-clip mx-auto justify-center gap-4 mt-5">
                <div className="flex gap-4 mx-auto">
                    {sitesWithLogos.map((site) => (
                        <div key={site.key} className={`relative flex flex-col items-center transition-all duration-500 ${selectedStation === site.key ? "w-96" : selectedStation ? "w-40 opacity-50" : "w-80"}`} onClick={() => handleStationClick(site.key)}>
                            {/* <h2 className="font-heading uppercase font-bold text-2xl absolute md:right-3 mx-auto text-white bottom-6 text-blue drop-shadow-lg z-10">
                                {t(site.key)}
                            </h2> */}
                            <img
                                src={site.logo}
                                alt="SiteLogo"
                                className={`object-cover w-full h-full my-4 cursor-pointer transition-all duration-500 ${selectedStation === site.key ? "w-80" : selectedStation ? "w-40 opacity-50" : "w-80"}`}
                            />
                            <h2 className={`absolute bottom-5 left-0 right-0 text-center font-heading uppercase font-bold text-white transition-all duration-500 ${selectedStation === site.key ? 'text-3xl' : 'text-xl'}`}>
                                {t(site.key)}
                            </h2>
                        </div>
                    ))}
                </div>
            </div>
            {selectedStation && (
                <div className="w-full flex flex-col items-center mt-10 ">
                    <h1 className="font-body text-3xl md:text-4xl uppercase font-bold">{t('oneDay')}</h1>
                    <div className="w-full md:w-2/4 text-center mx-auto">
                        <p className="font-body mt-5 text-sm md:text-base">{t('oneDayDesc')}</p>
                    </div>
                </div>
            )}

            <div className={`w-full md:w-[60%] mx-auto grid grid-cols-1 md:grid-cols-2 ${filteredVariants.length >= 3 ? "lg:grid-cols-3" : "lg:grid-cols-2"} gap-6 mt-5 md:mt-10}`}>
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
            {selectedStation && (
                <div className="w-full flex flex-col items-center mt-20 ">
                    <h1 className="font-body text-3xl md:text-4xl uppercase font-bold text-primary">{t('twoDay')}</h1>
                    <div className="w-full md:w-2/4 text-center mx-auto">
                        <p className="font-body mt-5 text-base">{t('twoDayDesc')}</p>
                    </div>
                </div>
            )}
            <div className="w-full md:w-[60%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
                {filteredTwoDayPackages.map((day, index) => (
                    <TouristPackageDays
                        key={index}
                        dayNumber={day.dayNumber}
                        bgColor={day.bgColor}
                        details={day.details}
                        lunchDetails={day.lunchDetails}
                        night={day.night}
                        timeStamps={day.timeStamps}
                        tourTitle={day.tourTitle}
                        variant={day.variant}
                    />
                ))}
            </div>
            {selectedStation && (
                <div className="w-full flex flex-col items-center mt-20 ">
                    <h1 className="font-body text-3xl md:text-4xl uppercase font-bold text-secondary">{t('threeDay')}</h1>
                    <div className="w-full md:w-2/4 text-center mx-auto">
                        <p className="font-body mt-5 text-base">{t("threeDayDesc")}</p>
                    </div>
                </div>
            )}
            <div className="w-full md:w-[60%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-5 md:mt-10">
                {filteredThreeDayPackages.map((day, index) => (
                    <TouristPackageDays
                        key={index}
                        dayNumber={day.dayNumber}
                        bgColor={day.bgColor}
                        details={day.details}
                        lunchDetails={day.lunchDetails}
                        night={day.night}
                        timeStamps={day.timeStamps}
                        tourTitle={day.tourTitle}
                    />
                ))}
            </div>
        </div>
    )
}

export default TouristPackages
