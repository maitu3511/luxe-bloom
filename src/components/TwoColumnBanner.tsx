/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { ChevronDown } from "lucide-react";
import { motion } from "motion/react";

// Importing generated background images
import stacksImage from "../assets/images/printing_stacks_new_1784613036233.jpg";
import cylinderImage from "../assets/images/heidelberg_cylinder_new_1784612943866.jpg";

export default function TwoColumnBanner() {
  const handleScrollToNext = () => {
    const element = document.getElementById("products-offer-section");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="solutions-banner" className="relative select-none bg-neutral-950 py-6 sm:py-8 md:py-10 px-4 sm:px-6 lg:px-8">
      
      {/* Split Columns Grid with gap */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-8 min-h-[500px] md:h-[620px] max-w-7xl mx-auto">
        
        {/* Left Column: Complete Solution */}
        <motion.div 
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative flex flex-col justify-center p-8 sm:p-14 md:p-16 group rounded-sm border border-neutral-800 overflow-hidden shadow-2xl"
        >
          {/* Background image */}
          <div className="absolute inset-0">
            <img
              src={stacksImage}
              alt="Premium raw paper stacks"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            {/* Dark tint overlay */}
            <div className="absolute inset-0 bg-black/65 group-hover:bg-black/60 transition-colors duration-300" />
          </div>
          
          {/* Text Content */}
          <div className="relative z-10 text-white max-w-md">
            <p className="text-gray-300 text-sm sm:text-base font-semibold tracking-widest uppercase mb-2">
              WE ARE
            </p>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-none uppercase mb-4 font-display">
              THE <br />
              COMPLETE <br />
              SOLUTION
            </h2>
            <p className="text-gray-300 text-sm sm:text-lg font-light tracking-wide italic">
              of Print, Packaging & Production
            </p>
          </div>
        </motion.div>

        {/* Right Column: We Print, We Package, We Produce */}
        <motion.div 
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative flex flex-col justify-center p-8 sm:p-14 md:p-16 group rounded-sm border border-neutral-800 overflow-hidden shadow-2xl"
        >
          {/* Background image */}
          <div className="absolute inset-0">
            <img
              src={cylinderImage}
              alt="Heidelberg Cylinder Press Machine"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            {/* Dark tint overlay */}
            <div className="absolute inset-0 bg-black/70 group-hover:bg-black/65 transition-colors duration-300" />
          </div>

          {/* Text Content */}
          <div className="relative z-10 text-white max-w-lg">
            <div className="space-y-4 font-display">
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:space-x-4">
                <span className="text-gray-400 text-xl sm:text-2xl font-light tracking-wide uppercase">WE</span>
                <span className="text-2xl sm:text-4xl lg:text-6xl font-black tracking-wide sm:tracking-widest uppercase break-words">PRINT</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:space-x-4">
                <span className="text-gray-400 text-xl sm:text-2xl font-light tracking-wide uppercase">WE</span>
                {/* Outlined text for PACKAGE to give precise visual rhythm */}
                <span className="text-2xl sm:text-4xl lg:text-6xl font-black tracking-wide sm:tracking-widest uppercase break-words text-outline-white">PACKAGE</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:space-x-4">
                <span className="text-gray-400 text-xl sm:text-2xl font-light tracking-wide uppercase">WE</span>
                <span className="text-2xl sm:text-4xl lg:text-6xl font-black tracking-wide sm:tracking-widest uppercase break-words">PRODUCE</span>
              </div>
            </div>
          </div>
        </motion.div>

      </div>

      {/* Down Chevron at the bottom margin of splitting section */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 hidden md:block">
        <button
          onClick={handleScrollToNext}
          className="text-white hover:text-[#f5b800] transition-colors duration-300 cursor-pointer"
          aria-label="Scroll to products"
        >
          <ChevronDown size={28} className="animate-bounce" />
        </button>
      </div>

    </section>
  );
}
