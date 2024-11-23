"use client";

import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { motion } from "framer-motion";
const VideoTestimonial = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Video Thumbnail */}
          <div
            className="relative aspect-video rounded-3xl overflow-hidden group cursor-pointer"
            onClick={() => setShowModal(true)}
          >
            <video
              src="/videos/modern-interior.mp4"
              className="w-full h-full object-cover"
              muted
              playsInline
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />
            <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-primary/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
              <svg
                className="w-8 h-8 text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M8 5v10l8-5-8-5z" />
              </svg>
            </button>
          </div>

          {/* Testimonial Content */}
          <div className="lg:pl-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="relative">
                <img
                  src="/images/person1.jpg"
                  alt="Client"
                  className="w-20 h-20 rounded-full object-cover border-4 border-white dark:border-black"
                />
                {/* Optimized verified badge */}
                <div className="absolute -bottom-2 -right-1 whitespace-nowrap">
                  <div className="bg-gradient-to-r from-primary to-primary/80 text-white px-3 py-1 rounded-full text-xs font-medium inline-flex items-center gap-1">
                    <svg
                      className="w-3 h-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Verified Buyer
                  </div>
                </div>
              </div>
              <div>
                <h4 className="text-xl font-semibold dark:text-white">
                  Robert & Lisa Anderson
                </h4>
                <p className="text-gray-600 dark:text-gray-400">
                  Purchased in Beverly Hills
                </p>
              </div>
            </div>
            <blockquote className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              &quot;Working with Residio was transformative. They didn&apos;t
              just find us a house; they found us our dream home. The attention
              to detail and understanding of our needs was exceptional.&quot;
            </blockquote>
            <div className="flex items-center gap-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-primary font-medium">
                Purchase Value: $12.5M
              </span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Video Modal */}
      <Dialog open={showModal} onOpenChange={setShowModal}>
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <DialogTitle>Robert & Lisa Anderson&apos;s Story</DialogTitle>
          </DialogHeader>
          <div className="aspect-video w-full">
            <video
              src="/videos/modern-interior.mp4"
              className="w-full h-full rounded-lg"
              controls
              autoPlay
            />
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default VideoTestimonial;
