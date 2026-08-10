/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from "react";
import { ArrowDown, ChevronLeft, ChevronRight, ShieldCheck, Award, Zap, Cpu } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import AnimatedCounter from "./AnimatedCounter";

// Importing the premium high-fidelity images
import jewelleryBoxImg from "../assets/images/chocolate_jewellery_box_1786016996189.jpg";
import rigidBoxesImg from "../assets/images/rigid_gift_boxes_1786016977384.jpg";
import offsetPlantImg from "../assets/images/offset_megaplant_1784614968119.jpg";

interface HeroSlide {
  type: "image" | "video";
  src: string;
  poster?: string;
  alt: string;
  title: string;
  subtitle: string;
}

const HERO_SLIDES: HeroSlide[] = [
  {
    type: "video",
    src: "/videos/hero-production.mp4",
    poster: offsetPlantImg,
    alt: "Live production line printing and making premium boxes",
    title: "INSIDE OUR PRESS FLOOR",
    subtitle: "Live production: offset printing, foil stamping, die-cutting and box making under one roof."
  },
  {
    type: "image",
    src: jewelleryBoxImg,
    alt: "Luxury jewellery box packaging with velvet insert",
    title: "PREMIUM PACK CO",
    subtitle: "Jai Maa Trading • If you can think or take it, we can print and make it!"
  },
  {
    type: "image",
    src: rigidBoxesImg,
    alt: "Custom rigid gift boxes with foil stamping",
    title: "LUXURY PACKAGING",
    subtitle: "Innovative folding mono cartons, luxury rigid boxes, and custom retail packs."
  }
];


