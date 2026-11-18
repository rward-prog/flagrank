// Rank #1 = best/highest in the world for each metric
// Rankings are approximate based on latest available data

export const METRICS = [
  { id: 'population',   icon: '👥', name: 'Population',        desc: 'Most people' },
  { id: 'area',         icon: '🗺️', name: 'Land Area',         desc: 'Largest by km²' },
  { id: 'gdp',          icon: '💰', name: 'GDP',               desc: 'Largest economy' },
  { id: 'fifa',         icon: '⚽', name: 'Soccer',            desc: 'FIFA world ranking' },
  { id: 'forest',       icon: '🌲', name: 'Forest Cover',      desc: 'Most forested nation' },
  { id: 'peace',        icon: '☮️', name: 'Peacefulness',      desc: 'Global Peace Index' },
  { id: 'co2',          icon: '🏭', name: 'CO₂ Emissions',     desc: 'Largest emitter' },
  { id: 'happiness',    icon: '😊', name: 'Happiness',         desc: 'World Happiness Report' },
  { id: 'olympics',     icon: '🏅', name: 'Olympic Medals',    desc: 'Most all-time medals' },
  { id: 'spice',        icon: '🌶️', name: 'Spice Production',  desc: 'Top spice producer' },
  { id: 'coastline',    icon: '🌊', name: 'Coastline',         desc: 'Longest coastline' },
  { id: 'volcanoes',    icon: '🌋', name: 'Volcanoes',         desc: 'Most active volcanoes' },
  { id: 'literacy',     icon: '📚', name: 'Literacy Rate',     desc: 'Highest literacy' },
  { id: 'biodiversity', icon: '🌍', name: 'Biodiversity',      desc: 'Most species' },
  { id: 'sunshine',     icon: '☀️', name: 'Sunshine Hours',    desc: 'Most annual sunshine' },
  { id: 'internet',     icon: '📱', name: 'Internet Users',    desc: 'Most users' },
  { id: 'basketball',   icon: '🏀', name: 'Basketball',        desc: 'FIBA world ranking' },
  { id: 'cricket',      icon: '🏏', name: 'Cricket',           desc: 'ICC world ranking' },
  { id: 'coffee',       icon: '☕', name: 'Coffee Drinking',   desc: 'Most coffee per capita' },
  { id: 'tourists',     icon: '✈️', name: 'Tourism',           desc: 'Most visited country' },
  { id: 'mountain',     icon: '🏔️', name: 'Highest Mountain',  desc: 'Tallest peak' },
  { id: 'unesco',       icon: '🏛️', name: 'UNESCO Sites',      desc: 'Most Heritage Sites' },
  { id: 'cars',         icon: '🚗', name: 'Cars per Capita',   desc: 'Most cars per person' },
  { id: 'temp',         icon: '🌡️', name: 'Heat',              desc: 'Highest avg temperature' },
  { id: 'lifeexpect',   icon: '👴', name: 'Life Expectancy',   desc: 'Longest living people' },
  { id: 'sleep',        icon: '💤', name: 'Most Sleep',        desc: 'Most sleep per night' },
  { id: 'rainfall',     icon: '🌧️', name: 'Rainfall',          desc: 'Highest annual rain' },
  { id: 'pizza',        icon: '🍕', name: 'Pizza & Pasta',     desc: 'Highest consumption' },
  { id: 'skyscrapers',  icon: '🏗️', name: 'Skyscrapers',       desc: 'Most 150m+ buildings' },
  { id: 'tea',          icon: '🍵', name: 'Tea Drinking',      desc: 'Most tea per capita' },
  { id: 'youngpop',     icon: '🧒', name: 'Youngest Country',  desc: 'Lowest median age' },
  { id: 'fish',         icon: '🐟', name: 'Fish Caught',       desc: 'Most fish per year' },
  { id: 'military',     icon: '🪖', name: 'Military Size',     desc: 'Largest active force' },
  { id: 'wind',         icon: '🌬️', name: 'Windiest',          desc: 'Highest avg wind speed' },
  { id: 'videogames',   icon: '🎮', name: 'Video Games',       desc: 'Most players per capita' },
  { id: 'satellites',   icon: '🚀', name: 'Satellites',        desc: 'Most launched' },
  { id: 'nobel',        icon: '🧪', name: 'Nobel Prizes',      desc: 'Most winners all time' },
  { id: 'sharks',       icon: '🦈', name: 'Shark Attacks',     desc: 'Most recorded attacks' },
  { id: 'venomous',     icon: '🐍', name: 'Venomous Animals',  desc: 'Most venomous species' },
  { id: 'mosquito',     icon: '🦟', name: 'Mosquito Risk',     desc: 'Highest mosquito density' },
  { id: 'gym',          icon: '🏋️', name: 'Gym Memberships',   desc: 'Most per capita' },
  { id: 'minerals',     icon: '🧲', name: 'Rare Earth Metals', desc: 'Largest reserves' },
  { id: 'dogs',         icon: '🐕', name: 'Pet Dogs',          desc: 'Most dogs per capita' },
  { id: 'smallarea',   icon: '📌', name: 'Tiny Country',       desc: 'Smallest by land area' },
  { id: 'smallpop',    icon: '🧑', name: 'Small Population',   desc: 'Fewest people' },
  { id: 'smokers',     icon: '🚬', name: 'Smoking Rate',       desc: 'Highest smoking rate' },
  { id: 'capital',     icon: '🏙️', name: 'Capital City',       desc: 'Largest capital city' },
  { id: 'pollution',   icon: '🌫️', name: 'Air Pollution',      desc: 'Most polluted air' },
  { id: 'desert',      icon: '🏜️', name: 'Most Desert',        desc: 'Largest desert coverage' },
  { id: 'fiveg',       icon: '📶', name: '5G Coverage',        desc: 'Best 5G network' },
  { id: 'houses',      icon: '🏠', name: 'Biggest Homes',      desc: 'Largest avg house size' },
]

