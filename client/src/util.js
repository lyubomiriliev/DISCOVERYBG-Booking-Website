import {
  antichna1,
  antichna2,
  arhangelMihailQR,
  blagoveshtenieQR,
  burunGradishteQR,
  chudniSkaliQR,
  curkva1,
  curkva2,
  curkva3,
  curkva4,
  curkva5,
  curkva6,
  curkvaDulgopol1,
  curkvaPetkaQR,
  etnografski1,
  etnografski2,
  etnografskiMuzeiQR,
  golca1,
  golqmotoKaleQR,
  hemski1,
  hemski2,
  hemski3,
  hemski4,
  hemskiPortiQR,
  hram1,
  hram2,
  hram3,
  istoricheskiMuzeiQR,
  kale1,
  kale2,
  kale3,
  kale4,
  kara1,
  kara2,
  kara3,
  kara4,
  kara5,
  kara6,
  karaPeshteraQR,
  kuzaSkokaQR,
  manastir1,
  manastir2,
  manastir3,
  manastir4,
  mestnostManastiraQR,
  muha1,
  muha2,
  muha3,
  muha4,
  muha5,
  muha6,
  muhaKaleQR,
  muzei1,
  muzei2,
  muzei3,
  muzei4,
  muzeiDulgopol1,
  muzeiDulgopol2,
  muzeiDulgopol3,
  muzeiDulgopol4,
  muzeiDulgopolQR,
  niazlarskoGermeQR,
  obekt1,
  obekt2,
  obekt3,
  obekt4,
  obekt5,
  obekt6,
  orlov1,
  orlov2,
  orlov3,
  orlov4,
  orlov5,
  orlov6,
  orlovKamukQR,
  orta1,
  orta2,
  orta3,
  orta4,
  ortaKaqQR,
  ovchaga1,
  ovchaga2,
  ovchaga3,
  ovchaga4,
  ovchaga5,
  ovchagaQR,
  ovech1,
  ovech2,
  ovech3,
  ovech4,
  ovech5,
  ovech6,
  ovechQR,
  pametnik1,
  pametnik2,
  pametnik3,
  pametnik4,
  pametnik5,
  pametnik6,
  praistoricheskiQR,
  qrmaz1,
  qrmaz2,
  qrmaz3,
  qrmaz4,
  qrmazKaqQR,
  roqk1,
  roqk2,
  roqk3,
  roqk4,
  roqk5,
  roqkQR,
  shashkuniteQR,
  shkorpilovciQR,
  skali1,
  skali2,
  skali3,
  skali4,
  skoka1,
  skoka2,
  skoka3,
  skoka4,
  skoka5,
  skokaQR,
  svTeodorQR,
  teodor1,
  teodor2,
  teodor3,
  teodor4,
  teodor5,
  teodor6,
  vodopad1,
  vodopad2,
} from "./assets";

