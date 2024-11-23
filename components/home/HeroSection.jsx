import React from "react";
import { motion } from "framer-motion";
import { MapPin, Crown, Star, ArrowUpRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const PropertyCard = ({ city, price, rating, listings, trend, image }) => (
  <Card
    className={cn(
      "backdrop-blur-md transition-all duration-300 overflow-hidden group cursor-pointer",
      "dark:bg-black/20 dark:hover:bg-black/40 dark:border-white/10",
      "bg-white/80 hover:bg-white/90 border-black/10"
    )}
  >
    <CardContent className="p-6 relative">
      {/* Top Section */}
      <div className="flex items-start justify-between mb-6">
        <div>
          <h3
            className={cn(
              "text-lg font-medium mb-2 transition-colors",
              "dark:text-white dark:group-hover:text-primary",
              "text-gray-900 group-hover:text-primary"
            )}
          >
            {city}
          </h3>
          <div
            className={cn(
              "flex items-center gap-1.5 text-sm",
              "dark:text-white/60",
              "text-gray-600"
            )}
          >
            <MapPin className="w-4 h-4" />
            <span>{listings} Available Properties</span>
          </div>
        </div>
        <Badge
          variant="outline"
          className={cn(
            "border-0 transition-colors",
            "dark:bg-primary/10 dark:text-primary",
            "bg-primary/20 text-primary"
          )}
        >
          {trend}
        </Badge>
      </div>

      {/* Middle Section */}
      <div className="flex items-center gap-4 mb-6">
        <div
          className={cn(
            "flex items-center gap-1 px-2.5 py-1.5 rounded-full",
            "dark:bg-white/5 dark:text-white/80",
            "bg-black/5 text-gray-900"
          )}
        >
          <Star className="w-4 h-4 fill-primary text-primary" />
          <span className="text-sm font-medium">{rating}</span>
        </div>
        <div className={cn("h-4 w-px", "dark:bg-white/10", "bg-black/10")} />
        <div className={cn("text-sm", "dark:text-white/60", "text-gray-600")}>
          Premier Location
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex items-end justify-between">
        <div>
          <div
            className={cn(
              "text-sm mb-1",
              "dark:text-white/60",
              "text-gray-600"
            )}
          >
            Starting from
          </div>
          <div
            className={cn(
              "text-2xl font-semibold",
              "dark:text-white",
              "text-gray-900"
            )}
          >
            ${price}M
          </div>
        </div>
        <div
          className={cn(
            "h-8 w-8 rounded-full flex items-center justify-center transition-colors",
            "dark:bg-white/5 dark:group-hover:bg-primary/20",
            "bg-black/5 group-hover:bg-primary/20"
          )}
        >
          <ArrowUpRight
            className={cn(
              "w-4 h-4 transition-colors",
              "dark:text-white/60 dark:group-hover:text-primary",
              "text-gray-600 group-hover:text-primary"
            )}
          />
        </div>
      </div>

      {/* Hover Effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
        <div
          className={cn(
            "absolute inset-0 bg-gradient-to-r",
            "dark:from-primary/5 dark:to-transparent",
            "from-primary/10 to-transparent"
          )}
        />
      </div>
    </CardContent>
  </Card>
);

export default function HeroSection() {
  const properties = [
    {
      city: "Beverly Hills",
      price: "4.5",
      rating: "4.9",
      listings: "24",
      trend: "High Demand",
      image: "/beverly-hills.jpg",
    },
    {
      city: "Manhattan",
      price: "8.2",
      rating: "4.8",
      listings: "18",
      trend: "Trending",
      image: "/manhattan.jpg",
    },
    {
      city: "Miami Beach",
      price: "3.8",
      rating: "4.7",
      listings: "15",
      trend: "New Listings",
      image: "/miami.jpg",
    },
  ];

  return (
    <section className="min-h-screen relative overflow-hidden">
      {/* Gradient Background - Optimized for both modes */}
      <div
        className={cn(
          "absolute inset-0",
          "dark:bg-gradient-to-br dark:from-black dark:via-gray-900 dark:to-black",
          "bg-gradient-to-br from-gray-50 via-gray-100 to-gray-50"
        )}
      >
        <div className="absolute inset-0 opacity-40">
          <div
            className={cn(
              "absolute top-0 -left-4 w-96 h-96 rounded-full mix-blend-multiply filter blur-3xl animate-blob",
              "dark:bg-primary/30",
              "bg-primary/20"
            )}
          />
          <div
            className={cn(
              "absolute top-0 -right-4 w-96 h-96 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000",
              "dark:bg-purple-500/30",
              "bg-purple-500/20"
            )}
          />
          <div
            className={cn(
              "absolute -bottom-8 left-20 w-96 h-96 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000",
              "dark:bg-pink-500/30",
              "bg-pink-500/20"
            )}
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={cn(
              "inline-flex items-center gap-2 backdrop-blur-sm border rounded-full px-4 py-1 mb-6",
              "dark:bg-white/5 dark:border-white/10",
              "bg-black/5 border-black/10"
            )}
          >
            <Crown className="w-4 h-4 text-primary" />
            <span
              className={cn("text-sm", "dark:text-white/80", "text-gray-900")}
            >
              Premium Properties
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className={cn(
              "text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight",
              "dark:text-white",
              "text-gray-900"
            )}
          >
            Discover Luxury
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-500 to-pink-500">
              Real Estate
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className={cn(
              "text-lg mb-8",
              "dark:text-white/60",
              "text-gray-600"
            )}
          >
            Explore exclusive properties in the world&apos;s most prestigious
            locations
          </motion.p>
        </div>

        {/* Property Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto"
        >
          {properties.map((property, index) => (
            <PropertyCard key={index} {...property} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
