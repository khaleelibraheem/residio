"use client";

import { motion } from "framer-motion";

export default function ScrollIndicator() {
  return (
    <motion.div
      className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      animate={{ y: [0, 10, 0] }}
      transition={{ repeat: Infinity, duration: 1.5 }}
    >
      <div className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center p-2">
        <motion.div
          className="w-1 h-1 rounded-full bg-white"
          animate={{ y: [0, 16, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        />
      </div>
    </motion.div>
  );
}
