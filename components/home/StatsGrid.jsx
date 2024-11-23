"use client";

import { motion } from "framer-motion";

export default function StatsGrid() {
  const stats = [
    {
      stat: "24/7",
      label: "Exclusive Support",
      description: "Round-the-clock assistance for our premium clients",
    },
    {
      stat: "150+",
      label: "Expert Agents",
      description: "Specialized in luxury real estate markets",
    },
    {
      stat: "98%",
      label: "Client Satisfaction",
      description: "Based on post-purchase surveys",
    },
    {
      stat: "$2B+",
      label: "Properties Sold",
      description: "Total value of properties sold in 2023",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="lg:pl-12"
    >
      <div className="space-y-8">
        {stats.map((item, index) => (
          <div key={index} className="flex gap-6">
            <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-primary/20 flex items-center justify-center">
              <span className="text-xl font-bold text-white">{item.stat}</span>
            </div>
            <div>
              <h3 className="font-semibold mb-1 dark:text-white">
                {item.label}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 p-6 rounded-3xl bg-white dark:bg-black border border-gray-100 dark:border-gray-800">
        <h4 className="text-lg font-semibold mb-4 dark:text-white">
          Why Choose Residio?
        </h4>
        <ul className="space-y-4">
          {[
            "Exclusive access to off-market properties",
            "Personalized property matching",
            "Virtual property tours available",
            "Dedicated luxury market specialists",
          ].map((item, index) => (
            <li
              key={index}
              className="flex items-center gap-3 text-gray-600 dark:text-gray-400"
            >
              <svg
                className="w-5 h-5 text-primary"
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
              {item}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}
