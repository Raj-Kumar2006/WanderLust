const mongoose = require("mongoose");
const Listing = require("./models/listing");
require("dotenv").config();

const dbUrl = process.env.ATLASDB_URL;

// Use the existing owner ID from your DB
const OWNER_ID = "69819f6cb0092d21dd2cc0a5";

const categoryListings = [
  // ===================== MOUNTAINS =====================
  {
    title: "Alpine Sky Chalet",
    description: "Breathtaking mountain chalet with panoramic views of the Alps. Perfect for skiing, hiking and stargazing.",
    image: { url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800", filename: "listing" },
    price: 12500,
    location: "Zermatt", country: "Switzerland",
    category: ["Mountains"], lat: 46.0207, lng: 7.7491
  },
  {
    title: "Himalayan Mountain Retreat",
    description: "A cozy wooden cabin nestled in the mighty Himalayas. Wake up to snow-capped peaks and crisp mountain air.",
    image: { url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800", filename: "listing" },
    price: 6500,
    location: "Manali", country: "India",
    category: ["Mountains"], lat: 32.2396, lng: 77.1887
  },
  {
    title: "Rockies Pine Lodge",
    description: "A rustic-luxe lodge surrounded by the Canadian Rockies. Perfect for wildlife spotting and mountain adventures.",
    image: { url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800", filename: "listing" },
    price: 9800,
    location: "Banff", country: "Canada",
    category: ["Mountains"], lat: 51.1784, lng: -115.5708
  },
  {
    title: "Dolomites Stone Cottage",
    description: "Charming stone cottage in the heart of the Dolomites. Surrounded by dramatic rock formations and lush meadows.",
    image: { url: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800", filename: "listing" },
    price: 8200,
    location: "Cortina d'Ampezzo", country: "Italy",
    category: ["Mountains"], lat: 46.5362, lng: 12.1357
  },

  // ===================== BEACH =====================
  {
    title: "Maldives Overwater Bungalow",
    description: "Live above the crystal-clear turquoise waters in this stunning overwater bungalow. Pure paradise.",
    image: { url: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=800", filename: "listing" },
    price: 35000,
    location: "Malé", country: "Maldives",
    category: ["Beach"], lat: 4.1755, lng: 73.5093
  },
  {
    title: "Goa Beachside Villa",
    description: "Beautiful villa just steps away from the golden sands of Baga Beach. Enjoy sunsets, seafood and tropical vibes.",
    image: { url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800", filename: "listing" },
    price: 7500,
    location: "Goa", country: "India",
    category: ["Beach"], lat: 15.2993, lng: 74.1240
  },
  {
    title: "Bali Tropical Beach House",
    description: "Stunning beach house with private pool overlooking the Indian Ocean. Surfer's paradise with luxury amenities.",
    image: { url: "https://images.unsplash.com/photo-1537953773345-d172ccf13cf4?w=800", filename: "listing" },
    price: 14000,
    location: "Seminyak", country: "Indonesia",
    category: ["Beach"], lat: -8.6913, lng: 115.1597
  },
  {
    title: "Santorini Cliffside Cave",
    description: "Iconic white-washed cave house carved into the volcanic cliffs of Santorini with infinity pool and sea views.",
    image: { url: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800", filename: "listing" },
    price: 22000,
    location: "Oia", country: "Greece",
    category: ["Beach"], lat: 36.4618, lng: 25.3753
  },

  // ===================== NATURE =====================
  {
    title: "Amazon Rainforest Treehouse",
    description: "Sleep among the treetops in this magical treehouse deep in the Amazon rainforest. Spot exotic wildlife daily.",
    image: { url: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800", filename: "listing" },
    price: 9000,
    location: "Manaus", country: "Brazil",
    category: ["Nature"], lat: -3.1190, lng: -60.0217
  },
  {
    title: "Tuscany Vineyard Estate",
    description: "Gorgeous estate surrounded by rolling vineyards and olive groves. Experience authentic Italian countryside living.",
    image: { url: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800", filename: "listing" },
    price: 11000,
    location: "Florence", country: "Italy",
    category: ["Nature"], lat: 43.7696, lng: 11.2558
  },
  {
    title: "New Zealand Forest Retreat",
    description: "Eco-friendly retreat nestled inside an ancient podocarp forest. Hear only birdsong and flowing streams.",
    image: { url: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800", filename: "listing" },
    price: 8500,
    location: "Queenstown", country: "New Zealand",
    category: ["Nature"], lat: -45.0312, lng: 168.6626
  },
  {
    title: "Kerala Backwaters Houseboat",
    description: "Drift through palm-fringed backwaters on a traditional Kerala houseboat with all modern comforts.",
    image: { url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800", filename: "listing" },
    price: 5500,
    location: "Alleppey", country: "India",
    category: ["Nature"], lat: 9.4981, lng: 76.3388
  },

  // ===================== CITY =====================
  {
    title: "NYC Manhattan Penthouse",
    description: "Luxury penthouse in the heart of Manhattan with floor-to-ceiling windows and stunning skyline views of NYC.",
    image: { url: "https://images.unsplash.com/photo-1555636222-cae831e670b3?w=800", filename: "listing" },
    price: 45000,
    location: "New York", country: "USA",
    category: ["City"], lat: 40.7580, lng: -73.9855
  },
  {
    title: "Paris Eiffel Tower Apartment",
    description: "Chic Haussmann apartment with a private terrace overlooking the iconic Eiffel Tower. Bonjour, Paris!",
    image: { url: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800", filename: "listing" },
    price: 18000,
    location: "Paris", country: "France",
    category: ["City"], lat: 48.8566, lng: 2.3522
  },
  {
    title: "Tokyo Skyline Loft",
    description: "Ultra-modern loft in Tokyo's Shinjuku district. Experience the neon city from your high-rise sanctuary.",
    image: { url: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800", filename: "listing" },
    price: 12000,
    location: "Tokyo", country: "Japan",
    category: ["City"], lat: 35.6762, lng: 139.6503
  },
  {
    title: "Mumbai Sea-View Studio",
    description: "Stylish studio apartment with spectacular Arabian Sea views in South Mumbai's most prestigious neighborhood.",
    image: { url: "https://images.unsplash.com/photo-1534430480872-3498386e7856?w=800", filename: "listing" },
    price: 6500,
    location: "Mumbai", country: "India",
    category: ["City"], lat: 19.0760, lng: 72.8777
  },

  // ===================== CAMPING =====================
  {
    title: "Yosemite Glamping Dome",
    description: "Luxurious geodesic dome right in Yosemite Valley. Stars above, wildlife around, glamping at its finest.",
    image: { url: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=800", filename: "listing" },
    price: 7500,
    location: "Yosemite", country: "USA",
    category: ["Camping"], lat: 37.8651, lng: -119.5383
  },
  {
    title: "Rajasthan Desert Camp",
    description: "Authentic luxury tent camp in the heart of the Thar Desert. Camel rides, folk music, and starlit skies await.",
    image: { url: "https://images.unsplash.com/photo-1414435726886-df51315cb5a0?w=800", filename: "listing" },
    price: 5200,
    location: "Jaisalmer", country: "India",
    category: ["Camping"], lat: 26.9157, lng: 70.9083
  },

  // ===================== LUXURY =====================
  {
    title: "Dubai Marina Superluxe Penthouse",
    description: "The ultimate luxury experience. Private butler, rooftop infinity pool, Rolls Royce pickup, 6-star service.",
    image: { url: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=800", filename: "listing" },
    price: 75000,
    location: "Dubai", country: "UAE",
    category: ["Luxury"], lat: 25.0805, lng: 55.1403
  },
  {
    title: "Monaco Royal Suite",
    description: "Opulent royal suite in Monaco with harbour views, personal chef, and access to world-class casinos.",
    image: { url: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800", filename: "listing" },
    price: 95000,
    location: "Monaco", country: "Monaco",
    category: ["Luxury"], lat: 43.7384, lng: 7.4246
  },

  // ===================== CASTLES =====================
  {
    title: "Scottish Highland Castle",
    description: "Sleep like royalty in a genuine 12th century Scottish castle surrounded by misty highlands and lochs.",
    image: { url: "https://images.unsplash.com/photo-1551776235-dde6d482980b?w=800", filename: "listing" },
    price: 28000,
    location: "Inverness", country: "Scotland",
    category: ["Castles"], lat: 57.4778, lng: -4.2247
  },
  {
    title: "Loire Valley French Château",
    description: "A stunning Renaissance château in the Loire Valley with formal gardens, wine cellar, and grand halls.",
    image: { url: "https://images.unsplash.com/photo-1590077428593-a55bb07c4665?w=800", filename: "listing" },
    price: 32000,
    location: "Loire", country: "France",
    category: ["Castles"], lat: 47.3936, lng: 0.6892
  },

  // ===================== ARCTIC =====================
  {
    title: "Iceland Glass Igloo",
    description: "Sleep under the Northern Lights in a stunning glass igloo. Watch the aurora borealis from your bed!",
    image: { url: "https://images.unsplash.com/photo-1531804055935-76f44d7c3621?w=800", filename: "listing" },
    price: 21000,
    location: "Rovaniemi", country: "Finland",
    category: ["Arctic"], lat: 66.5039, lng: 25.7294
  },
  {
    title: "Svalbard Arctic Lodge",
    description: "Remote Arctic lodge at the edge of the world. Dog sledding, polar bear spotting, and midnight sun experiences.",
    image: { url: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=800", filename: "listing" },
    price: 18500,
    location: "Longyearbyen", country: "Norway",
    category: ["Arctic"], lat: 78.2232, lng: 15.6469
  },

  // ===================== VILLAS =====================
  {
    title: "Tuscan Hilltop Villa",
    description: "Private hilltop villa with infinity pool, vineyard views, and authentic Tuscan architecture. Dolce vita!",
    image: { url: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800", filename: "listing" },
    price: 25000,
    location: "Siena", country: "Italy",
    category: ["Villas"], lat: 43.3186, lng: 11.3307
  },
  {
    title: "Udaipur Lake View Villa",
    description: "Magnificent heritage villa overlooking the shimmering Lake Pichola in the City of Lakes.",
    image: { url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800", filename: "listing" },
    price: 16000,
    location: "Udaipur", country: "India",
    category: ["Villas"], lat: 24.5854, lng: 73.7125
  },

  // ===================== BEACHFRONT =====================
  {
    title: "Phuket Beachfront Pool Villa",
    description: "Direct beachfront villa with private pool in Phuket's most exclusive area. White sand at your doorstep.",
    image: { url: "https://images.unsplash.com/photo-1577717903315-1691ae25ab3f?w=800", filename: "listing" },
    price: 19000,
    location: "Phuket", country: "Thailand",
    category: ["Beachfront"], lat: 7.9519, lng: 98.3381
  },
  {
    title: "Andaman Overwater Suite",
    description: "Exclusive overwater suite in the Andaman Islands with glass floor panels and direct ocean access.",
    image: { url: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=800", filename: "listing" },
    price: 24000,
    location: "Port Blair", country: "India",
    category: ["Beachfront"], lat: 11.6234, lng: 92.7265
  },

  // ===================== LAKEFRONT =====================
  {
    title: "Lake Geneva Waterfront Chalet",
    description: "Elegant lakefront chalet on the shores of Lake Geneva with private boat dock and mountain backdrops.",
    image: { url: "https://images.unsplash.com/photo-1439337153520-7082a56a81f4?w=800", filename: "listing" },
    price: 17500,
    location: "Geneva", country: "Switzerland",
    category: ["Lakefront"], lat: 46.2044, lng: 6.1432
  },
  {
    title: "Dal Lake Houseboat, Kashmir",
    description: "Traditional Kashmiri houseboat on the iconic Dal Lake. Experience the floating gardens and snow-capped peaks.",
    image: { url: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800", filename: "listing" },
    price: 4800,
    location: "Srinagar", country: "India",
    category: ["Lakefront"], lat: 34.0837, lng: 74.7973
  },

  // ===================== SKIING =====================
  {
    title: "Aspen Ski-In Ski-Out Chalet",
    description: "Ski directly from your door at this premium Aspen chalet. Slope-side access, private hot tub, mountain views.",
    image: { url: "https://images.unsplash.com/photo-1551524559-8af4e6624178?w=800", filename: "listing" },
    price: 38000,
    location: "Aspen", country: "USA",
    category: ["Skiing"], lat: 39.1911, lng: -106.8175
  },
  {
    title: "Gulmarg Ski Resort Cottage",
    description: "Stay on the slopes of India's premier ski resort in Gulmarg. One gondola ride to world-class powder snow.",
    image: { url: "https://images.unsplash.com/photo-1455156218388-5e61b526818b?w=800", filename: "listing" },
    price: 8500,
    location: "Gulmarg", country: "India",
    category: ["Skiing"], lat: 34.0484, lng: 74.3805
  },

  // ===================== GLAMPING =====================
  {
    title: "Coorg Coffee Estate Glamping",
    description: "Luxury safari tents nestled in a working coffee estate in the lush hills of Coorg, Karnataka.",
    image: { url: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?w=800", filename: "listing" },
    price: 6200,
    location: "Coorg", country: "India",
    category: ["Glamping"], lat: 12.3375, lng: 75.8069
  },
  {
    title: "Safari Glamping, Serengeti",
    description: "Opulent canvas tents steps from the Great Migration. Sundowners on the savanna included.",
    image: { url: "https://images.unsplash.com/photo-1535941339077-2dd1c7963098?w=800", filename: "listing" },
    price: 29000,
    location: "Serengeti", country: "Tanzania",
    category: ["Glamping"], lat: -2.3333, lng: 34.8333
  },

  // ===================== POOL =====================
  {
    title: "Santorini Infinity Pool Suite",
    description: "Iconic suite with private infinity pool merging into the blue Aegean Sea. Ultimate Greek luxury.",
    image: { url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800", filename: "listing" },
    price: 28000,
    location: "Mykonos", country: "Greece",
    category: ["Pool"], lat: 37.4467, lng: 25.3289
  },
  {
    title: "Bali Jungle Pool Villa",
    description: "Spectacular infinity pool overlooking the Ubud jungle canopy. Yoga, spa, and tropical serenity.",
    image: { url: "https://images.unsplash.com/photo-1540541338537-1220659cad3e?w=800", filename: "listing" },
    price: 12000,
    location: "Ubud", country: "Indonesia",
    category: ["Pool"], lat: -8.5069, lng: 115.2624
  },

  // ===================== SPA =====================
  {
    title: "Kerala Ayurvedic Spa Resort",
    description: "Surrender to ancient Ayurvedic healing at this serene spa resort in God's Own Country, Kerala.",
    image: { url: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800", filename: "listing" },
    price: 9500,
    location: "Kochi", country: "India",
    category: ["Spa"], lat: 9.9312, lng: 76.2673
  },
  {
    title: "Bali Spiritual Wellness Retreat",
    description: "A deeply healing spa retreat combining traditional Balinese treatments, yoga, and meditation.",
    image: { url: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800", filename: "listing" },
    price: 10500,
    location: "Ubud", country: "Indonesia",
    category: ["Spa"], lat: -8.5069, lng: 115.2624
  },

  // ===================== HISTORIC =====================
  {
    title: "Jaipur Heritage Haveli",
    description: "Stay in a 200-year-old restored Rajput haveli in the Pink City. Frescoed walls, courtyards, and royalty.",
    image: { url: "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=800", filename: "listing" },
    price: 9000,
    location: "Jaipur", country: "India",
    category: ["Historic"], lat: 26.9124, lng: 75.7873
  },
  {
    title: "Istanbul Ottoman Mansion",
    description: "Magnificent Ottoman mansion near the Bosphorus. Historic grandeur with modern luxury and panoramic city views.",
    image: { url: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=800", filename: "listing" },
    price: 14000,
    location: "Istanbul", country: "Turkey",
    category: ["Historic"], lat: 41.0082, lng: 28.9784
  },

  // ===================== COUNTRYSIDE =====================
  {
    title: "Cotagaon Valley Farmhouse",
    description: "A warm farmhouse surrounded by mustard fields and mango orchards in rural Goa's hidden countryside.",
    image: { url: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800", filename: "listing" },
    price: 4500,
    location: "Ponda", country: "India",
    category: ["Countryside"], lat: 15.4025, lng: 74.0083
  },
  {
    title: "Cotswolds English Cottage",
    description: "Classic honey-stone cottage in the rolling English Cotswolds. Rose gardens, thatched roof, true British charm.",
    image: { url: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=800", filename: "listing" },
    price: 13000,
    location: "Bourton-on-the-Water", country: "UK",
    category: ["Countryside"], lat: 51.8832, lng: -1.7589
  },

  // ===================== HOTELS =====================
  {
    title: "Oberoi Udaivilas, Udaipur",
    description: "One of Asia's finest hotels, set on the shores of Lake Pichola with legendary hospitality.",
    image: { url: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=800", filename: "listing" },
    price: 42000,
    location: "Udaipur", country: "India",
    category: ["Hotels"], lat: 24.5854, lng: 73.7125
  },
  {
    title: "Burj Al Arab Royal Suite",
    description: "Experience unmatched opulence in the world's most iconic hotel. 24-carat gold interior and butler service.",
    image: { url: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800", filename: "listing" },
    price: 120000,
    location: "Dubai", country: "UAE",
    category: ["Hotels"], lat: 25.1412, lng: 55.1853
  },

  // ===================== APARTMENTS =====================
  {
    title: "London Chelsea Studio",
    description: "Sleek modern studio in upscale Chelsea. Minutes from King's Road boutiques and the River Thames.",
    image: { url: "https://images.unsplash.com/photo-1536376072261-38c75010e6c9?w=800", filename: "listing" },
    price: 12000,
    location: "London", country: "UK",
    category: ["Apartments"], lat: 51.4875, lng: -0.1687
  },
  {
    title: "Bengaluru IT Hub Flat",
    description: "Fully furnished smart apartment in Whitefield, Bengaluru. High-speed WiFi, AC, perfect for work stays.",
    image: { url: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800", filename: "listing" },
    price: 3800,
    location: "Bengaluru", country: "India",
    category: ["Apartments"], lat: 12.9716, lng: 77.5946
  },

  // ===================== ROOMS =====================
  {
    title: "Varanasi Ghat Guesthouse",
    description: "Wake up to the spiritual energy of the Ganges ghats. Traditional Banarasi hospitality at its finest.",
    image: { url: "https://images.unsplash.com/photo-1561361058-c24cecae35ca?w=800", filename: "listing" },
    price: 2200,
    location: "Varanasi", country: "India",
    category: ["Rooms"], lat: 25.3176, lng: 82.9739
  },
  {
    title: "Kyoto Machiya Guesthouse",
    description: "Sleep in a 100-year-old Kyoto machiya townhouse. Tatami mats, futon beds, and Zen garden included.",
    image: { url: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800", filename: "listing" },
    price: 6500,
    location: "Kyoto", country: "Japan",
    category: ["Rooms"], lat: 35.0116, lng: 135.7681
  },

  // ===================== IGLOOS =====================
  {
    title: "Lapland Aurora Igloo",
    description: "A magical heated glass igloo in Finnish Lapland. Fall asleep under the magical Northern Lights.",
    image: { url: "https://images.unsplash.com/photo-1516496636080-14fb876e029d?w=800", filename: "listing" },
    price: 19500,
    location: "Saariselkä", country: "Finland",
    category: ["Igloos"], lat: 68.4286, lng: 27.4216
  },

  // ===================== MODERN =====================
  {
    title: "Singapore Marina Bay Smart Home",
    description: "Ultra-modern smart home with AI systems, rooftop terrace, and stunning Marina Bay Sands views.",
    image: { url: "https://images.unsplash.com/photo-1565538810643-b5bdb0fb4948?w=800", filename: "listing" },
    price: 26000,
    location: "Singapore", country: "Singapore",
    category: ["Modern"], lat: 1.2897, lng: 103.8633
  },
  {
    title: "Aravalli Glass House, Gurgaon",
    description: "Architect-designed glass house with panoramic Aravalli range views. Minimalist luxury at its best.",
    image: { url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800", filename: "listing" },
    price: 11000,
    location: "Gurgaon", country: "India",
    category: ["Modern"], lat: 28.4595, lng: 77.0266
  },

  // ===================== BOATS =====================
  {
    title: "Venice Canal Houseboat",
    description: "Live the Venetian dream on a private houseboat on the Grand Canal. Gondola views every morning.",
    image: { url: "https://images.unsplash.com/photo-1514890547357-a9ee288728e0?w=800", filename: "listing" },
    price: 17000,
    location: "Venice", country: "Italy",
    category: ["Boats"], lat: 45.4408, lng: 12.3155
  },
  {
    title: "Lakshadweep Yacht Charter",
    description: "Your own private sailing yacht exploring the pristine coral atolls of Lakshadweep Islands.",
    image: { url: "https://images.unsplash.com/photo-1530487298-b4a45e693dfc?w=800", filename: "listing" },
    price: 42000,
    location: "Lakshadweep", country: "India",
    category: ["Boats"], lat: 10.5669, lng: 72.6420
  },
];

async function main() {
  await mongoose.connect(dbUrl, { tls: true });
  console.log("Connected to DB");

  let added = 0;
  for (let data of categoryListings) {
    const listing = new Listing({
      ...data,
      owner: OWNER_ID,
    });
    await listing.save();
    added++;
    console.log(`✅ Added: ${data.title} [${data.category.join(", ")}]`);
  }

  console.log(`\n🎉 Done! Added ${added} category listings.`);
  mongoose.connection.close();
}

main().catch(console.error);