export const COUNTRIES = [
  {
    code: 'CN', name: 'China', flag: '🇨🇳',
    ranks: {
      population: 1, area: 3, gdp: 2, fifa: 88, forest: 5, peace: 101, co2: 1, happiness: 60, olympics: 3, spice: 3, coastline: 11, volcanoes: 15, literacy: 45, biodiversity: 3, sunshine: 106, internet: 1,
      basketball: 14, cricket: 100, coffee: 40, tourists: 4, mountain: 2, unesco: 2, cars: 35, temp: 38, lifeexpect: 28, sleep: 3, rainfall: 18, pizza: 25, skyscrapers: 1, tea: 1, youngpop: 40, fish: 1, military: 1, wind: 28, videogames: 4, satellites: 2, nobel: 19, sharks: 23, venomous: 11, mosquito: 15, gym: 30, minerals: 1, dogs: 30, smallarea: 191, smallpop: 128, smokers: 9, capital: 2,
      pollution: 7, desert: 11, fiveg: 1, houses: 55},
    facts: {
      population: "China is home to 1.4 billion people — roughly 1 in 5 humans on Earth lives here.",
      area: "China borders 14 different countries — more than any other nation on Earth.",
      gdp: "China's economy grew from one of the world's poorest in 1980 to the second largest by 2010.",
      forest: "China has planted over 5 million acres of new trees since 2000 — the largest reforestation effort in history.",
      co2: "China produces more CO₂ than the US and EU combined, but is also the world's largest investor in solar energy.",
      olympics: "China first entered the Olympics in 1932 but didn't win a gold medal until 1984, in Los Angeles.",
      spice: "China is one of the world's top producers of ginger, star anise, and chili peppers.",
      coastline: "China's coastline stretches over 14,500 km and borders four major seas.",
      volcanoes: "China has several active volcanic areas, including Tianchi, a crater lake atop a volcano near the North Korean border.",
      biodiversity: "China is home to the giant panda, snow leopard, and Chinese alligator — species found nowhere else on Earth.",
      internet: "China has more internet users than any other country — over one billion people online.",
      mountain: "China contains some of the world's highest peaks in Tibet, including the north face of Everest and dozens of 8,000m summits.",
      unesco: "China has 57 UNESCO World Heritage Sites — the second most of any country — including the Great Wall and the Forbidden City.",
      skyscrapers: "China has more buildings over 150m tall than any other country, with over 2,300 skyscrapers reshaping its skylines.",
      tea: "China invented tea over 4,000 years ago and is both the world's largest producer and consumer of tea.",
      fish: "China catches around 15 million tonnes of fish per year — more than any other nation on Earth.",
      military: "China has the world's largest active military, with about 2 million troops in the People's Liberation Army.",
      satellites: "China has launched the second most satellites of any country, including its own space station and lunar probes.",
    }
  },
  {
    code: 'IN', name: 'India', flag: '🇮🇳',
    ranks: {
      population: 2, area: 7, gdp: 5, fifa: 124, forest: 10, peace: 116, co2: 3, happiness: 126, olympics: 48, spice: 1, coastline: 20, volcanoes: 30, literacy: 101, biodiversity: 5, sunshine: 30, internet: 2,
      basketball: 50, cricket: 1, coffee: 45, tourists: 19, mountain: 4, unesco: 6, cars: 98, temp: 8, lifeexpect: 45, sleep: 1, rainfall: 11, pizza: 28, skyscrapers: 13, tea: 2, youngpop: 12, fish: 3, military: 2, wind: 22, videogames: 35, satellites: 6, nobel: 16, sharks: 9, venomous: 3, mosquito: 6, gym: 35, minerals: 7, dogs: 35, smallarea: 185, smallpop: 130, smokers: 50, capital: 1,
      pollution: 3, desert: 18, fiveg: 78, houses: 64},
    facts: {
      population: "India recently surpassed China to become the world's most populous country, with over 1.4 billion people.",
      area: "India is so large it contains everything from Himalayan peaks to tropical beaches to scorching deserts.",
      gdp: "India is one of the fastest-growing major economies in the world and is expected to become the third largest by 2030.",
      forest: "India is home to nearly 25% of the world's tigers and has expanded its tiger reserves significantly since 2010.",
      co2: "India is the third largest CO₂ emitter but also the world's third largest producer of solar energy.",
      spice: "India produces and exports more spices than any other country — over 75 different varieties.",
      coastline: "India has about 7,500 km of coastline touching three bodies of water: the Arabian Sea, Bay of Bengal, and Indian Ocean.",
      biodiversity: "India is one of the world's 17 'megadiverse' countries, home to over 45,000 plant species and 91,000 animal species.",
      internet: "India has the second most internet users in the world — over 750 million people and growing fast.",
      cricket: "India is the #1 ranked cricket nation in the world and home to the IPL, the most lucrative cricket league on Earth.",
      sleep: "India averages the least sleep per night of any studied nation — about 7 hours — driven by long work hours and high stress.",
      mountain: "India's Himalayan range contains dozens of peaks over 7,000m, with Kangchenjunga as the country's highest at 8,586m.",
      unesco: "India has 42 UNESCO World Heritage Sites, including the Taj Mahal, Hampi, and the Sundarbans mangrove forest.",
      military: "India has the world's second largest active military, with 1.4 million active-duty personnel.",
    }
  },
  {
    code: 'US', name: 'United States', flag: '🇺🇸',
    ranks: {
      population: 3, area: 4, gdp: 1, fifa: 11, forest: 4, peace: 131, co2: 2, happiness: 23, olympics: 1, spice: 18, coastline: 8, volcanoes: 3, literacy: 20, biodiversity: 8, sunshine: 40, internet: 3,
      basketball: 1, cricket: 100, coffee: 15, tourists: 3, mountain: 7, unesco: 10, cars: 2, temp: 40, lifeexpect: 35, sleep: 6, rainfall: 20, pizza: 2, skyscrapers: 2, tea: 20, youngpop: 30, fish: 5, military: 3, wind: 11, videogames: 3, satellites: 1, nobel: 1, sharks: 2, venomous: 6, mosquito: 22, gym: 1, minerals: 4, dogs: 2, smallarea: 192, smallpop: 118, smokers: 68, capital: 22,
      pollution: 47, desert: 17, fiveg: 5, houses: 2},
    facts: {
      population: "The US is the third most populous country on Earth, with over 330 million people spread across 50 states.",
      area: "The US is so large that it spans six time zones, from Maine to Hawaii.",
      gdp: "The United States has the largest economy in the world, producing about 25% of global GDP.",
      fifa: "The US co-hosts the 2026 FIFA World Cup alongside Canada and Mexico — the first time three nations share the tournament.",
      forest: "The US has about 750 million acres of forest, covering roughly one-third of the country.",
      co2: "The United States is the second largest CO₂ emitter in the world, though emissions have been declining since 2007.",
      olympics: "The United States has won more Olympic medals than any other country — over 2,600 total across all Summer and Winter Games.",
      spice: "The US is a top producer of chili peppers and herbs, with major growing regions in California and New Mexico.",
      coastline: "The US has over 19,000 km of coastline, and Alaska alone contributes more than half of that total.",
      volcanoes: "The US has over 160 active or potentially active volcanoes, mostly in Alaska, Hawaii, and the Pacific Northwest.",
      literacy: "Nearly 99% of Americans aged 15 and older can read and write, one of the highest rates among large nations.",
      biodiversity: "The US is home to over 400 mammal species and more than 900 bird species, from grizzly bears to bald eagles.",
      internet: "The US has the third most internet users in the world, with about 97% of its population online.",
      basketball: "The USA invented basketball in 1891 and is ranked #1 by FIBA — its 'Dream Teams' have dominated Olympic competition.",
      cars: "The US has the second most cars per capita in the world, with about 850 vehicles per 1,000 people.",
      nobel: "The United States has produced more Nobel Prize winners than any other country — over 400 across all categories.",
      satellites: "The US has launched more satellites than any other country, with thousands of active satellites in orbit.",
      gym: "The United States has the highest gym membership rate in the world, with over 60 million active members.",
      sharks: "The US ranks second in recorded shark attacks, with Florida's waters among the most incident-prone in the world.",
      dogs: "Americans own the second most dogs per capita globally — about 70 dogs per 100 households.",
    }
  },
  {
    code: 'BR', name: 'Brazil', flag: '🇧🇷',
    ranks: {
      population: 7, area: 5, gdp: 12, fifa: 1, forest: 2, peace: 103, co2: 13, happiness: 49, olympics: 18, spice: 5, coastline: 2, volcanoes: 12, literacy: 111, biodiversity: 1, sunshine: 10, internet: 5,
      basketball: 11, cricket: 100, coffee: 50, tourists: 16, mountain: 18, unesco: 12, cars: 30, temp: 18, lifeexpect: 30, sleep: 14, rainfall: 4, pizza: 11, skyscrapers: 14, tea: 14, youngpop: 16, fish: 17, military: 11, wind: 25, videogames: 23, satellites: 15, nobel: 23, sharks: 4, venomous: 2, mosquito: 11, gym: 16, minerals: 6, dogs: 3, smallarea: 190, smallpop: 112, smokers: 65, capital: 55,
      pollution: 78, desert: 40, fiveg: 68, houses: 39},
    facts: {
      population: "Brazil is the most populous country in South America, home to over 215 million people.",
      area: "Brazil is so large it takes up nearly half of South America and borders every country on the continent except two.",
      gdp: "Brazil has the largest economy in Latin America and is one of the top 15 economies in the world.",
      fifa: "Brazil has won the FIFA World Cup a record 5 times and is the only team to have played in every single tournament.",
      forest: "The Amazon rainforest in Brazil is the largest tropical forest on Earth, covering about 5.5 million km².",
      olympics: "Brazil hosted the 2016 Rio Olympics, the first Summer Games ever held in South America.",
      spice: "Brazil is one of the world's top producers of black pepper, chili peppers, and other tropical spices.",
      coastline: "Brazil has the second longest coastline in the Americas — over 7,400 km of Atlantic Ocean beaches.",
      biodiversity: "Brazil is the most biodiverse country on Earth, home to more species of plants, insects, and freshwater fish than anywhere else.",
      sunshine: "Brazil enjoys some of the most sunshine of any country, with most regions getting over 2,500 hours of sun per year.",
      internet: "Brazil has the fifth most internet users in the world, with over 150 million Brazilians online.",
      venomous: "Brazil is the second most venomous-species-rich country on Earth, home to the Brazilian wandering spider and bushmaster snake.",
      sharks: "Brazil ranks fourth in recorded shark attacks, with the northeastern coastline around Recife being particularly active.",
      dogs: "Brazil has one of the highest dog ownership rates in the world, with over 55 million pet dogs.",
    }
  },
  {
    code: 'RU', name: 'Russia', flag: '🇷🇺',
    ranks: {
      population: 9, area: 1, gdp: 11, fifa: 26, forest: 1, peace: 155, co2: 4, happiness: 72, olympics: 2, spice: 20, coastline: 1, volcanoes: 5, literacy: 18, biodiversity: 9, sunshine: 75, internet: 6,
      basketball: 15, cricket: 100, coffee: 97, tourists: 14, mountain: 5, unesco: 9, cars: 22, temp: 110, lifeexpect: 60, sleep: 16, rainfall: 50, pizza: 13, skyscrapers: 9, tea: 4, youngpop: 45, fish: 6, military: 4, wind: 16, videogames: 20, satellites: 3, nobel: 7, sharks: 150, venomous: 100, mosquito: 50, gym: 18, minerals: 2, dogs: 18, smallarea: 195, smallpop: 107, smokers: 12, capital: 5,
      pollution: 40, desert: 55, fiveg: 44, houses: 33},
    facts: {
      population: "Russia is the ninth most populous country on Earth, with about 144 million people spread across a massive landmass.",
      area: "Russia is the largest country in the world — it's so big it spans 11 time zones and covers about 1/8 of Earth's land.",
      gdp: "Russia is one of the world's top energy exporters, with massive reserves of oil and natural gas.",
      forest: "Russia has more forest than any other country — about 20% of all the world's forests are in Siberia.",
      co2: "Russia is the fourth largest CO₂ emitter in the world, largely due to its massive oil and gas industry.",
      olympics: "The Soviet Union and Russia combined have won the second most Olympic medals in history, behind only the United States.",
      spice: "Russia is a top producer of coriander and mustard seed, key spices grown on its vast agricultural plains.",
      coastline: "Russia has the longest coastline of any country — over 37,000 km stretching across 13 different seas.",
      volcanoes: "Russia's Kamchatka Peninsula has over 150 volcanoes, including 29 that are still active today.",
      literacy: "Russia has one of the highest literacy rates in the world, with nearly 100% of adults able to read and write.",
      biodiversity: "Russia is home to the Siberian tiger, snow leopard, and Amur leopard — some of the world's rarest big cats.",
      internet: "Russia has the sixth most internet users in the world, with over 120 million people online.",
      mountain: "Russia's Elbrus at 5,642m is the highest peak in Europe and one of the Seven Summits.",
      tea: "Russia is the fourth largest tea-consuming nation — tea culture is central to Russian hospitality, traditionally served from a samovar.",
      satellites: "Russia (including the Soviet era) has launched the third most satellites in history, beginning with Sputnik in 1957.",
      nobel: "Russia and the former Soviet Union have produced over 20 Nobel Prize winners, including in physics, chemistry, and literature.",
      minerals: "Russia has the world's second largest rare earth and mineral reserves, including vast deposits of palladium and platinum.",
    }
  },
  {
    code: 'CA', name: 'Canada', flag: '🇨🇦',
    ranks: {
      population: 38, area: 2, gdp: 9, fifa: 43, forest: 3, peace: 12, co2: 10, happiness: 15, olympics: 8, spice: 22, coastline: 3, volcanoes: 18, literacy: 12, biodiversity: 15, sunshine: 62, internet: 16,
      basketball: 7, cricket: 100, coffee: 10, tourists: 18, mountain: 8, unesco: 17, cars: 6, temp: 120, lifeexpect: 11, sleep: 11, rainfall: 33, pizza: 7, skyscrapers: 10, tea: 19, youngpop: 110, fish: 16, military: 28, wind: 7, videogames: 12, satellites: 9, nobel: 10, sharks: 24, venomous: 60, mosquito: 108, gym: 2, minerals: 5, dogs: 6, smallarea: 193, smallpop: 83, smokers: 95, capital: 88,
      pollution: 73, desert: 90, fiveg: 17, houses: 3},
    facts: {
      area: "Canada is the second largest country in the world, covering about 10 million km² — bigger than the entire United States.",
      gdp: "Canada has one of the world's strongest economies, powered by oil sands, forestry, mining, and a highly educated workforce.",
      forest: "Canada contains about 9% of the world's forests, with vast boreal forests stretching across the country.",
      peace: "Canada consistently ranks among the world's most peaceful nations, with strong institutions and low conflict levels.",
      co2: "Canada is a top 10 CO₂ emitter largely due to its oil sands industry in Alberta.",
      happiness: "Canada ranks among the happiest countries on Earth, thanks to high quality of life, healthcare, and natural beauty.",
      olympics: "Canada has won over 300 Olympic medals and hosted the Games twice — in Montreal (1976) and Calgary (1988).",
      coastline: "Canada has the longest coastline of any country in the world — over 202,000 km touching three oceans.",
      volcanoes: "Canada has about 50 potentially active volcanoes, most located in British Columbia and the Yukon.",
      literacy: "Canada has one of the highest literacy rates in the world, with nearly 99% of adults able to read and write.",
      biodiversity: "Canada is home to polar bears, moose, grizzly bears, and over 450 bird species.",
      basketball: "Canada is ranked #7 by FIBA and produced NBA stars like Steve Nash and Andrew Wiggins — basketball was even invented by a Canadian.",
      coffee: "Canada is among the top 10 coffee-consuming nations per capita, with a thriving café culture especially in cities.",
      gym: "Canada ranks second globally in gym membership per capita, with fitness culture deeply embedded in its lifestyle.",
      nobel: "Canada has produced about 27 Nobel laureates, including winners in physics, chemistry, and medicine.",
    }
  },
  {
    code: 'AU', name: 'Australia', flag: '🇦🇺',
    ranks: {
      population: 101, area: 6, gdp: 13, fifa: 23, forest: 7, peace: 22, co2: 15, happiness: 12, olympics: 6, spice: 25, coastline: 7, volcanoes: 25, literacy: 15, biodiversity: 6, sunshine: 5, internet: 20,
      basketball: 5, cricket: 2, coffee: 18, tourists: 20, mountain: 42, unesco: 15, cars: 5, temp: 21, lifeexpect: 5, sleep: 10, rainfall: 17, pizza: 6, skyscrapers: 6, tea: 17, youngpop: 35, fish: 21, military: 24, wind: 8, videogames: 11, satellites: 13, nobel: 13, sharks: 1, venomous: 1, mosquito: 20, gym: 5, minerals: 3, dogs: 4, smallarea: 189, smallpop: 76, smokers: 60, capital: 140,
      pollution: 72, desert: 8, fiveg: 12, houses: 1},
    facts: {
      area: "Australia is the only country that is also an entire continent, covering about 7.7 million km².",
      gdp: "Australia has one of the highest standards of living in the world, with 30+ years of continuous economic growth until 2020.",
      forest: "Australia has about 134 million hectares of forest, including unique eucalyptus forests found nowhere else on Earth.",
      co2: "Australia is one of the highest CO₂ emitters per person in the world, largely due to its coal-heavy energy grid.",
      happiness: "Australia ranks among the top 15 happiest countries in the world, known for its laid-back lifestyle and outdoor culture.",
      olympics: "Australia has won over 500 Olympic medals and punches well above its weight for a country of only 26 million people.",
      coastline: "Australia has the seventh longest coastline in the world — over 25,700 km of beaches, cliffs, and reefs.",
      literacy: "Australia has one of the highest literacy rates in the world, at about 99%.",
      biodiversity: "Australia is one of the world's 17 'megadiverse' countries — over 80% of its plants and animals are found nowhere else on Earth.",
      sunshine: "Australia is one of the sunniest countries on Earth, with some areas receiving over 3,000 hours of sunshine per year.",
      internet: "Australia has about 22 million internet users, with over 90% of the population connected online.",
      sharks: "Australia records more shark attacks than any other country in the world, thanks to its vast coastline and warm waters.",
      venomous: "Australia is home to more venomous species than any other country — including 20 of the world's 25 most dangerous snakes.",
      cricket: "Australia is ranked #2 in cricket and has won the men's Cricket World Cup five times — more than any other nation.",
      basketball: "Australia's Boomers are ranked #5 by FIBA and have produced many NBA stars, including Ben Simmons and Patty Mills.",
      cars: "Australia has the fifth most cars per capita in the world, with about 750 vehicles per 1,000 people.",
      lifeexpect: "Australians enjoy one of the longest life expectancies in the world, averaging about 83 years.",
      minerals: "Australia is the world's third largest producer of rare earth minerals and has enormous reserves of lithium and uranium.",
    }
  },
  {
    code: 'DE', name: 'Germany', flag: '🇩🇪',
    ranks: {
      population: 19, area: 63, gdp: 4, fifa: 13, forest: 22, peace: 20, co2: 7, happiness: 24, olympics: 4, spice: 30, coastline: 60, volcanoes: 50, literacy: 8, biodiversity: 40, sunshine: 70, internet: 11,
      basketball: 8, cricket: 100, coffee: 12, tourists: 8, mountain: 65, unesco: 3, cars: 8, temp: 105, lifeexpect: 12, sleep: 12, rainfall: 35, pizza: 4, skyscrapers: 12, tea: 15, youngpop: 50, fish: 35, military: 20, wind: 14, videogames: 9, satellites: 7, nobel: 3, sharks: 150, venomous: 65, mosquito: 35, gym: 7, minerals: 34, dogs: 9, smallarea: 148, smallpop: 96, smokers: 33, capital: 35,
      pollution: 44, desert: 66, fiveg: 10, houses: 11},
    facts: {
      population: "Germany is the most populous country in the European Union, with about 84 million people.",
      gdp: "Germany has the fourth largest economy in the world and is Europe's economic powerhouse.",
      fifa: "Germany has won the FIFA World Cup four times — in 1954, 1974, 1990, and 2014.",
      peace: "Germany ranks among the top 20 most peaceful nations, a remarkable achievement given its history in the 20th century.",
      co2: "Germany is the seventh largest CO₂ emitter in the world, though it has aggressively expanded wind and solar energy.",
      olympics: "Germany has won the fourth most Olympic medals in history, with over 1,300 total across Summer and Winter Games.",
      literacy: "Germany has one of the highest literacy rates in the world, with virtually 100% of adults able to read and write.",
      internet: "Germany has about 75 million internet users, making it one of the largest online populations in Europe.",
      basketball: "Germany is ranked #8 by FIBA and won the 2023 FIBA World Cup, with Dirk Nowitzki being one of the sport's all-time greats.",
      unesco: "Germany has 52 UNESCO World Heritage Sites — the third most in the world — including Cologne Cathedral and Bauhaus sites.",
      nobel: "Germany has produced the third most Nobel Prize winners in history, with particular strength in chemistry and physics.",
      coffee: "Germany is among the top 15 coffee-consuming nations per capita, with a strong café culture in cities like Berlin and Hamburg.",
      gym: "Germany has the seventh highest gym membership rate in the world, with over 11 million active members.",
    }
  },
  {
    code: 'FR', name: 'France', flag: '🇫🇷',
    ranks: {
      population: 21, area: 43, gdp: 7, fifa: 2, forest: 20, peace: 67, co2: 19, happiness: 30, olympics: 7, spice: 28, coastline: 28, volcanoes: 45, literacy: 11, biodiversity: 35, sunshine: 106, internet: 12,
      basketball: 3, cricket: 100, coffee: 20, tourists: 1, mountain: 20, unesco: 4, cars: 13, temp: 90, lifeexpect: 6, sleep: 7, rainfall: 30, pizza: 3, skyscrapers: 11, tea: 16, youngpop: 36, fish: 22, military: 19, wind: 15, videogames: 13, satellites: 8, nobel: 4, sharks: 6, venomous: 78, mosquito: 30, gym: 12, minerals: 35, dogs: 7, smallarea: 157, smallpop: 90, smokers: 26, capital: 20,
      pollution: 45, desert: 64, fiveg: 25, houses: 12},
    facts: {
      gdp: "France has the seventh largest economy in the world and is one of Europe's top industrial and agricultural nations.",
      fifa: "France has won the FIFA World Cup twice — in 1998 on home soil and again in 2018 in Russia.",
      forest: "About 30% of France is covered in forest, and the country has increased its woodland by nearly 50% since the 1950s.",
      co2: "France is one of the lower CO₂ emitters among major economies because about 70% of its electricity comes from nuclear power.",
      olympics: "France has won the seventh most Olympic medals in history and hosted the Games in Paris in both 1900 and 2024.",
      literacy: "France has one of the highest literacy rates in the world, with about 99% of adults able to read and write.",
      internet: "France has about 60 million internet users, with over 90% of the population connected online.",
      tourists: "France is the most visited country on Earth, welcoming over 90 million foreign tourists per year.",
      basketball: "France is ranked #3 by FIBA and won silver at the 2020 and 2024 Olympics, with Tony Parker and Rudy Gobert as global stars.",
      unesco: "France has 52 UNESCO World Heritage Sites, including Versailles, the banks of the Seine, and the prehistoric Vezere Valley.",
      nobel: "France has produced the fourth most Nobel Prize winners in history, with particular strength in literature and medicine.",
      lifeexpect: "France has one of the highest life expectancies in the world, averaging about 82 years, helped by the famous 'French paradox'.",
      sleep: "France ranks among the top 10 countries for sleep, with French workers averaging about 8.5 hours per night.",
    }
  },
  {
    code: 'JP', name: 'Japan', flag: '🇯🇵',
    ranks: {
      population: 11, area: 61, gdp: 3, fifa: 18, forest: 14, peace: 9, co2: 6, happiness: 51, olympics: 5, spice: 22, coastline: 6, volcanoes: 2, literacy: 4, biodiversity: 25, sunshine: 50, internet: 8,
      basketball: 50, cricket: 100, coffee: 97, tourists: 11, mountain: 16, unesco: 11, cars: 15, temp: 95, lifeexpect: 1, sleep: 4, rainfall: 14, pizza: 14, skyscrapers: 5, tea: 7, youngpop: 60, fish: 7, military: 18, wind: 17, videogames: 2, satellites: 5, nobel: 8, sharks: 13, venomous: 25, mosquito: 32, gym: 20, minerals: 15, dogs: 27, smallarea: 149, smallpop: 104, smokers: 27, capital: 8,
      pollution: 48, desert: 102, fiveg: 7, houses: 41},
    facts: {
      population: "Japan is the 11th most populous country in the world, with about 125 million people living mostly in coastal cities.",
      gdp: "Japan has the third largest economy in the world and is a global leader in technology and manufacturing.",
      fifa: "Japan has qualified for every FIFA World Cup since 1998 and reached the knockout rounds multiple times.",
      forest: "About 68% of Japan is covered in forest — an unusually high percentage for such a densely populated country.",
      peace: "Japan ranks in the top 10 most peaceful countries in the world and has had no military conflicts since World War II.",
      co2: "Japan is the sixth largest CO₂ emitter in the world, though it has set ambitious goals to reach carbon neutrality by 2050.",
      olympics: "Japan has won the fifth most Olympic medals in history and hosted the Games in Tokyo in both 1964 and 2021.",
      coastline: "Japan has the sixth longest coastline in the world — over 29,000 km across its more than 6,800 islands.",
      volcanoes: "Japan has the second most active volcanoes of any country — about 110 active volcanoes, including the famous Mount Fuji.",
      literacy: "Japan has one of the highest literacy rates in the world, at nearly 100%, and has maintained it for over a century.",
      internet: "Japan has about 100 million internet users and is known for some of the fastest and most reliable internet networks in the world.",
      lifeexpect: "Japan has the highest life expectancy in the world at around 84 years, attributed to diet, healthcare, and lifestyle.",
      videogames: "Japan is ranked #2 globally for video game culture per capita — the birthplace of Nintendo, Sony PlayStation, and countless iconic franchises.",
      sleep: "Japan ranks fourth for total sleep time but is famous for 'inemuri' — the culturally accepted practice of napping in public.",
      nobel: "Japan has won the eighth most Nobel Prizes, excelling in physics, chemistry, and medicine since the early 2000s.",
    }
  },
  {
    code: 'MX', name: 'Mexico', flag: '🇲🇽',
    ranks: {
      population: 10, area: 13, gdp: 15, fifa: 17, forest: 11, peace: 140, co2: 14, happiness: 36, olympics: 38, spice: 6, coastline: 9, volcanoes: 8, literacy: 62, biodiversity: 2, sunshine: 15, internet: 14,
      basketball: 40, cricket: 100, coffee: 45, tourists: 7, mountain: 14, unesco: 7, cars: 28, temp: 15, lifeexpect: 26, sleep: 45, rainfall: 13, pizza: 20, skyscrapers: 19, tea: 28, youngpop: 17, fish: 15, military: 16, wind: 32, videogames: 25, satellites: 16, nobel: 26, sharks: 10, venomous: 4, mosquito: 14, gym: 21, minerals: 11, dogs: 23, smallarea: 179, smallpop: 105, smokers: 70, capital: 10,
      pollution: 21, desert: 16, fiveg: 66, houses: 44},
    facts: {
      population: "Mexico is the tenth most populous country in the world, home to about 130 million people.",
      area: "Mexico is the 13th largest country in the world, spanning deserts, mountains, jungles, and two major coastlines.",
      gdp: "Mexico has the 15th largest economy in the world and is a major manufacturing hub, especially for cars and electronics.",
      fifa: "Mexico has qualified for the FIFA World Cup every time since 1994 and has advanced to the Round of 16 seven straight times.",
      forest: "Mexico is home to a wide variety of forests, from cloud forests to mangroves, covering about 33% of the country.",
      spice: "Mexico is the world's top producer of vanilla and a leading grower of chili peppers, jalapeños, and habaneros.",
      coastline: "Mexico has over 9,300 km of coastline on both the Pacific Ocean and the Gulf of Mexico.",
      volcanoes: "Mexico has eight active volcanoes, including Popocatépetl, which is one of the most active in North America.",
      biodiversity: "Mexico is the second most biodiverse country on Earth — it's one of only 17 'megadiverse' nations recognized by scientists.",
      sunshine: "Mexico is one of the sunniest countries in the world, with most regions enjoying over 2,500 hours of sunshine per year.",
      internet: "Mexico has about 95 million internet users, making it one of the largest online populations in Latin America.",
      tourists: "Mexico is the seventh most visited country in the world, drawing tens of millions with its beaches, ruins, and cuisine.",
      unesco: "Mexico has 35 UNESCO World Heritage Sites, including Teotihuacan, Chichen Itza, and the historic center of Mexico City.",
      temp: "Mexico has one of the highest average temperatures of any large country, with desert regions regularly exceeding 40°C.",
      venomous: "Mexico is home to a remarkable variety of venomous species, including the Gila monster, coral snakes, and many scorpion species.",
    }
  },
  {
    code: 'ID', name: 'Indonesia', flag: '🇮🇩',
    ranks: {
      population: 4, area: 14, gdp: 16, fifa: 130, forest: 6, peace: 46, co2: 8, happiness: 84, olympics: 78, spice: 2, coastline: 4, volcanoes: 1, literacy: 80, biodiversity: 4, sunshine: 20, internet: 4,
      basketball: 40, cricket: 100, coffee: 97, tourists: 17, mountain: 22, unesco: 30, cars: 50, temp: 11, lifeexpect: 40, sleep: 40, rainfall: 2, pizza: 40, skyscrapers: 7, tea: 9, youngpop: 11, fish: 2, military: 9, wind: 38, videogames: 33, satellites: 26, nobel: 48, sharks: 7, venomous: 5, mosquito: 5, gym: 40, minerals: 10, dogs: 36, smallarea: 178, smallpop: 114, smokers: 7, capital: 9,
      pollution: 10, desert: 112, fiveg: 64, houses: 65},
    facts: {
      population: "Indonesia is the fourth most populous country in the world, with over 275 million people across thousands of islands.",
      area: "Indonesia is the world's largest archipelago nation, stretching over 5,000 km from east to west.",
      gdp: "Indonesia has the 16th largest economy in the world and is the largest in Southeast Asia.",
      forest: "Indonesia has the sixth largest area of forest in the world, including some of Earth's oldest and most biodiverse rainforests.",
      co2: "Indonesia is the eighth largest CO₂ emitter, largely due to deforestation and its growing coal-powered energy sector.",
      spice: "Indonesia is the world's second largest spice producer — it's the original home of cloves, nutmeg, and black pepper.",
      coastline: "Indonesia has the fourth longest coastline in the world — over 54,000 km across more than 17,000 islands.",
      volcanoes: "Indonesia has more active volcanoes than any other country in the world — over 127 active ones.",
      biodiversity: "Indonesia is the fourth most biodiverse country on Earth, home to orangutans, Komodo dragons, and pygmy elephants.",
      sunshine: "Indonesia sits on the equator and receives strong sunshine year-round, supporting its lush tropical forests.",
      internet: "Indonesia has the fourth most internet users in the world, with over 200 million people online.",
      rainfall: "Indonesia is the second wettest large country in the world, receiving some of the highest annual rainfall on Earth.",
      fish: "Indonesia is the second largest fishing nation in the world, with its vast ocean territory yielding enormous catches each year.",
      temp: "Indonesia sits on the equator and maintains one of the highest average annual temperatures of any large country.",
      tea: "Indonesia is one of the world's top tea producers and consumers, with a tea-drinking tradition stretching back centuries.",
    }
  },
  {
    code: 'AR', name: 'Argentina', flag: '🇦🇷',
    ranks: {
      population: 33, area: 8, gdp: 27, fifa: 3, forest: 16, peace: 79, co2: 22, happiness: 52, olympics: 28, spice: 15, coastline: 16, volcanoes: 9, literacy: 38, biodiversity: 14, sunshine: 18, internet: 26,
      basketball: 4, cricket: 100, coffee: 97, tourists: 30, mountain: 6, unesco: 25, cars: 25, temp: 45, lifeexpect: 35, sleep: 15, rainfall: 22, pizza: 12, skyscrapers: 25, tea: 13, youngpop: 24, fish: 29, military: 26, wind: 12, videogames: 22, satellites: 14, nobel: 18, sharks: 150, venomous: 19, mosquito: 26, gym: 17, minerals: 12, dogs: 1, smallarea: 183, smallpop: 87, smokers: 32, capital: 12,
      pollution: 75, desert: 15, fiveg: 72, houses: 38},
    facts: {
      area: "Argentina is the eighth largest country in the world and the second largest in South America.",
      fifa: "Argentina has won the FIFA World Cup three times — in 1978, 1986, and 2022, the last led by Lionel Messi.",
      forest: "Argentina has about 27 million hectares of forest, including the dense subtropical forests of Misiones province.",
      spice: "Argentina is one of the world's top producers of paprika and dried chili, grown in its fertile northern regions.",
      coastline: "Argentina's Atlantic coastline stretches over 4,900 km, from the tropics all the way down toward Antarctica.",
      volcanoes: "Argentina shares the Andes mountain range with Chile and has nine active volcanoes, including Copahue and Lanín.",
      sunshine: "Northern Argentina receives over 3,000 hours of sunshine per year, making it one of the sunniest regions in South America.",
      basketball: "Argentina is ranked #4 by FIBA and won Olympic gold at Athens 2004 — the 'Golden Generation' is considered one of basketball's greatest teams.",
      mountain: "Argentina's Aconcagua at 6,961m is the highest peak in both the Western and Southern hemispheres.",
      dogs: "Argentina has the highest dog ownership rate in the world, with an estimated 80 dogs per 100 people.",
      tea: "Argentina is the world's largest producer and exporter of mate, the herbal tea that is a cultural institution in South America.",
    }
  },
  {
    code: 'ZA', name: 'South Africa', flag: '🇿🇦',
    ranks: {
      population: 25, area: 25, gdp: 34, fifa: 67, forest: 45, peace: 127, co2: 16, happiness: 91, olympics: 42, spice: 12, coastline: 23, volcanoes: 40, literacy: 70, biodiversity: 7, sunshine: 8, internet: 35,
      basketball: 60, cricket: 6, coffee: 97, tourists: 35, mountain: 45, unesco: 22, cars: 40, temp: 20, lifeexpect: 67, sleep: 35, rainfall: 16, pizza: 30, skyscrapers: 22, tea: 18, youngpop: 8, fish: 26, military: 30, wind: 23, videogames: 36, satellites: 25, nobel: 17, sharks: 3, venomous: 8, mosquito: 19, gym: 29, minerals: 8, dogs: 26, smallarea: 173, smallpop: 80, smokers: 85, capital: 50,
      pollution: 32, desert: 24, fiveg: 105, houses: 90},
    facts: {
      co2: "South Africa is the 16th largest CO₂ emitter in the world, mostly due to its heavy reliance on coal for electricity.",
      spice: "South Africa is a major producer of rooibos tea and various spices, and its Cape Malay cuisine is famous for its blends.",
      biodiversity: "South Africa is the seventh most biodiverse country on Earth, home to the Big Five: lions, elephants, rhinos, leopards, and buffalos.",
      sunshine: "South Africa is one of the sunniest countries in the world, receiving over 2,500 hours of sunshine per year in most regions.",
      sharks: "South Africa ranks third in the world for shark attacks, with the coastlines near Cape Town and KwaZulu-Natal being particularly active.",
      youngpop: "South Africa has one of the youngest populations of any large country, with a median age of about 28 years.",
      nobel: "South Africa has produced Nobel Prize winners including Nelson Mandela and Desmond Tutu, among others.",
    }
  },
  {
    code: 'NG', name: 'Nigeria', flag: '🇳🇬',
    ranks: {
      population: 6, area: 32, gdp: 28, fifa: 40, forest: 28, peace: 148, co2: 24, happiness: 95, olympics: 60, spice: 9, coastline: 50, volcanoes: 70, literacy: 115, biodiversity: 18, sunshine: 22, internet: 7,
      basketball: 18, cricket: 100, coffee: 97, tourists: 50, mountain: 60, unesco: 35, cars: 80, temp: 5, lifeexpect: 80, sleep: 50, rainfall: 7, pizza: 45, skyscrapers: 35, tea: 25, youngpop: 3, fish: 19, military: 15, wind: 35, videogames: 50, satellites: 31, nobel: 35, sharks: 33, venomous: 14, mosquito: 1, gym: 50, minerals: 17, dogs: 45, smallarea: 168, smallpop: 112, smokers: 118, capital: 45,
      pollution: 11, desert: 28, fiveg: 102, houses: 100},
    facts: {
      population: "Nigeria is Africa's most populous country, home to over 220 million people and growing fast.",
      spice: "Nigeria is one of Africa's top spice producers, growing large quantities of chili peppers, ginger, and sesame seeds.",
      biodiversity: "Nigeria has a wide range of ecosystems from rainforest to savanna, supporting over 900 bird species and many rare mammals.",
      internet: "Nigeria has the seventh most internet users in the world — over 100 million Nigerians are online, the most in Africa.",
      mosquito: "Nigeria has the world's highest mosquito-borne disease burden, accounting for a significant share of global malaria cases.",
      youngpop: "Nigeria has the third youngest population in the world by median age — about half its population is under 19 years old.",
      temp: "Nigeria is one of the hottest countries in the world, with average annual temperatures exceeding 28°C in most regions.",
    }
  },
  {
    code: 'EG', name: 'Egypt', flag: '🇪🇬',
    ranks: {
      population: 15, area: 30, gdp: 38, fifa: 53, forest: 90, peace: 100, co2: 28, happiness: 105, olympics: 72, spice: 11, coastline: 45, volcanoes: 48, literacy: 85, biodiversity: 50, sunshine: 2, internet: 24,
      basketball: 45, cricket: 100, coffee: 97, tourists: 22, mountain: 38, unesco: 29, cars: 48, temp: 7, lifeexpect: 42, sleep: 42, rainfall: 130, pizza: 35, skyscrapers: 32, tea: 8, youngpop: 18, fish: 25, military: 8, wind: 32, videogames: 42, satellites: 32, nobel: 28, sharks: 40, venomous: 21, mosquito: 17, gym: 42, minerals: 21, dogs: 48, smallarea: 170, smallpop: 101, smokers: 40, capital: 8,
      pollution: 9, desert: 2, fiveg: 78, houses: 58},
    facts: {
      population: "Egypt is the most populous country in Africa and the Arab world, with about 105 million people.",
      spice: "Egypt is one of the world's top producers of cumin, coriander, and fenugreek, spices used across the Middle East and beyond.",
      sunshine: "Egypt is one of the sunniest countries on Earth, with some areas receiving over 4,000 hours of sunshine per year.",
      tea: "Egypt is the eighth largest tea-consuming nation — black tea with sugar is the national drink, consumed throughout the day.",
      military: "Egypt has the eighth largest active military in the world, a significant force in the Middle East and Africa.",
      temp: "Egypt is one of the hottest countries on Earth, with the Sahara Desert driving average temperatures well above 30°C.",
    }
  },
  {
    code: 'NO', name: 'Norway', flag: '🇳🇴',
    ranks: {
      population: 118, area: 67, gdp: 30, fifa: 85, forest: 35, peace: 17, co2: 50, happiness: 7, olympics: 14, spice: 108, coastline: 5, volcanoes: 38, literacy: 3, biodiversity: 86, sunshine: 80, internet: 30,
      basketball: 114, cricket: 100, coffee: 3, tourists: 40, mountain: 11, unesco: 20, cars: 11, temp: 130, lifeexpect: 8, sleep: 8, rainfall: 19, pizza: 18, skyscrapers: 50, tea: 50, youngpop: 40, fish: 9, military: 45, wind: 4, videogames: 7, satellites: 19, nobel: 11, sharks: 22, venomous: 150, mosquito: 70, gym: 4, minerals: 27, dogs: 12, smallarea: 149, smallpop: 52, smokers: 82, capital: 110,
      pollution: 69, desert: 142, fiveg: 15, houses: 6},
    facts: {
      peace: "Norway consistently ranks among the top 20 most peaceful countries in the world.",
      happiness: "Norway is one of the happiest countries on Earth, regularly ranking in the top 10 thanks to high incomes, social trust, and stunning nature.",
      olympics: "Norway is the most decorated Winter Olympics nation ever, winning more medals than any other country in Winter Games history.",
      coastline: "Norway has the fifth longest coastline in the world — over 25,000 km, thanks to its deeply carved fjords and thousands of islands.",
      literacy: "Norway has one of the highest literacy rates in the world, with virtually 100% of its population able to read and write.",
      coffee: "Norway is the third largest coffee-consuming nation per capita, drinking about 9.9 kg per person per year.",
      fish: "Norway is the ninth largest fishing nation in the world and the world's largest exporter of Atlantic salmon.",
      wind: "Norway is one of the windiest countries on Earth, making it a global leader in offshore wind energy production.",
      gym: "Norway has the fourth highest gym membership rate in the world, with fitness culture deeply woven into daily life.",
      sleep: "Norway ranks eighth globally for average sleep per night, with long winter nights contributing to healthy sleep habits.",
    }
  },
  {
    code: 'FI', name: 'Finland', flag: '🇫🇮',
    ranks: {
      population: 115, area: 64, gdp: 45, fifa: 75, forest: 25, peace: 13, co2: 52, happiness: 1, olympics: 33, spice: 65, coastline: 12, volcanoes: 60, literacy: 1, biodiversity: 62, sunshine: 85, internet: 35,
      basketball: 114, cricket: 100, coffee: 1, tourists: 34, mountain: 90, unesco: 34, cars: 10, temp: 135, lifeexpect: 13, sleep: 20, rainfall: 42, pizza: 89, skyscrapers: 106, tea: 107, youngpop: 50, fish: 48, military: 42, wind: 9, videogames: 5, satellites: 22, nobel: 15, sharks: 150, venomous: 150, mosquito: 68, gym: 8, minerals: 39, dogs: 11, smallarea: 147, smallpop: 53, smokers: 90, capital: 118,
      pollution: 67, desert: 140, fiveg: 14, houses: 15},
    facts: {
      peace: "Finland ranks among the top 15 most peaceful countries in the world.",
      happiness: "Finland has been ranked the happiest country in the world for seven years in a row, according to the World Happiness Report.",
      coastline: "Finland has the 12th longest coastline in the world, with over 1,200 islands in its southwestern archipelago alone.",
      literacy: "Finland has the highest literacy rate in the world — nearly 100% — and its education system is famous globally.",
      coffee: "Finland is the world's top coffee-consuming nation per capita, drinking about 12 kg of coffee per person per year.",
      videogames: "Finland is ranked #5 globally for video gaming per capita and is home to Supercell (Clash of Clans) and Rovio (Angry Birds).",
      gym: "Finland ranks eighth globally for gym membership per capita, with a strong culture of physical activity and wellbeing.",
      cars: "Finland has the tenth most cars per capita in the world, reflecting its high standard of living and dispersed population.",
    }
  },
  {
    code: 'IS', name: 'Iceland', flag: '🇮🇸',
    ranks: {
      population: 177, area: 108, gdp: 95, fifa: 72, forest: 95, peace: 1, co2: 80, happiness: 3, olympics: 102, spice: 80, coastline: 30, volcanoes: 6, literacy: 2, biodiversity: 78, sunshine: 90, internet: 22,
      basketball: 114, cricket: 100, coffee: 45, tourists: 38, mountain: 48, unesco: 104, cars: 50, temp: 145, lifeexpect: 14, sleep: 48, rainfall: 29, pizza: 89, skyscrapers: 80, tea: 60, youngpop: 45, fish: 40, military: 100, wind: 1, videogames: 16, satellites: 50, nobel: 29, sharks: 30, venomous: 150, mosquito: 80, gym: 12, minerals: 50, dogs: 29, smallarea: 81, smallpop: 18, smokers: 88, capital: 145,
      pollution: 70, desert: 145, fiveg: 67, houses: 28},
    facts: {
      peace: "Iceland is ranked the most peaceful country in the world and has had no military since 1869.",
      happiness: "Iceland is one of the top three happiest countries in the world, with strong community ties and stunning natural landscapes.",
      volcanoes: "Iceland has the sixth most active volcanoes of any country — it sits on the Mid-Atlantic Ridge where two tectonic plates meet.",
      literacy: "Iceland has the second highest literacy rate in the world, with essentially 100% of its population able to read and write.",
      wind: "Iceland is the windiest country on Earth, with powerful Atlantic gales making it a pioneer in geothermal and wind energy.",
      videogames: "Iceland ranks 16th globally for video game engagement per capita, an impressive figure for a country of only 370,000 people.",
    }
  },
  {
    code: 'NZ', name: 'New Zealand', flag: '🇳🇿',
    ranks: {
      population: 122, area: 75, gdp: 52, fifa: 96, forest: 42, peace: 2, co2: 60, happiness: 10, olympics: 36, spice: 60, coastline: 10, volcanoes: 11, literacy: 6, biodiversity: 20, sunshine: 28, internet: 42,
      basketball: 12, cricket: 5, coffee: 97, tourists: 40, mountain: 13, unesco: 38, cars: 3, temp: 98, lifeexpect: 9, sleep: 48, rainfall: 38, pizza: 89, skyscrapers: 42, tea: 107, youngpop: 35, fish: 34, military: 50, wind: 3, videogames: 14, satellites: 21, nobel: 21, sharks: 5, venomous: 40, mosquito: 60, gym: 10, minerals: 42, dogs: 5, smallarea: 141, smallpop: 50, smokers: 92, capital: 140,
      pollution: 71, desert: 148, fiveg: 24, houses: 4},
    facts: {
      peace: "New Zealand is ranked the second most peaceful country in the world.",
      happiness: "New Zealand is one of the top 10 happiest countries on Earth, known for its natural beauty, safety, and quality of life.",
      coastline: "New Zealand has the tenth longest coastline in the world — over 15,000 km for a country of only 5 million people.",
      volcanoes: "New Zealand has 11 active volcanoes, sitting on the Pacific Ring of Fire where tectonic plates collide.",
      literacy: "New Zealand has one of the highest literacy rates in the world, with about 99% of adults able to read and write.",
      biodiversity: "New Zealand has 20th most biodiversity in the world and is home to the kiwi, tuatara, and kakapo — all found nowhere else on Earth.",
      cricket: "New Zealand is ranked #5 in cricket and has been one of the most consistent Test match nations over the past decade.",
      cars: "New Zealand has the third most cars per capita in the world, with about 860 vehicles per 1,000 people.",
      wind: "New Zealand is the third windiest country on Earth — the 'Roaring Forties' winds batter its South Island year-round.",
      sharks: "New Zealand ranks fifth in the world for shark attacks, with great white sharks patrolling its cool southern waters.",
    }
  },
  {
    code: 'GB', name: 'United Kingdom', flag: '🇬🇧',
    ranks: {
      population: 22, area: 78, gdp: 6, fifa: 5, forest: 48, peace: 33, co2: 17, happiness: 20, olympics: 3, spice: 32, coastline: 18, volcanoes: 52, literacy: 9, biodiversity: 45, sunshine: 78, internet: 18,
      basketball: 50, cricket: 3, coffee: 97, tourists: 10, mountain: 65, unesco: 8, cars: 14, temp: 110, lifeexpect: 16, sleep: 9, rainfall: 25, pizza: 5, skyscrapers: 8, tea: 5, youngpop: 38, fish: 18, military: 21, wind: 2, videogames: 10, satellites: 4, nobel: 2, sharks: 17, venomous: 60, mosquito: 38, gym: 6, minerals: 36, dogs: 8, smallarea: 100, smallpop: 88, smokers: 58, capital: 14,
      pollution: 49, desert: 100, fiveg: 9, houses: 16},
    facts: {
      gdp: "The UK has the sixth largest economy in the world and is a global center for finance, with London as one of the world's top cities.",
      fifa: "England invented the modern game of soccer in 1863 and the English Premier League is the most watched football league on Earth.",
      co2: "The UK is the 17th largest CO₂ emitter in the world but has made major progress — coal power has nearly been eliminated.",
      happiness: "The UK ranks in the top 20 happiest countries in the world.",
      olympics: "The UK has won the third most Olympic medals in history, behind only the US and the former Soviet Union.",
      coastline: "No point in the UK is more than 113 km from the sea, and its coastline stretches over 12,400 km.",
      literacy: "The UK has one of the highest literacy rates in the world, with about 99% of adults able to read and write.",
      internet: "The UK has about 65 million internet users, with over 95% of the population connected online.",
      cricket: "England (UK) is ranked #3 in cricket and is the birthplace of the sport — the Ashes rivalry with Australia is the oldest in cricket.",
      tea: "The UK is the fifth largest tea-consuming nation per capita — the British tea-drinking tradition dates back to the 17th century.",
      nobel: "The UK has produced the second most Nobel Prize winners in history, with particular strength in physics, chemistry, and literature.",
      wind: "The UK is the second windiest country on Earth and is the world's largest producer of offshore wind power.",
      skyscrapers: "London has the eighth most skyscrapers of any city, with the Square Mile and Canary Wharf defining its modern skyline.",
      tourists: "The UK is the tenth most visited country in the world, with London, Edinburgh, and the English countryside drawing millions annually.",
    }
  },
  {
    code: 'IT', name: 'Italy', flag: '🇮🇹',
    ranks: {
      population: 24, area: 71, gdp: 8, fifa: 8, forest: 38, peace: 38, co2: 20, happiness: 33, olympics: 9, spice: 24, coastline: 22, volcanoes: 14, literacy: 14, biodiversity: 32, sunshine: 38, internet: 23,
      basketball: 17, cricket: 100, coffee: 13, tourists: 5, mountain: 15, unesco: 1, cars: 7, temp: 62, lifeexpect: 4, sleep: 17, rainfall: 32, pizza: 1, skyscrapers: 24, tea: 107, youngpop: 65, fish: 28, military: 22, wind: 27, videogames: 18, satellites: 11, nobel: 12, sharks: 14, venomous: 45, mosquito: 21, gym: 14, minerals: 33, dogs: 16, smallarea: 145, smallpop: 89, smokers: 30, capital: 18,
      pollution: 39, desert: 52, fiveg: 27, houses: 20},
    facts: {
      gdp: "Italy has the eighth largest economy in the world and is known for its luxury fashion, design, and food industries.",
      fifa: "Italy has won the FIFA World Cup four times — in 1934, 1938, 1982, and 2006.",
      olympics: "Italy has won the ninth most Olympic medals in history and hosted the Games in Rome (1960) and Turin (2006).",
      volcanoes: "Italy has 14 active volcanoes, including Vesuvius, Etna, and Stromboli — some of Europe's most famous.",
      literacy: "Italy has one of the highest literacy rates in the world, with about 99% of adults able to read and write.",
      unesco: "Italy has 58 UNESCO World Heritage Sites — the most of any country in the world — reflecting its extraordinary cultural and natural heritage.",
      pizza: "Italy is ranked #1 for pizza and pasta consumption — the foods were born here and remain central to daily Italian life.",
      tourists: "Italy is the fifth most visited country in the world, drawing visitors to Rome, Florence, Venice, and the Amalfi Coast.",
      cars: "Italy has the seventh most cars per capita in the world, home to Ferrari, Lamborghini, and Fiat.",
      lifeexpect: "Italy has the fourth highest life expectancy in the world at about 83 years, with the Mediterranean diet playing a key role.",
      coffee: "Italy is famous for espresso culture — coffee is drunk standing at the bar, and baristas here are considered true artisans.",
    }
  },
  {
    code: 'ES', name: 'Spain', flag: '🇪🇸',
    ranks: {
      population: 29, area: 51, gdp: 14, fifa: 7, forest: 30, peace: 31, co2: 21, happiness: 32, olympics: 17, spice: 16, coastline: 26, volcanoes: 22, literacy: 13, biodiversity: 28, sunshine: 30, internet: 27,
      basketball: 2, cricket: 100, coffee: 97, tourists: 2, mountain: 30, unesco: 5, cars: 17, temp: 50, lifeexpect: 3, sleep: 19, rainfall: 38, pizza: 8, skyscrapers: 23, tea: 107, youngpop: 110, fish: 23, military: 25, wind: 26, videogames: 17, satellites: 12, nobel: 22, sharks: 18, venomous: 48, mosquito: 25, gym: 13, minerals: 32, dogs: 17, smallarea: 156, smallpop: 87, smokers: 31, capital: 25,
      pollution: 46, desert: 45, fiveg: 26, houses: 21},
    facts: {
      gdp: "Spain has the 14th largest economy in the world and is Europe's second most popular tourist destination.",
      fifa: "Spain dominated world soccer from 2008 to 2012, winning the World Cup once and the European Championship twice in a row.",
      olympics: "Spain has won the 17th most Olympic medals in history and hosted the Summer Games in Barcelona in 1992.",
      spice: "Spain is the world's largest producer of saffron and paprika, key ingredients in traditional Spanish cuisine.",
      literacy: "Spain has one of the highest literacy rates in the world, with about 98% of adults able to read and write.",
      basketball: "Spain is ranked #2 by FIBA — Pau Gasol and Marc Gasol helped Spain win two Olympic silvers and multiple FIBA World Cups.",
      tourists: "Spain is the second most visited country in the world, welcoming over 83 million tourists per year.",
      unesco: "Spain has 50 UNESCO World Heritage Sites, the fifth most in the world, including the Alhambra and Gaudi's Sagrada Familia.",
      lifeexpect: "Spain has the third highest life expectancy in the world at about 83 years, attributed to the Mediterranean diet and climate.",
    }
  },
  {
    code: 'KR', name: 'South Korea', flag: '🇰🇷',
    ranks: {
      population: 27, area: 107, gdp: 13, fifa: 22, forest: 40, peace: 48, co2: 9, happiness: 57, olympics: 10, spice: 20, coastline: 35, volcanoes: 28, literacy: 7, biodiversity: 42, sunshine: 65, internet: 9,
      basketball: 20, cricket: 100, coffee: 97, tourists: 25, mountain: 45, unesco: 18, cars: 18, temp: 75, lifeexpect: 7, sleep: 13, rainfall: 38, pizza: 15, skyscrapers: 4, tea: 107, youngpop: 110, fish: 14, military: 6, wind: 19, videogames: 1, satellites: 10, nobel: 24, sharks: 26, venomous: 78, mosquito: 33, gym: 19, minerals: 16, dogs: 28, smallarea: 80, smallpop: 89, smokers: 24, capital: 9,
      pollution: 50, desert: 105, fiveg: 2, houses: 40},
    facts: {
      gdp: "South Korea has the 13th largest economy in the world — it went from one of the poorest countries in 1960 to a high-tech powerhouse today.",
      co2: "South Korea is the ninth largest CO₂ emitter in the world and is working to shift away from coal toward renewable energy.",
      olympics: "South Korea has won the tenth most Olympic medals in history and hosted the Summer Games in Seoul in 1988 and the Winter Games in 2018.",
      spice: "South Korea is one of the world's top producers of chili peppers, a key ingredient in its famous kimchi.",
      literacy: "South Korea has one of the highest literacy rates in the world, at about 99%, and is famous for its rigorous education system.",
      internet: "South Korea has some of the world's fastest internet speeds and about 97% of the population is online.",
      videogames: "South Korea is ranked #1 in the world for video game culture per capita — esports are treated like professional sports with massive stadiums.",
      skyscrapers: "South Korea has the fourth most skyscrapers in the world, with Seoul's skyline featuring dozens of supertall towers.",
      military: "South Korea has the sixth largest active military in the world, with nearly 600,000 troops and mandatory military service for men.",
    }
  },
  {
    code: 'TR', name: 'Turkey', flag: '🇹🇷',
    ranks: {
      population: 18, area: 37, gdp: 17, fifa: 28, forest: 32, peace: 144, co2: 18, happiness: 98, olympics: 45, spice: 7, coastline: 14, volcanoes: 20, literacy: 52, biodiversity: 22, sunshine: 32, internet: 17,
      basketball: 22, cricket: 100, coffee: 97, tourists: 6, mountain: 28, unesco: 14, cars: 25, temp: 45, lifeexpect: 40, sleep: 40, rainfall: 28, pizza: 23, skyscrapers: 20, tea: 3, youngpop: 22, fish: 27, military: 13, wind: 24, videogames: 27, satellites: 23, nobel: 30, sharks: 37, venomous: 22, mosquito: 24, gym: 22, minerals: 22, dogs: 25, smallarea: 155, smallpop: 96, smokers: 8, capital: 28,
      pollution: 23, desert: 38, fiveg: 48, houses: 56},
    facts: {
      population: "Turkey is the 18th most populous country in the world, with about 85 million people bridging Europe and Asia.",
      gdp: "Turkey has the 17th largest economy in the world and is a major producer of cars, textiles, and agricultural products.",
      co2: "Turkey is the 18th largest CO₂ emitter in the world and has been rapidly expanding its renewable energy capacity.",
      spice: "Turkey is one of the world's top producers of hazelnuts, figs, apricots, and spices like red pepper flakes.",
      coastline: "Turkey has over 7,200 km of coastline on the Black Sea, Aegean Sea, and Mediterranean Sea.",
      volcanoes: "Turkey has about 20 volcanic areas, including Mount Ararat, the country's highest peak at over 5,100 meters.",
      internet: "Turkey has about 70 million internet users, making it one of the most connected countries in its region.",
      tea: "Turkey is the third largest tea-consuming nation per capita — Turks drink about 3.5 kg of tea per person per year, more than any other nation.",
      tourists: "Turkey is the sixth most visited country in the world, drawing tens of millions to Istanbul, Cappadocia, and the Aegean coast.",
      unesco: "Turkey has 21 UNESCO World Heritage Sites, including the historic areas of Istanbul and the rock sites of Cappadocia.",
    }
  },
  {
    code: 'SA', name: 'Saudi Arabia', flag: '🇸🇦',
    ranks: {
      population: 40, area: 12, gdp: 18, fifa: 58, forest: 100, peace: 122, co2: 12, happiness: 30, olympics: 88, spice: 35, coastline: 38, volcanoes: 32, literacy: 58, biodiversity: 60, sunshine: 6, internet: 36,
      basketball: 45, cricket: 100, coffee: 97, tourists: 28, mountain: 42, unesco: 40, cars: 38, temp: 3, lifeexpect: 38, sleep: 42, rainfall: 140, pizza: 38, skyscrapers: 15, tea: 107, youngpop: 28, fish: 38, military: 7, wind: 40, videogames: 38, satellites: 24, nobel: 50, sharks: 38, venomous: 23, mosquito: 40, gym: 38, minerals: 26, dogs: 49, smallarea: 180, smallpop: 82, smokers: 44, capital: 30,
      pollution: 5, desert: 3, fiveg: 52, houses: 59},
    facts: {
      area: "Saudi Arabia is the 12th largest country in the world and covers about 80% of the Arabian Peninsula.",
      gdp: "Saudi Arabia has the 18th largest economy in the world, powered by the world's second largest proven oil reserves.",
      co2: "Saudi Arabia is the 12th largest CO₂ emitter in the world, almost entirely due to its massive oil production and export industry.",
      sunshine: "Saudi Arabia is one of the sunniest countries on Earth, receiving over 3,000 hours of sunshine per year across its vast desert landscape.",
      temp: "Saudi Arabia is one of the hottest countries on Earth, with summer temperatures regularly exceeding 45°C in the Empty Quarter desert.",
      military: "Saudi Arabia has one of the largest active military forces in the Middle East, with over 200,000 active-duty personnel.",
      skyscrapers: "Saudi Arabia has the 15th most skyscrapers in the world, with the Jeddah Tower under construction set to be the tallest building on Earth.",
    }
  },
  {
    code: 'PK', name: 'Pakistan', flag: '🇵🇰',
    ranks: {
      population: 5, area: 33, gdp: 24, fifa: 200, forest: 90, peace: 150, co2: 26, happiness: 108, olympics: 66, spice: 8, coastline: 81, volcanoes: 45, literacy: 120, biodiversity: 17, sunshine: 25, internet: 10,
      basketball: 114, cricket: 4, coffee: 97, tourists: 105, mountain: 3, unesco: 42, cars: 98, temp: 25, lifeexpect: 67, sleep: 5, rainfall: 52, pizza: 89, skyscrapers: 36, tea: 6, youngpop: 13, fish: 32, military: 6, wind: 42, videogames: 94, satellites: 29, nobel: 45, sharks: 150, venomous: 20, mosquito: 16, gym: 58, minerals: 24, dogs: 41, smallarea: 160, smallpop: 112, smokers: 62, capital: 42,
      pollution: 2, desert: 19, fiveg: 88, houses: 76},
    facts: {
      population: "Pakistan is the fifth most populous country in the world, with over 230 million people.",
      spice: "Pakistan is one of the world's top producers of chili peppers and ginger, key ingredients in South Asian cooking.",
      biodiversity: "Pakistan is home to snow leopards, Marco Polo sheep, and the critically endangered Indus river dolphin.",
      internet: "Pakistan has the tenth most internet users in the world, with over 110 million people online.",
      cricket: "Pakistan is ranked #4 in cricket and has produced some of the sport's greatest players, including Imran Khan and Wasim Akram.",
      mountain: "Pakistan contains K2, the world's second highest peak at 8,611m — considered by mountaineers to be the hardest 8,000m peak to climb.",
      tea: "Pakistan is the sixth largest tea-consuming nation, with chai (spiced milk tea) being the national drink served everywhere.",
      sleep: "Pakistan ranks among the top countries for sleep duration, with an average of about 7.7 hours per night.",
      military: "Pakistan has the sixth largest active military in the world, with about 650,000 active-duty personnel.",
    }
  },
  {
    code: 'BD', name: 'Bangladesh', flag: '🇧🇩',
    ranks: {
      population: 8, area: 93, gdp: 33, fifa: 184, forest: 75, peace: 88, co2: 32, happiness: 118, olympics: 110, spice: 14, coastline: 48, volcanoes: 65, literacy: 92, biodiversity: 30, sunshine: 35, internet: 15,
      basketball: 114, cricket: 7, coffee: 97, tourists: 105, mountain: 79, unesco: 42, cars: 90, temp: 14, lifeexpect: 48, sleep: 2, rainfall: 6, pizza: 89, skyscrapers: 38, tea: 10, youngpop: 9, fish: 10, military: 17, wind: 45, videogames: 60, satellites: 30, nobel: 50, sharks: 35, venomous: 17, mosquito: 7, gym: 60, minerals: 30, dogs: 40, smallarea: 86, smallpop: 110, smokers: 22, capital: 6,
      pollution: 1, desert: 118, fiveg: 98, houses: 75},
    facts: {
      population: "Bangladesh is the eighth most populous country in the world, with over 170 million people packed into a country roughly the size of Iowa.",
      spice: "Bangladesh is a significant producer of chili peppers, turmeric, and mustard, essential to its rich culinary traditions.",
      internet: "Bangladesh has the 15th most internet users in the world, with over 120 million people online.",
      cricket: "Bangladesh is ranked #7 in cricket and upset several major nations to establish itself as a competitive Test-playing country.",
      sleep: "Bangladesh averages the second most sleep per night of any studied country, roughly 7.8 hours — in contrast to its neighbor India.",
      rainfall: "Bangladesh is the sixth wettest country in the world, regularly battered by monsoon rains and receiving over 2,600mm annually.",
      tea: "Bangladesh is the tenth largest tea-consuming nation and one of the world's leading tea producers, grown in its hill regions.",
      temp: "Bangladesh has one of the highest average temperatures of any populous nation, with humidity making it feel even hotter.",
    }
  },
  {
    code: 'PH', name: 'Philippines', flag: '🇵🇭',
    ranks: {
      population: 14, area: 73, gdp: 32, fifa: 147, forest: 36, peace: 119, co2: 30, happiness: 52, olympics: 80, spice: 13, coastline: 5, volcanoes: 7, literacy: 25, biodiversity: 10, sunshine: 22, internet: 28,
      basketball: 16, cricket: 100, coffee: 97, tourists: 38, mountain: 25, unesco: 38, cars: 98, temp: 13, lifeexpect: 50, sleep: 40, rainfall: 3, pizza: 89, skyscrapers: 16, tea: 107, youngpop: 10, fish: 12, military: 16, wind: 36, videogames: 26, satellites: 36, nobel: 110, sharks: 8, venomous: 10, mosquito: 8, gym: 45, minerals: 25, dogs: 32, smallarea: 120, smallpop: 102, smokers: 19, capital: 11,
      pollution: 19, desert: 108, fiveg: 60, houses: 66},
    facts: {
      population: "The Philippines is the 14th most populous country in the world, home to over 115 million people across 7,600 islands.",
      coastline: "The Philippines has the fifth longest coastline in the world — over 36,000 km across its more than 7,600 islands.",
      volcanoes: "The Philippines has the seventh most active volcanoes in the world, including Mayon, known for its near-perfect cone shape.",
      spice: "The Philippines is a major producer of coconut, black pepper, and other tropical spices and flavors.",
      biodiversity: "The Philippines is the tenth most biodiverse country on Earth — its waters alone contain about 30% of the world's coral reef fish.",
      basketball: "The Philippines is the #16 ranked basketball nation — the sport is an obsession here, played on courts in every barangay.",
      rainfall: "The Philippines is the third wettest country in the world, regularly struck by typhoons that bring extreme rainfall.",
      temp: "The Philippines has one of the highest average annual temperatures of any island nation, sitting close to the equator.",
      sharks: "The Philippines ranks eighth in the world for shark attacks, with its warm, extensive coastal waters hosting large shark populations.",
      venomous: "The Philippines has the tenth most venomous species in the world, including sea snakes, cone snails, and box jellyfish.",
    }
  },
  {
    code: 'VN', name: 'Vietnam', flag: '🇻🇳',
    ranks: {
      population: 16, area: 65, gdp: 40, fifa: 95, forest: 30, peace: 44, co2: 25, happiness: 65, olympics: 90, spice: 10, coastline: 16, volcanoes: 30, literacy: 32, biodiversity: 16, sunshine: 28, internet: 22,
      basketball: 114, cricket: 100, coffee: 45, tourists: 28, mountain: 20, unesco: 31, cars: 98, temp: 12, lifeexpect: 40, sleep: 40, rainfall: 5, pizza: 89, skyscrapers: 17, tea: 22, youngpop: 14, fish: 4, military: 7, wind: 40, videogames: 29, satellites: 28, nobel: 58, sharks: 19, venomous: 9, mosquito: 9, gym: 38, minerals: 9, dogs: 37, smallarea: 140, smallpop: 100, smokers: 20, capital: 32,
      pollution: 15, desert: 110, fiveg: 62, houses: 67},
    facts: {
      population: "Vietnam is the 16th most populous country in the world, with about 98 million people.",
      spice: "Vietnam is the world's largest exporter of black pepper, producing about 30% of the world's supply.",
      coastline: "Vietnam has a 3,260 km coastline along the South China Sea, with thousands of islands and some of the world's most beautiful bays.",
      fish: "Vietnam is the fourth largest fishing nation in the world, with both ocean fishing and extensive freshwater aquaculture.",
      rainfall: "Vietnam is the fifth wettest country in the world, with the Mekong Delta and central highlands receiving enormous amounts of rain.",
      temp: "Vietnam has one of the highest average temperatures of any large country, with the south staying hot and humid year-round.",
      military: "Vietnam has one of the world's largest active militaries — the People's Army of Vietnam maintains about 500,000 troops.",
      minerals: "Vietnam has significant deposits of rare earth elements and is among the top 10 globally for rare earth reserves.",
    }
  },
  {
    code: 'TH', name: 'Thailand', flag: '🇹🇭',
    ranks: {
      population: 20, area: 50, gdp: 26, fifa: 111, forest: 27, peace: 117, co2: 23, happiness: 60, olympics: 62, spice: 17, coastline: 24, volcanoes: 38, literacy: 30, biodiversity: 12, sunshine: 24, internet: 25,
      basketball: 45, cricket: 100, coffee: 97, tourists: 9, mountain: 32, unesco: 32, cars: 42, temp: 10, lifeexpect: 42, sleep: 40, rainfall: 8, pizza: 38, skyscrapers: 18, tea: 23, youngpop: 25, fish: 13, military: 12, wind: 42, videogames: 32, satellites: 27, nobel: 52, sharks: 12, venomous: 18, mosquito: 10, gym: 32, minerals: 28, dogs: 33, smallarea: 138, smallpop: 89, smokers: 25, capital: 15,
      pollution: 16, desert: 115, fiveg: 50, houses: 68},
    facts: {
      population: "Thailand is the 20th most populous country in the world, with about 70 million people.",
      spice: "Thailand is one of the world's top producers of chili peppers, ginger, and lemongrass — key ingredients in Thai cooking.",
      biodiversity: "Thailand is the 12th most biodiverse country on Earth, home to elephants, tigers, gibbons, and the world's largest fish — the whale shark.",
      tourists: "Thailand is the ninth most visited country in the world, famous for its temples, beaches, and street food.",
      temp: "Thailand has one of the highest average annual temperatures of any country, with tropical heat year-round.",
      rainfall: "Thailand receives some of the highest annual rainfall in Asia, particularly in its southern peninsula during monsoon season.",
      fish: "Thailand is the 13th largest fishing nation in the world and a major exporter of canned tuna and shrimp.",
    }
  },
  {
    code: 'CL', name: 'Chile', flag: '🇨🇱',
    ranks: {
      population: 64, area: 38, gdp: 44, fifa: 45, forest: 28, peace: 72, co2: 42, happiness: 42, olympics: 58, spice: 25, coastline: 15, volcanoes: 4, literacy: 22, biodiversity: 24, sunshine: 12, internet: 44,
      basketball: 45, cricket: 100, coffee: 97, tourists: 38, mountain: 9, unesco: 40, cars: 35, temp: 60, lifeexpect: 22, sleep: 40, rainfall: 24, pizza: 89, skyscrapers: 43, tea: 107, youngpop: 45, fish: 11, military: 30, wind: 13, videogames: 35, satellites: 34, nobel: 32, sharks: 21, venomous: 40, mosquito: 27, gym: 27, minerals: 13, dogs: 21, smallarea: 154, smallpop: 72, smokers: 75, capital: 20,
      pollution: 79, desert: 12, fiveg: 74, houses: 43},
    facts: {
      coastline: "Chile has the 15th longest coastline in the world — over 6,400 km along the Pacific Ocean, from the Atacama Desert to Antarctica.",
      volcanoes: "Chile has the fourth most active volcanoes in the world — over 90 active ones running along the Andes mountains.",
      mountain: "Chile shares the Andes with Argentina and has numerous peaks above 6,000m, including Ojos del Salado, the world's highest active volcano.",
      fish: "Chile is the 11th largest fishing nation in the world and one of the top producers of farmed Atlantic salmon.",
      minerals: "Chile holds the world's largest known copper reserves and significant lithium deposits in the Atacama salt flats.",
    }
  },
  {
    code: 'CO', name: 'Colombia', flag: '🇨🇴',
    ranks: {
      population: 28, area: 26, gdp: 38, fifa: 20, forest: 13, peace: 142, co2: 38, happiness: 53, olympics: 65, spice: 19, coastline: 19, volcanoes: 10, literacy: 48, biodiversity: 3, sunshine: 18, internet: 32,
      basketball: 45, cricket: 100, coffee: 97, tourists: 30, mountain: 17, unesco: 28, cars: 38, temp: 17, lifeexpect: 40, sleep: 40, rainfall: 1, pizza: 89, skyscrapers: 26, tea: 107, youngpop: 15, fish: 31, military: 14, wind: 35, videogames: 35, satellites: 37, nobel: 35, sharks: 11, venomous: 7, mosquito: 12, gym: 26, minerals: 29, dogs: 22, smallarea: 167, smallpop: 90, smokers: 100, capital: 18,
      pollution: 62, desert: 42, fiveg: 70, houses: 46},
    facts: {
      fifa: "Colombia is one of Latin America's top soccer nations — its national team reached the 2014 World Cup quarterfinals.",
      forest: "Colombia has the 13th largest forest area in the world, including parts of the Amazon rainforest and the Chocó, one of the world's wettest places.",
      spice: "Colombia is a significant producer of tropical spices and herbs, including chili peppers and herbs used in its famous stews.",
      coastline: "Colombia is the only South American country with coastline on both the Pacific Ocean and the Caribbean Sea.",
      volcanoes: "Colombia has the tenth most active volcanoes in the world, including Nevado del Ruiz, which erupted catastrophically in 1985.",
      biodiversity: "Colombia is the third most biodiverse country on Earth and has more bird species than any other country — over 1,900.",
      sunshine: "Colombia receives strong sunshine year-round near the equator, supporting its rich biodiversity and coffee production.",
      rainfall: "Colombia is the rainiest large country on Earth, with some areas of the Pacific coast receiving over 13,000mm of rain per year.",
      venomous: "Colombia is the seventh most venomous-species-rich country in the world, home to the lancehead pit viper and deadly dart frogs.",
    }
  },
  {
    code: 'PE', name: 'Peru', flag: '🇵🇪',
    ranks: {
      population: 42, area: 20, gdp: 48, fifa: 98, forest: 12, peace: 92, co2: 50, happiness: 62, olympics: 75, spice: 22, coastline: 28, volcanoes: 13, literacy: 44, biodiversity: 7, sunshine: 16, internet: 50,
      basketball: 45, cricket: 100, coffee: 97, tourists: 40, mountain: 10, unesco: 19, cars: 45, temp: 50, lifeexpect: 40, sleep: 40, rainfall: 12, pizza: 89, skyscrapers: 44, tea: 107, youngpop: 20, fish: 8, military: 29, wind: 27, videogames: 40, satellites: 39, nobel: 40, sharks: 20, venomous: 12, mosquito: 13, gym: 28, minerals: 14, dogs: 31, smallarea: 168, smallpop: 80, smokers: 98, capital: 15,
      pollution: 24, desert: 10, fiveg: 76, houses: 47},
    facts: {
      area: "Peru is the 20th largest country in the world, containing the Andes mountains, the Amazon rainforest, and a Pacific coastal desert.",
      forest: "Peru has the 12th largest area of forest in the world, including a large portion of the Amazon rainforest.",
      volcanoes: "Peru has 13 active volcanoes in the Andes, including El Misti, which towers over the city of Arequipa.",
      biodiversity: "Peru is the seventh most biodiverse country on Earth, home to over 1,800 bird species and thousands of plant species found nowhere else.",
      sunshine: "Peru's coastal desert is one of the driest places on Earth, while its high-altitude regions get intense sunshine year-round.",
      fish: "Peru is the eighth largest fishing nation in the world, largely due to its anchoveta catch in the cold Humboldt Current.",
      unesco: "Peru has 13 UNESCO World Heritage Sites, including Machu Picchu, the Nazca Lines, and Chan Chan.",
      mountain: "Peru's Andes contain numerous peaks above 6,000m, including Huascaran at 6,768m — the highest peak in the tropics.",
    }
  },
  {
    code: 'KE', name: 'Kenya', flag: '🇰🇪',
    ranks: {
      population: 30, area: 48, gdp: 68, fifa: 116, forest: 52, peace: 120, co2: 85, happiness: 130, olympics: 35, spice: 28, coastline: 44, volcanoes: 16, literacy: 88, biodiversity: 22, sunshine: 14, internet: 52,
      basketball: 45, cricket: 100, coffee: 97, tourists: 42, mountain: 26, unesco: 42, cars: 98, temp: 16, lifeexpect: 65, sleep: 40, rainfall: 10, pizza: 89, skyscrapers: 45, tea: 12, youngpop: 7, fish: 32, military: 31, wind: 30, videogames: 48, satellites: 35, nobel: 38, sharks: 32, venomous: 13, mosquito: 4, gym: 48, minerals: 19, dogs: 47, smallarea: 158, smallpop: 78, smokers: 108, capital: 55,
      pollution: 110, desert: 27, fiveg: 110, houses: 106},
    facts: {
      volcanoes: "Kenya has 16 volcanic formations, including Mount Kenya, the second highest peak in Africa at 5,199 meters.",
      sunshine: "Kenya is one of the sunniest countries in the world, receiving strong sunshine year-round thanks to its equatorial location.",
      tea: "Kenya is the 12th largest tea-consuming nation and one of the world's top three tea exporters — Kenyan black tea is prized globally.",
      youngpop: "Kenya has the seventh youngest population in the world, with a median age of about 20 years and over 40% of its people under 15.",
      mosquito: "Kenya has the fourth highest mosquito-borne disease risk in the world, with malaria being a major public health challenge.",
      rainfall: "Kenya's highland regions receive abundant rainfall, while the coast and Rift Valley are fed by two distinct monsoon seasons.",
    }
  },
  {
    code: 'GH', name: 'Ghana', flag: '🇬🇭',
    ranks: {
      population: 47, area: 82, gdp: 80, fifa: 62, forest: 62, peace: 50, co2: 65, happiness: 99, olympics: 88, spice: 22, coastline: 81, volcanoes: 70, literacy: 78, biodiversity: 40, sunshine: 18, internet: 60,
      basketball: 45, cricket: 100, coffee: 97, tourists: 50, mountain: 65, unesco: 40, cars: 98, temp: 6, lifeexpect: 60, sleep: 40, rainfall: 9, pizza: 89, skyscrapers: 45, tea: 24, youngpop: 6, fish: 20, military: 33, wind: 38, videogames: 94, satellites: 40, nobel: 42, sharks: 34, venomous: 15, mosquito: 3, gym: 83, minerals: 18, dogs: 46, smallarea: 137, smallpop: 80, smokers: 105, capital: 68,
      pollution: 12, desert: 32, fiveg: 108, houses: 104},
    facts: {
      sunshine: "Ghana is one of the sunniest countries in the world, with its position near the equator delivering strong sunshine year-round.",
      youngpop: "Ghana has the sixth youngest population in the world, with about 38% of its people under 15 years old.",
      mosquito: "Ghana has the third highest mosquito-borne disease burden in the world, with malaria being the leading cause of illness.",
      temp: "Ghana is one of the hottest countries on Earth, sitting just above the equator with average temperatures around 27–29°C year-round.",
      fish: "Ghana is the 20th largest fishing nation in the world and fish is the primary source of protein for most of its population.",
    }
  },
  {
    code: 'ET', name: 'Ethiopia', flag: '🇪🇹',
    ranks: {
      population: 13, area: 27, gdp: 62, fifa: 178, forest: 44, peace: 138, co2: 58, happiness: 130, olympics: 28, spice: 15, coastline: 150, volcanoes: 18, literacy: 118, biodiversity: 28, sunshine: 16, internet: 40,
      basketball: 114, cricket: 100, coffee: 97, tourists: 45, mountain: 30, unesco: 35, cars: 110, temp: 9, lifeexpect: 85, sleep: 40, rainfall: 15, pizza: 89, skyscrapers: 45, tea: 21, youngpop: 5, fish: 30, military: 10, wind: 48, videogames: 70, satellites: 38, nobel: 38, sharks: 150, venomous: 16, mosquito: 2, gym: 70, minerals: 20, dogs: 50, smallarea: 165, smallpop: 104, smokers: 112, capital: 42,
      pollution: 13, desert: 26, fiveg: 115, houses: 82},
    facts: {
      population: "Ethiopia is the 13th most populous country in the world and the second most populous in Africa, with over 125 million people.",
      spice: "Ethiopia is one of the world's top producers of sesame seeds and is the birthplace of coffee.",
      volcanoes: "Ethiopia has 18 active volcanic areas, including the Danakil Depression, one of the hottest and most geologically active places on Earth.",
      sunshine: "Ethiopia receives intense sunshine year-round thanks to its location near the equator and high-altitude terrain.",
      youngpop: "Ethiopia has the fifth youngest population in the world, with a median age of about 19 years — half the population is under 20.",
      mosquito: "Ethiopia has the second highest mosquito-borne disease burden in the world, with the rainy season bringing intense malaria pressure.",
      military: "Ethiopia has the tenth largest active military in Africa and one of the largest on the continent, with about 150,000 active troops.",
      temp: "Ethiopia's Great Rift Valley and lowland regions are among the hottest inhabited places on Earth, including the Danakil Depression.",
    }
  },
  {
    code: 'MA', name: 'Morocco', flag: '🇲🇦',
    ranks: {
      population: 39, area: 57, gdp: 60, fifa: 14, forest: 68, peace: 89, co2: 48, happiness: 102, olympics: 56, spice: 18, coastline: 32, volcanoes: 70, literacy: 100, biodiversity: 46, sunshine: 8, internet: 48,
      basketball: 45, cricket: 100, coffee: 97, tourists: 22, mountain: 19, unesco: 21, cars: 45, temp: 30, lifeexpect: 44, sleep: 40, rainfall: 73, pizza: 42, skyscrapers: 40, tea: 11, youngpop: 19, fish: 24, military: 34, wind: 21, videogames: 40, satellites: 33, nobel: 40, sharks: 36, venomous: 24, mosquito: 18, gym: 44, minerals: 16, dogs: 44, smallarea: 152, smallpop: 82, smokers: 38, capital: 62,
      pollution: 27, desert: 13, fiveg: 80, houses: 57},
    facts: {
      fifa: "Morocco made history at the 2022 FIFA World Cup by becoming the first African team ever to reach the semi-finals.",
      spice: "Morocco is one of the world's top producers of spices like cumin, saffron, and ras el hanout — the backbone of North African cuisine.",
      sunshine: "Morocco is one of the sunniest countries in the world, making it a major target for large-scale solar energy projects.",
      tea: "Morocco is the 11th largest tea-consuming nation — sweet mint tea is a symbol of hospitality and drunk throughout the day.",
      fish: "Morocco is the 24th largest fishing nation in the world and one of the top exporters of canned sardines globally.",
      minerals: "Morocco holds over 70% of the world's known phosphate rock reserves, making it a globally critical mineral source.",
    }
  },
  {
    code: 'SE', name: 'Sweden', flag: '🇸🇪',
    ranks: {
      population: 88, area: 65, gdp: 22, fifa: 32, forest: 20, peace: 14, co2: 48, happiness: 4, olympics: 12, spice: 108, coastline: 15, volcanoes: 70, literacy: 5, biodiversity: 58, sunshine: 82, internet: 28,
      basketball: 45, cricket: 100, coffee: 6, tourists: 30, mountain: 79, unesco: 33, cars: 12, temp: 125, lifeexpect: 15, sleep: 40, rainfall: 45, pizza: 17, skyscrapers: 45, tea: 107, youngpop: 42, fish: 45, military: 40, wind: 10, videogames: 6, satellites: 20, nobel: 5, sharks: 28, venomous: 145, mosquito: 65, gym: 3, minerals: 20, dogs: 10, smallarea: 133, smallpop: 65, smokers: 85, capital: 78,
      pollution: 60, desert: 98, fiveg: 13, houses: 14},
    facts: {
      forest: "Sweden is one of the most forested countries in Europe — about 69% of the country is covered in trees.",
      peace: "Sweden ranks among the top 15 most peaceful countries in the world.",
      happiness: "Sweden is one of the top five happiest countries on Earth, known for work-life balance and social welfare.",
      olympics: "Sweden has won the 12th most Olympic medals in history, with strong performances in athletics, wrestling, and sailing.",
      coastline: "Sweden has the 15th longest coastline in the world, with over 3,200 islands in its western archipelago alone.",
      literacy: "Sweden has one of the highest literacy rates in the world, with about 99% of adults able to read and write.",
      coffee: "Sweden is the sixth largest coffee-consuming nation per capita, with fika — the coffee-and-cake break — a cherished daily ritual.",
      videogames: "Sweden is ranked #6 globally for video game culture per capita, home to Mojang (Minecraft), DICE (Battlefield), and Spotify.",
      nobel: "Sweden has produced the fifth most Nobel Prize winners in history, and the prizes themselves were created by Swede Alfred Nobel.",
      gym: "Sweden has the third highest gym membership rate in the world — fitness and outdoor activity are core to Swedish culture.",
    }
  },
  {
    code: 'CH', name: 'Switzerland', flag: '🇨🇭',
    ranks: {
      population: 101, area: 132, gdp: 20, fifa: 16, forest: 45, peace: 10, co2: 52, happiness: 9, olympics: 22, spice: 58, coastline: 180, volcanoes: 72, literacy: 10, biodiversity: 50, sunshine: 60, internet: 38,
      basketball: 45, cricket: 100, coffee: 7, tourists: 22, mountain: 12, unesco: 27, cars: 9, temp: 115, lifeexpect: 2, sleep: 40, rainfall: 38, pizza: 10, skyscrapers: 50, tea: 107, youngpop: 110, fish: 50, military: 48, wind: 30, videogames: 15, satellites: 18, nobel: 6, sharks: 150, venomous: 80, mosquito: 75, gym: 9, minerals: 45, dogs: 13, smallarea: 70, smallpop: 60, smokers: 98, capital: 118,
      pollution: 59, desert: 90, fiveg: 4, houses: 7},
    facts: {
      gdp: "Switzerland has the 20th largest economy in the world and one of the highest incomes per person — famous for banking, watches, and pharmaceuticals.",
      fifa: "Switzerland has a strong soccer tradition and qualified for every FIFA World Cup from 2006 onward.",
      peace: "Switzerland has been officially neutral since 1815 and ranks in the top 10 most peaceful countries in the world.",
      happiness: "Switzerland is one of the top 10 happiest countries on Earth, with high wages, clean cities, and stunning Alpine scenery.",
      literacy: "Switzerland has one of the highest literacy rates in the world, at about 99%, and is home to several world-class universities.",
      coffee: "Switzerland is the seventh largest coffee-consuming nation per capita, with a deep espresso culture influenced by its Italian-speaking canton.",
      lifeexpect: "Switzerland has the second highest life expectancy in the world at about 83.4 years, helped by high incomes and excellent healthcare.",
      mountain: "Switzerland's Alps include famous peaks like the Matterhorn and Jungfrau, with over 48 peaks exceeding 4,000m.",
      nobel: "Switzerland has produced the sixth most Nobel Prize winners per capita of any country, including many in physics, chemistry, and medicine.",
    }
  },
  {
    code: 'PT', name: 'Portugal', flag: '🇵🇹',
    ranks: {
      population: 90, area: 111, gdp: 50, fifa: 6, forest: 36, peace: 5, co2: 85, happiness: 40, olympics: 50, spice: 30, coastline: 25, volcanoes: 26, literacy: 18, biodiversity: 38, sunshine: 28, internet: 45,
      basketball: 45, cricket: 100, coffee: 97, tourists: 18, mountain: 45, unesco: 26, cars: 35, temp: 48, lifeexpect: 18, sleep: 40, rainfall: 28, pizza: 22, skyscrapers: 52, tea: 107, youngpop: 58, fish: 36, military: 50, wind: 18, videogames: 28, satellites: 45, nobel: 25, sharks: 16, venomous: 50, mosquito: 28, gym: 15, minerals: 38, dogs: 20, smallarea: 79, smallpop: 64, smokers: 35, capital: 78,
      pollution: 51, desert: 88, fiveg: 28, houses: 22},
    facts: {
      fifa: "Portugal is one of the world's top soccer nations, winning the European Championship in 2016 and the UEFA Nations League in 2019.",
      peace: "Portugal is the fifth most peaceful country in the world, with very low crime rates and strong democratic institutions.",
      literacy: "Portugal has one of the highest literacy rates in the world, with about 96% of adults able to read and write.",
      gym: "Portugal has the 15th highest gym membership rate in the world, reflecting a growing fitness culture especially in Lisbon and Porto.",
      sharks: "Portugal's Azores islands and Atlantic coastline give it the 16th highest rate of recorded shark encounters globally.",
      fish: "Portugal has one of the highest fish-consumption rates per capita in Europe — bacalhau (salted cod) is a national staple.",
    }
  },
  {
    code: 'GR', name: 'Greece', flag: '🇬🇷',
    ranks: {
      population: 82, area: 96, gdp: 106, fifa: 48, forest: 90, peace: 62, co2: 52, happiness: 44, olympics: 15, spice: 32, coastline: 13, volcanoes: 20, literacy: 20, biodiversity: 36, sunshine: 35, internet: 74,
      basketball: 9, cricket: 100, coffee: 97, tourists: 15, mountain: 18, unesco: 13, cars: 20, temp: 45, lifeexpect: 17, sleep: 40, rainfall: 40, pizza: 21, skyscrapers: 48, tea: 107, youngpop: 60, fish: 38, military: 32, wind: 20, videogames: 30, satellites: 42, nobel: 20, sharks: 15, venomous: 78, mosquito: 23, gym: 24, minerals: 31, dogs: 19, smallarea: 84, smallpop: 66, smokers: 11, capital: 32,
      pollution: 52, desert: 68, fiveg: 36, houses: 25},
    facts: {
      olympics: "Greece invented the Olympic Games in 776 BC and hosted the first modern Olympics in Athens in 1896.",
      coastline: "Greece has the 13th longest coastline in the world — over 13,600 km, thanks to its 6,000 islands and deeply cut peninsulas.",
      volcanoes: "Greece has about 20 volcanic areas, including Santorini, formed by one of the largest volcanic eruptions in human history.",
      literacy: "Greece has one of the highest literacy rates in the world, with about 98% of adults able to read and write.",
      basketball: "Greece is ranked #9 by FIBA and won the 2005 EuroBasket — Giannis Antetokounmpo, an NBA MVP, is Greek.",
      tourists: "Greece is the 15th most visited country in the world, drawing millions to Athens, Santorini, Mykonos, and Crete.",
      unesco: "Greece has 19 UNESCO World Heritage Sites, including the Acropolis of Athens, Delphi, and Olympia.",
      cars: "Greece has the 20th most cars per capita in the world — car culture is strong despite the country's economic challenges.",
    }
  },
  {
    code: 'NL', name: 'Netherlands', flag: '🇳🇱',
    ranks: {
      population: 67, area: 131, gdp: 17, fifa: 10, forest: 72, peace: 21, co2: 35, happiness: 5, olympics: 25, spice: 40, coastline: 52, volcanoes: 62, literacy: 12, biodiversity: 60, sunshine: 75, internet: 32,
      basketball: 45, cricket: 100, coffee: 5, tourists: 21, mountain: 90, unesco: 24, cars: 16, temp: 110, lifeexpect: 10, sleep: 18, rainfall: 42, pizza: 9, skyscrapers: 30, tea: 107, youngpop: 42, fish: 33, military: 35, wind: 5, videogames: 8, satellites: 17, nobel: 9, sharks: 25, venomous: 80, mosquito: 42, gym: 11, minerals: 40, dogs: 14, smallarea: 71, smallpop: 71, smokers: 45, capital: 68,
      pollution: 66, desert: 82, fiveg: 11, houses: 9},
    facts: {
      gdp: "The Netherlands has the 17th largest economy in the world and is the second largest food exporter after the much larger United States.",
      fifa: "The Netherlands is one of soccer's most respected nations — the Dutch reached three FIFA World Cup finals and won the European Championship in 1988.",
      happiness: "The Netherlands is the fifth happiest country on Earth, known for cycling culture, social equality, and great quality of life.",
      literacy: "The Netherlands has one of the highest literacy rates in the world, with about 99% of adults able to read and write.",
      coffee: "The Netherlands is the fifth largest coffee-consuming nation per capita, with the world's largest coffee trading hub in Amsterdam.",
      wind: "The Netherlands is the fifth windiest country on Earth and is famous worldwide for its iconic windmills and offshore wind farms.",
      nobel: "The Netherlands has produced the ninth most Nobel Prize winners in history, including multiple winners in physics and chemistry.",
      lifeexpect: "The Netherlands has the tenth highest life expectancy in the world, at about 82 years.",
      sleep: "The Dutch get the 18th most sleep per night of any nation, averaging about 8.1 hours — helped by a strong work-life balance culture.",
    }
  },
  {
    code: 'PL', name: 'Poland', flag: '🇵🇱',
    ranks: {
      population: 36, area: 69, gdp: 21, fifa: 24, forest: 28, peace: 28, co2: 22, happiness: 38, olympics: 20, spice: 28, coastline: 62, volcanoes: 65, literacy: 15, biodiversity: 48, sunshine: 70, internet: 33,
      basketball: 45, cricket: 100, coffee: 97, tourists: 28, mountain: 79, unesco: 23, cars: 35, temp: 115, lifeexpect: 40, sleep: 40, rainfall: 40, pizza: 16, skyscrapers: 28, tea: 107, youngpop: 48, fish: 40, military: 27, wind: 28, videogames: 19, satellites: 27, nobel: 14, sharks: 150, venomous: 75, mosquito: 48, gym: 23, minerals: 37, dogs: 15, smallarea: 146, smallpop: 83, smokers: 28, capital: 48,
      pollution: 35, desert: 62, fiveg: 29, houses: 24},
    facts: {
      olympics: "Poland has won the 20th most Olympic medals in history, with strong performances in athletics, boxing, and weightlifting.",
      literacy: "Poland has one of the highest literacy rates in the world, with about 99% of adults able to read and write.",
      skyscrapers: "Poland has the 28th most skyscrapers in the world, with Warsaw's rapidly growing skyline anchored by the iconic Palace of Culture.",
      nobel: "Poland has produced 14 Nobel Prize winners, including Marie Curie (the first woman ever to win) and Wisława Szymborska in literature.",
      videogames: "Poland is ranked #19 globally for video game engagement per capita, and is home to CD Projekt Red, makers of The Witcher series.",
    }
  },
  {
    code: 'UA', name: 'Ukraine', flag: '🇺🇦',
    ranks: {
      population: 35, area: 44, gdp: 56, fifa: 22, forest: 32, peace: 160, co2: 30, happiness: 110, olympics: 16, spice: 25, coastline: 58, volcanoes: 68, literacy: 22, biodiversity: 48, sunshine: 52, internet: 40,
      basketball: 45, cricket: 100, coffee: 97, tourists: 35, mountain: 79, unesco: 35, cars: 40, temp: 110, lifeexpect: 67, sleep: 40, rainfall: 45, pizza: 89, skyscrapers: 27, tea: 107, youngpop: 45, fish: 42, military: 23, wind: 30, videogames: 24, satellites: 28, nobel: 27, sharks: 150, venomous: 80, mosquito: 45, gym: 25, minerals: 23, dogs: 24, smallarea: 125, smallpop: 85, smokers: 18, capital: 30,
      pollution: 41, desert: 58, fiveg: 46, houses: 34},
    facts: {
      olympics: "Ukraine has won the 16th most Olympic medals in history, with its athletes excelling in gymnastics, weightlifting, and wrestling.",
      military: "Ukraine has the 23rd largest active military in the world, which has grown significantly since the outbreak of the Russia-Ukraine war.",
      minerals: "Ukraine has major deposits of rare earth elements, lithium, and titanium — making it one of the most mineral-rich countries in Europe.",
    }
  },
  {
    code: 'TZ', name: 'Tanzania', flag: '🇹🇿',
    ranks: { population: 24, area: 31, gdp: 76, fifa: 129, forest: 24, peace: 98, co2: 80, happiness: 138, olympics: 92, spice: 28, coastline: 42, volcanoes: 22, literacy: 94, biodiversity: 14, sunshine: 17, internet: 65, basketball: 69, cricket: 100, coffee: 86, tourists: 48, mountain: 12, unesco: 32, cars: 100, temp: 18, lifeexpect: 88, sleep: 40, rainfall: 26, pizza: 91, skyscrapers: 100, tea: 30, youngpop: 8, fish: 22, military: 38, wind: 44, videogames: 70, satellites: 70, nobel: 70, sharks: 44, venomous: 20, mosquito: 8, gym: 70, minerals: 22, dogs: 50, smallarea: 169, smallpop: 79, smokers: 55, capital: 88,
      pollution: 25, desert: 30, fiveg: 120, houses: 86},
    facts: { mountain: "Mount Kilimanjaro in Tanzania is the highest free-standing mountain in the world at 5,895m — you can hike to the top without ropes or climbing gear.", biodiversity: "Tanzania is home to the Serengeti — site of the largest land-animal migration on Earth — with over 70 species of large mammals.", youngpop: "Tanzania has one of the youngest populations on Earth, with a median age of about 17 years and more than half the country under 18.", mosquito: "Tanzania sits in the heart of the world's highest malaria-risk zone, with the disease historically affecting millions of people each year.", sunshine: "Tanzania enjoys intense sunshine year-round near the equator, supporting its world-famous wildlife ecosystems and vast tea plantations." }
  },
  {
    code: 'SN', name: 'Senegal', flag: '🇸🇳',
    ranks: { population: 68, area: 88, gdp: 107, fifa: 19, forest: 78, peace: 62, co2: 100, happiness: 115, olympics: 100, spice: 45, coastline: 60, volcanoes: 80, literacy: 122, biodiversity: 52, sunshine: 20, internet: 75, basketball: 26, cricket: 100, coffee: 86, tourists: 78, mountain: 80, unesco: 42, cars: 110, temp: 8, lifeexpect: 78, sleep: 40, rainfall: 45, pizza: 91, skyscrapers: 120, tea: 28, youngpop: 4, fish: 28, military: 52, wind: 38, videogames: 75, satellites: 70, nobel: 70, sharks: 45, venomous: 35, mosquito: 15, gym: 80, minerals: 42, dogs: 52, smallarea: 89, smallpop: 72, smokers: 72, capital: 88,
      pollution: 17, desert: 100, fiveg: 118, houses: 108},
    facts: { fifa: "Senegal reached the 2002 FIFA World Cup quarter-finals and won the Africa Cup of Nations in 2021 and 2023 — among Africa's proudest football moments.", youngpop: "Senegal has the fourth youngest population in the world, with a median age of just 18 years.", sunshine: "Senegal is one of the sunniest countries in the world, with Dakar averaging over 3,000 hours of sunshine per year.", temp: "Senegal is one of the hottest countries on Earth — the Sahel interior regularly sees temperatures above 40°C in the dry season." }
  },
  {
    code: 'CM', name: 'Cameroon', flag: '🇨🇲',
    ranks: { population: 53, area: 54, gdp: 97, fifa: 33, forest: 18, peace: 135, co2: 90, happiness: 128, olympics: 78, spice: 35, coastline: 65, volcanoes: 26, literacy: 102, biodiversity: 16, sunshine: 22, internet: 78, basketball: 69, cricket: 100, coffee: 86, tourists: 58, mountain: 35, unesco: 40, cars: 105, temp: 12, lifeexpect: 82, sleep: 40, rainfall: 20, pizza: 91, skyscrapers: 115, tea: 40, youngpop: 11, fish: 35, military: 44, wind: 42, videogames: 80, satellites: 70, nobel: 70, sharks: 48, venomous: 22, mosquito: 11, gym: 78, minerals: 30, dogs: 52, smallarea: 155, smallpop: 77, smokers: 65, capital: 72,
      pollution: 33, desert: 120, fiveg: 132, houses: 90},
    facts: { biodiversity: "Cameroon is called 'Africa in miniature' — it contains nearly every ecosystem on the continent, from beaches to rainforest to desert.", forest: "Cameroon has one of the largest forest areas in the world, with the Congo Basin rainforest spilling across its south — the second lung of the Earth.", youngpop: "Cameroon has one of the youngest populations on Earth, with a median age of about 18 years and extremely rapid population growth.", mosquito: "Cameroon's dense tropical rainforests and warm humid climate make it one of the highest-risk countries in the world for mosquito-borne diseases." }
  },
  {
    code: 'CI', name: "Côte d'Ivoire", flag: '🇨🇮',
    ranks: { population: 51, area: 83, gdp: 89, fifa: 85, forest: 58, peace: 99, co2: 95, happiness: 120, olympics: 96, spice: 22, coastline: 62, volcanoes: 80, literacy: 116, biodiversity: 38, sunshine: 20, internet: 80, basketball: 69, cricket: 100, coffee: 86, tourists: 58, mountain: 75, unesco: 42, cars: 108, temp: 11, lifeexpect: 85, sleep: 40, rainfall: 18, pizza: 91, skyscrapers: 118, tea: 45, youngpop: 12, fish: 30, military: 46, wind: 40, videogames: 80, satellites: 70, nobel: 70, sharks: 50, venomous: 28, mosquito: 13, gym: 80, minerals: 32, dogs: 52, smallarea: 136, smallpop: 77, smokers: 70, capital: 78,
      pollution: 31, desert: 122, fiveg: 134, houses: 92},
    facts: { spice: "Côte d'Ivoire produces about 45% of the world's cocoa supply — more than any other country — making it the backbone of the global chocolate industry.", youngpop: "Côte d'Ivoire has one of the youngest populations in the world, with a median age of about 18 years.", temp: "Côte d'Ivoire is one of the hottest countries in the world, sitting just above the equator with year-round tropical heat and humidity.", rainfall: "Côte d'Ivoire's two rainy seasons each year deliver heavy rainfall that feeds its vast cocoa, coffee, and rubber plantations." }
  },
  {
    code: 'UG', name: 'Uganda', flag: '🇺🇬',
    ranks: { population: 34, area: 80, gdp: 100, fifa: 95, forest: 90, peace: 115, co2: 105, happiness: 135, olympics: 95, spice: 40, coastline: 150, volcanoes: 30, literacy: 95, biodiversity: 12, sunshine: 22, internet: 82, basketball: 69, cricket: 100, coffee: 86, tourists: 78, mountain: 29, unesco: 42, cars: 120, temp: 15, lifeexpect: 95, sleep: 40, rainfall: 16, pizza: 91, skyscrapers: 125, tea: 38, youngpop: 1, fish: 24, military: 35, wind: 45, videogames: 85, satellites: 70, nobel: 70, sharks: 150, venomous: 18, mosquito: 5, gym: 85, minerals: 28, dogs: 52, smallarea: 138, smallpop: 88, smokers: 120, capital: 85,
      pollution: 30, desert: 125, fiveg: 125, houses: 84},
    facts: { youngpop: "Uganda has the youngest population of any country on Earth — the median age is just 15 years, and about 75% of Ugandans are under 30.", biodiversity: "Uganda holds half of the world's remaining mountain gorillas and more bird species than the entire United States — all packed into a country the size of Oregon.", mosquito: "Uganda's warm, wet tropical climate makes it one of the highest-risk countries in the world for malaria, with millions of cases recorded every year.", rainfall: "Uganda receives abundant rainfall year-round, fed by Lake Victoria — Africa's largest lake — making it one of Africa's most fertile countries." }
  },
  {
    code: 'MZ', name: 'Mozambique', flag: '🇲🇿',
    ranks: { population: 44, area: 35, gdp: 118, fifa: 103, forest: 38, peace: 105, co2: 110, happiness: 140, olympics: 105, spice: 48, coastline: 20, volcanoes: 38, literacy: 125, biodiversity: 32, sunshine: 15, internet: 88, basketball: 69, cricket: 100, coffee: 86, tourists: 60, mountain: 45, unesco: 42, cars: 115, temp: 16, lifeexpect: 92, sleep: 40, rainfall: 22, pizza: 91, skyscrapers: 125, tea: 45, youngpop: 9, fish: 26, military: 48, wind: 38, videogames: 85, satellites: 70, nobel: 70, sharks: 38, venomous: 22, mosquito: 9, gym: 85, minerals: 26, dogs: 52, smallarea: 158, smallpop: 80, smokers: 75, capital: 92,
      pollution: 90, desert: 125, fiveg: 138, houses: 94},
    facts: { coastline: "Mozambique has over 2,700 km of Indian Ocean coastline — one of the longest in Africa — with world-class coral reefs and crystal-clear waters.", youngpop: "Mozambique has one of the youngest populations in the world, with a median age of about 17 years and more than 45% of people under 15.", sunshine: "Mozambique is one of the sunniest countries on Earth, receiving over 3,000 hours of sunshine per year along its tropical coast.", mosquito: "Mozambique carries one of the world's highest malaria burdens, affecting millions of people each year in its warm, humid lowlands." }
  },
  {
    code: 'ZM', name: 'Zambia', flag: '🇿🇲',
    ranks: { population: 65, area: 38, gdp: 115, fifa: 108, forest: 20, peace: 46, co2: 100, happiness: 130, olympics: 100, spice: 50, coastline: 150, volcanoes: 70, literacy: 88, biodiversity: 30, sunshine: 18, internet: 85, basketball: 69, cricket: 100, coffee: 86, tourists: 58, mountain: 52, unesco: 42, cars: 112, temp: 20, lifeexpect: 90, sleep: 40, rainfall: 24, pizza: 91, skyscrapers: 125, tea: 40, youngpop: 10, fish: 28, military: 42, wind: 42, videogames: 85, satellites: 70, nobel: 70, sharks: 150, venomous: 20, mosquito: 10, gym: 85, minerals: 12, dogs: 52, smallarea: 163, smallpop: 74, smokers: 78, capital: 98,
      pollution: 86, desert: 22, fiveg: 142, houses: 96},
    facts: { minerals: "Zambia sits on the 'Copperbelt' — one of the richest copper deposits on Earth, making it the 12th largest mineral reserve country in the world.", youngpop: "Zambia has one of the youngest populations in the world, with a median age of about 17 years and rapid population growth.", forest: "Zambia has one of the largest forest areas in the world, with vast miombo woodlands covering nearly two-thirds of the country.", sunshine: "Zambia is one of the sunniest countries in the world, receiving over 3,000 hours of sunshine per year on its high central plateau." }
  },
  {
    code: 'AO', name: 'Angola', flag: '🇦🇴',
    ranks: { population: 42, area: 23, gdp: 65, fifa: 78, forest: 22, peace: 110, co2: 68, happiness: 132, olympics: 100, spice: 48, coastline: 38, volcanoes: 110, literacy: 110, biodiversity: 26, sunshine: 16, internet: 78, basketball: 18, cricket: 100, coffee: 86, tourists: 60, mountain: 48, unesco: 42, cars: 100, temp: 22, lifeexpect: 88, sleep: 40, rainfall: 30, pizza: 91, skyscrapers: 118, tea: 45, youngpop: 13, fish: 34, military: 32, wind: 40, videogames: 82, satellites: 70, nobel: 70, sharks: 42, venomous: 25, mosquito: 12, gym: 82, minerals: 15, dogs: 52, smallarea: 163, smallpop: 81, smokers: 80, capital: 80,
      pollution: 22, desert: 20, fiveg: 145, houses: 98},
    facts: { basketball: "Angola is the most successful basketball nation in Africa, winning the African championship 11 times and appearing in three Olympic Games.", minerals: "Angola is one of Africa's top mineral producers — the continent's second largest diamond producer with massive offshore oil reserves.", area: "Angola is the 23rd largest country in the world — bigger than France and Spain combined — with diverse ecosystems from savanna to rainforest.", youngpop: "Angola has one of the youngest populations in the world, with a median age of about 16 years and explosive population growth." }
  },
  {
    code: 'ZW', name: 'Zimbabwe', flag: '🇿🇼',
    ranks: { population: 73, area: 60, gdp: 130, fifa: 98, forest: 48, peace: 125, co2: 108, happiness: 145, olympics: 60, spice: 52, coastline: 150, volcanoes: 72, literacy: 60, biodiversity: 38, sunshine: 18, internet: 88, basketball: 69, cricket: 8, coffee: 86, tourists: 58, mountain: 104, unesco: 38, cars: 105, temp: 22, lifeexpect: 95, sleep: 40, rainfall: 35, pizza: 91, skyscrapers: 128, tea: 40, youngpop: 15, fish: 40, military: 45, wind: 42, videogames: 85, satellites: 70, nobel: 70, sharks: 150, venomous: 22, mosquito: 14, gym: 85, minerals: 24, dogs: 52, smallarea: 150, smallpop: 73, smokers: 42, capital: 82,
      pollution: 95, desert: 23, fiveg: 148, houses: 100},
    facts: { literacy: "Despite severe economic hardship, Zimbabwe has one of the highest literacy rates in Africa at over 88%, reflecting decades of investment in public education.", cricket: "Zimbabwe has played Test cricket since 1992 and has been one of Africa's finest cricketing nations, producing legendary players like Andy Flower.", minerals: "Zimbabwe sits on one of Africa's most diverse mineral bases, with major deposits of platinum, gold, diamonds, and lithium.", youngpop: "Zimbabwe has a very young population, with a median age of about 19 years and over 40% of citizens under 15." }
  },
  {
    code: 'RW', name: 'Rwanda', flag: '🇷🇼',
    ranks: { population: 82, area: 148, gdp: 132, fifa: 73, forest: 70, peace: 38, co2: 140, happiness: 122, olympics: 105, spice: 75, coastline: 150, volcanoes: 32, literacy: 82, biodiversity: 34, sunshine: 25, internet: 92, basketball: 69, cricket: 100, coffee: 86, tourists: 60, mountain: 40, unesco: 42, cars: 130, temp: 28, lifeexpect: 80, sleep: 40, rainfall: 28, pizza: 91, skyscrapers: 128, tea: 42, youngpop: 6, fish: 40, military: 40, wind: 46, videogames: 88, satellites: 70, nobel: 70, sharks: 150, venomous: 32, mosquito: 16, gym: 88, minerals: 30, dogs: 52, smallarea: 65, smallpop: 70, smokers: 115, capital: 110,
      pollution: 28, desert: 130, fiveg: 130, houses: 88},
    facts: { peace: "Rwanda has achieved remarkable stability since the 1990s and today ranks among the more peaceful nations in sub-Saharan Africa, known for clean streets and strong institutions.", youngpop: "Rwanda has one of the youngest populations in the world, with a median age of about 19 years — over 40% of Rwandans are under 15.", biodiversity: "Rwanda's Volcanoes National Park is one of only three places on Earth where you can trek to see wild mountain gorillas in their natural forest habitat.", sunshine: "Rwanda's 'land of a thousand hills' sits near the equator at high altitude, delivering pleasant sunshine and comfortably temperate weather year-round." }
  },
  {
    code: 'CU', name: 'Cuba', flag: '🇨🇺',
    ranks: { population: 80, area: 105, gdp: 105, fifa: 168, forest: 90, peace: 65, co2: 85, happiness: 80, olympics: 18, spice: 42, coastline: 26, volcanoes: 62, literacy: 5, biodiversity: 42, sunshine: 25, internet: 90, basketball: 45, cricket: 100, coffee: 86, tourists: 38, mountain: 50, unesco: 29, cars: 95, temp: 22, lifeexpect: 20, sleep: 40, rainfall: 32, pizza: 91, skyscrapers: 122, tea: 73, youngpop: 60, fish: 38, military: 36, wind: 38, videogames: 80, satellites: 70, nobel: 38, sharks: 28, venomous: 48, mosquito: 28, gym: 97, minerals: 18, dogs: 48, smallarea: 82, smallpop: 66, smokers: 37, capital: 20,
      pollution: 43, desert: 48, fiveg: 100, houses: 48},
    facts: { literacy: "Cuba has one of the highest literacy rates in the world at over 99% — its free universal education system is one of the most celebrated in the developing world.", olympics: "Cuba is one of the greatest Olympic nations relative to size — just 11 million people, yet over 220 Olympic medals, with boxing being its signature sport.", lifeexpect: "Cuba has one of the highest life expectancies in the Americas at about 79 years, driven by its free universal healthcare and more doctors per capita than almost any nation.", coastline: "Cuba's coastline stretches over 5,700 km — the 26th longest in the world — with spectacular coral reefs and turquoise Caribbean waters." }
  },
  {
    code: 'KZ', name: 'Kazakhstan', flag: '🇰🇿',
    ranks: { population: 66, area: 9, gdp: 46, fifa: 124, forest: 58, peace: 72, co2: 20, happiness: 62, olympics: 32, spice: 52, coastline: 102, volcanoes: 110, literacy: 20, biodiversity: 94, sunshine: 28, internet: 52, basketball: 69, cricket: 100, coffee: 86, tourists: 50, mountain: 22, unesco: 35, cars: 30, temp: 68, lifeexpect: 50, sleep: 40, rainfall: 65, pizza: 91, skyscrapers: 38, tea: 20, youngpop: 42, fish: 35, military: 18, wind: 22, videogames: 38, satellites: 35, nobel: 38, sharks: 150, venomous: 35, mosquito: 42, gym: 38, minerals: 8, dogs: 35, smallarea: 182, smallpop: 73, smokers: 15, capital: 62,
      pollution: 26, desert: 6, fiveg: 40, houses: 35},
    facts: { area: "Kazakhstan is the ninth largest country in the world — bigger than Western Europe — and the world's largest landlocked nation.", minerals: "Kazakhstan has the eighth largest mineral reserves in the world, including the world's second largest uranium deposits and vast chromium and zinc mines.", military: "Kazakhstan maintains one of the largest active militaries in Central Asia, inheriting major Soviet-era equipment and infrastructure.", literacy: "Kazakhstan has one of the highest literacy rates in the world at about 99.8%, a legacy of its universal Soviet-era education system." }
  },
  {
    code: 'CD', name: 'DR Congo', flag: '🇨🇩',
    ranks: { population: 16, area: 11, gdp: 90, fifa: 61, forest: 3, peace: 157, co2: 75, happiness: 148, olympics: 100, spice: 45, coastline: 100, volcanoes: 12, literacy: 105, biodiversity: 5, sunshine: 30, internet: 95, basketball: 69, cricket: 100, coffee: 86, tourists: 65, mountain: 28, unesco: 38, cars: 125, temp: 14, lifeexpect: 98, sleep: 40, rainfall: 1, pizza: 91, skyscrapers: 130, tea: 45, youngpop: 2, fish: 16, military: 14, wind: 45, videogames: 88, satellites: 70, nobel: 70, sharks: 150, venomous: 15, mosquito: 6, gym: 88, minerals: 3, dogs: 52, smallarea: 181, smallpop: 100, smokers: 60, capital: 3,
      pollution: 14, desert: 135, fiveg: 150, houses: 102},
    facts: { forest: "DR Congo has the third largest tropical forest on Earth — the Congo Basin rainforest is the world's second lung after the Amazon, covering over 1.5 million km².", biodiversity: "DR Congo is one of the top five most biodiverse countries on Earth, home to bonobos, okapis, and over 10,000 plant species found nowhere else.", rainfall: "DR Congo receives more annual rainfall than almost any other country on Earth, with parts of the Congo Basin seeing over 2,000mm every single year.", minerals: "DR Congo holds over 70% of the world's cobalt reserves plus vast coltan deposits used in every smartphone — making it one of the most mineral-rich nations on Earth.", youngpop: "DR Congo has the second youngest population on Earth, with a median age of just 16 years and more than half of its 100 million people under 20." }
  },
  {
    code: 'KP', name: 'North Korea', flag: '🇰🇵',
    ranks: { population: 82, area: 98, gdp: 148, fifa: 120, forest: 45, peace: 162, co2: 65, happiness: 155, olympics: 28, spice: 60, coastline: 102, volcanoes: 35, literacy: 8, biodiversity: 65, sunshine: 52, internet: 150, basketball: 100, cricket: 150, coffee: 60, tourists: 145, mountain: 40, unesco: 32, cars: 150, temp: 70, lifeexpect: 62, sleep: 45, rainfall: 50, pizza: 150, skyscrapers: 74, tea: 35, youngpop: 50, fish: 28, military: 4, wind: 50, videogames: 150, satellites: 30, nobel: 150, sharks: 91, venomous: 65, mosquito: 40, gym: 150, minerals: 12, dogs: 150, smallarea: 83, smallpop: 76, smokers: 3, capital: 22,
      pollution: 8, desert: 105, fiveg: 150, houses: 78},
    facts: { military: "North Korea has the fourth largest active military in the world — with over 1.2 million soldiers, it has more troops per capita than almost any country on Earth.", literacy: "North Korea claims a near-100% literacy rate and mandates education through age 16 — though independent verification is extremely difficult.", olympics: "Despite its isolation, North Korea has won Olympic medals in boxing, weightlifting, and gymnastics — often punching far above its weight on the world stage.", minerals: "North Korea is believed to sit on one of the largest mineral deposits in the world, including vast coal, iron, and rare earth reserves estimated to be worth trillions." }
  },
  {
    code: 'MD', name: 'Moldova', flag: '🇲🇩',
    ranks: { population: 145, area: 142, gdp: 145, fifa: 174, forest: 115, peace: 52, co2: 115, happiness: 115, olympics: 82, spice: 110, coastline: 180, volcanoes: 150, literacy: 18, biodiversity: 95, sunshine: 48, internet: 60, basketball: 80, cricket: 150, coffee: 35, tourists: 100, mountain: 150, unesco: 45, cars: 85, temp: 75, lifeexpect: 65, sleep: 35, rainfall: 62, pizza: 35, skyscrapers: 110, tea: 30, youngpop: 72, fish: 65, military: 65, wind: 45, videogames: 48, satellites: 75, nobel: 70, sharks: 150, venomous: 85, mosquito: 72, gym: 45, minerals: 80, dogs: 28, smallarea: 68, smallpop: 35, smokers: 13, capital: 118,
      pollution: 100, desert: 105, fiveg: 110, houses: 36},
    facts: { literacy: "Moldova has a literacy rate above 99% — remarkably high for one of Europe's poorest countries, thanks to its strong Soviet-era education system.", dogs: "Moldova has one of the highest rates of pet dog ownership in Eastern Europe, with dogs deeply embedded in rural village culture.", sleep: "Moldovans rank among the top sleepers in the world, averaging over 9 hours per night — more than almost any other nationality." }
  },
  {
    code: 'NP', name: 'Nepal', flag: '🇳🇵',
    ranks: { population: 48, area: 93, gdp: 100, fifa: 175, forest: 52, peace: 68, co2: 125, happiness: 88, olympics: 105, spice: 38, coastline: 180, volcanoes: 65, literacy: 72, biodiversity: 18, sunshine: 38, internet: 95, basketball: 65, cricket: 15, coffee: 65, tourists: 30, mountain: 1, unesco: 28, cars: 130, temp: 72, lifeexpect: 58, sleep: 45, rainfall: 15, pizza: 65, skyscrapers: 120, tea: 22, youngpop: 28, fish: 112, military: 45, wind: 28, videogames: 75, satellites: 70, nobel: 70, sharks: 150, venomous: 28, mosquito: 22, gym: 78, minerals: 35, dogs: 42, smallarea: 85, smallpop: 78, smokers: 45, capital: 88,
      pollution: 4, desert: 95, fiveg: 125, houses: 76},
    facts: { mountain: "Nepal is home to Mount Everest — the highest point on Earth at 8,849m — plus 8 of the world's 14 peaks above 8,000m.", cricket: "Cricket is Nepal's most popular sport, with a passionate national following and a team that has competed at ICC World Cup qualifiers.", biodiversity: "Nepal stretches from tropical jungles at 60m to the world's highest peaks, packing extraordinary biodiversity into a small country.", rainfall: "Nepal's monsoon season brings some of the heaviest rainfall on Earth to its southern lowlands, feeding the mighty Ganges and Brahmaputra rivers." }
  },
  {
    code: 'MN', name: 'Mongolia', flag: '🇲🇳',
    ranks: { population: 138, area: 18, gdp: 128, fifa: 185, forest: 65, peace: 35, co2: 95, happiness: 78, olympics: 65, spice: 100, coastline: 180, volcanoes: 70, literacy: 16, biodiversity: 72, sunshine: 20, internet: 82, basketball: 65, cricket: 150, coffee: 86, tourists: 78, mountain: 30, unesco: 30, cars: 65, temp: 105, lifeexpect: 113, sleep: 38, rainfall: 90, pizza: 91, skyscrapers: 105, tea: 18, youngpop: 38, fish: 58, military: 48, wind: 12, videogames: 86, satellites: 70, nobel: 65, sharks: 150, venomous: 58, mosquito: 48, gym: 58, minerals: 10, dogs: 40, smallarea: 175, smallpop: 39, smokers: 16, capital: 118,
      pollution: 6, desert: 7, fiveg: 115, houses: 72},
    facts: { area: "Mongolia is the 18th largest country in the world and the most sparsely populated — just 3 million people spread across an area the size of Western Europe.", peace: "Mongolia is one of the most peaceful countries in Asia, maintaining friendly relations with both Russia and China while staying neutral in global conflicts.", minerals: "Mongolia sits on enormous deposits of coal, copper, and rare earth elements — its Oyu Tolgoi mine is one of the largest copper and gold mines ever discovered.", wind: "Mongolia is one of the windiest countries on Earth — its vast open steppes and lack of natural windbreaks create fierce, persistent winds across the landscape.", tea: "Mongolians are among the world's top tea drinkers — their traditional drink is suutei tsai, a salted milk tea consumed daily in huge quantities." }
  },
  {
    code: 'JM', name: 'Jamaica', flag: '🇯🇲',
    ranks: { population: 135, area: 155, gdp: 120, fifa: 60, forest: 92, peace: 130, co2: 130, happiness: 91, olympics: 14, spice: 30, coastline: 78, volcanoes: 110, literacy: 28, biodiversity: 48, sunshine: 25, internet: 88, basketball: 69, cricket: 5, coffee: 45, tourists: 28, mountain: 68, unesco: 42, cars: 72, temp: 20, lifeexpect: 45, sleep: 42, rainfall: 38, pizza: 91, skyscrapers: 110, tea: 73, youngpop: 73, fish: 52, military: 80, wind: 40, videogames: 78, satellites: 70, nobel: 45, sharks: 32, venomous: 52, mosquito: 32, gym: 97, minerals: 20, dogs: 44, smallarea: 52, smallpop: 38, smokers: 95, capital: 118,
      pollution: 53, desert: 118, fiveg: 105, houses: 48},
    facts: { olympics: "Jamaica is the greatest sprinting nation on Earth relative to its size — a country of 3 million people that has dominated Olympic sprint events for decades, producing Usain Bolt.", cricket: "Cricket is a religion in Jamaica — the island has produced West Indies legends and has one of the most passionate cricket cultures in the Caribbean.", coffee: "Jamaican Blue Mountain coffee is considered one of the finest and most expensive coffees in the world, grown in the mist-covered mountains above Kingston.", tourists: "Jamaica welcomes millions of tourists each year relative to its tiny size, making tourism the backbone of its economy." }
  },
  {
    code: 'BO', name: 'Bolivia', flag: '🇧🇴',
    ranks: { population: 85, area: 28, gdp: 96, fifa: 82, forest: 17, peace: 68, co2: 88, happiness: 72, olympics: 95, spice: 32, coastline: 180, volcanoes: 16, literacy: 42, biodiversity: 9, sunshine: 14, internet: 88, basketball: 69, cricket: 150, coffee: 86, tourists: 65, mountain: 8, unesco: 26, cars: 95, temp: 65, lifeexpect: 62, sleep: 38, rainfall: 28, pizza: 91, skyscrapers: 88, tea: 73, youngpop: 32, fish: 48, military: 50, wind: 35, videogames: 82, satellites: 70, nobel: 50, sharks: 150, venomous: 22, mosquito: 20, gym: 72, minerals: 6, dogs: 45, smallarea: 166, smallpop: 67, smokers: 98, capital: 95,
      pollution: 20, desert: 43, fiveg: 98, houses: 49},
    facts: { minerals: "Bolivia has the world's largest lithium reserves — over 21 million tonnes — sitting beneath the Uyuni Salt Flat, the single largest deposit on Earth.", mountain: "Bolivia has the 8th highest average elevation of any country and is home to the world's highest capital city, La Paz, at over 3,600m above sea level.", biodiversity: "Bolivia is one of the world's top 10 most biodiverse countries, containing Amazonian rainforest, Andean cloud forest, and high-altitude salt plains all within one nation.", sunshine: "Bolivia's high-altitude Altiplano receives some of the most intense solar radiation on Earth, with the thin atmosphere blocking less UV than at sea level." }
  },
  {
    code: 'RS', name: 'Serbia', flag: '🇷🇸',
    ranks: { population: 95, area: 115, gdp: 80, fifa: 26, forest: 90, peace: 56, co2: 60, happiness: 68, olympics: 38, spice: 65, coastline: 180, volcanoes: 65, literacy: 25, biodiversity: 58, sunshine: 42, internet: 48, basketball: 5, cricket: 150, coffee: 28, tourists: 78, mountain: 52, unesco: 30, cars: 42, temp: 78, lifeexpect: 42, sleep: 28, rainfall: 42, pizza: 32, skyscrapers: 74, tea: 32, youngpop: 82, fish: 112, military: 69, wind: 42, videogames: 32, satellites: 70, nobel: 42, sharks: 150, venomous: 78, mosquito: 60, gym: 35, minerals: 45, dogs: 35, smallarea: 76, smallpop: 56, smokers: 6, capital: 58,
      pollution: 34, desert: 105, fiveg: 38, houses: 32},
    facts: { basketball: "Serbia is one of the top 5 basketball nations in the world — producing NBA stars like Nikola Jokić and Luka Dončić, and winning multiple EuroBasket and World Cup medals.", fifa: "Serbia punches far above its weight in football, consistently qualifying for World Cups and producing world-class players like Nemanja Vidić and Aleksandar Mitrović.", sleep: "Serbians are among the top sleepers in the world, averaging over 9 hours of sleep per night — more than almost any other European nationality.", coffee: "Serbians have an intense coffee culture inherited from Ottoman times — coffee shops are social institutions and Serbian-style coffee (thick, unfiltered) is drunk multiple times daily." }
  },
  {
    code: 'EC', name: 'Ecuador', flag: '🇪🇨',
    ranks: { population: 67, area: 74, gdp: 62, fifa: 44, forest: 19, peace: 74, co2: 82, happiness: 48, olympics: 58, spice: 24, coastline: 34, volcanoes: 6, literacy: 44, biodiversity: 8, sunshine: 18, internet: 68, basketball: 69, cricket: 150, coffee: 48, tourists: 45, mountain: 10, unesco: 20, cars: 85, temp: 25, lifeexpect: 35, fish: 20, military: 69, wind: 42, videogames: 75, satellites: 70, nobel: 70, sharks: 22, venomous: 12, mosquito: 18, gym: 70, minerals: 22, dogs: 48, sleep: 40, rainfall: 12, pizza: 91, skyscrapers: 88, tea: 73, youngpop: 35, smallarea: 143, smallpop: 71, smokers: 105, capital: 15,
      pollution: 61, desert: 60, fiveg: 102, houses: 80},
    facts: { biodiversity: "Ecuador is the most biodiverse country per square kilometer on Earth — the Galápagos Islands alone inspired Darwin's theory of evolution.", volcanoes: "Ecuador has 6 of the world's most active volcanoes including Cotopaxi, one of the highest active volcanoes on Earth at 5,897m.", mountain: "Ecuador is home to Chimborazo — technically the farthest point from Earth's center, making it the closest point on Earth to outer space.", sharks: "The Galápagos Marine Reserve surrounding Ecuador is one of the world's top shark sanctuaries, with whale sharks, hammerheads, and Galápagos sharks in huge numbers." }
  },
  {
    code: 'UY', name: 'Uruguay', flag: '🇺🇾',
    ranks: { population: 132, area: 90, gdp: 70, fifa: 16, forest: 75, peace: 8, co2: 98, happiness: 28, olympics: 52, spice: 72, coastline: 102, volcanoes: 150, literacy: 22, biodiversity: 58, sunshine: 32, internet: 45, basketball: 38, cricket: 150, coffee: 42, tourists: 48, mountain: 88, unesco: 28, cars: 28, temp: 80, lifeexpect: 28, sleep: 32, rainfall: 35, pizza: 28, skyscrapers: 95, tea: 73, youngpop: 78, fish: 40, military: 62, wind: 18, videogames: 50, satellites: 70, nobel: 48, sharks: 26, venomous: 45, mosquito: 35, gym: 38, minerals: 92, dogs: 5, smallarea: 88, smallpop: 40, smokers: 82, capital: 45,
      pollution: 74, desert: 90, fiveg: 88, houses: 42},
    facts: { peace: "Uruguay is the 8th most peaceful country in the world and the most peaceful in Latin America — with zero conflict and extremely low crime rates.", fifa: "Uruguay won the first-ever FIFA World Cup in 1930 and is the most successful nation per capita in World Cup history — two titles for a country of just 3.5 million.", dogs: "Uruguay has the highest rate of pet dog ownership in the world — nearly every household has at least one dog, and there are more dogs than children under 15.", happiness: "Uruguay consistently ranks as the happiest country in Latin America, with strong social safety nets, low inequality, and high trust in government." }
  },
  {
    code: 'PG', name: 'Papua New Guinea', flag: '🇵🇬',
    ranks: { population: 100, area: 115, gdp: 110, fifa: 155, forest: 8, peace: 120, co2: 105, happiness: 105, olympics: 105, spice: 28, coastline: 12, volcanoes: 8, literacy: 130, biodiversity: 7, sunshine: 22, internet: 120, basketball: 69, cricket: 20, coffee: 86, tourists: 88, mountain: 20, unesco: 42, cars: 130, temp: 18, lifeexpect: 88, sleep: 40, rainfall: 8, pizza: 150, skyscrapers: 130, tea: 73, youngpop: 22, fish: 20, military: 58, wind: 42, videogames: 90, satellites: 70, nobel: 70, sharks: 18, venomous: 8, mosquito: 7, gym: 90, minerals: 14, dogs: 48, smallarea: 154, smallpop: 64, smokers: 4, capital: 118,
      pollution: 92, desert: 100, fiveg: 128, houses: 95},
    facts: { biodiversity: "Papua New Guinea has the 7th highest biodiversity on Earth and is home to more bird species than any other country in its region, including the spectacular Birds of Paradise.", volcanoes: "PNG sits on the Pacific Ring of Fire with 8 highly active volcanoes — volcanic eruptions are a regular feature of life for many communities.", venomous: "Papua New Guinea is home to some of the world's most venomous snakes including the Taipan and Death Adder — it ranks in the top 10 globally for dangerous wildlife.", rainfall: "Papua New Guinea receives some of the heaviest rainfall on Earth — parts of the highlands get over 10,000mm per year, making it one of the wettest places in the world." }
  },
  {
    code: 'CR', name: 'Costa Rica', flag: '🇨🇷',
    ranks: { population: 128, area: 125, gdp: 82, fifa: 52, forest: 36, peace: 18, co2: 112, happiness: 16, olympics: 100, spice: 38, coastline: 44, volcanoes: 10, literacy: 18, biodiversity: 11, sunshine: 20, internet: 65, basketball: 68, cricket: 150, coffee: 22, tourists: 28, mountain: 50, unesco: 32, cars: 75, temp: 22, lifeexpect: 22, sleep: 42, rainfall: 10, pizza: 72, skyscrapers: 125, tea: 78, youngpop: 48, fish: 50, military: 150, wind: 48, videogames: 72, satellites: 82, nobel: 72, sharks: 30, venomous: 15, mosquito: 20, gym: 62, minerals: 52, dogs: 38, smallarea: 118, smallpop: 62, smokers: 108, capital: 98,
      pollution: 76, desert: 130, fiveg: 90, houses: 72},
    facts: { peace: "Costa Rica abolished its military in 1948 — making it one of the few countries on Earth with no army, and one of the most peaceful nations in the Americas.", biodiversity: "Costa Rica holds nearly 6% of the world's biodiversity despite covering just 0.03% of Earth's surface — it has more bird species than all of North America.", happiness: "Costa Rica is one of the happiest countries in the world and scores among the best on 'happy life years' — people live long AND happily.", lifeexpect: "Costa Ricans live longer than Americans despite spending far less on healthcare — a phenomenon called the 'Costa Rican Paradox.'", forest: "Over 50% of Costa Rica's land is covered in rainforest — the result of a 30-year reforestation program that reversed decades of deforestation.", coffee: "Costa Rican coffee is considered some of the finest in the world, grown at high altitude in rich volcanic soil.", rainfall: "Parts of Costa Rica's Caribbean coast receive over 5,000mm of rain per year — among the highest rainfall in the Americas." }
  },
  {
    code: 'PA', name: 'Panama', flag: '🇵🇦',
    ranks: { population: 140, area: 128, gdp: 88, fifa: 88, forest: 38, peace: 48, co2: 118, happiness: 38, olympics: 105, spice: 48, coastline: 36, volcanoes: 18, literacy: 30, biodiversity: 13, sunshine: 22, internet: 72, basketball: 72, cricket: 150, coffee: 45, tourists: 45, mountain: 42, unesco: 28, cars: 88, temp: 20, lifeexpect: 32, sleep: 42, rainfall: 6, pizza: 75, skyscrapers: 48, tea: 82, youngpop: 40, fish: 42, military: 75, wind: 45, videogames: 75, satellites: 88, nobel: 78, sharks: 28, venomous: 20, mosquito: 22, gym: 68, minerals: 48, dogs: 42, smallarea: 120, smallpop: 65, smokers: 110, capital: 88,
      pollution: 77, desert: 132, fiveg: 88, houses: 74},
    facts: { biodiversity: "Panama has over 10,000 plant species and 1,000 bird species — more bird species per square mile than almost any country on Earth.", rainfall: "Panama's Darién region receives some of the highest rainfall in the Americas, over 4,000mm per year, feeding the impenetrable jungle gap in the Pan-American Highway.", happiness: "Panama consistently ranks as the happiest country in Central America, known for its friendly people and high quality of life.", skyscrapers: "Panama City has the most skyscrapers in Latin America outside of São Paulo and Mexico City — a dramatic skyline built on canal wealth." }
  },
  {
    code: 'GT', name: 'Guatemala', flag: '🇬🇹',
    ranks: { population: 70, area: 138, gdp: 98, fifa: 100, forest: 45, peace: 125, co2: 110, happiness: 72, olympics: 110, spice: 30, coastline: 65, volcanoes: 15, literacy: 108, biodiversity: 18, sunshine: 24, internet: 88, basketball: 78, cricket: 150, coffee: 28, tourists: 55, mountain: 38, unesco: 30, cars: 102, temp: 28, lifeexpect: 52, sleep: 45, rainfall: 14, pizza: 80, skyscrapers: 110, tea: 82, youngpop: 18, fish: 55, military: 58, wind: 48, videogames: 80, satellites: 92, nobel: 82, sharks: 40, venomous: 18, mosquito: 18, gym: 80, minerals: 40, dogs: 48, smallarea: 130, smallpop: 70, smokers: 112, capital: 92,
      pollution: 18, desert: 135, fiveg: 95, houses: 70},
    facts: { youngpop: "Guatemala has one of the youngest populations in the Americas, with a median age of just 22 and nearly half the country under 18.", biodiversity: "Guatemala is one of the most biodiverse countries in Central America, home to the Petén rainforest and over 700 bird species.", coffee: "Guatemala produces some of the world's finest coffee, grown in volcanic highlands that create unique flavor profiles unlike anywhere else.", volcanoes: "Guatemala has 37 volcanoes, including Santiaguito which has been continuously erupting since 1922 — one of the longest-running eruptions on Earth." }
  },
  {
    code: 'VA', name: 'Vatican City', flag: '🇻🇦',
    ranks: { population: 195, area: 195, gdp: 150, fifa: 150, forest: 195, peace: 5, co2: 195, happiness: 12, olympics: 150, spice: 150, coastline: 195, volcanoes: 150, literacy: 1, biodiversity: 195, sunshine: 42, internet: 28, basketball: 150, cricket: 150, coffee: 30, tourists: 8, mountain: 150, unesco: 5, cars: 1, temp: 75, lifeexpect: 8, sleep: 30, rainfall: 55, pizza: 2, skyscrapers: 195, tea: 80, youngpop: 195, fish: 195, military: 150, wind: 65, videogames: 45, satellites: 150, nobel: 150, sharks: 150, venomous: 150, mosquito: 150, gym: 150, minerals: 195, dogs: 80, smallarea: 1, smallpop: 1, smokers: 150, capital: 195,
      pollution: 80, desert: 150, fiveg: 12, houses: 195},
    facts: { smallarea: "Vatican City is the world's smallest country — just 0.44 km², smaller than most city parks, yet it is a sovereign nation.", smallpop: "Vatican City has fewer than 800 permanent residents, making it the world's least populous country by far.", tourists: "Despite its tiny size, Vatican City attracts over 6 million tourists per year — more visitors per square kilometer than almost anywhere on Earth.", literacy: "Vatican City has a 100% literacy rate — every single resident is educated, making it tied for the world's highest.", cars: "Vatican City has more registered cars per person than any country — essentially everyone who lives there has at least one vehicle.", pizza: "Vatican City is surrounded by Rome, the birthplace of Italian cuisine — its residents eat more pizza and pasta per person than almost anywhere." }
  },
  {
    code: 'MC', name: 'Monaco', flag: '🇲🇨',
    ranks: { population: 192, area: 194, gdp: 1, fifa: 150, forest: 194, peace: 8, co2: 194, happiness: 8, olympics: 150, spice: 150, coastline: 195, volcanoes: 150, literacy: 3, biodiversity: 194, sunshine: 35, internet: 15, basketball: 150, cricket: 150, coffee: 25, tourists: 12, mountain: 150, unesco: 150, cars: 2, temp: 62, lifeexpect: 1, sleep: 28, rainfall: 62, pizza: 4, skyscrapers: 22, tea: 75, youngpop: 192, fish: 190, military: 150, wind: 68, videogames: 35, satellites: 150, nobel: 150, sharks: 35, venomous: 150, mosquito: 150, gym: 5, minerals: 190, dogs: 72, smallarea: 2, smallpop: 3, smokers: 150, capital: 192,
      pollution: 81, desert: 150, fiveg: 8, houses: 190},
    facts: { smallarea: "Monaco is the world's second smallest country but the most densely populated — over 19,000 people per km², more than any other nation on Earth.", gdp: "Monaco has the highest GDP per capita in the world, driven by luxury tourism, casinos, and its status as a global tax haven.", lifeexpect: "Monaco has the highest life expectancy in the world at about 87 years, thanks to excellent healthcare and a very wealthy population.", gym: "Monaco residents have one of the highest gym membership rates in the world — health and fitness are central to Monaco's luxury lifestyle." }
  },
  {
    code: 'BE', name: 'Belgium', flag: '🇧🇪',
    ranks: { population: 80, area: 135, gdp: 24, fifa: 4, forest: 88, peace: 22, co2: 38, happiness: 18, olympics: 26, spice: 60, coastline: 118, volcanoes: 150, literacy: 12, biodiversity: 65, sunshine: 82, internet: 25, basketball: 48, cricket: 150, coffee: 18, tourists: 20, mountain: 115, unesco: 22, cars: 18, temp: 88, lifeexpect: 22, sleep: 32, rainfall: 45, pizza: 18, skyscrapers: 65, tea: 35, youngpop: 88, fish: 58, military: 60, wind: 32, videogames: 28, satellites: 48, nobel: 30, sharks: 150, venomous: 88, mosquito: 65, gym: 22, minerals: 68, dogs: 22, smallarea: 132, smallpop: 62, smokers: 48, capital: 38,
      pollution: 42, desert: 85, fiveg: 20, houses: 10},
    facts: { fifa: "Belgium reached #1 in the FIFA world rankings and has produced world-class players like Lukaku, De Bruyne, and Hazard — punching far above their weight for a small country.", coffee: "Belgians are among the world's biggest coffee drinkers, and Belgian coffee culture — with its café-sitting tradition — is a daily ritual.", pizza: "Belgium is famous for its food culture — Belgian chocolate, waffles, and fries (yes, fries were invented in Belgium, not France).", nobel: "Belgium has won Nobel Prizes in medicine, chemistry, and economics, with a scientific tradition stretching back to the 16th century." }
  },
  {
    code: 'AT', name: 'Austria', flag: '🇦🇹',
    ranks: { population: 97, area: 114, gdp: 28, fifa: 36, forest: 42, peace: 3, co2: 55, happiness: 12, olympics: 22, spice: 68, coastline: 195, volcanoes: 150, literacy: 10, biodiversity: 62, sunshine: 58, internet: 30, basketball: 65, cricket: 150, coffee: 12, tourists: 14, mountain: 18, unesco: 18, cars: 12, temp: 82, lifeexpect: 18, sleep: 35, rainfall: 48, pizza: 20, skyscrapers: 55, tea: 38, youngpop: 88, fish: 68, military: 65, wind: 35, videogames: 32, satellites: 55, nobel: 28, sharks: 150, venomous: 85, mosquito: 72, gym: 18, minerals: 55, dogs: 25, smallarea: 112, smallpop: 60, smokers: 55, capital: 42,
      pollution: 57, desert: 92, fiveg: 21, houses: 13},
    facts: { peace: "Austria is one of the world's three most peaceful countries and has been officially neutral since 1955 — hosting the UN headquarters in Vienna.", mountain: "Austria has some of the highest peaks in the Alps, with over 50 mountains above 3,000m, making it a world-class skiing destination.", coffee: "Vienna invented coffeehouse culture — the 'Viennese café' is a UNESCO Intangible Cultural Heritage, where people sit for hours over one coffee.", olympics: "Austria is one of the greatest Winter Olympic nations, regularly finishing in the top 5 for alpine skiing and ski jumping medals.", lifeexpect: "Austrians enjoy one of the highest life expectancies in Europe at about 82 years, thanks to excellent healthcare and mountain air." }
  },
  {
    code: 'LU', name: 'Luxembourg', flag: '🇱🇺',
    ranks: { population: 165, area: 160, gdp: 6, fifa: 98, forest: 98, peace: 6, co2: 88, happiness: 6, olympics: 110, spice: 150, coastline: 195, volcanoes: 150, literacy: 8, biodiversity: 145, sunshine: 78, internet: 18, basketball: 95, cricket: 150, coffee: 15, tourists: 55, mountain: 128, unesco: 42, cars: 5, temp: 88, lifeexpect: 10, sleep: 32, rainfall: 48, pizza: 22, skyscrapers: 88, tea: 42, youngpop: 95, fish: 180, military: 115, wind: 42, videogames: 30, satellites: 88, nobel: 55, sharks: 150, venomous: 150, mosquito: 88, gym: 12, minerals: 88, dogs: 28, smallarea: 158, smallpop: 48, smokers: 68, capital: 125,
      pollution: 68, desert: 150, fiveg: 22, houses: 8},
    facts: { gdp: "Luxembourg has the world's highest GDP per capita — over $135,000 per person — driven by finance, steel, and EU institutions headquartered there.", happiness: "Luxembourg consistently ranks among the world's top 10 happiest countries, with the highest minimum wage in the EU.", cars: "Luxembourg has one of the highest car ownership rates in the world — nearly every adult owns a car due to limited public transport and suburban living.", lifeexpect: "Luxembourgers enjoy one of the highest life expectancies in Europe, benefiting from world-class healthcare funded by its enormous wealth." }
  },
  {
    code: 'CZ', name: 'Czech Republic', flag: '🇨🇿',
    ranks: { population: 88, area: 116, gdp: 40, fifa: 38, forest: 52, peace: 8, co2: 45, happiness: 22, olympics: 32, spice: 75, coastline: 195, volcanoes: 150, literacy: 12, biodiversity: 72, sunshine: 68, internet: 32, basketball: 55, cricket: 150, coffee: 25, tourists: 22, mountain: 62, unesco: 20, cars: 15, temp: 88, lifeexpect: 32, sleep: 28, rainfall: 55, pizza: 28, skyscrapers: 62, tea: 38, youngpop: 88, fish: 62, military: 55, wind: 38, videogames: 28, satellites: 55, nobel: 42, sharks: 150, venomous: 88, mosquito: 68, gym: 28, minerals: 58, dogs: 18, smallarea: 118, smallpop: 58, smokers: 32, capital: 48,
      pollution: 36, desert: 80, fiveg: 23, houses: 18},
    facts: { smokers: "The Czech Republic has one of the highest smoking rates in Europe — smoking in pubs and restaurants was deeply embedded in Czech culture for decades.", coffee: "Czech coffee culture is strong — Prague's coffeehouse tradition dates back centuries and the city is famous for its historic café scenes.", dogs: "Czechs have one of the highest rates of dog ownership in Europe — dogs are welcome in many restaurants, shops, and even trams.", olympics: "The Czech Republic punches above its weight at the Olympics, particularly in tennis, hockey, and athletics." }
  },
  {
    code: 'HU', name: 'Hungary', flag: '🇭🇺',
    ranks: { population: 92, area: 120, gdp: 55, fifa: 42, forest: 72, peace: 28, co2: 58, happiness: 42, olympics: 8, spice: 65, coastline: 195, volcanoes: 150, literacy: 14, biodiversity: 68, sunshine: 45, internet: 42, basketball: 42, cricket: 150, coffee: 22, tourists: 25, mountain: 128, unesco: 22, cars: 20, temp: 82, lifeexpect: 42, sleep: 30, rainfall: 58, pizza: 30, skyscrapers: 68, tea: 40, youngpop: 88, fish: 65, military: 58, wind: 42, videogames: 32, satellites: 58, nobel: 22, sharks: 150, venomous: 88, mosquito: 68, gym: 32, minerals: 65, dogs: 22, smallarea: 120, smallpop: 60, smokers: 38, capital: 45,
      pollution: 38, desert: 72, fiveg: 30, houses: 19},
    facts: { olympics: "Hungary is one of the greatest Olympic nations relative to its size — a country of 10 million people with over 500 Olympic medals, particularly strong in swimming, fencing, and water polo.", nobel: "Hungary has produced an astonishing number of Nobel laureates per capita — scientists and economists including Edward Teller and George Olah.", coffee: "Budapest's coffeehouse culture rivaled Vienna's in the early 20th century — the grand cafés of Budapest were centers of art and intellectual life." }
  },
  {
    code: 'RO', name: 'Romania', flag: '🇷🇴',
    ranks: { population: 55, area: 82, gdp: 45, fifa: 46, forest: 35, peace: 32, co2: 48, happiness: 48, olympics: 18, spice: 68, coastline: 78, volcanoes: 150, literacy: 20, biodiversity: 45, sunshine: 42, internet: 38, basketball: 55, cricket: 150, coffee: 38, tourists: 38, mountain: 38, unesco: 32, cars: 38, temp: 75, lifeexpect: 48, sleep: 30, rainfall: 52, pizza: 32, skyscrapers: 45, tea: 42, youngpop: 82, fish: 48, military: 42, wind: 38, videogames: 25, satellites: 55, nobel: 42, sharks: 150, venomous: 85, mosquito: 65, gym: 35, minerals: 45, dogs: 15, smallarea: 105, smallpop: 65, smokers: 35, capital: 38,
      pollution: 29, desert: 60, fiveg: 35, houses: 26},
    facts: { olympics: "Romania has won over 300 Olympic medals, with particular dominance in gymnastics — Nadia Comaneci scored the first ever perfect 10 in Olympic gymnastics history.", dogs: "Romania has one of the highest stray dog populations in Europe, and dog ownership rates are also very high in rural communities.", forest: "Romania has one of the largest old-growth forests in Europe — the Carpathian mountains harbor ancient beech and oak forests that predate recorded history.", videogames: "Romania has one of the fastest-growing gaming communities in Europe, with a booming esports scene and multiple world-class Counter-Strike teams." }
  },
  {
    code: 'DK', name: 'Denmark', flag: '🇩🇰',
    ranks: { population: 120, area: 138, gdp: 32, fifa: 20, forest: 102, peace: 4, co2: 52, happiness: 2, olympics: 38, spice: 72, coastline: 22, volcanoes: 150, literacy: 5, biodiversity: 75, sunshine: 80, internet: 18, basketball: 55, cricket: 150, coffee: 5, tourists: 38, mountain: 150, unesco: 28, cars: 22, temp: 92, lifeexpect: 25, sleep: 28, rainfall: 52, pizza: 25, skyscrapers: 72, tea: 38, youngpop: 92, fish: 32, military: 52, wind: 10, videogames: 22, satellites: 45, nobel: 18, sharks: 150, venomous: 150, mosquito: 88, gym: 15, minerals: 72, dogs: 30, smallarea: 135, smallpop: 62, smokers: 85, capital: 88,
      pollution: 56, desert: 95, fiveg: 16, houses: 5},
    facts: { happiness: "Denmark has been ranked the #2 happiest country in the world for years, known for 'hygge' — the Danish concept of cozy contentment.", coffee: "Danes are among the world's top coffee drinkers, consuming about 8.7 kg per person per year — one of the highest rates on Earth.", wind: "Denmark gets about 50% of its electricity from wind power — more than any other country — and exports surplus wind energy to its neighbors.", fifa: "Denmark famously won Euro 1992 after being called up as a last-minute replacement — one of the greatest underdog stories in football history.", nobel: "Denmark has produced 13 Nobel laureates, including Niels Bohr, who fundamentally changed our understanding of atomic structure." }
  },
  {
    code: 'AE', name: 'UAE', flag: '🇦🇪',
    ranks: {
      population: 95, area: 115, gdp: 15, fifa: 72, forest: 180, peace: 42, co2: 35, happiness: 25, olympics: 100, spice: 80, coastline: 55, volcanoes: 150, literacy: 32, biodiversity: 85, sunshine: 3, internet: 22,
      basketball: 90, cricket: 60, coffee: 38, tourists: 5, mountain: 88, unesco: 42, cars: 3, temp: 2, lifeexpect: 28, sleep: 52, rainfall: 155, pizza: 48, skyscrapers: 3, tea: 80, youngpop: 65, fish: 60, military: 35, wind: 55, videogames: 48, satellites: 45, nobel: 100, sharks: 48, venomous: 90, mosquito: 55, gym: 25, minerals: 22, dogs: 60, smallarea: 142, smallpop: 78, smokers: 52, capital: 32,
      pollution: 35, desert: 3, fiveg: 3, houses: 63},
    facts: {
      skyscrapers: "The UAE is home to the Burj Khalifa — the world's tallest building at 828m — and has the third most skyscrapers of any country, with Dubai's skyline growing at a staggering pace.",
      temp: "The UAE is one of the hottest countries on Earth, with summer temperatures in Abu Dhabi regularly exceeding 48°C, making it one of the most extreme climates for a modern city.",
      tourists: "The UAE is the fifth most visited country in the world — Dubai alone attracted over 17 million tourists in 2023, drawing more visitors than its entire resident population.",
      gdp: "The UAE has the 15th largest economy in the world and the highest GDP per capita of any large nation, driven by oil wealth, trade, and a booming financial sector.",
      fiveg: "The UAE was one of the first countries in the world to deploy 5G commercially, and has the third best 5G coverage globally — nearly every urban area is connected.",
      sunshine: "The UAE is one of the sunniest countries on Earth, with Dubai receiving over 3,500 hours of sunshine per year, supporting one of the world's largest solar farms.",
    }
  },
  {
    code: 'SG', name: 'Singapore', flag: '🇸🇬',
    ranks: {
      population: 172, area: 193, gdp: 3, fifa: 155, forest: 120, peace: 6, co2: 62, happiness: 32, olympics: 105, spice: 65, coastline: 175, volcanoes: 150, literacy: 2, biodiversity: 95, sunshine: 22, internet: 5,
      basketball: 80, cricket: 50, coffee: 32, tourists: 8, mountain: 150, unesco: 42, cars: 45, temp: 8, lifeexpect: 3, sleep: 52, rainfall: 20, pizza: 55, skyscrapers: 18, tea: 55, youngpop: 120, fish: 65, military: 55, wind: 68, videogames: 22, satellites: 28, nobel: 80, sharks: 45, venomous: 80, mosquito: 42, gym: 18, minerals: 150, dogs: 58, smallarea: 5, smallpop: 8, smokers: 62, capital: 28,
      pollution: 82, desert: 128, fiveg: 6, houses: 62},
    facts: {
      gdp: "Singapore has the third highest GDP per capita in the world — a city-state of just 6 million people that transformed from a fishing village to a global financial hub in one generation.",
      lifeexpect: "Singapore has the third highest life expectancy in the world at about 83.5 years, thanks to world-class healthcare, low pollution, and a health-conscious population.",
      internet: "Singapore has the fourth fastest internet speeds in the world and one of the highest connectivity rates — over 90% of households have broadband access.",
      fiveg: "Singapore is one of the world's top 5G nations, with among the most extensive coverage of any country — a major part of its Smart Nation initiative.",
      smallarea: "Singapore is one of the smallest countries in the world by area — just 728 km² — yet it is a global hub for finance, trade, and aviation.",
      peace: "Singapore ranks as the sixth most peaceful country in the world — a remarkably safe city-state with very low crime rates and strong rule of law.",
    }
  },
  {
    code: 'IE', name: 'Ireland', flag: '🇮🇪',
    ranks: {
      population: 120, area: 130, gdp: 35, fifa: 62, forest: 45, peace: 8, co2: 55, happiness: 14, olympics: 65, spice: 95, coastline: 32, volcanoes: 150, literacy: 6, biodiversity: 78, sunshine: 88, internet: 28,
      basketball: 90, cricket: 48, coffee: 38, tourists: 38, mountain: 95, unesco: 38, cars: 28, temp: 112, lifeexpect: 20, sleep: 32, rainfall: 18, pizza: 35, skyscrapers: 80, tea: 8, youngpop: 55, fish: 42, military: 75, wind: 6, videogames: 25, satellites: 48, nobel: 28, sharks: 22, venomous: 150, mosquito: 88, gym: 15, minerals: 48, dogs: 18, smallarea: 95, smallpop: 58, smokers: 80, capital: 88,
      pollution: 65, desert: 138, fiveg: 19, houses: 17},
    facts: {
      happiness: "Ireland is one of the top 15 happiest countries in the world, with a strong culture of community, storytelling, and 'craic' — the uniquely Irish concept of fun and lively conversation.",
      peace: "Ireland is one of the eight most peaceful countries in the world, known for its stability, low crime, and diplomatic tradition as a neutral nation.",
      wind: "Ireland is one of the windiest countries in Europe — the Atlantic gales sweeping its western coast give it enormous potential for wind energy, generating over 40% of electricity from wind.",
      rainfall: "Ireland is one of the rainiest countries in Europe, with the west coast receiving over 2,500mm per year — the reason the island is called 'The Emerald Isle'.",
      literacy: "Ireland has one of the highest literacy rates in the world at about 99%, with a deep literary tradition that produced four Nobel Prize-winning authors.",
    }
  },
  {
    code: 'EE', name: 'Estonia', flag: '🇪🇪',
    ranks: {
      population: 168, area: 150, gdp: 75, fifa: 100, forest: 18, peace: 14, co2: 72, happiness: 28, olympics: 80, spice: 120, coastline: 48, volcanoes: 150, literacy: 5, biodiversity: 88, sunshine: 85, internet: 12,
      basketball: 55, cricket: 150, coffee: 28, tourists: 58, mountain: 150, unesco: 38, cars: 32, temp: 118, lifeexpect: 35, sleep: 35, rainfall: 55, pizza: 42, skyscrapers: 88, tea: 55, youngpop: 105, fish: 55, military: 72, wind: 20, videogames: 18, satellites: 58, nobel: 55, sharks: 150, venomous: 150, mosquito: 80, gym: 28, minerals: 75, dogs: 20, smallarea: 72, smallpop: 32, smokers: 25, capital: 115,
      pollution: 58, desert: 148, fiveg: 18, houses: 23},
    facts: {
      internet: "Estonia is the most digitally advanced nation on Earth — citizens vote online, file taxes in 3 minutes, and nearly every government service exists as an e-service. It is known as 'e-Estonia'.",
      fiveg: "Estonia is one of the top 5G nations globally and is a pioneer in digital infrastructure — it built one of the world's first national digital ID systems back in 2002.",
      literacy: "Estonia has one of the highest literacy rates in the world at about 99.8%, with a world-class education system that consistently ranks among Europe's best.",
      peace: "Estonia is one of the most peaceful countries in the world, a remarkable achievement for a small nation that regained independence only in 1991.",
    }
  },
  {
    code: 'MY', name: 'Malaysia', flag: '🇲🇾',
    ranks: {
      population: 45, area: 66, gdp: 36, fifa: 148, forest: 15, peace: 30, co2: 32, happiness: 55, olympics: 52, spice: 12, coastline: 26, volcanoes: 42, literacy: 35, biodiversity: 11, sunshine: 18, internet: 35,
      basketball: 72, cricket: 32, coffee: 48, tourists: 12, mountain: 28, unesco: 38, cars: 38, temp: 12, lifeexpect: 38, sleep: 42, rainfall: 10, pizza: 58, skyscrapers: 22, tea: 15, youngpop: 32, fish: 18, military: 38, wind: 48, videogames: 38, satellites: 32, nobel: 68, sharks: 22, venomous: 18, mosquito: 22, gym: 38, minerals: 22, dogs: 42, smallarea: 128, smallpop: 72, smokers: 28, capital: 35,
      pollution: 92, desert: 122, fiveg: 42, houses: 54},
    facts: {
      biodiversity: "Malaysia is the 11th most biodiverse country on Earth, home to orangutans, pygmy elephants, clouded leopards, and over 15,000 plant species in its ancient rainforests.",
      tourists: "Malaysia is the 12th most visited country in the world, drawing visitors to its mix of tropical islands, rainforest adventures, and modern cities like Kuala Lumpur.",
      forest: "Malaysia has the 15th largest forest area in the world, though its rainforests — some of the oldest on Earth at 130 million years — face pressure from palm oil expansion.",
      spice: "Malaysia is one of the world's top 12 spice producers, growing black pepper, turmeric, and lemongrass, with Sarawak pepper being among the world's finest varieties.",
    }
  },
  {
    code: 'DZ', name: 'Algeria', flag: '🇩🇿',
    ranks: {
      population: 38, area: 10, gdp: 52, fifa: 30, forest: 80, peace: 92, co2: 42, happiness: 88, olympics: 65, spice: 38, coastline: 60, volcanoes: 150, literacy: 68, biodiversity: 78, sunshine: 6, internet: 55,
      basketball: 38, cricket: 150, coffee: 55, tourists: 65, mountain: 35, unesco: 38, cars: 62, temp: 12, lifeexpect: 50, sleep: 42, rainfall: 148, pizza: 45, skyscrapers: 75, tea: 48, youngpop: 28, fish: 45, military: 22, wind: 32, videogames: 55, satellites: 38, nobel: 58, sharks: 38, venomous: 30, mosquito: 38, gym: 52, minerals: 18, dogs: 48, smallarea: 175, smallpop: 75, smokers: 42, capital: 52,
      pollution: 105, desert: 4, fiveg: 58, houses: 52},
    facts: {
      area: "Algeria is the largest country in Africa and the 10th largest in the world — it is so vast that the Sahara Desert alone occupies over 80% of its territory.",
      desert: "Algeria has the fourth greatest desert coverage of any country — the Sahara stretches across its enormous southern territory, creating some of Earth's most dramatic landscapes.",
      sunshine: "Algeria is one of the sunniest countries in the world, with the Saharan south receiving over 3,500 hours of sunshine per year — enough to power Europe with solar energy.",
      minerals: "Algeria has the 18th largest mineral reserves in the world, including major natural gas fields that make it one of Africa's most important energy exporters.",
    }
  },
  {
    code: 'VE', name: 'Venezuela', flag: '🇻🇪',
    ranks: {
      population: 43, area: 32, gdp: 75, fifa: 35, forest: 14, peace: 148, co2: 45, happiness: 90, olympics: 55, spice: 38, coastline: 30, volcanoes: 22, literacy: 40, biodiversity: 6, sunshine: 22, internet: 60,
      basketball: 30, cricket: 150, coffee: 55, tourists: 55, mountain: 15, unesco: 32, cars: 48, temp: 28, lifeexpect: 45, sleep: 42, rainfall: 22, pizza: 45, skyscrapers: 55, tea: 90, youngpop: 28, fish: 38, military: 28, wind: 38, videogames: 55, satellites: 45, nobel: 58, sharks: 28, venomous: 10, mosquito: 18, gym: 48, minerals: 4, dogs: 38, smallarea: 160, smallpop: 72, smokers: 72, capital: 38,
      pollution: 63, desert: 35, fiveg: 82, houses: 45},
    facts: {
      minerals: "Venezuela has the world's largest proven oil reserves — over 300 billion barrels — making it the most petroleum-rich nation on Earth, though political crises have severely hampered production.",
      biodiversity: "Venezuela is the sixth most biodiverse country on Earth, home to the world's highest waterfall (Angel Falls), pink river dolphins, giant anteaters, and over 1,400 bird species.",
      mountain: "Venezuela's tepui table mountains are among the most ancient rock formations on Earth — the inspiration for Conan Doyle's 'The Lost World' — rising vertically from the jungle floor.",
      coastline: "Venezuela has over 2,800 km of Caribbean and Atlantic coastline, including some of South America's finest beaches and the biologically rich Orinoco Delta.",
    }
  },
  {
    code: 'TW', name: 'Taiwan', flag: '🇹🇼',
    ranks: {
      population: 58, area: 138, gdp: 22, fifa: 110, forest: 32, peace: 28, co2: 38, happiness: 30, olympics: 38, spice: 68, coastline: 68, volcanoes: 25, literacy: 8, biodiversity: 48, sunshine: 42, internet: 10,
      basketball: 40, cricket: 150, coffee: 42, tourists: 35, mountain: 22, unesco: 38, cars: 22, temp: 28, lifeexpect: 12, sleep: 25, rainfall: 28, pizza: 35, skyscrapers: 12, tea: 12, youngpop: 108, fish: 22, military: 32, wind: 25, videogames: 12, satellites: 15, nobel: 38, sharks: 22, venomous: 35, mosquito: 32, gym: 28, minerals: 38, dogs: 32, smallarea: 122, smallpop: 85, smokers: 28, capital: 25,
      pollution: 78, desert: 124, fiveg: 8, houses: 53},
    facts: {
      fiveg: "Taiwan is one of the world's top 5G nations — home to TSMC, which manufactures over 90% of the world's most advanced semiconductors, its tech infrastructure is world-class.",
      gdp: "Taiwan has the 22nd largest economy in the world and an extraordinary GDP per capita, driven by its dominance in semiconductor and electronics manufacturing.",
      internet: "Taiwan has the 10th fastest and most widely used internet in the world, with over 90% of its population online and some of Asia's best broadband speeds.",
      tea: "Taiwan is famous for its oolong teas and is the birthplace of bubble tea — Taiwanese tea culture is celebrated globally for its quality and innovation.",
    }
  },
  {
    code: 'HR', name: 'Croatia', flag: '🇭🇷',
    ranks: {
      population: 118, area: 128, gdp: 70, fifa: 12, forest: 38, peace: 16, co2: 80, happiness: 46, olympics: 42, spice: 78, coastline: 17, volcanoes: 150, literacy: 22, biodiversity: 35, sunshine: 40, internet: 50,
      basketball: 28, cricket: 150, coffee: 30, tourists: 22, mountain: 58, unesco: 22, cars: 32, temp: 55, lifeexpect: 38, sleep: 30, rainfall: 42, pizza: 22, skyscrapers: 88, tea: 55, youngpop: 95, fish: 42, military: 68, wind: 28, videogames: 30, satellites: 60, nobel: 48, sharks: 22, venomous: 62, mosquito: 60, gym: 30, minerals: 58, dogs: 22, smallarea: 110, smallpop: 58, smokers: 10, capital: 88,
      pollution: 54, desert: 70, fiveg: 32, houses: 30},
    facts: {
      coastline: "Croatia has the 17th longest coastline in the world — over 5,800 km including more than 1,200 islands, making it one of Europe's most spectacular Adriatic destinations.",
      tourists: "Croatia is the 22nd most visited country in the world, with Dubrovnik, Split, and the Dalmatian islands drawing millions who come for its crystal-clear waters and medieval walled cities.",
      fifa: "Croatia has one of the greatest football stories of any small nation — a country of just 4 million people that reached the FIFA World Cup final in 2018 and won bronze in 2022.",
      peace: "Croatia is one of the 16 most peaceful countries in the world, a remarkable transformation for a country that experienced war just 30 years ago.",
    }
  },
  {
    code: 'BG', name: 'Bulgaria', flag: '🇧🇬',
    ranks: {
      population: 95, area: 100, gdp: 72, fifa: 65, forest: 42, peace: 36, co2: 55, happiness: 58, olympics: 38, spice: 70, coastline: 85, volcanoes: 150, literacy: 20, biodiversity: 55, sunshine: 38, internet: 42,
      basketball: 55, cricket: 150, coffee: 42, tourists: 42, mountain: 52, unesco: 28, cars: 28, temp: 68, lifeexpect: 52, sleep: 30, rainfall: 58, pizza: 32, skyscrapers: 80, tea: 60, youngpop: 102, fish: 48, military: 55, wind: 35, videogames: 30, satellites: 60, nobel: 50, sharks: 40, venomous: 72, mosquito: 65, gym: 38, minerals: 52, dogs: 22, smallarea: 100, smallpop: 65, smokers: 5, capital: 62,
      pollution: 37, desert: 74, fiveg: 33, houses: 31},
    facts: {
      smokers: "Bulgaria has one of the highest smoking rates in Europe — it consistently ranks in the top 5 globally, with tobacco deeply woven into Bulgarian social life.",
      biodiversity: "Bulgaria has remarkable biodiversity for its size — the Rhodope Mountains and Black Sea coast support wolves, bears, lynx, and hundreds of rare plant species.",
      literacy: "Bulgaria has one of the highest literacy rates in the world at about 98%, maintaining a strong tradition of education that dates back to the creation of the Cyrillic alphabet here.",
    }
  },
  {
    code: 'SK', name: 'Slovakia', flag: '🇸🇰',
    ranks: {
      population: 108, area: 122, gdp: 60, fifa: 55, forest: 40, peace: 20, co2: 65, happiness: 38, olympics: 48, spice: 85, coastline: 180, volcanoes: 150, literacy: 15, biodiversity: 68, sunshine: 55, internet: 40,
      basketball: 65, cricket: 150, coffee: 35, tourists: 48, mountain: 55, unesco: 30, cars: 25, temp: 82, lifeexpect: 42, sleep: 32, rainfall: 52, pizza: 32, skyscrapers: 90, tea: 50, youngpop: 98, fish: 68, military: 72, wind: 38, videogames: 32, satellites: 62, nobel: 52, sharks: 150, venomous: 88, mosquito: 68, gym: 32, minerals: 60, dogs: 22, smallarea: 112, smallpop: 58, smokers: 28, capital: 105,
      pollution: 55, desert: 76, fiveg: 31, houses: 27},
    facts: {
      cars: "Slovakia has the 25th most cars per capita in the world and is home to major car factories from Volkswagen, Kia, and Stellantis — producing more cars per capita than almost any country on Earth.",
      peace: "Slovakia is one of the 20 most peaceful countries in the world, a stable Central European democracy since splitting peacefully from Czechoslovakia in 1993.",
      literacy: "Slovakia has one of the highest literacy rates in the world at about 99.6%, with a strong Central European tradition of universal education.",
    }
  },
  {
    code: 'LT', name: 'Lithuania', flag: '🇱🇹',
    ranks: {
      population: 152, area: 140, gdp: 65, fifa: 78, forest: 32, peace: 18, co2: 78, happiness: 38, olympics: 52, spice: 105, coastline: 110, volcanoes: 150, literacy: 8, biodiversity: 80, sunshine: 70, internet: 25,
      basketball: 3, cricket: 150, coffee: 32, tourists: 55, mountain: 150, unesco: 38, cars: 22, temp: 100, lifeexpect: 48, sleep: 32, rainfall: 58, pizza: 38, skyscrapers: 90, tea: 58, youngpop: 102, fish: 58, military: 62, wind: 25, videogames: 28, satellites: 62, nobel: 55, sharks: 150, venomous: 150, mosquito: 82, gym: 32, minerals: 72, dogs: 22, smallarea: 102, smallpop: 42, smokers: 22, capital: 110,
      pollution: 58, desert: 78, fiveg: 34, houses: 29},
    facts: {
      basketball: "Lithuania is one of the top 3 basketball nations in the world — the sport is a national obsession here, with three Olympic bronze medals and a tradition of producing NBA-caliber players like Jonas Valančiūnas.",
      fiveg: "Lithuania is one of the top 5G nations globally and among the most digitally advanced Baltic states, with high-speed internet available to nearly all its population.",
      literacy: "Lithuania has one of the highest literacy rates in the world at about 99.8%, reflecting its strong educational tradition since regaining independence in 1990.",
    }
  },
  {
    code: 'AL', name: 'Albania', flag: '🇦🇱',
    ranks: {
      population: 145, area: 148, gdp: 115, fifa: 65, forest: 48, peace: 45, co2: 105, happiness: 68, olympics: 85, spice: 92, coastline: 75, volcanoes: 150, literacy: 40, biodiversity: 62, sunshine: 38, internet: 62,
      basketball: 72, cricket: 150, coffee: 42, tourists: 38, mountain: 55, unesco: 38, cars: 52, temp: 52, lifeexpect: 38, sleep: 38, rainfall: 35, pizza: 28, skyscrapers: 110, tea: 72, youngpop: 78, fish: 55, military: 80, wind: 38, videogames: 55, satellites: 80, nobel: 72, sharks: 28, venomous: 72, mosquito: 65, gym: 48, minerals: 55, dogs: 38, smallarea: 95, smallpop: 48, smokers: 15, capital: 95,
      pollution: 55, desert: 95, fiveg: 92, houses: 61},
    facts: {
      smokers: "Albania has one of the highest smoking rates in Europe — consistently ranking in the top 15 globally, with tobacco use widespread across all age groups.",
      coastline: "Albania has a beautiful stretch of Adriatic and Ionian coastline that has earned it the nickname 'the Riviera of the Balkans', increasingly popular with European tourists.",
      peace: "Albania has made significant strides in peacefulness since the 1990s and is now a NATO member state with improving democratic institutions.",
    }
  },
  {
    code: 'JO', name: 'Jordan', flag: '🇯🇴',
    ranks: {
      population: 90, area: 118, gdp: 88, fifa: 85, forest: 148, peace: 72, co2: 95, happiness: 78, olympics: 88, spice: 55, coastline: 148, volcanoes: 150, literacy: 42, biodiversity: 82, sunshine: 10, internet: 55,
      basketball: 55, cricket: 150, coffee: 55, tourists: 28, mountain: 65, unesco: 30, cars: 58, temp: 18, lifeexpect: 42, sleep: 42, rainfall: 145, pizza: 48, skyscrapers: 80, tea: 55, youngpop: 32, fish: 80, military: 48, wind: 38, videogames: 58, satellites: 58, nobel: 68, sharks: 42, venomous: 52, mosquito: 52, gym: 52, minerals: 48, dogs: 55, smallarea: 112, smallpop: 68, smokers: 18, capital: 52,
      pollution: 88, desert: 14, fiveg: 55, houses: 50},
    facts: {
      tourists: "Jordan is the 28th most visited country in the world, with Petra — the ancient Nabataean city carved from rose-red rock — consistently ranked among the world's greatest archaeological wonders.",
      desert: "Jordan has the 14th greatest desert coverage of any country — over 80% of its land is arid desert, including part of the Wadi Rum, one of Earth's most spectacular desert landscapes.",
      sunshine: "Jordan is one of the 10 sunniest countries on Earth, with Aqaba and the Jordan Valley receiving over 3,200 hours of sunshine per year, making it ideal for solar energy.",
    }
  },
  {
    code: 'OM', name: 'Oman', flag: '🇴🇲',
    ranks: {
      population: 120, area: 70, gdp: 58, fifa: 92, forest: 148, peace: 38, co2: 48, happiness: 50, olympics: 100, spice: 18, coastline: 42, volcanoes: 150, literacy: 48, biodiversity: 78, sunshine: 8, internet: 48,
      basketball: 90, cricket: 42, coffee: 65, tourists: 38, mountain: 32, unesco: 42, cars: 42, temp: 4, lifeexpect: 42, sleep: 48, rainfall: 155, pizza: 52, skyscrapers: 68, tea: 65, youngpop: 38, fish: 48, military: 42, wind: 42, videogames: 62, satellites: 52, nobel: 80, sharks: 42, venomous: 48, mosquito: 55, gym: 48, minerals: 38, dogs: 60, smallarea: 150, smallpop: 68, smokers: 55, capital: 68,
      pollution: 98, desert: 5, fiveg: 72, houses: 51},
    facts: {
      desert: "Oman has the fifth greatest desert coverage of any country — vast wadis, sand seas, and rocky plateaus stretch across much of this sultanate on the Arabian Peninsula.",
      peace: "Oman is the most peaceful Arab country in the world, pursuing a foreign policy of strict neutrality and hosting diplomatic talks between rival nations.",
      sunshine: "Oman is one of the eight sunniest countries on Earth, with the interior desert regions receiving over 3,300 hours of sunshine per year.",
      spice: "Oman is the world's top producer of frankincense — the ancient aromatic resin that was once worth more than gold, still harvested from trees in the Dhofar mountains.",
    }
  },
  {
    code: 'PY', name: 'Paraguay', flag: '🇵🇾',
    ranks: {
      population: 98, area: 60, gdp: 90, fifa: 52, forest: 28, peace: 55, co2: 145, happiness: 45, olympics: 80, spice: 65, coastline: 180, volcanoes: 150, literacy: 35, biodiversity: 32, sunshine: 32, internet: 80,
      basketball: 65, cricket: 150, coffee: 52, tourists: 65, mountain: 150, unesco: 40, cars: 68, temp: 32, lifeexpect: 42, sleep: 42, rainfall: 30, pizza: 58, skyscrapers: 100, tea: 80, youngpop: 22, fish: 45, military: 65, wind: 42, videogames: 72, satellites: 70, nobel: 72, sharks: 150, venomous: 28, mosquito: 28, gym: 65, minerals: 62, dogs: 38, smallarea: 148, smallpop: 65, smokers: 62, capital: 88,
      pollution: 64, desert: 132, fiveg: 85, houses: 49},
    facts: {
      co2: "Paraguay is one of the world's cleanest countries in terms of CO₂ emissions — it generates nearly 100% of its electricity from the Itaipú Dam, one of the world's largest hydroelectric plants.",
      forest: "Paraguay has the 28th largest forest area in the world and has made significant commitments to protecting its portion of the Gran Chaco and Atlantic Forest ecosystems.",
      rainfall: "Paraguay receives substantial rainfall year-round, with the Itaipú reservoir providing the energy that powers both Paraguay and supplies electricity to Brazil and Argentina.",
    }
  },
  {
    code: 'HT', name: 'Haiti', flag: '🇭🇹',
    ranks: {
      population: 88, area: 158, gdp: 138, fifa: 78, forest: 148, peace: 158, co2: 148, happiness: 148, olympics: 75, spice: 62, coastline: 55, volcanoes: 35, literacy: 130, biodiversity: 45, sunshine: 25, internet: 118,
      basketball: 72, cricket: 150, coffee: 65, tourists: 78, mountain: 65, unesco: 38, cars: 140, temp: 22, lifeexpect: 92, sleep: 42, rainfall: 32, pizza: 85, skyscrapers: 148, tea: 88, youngpop: 16, fish: 60, military: 90, wind: 42, videogames: 115, satellites: 90, nobel: 78, sharks: 32, venomous: 45, mosquito: 22, gym: 120, minerals: 65, dogs: 55, smallarea: 112, smallpop: 72, smokers: 100, capital: 80,
      pollution: 98, desert: 148, fiveg: 155, houses: 88},
    facts: {
      youngpop: "Haiti has one of the youngest populations in the Caribbean, with a median age of about 23 years and over 35% of the population under 15.",
      volcanoes: "Haiti sits on the Caribbean tectonic plate, experiencing frequent seismic activity including the devastating 2010 earthquake that fundamentally shaped its recent history.",
      olympics: "Despite its challenges, Haiti has competed in the Olympics since 1900 and has produced remarkable athletes, particularly in track and field events.",
    }
  },
]

