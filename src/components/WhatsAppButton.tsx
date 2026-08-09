/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X } from "lucide-react";

interface WhatsAppButtonProps {
  phoneNumber?: string;
  defaultMessage?: string;
}

export default function WhatsAppButton({
  phoneNumber = "917503899662",
  defaultMessage = "Hello Premium Pack Co, I would like to inquire about your printing and packaging services."
}: WhatsAppButtonProps) {
  const [showTooltip, setShowTooltip] = useState(true);
  const [isOverBanner, setIsOverBanner] = useState(false);

  useEffect(() => {
    const handleCheckIntersection = () => {
      const bannerElem = document.getElementById("parallax-banner");
      const footerElem = document.getElementById("contact");

      if (!bannerElem && !footerElem) return;

      const observer = new IntersectionObserver(
        (entries) => {
          const isVisible = entries.some((entry) => entry.isIntersecting);
          setIsOverBanner(isVisible);
        },
        { threshold: 0.1 }
      );

      if (bannerElem) observer.observe(bannerElem);
      if (footerElem) observer.observe(footerElem);

      return () => {
        if (bannerElem) observer.unobserve(bannerElem);
        if (footerElem) observer.unobserve(footerElem);
      };
    };

    const cleanup = handleCheckIntersection();
    return () => {
      if (cleanup) cleanup();
    };
  }, []);

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`;

  if (isOverBanner) {
    return null;
  }

  return (
    <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end gap-2 select-none">
      
      {/* Optional Greeting Tooltip Badge */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="bg-neutral-900 text-white border border-[#25D366]/40 p-3 rounded-lg shadow-xl max-w-[220px] text-xs relative group flex items-start gap-2"
          >
            <button
              onClick={() => setShowTooltip(false)}
              className="absolute -top-2 -left-2 bg-neutral-800 text-gray-400 hover:text-white rounded-full p-0.5 border border-neutral-700 transition-colors"
              title="Close tooltip"
            >
              <X size={12} />
            </button>
            <div className="flex-1 space-y-0.5">
              <p className="font-bold text-[#25D366] text-[11px] uppercase tracking-wide font-display">
                Need Fast Quote / Info?
              </p>
              <p className="text-gray-300 text-[11px] leading-snug">
                Chat directly with us on <strong className="text-white font-semibold">WhatsApp</strong>!
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Action Button */}
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring" as const, stiffness: 260, damping: 20 }}
        className="relative group bg-[#25D366] text-white p-3.5 sm:p-4 rounded-full shadow-[0_4px_20px_rgba(37,211,102,0.5)] hover:shadow-[0_6px_28px_rgba(37,211,102,0.7)] transition-all duration-300 flex items-center justify-center cursor-pointer"
        aria-label="Chat on WhatsApp"
      >
        {/* Pulsing Outer Radar Ring */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366]/40 animate-ping opacity-75 pointer-events-none" />

        {/* WhatsApp Official SVG Logo */}
        <svg
          className="w-7 h-7 sm:w-8 sm:h-8 fill-current relative z-10"
          viewBox="0 0 24 24"
        >
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
        </svg>

        {/* Desktop Tooltip Hover Text */}
        <span className="hidden sm:inline-block max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-out whitespace-nowrap text-xs font-bold font-display uppercase tracking-wider pl-0 group-hover:pl-2">
          WhatsApp Us
        </span>
      </motion.a>
    </div>
  );
}
