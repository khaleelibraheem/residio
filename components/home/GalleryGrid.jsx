"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function GalleryGrid({ items }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {items.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          className={`relative group rounded-3xl overflow-hidden cursor-pointer
            ${
              item.size === "lg"
                ? "col-span-2 row-span-2"
                : "col-span-1 row-span-1"
            }`}
        >
          <Image
            src={item.url}
            alt={item.tag}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            width={500}
            height={500}
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute inset-0 flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div>
              <h3 className="text-white text-xl font-semibold mb-2">
                {item.tag}
              </h3>
              <button className="text-white/80 text-sm hover:text-white flex items-center gap-2">
                View Gallery <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