// FIX: the "smallest" ranks were typed in by hand and did not match the "largest" ranks
// (for example Luxembourg showed 158th smallest). Work them out from the "largest" ranks
// instead, so the two always mirror each other. 1 = smallest, about 195 = largest.
const WORLD_COUNT_PLUS_ONE = 196
for (const c of COUNTRIES) {
  if (c.ranks.area != null) c.ranks.smallarea = WORLD_COUNT_PLUS_ONE - c.ranks.area
  if (c.ranks.population != null) c.ranks.smallpop = WORLD_COUNT_PLUS_ONE - c.ranks.population
}

// NEW METRIC: Time Zones
// Source: Wikipedia, "List of time zones by country" (retrieved Nov 2026). It counts a country's
// time zones including its overseas territories, and leaves out Antarctic claims.
// Two entries differ from that table, checked against other sources:
//   Canada = 6. The table shows 5 and puts British Columbia on Mountain time, but BC is mostly
//   Pacific time, and timeanddate.com also lists Canada with 6.
//   Denmark = 4, as the table says (Greenland changed its clocks in 2023; older lists say 5).
// Every country not named below has exactly 1 time zone in that table.
// Ranks are shared when countries tie. A country's rank is 1 + the number of countries in the
// whole world with MORE time zones, counted from the full table:
//   12 zones -> 1st | 11 -> 2nd | 9 -> 4th | 6 -> 6th | 5 -> 7th | 4 -> 8th
//   3 -> 11th | 2 -> 14th | 1 -> 23rd
METRICS.push({ id: 'timezones', icon: '🕒', name: 'Time Zones', desc: 'Most time zones (with territories)' })
const TIME_ZONES = {
  FR: 12, RU: 11, US: 11, AU: 9, GB: 9, CA: 6, NZ: 5, BR: 4, DK: 4, MX: 4,
  CL: 3, ID: 3, CD: 2, EC: 2, NL: 2, MN: 2, PG: 2, PT: 2, ZA: 2, ES: 2,
}
const TIME_ZONE_RANK = { 12: 1, 11: 2, 9: 4, 6: 6, 5: 7, 4: 8, 3: 11, 2: 14, 1: 23 }
for (const c of COUNTRIES) {
  c.ranks.timezones = TIME_ZONE_RANK[TIME_ZONES[c.code] ?? 1]
}

