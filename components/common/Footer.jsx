"use client";

import Link from "next/link";
import {
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Logo from "./LogoComponent";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    properties: [
      { label: "Featured Listings", href: "/properties/featured" },
      { label: "New Developments", href: "/properties/new" },
      { label: "Recently Sold", href: "/properties/sold" },
      { label: "Off-Market Properties", href: "/properties/off-market" },
      { label: "List Your Property", href: "/list-property" },
    ],
    company: [
      { label: "About Us", href: "/about" },
      { label: "Our Team", href: "/team" },
      { label: "Careers", href: "/careers" },
      { label: "Press", href: "/press" },
      { label: "Contact", href: "/contact" },
    ],
    resources: [
      { label: "Market Insights", href: "/insights" },
      { label: "Luxury Living Blog", href: "/blog" },
      { label: "Buying Guide", href: "/guides/buying" },
      { label: "Selling Guide", href: "/guides/selling" },
      { label: "FAQ", href: "/faq" },
    ],
  };

  return (
    <footer className="bg-gray-50 dark:bg-black border-t border-gray-100 dark:border-gray-800">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/">
              <Logo />
            </Link>
            <p className="mt-4 text-gray-600 dark:text-gray-400 mb-6">
              Experience unparalleled luxury real estate services. Your journey
              to extraordinary living begins here.
            </p>

            {/* Contact Information */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
                <Phone className="w-5 h-5" />
                <a
                  href="tel:+1234567890"
                  className="hover:text-primary transition-colors"
                >
                  +1 (234) 567-890
                </a>
              </div>
              <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
                <Mail className="w-5 h-5" />
                <a
                  href="mailto:contact@residio.com"
                  className="hover:text-primary transition-colors"
                >
                  contact@residio.com
                </a>
              </div>
              <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
                <MapPin className="w-5 h-5" />
                <span>Beverly Hills, CA 90210</span>
              </div>
            </div>

            {/* Newsletter */}
            <div className="mt-8">
              <h3 className="font-semibold dark:text-white mb-4">
                Subscribe to Our Newsletter
              </h3>
              <div className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-white dark:bg-black"
                />
                <Button className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="space-y-4">
              <h3 className="font-semibold text-lg capitalize dark:text-white">
                {category}
              </h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-100 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              © {currentYear} Residio. All rights reserved.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {[
                { icon: Facebook, label: "Facebook" },
                { icon: Instagram, label: "Instagram" },
                { icon: Twitter, label: "Twitter" },
                { icon: Linkedin, label: "LinkedIn" },
              ].map((social) => (
                <a
                  key={social.label}
                  href={`#${social.label.toLowerCase()}`}
                  className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>

            {/* Legal Links */}
            <div className="flex items-center gap-6 text-sm">
              <Link
                href="/privacy"
                className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
