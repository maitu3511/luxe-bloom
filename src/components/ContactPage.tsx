/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { ChevronDown, MessageSquare, Phone, MapPin, Mail, Globe } from "lucide-react";
import { motion } from "motion/react";
import printingStacksImg from "../assets/images/printing_stacks_1784520280731.jpg";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    companyName: "",
    phone: "",
    email: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleScrollToContent = () => {
    const element = document.getElementById("contact-section");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.companyName || !formData.phone) {
      alert("Please fill in the required fields (Company Name and Phone).");
      return;
    }

    const messageText = `*New Inquiry from Website (Contact Form)*\n\n` +
      `*Company Name:* ${formData.companyName}\n` +
      `*Phone:* ${formData.phone}\n` +
      `*Email:* ${formData.email || "N/A"}\n` +
      `*Message:* ${formData.message || "N/A"}`;

    const whatsappUrl = `https://wa.me/917503899662?text=${encodeURIComponent(messageText)}`;
    window.open(whatsappUrl, "_blank");

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ companyName: "", phone: "", email: "", message: "" });
    }, 4000);
  };

  return (
    <div className="bg-[#ffffff] text-gray-800 antialiased font-sans select-none animate-fade-in">
      
      {/* ========================================================
          1. HERO NOIDA FACILITY COVER (Screenshot 1)
          ======================================================== */}
      <section className="relative h-[65vh] flex items-center justify-center overflow-hidden">
        {/* Background Grayscale Image representing facility */}
        <div className="absolute inset-0">
          <img
            src={printingStacksImg}
            alt="Premium Pack Co Okhla Building"
            className="w-full h-full object-cover object-center filter grayscale contrast-[1.1] brightness-[0.4]"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* Text Content in elegant 3D architectural sign style */}
        <div className="relative z-10 text-center px-4 max-w-4xl space-y-3">
          <h1 className="text-white text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-[0.15em] font-sans font-display uppercase">
            OKHLA PHASE-II
          </h1>
          <p className="text-gray-300 text-2xl sm:text-3xl md:text-4xl font-bold tracking-[0.3em] font-sans font-display uppercase">
            NEW DELHI
          </p>
        </div>

        {/* Scroll Chevron Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
          <button
            onClick={handleScrollToContent}
            className="w-10 h-10 rounded-full border border-white/20 bg-black/30 flex items-center justify-center text-white hover:text-[#f5b800] hover:border-[#f5b800] transition-all duration-300 cursor-pointer animate-bounce"
            aria-label="Scroll down to content"
          >
            <ChevronDown size={20} />
          </button>
        </div>
      </section>

      {/* ========================================================
          2. CONTACT LOCATIONS GRID (Screenshots 2 & 3)
          ======================================================== */}
      <section id="contact-section" className="py-24 px-6 sm:px-8 max-w-6xl mx-auto">
        
        {/* Page Title & Centered Divider */}
        <div className="text-center mb-16 space-y-8">
          <h2 className="text-2xl sm:text-3xl font-black tracking-[0.4em] text-black uppercase font-display">
            CONTACT
          </h2>
          <div className="flex justify-center">
            <div className="w-[1px] h-20 bg-gray-200" />
          </div>
        </div>

        {/* Single Headquarters Location & Contact Details */}
        <div className="max-w-3xl mx-auto bg-[#fafafa] border border-gray-200 rounded-sm p-8 sm:p-12 text-center space-y-8 shadow-xs">
          <div>
            <h3 className="text-base sm:text-lg font-black tracking-[0.25em] text-black uppercase font-display mb-1">
              PREMIUM PACK CO (JAI MAA TRADING)
            </h3>
            <p className="text-xs text-[#f5b800] font-bold tracking-widest uppercase">HEADQUARTERS & MANUFACTURING FACILITY</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4 border-t border-gray-200">
            <div>
              <p className="text-[10px] tracking-widest text-gray-400 font-extrabold uppercase mb-1">ADDRESS</p>
              <p className="text-xs sm:text-sm leading-relaxed text-gray-700 font-medium">
                19 DSIDC Shed, Basement, Front Office, <br />
                Okhla Industrial Area Phase-2, Scheme-3, <br />
                New Delhi - 110020
              </p>
            </div>

            <div>
              <p className="text-[10px] tracking-widest text-gray-400 font-extrabold uppercase mb-1">CALL US</p>
              <div className="flex flex-col space-y-1">
                <a href="tel:+917503899662" className="text-xs sm:text-sm font-bold text-gray-900 hover:text-[#f5b800] transition-colors font-mono">
                  +91 7503899662
                </a>
                <a href="tel:+918700823167" className="text-xs sm:text-sm font-bold text-gray-900 hover:text-[#f5b800] transition-colors font-mono">
                  +91 8700823167
                </a>
              </div>
            </div>

            <div>
              <p className="text-[10px] tracking-widest text-gray-400 font-extrabold uppercase mb-1">EMAIL</p>
              <a href="mailto:premiumpackco@gmail.com" className="text-xs sm:text-sm font-bold text-gray-900 hover:text-[#f5b800] transition-colors">
                premiumpackco@gmail.com
              </a>
            </div>
          </div>

          <div className="pt-4 border-t border-gray-200 flex flex-col items-center space-y-2">
            <p className="text-[10px] tracking-widest text-gray-400 font-extrabold uppercase">FOLLOW US ON SOCIALS</p>
            <a href="https://www.instagram.com/premiumpackco?utm_source=qr" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-full text-xs font-bold text-gray-800 hover:text-[#E1306C] hover:border-[#E1306C] transition-all shadow-2xs">
              <svg className="w-4 h-4 fill-current text-[#E1306C]" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
              <span>Instagram</span>
            </a>
          </div>
        </div>

      </section>

      {/* ========================================================
          3. WRITE TO US FORM SECTION (Screenshot 4)
          ======================================================== */}
      <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-[#fafafa] border border-gray-200 rounded-sm p-8 sm:p-12 md:p-16">
          
          <h2 className="text-center text-sm sm:text-base font-black tracking-[0.4em] text-black uppercase mb-12">
            WRITE TO US
          </h2>

          {submitted ? (
            <div className="text-center py-8 space-y-3">
              <div className="w-12 h-12 bg-[#f5b800]/10 text-[#f5b800] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg viewBox="0 0 24 24" className="w-6 h-6 fill-none stroke-current stroke-2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900">Thank you!</h3>
              <p className="text-xs sm:text-sm text-gray-500 max-w-sm mx-auto leading-relaxed">
                Your message has been sent successfully. Our team will get back to you shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-10">
              
              {/* Row 1: Company Name & Phone */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="relative border-b-2 border-gray-300 focus-within:border-[#D4AF37] transition-all py-2">
                  <input
                    type="text"
                    required
                    placeholder="Company Name *"
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    className="w-full bg-transparent text-xs sm:text-sm focus:outline-none placeholder-gray-400 font-bold text-gray-900"
                  />
                </div>
                <div className="relative border-b-2 border-gray-300 focus-within:border-[#D4AF37] transition-all py-2">
                  <input
                    type="tel"
                    required
                    placeholder="Phone *"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-transparent text-xs sm:text-sm focus:outline-none placeholder-gray-400 font-bold text-gray-900"
                  />
                </div>
              </div>

              {/* Row 2: Email */}
              <div className="relative border-b-2 border-gray-300 focus-within:border-[#D4AF37] transition-all py-2">
                <input
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-transparent text-xs sm:text-sm focus:outline-none placeholder-gray-400 font-bold text-gray-900"
                />
              </div>

              {/* Row 3: Message */}
              <div className="relative border-b-2 border-gray-300 focus-within:border-[#D4AF37] transition-all py-2">
                <textarea
                  rows={3}
                  placeholder="Write a message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-transparent text-xs sm:text-sm focus:outline-none placeholder-gray-400 font-bold text-gray-900 resize-none"
                />
              </div>

              {/* Submit Button */}
              <div className="flex justify-center pt-4">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(212, 175, 55, 0.5)" }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="bg-black hover:bg-[#D4AF37] hover:text-black text-[#D4AF37] font-extrabold tracking-[0.25em] text-[10px] sm:text-xs uppercase py-3.5 px-14 rounded-xs transition-all duration-300 cursor-pointer shadow-lg border border-[#D4AF37]"
                >
                  Submit Inquiry
                </motion.button>
              </div>

            </form>
          )}

        </div>
      </section>

      {/* ========================================================
          4. OUR LOCATION MAP SECTION (Screenshot 5)
          ======================================================= */}
      <section className="bg-white py-16 px-4 sm:px-6 lg:px-8 border-t border-gray-100">
        <div className="max-w-5xl mx-auto space-y-12">
          
          <h2 className="text-center text-sm sm:text-base font-black tracking-[0.4em] text-black uppercase">
            OUR LOCATION
          </h2>

          {/* Interactive Responsive Map Container */}
          <div className="w-full aspect-[21/9] min-h-[350px] bg-[#f0ede6] rounded-sm border border-gray-200 overflow-hidden relative shadow-xs">
            {/* Real Interactive Google Maps Iframe matching Okhla Phase-II location exactly */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14019.297746401037!2d77.26578051664402!3d28.529883523292443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce152436d4111%3A0xc0ff17c24a273a55!2sOkhla%20Phase%20II%2C%20Okhla%20Industrial%20Area%2C%20New%20Delhi%2C%20Delhi%20110020!5e0!3m2!1sen!2sin!4v1684534123456!5m2!1sen!2sin"
              className="absolute inset-0 w-full h-full border-none filter grayscale contrast-[1.05] brightness-[0.98]"
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Premium Pack Co Okhla Headquarters Map"
            />

            {/* Custom styled map info dialog matching the map balloon visual */}
            <div className="absolute top-4 left-4 bg-white/95 border border-gray-200 p-4 rounded-sm shadow-md max-w-xs backdrop-blur-xs hidden sm:block">
              <h3 className="text-xs font-black text-black tracking-wider uppercase mb-1">
                Premium Pack Co
              </h3>
              <p className="text-[10px] text-gray-500 leading-normal mb-3 font-semibold">
                19 DSIDC Shed, Basement, Front Office, Okhla Phase-2, Scheme-3, New Delhi - 110020
              </p>
              <a 
                href="https://maps.google.com/?q=Okhla+Phase+II+New+Delhi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[10px] tracking-widest font-black text-[#f5b800] hover:underline"
              >
                DIRECTIONS →
              </a>
            </div>

          </div>

          <p className="text-center text-[10px] tracking-widest text-gray-400 font-bold uppercase">
            Copyright © 2026 Premium Pack Co (Jai Maa Trading). All Rights Reserved.
          </p>

        </div>
      </section>

    </div>
  );
}
