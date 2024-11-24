"use client";

import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { usePathname } from "next/navigation";

const menuItems = [
  { title: "Home", href: "/" },
  { title: "Properties", href: "/properties" },
  { title: "About", href: "/about" },
  { title: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [sheetOpen, setSheetOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const pathname = usePathname();

  // Handle mounting state
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setSheetOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const MenuItem = ({ href, title, mobile, onClick }) => {
    const isActive = pathname === href;

    const Component = (
      <div
        className={cn(
          "relative transition-all duration-300",
          mobile
            ? "text-foreground text-2xl w-full px-6 py-4 rounded-lg hover:bg-accent/80"
            : cn(
                "text-current group px-4 py-2 text-sm rounded-full",
                isActive
                  ? "bg-primary/15 dark:bg-primary/25 text-primary dark:text-primary"
                  : "hover:bg-primary/10 dark:hover:bg-primary/20"
              )
        )}
      >
        <span
          className={cn(
            mobile ? "font-medium" : "",
            isActive && !mobile && "font-semibold"
          )}
        >
          {title}
        </span>
        {!mobile && !isActive && (
          <span
            className={cn(
              "absolute inset-0 rounded-full transition-all duration-300",
              "opacity-0 group-hover:opacity-100",
              "bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5",
              "dark:from-primary/10 dark:via-primary/20 dark:to-primary/10"
            )}
          />
        )}
      </div>
    );

    return mobile ? (
      <button className="w-full text-left" onClick={onClick}>
        {Component}
      </button>
    ) : (
      <Link href={href}>{Component}</Link>
    );
  };

  const MenuToggle = () => (
    <div className="flex flex-col gap-2">
      <div className="h-0.5 w-8 bg-current" />
      <div className="h-0.5 w-8 bg-current" />
    </div>
  );

  const ThemeToggleButton = () => {
    // Don't render anything until mounted to prevent hydration mismatch
    if (!mounted) {
      return (
        <Button variant="ghost" size="icon" className="rounded-full w-10 h-10">
          <div className="w-5 h-5" />
        </Button>
      );
    }

    return (
      <Button
        variant="ghost"
        size="icon"
        className="rounded-full w-10 h-10 hover:bg-primary/10 dark:hover:bg-primary/20 transition-colors duration-300"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        <div className="relative w-5 h-5">
          <Sun
            className={cn(
              "absolute inset-0 transition-all duration-300",
              theme === "dark" ? "opacity-100 rotate-0" : "opacity-0 rotate-90"
            )}
          />
          <Moon
            className={cn(
              "absolute inset-0 transition-all duration-300",
              theme === "dark" ? "opacity-0 -rotate-90" : "opacity-100 rotate-0"
            )}
          />
        </div>
      </Button>
    );
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 w-full z-50",
        "transition-[background-color,border-color,backdrop-filter] duration-300",
        scrolled
          ? "bg-background/80 backdrop-blur-xl dark:border-accent/10 text-black dark:text-white"
          : "bg-transparent text-white"
      )}
    >
      <div className="container mx-auto px-4 lg:px-12">
        <div className="flex items-center justify-between h-16">
          <Link
            href="/"
            className={cn(
              "font-bold text-xl tracking-tight transition-colors duration-300",
              scrolled ? "text-foreground" : "text-white dark:text-white"
            )}
          >
            Residio
          </Link>

          <div className="hidden md:flex items-center justify-center space-x-2">
            {menuItems.map((item) => (
              <MenuItem key={item.title} {...item} />
            ))}
          </div>

          <div className="flex items-center gap-3">
            <Button
              variant="default"
              size="sm"
              className="hidden md:flex rounded-full px-6 hover:scale-105 transition-transform duration-300"
            >
              List Property
            </Button>

            <ThemeToggleButton />

            <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className={cn(
                    "md:hidden rounded-full w-12 h-12",
                    scrolled
                      ? "text-foreground"
                      : "text-white hover:text-white/80 dark:text-white dark:hover:text-white/80"
                  )}
                >
                  <MenuToggle />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full p-0 border-l-0">
                <SheetHeader className="p-6 border-b">
                  <SheetTitle className="text-2xl">Residio</SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-2 p-4">
                  {menuItems.map((item) => (
                    <MenuItem
                      key={item.title}
                      {...item}
                      mobile
                      onClick={() => setSheetOpen(false)}
                    />
                  ))}
                  <Button
                    className="mt-6 w-full py-6 text-lg"
                    onClick={() => setSheetOpen(false)}
                  >
                    List Property
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
