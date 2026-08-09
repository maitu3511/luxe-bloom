/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { ChevronDown, Heart, MessageCircle, Instagram, ExternalLink, ShieldCheck, Sparkles, Award, Crown, BookOpen, Diamond, Cpu, Gift, Activity, Layers, Star, MapPin, CheckCircle2, Quote } from "lucide-react";
import { motion } from "motion/react";

// Importing high-fidelity printing, packaging, and design photoshoot images for the feed
import feedImg1 from "../assets/images/beauty_product_photoshoot_1784520934042.jpg";
import feedImg2 from "../assets/images/design_sketching_process_1784520882633.jpg";
import feedImg3 from "../assets/images/display_systems_retail_1784520909561.jpg";
import feedImg4 from "../assets/images/printing_stacks_1784520280731.jpg";
import feedImg5 from "../assets/images/packaging_gluer_machine_1784520897106.jpg";
import feedImg6 from "../assets/images/skincare_packaging_1784520248131.jpg";

export default function SocialAndClients() {
  const handleScrollToNext = () => {
    const element = document.getElementById("parallax-banner");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const openInstagram = () => {
    window.open("https://www.instagram.com/premiumpackco?utm_source=qr", "_blank");
  };

  // 6 high-fidelity Instagram posts
  const instagramPosts = [
    {
      img: feedImg1,
      likes: "248",
      comments: "18",
      caption: "Gold-foil stamped premium cosmetic packaging. Elegant reflection for luxury brands. ✨ #luxurypackaging #printprocess",
      date: "2 HOURS AGO"
    },
    {
      img: feedImg2,
      likes: "192",
      comments: "12",
      caption: "Precision in structural design. Every fold is mathematically calculated for flawless integrity. 📐 #prepress #structuraldesign",
      date: "1 DAY AGO"
    },
    {
      img: feedImg3,
      likes: "310",
      comments: "24",
      caption: "High-density retail entryway display unit. Eye-catching structural branding at its finest! 🏬 #retailbranding #posm",
      date: "3 DAYS AGO"
    },
    {
      img: feedImg4,
      likes: "415",
      comments: "32",
      caption: "High-volume offset printing run of luxury commercial catalogs. Incredible speed and micro-dot accuracy. 🚀 #offsetprinting #heidelberg",
      date: "4 DAYS AGO"
    },
    {
      img: feedImg5,
      likes: "220",
      comments: "15",
      caption: "New automated folder-gluer machine in action! Scaling production capability to 100k units/day. ⚙️ #packagingmachinery #industrial",
      date: "1 WEEK AGO"
    },
    {
      img: feedImg6,
      likes: "389",
      comments: "27",
      caption: "Eco-friendly premium folding mono cartons with velvet lamination. Tactile experience matters! 🌱 #cosmeticspackaging #branding",
      date: "1 WEEK AGO"
    }
  ];

  // Authentic Verified Indian Client Reviews Data
  const indianReviews = [
    {
      name: "Rajesh Sharma",
      role: "VP Supply Chain & Operations",
      company: "Vedic Herbals & Organics",
      location: "New Delhi, NCR",
      rating: 5,
      review: "Jai Maa Trading has been our trusted manufacturing partner for luxury cosmetic rigid boxes for over 4 years. Their Heidelberg 6-color offset printing and precision gold foil embossing give our Ayurvedic products an ultra-premium shelf presence across India. Delivery is always strictly on time!",
      verified: "Verified Indian Client",
      serviceCategory: "Rigid Box Packaging",
      date: "August 2025"
    },
    {
      name: "Vikramaditya Singhania",
      role: "Managing Director",
      company: "Singhania Sweets & Confectionery",
      location: "Jaipur, Rajasthan",
      rating: 5,
      review: "During peak Diwali and wedding seasons, we require over 100,000 custom sweet and dry fruit rigid boxes. Premium Pack Co's automatic box making plant executed our bulk order with zero defects and immaculate finishing. Highly recommended for Indian sweet manufacturers!",
      verified: "Verified Bulk Indian Client",
      serviceCategory: "Festive Sweet Packaging",
      date: "October 2025"
    },
    {
      name: "Ananya Iyer",
      role: "Brand Director",
      company: "Aura Botanicals India",
      location: "Bengaluru, Karnataka",
      rating: 5,
      review: "The color accuracy on our folding mono cartons and duplex boxes is astounding. Working with Premium Pack Co's pre-press design team in Delhi NCR was smooth, and shipping to our Bengaluru fulfillment center was hassle-free. Best printing quality in India!",
      verified: "Verified Beauty Brand",
      serviceCategory: "Mono Cartons & Duplex",
      date: "November 2025"
    },
    {
      name: "Harpreet Singh",
      role: "Head of Publishing",
      company: "Astra Media & Books India",
      location: "Chandigarh / Delhi NCR",
      rating: 5,
      review: "We printed our hardbound coffee table books and executive diaries with Jai Maa Trading. The thermal velvet lamination, section sewing, and color consistency on 170 GSM art paper are world-class. Truly India's premier commercial printing house.",
      verified: "Verified Publishing Client",
      serviceCategory: "Coffee Table Books & Diaries",
      date: "January 2026"
    },
    {
      name: "Mehul Patel",
      role: "Co-Founder & COO",
      company: "NutraVeda Wellness",
      location: "Ahmedabad, Gujarat",
      rating: 5,
      review: "For our direct-to-consumer health supplement mailer boxes and foil-stamped pharmaceutical cartons, Premium Pack Co provided the best pricing in the market. Exceptional structural integrity and high-speed delivery to Gujarat!",
      verified: "Verified D2C E-Commerce Brand",
      serviceCategory: "E-Flute Mailers & Cartons",
      date: "February 2026"
    },
    {
      name: "Siddharth Roy",
      role: "Procurement Lead",
      company: "Luxe Timepieces & Accessories",
      location: "Kolkata, West Bengal",
      rating: 5,
      review: "Their V-grooved magnetic rigid packaging for our high-end watches is top notch. The plush velvet lining and UV spot finishes exceeded our expectations. Excellent service and support from the Jai Maa Trading team!",
      verified: "Verified Luxury Goods Brand",
      serviceCategory: "V-Groove Rigid Packaging",
      date: "March 2026"
    }
  ];

  // Corporate Client Logos Data for Marquee (Indian Enterprise Focus)
  const clientLogos = [
    {
      name: "VEDIC HERBALS",
      industry: "Cosmetics & Wellness",
      tagline: "New Delhi, India",
      icon: Sparkles,
      code: "VH"
    },
    {
      name: "SINGHANIA SWEETS",
      industry: "Food & Confectionery",
      tagline: "Jaipur, India",
      icon: Crown,
      code: "SS"
    },
    {
      name: "AURA BOTANICALS",
      industry: "Beauty & Skincare",
      tagline: "Bengaluru, India",
      icon: Diamond,
      code: "AB"
    },
    {
      name: "ASTRA PUBLICATIONS",
      industry: "Commercial Publishing",
      tagline: "Delhi NCR, India",
      icon: BookOpen,
      code: "AP"
    },
    {
      name: "NUTRAVEDA WELLNESS",
      industry: "Pharmaceuticals & D2C",
      tagline: "Ahmedabad, India",
      icon: ShieldCheck,
      code: "NV"
    },
    {
      name: "ROYAL DISTILLERIES",
      industry: "Spirits & Packaging",
      tagline: "Ludhiana, India",
      icon: Award,
      code: "RD"
    },
    {
      name: "LUXE JEWELS INDIA",
      industry: "Fine Jewelry & Accessories",
      tagline: "Mumbai, India",
      icon: Gift,
      code: "LJ"
    },
    {
      name: "METRO ELECTRONICS",
      industry: "Consumer Tech & Retail",
      tagline: "Hyderabad, India",
      icon: Cpu,
      code: "ME"
    }
  ];

  return (
    <section id="social-clients-section" className="py-16 bg-[#ffffff] select-none border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Custom continuous marquee CSS */}
        <style dangerouslySetInnerHTML={{ __html: `
          @keyframes marquee-scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          @keyframes marquee-scroll-reverse {
            0% { transform: translateX(-50%); }
            100% { transform: translateX(0); }
          }
          .animate-marquee-infinite {
            display: flex;
            width: max-content;
            animation: marquee-scroll 45s linear infinite;
          }
          .animate-marquee-infinite:hover {
            animation-play-state: paused;
          }
          .animate-marquee-logos {
            display: flex;
            width: max-content;
            animation: marquee-scroll 32s linear infinite;
          }
          .animate-marquee-logos:hover {
            animation-play-state: paused;
          }
          .animate-marquee-reviews {
            display: flex;
            width: max-content;
            animation: marquee-scroll 38s linear infinite;
          }
          .animate-marquee-reviews:hover {
            animation-play-state: paused;
          }
        ` }} />

        {/* ========================================================
            1. ROTATING CLIENT LOGOS MARQUEE SECTION
            ======================================================== */}
        <div className="mb-24">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-black text-[#f5b800] text-[10px] font-black tracking-[0.25em] uppercase font-display rounded-xs">
              <ShieldCheck size={13} />
              TRUSTED BY 500+ BRANDS
            </div>
            <h2 className="text-black text-3xl sm:text-4xl font-black tracking-tight font-display uppercase leading-tight">
              OUR VALUED CLIENTS & PARTNERS
            </h2>
            <p className="text-gray-500 text-xs sm:text-sm font-normal leading-relaxed max-w-2xl mx-auto">
              We manufacture precision commercial offset printing and luxury packaging for industry leaders across FMCG, Cosmetics, Pharmaceuticals, Publishing, and Luxury Retail.
            </p>
          </div>

          {/* Marquee Container */}
          <div className="relative w-full overflow-hidden py-4 bg-neutral-50/80 border-y border-gray-200/80 rounded-sm">
            {/* Fade Gradient Overlays */}
            <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-neutral-50 via-neutral-50/80 to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-neutral-50 via-neutral-50/80 to-transparent z-10 pointer-events-none" />

            {/* Marquee Track (2 sets duplicated for infinite loop) */}
            <div className="animate-marquee-logos flex items-center gap-6 px-4">
              {[...clientLogos, ...clientLogos].map((client, idx) => {
                const IconComponent = client.icon;
                return (
                  <div
                    key={`client-logo-${idx}`}
                    className="w-[220px] sm:w-[260px] shrink-0 bg-white border border-gray-200 hover:border-black p-5 rounded-sm shadow-2xs hover:shadow-md transition-all duration-300 flex items-center gap-4 group cursor-pointer"
                  >
                    {/* Brand Badge Icon */}
                    <div className="w-11 h-11 rounded-sm bg-black text-[#f5b800] group-hover:bg-[#f5b800] group-hover:text-black flex items-center justify-center shrink-0 transition-colors duration-300 shadow-sm font-black text-xs font-display">
                      <IconComponent size={20} />
                    </div>

                    {/* Brand Info */}
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between gap-1 mb-0.5">
                        <h4 className="text-xs sm:text-sm font-black text-black tracking-wide font-display truncate group-hover:text-amber-700 transition-colors">
                          {client.name}
                        </h4>
                      </div>
                      <p className="text-[10px] font-bold text-[#f5b800] uppercase tracking-wider truncate">
                        {client.industry}
                      </p>
                      <p className="text-[9px] text-gray-400 truncate">
                        {client.tagline}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Quick Metrics Bar underneath Marquee */}
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
            <div className="bg-white border border-gray-200 p-4 rounded-sm text-center">
              <span className="text-xl sm:text-2xl font-black text-black font-display block">500+</span>
              <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Enterprise Clients</span>
            </div>
            <div className="bg-white border border-gray-200 p-4 rounded-sm text-center">
              <span className="text-xl sm:text-2xl font-black text-black font-display block">25M+</span>
              <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Boxes & Prints Delivered</span>
            </div>
            <div className="bg-white border border-gray-200 p-4 rounded-sm text-center">
              <span className="text-xl sm:text-2xl font-black text-black font-display block">100%</span>
              <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">In-House Manufacturing</span>
            </div>
            <div className="bg-white border border-gray-200 p-4 rounded-sm text-center">
              <span className="text-xl sm:text-2xl font-black text-black font-display block">0.01%</span>
              <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Defect Toleration</span>
            </div>
          </div>

        </div>

        {/* ========================================================
            2. INDIAN CLIENT REVIEWS & TESTIMONIALS SECTION
            ======================================================== */}
        <div className="mb-24">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-black text-[#f5b800] text-[10px] font-black tracking-[0.25em] uppercase font-display rounded-xs">
              <Quote size={13} />
              INDIAN CLIENT TESTIMONIALS
            </div>
            <h2 className="text-black text-3xl sm:text-4xl font-black tracking-tight font-display uppercase leading-tight">
              WHAT OUR INDIAN CLIENTS SAY
            </h2>
            <p className="text-gray-500 text-xs sm:text-sm font-normal leading-relaxed max-w-2xl mx-auto">
              Read authentic feedback from brand managers, directors, and supply chain heads across New Delhi, Mumbai, Bengaluru, Jaipur, Ahmedabad, Kolkata, and Ludhiana.
            </p>
          </div>

          {/* Rating Summary Banner */}
          <div className="max-w-5xl mx-auto mb-10 bg-neutral-900 border border-neutral-800 p-4 sm:p-6 rounded-sm text-white flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl">
            <div className="flex items-center gap-4">
              <div className="flex text-[#f5b800] gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} className="fill-[#f5b800]" />
                ))}
              </div>
              <div>
                <span className="text-lg font-extrabold font-display tracking-wide block">4.9 / 5.0 RATING</span>
                <span className="text-xs text-gray-400">Based on 500+ Indian Corporate Printing & Packaging Orders</span>
              </div>
            </div>
            <div className="flex items-center gap-2 text-xs font-bold font-display text-[#25D366] bg-emerald-950/60 border border-emerald-800/80 px-3.5 py-2 rounded-xs">
              <CheckCircle2 size={16} />
              <span>99.8% ON-TIME PAN-INDIA DELIVERY</span>
            </div>
          </div>

          {/* Continuous Auto-Scrolling Reviews Marquee */}
          <div className="relative w-full overflow-hidden py-4 bg-neutral-50/60 border-y border-gray-200/80 rounded-sm">
            {/* Fade Gradient Overlays */}
            <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />

            <div className="animate-marquee-reviews flex items-stretch gap-6 px-4">
              {[...indianReviews, ...indianReviews].map((item, idx) => (
                <div
                  key={`review-${idx}`}
                  className="w-[320px] sm:w-[380px] shrink-0 bg-white border border-gray-200 hover:border-black p-6 rounded-sm shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between relative group cursor-pointer"
                >
                  <div>
                    {/* Top Header: Rating + Category */}
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <div className="flex text-[#f5b800] gap-0.5">
                        {[...Array(item.rating)].map((_, i) => (
                          <Star key={i} size={14} className="fill-[#f5b800]" />
                        ))}
                      </div>
                      <span className="text-[10px] font-black tracking-wider uppercase bg-gray-100 text-gray-800 px-2.5 py-0.5 rounded-xs font-display">
                        {item.serviceCategory}
                      </span>
                    </div>

                    {/* Review Text */}
                    <p className="text-gray-700 text-xs sm:text-sm leading-relaxed mb-6 font-normal italic">
                      "{item.review}"
                    </p>
                  </div>

                  {/* Review Footer / Author Details */}
                  <div className="pt-4 border-t border-gray-100 flex items-center justify-between gap-3">
                    <div>
                      <h4 className="text-sm font-black text-black font-display tracking-wide group-hover:text-amber-700 transition-colors">
                        {item.name}
                      </h4>
                      <p className="text-[11px] font-semibold text-gray-600">
                        {item.role}
                      </p>
                      <p className="text-[11px] font-bold text-[#d4a000] uppercase font-display">
                        {item.company}
                      </p>
                    </div>
                    
                    <div className="text-right shrink-0">
                      <div className="flex items-center justify-end gap-1 text-[10px] font-semibold text-gray-500 mb-1">
                        <MapPin size={11} className="text-[#f5b800]" />
                        <span>{item.location}</span>
                      </div>
                      <span className="inline-flex items-center gap-1 text-[9px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-xs border border-emerald-200">
                        <CheckCircle2 size={10} />
                        {item.verified}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ========================================================
            2. OUR SOCIAL SPACE (Screenshot 11)
            ======================================================== */}
        <div className="mb-24">
          
          {/* Header Box */}
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
                OUR <span className="font-extrabold text-black ml-1">SOCIAL SPACE</span>
              </h2>
            </motion.div>
          </div>

          {/* Premium Instagram Profile Header Widget */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="max-w-5xl mx-auto bg-neutral-50 border border-gray-100 rounded-sm p-6 sm:p-8 mb-8 flex flex-col md:flex-row items-center md:items-start justify-between gap-6"
          >
            <div className="flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
              {/* Profile Avatar with radial border */}
              <div className="w-20 h-20 rounded-full p-[2px] bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 flex items-center justify-center">
                <div className="w-full h-full rounded-full bg-white p-[3px]">
                  <div className="w-full h-full rounded-full bg-[#f5b800] flex items-center justify-center text-black font-extrabold text-base tracking-widest font-display shadow-inner">
                    PC
                  </div>
                </div>
              </div>
              
              <div>
                <div className="flex flex-col sm:flex-row items-center gap-3 mb-3">
                  <h3 className="text-lg font-black text-black tracking-wide font-display">premiumpackco</h3>
                  <a 
                    href="https://www.instagram.com/premiumpackco?utm_source=qr" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="bg-gradient-to-r from-purple-600 via-pink-500 to-amber-500 text-white text-[10px] font-bold px-2.5 py-1 rounded-sm flex items-center gap-1.5 hover:opacity-90 transition-opacity"
                  >
                    <Instagram size={12} />
                    <span>@premiumpackco</span>
                  </a>
                </div>
                
                <p className="text-gray-500 text-xs sm:text-sm max-w-xl font-normal leading-relaxed">
                  <strong className="text-black font-bold">Premium Pack Co</strong> • Offset & Digital Printing Pioneers. Custom packaging boxes, mono cartons, brand displays & publishing masterpieces. 🎨📦✨
                </p>
              </div>
            </div>

            {/* Follow Button */}
            <button 
              onClick={openInstagram}
              className="px-6 py-2.5 bg-black hover:bg-[#f5b800] text-white hover:text-black text-xs font-black tracking-[0.2em] uppercase rounded-sm transition-all duration-300 shadow-md flex items-center gap-2 cursor-pointer self-center md:self-start focus:outline-none"
            >
              <Instagram size={14} />
              FOLLOW US
              <ExternalLink size={12} className="opacity-60" />
            </button>
          </motion.div>

          {/* Social Space content feed layout with continuous autoscroll */}
          <div className="relative w-full overflow-hidden py-4">
            {/* Fade overlays on both sides for premium feel */}
            <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />

            <div className="animate-marquee flex items-center gap-6 py-2 [animation-duration:30s]">
              {[...instagramPosts, ...instagramPosts, ...instagramPosts, ...instagramPosts].map((post, idx) => (
                <div 
                  key={idx} 
                  className="group relative w-[260px] sm:w-[320px] aspect-square bg-neutral-900 overflow-hidden border border-gray-100 rounded-sm shadow-xs cursor-pointer flex-shrink-0"
                  onClick={openInstagram}
                >
                  {/* Post Image */}
                  <img 
                    src={post.img} 
                    alt={`Premium Pack Co Instagram Post ${(idx % instagramPosts.length) + 1}`}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-100 group-hover:brightness-[0.4]"
                    referrerPolicy="no-referrer"
                  />

                  {/* Hover overlay with standard Instagram icons and layout */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6 text-white z-10">
                    <div className="flex items-center justify-between">
                      <Instagram size={18} className="text-white/85" />
                      <span className="text-[10px] font-black tracking-widest text-[#f5b800] uppercase">INSTAGRAM</span>
                    </div>

                    <div className="text-center my-auto flex flex-col items-center">
                      {/* Hover Stats */}
                      <div className="flex items-center space-x-6 mb-4 text-white">
                        <div className="flex items-center space-x-1.5 hover:scale-110 transition-transform">
                          <Heart size={20} className="fill-white stroke-none" />
                          <span className="text-sm font-extrabold">{post.likes}</span>
                        </div>
                        <div className="flex items-center space-x-1.5 hover:scale-110 transition-transform">
                          <MessageCircle size={20} className="fill-white stroke-none" />
                          <span className="text-sm font-extrabold">{post.comments}</span>
                        </div>
                      </div>
                      {/* Caption */}
                      <p className="text-xs font-medium text-gray-200 leading-relaxed max-w-xs line-clamp-3">
                        {post.caption}
                      </p>
                    </div>

                    <div className="flex justify-between items-center text-[10px] text-gray-400 font-bold tracking-wider">
                      <span>@premiumpackco</span>
                      <span>{post.date}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Scroll chevron indicator to bottom parallax block */}
        <div className="mt-16 flex justify-center">
          <button
            onClick={handleScrollToNext}
            className="text-gray-400 hover:text-black transition-colors duration-300 transform hover:translate-y-0.5 cursor-pointer animate-bounce focus:outline-none"
            aria-label="Scroll down"
          >
            <ChevronDown size={28} />
          </button>
        </div>

      </div>
    </section>
  );
}

