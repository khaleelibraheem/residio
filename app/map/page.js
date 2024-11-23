"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  Filter,
  Bath,
  Bed,
  Share2,
  Heart,
  Grid,
  List,
  SlidersHorizontal,
  ArrowUpDown,
} from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Slider,
  SliderTrack,
  SliderRange,
  SliderThumb,
} from "@/components/ui/slider";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useMediaQuery } from "@/hooks/use-media-query";
import Image from "next/image";

// Sample property data
const SAMPLE_PROPERTIES = [
  {
    id: 1,
    title: "Modern Downtown Apartment",
    type: "Apartment",
    price: 850000,
    beds: 2,
    baths: 2,
    sqft: 1200,
    address: "123 Main St, Downtown",
    description: "Luxurious modern apartment with city views",
    status: "For Sale",
    images: ["/api/placeholder/600/400"],
    tags: ["Pool", "Gym", "Parking"],
  },
  {
    id: 2,
    title: "Suburban Family Home",
    type: "House",
    price: 1200000,
    beds: 4,
    baths: 3,
    sqft: 2500,
    address: "456 Oak Ave, Suburbs",
    description: "Spacious family home with large backyard",
    status: "For Sale",
    images: ["/api/placeholder/600/400"],
    tags: ["Garden", "Garage", "New"],
  },
  // Add more sample properties here
];

export default function MapView() {
  const [properties, setProperties] = useState(SAMPLE_PROPERTIES);
  const [viewMode, setViewMode] = useState("grid");
  const [showFilters, setShowFilters] = useState(false);
  const [priceRange, setPriceRange] = useState([0, 2000000]);
  const [bedsRange, setBedsRange] = useState([1, 5]);
  const [sortBy, setSortBy] = useState("price-asc");
  const isDesktop = useMediaQuery("(min-width: 768px)");

  const formatPrice = (price) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(price);
  };

  const sortProperties = (properties, sortBy) => {
    return [...properties].sort((a, b) => {
      switch (sortBy) {
        case "price-asc":
          return a.price - b.price;
        case "price-desc":
          return b.price - a.price;
        case "beds-asc":
          return a.beds - b.beds;
        case "beds-desc":
          return b.beds - a.beds;
        default:
          return 0;
      }
    });
  };

  const PropertyCard = ({ property }) => (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      className="bg-background rounded-xl shadow-lg overflow-hidden border border-border/50 hover:border-border"
    >
      <div className="relative group">
        <Image
          src={property.images[0]}
          alt={property.title}
          width={600}
          height={400}
          className="w-full aspect-video object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        <div className="absolute top-4 right-4 flex gap-2">
          <Button size="icon" variant="secondary" className="rounded-full">
            <Share2 className="h-4 w-4" />
          </Button>
          <Button size="icon" variant="secondary" className="rounded-full">
            <Heart className="h-4 w-4" />
          </Button>
        </div>
        <div className="absolute top-4 left-4">
          <span className="px-2 py-1 bg-primary text-primary-foreground rounded-md text-sm font-medium">
            {property.status}
          </span>
        </div>
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="font-semibold truncate">{property.title}</h3>
            <p className="text-muted-foreground text-sm truncate">
              {property.address}
            </p>
          </div>
          <div className="text-right">
            <div className="font-semibold">{formatPrice(property.price)}</div>
            <div className="text-sm text-muted-foreground">
              {formatPrice(property.price / property.sqft)}/sqft
            </div>
          </div>
        </div>
        <div className="mt-4 flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Bed className="h-4 w-4" />
            <span>{property.beds}</span>
          </div>
          <div className="flex items-center gap-1">
            <Bath className="h-4 w-4" />
            <span>{property.baths}</span>
          </div>
          <div className="flex items-center gap-1">
            <span>{property.sqft.toLocaleString()} sqft</span>
          </div>
        </div>
        <div className="mt-4 flex gap-2 flex-wrap">
          {property.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 bg-secondary text-secondary-foreground rounded-md text-xs"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );

  const FiltersContent = () => (
    <div className="space-y-6 p-4">
      <div>
        <h4 className="text-sm font-medium mb-3">Price Range</h4>
        <Slider
          defaultValue={priceRange}
          max={2000000}
          step={50000}
          onValueChange={setPriceRange}
        />
        <div className="flex justify-between mt-2 text-sm text-muted-foreground">
          <span>{formatPrice(priceRange[0])}</span>
          <span>{formatPrice(priceRange[1])}</span>
        </div>
      </div>

      <div>
        <h4 className="text-sm font-medium mb-3">Bedrooms</h4>
        <Slider
          defaultValue={bedsRange}
          max={5}
          step={1}
          onValueChange={setBedsRange}
        />
        <div className="flex justify-between mt-2 text-sm text-muted-foreground">
          <span>{bedsRange[0]}+ beds</span>
          <span>Up to {bedsRange[1]} beds</span>
        </div>
      </div>

      <Button
        className="w-full"
        onClick={() => {
          const filteredProperties = SAMPLE_PROPERTIES.filter(
            (property) =>
              property.price >= priceRange[0] &&
              property.price <= priceRange[1] &&
              property.beds >= bedsRange[0] &&
              property.beds <= bedsRange[1]
          );
          setProperties(sortProperties(filteredProperties, sortBy));
          setShowFilters(false);
        }}
      >
        Apply Filters
      </Button>
    </div>
  );

  return (
    <div className="min-h-[calc(100vh-4rem)] p-4 md:p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1 relative">
          <Input
            placeholder="Search properties..."
            className="w-full pl-10 pr-4"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        </div>
        <div className="flex gap-2">
          <Sheet open={showFilters} onOpenChange={setShowFilters}>
            <SheetTrigger asChild>
              <Button variant="outline">
                <Filter className="mr-2 h-4 w-4" />
                Filters
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Filters</SheetTitle>
              </SheetHeader>
              <FiltersContent />
            </SheetContent>
          </Sheet>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">
                <ArrowUpDown className="mr-2 h-4 w-4" />
                Sort
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setSortBy("price-asc")}>
                Price: Low to High
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setSortBy("price-desc")}>
                Price: High to Low
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setSortBy("beds-asc")}>
                Beds: Low to High
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setSortBy("beds-desc")}>
                Beds: High to Low
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <div className="border rounded-md p-1 flex gap-1">
            <Button
              variant={viewMode === "grid" ? "secondary" : "ghost"}
              size="icon"
              onClick={() => setViewMode("grid")}
            >
              <Grid className="h-4 w-4" />
            </Button>
            <Button
              variant={viewMode === "list" ? "secondary" : "ghost"}
              size="icon"
              onClick={() => setViewMode("list")}
            >
              <List className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Results */}
      <AnimatePresence mode="wait">
        <div
          className={
            viewMode === "grid"
              ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
              : "space-y-6"
          }
        >
          {sortProperties(properties, sortBy).map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </AnimatePresence>
    </div>
  );
}