// NEW METRIC: Land Neighbors
// Source: Wikipedia, "List of countries and territories by land and maritime borders" (the
// "No. of land border neighbours" column). The count is how many other countries share a land
// border with this country's main territory. Rules used:
//   Only main territories touching each other count. Overseas parts and territories do not, so
//   France = 8 (not counting Brazil and Suriname via French Guiana), the United Kingdom = 1
//   (Ireland, not counting Spain via Gibraltar), the Netherlands = 2, Denmark = 1, Canada = 1,
//   Brazil = 9, Suriname = 2, Spain = 4, and Cyprus = 0 (the UK bases on the island are a territory).
//   Borders along rivers and lakes count; borders that exist only as a bridge or tunnel do not.
//   The source counts Kosovo, Western Sahara, and Palestine as separate states, so Serbia = 8.
//   Taiwan is not one of the 195 states; the source lists it with 0 land neighbours.
// A country's rank is 1 + the number of the world's 195 countries with MORE neighbours, so
// countries with the same count share a rank. World counts: 14 -> 2 countries, 9 -> 3, 8 -> 6,
// 7 -> 9, 6 -> 14, 5 -> 21, 4 -> 29, 3 -> 26, 2 -> 29, 1 -> 17, 0 -> 39.
METRICS.push({ id: 'neighbors', icon: '🧭', name: 'Land Neighbors', desc: 'Most countries sharing a land border' })
const NEIGHBORS = {
  CN: 14, RU: 14, BR: 9, CD: 9, DE: 9, AT: 8, FR: 8, RS: 8, TR: 8, TZ: 8,
  ZM: 8, HU: 7, IN: 7, PL: 7, SA: 7, UA: 7, CM: 6, DZ: 6, ET: 6, IT: 6,
  MZ: 6, ZA: 6, AR: 5, BG: 5, BO: 5, CH: 5, CI: 5, CO: 5, HR: 5, KE: 5,
  KZ: 5, PE: 5, RO: 5, SK: 5, SN: 5, UG: 5, AL: 4, AO: 4, BE: 4, CZ: 4,
  EG: 4, ES: 4, GR: 4, GT: 4, JO: 4, LT: 4, NG: 4, PK: 4, RW: 4, TH: 4,
  ZW: 4, CL: 3, FI: 3, GH: 3, ID: 3, KP: 3, LU: 3, MX: 3, MY: 3, NO: 3,
  OM: 3, PY: 3, VE: 3, VN: 3, AE: 2, BD: 2, CR: 2, EC: 2, EE: 2, MA: 2,
  MD: 2, MN: 2, NL: 2, NP: 2, PA: 2, SE: 2, US: 2, UY: 2, CA: 1, DK: 1,
  GB: 1, HT: 1, IE: 1, KR: 1, MC: 1, PG: 1, PT: 1, VA: 1, AU: 0, CU: 0,
  IS: 0, JM: 0, JP: 0, NZ: 0, PH: 0, SG: 0, TW: 0,
}
const NEIGHBOR_RANK = { 14: 1, 9: 3, 8: 6, 7: 12, 6: 21, 5: 35, 4: 56, 3: 85, 2: 111, 1: 140, 0: 157 }
for (const c of COUNTRIES) {
  c.ranks.neighbors = NEIGHBOR_RANK[NEIGHBORS[c.code]]
}

