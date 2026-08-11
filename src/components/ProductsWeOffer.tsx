/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

// Importing generated images
import showcaseImg from "../assets/images/products_showcase_new_1784612998624.jpg";
import skincareImg from "../assets/images/skincare_packaging_new_1784612968486.jpg";
import skincarePkgOneImg from "../assets/images/skincare_pkg_one_1784521941334.jpg";
import bookImg from "../assets/images/art_books_new_1784612983623.jpg";
import displaysImg from "../assets/images/display_systems_retail_1784520909561.jpg";

import rigidGiftBoxesImg from "../assets/images/rigid_gift_boxes_1786016977384.jpg";
import chocolateJewelleryImg from "../assets/images/chocolate_jewellery_box_1786016996189.jpg";
import monoCartonImg from "../assets/images/mono_carton_duplex_1786017008596.jpg";
import catalogueBrochureImg from "../assets/images/catalogue_brochure_print_1786017041608.jpg";
import bookDiaryImg from "../assets/images/book_diary_printing_1786017058990.jpg";

import selectPkgOneImg from "../assets/images/select_pkg_one_1784522099216.jpg";
import foodPkgImg from "../assets/images/food_pkg_new_1784613155743.jpg";
import pubPkgOneImg from "../assets/images/pub_pkg_one_1784522062916.jpg";
import artBooksCommercialImg from "../assets/images/art_books_commercial_1784520263860.jpg";
import selectPkgThreeImg from "../assets/images/select_pkg_three_1784522124881.jpg";

interface SlideItem {
  src: string;
  alt: string;
  category: string;
}

// 6 Slides for Packaging
const PACKAGING_SLIDES: SlideItem[] = [
  { src: skincareImg, alt: "Beauty & Skincare Luxury Packaging", category: "PACKAGING • SLIDE 1 OF 6" },
  { src: rigidGiftBoxesImg, alt: "Custom Rigid Gift Boxes", category: "PACKAGING • SLIDE 2 OF 6" },
  { src: chocolateJewelleryImg, alt: "Confectionery & Jewellery Rigid Boxes", category: "PACKAGING • SLIDE 3 OF 6" },
  { src: monoCartonImg, alt: "Mono Cartons & Duplex Boxes", category: "PACKAGING • SLIDE 4 OF 6" },
  { src: selectPkgOneImg, alt: "Custom Multi-Tier VAP Boxes", category: "PACKAGING • SLIDE 5 OF 6" },
  { src: foodPkgImg, alt: "Food & Beverage Eco Packaging", category: "PACKAGING • SLIDE 6 OF 6" },
];

// 6 Slides for Printing
const PRINTING_SLIDES: SlideItem[] = [
  { src: catalogueBrochureImg, alt: "Catalogues & Corporate Brochures", category: "PRINTING • SLIDE 1 OF 6" },
  { src: bookDiaryImg, alt: "Book Printing & Executive Diaries", category: "PRINTING • SLIDE 2 OF 6" },
  { src: bookImg, alt: "Art Books & High-End Publications", category: "PRINTING • SLIDE 3 OF 6" },
  { src: pubPkgOneImg, alt: "Corporate Publications & Collaterals", category: "PRINTING • SLIDE 4 OF 6" },
  { src: artBooksCommercialImg, alt: "Hardbound Commercial Printing", category: "PRINTING • SLIDE 5 OF 6" },
  { src: selectPkgThreeImg, alt: "Specialty Spot UV & Foil Print", category: "PRINTING • SLIDE 6 OF 6" },
];

