"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Moon,
  Sun,
  Menu,
  Home,
  Building2,
  Heart,
  User,
  Map,
  Bell,
  ChevronDown,
  Search,
  Filter,
  PlusSquare,
  Clock,
  Bookmark,
  Settings,
  LogOut,
  HelpCircle,
  X,
  MapPin,
  Bed,
  Bath,
  DollarSign,
  History,
  ArrowRight,
  TrendingUp,
  House,
} from "lucide-react";
import { useTheme } from "next-themes";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerFooter,
  DrawerClose,
  DrawerTrigger,
} from "@/components/ui/drawer";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Skeleton } from "@/components/ui/skeleton";
import Logo from "./LogoComponent";

const SearchModal = ({ isOpen, setIsOpen }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [searchResults, setSearchResults] = useState([]);

  const recentSearches = [
    "Luxury apartments in downtown",
    "2 bedroom houses with garden",
    "Modern penthouses",
  ];

  const trendingSearches = [
    "Waterfront properties",
    "Pet-friendly apartments",
    "New developments",
  ];

  const propertyResults = [
    {
      id: 1,
      title: "Modern Luxury Apartment",
      location: "Downtown",
      price: "$850,000",
      beds: 2,
      baths: 2,
    },
    {
      id: 2,
      title: "Spacious Family Home",
      location: "Suburbs",
      price: "$1,200,000",
      beds: 4,
      baths: 3,
    },
    {
      id: 3,
      title: "Urban Loft",
      location: "Arts District",
      price: "$550,000",
      beds: 1,
      baths: 1,
    },
  ];

  useEffect(() => {
    if (searchQuery) {
      setIsLoading(true);
      const timer = setTimeout(() => {
        setSearchResults(propertyResults);
        setIsLoading(false);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [searchQuery]);

  const PropertyResult = ({ property }) => (
    <div className="flex items-start gap-4 p-4 hover:bg-muted rounded-lg transition-colors">
      <div className="w-20 h-20 bg-muted rounded-lg flex items-center justify-center">
        <Building2 className="w-8 h-8 text-muted-foreground" />
      </div>
      <div className="flex-1">
        <h3 className="font-medium text-sm">{property.title}</h3>
        <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
          <MapPin className="w-3 h-3" />
          <span>{property.location}</span>
        </div>
        <div className="flex items-center gap-4 mt-2 text-sm">
          <div className="flex items-center gap-1">
            <DollarSign className="w-3 h-3" />
            <span>{property.price}</span>
          </div>
          <div className="flex items-center gap-1">
            <Bed className="w-3 h-3" />
            <span>{property.beds}</span>
          </div>
          <div className="flex items-center gap-1">
            <Bath className="w-3 h-3" />
            <span>{property.baths}</span>
          </div>
        </div>
      </div>
      <ArrowRight className="w-4 h-4 text-muted-foreground" />
    </div>
  );

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-[800px] p-0">
        <DialogHeader>
          <DialogTitle className="sr-only">Search Properties</DialogTitle>
        </DialogHeader>
        <Command>
          <CommandInput
            placeholder="Search properties..."
            value={searchQuery}
            onValueChange={setSearchQuery}
          />
          <CommandList>
            {!searchQuery && (
              <>
                <CommandGroup heading="Recent Searches">
                  {recentSearches.map((search) => (
                    <CommandItem
                      key={search}
                      value={search}
                      onSelect={() => setSearchQuery(search)}
                    >
                      <History className="mr-2 h-4 w-4" />
                      <span>{search}</span>
                    </CommandItem>
                  ))}
                </CommandGroup>
                <CommandSeparator />
                <CommandGroup heading="Trending Searches">
                  {trendingSearches.map((search) => (
                    <CommandItem
                      key={search}
                      value={search}
                      onSelect={() => setSearchQuery(search)}
                    >
                      <TrendingUp className="mr-2 h-4 w-4" />
                      <span>{search}</span>
                    </CommandItem>
                  ))}
                </CommandGroup>
              </>
            )}
            {searchQuery && (
              <CommandGroup>
                {isLoading ? (
                  <div className="space-y-4 p-4">
                    {[1, 2, 3].map((n) => (
                      <div key={n} className="flex items-start gap-4">
                        <Skeleton className="w-20 h-20 rounded-lg" />
                        <div className="flex-1">
                          <Skeleton className="h-4 w-[200px] mb-2" />
                          <Skeleton className="h-3 w-[150px] mb-2" />
                          <Skeleton className="h-3 w-[180px]" />
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="py-2 px-2">
                    {searchResults.map((property) => (
                      <CommandItem
                        key={property.id}
                        value={property.title}
                        onSelect={() =>
                          (window.location.href = `/property/${property.id}`)
                        }
                      >
                        <PropertyResult property={property} />
                      </CommandItem>
                    ))}
                  </div>
                )}
              </CommandGroup>
            )}
          </CommandList>
        </Command>
      </DialogContent>
    </Dialog>
  );
};

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  // Add state for controlling drawer
  const [open, setOpen] = React.useState(false);

  // Handler for link clicks
  const handleLinkClick = () => {
    setOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const propertyCategories = [
    {
      name: "For Sale",
      href: "/listings",
      description: "Browse properties available for purchase",
    },
    {
      name: "For Rent",
      href: "/listings",
      description: "Find your next rental property",
    },
    
    {
      name: "Commercial",
      href: "/listings",
      description: "Commercial properties and office spaces",
    },
  ];

  const featuredListings = [
    {
      name: "Luxury Penthouse",
      location: "Downtown",
      price: "$2.5M",
      href: "/listing/1",
    },
    {
      name: "Modern Villa",
      location: "Suburbs",
      price: "$1.8M",
      href: "/listing/2",
    },
    {
      name: "Urban Loft",
      location: "Arts District",
      price: "$850K",
      href: "/listing/3",
    },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-background/95 backdrop-blur-xl border-b shadow-sm`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <Logo />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6">
              {/* Search Bar */}
              <div className="relative">
                <Input
                  type="text"
                  placeholder="Search properties..."
                  className="w-[300px] pl-10"
                  onFocus={() => setIsSearchOpen(true)}
                  readOnly
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2"
                >
                  <Filter className="w-4 h-4" />
                </Button>
              </div>

              {/* Main Navigation */}
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger>Properties</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="grid grid-cols-2 gap-4 p-6 w-[600px]">
                        <div>
                          <h4 className="text-sm font-medium mb-3 text-foreground">
                            Categories
                          </h4>
                          <div className="space-y-2">
                            {propertyCategories.map((category) => (
                              <Link
                                key={category.name}
                                href={category.href}
                                className="block p-2 hover:bg-muted rounded-md transition-colors"
                              >
                                <div className="text-sm font-medium">
                                  {category.name}
                                </div>
                                <div className="text-xs text-muted-foreground">
                                  {category.description}
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>
                        <div>
                          <h4 className="text-sm font-medium mb-3 text-foreground">
                            Featured Listings
                          </h4>
                          <div className="space-y-2">
                            {featuredListings.map((listing) => (
                              <Link
                                key={listing.name}
                                href={listing.href}
                                className="block p-2 hover:bg-muted rounded-md transition-colors"
                              >
                                <div className="text-sm font-medium">
                                  {listing.name}
                                </div>
                                <div className="text-xs text-muted-foreground">
                                  {listing.location} • {listing.price}
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <Link href="/map" legacyBehavior passHref>
                      <NavigationMenuLink
                        className={navigationMenuTriggerStyle()}
                      >
                        Map View
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <Link href="/saved" legacyBehavior passHref>
                      <NavigationMenuLink
                        className={navigationMenuTriggerStyle()}
                      >
                        Saved
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>

              <div className="flex items-center gap-2">
                {/* Notification Bell */}
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="relative">
                      <Bell className="w-5 h-5" />
                      <span className="absolute top-2 right-2 w-2 h-2 bg-primary rounded-full ring-2 ring-background" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-72">
                    <div className="flex justify-between items-center px-4 py-2 border-b">
                      <span className="font-medium">Notifications</span>
                      <Button variant="ghost" size="sm">
                        Mark all as read
                      </Button>
                    </div>
                    {/* Add notification items here */}
                  </DropdownMenuContent>
                </DropdownMenu>

                {/* Dark Mode Toggle */}
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                >
                  <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                  <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                </Button>

                {/* User Menu */}
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <User className="w-5 h-5" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-56">
                    <DropdownMenuItem>
                      <User className="mr-2 h-4 w-4" /> Profile
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Clock className="mr-2 h-4 w-4" /> History
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Bookmark className="mr-2 h-4 w-4" /> Saved
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Settings className="mr-2 h-4 w-4" /> Settings
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <HelpCircle className="mr-2 h-4 w-4" /> Help Center
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="text-destructive">
                      <LogOut className="mr-2 h-4 w-4" /> Log out
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>

                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  <PlusSquare className="mr-2 h-4 w-4" /> List Property
                </Button>
              </div>
            </div>

            {/* Mobile Menu */}
            <div className="flex items-center gap-2 md:hidden">
              <Button
                variant="ghost"
                size="icon"
                className="relative"
                onClick={() => setIsSearchOpen(true)}
              >
                <Search className="w-5 h-5" />
              </Button>

              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              >
                <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              </Button>

              <Drawer open={open} onOpenChange={setOpen}>
                <DrawerTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Menu className="w-6 h-6" />
                  </Button>
                </DrawerTrigger>
                <DrawerContent>
                  <DrawerHeader className="sr-only">
                    <DrawerTitle>Menu</DrawerTitle>
                    <DrawerDescription>
                      Access all features and settings
                    </DrawerDescription>
                  </DrawerHeader>
                  <div className="px-4 py-2">
                    <div className="space-y-3">
                      <Link
                        href="/"
                        className="flex items-center py-3 text-foreground hover:bg-muted rounded-md px-2"
                        onClick={handleLinkClick}
                      >
                        <House className="mr-3 h-4 w-4" />
                        Home
                      </Link>
                      {propertyCategories.map((category) => (
                        <Link
                          key={category.name}
                          href={category.href}
                          className="flex items-center py-3 text-foreground hover:bg-muted rounded-md px-2"
                          onClick={handleLinkClick}
                        >
                          <Building2 className="mr-3 h-4 w-4" />
                          {category.name}
                        </Link>
                      ))}
                      {/* <Link
                        href="/map"
                        className="flex items-center py-3 text-foreground hover:bg-muted rounded-md px-2"
                        onClick={handleLinkClick}
                      >
                        <Map className="mr-3 h-4 w-4" />
                        Map View
                      </Link> */}
                      <Link
                        href="/saved"
                        className="flex items-center py-3 text-foreground hover:bg-muted rounded-md px-2"
                        onClick={handleLinkClick}
                      >
                        <Heart className="mr-3 h-4 w-4" />
                        Saved Properties
                      </Link>

                      <DropdownMenuSeparator />

                      {/* <Link
                        href="/profile"
                        className="flex items-center py-3 text-foreground hover:bg-muted rounded-md px-2"
                      >
                        <User className="mr-3 h-4 w-4" />
                        Profile
                      </Link>
                      <Link
                        href="/settings"
                        className="flex items-center py-3 text-foreground hover:bg-muted rounded-md px-2"
                      >
                        <Settings className="mr-3 h-4 w-4" />
                        Settings
                      </Link>
                      <Link
                        href="/help"
                        className="flex items-center py-3 text-foreground hover:bg-muted rounded-md px-2"
                      >
                        <HelpCircle className="mr-3 h-4 w-4" />
                        Help Center
                      </Link> */}

                      <Button className="w-full mt-4" onClick={handleLinkClick}>
                        <PlusSquare className="mr-2 h-4 w-4" /> List Property
                      </Button>
                    </div>
                  </div>
                  <DrawerFooter>
                    <DrawerClose asChild>
                      <Button variant="outline">Close</Button>
                    </DrawerClose>
                  </DrawerFooter>
                </DrawerContent>
              </Drawer>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Search Modal */}
      <SearchModal isOpen={isSearchOpen} setIsOpen={setIsSearchOpen} />

      {/* Spacer for fixed navbar */}
      <div className="h-16" />
    </>
  );
};

export default Navbar;