// NEW METRICS FROM REAL DATA (Our World in Data downloads, November 2026)
// Each rank was calculated from the published numbers for ONE year, shown below.
// A country with no published number for that year gets no rank for that metric. The pairing rule
// further down makes sure the game never shows a metric for a country that has no rank.

// RENEWABLE POWER (2024)
// Source: Ember (2026) and other sources, via Our World in Data: "Share of electricity generated by renewables".
// Rank 1 = highest share of electricity from renewables. Ranked among the 179 countries that have 2024 data, so
// countries that tie share a rank. No data (left out, never guessed): Monaco, Ukraine, Vatican City.
METRICS.push({ id: 'renewables', icon: '♻️', name: 'Renewable Power', desc: 'Most electricity from renewables' })
const RENEWABLES_RANKS = {
  AL: 1, CD: 1, ET: 1, IS: 1, NP: 1, PY: 1, CR: 8, UY: 9, NO: 10, UG: 12,
  KE: 17, VE: 18, LU: 20, DK: 21, ZM: 23, BR: 24, AT: 27, NZ: 28, PT: 29, LT: 30,
  MZ: 31, AO: 37, HR: 39, CM: 40, EC: 41, CL: 42, SE: 43, GT: 44, PA: 45, CH: 46,
  CA: 47, KP: 49, CO: 51, PE: 52, DE: 54, ES: 55, ZW: 56, FI: 57, EE: 58, NL: 63,
  GB: 64, IT: 65, RW: 66, GR: 67, IE: 69, RO: 70, TR: 71, VN: 75, PK: 80, GH: 81,
  BE: 84, AU: 85, AR: 87, BO: 88, CN: 89, TZ: 90, RS: 91, HU: 93, PL: 94, BG: 96,
  CI: 98, FR: 99, NG: 101, MA: 103, JO: 104, US: 105, SK: 106, PG: 108, JP: 109, MX: 111,
  PH: 114, MY: 115, IN: 117, SN: 118, HT: 121, RU: 122, ID: 123, CZ: 126, KZ: 130, TH: 131,
  JM: 135, ZA: 136, EG: 139, MD: 141, TW: 141, KR: 142, MN: 145, AE: 146, SG: 152, OM: 153,
  CU: 156, SA: 164, BD: 165, DZ: 168,
}
for (const c of COUNTRIES) {
  if (RENEWABLES_RANKS[c.code] !== undefined) c.ranks.renewables = RENEWABLES_RANKS[c.code]
}

