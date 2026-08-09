/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { Plus, Minus, Star, Search, Printer, Package, FileText, ShoppingBag, HelpCircle, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

type FAQItem = {
  num: string;
  question: string;
  answer: string;
};

type FAQData = {
  [category: string]: FAQItem[];
};

interface FaqsPageProps {
  onNavigateContact?: () => void;
}

export default function FaqsPage({ onNavigateContact }: FaqsPageProps) {
  const [activeTab, setActiveTab] = useState<string>("GENERAL");
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);
  const [searchQuery, setSearchQuery] = useState<string>("");

  const tabs = [
    "GENERAL",
    "PRINTING SERVICES",
    "PACKAGING SERVICES",
    "ARTWORK & SAMPLES",
    "ORDER & DELIVERY"
  ];

  const faqData: FAQData = {
    GENERAL: [
      {
        num: "01",
        question: "Who is Premium Pack Co and where is your plant located?",
        answer: "Premium Pack Co (a division of Jai Maa Trading) is a premier commercial printing and luxury packaging manufacturer headquartered in Okhla Industrial Area Phase-II, New Delhi, India. Our integrated facility houses multi-color Heidelberg offset presses, Konica Minolta digital printers, automated rigid box wrapping machinery, and complete post-press finishing lines."
      },
      {
        num: "02",
        question: "What core services do you offer?",
        answer: "We specialize in two core divisions:\n1. Printing Services: Catalogues, Brochures, Leaflets, Roll-up Standies, Flex Banners, Presentation Folders, Books, Wall/Table Calendars, Diaries, Tent Cards, Danglers, Marketing Collaterals, Coffee Table Books, Writing Pads, Posters, Pamphlets, Annual Reports, and custom print jobs.\n2. Packaging Services: Rigid Boxes, Gift Boxes, Chocolate Boxes, Customized Cosmetic/Liquor Boxes, Jewellery Boxes, Mono Cartons & Duplex Boxes, Cake & Bakery Boxes, MDF Wooden Boxes, and E-Flute Corrugation Shipping Boxes."
      },
      {
        num: "03",
        question: "Can I visit your plant to inspect live press runs?",
        answer: "Yes, absolutely! We welcome brand managers, publishers, procurement teams, and corporate representatives to visit our facility in Okhla Phase-II, New Delhi for live press passes, color matching, and inspecting automated rigid box production lines."
      },
      {
        num: "04",
        question: "What makes Premium Pack Co different from other printers?",
        answer: "We offer 100% in-house manufacturing under one roof—from pre-press CAD structural dieline engineering and offset printing to V-grooving, thermal lamination, hot foil stamping, and automated box assembly. This guarantees strict quality control, color precision, and rapid production turnaround."
      },
      {
        num: "05",
        question: "Are your packaging and printing products eco-friendly?",
        answer: "Yes, we prioritize sustainability by utilizing FSC-certified paperboard, biodegradable water-based glues, recyclable corrugated flutes, and vegetable-based offset inks upon request."
      }
    ],
    "PRINTING SERVICES": [
      {
        num: "01",
        question: "What types of commercial printing items do you produce?",
        answer: "Our printing services cover a complete marketing and publishing lineup including Catalogues, Brochures, Leaflets, Standies, Flex Banners, Presentation Folders, Books, Wall & Table Calendars, Executive Diaries, Tent Cards, Ceiling Danglers, Marketing Collaterals, Coffee Table Books, Writing Pads, Posters, Pamphlets, Annual Reports, and custom corporate stationery."
      },
      {
        num: "02",
        question: "What offset printing machinery do you operate?",
        answer: "Our press floor features Heidelberg Six Color (28'' x 40''), Heidelberg Four Color (20'' x 28.5''), Heidelberg Single Color (20'' x 28.5'') presses, and Konica Minolta production digital presses for short runs and variable data printing (VDP)."
      },
      {
        num: "03",
        question: "Can you match exact Pantone (PMS) brand colors?",
        answer: "Yes, our in-house ink mixing laboratory uses spectral densitometers and spectrophotometers to guarantee 100% Pantone (PMS) spot color matching across all paper substrates."
      },
      {
        num: "04",
        question: "What paper types and GSM weights can you print on?",
        answer: "We print on a wide spectrum of paper stocks from 60 GSM lightweight bible and insert paper up to 450 GSM heavy cardstock, including gloss/matte art paper, Kraft, metallic sheets, textured velvet papers, and duplex boards."
      },
      {
        num: "05",
        question: "What special post-press finishing effects can be applied?",
        answer: "We offer Thermal Soft-Touch/Matt/Gloss Lamination, Spot UV varnish, 3D raised texture varnish, Gold & Silver Hot Foil Stamping, Blind & Combination Embossing/Debossing, Die-cutting, and Section-Sewn Hardbound Binding."
      }
    ],
    "PACKAGING SERVICES": [
      {
        num: "01",
        question: "What luxury and custom box types do you manufacture?",
        answer: "We manufacture Rigid Kappa Board Boxes, Gift Boxes, Chocolate & Sweets Boxes, Customized Product Boxes, Jewellery Cases, Mono Cartons & Duplex Boxes, Food & Cake Boxes, MDF Wooden Boxes, and Printed Corrugation Mailer Boxes."
      },
      {
        num: "02",
        question: "What is the structural difference between a Rigid Box and a Mono Carton?",
        answer: "Rigid Boxes are constructed from dense, rigid Kappa chipboard (1.5mm–3.5mm thick) wrapped in premium paper for luxury goods (jewelry, electronics, chocolates). Mono Cartons (folding cartons) are made from single-layer paperboard (250–450 GSM), ship flat, and are assembled at product fill time."
      },
      {
        num: "03",
        question: "Are your bakery and chocolate boxes food-grade certified?",
        answer: "Yes, all our food and confectionery packaging uses food-grade certified paperboards, oil/grease-resistant coatings, and non-toxic, odorless food-safe printing inks."
      },
      {
        num: "04",
        question: "How do you achieve sharp 90-degree outer corners on rigid boxes?",
        answer: "We utilize automated V-Grooving machinery that carves precise 90° or 120° V-channels into heavy Kappa chipboard and MDF, allowing the box walls to fold into crisp, sharp perpendicular corners."
      },
      {
        num: "05",
        question: "What is your daily production capacity for rigid boxes?",
        answer: "With our automated rigid box forming line and visual camera positioning system, we produce up to 12,000 luxury rigid boxes per day."
      }
    ],
    "ARTWORK & SAMPLES": [
      {
        num: "01",
        question: "What file formats should I submit for printing and packaging?",
        answer: "We accept print-ready vector files in PDF (PDF/X-1a preferred), Adobe Illustrator (.AI), Adobe Photoshop (.PSD), or EPS formats. Ensure all fonts are converted to outlines and images are embedded at 300 DPI resolution."
      },
      {
        num: "02",
        question: "Should artwork be set up in CMYK or RGB?",
        answer: "All artwork files must be provided in CMYK color mode. Any RGB or HEX colors will automatically be converted to CMYK for offset printing, which may cause minor color shifts."
      },
      {
        num: "03",
        question: "Do you provide dielines and structural CAD samples?",
        answer: "Yes! Once box dimensions are finalized, our engineering team provides precise 2D vector dielines for your graphic designer. We also produce unprinted 3D physical CAD mockups for size and fit testing."
      },
      {
        num: "04",
        question: "Can I get a fully printed pre-production sample before mass order?",
        answer: "Yes, we can produce digitally printed or offset-proofed physical prototypes with lamination and foil stamping for your final board-level approval prior to mass production."
      }
    ],
    "ORDER & DELIVERY": [
      {
        num: "01",
        question: "What is the Minimum Order Quantity (MOQ)?",
        answer: "Our standard MOQ is:\n• Mono Cartons & Commercial Printing: 1,000 units\n• Luxury Rigid Boxes & Custom Gift Boxes: 500 units\nFor special sampling, prototypes, or urgent corporate events, smaller quantities can be accommodated upon request."
      },
      {
        num: "02",
        question: "What is the typical production lead time?",
        answer: "Standard production lead time is 7 to 10 working days for commercial offset printing and 10 to 14 working days for custom rigid packaging boxes after artwork approval and sample sign-off. Express rush timelines are available."
      },
      {
        num: "03",
        question: "How do I request an accurate price quotation?",
        answer: "You can click 'Request Quote' on our website, call our team directly, or email us with your product dimensions (Length x Width x Height), required quantity, paper/board preference, and finishing details. We provide written quotations within 24 hours."
      },
      {
        num: "04",
        question: "Do you deliver across India and handle export packaging?",
        answer: "Yes, we ship nationwide across India via trusted logistics partners with palletized protective wrapping. We also produce export-compliant heavy-duty corrugated shipping cartons."
      }
    ]
  };

  const handleToggle = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const handleEmailScroll = () => {
    if (onNavigateContact) {
      onNavigateContact();
    } else {
      const contactForm = document.getElementById("contact");
      if (contactForm) {
        contactForm.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  // Filter FAQs if user types in search bar
  const currentCategoryFaqs = faqData[activeTab] || [];
  const filteredFaqs = searchQuery.trim()
    ? Object.values(faqData).flat().filter(item => 
        item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.answer.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : currentCategoryFaqs;

  return (
    <div className="bg-[#fcfcfc] text-gray-800 antialiased font-sans select-none min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      
      {/* ========================================================
          1. HEADER TITLE SEGMENT
          ======================================================== */}
      <div className="max-w-5xl mx-auto pt-10 pb-12 grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
        
        {/* Left column title */}
        <div className="md:col-span-7 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-black text-[#f5b800] text-[10px] font-black tracking-[0.2em] uppercase font-display">
            <HelpCircle size={13} />
            PREMIUM PACK CO SUPPORT & GUIDANCE
          </div>
          <h1 className="text-black text-4xl sm:text-6xl font-black tracking-tight font-display leading-[1.08] uppercase">
            FREQUENTLY{"\n"}ASKED QUESTIONS
          </h1>
        </div>

        {/* Right column description & search */}
        <div className="md:col-span-5 md:pt-8 space-y-4">
          <p className="text-gray-600 text-xs sm:text-sm leading-relaxed font-normal">
            Find immediate answers about our commercial printing press, luxury rigid box packaging, materials, dielines, MOQs, and plant facilities in <strong className="text-black font-extrabold">Okhla Phase-II, New Delhi</strong>.
          </p>

          {/* Quick Search Bar */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search FAQ keywords (e.g., Rigid Box, Heidelberg, MOQ)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 bg-white border border-gray-300 rounded-sm text-xs text-gray-800 focus:outline-none focus:border-black font-medium"
            />
            <Search size={15} className="absolute left-3 top-3 text-gray-400" />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery("")} 
                className="absolute right-3 top-2.5 text-xs text-gray-400 hover:text-black font-bold cursor-pointer"
              >
                CLEAR
              </button>
            )}
          </div>
        </div>

      </div>

      {/* ========================================================
          2. DIVISION TABS (HIDDEN IF SEARCH IS ACTIVE)
          ======================================================== */}
      {!searchQuery && (
        <div className="max-w-5xl mx-auto border-t border-b border-gray-200/90 py-4 mb-10 overflow-x-auto scrollbar-none">
          <div className="flex space-x-6 sm:space-x-10 min-w-max">
            {tabs.map((tab) => {
              const isActive = activeTab === tab;
              return (
                <button
                  key={tab}
                  onClick={() => {
                    setActiveTab(tab);
                    setExpandedIndex(0);
                  }}
                  className={`text-[10px] sm:text-xs font-black tracking-[0.2em] transition-all duration-200 cursor-pointer pb-1 border-b-2 uppercase ${
                    isActive
                      ? "text-[#f5b800] border-[#f5b800]"
                      : "text-gray-400 border-transparent hover:text-black"
                  }`}
                >
                  {tab} ({faqData[tab]?.length || 0})
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* ========================================================
          3. ACCORDION FAQ ROW LIST
          ======================================================== */}
      <div className="max-w-5xl mx-auto space-y-0 border-b border-gray-200/60 mb-16">
        {filteredFaqs.length === 0 ? (
          <div className="py-12 text-center text-gray-500 text-xs">
            No FAQs matching "{searchQuery}". Please try searching for "Rigid Box", "Catalogues", or "MOQ".
          </div>
        ) : (
          filteredFaqs.map((item, index) => {
            const isExpanded = expandedIndex === index;
            return (
              <div 
                key={index} 
                className="border-t border-gray-200/60 transition-colors duration-300 hover:bg-neutral-50/50"
              >
                {/* Row Header trigger button */}
                <button
                  onClick={() => handleToggle(index)}
                  className="w-full text-left py-6 flex items-center justify-between gap-6 cursor-pointer"
                >
                  <div className="flex items-center space-x-6 sm:space-x-10">
                    {/* Number prefix */}
                    <span className="text-xs sm:text-sm font-black text-[#f5b800] font-mono tracking-wider">
                      {item.num}
                    </span>
                    {/* Question text */}
                    <span className="text-sm sm:text-base font-bold text-gray-900 tracking-wide font-display">
                      {item.question}
                    </span>
                  </div>

                  {/* Round Plus/Minus button */}
                  <div className="shrink-0 w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-black hover:text-[#f5b800] hover:border-black transition-all duration-300">
                    {isExpanded ? <Minus size={14} /> : <Plus size={14} />}
                  </div>
                </button>

                {/* Collapsible expandable content */}
                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" as const }}
                      className="overflow-hidden"
                    >
                      <div className="pl-12 sm:pl-16 pr-10 pb-8">
                        <p className="text-gray-700 text-xs sm:text-sm leading-[1.8] font-normal tracking-wide whitespace-pre-line max-w-4xl bg-white p-5 border-l-2 border-[#f5b800] shadow-2xs">
                          {item.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

              </div>
            );
          })
        )}
      </div>

      {/* ========================================================
          3.5 INFINITE AUTO-SCROLLING CLIENT REVIEWS
          ======================================================== */}
      <div className="max-w-7xl mx-auto mb-20 overflow-hidden relative">
        <div className="text-center mb-12">
          <p className="text-[10px] tracking-[0.3em] uppercase text-gray-400 font-bold mb-2">
            CLIENT SATISFACTION
          </p>
          <h2 className="text-black text-3xl sm:text-4xl font-black tracking-tight font-display uppercase">
            WHAT OUR CLIENTS SAY
          </h2>
          <div className="w-16 h-[3px] bg-[#f5b800] mx-auto mt-4 rounded-full" />
        </div>

        {/* Marquee Track containing 2 copies for infinite seamless effect */}
        <div className="relative w-full overflow-hidden py-4">
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#fcfcfc] via-[#fcfcfc]/80 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#fcfcfc] via-[#fcfcfc]/80 to-transparent z-10 pointer-events-none" />

          <div className="animate-marquee flex gap-6">
            
            {/* Set 1 */}
            {[
              {
                name: "Rajesh Kumar",
                role: "Procurement Lead",
                company: "Heritage Foods Ltd.",
                review: "The custom folding cartons and rigid sweet boxes Premium Pack Co developed exceeded all expectations. Crisp print quality, precise spot UV finish, and flawless delivery.",
                rating: 5,
                tag: "Food & Confectionery"
              },
              {
                name: "Sonia Dhillon",
                role: "Brand Manager",
                company: "Aura Botanicals",
                review: "Our premium rigid cosmetics boxes are absolute works of art! The gold foil stamping and V-grooved sharp 90-degree corners give our skincare line an extraordinary luxury feel.",
                rating: 5,
                tag: "Cosmetics & Beauty"
              },
              {
                name: "Dr. Anand Sen",
                role: "Operations Director",
                company: "Zenith Pharmaceuticals",
                review: "Highly professional pre-press and offset printing. The pharmaceutical cartons and medical inserts feature razor-sharp readability and sturdy structure. Express turnaround!",
                rating: 5,
                tag: "Pharmaceutical"
              },
              {
                name: "Vikram Malhotra",
                role: "Chief Publisher",
                company: "Apex Media & Publishing",
                review: "We printed multiple coffee table books and art catalogs with Premium Pack Co. Their multi-color Heidelberg offset press capabilities in Okhla are truly unmatched.",
                rating: 5,
                tag: "Publishing"
              },
              {
                name: "Meera Nair",
                role: "Founder",
                company: "The Cocoa Atelier",
                review: "Excellent response times and attention to detail. The food-grade multi-cavity chocolate boxes they manufactured keep our artisanal chocolates intact and fresh.",
                rating: 5,
                tag: "Gourmet Chocolates"
              },
              {
                name: "Devendra Verma",
                role: "Supply Chain Manager",
                company: "Veda Health & Wellness",
                review: "Consistently flawless quality across multiple bulk batches of custom mono cartons and product brochures. Spectral color accuracy matches our brand standards.",
                rating: 5,
                tag: "Healthcare & Wellness"
              }
            ].map((item, idx) => (
              <div 
                key={`review-a-${idx}`} 
                className="w-[340px] sm:w-[410px] shrink-0 bg-white border border-gray-200 p-6 sm:p-7 rounded-sm shadow-xs hover:shadow-md hover:border-gray-300 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Stars Rating & Tag */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-1 text-[#f5b800]">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star key={i} size={15} fill="currentColor" stroke="none" />
                      ))}
                    </div>
                    <span className="text-[9px] font-black tracking-widest text-[#f5b800] bg-yellow-50/50 px-2 py-1 rounded-sm border border-[#f5b800]/15 uppercase font-display">
                      {item.tag}
                    </span>
                  </div>

                  {/* Review Text */}
                  <p className="text-gray-700 text-xs sm:text-sm leading-relaxed mb-6 font-normal italic">
                    "{item.review}"
                  </p>
                </div>

                {/* Reviewer Details */}
                <div className="border-t border-gray-100 pt-4 flex items-center justify-between">
                  <div>
                    <h4 className="text-sm font-extrabold text-black tracking-wide font-display">
                      {item.name}
                    </h4>
                    <p className="text-[10px] text-gray-400 font-medium tracking-wide">
                      {item.role}
                    </p>
                  </div>
                  <span className="text-[10px] font-bold text-gray-600 uppercase tracking-wider bg-neutral-50 px-2.5 py-1 rounded-sm border border-neutral-200 font-display">
                    {item.company}
                  </span>
                </div>
              </div>
            ))}

            {/* Set 2 (Duplicate Copy for Marquee Loop) */}
            {[
              {
                name: "Rajesh Kumar",
                role: "Procurement Lead",
                company: "Heritage Foods Ltd.",
                review: "The custom folding cartons and rigid sweet boxes Premium Pack Co developed exceeded all expectations. Crisp print quality, precise spot UV finish, and flawless delivery.",
                rating: 5,
                tag: "Food & Confectionery"
              },
              {
                name: "Sonia Dhillon",
                role: "Brand Manager",
                company: "Aura Botanicals",
                review: "Our premium rigid cosmetics boxes are absolute works of art! The gold foil stamping and V-grooved sharp 90-degree corners give our skincare line an extraordinary luxury feel.",
                rating: 5,
                tag: "Cosmetics & Beauty"
              },
              {
                name: "Dr. Anand Sen",
                role: "Operations Director",
                company: "Zenith Pharmaceuticals",
                review: "Highly professional pre-press and offset printing. The pharmaceutical cartons and medical inserts feature razor-sharp readability and sturdy structure. Express turnaround!",
                rating: 5,
                tag: "Pharmaceutical"
              },
              {
                name: "Vikram Malhotra",
                role: "Chief Publisher",
                company: "Apex Media & Publishing",
                review: "We printed multiple coffee table books and art catalogs with Premium Pack Co. Their multi-color Heidelberg offset press capabilities in Okhla are truly unmatched.",
                rating: 5,
                tag: "Publishing"
              },
              {
                name: "Meera Nair",
                role: "Founder",
                company: "The Cocoa Atelier",
                review: "Excellent response times and attention to detail. The food-grade multi-cavity chocolate boxes they manufactured keep our artisanal chocolates intact and fresh.",
                rating: 5,
                tag: "Gourmet Chocolates"
              },
              {
                name: "Devendra Verma",
                role: "Supply Chain Manager",
                company: "Veda Health & Wellness",
                review: "Consistently flawless quality across multiple bulk batches of custom mono cartons and product brochures. Spectral color accuracy matches our brand standards.",
                rating: 5,
                tag: "Healthcare & Wellness"
              }
            ].map((item, idx) => (
              <div 
                key={`review-b-${idx}`} 
                className="w-[340px] sm:w-[410px] shrink-0 bg-white border border-gray-200 p-6 sm:p-7 rounded-sm shadow-xs hover:shadow-md hover:border-gray-300 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Stars Rating & Tag */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-1 text-[#f5b800]">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star key={i} size={15} fill="currentColor" stroke="none" />
                      ))}
                    </div>
                    <span className="text-[9px] font-black tracking-widest text-[#f5b800] bg-yellow-50/50 px-2 py-1 rounded-sm border border-[#f5b800]/15 uppercase font-display">
                      {item.tag}
                    </span>
                  </div>

                  {/* Review Text */}
                  <p className="text-gray-700 text-xs sm:text-sm leading-relaxed mb-6 font-normal italic">
                    "{item.review}"
                  </p>
                </div>

                {/* Reviewer Details */}
                <div className="border-t border-gray-100 pt-4 flex items-center justify-between">
                  <div>
                    <h4 className="text-sm font-extrabold text-black tracking-wide font-display">
                      {item.name}
                    </h4>
                    <p className="text-[10px] text-gray-400 font-medium tracking-wide">
                      {item.role}
                    </p>
                  </div>
                  <span className="text-[10px] font-bold text-gray-600 uppercase tracking-wider bg-neutral-50 px-2.5 py-1 rounded-sm border border-neutral-200 font-display">
                    {item.company}
                  </span>
                </div>
              </div>
            ))}

          </div>
        </div>
      </div>

      {/* ========================================================
          4. STILL HAVE QUESTIONS? CALL-TO-ACTION CARD
          ======================================================== */}
      <div className="max-w-5xl mx-auto border border-gray-200 rounded-sm p-8 sm:p-10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 bg-black text-white shadow-lg">
        <div className="space-y-2">
          <span className="text-[#f5b800] text-[10px] font-black tracking-[0.2em] uppercase font-display block">
            NEED CUSTOM GUIDANCE OR A BULK QUOTE?
          </span>
          <h3 className="text-xl sm:text-2xl font-black tracking-tight text-white font-display uppercase">
            STILL HAVE QUESTIONS?
          </h3>
          <p className="text-gray-400 text-xs sm:text-sm tracking-wide">
            Our printing & packaging engineers in Okhla Phase-II are ready to help with dielines, material samples, and written quotations.
          </p>
        </div>

        <button
          onClick={handleEmailScroll}
          className="bg-[#f5b800] hover:bg-yellow-400 text-black font-black tracking-widest text-xs uppercase py-3.5 px-8 rounded-sm shrink-0 shadow-md flex items-center space-x-2 cursor-pointer transition-all duration-200"
        >
          <span>GET IN TOUCH WITH US</span>
          <ArrowRight size={14} />
        </button>
      </div>

    </div>
  );
}
