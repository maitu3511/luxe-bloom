/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { ChevronDown } from "lucide-react";
import { motion } from "motion/react";
import { INDUSTRIES } from "../data";
import { IndustryIconMap } from "./Icons";

export default function IndustriesWeCaterTo() {
  const handleScrollToNext = () => {
    const element = document.getElementById("services-section");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Divide the 14 industries into two precise groups of 7 for that perfect desktop layout
  const row1 = INDUSTRIES.slice(0, 7);
  const row2 = INDUSTRIES.slice(7, 14);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <section id="industries-section" className="py-16 bg-[#ffffff] select-none border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* INDUSTRIES WE CATER TO Box Header (Screenshot 9) */}
        <div className="relative mb-16 flex justify-center">
          <div className="absolute inset-0 flex items-center" aria-hidden="true">
            <div className="w-full border-t border-gray-200"></div>
          </div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative bg-white border border-gray-200 px-10 py-5 rounded-sm shadow-sm text-center"
          >
            <h2 className="text-sm font-light tracking-[0.25em] text-gray-500 uppercase font-display">
              INDUSTRIES <span className="font-extrabold text-black ml-1">WE CATER TO</span>
            </h2>
          </motion.div>
        </div>

        {/* Grid of Industries - Desktop: 7 columns, Mobile: 2/3 columns */}
        <div className="max-w-6xl mx-auto space-y-12 sm:space-y-16">
          
          {/* Row 1 (IT, ART, FMCG, PHARMA, BANKING, TELECOM, EDUCATION) */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-y-10 gap-x-4 justify-items-center text-center"
          >
            {row1.map((item) => {
              const IconComponent = IndustryIconMap[item.id] || (() => <div className="w-12 h-12 bg-gray-100 rounded" />);
              return (
                <motion.div 
                  variants={itemVariants}
                  key={item.id} 
                  className="group flex flex-col items-center max-w-[120px] transition-transform duration-300 hover:-translate-y-1"
                >
                  <div className="p-3 bg-gray-50/50 group-hover:bg-gray-50 border border-gray-100 group-hover:border-solar-yellow/40 rounded-full shadow-sm group-hover:shadow-md transition-all duration-300">
                    <IconComponent />
                  </div>
                  <span className="mt-4 text-[10px] sm:text-xs font-bold tracking-widest text-gray-800 uppercase font-display group-hover:text-black">
                    {item.label}
                  </span>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Row 2 (HOSPITALITY, AUTOMOTIVE, REAL ESTATE, SPIRITS, FOOD, BEAUTY, FASHION) */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-y-10 gap-x-4 justify-items-center text-center"
          >
            {row2.map((item) => {
              const IconComponent = IndustryIconMap[item.id] || (() => <div className="w-12 h-12 bg-gray-100 rounded" />);
              return (
                <motion.div 
                  variants={itemVariants}
                  key={item.id} 
                  className="group flex flex-col items-center max-w-[120px] transition-transform duration-300 hover:-translate-y-1"
                >
                  <div className="p-3 bg-gray-50/50 group-hover:bg-gray-50 border border-gray-100 group-hover:border-solar-yellow/40 rounded-full shadow-sm group-hover:shadow-md transition-all duration-300">
                    <IconComponent />
                  </div>
                  <span className="mt-4 text-[10px] sm:text-xs font-bold tracking-widest text-gray-800 uppercase font-display group-hover:text-black">
                    {item.label}
                  </span>
                </motion.div>
              );
            })}
          </motion.div>

        </div>

        {/* Section separator with down chevron */}
        <div className="mt-20 flex justify-center">
          <button
            onClick={handleScrollToNext}
            className="text-gray-400 hover:text-black transition-colors duration-300 transform hover:translate-y-0.5 cursor-pointer animate-bounce"
            aria-label="Scroll to services"
          >
            <ChevronDown size={28} />
          </button>
        </div>

      </div>
    </section>
  );
}
