"use client";

import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Logo({
  width = 140,
  height = 40,
  className,
  priority = true,
}) {
  const { theme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Determine the current theme
  const currentTheme = theme === "system" ? systemTheme : theme;

  // Get logo path based on theme
  const logoPath =
    currentTheme === "dark" ? "/images/logo-dark.svg" : "/images/logo.svg";

  if (!mounted) {
    return (
      <div
        style={{ width, height }}
        className={cn(
          "animate-pulse bg-muted rounded-sm",
          "transition-opacity duration-300",
          className
        )}
      />
    );
  }

  if (error) {
    return (
      <div
        style={{ width, height }}
        className={cn(
          "flex items-center justify-center text-foreground/80 text-sm",
          "border rounded-sm",
          className
        )}
      >
        Residio
      </div>
    );
  }

  return (
    <div style={{ width, height }} className="relative">
      <Image
        src={logoPath}
        alt="Residio"
        fill
        className={cn(
          "object-contain transition-opacity duration-300",
          className
        )}
        priority={priority}
        onError={() => setError(true)}
        sizes={`(max-width: 768px) ${width}px, ${width}px`}
      />
    </div>
  );
}
