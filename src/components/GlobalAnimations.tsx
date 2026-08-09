import React, { useEffect, useState } from "react";
import { motion, useScroll, useSpring, AnimatePresence } from "motion/react";
import jmtLogoImg from "../assets/images/jmt_logo_brand_1786107812360.jpg";

/**
 * 1. Scroll Progress Bar
 */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#8A7129] via-[#D4AF37] to-[#FDF0A6] z-[100] origin-left shadow-[0_0_12px_rgba(212,175,55,0.8)] pointer-events-none"
      style={{ scaleX }}
    />
  );
}

/**
 * 2. Subtle Custom Cursor Glow Follower
 */
export function MouseFollower() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.closest("button") ||
        target.closest("a") ||
        target.getAttribute("role") === "button"
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  return (
    <div className="hidden lg:block pointer-events-none fixed inset-0 z-[60] overflow-hidden">
      {/* Outer Glow Aura */}
      <motion.div
        className="absolute rounded-full bg-[radial-gradient(circle,rgba(212,175,55,0.15)_0%,rgba(0,0,0,0)_70%)] transition-transform duration-75 ease-out"
        animate={{
          x: mousePosition.x - (isHovered ? 48 : 32),
          y: mousePosition.y - (isHovered ? 48 : 32),
          width: isHovered ? 96 : 64,
          height: isHovered ? 96 : 64,
          opacity: isHovered ? 0.8 : 0.4,
        }}
        transition={{ type: "spring" as const, damping: 28, stiffness: 250, mass: 0.2 }}
      />
      {/* Inner Pinpoint Gold Ring */}
      <motion.div
        className="absolute rounded-full border border-[#D4AF37]/40 pointer-events-none"
        animate={{
          x: mousePosition.x - (isHovered ? 16 : 8),
          y: mousePosition.y - (isHovered ? 16 : 8),
          width: isHovered ? 32 : 16,
          height: isHovered ? 32 : 16,
          borderColor: isHovered ? "#f5b800" : "rgba(212,175,55,0.4)"
        }}
        transition={{ type: "spring" as const, damping: 22, stiffness: 300, mass: 0.1 }}
      />
    </div>
  );
}

/**
 * 3. Initial Luxury Brand Splash Loader Screen
 */
export function LuxuryLoader({ onFinish }: { onFinish?: () => void }) {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Brand splash screen stays visible for 10 seconds, then enters the site
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setLoading(false);
          if (onFinish) onFinish();
          return 100;
        }
        return prev + 1;
      });
    }, 100);

    return () => clearInterval(timer);
  }, [onFinish]);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="luxury-loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05, filter: "blur(8px)" }}
          transition={{ duration: 0.5, ease: "easeInOut" as const }}
          className="fixed inset-0 z-[200] bg-neutral-950 text-gray-100 flex flex-col items-center justify-center p-6 select-none"
        >
          {/* Logo Container */}
          <div className="relative mb-8 flex items-center justify-center">
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="rounded-xl overflow-hidden ring-1 ring-[#D4AF37]/30 shadow-[0_0_60px_rgba(212,175,55,0.25)]"
            >
              <img
                src={jmtLogoImg}
                alt="JMT Premium Box Printing & Making Solution Logo"
                className="h-40 sm:h-52 w-auto object-contain"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>

          {/* Brand Titles */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="text-center space-y-1 mb-8"
          >
            <h2 className="text-white text-xl sm:text-2xl font-black tracking-[0.25em] uppercase font-display">
              PREMIUM PACK CO
            </h2>
            <p className="text-[#D4AF37] text-xs font-bold tracking-[0.35em] uppercase font-display">
              JAI MAA TRADING • INDUSTRIAL PRINTING & PACKAGING
            </p>
          </motion.div>

          {/* Clean Progress Bar */}
          <div className="w-64 max-w-xs space-y-2">
            <div className="h-1.5 w-full bg-neutral-800 rounded-full overflow-hidden border border-neutral-700 p-[1px]">
              <motion.div
                className="h-full bg-gradient-to-r from-[#8A7129] via-[#D4AF37] to-[#FDF0A6] rounded-full"
                style={{ width: `${Math.min(progress, 100)}%` }}
                transition={{ ease: "linear" as const }}
              />
            </div>
            <div className="flex justify-between items-center text-[10px] font-mono tracking-widest text-gray-400">
              <span>LOADING WEBSITE</span>
              <span className="text-[#D4AF37] font-bold">{Math.min(progress, 100)}%</span>
            </div>
          </div>

        </motion.div>
      )}
    </AnimatePresence>
  );
}

/**
 * 4. Animated Background Ambient Lights & Particle Stars
 */
export function BackgroundParticleCanvas() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden opacity-30">
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/3 -right-32 w-96 h-96 bg-[#f5b800]/10 rounded-full blur-[120px] animate-pulse delay-1000" />
    </div>
  );
}
