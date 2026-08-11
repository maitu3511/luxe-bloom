/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import jmtLogoImg from "../assets/images/jmt_logo_new.jpg";

interface HeaderProps {
  currentPage: "home" | "services" | "projects" | "about" | "machinery" | "faqs" | "contact";
  onNavigate: (targetId: string) => void;
}

export default function Header({ currentPage, onNavigate }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { label: "HOME", targetId: "home" },
    { label: "ABOUT", targetId: "about" },
    { label: "SERVICES", targetId: "services" },
    { label: "PROJECTS", targetId: "projects" },
    { label: "MACHINERY", targetId: "machinery" },
    { label: "FAQ'S", targetId: "faqs" },
    { label: "CONTACT", targetId: "contact" },
  ];

  const handleItemClick = (targetId: string) => {
    setMobileMenuOpen(false);
    onNavigate(targetId);
  };

  return (
    <header 
      id="header" 
      className={`sticky top-0 z-50 transition-all duration-300 select-none ${
        isScrolled 
          ? "bg-black/90 backdrop-blur-md border-b border-[#D4AF37]/30 shadow-[0_10px_30px_rgba(0,0,0,0.8)]" 
          : "bg-[#000000] border-b border-neutral-900 shadow-lg"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo - Exact JMT Luxury Metallic Logo */}
          <motion.div 
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="flex-shrink-0 cursor-pointer flex items-center gap-3 group" 
            onClick={() => handleItemClick("home")}
          >
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#D4AF37] to-[#f5b800] rounded-xs opacity-0 group-hover:opacity-40 blur-sm transition-opacity duration-300" />
              <img 
                src={jmtLogoImg} 
                alt="JMT Premium Box Printing & Making Solution" 
                className="relative h-11 sm:h-13 w-auto object-contain rounded-xs shadow-md border border-[#D4AF37]/40 group-hover:border-[#D4AF37] transition-all"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Company Name & Tagline Next to Logo */}
            <div className="flex flex-col justify-center leading-tight">
              <span className="text-white text-xs sm:text-sm lg:text-base font-black tracking-wider uppercase font-display group-hover:text-[#f5b800] transition-colors">
                PREMIUM PACK CO
              </span>
              <span className="text-[#D4AF37] text-[9px] sm:text-[10px] lg:text-[11px] font-bold tracking-[0.2em] uppercase font-display">
                JAI MAA TRADING
              </span>
            </div>
          </motion.div>

          {/* Desktop Menu - Replicated with animated gold layout underline */}
          <nav className="hidden lg:flex space-x-6 lg:space-x-8 items-center">
            {menuItems.map((item) => {
              const isActive = currentPage === item.targetId;

              return (
                <button
                  key={item.label}
                  onClick={() => handleItemClick(item.targetId)}
                  className={`relative text-xs lg:text-sm font-bold tracking-widest cursor-pointer transition-all duration-200 py-2.5 ${
                    isActive
                      ? "text-[#D4AF37]"
                      : "text-gray-200 hover:text-[#f5b800]"
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && (
                    <motion.div
                      layoutId="headerNavUnderline"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#8A7129] via-[#D4AF37] to-[#f5b800] shadow-[0_0_8px_#D4AF37]"
                      transition={{ type: "spring" as const, stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-300 hover:text-[#D4AF37] focus:outline-none p-2 rounded-md transition-colors"
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" as const }}
            className="lg:hidden bg-black/95 backdrop-blur-xl border-t border-[#D4AF37]/30 px-4 pt-4 pb-6 space-y-2 overflow-hidden shadow-2xl"
          >
            {menuItems.map((item) => {
              const isActive = currentPage === item.targetId;

              return (
                <button
                  key={item.label}
                  onClick={() => handleItemClick(item.targetId)}
                  className={`block w-full text-left px-4 py-3 rounded-xs text-sm font-bold tracking-widest transition-all duration-200 border-l-2 ${
                    isActive
                      ? "text-[#D4AF37] bg-neutral-900/80 border-[#D4AF37]"
                      : "text-white hover:bg-neutral-900/50 hover:text-[#f5b800] border-transparent"
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
