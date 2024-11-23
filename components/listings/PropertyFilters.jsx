"use client";

import { useState, useEffect } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { propertyTypes, priceRanges, locations, amenities } from "@/lib/data";

export default function PropertyFilters({
  onFilter,
  initialFilters = {},
  isModal = false,
}) {
  const [filters, setFilters] = useState({
    location: "",
    type: "",
    priceRange: "",
    minBeds: 0,
    minBaths: 0,
    amenities: [],
    query: "",
    ...initialFilters,
  });

  const handleFilterChange = (key, value) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    if (!isModal) {
      onFilter(newFilters);
    }
  };

  // Only in modal mode, filters are applied when the Apply button is clicked
  useEffect(() => {
    if (!isModal) {
      onFilter(filters);
    }
  }, [filters, isModal, onFilter]);

  return (
    <div className="space-y-6">
      <Accordion type="single" collapsible className="w-full">
        {/* Location Section */}
        <AccordionItem value="location">
          <AccordionTrigger className="text-lg font-semibold">
            Location
          </AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search by location..."
                  className="pl-10"
                  value={filters.query}
                  onChange={(e) => handleFilterChange("query", e.target.value)}
                />
              </div>
              <Select
                value={filters.location}
                onValueChange={(value) => handleFilterChange("location", value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select location" />
                </SelectTrigger>
                <SelectContent>
                  {locations.map((location) => (
                    <SelectItem key={location.value} value={location.value}>
                      {location.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Property Type Section */}
        <AccordionItem value="type">
          <AccordionTrigger className="text-lg font-semibold">
            Property Type
          </AccordionTrigger>
          <AccordionContent>
            <Select
              value={filters.type}
              onValueChange={(value) => handleFilterChange("type", value)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select type" />
              </SelectTrigger>
              <SelectContent>
                {propertyTypes.map((type) => (
                  <SelectItem key={type.value} value={type.value}>
                    {type.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </AccordionContent>
        </AccordionItem>

        {/* Price Range Section */}
        <AccordionItem value="price">
          <AccordionTrigger className="text-lg font-semibold">
            Price Range
          </AccordionTrigger>
          <AccordionContent>
            <Select
              value={filters.priceRange}
              onValueChange={(value) => handleFilterChange("priceRange", value)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select price range" />
              </SelectTrigger>
              <SelectContent>
                {priceRanges.map((range) => (
                  <SelectItem key={range.value} value={range.value}>
                    {range.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </AccordionContent>
        </AccordionItem>

        {/* Beds & Baths Section */}
        <AccordionItem value="rooms">
          <AccordionTrigger className="text-lg font-semibold">
            Rooms
          </AccordionTrigger>
          <AccordionContent>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2 dark:text-white">
                  Minimum Bedrooms: {filters.minBeds}
                </label>
                <Slider
                  value={[filters.minBeds]}
                  onValueChange={([value]) =>
                    handleFilterChange("minBeds", value)
                  }
                  max={10}
                  step={1}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 dark:text-white">
                  Minimum Bathrooms: {filters.minBaths}
                </label>
                <Slider
                  value={[filters.minBaths]}
                  onValueChange={([value]) =>
                    handleFilterChange("minBaths", value)
                  }
                  max={10}
                  step={1}
                />
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Amenities Section */}
        <AccordionItem value="amenities">
          <AccordionTrigger className="text-lg font-semibold">
            Amenities
          </AccordionTrigger>
          <AccordionContent>
            <div className="grid grid-cols-2 gap-2">
              {amenities.map((amenity) => (
                <button
                  key={amenity.value}
                  onClick={() => {
                    const newAmenities = filters.amenities.includes(
                      amenity.value
                    )
                      ? filters.amenities.filter((a) => a !== amenity.value)
                      : [...filters.amenities, amenity.value];
                    handleFilterChange("amenities", newAmenities);
                  }}
                  className={`p-2 rounded-lg text-sm text-left transition-colors ${
                    filters.amenities.includes(amenity.value)
                      ? "bg-primary text-white"
                      : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
                  }`}
                >
                  {amenity.label}
                </button>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
