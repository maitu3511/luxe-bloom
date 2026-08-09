/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { ChevronDown } from "lucide-react";
import { motion } from "motion/react";
import { SERVICES_LIST } from "../data";
import { ServiceIconMap } from "./Icons";

export default function OurServices() {
  const handleScrollToNext = () => {
    const element = document.getElementById("social-clients-section");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleContactScroll = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Parent animation variant for staggering children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 100, damping: 15 } },
  };

  return (
    <section id="services-section" className="py-16 bg-[#ffffff] select-none border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* OUR SERVICES Box Header (Screenshot 10) */}
        <div className="relative mb-8 flex justify-center">
          <div className="absolute inset-0 flex items-center" aria-hidden="true">
            <div className="w-full border-t border-gray-200"></div>
          </div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative bg-white border border-gray-200 px-10 py-5 rounded-sm shadow-sm text-center"
          >
            <h2 className="text-sm font-light tracking-[0.25em] text-gray-500 uppercase font-display">
              OUR <span className="font-extrabold text-black ml-1">SERVICES</span>
            </h2>
          </motion.div>
        </div>

        {/* Description Subtitle (Screenshot 10) */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mb-12 max-w-2xl mx-auto"
        >
          <p className="text-gray-500 text-xs sm:text-sm tracking-widest leading-relaxed">
            Discover precision printing and packaging solutions with Premium Pack Co. Elevate your brand's appeal today
          </p>
        </motion.div>

        {/* 6 Services Block Grid with light grey background box (Screenshot 10) */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="bg-[#f9f9f9] border border-gray-100 rounded-sm p-6 sm:p-12 lg:p-16 max-w-5xl mx-auto shadow-sm"
        >
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-y-12 gap-x-8"
          >
            {SERVICES_LIST.map((service) => {
              const IconComponent = ServiceIconMap[service.id] || (() => <div className="w-16 h-16 bg-gray-200 rounded" />);
              return (
                <motion.div 
                  key={service.id} 
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  className="group flex flex-col items-center text-center transition-all duration-300 transform"
                >
                  
                  {/* Service Icon Component */}
                  <div className="p-4 bg-white border border-gray-100 rounded-sm shadow-sm group-hover:shadow-md group-hover:border-[#f5b800]/30 transition-all duration-300">
                    <IconComponent />
                  </div>

                  {/* Service Label */}
                  <h3 className="mt-6 text-xs sm:text-sm font-extrabold tracking-[0.2em] text-gray-900 uppercase font-display group-hover:text-black">
                    {service.title}
                  </h3>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>

        {/* EXPLORE Button - Centered below (Screenshot 10) */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <button
            onClick={handleContactScroll}
            className="px-12 py-3.5 bg-[#3d3d3d] hover:bg-[#252525] text-white text-xs font-bold tracking-[0.25em] uppercase rounded-sm transition-all duration-300 shadow-md hover:shadow-lg hover:scale-103 cursor-pointer"
          >
            EXPLORE
          </button>
        </motion.div>

        {/* Section divider and arrow down */}
        <div className="mt-20 flex justify-center">
          <button
            onClick={handleScrollToNext}
            className="text-gray-400 hover:text-black transition-colors duration-300 transform hover:translate-y-0.5 cursor-pointer animate-bounce"
            aria-label="Scroll to clients"
          >
            <ChevronDown size={28} />
          </button>
        </div>

      </div>
    </section>
  );
}