export const touristSites = {
  dalgopol: {
    name: {
      en: "Dalgopol",
      bg: "Дългопол",
      pl: "Dalgopol",
    },
    places: [
      {
        id: "place1",
        name: {
          en: "Historical Museum",
          bg: "Исторически музей, гр. Дългопол",
          pl: "Исторически музей, гр. Дългопол",
        },
        displayPhoto: muzeiDulgopol1,
        photos: [
          { muzeiDulgopol1, muzeiDulgopol2, muzeiDulgopol3, muzeiDulgopol4 },
        ],
        googleMapsLink: "https://maps.app.goo.gl/CMorjEfStVpuXjUr8",
        googleMaps:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2915.5874135772065!2d27.341448276530404!3d43.050111691227094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40a5c732f6eb1a5f%3A0x78aea70a83d6ec54!2z0JPRgNCw0LTRgdC60Lgg0LzRg9C30LXQuQ!5e0!3m2!1sen!2sbg!4v1726769667633!5m2!1sen!2sbg",
        bookingLink:
          "https://www.booking.com/searchresults.html?ss=D%C5%ADlgopol&ssne=D%C5%ADlgopol&ssne_untouched=D%C5%ADlgopol&efdco=1&label=gen173nr-1FCAEoggI46AdIM1gEaBeIAQGYATG4ARfIAQzYAQHoAQH4AQKIAgGoAgO4AqLPqLYGwAIB0gIkZjgxYTc4NzgtMWU5YS00MjliLWFhYmEtNTFjNmM3YzNkZWFk2AIF4AIB&aid=304142&lang=en-us&sb=1&src_elem=sb&src=searchresults&dest_id=-833629&dest_type=city&checkin=2024-09-06&checkout=2024-09-07&ltfd=5%3A1%3A10-2024_9-2024_11-2024%3A1%3A&group_adults=2&no_rooms=2&group_children=0",
        airbnbLink:
          "https://www.airbnb.com/s/Dalgopol--Varna--Bulgaria/homes?tab_id=home_tab&refinement_paths%5B%5D=%2Fhomes&flexible_trip_lengths%5B%5D=one_week&monthly_start_date=2024-10-01&monthly_length=3&monthly_end_date=2025-01-01&price_filter_input_type=0&channel=EXPLORE&query=Dalgopol%2C%20Varna&place_id=ChIJC5rkrd_EpUARQFy_aRKgAAQ&location_bb=Qiw%2F4UHa7ppCLC2bQdqCAw%3D%3D&date_picker_type=flexible_dates&source=structured_search_input_header&search_type=autocomplete_click",
        restaurantsLink:
          "https://www.tripadvisor.com/Tourism-g3748643-Dalgopol_Varna_Province-Vacations.html",
        qrCode: istoricheskiMuzeiQR,
        description: {
          en: "Description in English",
          bg: "Историческият музей в Дългопол е създаден през 1948 г. като училищна сбирка от началния учител Димитър Иванов Златарски. През 1975 г. музеят получава статут, а през 1985г. в центъра на Дългопол е построена настоящата сграда. Тук са събрани огромен брой материали от територията на общината и съседните общини. По своето количество, разнообразен характер и хронологически обхват, по научна и художествена стойност, те правят музея един от големите и интересни в страната. Историческият музей в Дългопол е създаден през 1948 г. като училищна сбирка от началния учител Димитър Иванов Златарски. През 1975 г. музеят получава статут, а през 1985г. в центъра на Дългопол е построена настоящата сграда. Тук са събрани огромен брой материали от територията на общината и съседните общини. По своето количество, разнообразен характер и хронологически обхват, по научна и художествена стойност, те правят музея един от големите и интересни в страната. В археологическия отдел са обхванати всички епохи- от палеолита до Късното средновековие. Изключителна ценност за цялата археологическа наука са оръдията на труда, съдовете, оръжията, култувата пластика от неолита, халколита и бронзовата епохи, открити при проучването на еднослойните селища „Усое”-1 и „Усое„-2 при с. Аспарухово, селищните могили при селата Сава, Цонево и Голямо Делчево.",
          pl: "Opis po polsku",
        },
        access: {
          en: "",
          bg: "Историческият музей се намира в центъра на гр. Дългопол.",
          pl: "",
        },
        summerWorkTime: {
          en: "",
          bg: "От понеделник до петък: 8:00ч - 16:00ч Почивни дни: събота и неделя",
          pl: "",
        },
        winterWorkTime: {
          en: "",
          bg: "След 16ч, в събота и неделя музеят работи с предварителна заявка.",
          pl: "",
        },
        coordinates: {
          gps: "43.0501, 27.34402",
        },
      },
      {
        id: "place2",
        name: {
          en: "Locality 'Manastira' village Asparuhovo",
          bg: "Местност „Манастира“ с. Аспарухово",
          pl: "Miejsce 1 w Dalgopol",
        },
        displayPhoto: manastir1,
        photos: [{ manastir1, manastir2, manastir3, manastir4 }],
        googleMapsLink: "https://maps.app.goo.gl/9MeyC1BHig1QUSfG6",
        googleMaps:
          "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d23351.802285574344!2d27.27198213958156!3d42.978794247393886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDLCsDU5JzAwLjkiTiAyN8KwMTYnMzguMSJF!5e0!3m2!1sen!2sbg!4v1726769750087!5m2!1sen!2sbg",
        bookingLink:
          "https://www.booking.com/searchresults.html?ss=D%C5%ADlgopol&ssne=D%C5%ADlgopol&ssne_untouched=D%C5%ADlgopol&efdco=1&label=gen173nr-1FCAEoggI46AdIM1gEaBeIAQGYATG4ARfIAQzYAQHoAQH4AQKIAgGoAgO4AqLPqLYGwAIB0gIkZjgxYTc4NzgtMWU5YS00MjliLWFhYmEtNTFjNmM3YzNkZWFk2AIF4AIB&aid=304142&lang=en-us&sb=1&src_elem=sb&src=searchresults&dest_id=-833629&dest_type=city&checkin=2024-09-06&checkout=2024-09-07&ltfd=5%3A1%3A10-2024_9-2024_11-2024%3A1%3A&group_adults=2&no_rooms=2&group_children=0",
        airbnbLink:
          "https://www.airbnb.com/s/Dalgopol--Varna--Bulgaria/homes?tab_id=home_tab&refinement_paths%5B%5D=%2Fhomes&flexible_trip_lengths%5B%5D=one_week&monthly_start_date=2024-10-01&monthly_length=3&monthly_end_date=2025-01-01&price_filter_input_type=0&channel=EXPLORE&query=Dalgopol%2C%20Varna&place_id=ChIJC5rkrd_EpUARQFy_aRKgAAQ&location_bb=Qiw%2F4UHa7ppCLC2bQdqCAw%3D%3D&date_picker_type=flexible_dates&source=structured_search_input_header&search_type=autocomplete_click",
        restaurantsLink:
          "https://www.tripadvisor.com/Tourism-g3748643-Dalgopol_Varna_Province-Vacations.html",
        qrCode: mestnostManastiraQR,
        description: {
          en: "Description in English",
          bg: "Името на местността идва от откритите останки от средновековен манастир. В скалния масив има няколко малки пещери и една по-голяма. На юг от масива има пътека, която стига до хижа Чудните скали и преминава покрай скална игла друга по-голяма пещера, входът на която се намира на самата пътека. В подножието на скалите се намира яз. Цонево, който е подходящ за гребане, риболов, скокове от мостовете или освежаване през горещите дни. В рaйона се намира и скалният феномен Чудните скали. Предвид релефа на масива и скалния характер, тук особено подходящо занимание е скалното катерене. Обособени са няколко маршрута за катерене към месността, както и към обекта за катерене Чудните скали. За любителите на планинското колоездене, местността предлага разнообразие от планински пътища със спускания и изкачвания, които продължават и от южната страна на язовира. Скалите са с южно изложение, което ги прави подходящи за катерене през пролетта и есента, както и през слънчевите зимни дни. Мястото е много уютно и рядко духа вятър.",
          pl: "Opis po polsku",
        },
        access: {
          en: "",
          bg: "Основният път за достигане до местността е през село Аспарухово. От главния път от Провадия за Айтос, който води към Айтоския проход, на около 500 м. преди разклона за с. Аспарухово, вдясно се отделя тесен асфалтов път, по който се продължава около 1,5 км. Стига се до един каптаж, след който асфалтът свършва и се продължава по черен път още около 1,5 км. В един момент, черният път прави рязко изкачване за около 20-ина метра, след което се разклонява на две. Тръгва се по десния път. След около 200 м. се стига до голяма поляна. Оттам до скалния масив се стига по пътеки през гората за около 30 минути.",
          pl: "",
        },
        summerWorkTime: {
          en: "",
          bg: "Обектът е със свободен достъп.",
          pl: "",
        },
        winterWorkTime: {
          en: "",
          bg: "",
          pl: "",
        },
        coordinates: {
          gps: "42.98359, 27.27725",
        },
      },
      {
        id: "place3",
        name: {
          en: "Natural Landmark 'The Wonderful Rocks'",
          bg: "Природна Забележителност „Чудните скали“",
          pl: "Miejsce 1 w Dalgopol",
        },
        displayPhoto: skali1,
        photos: [{ skali1, skali2, skali3, skali4 }],
        googleMapsLink: "https://maps.app.goo.gl/RnjqBVqM8C8UmCiu9",
        googleMaps:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d46711.99458444444!2d27.241580222083016!3d42.96774719999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40a5daca8662647d%3A0xe76ddc9700dbb8f5!2sWonderful%20rocks!5e0!3m2!1sen!2sbg!4v1726769824022!5m2!1sen!2sbg",
        bookingLink:
          "https://www.booking.com/searchresults.html?ss=D%C5%ADlgopol&ssne=D%C5%ADlgopol&ssne_untouched=D%C5%ADlgopol&efdco=1&label=gen173nr-1FCAEoggI46AdIM1gEaBeIAQGYATG4ARfIAQzYAQHoAQH4AQKIAgGoAgO4AqLPqLYGwAIB0gIkZjgxYTc4NzgtMWU5YS00MjliLWFhYmEtNTFjNmM3YzNkZWFk2AIF4AIB&aid=304142&lang=en-us&sb=1&src_elem=sb&src=searchresults&dest_id=-833629&dest_type=city&checkin=2024-09-06&checkout=2024-09-07&ltfd=5%3A1%3A10-2024_9-2024_11-2024%3A1%3A&group_adults=2&no_rooms=2&group_children=0",
        airbnbLink:
          "https://www.airbnb.com/s/Dalgopol--Varna--Bulgaria/homes?tab_id=home_tab&refinement_paths%5B%5D=%2Fhomes&flexible_trip_lengths%5B%5D=one_week&monthly_start_date=2024-10-01&monthly_length=3&monthly_end_date=2025-01-01&price_filter_input_type=0&channel=EXPLORE&query=Dalgopol%2C%20Varna&place_id=ChIJC5rkrd_EpUARQFy_aRKgAAQ&location_bb=Qiw%2F4UHa7ppCLC2bQdqCAw%3D%3D&date_picker_type=flexible_dates&source=structured_search_input_header&search_type=autocomplete_click",
        restaurantsLink:
          "https://www.tripadvisor.com/Tourism-g3748643-Dalgopol_Varna_Province-Vacations.html",
        qrCode: chudniSkaliQR,
        description: {
          en: "Description in English",
          bg: "Флората и фауната в района на местността са забележителни. В скалите гнездят много птици, и редки хищни видове, които привличат орнитолозите. В язовира има различни видове риба, което привлича много риболовци. Най- популярни са червеноперка, бяла риба, шпора, костур, щирка, бял сом и др. Местността е скалиста и затова съществуват интересни скални дупки и пещери, които обитават различни животни и птици. Скалите осигуряват чудесни места, подходящи за скално катерене. В миналото е имало и каменна кариера. Сега на това място, на десет минути пеш от Чудните скали е оформена стена за скално катерене, наречена „Старата кариера“. Има дъговидна форма с интересен таван. Районът се характеризира с изключително интересна тектонска структура, която представя оформилите се варовикови образования.",
          pl: "Opis po polsku",
        },
        access: {
          en: "",
          bg: "„Чудните скали“ са достъпни от главния път свързващ Северна и Южна България",
          pl: "",
        },
        summerWorkTime: {
          en: "",
          bg: "Обектът е със свободен достъп.",
          pl: "",
        },
        winterWorkTime: {
          en: "",
          bg: "",
          pl: "",
        },
        coordinates: {
          gps: "42.96774, 27.29244",
        },
      },
      {
        id: "place4",
        name: {
          en: "Medieval rock monastery in the village of Royak",
          bg: "Средновековен скален манастир с. Рояк",
          pl: "Miejsce 1 w Dalgopol",
        },
        displayPhoto: roqk1,
        photos: [{ roqk1, roqk2, roqk3, roqk4, roqk5 }],
        googleMapsLink: "https://maps.app.goo.gl/zitzSgfcfTkDSLje7",
        googleMaps:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57074.22472762407!2d27.36126593970899!3d43.07925080827604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40a5c76fd4f40d99%3A0xf2c0f477a8b349af!2z0KDQvtGP0YjQutC4INGB0LrQsNC70L3QuCDQvNCw0L3QsNGB0YLQuNGA0Lg!5e0!3m2!1sen!2sbg!4v1726769924059!5m2!1sen!2sbg",
        bookingLink:
          "https://www.booking.com/searchresults.html?ss=D%C5%ADlgopol&ssne=D%C5%ADlgopol&ssne_untouched=D%C5%ADlgopol&efdco=1&label=gen173nr-1FCAEoggI46AdIM1gEaBeIAQGYATG4ARfIAQzYAQHoAQH4AQKIAgGoAgO4AqLPqLYGwAIB0gIkZjgxYTc4NzgtMWU5YS00MjliLWFhYmEtNTFjNmM3YzNkZWFk2AIF4AIB&aid=304142&lang=en-us&sb=1&src_elem=sb&src=searchresults&dest_id=-833629&dest_type=city&checkin=2024-09-06&checkout=2024-09-07&ltfd=5%3A1%3A10-2024_9-2024_11-2024%3A1%3A&group_adults=2&no_rooms=2&group_children=0",
        airbnbLink:
          "https://www.airbnb.com/s/Dalgopol--Varna--Bulgaria/homes?tab_id=home_tab&refinement_paths%5B%5D=%2Fhomes&flexible_trip_lengths%5B%5D=one_week&monthly_start_date=2024-10-01&monthly_length=3&monthly_end_date=2025-01-01&price_filter_input_type=0&channel=EXPLORE&query=Dalgopol%2C%20Varna&place_id=ChIJC5rkrd_EpUARQFy_aRKgAAQ&location_bb=Qiw%2F4UHa7ppCLC2bQdqCAw%3D%3D&date_picker_type=flexible_dates&source=structured_search_input_header&search_type=autocomplete_click",
        restaurantsLink:
          "https://www.tripadvisor.com/Tourism-g3748643-Dalgopol_Varna_Province-Vacations.html",
        qrCode: roqkQR,
        description: {
          en: "Description in English",
          bg: "Според изследователите, скалната обител първоначално е изпълнявала ролята на тракийско светилище, датиращо от III - V в. По-късно през Средновековието се превръща в християнска монашеска обител. По цялата поляна има “разпиляни” скални късове с различна форма, като на някои от тях има следи от човешка дейност – много приличат на руини от древна крепост. По скалите има типични за древната тракийска култура скални ниши, което предполага, че християнските отшелници използват такива по-древни култови места като обект на поклонение. В стените на две засводени помещения, гледащи на изток и на юг, са издълбани многобройни скални ниши с неизвестно предназначение, затваряни някога с каменни или дървени капаци. Името, което носи местността е 'Дженевиз' – Генуезка и също предизвиква интерес.",
          pl: "Opis po polsku",
        },
        access: {
          en: "",
          bg: "Комплексът е трудно достъпен поради непристъпността на килиите ,пръснати на различни нива по отвесния Г-образен скален венец с височина на места може би 30 - тина метра. Но е много впечатляващ. Изходната точка е с. Рояк, в западния му край. Продължава се по удобен черен път, който се изкачва и преминава през голям селскостопански блок. Още тук можем да се насладим на приятни емоции – в далечината гордо се извисяват източните дялове на Стара планина и най-високият връх в района Коджа Кая.",
          pl: "",
        },
        summerWorkTime: {
          en: "",
          bg: "Скалният манастир е със свободен достъп",
          pl: "",
        },
        winterWorkTime: {
          en: "",
          bg: "",
          pl: "",
        },
        coordinates: {
          gps: "43.09745, 27.36174",
        },
      },
      {
        id: "place5",
        name: {
          en: "Medieval fortress 'Ovchaga'",
          bg: "Средновековна крепост „Овчага“",
          pl: "Miejsce 1 w Dalgopol",
        },
        displayPhoto: ovchaga1,
        photos: [{ ovchaga1, ovchaga2, ovchaga3, ovchaga4, ovchaga5 }],
        googleMapsLink: "https://maps.app.goo.gl/guQeJZ6cz7Veyr2c8",
        googleMaps:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d128434.70036982781!2d27.376114105784964!3d42.93204774318541!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40a5d12757949553%3A0x7cc1a5d67f975aee!2z0KHRgNC10LTQvdC-0LLQtdC60L7QstC90LAg0LrRgNC10L_QvtGB0YIgItCe0LLRh9Cw0LPQsCI!5e0!3m2!1sen!2sbg!4v1726769963034!5m2!1sen!2sbg",
        bookingLink:
          "https://www.booking.com/searchresults.html?ss=D%C5%ADlgopol&ssne=D%C5%ADlgopol&ssne_untouched=D%C5%ADlgopol&efdco=1&label=gen173nr-1FCAEoggI46AdIM1gEaBeIAQGYATG4ARfIAQzYAQHoAQH4AQKIAgGoAgO4AqLPqLYGwAIB0gIkZjgxYTc4NzgtMWU5YS00MjliLWFhYmEtNTFjNmM3YzNkZWFk2AIF4AIB&aid=304142&lang=en-us&sb=1&src_elem=sb&src=searchresults&dest_id=-833629&dest_type=city&checkin=2024-09-06&checkout=2024-09-07&ltfd=5%3A1%3A10-2024_9-2024_11-2024%3A1%3A&group_adults=2&no_rooms=2&group_children=0",
        airbnbLink:
          "https://www.airbnb.com/s/Dalgopol--Varna--Bulgaria/homes?tab_id=home_tab&refinement_paths%5B%5D=%2Fhomes&flexible_trip_lengths%5B%5D=one_week&monthly_start_date=2024-10-01&monthly_length=3&monthly_end_date=2025-01-01&price_filter_input_type=0&channel=EXPLORE&query=Dalgopol%2C%20Varna&place_id=ChIJC5rkrd_EpUARQFy_aRKgAAQ&location_bb=Qiw%2F4UHa7ppCLC2bQdqCAw%3D%3D&date_picker_type=flexible_dates&source=structured_search_input_header&search_type=autocomplete_click",
        restaurantsLink:
          "https://www.tripadvisor.com/Tourism-g3748643-Dalgopol_Varna_Province-Vacations.html",
        qrCode: ovchagaQR,
        description: {
          en: "Description in English",
          bg: "Овчага е крепост, която датира от XIII в. Има неправилна форма и заема площ от около 20 дка. Защитена е от здрава, укрепена стена от ломени камъни, споени с бял хоросан. В укрепената територия се виждат стените на масивни сгради. Тук са намерени множество фрагменти от строителна и битова керамика и съдове от графити от V-VI и XII-XIV в. Крепостта се споменава за първи път от византийския хронист Мануил Фил, който казва, че Овчага е крепост, служила през 1277-1279 г. за битките на цар Ивайло срещу византийския военачалник Михаил Глава. Затова се предполага, че името се нарича под името цар Ивайло. През 1388 година през прохода, свързващ Северна и Южна България минават войските на Али паша. Според предания сред местните турци в местността Орехово е станала голяма битка, в която паднали много нашественици, и оттогава мястото е наричано “джанери”, т.е. място на мъртви души. През 1409 г. при едно въстание в Северна България българите превземат крепостта Овчага, но синът на султан Баязид Муса я завладява отново и я събаря през 1412 г. (Муса е известен в народните песни като Муса Кеседжия). Територията около крепостта е богата на история, редки видове животни и фауна и забележителни пейзажи. Живописните местности Чудните скали, Велча, Лепино буче, Разкреница и Горолома са природни феномени, дарили планинската територия с уникална красота. Възникнало около древна римска крепост през далечния VIII в., селото и земите около него крият останки от значими праисторически култури на траки, римляни и византийци. През 1636 г. полският пътешественик Освиенцим отбелязва: „Село на половината път от Еникьой (днес Дългопол). Оттам започва пътят през Балкана за Цариград. Единият път е много стръмен, а другият минава покрай река Ичера (днешна Луда Камчия), От Средновековието селото е известно с името Овчага, тогава хората там са били както пазачи на прохода, така и овчари. С идването на османците по тези земи, пазачите се наричат 'Дервенджии', а селото – 'Ченге'. По-късно, в средата на XIX в. Селото е потопено от водите на река Луда Камчия. Налага се хората да напуснат домовете си, като изнасят всички камъни от църквата си високо, където водата не стига.",
          pl: "Opis po polsku",
        },
        access: {
          en: "",
          bg: "Крепостта се намира югоизточно от с. Аспарухово. Овчага е трудно достъпна поради надморската височина и липса на указателни табели. Но от върха се откроява изключителна гледка във всички посоки. ",
          pl: "",
        },
        summerWorkTime: {
          en: "",
          bg: "Достъпът до крепостта е свободен.",
          pl: "",
        },
        winterWorkTime: {
          en: "",
          bg: "",
          pl: "",
        },
        coordinates: {
          gps: "42.96083, 27.33583",
        },
      },
      {
        id: "place6",
        name: {
          en: "Waterfall 'Kuza Skoka'",
          bg: "Водопад „Куза Скока“",
          pl: "Miejsce 1 w Dalgopol",
        },
        displayPhoto: vodopad1,
        photos: [{ vodopad1, vodopad2 }],
        googleMapsLink: "https://maps.app.goo.gl/2uSYfFkTkPBksAQk7",
        googleMaps:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2919.496405758128!2d27.152848476527044!3d42.96781579648861!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40a5ddec8f94039f%3A0x329ba05ec9074c15!2z0JLQvtC00L7Qv9Cw0LQg0JrRg9C30LAg0YHQutC-0LrQsA!5e0!3m2!1sen!2sbg!4v1726769992781!5m2!1sen!2sbg",
        bookingLink:
          "https://www.booking.com/searchresults.html?ss=D%C5%ADlgopol&ssne=D%C5%ADlgopol&ssne_untouched=D%C5%ADlgopol&efdco=1&label=gen173nr-1FCAEoggI46AdIM1gEaBeIAQGYATG4ARfIAQzYAQHoAQH4AQKIAgGoAgO4AqLPqLYGwAIB0gIkZjgxYTc4NzgtMWU5YS00MjliLWFhYmEtNTFjNmM3YzNkZWFk2AIF4AIB&aid=304142&lang=en-us&sb=1&src_elem=sb&src=searchresults&dest_id=-833629&dest_type=city&checkin=2024-09-06&checkout=2024-09-07&ltfd=5%3A1%3A10-2024_9-2024_11-2024%3A1%3A&group_adults=2&no_rooms=2&group_children=0",
        airbnbLink:
          "https://www.airbnb.com/s/Dalgopol--Varna--Bulgaria/homes?tab_id=home_tab&refinement_paths%5B%5D=%2Fhomes&flexible_trip_lengths%5B%5D=one_week&monthly_start_date=2024-10-01&monthly_length=3&monthly_end_date=2025-01-01&price_filter_input_type=0&channel=EXPLORE&query=Dalgopol%2C%20Varna&place_id=ChIJC5rkrd_EpUARQFy_aRKgAAQ&location_bb=Qiw%2F4UHa7ppCLC2bQdqCAw%3D%3D&date_picker_type=flexible_dates&source=structured_search_input_header&search_type=autocomplete_click",
        restaurantsLink:
          "https://www.tripadvisor.com/Tourism-g3748643-Dalgopol_Varna_Province-Vacations.html",
        qrCode: kuzaSkokaQR,
        description: {
          en: "Description in English",
          bg: "Водопадът е впечатляващ с размерите и красотата си и привлича много туристи и хора обичащи приключения. Водата се спуска от 10 м и образува малко езерце. Природата около него очарова с красотата си. Това е сезонен водопад, който се подхранва от топенето на снеговете и поройните дъждове. В края на зимата или началото на пролетта той е най-подходящ за посещения и разходки.",
          pl: "Opis po polsku",
        },
        access: {
          en: "",
          bg: "Водопад „Куза Скока“ се намира в землището на село Лопушна. Водопадът е труднодостъпен. Маршрутът до него минава през няколко интересни места. В самото начало се преминава край местна овчарска чешма с ледено студена вода. По-нагоре по маршрута се прекосява плитък и спокоен поток. Стигайки до земеделските земи на селото, се откроява живописна гледка. В далечината се вижда с. Поляците, а недалеч се извисява връх Голямата Арковна. Маршрутът преминава през стръмна пътечка, която се спуска към тесния пролом. Там, още отдалече, се чува шепнещата мелодия на грациозния водоскок.",
          pl: "",
        },
        summerWorkTime: {
          en: "",
          bg: "Водопадът е със свободен достъп за посещения",
          pl: "",
        },
        winterWorkTime: {
          en: "",
          bg: "",
          pl: "",
        },
        coordinates: {
          gps: "42.96781, 27.15542",
        },
      },
      {
        id: "place7",
        name: {
          en: "Revival Church 'St. Petka Paraskeva'",
          bg: "Възрожденска църква „Св. Петка Параскева“",
          pl: "Miejsce 1 w Dalgopol",
        },
        displayPhoto: curkvaDulgopol1,
        photos: [{ curkvaDulgopol1 }],
        googleMapsLink: "https://maps.app.goo.gl/nPt5fePqnUfXGJyr7",
        googleMaps:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2912.340394798253!2d26.865997876533164!3d43.11837498685677!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40a5f0ce63594567%3A0xe4b6054b7f5caac6!2z0JLRitC30YDQvtC20LTQtdC90YHQutCwINGG0YrRgNC60LLQsCAi0KHQsi4g0J_QsNGA0LDRgdC60LXQstCwIiAo0J_QtdGC0LrQsCk!5e0!3m2!1sen!2sbg!4v1726770025346!5m2!1sen!2sbg",
        bookingLink:
          "https://www.booking.com/searchresults.html?ss=D%C5%ADlgopol&ssne=D%C5%ADlgopol&ssne_untouched=D%C5%ADlgopol&efdco=1&label=gen173nr-1FCAEoggI46AdIM1gEaBeIAQGYATG4ARfIAQzYAQHoAQH4AQKIAgGoAgO4AqLPqLYGwAIB0gIkZjgxYTc4NzgtMWU5YS00MjliLWFhYmEtNTFjNmM3YzNkZWFk2AIF4AIB&aid=304142&lang=en-us&sb=1&src_elem=sb&src=searchresults&dest_id=-833629&dest_type=city&checkin=2024-09-06&checkout=2024-09-07&ltfd=5%3A1%3A10-2024_9-2024_11-2024%3A1%3A&group_adults=2&no_rooms=2&group_children=0",
        airbnbLink:
          "https://www.airbnb.com/s/Dalgopol--Varna--Bulgaria/homes?tab_id=home_tab&refinement_paths%5B%5D=%2Fhomes&flexible_trip_lengths%5B%5D=one_week&monthly_start_date=2024-10-01&monthly_length=3&monthly_end_date=2025-01-01&price_filter_input_type=0&channel=EXPLORE&query=Dalgopol%2C%20Varna&place_id=ChIJC5rkrd_EpUARQFy_aRKgAAQ&location_bb=Qiw%2F4UHa7ppCLC2bQdqCAw%3D%3D&date_picker_type=flexible_dates&source=structured_search_input_header&search_type=autocomplete_click",
        restaurantsLink:
          "https://www.tripadvisor.com/Tourism-g3748643-Dalgopol_Varna_Province-Vacations.html",
        qrCode: curkvaPetkaQR,
        description: {
          en: "Description in English",
          bg: "„Св. Параскева Петка” в село Аспарухово, която построена през 1857 година от майстори от Охрид. Село Аспарухово е едно от най-старите и живописни села във Варненска област, разположено в подножието на Стара планина, на брега на язовир Цонево. Създадено още през VII - XIX в. с името Овчага и устояло на османското нашествие вече с ново име – Ченге (битка), жителите на селото в продължение на векове са били пазачи на прохода при Луда Камчия, заради което били освободени от данъци. Последното си име – Аспархово, селото получава през 1934 г., когато през него минава известният археолог Карел Шкорпил, който оприличил местните жители на аспаруховите българи. 35 години по-късно - при строежа на язовир Цонево, повечето от къщите са заляти от водата, а селото било преместено на по-високо място. На дъното на язовира трябвало до остане и местната църква 'Света Петка', но хората я изнесли камък по камък. Преди изграждането на язовира църквата е преместена на днешното си място. Край нея бил обособен и архитектурно-етнографски комплекс, чрез който Аспарухово пази живи старите български занаяти – тъкачество и грънчарство, и уникалните си фолклорни традиции и обичаи.",
          pl: "Opis po polsku",
        },
        access: {
          en: "",
          bg: "Църквата е действаща и достъпна.",
          pl: "",
        },
        summerWorkTime: {
          en: "",
          bg: "",
          pl: "",
        },
        winterWorkTime: {
          en: "",
          bg: "",
          pl: "",
        },
        coordinates: {
          gps: "42.980233, 27.323524",
        },
      },
      // {
      //   id: "place8",
      //   name: {
      //     en: "Place 1 in Dalgopol",
      //     bg: "Археологически паметник",
      //     pl: "Miejsce 1 w Dalgopol",
      //   },
      //   photos: [
      //     { pametnik1, pametnik2, pametnik3, pametnik4, pametnik5, pametnik6 },
      //   ],
      //   googleMapsLink: "https://maps.google.com/?q=Place1Dalgopol",
      //   bookingLink: "https://www.booking.com/Place1Dalgopol",
      //   restaurantsLink:
      //     "https://www.tripadvisor.com/RestaurantsNear-Place1Dalgopol",
      //   description: {
      //     en: "Description in English",
      //     bg: "Счита се, че тук се е намирал най-старият солодобивен център в Европа. Според проучвания на обекта се предполага, че градът е бил обитаван от около 350 души между 4700 и 4200 г. пр.н.е. - около 1500 години преди гръцката цивилизация. Именно затова Солната мина (Солницата) е обявена за най-стария праисторически град в Европа. Жителите използват кипяща вода от местен извор за създаване на солени тухли, които след това търгуват и използват за консервиране на месо. Това означава, че солта е била изключително ценен ресурс през тези времена. Солницата се разраства около извори с повишено съдържание на сол. Чрез нагряване в керамични съдове водата се изпарява и останалата сол се събира. Останките от откритите съдове показват еволюцията в технологията и съответстват на нарастващия добив на сол. Голяма част от проучените жилищни сгради в селището са двуетажни. Счита се, че селището е оградено със защитена стена с дебелина до 3 метра. От останките е видно, че силно земетресение е разрушило града. През епохата на енеолита солта е ценност, която е добре търгувана, видно в златарите в Солт Лейк, които също са едни от най-старите в Европа. Развитието на Солницата предшества и обуславя разцвета на една култура, по-късно показана и от открития Варненския некропол. Около селото се издигат огромни стени от каменни блокове, непознати до тогава като укрепителна система. Други интересни и странни находки са гробове на убити и 'разчленени тела' мъже и един троен гроб на възрастен мъж с две деца. Предполага се, че съществува неизследван до момента център за производство на керамика. Възникването и развитието на комплекса са пряко свързани с голямото и единствено находище на каменна сол в Източните Балкани. На площ от 300 дка археолозите изравят тонове керамични съдове, в които се вари вода от местните солени извори и се добива сол. За момента местоположението на този център за мащабно производство на керамични съдове остава загадка. Освен това, учените твърдят, че по онова време тогава не се използват грънчарски колела, но са открити останки от съдове с диаметър и височина около 70 см. ",
      //     pl: "Opis po polsku",
      //   },
      //   access: {
      //     en: "",
      //     bg: "До обекта се стига с транспорт.",
      //     pl: "",
      //   },
      //   summerWorkTime: {
      //     en: "",
      //     bg: "Водопадът е със свободен достъп за посещения",
      //     pl: "",
      //   },
      //   winterWorkTime: {
      //     en: "",
      //     bg: "",
      //     pl: "",
      //   },
      //   coordinates: {
      //     gps: "43.128417, 27.472528",
      //   },
      // },
      // {
      //   id: "place9",
      //   name: {
      //     en: "Place 1 in Dalgopol",
      //     bg: "Археологически паметник",
      //     pl: "Miejsce 1 w Dalgopol",
      //   },
      //   photos: [
      //     { pametnik1, pametnik2, pametnik3, pametnik4, pametnik5, pametnik6 },
      //   ],
      //   googleMapsLink: "https://maps.google.com/?q=Place1Dalgopol",
      //   bookingLink: "https://www.booking.com/Place1Dalgopol",
      //   restaurantsLink:
      //     "https://www.tripadvisor.com/RestaurantsNear-Place1Dalgopol",
      //   description: {
      //     en: "Description in English",
      //     bg: "Счита се, че тук се е намирал най-старият солодобивен център в Европа. Според проучвания на обекта се предполага, че градът е бил обитаван от около 350 души между 4700 и 4200 г. пр.н.е. - около 1500 години преди гръцката цивилизация. Именно затова Солната мина (Солницата) е обявена за най-стария праисторически град в Европа. Жителите използват кипяща вода от местен извор за създаване на солени тухли, които след това търгуват и използват за консервиране на месо. Това означава, че солта е била изключително ценен ресурс през тези времена. Солницата се разраства около извори с повишено съдържание на сол. Чрез нагряване в керамични съдове водата се изпарява и останалата сол се събира. Останките от откритите съдове показват еволюцията в технологията и съответстват на нарастващия добив на сол. Голяма част от проучените жилищни сгради в селището са двуетажни. Счита се, че селището е оградено със защитена стена с дебелина до 3 метра. От останките е видно, че силно земетресение е разрушило града. През епохата на енеолита солта е ценност, която е добре търгувана, видно в златарите в Солт Лейк, които също са едни от най-старите в Европа. Развитието на Солницата предшества и обуславя разцвета на една култура, по-късно показана и от открития Варненския некропол. Около селото се издигат огромни стени от каменни блокове, непознати до тогава като укрепителна система. Други интересни и странни находки са гробове на убити и 'разчленени тела' мъже и един троен гроб на възрастен мъж с две деца. Предполага се, че съществува неизследван до момента център за производство на керамика. Възникването и развитието на комплекса са пряко свързани с голямото и единствено находище на каменна сол в Източните Балкани. На площ от 300 дка археолозите изравят тонове керамични съдове, в които се вари вода от местните солени извори и се добива сол. За момента местоположението на този център за мащабно производство на керамични съдове остава загадка. Освен това, учените твърдят, че по онова време тогава не се използват грънчарски колела, но са открити останки от съдове с диаметър и височина около 70 см. ",
      //     pl: "Opis po polsku",
      //   },
      //   access: {
      //     en: "",
      //     bg: "До обекта се стига с транспорт.",
      //     pl: "",
      //   },
      //   summerWorkTime: {
      //     en: "",
      //     bg: "Водопадът е със свободен достъп за посещения",
      //     pl: "",
      //   },
      //   winterWorkTime: {
      //     en: "",
      //     bg: "",
      //     pl: "",
      //   },
      //   coordinates: {
      //     gps: "43.128417, 27.472528",
      //   },
      // },
      // {
      //   id: "place10",
      //   name: {
      //     en: "Place 1 in Dalgopol",
      //     bg: "Археологически паметник",
      //     pl: "Miejsce 1 w Dalgopol",
      //   },
      //   photos: [
      //     { pametnik1, pametnik2, pametnik3, pametnik4, pametnik5, pametnik6 },
      //   ],
      //   googleMapsLink: "https://maps.google.com/?q=Place1Dalgopol",
      //   bookingLink: "https://www.booking.com/Place1Dalgopol",
      //   restaurantsLink:
      //     "https://www.tripadvisor.com/RestaurantsNear-Place1Dalgopol",
      //   description: {
      //     en: "Description in English",
      //     bg: "Счита се, че тук се е намирал най-старият солодобивен център в Европа. Според проучвания на обекта се предполага, че градът е бил обитаван от около 350 души между 4700 и 4200 г. пр.н.е. - около 1500 години преди гръцката цивилизация. Именно затова Солната мина (Солницата) е обявена за най-стария праисторически град в Европа. Жителите използват кипяща вода от местен извор за създаване на солени тухли, които след това търгуват и използват за консервиране на месо. Това означава, че солта е била изключително ценен ресурс през тези времена. Солницата се разраства около извори с повишено съдържание на сол. Чрез нагряване в керамични съдове водата се изпарява и останалата сол се събира. Останките от откритите съдове показват еволюцията в технологията и съответстват на нарастващия добив на сол. Голяма част от проучените жилищни сгради в селището са двуетажни. Счита се, че селището е оградено със защитена стена с дебелина до 3 метра. От останките е видно, че силно земетресение е разрушило града. През епохата на енеолита солта е ценност, която е добре търгувана, видно в златарите в Солт Лейк, които също са едни от най-старите в Европа. Развитието на Солницата предшества и обуславя разцвета на една култура, по-късно показана и от открития Варненския некропол. Около селото се издигат огромни стени от каменни блокове, непознати до тогава като укрепителна система. Други интересни и странни находки са гробове на убити и 'разчленени тела' мъже и един троен гроб на възрастен мъж с две деца. Предполага се, че съществува неизследван до момента център за производство на керамика. Възникването и развитието на комплекса са пряко свързани с голямото и единствено находище на каменна сол в Източните Балкани. На площ от 300 дка археолозите изравят тонове керамични съдове, в които се вари вода от местните солени извори и се добива сол. За момента местоположението на този център за мащабно производство на керамични съдове остава загадка. Освен това, учените твърдят, че по онова време тогава не се използват грънчарски колела, но са открити останки от съдове с диаметър и височина около 70 см. ",
      //     pl: "Opis po polsku",
      //   },
      //   access: {
      //     en: "",
      //     bg: "До обекта се стига с транспорт.",
      //     pl: "",
      //   },
      //   summerWorkTime: {
      //     en: "",
      //     bg: "Водопадът е със свободен достъп за посещения",
      //     pl: "",
      //   },
      //   winterWorkTime: {
      //     en: "",
      //     bg: "",
      //     pl: "",
      //   },
      //   coordinates: {
      //     gps: "43.128417, 27.472528",
      //   },
      // },
    ],
  },
  dolniChiflik: {
    name: {
      en: "Dolni Chiflik",
      bg: "Долни Чифлик",
      pl: "Dolni Chiflik",
    },
    places: [
      {
        id: "place1",
        name: {
          en: "Ancient fortress of Shkorpilovtsi, Shkorpilovtsi village",
          bg: "Антична крепост Шкорпиловци, с. Шкорпиловци",
          pl: "Исторически музей, гр. Дългопол",
        },
        displayPhoto: antichna1,
        photos: [{ antichna1, antichna2 }],
        googleMapsLink: "https://maps.app.goo.gl/Zoscs68rRFhdhSpp6",
        googleMaps:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2919.8998014590925!2d27.89236207652673!3d42.95931589703154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40a439628149f58b%3A0x86936bf60746536e!2z0JDQvdGC0LjRh9C90LAg0LrRgNC10L_QvtGB0YI!5e0!3m2!1sen!2sbg!4v1726768284356!5m2!1sen!2sbg",
        bookingLink:
          "https://www.booking.com/searchresults.html?ss=Dolni+Chiflik%2C+Varna+Province%2C+Bulgaria&ssne=D%C5%ADlgopol&ssne_untouched=D%C5%ADlgopol&efdco=1&label=gen173nr-1FCAEoggI46AdIM1gEaBeIAQGYATG4ARfIAQzYAQHoAQH4AQKIAgGoAgO4AqLPqLYGwAIB0gIkZjgxYTc4NzgtMWU5YS00MjliLWFhYmEtNTFjNmM3YzNkZWFk2AIF4AIB&aid=304142&lang=en-us&sb=1&src_elem=sb&src=searchresults&dest_id=-834001&dest_type=city&ac_position=1&ac_click_type=b&ac_langcode=en&ac_suggestion_list_length=2&search_selected=true&search_pageview_id=a0713ed728b80453&ac_meta=GhBhMDcxM2VkNzI4YjgwNDUzIAEoATICZW46DURvbG5pIENoaWZsaWtAAEoAUAA%3D&checkin=2024-09-27&checkout=2024-09-28&ltfd=5%3A1%3A10-2024_12-2024_11-2024%3A1%3A&group_adults=2&no_rooms=2&group_children=0",
        restaurantsLink:
          "https://www.tripadvisor.com/Tourism-g6851815-Dolni_Chiflik_Varna_Province-Vacations.html",
        airbnbLink:
          "https://www.airbnb.com/s/Dolni-chiflik--Varna--Bulgaria/homes?tab_id=home_tab&refinement_paths%5B%5D=%2Fhomes&flexible_trip_lengths%5B%5D=one_week&monthly_start_date=2024-10-01&monthly_length=3&monthly_end_date=2025-01-01&price_filter_input_type=0&channel=EXPLORE&query=Dolni%20chiflik%2C%20Varna&date_picker_type=flexible_dates&source=structured_search_input_header&search_type=autocomplete_click&price_filter_num_nights=5&place_id=ChIJh2A65HA0pEARlRQfetTEuYk&location_bb=QixLuUHfNf9CK32EQds7iw%3D%3D",
        qrCode: shkorpilovciQR,
        description: {
          en: "Description in English",
          bg: "Крепостта е изградена в южната част на възвишение от запад и юг затворено от река Фъндаклийска, а от изток- от Черно море. От запад и юг теренът е бил блатист. Най- достъпна е била от север по билото на възвишението. Укреплението е с правоъгълна форма, разположена с дългата страна в посока север- юг. Предполага се, че е построено в края на III в или началото на IV в. Преди него на мястото е имало селище от II и началото на III в. Приблизителните размери на обекта са 100 m в посока север- юг и 70 m в посока изток- запад. Крепостната стена е изградена от ломен камък, споен с бял хоросан, съдържащ едро натрошена строителна керамика. Широчината ѝ е 2.5 м. Намерени са ковани пирони. Изследванията предполагат, че сградите на крепостта са унищожени от пожар. От този строителен период частично е съхранена каменна, улична настилка с посока северозапад- югоизток. Положена е направо върху сивия пепеляв пласт от първото обитаване на терена. Настилката е изградена от различни по големина камъни. Третият и последен етап на обитаване на Крепост Шкорпиловци е от края на V и началото на VI в. Тогава сградите са с по- лека конструкция, от измазан с глина плет и покрити с керемиди. Не се знае дали през този период крепостните стени са функционирали. Краят на живота през този период е насилствен, белязан от интензивен пожар. Животът тук е приключил в края на VI и началото на VII в.",
          pl: "Opis po polsku",
        },
        access: {
          en: "The ancient and late ancient fortress of Shkorpilovtsi is located 1.46 km east of the center of the village of Shkorpilovtsi. The site is accessible and within walking distance from the village of Shkropilovtsi",
          bg: "Антична и късноантична крепост Шкорпиловци се намира на 1.46 km източно от центъра на село Шкорпиловци. Обектът е достъпен и е на пешеходно разстояние от с. Шкропиловци",
          pl: "",
        },
        summerWorkTime: {
          en: "The fortress has free access.",
          bg: "Крепостта е със свободен достъп.",
          pl: "",
        },
        winterWorkTime: {
          en: "",
          bg: "",
          pl: "",
        },
        coordinates: {
          gps: "42.95931, 27.89493",
        },
      },
      {
        id: "place2",
        name: {
          en: "Late antique fortress Burun gradishte, Golitsa village",
          bg: "Късноантична крепост Бурун градище, с. Голица",
          pl: "Исторически музей, гр. Дългопол",
        },
        displayPhoto: golca1,
        photos: [{ golca1 }],
        googleMapsLink: "https://maps.app.goo.gl/fq5Mj7ChhtTFepLn6",
        bookingLink:
          "https://www.booking.com/searchresults.html?ss=Dolni+Chiflik%2C+Varna+Province%2C+Bulgaria&ssne=D%C5%ADlgopol&ssne_untouched=D%C5%ADlgopol&efdco=1&label=gen173nr-1FCAEoggI46AdIM1gEaBeIAQGYATG4ARfIAQzYAQHoAQH4AQKIAgGoAgO4AqLPqLYGwAIB0gIkZjgxYTc4NzgtMWU5YS00MjliLWFhYmEtNTFjNmM3YzNkZWFk2AIF4AIB&aid=304142&lang=en-us&sb=1&src_elem=sb&src=searchresults&dest_id=-834001&dest_type=city&ac_position=1&ac_click_type=b&ac_langcode=en&ac_suggestion_list_length=2&search_selected=true&search_pageview_id=a0713ed728b80453&ac_meta=GhBhMDcxM2VkNzI4YjgwNDUzIAEoATICZW46DURvbG5pIENoaWZsaWtAAEoAUAA%3D&checkin=2024-09-27&checkout=2024-09-28&ltfd=5%3A1%3A10-2024_12-2024_11-2024%3A1%3A&group_adults=2&no_rooms=2&group_children=0",
        restaurantsLink:
          "https://www.tripadvisor.com/Tourism-g6851815-Dolni_Chiflik_Varna_Province-Vacations.html",
        airbnbLink:
          "https://www.airbnb.com/s/Dolni-chiflik--Varna--Bulgaria/homes?tab_id=home_tab&refinement_paths%5B%5D=%2Fhomes&flexible_trip_lengths%5B%5D=one_week&monthly_start_date=2024-10-01&monthly_length=3&monthly_end_date=2025-01-01&price_filter_input_type=0&channel=EXPLORE&query=Dolni%20chiflik%2C%20Varna&date_picker_type=flexible_dates&source=structured_search_input_header&search_type=autocomplete_click&price_filter_num_nights=5&place_id=ChIJh2A65HA0pEARlRQfetTEuYk&location_bb=QixLuUHfNf9CK32EQds7iw%3D%3D",
        qrCode: burunGradishteQR,
        description: {
          en: "Description in English",
          bg: "Крепостта е построена на носообразно възвишение със стръмни източни, южни и западни склонове. От североизток и изток на хълма тече малка река, която е ляв приток на река Двойница, протичаща южно от него. От запад е ограничена от стръмния бряг на суходолие. Бурун градище е с неправилна триъгълна форма, с обърнат тъп ъгъл на север. Южната крепостна стена има дъгообразна форма. На северозапад има изграден крепостен ров, дълбок и широк по 5 m. На северозападната крепостна стена има изградени 4 кули, като двете се намират в ъглите. Между двете средни кули се е намирал входа на Бурун градище. Кулите в ъглите са кръгли, а другите две- U-образни. На североизточната крепостна стена има една U-образна кула в средата ѝ, а в ъгъла с южната крепостна стена има една голяма кръгла кула. От тая кула тръгва преградна стена към водослива на двете реки. На южната крепостна стена, освен кръглите кули в ъглите, има още една U-образна кула.",
          pl: "Opis po polsku",
        },
        access: {
          en: "",
          bg: "Късноантична крепост Бурун Градище се намира в едноименната местност, на 5.5 km югоизточно от центъра на село Голица. До обекта няма указателни табели, но местността е особено подходяща за екотуризъм. Достъпен е основно от северозапад.",
          pl: "",
        },
        summerWorkTime: {
          en: "The site has free access.",
          bg: "Обектът е със свободен достъп.",
          pl: "",
        },
        winterWorkTime: {
          en: "",
          bg: "",
          pl: "",
        },
        coordinates: {
          gps: "42.91457, 27.54742",
        },
      },
      {
        id: "place3",
        name: {
          en: "Late antique and medieval fortress complex Hemskite Porti/Germeto",
          bg: "Късноантичен и средновековен крепостен комплекс Хемските порти/Гермето",
          pl: "Исторически музей, гр. Дългопол",
        },
        displayPhoto: hemski1,
        photos: [{ hemski1, hemski2, hemski3, hemski4 }],
        googleMapsLink: "https://maps.app.goo.gl/5w6uQLEZ6ZdsZ9117",
        googleMaps:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29461.042727182823!2d27.495299398835012!3d42.89593673518075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40a5d3fe26a66e67%3A0xed9c0c843bbc3aee!2z0JDQvdGC0LjRh9C90LAg0LrRgNC10L_QvtGB0YIgItCl0LXQvNGB0LrQuCDQv9C-0YDRgtC4Ig!5e0!3m2!1sen!2sbg!4v1726768707126!5m2!1sen!2sbg",
        bookingLink:
          "https://www.booking.com/searchresults.html?ss=Dolni+Chiflik%2C+Varna+Province%2C+Bulgaria&ssne=D%C5%ADlgopol&ssne_untouched=D%C5%ADlgopol&efdco=1&label=gen173nr-1FCAEoggI46AdIM1gEaBeIAQGYATG4ARfIAQzYAQHoAQH4AQKIAgGoAgO4AqLPqLYGwAIB0gIkZjgxYTc4NzgtMWU5YS00MjliLWFhYmEtNTFjNmM3YzNkZWFk2AIF4AIB&aid=304142&lang=en-us&sb=1&src_elem=sb&src=searchresults&dest_id=-834001&dest_type=city&ac_position=1&ac_click_type=b&ac_langcode=en&ac_suggestion_list_length=2&search_selected=true&search_pageview_id=a0713ed728b80453&ac_meta=GhBhMDcxM2VkNzI4YjgwNDUzIAEoATICZW46DURvbG5pIENoaWZsaWtAAEoAUAA%3D&checkin=2024-09-27&checkout=2024-09-28&ltfd=5%3A1%3A10-2024_12-2024_11-2024%3A1%3A&group_adults=2&no_rooms=2&group_children=0",
        restaurantsLink:
          "https://www.tripadvisor.com/Tourism-g6851815-Dolni_Chiflik_Varna_Province-Vacations.html",
        airbnbLink:
          "https://www.airbnb.com/s/Dolni-chiflik--Varna--Bulgaria/homes?tab_id=home_tab&refinement_paths%5B%5D=%2Fhomes&flexible_trip_lengths%5B%5D=one_week&monthly_start_date=2024-10-01&monthly_length=3&monthly_end_date=2025-01-01&price_filter_input_type=0&channel=EXPLORE&query=Dolni%20chiflik%2C%20Varna&date_picker_type=flexible_dates&source=structured_search_input_header&search_type=autocomplete_click&price_filter_num_nights=5&place_id=ChIJh2A65HA0pEARlRQfetTEuYk&location_bb=QixLuUHfNf9CK32EQds7iw%3D%3D",
        qrCode: hemskiPortiQR,
        description: {
          en: "Description in English",
          bg: "Обектът представлява внушителен, укрепителен комплекс от три крепости, свързани с преградна стена. Ориентиран е в посока север- юг. Описанието му е известно благодарение на братята арехолози, биолози и творци Херман и Карел Шкорпил, които правят задълбочени изследвания в тази част на страната в началото на миналия век. Общата дължина на комплекса е около 2.3 km. Северната, първа крепост на Хемските порти е разположена върху връх „Перченлика“, която се издига във вид на продълговата могила в посока изток- запад. Тя стърчи с около 30 m над Гулишкия гребен. Първата крепост има продълговата, почти правоъгълна форма. Южната и най- дълга стена е разделена на три отсечки съединени под ъгъл. В четирите основни ъгъла е имало кръгли кули, а входът е бил на западната крепостна стена. От укреплението има отлична видимост във всички посоки. Тя е била главен наблюдателен пункт на комплекса. От нея има визуална връзка с крепостите, построени на съседните планински върхове. Установени са три периода на обитаване. Първият период се отнася към ІV в. Той предхожда изграждането на втора крепост. Вторият период е свързан с изграждането и първоначалното функциониране на обекта. Откритите монети позволяват да се заключи, че изграждането на централната, втора крепост и на целия комплекс Хемските порти е станало през първата половина на V век, най- вероятно в началните години на управлението на Теодосий ІІ (408-450). Разкрити са останките от северното стълбище с ширина 1.6 m.",
          pl: "Opis po polsku",
        },
        access: {
          en: "",
          bg: "Късноантичен и средновековен крепостен комплекс Хемските порти/Гермето се намира на 5.42 km западно от центъра на село Голица, по шосето за село Булаир.",
          pl: "",
        },
        summerWorkTime: {
          en: "The site has free access.",
          bg: "Обектът е със свободен достъп.",
          pl: "",
        },
        winterWorkTime: {
          en: "",
          bg: "",
          pl: "",
        },
        coordinates: {
          gps: "42.8997, 27.4858",
        },
      },
      {
        id: "place4",
        name: {
          en: "Niazlarsko Germe complex, Bulair village",
          bg: "Комплекс Ниазларско герме, с. Булаир",
          pl: "Исторически музей, гр. Дългопол",
        },
        displayPhoto: muzeiDulgopol1,
        photos: [
          { muzeiDulgopol1, muzeiDulgopol2, muzeiDulgopol3, muzeiDulgopol4 },
        ],
        googleMapsLink: "https://maps.app.goo.gl/jCJRnTPxgLyhkAiMA",
        googleMaps:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24771.93601042578!2d27.404261935883405!3d42.90029066675006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40a5d3afd90abc61%3A0x8a3d868ce10c7eb2!2z0JrRitGB0L3QvtCw0L3RgtC40YfQtdC9INC4INGB0YDQtdC00L3QvtCy0LXQutC-0LLQtdC9INC-0YLQsdGA0LDQvdC40YLQtdC70LXQvSDQutC-0LzQv9C70LXQutGBICLQndC40LDQt9C70LDRgNGB0LrQviDQs9C10YDQvNC1Ig!5e0!3m2!1sen!2sbg!4v1726768756039!5m2!1sen!2sbg",
        bookingLink:
          "https://www.booking.com/searchresults.html?ss=Dolni+Chiflik%2C+Varna+Province%2C+Bulgaria&ssne=D%C5%ADlgopol&ssne_untouched=D%C5%ADlgopol&efdco=1&label=gen173nr-1FCAEoggI46AdIM1gEaBeIAQGYATG4ARfIAQzYAQHoAQH4AQKIAgGoAgO4AqLPqLYGwAIB0gIkZjgxYTc4NzgtMWU5YS00MjliLWFhYmEtNTFjNmM3YzNkZWFk2AIF4AIB&aid=304142&lang=en-us&sb=1&src_elem=sb&src=searchresults&dest_id=-834001&dest_type=city&ac_position=1&ac_click_type=b&ac_langcode=en&ac_suggestion_list_length=2&search_selected=true&search_pageview_id=a0713ed728b80453&ac_meta=GhBhMDcxM2VkNzI4YjgwNDUzIAEoATICZW46DURvbG5pIENoaWZsaWtAAEoAUAA%3D&checkin=2024-09-27&checkout=2024-09-28&ltfd=5%3A1%3A10-2024_12-2024_11-2024%3A1%3A&group_adults=2&no_rooms=2&group_children=0",
        restaurantsLink:
          "https://www.tripadvisor.com/Tourism-g6851815-Dolni_Chiflik_Varna_Province-Vacations.html",
        airbnbLink:
          "https://www.airbnb.com/s/Dolni-chiflik--Varna--Bulgaria/homes?tab_id=home_tab&refinement_paths%5B%5D=%2Fhomes&flexible_trip_lengths%5B%5D=one_week&monthly_start_date=2024-10-01&monthly_length=3&monthly_end_date=2025-01-01&price_filter_input_type=0&channel=EXPLORE&query=Dolni%20chiflik%2C%20Varna&date_picker_type=flexible_dates&source=structured_search_input_header&search_type=autocomplete_click&price_filter_num_nights=5&place_id=ChIJh2A65HA0pEARlRQfetTEuYk&location_bb=QixLuUHfNf9CK32EQds7iw%3D%3D",
        qrCode: niazlarskoGermeQR,
        description: {
          en: "Description in English",
          bg: "Ниазларско герме е най- западната част на цялостната, отбранителна система, изградена през двата исторически периода в най- източната, ниска част на Стара планина, която прегражда три старопланински прохода. Според Карел Шкорпил комплексът съдържа един старобългарски вал, една късноантична, каменна стена, седем кули, три от които самостоятелни и една крепост. Към комплекса е открита още една крепост и още две преградни съоръжения (каменни стени или валове), които се намират от западната част на река Елешница. Общата дължина на комплекса е 1.1 km, като от запад и изток започва и завършва с крепост.",
          pl: "Opis po polsku",
        },
        access: {
          en: "",
          bg: "Липсват указателни табели до обекта и това го прави трудно достъпен.",
          pl: "",
        },
        summerWorkTime: {
          en: "The site has free access.",
          bg: "Обектът е със свободен достъп.",
          pl: "",
        },
        winterWorkTime: {
          en: "",
          bg: "",
          pl: "",
        },
        coordinates: {
          gps: "42.90609, 27.41081",
        },
      },
      {
        id: "place5",
        name: {
          en: "Orta Kaya rock sanctuary, Bulair village",
          bg: "Скално светилище „Орта кая“, с. Булаир",
          pl: "Исторически музей, гр. Дългопол",
        },
        displayPhoto: orta1,
        photos: [{ orta1, orta2, orta3, orta4 }],
        googleMapsLink: "https://maps.app.goo.gl/Vkjja6kB17cQBiaf6",
        googleMaps:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2922.4245615398413!2d27.411959776524725!3d42.90608620043023!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40a5d33cef3ee901%3A0x7d20662a4598d9d5!2z0KHQutCw0LvQvdC-INGB0LLQtdGC0LjQu9C40YnQtSAi0J7RgNGC0LAg0LrQsNGPIg!5e0!3m2!1sen!2sbg!4v1726768838599!5m2!1sen!2sbg",
        bookingLink:
          "https://www.booking.com/searchresults.html?ss=Dolni+Chiflik%2C+Varna+Province%2C+Bulgaria&ssne=D%C5%ADlgopol&ssne_untouched=D%C5%ADlgopol&efdco=1&label=gen173nr-1FCAEoggI46AdIM1gEaBeIAQGYATG4ARfIAQzYAQHoAQH4AQKIAgGoAgO4AqLPqLYGwAIB0gIkZjgxYTc4NzgtMWU5YS00MjliLWFhYmEtNTFjNmM3YzNkZWFk2AIF4AIB&aid=304142&lang=en-us&sb=1&src_elem=sb&src=searchresults&dest_id=-834001&dest_type=city&ac_position=1&ac_click_type=b&ac_langcode=en&ac_suggestion_list_length=2&search_selected=true&search_pageview_id=a0713ed728b80453&ac_meta=GhBhMDcxM2VkNzI4YjgwNDUzIAEoATICZW46DURvbG5pIENoaWZsaWtAAEoAUAA%3D&checkin=2024-09-27&checkout=2024-09-28&ltfd=5%3A1%3A10-2024_12-2024_11-2024%3A1%3A&group_adults=2&no_rooms=2&group_children=0",
        restaurantsLink:
          "https://www.tripadvisor.com/Tourism-g6851815-Dolni_Chiflik_Varna_Province-Vacations.html",
        airbnbLink:
          "https://www.airbnb.com/s/Dolni-chiflik--Varna--Bulgaria/homes?tab_id=home_tab&refinement_paths%5B%5D=%2Fhomes&flexible_trip_lengths%5B%5D=one_week&monthly_start_date=2024-10-01&monthly_length=3&monthly_end_date=2025-01-01&price_filter_input_type=0&channel=EXPLORE&query=Dolni%20chiflik%2C%20Varna&date_picker_type=flexible_dates&source=structured_search_input_header&search_type=autocomplete_click&price_filter_num_nights=5&place_id=ChIJh2A65HA0pEARlRQfetTEuYk&location_bb=QixLuUHfNf9CK32EQds7iw%3D%3D",
        qrCode: ortaKaqQR,
        description: {
          en: "Description in English",
          bg: "Скално светилище „Орта кая“ е от късната античност, когато са построени голяма част от укрепителните съоръжения за преграда от завоевателите. В най-високата му част е изсечена скална площадка. Върха е преизползван като отбранително съоръжение и е включен към преградната стена Ниазларско герме. Изследователи предполагат, че обектът е от периода на късната желязна епоха",
          pl: "Opis po polsku",
        },
        access: {
          en: "",
          bg: "Върхът е със стръмни и отвесни склонове и е достъпен единствено от изток.",
          pl: "",
        },
        summerWorkTime: {
          en: "The site has free access and is particularly suitable for lovers of hiking routes, nature walks, etc.",
          bg: "Обектът е със свободен достъп и е особено подходящ за любителите на пешеходни маршрути, разходки сред природата и др.",
          pl: "",
        },
        winterWorkTime: {
          en: "",
          bg: "",
          pl: "",
        },
        coordinates: {
          gps: "42.90608, 27.41453",
        },
      },
      {
        id: "place6",
        name: {
          en: "'Yaramaz kaya' sanctuary, Bulair village",
          bg: "Светилище „Ярамаз кая“, с. Булаир",
          pl: "Исторически музей, гр. Дългопол",
        },
        displayPhoto: qrmaz1,
        photos: [{ qrmaz1, qrmaz2, qrmaz3, qrmaz4 }],
        googleMapsLink: "https://maps.app.goo.gl/5ztrbgx585PWcYs27",
        googleMaps:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2922.4788048822293!2d27.397648576524425!3d42.90494200050321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40a5d322cef0c1eb%3A0x90d096079ccfb0e!2z0KHQutCw0LvQvdC-INGB0LLQtdGC0LjQu9C40YnQtSAi0K_RgNCw0LzQsNC3INC60LDRjyI!5e0!3m2!1sen!2sbg!4v1726768871608!5m2!1sen!2sbg",
        bookingLink:
          "https://www.booking.com/searchresults.html?ss=Dolni+Chiflik%2C+Varna+Province%2C+Bulgaria&ssne=D%C5%ADlgopol&ssne_untouched=D%C5%ADlgopol&efdco=1&label=gen173nr-1FCAEoggI46AdIM1gEaBeIAQGYATG4ARfIAQzYAQHoAQH4AQKIAgGoAgO4AqLPqLYGwAIB0gIkZjgxYTc4NzgtMWU5YS00MjliLWFhYmEtNTFjNmM3YzNkZWFk2AIF4AIB&aid=304142&lang=en-us&sb=1&src_elem=sb&src=searchresults&dest_id=-834001&dest_type=city&ac_position=1&ac_click_type=b&ac_langcode=en&ac_suggestion_list_length=2&search_selected=true&search_pageview_id=a0713ed728b80453&ac_meta=GhBhMDcxM2VkNzI4YjgwNDUzIAEoATICZW46DURvbG5pIENoaWZsaWtAAEoAUAA%3D&checkin=2024-09-27&checkout=2024-09-28&ltfd=5%3A1%3A10-2024_12-2024_11-2024%3A1%3A&group_adults=2&no_rooms=2&group_children=0",
        restaurantsLink:
          "https://www.tripadvisor.com/Tourism-g6851815-Dolni_Chiflik_Varna_Province-Vacations.html",
        airbnbLink:
          "https://www.airbnb.com/s/Dolni-chiflik--Varna--Bulgaria/homes?tab_id=home_tab&refinement_paths%5B%5D=%2Fhomes&flexible_trip_lengths%5B%5D=one_week&monthly_start_date=2024-10-01&monthly_length=3&monthly_end_date=2025-01-01&price_filter_input_type=0&channel=EXPLORE&query=Dolni%20chiflik%2C%20Varna&date_picker_type=flexible_dates&source=structured_search_input_header&search_type=autocomplete_click&price_filter_num_nights=5&place_id=ChIJh2A65HA0pEARlRQfetTEuYk&location_bb=QixLuUHfNf9CK32EQds7iw%3D%3D",
        qrCode: qrmazKaqQR,
        description: {
          en: "Description in English",
          bg: "Ярамаз кая е загадъчно скално образувание в ниските дялове на Източна Стара планина. Предполага се, че е от късната желязна епоха. На голяма площ по скалите се намират отделни шарапани, ямички и други исзичания. В превод от турски означава „Непотребната скала“, което противоречи на особената му и необикновена харизма. Най-близкото населено място, от което може да се стигне до него, е малкото село Булаир, в което основният поминък на населението е животновъдство и земеделие.",
          pl: "Opis po polsku",
        },
        access: {
          en: "",
          bg: "Обектът се намира на 4,1 км западно от с.Булаир. До обекта се стига пеш, като е необходимо първо да се пресече реката в посока напред към гората. Трасето става добре проходимо и продължава към най-западната част на Непотребната скала, където тя е сравнително лесна за изкачване. След около километър се поема по дясното отклонение и се достига до подножието на скалното образувание. Преминавайки през една плитка седловина, се сетига до най-високата част на хълма, обгърнал неповторимата Ярамаз кая. Той е с височина от 413 м, а от него се открива една страхотна и обширна гледка към планинският ландшафт на района.",
          pl: "",
        },
        summerWorkTime: {
          en: "The site has free access.",
          bg: "Обектът е със свободен достъп.",
          pl: "",
        },
        winterWorkTime: {
          en: "",
          bg: "",
          pl: "",
        },
        coordinates: {
          gps: "42.90493, 27.40022",
        },
      },
      {
        id: "place7",
        name: {
          en: "Temple 'St. Archangel Michael', Venelin village",
          bg: "Храм „Св. Архангел Михаил“, с. Венелин",
          pl: "Исторически музей, гр. Дългопол",
        },
        displayPhoto: hram1,
        photos: [{ hram1, hram2, hram3 }],
        googleMapsLink: "https://maps.app.goo.gl/Jr9VGzbdyKZdUZqA8",
        googleMaps:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13476.214957591656!2d27.667337399099033!3d43.04060613606581!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40a44b7ad920a00b%3A0x3f9756b9bfb63c8c!2z0KXRgNCw0LwgItCh0LLQtdGC0Lgg0JDRgNGF0LDQvdCz0LXQuyDQnNC40YXQsNC40Lsi!5e0!3m2!1sen!2sbg!4v1726768915864!5m2!1sen!2sbg",
        bookingLink:
          "https://www.booking.com/searchresults.html?ss=Dolni+Chiflik%2C+Varna+Province%2C+Bulgaria&ssne=D%C5%ADlgopol&ssne_untouched=D%C5%ADlgopol&efdco=1&label=gen173nr-1FCAEoggI46AdIM1gEaBeIAQGYATG4ARfIAQzYAQHoAQH4AQKIAgGoAgO4AqLPqLYGwAIB0gIkZjgxYTc4NzgtMWU5YS00MjliLWFhYmEtNTFjNmM3YzNkZWFk2AIF4AIB&aid=304142&lang=en-us&sb=1&src_elem=sb&src=searchresults&dest_id=-834001&dest_type=city&ac_position=1&ac_click_type=b&ac_langcode=en&ac_suggestion_list_length=2&search_selected=true&search_pageview_id=a0713ed728b80453&ac_meta=GhBhMDcxM2VkNzI4YjgwNDUzIAEoATICZW46DURvbG5pIENoaWZsaWtAAEoAUAA%3D&checkin=2024-09-27&checkout=2024-09-28&ltfd=5%3A1%3A10-2024_12-2024_11-2024%3A1%3A&group_adults=2&no_rooms=2&group_children=0",
        restaurantsLink:
          "https://www.tripadvisor.com/Tourism-g6851815-Dolni_Chiflik_Varna_Province-Vacations.html",
        airbnbLink:
          "https://www.airbnb.com/s/Dolni-chiflik--Varna--Bulgaria/homes?tab_id=home_tab&refinement_paths%5B%5D=%2Fhomes&flexible_trip_lengths%5B%5D=one_week&monthly_start_date=2024-10-01&monthly_length=3&monthly_end_date=2025-01-01&price_filter_input_type=0&channel=EXPLORE&query=Dolni%20chiflik%2C%20Varna&date_picker_type=flexible_dates&source=structured_search_input_header&search_type=autocomplete_click&price_filter_num_nights=5&place_id=ChIJh2A65HA0pEARlRQfetTEuYk&location_bb=QixLuUHfNf9CK32EQds7iw%3D%3D",
        qrCode: arhangelMihailQR,
        description: {
          en: "Description in English",
          bg: "Първите сведения за село Венелин са от XVI в. Някога то носи името Сарадър, което в превод означава „жълто просо“. След 1830 г. тук се заселват няколко семейства от селата Еркеч и Голица, а по-късно идват преселници от Габровско и Дряновско. Към 1876 г. селото наброява 70-75 къщи, от които 35-40 населени с български семейства и още толкова турски. Българското население решава да се съберат средства за построяването на православен храм, водени от идеята да съхранят своя бит, култура и вяра. През 1869 год. храмът е построен и наречен с името на Св. Архангел Михаил. Най много средства са дарени от дядо Хубен Димитров, който по сведения на първите заселници имал дюкян в Сарадър и половината от наемите давал на храма. След като си извоювали правото пред турските власти, да построят храм, където първоначално се водели тихомълком учебни занимания за желаещите българчета, местни майстори построили след време и стая с учебна цел. Исторически справки показват, че непосредствено след откриването на училището към църквата, преподава даскал Димитър. През 1783 год. учител е Никола Иванов, а след 1874 год. – Стефан Тенев от село Шипка, Казанлъшко. В храма са запазени и до днес „Цветослов” с приписка: „Лето мая 23-ий 1875 година, даскал-учител от село Шипка – Стефан Тенев”.",
          pl: "Opis po polsku",
        },
        access: {
          en: "The temple is located in the village of Venelin, which is 8 km north of the municipal center Dolni Chiflik. The temple is open for visits.",
          bg: "Храмът се намира в с. Венелин, което е на 8 км на север от общинския център Долни Чифлик. Храмът е достъпен за посещения.",
          pl: "",
        },
        summerWorkTime: {
          en: "",
          bg: "Всеки ден от 8:00 до 17:00ч.",
          pl: "",
        },
        winterWorkTime: {
          en: "",
          bg: "",
          pl: "",
        },
        coordinates: {
          gps: "43.04555, 27.67076",
        },
      },
      {
        id: "place8",
        name: {
          en: "Orlov stone waterfall, Goren Chiflik village",
          bg: "Водопад Орлов камък, с. Горен Чифлик",
          pl: "Исторически музей, гр. Дългопол",
        },
        displayPhoto: orlov1,
        photos: [{ orlov1, orlov2, orlov3, orlov4, orlov5, orlov6 }],
        googleMapsLink: "https://maps.app.goo.gl/GJZvnTXmRZ2JxAXS9",
        googleMaps:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2919.0540341710257!2d27.57452047652746!3d42.97713539589316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40a43352a8739011%3A0x45903c07ff33bd1d!2z4oCcRWFnbGXigJlzIHN0b25l4oCdIHdhdGVyZmFsbA!5e0!3m2!1sen!2sbg!4v1726768954920!5m2!1sen!2sbg",
        bookingLink:
          "https://www.booking.com/searchresults.html?ss=Dolni+Chiflik%2C+Varna+Province%2C+Bulgaria&ssne=D%C5%ADlgopol&ssne_untouched=D%C5%ADlgopol&efdco=1&label=gen173nr-1FCAEoggI46AdIM1gEaBeIAQGYATG4ARfIAQzYAQHoAQH4AQKIAgGoAgO4AqLPqLYGwAIB0gIkZjgxYTc4NzgtMWU5YS00MjliLWFhYmEtNTFjNmM3YzNkZWFk2AIF4AIB&aid=304142&lang=en-us&sb=1&src_elem=sb&src=searchresults&dest_id=-834001&dest_type=city&ac_position=1&ac_click_type=b&ac_langcode=en&ac_suggestion_list_length=2&search_selected=true&search_pageview_id=a0713ed728b80453&ac_meta=GhBhMDcxM2VkNzI4YjgwNDUzIAEoATICZW46DURvbG5pIENoaWZsaWtAAEoAUAA%3D&checkin=2024-09-27&checkout=2024-09-28&ltfd=5%3A1%3A10-2024_12-2024_11-2024%3A1%3A&group_adults=2&no_rooms=2&group_children=0",
        restaurantsLink:
          "https://www.tripadvisor.com/Tourism-g6851815-Dolni_Chiflik_Varna_Province-Vacations.html",
        airbnbLink:
          "https://www.airbnb.com/s/Dolni-chiflik--Varna--Bulgaria/homes?tab_id=home_tab&refinement_paths%5B%5D=%2Fhomes&flexible_trip_lengths%5B%5D=one_week&monthly_start_date=2024-10-01&monthly_length=3&monthly_end_date=2025-01-01&price_filter_input_type=0&channel=EXPLORE&query=Dolni%20chiflik%2C%20Varna&date_picker_type=flexible_dates&source=structured_search_input_header&search_type=autocomplete_click&price_filter_num_nights=5&place_id=ChIJh2A65HA0pEARlRQfetTEuYk&location_bb=QixLuUHfNf9CK32EQds7iw%3D%3D",
        qrCode: orlovKamukQR,
        description: {
          en: "Description in English",
          bg: "Водопад „Орлов камък“ се състои от два прага. Горният е 5-6 метра, а долния е около 3 метра. Намират се на река Армера. Река Армера обикновено е спокойна, но през пролетния и есенния сезон, водите й стават бурни, по време на пълноводието й и вследствие на проливни дъждове.",
          pl: "Opis po polsku",
        },
        access: {
          en: "The waterfall is hidden in the forest areas near the village of Goren Chiflik. The waterfall can be reached on foot, after driving from Goren Chiflik to where the asphalt road allows.",
          bg: "Водопадът е закътан в горските местности близо до с. Горен Чифлик. До водопада се стига пеш, след автомобилен преход от Горен Чифлик до където асфалтовия път позволява.",
          pl: "",
        },
        summerWorkTime: {
          en: "The site has free access.",
          bg: "Обектът е със свободен достъп.",
          pl: "",
        },
        winterWorkTime: {
          en: "",
          bg: "",
          pl: "",
        },
        coordinates: {
          gps: "42.97713, 27.57709",
        },
      },
      {
        id: "place9",
        name: {
          en: "Skoka waterfall, Solnik village",
          bg: "Водопад Скока, с. Солник",
          pl: "Исторически музей, гр. Дългопол",
        },
        displayPhoto: skoka1,
        photos: [{ skoka1, skoka2, skoka3, skoka4, skoka5 }],
        googleMapsLink: "https://maps.app.goo.gl/aYGcUBrSrDt1v2tv7",
        googleMaps:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2922.4473740366543!2d27.63502227652463!3d42.90560500046071!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40a431f04fbe838d%3A0xc5ed1795d4c747f1!2sJump%20Waterfall%20-%20Solnik!5e0!3m2!1sen!2sbg!4v1726768990342!5m2!1sen!2sbg",
        bookingLink:
          "https://www.booking.com/searchresults.html?ss=Dolni+Chiflik%2C+Varna+Province%2C+Bulgaria&ssne=D%C5%ADlgopol&ssne_untouched=D%C5%ADlgopol&efdco=1&label=gen173nr-1FCAEoggI46AdIM1gEaBeIAQGYATG4ARfIAQzYAQHoAQH4AQKIAgGoAgO4AqLPqLYGwAIB0gIkZjgxYTc4NzgtMWU5YS00MjliLWFhYmEtNTFjNmM3YzNkZWFk2AIF4AIB&aid=304142&lang=en-us&sb=1&src_elem=sb&src=searchresults&dest_id=-834001&dest_type=city&ac_position=1&ac_click_type=b&ac_langcode=en&ac_suggestion_list_length=2&search_selected=true&search_pageview_id=a0713ed728b80453&ac_meta=GhBhMDcxM2VkNzI4YjgwNDUzIAEoATICZW46DURvbG5pIENoaWZsaWtAAEoAUAA%3D&checkin=2024-09-27&checkout=2024-09-28&ltfd=5%3A1%3A10-2024_12-2024_11-2024%3A1%3A&group_adults=2&no_rooms=2&group_children=0",
        restaurantsLink:
          "https://www.tripadvisor.com/Tourism-g6851815-Dolni_Chiflik_Varna_Province-Vacations.html",
        airbnbLink:
          "https://www.airbnb.com/s/Dolni-chiflik--Varna--Bulgaria/homes?tab_id=home_tab&refinement_paths%5B%5D=%2Fhomes&flexible_trip_lengths%5B%5D=one_week&monthly_start_date=2024-10-01&monthly_length=3&monthly_end_date=2025-01-01&price_filter_input_type=0&channel=EXPLORE&query=Dolni%20chiflik%2C%20Varna&date_picker_type=flexible_dates&source=structured_search_input_header&search_type=autocomplete_click&price_filter_num_nights=5&place_id=ChIJh2A65HA0pEARlRQfetTEuYk&location_bb=QixLuUHfNf9CK32EQds7iw%3D%3D",
        qrCode: skokaQR,
        description: {
          en: "Description in English",
          bg: "Солник е едно от селата около Долни Чифлик, което е известно със съществуването на извор със солена вода. Поради това селото носи името си. Водопад Скока е изключително причудливо място, закътано в горите около с. Солник. Наричат го „Сладкият бисер на Солник“, поради изключително чистата вода и все още непокътнатото от човешка дейност място.",
          pl: "Opis po polsku",
        },
        access: {
          en: "Skoka waterfall is located in a sheltered wooded area near the village of Solnik. The place can be reached by two roads - through Dolni Chiflik and through the village of Krivini. Also, on the main street in Solnik coming from Dolni Chiflik you can turn left and follow the wooden arrow 'Waterfall'",
          bg: "Водопад Скока се намира в закътана гориста местност близо до с.Солник. До мястото се стига по два пътя - през Долни Чифлик и през с. Кривини. Освен това, на главната улица в Солник, идваща от Долни Чифлик може да се завие наляво и се следва дървена стрелка „Водопада“.",
          pl: "",
        },
        summerWorkTime: {
          en: "Skoka waterfall has free access.",
          bg: "Водопад Скока е със свободен достъп.",
          pl: "",
        },
        winterWorkTime: {
          en: "",
          bg: "",
          pl: "",
        },
        coordinates: {
          gps: "42.9056, 27.63759",
        },
      },
      {
        id: "place10",
        name: {
          en: "Ethnographic Museum at 'Izgrev'",
          bg: "Етнографски музей при НЧ „Изгрев“,",
          pl: "Исторически музей, гр. Дългопол",
        },
        displayPhoto: etnografski1,
        photos: [{ etnografski1, etnografski2 }],
        googleMapsLink: "https://maps.app.goo.gl/fq5Mj7ChhtTFepLn6",
        bookingLink:
          "https://www.booking.com/searchresults.html?ss=Dolni+Chiflik%2C+Varna+Province%2C+Bulgaria&ssne=D%C5%ADlgopol&ssne_untouched=D%C5%ADlgopol&efdco=1&label=gen173nr-1FCAEoggI46AdIM1gEaBeIAQGYATG4ARfIAQzYAQHoAQH4AQKIAgGoAgO4AqLPqLYGwAIB0gIkZjgxYTc4NzgtMWU5YS00MjliLWFhYmEtNTFjNmM3YzNkZWFk2AIF4AIB&aid=304142&lang=en-us&sb=1&src_elem=sb&src=searchresults&dest_id=-834001&dest_type=city&ac_position=1&ac_click_type=b&ac_langcode=en&ac_suggestion_list_length=2&search_selected=true&search_pageview_id=a0713ed728b80453&ac_meta=GhBhMDcxM2VkNzI4YjgwNDUzIAEoATICZW46DURvbG5pIENoaWZsaWtAAEoAUAA%3D&checkin=2024-09-27&checkout=2024-09-28&ltfd=5%3A1%3A10-2024_12-2024_11-2024%3A1%3A&group_adults=2&no_rooms=2&group_children=0",
        restaurantsLink:
          "https://www.tripadvisor.com/Tourism-g6851815-Dolni_Chiflik_Varna_Province-Vacations.html",
        airbnbLink:
          "https://www.airbnb.com/s/Dolni-chiflik--Varna--Bulgaria/homes?tab_id=home_tab&refinement_paths%5B%5D=%2Fhomes&flexible_trip_lengths%5B%5D=one_week&monthly_start_date=2024-10-01&monthly_length=3&monthly_end_date=2025-01-01&price_filter_input_type=0&channel=EXPLORE&query=Dolni%20chiflik%2C%20Varna&date_picker_type=flexible_dates&source=structured_search_input_header&search_type=autocomplete_click&price_filter_num_nights=5&place_id=ChIJh2A65HA0pEARlRQfetTEuYk&location_bb=QixLuUHfNf9CK32EQds7iw%3D%3D",
        qrCode: etnografskiMuzeiQR,
        description: {
          en: "Description in English",
          bg: "Етнографският музей се помещава в сградата на НЧ „Изгрев – 1919“, гр. Долни чифлик. Разположен е на площ от 128 кв.м. и е уреден в две отделни зали. Основан е през 1984г. от Йорданка Бекярова – учител по математика. Музеят съхранява, представя и популяризира културни ценности, свързани с традициите на града и региона. Тук се съхраняват над 1750 експонати, дарени от над 300 дарители, групирани в няколко теми: „Обработване на земята“, „Животновъдство“, „Занаяти“, „Домашна уредба и жилище“, „Облекло и накити“, „Домашни занаяти“, „Народна духовна култура, обичаи и фолклор“. Етнографският музей представя народния бит и култура от от края на XIX и началото на XXв., както от близките населени места, така и от Хасковско, Трънско, Габровско и др.",
          pl: "Opis po polsku",
        },
        access: {
          en: "The museum is located in the center of the town of Dolni Chiflik. The site is easily accessible in the center of Dolni Chiflik.",
          bg: "Музеят се намира в центъра на гр. Долни чифлик. Обектът е с лесен достъп в центъра на гр. Долни чифлик.",
          pl: "",
        },
        summerWorkTime: {
          en: "Weekdays: Monday - Friday: 8:00 - 17:00",
          bg: "Делнични дни: понеделник – петък: 8:00 – 17:00",
          pl: "",
        },
        winterWorkTime: {
          en: "",
          bg: "",
          pl: "",
        },
        coordinates: {
          gps: "42.99289, 27.71997",
        },
      },
    ],
  },
  provadia: {
    name: {
      en: "Provadia",
      bg: "Провадия",
      pl: "Prowadia",
    },
    places: [
      {
        id: "place1",
        name: {
          en: "Medieval Fortress Ovech",
          bg: "Средновековна Крепост Овеч",
          pl: "Średniowieczna twierdza Owicz",
        },
        displayPhoto: ovech1,
        photos: [{ ovech1, ovech2, ovech3, ovech4, ovech5, ovech6 }],
        googleMapsLink: "https://maps.app.goo.gl/39i4PAynhw3F2B6H9",
        bookingLink:
          "https://www.booking.com/searchresults.html?ss=Provadia&ssne=D%C5%ADlgopol&ssne_untouched=D%C5%ADlgopol&efdco=1&label=gen173nr-1FCAEoggI46AdIM1gEaBeIAQGYATG4ARfIAQzYAQHoAQH4AQKIAgGoAgO4AtqZz7cGwAIB0gIkOGQwMWZlMjctOTg4OS00ZjM2LWFjNzQtNmI2OGU2OTY4MWUx2AIF4AIB&aid=304142&lang=en-us&sb=1&src_elem=sb&src=index&dest_id=1666434&dest_type=hotel&ac_position=0&ac_click_type=b&ac_langcode=en&ac_suggestion_list_length=1&search_selected=true&search_pageview_id=3e463d2d508a0024&ac_meta=GhAzZTQ2M2QyZDUwOGEwMDI0IAAoATICZW46CFByb3ZhZGlhQABKAFAA&checkin=2024-09-27&checkout=2024-09-28&ltfd=1%3A5%3A10-2024_11-2024_12-2024%3A1%3A&group_adults=2&no_rooms=2&group_children=0",
        restaurantsLink:
          "https://www.tripadvisor.com/Restaurants-g2100806-Provadia_Varna_Province.html",
        airbnbLink:
          "https://www.airbnb.com/s/Provadia--Varna--Bulgaria/homes?tab_id=home_tab&refinement_paths%5B%5D=%2Fhomes&flexible_trip_lengths%5B%5D=one_week&monthly_start_date=2024-10-01&monthly_length=3&monthly_end_date=2025-01-01&price_filter_input_type=0&channel=EXPLORE&query=Provadia%2C%20Varna&date_picker_type=flexible_dates&source=structured_search_input_header&search_type=autocomplete_click&price_filter_num_nights=5&place_id=ChIJT1T7MMe7pUARj2QWLeLAuo8&location_bb=QizRyEHbnfBCLJxtQdtxqg%3D%3D",
        qrCode: ovechQR,
        googleMaps:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2909.6206083666334!2d27.447737200000002!3d43.1754873!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40a5b961e4f7ad6b%3A0x429a1791c17c57a7!2sOvech%20Fortress!5e0!3m2!1sen!2sbg!4v1722089217848!5m2!1sen!2sbg",
        description: {
          en: "Description in English",
          bg: "Провадийската крепост, известна като Калето, е построена на величествено плато в източната част на град Провадия. Използвана е от средата на III в. до края на XVII в., с прекъсвания през първите десетилетия на VII до X в. Византийците го наричат Проват, българите - Овеч, а турците - Таш Хисар (Каменна крепост) Уникалните природни дадености на самата крепост я правят трудно превземаема. Крепостта е защитена отвсякъде от скали с височина от 11 до 25 метра. Смята се, че Овеч е построен за защита на средновековните български столици от византийското настъпление. В началото има основно отбранителна функция, но бързо се превръща в голям административен и военен център с постоянно пребиваващо население. В някои източници крепостта се споменава като областен административен център, а след приемането на християнството от българите, става епископска резиденция. Поради стратегическото си местоположение извън границите на населеното място, Овеч е привлекателно и желано място за много царе и владетели по време на Първото и Второто българско царство и затова през годините там се водят много битки и сражения за нейното владение. Овеч се свързва с управлението на Петър II и Калоян, движението на цар Ивайло, рицарите на Амедей VI Савойски, османското нашествие, антиосманското въстание от началото на XV в., похода на полско-унгарския крал Владислав III Ягело. През XIV в. е седалище на митрополията. Днес от крепостта са останали напълно обновеното мостово съоръжение между крепостта и платото Табиите, множество кладенци за събиране на вода (един от които с дълбочина 80 м.), щерни за зърно, руините на трикорабна едноапсидна църква център на Овечка епархия, две еднокорабни едноапсидни църкви от XII-XIV в., стражевите кули, каменната северна порта, затворите на благородниците и на провинилите се граждани и военнопленници, мраморните колони на Омуртаг. Открити са и пещери обитавани от Античността.",
          pl: "Opis po polsku",
        },
        access: {
          en: "",
          bg: "До крепостта се стига чрез три входа: - Източен, който е запазен в оригиналния си вид с изсечени в скалата каменни стълби. Той е и най-удобен, ако се използва собствен транспорт. - Запзаден, достъпен от към града чрез метална вита стълба, съставена е от 111 стъпала! - Северен, който е и главен за крепостта.  Пред него е изградено мостово съоръжение с дължина 150 м, което свързва две плата – Калето и Табиите. До самия гр. Провадия може да се стигне със собствен транспорт, както и с обществен транспорт – автобус от автогара Варна или влак от ж.п. гара Варна.",
          pl: "",
        },
        summerWorkTime: {
          en: "Summer opening hours: 9:00 a.m. – 7:00 p.m.",
          bg: "Лятно работно време: 9:00ч. – 19:00 ч.",
          pl: "",
        },
        winterWorkTime: {
          en: "Winter opening hours: 9:00 a.m. – 5:30 p.m.",
          bg: "Зимно работно време: 9:00ч. – 17:30 ч.",
          pl: "",
        },
        coordinates: {
          gps: "43.17548, 27.44773",
        },
      },
      {
        id: "place2",
        name: {
          en: "Prehistoric Center - Solnitsa",
          bg: "Праисторически център Провадия – Солницата",
          pl: "Centrum Prehistoryczne Provadia - Solnica",
        },
        displayPhoto: pametnik1,
        photos: [
          { pametnik1, pametnik2, pametnik3, pametnik4, pametnik5, pametnik6 },
        ],
        googleMapsLink: "https://maps.app.goo.gl/CRMB4DCmJBu2VvGx6",
        googleMaps:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2911.8665287933172!2d27.46987967653364!3d43.12832998621901!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40a5b82d46b59cb3%3A0xee01e1f977fd510!2sSolnitsata!5e0!3m2!1sen!2sbg!4v1726731759012!5m2!1sen!2sbg",
        bookingLink:
          "https://www.booking.com/searchresults.html?ss=Provadia&ssne=D%C5%ADlgopol&ssne_untouched=D%C5%ADlgopol&efdco=1&label=gen173nr-1FCAEoggI46AdIM1gEaBeIAQGYATG4ARfIAQzYAQHoAQH4AQKIAgGoAgO4AtqZz7cGwAIB0gIkOGQwMWZlMjctOTg4OS00ZjM2LWFjNzQtNmI2OGU2OTY4MWUx2AIF4AIB&aid=304142&lang=en-us&sb=1&src_elem=sb&src=index&dest_id=1666434&dest_type=hotel&ac_position=0&ac_click_type=b&ac_langcode=en&ac_suggestion_list_length=1&search_selected=true&search_pageview_id=3e463d2d508a0024&ac_meta=GhAzZTQ2M2QyZDUwOGEwMDI0IAAoATICZW46CFByb3ZhZGlhQABKAFAA&checkin=2024-09-27&checkout=2024-09-28&ltfd=1%3A5%3A10-2024_11-2024_12-2024%3A1%3A&group_adults=2&no_rooms=2&group_children=0",
        restaurantsLink:
          "https://www.tripadvisor.com/Restaurants-g2100806-Provadia_Varna_Province.html",
        airbnbLink:
          "https://www.airbnb.com/s/Provadia--Varna--Bulgaria/homes?tab_id=home_tab&refinement_paths%5B%5D=%2Fhomes&flexible_trip_lengths%5B%5D=one_week&monthly_start_date=2024-10-01&monthly_length=3&monthly_end_date=2025-01-01&price_filter_input_type=0&channel=EXPLORE&query=Provadia%2C%20Varna&date_picker_type=flexible_dates&source=structured_search_input_header&search_type=autocomplete_click&price_filter_num_nights=5&place_id=ChIJT1T7MMe7pUARj2QWLeLAuo8&location_bb=QizRyEHbnfBCLJxtQdtxqg%3D%3D",
        qrCode: praistoricheskiQR,
        description: {
          en: "It is believed that the oldest malting center in Europe was located here. According to surveys of the site, the city is thought to have been inhabited by about 350 people between 4700 and 4200 BC. - about 1500 years before the Greek civilization. That is why the Salt Mine (Solnitsa) has been declared the oldest prehistoric city in Europe. Residents use boiling water from a local spring to create salt bricks, which they then trade and use to preserve meat. This means that salt was an extremely valuable resource during these times. Salt flats grow around springs with an increased salt content. By heating in ceramic vessels, the water evaporates and the remaining salt is collected. The remains of vessels discovered show the evolution in technology and correspond to the increasing extraction of salt. A large part of the studied residential buildings in the settlement are two-story. It is believed that the settlement is surrounded by a protective wall up to 3 meters thick. From the remains it is clear that a strong earthquake destroyed the city. During the Eneolithic age, salt was an asset that was well traded, evident in the goldsmiths of Salt Lake, which are also some of the oldest in Europe. The development of the Saltworks preceded and determined the flowering of a culture, later shown by the discovered Varna Necropolis. Huge walls of stone blocks were erected around the village, unknown until then as a fortification system. Other interesting and strange finds are graves of murdered and 'dismembered bodies' men and a triple grave of an elderly man with two children. A hitherto unexplored center for pottery production is suggested to exist. ",
          bg: "Счита се, че тук се е намирал най-старият солодобивен център в Европа. Според проучвания на обекта се предполага, че градът е бил обитаван от около 350 души между 4700 и 4200 г. пр.н.е. - около 1500 години преди гръцката цивилизация. Именно затова Солната мина (Солницата) е обявена за най-стария праисторически град в Европа. Жителите използват кипяща вода от местен извор за създаване на солени тухли, които след това търгуват и използват за консервиране на месо. Това означава, че солта е била изключително ценен ресурс през тези времена. Солницата се разраства около извори с повишено съдържание на сол. Чрез нагряване в керамични съдове водата се изпарява и останалата сол се събира. Останките от откритите съдове показват еволюцията в технологията и съответстват на нарастващия добив на сол. Голяма част от проучените жилищни сгради в селището са двуетажни. Счита се, че селището е оградено със защитена стена с дебелина до 3 метра. От останките е видно, че силно земетресение е разрушило града. През епохата на енеолита солта е ценност, която е добре търгувана, видно в златарите в Солт Лейк, които също са едни от най-старите в Европа. Развитието на Солницата предшества и обуславя разцвета на една култура, по-късно показана и от открития Варненския некропол. Около селото се издигат огромни стени от каменни блокове, непознати до тогава като укрепителна система. Други интересни и странни находки са гробове на убити и 'разчленени тела' мъже и един троен гроб на възрастен мъж с две деца. Предполага се, че съществува неизследван до момента център за производство на керамика. Възникването и развитието на комплекса са пряко свързани с голямото и единствено находище на каменна сол в Източните Балкани. На площ от 300 дка археолозите изравят тонове керамични съдове, в които се вари вода от местните солени извори и се добива сол. За момента местоположението на този център за мащабно производство на керамични съдове остава загадка. Освен това, учените твърдят, че по онова време тогава не се използват грънчарски колела, но са открити останки от съдове с диаметър и височина около 70 см.",
          pl: "Opis po polsku",
        },
        access: {
          en: "The object can be reached by transport.",
          bg: "До обекта се стига с транспорт.",
          pl: "Do obiektu można dojechać komunikacją.",
        },
        summerWorkTime: {
          en: "Summer period: 10:00 a.m. – 4:00 p.m.",
          bg: "Летен период: 10:00 – 16:00 ч.",
          pl: "Okres letni: 10:00 – 16:00",
        },
        winterWorkTime: {
          en: "Days open for free visits to citizens and tourists are also organized",
          bg: "Организират се и дни отворени за безплатни посещения на граждани и туристи",
          pl: "Organizowane są także dni otwarte umożliwiające bezpłatne wizyty mieszkańcom i turystom",
        },
        coordinates: {
          gps: "43.12949, 27.47345",
        },
      },
      {
        id: "place3",
        name: {
          en: "Thracian sanctuary 'Shashkanite' and rock monastery",
          bg: "Тракийско светилище „Шашкъните“ и скален манастир",
          pl: "Miejsce 1 w Dalgopol",
        },
        displayPhoto: obekt1,
        photos: [{ obekt1, obekt2, obekt3, obekt4, obekt5, obekt6 }],
        googleMapsLink: "https://maps.app.goo.gl/NaMVBjWwJRm6kPNR7",
        googleMaps:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2908.82747182375!2d27.449608090215442!3d43.19213080769439!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40a5bb94c92b4bed%3A0x20c0864140051d46!2sRock%20Monastery%20%22Shashkanite%22!5e0!3m2!1sen!2sbg!4v1726732066189!5m2!1sen!2sbg",
        bookingLink:
          "https://www.booking.com/searchresults.html?ss=Provadia&ssne=D%C5%ADlgopol&ssne_untouched=D%C5%ADlgopol&efdco=1&label=gen173nr-1FCAEoggI46AdIM1gEaBeIAQGYATG4ARfIAQzYAQHoAQH4AQKIAgGoAgO4AtqZz7cGwAIB0gIkOGQwMWZlMjctOTg4OS00ZjM2LWFjNzQtNmI2OGU2OTY4MWUx2AIF4AIB&aid=304142&lang=en-us&sb=1&src_elem=sb&src=index&dest_id=1666434&dest_type=hotel&ac_position=0&ac_click_type=b&ac_langcode=en&ac_suggestion_list_length=1&search_selected=true&search_pageview_id=3e463d2d508a0024&ac_meta=GhAzZTQ2M2QyZDUwOGEwMDI0IAAoATICZW46CFByb3ZhZGlhQABKAFAA&checkin=2024-09-27&checkout=2024-09-28&ltfd=1%3A5%3A10-2024_11-2024_12-2024%3A1%3A&group_adults=2&no_rooms=2&group_children=0",
        restaurantsLink:
          "https://www.tripadvisor.com/Restaurants-g2100806-Provadia_Varna_Province.html",
        airbnbLink:
          "https://www.airbnb.com/s/Provadia--Varna--Bulgaria/homes?tab_id=home_tab&refinement_paths%5B%5D=%2Fhomes&flexible_trip_lengths%5B%5D=one_week&monthly_start_date=2024-10-01&monthly_length=3&monthly_end_date=2025-01-01&price_filter_input_type=0&channel=EXPLORE&query=Provadia%2C%20Varna&date_picker_type=flexible_dates&source=structured_search_input_header&search_type=autocomplete_click&price_filter_num_nights=5&place_id=ChIJT1T7MMe7pUARj2QWLeLAuo8&location_bb=QizRyEHbnfBCLJxtQdtxqg%3D%3D",
        qrCode: shashkuniteQR,
        description: {
          en: "Description in English",
          bg: "Скалният манастир се намира на около километър североизточно от град Провадия над квартал Север. До обекта има изграден еко-маршрут, който преминава и през крепостта Овеч. Манастирът се състои от десет килии, изсечени на височина от около 30 метра в скалния масив, като част от тях са самостоятелни, а други групирани. Първата група се състои от три килии, следват две самостоятелни помещения и втора група, образувана от пет килии. Килиите от втората група са свързани помежду си чрез малки проходи, като три от тях са на едно ниво, а четвъртата и петата са разположени по-високо в скалата.Петата килия от тази група представлява малка гробница с каменен гроб и изсечен на стената кръст. Манастирът е бил обитаван от монаси през XII-XIII век и тогава е бил трудно достъпен. В наши дни него е изградено мостово съоръжение, отвеждащо до килиите.",
          pl: "Opis po polsku",
        },
        access: {
          en: "",
          bg: "До местността се стига по стара асфалтирана отбивка преди входа на гр. Провадия. На 800 м след вилната зона, се достига гората, откъдето се откроява гледка към красивото плато и скалите, в които се намира скален манастир “Шашкъните”.  В манастира се влиза през неголям кръгъл отвор. Скалната обител се състои от четири големи свързани килии, като трите са на едно ниво, а четвъртата е над тях. През отворите се отрива внушителна гледка към платото и гр. Провадия. В манастира се влиза през неголям кръгъл отвор. Скалната обител се състои от четири големи свързани килии, като трите са на едно ниво, а четвъртата е над тях. През отворите се отрива внушителна гледка към платото и гр. Провадия.",
          pl: "",
        },
        summerWorkTime: {
          en: "Free access for visitors every day.",
          bg: "Свободен достъп за посетители всеки ден.",
          pl: "",
        },
        winterWorkTime: {
          en: "",
          bg: "",
          pl: "",
        },
        coordinates: {
          gps: "43.19212, 27.45447",
        },
      },
      {
        id: "place4",
        name: {
          en: "Historical Museum",
          bg: "Исторически Музей",
          pl: "Miejsce 1 w Dalgopol",
        },
        displayPhoto: muzei1,
        photos: [{ muzei1, muzei2, muzei3, muzei4 }],
        googleMapsLink: "https://maps.app.goo.gl/jU79Xj8S3e2PXYgW7",
        googleMaps:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2909.602984469492!2d27.438951076535478!3d43.17585718317246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40a5b95ff62b2f49%3A0x81495c115029afed!2sHistorical%20Museum!5e0!3m2!1sen!2sbg!4v1726732152786!5m2!1sen!2sbg",
        bookingLink:
          "https://www.booking.com/searchresults.html?ss=Provadia&ssne=D%C5%ADlgopol&ssne_untouched=D%C5%ADlgopol&efdco=1&label=gen173nr-1FCAEoggI46AdIM1gEaBeIAQGYATG4ARfIAQzYAQHoAQH4AQKIAgGoAgO4AtqZz7cGwAIB0gIkOGQwMWZlMjctOTg4OS00ZjM2LWFjNzQtNmI2OGU2OTY4MWUx2AIF4AIB&aid=304142&lang=en-us&sb=1&src_elem=sb&src=index&dest_id=1666434&dest_type=hotel&ac_position=0&ac_click_type=b&ac_langcode=en&ac_suggestion_list_length=1&search_selected=true&search_pageview_id=3e463d2d508a0024&ac_meta=GhAzZTQ2M2QyZDUwOGEwMDI0IAAoATICZW46CFByb3ZhZGlhQABKAFAA&checkin=2024-09-27&checkout=2024-09-28&ltfd=1%3A5%3A10-2024_11-2024_12-2024%3A1%3A&group_adults=2&no_rooms=2&group_children=0",
        restaurantsLink:
          "https://www.tripadvisor.com/Restaurants-g2100806-Provadia_Varna_Province.html",
        airbnbLink:
          "https://www.airbnb.com/s/Provadia--Varna--Bulgaria/homes?tab_id=home_tab&refinement_paths%5B%5D=%2Fhomes&flexible_trip_lengths%5B%5D=one_week&monthly_start_date=2024-10-01&monthly_length=3&monthly_end_date=2025-01-01&price_filter_input_type=0&channel=EXPLORE&query=Provadia%2C%20Varna&date_picker_type=flexible_dates&source=structured_search_input_header&search_type=autocomplete_click&price_filter_num_nights=5&place_id=ChIJT1T7MMe7pUARj2QWLeLAuo8&location_bb=QizRyEHbnfBCLJxtQdtxqg%3D%3D",
        qrCode: muzeiDulgopolQR,
        description: {
          en: "Description in English",
          bg: "През 50-те години на ХХ век група ентусиасти – Илия Василев, Йордан Керезов, Койчо Атанасов и други работят за създаване на нова музейна сбирка в Провадия. За целта наследниците на опълченеца Стефан Богданов подаряват част от неговата къща. Събрани са предмети от културно-историческото наследство на Провадийския край като по голямата част от тях са дарени от родолюбиви провадийци. На 1.ІХ.1959 г. е открита скромна експозиция. Пръв уредник става учителя-пенсионер Станьо Маринов, а година след това с него започва да работи и Пейчо Дянков. Те поставят основите на съвременното музейно дело в Провадия. С течение на годините фондът на сбирката се попълва и тя става най-богатата измежду всички музейни сбирки в България. За това спомага както дарителската дейност на хората в града и селата, така и сериозните археологически и етнографски проучвания. В Провадия работят археолозите: Ара Маргос, ст.н.с. Димитър Димитров, ст.н.с. Александър Кузев, Георги Кузманов, проф. д.и.н. Казимир Попконстантинов, доц. д-р Павел Георгиев, етнографа Мария Николова. През 1986 година старата музейна сграда е съборена и построена наново до 1993 година. Новата музейна експозиция отваря врати през 1999 година. В залите на музея са показани експонати от града и десетки селища на бившата Провадийска околия. Хронологическите рамки на предметите са от края на Новокаменната епоха до средата на ХХ век. Акцент в експозицията са залите представящи находки от Праисторически солодобивен и градски център Провадия-Солницата, късноантичната и средновековна крепост Проват–Овеч, старобългарският манастир – книжовно средище от ІХ-ХІ в. край с. Равна, материали от Османския период, Възраждането, Новата и Най-нова история на града и района, монети, оръжия, фотоси. Неразделна част от музея и културното наследство на нашия край е Художествената галерия на града. Тя отваря врати през1967 г. От 1971 разполага със самостоятелна сграда. Днес разполага с над 500 картини, графики, скулптури и пластики.",
          pl: "Opis po polsku",
        },
        access: {
          en: "",
          bg: "Историческият музей се намира в централната част на гр. Провадия, на пешеходно разстояние от основните административни институции в града.",
          pl: "",
        },
        summerWorkTime: {
          en: "Working hours: Winter: from 09:00 a.m. to 6:00 p.m. Weekends: Saturday and Sunday Summer: from 9:00 a.m. to 6:00 p.m. Saturday and Sunday: from 9:30 a.m. to 5:30 p.m.",
          bg: "Работно време: Зимно: от 09:00ч. до 18:00 ч. Почивни дни: събота и неделя Лятно: от 09:00ч. до 18:00 ч. Събота и неделя: от 9:30 до 17:30 ч. ",
          pl: "",
        },
        winterWorkTime: {
          en: "",
          bg: "",
          pl: "",
        },
        coordinates: {
          gps: "43.17585, 27.44152",
        },
      },
      {
        id: "place5",
        name: {
          en: "Temple 'St. Annunciation'",
          bg: "Храм „Св. Благовещение“, ",
          pl: "Miejsce 1 w Dalgopol",
        },
        displayPhoto: curkva2,
        photos: [{ curkva1, curkva2, curkva3, curkva4, curkva5, curkva6 }],
        googleMapsLink: "https://maps.app.goo.gl/dfebbzrfB9AxDqKu8",
        googleMaps:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14247.19328081236!2d27.435704037620848!3d43.17091032459667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40a5b96041075b35%3A0xd8754649243ca95f!2sChurch%20Sveto%20Blagoveshtenie!5e0!3m2!1sen!2sbg!4v1726732332696!5m2!1sen!2sbg",
        bookingLink:
          "https://www.booking.com/searchresults.html?ss=Provadia&ssne=D%C5%ADlgopol&ssne_untouched=D%C5%ADlgopol&efdco=1&label=gen173nr-1FCAEoggI46AdIM1gEaBeIAQGYATG4ARfIAQzYAQHoAQH4AQKIAgGoAgO4AtqZz7cGwAIB0gIkOGQwMWZlMjctOTg4OS00ZjM2LWFjNzQtNmI2OGU2OTY4MWUx2AIF4AIB&aid=304142&lang=en-us&sb=1&src_elem=sb&src=index&dest_id=1666434&dest_type=hotel&ac_position=0&ac_click_type=b&ac_langcode=en&ac_suggestion_list_length=1&search_selected=true&search_pageview_id=3e463d2d508a0024&ac_meta=GhAzZTQ2M2QyZDUwOGEwMDI0IAAoATICZW46CFByb3ZhZGlhQABKAFAA&checkin=2024-09-27&checkout=2024-09-28&ltfd=1%3A5%3A10-2024_11-2024_12-2024%3A1%3A&group_adults=2&no_rooms=2&group_children=0",
        restaurantsLink:
          "https://www.tripadvisor.com/Restaurants-g2100806-Provadia_Varna_Province.html",
        airbnbLink:
          "https://www.airbnb.com/s/Provadia--Varna--Bulgaria/homes?tab_id=home_tab&refinement_paths%5B%5D=%2Fhomes&flexible_trip_lengths%5B%5D=one_week&monthly_start_date=2024-10-01&monthly_length=3&monthly_end_date=2025-01-01&price_filter_input_type=0&channel=EXPLORE&query=Provadia%2C%20Varna&date_picker_type=flexible_dates&source=structured_search_input_header&search_type=autocomplete_click&price_filter_num_nights=5&place_id=ChIJT1T7MMe7pUARj2QWLeLAuo8&location_bb=QizRyEHbnfBCLJxtQdtxqg%3D%3D",
        qrCode: blagoveshtenieQR,
        description: {
          en: "Description in English",
          bg: "Църквата „Свето Благовещение“ се намира в сърцето на историческия център на Провадия. Намира се до главната улица на Провадия, а също и в непосредствена близост до пешеходната зона на града. Поради този факт в околностите й могат да се видят много различни архитектурни и културни паметници. Има малък площад с паметник, посветен на известния български писател и юрист от края на XIX век Алеко Константинов, на чието име е кръстена местната библиотека и театър. В района има няколко къщи от XIX век от периода на Възраждането и идеално запазени частни сгради в стил сецесион и ар деко от началото на XX век. Историята около построяването на храма е следната: През 1911г. известният архитект Дабко Дабков започва проектирането на църквата. На следващата година е положен основният камък от Варненският и Великопреславски Митрополит Симеон. През 1913г.  земетресение в района нанася щети, което налага реставриране на част от храма. През 1922г. църквата е отворена официално за посетители.",
          pl: "Opis po polsku",
        },
        access: {
          en: "Located in the central part of Provadia, church 'St. Annunciation' is easily accessible and visible.",
          bg: "Намирайки се в централната част на Провадия, храм „Св. Благовещение“ е лесно достъпен и видим.",
          pl: "",
        },
        summerWorkTime: {
          en: "Every weekday: from 8:00 a.m. until 4:00 p.m",
          bg: "Всеки делничен ден: от 8:00ч. до 16:00ч.",
          pl: "",
        },
        winterWorkTime: {
          en: "",
          bg: "",
          pl: "",
        },
        coordinates: {
          gps: "43.17392, 27.44291",
        },
      },
      {
        id: "place6",
        name: {
          en: "Late antique and medieval fortress Gradishte /The Great Kale/",
          bg: "Късноантична и средновековна крепост Градище /Голямото кале/",
          pl: "Miejsce 1 w Dalgopol",
        },
        displayPhoto: kale1,
        photos: [{ kale1, kale2, kale3, kale4 }],
        googleMapsLink: "https://maps.app.goo.gl/DqMesLakuCQei4a58",
        googleMaps:
          "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d6340.471396375015!2d27.450525547140703!3d43.22796559394798!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDPCsDEzJzQ1LjMiTiAyN8KwMjcnMDcuMiJF!5e0!3m2!1sbg!2sbg!4v1727183699227!5m2!1sbg!2sbg",
        bookingLink:
          "https://www.booking.com/searchresults.html?ss=Provadia&ssne=D%C5%ADlgopol&ssne_untouched=D%C5%ADlgopol&efdco=1&label=gen173nr-1FCAEoggI46AdIM1gEaBeIAQGYATG4ARfIAQzYAQHoAQH4AQKIAgGoAgO4AtqZz7cGwAIB0gIkOGQwMWZlMjctOTg4OS00ZjM2LWFjNzQtNmI2OGU2OTY4MWUx2AIF4AIB&aid=304142&lang=en-us&sb=1&src_elem=sb&src=index&dest_id=1666434&dest_type=hotel&ac_position=0&ac_click_type=b&ac_langcode=en&ac_suggestion_list_length=1&search_selected=true&search_pageview_id=3e463d2d508a0024&ac_meta=GhAzZTQ2M2QyZDUwOGEwMDI0IAAoATICZW46CFByb3ZhZGlhQABKAFAA&checkin=2024-09-27&checkout=2024-09-28&ltfd=1%3A5%3A10-2024_11-2024_12-2024%3A1%3A&group_adults=2&no_rooms=2&group_children=0",
        restaurantsLink:
          "https://www.tripadvisor.com/Restaurants-g2100806-Provadia_Varna_Province.html",
        airbnbLink:
          "https://www.airbnb.com/s/Provadia--Varna--Bulgaria/homes?tab_id=home_tab&refinement_paths%5B%5D=%2Fhomes&flexible_trip_lengths%5B%5D=one_week&monthly_start_date=2024-10-01&monthly_length=3&monthly_end_date=2025-01-01&price_filter_input_type=0&channel=EXPLORE&query=Provadia%2C%20Varna&date_picker_type=flexible_dates&source=structured_search_input_header&search_type=autocomplete_click&price_filter_num_nights=5&place_id=ChIJT1T7MMe7pUARj2QWLeLAuo8&location_bb=QizRyEHbnfBCLJxtQdtxqg%3D%3D",
        qrCode: golqmotoKaleQR,
        description: {
          en: "Description in English",
          bg: "Село Петров дол се намира на 7 км от Провадия. Край него, в скалите Керешлика, е издълбан манастирът „Седемте дупки“, състоящ се от 6 килии. В основата на скалния му венец са открити безброй рисунки от ХII – ХVI в. До тях се стига лесно през т.нар. Али бей дере, както и от скалната килия „Свети Георги“. На входа му е издълбан стар надпис с името му, изписано на гръцки език. Надписът е от около ХVІІІ – ХІХ в. и вероятно е направен по време на по-късното обитаване на обителта. „Свети Георги“ представлява скална килия с трапецовидна форма, ориентирана на запад. На по-високо ниво в килията е разположена гробница. Върху стените има две ниши, а на пода е издълбана яма, до която се стига по стръмни каменни стълби, добре запазени и днес. В допълнение към каменните стълби сега е изградена удобна дървена стълба, която улеснява посетителите. В подножието на гробницата има останки от малка църква или параклис. Пред скалата се простира обширна поляна с добра видимост към местността Градище. Непосредствено до манаситра се е намирала крепост (Крепост Градището), от която в момента не е останало почти нищо. Обитателите на манастира са имали много добра визуална връзка с още 4 манастира от долината – „Саръ кая“, „Тъпаните“ и „Чукара“ край Кривня, „Свети Георги“ при Петров дол, както и със скитовете край Провадия.",
          pl: "Opis po polsku",
        },
        access: {
          en: "The road to the area of ​Gradishte and the rock monastery 'St. Georgi' is not marked and has no signs. The road is covered on foot. After the south-eastern end of the village of Petrov Dol, take the direction of the monastery along the meadow, following a barely noticeable path.",
          bg: "Пътят до местността Градище и скалният манастир „Св. Георги“ не е маркиран и няма табели. Пътят се изминава пеш. След югоизточния край на с. Петров дол се поема в посока манастира по поляна, като се следва едвам забележима пътека.",
          pl: "",
        },
        summerWorkTime: {
          en: "Free access for visitors every day.",
          bg: "Свободен достъп за посетители всеки ден.",
          pl: "",
        },
        winterWorkTime: {
          en: "",
          bg: "",
          pl: "",
        },
        coordinates: {
          gps: "43.22924, 27.45201",
        },
      },
      {
        id: "place7",
        name: {
          en: "Late antique and medieval fortress Mukhaliysko Kale",
          bg: "Късноантична и средновековна крепост Мухалийско кале",
          pl: "Miejsce 1 w Dalgopol",
        },
        displayPhoto: muha1,
        photos: [{ muha1, muha2, muha3, muha4, muha5, muha6 }],
        googleMapsLink: "https://maps.app.goo.gl/tRtzMFPDSaykSKyn7",
        googleMaps:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2913.139854395946!2d27.320927290189335!3d43.10157571351363!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40a5c0ce6f7ad259%3A0x5c4b2352ed04988e!2z0JzRg9GF0LDQu9C40LnRgdC60L4g0LrQsNC70LU!5e0!3m2!1sen!2sbg!4v1726768230595!5m2!1sen!2sbg",
        bookingLink:
          "https://www.booking.com/searchresults.html?ss=Provadia&ssne=D%C5%ADlgopol&ssne_untouched=D%C5%ADlgopol&efdco=1&label=gen173nr-1FCAEoggI46AdIM1gEaBeIAQGYATG4ARfIAQzYAQHoAQH4AQKIAgGoAgO4AtqZz7cGwAIB0gIkOGQwMWZlMjctOTg4OS00ZjM2LWFjNzQtNmI2OGU2OTY4MWUx2AIF4AIB&aid=304142&lang=en-us&sb=1&src_elem=sb&src=index&dest_id=1666434&dest_type=hotel&ac_position=0&ac_click_type=b&ac_langcode=en&ac_suggestion_list_length=1&search_selected=true&search_pageview_id=3e463d2d508a0024&ac_meta=GhAzZTQ2M2QyZDUwOGEwMDI0IAAoATICZW46CFByb3ZhZGlhQABKAFAA&checkin=2024-09-27&checkout=2024-09-28&ltfd=1%3A5%3A10-2024_11-2024_12-2024%3A1%3A&group_adults=2&no_rooms=2&group_children=0",
        restaurantsLink:
          "https://www.tripadvisor.com/Restaurants-g2100806-Provadia_Varna_Province.html",
        airbnbLink:
          "https://www.airbnb.com/s/Provadia--Varna--Bulgaria/homes?tab_id=home_tab&refinement_paths%5B%5D=%2Fhomes&flexible_trip_lengths%5B%5D=one_week&monthly_start_date=2024-10-01&monthly_length=3&monthly_end_date=2025-01-01&price_filter_input_type=0&channel=EXPLORE&query=Provadia%2C%20Varna&date_picker_type=flexible_dates&source=structured_search_input_header&search_type=autocomplete_click&price_filter_num_nights=5&place_id=ChIJT1T7MMe7pUARj2QWLeLAuo8&location_bb=QizRyEHbnfBCLJxtQdtxqg%3D%3D",
        qrCode: muhaKaleQR,
        description: {
          en: "Description in English",
          bg: "Късноантична и средновековна крепост Мухалийско кале се намира на 2.7 km североизточно по права линия от центъра на село Китен. Крепостта е разположена е върху високо езикообразно възвишение с отвесни северни, западни и южни склонове. Крепостната стена прегражда възвишението от източната, която е и достъпна страна. Тя е с дължина от около 86 m и се проследява под насип висок 1-1.5 m. Входът на укреплението се намира в средата на стената и е бил защитен с една правоъгълна кула. Пред крепостната стена е бил издълбан ров. Максималните размери на укреплението са 162х82 m и площ от 10.7 дка. По терена на Мухалийско кале се наблюдават изсечени в скалата основи на сгради и вкопани скални ями наподобяващи питоси. Под твърдината, от север в скалите е изсечен скален манастир. До него се достига през издълбан вертикален отвор и през оформени в отвесните скали стълби. Източно от укреплението на платото на рида е разположено голямо неукрепено селище. По терена му се очертават руините на масивни постройки и се отркива строителна и битова керамика от V-VI и ХII-ХIV в.",
          pl: "Opis po polsku",
        },
        access: {
          en: "The only access to the elevation is from the east, where it is connected to the broad plateau of the hill by a saddle.",
          bg: "Единственият достъп до възвишението е от изток, където със седловина се свързва с широкото плато на рида.",
          pl: "",
        },
        summerWorkTime: {
          en: "Free access for visitors every day.",
          bg: "Свободен достъп за посетители всеки ден.",
          pl: "",
        },
        winterWorkTime: {
          en: "",
          bg: "",
          pl: "",
        },
        coordinates: {
          gps: "43.10157, 27.32579",
        },
      },
      {
        id: "place8",
        name: {
          en: "Rock monastery 'Kara cave' - village Manastir",
          bg: "Скален манастир „Кара пещера”- с.Манастир",
          pl: "Miejsce 1 w Dalgopol",
        },
        displayPhoto: kara1,
        photos: [{ kara1, kara2, kara3, kara4, kara5, kara6 }],
        googleMapsLink: "https://maps.app.goo.gl/nduH8rkiaBM1Fa8bA",
        googleMaps:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2908.5482360563383!2d27.501381376536308!3d43.19798918175303!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40a5ba55f9a97759%3A0x8573c380c9e3f3cc!2sKara%20Peshtera%20Rock%20Monastery!5e0!3m2!1sen!2sbg!4v1726768154597!5m2!1sen!2sbg",
        bookingLink:
          "https://www.booking.com/searchresults.html?ss=Provadia&ssne=D%C5%ADlgopol&ssne_untouched=D%C5%ADlgopol&efdco=1&label=gen173nr-1FCAEoggI46AdIM1gEaBeIAQGYATG4ARfIAQzYAQHoAQH4AQKIAgGoAgO4AtqZz7cGwAIB0gIkOGQwMWZlMjctOTg4OS00ZjM2LWFjNzQtNmI2OGU2OTY4MWUx2AIF4AIB&aid=304142&lang=en-us&sb=1&src_elem=sb&src=index&dest_id=1666434&dest_type=hotel&ac_position=0&ac_click_type=b&ac_langcode=en&ac_suggestion_list_length=1&search_selected=true&search_pageview_id=3e463d2d508a0024&ac_meta=GhAzZTQ2M2QyZDUwOGEwMDI0IAAoATICZW46CFByb3ZhZGlhQABKAFAA&checkin=2024-09-27&checkout=2024-09-28&ltfd=1%3A5%3A10-2024_11-2024_12-2024%3A1%3A&group_adults=2&no_rooms=2&group_children=0",
        restaurantsLink:
          "https://www.tripadvisor.com/Restaurants-g2100806-Provadia_Varna_Province.html",
        airbnbLink:
          "https://www.airbnb.com/s/Provadia--Varna--Bulgaria/homes?tab_id=home_tab&refinement_paths%5B%5D=%2Fhomes&flexible_trip_lengths%5B%5D=one_week&monthly_start_date=2024-10-01&monthly_length=3&monthly_end_date=2025-01-01&price_filter_input_type=0&channel=EXPLORE&query=Provadia%2C%20Varna&date_picker_type=flexible_dates&source=structured_search_input_header&search_type=autocomplete_click&price_filter_num_nights=5&place_id=ChIJT1T7MMe7pUARj2QWLeLAuo8&location_bb=QizRyEHbnfBCLJxtQdtxqg%3D%3D",
        qrCode: karaPeshteraQR,
        description: {
          en: "Description in English",
          bg: "Скален манастир „Кара пещера“, известен и като „Манастира на 40-те одаи“, се намира между селата Староселец и Манастир. Скален манастир Кара пещера представлява голяма пещера със засводен таван, в която са изградени десетки малки помещения – поради това е известен и като Манастирът на 40-те одаи (стаи). Някои от тях са под нивото на земята и са тъмни, откъдето идва и името му – Кара пещера (кара означава черен на турски език). Няколко от помещенията са на втория етаж и са достъпни чрез катерене по хлъзгавата и ронлива скала. По стените има следи от надписи, но са почти заличени от времето и е трудно да се разчетат. Отделните помещения са свързани помежду си с тунели, като някои от тях са много тесни и непроходими. Най-голямото помещение е отворено и с елипсовидна форма – около 40 метра по дължина, а навътре в скалата се промъква на 10-ет метра.",
          pl: "Opis po polsku",
        },
        access: {
          en: "",
          bg: "Манастир „Кара Пещера“ е устроен за посещение и може да се достигне сравнително лесно.Пътува се с автомобил до с. Староселец и след около 1 км в южна посока се върви пеш. Малко преди самия скален манастир, вдясно има 2 малки пещери, които също са били обитаеми. А до тях има почти заличени от времето, но все още личащи си изсечени в скалата стъпала, водещи над двете пещери.",
          pl: "",
        },
        summerWorkTime: {
          en: "The rock monastery is open for visits around the clock.",
          bg: "Скалният манастир е отворен за посещения денонощно.",
          pl: "",
        },
        winterWorkTime: {
          en: "",
          bg: "",
          pl: "",
        },
        coordinates: {
          gps: "43.19796, 27.50396",
        },
      },
      {
        id: "place9",
        name: {
          en: "Excavated church 'St. Teodor', Dobrina village",
          bg: "Вкопана църква „Св. Теодор“, с. Добрина",
          pl: "Miejsce 1 w Dalgopol",
        },
        displayPhoto: teodor1,
        photos: [{ teodor1, teodor2, teodor3, teodor4, teodor5, teodor6 }],
        googleMapsLink: "https://maps.app.goo.gl/JfiknDpGwPHaWyEy7",
        googleMaps:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d372842.98505093873!2d27.146070587258734!3d43.10796508042008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40a5bbdac1de4d7b%3A0xd40dece16fdb3eb!2z0KbRitGA0LrQstCwICLQodCyLiDQotC10L7QtNC-0YAi!5e0!3m2!1sen!2sbg!4v1726768081606!5m2!1sen!2sbg",
        bookingLink:
          "https://www.booking.com/searchresults.html?ss=Provadia&ssne=D%C5%ADlgopol&ssne_untouched=D%C5%ADlgopol&efdco=1&label=gen173nr-1FCAEoggI46AdIM1gEaBeIAQGYATG4ARfIAQzYAQHoAQH4AQKIAgGoAgO4AtqZz7cGwAIB0gIkOGQwMWZlMjctOTg4OS00ZjM2LWFjNzQtNmI2OGU2OTY4MWUx2AIF4AIB&aid=304142&lang=en-us&sb=1&src_elem=sb&src=index&dest_id=1666434&dest_type=hotel&ac_position=0&ac_click_type=b&ac_langcode=en&ac_suggestion_list_length=1&search_selected=true&search_pageview_id=3e463d2d508a0024&ac_meta=GhAzZTQ2M2QyZDUwOGEwMDI0IAAoATICZW46CFByb3ZhZGlhQABKAFAA&checkin=2024-09-27&checkout=2024-09-28&ltfd=1%3A5%3A10-2024_11-2024_12-2024%3A1%3A&group_adults=2&no_rooms=2&group_children=0",
        restaurantsLink:
          "https://www.tripadvisor.com/Restaurants-g2100806-Provadia_Varna_Province.html",
        airbnbLink:
          "https://www.airbnb.com/s/Provadia--Varna--Bulgaria/homes?tab_id=home_tab&refinement_paths%5B%5D=%2Fhomes&flexible_trip_lengths%5B%5D=one_week&monthly_start_date=2024-10-01&monthly_length=3&monthly_end_date=2025-01-01&price_filter_input_type=0&channel=EXPLORE&query=Provadia%2C%20Varna&date_picker_type=flexible_dates&source=structured_search_input_header&search_type=autocomplete_click&price_filter_num_nights=5&place_id=ChIJT1T7MMe7pUARj2QWLeLAuo8&location_bb=QizRyEHbnfBCLJxtQdtxqg%3D%3D",
        qrCode: svTeodorQR,
        description: {
          en: "Description in English",
          bg: "Църквата 'Св. Теодор' се намира в западния край на село Добрина. През XVI-XVIIв там съществува доста голяма дубровнишка колония. Предполага се, че църквата е построена именно от дубровнишките търговци някъде по това време. Храмът е разположен в средата на малък двор, като е полувкопан в земята. Храм 'Св. Теодор' представлява еднокорабна, едноапсидна постройка, която обединява в едни обем олтарно пространство, наос и нартекс (галерия). Общата ѝ дължина отвътре е 24,30 м, а ширината 6,38/6,68 м. Голямата, полукръгла отвътре (с диаметър 3,20 м) и тристенна отвън апсида, е обримчена отвътре с двустъпален синтрон. На източната стена има три ниши - по една от двете страни на апсидата, служещи за протезис и дяконикон, и една в средата ѝ. В центъра на апсидата стърчи каменен постамент за олтарната трапеза. Сградата е с полуцилиндричен свод, покрит с двускатен покрив с керемиди. Градежът е от добре обработени варовикови блокове споени с хоросан. Дебелината на стените е 1,10 м. Някога цялата вътрешност на църквата вероятно е била изписана със стенописи. Днес от тях няма и помен. На западната и южната стена, около входовете, в каменните блокове са издълбани графити с надписи на кирилица и с гръцки букви. Най-добре четим е кирилски надпис на западната стена: «Андон Лавриот». Датите на графитите не са определени. Храмът е разчистен и частично реставриран. Някои специалисти свързват изграждането на 'Св. Теодор' с богатата дубровнишка колония, обитавала селището през късното средновековие. Но след проведените тук археологически разкопки през 2006 г. изникват нови факти. Черно-бяла фотография от 1906 г. на Констрантин Иречек",
          pl: "Opis po polsku",
        },
        access: {
          en: "The church has two entrances - on the western and southern walls. At one time the entire interior of the church was probably covered with frescoes. Today there is no mention of them. The antiquity was cleared and partially restored only a few years ago. A new tiled roof has been installed.",
          bg: "Черквата има два входа - на западната и на южната стена. Някога цялата вътрешност на църквата вероятно е била изписана със стенописи. Днес от тях няма и помен. Старината е разчистена и частично реставрирана едва от преди няколко години. Поставен е нов покрив с керемиди.",
          pl: "",
        },
        summerWorkTime: {
          en: "Weekdays: from 9:00 a.m. until 5:00 p.m.",
          bg: "Делнични дни: от 9:00ч. до 17:00ч.",
          pl: "",
        },
        winterWorkTime: {
          en: "Days off: Saturday and Sunday",
          bg: "Почивни дни: събота и неделя",
          pl: "",
        },
        coordinates: {
          gps: "43.17939, 27.45987",
        },
      },
    ],
  },
};
