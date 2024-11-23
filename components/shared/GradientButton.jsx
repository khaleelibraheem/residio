"use client";

import { Button } from "@/components/ui/button";

export default function GradientButton({
  children,
  className = "",
  full = false,
  ...props
}) {
  return (
    <Button
      className={`
        bg-gradient-to-r from-primary to-primary/80 
        hover:from-primary/90 hover:to-primary/70 
        text-white shadow-lg shadow-primary/25
        ${full ? "w-full" : ""}
        ${className}
      `}
      {...props}
    >
      {children}
    </Button>
  );
}
