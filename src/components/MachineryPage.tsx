/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import { 
  Printer, 
  Box, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  Gauge, 
  Wrench
} from "lucide-react";

import CinematicImage from "./CinematicImage";

// Import real plant & equipment images from assets
import cylinderImg from "../assets/images/heidelberg_cylinder_new_1784612943866.jpg";
import pressRollersImg from "../assets/images/press_rollers_new_1784613071794.jpg";
import gluerMachineImg from "../assets/images/gluer_machine_new_1784613052337.jpg";
import offsetMegaplantImg from "../assets/images/offset_megaplant_1784614968119.jpg";
import printingStacksImg from "../assets/images/printing_stacks_new_1784613036233.jpg";

// Dedicated machine images for each specific machine
import konicaDigitalPressImg from "../assets/images/konica_digital_press_1786181216137.jpg";
import normalLaminationImg from "../assets/images/normal_lamination_machine_1786181230309.jpg";
import thermalLaminationImg from "../assets/images/thermal_lamination_machine_1786181243560.jpg";
import bindingMachineLineImg from "../assets/images/binding_machine_line_1786181257639.jpg";
import spotUvScreenPrinterImg from "../assets/images/spot_uv_screen_printer_1786181274491.jpg";
import creasingFoldingImg from "../assets/images/creasing_folding_machine_1786181286989.jpg";
import caseMakingMachineImg from "../assets/images/case_making_machine_1786181299781.jpg";
import vGroovingMachineImg from "../assets/images/v_grooving_machine_1786181314397.jpg";
import cornerCuttingMachineImg from "../assets/images/corner_cutting_machine_1786181329918.jpg";
import embossingFoilMachineImg from "../assets/images/embossing_foil_machine_1786181343307.jpg";
import autoBoxWrappingLineImg from "../assets/images/auto_box_wrapping_line_1786181359402.jpg";
import polarPaperGuillotineImg from "../assets/images/polar_paper_guillotine_1786181372240.jpg";

interface MachineDetail {
  id: string;
  name: string;
  category: "printing" | "other";
  categoryLabel: string;
  image: string;
  tagline: string;
  description: string;
  specs: { label: string; value: string }[];
  features: string[];
}

