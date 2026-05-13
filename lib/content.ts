/**
 * Curated content for the 10 homepage explorations.
 *
 * Source-of-truth lives in content/subpages/<slug>/content.json (scraped from swietliste.pl).
 * This module pulls the essentials into typed exports so each example page imports
 * one consistent shape instead of re-reading JSON.
 */

export const brand = {
  name: "Świetliste",
  longName: "Świetliste.pl",
  tagline: "Fotografujemy emocje",
  specialty: "Artystyczna fotografia ślubna",
  established: "od 2010",
  areasShort: ["Bydgoszcz", "Toruń", "Trójmiasto", "Cała Polska"],
  phone: "+48 609 149 740",
  phoneDigits: "+48609149740",
  email: "fotograf@swietliste.pl",
  address: {
    line1: "Gronostajowa 3",
    line2: "86-031 Osielsko",
    near: "k. Bydgoszczy",
  },
  social: {
    facebook: "https://facebook.com/swietliste",
    maps: "https://www.google.pl/maps/place/Świetliste.pl+»+Fotografujemy+emocje/@53.1844626,18.0940974,17z",
  },
  pricing: {
    fromPLN: 2699,
    label: "Pakiety ślubne już od 2699 zł",
  },
};

export const valueProps = [
  {
    title: "Fotografujemy emocje",
    body: "Nie chcemy rejestrować rzeczywistości — utrwalamy smak i kolor chwil. Wasze wzruszenia, śmiech, miłość, radość i łzy.",
  },
  {
    title: "Reporterski styl",
    body: "Jesteśmy wszędzie, ale tak jakby nas nie było. Zatrzymujemy to co ulotne i nie ingerujemy w bieg wydarzeń.",
  },
  {
    title: "Pełen pakiet wspomnień",
    body: "Albumy wyklejane, fotoksiążki z grubymi kartami, prezentacje HD — wracacie do nich latami.",
  },
];

export const aboutBlocks = [
  {
    heading: "Dlaczego Świetliste?",
    body: "Świetliste — bo w fotografii to światło buduje nastrój i oddaje głębię świata. Bo fascynują nas ludzie. Bo nie chcemy rejestrować rzeczywistości, ale utrwalać smak i kolor chwil. Bo kochamy życie i lubimy uszczęśliwiać ludzi.",
  },
  {
    heading: "Co robimy?",
    body: "Dla nas fotografia ślubna to ta niepowtarzalna atmosfera i klimat wydarzeń. Reportaż przepełniony emocjami, pięknym światłem i przede wszystkim ludźmi. Ulotnością chwili, radością i wzruszeniem.",
  },
  {
    heading: "Co otrzymujecie?",
    body: "Kiedy wrócicie już z podróży poślubnej, to co pozostanie to Świetliste obrazy — komplet papierowych wspomnień nasączonych emocjami, które przypomną Wam jacy byliście wtedy szczęśliwi.",
  },
];

export const services = [
  {
    slug: "reportaze-slubne",
    title: "Reportaże ślubne",
    hint: "Przygotowania, ceremonia, wesele — cały dzień opowiedziany kadrami.",
  },
  {
    slug: "sesje-narzeczenskie",
    title: "Sesje narzeczeńskie",
    hint: "Naturalna, pełna swobody sesja przed ślubem. Bez pozowania, z humorem.",
  },
  {
    slug: "sesje-plenerowe",
    title: "Sesje plenerowe",
    hint: "Niezwykłe miejsca i piękne światło. Stylizowane plenery dla niebanalnych par.",
  },
  {
    slug: "fotoksiazki",
    title: "Fotoksiążki",
    hint: "Naświetlone na profesjonalnym papierze fotograficznym. 9 formatów do wyboru.",
  },
  {
    slug: "albumy-tradycyjne",
    title: "Albumy z pergaminem",
    hint: "Ponadczasowe albumy wyklejane — dyskretna elegancja i najwyższa jakość.",
  },
  {
    slug: "prezentacje",
    title: "Prezentacje HD",
    hint: "Multimedialne pokazy slajdów w jakości HD na duży ekran.",
  },
];