// SOLAR & WIND POWER (2024)
// Source: Ember (2026) and other sources, via Our World in Data: "Share of electricity generated by solar and wind power".
// Rank 1 = highest share of electricity from solar and wind. Ranked among the 177 countries that have 2024 data, so
// countries that tie share a rank. No data (left out, never guessed): Monaco, Singapore, Ukraine, Vatican City.
METRICS.push({ id: 'solarwind', icon: '🌞', name: 'Solar & Wind Power', desc: 'Most electricity from solar and wind' })
const SOLARWIND_RANKS = {
  DK: 1, LT: 2, LU: 3, PT: 4, NL: 5, DE: 6, ES: 7, UY: 8, GR: 9, IE: 10,
  CL: 14, GB: 15, EE: 16, BE: 19, AU: 20, HU: 21, FI: 22, SE: 23, PL: 24, BR: 26,
  JO: 27, HR: 29, MA: 30, AT: 31, IT: 32, KE: 33, RO: 38, TR: 40, CN: 41, BG: 42,
  US: 43, CD: 46, PA: 49, SN: 50, PK: 52, AR: 54, MX: 57, VN: 59, FR: 61, CR: 62,
  ZA: 63, IN: 68, JP: 69, NZ: 70, NO: 72, JM: 77, CA: 78, TW: 79, AE: 80, MN: 81,
  CH: 84, BO: 87, CZ: 89, KR: 90, KZ: 91, EG: 93, PE: 94, MD: 95, OM: 98, TH: 99,
  GT: 101, AL: 103, CO: 104, RS: 106, RW: 108, ET: 110, UG: 111, PH: 112, AO: 114, SK: 117,
  SA: 119, MY: 121, CU: 124, BD: 126, NP: 127, DZ: 129, ZM: 133, EC: 135, GH: 137, KP: 138,
  RU: 139, CM: 143, ID: 146, TZ: 147, MZ: 148, ZW: 150, NG: 151, PG: 155, CI: 156, IS: 160,
  VE: 162, HT: 164, PY: 164,
}
for (const c of COUNTRIES) {
  if (SOLARWIND_RANKS[c.code] !== undefined) c.ranks.solarwind = SOLARWIND_RANKS[c.code]
}