const STATS = [
  { label: "YEARS OF EXCELLENCE", value: 25, suffix: "+", icon: Award },
  { label: "BRAND CLIENTS", value: 500, suffix: "+", icon: ShieldCheck },
  { label: "MONTHLY BOX CAPACITY", value: 10, suffix: "M+", icon: Zap },
  { label: "ADVANCED PRESS UNITS", value: 20, suffix: "+", icon: Cpu }
];

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? "100%" : "-100%",
    opacity: 0,
    scale: 1.1
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      x: { type: "spring" as const, stiffness: 220, damping: 26 },
      opacity: { duration: 0.65 },
      scale: { duration: 8, ease: "linear" as const }
    }
  },
  exit: (direction: number) => ({
    x: direction < 0 ? "100%" : "-100%",
    opacity: 0,
    scale: 0.95,
    transition: {
      x: { type: "spring" as const, stiffness: 220, damping: 26 },
      opacity: { duration: 0.65 }
    }
  })
};

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const startTimer = () => {
    stopTimer();
    timerRef.current = setInterval(() => {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 7000);
  };

  const stopTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
  };

  useEffect(() => {
    startTimer();
    return () => stopTimer();
  }, []);

  useEffect(() => {
    if (HERO_SLIDES[current].type === "video" && videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, [current]);

  const handleNext = () => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % HERO_SLIDES.length);
    startTimer();
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
    startTimer();
  };

  const handleDotClick = (index: number) => {
    setDirection(index > current ? 1 : -1);
    setCurrent(index);
    startTimer();
  };

  const handleScrollToNext = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const openWhatsApp = () => {
    window.open("https://wa.me/917503899662", "_blank");
  };

  return (
    <section id="home" className="relative min-h-[90vh] sm:min-h-screen flex flex-col justify-between overflow-hidden select-none bg-neutral-950 pb-12">
      
      {/* Background Image/Video Slideshow with Ken Burns zoom effect */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={current}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="absolute inset-0 w-full h-full"
          >
            {HERO_SLIDES[current].type === "video" ? (
              <video
                ref={videoRef}
                autoPlay
                loop
                muted
                playsInline
                poster={HERO_SLIDES[current].poster}
                className="w-full h-full object-cover object-center filter brightness-[0.45] contrast-[1.1]"
              >
                <source src={HERO_SLIDES[current].src} type="video/mp4" />
                <img
                  src={HERO_SLIDES[current].poster}
                  alt={HERO_SLIDES[current].alt}
                  className="w-full h-full object-cover object-center filter brightness-[0.5] contrast-[1.08]"
                  referrerPolicy="no-referrer"
                />
              </video>
            ) : (
              <motion.img
                src={HERO_SLIDES[current].src}
                alt={HERO_SLIDES[current].alt}
                onError={(e) => {
                  const target = e.currentTarget as HTMLImageElement;
                  if (!target.src.includes("premium-pack-co-logo")) {
                    target.src = "/images/logo/premium-pack-co-logo.jpg";
                  }
                }}
                animate={{
                  scale: [1, 1.07, 1.02],
                  x: ["0%", "-1.5%", "0%"],
                  y: ["0%", "1%", "0%"],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  repeatType: "mirror",
                  ease: "easeInOut" as const,
                }}
                className="w-full h-full object-cover object-center filter brightness-[0.5] contrast-[1.08]"
                referrerPolicy="no-referrer"
              />
            )}
          </motion.div>
        </AnimatePresence>

        {/* Golden Radial & Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/90 z-[2]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.12)_0%,transparent_75%)] z-[3] pointer-events-none" />

        {/* Floating Light Rays and Golden Dust Particles */}
        <div className="absolute inset-0 z-[3] overflow-hidden pointer-events-none opacity-40">
          <motion.div 
            animate={{ y: [-20, 20, -20], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" as const }}
            className="absolute top-12 left-1/4 w-72 h-72 rounded-full bg-[#D4AF37]/20 blur-[100px]"
          />
          <motion.div 
            animate={{ y: [20, -20, 20], opacity: [0.2, 0.5, 0.2] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" as const, delay: 1 }}
            className="absolute bottom-24 right-1/4 w-96 h-96 rounded-full bg-[#f5b800]/15 blur-[120px]"
          />
        </div>
      </div>

      {/* Service Showcase Side Images (desktop only) */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
        className="hidden 2xl:block absolute left-20 top-1/2 -translate-y-1/2 z-[5] w-52"
      >
        <motion.div
          animate={{ y: [0, -14, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" as const }}
          className="rounded-xs overflow-hidden border border-[#D4AF37]/40 shadow-2xl bg-black/40 backdrop-blur-sm"
        >
          <img
            src={rigidBoxesImg}
            alt="Luxury rigid gift box packaging manufactured in-house"
            className="w-full h-64 object-cover"
            loading="lazy"
            referrerPolicy="no-referrer"
          />
          <div className="px-3 py-2 bg-black/80">
            <p className="text-[9px] tracking-[0.25em] font-black uppercase text-[#D4AF37]">Luxury Rigid Boxes</p>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.75, duration: 0.8, ease: "easeOut" }}
        className="hidden 2xl:block absolute right-20 top-1/2 -translate-y-1/2 z-[5] w-52"
      >
        <motion.div
          animate={{ y: [0, 14, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" as const, delay: 0.8 }}
          className="rounded-xs overflow-hidden border border-[#D4AF37]/40 shadow-2xl bg-black/40 backdrop-blur-sm"
        >
          <img
            src={offsetPlantImg}
            alt="Multi-colour offset printing press running production sheets"
            className="w-full h-64 object-cover"
            loading="lazy"
            referrerPolicy="no-referrer"
          />
          <div className="px-3 py-2 bg-black/80">
            <p className="text-[9px] tracking-[0.25em] font-black uppercase text-[#D4AF37]">Offset Print Production</p>
          </div>
        </motion.div>
      </motion.div>

      {/* Manual Navigation Arrows */}
      <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full border border-[#D4AF37]/30 bg-black/40 backdrop-blur-md text-[#D4AF37] flex items-center justify-center hover:bg-[#D4AF37] hover:text-black transition-all duration-300 group cursor-pointer shadow-xl hidden sm:flex"
        aria-label="Previous Slide"
      >
        <ChevronLeft size={22} className="group-hover:-translate-x-0.5 transition-transform" />
      </button>
      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full border border-[#D4AF37]/30 bg-black/40 backdrop-blur-md text-[#D4AF37] flex items-center justify-center hover:bg-[#D4AF37] hover:text-black transition-all duration-300 group cursor-pointer shadow-xl hidden sm:flex"
        aria-label="Next Slide"
      >
        <ChevronRight size={22} className="group-hover:translate-x-0.5 transition-transform" />
      </button>


      {/* Main Center Content */}
      <div className="relative z-10 my-auto pt-24 pb-8 text-center px-6 max-w-5xl mx-auto flex flex-col items-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col items-center"
          >
            {/* Live Indicator Badge if Video */}
            {HERO_SLIDES[current].type === "video" && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mb-4 flex items-center space-x-2 bg-black/80 backdrop-blur-md px-4 py-1.5 rounded-full border border-[#D4AF37]/50 shadow-lg"
              >
                <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-ping" />
                <span className="w-2.5 h-2.5 rounded-full bg-red-500" />
                <span className="text-[10px] tracking-[0.25em] font-extrabold uppercase text-[#D4AF37]">
                  LIVE PRODUCTION PLANT
                </span>
              </motion.div>
            )}

            {/* Sub-badge branding */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mb-3 inline-flex items-center gap-2 px-4 py-1 bg-black/60 border border-[#D4AF37]/40 rounded-xs text-[#D4AF37] text-[10px] sm:text-xs font-black tracking-[0.3em] uppercase font-display"
            >
              PREMIUM PACK CO • OKHLA PHASE-II
            </motion.div>

            {/* Slogan & Main Heading */}
            <h1 className="text-white text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-[0.12em] uppercase font-display drop-shadow-2xl mb-4 leading-tight">
              {HERO_SLIDES[current].title}
            </h1>
            
            <p className="text-gray-200 text-sm sm:text-lg md:text-xl font-medium tracking-wide mb-8 drop-shadow max-w-3xl leading-relaxed">
              {HERO_SLIDES[current].subtitle}
            </p>

            {/* Action Buttons with Glowing Gold Hover Effect */}
            <div className="flex flex-wrap items-center justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(212, 175, 55, 0.6)" }}
                whileTap={{ scale: 0.96 }}
                onClick={() => handleScrollToNext("intro")}
                className="px-9 py-4 bg-gradient-to-r from-[#D4AF37] via-[#f5b800] to-[#E6C687] text-black text-xs font-black tracking-[0.25em] uppercase rounded-xs transition-all duration-300 shadow-xl cursor-pointer"
              >
                EXPLORE SOLUTIONS
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
                onClick={openWhatsApp}
                className="px-9 py-4 border border-[#D4AF37]/80 bg-black/60 backdrop-blur-md text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black text-xs font-black tracking-[0.25em] uppercase rounded-xs transition-all duration-300 shadow-xl cursor-pointer"
              >
                WHATSAPP US
              </motion.button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Animated Statistics Strip Bar at Bottom of Hero */}
      <div className="relative z-10 max-w-6xl mx-auto w-full px-4 sm:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="bg-black/85 backdrop-blur-xl border border-[#D4AF37]/40 rounded-xs p-4 sm:p-6 shadow-2xl grid grid-cols-2 md:grid-cols-4 gap-6 divide-y md:divide-y-0 md:divide-x divide-neutral-800"
        >
          {STATS.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div key={idx} className="flex items-center space-x-3 pt-4 md:pt-0 first:pt-0 pl-0 md:first:pl-0 md:pl-6">
                <div className="p-2.5 bg-neutral-900 border border-[#D4AF37]/30 rounded-xs text-[#D4AF37]">
                  <Icon size={22} />
                </div>
                <div>
                  <div className="text-white text-xl sm:text-2xl font-black font-display tracking-wider">
                    <AnimatedCounter to={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-[10px] sm:text-xs font-bold text-[#D4AF37] tracking-widest uppercase">
                    {stat.label}
                  </div>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>

      {/* Scroll Down Arrow */}
      <motion.div 
        className="relative z-10 flex justify-center mt-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.0 }}
      >
        <button
          onClick={() => handleScrollToNext("intro")}
          className="w-10 h-10 rounded-full border border-[#D4AF37]/40 bg-black/60 backdrop-blur-md text-[#D4AF37] flex items-center justify-center shadow-lg hover:bg-[#D4AF37] hover:text-black transition-all duration-300 animate-bounce cursor-pointer"
          aria-label="Scroll down"
        >
          <ArrowDown size={18} />
        </button>
      </motion.div>


    </section>
  );
}