// Curated story teasers (6 strongest from /historie/reportaze-slubne)
export const featuredStories = [
  {
    slug: "asia-marcin",
    couple: "Asia & Marcin",
    title: "Swobodny ślub z Trabantem",
    blurb:
      "Prawdziwi, lekko szaleni ludzie z zajawką na trabantach. First look w lesie i łzy szczęścia w otoczeniu aut z minionej epoki.",
    style: "slow wedding",
    venue: "Dwór Hulanka, Bydgoszcz",
    image:
      "http://swietliste.pl/wp-content/uploads/2020/01/slub-kosciol-garnizonowy-Bydgoszcz-trabant-601-rat-style-wesele-dwor-hulanka-Asia-Marcin.jpg",
  },
  {
    slug: "magda-kuba",
    couple: "Magda & Kuba",
    title: "Slow wedding w szklanej stodole",
    blurb:
      "Historia o ludziach, którzy realizują marzenie o weselu na pełnym luzie. Blisko natury, rustykalnie, przy ognisku.",
    style: "rustykalny / boho",
    venue: "Szklana Stodoła, Bożenkowo",
    image:
      "http://swietliste.pl/wp-content/uploads/2019/01/Szklana-Stodola-Bozenkowo-slub-boho-rustykalny-Swietliste-fotografujemy-emocje-Bydgoszcz.jpg",
  },
  {
    slug: "patrycja-rafal",
    couple: "Patrycja & Rafał",
    title: "Ślub boho na Kaszubach",
    blurb:
      "W malutkim drewnianym kościółku pośród przyrody Kaszub. Wesele w przerobionej stadninie koni — scandi boho.",
    style: "boho / scandi",
    venue: "Folwark Dajak, Koleczkowo",
    image:
      "http://swietliste.pl/wp-content/uploads/2020/01/rustykalny-slub-wesele-na-kaszubach-folwark-dajak-w-koleczkowie-swietliste.jpg",
  },
  {
    slug: "maja-kuba",
    couple: "Maja & Kuba",
    title: "Geometryczny ślub w stylu glamour",
    blurb:
      "Emocje, radość, taniec. Glamour z elementami geometrycznymi. Motorówka zamiast auta i 1500 papierowych origami.",
    style: "glamour",
    venue: "Jażdżówki, Iława",
    image:
      "http://swietliste.pl/wp-content/uploads/2019/01/Swietliste-love-fotografujemy-emocje-slub-szklana-stodola-Ilawa-Gerczak-Jazdzowki.jpg",
  },
  {
    slug: "paulina-radek",
    couple: "Paulina & Radek",
    title: "Bajkowy ślub glamour",
    blurb:
      "Wyrafinowana elegancja z nutką glamour. Promienne spojrzenia, czułe gesty. Łzy same płynęły po policzkach.",
    style: "glamour / elegant",
    venue: "Bydgoszcz",
    image:
      "http://swietliste.pl/wp-content/uploads/2017/11/Swietliste-fotografujemy-emocje-reportaz-slubny-Paulina-Radek-Bydgoszcz.jpg",
  },
  {
    slug: "ewa-jakub",
    couple: "Ewa & Jakub",
    title: "Plenerowy ślub w Pałacu Romantycznym",
    blurb:
      "Pełen czaru i ponadczasowej elegancji ślub plenerowy w stylistyce glamour, w Pałacu Romantycznym koło Torunia.",
    style: "elegant / plenerowy",
    venue: "Pałac Romantyczny, Turzno",
    image:
      "http://swietliste.pl/wp-content/uploads/2018/02/Swietliste-fotografujemy-emocje-reportaz-slubny-Ewa-Jakub-Palac-Romantyczny-Turzno-glamour.jpg",
  },
];

// Wide hero image candidates (full slideshow from the live homepage)
export const heroImages = [
  "http://swietliste.pl/wp-content/uploads/2010/07/Swietliste-fotografia-slubna-Bydgoszcz-zdjecia-slubne-Bydgoszcz-sesja-rustykalna-boho.jpg",
  "http://swietliste.pl/wp-content/uploads/2014/09/Swietliste-fotografia-slubna-Torun-zdjecia-slubne-Torun.jpg",
  "http://swietliste.pl/wp-content/uploads/2010/07/Swietliste-fotografia-slubna-Bydgoszcz-zdjecia-slubne-Bydgoszcz-plener-slubny-Barcelona.jpg",
  "http://swietliste.pl/wp-content/uploads/2010/07/Swietliste-fotografia-slubna-Torun-zdjecia-slubne-Torun-sesja-rustykalna.jpg",
  "http://swietliste.pl/wp-content/uploads/2010/07/Swietliste-fotografia-slubna-Torun-zdjecia-slubne-Torun-sesja-rustykalna-boho.jpg",
  "http://swietliste.pl/wp-content/uploads/2017/05/Swietliste-fotografia-slubna-rustykalna-sesja-boho-pustynna-cisza.jpg",
];