const ALL_MACHINERY: MachineDetail[] = [
  // --- PRINTING MACHINES ---
  {
    id: "heidelberg-6-color",
    name: "Offset Printing Machine Heidelberg Six Color Machine 28'' x 40”",
    category: "printing",
    categoryLabel: "HEIDELBERG OFFSET PRESS",
    image: pressRollersImg,
    tagline: "Ultra-High Speed 6-Color Printing with Online Coating & Spectrophotometer",
    description: "Our flagship multi-color Heidelberg Speedmaster 6-color press handles maximum sheet sizes up to 28 x 40 inches. Engineered with inline UV/dispersion coating, auto-plate loaders, and CIP4 digital color calibration for flawless catalogues, mono cartons, and high-volume commercial print runs.",
    specs: [
      { label: "Sheet Capacity", value: "28'' x 40'' Inches" },
      { label: "Printing Speed", value: "15,000 Sheets / Hour" },
      { label: "Color Units", value: "6 Colors + UV Coater" },
      { label: "Substrate Range", value: "60 GSM to 450 GSM" }
    ],
    features: [
      "CIP4 Automated Ink Duct Control System",
      "Inline UV and aqueous dispersion coating unit",
      "Microscopic dot sharpness and instant register lock",
      "Ideal for multi-color catalogues, packaging & covers"
    ]
  },
  {
    id: "heidelberg-4-color",
    name: "Offset Printing Machine Heidelberg Four Color Machine 20’’ x 28.5”",
    category: "printing",
    categoryLabel: "HEIDELBERG OFFSET PRESS",
    image: offsetMegaplantImg,
    tagline: "Medium Format 4-Color Offset Printing for Brochures, Publications & Boxes",
    description: "Equipped with 4 precision offset printing towers, this Heidelberg press handles 20 x 28.5 inches sheet formats with exceptional color density and alignment. It is the workhorse for corporate brochures, magazine covers, calendars, and mono cartons.",
    specs: [
      { label: "Sheet Capacity", value: "20'' x 28.5'' Inches" },
      { label: "Printing Speed", value: "12,500 Sheets / Hour" },
      { label: "Color Units", value: "4 Process Colors (CMYK)" },
      { label: "Control System", value: "CP2000 Computerized Console" }
    ],
    features: [
      "Autoplate rapid plate changing mechanism",
      "Alcolor continuous dampening for streak-free solids",
      "High-precision sheet feeder for smooth paper delivery",
      "Perfect for medium-size print runs with rapid turnaround"
    ]
  },
  {
    id: "heidelberg-1-color-a",
    name: "Offset Printing Machine Heidelberg Single Color Machine 20’’ x 28.5” (Press Unit 1)",
    category: "printing",
    categoryLabel: "HEIDELBERG OFFSET PRESS",
    image: printingStacksImg,
    tagline: "Dedicated Monochromatic & Inner-Page Precision Printing Press",
    description: "High-precision single-color Heidelberg offset press specifically dedicated to text-heavy publications, academic book inner blocks, legal pads, and single-color packaging inserts where razor-sharp typography and solid black ink density are critical.",
    specs: [
      { label: "Sheet Capacity", value: "20'' x 28.5'' Inches" },
      { label: "Printing Speed", value: "10,000 Sheets / Hour" },
      { label: "Color Unit", value: "Single Color Monochromatic" },
      { label: "Application", value: "Book Blocks, Forms, Inserts" }
    ],
    features: [
      "Pristine black text crispness without ink smudging",
      "Handles lightweight bible paper up to heavy cards",
      "Low ink consumption and uniform impression",
      "Ideal for publishing books, stationery, and instruction manuals"
    ]
  },
  {
    id: "heidelberg-1-color-b",
    name: "Offset Printing Machine Heidelberg Single Color Machine 20’’ x 28.5” (Press Unit 2)",
    category: "printing",
    categoryLabel: "HEIDELBERG OFFSET PRESS",
    image: cylinderImg,
    tagline: "Specialized Spot-Color, Metallic Ink & Special Coating Press",
    description: "Our second Heidelberg single-color press is maintained exclusively for metallic inks (gold, silver, bronze), custom Pantone brand colors, and security inks. This prevents cross-contamination and ensures pristine brilliance on luxury packaging.",
    specs: [
      { label: "Sheet Capacity", value: "20'' x 28.5'' Inches" },
      { label: "Specialty", value: "Pantone & Metallic Inks" },
      { label: "Speed", value: "10,000 Sheets / Hour" },
      { label: "Registration", value: "Sub-Millimeter Lock" }
    ],
    features: [
      "Dedicated for Gold, Silver, Bronze & Metallic Pigments",
      "Zero color cross-contamination line guarantee",
      "Smooth ink transfer for heavy metallic solids",
      "Ideal for luxury seals, borders & brand spot colors"
    ]
  },
  {
    id: "konica-minolta-digital",
    name: "Digital Printing Machine Konica Minolta",
    category: "printing",
    categoryLabel: "PRODUCTION DIGITAL PRESS",
    image: konicaDigitalPressImg,
    tagline: "High-Speed Industrial Digital Press with Variable Data Printing (VDP)",
    description: "Our Konica Minolta production digital press handles short-run print jobs, variable data personalization (serial numbers, names, barcodes), proofing, and long banner printing (up to 1200mm) with instant dry toner technology.",
    specs: [
      { label: "Resolution", value: "3600 x 1200 DPI Equivalent" },
      { label: "Banner Length", value: "Up to 330 x 1200 mm" },
      { label: "Capabilities", value: "Variable Data & Short Runs" },
      { label: "Media Handling", value: "62 to 350 GSM Textured / Gloss" }
    ],
    features: [
      "Instant dry prints - ready for immediate lamination/cutting",
      "Variable data printing (VDP) for security codes & personalization",
      "Automated density & registration adjustment sensors",
      "Perfect for prototype boxes, mockups & express deliveries"
    ]
  },

  // --- OTHER MACHINERIES ---
  {
    id: "thermal-lamination",
    name: "Thermal Lamination Machine",
    category: "other",
    categoryLabel: "POST-PRESS FINISHING",
    image: thermalLaminationImg,
    tagline: "Hot Roller Thermal Lamination for Soft-Touch, Matt & Gloss Finish",
    description: "Utilizes heat-activated adhesive film to laminate printed sheets with Velvet Soft-Touch, Premium Matt, Gloss, or Anti-Scratch protective films. Provides moisture barrier and enhances color vibrancy.",
    specs: [
      { label: "Lamination Type", value: "Thermal (Hot Roller)" },
      { label: "Speed", value: "80 Meters / Min" },
      { label: "Films Supported", value: "BOPP, PET, Velvet Soft-Touch" },
      { label: "Sheet Width", value: "Up to 1020 mm" }
    ],
    features: [
      "Bubble-free hydraulic heat pressure system",
      "Automatic pneumatic sheet separator & cutter",
      "Enhances box durability and scratch resistance",
      "Essential for luxury rigid boxes & book covers"
    ]
  },
  {
    id: "normal-lamination",
    name: "Normal Lamination Machine",
    category: "other",
    categoryLabel: "POST-PRESS FINISHING",
    image: normalLaminationImg,
    tagline: "Water-Base & Solvent Cold Lamination for Board & Corrugation",
    description: "Heavy-duty wet lamination machine designed for economic high-volume lamination using water-based eco-friendly adhesives or solvent laminates, ideal for duplex boards and corrugation sheet linings.",
    specs: [
      { label: "Process", value: "Cold / Wet Roller Lamination" },
      { label: "Adhesive Type", value: "Water-Base Eco Glue / Solvent" },
      { label: "Max Width", value: "1100 mm" },
      { label: "Speed", value: "60 Meters / Min" }
    ],
    features: [
      "Cost-effective solution for mass commercial packaging",
      "Strong adhesion on thick duplex and Kraft boards",
      "Smooth roller pressure for streak-free film application",
      "Eco-friendly water-soluble glue options"
    ]
  },
  {
    id: "cutting-machine",
    name: "Cutting Machine (Polar High-Precision Guillotine)",
    category: "other",
    categoryLabel: "CUTTING & TRIMMING",
    image: polarPaperGuillotineImg,
    tagline: "Micro-Programmed Hydraulic Paper Cutter with Air Table",
    description: "High-speed programmable paper cutter with optical light indicators, air-cushion bed, and digital program memory to trim printed paper stacks with sub-millimeter precision.",
    specs: [
      { label: "Cutting Width", value: "115 cm / 45 Inch" },
      { label: "Cutting Precision", value: "±0.1 mm" },
      { label: "Program Memory", value: "999 Cutting Programs" },
      { label: "Safety", value: "Infrared Sensor Light Barrier" }
    ],
    features: [
      "Air-cushion table for smooth, scratch-free sheet movement",
      "Automatic hydraulic clamp pressure adjustment",
      "Precision optical cutting line indicator",
      "Guarantees perfectly square edges for all print jobs"
    ]
  },
  {
    id: "binding-machine",
    name: "Binding Machine (Perfect & Hardbound Binding Line)",
    category: "other",
    categoryLabel: "BOOKBINDING & FINISHING",
    image: bindingMachineLineImg,
    tagline: "Automatic Perfect Binding & Hardbound Case Binding",
    description: "Comprehensive binding line equipped with automatic cover feeding, spine milling, hot-melt/PUR adhesive gluing, and section sewing for textbooks, catalogues, and corporate diaries.",
    specs: [
      { label: "Binding Types", value: "Perfect, Hardbound, Saddle-Stitch" },
      { label: "Gluing System", value: "Hot-Melt EVA & PUR Glue" },
      { label: "Capacity", value: "3,000 Books / Hour" },
      { label: "Book Thickness", value: "2 mm to 60 mm" }
    ],
    features: [
      "Automatic spine milling and roughening for max glue pull strength",
      "Heavy pneumatic cover nipping for flat, clean spines",
      "Integrates with automatic thread sewing machines",
      "Ideal for coffee table books, annual reports & diaries"
    ]
  },
  {
    id: "spot-uv-screen",
    name: "Spot UV & Screen Printing Machine",
    category: "other",
    categoryLabel: "SPECIAL EFFECTS",
    image: spotUvScreenPrinterImg,
    tagline: "Precision Flatbed Screen Printing with High-Gloss UV Curing Tunnel",
    description: "Delivers raised Spot UV varnish, 3D textured coatings, metallic glitter effects, and scratch-off panels. Coupled with an instant inline UV curing light tunnel.",
    specs: [
      { label: "Print Area", value: "28'' x 40'' Inches" },
      { label: "Curing Unit", value: "High-Power UV Lamp Tunnel" },
      { label: "Effects", value: "Raised Spot UV, Texture, Glitter" },
      { label: "Speed", value: "2,500 Sheets / Hour" }
    ],
    features: [
      "Microscopic registration on laminated surfaces",
      "Creates stunning tactile 3D contrast on box titles & logos",
      "Instant UV curing ensures zero block sticking",
      "Widely used for cosmetics, liquor & luxury gift boxes"
    ]
  },
  {
    id: "creasing-folding",
    name: "Creasing & Folding Machine",
    category: "other",
    categoryLabel: "FOLDING & CONVERTING",
    image: creasingFoldingImg,
    tagline: "High-Speed Automated Paper Creasing & Multi-Panel Folding",
    description: "Precision motorized creasing wheel and knife/buckle folding unit that creates crack-free fold lines on heavy cards, brochures, cartons, and invitation jackets.",
    specs: [
      { label: "Folding Styles", value: "Bi-Fold, Tri-Fold, Z-Fold, Gate-Fold" },
      { label: "Paper Range", value: "80 GSM to 400 GSM" },
      { label: "Speed", value: "200 Meters / Min" },
      { label: "Creasing", value: "Crack-Free Matrix Wheel" }
    ],
    features: [
      "Prevents toner and paper cracking along fold seams",
      "High-speed rotary creasing and perforating attachments",
      "Automatic sheet feeding with vacuum suction loader",
      "Essential for mono cartons, leaflets & presentation folders"
    ]
  },
  {
    id: "case-making",
    name: "Case Making Machine",
    category: "other",
    categoryLabel: "RIGID BOX & HARDBOUND",
    image: caseMakingMachineImg,
    tagline: "Automated Hardcover & Rigid Box Outer Shell Case Maker",
    description: "Fully automated case maker that pastes printed cover sheets onto Kappa chipboard, automatically folds four edges, and rubs down corners for rigid box shells and hardcover book cases.",
    specs: [
      { label: "Board Thickness", value: "1.0 mm to 4.0 mm Kappa" },
      { label: "Production Speed", value: "25 to 30 Cases / Min" },
      { label: "Cover Materials", value: "Art Paper, Leatherette, Velvet" },
      { label: "Edge Folding", value: "Automatic 4-Side Turn-In" }
    ],
    features: [
      "Automatic hot-melt glue applicator with temperature controller",
      "Optoelectronic registration sensor for flawless board alignment",
      "Bubble-free pressing roller section for tight corners",
      "Ideal for sweet boxes, jewelry cases & hardcover books"
    ]
  },
  {
    id: "grooving-machine",
    name: "Grooving Machine (V-Grooving for Luxury Boxes)",
    category: "other",
    categoryLabel: "RIGID BOX MANUFACTURING",
    image: vGroovingMachineImg,
    tagline: "High-Precision 90° & 120° V-Grooving for Crisp Rigid Box Corners",
    description: "Automated board grooving machine that carves clean V-shaped channels into thick chipboard, Kappa board, and MDF. Allows rigid boxes to fold into razor-sharp 90-degree outer corners.",
    specs: [
      { label: "Grooving Angle", value: "80° to 140° V-Groove" },
      { label: "Board Types", value: "Kappa Board, MDF, Chipboard" },
      { label: "Board Thickness", value: "1.0 mm to 3.5 mm" },
      { label: "Precision", value: "Zero Dust Carbide Cutters" }
    ],
    features: [
      "Produces sharp 90-degree edges on luxury rigid boxes",
      "Automatic waste strip ejection and dust extraction",
      "Multi-blade arrangement for carving multiple channels in 1 pass",
      "Indispensable for luxury watches, perfume & jewelry packaging"
    ]
  },
  {
    id: "sheet-pasting-gluing",
    name: "Sheet Pasting & Gluing Machine",
    category: "other",
    categoryLabel: "BOARD CONVERTING",
    image: gluerMachineImg,
    tagline: "Uniform Adhesive Coating for Board-to-Board & Paper Pasting",
    description: "Motorized dual-roller pasting machine that applies an even layer of cold glue or hot melt on paperboard sheets, duplex boards, and corrugated flutes for box laminations.",
    specs: [
      { label: "Roller Width", value: "Up to 1000 mm" },
      { label: "Glue Options", value: "Cold PVA Glue & Hot Melt" },
      { label: "Roller Material", value: "Stainless Steel Anti-Corrosive" },
      { label: "Speed", value: "Variable Motorized Control" }
    ],
    features: [
      "Micro-dial adjustment for ultra-thin glue film application",
      "Prevents board warping and moisture bubbles",
      "Easy water wash system for fast end-of-day maintenance",
      "Crucial for heavy duplex pasting & corrugated box lining"
    ]
  },
  {
    id: "corner-cutting",
    name: "Corner Cutting Machine",
    category: "other",
    categoryLabel: "PUNCHING & NOTCHING",
    image: cornerCuttingMachineImg,
    tagline: "Heavy Hydraulic Corner Rounding, Notching & Die Punching",
    description: "Precision hydraulic corner cutting press designed to trim 90-degree notches or smooth rounded corners on rigid box board blanks, playing cards, calendars, and tags.",
    specs: [
      { label: "Cut Stroke", value: "Hydraulic High Pressure" },
      { label: "Corner Radii", value: "R3 to R25 mm & Custom Notches" },
      { label: "Stack Thickness", value: "Up to 80 mm per cut" },
      { label: "Operation", value: "Foot Pedal Safety Switch" }
    ],
    features: [
      "Burr-free clean cutting through dense board stacks",
      "Interchangeable die blades for round, notch & angled corners",
      "Heavy cast-iron frame eliminating vibration",
      "Used for rigid box board preparation & calendar corners"
    ]
  },
  {
    id: "embossing-gold-foiling",
    name: "Embossing & Gold Foiling Machine",
    category: "other",
    categoryLabel: "LUXURY EMBELLISHMENT",
    image: embossingFoilMachineImg,
    tagline: "Precision Heat-Assisted Hot Foil Stamping & 3D Embossing Press",
    description: "Heavy mechanical foil stamping press with digital heating plates and automated foil-pulling stepper motors. Applies metallic gold, silver, holographic foil, and raised 3D textures on boxes.",
    specs: [
      { label: "Heating Temp", value: "Up to 300°C Digital Control" },
      { label: "Pressure", value: "Heavy Ton Mechanical Impression" },
      { label: "Foil Feeder", value: "Automatic Stepper Motor Pull" },
      { label: "Foil Types", value: "Gold, Silver, Rose Gold, Holo" }
    ],
    features: [
      "Delivers brilliant reflective metallic foil details",
      "Executes combination die foil + deep embossing in single pass",
      "Zero foil waste with programmable stepping pull lengths",
      "The hallmark finish for luxury cosmetic & liquor packaging"
    ]
  },
  {
    id: "automatic-box-machine",
    name: "Automatic Box Machine (Rigid Box Assembly Line)",
    category: "other",
    categoryLabel: "AUTOMATED RIGID BOX LINE",
    image: autoBoxWrappingLineImg,
    tagline: "Fully Automatic Corner Taping, Visual Positioning & Box Wrapping Line",
    description: "Our state-of-the-art automatic rigid box forming line integrates cardboard corner taping, high-precision visual camera positioning, paper gluing, and 4-side automatic box wrapping into one seamless high-speed line.",
    specs: [
      { label: "Production Output", value: "12,000 Boxes / Day" },
      { label: "Visual Positioning", value: "HD Camera Register System" },
      { label: "Box Size Range", value: "Min 80x50mm - Max 450x350mm" },
      { label: "Automation", value: "PLC Touch Screen Control" }
    ],
    features: [
      "Robotic arm positioning with camera vision (accuracy ±0.1mm)",
      "Automatic bubble removal and edge folding",
      "Mass production capacity for gift, chocolate & jewelry boxes",
      "Replaces manual assembly with flawless, uniform structural quality"
    ]
  }
];

