/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "motion/react";
import { X } from "lucide-react";

// Importing all project & machinery image assets from /src/assets/images
import drawerBoxesImg from "../assets/images/select_pkg_one_1784522099216.jpg";
import festiveHampersImg from "../assets/images/rigid_gift_boxes_1786016977384.jpg";
import chocolateBoxesImg from "../assets/images/chocolate_jewellery_box_1786016996189.jpg";
import jewelleryBoxesImg from "../assets/images/skincare_pkg_three_1784521973123.jpg";
import apparelFootwearImg from "../assets/images/select_pkg_two_1784522114463.jpg";
import monoCartonsImg from "../assets/images/mono_carton_duplex_1786017008596.jpg";
import bakeryCakeImg from "../assets/images/food_pkg_three_1784522051737.jpg";
import woodenLaserImg from "../assets/images/select_pkg_three_1784522124881.jpg";

// Skincare & Beauty
import skincarePkgOneImg from "../assets/images/skincare_pkg_one_1784521941334.jpg";
import skincarePkgTwoImg from "../assets/images/skincare_pkg_two_1784521954131.jpg";
import skincarePkgNewImg from "../assets/images/skincare_packaging_new_1784612968486.jpg";
import skincarePkgImg from "../assets/images/skincare_packaging_1784520248131.jpg";
import beautyPhotoshootImg from "../assets/images/beauty_product_photoshoot_1784520934042.jpg";

// Spirits & Distilleries
import liquorPkgOneImg from "../assets/images/liquor_pkg_one_1784521984120.jpg";
import liquorPkgTwoImg from "../assets/images/liquor_pkg_two_1784521994436.jpg";
import liquorPkgThreeImg from "../assets/images/liquor_pkg_three_1784522004720.jpg";
import liquorPkgFourImg from "../assets/images/liquor_pkg_four_1784522148623.jpg";
import liquorPkgFiveImg from "../assets/images/liquor_pkg_five_1784522162071.jpg";
import liquorPkgNewImg from "../assets/images/liquor_pkg_new_1784613139297.jpg";

// Food & Confectionery
import foodPkgOneImg from "../assets/images/food_pkg_one_1784522015752.jpg";
import foodPkgTwoImg from "../assets/images/food_pkg_two_1784522028562.jpg";
import foodPkgFourImg from "../assets/images/food_pkg_four_1784522175154.jpg";
import foodPkgNewImg from "../assets/images/food_pkg_new_1784613155743.jpg";

// Commercial Printing, Books & Publications
import catalogueBrochureImg from "../assets/images/catalogue_brochure_print_1786017041608.jpg";
import bookDiaryImg from "../assets/images/book_diary_printing_1786017058990.jpg";
import pubPkgOneImg from "../assets/images/pub_pkg_one_1784522062916.jpg";
import pubPkgTwoImg from "../assets/images/pub_pkg_two_1784522073966.jpg";
import pubPkgThreeImg from "../assets/images/pub_pkg_three_1784522087047.jpg";
import artBooksCommercialImg from "../assets/images/art_books_commercial_1784520263860.jpg";
import artBooksNewImg from "../assets/images/art_books_new_1784612983623.jpg";

// Dedicated printing service image assets
import brochurePrintingImg from "../assets/images/brochure_printing_1786159957812.jpg";
import leafletPrintingImg from "../assets/images/leaflet_printing_1786159971548.jpg";
import standeePrintingImg from "../assets/images/standee_printing_1786159982325.jpg";
import flexPrintingImg from "../assets/images/flex_printing_1786159995237.jpg";
import folderPrintingImg from "../assets/images/folder_printing_1786160008698.jpg";
import wallCalendarImg from "../assets/images/wall_calendar_1786160024692.jpg";
import tableCalendarImg from "../assets/images/table_calendar_1786160037236.jpg";
import diariesNotebooksImg from "../assets/images/diaries_notebooks_1786160050053.jpg";
import tentCardsImg from "../assets/images/tent_cards_1786160063119.jpg";
import danglerPrintingImg from "../assets/images/dangler_printing_1786160078904.jpg";
import marketingCollateralsImg from "../assets/images/marketing_collaterals_1786160094287.jpg";
import coffeeTableBooksImg from "../assets/images/coffee_table_books_1786160107966.jpg";
import writingPadsImg from "../assets/images/writing_pads_1786160122241.jpg";
import posterPrintingImg from "../assets/images/poster_printing_1786160135827.jpg";
import pamphletsFlyersImg from "../assets/images/pamphlets_flyers_1786160150271.jpg";
import annualReportsImg from "../assets/images/annual_reports_1786160167141.jpg";
import customPrintingImg from "../assets/images/custom_printing_1786160180365.jpg";

// Dedicated packaging service image assets
import chocolateBoxPkgImg from "../assets/images/chocolate_box_pkg_1786160754309.jpg";
import jewelleryBoxPkgImg from "../assets/images/jewellery_box_pkg_1786160769681.jpg";
import cakeBakeryBoxPkgImg from "../assets/images/cake_bakery_box_pkg_1786160786652.jpg";
import mdfWoodenBoxPkgImg from "../assets/images/mdf_wooden_box_pkg_1786160799760.jpg";

// Displays & Product Showcase
import displaySystems from "../assets/images/displays_new_1784613015099.jpg";
import displaySystemsRetailImg from "../assets/images/display_systems_retail_1784520909561.jpg";
import displayUnitsImg from "../assets/images/display_units_1784520231635.jpg";
import productsShowcaseImg from "../assets/images/products_showcase_1784520217758.jpg";
import productsShowcaseNewImg from "../assets/images/products_showcase_new_1784612998624.jpg";

