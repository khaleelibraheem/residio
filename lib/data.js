export const featuredProperties = [
  {
    id: 1,
    title: "Luxury Penthouse Suite",
    location: "Beverly Hills, CA",
    price: "$8,500,000",
    image: "/images/image1.jpg",
    beds: 4,
    baths: 3.5,
    sqft: 3200,
    type: "Penthouse",
    new: true,
    features: [
      "Private Elevator",
      "360° City Views",
      "Smart Home System",
      "Wine Cellar",
    ],
    description:
      "Ultra-luxury penthouse with panoramic views of Los Angeles and the Hollywood Hills.",
  },
  {
    id: 2,
    title: "Oceanfront Villa Estate",
    location: "Miami Beach, FL",
    price: "$12,900,000",
    image: "/images/image2.jpg",
    beds: 6,
    baths: 5,
    sqft: 5800,
    type: "Villa",
    features: [
      "Private Beach Access",
      "Infinity Pool",
      "Guest House",
      "Yacht Dock",
    ],
    description:
      "Stunning waterfront villa with direct ocean access and modern luxury amenities.",
  },
  {
    id: 3,
    title: "Modern Downtown Loft",
    location: "New York, NY",
    price: "$4,200,000",
    image: "/images/image3.jpg",
    beds: 2,
    baths: 2,
    sqft: 2100,
    type: "Loft",
    features: [
      "High Ceilings",
      "Private Terrace",
      "Designer Kitchen",
      "Building Concierge",
    ],
    description:
      "Sophisticated loft in the heart of Manhattan with premium finishes and amenities.",
  },
  {
    id: 4,
    title: "Modern Villa",
    location: "New York, NY",
    price: "$4,200,000",
    image: "/images/image4.jpg",
    beds: 2,
    baths: 2,
    sqft: 2100,
    type: "Loft",
    features: [
      "High Ceilings",
      "Private Terrace",
      "Designer Kitchen",
      "Building Concierge",
    ],
    description:
      "Sophisticated loft in the heart of Manhattan with premium finishes and amenities.",
  },
];

export const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Interior Designer",
    image: "/images/person1.jpg",
    quote:
      "Residio made finding my dream home an absolute breeze. Their attention to detail and personalized service exceeded all my expectations.",
    rating: 5,
    location: "Beverly Hills",
    purchaseValue: "$5.8M",
  },
  {
    name: "Michael Chen",
    role: "Tech Executive",
    image: "/images/person2.jpg",
    quote:
      "The luxury properties available through Residio are unmatched. They helped me find a modern penthouse that perfectly suits my lifestyle.",
    rating: 5,
    location: "New York",
    purchaseValue: "$7.2M",
  },
  {
    name: "Emma Thompson",
    role: "Business Owner",
    image: "/images/person3.jpg",
    quote:
      "The Residio team's knowledge of premium real estate markets made all the difference in finding our family's perfect home.",
    rating: 5,
    location: "Miami",
    purchaseValue: "$6.5M",
  },
];

export const videoTestimonial = {
  name: "Robert & Lisa Anderson",
  role: "Private Equity Partners",
  image: "/api/placeholder/100/100",
  videoThumbnail: "/api/placeholder/800/450",
  location: "Beverly Hills",
  purchaseValue: "$12.5M",
  quote:
    "Working with Residio was transformative. They didn't just find us a house; they found us our dream home. The attention to detail and understanding of our needs was exceptional.",
};

export const neighborhoods = [
  {
    name: "Beverly Hills",
    location: "Los Angeles, CA",
    image: "/images/image4.jpg",
    properties: 45,
    priceRange: "$5M - $50M+",
    features: [
      "Celebrity Enclaves",
      "World-Class Shopping",
      "Prestigious Schools",
      "Luxury Amenities",
    ],
    description:
      "The epitome of luxury living in Los Angeles, featuring iconic estates and unparalleled privacy.",
  },
  {
    name: "Upper East Side",
    location: "New York, NY",
    image: "/images/image1.jpg",
    properties: 38,
    priceRange: "$3M - $40M+",
    features: [
      "Historic Architecture",
      "Central Park Views",
      "Museum Mile",
      "Elite Private Schools",
    ],
    description:
      "Manhattan's most sophisticated neighborhood, known for its historic mansions and cultural institutions.",
  },
  {
    name: "Palm Beach",
    location: "Florida",
    image: "/images/image3.jpg",
    properties: 32,
    priceRange: "$4M - $35M+",
    features: [
      "Oceanfront Estates",
      "Private Clubs",
      "Championship Golf",
      "Yacht Harbors",
    ],
    description:
      "Florida's premier luxury destination, offering pristine beaches and exclusive waterfront properties.",
  },
];

