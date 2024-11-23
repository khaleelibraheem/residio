"use client";

import HeroSection from "@/components/home/HeroSection";
import SectionContainer from "@/components/shared/SectionContainer";
import SectionHeader from "@/components/shared/SectionHeader";
import PropertyCard from "@/components/listings/PropertyCard";
import VideoTestimonial from "@/components/home/VideoTestimonial";
import TestimonialCard from "@/components/home/TestimonialCard";
import NeighborhoodCard from "@/components/home/NeighborhoodCard";
import GalleryGrid from "@/components/home/GalleryGrid";
import ContactForm from "@/components/home/ContactForm";
import StatsGrid from "@/components/home/StatsGrid";
import GradientButton from "@/components/shared/GradientButton";
import Footer from "@/components/common/Footer";
import { ArrowRight } from "lucide-react";

import {
  featuredProperties,
  testimonials,
  neighborhoods,
  galleryItems,
  stats,
} from "@/lib/data";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white dark:bg-black overflow-hidden">
      <HeroSection />

      {/* Stats Section */}
      <SectionContainer darkBg>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { number: stats.properties, label: "Premium Properties" },
            { number: stats.clients, label: "Happy Clients" },
            { number: stats.cities, label: "Cities Covered" },
            { number: stats.agents, label: "Expert Agents" },
          ].map((stat, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-white dark:bg-black border border-gray-100 dark:border-gray-800"
            >
              <h3 className="text-3xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                {stat.number}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mt-2">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </SectionContainer>

      {/* Featured Properties */}
      <SectionContainer>
        <div className="flex justify-between items-center mb-12">
          <SectionHeader
            title="Featured Properties"
            subtitle="Handpicked premium properties for luxury living"
            className="mb-0"
          />
          <GradientButton className="hidden md:flex items-center gap-2 dark:text-black">
            View All <ArrowRight className="w-4 h-4" />
          </GradientButton>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProperties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </SectionContainer>

      {/* Testimonials */}
      <SectionContainer darkBg>
        <SectionHeader
          title="Client Success Stories"
          subtitle="Real experiences from clients who found their perfect luxury homes"
        />
        <VideoTestimonial />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              testimonial={testimonial}
              index={index}
            />
          ))}
        </div>
      </SectionContainer>

      {/* Neighborhoods */}
      <SectionContainer>
        <SectionHeader
          title="Explore Premium Neighborhoods"
          subtitle="Discover the most exclusive areas in prime locations"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {neighborhoods.map((neighborhood, index) => (
            <NeighborhoodCard
              key={index}
              neighborhood={neighborhood}
              index={index}
            />
          ))}
        </div>
      </SectionContainer>

      {/* Gallery */}
      <SectionContainer>
        <SectionHeader
          title="Luxury Living Gallery"
          subtitle="Experience the epitome of luxury through our carefully curated collection"
        />
        <GalleryGrid items={galleryItems} />
      </SectionContainer>

      {/* Contact Form */}
      <SectionContainer darkBg>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <ContactForm />
          <StatsGrid />
        </div>
      </SectionContainer>

      <Footer />
    </div>
  );
}