// Printing Press & Infrastructure
import pressRollersNewImg from "../assets/images/press_rollers_new_1784613071794.jpg";
import pressRollersImg from "../assets/images/printing_press_rollers_1784520195411.jpg";
import heidelbergCylinderNewImg from "../assets/images/heidelberg_cylinder_new_1784612943866.jpg";
import heidelbergCylinderImg from "../assets/images/heidelberg_cylinder_1784520296866.jpg";
import gluerMachineNewImg from "../assets/images/gluer_machine_new_1784613052337.jpg";
import packagingGluerImg from "../assets/images/packaging_gluer_machine_1784520897106.jpg";
import printingStacksNewImg from "../assets/images/printing_stacks_new_1784613036233.jpg";
import printingStacksImg from "../assets/images/printing_stacks_1784520280731.jpg";
import offsetMegaplantImg from "../assets/images/offset_megaplant_1784614968119.jpg";
import designSketchingImg from "../assets/images/design_sketching_process_1784520882633.jpg";
import swastikaShowroomImg from "../assets/images/swastika_office_showroom_1784614485773.jpg";
import logisticsVanImg from "../assets/images/logistics_van_warehouse_1784520921221.jpg";

interface ProjectItem {
  id: string;
  title: string;
  categoryLabel: string;
  src: string;
  alt: string;
  description: string;
  specs: string;
}