// CO₂ PER PERSON (2024)
// Source: Global Carbon Budget (2026), via Our World in Data: "CO₂ emissions per capita".
// Rank 1 = most CO₂ per person. Ranked among the 192 countries that have 2024 data, so
// countries that tie share a rank. No data (left out, never guessed): Monaco, Vatican City.
METRICS.push({ id: 'co2pc', icon: '👣', name: 'CO₂ Per Person', desc: 'Most CO₂ emitted per person' })
const CO2PC_RANKS = {
  AE: 6, SA: 7, OM: 8, AU: 9, US: 10, KZ: 11, CA: 12, RU: 14, MN: 15, KR: 16,
  TW: 17, LU: 19, IS: 20, SG: 21, CN: 23, MY: 24, JP: 25, ZA: 26, BE: 27, PL: 28,
  CZ: 29, DE: 31, NO: 32, RS: 34, NL: 35, IE: 37, NZ: 40, AT: 41, EE: 43, TR: 46,
  GR: 48, FI: 49, SK: 51, IT: 53, BG: 55, HR: 57, GB: 59, DK: 61, LT: 62, ES: 63,
  DZ: 64, HU: 68, FR: 69, AR: 70, SE: 72, CL: 73, TH: 74, VE: 76, MX: 77, UA: 78,
  VN: 79, CH: 81, PT: 83, RO: 84, JM: 96, ID: 97, PA: 98, EC: 102, KP: 104, BR: 105,
  JO: 106, UY: 108, IN: 109, CU: 110, BO: 111, EG: 112, CO: 113, PE: 115, MD: 116, CR: 119,
  MA: 120, AL: 122, PH: 124, PY: 131, GT: 136, ZW: 140, PK: 144, PG: 145, SN: 147, GH: 148,
  AO: 153, BD: 154, NG: 155, CI: 157, NP: 159, ZM: 161, KE: 164, CM: 171, TZ: 172, MZ: 174,
  RW: 181, ET: 182, UG: 183, HT: 187, CD: 192,
}
for (const c of COUNTRIES) {
  if (CO2PC_RANKS[c.code] !== undefined) c.ranks.co2pc = CO2PC_RANKS[c.code]
}

