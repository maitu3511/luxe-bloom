/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Printer, 
  Package, 
  CheckCircle2, 
  ArrowRight,
  ChevronDown,
  Sparkles,
  Award
} from "lucide-react";

import { PRINTING_SERVICES_LIST, PACKAGING_SERVICES_LIST } from "../data/servicesData";
import CinematicImage from "./CinematicImage";
import AutoPlayVideo from "./AutoPlayVideo";
import { getServiceVideo } from "../data/videoMap";

// High quality imagery for hero
import cylinderGrayscaleImg from "../assets/images/heidelberg_cylinder_new_1784612943866.jpg";

interface ServicesPageProps {
  onNavigateContact?: () => void;
}

export default function ServicesPage({ onNavigateContact }: ServicesPageProps) {
  const [activeTab, setActiveTab] = useState<'printing' | 'packaging'>('printing');

  // Scroll to top on load or tab change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [activeTab]);

  return (
    <div className="bg-white text-gray-900 font-sans select-none antialiased min-h-screen">
      
      {/* ========================================================
          HERO BANNER
          ======================================================== */}
      <section className="relative h-[42vh] sm:h-[50vh] flex items-center justify-center bg-[#0B0B0B] overflow-hidden border-b border-[#D4AF37]/30">
        <div className="absolute inset-0 z-0">
          <img
            src={cylinderGrayscaleImg}
            alt="Heidelberg Offset Printing & Packaging Press"
            className="w-full h-full object-cover object-center opacity-35 filter grayscale contrast-125 scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-[#0B0B0B]" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl space-y-4 pt-6">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#D4AF37]/10 border border-[#D4AF37]/50 text-[#D4AF37] text-[10px] font-black tracking-[0.25em] uppercase font-display rounded-full mb-1"
          >
            <Sparkles size={13} />
            <span>COMMERCIAL PRINTING & LUXURY PACKAGING</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-white text-3xl sm:text-5xl md:text-6xl font-black tracking-[0.1em] uppercase font-display leading-tight drop-shadow-md"
          >
            OUR SERVICES
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[#D4AF37] text-xs sm:text-sm font-bold tracking-[0.35em] uppercase font-display"
          >
            PREMIUM PACK CO • JAI MAA TRADING
          </motion.p>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 text-[#D4AF37]/60 animate-bounce">
          <ChevronDown size={20} />
        </div>
      </section>

      {/* ========================================================
          SPACING & CENTER CATEGORY SELECTION OPTIONS
          (Printing Services vs Packaging Services)
          ======================================================== */}
      <section className="bg-gray-50/90 border-b border-gray-200 py-10 sm:py-16 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          
          <div className="space-y-2">
            <span className="text-[#D4AF37] text-[11px] font-black tracking-[0.3em] uppercase font-display block">
              SELECT SERVICE CATEGORY
            </span>
            <h2 className="text-xl sm:text-2xl font-black text-black tracking-wide uppercase font-display">
              CHOOSE WHAT YOU WOULD LIKE TO EXPLORE
            </h2>
          </div>

          {/* Center 2 Options / Tabs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 pt-2">
            <button
              onClick={() => setActiveTab('printing')}
              className={`w-full sm:w-auto px-8 py-4 rounded-xs border text-xs sm:text-sm font-black tracking-widest uppercase transition-all duration-300 flex items-center justify-center gap-3 cursor-pointer font-display shadow-md ${
                activeTab === 'printing'
                  ? 'bg-[#0B0B0B] text-[#D4AF37] border-[#D4AF37] ring-2 ring-[#D4AF37]/30 shadow-lg scale-102'
                  : 'bg-white text-gray-700 border-gray-300 hover:border-[#D4AF37] hover:text-black hover:bg-amber-50/50'
              }`}
            >
              <Printer size={18} className={activeTab === 'printing' ? 'text-[#D4AF37]' : 'text-gray-500'} />
              <span>1. PRINTING SERVICES</span>
              <span className={`ml-2 px-2 py-0.5 text-[10px] font-extrabold rounded-full ${
                activeTab === 'printing' ? 'bg-[#D4AF37] text-black' : 'bg-gray-200 text-gray-700'
              }`}>
                {PRINTING_SERVICES_LIST.length}
              </span>
            </button>

            <button
              onClick={() => setActiveTab('packaging')}
              className={`w-full sm:w-auto px-8 py-4 rounded-xs border text-xs sm:text-sm font-black tracking-widest uppercase transition-all duration-300 flex items-center justify-center gap-3 cursor-pointer font-display shadow-md ${
                activeTab === 'packaging'
                  ? 'bg-[#0B0B0B] text-[#D4AF37] border-[#D4AF37] ring-2 ring-[#D4AF37]/30 shadow-lg scale-102'
                  : 'bg-white text-gray-700 border-gray-300 hover:border-[#D4AF37] hover:text-black hover:bg-amber-50/50'
              }`}
            >
              <Package size={18} className={activeTab === 'packaging' ? 'text-[#D4AF37]' : 'text-gray-500'} />
              <span>2. PACKAGING SERVICES</span>
              <span className={`ml-2 px-2 py-0.5 text-[10px] font-extrabold rounded-full ${
                activeTab === 'packaging' ? 'bg-[#D4AF37] text-black' : 'bg-gray-200 text-gray-700'
              }`}>
                {PACKAGING_SERVICES_LIST.length}
              </span>
            </button>
          </div>

        </div>
      </section>

      {/* SPACE BEFORE SERVICES LIST */}
      <div className="h-8 sm:h-12 bg-white" />


      {/* =========================================================================================
          DYNAMIC CATEGORY CONTENT WITH ANIMATE PRESENCE & LARGE UNBOXED IMAGE LAYOUT
          ========================================================================================= */}
      <AnimatePresence mode="wait">
        {activeTab === 'printing' && (
          <motion.section
            key="printing-section"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            id="section-printing"
            className="relative pb-20"
          >
            {/* Section Banner Header */}
            <div className="bg-[#0B0B0B] text-white py-12 px-6 text-center border-y border-[#D4AF37]/30 relative overflow-hidden mb-12 sm:mb-16">
              <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37]/5 via-transparent to-[#D4AF37]/5" />
              <div className="relative z-10 max-w-4xl mx-auto space-y-3">
                <span className="text-[#D4AF37] text-[11px] font-black tracking-[0.35em] uppercase font-display block">
                  COMMERCIAL PRINT MEDIA • {PRINTING_SERVICES_LIST.length} SERVICES
                </span>
                <h2 className="text-2xl sm:text-4xl font-black text-white tracking-[0.12em] uppercase font-display">
                  PRINTING SERVICES
                </h2>
                <div className="w-28 h-1 bg-[#D4AF37] mx-auto my-3.5 rounded-full shadow-sm" />
                <p className="text-gray-300 text-xs sm:text-sm max-w-3xl mx-auto leading-relaxed font-normal tracking-wide">
                  We provide premium commercial printing solutions using modern Heidelberg Offset and Digital Printing Presses with superior color fidelity, rich tactile finishes, and timely delivery.
                </p>
              </div>
            </div>

            {/* DYNAMIC ALTERNATING ZIG-ZAG LIST WITH NO BOX / FULL BREATHING SPACE & LARGE IMAGES */}
            <div className="space-y-16 sm:space-y-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {PRINTING_SERVICES_LIST.map((service, idx) => {
                const isImageLeft = idx % 2 === 0;

                return (
                  <div key={service.id} className="relative">
                    <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-10 lg:gap-14">
                      
                      {/* LARGE CINEMATIC IMAGE-TO-VIDEO BLOCK (Spans 7 columns) */}
                      <div className={`lg:col-span-7 ${isImageLeft ? "order-2 lg:order-1" : "order-2 lg:order-2"}`}>
                        <CinematicImage
                          src={service.image}
                          alt={service.title}
                          title={service.title}
                          categoryTag="COMMERCIAL PRINTING"
                          presetIndex={idx}
                          aspectRatioClass="min-h-[380px] sm:min-h-[460px] lg:min-h-[520px]"
                          hoverActionText="EXPLORE PRINT SPECIFICATIONS"
                          priority={idx === 0}
                        />

                        {getServiceVideo(service.id) && (
                          <div className="mt-5">
                            <AutoPlayVideo
                              src={getServiceVideo(service.id) as string}
                              title={service.title}
                              badgeLabel="LIVE PROCESS VIDEO"
                            />
                          </div>
                        )}
                      </div>

                      {/* CONTENT BLOCK (Spans 5 columns on desktop) */}
                      <motion.div 
                        initial={{ opacity: 0, x: isImageLeft ? 40 : -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-60px" }}
                        transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                        className={`lg:col-span-5 space-y-5 ${
                          isImageLeft ? "order-1 lg:order-2" : "order-1 lg:order-1"
                        }`}
                      >
                        <div className="flex items-center gap-2.5">
                          <span className="w-12 h-1 bg-[#D4AF37] rounded-full" />
                          <span className="text-[#D4AF37] text-xs font-black tracking-[0.2em] uppercase font-display">
                            COMMERCIAL PRINT MEDIA
                          </span>
                        </div>

                        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-black tracking-wide uppercase font-display leading-tight">
                          {service.title}
                        </h3>

                        <p className="text-gray-600 text-xs sm:text-sm leading-relaxed font-normal">
                          {service.longDesc}
                        </p>

                        {/* Features List */}
                        <div className="pt-3 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-bold text-gray-800 border-t border-gray-100">
                          {service.benefits.map((benefit, bIdx) => (
                            <div key={bIdx} className="flex items-start gap-2">
                              <CheckCircle2 size={16} className="text-[#D4AF37] flex-shrink-0 mt-0.5" />
                              <span className="leading-snug">{benefit}</span>
                            </div>
                          ))}
                        </div>

                        {/* Finishing & Material Specs Badges */}
                        <div className="pt-2 flex flex-wrap gap-2 text-[10px] font-extrabold uppercase">
                          {service.finishingOptions.slice(0, 3).map((finish, fIdx) => (
                            <span key={fIdx} className="px-3 py-1 bg-amber-50 text-amber-900 border border-amber-200/80 rounded-xs">
                              {finish}
                            </span>
                          ))}
                        </div>
                      </motion.div>

                    </div>

                    {/* ELEGANT & VISIBLE SEPARATOR LINE BETWEEN SERVICES */}
                    {idx < PRINTING_SERVICES_LIST.length - 1 && (
                      <div className="pt-16 sm:pt-24 flex items-center justify-center gap-4">
                        <div className="h-[1.5px] bg-[#D4AF37]/35 flex-1" />
                        <div className="w-3 h-3 rotate-45 bg-[#D4AF37] shadow-sm flex-shrink-0" />
                        <div className="h-[1.5px] bg-[#D4AF37]/35 flex-1" />
                      </div>
                    )}

                  </div>
                );
              })}
            </div>

          </motion.section>
        )}

        {activeTab === 'packaging' && (
          <motion.section
            key="packaging-section"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            id="section-packaging"
            className="relative pb-20"
          >
            {/* Section Banner Header */}
            <div className="bg-[#0B0B0B] text-white py-12 px-6 text-center border-y border-[#D4AF37]/30 relative overflow-hidden mb-12 sm:mb-16">
              <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37]/5 via-transparent to-[#D4AF37]/5" />
              <div className="relative z-10 max-w-4xl mx-auto space-y-3">
                <span className="text-[#D4AF37] text-[11px] font-black tracking-[0.35em] uppercase font-display block">
                  LUXURY PACKAGING & RIGID BOXES • {PACKAGING_SERVICES_LIST.length} SERVICES
                </span>
                <h2 className="text-2xl sm:text-4xl font-black text-white tracking-[0.12em] uppercase font-display">
                  PACKAGING SERVICES
                </h2>
                <div className="w-28 h-1 bg-[#D4AF37] mx-auto my-3.5 rounded-full shadow-sm" />
                <p className="text-gray-300 text-xs sm:text-sm max-w-3xl mx-auto leading-relaxed font-normal tracking-wide">
                  We manufacture premium rigid boxes, customized cartons, and luxury gift packaging for global brands using advanced automated machinery, V-grooving, and high-end embellishments.
                </p>
              </div>
            </div>

            {/* DYNAMIC ALTERNATING ZIG-ZAG LIST WITH NO BOX / FULL BREATHING SPACE & LARGE IMAGES */}
            <div className="space-y-16 sm:space-y-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {PACKAGING_SERVICES_LIST.map((service, idx) => {
                const isImageLeft = idx % 2 === 0;

                return (
                  <div key={service.id} className="relative">
                    <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-10 lg:gap-14">
                      
                      {/* LARGE CINEMATIC IMAGE-TO-VIDEO BLOCK (Spans 7 columns) */}
                      <div className={`lg:col-span-7 ${isImageLeft ? "order-2 lg:order-1" : "order-2 lg:order-2"}`}>
                        <CinematicImage
                          src={service.image}
                          alt={service.title}
                          title={service.title}
                          categoryTag="LUXURY PACKAGING"
                          presetIndex={idx + 4}
                          aspectRatioClass="min-h-[380px] sm:min-h-[460px] lg:min-h-[520px]"
                          hoverActionText="EXPLORE PACKAGING SPECIFICATIONS"
                          priority={idx === 0}
                        />

                        {getServiceVideo(service.id) && (
                          <div className="mt-5">
                            <AutoPlayVideo
                              src={getServiceVideo(service.id) as string}
                              title={service.title}
                              badgeLabel="LIVE PROCESS VIDEO"
                            />
                          </div>
                        )}
                      </div>

                      {/* CONTENT BLOCK (Spans 5 columns on desktop) */}
                      <motion.div 
                        initial={{ opacity: 0, x: isImageLeft ? 40 : -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-60px" }}
                        transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                        className={`lg:col-span-5 space-y-5 ${
                          isImageLeft ? "order-1 lg:order-2" : "order-1 lg:order-1"
                        }`}
                      >
                        <div className="flex items-center gap-2.5">
                          <span className="w-12 h-1 bg-[#D4AF37] rounded-full" />
                          <span className="text-[#D4AF37] text-xs font-black tracking-[0.2em] uppercase font-display">
                            CONVERTING & RIGID BOXES
                          </span>
                        </div>

                        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-black tracking-wide uppercase font-display leading-tight">
                          {service.title}
                        </h3>

                        <p className="text-gray-600 text-xs sm:text-sm leading-relaxed font-normal">
                          {service.longDesc}
                        </p>

                        {/* Features List */}
                        <div className="pt-3 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-bold text-gray-800 border-t border-gray-100">
                          {service.benefits.map((benefit, bIdx) => (
                            <div key={bIdx} className="flex items-start gap-2">
                              <CheckCircle2 size={16} className="text-[#D4AF37] flex-shrink-0 mt-0.5" />
                              <span className="leading-snug">{benefit}</span>
                            </div>
                          ))}
                        </div>

                        {/* Finishing & Material Specs Badges */}
                        <div className="pt-2 flex flex-wrap gap-2 text-[10px] font-extrabold uppercase">
                          {service.finishingOptions.slice(0, 3).map((finish, fIdx) => (
                            <span key={fIdx} className="px-3 py-1 bg-amber-50 text-amber-900 border border-amber-200/80 rounded-xs">
                              {finish}
                            </span>
                          ))}
                        </div>
                      </motion.div>

                    </div>

                    {/* ELEGANT & VISIBLE SEPARATOR LINE BETWEEN SERVICES */}
                    {idx < PACKAGING_SERVICES_LIST.length - 1 && (
                      <div className="pt-16 sm:pt-24 flex items-center justify-center gap-4">
                        <div className="h-[1.5px] bg-[#D4AF37]/35 flex-1" />
                        <div className="w-3 h-3 rotate-45 bg-[#D4AF37] shadow-sm flex-shrink-0" />
                        <div className="h-[1.5px] bg-[#D4AF37]/35 flex-1" />
                      </div>
                    )}

                  </div>
                );
              })}
            </div>

          </motion.section>
        )}
      </AnimatePresence>


      {/* ========================================================
          BOTTOM GRAND CTA BANNER
          ======================================================== */}
      <section className="bg-[#0B0B0B] text-white py-20 px-6 sm:px-8 border-t border-[#D4AF37]/30 text-center relative overflow-hidden">
        <div className="relative z-10 max-w-4xl mx-auto space-y-6">
          <span className="text-[#D4AF37] text-xs font-black tracking-[0.3em] uppercase font-display block">
            OKHLA PHASE-II, NEW DELHI • STATE OF THE ART PLANT
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase font-display leading-tight">
            NEED CUSTOM DIELINES OR BULK FACTORY QUOTATION?
          </h2>
          <p className="text-gray-300 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed">
            Send us your dieline drawings, box dimensions, or schedule a plant visit in Okhla Phase-II. Our packaging engineers will assist you with CAD samples and express quotations.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={onNavigateContact}
              className="inline-flex items-center gap-2 bg-[#D4AF37] hover:bg-amber-400 text-black font-black text-xs sm:text-sm px-9 py-4 tracking-widest uppercase transition-all duration-300 cursor-pointer rounded-xs shadow-2xl font-display"
            >
              <span>CONTACT US TODAY</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
