"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, SlidersHorizontal, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import PropertyGrid from "@/components/listings/PropertyGrid";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { featuredProperties } from "@/lib/data";
import PropertyFilters from "@/components/listings/PropertyFilters";

export default function ListingsPage() {
  const [filteredProperties, setFilteredProperties] =
    useState(featuredProperties);
  const [searchQuery, setSearchQuery] = useState("");
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [activeFilters, setActiveFilters] = useState({
    query: "",
    location: "",
    type: "",
    priceRange: "",
    minBeds: 0,
    minBaths: 0,
    amenities: [],
  });

  const handleSearch = (query) => {
    setSearchQuery(query);
    if (!query) {
      setFilteredProperties(featuredProperties);
      return;
    }

    const filtered = featuredProperties.filter(
      (property) =>
        property.title.toLowerCase().includes(query.toLowerCase()) ||
        property.location.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredProperties(filtered);
  };

  const handleFilter = (filters) => {
    setActiveFilters(filters);
    let filtered = [...featuredProperties];

    if (filters.query) {
      const search = filters.query.toLowerCase();
      filtered = filtered.filter(
        (property) =>
          property.title.toLowerCase().includes(search) ||
          property.location.toLowerCase().includes(search)
      );
    }

    if (filters.location) {
      filtered = filtered.filter((property) =>
        property.location.includes(filters.location)
      );
    }

    if (filters.type) {
      filtered = filtered.filter(
        (property) => property.type.toLowerCase() === filters.type
      );
    }

    if (filters.priceRange) {
      // Implement price range filtering logic
    }

    if (filters.minBeds) {
      filtered = filtered.filter(
        (property) => property.beds >= filters.minBeds
      );
    }

    if (filters.minBaths) {
      filtered = filtered.filter(
        (property) => property.baths >= filters.minBaths
      );
    }

    if (filters.amenities && filters.amenities.length > 0) {
      filtered = filtered.filter((property) =>
        filters.amenities.every((amenity) =>
          property.features.some((feature) =>
            feature.toLowerCase().includes(amenity.toLowerCase())
          )
        )
      );
    }

    setFilteredProperties(filtered);
    setFiltersOpen(false);
  };

  const clearFilters = () => {
    setActiveFilters({
      query: "",
      location: "",
      type: "",
      priceRange: "",
      minBeds: 0,
      minBaths: 0,
      amenities: [],
    });
    setFilteredProperties(featuredProperties);
  };

  const activeFilterCount = Object.values(activeFilters).filter((value) =>
    Array.isArray(value) ? value.length > 0 : Boolean(value)
  ).length;

  return (
    <div className="min-h-screen bg-white dark:bg-black pt-20">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-4xl font-playfair font-bold dark:text-white mb-2">
                Luxury Properties
              </h1>
              <p className="text-gray-600 dark:text-gray-400 max-w-2xl">
                Discover an exclusive collection of premium properties in the
                world&apos;s most coveted locations.
              </p>
            </div>

            <div className="flex items-center gap-2">
              <div className="relative flex-1 md:w-64">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search properties..."
                  className="pl-10"
                  value={searchQuery}
                  onChange={(e) => handleSearch(e.target.value)}
                />
              </div>

              <Sheet open={filtersOpen} onOpenChange={setFiltersOpen}>
                <SheetTrigger asChild>
                  <Button
                    variant="outline"
                    className="relative"
                    onClick={() => setFiltersOpen(true)}
                  >
                    <SlidersHorizontal className="h-4 w-4 mr-2" />
                    Filters
                    {activeFilterCount > 0 && (
                      <span className="absolute -top-2 -right-2 bg-primary text-white w-5 h-5 rounded-full text-xs flex items-center justify-center">
                        {activeFilterCount}
                      </span>
                    )}
                  </Button>
                </SheetTrigger>
                <SheetContent
                  side="right"
                  className="w-full sm:max-w-lg flex flex-col p-0"
                >
                  {/* Fixed Header */}
                  <div className="p-6 border-b border-gray-100 dark:border-gray-800">
                    <SheetHeader>
                      <div className="flex items-center justify-between">
                        <SheetTitle>Filters</SheetTitle>
                        {activeFilterCount > 0 && (
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={clearFilters}
                          >
                            Clear all
                          </Button>
                        )}
                      </div>
                    </SheetHeader>
                  </div>

                  {/* Scrollable Content */}
                  <div className="flex-1 overflow-y-auto">
                    <div className="p-6">
                      <PropertyFilters
                        onFilter={handleFilter}
                        initialFilters={activeFilters}
                        isModal={true}
                      />
                    </div>
                  </div>

                  {/* Fixed Footer with Apply Button */}
                  <div className="border-t border-gray-100 dark:border-gray-800 p-6">
                    <Button
                      className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-white"
                      onClick={() => setFiltersOpen(false)}
                    >
                      Apply Filters
                    </Button>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>

          {/* Active Filters Display */}
          {activeFilterCount > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-wrap gap-2"
            >
              {Object.entries(activeFilters).map(([key, value]) => {
                if (!value || (Array.isArray(value) && value.length === 0))
                  return null;
                return (
                  <div
                    key={key}
                    className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm flex items-center gap-2"
                  >
                    <span>
                      {Array.isArray(value)
                        ? `${key} (${value.length})`
                        : `${key}: ${value}`}
                    </span>
                    <button
                      onClick={() => {
                        const newFilters = {
                          ...activeFilters,
                          [key]: Array.isArray(value) ? [] : "",
                        };
                        handleFilter(newFilters);
                      }}
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </div>
                );
              })}
            </motion.div>
          )}
        </motion.div>
      </div>

      {/* Results Section */}
      <div className="border-t border-gray-100 dark:border-gray-800">
        <PropertyGrid properties={filteredProperties} />
      </div>
    </div>
  );
}
