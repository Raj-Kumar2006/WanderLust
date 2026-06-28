const sampleListings = [

  // ===================== TRENDING =====================
  {
    title: "Royal Imperial Penthouse",
    description: "Experience ultimate luxury in this 360-degree view penthouse with a private helipad.",
    image: { filename: "royal-penthouse", url: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200" },
    price: 16000, location: "Dubai Marina", country: "UAE", category: "Trending",
  },
  {
    title: "Monaco Penthouse Suite",
    description: "Ultra-luxurious penthouse overlooking Monte Carlo Casino and harbor.",
    image: { filename: "monaco-penthouse", url: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200" },
    price: 19500, location: "Monte Carlo", country: "Monaco", category: "Trending",
  },
  {
    title: "Lake Como Villa",
    description: "19th-century villa with private dock, terraced gardens, and mountain backdrop.",
    image: { filename: "lakecomo-villa", url: "https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?auto=format&fit=crop&w=1200&q=80" },
    price: 15700, location: "Bellagio", country: "Italy", category: "Trending",
  },
  {
    title: "Maldivian Water Villa",
    description: "Overwater villa with glass floor and direct access to crystal clear lagoon.",
    image: { filename: "maldives-villa", url: "https://images.unsplash.com/photo-1516496636080-14fb876e029d?auto=format&fit=crop&w=1200&q=80" },
    price: 8900, location: "North Male Atoll", country: "Maldives", category: "Trending",
  },
  {
    title: "Venice Water Palace",
    description: "Unique palace-style home with private water entrance on the Grand Canal.",
    image: { filename: "venice-palace", url: "https://images.unsplash.com/photo-1533779283484-8ad4940aa3a8?auto=format&fit=crop&w=1200" },
    price: 6300, location: "Grand Canal", country: "Italy", category: "Trending",
  },
  {
    title: "Santorini Cliffside Suite",
    description: "Iconic blue-domed suite carved into volcanic cliffs with infinity pool.",
    image: { filename: "santorini-suite", url: "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?auto=format&fit=crop&w=1200" },
    price: 9200, location: "Oia", country: "Greece", category: "Trending",
  },

  // ===================== MOUNTAINS =====================
  {
    title: "Mountain Log Cabin",
    description: "Cozy cabin with fireplace and stunning mountain views, perfect for ski season.",
    image: { filename: "mountain-cabin", url: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&w=1200" },
    price: 1200, location: "Aspen", country: "USA", category: "Mountains",
  },
  {
    title: "Swiss Alpine Chalet",
    description: "Traditional wooden chalet with ski-in/ski-out access in the Swiss Alps.",
    image: { filename: "swiss-chalet", url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200&q=80" },
    price: 2900, location: "Zermatt", country: "Switzerland", category: "Mountains",
  },
  {
    title: "Queenstown Alpine Retreat",
    description: "Modern retreat with panoramic views of Lake Wakatipu and The Remarkables.",
    image: { filename: "queenstown-retreat", url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200" },
    price: 5200, location: "Queenstown", country: "New Zealand", category: "Mountains",
  },
  {
    title: "Himalayan Stone Cottage",
    description: "Rustic stone cottage in the lap of Himalayas with river and forest views.",
    image: { filename: "himalayan-cottage", url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1200" },
    price: 800, location: "Manali", country: "India", category: "Mountains",
  },
  {
    title: "Austrian Mountain Lodge",
    description: "Charming Alpine lodge surrounded by meadows and snow-capped peaks.",
    image: { filename: "austrian-lodge", url: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=1200" },
    price: 1800, location: "Hallstatt", country: "Austria", category: "Mountains",
  },
  {
    title: "Rocky Mountain Treehouse",
    description: "Elevated treehouse getaway nestled in the Rocky Mountains with hot tub.",
    image: { filename: "rocky-treehouse", url: "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?auto=format&fit=crop&w=1200" },
    price: 2200, location: "Banff", country: "Canada", category: "Mountains",
  },

  // ===================== BEACH =====================
  {
    title: "Beachfront Villa Bali",
    description: "Luxurious villa with direct beach access and infinity pool overlooking the ocean.",
    image: { filename: "bali-villa", url: "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1200" },
    price: 4500, location: "Seminyak", country: "Indonesia", category: "Beach",
  },
  {
    title: "Rio Beachfront Apartment",
    description: "Apartment with stunning views of Copacabana Beach and Sugarloaf Mountain.",
    image: { filename: "rio-apartment", url: "https://images.unsplash.com/photo-1544984243-ec57ea16fe25?auto=format&fit=crop&w=1200&q=80" },
    price: 2700, location: "Copacabana", country: "Brazil", category: "Beach",
  },
  {
    title: "Phuket Cliffside Villa",
    description: "Villa perched on limestone cliffs with infinity pool overlooking Andaman Sea.",
    image: { filename: "phuket-villa", url: "https://images.unsplash.com/photo-1439130490301-25e322d88054?auto=format&fit=crop&w=1200" },
    price: 5800, location: "Kamala", country: "Thailand", category: "Beach",
  },
  {
    title: "Goa Beachside Cottage",
    description: "Charming Portuguese-style cottage steps away from Calangute Beach.",
    image: { filename: "goa-cottage", url: "https://images.unsplash.com/photo-1512100356356-de1b84283e18?auto=format&fit=crop&w=1200" },
    price: 650, location: "Calangute", country: "India", category: "Beach",
  },
  {
    title: "Malibu Oceanfront Home",
    description: "Iconic California beach house with private deck and Pacific Ocean views.",
    image: { filename: "malibu-home", url: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=1200" },
    price: 8500, location: "Malibu", country: "USA", category: "Beach",
  },
  {
    title: "Amalfi Coastal Retreat",
    description: "Elegant retreat on Amalfi Coast with terraced lemon gardens and sea views.",
    image: { filename: "amalfi-retreat", url: "https://images.unsplash.com/photo-1533587851505-d119e13fa0d7?auto=format&fit=crop&w=1200" },
    price: 6100, location: "Positano", country: "Italy", category: "Beach",
  },

  // ===================== NATURE =====================
  {
    title: "Cape Town Vineyard Estate",
    description: "Elegant estate surrounded by vineyards with Table Mountain views.",
    image: { filename: "cape-town-estate", url: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=1200" },
    price: 5100, location: "Stellenbosch", country: "South Africa", category: "Nature",
  },
  {
    title: "Amazon Jungle Lodge",
    description: "Eco-lodge deep in the Amazon rainforest with guided wildlife tours.",
    image: { filename: "amazon-lodge", url: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1200" },
    price: 1800, location: "Manaus", country: "Brazil", category: "Nature",
  },
  {
    title: "New Zealand Forest Cabin",
    description: "Secluded cabin surrounded by ancient ferns and native bush with birdsong.",
    image: { filename: "nz-forest-cabin", url: "https://images.unsplash.com/photo-1542401886-65d6c61db217?auto=format&fit=crop&w=1200" },
    price: 2200, location: "Rotorua", country: "New Zealand", category: "Nature",
  },
  {
    title: "Costa Rica Rainforest Villa",
    description: "Open-air villa immersed in lush rainforest with private waterfall.",
    image: { filename: "costarica-villa", url: "https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?auto=format&fit=crop&w=1200" },
    price: 3400, location: "Monteverde", country: "Costa Rica", category: "Nature",
  },
  {
    title: "Borneo Canopy House",
    description: "Unique canopy-level accommodation with orangutan sightings from balcony.",
    image: { filename: "borneo-canopy", url: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=1200" },
    price: 2600, location: "Sandakan", country: "Malaysia", category: "Nature",
  },

  // ===================== CITY =====================
  {
    title: "Modern Tokyo Apartment",
    description: "Sleek apartment in the heart of Shibuya with panoramic city views.",
    image: { filename: "tokyo-apartment", url: "https://images.unsplash.com/photo-1484101403633-562f891dc89a?auto=format&fit=crop&w=1200" },
    price: 3200, location: "Shibuya", country: "Japan", category: "City",
  },
  {
    title: "New York City Loft",
    description: "Spacious industrial loft in trendy SoHo with exposed brick walls.",
    image: { filename: "nyc-loft", url: "https://images.unsplash.com/photo-1505843513577-22bb7d21e455?auto=format&fit=crop&w=1200" },
    price: 4800, location: "SoHo", country: "USA", category: "City",
  },
  {
    title: "London Townhouse",
    description: "Elegant Victorian townhouse in prestigious Kensington neighborhood.",
    image: { filename: "london-townhouse", url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200" },
    price: 4100, location: "Kensington", country: "UK", category: "City",
  },
  {
    title: "Parisian Luxury Loft",
    description: "Charming loft with Eiffel Tower views and classic French architecture.",
    image: { filename: "paris-loft", url: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=1200" },
    price: 2800, location: "Le Marais", country: "France", category: "City",
  },
  {
    title: "Singapore Skyline Condo",
    description: "High-rise condo with infinity pool and panoramic views of the city skyline.",
    image: { filename: "singapore-condo", url: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=1200" },
    price: 3900, location: "Marina Bay", country: "Singapore", category: "City",
  },
  {
    title: "Barcelona Modern Apartment",
    description: "Designer apartment near Sagrada Familia with stylish Catalan interiors.",
    image: { filename: "barcelona-apartment", url: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=1200" },
    price: 2200, location: "Eixample", country: "Spain", category: "City",
  },

  // ===================== ARCTIC =====================
  {
    title: "Reykjavik Aurora Home",
    description: "Contemporary home with geothermal heating and Northern Lights viewing deck.",
    image: { filename: "reykjavik-home", url: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?auto=format&fit=crop&w=1200" },
    price: 3200, location: "Reykjavik", country: "Iceland", category: "Arctic",
  },
  {
    title: "Norwegian Fjord Cabin",
    description: "Secluded cabin above a fjord with direct access to Northern Lights sky.",
    image: { filename: "norway-fjord", url: "https://images.unsplash.com/photo-1520769669658-f07657f5a307?auto=format&fit=crop&w=1200" },
    price: 4100, location: "Tromsø", country: "Norway", category: "Arctic",
  },
  {
    title: "Finnish Lakeside Sauna Cabin",
    description: "Traditional Finnish cabin with private lakeside sauna and ice swimming hole.",
    image: { filename: "finland-sauna", url: "https://images.unsplash.com/photo-1586348943529-beaae6c28db9?auto=format&fit=crop&w=1200" },
    price: 2700, location: "Rovaniemi", country: "Finland", category: "Arctic",
  },
  {
    title: "Greenland Ice House",
    description: "Unique glass-walled house on Greenlandic ice sheet for aurora borealis viewing.",
    image: { filename: "greenland-ice", url: "https://images.unsplash.com/photo-1476610182048-b716b8518aae?auto=format&fit=crop&w=1200" },
    price: 5500, location: "Nuuk", country: "Greenland", category: "Arctic",
  },

  // ===================== CAMPING =====================
  {
    title: "Yosemite Glamping Tent",
    description: "Luxury safari tent in Yosemite valley with star-gazing deck and fire pit.",
    image: { filename: "yosemite-tent", url: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=1200" },
    price: 950, location: "Yosemite Valley", country: "USA", category: "Camping",
  },
  {
    title: "Patagonia Base Camp",
    description: "Adventure base camp at the foot of Torres del Paine with guided treks.",
    image: { filename: "patagonia-camp", url: "https://images.unsplash.com/photo-1510672981848-a1c4f1cb5ccf?auto=format&fit=crop&w=1200" },
    price: 1400, location: "Torres del Paine", country: "Chile", category: "Camping",
  },
  {
    title: "African Safari Camp",
    description: "Luxury tented camp in the Serengeti with Big Five game drives included.",
    image: { filename: "safari-camp", url: "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1200" },
    price: 4200, location: "Serengeti", country: "Tanzania", category: "Camping",
  },
  {
    title: "Rajasthan Desert Camp",
    description: "Royal tent camp in the Thar Desert with camel safari and starlit dinners.",
    image: { filename: "rajasthan-camp", url: "https://images.unsplash.com/photo-1542401886-65d6c61db217?auto=format&fit=crop&w=1200" },
    price: 1100, location: "Jaisalmer", country: "India", category: "Camping",
  },

  // ===================== HISTORIC =====================
  {
    title: "Delhi Heritage Haveli",
    description: "Restored Mughal mansion with intricate jali work and lush courtyard garden.",
    image: { filename: "delhi-haveli", url: "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1200" },
    price: 2900, location: "Old Delhi", country: "India", category: "Historic",
  },
  {
    title: "Marrakech Riad",
    description: "Traditional Moroccan house with central courtyard, fountain, and rooftop terrace.",
    image: { filename: "marrakech-riad", url: "https://images.unsplash.com/photo-1539635278303-d4002c07eae3?auto=format&fit=crop&w=1200" },
    price: 1400, location: "Medina", country: "Morocco", category: "Historic",
  },
  {
    title: "Kyoto Traditional Machiya",
    description: "Authentic townhouse with Japanese garden and traditional tea ceremony room.",
    image: { filename: "kyoto-machiya", url: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?auto=format&fit=crop&w=1200" },
    price: 2600, location: "Gion", country: "Japan", category: "Historic",
  },
  {
    title: "Prague Castle View Apartment",
    description: "Apartment in 16th-century building with direct views of Prague Castle.",
    image: { filename: "prague-apartment", url: "https://images.unsplash.com/photo-1514890547357-a9ee288728e0?auto=format&fit=crop&w=1200" },
    price: 2100, location: "Mala Strana", country: "Czech Republic", category: "Historic",
  },
  {
    title: "Istanbul Bosphorus Mansion",
    description: "Ottoman-era mansion on the Bosphorus with European and Asian views.",
    image: { filename: "istanbul-mansion", url: "https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?auto=format&fit=crop&w=1200" },
    price: 6700, location: "Bebek", country: "Turkey", category: "Historic",
  },

  // ===================== ROOMS =====================
  {
    title: "Tokyo Guest Room",
    description: "Cozy private room in traditional Japanese home with garden access.",
    image: { filename: "tokyo-room", url: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1200" },
    price: 800, location: "Asakusa", country: "Japan", category: "Rooms",
  },
  {
    title: "Paris Boutique Room",
    description: "Charming en-suite room in a haussmann building near the Louvre.",
    image: { filename: "paris-room", url: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1200" },
    price: 950, location: "1st Arrondissement", country: "France", category: "Rooms",
  },
  {
    title: "Mumbai Sea-View Room",
    description: "Bright private room with Arabian Sea view and host breakfast included.",
    image: { filename: "mumbai-room", url: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=1200" },
    price: 600, location: "Bandra", country: "India", category: "Rooms",
  },
  {
    title: "New York Cozy Studio",
    description: "Well-equipped studio in Manhattan just 10 minutes from Times Square.",
    image: { filename: "nyc-studio", url: "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?auto=format&fit=crop&w=1200" },
    price: 1800, location: "Midtown Manhattan", country: "USA", category: "Rooms",
  },

  // ===================== HOTELS =====================
  {
    title: "Luxury Miami Hotel Suite",
    description: "5-star hotel suite with ocean view, rooftop pool, and butler service.",
    image: { filename: "miami-hotel", url: "https://images.unsplash.com/photo-1578774204375-826dc2b16b08?auto=format&fit=crop&w=1200" },
    price: 5200, location: "Miami Beach", country: "USA", category: "Hotels",
  },
  {
    title: "Bangkok Rooftop Hotel",
    description: "Designer hotel with rooftop infinity pool overlooking Bangkok skyline.",
    image: { filename: "bangkok-hotel", url: "https://images.unsplash.com/photo-1455587734955-081b22074882?auto=format&fit=crop&w=1200" },
    price: 2100, location: "Sukhumvit", country: "Thailand", category: "Hotels",
  },
  {
    title: "Vienna Grand Hotel",
    description: "Historic grand hotel near Vienna State Opera with imperial interiors.",
    image: { filename: "vienna-hotel", url: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=1200" },
    price: 3800, location: "Innere Stadt", country: "Austria", category: "Hotels",
  },
  {
    title: "Dubai Desert Hotel",
    description: "Iconic luxury resort with indoor ski slope and private beach.",
    image: { filename: "dubai-hotel", url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200" },
    price: 9800, location: "Jumeirah", country: "UAE", category: "Hotels",
  },

  // ===================== BEACHFRONT =====================
  {
    title: "Hawaii Black Sand Beach Estate",
    description: "Private estate with black sand beach, waterfall, and tropical gardens.",
    image: { filename: "hawaii-estate", url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200" },
    price: 11200, location: "Big Island", country: "USA", category: "Beachfront",
  },
  {
    title: "Bali Cliffside Villa",
    description: "Private villa on limestone cliffs with infinity pool overlooking Indian Ocean.",
    image: { filename: "bali-cliff-villa", url: "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?auto=format&fit=crop&w=1200" },
    price: 7200, location: "Uluwatu", country: "Indonesia", category: "Beachfront",
  },
  {
    title: "Seychelles Overwater Bungalow",
    description: "Private overwater bungalow with coral reef snorkelling from deck.",
    image: { filename: "seychelles-bungalow", url: "https://images.unsplash.com/photo-1559494007-9f5847c49d94?auto=format&fit=crop&w=1200" },
    price: 8400, location: "Praslin Island", country: "Seychelles", category: "Beachfront",
  },
  {
    title: "Phi Phi Island Villa",
    description: "Exclusive villa on white sand beach with turquoise waters and snorkelling.",
    image: { filename: "phiphi-villa", url: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200" },
    price: 6300, location: "Ko Phi Phi", country: "Thailand", category: "Beachfront",
  },

  // ===================== POOL =====================
  {
    title: "Ibiza Poolside Villa",
    description: "Stunning villa with heated infinity pool overlooking the Mediterranean.",
    image: { filename: "ibiza-villa", url: "https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?auto=format&fit=crop&w=1200" },
    price: 6800, location: "Sant Josep", country: "Spain", category: "Pool",
  },
  {
    title: "Sydney Poolside Apartment",
    description: "Modern apartment in Bondi with rooftop pool and ocean views.",
    image: { filename: "sydney-apartment", url: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200" },
    price: 3400, location: "Bondi Beach", country: "Australia", category: "Pool",
  },
  {
    title: "Cancun Swim-Up Suite",
    description: "All-inclusive suite with private swim-up pool access and ocean view.",
    image: { filename: "cancun-suite", url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200" },
    price: 4600, location: "Hotel Zone", country: "Mexico", category: "Pool",
  },
  {
    title: "Tuscany Pool Estate",
    description: "Rolling Tuscan hills estate with stone farmhouse and heated pool.",
    image: { filename: "tuscany-estate", url: "https://images.unsplash.com/photo-1523531294919-4bcd7c65e216?auto=format&fit=crop&w=1200" },
    price: 5900, location: "Siena", country: "Italy", category: "Pool",
  },

  // ===================== SPA =====================
  {
    title: "Budapest Thermal Spa Apartment",
    description: "Apartment with direct access to Széchenyi Thermal Bath and wellness center.",
    image: { filename: "budapest-spa", url: "https://images.unsplash.com/photo-1560347876-aeef00ee58a1?auto=format&fit=crop&w=1200" },
    price: 1700, location: "City Park", country: "Hungary", category: "Spa",
  },
  {
    title: "Bali Wellness Retreat",
    description: "Holistic retreat in Ubud with daily yoga, spa treatments, and meditation.",
    image: { filename: "bali-retreat", url: "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&fit=crop&w=1200" },
    price: 2800, location: "Ubud", country: "Indonesia", category: "Spa",
  },
  {
    title: "Dead Sea Wellness Villa",
    description: "Therapeutic villa on the shores of the Dead Sea with mineral spa.",
    image: { filename: "deadsea-villa", url: "https://images.unsplash.com/photo-1541123437800-1bb1317badc2?auto=format&fit=crop&w=1200" },
    price: 3200, location: "Ein Bokek", country: "Israel", category: "Spa",
  },
  {
    title: "Swiss Spa Chalet",
    description: "Mountain chalet with private hot spring, sauna, and steam room.",
    image: { filename: "swiss-spa", url: "https://images.unsplash.com/photo-1565073624497-7144969b4746?auto=format&fit=crop&w=1200" },
    price: 4100, location: "St. Moritz", country: "Switzerland", category: "Spa",
  },

  // ===================== COUNTRYSIDE =====================
  {
    title: "Tuscan Farmhouse",
    description: "Stone farmhouse amid olive groves and vineyards with wood-burning oven.",
    image: { filename: "tuscany-farmhouse", url: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=1200" },
    price: 2400, location: "Chianti", country: "Italy", category: "Countryside",
  },
  {
    title: "Cotswolds Cottage",
    description: "Quintessential English cottage with thatched roof and rose garden.",
    image: { filename: "cotswolds-cottage", url: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1200" },
    price: 1800, location: "Bourton-on-the-Water", country: "UK", category: "Countryside",
  },
  {
    title: "Provence Lavender Farm",
    description: "Charming farmhouse in the middle of lavender fields in southern France.",
    image: { filename: "provence-farm", url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200" },
    price: 2100, location: "Valensole", country: "France", category: "Countryside",
  },
  {
    title: "Kerala Plantation Home",
    description: "Heritage home in the middle of tea and spice plantations with misty views.",
    image: { filename: "kerala-plantation", url: "https://images.unsplash.com/photo-1502691876148-a84978e59af8?auto=format&fit=crop&w=1200" },
    price: 900, location: "Munnar", country: "India", category: "Countryside",
  },

  // ===================== APARTMENTS =====================
  {
    title: "Amsterdam Canal Apartment",
    description: "Historic apartment on the Jordaan canal with Dutch antique furnishings.",
    image: { filename: "amsterdam-canal", url: "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?auto=format&fit=crop&w=1200" },
    price: 3100, location: "Jordaan", country: "Netherlands", category: "Apartments",
  },
  {
    title: "Copenhagen Minimalist Apartment",
    description: "Scandinavian hygge apartment with canal views and cozy interiors.",
    image: { filename: "copenhagen-apartment", url: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80" },
    price: 2200, location: "Nyhavn", country: "Denmark", category: "Apartments",
  },
  {
    title: "Berlin Creative Loft",
    description: "Spacious loft in converted factory with artistic vibe in trendy Kreuzberg.",
    image: { filename: "berlin-loft", url: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=1200" },
    price: 1700, location: "Kreuzberg", country: "Germany", category: "Apartments",
  },
  {
    title: "Lisbon Hillside Apartment",
    description: "Colorful apartment with panoramic views of Lisbon rooftops and Tagus river.",
    image: { filename: "lisbon-apartment", url: "https://images.unsplash.com/photo-1587061949409-02df41d5e562?auto=format&fit=crop&w=1200&q=80" },
    price: 1900, location: "Alfama", country: "Portugal", category: "Apartments",
  },

  // ===================== IGLOOS =====================
  {
    title: "Lapland Glass Igloo",
    description: "Iconic glass igloo in Finnish Lapland for Northern Lights sky gazing.",
    image: { filename: "lapland-igloo", url: "https://images.unsplash.com/photo-1551524559-8af4e6624178?auto=format&fit=crop&w=1200" },
    price: 4800, location: "Saariselkä", country: "Finland", category: "Igloos",
  },
  {
    title: "Norway Ice Igloo",
    description: "Handcrafted ice igloo in the Arctic with reindeer-skin bedding.",
    image: { filename: "norway-igloo", url: "https://images.unsplash.com/photo-1484910292437-025e5d13ce87?auto=format&fit=crop&w=1200" },
    price: 3900, location: "Alta", country: "Norway", category: "Igloos",
  },
  {
    title: "Canada Wilderness Igloo",
    description: "Traditional Inuit igloo experience with snowmobile excursions.",
    image: { filename: "canada-igloo", url: "https://images.unsplash.com/photo-1589802829985-817e51171b92?auto=format&fit=crop&w=1200" },
    price: 2700, location: "Yellowknife", country: "Canada", category: "Igloos",
  },

  // ===================== MODERN =====================
  {
    title: "Seoul Modern Hanok Fusion",
    description: "Traditional Hanok blended with modern minimalist interiors and smart tech.",
    image: { filename: "seoul-modern", url: "https://images.unsplash.com/photo-1631679706909-1844bbd07221?auto=format&fit=crop&w=1200" },
    price: 2100, location: "Bukchon", country: "South Korea", category: "Modern",
  },
  {
    title: "Melbourne Design Apartment",
    description: "Award-winning architect-designed apartment with cutting-edge interiors.",
    image: { filename: "melbourne-design", url: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200" },
    price: 2800, location: "Fitzroy", country: "Australia", category: "Modern",
  },
  {
    title: "Hong Kong Peak Apartment",
    description: "Ultra-modern luxury apartment on Victoria Peak with stunning harbor views.",
    image: { filename: "hongkong-apartment", url: "https://images.unsplash.com/photo-1582407947304-fd86f28f188f?auto=format&fit=crop&w=1200" },
    price: 7200, location: "The Peak", country: "Hong Kong", category: "Modern",
  },
  {
    title: "Shanghai Glass Tower Suite",
    description: "All-glass penthouse in Pudong showcasing the full Shanghai skyline.",
    image: { filename: "shanghai-penthouse", url: "https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?auto=format&fit=crop&w=1200" },
    price: 8400, location: "Pudong", country: "China", category: "Modern",
  },

  // ===================== CASTLES =====================
  {
    title: "Scottish Highland Castle",
    description: "Private 16th-century castle with great hall, turrets, and loch views.",
    image: { filename: "scotland-castle", url: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1200" },
    price: 9500, location: "Inverness", country: "Scotland", category: "Castles",
  },
  {
    title: "Loire Valley Chateau",
    description: "Magnificent French chateau with formal gardens, moat, and wine cellar.",
    image: { filename: "loire-chateau", url: "https://images.unsplash.com/photo-1549144511-f099e773c147?auto=format&fit=crop&w=1200" },
    price: 12000, location: "Chambord", country: "France", category: "Castles",
  },
  {
    title: "Irish Medieval Castle",
    description: "Medieval castle with stone walls, battlements, and green countryside views.",
    image: { filename: "irish-castle", url: "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?auto=format&fit=crop&w=1200" },
    price: 7800, location: "County Clare", country: "Ireland", category: "Castles",
  },
  {
    title: "Bavarian Mountain Castle",
    description: "Fairytale Neuschwanstein-style castle suite with mountain panoramas.",
    image: { filename: "bavarian-castle", url: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=1200" },
    price: 8900, location: "Schwangau", country: "Germany", category: "Castles",
  },

  // ===================== VILLAS =====================
  {
    title: "Greek Island Villa",
    description: "White-washed villa with private pool and sunset views over the Aegean Sea.",
    image: { filename: "greek-villa", url: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200" },
    price: 3800, location: "Santorini", country: "Greece", category: "Villas",
  },
  {
    title: "Dubai Desert Palace",
    description: "Modern palace in the desert with private oasis and indoor waterfall.",
    image: { filename: "dubai-palace", url: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&w=1200" },
    price: 12500, location: "Al Barari", country: "UAE", category: "Villas",
  },
  {
    title: "Tuscan Hilltop Villa",
    description: "Breathtaking 16th-century villa overlooking Tuscany with private pool.",
    image: { filename: "tuscany-villa", url: "https://images.unsplash.com/photo-1523531294919-4bcd7c65e216?auto=format&fit=crop&w=1200" },
    price: 8200, location: "Florence", country: "Italy", category: "Villas",
  },
  {
    title: "Moroccan Desert Villa",
    description: "Opulent villa at the edge of the Sahara Desert with dune views.",
    image: { filename: "morocco-villa", url: "https://images.unsplash.com/photo-1539635278303-d4002c07eae3?auto=format&fit=crop&w=1200" },
    price: 3600, location: "Merzouga", country: "Morocco", category: "Villas",
  },

  // ===================== GLAMPING =====================
  {
    title: "Serengeti Glamping Tent",
    description: "Luxury canvas tent on elevated platform with wild game roaming around.",
    image: { filename: "serengeti-glamping", url: "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1200" },
    price: 4200, location: "Serengeti Plains", country: "Tanzania", category: "Glamping",
  },
  {
    title: "Oregon Forest Geodome",
    description: "Transparent geodesic dome nestled in old-growth forest for sky-gazing.",
    image: { filename: "oregon-geodome", url: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=1200" },
    price: 1600, location: "Portland", country: "USA", category: "Glamping",
  },
  {
    title: "Patagonia Glamping Pod",
    description: "Transparent pod at the end of the world with Patagonian wilderness views.",
    image: { filename: "patagonia-pod", url: "https://images.unsplash.com/photo-1510672981848-a1c4f1cb5ccf?auto=format&fit=crop&w=1200" },
    price: 2900, location: "Puerto Natales", country: "Chile", category: "Glamping",
  },

  // ===================== LAKEFRONT =====================
  {
    title: "Stockholm Archipelago House",
    description: "Modern house on private island with sauna and boating facilities.",
    image: { filename: "stockholm-house", url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1200" },
    price: 4300, location: "Vaxholm", country: "Sweden", category: "Lakefront",
  },
  {
    title: "Canada Lakeside Cabin",
    description: "Classic Canadian log cabin on pristine mountain lake with canoe dock.",
    image: { filename: "canada-cabin", url: "https://images.unsplash.com/photo-1542401886-65d6c61db217?auto=format&fit=crop&w=1200" },
    price: 2100, location: "Whistler", country: "Canada", category: "Lakefront",
  },
  {
    title: "Finland Lake House",
    description: "Traditional Finnish summer house on crystal lake with private jetty.",
    image: { filename: "finland-lakehouse", url: "https://images.unsplash.com/photo-1586348943529-beaae6c28db9?auto=format&fit=crop&w=1200" },
    price: 1900, location: "Lake Saimaa", country: "Finland", category: "Lakefront",
  },
  {
    title: "Udaipur Palace Lake View",
    description: "Royal haveli with views of Pichola Lake and the Lake Palace from your terrace.",
    image: { filename: "udaipur-palace", url: "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1200" },
    price: 3400, location: "Udaipur", country: "India", category: "Lakefront",
  },

  // ===================== BOATS =====================
  {
    title: "Seattle Houseboat",
    description: "Charming floating home on Lake Union with deck, kayaks, and mountain views.",
    image: { filename: "seattle-houseboat", url: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200" },
    price: 3800, location: "Lake Union", country: "USA", category: "Boats",
  },
  {
    title: "Mediterranean Sailing Yacht",
    description: "Private 50ft yacht sailing the Croatian coast with chef and crew.",
    image: { filename: "croatia-yacht", url: "https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?auto=format&fit=crop&w=1200" },
    price: 9500, location: "Dubrovnik", country: "Croatia", category: "Boats",
  },
  {
    title: "Amsterdam Canal Boat",
    description: "Converted historic canal boat in the heart of Amsterdam with full kitchen.",
    image: { filename: "amsterdam-boat", url: "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?auto=format&fit=crop&w=1200" },
    price: 2600, location: "Prinsengracht", country: "Netherlands", category: "Boats",
  },
  {
    title: "Kerala Houseboat",
    description: "Traditional rice barge converted into a luxury houseboat on Kerala backwaters.",
    image: { filename: "kerala-houseboat", url: "https://images.unsplash.com/photo-1502691876148-a84978e59af8?auto=format&fit=crop&w=1200" },
    price: 1200, location: "Alleppey", country: "India", category: "Boats",
  },

  // ===================== LUXURY =====================
  {
    title: "Dubai Royal Penthouse",
    description: "The world's most opulent penthouse with gold fixtures and helipad access.",
    image: { filename: "dubai-royal", url: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200" },
    price: 25000, location: "Palm Jumeirah", country: "UAE", category: "Luxury",
  },
  {
    title: "Monaco Super Yacht Charter",
    description: "150ft superyacht berthed in Monaco harbor with full crew and chef.",
    image: { filename: "monaco-yacht", url: "https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?auto=format&fit=crop&w=1200" },
    price: 35000, location: "Port Hercules", country: "Monaco", category: "Luxury",
  },
  {
    title: "Maldives Private Island",
    description: "Exclusive use of entire private island with 8 villas, spa, and dive center.",
    image: { filename: "maldives-island", url: "https://images.unsplash.com/photo-1559494007-9f5847c49d94?auto=format&fit=crop&w=1200" },
    price: 42000, location: "South Ari Atoll", country: "Maldives", category: "Luxury",
  },
  {
    title: "French Riviera Mega Villa",
    description: "Vast villa on Cap d'Antibes with private beach, helipad, and 12 suites.",
    image: { filename: "riviera-villa", url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200" },
    price: 28000, location: "Cap d'Antibes", country: "France", category: "Luxury",
  },

  // ===================== SKIING =====================
  {
    title: "Courchevel Ski Chalet",
    description: "Exclusive ski-in/ski-out chalet in the French Alps with private ski instructor.",
    image: { filename: "courchevel-chalet", url: "https://images.unsplash.com/photo-1426604966848-d7adac402bff?auto=format&fit=crop&w=1200" },
    price: 14000, location: "Courchevel", country: "France", category: "Skiing",
  },
  {
    title: "Vail Mountain Lodge",
    description: "Slope-side lodge in Vail with private hot tub, ski storage, and mountain views.",
    image: { filename: "vail-lodge", url: "https://images.unsplash.com/photo-1551524559-8af4e6624178?auto=format&fit=crop&w=1200" },
    price: 8700, location: "Vail", country: "USA", category: "Skiing",
  },
  {
    title: "Niseko Snow Villa",
    description: "Powder-ski villa in Japan's best ski resort with private onsen hot spring.",
    image: { filename: "niseko-villa", url: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?auto=format&fit=crop&w=1200" },
    price: 6200, location: "Niseko", country: "Japan", category: "Skiing",
  },
  {
    title: "Verbier Luxury Ski Apartment",
    description: "Modern apartment in legendary Verbier ski village with incredible panoramas.",
    image: { filename: "verbier-apartment", url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200" },
    price: 9300, location: "Verbier", country: "Switzerland", category: "Skiing",
  },
];

module.exports = { data: sampleListings };