function ProductImageSlider({ slides }: { slides: SlideItem[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  return (
    <div className="relative w-full h-full min-h-[380px] sm:min-h-[460px] lg:min-h-[500px] bg-neutral-900 overflow-hidden group">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.5, ease: "easeInOut" as const }}
          className="absolute inset-0 w-full h-full"
        >
          <img
            src={slides[currentIndex].src}
            alt={slides[currentIndex].alt}
            className="w-full h-full object-cover object-center filter brightness-95"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          
          {/* Slide Tag / Label */}
          <div className="absolute bottom-6 left-6 right-20 text-white space-y-1 z-10">
            <span className="text-[10px] font-black tracking-[0.2em] text-[#f5b800] uppercase font-display block">
              {slides[currentIndex].category}
            </span>
            <p className="text-xs sm:text-sm md:text-base font-bold tracking-wide uppercase font-display truncate">
              {slides[currentIndex].alt}
            </p>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Prev / Next Arrows */}
      <button
        onClick={handlePrev}
        className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-[#f5b800] text-white hover:text-black p-2.5 rounded-full border border-white/20 transition-all duration-200 cursor-pointer z-20 shadow-md"
        aria-label="Previous Slide"
      >
        <ChevronLeft size={20} />
      </button>

      <button
        onClick={handleNext}
        className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-[#f5b800] text-white hover:text-black p-2.5 rounded-full border border-white/20 transition-all duration-200 cursor-pointer z-20 shadow-md"
        aria-label="Next Slide"
      >
        <ChevronRight size={20} />
      </button>

      {/* Slide Indicators (Dots & Count) */}
      <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-md px-3 py-1 rounded-full border border-white/20 text-white text-[10px] font-mono tracking-widest z-20">
        SLIDE {currentIndex + 1} / {slides.length}
      </div>

      <div className="absolute bottom-4 right-6 flex items-center gap-1.5 z-20">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
              idx === currentIndex ? "w-6 bg-[#f5b800]" : "w-1.5 bg-white/50 hover:bg-white"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default function ProductsWeOffer() {
  const handleScrollToNext = () => {
    const element = document.getElementById("industries-section");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="products" className="py-16 bg-[#ffffff] select-none border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* PRODUCTS WE OFFER Header */}
        <div className="relative mb-12 flex justify-center">
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
              PRODUCTS <span className="font-extrabold text-black ml-1">WE OFFER</span>
            </h2>
          </motion.div>
        </div>

        {/* Product Showcase Banner Image */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="relative mb-10 overflow-hidden rounded-sm shadow-md border border-gray-100 max-w-5xl mx-auto"
        >
          <img
            src={showcaseImg}
            alt="Premium Pack Co product showcase"
            loading="eager"
            decoding="async"
            className="w-full h-auto object-cover filter brightness-[0.98] hover:scale-101 transition-transform duration-700"
            referrerPolicy="no-referrer"
          />
        </motion.div>

        {/* Division Introduction Text */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mb-16"
        >
          <p className="text-gray-700 text-sm sm:text-base font-medium tracking-wide">
            We provide complete and unparalleled services ranging across 3 divisions —
          </p>
        </motion.div>

        {/* ========================================================
            SECTION 1: PACKAGING (6 SLIDES CAROUSEL)
            ======================================================== */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          id="mainline-packaging-section" 
          className="max-w-5xl mx-auto mb-16 rounded-sm border border-gray-200/80 overflow-hidden shadow-sm grid grid-cols-1 lg:grid-cols-12 bg-white"
        >
          {/* Left Box (Light Grey background with bullet list) */}
          <div className="lg:col-span-6 bg-[#f7f7f7] p-8 sm:p-12 lg:p-14 flex flex-col justify-center">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 uppercase font-display tracking-wider leading-tight mb-8">
              PACKAGING
            </h3>

            <ul className="space-y-2.5 sm:space-y-3 text-sm sm:text-base font-medium text-gray-800">
              <li className="flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 bg-gray-900 rounded-full shrink-0" />
                <span>Rigid Boxes</span>
              </li>
              <li className="flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 bg-gray-900 rounded-full shrink-0" />
                <span>Mono Cartons</span>
              </li>
              <li className="flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 bg-gray-900 rounded-full shrink-0" />
                <span>Value Added Packs (VAPs)</span>
              </li>
              <li className="flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 bg-gray-900 rounded-full shrink-0" />
                <span>Glass Boxes</span>
              </li>
              <li className="flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 bg-gray-900 rounded-full shrink-0" />
                <span>Metal Boxes</span>
              </li>
              <li className="flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 bg-gray-900 rounded-full shrink-0" />
                <span>Wooden Boxes</span>
              </li>
              <li className="flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 bg-gray-900 rounded-full shrink-0" />
                <span>Hi-Gloss Lacquer Boxes</span>
              </li>
              <li className="flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 bg-gray-900 rounded-full shrink-0" />
                <span>Gift Boxes</span>
              </li>
              <li className="flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 bg-gray-900 rounded-full shrink-0" />
                <span>Beauty & Skincare</span>
              </li>
              <li className="flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 bg-gray-900 rounded-full shrink-0" />
                <span>Food Packaging</span>
              </li>
              <li className="flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 bg-gray-900 rounded-full shrink-0" />
                <span>Perfume Packaging</span>
              </li>
            </ul>
          </div>

          {/* Right Box (6-Slide Interactive Carousel) */}
          <div className="lg:col-span-6">
            <ProductImageSlider slides={PACKAGING_SLIDES} />
          </div>
        </motion.div>

        {/* ========================================================
            SECTION 2: PRINTING (6 SLIDES CAROUSEL)
            ======================================================== */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          id="commercial-printing-section" 
          className="max-w-5xl mx-auto mb-16 rounded-sm border border-gray-200/80 overflow-hidden shadow-sm grid grid-cols-1 lg:grid-cols-12 bg-white"
        >
          {/* Left Box (6-Slide Interactive Carousel) */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <ProductImageSlider slides={PRINTING_SLIDES} />
          </div>

          {/* Right Box (Light Grey background with bullet list) */}
          <div className="lg:col-span-6 bg-[#f7f7f7] p-8 sm:p-12 lg:p-14 flex flex-col justify-center order-1 lg:order-2">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 uppercase font-display tracking-wider leading-tight mb-8">
              PRINTING
            </h3>

            <ul className="space-y-2.5 sm:space-y-3 text-sm sm:text-base font-medium text-gray-800">
              <li className="flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 bg-gray-900 rounded-full shrink-0" />
                <span>Books</span>
              </li>
              <li className="flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 bg-gray-900 rounded-full shrink-0" />
                <span>Menus</span>
              </li>
              <li className="flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 bg-gray-900 rounded-full shrink-0" />
                <span>Albums</span>
              </li>
              <li className="flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 bg-gray-900 rounded-full shrink-0" />
                <span>Stationery</span>
              </li>
              <li className="flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 bg-gray-900 rounded-full shrink-0" />
                <span>Brochures</span>
              </li>
              <li className="flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 bg-gray-900 rounded-full shrink-0" />
                <span>Catalogues</span>
              </li>
              <li className="flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 bg-gray-900 rounded-full shrink-0" />
                <span>Business Kits</span>
              </li>
              <li className="flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 bg-gray-900 rounded-full shrink-0" />
                <span>Welcome Kits</span>
              </li>
              <li className="flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 bg-gray-900 rounded-full shrink-0" />
                <span>Art Catalogue</span>
              </li>
              <li className="flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 bg-gray-900 rounded-full shrink-0" />
                <span>Photo Albums</span>
              </li>
              <li className="flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 bg-gray-900 rounded-full shrink-0" />
                <span>Coffee Table Books</span>
              </li>
              <li className="flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 bg-gray-900 rounded-full shrink-0" />
                <span>Marketing Collaterals</span>
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Division 3: 3D DISPLAY UNITS */}
        <div className="max-w-5xl mx-auto mt-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <h3 className="text-2xl font-black tracking-widest text-black uppercase font-display">
              3D DISPLAY UNITS
            </h3>
            <div className="w-16 h-1 bg-solar-yellow mx-auto mt-3 rounded-full" />
          </motion.div>

          {/* Displays Render image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="overflow-hidden rounded-sm border border-gray-100 shadow-md"
          >
            <img
              src={displaysImg}
              alt="3D Retail Display Units Mockups"
              loading="eager"
              decoding="async"
              className="w-full h-auto object-cover object-center filter brightness-[0.99] hover:scale-[1.01] transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>

        {/* Down chevron */}
        <div className="mt-16 flex justify-center">
          <button
            onClick={handleScrollToNext}
            className="text-gray-400 hover:text-black transition-colors duration-300 transform hover:translate-y-0.5 cursor-pointer animate-bounce"
            aria-label="Scroll to industries"
          >
            <ChevronDown size={28} />
          </button>
        </div>

      </div>
    </section>
  );
}