// FRESH WATER (2022)
// Source: AQUASTAT (FAO), via the World Bank and Our World in Data: "Renewable internal freshwater resources per capita".
// Rank 1 = most renewable fresh water per person. Ranked among the 180 countries that have 2022 data, so
// countries that tie share a rank. No data (left out, never guessed): Monaco, Taiwan, Vatican City.
METRICS.push({ id: 'water', icon: '💧', name: 'Fresh Water', desc: 'Most fresh water per person' })
const WATER_RANKS = {
  IS: 1, PG: 5, CA: 6, NO: 7, NZ: 9, PE: 11, CL: 12, CO: 13, PA: 19, RU: 20,
  VE: 21, UY: 23, BR: 24, BO: 26, EC: 27, CR: 29, FI: 31, AU: 32, PY: 35, MY: 36,
  SE: 37, AL: 43, MN: 44, CM: 45, HR: 46, EE: 48, IE: 49, CD: 52, US: 54, ID: 56,
  NP: 59, AR: 60, GT: 62, AT: 63, GR: 65, LT: 66, CH: 67, PH: 68, AO: 69, ZM: 70,
  JM: 72, PT: 74, VN: 75, CU: 76, JP: 77, BG: 78, KZ: 79, MX: 80, TH: 81, IT: 82,
  MZ: 83, FR: 86, TR: 88, KP: 90, CI: 91, ES: 95, SK: 96, RO: 99, GB: 102, CN: 105,
  LU: 109, SN: 110, PL: 111, UA: 115, TZ: 116, DE: 117, RS: 118, KR: 119, CZ: 120, HT: 123,
  BE: 124, DK: 125, IN: 126, NG: 127, ET: 130, GH: 131, UG: 134, MA: 140, ZW: 141, ZA: 144,
  RW: 145, MD: 146, HU: 147, NL: 148, BD: 149, KE: 156, OM: 160, DZ: 163, PK: 164, SG: 167,
  SA: 172, JO: 173, AE: 177, EG: 178,
}
for (const c of COUNTRIES) {
  if (WATER_RANKS[c.code] !== undefined) c.ranks.water = WATER_RANKS[c.code]
}

// MILITARY BUDGET (2025)
// Source: SIPRI (2026), via Our World in Data: "Military expenditure as a share of government spending".
// Rank 1 = largest share of government spending on the military. Ranked among the 148 countries that have 2025 data, so
// countries that tie share a rank. No data (left out, never guessed): Cuba, Monaco, North Korea, United Arab Emirates, Vatican City, Venezuela, Zimbabwe.
METRICS.push({ id: 'milshare', icon: '🪖', name: 'Military Budget', desc: 'Largest share of government spending' })
const MILSHARE_RANKS = {
  UA: 1, DZ: 2, SA: 3, OM: 5, RU: 7, SG: 9, PK: 17, JO: 18, TW: 21, KR: 23,
  MA: 26, VN: 28, CO: 29, PL: 30, UG: 31, US: 33, IN: 34, CD: 37, LT: 39, EE: 40,
  BD: 42, UY: 44, AL: 46, NO: 47, DK: 48, CM: 49, RS: 51, ID: 52, MZ: 53, GR: 55,
  AO: 56, NG: 57, TR: 58, TZ: 60, CL: 62, EC: 63, RO: 65, GB: 67, PH: 68, BG: 69,
  SN: 70, CN: 73, SE: 74, AU: 76, NL: 77, ES: 79, RW: 81, KE: 84, DE: 85, ZM: 86,
  NP: 87, MY: 88, TH: 89, FI: 90, PY: 93, HU: 94, CZ: 95, SK: 97, HR: 98, ET: 100,
  JM: 101, PT: 104, JP: 107, CI: 109, IT: 110, CA: 112, BE: 113, PE: 114, FR: 115, GT: 116,
  BO: 119, NZ: 121, MX: 122, MN: 125, EG: 126, GH: 127, HT: 129, CH: 130, BR: 132, ZA: 133,
  KZ: 135, AT: 137, AR: 138, LU: 139, PG: 140, MD: 142, IE: 144, CR: 146, IS: 146, PA: 146,
}
for (const c of COUNTRIES) {
  if (MILSHARE_RANKS[c.code] !== undefined) c.ranks.milshare = MILSHARE_RANKS[c.code]
}

function fisherYates(arr) {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

// PAIRING RULE: never show a metric for a country that has no rank for it.
// Solo mode and the teacher screen pick countries and metrics separately, so each picker looks at
// what the other one chose last and only offers choices that have a rank for every one of them.
// Classroom rooms ask for completeOnly, which draws only from countries that have a rank for
// every metric, because students' metrics are chosen on their own screens.
let _currentCountries = null
let _currentMetricIds = null
const hasRank = (country, metricId) => typeof country.ranks[metricId] === 'number'

export function getRandomCountries(count = 8, completeOnly = false) {
  let pool = COUNTRIES
  if (completeOnly) {
    pool = pool.filter(c => METRICS.every(m => hasRank(c, m.id)))
  } else if (_currentMetricIds) {
    pool = pool.filter(c => _currentMetricIds.every(id => hasRank(c, id)))
  }
  const picked = fisherYates(pool).slice(0, count)
  _currentCountries = picked
  return picked
}

export function getRandomMetrics(count = 8) {
  let pool = METRICS
  if (_currentCountries) {
    pool = pool.filter(m => _currentCountries.every(c => hasRank(c, m.id)))
  }
  const picked = fisherYates(pool).slice(0, count)
  _currentMetricIds = picked.map(m => m.id)
  return picked
}

export function getRankColor(rank) {
  if (rank <= 10) return '#4adf80'
  if (rank <= 30) return '#d4aa50'
  if (rank <= 80) return '#e08040'
  return '#e04040'
}

export function getRankLabel(rank) {
  if (rank <= 10) return 'Excellent'
  if (rank <= 30) return 'Good'
  if (rank <= 80) return 'Average'
  return 'Poor'
}

export function getWorstMetric(country, availableMetricIds) {
  let worst = null
  let worstRank = -1
  for (const id of availableMetricIds) {
    const rank = country.ranks[id]
    if (rank > worstRank) {
      worstRank = rank
      worst = id
    }
  }
  return worst
}

export function getGrade(score) {
  if (score <= 25) return { label: 'Legendary', color: '#4adf80' }
  if (score <= 50) return { label: 'Expert', color: '#d4aa50' }
  if (score <= 100) return { label: 'Good', color: '#e08040' }
  if (score <= 150) return { label: 'Average', color: '#e08040' }
  return { label: 'Try Again', color: '#e04040' }
}