export const galleryItems = [
  {
    size: "lg",
    tag: "Modern Living",
    url: "/images/modern-living.jpg",
    category: "Interior",
    description:
      "Contemporary open-concept living spaces with premium finishes",
  },
  {
    size: "sm",
    tag: "Pool & Spa",
    url: "/images/pool.jpg",
    category: "Amenities",
    description: "Resort-style pools and wellness facilities",
  },
  {
    size: "sm",
    tag: "Smart Home",
    url: "/images/smart-home.jpg",
    category: "Technology",
    description: "Cutting-edge home automation systems",
  },
  {
    size: "lg",
    tag: "Ocean View",
    url: "/images/ocean-view.jpg",
    category: "Views",
    description: "Breathtaking waterfront vistas and panoramic scenes",
  },
  {
    size: "lg",
    tag: "Private Theater",
    url: "/images/private-theatre.jpg",
    category: "Entertainment",
    description: "State-of-the-art home cinema experiences",
  },
  {
    size: "sm",
    tag: "Wine Cellar",
    url: "/images/wine-cellar.jpg",
    category: "Lifestyle",
    description: "Custom-designed wine storage and tasting rooms",
  },
  {
    size: "sm",
    tag: "Gourmet Kitchen",
    url: "/images/kitchen.jpg",
    category: "Kitchen",
    description: "Professional-grade appliances and luxury finishes",
  },
  {
    size: "lg",
    tag: "Master Suite",
    url: "/images/master-suite.jpg",
    category: "Bedroom",
    description: "Opulent master retreats with premium amenities",
  },
];

export const propertyTypes = [
  { value: "house", label: "House" },
  { value: "apartment", label: "Apartment" },
  { value: "villa", label: "Villa" },
  { value: "penthouse", label: "Penthouse" },
  { value: "estate", label: "Estate" },
  { value: "mansion", label: "Mansion" },
];

export const priceRanges = [
  { value: "1-5m", label: "$1M - $5M" },
  { value: "5-10m", label: "$5M - $10M" },
  { value: "10-20m", label: "$10M - $20M" },
  { value: "20m+", label: "$20M+" },
];

export const locations = [
  { value: "beverly-hills", label: "Beverly Hills" },
  { value: "manhattan", label: "Manhattan" },
  { value: "miami-beach", label: "Miami Beach" },
  { value: "palm-beach", label: "Palm Beach" },
  { value: "hamptons", label: "The Hamptons" },
  { value: "aspen", label: "Aspen" },
];

export const amenities = [
  { value: "pool", label: "Pool" },
  { value: "gym", label: "Private Gym" },
  { value: "theater", label: "Home Theater" },
  { value: "wine-cellar", label: "Wine Cellar" },
  { value: "spa", label: "Spa" },
  { value: "smart-home", label: "Smart Home" },
  { value: "elevator", label: "Private Elevator" },
  { value: "garage", label: "Multi-Car Garage" },
  { value: "security", label: "24/7 Security" },
  { value: "water-front", label: "Water Front" },
];

// Stats that can be used across different sections
export const stats = {
  properties: "20k+",
  clients: "12k+",
  cities: "100+",
  agents: "150+",
  satisfaction: "98%",
  propertiesValue: "$2B+",
  support: "24/7",
  exclusiveListings: "500+",
};

// Common features that can be highlighted across the site
export const features = [
  "Exclusive access to off-market properties",
  "Personalized property matching",
  "Virtual property tours available",
  "Dedicated luxury market specialists",
  "Global network of high-net-worth buyers",
  "Discreet and confidential service",
  "Professional staging and marketing",
  "Luxury concierge services",
];
