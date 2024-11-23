// "use client";

// import { useState } from "react";
// import { motion } from "framer-motion";
// import { MapPin } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import ScrollIndicator from "@/components/shared/ScrollIndicator";

// export default function HeroSection() {
//   const [searchQuery, setSearchQuery] = useState("");
//   const [propertyType, setPropertyType] = useState("");
//   const [priceRange, setPriceRange] = useState("");

//   return (
//     <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
//       {/* Background with Gradient */}
//       <div className="absolute inset-0">
//         <div className="absolute inset-0 bg-[url('/images/image3.jpg')] bg-cover bg-center" />
//         <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70 backdrop-blur-sm" />
//         <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-transparent opacity-60" />
//       </div>

//       {/* Hero Content */}
//       <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="text-center space-y-8"
//         >
//           <motion.h1
//             className="text-4xl md:text-6xl lg:text-7xl font-playfair font-bold text-white"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.2 }}
//           >
//             Discover Your{" "}
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/80">
//               Luxury
//             </span>{" "}
//             Home
//           </motion.h1>

//           <motion.p
//             className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.4 }}
//           >
//             Explore exclusive properties in the world&apos;s most prestigious
//             locations
//           </motion.p>

//           {/* Search Section */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.6 }}
//             className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-3xl max-w-4xl mx-auto"
//           >
//             <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
//               <div className="relative md:col-span-5">
//                 <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
//                 <Input
//                   type="text"
//                   placeholder="Search by location or property name"
//                   className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-gray-400"
//                   value={searchQuery}
//                   onChange={(e) => setSearchQuery(e.target.value)}
//                 />
//               </div>

//               <div className="md:col-span-3">
//                 <Select value={propertyType} onValueChange={setPropertyType}>
//                   <SelectTrigger className="bg-white/10 border-white/20 text-white">
//                     <SelectValue placeholder="Property Type" />
//                   </SelectTrigger>
//                   <SelectContent>
//                     <SelectItem value="house">House</SelectItem>
//                     <SelectItem value="apartment">Apartment</SelectItem>
//                     <SelectItem value="villa">Villa</SelectItem>
//                     <SelectItem value="penthouse">Penthouse</SelectItem>
//                   </SelectContent>
//                 </Select>
//               </div>

//               <div className="md:col-span-2">
//                 <Select value={priceRange} onValueChange={setPriceRange}>
//                   <SelectTrigger className="bg-white/10 border-white/20 text-white">
//                     <SelectValue placeholder="Price" />
//                   </SelectTrigger>
//                   <SelectContent>
//                     <SelectItem value="1">$1M - $2M</SelectItem>
//                     <SelectItem value="2">$2M - $5M</SelectItem>
//                     <SelectItem value="3">$5M - $10M</SelectItem>
//                     <SelectItem value="4">$10M+</SelectItem>
//                   </SelectContent>
//                 </Select>
//               </div>

//               <Button className="md:col-span-2 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-white dark:text-black shadow-lg shadow-primary/25">
//                 Search
//               </Button>
//             </div>
//           </motion.div>
//         </motion.div>
//       </div>

//       <ScrollIndicator />
//     </section>
//   );
// }

import React from 'react'

export default function HeroSection() {
  return (
    <div>
      <h1 className='text-3xl text-center'>Hero</h1>
    </div>
  )
}

