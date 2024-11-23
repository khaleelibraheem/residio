import { useState } from "react";
import {
  Heart,
  Share2,
  Bed,
  Bath,
  Square,
  MapPin,
  Calendar,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";

const PropertyDetails = ({ property }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedThumb, setSelectedThumb] = useState(0);

  // Demo images
  const images = [
    "/images/modern-living.jpg",
    "/images/ocean-view.jpg",
    "/images/smart-home.jpg",
    "/images/master-suite.jpg",
  ];

  return (
    <div className="container mx-auto px-4 py-6 md:py-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Column - Images */}
        <div className="space-y-4">
          {/* Main Image */}
          <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
            <Image
              src={images[selectedThumb]}
              alt={`Property view ${selectedThumb + 1}`}
              className="w-full h-full object-cover"
              width={500}
              height={500}
              priority
            />
            <div className="absolute top-4 right-4 flex gap-2">
              <Button
                variant="secondary"
                size="icon"
                className="h-8 w-8 bg-white/80 hover:bg-white"
              >
                <Heart className="w-4 h-4" />
              </Button>
              <Button
                variant="secondary"
                size="icon"
                className="h-8 w-8 bg-white/80 hover:bg-white"
              >
                <Share2 className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Thumbnail Strip */}
          <ScrollArea className="w-full whitespace-nowrap rounded-lg">
            <div className="flex gap-2 p-1">
              {images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedThumb(index)}
                  className={`relative flex-none w-20 aspect-[4/3] rounded-md overflow-hidden 
                    ${
                      selectedThumb === index
                        ? "ring-2 ring-primary"
                        : "hover:opacity-80"
                    }`}
                >
                  <Image
                    src={image}
                    alt={`Thumbnail ${index + 1}`}
                    className="w-full h-full object-cover"
                    width={500}
                    height={500}
                    priority
                  />
                </button>
              ))}
            </div>
          </ScrollArea>
        </div>

        {/* Right Column - Details */}
        <div className="space-y-6">
          {/* Header & Location */}
          <div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
              <MapPin className="w-4 h-4" />
              <span>{property.location}</span>
            </div>
            <h1 className="text-2xl md:text-3xl font-semibold">
              {property.title}
            </h1>
            <p className="text-3xl font-bold mt-2">{property.price}</p>
          </div>

          {/* Key Features */}
          <Card className="grid grid-cols-3 gap-4 p-4">
            <div className="text-center">
              <div className="flex items-center justify-center gap-1 text-muted-foreground">
                <Bed className="w-4 h-4" />
                <span>{property.beds} Beds</span>
              </div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-1 text-muted-foreground">
                <Bath className="w-4 h-4" />
                <span>{property.baths} Baths</span>
              </div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-1 text-muted-foreground">
                <Square className="w-4 h-4" />
                <span>{property.sqft} sqft</span>
              </div>
            </div>
          </Card>

          {/* Description */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Description</h2>
            <p className="text-muted-foreground">{property.description}</p>
          </div>

          {/* Features */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Features & Amenities</h2>
            <div className="grid grid-cols-2 gap-y-2">
              {property.features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 text-muted-foreground"
                >
                  <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <Sheet>
            <SheetTrigger asChild>
              <Button size="lg" className="w-full">
                Schedule a Viewing
              </Button>
            </SheetTrigger>
            <SheetContent side="bottom" className="h-[90vh] sm:h-[85vh]">
              <SheetHeader>
                <SheetTitle>Schedule a Viewing</SheetTitle>
              </SheetHeader>
              <div className="mt-6">
                <form className="space-y-4" name="contact">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full px-4 py-2 rounded-lg border"
                    />
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="w-full px-4 py-2 rounded-lg border"
                    />
                  </div>
                  <input
                    type="tel"
                    placeholder="Your Phone"
                    className="w-full px-4 py-2 rounded-lg border"
                  />
                  <div className="flex gap-2">
                    <Calendar className="w-4 h-4 text-muted-foreground mt-3" />
                    <input
                      type="date"
                      className="w-full px-4 py-2 rounded-lg border"
                    />
                  </div>
                  <textarea
                    placeholder="Message"
                    rows={4}
                    className="w-full px-4 py-2 rounded-lg border"
                  />
                  <Button className="w-full">Submit Request</Button>
                </form>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;
