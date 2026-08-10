/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from "react";
import { ArrowDown, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

// Importing the premium high-fidelity images

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
    alt: "Live production line printing and making premium boxes",
    title: "INSIDE OUR PRESS FLOOR",
    subtitle:
      "Live production: offset printing, foil stamping, die-cutting and box making under one roof.",
  },
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
                preload="auto"
                onCanPlay={(e) => e.currentTarget.play().catch(() => {})}
                className="w-full h-full object-cover object-center filter brightness-[0.45] contrast-[1.1]"
              >
                <source src="/videos/hero-production.mp4" type="video/mp4" />
              </video>
            ) : null}
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

      {/* Manual Navigation Arrows */}
      <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full border border-[#D4AF37]/30 bg-black/40 backdrop-blur-md text-[#D4AF37] flex items-center justify-center hover:bg-[#D4AF37] hover:text-black transition-all duration-300 group cursor-pointer shadow-xl hidden"
        aria-label="Previous Slide"
      >
        <ChevronLeft size={22} className="group-hover:-translate-x-0.5 transition-transform" />
      </button>
      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full border border-[#D4AF37]/30 bg-black/40 backdrop-blur-md text-[#D4AF37] flex items-center justify-center hover:bg-[#D4AF37] hover:text-black transition-all duration-300 group cursor-pointer shadow-xl hidden"
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
