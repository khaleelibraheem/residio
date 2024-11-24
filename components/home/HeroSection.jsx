"use client";

import React, { useState } from "react";
import { MapPin, Search, BedDouble, Bath, Square } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { motion } from "framer-motion";

const PropertyCard = ({ delay, data, variant }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const variants = {
    top: "lg:absolute lg:top-8 lg:right-28 lg:rotate-3",
    middle: "lg:absolute lg:top-44 lg:-right-6 lg:-rotate-3",
    bottom: "lg:absolute lg:top-[340px] lg:right-32 lg:rotate-6",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05, rotate: 0, zIndex: 50 }}
      transition={{ duration: 0.5, delay }}
      className={`bg-white/10 backdrop-blur-md rounded-xl border border-white/10 shadow-xl p-3 w-[280px] transition-all duration-300 ${variants[variant]}`}
    >
      <div className="relative h-32 rounded-lg overflow-hidden mb-3">
        {!imageLoaded && (
          <div className="absolute inset-0 bg-white/10 animate-pulse" />
        )}
        <Image
          src={data.image}
          alt={data.title}
          className={`object-cover hover:scale-110 transition-transform duration-300 ${
            imageLoaded ? "opacity-100" : "opacity-0"
          }`}
          fill
          sizes="(max-width: 280px) 100vw"
          onLoad={() => setImageLoaded(true)}
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        <div className="absolute top-2 left-2 bg-white/20 backdrop-blur-md rounded-full px-3 py-1">
          <span className="text-xs font-medium text-white">
            ${data.price.toLocaleString()}
          </span>
        </div>
      </div>
      <h3 className="text-white font-medium mb-2 truncate">{data.title}</h3>
      <div className="flex items-center gap-4 text-white/80 text-sm">
        <div className="flex items-center gap-1">
          <BedDouble className="w-4 h-4" />
          <span>{data.beds}</span>
        </div>
        <div className="flex items-center gap-1">
          <Bath className="w-4 h-4" />
          <span>{data.baths}</span>
        </div>
        <div className="flex items-center gap-1">
          <Square className="w-4 h-4" />
          <span>{data.sqft} sqft</span>
        </div>
      </div>
    </motion.div>
  );
};

const MobilePropertyCard = ({ delay, data }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="bg-white/10 backdrop-blur-md rounded-xl border border-white/10 shadow-xl p-3 w-[280px] shrink-0 snap-center"
    >
      <div className="relative h-32 rounded-lg overflow-hidden mb-3">
        {!imageLoaded && (
          <div className="absolute inset-0 bg-white/10 animate-pulse" />
        )}
        <Image
          src={data.image}
          alt={data.title}
          className={`object-cover hover:scale-110 transition-transform duration-300 ${
            imageLoaded ? "opacity-100" : "opacity-0"
          }`}
          fill
          sizes="(max-width: 280px) 100vw"
          onLoad={() => setImageLoaded(true)}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        <div className="absolute top-2 left-2 bg-white/20 backdrop-blur-md rounded-full px-3 py-1">
          <span className="text-xs font-medium text-white">
            ${data.price.toLocaleString()}
          </span>
        </div>
      </div>
      <h3 className="text-white font-medium mb-2 truncate">{data.title}</h3>
      <div className="flex items-center gap-4 text-white/80 text-sm">
        <div className="flex items-center gap-1">
          <BedDouble className="w-4 h-4" />
          <span>{data.beds}</span>
        </div>
        <div className="flex items-center gap-1">
          <Bath className="w-4 h-4" />
          <span>{data.baths}</span>
        </div>
        <div className="flex items-center gap-1">
          <Square className="w-4 h-4" />
          <span>{data.sqft} sqft</span>
        </div>
      </div>
    </motion.div>
  );
};

