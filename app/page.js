"use client";

import { useState, useEffect } from "react";
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
import StatsSection from "@/components/home/StatsSection";

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(true);
  const [contentReady, setContentReady] = useState(false);

  const stats = {
    properties: 150,
    clients: 500,
    cities: 25,
    agents: 75,
  };

  useEffect(() => {
    const loadTimer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    const contentTimer = setTimeout(() => {
      setContentReady(true);
    }, 1800);

    return () => {
      clearTimeout(loadTimer);
      clearTimeout(contentTimer);
    };
  }, []);

  if (isLoading || !contentReady) {
    return (
      <div className="fixed inset-0 flex flex-col items-center justify-center bg-gradient-to-b from-background to-accent/5">
        <div className="relative mb-8">
          <div className="text-4xl md:text-5xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
            Residio
          </div>
          <div className="absolute inset-0 animate-ping-slow rounded-full bg-primary/10 scale-150" />
          <div className="absolute inset-0 animate-ping-slower rounded-full bg-primary/5 scale-200" />
        </div>

        <div className="flex gap-2 mb-4">
          <div
            className="w-2 h-2 rounded-full bg-primary/40 animate-bounce"
            style={{ animationDelay: "0ms" }}
          />
          <div
            className="w-2 h-2 rounded-full bg-primary/40 animate-bounce"
            style={{ animationDelay: "150ms" }}
          />
          <div
            className="w-2 h-2 rounded-full bg-primary/40 animate-bounce"
            style={{ animationDelay: "300ms" }}
          />
        </div>
{/* 
        <div className="text-muted-foreground animate-pulse">
          Loading amazing properties...
        </div> */}

        {!contentReady && !isLoading && (
          <div className="mt-4 w-48 h-1 bg-accent/20 rounded-full overflow-hidden">
            <div className="h-full bg-primary rounded-full animate-progress" />
          </div>
        )}
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-background overflow-hidden animate-in fade-in duration-500 fill-mode-forwards">
      <HeroSection />

      {/* Stats Section */}
      {/* <StatsSection stats={stats} /> */}

      {/* Featured Properties */}
      <SectionContainer>
        {/* <div className="flex justify-between items-center mb-12"> */}
        <SectionHeader
          title="Featured Properties"
          subtitle="Handpicked premium properties for luxury living"
          className="mb-0"
        />
        {/* <GradientButton className="hidden md:flex items-center gap-2">
            View All <ArrowRight className="w-4 h-4" />
          </GradientButton> */}
        {/* </div> */}

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
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
    </main>
  );
}