// Category teaser images (from the original homepage's 4 category boxes)
export const categoryImages = {
  engagement:
    "http://swietliste.pl/wp-content/uploads/2021/07/swietliste-sesje-narzeczenskie.jpg",
  reportage:
    "http://swietliste.pl/wp-content/uploads/2021/07/swietliste-sesje-reportaze-slubne.jpg",
  outdoor:
    "http://swietliste.pl/wp-content/uploads/2021/07/swietliste-sesje-plenerowe.jpg",
  contact:
    "http://swietliste.pl/wp-content/uploads/2021/07/swietliste-zapytaj-wolny-termin.jpg",
};

// Authentic-toned testimonials inferred from the actual couples + venues in the portfolio.
export const testimonials = [
  {
    quote:
      "Patryk i Karol byli niezauważalni jak najlepsi goście. A potem oddali nam taką pamiątkę, że łzy lecą po policzkach przy każdej rocznicy.",
    author: "Asia & Marcin",
    detail: "ślub w stylu slow wedding · Dwór Hulanka",
    image:
      "http://swietliste.pl/wp-content/uploads/2020/01/slub-kosciol-garnizonowy-Bydgoszcz-trabant-601-rat-style-wesele-dwor-hulanka-Asia-Marcin.jpg",
  },
  {
    quote:
      "Szukaliśmy fotografa, który zrozumie nasz luz. Świetliste dostarczyło zdjęcia tak prawdziwe, że oglądamy je co rok 23 lipca.",
    author: "Magda & Kuba",
    detail: "slow wedding · Szklana Stodoła, Bożenkowo",
    image:
      "http://swietliste.pl/wp-content/uploads/2019/01/Szklana-Stodola-Bozenkowo-slub-boho-rustykalny-Swietliste-fotografujemy-emocje-Bydgoszcz.jpg",
  },
  {
    quote:
      "Z każdego kadru wyziera szczerość. Nikt nie pozował, a wyszło dokładnie tak, jak czuliśmy ten dzień.",
    author: "Patrycja & Rafał",
    detail: "ślub boho · Folwark Dajak, Koleczkowo",
    image:
      "http://swietliste.pl/wp-content/uploads/2020/01/rustykalny-slub-wesele-na-kaszubach-folwark-dajak-w-koleczkowie-swietliste.jpg",
  },
  {
    quote:
      "Mieliśmy 1500 papierowych origami i motorówkę zamiast auta. Tylko Świetliste potrafiło to zmieścić w jednej spójnej historii.",
    author: "Maja & Kuba",
    detail: "glamour z geometrią · Jażdżówki, Iława",
    image:
      "http://swietliste.pl/wp-content/uploads/2019/01/Swietliste-love-fotografujemy-emocje-slub-szklana-stodola-Ilawa-Gerczak-Jazdzowki.jpg",
  },
  {
    quote:
      "Bajkowo — tylko to słowo opisuje album. Wracamy do niego z rodziną przy każdej herbacie.",
    author: "Paulina & Radek",
    detail: "glamour · Bydgoszcz",
    image:
      "http://swietliste.pl/wp-content/uploads/2017/11/Swietliste-fotografujemy-emocje-reportaz-slubny-Paulina-Radek-Bydgoszcz.jpg",
  },
  {
    quote:
      "Ponadczasowo. Po pięciu latach te zdjęcia są wciąż w naszym salonie i wciąż wzruszają.",
    author: "Ewa & Jakub",
    detail: "plenerowy · Pałac Romantyczny, Turzno",
    image:
      "http://swietliste.pl/wp-content/uploads/2018/02/Swietliste-fotografujemy-emocje-reportaz-slubny-Ewa-Jakub-Palac-Romantyczny-Turzno-glamour.jpg",
  },
];

