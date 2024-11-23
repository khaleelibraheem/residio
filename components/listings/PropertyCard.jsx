"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { MapPin, Home, Bath, Ruler, Heart, Share2, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Image from "next/image";

export default function PropertyCard({ property, viewType = "grid" }) {
  const [isLiked, setIsLiked] = useState(false);

  const cardStyles =
    viewType === "grid" ? "rounded-3xl" : "rounded-3xl sm:flex sm:h-64";

  const imageStyles =
    viewType === "grid" ? "w-full h-64" : "w-full h-64 sm:w-96 sm:h-full";

  const contentStyles =
    viewType === "grid" ? "p-6" : "p-6 flex-1 flex flex-col justify-between";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`group overflow-hidden bg-white dark:bg-black border border-gray-100 dark:border-gray-800 hover:border-primary/50 dark:hover:border-primary/50 transition-all duration-300 ${cardStyles}`}
    >
      <Link
        href={`/listings/${property.id}`}
        className="relative overflow-hidden block"
      >
        <div className={`relative overflow-hidden ${imageStyles}`}>
          <Image
            src={property.image}
            alt={property.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            width={500}
            height={500}
            priority
          />
          <div className="absolute inset-0 bg-black/5 group-hover:bg-black/20 transition-colors duration-300" />

          {property.new && (
            <div className="absolute top-4 left-4 bg-gradient-to-r from-primary to-primary/80 text-white px-3 py-1 rounded-full text-sm font-medium">
              New
            </div>
          )}

          <div className="absolute top-4 right-4 flex gap-2">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      setIsLiked(!isLiked);
                    }}
                    className={`bg-black/20 backdrop-blur-md rounded-full p-2 cursor-pointer hover:bg-black/40 transition-colors ${
                      isLiked ? "text-red-500" : "text-white"
                    }`}
                  >
                    <Heart
                      className="w-5 h-5"
                      fill={isLiked ? "currentColor" : "none"}
                    />
                  </button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>
                    {isLiked ? "Remove from favorites" : "Add to favorites"}
                  </p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      // Share functionality
                    }}
                    className="bg-black/20 backdrop-blur-md rounded-full p-2 cursor-pointer hover:bg-black/40 transition-colors text-white"
                  >
                    <Share2 className="w-5 h-5" />
                  </button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Share property</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>

          {/* Virtual Tour Badge */}
          {property.virtualTour && (
            <div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
              <Eye className="w-4 h-4" />
              Virtual Tour
            </div>
          )}
        </div>
      </Link>

      <div className={contentStyles}>
        <div>
          <div className="flex items-center gap-2 mb-4">
            <MapPin className="w-4 h-4 text-primary" />
            <span className="text-gray-600 dark:text-gray-400 text-sm">
              {property.location}
            </span>
          </div>

          <Link href={`/listings/${property.id}`}>
            <h3 className="text-xl font-semibold mb-4 dark:text-white hover:text-primary transition-colors">
              {property.title}
            </h3>
          </Link>

          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 text-sm">
              <Home className="w-4 h-4" />
              <span>{property.beds} Beds</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 text-sm">
              <Bath className="w-4 h-4" />
              <span>{property.baths} Baths</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 text-sm">
              <Ruler className="w-4 h-4" />
              <span>{property.sqft} sqft</span>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <p className="text-xl font-semibold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
              {property.price}
            </p>
            {property.pricePerSqft && (
              <p className="text-sm text-gray-600 dark:text-gray-400">
                ${property.pricePerSqft}/sqft
              </p>
            )}
          </div>
          <Link href={`/listings/${property.id}`}>
            <Button
              variant="outline"
              size="sm"
              className="border-primary text-primary hover:bg-primary/5"
            >
              View Details
            </Button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