interface MachineryPageProps {
  onNavigateContact?: () => void;
}

export default function MachineryPage({ onNavigateContact }: MachineryPageProps) {
  return (
    <div id="machinery-page" className="bg-white text-gray-900 select-none min-h-screen antialiased">
      
      {/* ========================================================
          HERO BANNER: MACHINERY & PLANT INFRASTRUCTURE
          ======================================================== */}
      <section className="relative bg-[#0a0a0a] py-20 sm:py-28 px-6 sm:px-8 overflow-hidden text-center border-b border-neutral-900">
        
        {/* Background Grayscale Industrial Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src={offsetMegaplantImg} 
            alt="Premium Pack Co Plant Machinery" 
            className="w-full h-full object-cover object-center filter grayscale contrast-[1.2] brightness-[0.25]"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-[#0a0a0a]" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto space-y-5">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#f5b800]/10 border border-[#f5b800]/30 rounded-full text-[#f5b800] text-[11px] font-extrabold tracking-[0.25em] uppercase font-display"
          >
            <Wrench size={14} className="text-[#f5b800]" />
            INDUSTRIAL INFRASTRUCTURE & MACHINERY
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-white text-3xl sm:text-5xl md:text-6xl font-black tracking-tight uppercase font-display leading-tight"
          >
            OUR MACHINERY
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-[#f5b800] text-xs sm:text-sm md:text-base font-bold tracking-[0.4em] uppercase font-display"
          >
            PREMIUM PACK CO (JAI MAA TRADING)
          </motion.p>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-gray-300 text-xs sm:text-sm md:text-base max-w-3xl mx-auto leading-relaxed font-normal pt-1"
          >
            Explore our complete plant list comprising multi-color <strong className="text-white font-semibold">Heidelberg offset presses</strong>, Konica Minolta digital printing units, automated rigid box wrapping lines, V-grooving, high-precision cutting, and post-press finishing machinery located in <strong className="text-white font-semibold">Okhla Phase-II, New Delhi</strong>.
          </motion.p>
        </div>
      </section>

      {/* ========================================================
          PLANT METRICS SUMMARY
          ======================================================== */}
      <section className="bg-[#111111] py-10 px-6 border-b border-neutral-800">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          
          <div className="p-4 border-r border-neutral-800 last:border-r-0 space-y-1">
            <div className="flex items-center justify-center text-[#f5b800] mb-1">
              <Printer size={26} />
            </div>
            <div className="text-xl sm:text-3xl font-black text-white font-display tracking-tight">5 PRESSES</div>
            <p className="text-[10px] text-gray-400 font-bold tracking-widest uppercase">Heidelberg & Konica Line</p>
          </div>

          <div className="p-4 border-r md:border-r border-neutral-800 last:border-r-0 space-y-1">
            <div className="flex items-center justify-center text-[#f5b800] mb-1">
              <Gauge size={26} />
            </div>
            <div className="text-xl sm:text-3xl font-black text-white font-display tracking-tight">12 UNITS</div>
            <p className="text-[10px] text-gray-400 font-bold tracking-widest uppercase">Other Converting Machinery</p>
          </div>

          <div className="p-4 border-r border-neutral-800 last:border-r-0 space-y-1">
            <div className="flex items-center justify-center text-[#f5b800] mb-1">
              <Box size={26} />
            </div>
            <div className="text-xl sm:text-3xl font-black text-white font-display tracking-tight">12,000/DAY</div>
            <p className="text-[10px] text-gray-400 font-bold tracking-widest uppercase">Automatic Box Output</p>
          </div>

          <div className="p-4 space-y-1">
            <div className="flex items-center justify-center text-[#f5b800] mb-1">
              <ShieldCheck size={26} />
            </div>
            <div className="text-xl sm:text-3xl font-black text-white font-display tracking-tight">100% IN-HOUSE</div>
            <p className="text-[10px] text-gray-400 font-bold tracking-widest uppercase">Complete Print & Box Plant</p>
          </div>

        </div>
      </section>

      {/* ========================================================
          OPEN ZIG-ZAG ALTERNATING MACHINERY LISTING SECTION
          NO BOXES / NO CARDS / SPACIOUS LIKE SERVICES PAGE
          Item 1 (idx 0): Left Description, Right Image
          Item 2 (idx 1): Left Image, Right Description
          ======================================================== */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20 sm:space-y-28">
        
        {ALL_MACHINERY.map((machine, index) => {
          // Index 0 (Item 1): Description on LEFT (order-1), Image on RIGHT (order-2)
          // Index 1 (Item 2): Image on LEFT (order-1), Description on RIGHT (order-2)
          const isDescriptionLeft = index % 2 === 0;

          return (
            <div key={machine.id} className="relative">
              <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-10 lg:gap-14">
                
                {/* DESCRIPTION CONTENT BLOCK (Spans 5 cols) */}
                <motion.div 
                  initial={{ opacity: 0, x: isDescriptionLeft ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className={`lg:col-span-5 space-y-5 ${
                    isDescriptionLeft ? "order-1 lg:order-1" : "order-1 lg:order-2"
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <span className="w-12 h-1 bg-[#f5b800] rounded-full" />
                    <span className="text-[#f5b800] text-xs font-black tracking-[0.2em] uppercase font-display">
                      {machine.categoryLabel}
                    </span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-black tracking-wide uppercase font-display leading-tight">
                    {machine.name}
                  </h2>

                  <p className="text-[#d4a000] text-xs font-black tracking-widest uppercase font-display">
                    {machine.tagline}
                  </p>

                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed font-normal">
                    {machine.description}
                  </p>

                  {/* Technical Specs Badges */}
                  <div className="pt-2">
                    <p className="text-[11px] font-black text-black tracking-widest uppercase font-display mb-2">
                      TECHNICAL SPECIFICATIONS:
                    </p>
                    <div className="grid grid-cols-2 gap-2.5 bg-amber-50/70 border border-amber-200/70 p-3.5 rounded-xs">
                      {machine.specs.map((spec, sIdx) => (
                        <div key={sIdx} className="space-y-0.5">
                          <p className="text-[9px] font-bold text-gray-500 tracking-widest uppercase">{spec.label}</p>
                          <p className="text-xs font-extrabold text-black tracking-wide">{spec.value}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Operational Features Checklist */}
                  <div className="pt-2">
                    <p className="text-[11px] font-black text-black tracking-widest uppercase font-display mb-2">
                      KEY OPERATIONAL ADVANTAGES:
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs font-medium text-gray-800">
                      {machine.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-2">
                          <CheckCircle2 size={16} className="text-[#f5b800] flex-shrink-0 mt-0.5" />
                          <span className="leading-snug">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                </motion.div>

                {/* LARGE CINEMATIC MACHINE IMAGE-TO-VIDEO BLOCK (Spans 7 cols) */}
                <div className={`lg:col-span-7 ${isDescriptionLeft ? "order-2 lg:order-2" : "order-2 lg:order-1"}`}>
                  <CinematicImage
                    src={machine.image}
                    alt={machine.name}
                    title={machine.name}
                    categoryTag={machine.categoryLabel}
                    presetIndex={index}
                    aspectRatioClass="min-h-[360px] sm:min-h-[440px] lg:min-h-[500px]"
                    hoverActionText="EXPLORE MACHINE SPECS"
                  />
                </div>

              </div>

              {/* ELEGANT SEPARATOR LINE BETWEEN MACHINERY ITEMS */}
              {index < ALL_MACHINERY.length - 1 && (
                <div className="pt-16 sm:pt-24 flex items-center justify-center gap-4">
                  <div className="h-[1.5px] bg-[#f5b800]/35 flex-1" />
                  <div className="w-3 h-3 rotate-45 bg-[#f5b800] shadow-sm flex-shrink-0" />
                  <div className="h-[1.5px] bg-[#f5b800]/35 flex-1" />
                </div>
              )}

            </div>
          );
        })}

      </section>

      {/* ========================================================
          BOTTOM PLANT VISIT CALL TO ACTION
          ======================================================== */}
      <section className="bg-black text-white py-20 px-6 sm:px-8 border-t border-neutral-900 text-center">
        <div className="max-w-4xl mx-auto space-y-6">
          <span className="text-[#f5b800] text-xs font-black tracking-[0.3em] uppercase font-display block">
            SEE OUR MACHINERY IN LIVE OPERATION
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight uppercase font-display">
            BOOK A LIVE PRESS PASS & PLANT VISIT AT OKHLA PHASE-II
          </h2>
          <p className="text-gray-400 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed">
            We welcome corporate procurement teams, publishers, brand managers, and packaging designers to inspect live offset press runs and automated rigid box assembly lines.
          </p>

          {onNavigateContact && (
            <div className="pt-4">
              <button
                onClick={onNavigateContact}
                className="inline-flex items-center gap-2 bg-[#f5b800] hover:bg-yellow-400 text-black font-extrabold text-xs sm:text-sm px-8 py-3.5 uppercase tracking-widest transition-all duration-200 cursor-pointer rounded-sm shadow-md"
              >
                <span>BOOK PLANT VISIT / CONTACT US</span>
                <ArrowRight size={16} />
              </button>
            </div>
          )}
        </div>
      </section>

    </div>
  );
}