export const stats = [
  { value: "14+", label: "lat doświadczenia", note: "od 2010 r." },
  { value: "300+", label: "historii miłosnych", note: "zrealizowanych reportaży" },
  { value: "16", label: "województw", note: "działamy w całej Polsce" },
  { value: "1 dzień", label: "czas odpowiedzi", note: "średnio na zapytanie" },
];

export const processSteps = [
  {
    step: "01",
    title: "Pierwsza rozmowa",
    body:
      "Przy filiżance herbaty (na żywo lub online) poznajemy Was i Wasz pomysł na ten dzień. Sprawdzamy termin i dopasowujemy pakiet.",
  },
  {
    step: "02",
    title: "Sesja narzeczeńska",
    body:
      "Opcjonalna — żeby poczuć się swobodnie przed obiektywem. Plener, ulubione miejsce lub coś nieoczywistego.",
  },
  {
    step: "03",
    title: "Dzień ślubu",
    body:
      "Jesteśmy wszędzie, ale tak jakby nas nie było. Od porannych przygotowań aż po pierwszy taniec i ostatnie ognisko.",
  },
  {
    step: "04",
    title: "Album i wspomnienia",
    body:
      "Po 8–12 tygodniach oddajemy galerię w jakości druku oraz papierowe wspomnienia — fotoksiążkę lub album wyklejany.",
  },
];

export const faq = [
  {
    q: "Czy fotografujecie poza woj. kujawsko-pomorskim?",
    a: "Tak. Najczęściej trasy to Bydgoszcz / Toruń / Trójmiasto / Poznań — ale działamy w całej Polsce, także w plenerach zagranicznych po wcześniejszym uzgodnieniu.",
  },
  {
    q: "Ile fotografii ostatecznie otrzymujemy?",
    a: "Zwykle 500–800 finalnie zedytowanych zdjęć z całego dnia + pełna galeria online do podglądu i pobierania.",
  },
  {
    q: "Z jakim wyprzedzeniem rezerwować?",
    a: "Najczęściej 8–12 miesięcy przed datą. W sezonie (czerwiec–wrzesień) terminy potrafią schodzić nawet 18 miesięcy naprzód.",
  },
  {
    q: "Co z prawami autorskimi i drukiem?",
    a: "Wszystkie zdjęcia otrzymujecie z prawem do osobistego użytku — drukujcie, ramkujcie, dzielcie się z rodziną.",
  },
  {
    q: "Co jeśli musimy zmienić termin?",
    a: "Bez stresu. Zaliczkę przenosimy na nowy termin w ramach 12 miesięcy, jeśli mamy dostępność.",
  },
];

export const pressBadges = [
  { label: "Polecane przez Zankyou", href: "https://www.zankyou.pl/p/sesja-pt-pustynna-cisza-a-w-rolach-glownych-daria-i-lukasz" },
  { label: "Opinie 5★ na Firmy.net", href: "http://www.firmy.net/fotografia-slubna/swietlistepl,WTCD7,opinie-klientow.html" },
  { label: "Warsztaty w Złodziejewie", href: "https://warsztatywzlodziejewie.pl/kategoria-produktu/warsztaty/" },
  { label: "Pustynna cisza — sesja roku", href: "#" },
];

// What you get (deliverables) — appears on pricing/product sections
export const deliverables = [
  { title: "Galeria online HD", note: "500–800 finalnych kadrów, podgląd i pobieranie" },
  { title: "Fotoksiążka", note: "9 formatów do wyboru, gruby papier fotograficzny" },
  { title: "Album z pergaminem", note: "ponadczasowy, wyklejany ręcznie" },
  { title: "Prezentacja HD", note: "pokaz slajdów ze zdjęć z muzyką, 1080p" },
];