export default function ProjectsPage() {
  const [activeImageModal, setActiveImageModal] = useState<ProjectItem | null>(null);

  // 1. PRINTING SECTION ITEMS
  const printingItems: ProjectItem[] = [
    {
      id: "pr1",
      title: "Corporate Catalogues & Product Showcase",
      categoryLabel: "COMMERCIAL PRINTING",
      src: catalogueBrochureImg,
      alt: "High-end product catalog, tri-fold brochures, and leaflets",
      description: "Heavyweight coated paper catalogues and tri-fold brochures printed with ultra-sharp spot colors, metallic ink accents, and protective matte lamination.",
      specs: "220 GSM Coated Paper | Metallic Gold Inks | Matte Protective Seal"
    },
    {
      id: "pr_brochure",
      title: "Corporate Brochure Printing",
      categoryLabel: "COMMERCIAL PRINTING",
      src: brochurePrintingImg,
      alt: "Bi-fold and tri-fold corporate brochure printing",
      description: "Custom folded corporate brochures with precision creasing, high opacity paper stock, and elegant spot UV finish.",
      specs: "300 GSM Art Card | Precision Creasing | Spot UV & Matte Finish"
    },
    {
      id: "pr_leaflet",
      title: "Leaflets & Informational Inserts",
      categoryLabel: "COMMERCIAL PRINTING",
      src: leafletPrintingImg,
      alt: "Folded informative leaflets and medical inserts",
      description: "Crisp single and multi-fold informative marketing leaflets and pharmaceutical inserts printed with ultra-sharp legibility.",
      specs: "High-Volume Offset | Precision Z & Gate Folding | FSC Paper"
    },
    {
      id: "pr_standee",
      title: "Roll-Up Standees & Promo Banners",
      categoryLabel: "RETAIL & EXHIBITION",
      src: standeePrintingImg,
      alt: "Retractable roll-up aluminum standee banner",
      description: "Sleek retractable roll-up display standees with anti-curl greyback media and durable anodized aluminum frames.",
      specs: "Anti-Curl Greyback Media | Aluminium Frame | High-Res Graphics"
    },
    {
      id: "pr_flex",
      title: "Outdoor Flex Banner Printing",
      categoryLabel: "OUTDOOR SIGNAGE",
      src: flexPrintingImg,
      alt: "Large format outdoor flex printing billboard banner",
      description: "Heavy-duty weather-resistant flex banners and hoardings for high-impact outdoor marketing with reinforced brass eyelets.",
      specs: "UV-Resistant Inks | Weatherproof Flex Fabric | High-Tensile Strength"
    },
    {
      id: "pr_folder",
      title: "Presentation Folders & Pocket Kits",
      categoryLabel: "COMMERCIAL PRINTING",
      src: folderPrintingImg,
      alt: "Corporate presentation folder with die-cut pockets",
      description: "Executive presentation folders featuring die-cut document pockets, business card slots, and metallic foil branding.",
      specs: "Die-Cut Pocket Folders | Gold Foil Stamping | 350 GSM Board"
    },
    {
      id: "pr2",
      title: "Executive Hardcover Book & Diary Manufacturing",
      categoryLabel: "BOOKS & PUBLICATIONS",
      src: bookDiaryImg,
      alt: "Bespoke hardcover book binding, executive diaries, and wall/table calendars",
      description: "Bespoke leatherette & cloth-bound hardcover executive diaries featuring gilded foil edges, ribbon markers, and thread sewing.",
      specs: "Gilded Edges | Leatherette Bound | Thread-Sewn Binding"
    },
    {
      id: "pr_wall_cal",
      title: "Corporate Wall Calendars",
      categoryLabel: "STATIONERY & CALENDARS",
      src: wallCalendarImg,
      alt: "Luxury corporate wall calendar with twin-wire wiro binding",
      description: "Multi-page corporate wall calendars with heavy twin-wire wiro binding, metallic wire hangers, and vibrant color leaves.",
      specs: "Twin-Loop Wire Binding | Metal Hanger | 250 GSM Art Leaves"
    },
    {
      id: "pr_table_cal",
      title: "Executive Desk Table Calendars",
      categoryLabel: "STATIONERY & CALENDARS",
      src: tableCalendarImg,
      alt: "Executive desk table calendar with rigid easel stand",
      description: "Desktop calendars engineered with heavy 2mm rigid kappa board easel stands, foil-stamped month headers, and memo pads.",
      specs: "2mm Kappa Board Stand | Gold Foil Header | Twin-Wire Bound"
    },
    {
      id: "pr_diaries",
      title: "Diaries & Executive Notebooks",
      categoryLabel: "STATIONERY & CALENDARS",
      src: diariesNotebooksImg,
      alt: "Luxury executive diary planner notebook with gold foil logo",
      description: "Premium leatherette daily planners and hardbound executive notebooks with debossed logos, satin ribbon bookmarks, and gilded edges.",
      specs: "Thermochromic PU | Debossed Branding | Gold Gilded Edges"
    },
    {
      id: "pr_tent_cards",
      title: "Promotional Tent Cards",
      categoryLabel: "RETAIL & POS",
      src: tentCardsImg,
      alt: "Self-standing promotional tent cards for desk and restaurant display",
      description: "Self-standing pre-scored tent cards designed for restaurant table menus, hotel counters, and retail product displays.",
      specs: "Pre-Scored Folding | Spill-Proof Lamination | Heavy Cardstock"
    },
    {
      id: "pr_dangler",
      title: "Retail Ceiling Danglers",
      categoryLabel: "RETAIL & POS",
      src: danglerPrintingImg,
      alt: "Die-cut double-sided retail ceiling danglers",
      description: "Eye-catching custom die-cut ceiling danglers engineered with rigid duplex board and pre-punched string eyelets for retail aisles.",
      specs: "Custom Die-Cut Shapes | Double-Sided CMYK | Punched Eyelets"
    },
    {
      id: "pr_marketing",
      title: "Corporate Marketing Collaterals Suite",
      categoryLabel: "COMMERCIAL PRINTING",
      src: marketingCollateralsImg,
      alt: "Flat-lay corporate brand kit with printed stationery and brochures",
      description: "Complete unified brand collateral kit including press kits, sales cards, envelopes, product sheets, and launch stationery.",
      specs: "Strict Brand Color Matching | Specialty Textured Papers | Complete Suite"
    },
    {
      id: "pr_coffee_table",
      title: "Coffee Table Books & Photo Journals",
      categoryLabel: "BOOKS & PUBLICATIONS",
      src: coffeeTableBooksImg,
      alt: "Hardcover coffee table art book lying open with photographic spreads",
      description: "Large format hardcover coffee table art books featuring lay-flat panoramic opening, archival inks, and custom rigid slipcases.",
      specs: "Lay-Flat Panoramic Opening | Archival Pigment Inks | Rigid Slipcase"
    },
    {
      id: "pr_writing_pads",
      title: "Writing Pads & Corporate Letterheads",
      categoryLabel: "STATIONERY & CALENDARS",
      src: writingPadsImg,
      alt: "Executive writing pad notepad block and letterhead",
      description: "Custom branded corporate notepad blocks and letterheads with easy-tear top padding adhesive and smooth laser-compatible paper.",
      specs: "100 GSM Laser-Guaranteed Bond | Easy-Tear Padding | Stiff Backing"
    },
    {
      id: "pr_poster",
      title: "High-Impact Wall Poster Printing",
      categoryLabel: "COMMERCIAL PRINTING",
      src: posterPrintingImg,
      alt: "High-gloss promotional wall poster mounted in frame",
      description: "High-definition promotional and gallery wall posters in A1, A2, A3 sizes with rich color saturation and protective UV gloss varnish.",
      specs: "High-Gloss Art Board | UV Protective Coating | Rich Black Saturation"
    },
    {
      id: "pr_pamphlets",
      title: "Promotional Pamphlets & Flyers",
      categoryLabel: "COMMERCIAL PRINTING",
      src: pamphletsFlyersImg,
      alt: "Vibrant promotional flyers and pamphlets fan-spread",
      description: "Fast-turnaround high-volume flyers and pamphlets engineered for maximum ROI in direct distribution and marketing campaigns.",
      specs: "High-Speed Offset Printing | Uniform Color Density | Matte / Gloss Finish"
    },
    {
      id: "pr_annual_reports",
      title: "Annual Financial Reports & Prospectuses",
      categoryLabel: "BOOKS & PUBLICATIONS",
      src: annualReportsImg,
      alt: "Executive annual financial report book with gold foil title",
      description: "Confidential corporate annual reports and financial publications with gold foil title accents, PUR binding, and precise chart printing.",
      specs: "Confidential Production | PUR Perfect Binding | Foil Title Accents"
    },
    {
      id: "pr_custom_print",
      title: "Custom Specialty Printing Solutions",
      categoryLabel: "COMMERCIAL PRINTING",
      src: customPrintingImg,
      alt: "Bespoke commercial print samples featuring foil die-cutting and spot UV",
      description: "Bespoke printing solutions featuring specialty metallic inks, custom CAD dielines, tactile spot UV embossing, and non-standard sizes.",
      specs: "Custom CAD Dielines | Metallic & Fluorescent Inks | Spot UV Texture"
    },
    {
      id: "pr4",
      title: "Fine Art Books & Hardcover Monographs",
      categoryLabel: "BOOKS & PUBLICATIONS",
      src: artBooksCommercialImg,
      alt: "Hardcover coffee table art books with thread sewing and gilded foil titles",
      description: "Luxury cloth-bound coffee table art books featuring thread-sewn Smyth binding, high-density photo reproduction, and custom dust jackets.",
      specs: "Thread-Sewn Smyth Binding | 200 GSM Art Paper | Cloth Hardcover"
    },
    {
      id: "pr5",
      title: "Moments of Beauty Photography Books",
      categoryLabel: "BOOKS & PUBLICATIONS",
      src: artBooksNewImg,
      alt: "Hardcover photography coffee table book with gold embossed title",
      description: "Prestige hardcover photography book showcasing deep black covers, blind embossing, and ultra-smooth matte coated interior pages.",
      specs: "Blind Embossing | Premium Silk Interior | Rigid Slipcase"
    },
    {
      id: "pr6",
      title: "Annual Growth Strategy Reports & Books",
      categoryLabel: "BOOKS & PUBLICATIONS",
      src: pubPkgOneImg,
      alt: "Corporate annual report books with metallic wire binding and gold accents",
      description: "Executive corporate annual reports with clear spiral wire binding, metallic foil title accents, and high-opacity interior papers.",
      specs: "Twin-Loop Wire Binding | Gold Foil Accents | Heavyweight Cover"
    },
    {
      id: "pr7",
      title: "Corporate Governance & Financial Prospectus",
      categoryLabel: "BOOKS & PUBLICATIONS",
      src: pubPkgTwoImg,
      alt: "Perfect bound annual reports and financial prospectus books",
      description: "High-volume corporate publications with PUR perfect binding, anti-scuff matte covers, and precise spot UV logos.",
      specs: "PUR Perfect Binding | Anti-Scuff Matte | Spot UV Logo"
    },
    {
      id: "pr8",
      title: "Specialized Industry Periodicals & Booklets",
      categoryLabel: "BOOKS & PUBLICATIONS",
      src: pubPkgThreeImg,
      alt: "Saddle-stitched industry magazines and technical booklets",
      description: "Precision saddle-stitched catalogs and quarterly magazines produced on high-speed web presses for clean fold alignment.",
      specs: "Saddle-Stitched | High-Speed Web Press | FSC Certified Paper"
    },
    {
      id: "pr9",
      title: "Retail POS Displays & Roll-up Standees",
      categoryLabel: "COMMERCIAL PRINTING",
      src: displaySystemsRetailImg,
      alt: "Retail roll-up standees, banners, and promotional display units",
      description: "Heavy-duty retractable roll-up standees and high-resolution flex outdoor banners printed on durable weather-resistant media.",
      specs: "High-Resolution Flex Media | Aluminium Frame | UV-Resistant Ink"
    },
    {
      id: "pr10",
      title: "Countertop Standees & Floor Display Units",
      categoryLabel: "COMMERCIAL PRINTING",
      src: displayUnitsImg,
      alt: "Interactive floor display stand and countertop POS units",
      description: "Custom structural corrugated floor stands and acrylic countertop displays designed to boost retail visibility and product engagement.",
      specs: "High-Density Corrugated | High-Gloss Varnish | Flat-Pack Shipping"
    },
    {
      id: "pr11",
      title: "Product Photography & Collateral Showcase",
      categoryLabel: "COMMERCIAL PRINTING",
      src: productsShowcaseImg,
      alt: "Full brand collateral suite including pamphlets, posters, and leaflets",
      description: "Multi-item commercial print campaign including promotional leaflets, gatefold pamphlets, wall posters, and hang tags.",
      specs: "Multi-Page Pamphlets | Satin Finish | Die-Cut Hang Tags"
    }
  ];

  // 2. PACKAGING SECTION ITEMS
  const packagingItems: ProjectItem[] = [
    {
      id: "pk_choc_pkg",
      title: "Artisanal Chocolate Box Packaging",
      categoryLabel: "FOOD & CONFECTIONERY",
      src: chocolateBoxPkgImg,
      alt: "Luxury artisanal chocolate box packaging with golden partitions",
      description: "Certified food-grade chocolate packaging engineered with multi-cavity golden partitions, aroma-lock pads, and gold foil embossed branding.",
      specs: "FDA Food-Grade Approved | Multi-Cavity Golden Trays | Gold Foil Stamping"
    },
    {
      id: "pk_jewel_pkg",
      title: "Luxury Jewellery Presentation Boxes",
      categoryLabel: "JEWELLERY & LUXURY",
      src: jewelleryBoxPkgImg,
      alt: "Luxury velvet-lined emerald green jewellery presentation box",
      description: "Opulent velvet-lined and leatherette-wrapped rigid jewellery presentation boxes with custom plush slots for necklaces, rings, and bangles.",
      specs: "High-Density Plush Velvet | Gold Foil Logo | Magnetic Latch"
    },
    {
      id: "pk_bakery_pkg",
      title: "Gourmet Cake & Bakery Boxes",
      categoryLabel: "FOOD & CONFECTIONERY",
      src: cakeBakeryBoxPkgImg,
      alt: "Modern food-grade cake and bakery packaging box with clear window",
      description: "Sturdy food-safe bakery packaging with transparent PVC top display window, greaseproof interior lining, and integrated carry handles.",
      specs: "Greaseproof Food Board | Clear Display Window | Pop-Up Carry Handle"
    },
    {
      id: "pk_mdf_pkg",
      title: "MDF Wooden & Filigree Boxes",
      categoryLabel: "WOODEN & LASER-CUT",
      src: mdfWoodenBoxPkgImg,
      alt: "Laser-engraved MDF wooden box with antique brass latch hinges",
      description: "Heavy-duty laser-engraved MDF wooden chests wrapped in metallic paper or carved with intricate filigree patterns, brass latches, and velvet interiors.",
      specs: "Precision CNC Laser Engraving | Antique Brass Hardware | Velvet Lining"
    },
    {
      id: "pk1",
      title: "Luxury Rigid Drawer Boxes Collection",
      categoryLabel: "RIGID & GIFT PACKAGING",
      src: drawerBoxesImg,
      alt: "Bespoke rigid drawer boxes in navy, dark green, burgundy and tan",
      description: "Custom sliding drawer rigid boxes crafted with velvet inserts, debossed gold foils, and grossgrain pull ribbons for luxury accessories.",
      specs: "Rigid Board | Gold Foil Debossing | Grossgrain Ribbon"
    },
    {
      id: "pk2",
      title: "Festive Indian Sweets & Gift Hampers",
      categoryLabel: "RIGID & GIFT PACKAGING",
      src: festiveHampersImg,
      alt: "Festive hampers with gold mandala artwork and sweet box dividers",
      description: "Festive celebration hamper boxes featuring traditional gold foil mandalas, satin bows, and multi-compartment sweet / dry-fruit trays.",
      specs: "Multi-Compartment | Gold Foil Mandala | Premium Satin Bow"
    },
    {
      id: "pk3",
      title: "Chocolate & Confectionery Rigid Boxes",
      categoryLabel: "FOOD & CONFECTIONERY",
      src: chocolateBoxesImg,
      alt: "Luxury artisanal chocolate box presentation with cocoa branch foil line art",
      description: "Bespoke cocoa leaf foil-stamped chocolate boxes featuring custom dividers, clear window sleeves, and rich matte textured paper wraps.",
      specs: "Custom Grid Dividers | Gold Line-Art | Matte Tactile Finish"
    },
    {
      id: "pk4",
      title: "Jewellery & Watch Presentation Cases",
      categoryLabel: "JEWELLERY & LUXURY CASES",
      src: jewelleryBoxesImg,
      alt: "Luxury ring, necklace and bracelet presentation cases in burgundy, navy and emerald",
      description: "Custom leatherette & suede interior jewellery cases with spring-hinge lids, magnetic snaps, and gold emblem hot stamping.",
      specs: "Soft Plush Suede | Leatherette Exterior | Magnetic Snap"
    },
    {
      id: "pk5",
      title: "Apparel, Footwear & Fashion Gift Boxes",
      categoryLabel: "APPAREL & FOOTWEAR",
      src: apparelFootwearImg,
      alt: "Bespoke footwear shoe boxes and luxury apparel gift packaging",
      description: "Heavy-duty rigid shoe boxes and apparel presentation cases with textured paper lining, gold foil typography, and corded tote bags.",
      specs: "Heavy Kappa Board | Gold Typography | Custom Shoe Tray"
    },
    {
      id: "pk6",
      title: "FMCG, Pharma & Cosmetics Mono Cartons",
      categoryLabel: "PHARMA & MONO CARTONS",
      src: monoCartonsImg,
      alt: "Aloe Vera face wash, Herbal hair oil, Multivitamin and Tea cartons",
      description: "High-volume duplex & folding mono cartons with foil accentuation, food-grade barrier coatings, braille embossing, and crisp varnish.",
      specs: "Duplex Board | Spot UV Varnish | Food-Grade Coating"
    },
    {
      id: "pk7",
      title: "Gourmet Bakery & Cake Boxes with Window",
      categoryLabel: "FOOD & CONFECTIONERY",
      src: bakeryCakeImg,
      alt: "Pastel cake boxes with clear display window handles and floral prints",
      description: "Food-safe food grade bakery boxes with transparent PVC display windows, sturdy carry handles, and oil-resistant interior laminates.",
      specs: "Food-Grade Kraft | PVC Display Window | Carry Handle"
    },
    {
      id: "pk8",
      title: "Wooden & Laser-Cut Filigree Boxes",
      categoryLabel: "WOODEN & LASER-CUT",
      src: woodenLaserImg,
      alt: "Laser-cut wooden filigree chests and decorative keepsake boxes with brass latches",
      description: "Hand-finished MDF & natural teak wooden chests featuring intricate laser filigree carving, antique brass latches, and velvet linings.",
      specs: "Teak & MDF Wood | Laser Carving | Antique Brass Hardware"
    },
    {
      id: "pk9",
      title: "Botanical Skincare & Perfume Cartons",
      categoryLabel: "BEAUTY & SKINCARE",
      src: skincarePkgOneImg,
      alt: "Pastel cosmetics boxes and botanical perfume glass bottle packaging",
      description: "Soft pastel luxury cosmetics packaging with raised spot UV, foil stamping, and bottle protection neck collars.",
      specs: "Raised Spot UV | Pastel Matte | Bottle Protection Insert"
    },
    {
      id: "pk10",
      title: "Luxury Skincare Serum & Elixir Boxes",
      categoryLabel: "BEAUTY & SKINCARE",
      src: skincarePkgNewImg,
      alt: "Pastel pink and cream skincare dropper bottle packaging with gold accents",
      description: "Custom cosmetics packaging engineered with internal dropper bottle locks, metallic foil logos, and velvety soft-touch lamination.",
      specs: "Dropper Bottle Lock | Velvet Soft-Touch | Metallic Gold Logo"
    },
    {
      id: "pk11",
      title: "Cosmetic Cream Cartons & Fragrance Tubes",
      categoryLabel: "BEAUTY & SKINCARE",
      src: skincarePkgImg,
      alt: "Rigid cylinder fragrance tube and cosmetics outer cartons",
      description: "Heavy-wall paper tubes and outer folding cartons decorated with raised foil lettering and pearlized iridescent coatings.",
      specs: "Heavy-Wall Paper Tube | Raised Gold Lettering | Pearl Coating"
    },
    {
      id: "pk12",
      title: "Spa & Dermatology Clinical Serum Boxes",
      categoryLabel: "BEAUTY & SKINCARE",
      src: skincarePkgTwoImg,
      alt: "Dermatology clinical serum cartons with holographic tamper-evident seals",
      description: "Clinical skincare packaging featuring holographic security seals, micro-embossing, and crisp pharmaceutical-grade typography.",
      specs: "Holographic Seal | Micro-Embossed Pattern | High-White Board"
    },
    {
      id: "pk13",
      title: "High-End Cosmetics Studio Photoshoot Campaign",
      categoryLabel: "BEAUTY & SKINCARE",
      src: beautyPhotoshootImg,
      alt: "Studio product photography of luxury beauty glass bottles and gold cartons",
      description: "Commercial product styling and packaging showcase highlighting glossy glass bottles paired with premium metallic outer boxes.",
      specs: "High-Gloss Finish | Custom Die-Cut Insert | Studio Photography"
    },
    {
      id: "pk14",
      title: "Single Malt Whisky Gift Presentation Box",
      categoryLabel: "SPIRITS & LIQUOR",
      src: liquorPkgOneImg,
      alt: "Luxury single malt whisky rigid presentation box",
      description: "Premium heavy-duty spirits rigid box with metallic foil stamping, embossed coat-of-arms crest, and foam bottle nest.",
      specs: "Embossed Crest | Gold Foil | High-Density EVA Foam"
    },
    {
      id: "pk15",
      title: "Artisan Botanical Gin Illustrated Box",
      categoryLabel: "SPIRITS & LIQUOR",
      src: liquorPkgTwoImg,
      alt: "Custom illustrated botanical gin cardboard box",
      description: "Intricately illustrated gin box with tactile embossing, copper foil accents, and eco-friendly unbleached kraft board.",
      specs: "Copper Foil | Tactile Emboss | Eco Kraft Board"
    },
    {
      id: "pk16",
      title: "Matte Black Rum Gold Foil Rigid Box",
      categoryLabel: "SPIRITS & LIQUOR",
      src: liquorPkgThreeImg,
      alt: "Matte black rum gift box with gold foil stamping",
      description: "Deep matte black velvet-touch paper wrap with high-shine gold foil patterns and hidden magnetic catch.",
      specs: "Velvet Soft-Touch | Magnetic Catch | Gold Foil"
    },
    {
      id: "pk17",
      title: "Distillery Reserve Whisky Custom Packaging",
      categoryLabel: "SPIRITS & LIQUOR",
      src: liquorPkgNewImg,
      alt: "Exclusive distillery reserve whisky gift box with gold foil emblem",
      description: "Custom heavy kappa board cylinder and clamshell box engineered for aged single malt reserves, complete with gold foil emblem.",
      specs: "Clamshell Rigid Board | Gold Leaf Emblem | Custom Fit Nest"
    },
    {
      id: "pk18",
      title: "Champagne & Craft Gin Luxury Gift Set",
      categoryLabel: "SPIRITS & LIQUOR",
      src: liquorPkgFiveImg,
      alt: "Champagne bottle and glass gift box with gold foil scrollwork",
      description: "High-end spirits gift packaging designed with double-door magnetic closure, gold foil scrollwork, and silk ribbon pulls.",
      specs: "Double-Door Closure | Silk Ribbon Pulls | Gold Scrollwork Foil"
    },
    {
      id: "pk19",
      title: "Reserve Craft Spirits Rigid Gift Case",
      categoryLabel: "SPIRITS & LIQUOR",
      src: liquorPkgFourImg,
      alt: "Craft liquor gift box with metal emblem latch and satin lining",
      description: "Prestige liquor presentation box built with a solid Kappa board shell, padded satin interior lining, and custom die-cast metal emblem.",
      specs: "Solid Kappa Board | Padded Satin Interior | Metal Emblem"
    },
    {
      id: "pk20",
      title: "Gourmet Coffee & Organic Tea Packaging",
      categoryLabel: "FOOD & CONFECTIONERY",
      src: foodPkgFourImg,
      alt: "Organic tea bags and gourmet coffee pouch containers",
      description: "Aroma-seal foil-lined pouches and outer rigid boxes for specialty tea & coffee blends.",
      specs: "Aroma Barrier Foil | Spot UV | Rigid Shell"
    },
    {
      id: "pk21",
      title: "Eco-Friendly Kraft Food Delicacy Containers",
      categoryLabel: "FOOD & CONFECTIONERY",
      src: foodPkgNewImg,
      alt: "Unbleached kraft food boxes with bio-laminate oil barrier",
      description: "Sustainable food containers made from 100% recyclable kraft paper with natural plant-based moisture and oil barrier linings.",
      specs: "100% Recyclable Kraft | Bio-Laminate | Food Grade Safe"
    },
    {
      id: "pk22",
      title: "Organic Snack & Gourmet Delicacy Boxes",
      categoryLabel: "FOOD & CONFECTIONERY",
      src: foodPkgOneImg,
      alt: "Artisanal food snack boxes with custom clear window sleeves",
      description: "Custom printed snack boxes designed with interior greaseproof coatings, snap-lock bottoms, and high-impact clear window sleeves.",
      specs: "Greaseproof Coating | Snap-Lock Bottom | High-Impact Window"
    },
    {
      id: "pk23",
      title: "Gourmet Chocolates & Dry Fruit Gift Packaging",
      categoryLabel: "FOOD & CONFECTIONERY",
      src: foodPkgTwoImg,
      alt: "Multi-compartment dry fruit hamper with gold embossed lid",
      description: "Premium gift box featuring modular compartment dividers, soft velvet trays, and intricate gold foil geometric lid patterns.",
      specs: "Modular Dividers | Velvet Tray | Gold Foil Geometric Design"
    }
  ];

  // 3. MACHINERY & INFRASTRUCTURE SECTION ITEMS
  const machineryItems: ProjectItem[] = [
    {
      id: "m1",
      title: "High-Precision Offset Inking Rollers & Calibration",
      categoryLabel: "PLANT & MACHINERY",
      src: pressRollersNewImg,
      alt: "Offset press ink rollers in motion printing vivid CMYK colors",
      description: "Advanced multi-color offset printing press rollers running in high-speed production with automated closed-loop color calibration.",
      specs: "Closed-Loop Color Management | 15,000 Sheets/Hour | Spectrophotometric Control"
    },
    {
      id: "m2",
      title: "Swastika Offset Megaplant Infrastructure",
      categoryLabel: "PLANT & MACHINERY",
      src: offsetMegaplantImg,
      alt: "Full industrial offset printing floor with multi-color presses",
      description: "Our state-of-the-art 50,000 sq. ft. manufacturing facility equipped with modern offset presses, automated die-cutters, and rigid box lines.",
      specs: "50,000 Sq. Ft. Facility | Automated Production Lines | Climate Controlled"
    },
    {
      id: "m3",
      title: "Heidelberg Cylinder Hot Foil & Die-Cutting Press",
      categoryLabel: "PLANT & MACHINERY",
      src: heidelbergCylinderNewImg,
      alt: "Heidelberg Cylinder automatic die-cutting and hot stamping press",
      description: "Legendary Heidelberg Cylinder press configured for high-precision foil stamping, deep debossing, and intricate shape die-cutting.",
      specs: "Heidelberg Cylinder | High-Precision Foil Stamping | Deep Debossing"
    },
    {
      id: "m4",
      title: "Automated High-Speed Box Gluer Line",
      categoryLabel: "PLANT & MACHINERY",
      src: gluerMachineNewImg,
      alt: "Automated folding carton gluer machine in full operation",
      description: "High-speed automated folder gluer with inline plasma surface treatment, cold-glue sensors, and computerized barcode verification.",
      specs: "Plasma Surface Treatment | Cold-Glue Sensors | Barcode Verification"
    },
    {
      id: "m5",
      title: "High-Precision Printed Sheet Pallets & Cutters",
      categoryLabel: "PLANT & MACHINERY",
      src: printingStacksNewImg,
      alt: "Stacked printed paper sheets waiting for die-cutting and lamination",
      description: "Freshly printed sheet pallets handled in controlled humidity environments prior to high-speed thermal lamination and foil stamping.",
      specs: "Humidity-Controlled Stacking | High-Speed Lamination | Precision Trimming"
    },
    {
      id: "m6",
      title: "3D Structural CAD Design & Sketching",
      categoryLabel: "PLANT & MACHINERY",
      src: designSketchingImg,
      alt: "Structural packaging CAD drawing and physical mockup sketching",
      description: "In-house structural engineering team developing 3D CAD prototypes, drop-test simulations, and custom box locking mechanisms.",
      specs: "3D CAD Prototyping | Sample Plotter Cutting | Drop-Test Simulation"
    },
    {
      id: "m7",
      title: "Executive Product Showroom & Gallery",
      categoryLabel: "PLANT & MACHINERY",
      src: swastikaShowroomImg,
      alt: "Swastika Print & Packaging corporate showroom displaying rigid box samples",
      description: "Our dedicated client experience center housing thousands of bespoke packaging, book binding, and luxury gift box samples.",
      specs: "Interactive Sample Gallery | Paper & Texture Library | Client Consultation Suite"
    },
    {
      id: "m8",
      title: "Global Warehousing & Fleet Logistics",
      categoryLabel: "PLANT & MACHINERY",
      src: logisticsVanImg,
      alt: "Company delivery vehicles and logistics warehouse loading bay",
      description: "Dedicated transport fleet and racked distribution warehouse ensuring timely, safe, and moisture-sealed delivery to client facilities.",
      specs: "Moisture-Sealed Palletizing | Dedicated Fleet | Real-Time Tracking"
    }
  ];

  return (
    <div className="bg-[#000000] text-gray-300 antialiased font-sans select-none animate-fade-in min-h-screen">
      
      {/* ========================================================
          1. PROJECTS HERO BANNER
          ======================================================== */}
      <section className="relative h-[60vh] sm:h-[65vh] flex items-center justify-center overflow-hidden border-b border-neutral-900">
        {/* Background Full Color Image */}
        <div className="absolute inset-0">
          <img
            src={displaySystems}
            alt="Projects Showcase"
            className="w-full h-full object-cover object-center filter brightness-90 contrast-[1.05]"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/30" />
        </div>

        {/* Text Content */}
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-white text-4xl sm:text-6xl md:text-7xl font-black tracking-[0.2em] uppercase font-display mb-3 drop-shadow-lg"
          >
            PROJECTS
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-[#f5b800] text-xs sm:text-sm md:text-base font-bold tracking-[0.45em] uppercase font-display"
          >
            OUR CAPABILITIES & PORTFOLIO
          </motion.p>
        </div>
      </section>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-16 space-y-24">

        {/* Gallery Welcome Intro Section */}
        <motion.section 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-4xl mx-auto pb-6 border-b border-neutral-900"
        >
          <p className="text-gray-200 text-base sm:text-lg md:text-xl font-normal leading-relaxed tracking-wide font-sans">
            Welcome to our gallery section, offering a glimpse into our craftsmanship&apos;s depth and quality. Explore to witness our passion for excellence and commitment to exceptional results.
          </p>
        </motion.section>

        {/* ========================================================
            SECTION 1: PRINTING
            ======================================================== */}
        <section id="printing-section" className="scroll-mt-24">
          
          {/* Section Header with Heading and Description */}
          <div className="text-center mb-12 max-w-3xl mx-auto flex flex-col items-center">
            <h2 className="text-3xl sm:text-5xl font-black text-white font-display tracking-wider uppercase">
              PRINTING
            </h2>
            <div className="w-16 h-1 bg-[#f5b800] my-3.5 rounded-full" />
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              From high-volume commercial product catalogues, executive annual reports, and brochures to hardcover coffee table books, executive diaries, and retail POS displays. We deliver crisp color calibration, gold hot foil accents, and premium paper finishes.
            </p>
          </div>

          {/* Printing Image Gallery Grid (Clean Images Only) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {printingItems.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="group relative bg-[#0a0a0a] rounded-sm border border-neutral-850 overflow-hidden shadow-lg hover:border-[#f5b800]/50 transition-all duration-500 cursor-pointer"
                onClick={() => setActiveImageModal(item)}
              >
                {/* Image Container */}
                <div className="relative aspect-[4/3] overflow-hidden bg-neutral-900">
                  <img
                    src={item.src}
                    alt={item.alt}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover filter grayscale contrast-[1.08] brightness-[0.92] group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-105 transition-all duration-700 ease-in-out"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </motion.div>
            ))}
          </div>

        </section>


        {/* Decorative Divider */}
        <div className="flex items-center justify-center py-4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-neutral-800 to-transparent w-full" />
        </div>


        {/* ========================================================
            SECTION 2: PACKAGING
            ======================================================== */}
        <section id="packaging-section" className="scroll-mt-24">
          
          {/* Section Header with Heading and Description */}
          <div className="text-center mb-12 max-w-3xl mx-auto flex flex-col items-center">
            <h2 className="text-3xl sm:text-5xl font-black text-white font-display tracking-wider uppercase">
              PACKAGING
            </h2>
            <div className="w-16 h-1 bg-[#f5b800] my-3.5 rounded-full" />
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              Bespoke packaging engineered for luxury brands, confectionery, spirits, cosmetics, jewellery, and FMCG. Our range encompasses rigid drawer boxes, festive sweet hampers, mono cartons, bakery containers, and custom wooden filigree chests.
            </p>
          </div>

          {/* Packaging Image Gallery Grid (Clean Images Only) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {packagingItems.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="group relative bg-[#0a0a0a] rounded-sm border border-neutral-850 overflow-hidden shadow-lg hover:border-[#f5b800]/50 transition-all duration-500 cursor-pointer"
                onClick={() => setActiveImageModal(item)}
              >
                {/* Image Container */}
                <div className="relative aspect-[4/3] overflow-hidden bg-neutral-900">
                  <img
                    src={item.src}
                    alt={item.alt}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover filter grayscale contrast-[1.08] brightness-[0.92] group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-105 transition-all duration-700 ease-in-out"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </motion.div>
            ))}
          </div>

        </section>


        {/* Decorative Divider */}
        <div className="flex items-center justify-center py-4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-neutral-800 to-transparent w-full" />
        </div>


        {/* ========================================================
            SECTION 3: MACHINERY & INFRASTRUCTURE
            ======================================================== */}
        <section id="machinery-section" className="scroll-mt-24">
          
          {/* Section Header with Heading and Description */}
          <div className="text-center mb-12 max-w-3xl mx-auto flex flex-col items-center">
            <h2 className="text-3xl sm:text-5xl font-black text-white font-display tracking-wider uppercase">
              MACHINERY
            </h2>
            <div className="w-16 h-1 bg-[#f5b800] my-3.5 rounded-full" />
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              Powered by our 50,000 sq. ft. modern offset megaplant featuring Heidelberg Cylinder hot foil & die-cutting presses, automated high-speed box gluers, closed-loop color calibration systems, and 3D CAD structural packaging engineering.
            </p>
          </div>

          {/* Machinery Image Gallery Grid (Clean Images Only) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {machineryItems.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="group relative bg-[#0a0a0a] rounded-sm border border-neutral-850 overflow-hidden shadow-lg hover:border-[#f5b800]/50 transition-all duration-500 cursor-pointer"
                onClick={() => setActiveImageModal(item)}
              >
                {/* Image Container */}
                <div className="relative aspect-[4/3] overflow-hidden bg-neutral-900">
                  <img
                    src={item.src}
                    alt={item.alt}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover filter grayscale contrast-[1.08] brightness-[0.92] group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-105 transition-all duration-700 ease-in-out"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </motion.div>
            ))}
          </div>

        </section>

      </div>

      {/* ========================================================
          4. FULL COLOR LIGHTBOX MODAL DIALOG
          ======================================================== */}
      <AnimatePresence>
        {activeImageModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveImageModal(null)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full bg-[#121212] border border-neutral-800 rounded-sm overflow-hidden shadow-2xl"
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveImageModal(null)}
                className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/80 text-white flex items-center justify-center hover:bg-[#f5b800] hover:text-black transition-colors cursor-pointer"
                aria-label="Close dialog"
              >
                <X size={20} />
              </button>

              {/* Modal Full Color Image */}
              <div className="relative max-h-[65vh] overflow-hidden bg-black flex items-center justify-center">
                <img
                  src={activeImageModal.src}
                  alt={activeImageModal.alt}
                  className="w-full h-full object-contain filter grayscale-0"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Modal Details */}
              <div className="p-6 sm:p-8 bg-[#121212] border-t border-neutral-800">
                <span className="text-xs font-black tracking-[0.25em] text-[#f5b800] uppercase block mb-2">
                  {activeImageModal.categoryLabel}
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-white font-display mb-3">
                  {activeImageModal.title}
                </h2>
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  {activeImageModal.description}
                </p>
                <div className="inline-block bg-neutral-900 border border-neutral-800 px-3.5 py-1.5 rounded-xs text-xs font-medium text-gray-400">
                  <span className="text-white font-bold mr-2">Key Specs:</span> {activeImageModal.specs}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer Line */}
      <div className="border-t border-neutral-900 w-full" />
      <div className="bg-[#000000] h-20 flex items-center justify-center">
        <div className="w-[1px] h-10 bg-neutral-800" />
      </div>

    </div>
  );
}
