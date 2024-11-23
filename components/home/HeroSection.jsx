import React from "react";
import {
  MapPin,
  Crown,
  Star,
  ArrowUpRight,
  Search,
  Building2,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const PropertyCard = ({ city, price, rating, listings, trend, featured }) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <motion.div
      variants={fadeInUp}
      whileHover={{ y: -5 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <Card className="backdrop-blur-md transition-all duration-300 overflow-hidden cursor-pointer dark:bg-black/20 dark:hover:bg-black/40 dark:border-white/10 bg-white/80 hover:bg-white/90 border-black/10 relative">
        <CardContent className="p-6">
          {/* Top Section */}
          <div className="flex items-start justify-between mb-6">
            <div>
              <motion.h3
                className="text-lg font-medium mb-2 transition-colors dark:text-white dark:group-hover:text-primary text-gray-900 group-hover:text-primary"
                animate={{ color: isHovered ? "hsl(var(--primary))" : "" }}
              >
                {city}
              </motion.h3>
              <div className="flex items-center gap-1.5 text-sm dark:text-white/60 text-gray-600">
                <Building2 className="w-4 h-4" />
                <span>{listings} Available Properties</span>
              </div>
            </div>
            <Badge
              variant="outline"
              className="border-0 transition-colors dark:bg-primary/10 dark:text-primary bg-primary/20 text-primary"
            >
              {trend}
            </Badge>
          </div>

          {/* Middle Section */}
          <div className="flex items-center gap-4 mb-6">
            <motion.div
              className="flex items-center gap-1 px-2.5 py-1.5 rounded-full dark:bg-white/5 dark:text-white/80 bg-black/5 text-gray-900"
              whileTap={{ scale: 0.95 }}
            >
              <Star className="w-4 h-4 fill-primary text-primary" />
              <span className="text-sm font-medium">{rating}</span>
            </motion.div>
            <div className="h-4 w-px dark:bg-white/10 bg-black/10" />
            <div className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-primary" />
              <span className="text-sm dark:text-white/60 text-gray-600">
                Premier Location
              </span>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="flex items-end justify-between">
            <div>
              <div className="text-sm mb-1 dark:text-white/60 text-gray-600">
                Starting from
              </div>
              <motion.div
                className="text-2xl font-semibold dark:text-white text-gray-900"
                animate={{ scale: isHovered ? 1.05 : 1 }}
              >
                ${price}M
              </motion.div>
            </div>
            <motion.div
              className="h-8 w-8 rounded-full flex items-center justify-center transition-colors dark:bg-white/5 dark:group-hover:bg-primary/20 bg-black/5 group-hover:bg-primary/20"
              whileHover={{ rotate: 45 }}
              whileTap={{ scale: 0.9 }}
            >
              <ArrowUpRight className="w-4 h-4 transition-colors dark:text-white/60 dark:group-hover:text-primary text-gray-600 group-hover:text-primary" />
            </motion.div>
          </div>

          {/* Hover Gradient */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r dark:from-primary/5 dark:to-transparent from-primary/10 to-transparent"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.2 }}
          />
        </CardContent>
      </Card>
    </motion.div>
  );
};

const HeroSection = () => {
  const properties = [
    {
      city: "Beverly Hills",
      price: "4.5",
      rating: "4.9",
      listings: "24",
      trend: "High Demand",
      featured: true,
    },
    {
      city: "Manhattan",
      price: "8.2",
      rating: "4.8",
      listings: "18",
      trend: "Trending",
    },
    {
      city: "Miami Beach",
      price: "3.8",
      rating: "4.7",
      listings: "15",
      trend: "New Listings",
    },
  ];

  return (
    <section className="min-h-screen relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 dark:bg-gradient-to-br dark:from-black dark:via-gray-900 dark:to-black bg-gradient-to-br from-gray-50 via-gray-100 to-gray-50">
        <motion.div
          className="absolute inset-0 opacity-40"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            className="absolute top-0 -left-4 w-96 h-96 rounded-full mix-blend-multiply filter blur-3xl dark:bg-primary/30 bg-primary/20"
            animate={{
              x: [0, 30, 0],
              y: [0, 20, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute top-0 -right-4 w-96 h-96 rounded-full mix-blend-multiply filter blur-3xl dark:bg-purple-500/30 bg-purple-500/20"
            animate={{
              x: [0, -30, 0],
              y: [0, 30, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute -bottom-8 left-20 w-96 h-96 rounded-full mix-blend-multiply filter blur-3xl dark:bg-pink-500/30 bg-pink-500/20"
            animate={{
              x: [0, 20, 0],
              y: [0, -20, 0],
            }}
            transition={{
              duration: 9,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <motion.div
          className="max-w-xl mx-auto text-center mb-16"
          initial="initial"
          animate="animate"
          variants={stagger}
        >
          <motion.div
            variants={fadeInUp}
            className="inline-flex items-center gap-2 backdrop-blur-sm border rounded-full px-4 py-1 mb-6 dark:bg-white/5 dark:border-white/10 bg-black/5 border-black/10"
          >
            <Crown className="w-4 h-4 text-primary" />
            <span className="text-sm dark:text-white/80 text-gray-900">
              Premium Properties
            </span>
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight dark:text-white text-gray-900"
          >
            Discover Luxury
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-500 to-pink-500">
              Real Estate
            </span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-lg mb-8 dark:text-white/60 text-gray-600"
          >
            Explore exclusive properties in the world&apos;s most prestigious
            locations
          </motion.p>
        </motion.div>

        {/* Property Cards */}
        <motion.div
          variants={stagger}
          initial="initial"
          animate="animate"
          className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto"
        >
          <AnimatePresence>
            {properties.map((property, index) => (
              <PropertyCard key={index} {...property} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