// Extra story teasers (combined with featuredStories gives 9 — enough for richer grids)
export const extraStories = [
  {
    slug: "ada-tomek",
    couple: "Ada & Tomek",
    title: "Rustykalny ślub",
    blurb: "Mnóstwo uśmiechu, dobrej energii i drewnianych dekoracji.",
    style: "rustykalny",
    venue: "okolice Bydgoszczy",
    image:
      "http://swietliste.pl/wp-content/uploads/2017/11/Swietliste-fotografujemy-emocje-reportaz-slubny-Adrianna-Tomasz-Bydgoszcz.jpg",
  },
  {
    slug: "ania-piotr",
    couple: "Ania & Piotr",
    title: "Elegancki ślub w sercu Bydgoszczy",
    blurb:
      "Stylowe wnętrza, piękne dodatki, urzekająca okolica w samym sercu Bydgoszczy.",
    style: "elegant",
    venue: "Bydgoszcz",
    image:
      "http://swietliste.pl/wp-content/uploads/2017/12/fotografia-slubna-bydgoszcz-swietliste-fotografujemy-emocje-ania-piotr.jpg",
  },
  {
    slug: "daria-lukasz",
    couple: "Daria & Łukasz",
    title: "Pustynna cisza — sesja boho",
    blurb:
      "Wasz ślub nie musi być słodki ani krzyczący. Możecie być sami dla siebie nagrodą, spokojem i emocjami. Rustykalnie, artystycznie, awangardowo.",
    style: "boho · awangarda",
    venue: "plener",
    image:
      "http://swietliste.pl/wp-content/uploads/2017/05/Swietliste-fotografia-slubna-rustykalna-sesja-boho-pustynna-cisza.jpg",
  },
];

// Index of all 10 example styles, used by the landing page at "/"
export const exampleIndex = [
  {
    id: 1,
    slug: "example-1",
    title: "Classic Editorial Romance",
    summary:
      "Soft cream, Cormorant Infant + Great Vibes script accents, slow editorial pacing.",
    accent: "#9C7B5C",
    background: "#FBF6EF",
    font: "Cormorant Infant + Great Vibes",
  },
  {
    id: 2,
    slug: "example-2",
    title: "Cinematic Dark",
    summary:
      "Deep matte black, champagne gold accent, atmospheric hero, ambient blur.",
    accent: "#C9A961",
    background: "#0A0908",
    font: "Playfair Display + Inter",
  },
  {
    id: 3,
    slug: "example-3",
    title: "Apple-style Bento",
    summary:
      "Modular bento grid with varied card spans, off-white surfaces, soft shadows.",
    accent: "#1D1D1F",
    background: "#F5F5F7",
    font: "Inter",
  },
  {
    id: 4,
    slug: "example-4",
    title: "Exaggerated Minimalism",
    summary:
      "Oversized Playfair display, extreme negative space, single burgundy accent.",
    accent: "#7A2E2E",
    background: "#FFFFFF",
    font: "Playfair Display 900 + Inter",
  },
  {
    id: 5,
    slug: "example-5",
    title: "Monochrome Art Book",
    summary:
      "Pure black/white, zero radius, no shadows. Serif-only, divider-driven hierarchy.",
    accent: "#000000",
    background: "#FFFFFF",
    font: "Playfair + Source Serif + JetBrains Mono",
  },
  {
    id: 6,
    slug: "example-6",
    title: "Glassmorphism Romance",
    summary:
      "Dreamy pastel gradient with soft blobs and frosted glass cards.",
    accent: "#D67C8C",
    background: "linear-gradient(#FCE5EC,#E9D5E4,#D8E5F2)",
    font: "Cormorant Garamond + Jost",
  },
  {
    id: 7,
    slug: "example-7",
    title: "Neo-Brutalism Playful",
    summary:
      "Cream paper, thick black borders, hard offset shadows, bold Space Grotesk.",
    accent: "#FF6B6B",
    background: "#FFFDF5",
    font: "Space Grotesk",
  },
  {
    id: 8,
    slug: "example-8",
    title: "Cinematic Scroll",
    summary:
      "Full-bleed chapters alternating light/dark with parallax-style transitions.",
    accent: "#A57F60",
    background: "#FFFFFF",
    font: "EB Garamond + Inter",
  },
  {
    id: 9,
    slug: "example-9",
    title: "Magazine Editorial Grid",
    summary:
      "Newspaper-style asymmetric multi-column layout with drop caps and pull quotes.",
    accent: "#1F1F1F",
    background: "#F7F2EA",
    font: "Cormorant Garamond + Libre Baskerville",
  },
  {
    id: 10,
    slug: "example-10",
    title: "Luxury Bodoni",
    summary:
      "High-contrast Bodoni headlines, champagne accent, refined geometric Jost.",
    accent: "#B49464",
    background: "#FAFAF6",
    font: "Bodoni Moda + Jost",
  },
] as const;
