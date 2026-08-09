/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from "react";
import { motion } from "motion/react";
import { 
  ArrowLeft, 
  CheckCircle2, 
  Sparkles, 
  ArrowRight, 
  Layers, 
  ShieldCheck, 
  FileText, 
  PhoneCall, 
  Printer, 
  Package,
  Layers3,
  Box
} from "lucide-react";
import { ServiceDetail, PRINTING_SERVICES_LIST, PACKAGING_SERVICES_LIST } from "../data/servicesData";

interface ServiceDetailPageProps {
  service: ServiceDetail;
  onBack: () => void;
  onSelectService: (service: ServiceDetail) => void;
  onNavigateContact?: () => void;
}

export default function ServiceDetailPage({
  service,
  onBack,
  onSelectService,
  onNavigateContact
}: ServiceDetailPageProps) {
  
  // Scroll to top when detail page opens
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [service]);

  // Find related services in the same category (excluding current)
  const allInCat = service.category === "printing" ? PRINTING_SERVICES_LIST : PACKAGING_SERVICES_LIST;
  const relatedServices = allInCat.filter(s => s.id !== service.id).slice(0, 3);

  return (
    <div className="bg-[#0B0B0B] text-white font-sans antialiased min-h-screen selection:bg-[#D4AF37] selection:text-black">
      
      {/* ========================================================
          1. HERO BANNER
          ======================================================== */}
      <section className="relative min-h-[45vh] sm:min-h-[50vh] flex items-center justify-center bg-black border-b border-[#D4AF37]/20 overflow-hidden pt-20 pb-12">
        <div className="absolute inset-0 z-0">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover object-center opacity-25 filter grayscale contrast-125 scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/80 to-[#0B0B0B]" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center space-y-4">
          
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="flex justify-start mb-4"
          >
            <button
              onClick={onBack}
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#121212] hover:bg-[#D4AF37] text-white hover:text-black border border-[#D4AF37]/30 text-xs font-black tracking-widest uppercase transition-all duration-300 rounded-xs cursor-pointer shadow-lg group"
            >
              <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
              <span>BACK TO SERVICES</span>
            </button>
          </motion.div>

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#D4AF37]/10 border border-[#D4AF37]/50 text-[#D4AF37] text-[10px] font-black tracking-[0.25em] uppercase font-display rounded-full"
          >
            <Sparkles size={13} />
            <span>{service.category === "printing" ? "PRINTING SOLUTION" : "PACKAGING SOLUTION"}</span>
          </motion.div>

          {/* Heading */}
          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white text-3xl sm:text-5xl md:text-6xl font-black tracking-tight uppercase font-display leading-tight"
          >
            {service.title}
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-gray-300 text-xs sm:text-sm md:text-base max-w-2xl mx-auto font-normal leading-relaxed tracking-wide"
          >
            {service.shortDesc}
          </motion.p>
        </div>
      </section>

      {/* ========================================================
          2. MAIN CONTENT (ZIG-ZAG LARGE IMAGE + DETAILS)
          ======================================================== */}
      <section className="py-16 px-6 sm:px-12 max-w-7xl mx-auto space-y-16">
        
        {/* Row 1: Large Featured Image & Deep Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Image Side (7 cols) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 relative group"
          >
            <div className="relative rounded-sm overflow-hidden border border-[#D4AF37]/40 shadow-2xl bg-[#121212]">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-[350px] sm:h-[450px] object-cover object-center group-hover:scale-105 transition-transform duration-700 filter brightness-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-60" />
              <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end text-xs font-bold text-white/90">
                <span className="px-3 py-1 bg-black/80 border border-[#D4AF37]/40 text-[#D4AF37] font-display uppercase tracking-widest text-[10px]">
                  PREMIUM PACK CO • OKHLA PHASE-II
                </span>
              </div>
            </div>
            {/* Golden Glow Backdrop */}
            <div className="absolute -inset-1 bg-gradient-to-r from-[#D4AF37]/20 to-amber-500/10 rounded-sm blur-xl -z-10 group-hover:opacity-100 transition-opacity opacity-50" />
          </motion.div>

          {/* Description & Fast CTAs Side (5 cols) */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="inline-flex items-center gap-2 text-[#D4AF37] text-xs font-black tracking-[0.2em] uppercase font-display">
              <ShieldCheck size={16} />
              <span>SPECIFICATION OVERVIEW</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-black text-white uppercase font-display tracking-wide leading-snug">
              ENGINEERED FOR UNMATCHED QUALITY
            </h2>

            <p className="text-gray-300 text-xs sm:text-sm leading-relaxed font-normal">
              {service.longDesc}
            </p>

            <div className="p-4 bg-[#141414] border-l-2 border-[#D4AF37] space-y-2">
              <p className="text-xs font-bold text-[#D4AF37] uppercase tracking-wider font-display">
                PROTOTYPE & SAMPLE PROOFING
              </p>
              <p className="text-xs text-gray-400 leading-normal">
                We provide physical dieline mockups and color proofing prior to mass production at our Okhla Phase-II facility.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <button
                onClick={onNavigateContact}
                className="flex-1 py-3.5 px-6 bg-[#D4AF37] hover:bg-amber-400 text-black font-black text-xs tracking-widest uppercase transition-all duration-300 rounded-xs flex items-center justify-center gap-2 shadow-lg cursor-pointer font-display"
              >
                <PhoneCall size={14} />
                <span>GET QUOTE NOW</span>
              </button>

              <button
                onClick={onNavigateContact}
                className="flex-1 py-3.5 px-6 bg-[#161616] hover:bg-white text-white hover:text-black border border-gray-700 hover:border-white font-black text-xs tracking-widest uppercase transition-all duration-300 rounded-xs flex items-center justify-center gap-2 cursor-pointer font-display"
              >
                <FileText size={14} />
                <span>INQUIRE SPECIFICATIONS</span>
              </button>
            </div>
          </motion.div>

        </div>

        {/* ========================================================
            3. BENEFITS & APPLICATIONS (2 COLUMNS)
            ======================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-neutral-800">
          
          {/* Key Benefits */}
          <div className="bg-[#121212] border border-neutral-800 p-8 rounded-sm space-y-6 hover:border-[#D4AF37]/50 transition-colors">
            <div className="flex items-center gap-3 border-b border-neutral-800 pb-4">
              <div className="p-2.5 bg-[#D4AF37]/10 border border-[#D4AF37]/30 rounded-xs text-[#D4AF37]">
                <Sparkles size={18} />
              </div>
              <div>
                <h3 className="text-lg font-black text-white uppercase font-display tracking-wider">
                  KEY ADVANTAGES & FEATURES
                </h3>
                <p className="text-xs text-gray-400">Why leading brands choose Premium Pack Co</p>
              </div>
            </div>

            <div className="space-y-3">
              {service.benefits.map((benefit, idx) => (
                <div key={idx} className="flex items-start gap-3 text-xs text-gray-200">
                  <CheckCircle2 size={16} className="text-[#D4AF37] shrink-0 mt-0.5" />
                  <span className="leading-relaxed font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Target Applications */}
          <div className="bg-[#121212] border border-neutral-800 p-8 rounded-sm space-y-6 hover:border-[#D4AF37]/50 transition-colors">
            <div className="flex items-center gap-3 border-b border-neutral-800 pb-4">
              <div className="p-2.5 bg-[#D4AF37]/10 border border-[#D4AF37]/30 rounded-xs text-[#D4AF37]">
                <Layers size={18} />
              </div>
              <div>
                <h3 className="text-lg font-black text-white uppercase font-display tracking-wider">
                  KEY APPLICATIONS & USES
                </h3>
                <p className="text-xs text-gray-400">Ideal commercial applications</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {service.applications.map((app, idx) => (
                <div key={idx} className="p-3 bg-[#181818] border border-neutral-800 rounded-xs text-xs text-gray-300 font-semibold flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full shrink-0" />
                  <span>{app}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* ========================================================
            4. MATERIALS USED & FINISHING TECHNIQUES
            ======================================================== */}
        <div className="bg-gradient-to-r from-[#111111] via-[#161616] to-[#111111] border border-neutral-800 p-8 sm:p-10 rounded-sm space-y-6">
          <div className="text-center space-y-1">
            <span className="text-[10px] font-black tracking-[0.25em] text-[#D4AF37] uppercase font-display">
              CRAFT & MATERIAL SELECTION
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-white uppercase font-display tracking-wide">
              MATERIALS & LUXURY FINISHING
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
            {/* Materials Used */}
            <div className="space-y-3">
              <h4 className="text-xs font-black text-[#D4AF37] tracking-widest uppercase font-display flex items-center gap-2">
                <Box size={14} />
                <span>PREMIUM MATERIALS USED</span>
              </h4>
              <div className="flex flex-wrap gap-2">
                {service.materialsUsed.map((mat, idx) => (
                  <span key={idx} className="px-3 py-1.5 bg-[#222222] border border-neutral-700 text-xs text-gray-200 font-medium rounded-xs">
                    {mat}
                  </span>
                ))}
              </div>
            </div>

            {/* Finishing Options */}
            <div className="space-y-3">
              <h4 className="text-xs font-black text-[#D4AF37] tracking-widest uppercase font-display flex items-center gap-2">
                <Layers3 size={14} />
                <span>SPECIALTY FINISHING OPTIONS</span>
              </h4>
              <div className="flex flex-wrap gap-2">
                {service.finishingOptions.map((finish, idx) => (
                  <span key={idx} className="px-3 py-1.5 bg-[#222222] border border-[#D4AF37]/30 text-xs text-[#D4AF37] font-semibold rounded-xs">
                    {finish}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================
            5. IMAGE GALLERY
            ======================================================== */}
        {service.gallery && service.gallery.length > 0 && (
          <div className="space-y-6 pt-4">
            <div className="text-center space-y-1">
              <span className="text-[10px] font-black tracking-[0.25em] text-[#D4AF37] uppercase font-display">
                PRODUCTION VISUALS
              </span>
              <h3 className="text-xl font-black text-white uppercase font-display tracking-wide">
                SERVICE GALLERY
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {service.gallery.map((img, idx) => (
                <div key={idx} className="h-56 rounded-xs overflow-hidden border border-neutral-800 hover:border-[#D4AF37] transition-all duration-300 group">
                  <img
                    src={img}
                    alt={`${service.title} showcase ${idx + 1}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-95"
                    referrerPolicy="no-referrer"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ========================================================
            6. RELATED SERVICES
            ======================================================== */}
        <div className="pt-12 border-t border-neutral-800 space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-[10px] font-black tracking-[0.25em] text-[#D4AF37] uppercase font-display">
                EXPLORE MORE
              </span>
              <h3 className="text-2xl font-black text-white uppercase font-display tracking-wide">
                RELATED {service.category.toUpperCase()} SERVICES
              </h3>
            </div>
            <button
              onClick={onBack}
              className="text-xs font-black text-[#D4AF37] hover:underline uppercase tracking-widest flex items-center gap-1"
            >
              <span>VIEW ALL SERVICES</span>
              <ArrowRight size={14} />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {relatedServices.map((rel) => (
              <div
                key={rel.id}
                onClick={() => onSelectService(rel)}
                className="bg-[#121212] border border-neutral-800 hover:border-[#D4AF37] p-5 rounded-xs transition-all duration-300 cursor-pointer group flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="h-36 overflow-hidden rounded-xs bg-neutral-900">
                    <img
                      src={rel.image}
                      alt={rel.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <h4 className="text-sm font-black text-white uppercase font-display group-hover:text-[#D4AF37] transition-colors">
                    {rel.title}
                  </h4>
                  <p className="text-xs text-gray-400 line-clamp-2">
                    {rel.shortDesc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-neutral-800/80 flex items-center justify-between text-xs font-bold text-[#D4AF37]">
                  <span>VIEW DETAILS</span>
                  <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>

      </section>

      {/* ========================================================
          7. BOTTOM CTA
          ======================================================== */}
      <section className="bg-black text-white py-16 px-6 border-t border-[#D4AF37]/20 text-center">
        <div className="max-w-3xl mx-auto space-y-4">
          <span className="text-[#D4AF37] text-xs font-black tracking-[0.25em] uppercase font-display block">
            READY TO ORDER OR REQUEST SAMPLES?
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight uppercase font-display">
            TALK TO OUR PRINT & PACKAGING ENGINEERS
          </h2>
          <p className="text-gray-400 text-xs sm:text-sm max-w-xl mx-auto">
            Get instant assistance, custom CAD dieline assistance, and competitive factory quotes direct from Okhla Phase-II, New Delhi.
          </p>
          <div className="pt-2">
            <button
              onClick={onNavigateContact}
              className="inline-flex items-center gap-2 bg-[#D4AF37] hover:bg-amber-400 text-black font-black text-xs sm:text-sm px-8 py-3.5 tracking-widest uppercase transition-all duration-300 cursor-pointer rounded-xs shadow-xl font-display"
            >
              <span>CONTACT OUR TEAM</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
