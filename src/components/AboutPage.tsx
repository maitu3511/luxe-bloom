/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

// Importing available high-fidelity machine assets
import cylinderGrayscaleImg from "../assets/images/heidelberg_cylinder_new_1784612943866.jpg";
import gluerMachineImg from "../assets/images/gluer_machine_new_1784613052337.jpg";
import pressRollersImg from "../assets/images/press_rollers_new_1784613071794.jpg";
import swastikaOfficeShowroom from "../assets/images/swastika_office_showroom_1784614485773.jpg";
import ownerPortraitImg from "../assets/images/company_owner_portrait_1784614838922.jpg";
import offsetMegaplantImg from "../assets/images/offset_megaplant_1784614968119.jpg";

export default function AboutPage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleScrollToContent = () => {
    const element = document.getElementById("who-we-are-section");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const journeySlides = [
    {
      year: "FOUNDATION",
      subtitle: "WHEN IT ALL STARTED",
      description: "Premium Pack Co's journey began with a bold vision: to establish a premier, process-driven printing enterprise in India. Focused on pristine design and production execution, the company emerged as a trusted partner for regional businesses and corporate leaders.",
      image: ownerPortraitImg,
      imageAlt: "Premium Pack Co Founder & Visionary",
      imageTag: "FOUNDER & VISION"
    },
    {
      year: "PARTNERSHIP",
      subtitle: "STRENGTHENING CAPABILITIES",
      description: "Operating together, Premium Pack Co (Jai Maa Trading) expanded services to cover a complete range of Offset and Digital printing. This union brought unmatched material expertise, streamlining rigid box, gift box, and commercial printing services under one expert umbrella.",
      image: swastikaOfficeShowroom,
      imageAlt: "Expanding Corporate Infrastructure & Showroom",
      imageTag: "EXPANDED CAPABILITIES"
    },
    {
      year: "TECHNOLOGY",
      subtitle: "IMPORTED EQUIPMENT LEAP",
      description: "To meet the highest standards of international print consistency, we invested heavily in a suite of brand-new imported machinery—headlined by state-of-the-art multi-color Heidelberg offset presses and Konica Minolta digital production lines, establishing absolute precision.",
      image: pressRollersImg,
      imageAlt: "Heidelberg Offset Printing Machinery",
      imageTag: "HEIDELBERG TECH"
    },
    {
      year: "PRESENT",
      subtitle: "OKHLA LEADERSHIP",
      description: "Operating from our world-class printing facilities in Okhla Phase-II, New Delhi, we consistently deliver premium quality with the shortest turnaround times. We serve leading brands across industries with unparalleled dedication to excellence.",
      image: offsetMegaplantImg,
      imageAlt: "Okhla New Delhi Industrial Megaplant",
      imageTag: "OKHLA MEGAPLANT"
    }
  ];

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? journeySlides.length - 1 : prev - 1));
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev === journeySlides.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="bg-[#ffffff] text-gray-800 antialiased font-sans select-none animate-fade-in">
      
      {/* ========================================================
          1. ABOUT US HERO BANNER
          ======================================================== */}
      <section className="relative h-[60vh] sm:h-[65vh] flex items-center justify-center overflow-hidden">
        {/* Background Image representing facility */}
        <div className="absolute inset-0 bg-neutral-950">
          <motion.img
            initial={{ scale: 1.12, filter: "grayscale(1) contrast(1.1) brightness(0.25)" }}
            animate={{ scale: 1, filter: "grayscale(1) contrast(1.1) brightness(0.4)" }}
            transition={{ duration: 1.6, ease: "easeOut" }}
            src={offsetMegaplantImg}
            alt="About Premium Pack Co Facility"
            className="w-full h-full object-cover object-center"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/45" />
        </div>

        {/* Text Content */}
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-white text-4xl sm:text-6xl md:text-7xl font-black tracking-[0.2em] uppercase font-display mb-3 drop-shadow-lg"
          >
            ABOUT US
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, letterSpacing: "0.2em" }}
            animate={{ opacity: 1, letterSpacing: "0.45em" }}
            transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
            className="text-gray-300 text-xs sm:text-sm md:text-base font-bold tracking-[0.45em] uppercase font-display"
          >
            PREMIUM PACK CO
          </motion.p>
        </div>

        {/* Scroll Chevron Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
          <motion.button
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            onClick={handleScrollToContent}
            className="w-10 h-10 rounded-full border border-white/20 bg-black/30 flex items-center justify-center text-white hover:text-[#f5b800] hover:border-[#f5b800] transition-all duration-300 cursor-pointer animate-bounce"
            aria-label="Scroll down to content"
          >
            <ChevronDown size={20} />
          </motion.button>
        </div>
      </section>

      {/* ========================================================
          2. WHO WE ARE? BLOCK (Screenshot 2)
          ======================================================== */}
      <section id="who-we-are-section" className="bg-white py-24 px-6 sm:px-8 max-w-5xl mx-auto text-center border-t border-gray-100">
        
        {/* Centered Box Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="inline-block bg-[#fcfcfc] border border-gray-200 px-10 py-5 rounded-sm shadow-xs mb-14"
        >
          <h2 className="text-sm sm:text-base font-black tracking-[0.35em] text-black uppercase font-display">
            WHO WE ARE?
          </h2>
        </motion.div>

        {/* Descriptive paragraphs */}
        <div className="max-w-3xl mx-auto space-y-8 text-center mb-16">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-gray-600 text-sm sm:text-base leading-[2.1] tracking-wide font-normal"
          >
            We introduce ourselves as <strong className="font-extrabold text-black">Premium Pack Co (Jai Maa Trading)</strong>. We are one of the leading Offset Printers based in Okhla Phase-II, New Delhi, delivering best print quality, consistent excellence, and shortest turnaround times.
          </motion.p>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-600 text-sm sm:text-base leading-[2.1] tracking-wide font-normal"
          >
            Backed by a world-class, state-of-the-art printing facility, <strong className="font-semibold text-black">Premium Pack Co</strong> offers services in a complete range of Digital and Offset printing areas with state-of-the-art brand new imported equipment.
          </motion.p>
        </div>

        {/* Corporate Showroom Gallery Card */}
        <div className="max-w-5xl mx-auto mt-6 overflow-hidden rounded-sm border border-gray-200 bg-[#f9f9f9] p-3 sm:p-5 shadow-xs">
          <div className="aspect-[16/9] sm:aspect-[21/9] w-full relative bg-[#ffffff] rounded-xs border border-gray-100 overflow-hidden flex flex-col justify-between group">
             {/* Real corporate showroom image */}
            <img 
              src={swastikaOfficeShowroom} 
              alt="Premium Pack Co Corporate Headquarters & Showroom"
              className="absolute inset-0 w-full h-full object-cover filter brightness-95 group-hover:scale-105 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
            
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent pointer-events-none" />

            {/* Top glassmorphic banner */}
            <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-4 py-2 border border-gray-200 rounded-xs shadow-sm z-10">
              <span className="text-[10px] tracking-[0.25em] text-black font-extrabold uppercase font-display">
                PREMIUM PACK CO SHOWROOM
              </span>
            </div>

            {/* Bottom info banner */}
            <div className="absolute bottom-4 left-4 right-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 z-10 text-left">
              <div>
                <h4 className="text-white text-xs sm:text-sm font-black tracking-widest uppercase font-display">
                  OKHLA NEW DELHI HEADQUARTERS & SHOWROOM
                </h4>
                <p className="text-gray-300 text-[10px] sm:text-xs mt-0.5 font-light tracking-wide">
                  Experience premium structural packaging models and luxury design consultations.
                </p>
              </div>
              <div className="bg-white text-black text-[9px] font-black tracking-[0.2em] uppercase px-3 py-1.5 self-start sm:self-center border border-gray-100 rounded-xs shadow-xs">
                VISIT OUR FACILITY
              </div>
            </div>
          </div>
        </div>

        {/* Small vertical line precisely as in screenshot 2 */}
        <div className="mt-24 flex justify-center">
          <div className="w-[1px] h-20 bg-gray-200" />
        </div>
      </section>

      {/* ========================================================
          SERVICES AUTO-SCROLL TICKER
          ======================================================== */}
      <section className="bg-[#111111] py-5 border-y border-neutral-800 overflow-hidden relative select-none">
        {/* Continuous marquee CSS */}
        <style dangerouslySetInnerHTML={{ __html: `
          @keyframes about-marquee-scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .about-animate-marquee {
            display: flex;
            width: max-content;
            animation: about-marquee-scroll 32s linear infinite;
          }
        ` }} />

        {/* Left/Right blur overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-[#111111] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-[#111111] to-transparent z-10 pointer-events-none" />

        <div className="about-animate-marquee gap-16 pr-16 items-center">
          {/* Double up the lists for flawless infinite scroll */}
          {[1, 2].map((groupIndex) => (
            <div key={groupIndex} className="flex items-center space-x-16 shrink-0">
              <span className="text-white/50 text-[10px] font-black tracking-[0.25em] uppercase font-display flex items-center">
                <span className="w-1.5 h-1.5 bg-[#f5b800] rounded-full mr-3 inline-block" />
                Creative Design & Artworking
              </span>
              <span className="text-white/50 text-[10px] font-black tracking-[0.25em] uppercase font-display flex items-center">
                <span className="w-1.5 h-1.5 bg-[#f5b800] rounded-full mr-3 inline-block" />
                Pre-Press & CTP Calibration
              </span>
              <span className="text-white/50 text-[10px] font-black tracking-[0.25em] uppercase font-display flex items-center">
                <span className="w-1.5 h-1.5 bg-[#f5b800] rounded-full mr-3 inline-block" />
                Heidelberg Offset Printing
              </span>
              <span className="text-white/50 text-[10px] font-black tracking-[0.25em] uppercase font-display flex items-center">
                <span className="w-1.5 h-1.5 bg-[#f5b800] rounded-full mr-3 inline-block" />
                Automatic Folder Gluing
              </span>
              <span className="text-white/50 text-[10px] font-black tracking-[0.25em] uppercase font-display flex items-center">
                <span className="w-1.5 h-1.5 bg-[#f5b800] rounded-full mr-3 inline-block" />
                Premium Rigid Box Unit
              </span>
              <span className="text-white/50 text-[10px] font-black tracking-[0.25em] uppercase font-display flex items-center">
                <span className="w-1.5 h-1.5 bg-[#f5b800] rounded-full mr-3 inline-block" />
                3D Retail Displays & PoS
              </span>
              <span className="text-white/50 text-[10px] font-black tracking-[0.25em] uppercase font-display flex items-center">
                <span className="w-1.5 h-1.5 bg-[#f5b800] rounded-full mr-3 inline-block" />
                Embossing & Custom Foiling
              </span>
              <span className="text-white/50 text-[10px] font-black tracking-[0.25em] uppercase font-display flex items-center">
                <span className="w-1.5 h-1.5 bg-[#f5b800] rounded-full mr-3 inline-block" />
                Global Warehousing & Logistics
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================
          3. WHAT WE DO? BLOCK (Screenshot 3)
          ======================================================== */}
      <section className="bg-white py-16 px-6 sm:px-8 max-w-7xl mx-auto text-center">
        
        {/* Centered Box Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="inline-block bg-[#fcfcfc] border border-gray-200 px-10 py-5 rounded-sm shadow-xs mb-10"
        >
          <h2 className="text-sm sm:text-base font-black tracking-[0.35em] text-black uppercase font-display">
            WHAT WE DO?
          </h2>
        </motion.div>

        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-gray-500 text-xs sm:text-sm tracking-widest uppercase font-medium mb-16"
        >
          We provide complete and unparalleled services ranging across <strong className="text-black font-extrabold">3 divisions</strong> -
        </motion.p>

        {/* 3 Grid Cards of divisions precisely as in Screenshot 3 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left max-w-5xl mx-auto">
          
          {/* Card 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            whileHover={{ y: -6, scale: 1.02 }}
            transition={{ type: "spring" as const, stiffness: 300, damping: 20 }}
            className="bg-[#fcfcfc] border border-gray-200 p-8 sm:p-10 rounded-sm hover:shadow-md cursor-default flex flex-col justify-between min-h-[220px]"
          >
            <div>
              <h3 className="text-xs sm:text-sm font-black tracking-[0.25em] text-black uppercase font-display mb-6 pb-2 border-b border-gray-200">
                MAINLINE PACKAGING
              </h3>
              <p className="text-gray-600 text-xs leading-[1.8] tracking-wide">
                Printed Cartons, Mono Cartons, Gift boxes, Retail Packs, Value Added Packs and more.
              </p>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            whileHover={{ y: -6, scale: 1.02 }}
            transition={{ type: "spring" as const, stiffness: 300, damping: 20, delay: 0.1 }}
            className="bg-[#fcfcfc] border border-gray-200 p-8 sm:p-10 rounded-sm hover:shadow-md cursor-default flex flex-col justify-between min-h-[220px]"
          >
            <div>
              <h3 className="text-xs sm:text-sm font-black tracking-[0.25em] text-black uppercase font-display mb-6 pb-2 border-b border-gray-200">
                COMMERCIAL PRINTING
              </h3>
              <p className="text-gray-600 text-xs leading-[1.8] tracking-wide">
                Magazines, Periodicals, Educational Books, Point-of-Sale (PoS) and more.
              </p>
            </div>
          </motion.div>

          {/* Card 3 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            whileHover={{ y: -6, scale: 1.02 }}
            transition={{ type: "spring" as const, stiffness: 300, damping: 20, delay: 0.2 }}
            className="bg-[#fcfcfc] border border-gray-200 p-8 sm:p-10 rounded-sm hover:shadow-md cursor-default flex flex-col justify-between min-h-[220px]"
          >
            <div>
              <h3 className="text-xs sm:text-sm font-black tracking-[0.25em] text-black uppercase font-display mb-6 pb-2 border-b border-gray-200">
                3D DISPLAY UNITS
              </h3>
              <p className="text-gray-600 text-xs leading-[1.8] tracking-wide">
                PoS Collaterals, Retail Display Units and much more.
              </p>
            </div>
          </motion.div>

        </div>

        {/* Vertical Separator Line */}
        <div className="mt-24 flex justify-center">
          <div className="w-[1px] h-20 bg-gray-200" />
        </div>
      </section>

      {/* ========================================================
          4. WHY US? BLOCK (Screenshot 4)
          ======================================================== */}
      <section className="bg-white py-16 px-6 sm:px-8 max-w-6xl mx-auto text-center">
        
        {/* Centered Box Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="inline-block bg-[#fcfcfc] border border-gray-200 px-10 py-5 rounded-sm shadow-xs mb-16"
        >
          <h2 className="text-sm sm:text-base font-black tracking-[0.35em] text-black uppercase font-display">
            WHY US?
          </h2>
        </motion.div>

        {/* Row banners in light grey */}
        <div className="max-w-4xl mx-auto space-y-6 text-left mb-12">
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            whileHover={{ x: 6 }}
            className="bg-[#fafafa] border border-gray-150 p-6 sm:p-8 rounded-sm cursor-default transition-shadow hover:shadow-xs"
          >
            <p className="text-gray-700 text-xs sm:text-sm leading-[1.8] tracking-wide">
              With <strong>decades of printing expertise</strong>, Premium Pack Co has consistently delivered excellence to corporate giants, retail leaders, and custom packaging projects.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ x: 6 }}
            className="bg-[#fafafa] border border-gray-150 p-6 sm:p-8 rounded-sm cursor-default transition-shadow hover:shadow-xs"
          >
            <p className="text-gray-700 text-xs sm:text-sm leading-[1.8] tracking-wide">
              We have a world-class state-of-the-art production facility based in <strong>Okhla Phase-II, New Delhi</strong>, backing all projects with imported machineries.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ x: 6 }}
            className="bg-[#fafafa] border border-gray-150 p-6 sm:p-8 rounded-sm cursor-default transition-shadow hover:shadow-xs"
          >
            <p className="text-gray-700 text-xs sm:text-sm leading-[1.8] tracking-wide">
              For ultra-fast, high-fidelity Print-on-Demand, we utilize our well-calibrated <strong>Konica Minolta Digital Printing Machine</strong>.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileHover={{ x: 6 }}
            className="bg-[#fafafa] border border-gray-150 p-6 sm:p-8 rounded-sm cursor-default transition-shadow hover:shadow-xs"
          >
            <p className="text-gray-700 text-xs sm:text-sm leading-[1.8] tracking-wide">
              Our comprehensive setup includes: <strong>Heidelberg multi-color offset presses</strong>, precision thermal/normal lamination, automated cutting, folding, custom box making, grooving, case making, embossing & gold foiling lines.
            </p>
          </motion.div>

        </div>

        <p className="text-gray-400 text-xs sm:text-sm tracking-widest uppercase font-semibold">
          These are the reasons that make PREMIUM PACK CO the preferred choice
        </p>
      </section>

      {/* ========================================================
          5. STATE-OF-THE-ART MACHINES & INFRASTRUCTURE
          ======================================================== */}
      <section className="bg-[#fafafa] border-y border-gray-150 py-20 px-6 sm:px-8 text-center select-none">
        <div className="max-w-5xl mx-auto space-y-12">
          
          {/* Main Statement Box */}
          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto bg-white border border-gray-200 p-8 sm:p-10 rounded-sm shadow-sm space-y-4 text-center"
          >
            <span className="text-[#D4AF37] text-[11px] font-black tracking-[0.3em] uppercase font-display block">
              WORLD-CLASS PRINT & PACKAGING INFRASTRUCTURE
            </span>
            <p className="text-gray-800 text-sm sm:text-base leading-relaxed font-semibold tracking-wide max-w-3xl mx-auto font-sans">
              Premium Pack Co is well equipped with state-of-the-art Komoris, 2,4,6 and 8-colour Heidelbergs with inline UV coaters, High-Speed Laminators, Folder Gluers, Die Cutters, Rigid and flute Box-making units.
            </p>
          </motion.div>

          {/* 3 Machine Images in 1 Line with Animation */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-5xl mx-auto pt-2">
            
            {/* Machine 1: Heidelberg Press */}
            <motion.div 
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="relative aspect-4/3 sm:aspect-square bg-neutral-900 border border-gray-200 overflow-hidden rounded-sm shadow-md group"
            >
              <img
                src={cylinderGrayscaleImg}
                alt="Heidelberg Multi-Color Printing Press"
                className="w-full h-full object-cover filter brightness-90 group-hover:scale-108 transition-transform duration-700 ease-out"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
              <div className="absolute bottom-3 left-3 right-3 text-left">
                <span className="text-[10px] font-black text-[#D4AF37] tracking-widest uppercase font-display block">
                  HEIDELBERG & KOMORI PRESS
                </span>
                <p className="text-xs text-white font-bold tracking-wide">
                  Multi-Color Offset Printing
                </p>
              </div>
            </motion.div>

            {/* Machine 2: High Speed Folder Gluer */}
            <motion.div 
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="relative aspect-4/3 sm:aspect-square bg-neutral-900 border border-gray-200 overflow-hidden rounded-sm shadow-md group"
            >
              <img
                src={gluerMachineImg}
                alt="Automatic Folder Gluer Machine"
                className="w-full h-full object-cover filter brightness-90 group-hover:scale-108 transition-transform duration-700 ease-out"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
              <div className="absolute bottom-3 left-3 right-3 text-left">
                <span className="text-[10px] font-black text-[#D4AF37] tracking-widest uppercase font-display block">
                  FOLDER GLUER & DIE CUTTERS
                </span>
                <p className="text-xs text-white font-bold tracking-wide">
                  High-Speed Carton Converting
                </p>
              </div>
            </motion.div>

            {/* Machine 3: UV Coaters & Laminators */}
            <motion.div 
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="relative aspect-4/3 sm:aspect-square bg-neutral-900 border border-gray-200 overflow-hidden rounded-sm shadow-md group"
            >
              <img
                src={pressRollersImg}
                alt="Inline UV Coaters & Laminators"
                className="w-full h-full object-cover filter brightness-90 group-hover:scale-108 transition-transform duration-700 ease-out"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
              <div className="absolute bottom-3 left-3 right-3 text-left">
                <span className="text-[10px] font-black text-[#D4AF37] tracking-widest uppercase font-display block">
                  RIGID & FLUTE BOX MAKING
                </span>
                <p className="text-xs text-white font-bold tracking-wide">
                  Inline UV Coating & Laminators
                </p>
              </div>
            </motion.div>

          </div>

        </div>

        {/* Vertical Separator Line */}
        <div className="mt-20 flex justify-center">
          <div className="w-[1px] h-20 bg-gray-200" />
        </div>
      </section>

      {/* ========================================================
          6. OUR JOURNEY BLOCK (Screenshot 6)
          ======================================================== */}
      <section className="bg-white py-24 px-6 sm:px-8 max-w-5xl mx-auto text-center">
        
        {/* Centered Box Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="inline-block bg-[#fcfcfc] border border-gray-200 px-10 py-5 rounded-sm shadow-xs mb-16"
        >
          <h2 className="text-sm sm:text-base font-black tracking-[0.35em] text-black uppercase font-display">
            OUR JOURNEY
          </h2>
        </motion.div>

        {/* Slide Carousel with Left & Right controls precisely mimicking Screenshot 6 */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="relative max-w-4xl mx-auto bg-[#fafafa] border border-gray-200 rounded-sm p-8 sm:p-12 md:p-16 flex flex-col md:flex-row gap-10 items-center justify-between min-h-[420px] transition-all duration-300 shadow-xs"
        >
          
          {/* Left chevron button */}
          <button
            onClick={handlePrevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full border border-gray-200 bg-white flex items-center justify-center text-gray-500 hover:text-black hover:shadow-md transition-all duration-200 cursor-pointer z-10"
            aria-label="Previous slide"
          >
            <ChevronLeft size={20} />
          </button>

          {/* Dynamic Image corresponding to topic with animation */}
          <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-sm border border-gray-200 bg-neutral-900 overflow-hidden shadow-xs shrink-0 relative group">
            <AnimatePresence mode="wait">
              <motion.img 
                key={currentSlide}
                initial={{ opacity: 0, scale: 1.08 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                src={journeySlides[currentSlide].image} 
                alt={journeySlides[currentSlide].imageAlt} 
                className="w-full h-full object-cover filter brightness-95 group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
            </AnimatePresence>
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent pointer-events-none z-10" />
            <div className="absolute bottom-2.5 left-0 right-0 text-center z-20 px-2">
              <span className="text-[9px] tracking-[0.2em] text-[#f5b800] font-extrabold uppercase block drop-shadow-sm font-display">
                {journeySlides[currentSlide].imageTag}
              </span>
            </div>
          </div>

          {/* Slide info content */}
          <div className="flex-1 text-left min-h-[160px] flex flex-col justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: 15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -15 }}
                transition={{ duration: 0.3 }}
                className="space-y-4"
              >
                <div className="space-y-1">
                  <h3 className="text-3xl sm:text-4xl font-black text-black tracking-tight">
                    {journeySlides[currentSlide].year}
                  </h3>
                  <p className="text-xs tracking-[0.25em] text-[#f5b800] font-black uppercase">
                    {journeySlides[currentSlide].subtitle}
                  </p>
                </div>
                
                <p className="text-gray-600 text-xs sm:text-sm leading-[1.9] font-normal whitespace-pre-line max-w-xl">
                  {journeySlides[currentSlide].description}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right chevron button */}
          <button
            onClick={handleNextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full border border-gray-200 bg-white flex items-center justify-center text-gray-500 hover:text-black hover:shadow-md transition-all duration-200 cursor-pointer z-10"
            aria-label="Next slide"
          >
            <ChevronRight size={20} />
          </button>

          {/* Interactive dots list inside the slider banner */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2">
            {journeySlides.map((_, dotIdx) => (
              <button
                key={dotIdx}
                onClick={() => setCurrentSlide(dotIdx)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  dotIdx === currentSlide ? "bg-[#f5b800] w-4" : "bg-gray-300 hover:bg-gray-400"
                } cursor-pointer`}
                aria-label={`Go to slide ${dotIdx + 1}`}
              />
            ))}
          </div>

        </motion.div>

        {/* Vertical Separator Line */}
        <div className="mt-24 flex justify-center">
          <div className="w-[1px] h-20 bg-gray-200" />
        </div>
      </section>

      {/* ========================================================
          7. MAIN OFFSET MEGAPLANT INDUSTRIAL FACILITY BLOCK (Before Footer)
          ======================================================== */}
      <section className="bg-white border-b border-gray-100 max-w-6xl mx-auto pb-24 px-4 sm:px-8 text-center select-none">
        
        {/* Large Animated Offset Megaplant Showcase Banner */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.96, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto rounded-sm border border-gray-200 bg-[#0B0B0B] p-3 sm:p-5 shadow-2xl relative overflow-hidden group"
        >
          {/* Subtle grid pattern overlay */}
          <div className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(#fff_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none z-10" />
          
          <div className="h-[400px] sm:h-[520px] md:h-[580px] w-full relative rounded-xs bg-neutral-950 overflow-hidden flex flex-col justify-between items-center p-6 sm:p-10">
            {/* Real Industrial Offset Megaplant Image with Continuous Smooth Zoom Animation */}
            <motion.img 
              src={offsetMegaplantImg} 
              alt="Premium Pack Co Main Offset Megaplant Facility"
              initial={{ scale: 1 }}
              animate={{ 
                scale: [1, 1.07, 1],
                filter: [
                  "brightness(0.5) contrast(1.1)", 
                  "brightness(0.68) contrast(1.15)", 
                  "brightness(0.5) contrast(1.1)"
                ]
              }}
              transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" as const }}
              className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-1000 ease-out"
              referrerPolicy="no-referrer"
            />

            {/* Gradient Overlay for Vignette and Text Legibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/35 to-black/60 pointer-events-none" />

            {/* Top Animated Gold Badge */}
            <div className="relative z-20 self-start">
              <div className="bg-black/85 backdrop-blur-md px-4 sm:px-5 py-2 border border-[#D4AF37]/60 rounded-xs shadow-xl flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#D4AF37] animate-ping" />
                <span className="text-[10px] sm:text-xs tracking-[0.25em] text-[#D4AF37] font-black uppercase font-display">
                  OKHLA PHASE-II • MAIN OFFSET MEGAPLANT
                </span>
              </div>
            </div>

            {/* Center Architectural Signage Overlay */}
            <div className="relative z-20 space-y-3 text-center my-auto px-2">
              <motion.span 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-[#D4AF37] text-xs sm:text-sm font-black tracking-[0.35em] uppercase font-display block"
              >
                OUR WORLD-CLASS MANUFACTURING HUB
              </motion.span>
              <h3 className="text-white text-2xl sm:text-4xl md:text-5xl font-black tracking-[0.12em] font-display uppercase drop-shadow-2xl">
                PREMIUM PACK CO MEGAPLANT
              </h3>
              <p className="text-gray-200 text-xs sm:text-sm md:text-base font-medium tracking-wider max-w-2xl mx-auto drop-shadow-md">
                Equipped with multi-color Heidelberg presses, Konica Minolta digital production lines, and high-speed automated rigid box converting machinery in New Delhi.
              </p>
              
              {/* Gold Accent Divider Line */}
              <div className="w-24 h-1 bg-[#D4AF37] mx-auto my-4 rounded-full shadow-lg" />
            </div>

            {/* Bottom Status Ribbon */}
            <div className="relative z-20 w-full flex flex-col sm:flex-row items-center justify-between gap-3 pt-4 border-t border-white/15">
              <div className="text-left">
                <span className="text-gray-300 text-[10px] sm:text-xs tracking-widest font-semibold uppercase font-display block">
                  FACILITY LOCATION
                </span>
                <span className="text-white text-xs sm:text-sm font-bold tracking-wider uppercase font-display">
                  OKHLA INDUSTRIAL AREA PHASE-II, NEW DELHI
                </span>
              </div>
              <div className="bg-[#D4AF37] text-black text-[10px] sm:text-xs font-black tracking-[0.2em] uppercase px-5 py-2.5 rounded-xs shadow-lg hover:bg-white transition-colors">
                OPERATIONAL 24 / 7
              </div>
            </div>

          </div>
        </motion.div>

        {/* Final tiny decorative line */}
        <div className="mt-20 flex justify-center">
          <div className="w-[1px] h-20 bg-gray-200" />
        </div>
      </section>

    </div>
  );
}
