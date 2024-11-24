"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import Image from "next/image";

export default function NeighborhoodCard({ neighborhood, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2 }}
      className="group cursor-pointer"
    >
      <div className="relative rounded-3xl overflow-hidden">
        <Image
          src={neighborhood.image}
          alt={neighborhood.name}
          className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
          width={500}
          height={500}
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

        {/* Content Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <div className="flex items-center gap-2 text-white/80 text-sm mb-2">
            <MapPin className="w-4 h-4" />
            <span>{neighborhood.location}</span>
          </div>
          <h3 className="text-2xl font-semibold text-white mb-2">
            {neighborhood.name}
          </h3>
          <div className="flex justify-between items-center">
            <p className="text-white/90">
              {neighborhood.properties} Properties
            </p>
            <div className="bg-black/30 backdrop-blur-sm px-3 py-1 rounded-full text-white/90 text-sm">
              {neighborhood.priceRange}
            </div>
          </div>

          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      </div>
    </motion.div>
  );
}
