/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { ChevronDown } from "lucide-react";
import { motion } from "motion/react";

export default function Introduction() {
  const handleScrollToNext = () => {
    const element = document.getElementById("solutions-banner");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="intro" className="bg-[#fcfcfc] py-20 px-6 sm:px-8 select-none border-b border-gray-100">
      <div className="max-w-4xl mx-auto text-center">
        
        {/* Paragraph (Screenshot 3) with scroll-triggered fade in and lift */}
        <motion.p 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.75, ease: "easeOut" }}
          className="text-gray-900 text-base sm:text-lg md:text-xl font-normal leading-relaxed tracking-wide text-center"
        >
          <span className="font-extrabold text-black">Premium Pack Co (Jai Maa Trading)</span> offers services in a complete range of Digital and Offset printing areas with state-of-the-art, brand new imported equipment, ensuring the best print quality, consistent excellence, and the shortest turnaround time.
        </motion.p>

        {/* Chevron Down Indicator */}
        <motion.div 
          className="mt-12 flex justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <button
            onClick={handleScrollToNext}
            className="text-gray-400 hover:text-black transition-colors duration-300 transform hover:translate-y-0.5 cursor-pointer"
            aria-label="Scroll to next section"
          >
            <ChevronDown size={28} className="animate-bounce" />
          </button>
        </motion.div>

      </div>
    </section>
  );
}
