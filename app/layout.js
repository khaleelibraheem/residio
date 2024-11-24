import { Inter } from "next/font/google";
import Navbar from "@/components/common/Navbar";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], // Include necessary weights
  variable: "--font-inter",
  display: "swap",
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FFFFFF" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
};

export const metadata = {
  title: {
    default: "Residio | Premium Real Estate",
    template: "%s | Residio",
  },
  description:
    "Discover your dream home with Residio - Premium real estate marketplace",
  keywords: [
    "real estate",
    "luxury homes",
    "property listing",
    "premium properties",
  ],
  authors: [{ name: "Residio" }],
  creator: "Residio",
  manifest: "/manifest.json",
  other: {
    "mobile-web-app-capable": "yes",
  },
  formatDetection: {
    telephone: false,
  },
  icons: {
    // Favicon
    icon: [
      { url: "/favicon.ico", sizes: "32x32" },
      { url: "/icons/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/icons/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    // PWA Icons
    apple: [{ url: "/icons/apple-touch-icon.png", sizes: "180x180" }],
    // Other Icons
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Residio - Premium Real Estate",
    description: "Discover your dream home with Residio",
    siteName: "Residio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Residio - Premium Real Estate",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Residio - Premium Real Estate",
    description: "Discover your dream home with Residio",
    creator: "@residio",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-inter antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
