import React from "react";
import { Building2, Users, MapPin, BadgeCheck } from "lucide-react";
import { motion } from "framer-motion";

const StatsSection = ({
  stats = { properties: 150, clients: 500, cities: 25, agents: 75 },
}) => {
  const statsConfig = [
    {
      number: stats.properties,
      label: "Premium Properties",
      icon: Building2,
      color: "from-blue-600 to-blue-400",
    },
    {
      number: stats.clients,
      label: "Happy Clients",
      icon: Users,
      color: "from-green-600 to-green-400",
    },
    {
      number: stats.cities,
      label: "Cities Covered",
      icon: MapPin,
      color: "from-purple-600 to-purple-400",
    },
    {
      number: stats.agents,
      label: "Expert Agents",
      icon: BadgeCheck,
      color: "from-orange-600 to-orange-400",
    },
  ];

  return (
    <div className="w-full py-16 bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {statsConfig.map((stat, index) => (
            <div
              key={index}
              className="group relative p-6 rounded-xl bg-white dark:bg-slate-800 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 dark:border-slate-700"
            >
              <div className="flex flex-col items-center space-y-4">
                <div
                  className={`p-3 rounded-lg bg-gradient-to-r ${stat.color} bg-opacity-10 group-hover:scale-110 transition-transform duration-300`}
                >
                  <stat.icon className="w-6 h-6 text-white" />
                </div>

                <div className="text-4xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
                  {stat.number}
                </div>

                <p className="text-sm text-slate-600 dark:text-slate-400 font-medium">
                  {stat.label}
                </p>
              </div>

              {/* Decorative gradient border on hover */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/20 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
