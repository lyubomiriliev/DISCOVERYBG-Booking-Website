import { touristPackagesHero } from "../assets"
import TouristPackageDays from "../components/TouristPackageDays"
import TouristPackageVariants from "../components/TouristPackageVariants"

const TouristPackages = () => {

    const packageVariants = [
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

    ]

    const twoDayPackages = [
        {
            dayNumber: 1,
            bgColor: "bg-primary",
            details: "- Късноантична и средновековна крепост Градище /Голямото кале/, с. Петров дол - Исторически музей в гр. Провадия - Първата българска църква „Св. Николай Мирликийски Чудотворец“, в комплекс Вароша гр. Провадия Църква “Св. Благовещение” гр. Провадия - Крепост 'Овеч'",
            lunchDetails: "- Градска галерия в гр. Провадия - Провадия Солницата",

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

        },
        {
            dayNumber: 2,
            bgColor: "bg-secondary",
            details: "- Крепост 'Овеч' - Скален манастир 'Шашкъни' - Късноантична и средновекова крепост на Мухалийското кале. Скален манастир от XIII-XIV век. -	Скални килии в склоновете на Мухалийска кале.",
            lunchDetails: "Средновековен скален манастир, североизточно в местност Тъпанчето, с. Кривня",

        },
        {
            dayNumber: 3,
            bgColor: "bg-secondary",
            details: "-	Вкопана църква 'Свети Теодор', с. Добрина - Етнографска сбирка в НЧ „Васил Левски – 1901“, с. Добрина -	Надгробна могила в местността Чалъка, могилен некропол с. Златина",
        },

    ]

    return (
        <div className="w-full flex flex-col mt-48 ">
            <div className="w-2/3 flex mx-auto justify-center gap-10 items-center ">
                <div className="w-1/3 flex flex-col">
                    <h1 className="font-body text-6xl uppercase font-bold text-secondary">Tourist packages</h1>
                    <p className="font-body mt-5">Lorem ipsum dolor sit amet consectetur. Tellus quisque lacus semper tortor mauris porta mi viverra tellus. Quisque interdum dui etiam laoreet sed. Sed Lorem ipsum dolor sit amet consectetur. Tellus quisque lacus semper tortor mauris porta mi viverra tellus. Quisque interdum dui etiam laoreet sed. Sed </p>
                </div>
                <div className="w-1/3">
                    <img className="w-full" src={touristPackagesHero} alt="Hero Image" />
                </div>
            </div>
            <div className="w-2/3 flex flex-col mx-auto items-center mt-20 ">
                <h1 className="font-body text-5xl uppercase font-bold">One day Packages</h1>
                <div className="w-2/4 text-center mx-auto">
                    <p className="font-body mt-5">Еднодневните пакети включват основно посещение на гр. Провадия с възможност за обиколка на близки забележителности. Представени са следните варианти:</p>
                </div>
            </div>
            {packageVariants.map((variant, index) => (
                <TouristPackageVariants
                    key={index}
                    variantNumber={variant.variantNumber}
                    tourTitle={variant.tourTitle}
                    details={variant.details}
                    lunch={variant.lunch}
                    bgColor={variant.bgColor}
                />
            ))}
            <div className="w-2/3 flex flex-col mx-auto items-center mt-20 ">
                <h1 className="font-body text-5xl uppercase font-bold text-primary">Two day Packages</h1>
                <div className="w-2/4 text-center mx-auto">
                    <p className="font-body mt-5">Двудневните пакети могат да комбинират посещение на обекти от еднодневните маршрути, заедно със следните:</p>
                </div>
            </div>
            {twoDayPackages.map((day, index) => (
                <TouristPackageDays
                    key={index}
                    dayNumber={day.dayNumber}
                    bgColor={day.bgColor}
                    details={day.details}
                    lunchDetails={day.lunchDetails}
                />
            ))}
            <div className="w-2/3 flex flex-col mx-auto items-center mt-20 ">
                <h1 className="font-body text-5xl uppercase font-bold text-secondary">Three day Packages</h1>
            </div>
            {threeDayPackages.map((day, index) => (
                <TouristPackageDays
                    key={index}
                    dayNumber={day.dayNumber}
                    bgColor={day.bgColor}
                    details={day.details}
                    lunchDetails={day.lunchDetails}
                />
            ))}
        </div>
    )
}

export default TouristPackages
