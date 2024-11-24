"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function TestimonialCard({ testimonial, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2 }}
      className="relative p-8 rounded-3xl bg-white dark:bg-black border border-gray-100 dark:border-gray-800 group hover:border-primary/50 transition-all duration-300"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="relative">
          <div className="w-16 h-16 rounded-full overflow-hidden border-4 border-white dark:border-black">
            <Image
              src={testimonial.image}
              alt={testimonial.name}
              className="w-full h-full object-cover"
              width={500}
              height={500}
              priority
            />
          </div>
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-primary/80 text-white px-3 py-1 rounded-full text-xs">
            Verified
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-8 mb-4">
        {[...Array(testimonial.rating)].map((_, i) => (
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

      <p className="text-gray-600 dark:text-gray-400 mb-6">
        &quot;{testimonial.quote}&quot;
      </p>

      <div className="text-center">
        <h4 className="font-semibold dark:text-white">{testimonial.name}</h4>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          {testimonial.role}
        </p>
      </div>
    </motion.div>
  );
}