const HeroSection = () => {
  const [category, setCategory] = React.useState("buy");

  const propertyData = [
    {
      image: "/images/image1.jpg",
      title: "Modern Villa in Beverly Hills",
      price: 2500000,
      beds: 5,
      baths: 4,
      sqft: 3200,
    },
    {
      image: "/images/image2.jpg",
      title: "Luxury Penthouse in Manhattan",
      price: 3800000,
      beds: 4,
      baths: 3,
      sqft: 2800,
    },
    {
      image: "/images/image3.jpg",
      title: "Oceanfront Estate Miami",
      price: 4200000,
      beds: 6,
      baths: 5,
      sqft: 4100,
    },
  ];

  return (
    <section className="relative h-auto min-h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/image3.jpg"
          alt="Luxury home"
          className="object-cover w-full h-full"
          width={1920}
          height={1080}
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60" />
      </div>

      {/* Main Content */}
      <div className="relative w-full px-4 lg:px-12 py-28">
        <div className="container mx-auto">
          <div className="lg:grid lg:grid-cols-2 gap-4 relative">
            {/* Left Column - Search Section */}
            <div className="relative z-10">
              {/* Hero Text */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-6"
              >
                <h1 className="text-6xl font-semibold text-white mb-4 tracking-tight">
                  Find Your Dream
                  <br />
                  Luxury Home
                </h1>
                <p className="text-base md:text-lg text-white/80 max-w-xl tracking-tight">
                  Discover exceptional properties in the world&apos;s most
                  prestigious locations
                </p>
              </motion.div>

              {/* Search Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white/10 backdrop-blur-md rounded-xl border border-white/10 shadow-xl p-4 md:p-6"
              >
                {/* Category Toggle */}
                <div className="flex space-x-1 bg-white/10 w-fit rounded-xl p-1 mb-4">
                  {["buy", "rent"].map((type) => (
                    <button
                      key={type}
                      onClick={() => setCategory(type)}
                      className={`
                        px-6 py-2 rounded-lg text-sm font-medium transition-all
                        ${
                          category === type
                            ? "bg-white text-black"
                            : "text-white hover:bg-white/10"
                        }
                      `}
                    >
                      {type.charAt(0).toUpperCase() + type.slice(1)}
                    </button>
                  ))}
                </div>

                {/* Search Controls */}
                <div className="grid grid-cols-1 gap-2 md:grid-cols-3 md:gap-3">
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/60" />
                    <Input
                      placeholder="Location"
                      className="w-full h-10 md:h-12 bg-white/10 border-white/10 rounded-lg pl-10 text-white placeholder:text-white/60 focus:ring-2 focus:ring-white/20 focus:bg-white/20"
                    />
                  </div>

                  <Select>
                    <SelectTrigger className="h-10 md:h-12 bg-white/10 border-white/10 rounded-lg text-white focus:ring-2 focus:ring-white/20 focus:bg-white/20">
                      <SelectValue placeholder="Property Type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="house">House</SelectItem>
                      <SelectItem value="apartment">Apartment</SelectItem>
                      <SelectItem value="villa">Villa</SelectItem>
                      <SelectItem value="penthouse">Penthouse</SelectItem>
                    </SelectContent>
                  </Select>

                  <Button className="h-10 md:h-12 bg-white hover:bg-white/90 text-black rounded-lg font-medium">
                    <Search className="w-4 h-4 mr-2" />
                    Search
                  </Button>
                </div>

                {/* Popular Locations */}
                <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm">
                  <span className="text-white/60">Popular:</span>
                  {["Beverly Hills", "Manhattan", "Miami Beach"].map(
                    (location) => (
                      <button
                        key={location}
                        className="text-white hover:text-white/80 transition-colors"
                      >
                        {location}
                      </button>
                    )
                  )}
                </div>
              </motion.div>
            </div>

            {/* Right Column - Property Cards for Desktop */}
            <div className="hidden lg:block relative h-[500px]">
              {propertyData.map((property, index) => (
                <PropertyCard
                  key={index}
                  data={property}
                  delay={0.4 + index * 0.2}
                  variant={["top", "middle", "bottom"][index]}
                />
              ))}
            </div>

            {/* Mobile Property Cards */}
            <div className="lg:hidden flex gap-4 overflow-x-auto pb-4 mt-8 snap-x snap-mandatory scrollbar-hide">
              {propertyData.map((property, index) => (
                <MobilePropertyCard
                  key={index}
                  data={property}
                  delay={0.4 + index * 0.2}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
