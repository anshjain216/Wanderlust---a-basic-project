const sampleListings = [
  {
    title: "Cozy Beachfront Cottage",
    description:
      "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
    image: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    price: 1500,
    location: "Malibu",
    country: "United States",
  },
  {
    title: "Modern Loft in Downtown",
    description:
      "Stay in the heart of the city in this stylish loft apartment. Perfect for urban explorers!",
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    price: 1200,
    location: "New York City",
    country: "United States",
  },
  {
    title: "Mountain Retreat",
    description:
      "Unplug and unwind in this peaceful mountain cabin. Surrounded by nature, it's a perfect place to recharge.",
    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    price: 1000,
    location: "Aspen",
    country: "United States",
  },
  {
    title: "Historic Villa in Tuscany",
    description:
      "Experience the charm of Tuscany in this beautifully restored villa. Explore the rolling hills and vineyards.",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    price: 2500,
    location: "Florence",
    country: "Italy",
  },
  {
    title: "Secluded Treehouse Getaway",
    description:
      "Live among the treetops in this unique treehouse retreat. A true nature lover's paradise.",
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    price: 800,
    location: "Portland",
    country: "United States",
  },
  {
    title: "Beachfront Paradise",
    description:
      "Step out of your door onto the sandy beach. This beachfront condo offers the ultimate relaxation.",
    image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    price: 2000,
    location: "Cancun",
    country: "Mexico",
  },
  {
    title: "Rustic Cabin by the Lake",
    description:
      "Spend your days fishing and kayaking on the serene lake. This cozy cabin is perfect for outdoor enthusiasts.",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    price: 900,
    location: "Lake Tahoe",
    country: "United States",
  },
  {
    title: "Luxury Penthouse with City Views",
    description:
      "Indulge in luxury living with panoramic city views from this stunning penthouse apartment.",
    image: "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    price: 3500,
    location: "Los Angeles",
    country: "United States",
  },
  {
    title: "Ski-In/Ski-Out Chalet",
    description:
      "Hit the slopes right from your doorstep in this ski-in/ski-out chalet in the Swiss Alps.",
    image: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    price: 3000,
    location: "Verbier",
    country: "Switzerland",
  },
  {
    title: "Safari Lodge in the Serengeti",
    description:
      "Experience the thrill of the wild in a comfortable safari lodge. Witness the Great Migration up close.",
    image: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    price: 4000,
    location: "Serengeti National Park",
    country: "Tanzania",
  },
  {
    title: "Charming Bungalow in Bali",
    description:
      "Relax in this beautiful bungalow surrounded by rice fields and tropical gardens in Bali.",
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    price: 1100,
    location: "Ubud",
    country: "Indonesia",
  },
  {
    title: "Countryside Farmhouse",
    description:
      "Reconnect with nature in this spacious farmhouse with fresh air, greenery, and a cozy fireplace.",
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    price: 950,
    location: "Nashville",
    country: "United States",
  },
  {
    title: "Desert Glamping Dome",
    description:
      "Stay under the stars in this luxury desert dome with modern comforts and stunning desert views.",
    image: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    price: 1300,
    location: "Joshua Tree",
    country: "United States",
  },
  {
    title: "Romantic Parisian Apartment",
    description:
      "Enjoy the romance of Paris in this stylish apartment near the Eiffel Tower and Seine River.",
    image: "https://images.unsplash.com/photo-1505761671935-60b3a7427bad?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    price: 2200,
    location: "Paris",
    country: "France",
  },
  {
    title: "Jungle Eco-Lodge",
    description:
      "Reconnect with nature in this eco-lodge deep in the jungle, built with sustainable materials.",
    image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    price: 1400,
    location: "Amazon Rainforest",
    country: "Brazil",
  },
  {
    title: "Greek Island Villa",
    description:
      "Soak up the sun in this luxurious villa with a private pool overlooking the Aegean Sea.",
    image: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    price: 2700,
    location: "Santorini",
    country: "Greece",
  },
  {
    title: "Icelandic Cabin with Northern Lights",
    description:
      "Watch the aurora borealis from your cozy cabin in the stunning Icelandic wilderness.",
    image: "https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    price: 1800,
    location: "Reykjavik",
    country: "Iceland",
  },
  {
    title: "Japanese Ryokan with Onsen",
    description:
      "Relax in a traditional ryokan with hot spring baths, tatami rooms, and authentic Japanese meals.",
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    price: 2100,
    location: "Kyoto",
    country: "Japan",
  },
  {
    title: "Dubai Luxury Sky Villa",
    description:
      "Stay high above the clouds in this luxury sky villa with panoramic views of Dubai Marina.",
    image: "https://images.unsplash.com/photo-1500048993953-d23a436266cf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    price: 5000,
    location: "Dubai",
    country: "United Arab Emirates",
  },
  {
    title: "London City Flat",
    description:
      "Modern flat located near central London with access to shopping, dining, and culture.",
    image: "https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    price: 2400,
    location: "London",
    country: "United Kingdom",
  },
  {
    title: "Sydney Harbour Apartment",
    description:
      "Enjoy breathtaking views of the Sydney Opera House and Harbour Bridge from this apartment.",
    image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    price: 2600,
    location: "Sydney",
    country: "Australia",
  },
  {
    title: "Moroccan Riad",
    description:
      "Immerse yourself in Moroccan culture with a stay in this colorful and vibrant riad.",
    image: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    price: 1700,
    location: "Marrakech",
    country: "Morocco",
  },
  {
    title: "Canadian Log Cabin",
    description:
      "Cozy log cabin surrounded by snowy mountains and pine trees. A winter wonderland getaway.",
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    price: 1600,
    location: "Banff",
    country: "Canada",
  },
  {
    title: "Barcelona City Loft",
    description:
      "Trendy loft in Barcelona’s Gothic Quarter, close to tapas bars, markets, and historic sites.",
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    price: 1900,
    location: "Barcelona",
    country: "Spain",
  },
  {
    title: "Cape Town Ocean View Villa",
    description:
      "Luxurious villa with panoramic views of Table Mountain and the Atlantic Ocean.",
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    price: 2800,
    location: "Cape Town",
    country: "South Africa",
  },
  {
    title: "Amsterdam Canal House",
    description:
      "Stay in a classic Dutch canal house with modern interiors and stunning waterfront views.",
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    price: 2000,
    location: "Amsterdam",
    country: "Netherlands",
  },
  {
    title: "Vienna Palace Apartment",
    description:
      "Elegant apartment with vintage charm, located in the cultural heart of Vienna.",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    price: 2300,
    location: "Vienna",
    country: "Austria",
  },
  {
    title: "Singapore Marina Bay Condo",
    description:
      "Modern condo with futuristic design, overlooking Marina Bay Sands.",
    image: "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    price: 3200,
    location: "Singapore",
    country: "Singapore",
  }
];

module.exports = { data: sampleListings };
