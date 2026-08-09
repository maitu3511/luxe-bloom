/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import cylinderImage from "../assets/images/heidelberg_cylinder_new_1784612943866.jpg";

export default function ParallaxBanner() {
  return (
    <section id="parallax-banner" className="relative h-[320px] sm:h-[400px] flex items-center justify-center overflow-hidden select-none">
      
      {/* Background Grayscale Image */}
      <div className="absolute inset-0">
        <motion.img
          initial={{ scale: 1.05 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          src={cylinderImage}
          alt="Industrial high-tech print process"
          className="w-full h-full object-cover object-center filter grayscale contrast-[1.1] brightness-[0.4]"
          referrerPolicy="no-referrer"
        />
        {/* Shadow Overlay */}
        <div className="absolute inset-0 bg-black/45" />
      </div>

      {/* Decorative vertical lines and text (Screenshot 13) */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 flex flex-col items-center px-4 max-w-4xl text-center"
      >
        
        {/* Top Vertical line indicator */}
        <div className="w-[1px] h-12 bg-white/40 mb-6" />

        <h2 className="text-white text-xl sm:text-3xl md:text-4xl font-extrabold tracking-widest leading-snug uppercase font-display max-w-2xl px-2">
          GIVING LIFE TO PRINT WITH THE RIGHT TECH
        </h2>

        {/* Bottom Vertical line indicator */}
        <div className="w-[1px] h-12 bg-white/40 mt-6" />

      </motion.div>

    </section>
  );
}
