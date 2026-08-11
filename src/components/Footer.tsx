/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { Phone, Mail, MapPin, Check } from "lucide-react";
import { motion } from "motion/react";
import jmtLogoImg from "../assets/images/jmt_logo_new.jpg";

export default function Footer() {
  const [formData, setFormData] = useState({
    companyName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email || !formData.phone) {
      alert("Please fill in the required fields (Email and Phone).");
      return;
    }

    setSubmitting(true);

    const messageText = `*New Inquiry from Website (Footer Form)*\n\n` +
      `*Company Name:* ${formData.companyName || "N/A"}\n` +
      `*Email:* ${formData.email}\n` +
      `*Phone:* ${formData.phone}\n` +
      `*Message:* ${formData.message || "N/A"}`;

    const whatsappUrl = `https://wa.me/917503899662?text=${encodeURIComponent(messageText)}`;
    window.open(whatsappUrl, "_blank");

    setTimeout(() => {
      setSubmitting(false);
      setSuccess(true);
      setFormData({ companyName: "", email: "", phone: "", message: "" });
      setTimeout(() => setSuccess(false), 5000);
    }, 1000);
  };

  return (
    <footer id="contact" className="bg-[#000000] text-gray-300 py-20 px-6 sm:px-8 lg:px-12 select-none border-t border-neutral-900 font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        
        {/* ==========================================
            COLUMN 1: PREMIUM PACK CO BIO
            ========================================== */}
        <div className="lg:col-span-5 space-y-6">
          <div className="flex items-center gap-3.5">
            <img 
              src={jmtLogoImg} 
              alt="JMT Premium Box Printing & Making Solution" 
              className="h-14 w-auto object-contain rounded-xs shadow-lg border border-[#D4AF37]/40"
              referrerPolicy="no-referrer"
            />
            <div className="flex flex-col justify-center leading-tight">
              <span className="text-white text-base sm:text-lg font-black tracking-wider uppercase font-display">
                PREMIUM PACK CO
              </span>
              <span className="text-[#D4AF37] text-xs font-bold tracking-[0.2em] uppercase font-display">
                JAI MAA TRADING
              </span>
            </div>
          </div>
          <div className="space-y-4 text-xs sm:text-sm leading-relaxed text-gray-400 font-normal">
            <p className="font-semibold text-gray-300">
              The Complete Solution <br />
              Of Digital, Offset Printing & Custom Packaging!
            </p>
            <p>
              We introduce ourselves as <strong className="font-semibold text-white">Premium Pack Co (Jai Maa Trading)</strong>. We are one of the leading Offset Printers based in Okhla Phase-II, New Delhi, backed by world-class, state-of-the-art printing facilities.
            </p>
            <p>
              Premium Pack Co offers services in a complete range of Digital and Offset printing & packaging areas with state-of-the-art, brand new imported equipment.
            </p>
          </div>
        </div>

        {/* ==========================================
            COLUMN 2: CONTACT INFORMATION (Screenshot 14)
            ========================================== */}
        <div className="lg:col-span-3 space-y-8">
          <h3 className="text-white text-base font-black tracking-[0.2em] uppercase font-display border-b border-neutral-900 pb-2">
            CONTACT
          </h3>
          
          <div className="space-y-6 text-xs sm:text-sm">
            {/* Telephone */}
            <div className="space-y-1">
              <h4 className="text-white font-extrabold tracking-wider text-[11px] uppercase">
                Telephone
              </h4>
              <p className="text-gray-400 hover:text-[#f5b800] transition-colors duration-200 flex flex-col space-y-1">
                <a href="tel:+917503899662">+91 7503899662</a>
              </p>
            </div>

            {/* Email */}
            <div className="space-y-1">
              <h4 className="text-white font-extrabold tracking-wider text-[11px] uppercase">
                Email
              </h4>
              <p className="text-gray-400 hover:text-[#f5b800] transition-colors duration-200">
                <a href="mailto:premiumpackco@gmail.com">premiumpackco@gmail.com</a>
              </p>
            </div>

            {/* Address */}
            <div className="space-y-1">
              <h4 className="text-white font-extrabold tracking-wider text-[11px] uppercase">
                Address
              </h4>
              <p className="text-gray-400 leading-relaxed">
                19 DSIDC Shed, Basement, Front Office, <br />
                Okhla Industrial Area Phase-2, Scheme-3, <br />
                New Delhi - 110020
              </p>
            </div>

            {/* Socials Media Line */}
            <div className="space-y-2 pt-2">
              <h4 className="text-white font-extrabold tracking-wider text-[11px] uppercase">
                Socials
              </h4>
              <div className="flex items-center space-x-4">
                {/* Instagram */}
                <a href="https://www.instagram.com/premiumpackco?utm_source=qr" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-gray-400 hover:text-[#e1306c] hover:border-[#e1306c] hover:bg-[#e1306c]/5 transition-all duration-300">
                  <span className="sr-only">Instagram</span>
                  <svg viewBox="0 0 24 24" className="w-4.5 h-4.5 fill-none stroke-current stroke-2 stroke-linecap-round stroke-linejoin-round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37zM17.5 6.5h.01" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ==========================================
            COLUMN 3: WRITE TO US FORM (Screenshot 14)
            ========================================== */}
        <div className="lg:col-span-4 space-y-6">
          <h3 className="text-white text-base font-black tracking-[0.2em] uppercase font-display border-b border-neutral-900 pb-2">
            WRITE TO US
          </h3>

          {success ? (
            <div className="p-6 bg-neutral-900 border border-[#25d366]/30 text-center rounded-sm space-y-3 animate-fade-in">
              <div className="w-12 h-12 bg-[#25d366]/10 text-[#25d366] rounded-full flex items-center justify-center mx-auto">
                <Check size={24} />
              </div>
              <h4 className="text-white font-bold text-sm">Message Sent Successfully!</h4>
              <p className="text-gray-400 text-xs">Thank you for writing to Premium Pack Co. Our representative will contact you soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5 text-xs sm:text-sm">
              
              {/* Company Name */}
              <div className="space-y-1">
                <input
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleInputChange}
                  placeholder="Company Name"
                  className="w-full bg-transparent border-b border-neutral-800 focus:border-[#f5b800] py-2 text-white outline-none placeholder-gray-600 transition-colors duration-200"
                />
              </div>

              {/* Email* */}
              <div className="space-y-1">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Email*"
                  required
                  className="w-full bg-transparent border-b border-neutral-800 focus:border-[#f5b800] py-2 text-white outline-none placeholder-gray-600 transition-colors duration-200"
                />
              </div>

              {/* Phone* */}
              <div className="space-y-1">
                <span className="block text-[10px] text-gray-500 uppercase font-semibold">Phone *</span>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Phone"
                  required
                  className="w-full bg-transparent border-b border-neutral-800 focus:border-[#f5b800] py-1 text-white outline-none placeholder-gray-600 transition-colors duration-200"
                />
              </div>

              {/* Write a message */}
              <div className="space-y-1">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Write a message"
                  rows={2}
                  className="w-full bg-transparent border-b border-neutral-800 focus:border-[#f5b800] py-2 text-white outline-none placeholder-gray-600 transition-colors duration-200 resize-none"
                />
              </div>

              {/* SUBMIT BUTTON - Glowing gold animated block */}
              <div className="pt-2">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(212, 175, 55, 0.5)" }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  disabled={submitting}
                  className="px-10 py-3.5 bg-gradient-to-r from-[#D4AF37] via-[#f5b800] to-[#E6C687] text-black text-xs font-black tracking-widest uppercase rounded-[4px] shadow-lg transition-all duration-200 cursor-pointer disabled:opacity-50"
                >
                  {submitting ? "Sending..." : "Submit Inquiry"}
                </motion.button>
              </div>

            </form>
          )}

        </div>

      </div>

      {/* Copy-right line */}
      <div className="max-w-7xl mx-auto border-t border-neutral-950 mt-16 pt-8 text-center text-gray-600 text-[10px] tracking-widest uppercase">
        <p>© {new Date().getFullYear()} Premium Pack Co (Jai Maa Trading). All rights reserved.</p>
      </div>
    </footer>
  );
}
