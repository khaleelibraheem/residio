import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  MapPin,
  Home,
  Bath,
  Ruler,
  Heart,
  Share2,
  Eye,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

const PropertyCard = ({ property, viewType = "grid" }) => {
  const [isLiked, setIsLiked] = useState(false);

  // Removed max-w-xs to allow card to fill available space
  const cardStyles =
    viewType === "grid" ? "w-full" : "w-full sm:flex sm:h-[300px]";

  const imageStyles =
    viewType === "grid" ? "aspect-[4/3] w-full" : "sm:w-[45%] h-full";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`group relative overflow-hidden bg-white dark:bg-black rounded-lg shadow-sm hover:shadow-xl dark:shadow-none transition-all duration-300 ${cardStyles}`}
    >
      <div className={`relative overflow-hidden ${imageStyles}`}>
        <Link href={`/listings/${property.id}`} className="block h-full">
          <div className="relative w-full h-full">
            <Image
              src={property.image}
              alt={property.title}
              className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
              width={400}
              height={300}
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        </Link>

        <div className="absolute top-3 left-3 flex flex-col gap-1.5">
          {property.new && (
            <Badge className="bg-primary hover:bg-primary/90 text-white px-2 py-0.5 text-xs">
              New
            </Badge>
          )}
          {property.virtualTour && (
            <Badge className="bg-black/70 hover:bg-black/80 text-white backdrop-blur-sm px-2 py-0.5 text-xs">
              <Eye className="w-3 h-3 mr-1" />
              Virtual Tour
            </Badge>
          )}
        </div>

        <div className="absolute top-3 right-3 flex gap-1.5">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  onClick={(e) => {
                    e.preventDefault();
                    setIsLiked(!isLiked);
                  }}
                  className={`bg-white dark:bg-black shadow-lg rounded-full p-1.5 cursor-pointer transition-all duration-300 ${
                    isLiked
                      ? "text-red-500 hover:bg-red-50 dark:hover:bg-zinc-900"
                      : "text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-zinc-900"
                  }`}
                >
                  <Heart
                    className="w-4 h-4"
                    fill={isLiked ? "currentColor" : "none"}
                    strokeWidth={2}
                  />
                </motion.button>
              </TooltipTrigger>
              <TooltipContent>
                <p>{isLiked ? "Remove from favorites" : "Add to favorites"}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="bg-white dark:bg-black shadow-lg rounded-full p-1.5 cursor-pointer text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-zinc-900 transition-all duration-300"
                >
                  <Share2 className="w-4 h-4" strokeWidth={2} />
                </motion.button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Share property</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>

      <div className={`p-4 ${viewType === "grid" ? "" : "sm:w-[55%]"}`}>
        <div className="space-y-3">
          <div className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-primary" strokeWidth={2.5} />
            <span className="text-xs text-gray-600 dark:text-gray-400 font-medium">
              {property.location}
            </span>
          </div>

          <Link href={`/listings/${property.id}`}>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white hover:text-primary dark:hover:text-primary/90 transition-colors duration-200 line-clamp-2">
              {property.title}
            </h3>
          </Link>

          <div className="flex gap-3 text-xs">
            <div className="flex items-center gap-1 text-gray-600 dark:text-gray-400">
              <Home className="w-3.5 h-3.5" strokeWidth={2} />
              <span>{property.beds} Beds</span>
            </div>
            <div className="flex items-center gap-1 text-gray-600 dark:text-gray-400">
              <Bath className="w-3.5 h-3.5" strokeWidth={2} />
              <span>{property.baths} Baths</span>
            </div>
            <div className="flex items-center gap-1 text-gray-600 dark:text-gray-400">
              <Ruler className="w-3.5 h-3.5" strokeWidth={2} />
              <span>{property.sqft} sqft</span>
            </div>
          </div>

          <div className="pt-3 flex items-center justify-between border-t border-gray-100 dark:border-zinc-800">
            <div>
              <p className="text-base font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                {property.price}
              </p>
              {property.pricePerSqft && (
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  ${property.pricePerSqft}/sqft
                </p>
              )}
            </div>

            <Link href={`/listings/${property.id}`}>
              <Button
                variant="outline"
                size="sm"
                className="group h-8 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300"
              >
                Details
                <ArrowRight className="w-3.5 h-3.5 ml-1.5 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default PropertyCard;
