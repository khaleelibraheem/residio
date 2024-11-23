"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Grid, List } from "lucide-react";
import { Button } from "@/components/ui/button";
import PropertyCard from "./PropertyCard";

export default function PropertyGrid({ properties }) {
  const [viewType, setViewType] = useState("grid"); // 'grid' or 'list'

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* View Toggle and Results Count */}
      <div className="flex items-center justify-between mb-6">
        <p className="text-gray-600 dark:text-gray-400">
          Showing {properties.length} properties
        </p>
        <div className="flex items-center gap-2">
          <Button
            variant={viewType === "grid" ? "default" : "outline"}
            size="icon"
            onClick={() => setViewType("grid")}
          >
            <Grid className="h-4 w-4" />
          </Button>
          <Button
            variant={viewType === "list" ? "default" : "outline"}
            size="icon"
            onClick={() => setViewType("list")}
          >
            <List className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Properties Grid/List */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className={`grid gap-6 ${
          viewType === "grid"
            ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
            : "grid-cols-1"
        }`}
      >
        {properties.map((property) => (
          <motion.div key={property.id} variants={item}>
            <PropertyCard property={property} viewType={viewType} />
          </motion.div>
        ))}
      </motion.div>

      {/* No Results */}
      {properties.length === 0 && (
        <div className="text-center py-12">
          <h3 className="text-xl font-semibold mb-2 dark:text-white">
            No properties found
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
            Try adjusting your filters to find what you&apos;re looking for
          </p>
        </div>
      )}
    </div>
  );
}
