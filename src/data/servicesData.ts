/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

// Image imports matching available assets
import cylinderGrayscaleImg from "../assets/images/heidelberg_cylinder_new_1784612943866.jpg";
import catalogueBrochureImg from "../assets/images/catalogue_brochure_print_1786017041608.jpg";
import bookDiaryImg from "../assets/images/book_diary_printing_1786017058990.jpg";
import artBooksImg from "../assets/images/art_books_new_1784612983623.jpg";
import artBooksCommercialImg from "../assets/images/art_books_commercial_1784520263860.jpg";
import displaySystemsImg from "../assets/images/displays_new_1784613015099.jpg";
import pressRollersImg from "../assets/images/press_rollers_new_1784613071794.jpg";
import printingStacksImg from "../assets/images/printing_stacks_new_1784613036233.jpg";
import productsShowcaseImg from "../assets/images/products_showcase_new_1784612998624.jpg";
import designSketchImg from "../assets/images/design_sketching_process_1784520882633.jpg";

// Dedicated generated service images for printing options
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

import rigidGiftBoxImg from "../assets/images/rigid_gift_boxes_1786016977384.jpg";
import chocolateJewelleryImg from "../assets/images/chocolate_jewellery_box_1786016996189.jpg";
import monoCartonImg from "../assets/images/mono_carton_duplex_1786017008596.jpg";
import foodPkgImg from "../assets/images/food_pkg_new_1784613155743.jpg";
import skincarePkgImg from "../assets/images/skincare_packaging_new_1784612968486.jpg";
import liquorPkgImg from "../assets/images/liquor_pkg_new_1784613139297.jpg";
import selectPkgOneImg from "../assets/images/select_pkg_one_1784522099216.jpg";
import selectPkgThreeImg from "../assets/images/select_pkg_three_1784522124881.jpg";
import logisticsVanImg from "../assets/images/logistics_van_warehouse_1784520921221.jpg";

// Dedicated generated service images for packaging options
import chocolateBoxPkgImg from "../assets/images/chocolate_box_pkg_1786160754309.jpg";
import jewelleryBoxPkgImg from "../assets/images/jewellery_box_pkg_1786160769681.jpg";
import cakeBakeryBoxPkgImg from "../assets/images/cake_bakery_box_pkg_1786160786652.jpg";
import mdfWoodenBoxPkgImg from "../assets/images/mdf_wooden_box_pkg_1786160799760.jpg";
import foodPkgTwoImg from "../assets/images/food_pkg_two_1784522028562.jpg";
import packagingGluerImg from "../assets/images/gluer_machine_new_1784613052337.jpg";

// Merchandise & promotional printing service images
import tshirtPrintingImg from "../assets/images/services/tshirt_printing.jpg";
import shirtLogoPrintingImg from "../assets/images/services/shirt_logo_printing.jpg";
import mugPrintingImg from "../assets/images/services/mug_printing.jpg";
import cupPrintingImg from "../assets/images/services/cup_printing.jpg";
import bottlePrintingImg from "../assets/images/services/bottle_printing.jpg";


export interface ServiceDetail {
  id: string;
  title: string;
  category: "printing" | "packaging";
  shortDesc: string;
  longDesc: string;
  image: string;
  gallery: string[];
  benefits: string[];
  applications: string[];
  materialsUsed: string[];
  finishingOptions: string[];
}

export const PRINTING_SERVICES_LIST: ServiceDetail[] = [
  {
    id: "catalogue-printing",
    title: "Catalogue Printing",
    category: "printing",
    image: catalogueBrochureImg,
    shortDesc: "High-resolution multi-page product catalogues with gloss or matte thermal lamination and section sewing.",
    longDesc: "Our catalogue printing services deliver exceptional visual brilliance for corporate brand showcases, product line expansion, and industrial spec sheets. Utilizing our Heidelberg multi-color offset presses, we ensure razor-sharp image clarity, true Pantone color accuracy, and flawless page binding.",
    gallery: [catalogueBrochureImg, coffeeTableBooksImg, productsShowcaseImg],
    benefits: [
      "Vibrant high-density CMYK & Pantone color fidelity",
      "Durable section sewing and perfect binding options",
      "Custom paper weights from 130 GSM to 350 GSM",
      "Gloss, matte, or velvet-touch thermal lamination"
    ],
    applications: [
      "Corporate Product Catalogues",
      "Industrial Equipment Manuals",
      "Fashion & Jewelry Lookbooks",
      "Retail Trade Directories"
    ],
    materialsUsed: ["Premium Art Paper", "Art Card", "Specialty Textured Stock"],
    finishingOptions: ["Spot UV Coating", "Gold/Silver Hot Foil Stamping", "Embossing", "Die-Cut Thumb Tabs"]
  },
  {
    id: "brochure-printing",
    title: "Brochure Printing",
    category: "printing",
    image: brochurePrintingImg,
    shortDesc: "Bi-fold, tri-fold, and multi-panel corporate brochures with vibrant color matching and spot UV accents.",
    longDesc: "Enhance your sales collateral with custom folded brochures. Engineered with computer-controlled creasing machines to prevent spine cracking, our brochures offer smooth folding and tactile luxury.",
    gallery: [brochurePrintingImg, marketingCollateralsImg, pamphletsFlyersImg],
    benefits: [
      "Precision machine creasing with zero spine splitting",
      "High opacity paper stocks for double-sided density",
      "Express production turnaround for corporate events"
    ],
    applications: [
      "Company Profile Brochures",
      "Real Estate Project Highlights",
      "Hospitality & Tourism Flyers",
      "Event & Exhibition Handouts"
    ],
    materialsUsed: ["170-300 GSM Imported Art Card", "Recycled Craft Stock"],
    finishingOptions: ["Matte Lamination", "Selective Spot Gloss UV", "Metallic Foil Accent"]
  },
  {
    id: "leaflet-printing",
    title: "Leaflet Printing",
    category: "printing",
    image: leafletPrintingImg,
    shortDesc: "Crisp single or double-sided informative leaflets for marketing campaigns, medical inserts, and promotions.",
    longDesc: "Ideal for high-volume marketing and regulatory documentation. Printed on ultra-fast offset presses for rapid distribution without sacrificing legibility or color vibrancy.",
    gallery: [leafletPrintingImg, pamphletsFlyersImg, brochurePrintingImg],
    benefits: [
      "Cost-effective bulk production runs",
      "Precision multi-fold options (Z-fold, Gate-fold)",
      "Lightweight yet high-opacity paper grades"
    ],
    applications: [
      "Pharmaceutical Package Inserts",
      "Promotional Marketing Mass Drops",
      "Retail Sale Announcement Flyers"
    ],
    materialsUsed: ["60-130 GSM Maplitho & Gloss Art Paper"],
    finishingOptions: ["Parallel Machine Folding", "Bundle Strapping", "Perforated Tear Strips"]
  },
  {
    id: "standee-printing",
    title: "Standee Printing",
    category: "printing",
    image: standeePrintingImg,
    shortDesc: "Retractable roll-up standees and promo banners with sturdy aluminum bases for exhibitions and retail.",
    longDesc: "Create immediate visual impact at trade shows and storefronts with portable roll-up banner standees. Printed on non-tearable matte greyback media to prevent curl.",
    gallery: [standeePrintingImg, flexPrintingImg, posterPrintingImg],
    benefits: [
      "Anti-curl greyback banner media",
      "Heavy-duty anodized aluminum mechanism",
      "Vivid eco-solvent and UV ink technology",
      "Includes padded nylon carrying case"
    ],
    applications: [
      "Trade Show Display Stands",
      "Retail Entrance Promotions",
      "Corporate Conference Backdrops"
    ],
    materialsUsed: ["240 micron Non-Tearable PET Banner Media"],
    finishingOptions: ["Matte Anti-Glare Lamination", "Reinforced Edge Hemming"]
  },
  {
    id: "flex-printing",
    title: "Flex Printing",
    category: "printing",
    image: flexPrintingImg,
    shortDesc: "Large format frontlit and backlit flex banners for outdoor hoardings, event backdrops, and shop signage.",
    longDesc: "High-tensile flex banners built to withstand harsh weather conditions while delivering high-impact outdoor brand visibility.",
    gallery: [flexPrintingImg, standeePrintingImg, posterPrintingImg],
    benefits: [
      "All-weather UV-resistant solvent printing",
      "Heavy duty GSM flex fabric with high tear strength",
      "Seamless wide span format capabilities"
    ],
    applications: [
      "Outdoor Billboards & Hoardings",
      "Event Backdrops & Stage Sets",
      "Illuminated Backlit Shop Signage"
    ],
    materialsUsed: ["Frontlit & Backlit Solvent Flex Material"],
    finishingOptions: ["Brass Grommet Eyelets", "Pocket Stitching for Pole Mounting"]
  },
  {
    id: "folder-printing",
    title: "Folder Printing",
    category: "printing",
    image: folderPrintingImg,
    shortDesc: "Corporate document presentation folders with single or dual die-cut pockets and business card slots.",
    longDesc: "Organize client proposals and conference materials in premium branded presentation folders. Tailored with custom die-cut pockets, foil accents, and card slots.",
    gallery: [folderPrintingImg, marketingCollateralsImg, writingPadsImg],
    benefits: [
      "Custom structural dieline CAD samples",
      "Heavy 350 GSM board for structural stiffness",
      "Precision business card slit insertion"
    ],
    applications: [
      "Corporate Client Pitches",
      "Legal Document Covers",
      "Real Estate Buyer Kits"
    ],
    materialsUsed: ["300-400 GSM SBS Board", "Art Card"],
    finishingOptions: ["Foil Stamping", "Velvet Touch Lamination", "Debossing"]
  },
  {
    id: "book-printing",
    title: "Book Printing",
    category: "printing",
    image: bookDiaryImg,
    shortDesc: "Hardcover and softbound book manufacturing for publishers, educational institutions, and corporate histories.",
    longDesc: "Complete book binding and manufacturing. We offer case-bound hardcovers with dust jackets, section sewing, and perfect bound paperbacks.",
    gallery: [bookDiaryImg, coffeeTableBooksImg, annualReportsImg],
    benefits: [
      "Thread sewn signatures for lifetime spine longevity",
      "FSC certified eco-friendly paper stocks",
      "Custom ribbon bookmarks & headband cloth"
    ],
    applications: [
      "Corporate History Books",
      "Educational Textbooks",
      "Monographs & Biographies"
    ],
    materialsUsed: ["70-120 GSM Natural Shade Book Paper", "Dutch Cloth", "Kappa Board"],
    finishingOptions: ["Gilt Edge Foiling", "Custom Slipcases", "Embossed Covers"]
  },
  {
    id: "wall-calendar",
    title: "Wall Calendar",
    category: "printing",
    image: wallCalendarImg,
    shortDesc: "Custom corporate wall calendars with twin-wire wiro binding, metal hangers, and date markers.",
    longDesc: "Keep your brand visible 365 days a year with custom printed multi-page wall calendars. Featuring sturdy wire-O binding and vibrant color imagery.",
    gallery: [wallCalendarImg, tableCalendarImg, posterPrintingImg],
    benefits: [
      "Heavy metal wiro binding with central hanging loop",
      "Thick art paper leaves with high stiffness",
      "Custom date highlights & corporate branding"
    ],
    applications: [
      "Year-End Corporate Gifting",
      "Brand Marketing Collateral",
      "Commercial Retail Products"
    ],
    materialsUsed: ["170-250 GSM Gloss Art Paper"],
    finishingOptions: ["UV Coating", "Foil Stamping", "Custom Shape Die-Cutting"]
  },
  {
    id: "table-calendar",
    title: "Table Calendar",
    category: "printing",
    image: tableCalendarImg,
    shortDesc: "Rigid easel desktop calendars with twin-wire binding, note pads, and metal foil leaf accents.",
    longDesc: "Desktop calendars engineered with heavy 2mm rigid kappa board stands for perfect upright desk posture.",
    gallery: [tableCalendarImg, wallCalendarImg, diariesNotebooksImg],
    benefits: [
      "Sturdy kappa board easel stand wrapped in black/gold",
      "Compact desktop layout with memo section",
      "Smooth leaf flipping with double-loop wiro"
    ],
    applications: [
      "Executive Desk Accessories",
      "Corporate Promotional Giveaways"
    ],
    materialsUsed: ["2.0mm Kappa Board", "220 GSM Imported Art Card"],
    finishingOptions: ["Gold Foil Logo Stamping", "Matt Thermal Film"]
  },
  {
    id: "diaries",
    title: "Diaries & Executive Notebooks",
    category: "printing",
    image: diariesNotebooksImg,
    shortDesc: "Leatherette and PU hardbound daily planners, executive diaries, and customized page-a-day notebooks.",
    longDesc: "Luxury hardbound planners featuring thermochromic PU covers, debossed logos, metallic page edging, and customized inner information leaves.",
    gallery: [diariesNotebooksImg, writingPadsImg, bookDiaryImg],
    benefits: [
      "Thermochromic PU leather with rich color-change debossing",
      "Gold / Silver metallic page edge foiling",
      "Custom ribbon bookmark and elastic band closure"
    ],
    applications: [
      "Executive Corporate Gifting",
      "Conference Planners",
      "Customized Journal Suites"
    ],
    materialsUsed: ["Imported PU Leatherette", "80 GSM Natural Shade Cream Paper"],
    finishingOptions: ["Deep Blind Debossing", "Gold Foiling", "Magnetic Buckle Closure"]
  },
  {
    id: "tent-cards",
    title: "Tent Cards",
    category: "printing",
    image: tentCardsImg,
    shortDesc: "Self-standing promotional tent cards for restaurant menus, hotel counters, and desk displays.",
    longDesc: "Pre-creased rigid tent cards designed for effortless pop-up setup on retail tables, front desks, and dining spaces.",
    gallery: [tentCardsImg, danglerPrintingImg, tableCalendarImg],
    benefits: [
      "Pre-scored folding slots for quick assembly",
      "Protective lamination against spillages",
      "Double-sided maximum display area"
    ],
    applications: [
      "Restaurant & Bar Menus",
      "Hotel Reception Notices",
      "Conference Desk Badges"
    ],
    materialsUsed: ["350 GSM Heavy Board"],
    finishingOptions: ["Velvet Lamination", "Metallic Foil Details"]
  },
  {
    id: "danglers",
    title: "Dangler Printing",
    category: "printing",
    image: danglerPrintingImg,
    shortDesc: "Eye-catching double-sided ceiling danglers for retail store promotions and supermarket aisles.",
    longDesc: "Custom die-cut ceiling danglers engineered with rigid duplex board and pre-punched string eyelets for instant overhead retail visibility.",
    gallery: [danglerPrintingImg, tentCardsImg, posterPrintingImg],
    benefits: [
      "Custom geometric and product-contour die shapes",
      "Rigid board construction prevents curling",
      "Pre-punched eyelets with hanging thread"
    ],
    applications: [
      "Supermarket Promotional Aisle Markers",
      "Retail Store Sales Displays",
      "Product Launch In-Store POSM"
    ],
    materialsUsed: ["400 GSM Duplex Board / Kappa Board"],
    finishingOptions: ["Gloss UV Coating", "Custom Die-Cutting"]
  },
  {
    id: "marketing-collaterals",
    title: "Marketing Collaterals",
    category: "printing",
    image: marketingCollateralsImg,
    shortDesc: "Complete brand suite including flyers, press kits, sales sheets, product cards, and launch stationery.",
    longDesc: "Unify your visual identity across all physical touchpoints with our comprehensive corporate collateral manufacturing service.",
    gallery: [marketingCollateralsImg, folderPrintingImg, writingPadsImg],
    benefits: [
      "Strict brand color consistency across all substrates",
      "Bespoke paper textures & weight selections",
      "Scalable production for national rollouts"
    ],
    applications: [
      "New Product Launch Media Kits",
      "Corporate Event Stationeries",
      "Sales Representative Toolkits"
    ],
    materialsUsed: ["Specialty Cotton Papers", "Metallic Board", "Linen Card"],
    finishingOptions: ["3D Embossing", "Gold Foil", "Spot UV Gloss"]
  },
  {
    id: "coffee-table-books",
    title: "Coffee Table Books",
    category: "printing",
    image: coffeeTableBooksImg,
    shortDesc: "Luxury large-format hardbound photo journals and heritage art books with lay-flat panoramic spreads.",
    longDesc: "Unrivaled craft for prestige publications. Featuring lay-flat photographic paper, hand-wrapped cloth covers, and custom rigid slipcase boxes.",
    gallery: [coffeeTableBooksImg, catalogueBrochureImg, bookDiaryImg],
    benefits: [
      "Lay-flat panoramic page opening without gutter obstruction",
      "Archival-grade non-fading pigment inks",
      "Handcrafted hardcover casing with cloth wrap"
    ],
    applications: [
      "Luxury Heritage Keepsakes",
      "Architectural & Art Portfolios",
      "Brand Legacy History Volumes"
    ],
    materialsUsed: ["Archival Matte Photographic Paper", "Imported Book Cloth"],
    finishingOptions: ["Custom Leatherette Slipcase", "Blind Embossing", "Ribbon Markers"]
  },
  {
    id: "writing-pads",
    title: "Writing Pads & Letterheads",
    category: "printing",
    image: writingPadsImg,
    shortDesc: "Custom branded notepad blocks, letterheads, and conference pads with easy-tear top glueing.",
    longDesc: "High-grade corporate stationery pads crafted with ultra-smooth laser-compatible papers and sturdy stiff backing boards.",
    gallery: [writingPadsImg, marketingCollateralsImg, folderPrintingImg],
    benefits: [
      "Smooth 100 GSM laser-guaranteed bond papers",
      "Easy-tear top padding adhesive",
      "Crisp corporate letterhead printing"
    ],
    applications: [
      "Hotel Room & Desk Notepad Blocks",
      "Corporate Conference Pads",
      "Executive Letterhead Stationery"
    ],
    materialsUsed: ["100 GSM Superfine Bond Paper"],
    finishingOptions: ["Top Padding Glue", "Perforated Sheet Stubs"]
  },
  {
    id: "poster-printing",
    title: "Poster Printing",
    category: "printing",
    image: posterPrintingImg,
    shortDesc: "High-impact promotional and decorative posters in standard A1, A2, A3 sizes with rich color depth.",
    longDesc: "Turn wall spaces into vivid brand showcases. Printed on high-gloss art card with fade-resistant inks for exceptional color punch.",
    gallery: [posterPrintingImg, standeePrintingImg, flexPrintingImg],
    benefits: [
      "Deep color saturation and true black tones",
      "Heavy cardstock prevents rolling",
      "Custom framing dimensions available"
    ],
    applications: [
      "Movie & Event Advertisements",
      "Retail Window Promotions",
      "Architectural Wall Displays"
    ],
    materialsUsed: ["250-300 GSM Heavy Gloss Art Card"],
    finishingOptions: ["Matte/Gloss Thermal Lamination"]
  },
  {
    id: "pamphlets",
    title: "Pamphlets & Flyers",
    category: "printing",
    image: pamphletsFlyersImg,
    shortDesc: "High-volume direct distribution flyers and marketing pamphlets printed at lightning fast speed.",
    longDesc: "Fast-turnaround high-volume flyers engineered for maximum ROI in direct mail and event distribution campaigns.",
    gallery: [pamphletsFlyersImg, leafletPrintingImg, brochurePrintingImg],
    benefits: [
      "Rapid offset turnaround capabilities",
      "Uniform double-sided color density",
      "Eco-conscious soy-based printing inks"
    ],
    applications: [
      "Mass Market Promotional Drops",
      "New Store Opening Announcements",
      "Educational Course Catalogues"
    ],
    materialsUsed: ["90-130 GSM Gloss Art Paper"],
    finishingOptions: ["Single / Double Fold", "Shrink Wrap Packaging"]
  },
  {
    id: "annual-reports",
    title: "Annual Reports",
    category: "printing",
    image: annualReportsImg,
    shortDesc: "Corporate financial reports and governance publications executed with pristine print precision and confidentiality.",
    longDesc: "Complete confidentiality and surgical precision for statutory corporate reporting, financial charts, and shareholder publications.",
    gallery: [annualReportsImg, catalogueBrochureImg, coffeeTableBooksImg],
    benefits: [
      "Strict data confidentiality and secure printing environment",
      "Surgical precision for financial charts & tables",
      "Express overnight delivery to meet reporting deadlines"
    ],
    applications: [
      "Statutory Corporate Filings",
      "Shareholder Financial Reports",
      "ESG & Sustainability Summaries"
    ],
    materialsUsed: ["100-150 GSM Premium Offset & Art Paper"],
    finishingOptions: ["Wire-O or Perfect Binding", "Metallic Foil Accents"]
  },
  {
    id: "custom-printing-solutions",
    title: "Custom Printing Solutions",
    category: "printing",
    image: customPrintingImg,
    shortDesc: "Bespoke commercial printing requirements tailored to unique corporate specifications, metallic inks, and custom sizes.",
    longDesc: "Have a non-standard printing challenge? Our engineering team builds custom dielines, tests special substrates, and formulates Pantone metallic inks tailored to your exact creative vision.",
    gallery: [customPrintingImg, marketingCollateralsImg, cylinderGrayscaleImg],
    benefits: [
      "Tailor-made structural CAD dieline creation",
      "Special Pantone metallic, fluorescent, and opaque white inks",
      "Dedicated pre-press technical consultation"
    ],
    applications: [
      "Bespoke Luxury Invitations",
      "Unique POSM Retail Props",
      "Specialty Die-Cut Merchandise"
    ],
    materialsUsed: ["Clear PET", "Metallic Foil Board", "Textured Specialty Stocks"],
    finishingOptions: ["Complex Multi-Level Embossing", "Laser Cutting", "3D Foil"]
  }
];

export const PACKAGING_SERVICES_LIST: ServiceDetail[] = [
  {
    id: "rigid-box",
    title: "Rigid Box",
    category: "packaging",
    image: rigidGiftBoxImg,
    shortDesc: "Premium kappa board rigid boxes with magnetic closures, shoulder neck designs, and custom wrapped textures.",
    longDesc: "The pinnacle of luxury unboxing experiences. Handcrafted with heavy 2mm-3.5mm imported kappa board, V-grooved crisp corners, magnetic flip-top covers, and plush velvet or EVA foam inserts.",
    gallery: [rigidGiftBoxImg, selectPkgOneImg, selectPkgThreeImg],
    benefits: [
      "Sharp 90-degree V-grooved corner construction",
      "Concealed magnetic flip-top closure system",
      "Custom velvet, satin, or die-cut EVA foam inserts",
      "Hot foil stamping and 3D textured paper wraps"
    ],
    applications: [
      "Luxury Consumer Electronics",
      "High-End Perfumes & Cosmetics",
      "Corporate Loyalty Gifts",
      "Prestige Apparel & Watches"
    ],
    materialsUsed: ["1.5mm - 3.5mm Imported Kappa Board", "Textured Specialty Wrap Paper"],
    finishingOptions: ["Deep Gold Foil", "Velvet Touch Lamination", "Custom Foam Tray"]
  },
  {
    id: "gift-box",
    title: "Gift Box",
    category: "packaging",
    image: selectPkgOneImg,
    shortDesc: "Elegant corporate and festive gift boxes adorned with hot foil stamping, satin ribbon ties, and gold lining.",
    longDesc: "Transform gift-giving into a memorable brand statement. Custom designed gift boxes featuring festive themes, ribbon pulls, and gold foil borders.",
    gallery: [selectPkgOneImg, rigidGiftBoxImg, selectPkgThreeImg],
    benefits: [
      "Festive, corporate, and wedding themes",
      "Integrated satin or grosgrain ribbon accents",
      "Heavy load-bearing internal structure"
    ],
    applications: [
      "Diwali & Festive Corporate Gifting",
      "VIP Wedding Card & Sweet Hampers",
      "Luxury Brand PR Kits"
    ],
    materialsUsed: ["Rigid Kappa Board", "Gold Metallic Wrapped Paper"],
    finishingOptions: ["Ribbon Pull Tab", "Spot UV Accents", "Embossed Logo"]
  },
  {
    id: "chocolate-box",
    title: "Chocolate Box",
    category: "packaging",
    image: chocolateBoxPkgImg,
    shortDesc: "Food-grade certified artisanal chocolate packaging with multi-cavity dividers and protective aroma-lock pads.",
    longDesc: "Certified food-grade chocolate packaging engineered to preserve freshness while presenting artisanal pralines and truffles in opulent multi-cavity trays.",
    gallery: [chocolateBoxPkgImg, foodPkgImg, selectPkgOneImg],
    benefits: [
      "FDA-compliant food-grade interior materials",
      "Multi-cavity thermoformed trays or paper dividers",
      "Grease-proof and aroma-locking glassine pads"
    ],
    applications: [
      "Artisanal Pralines & Truffles",
      "Confectionery & Bakery Collections",
      "Gourmet Dry Fruit Boxes"
    ],
    materialsUsed: ["Food Grade Virgin Board", "PET Vacuum Trays"],
    finishingOptions: ["Gold Foil Stamping", "ClearPET Window Patching"]
  },
  {
    id: "customized-box",
    title: "Customized Box",
    category: "packaging",
    image: skincarePkgImg,
    shortDesc: "Bespoke packaging engineered to exact product dimensions for cosmetics, apparel, electronics, and liquor.",
    longDesc: "Custom packaging tailored down to the exact millimeter. We develop structural CAD dielines and prototype physical samples to guarantee flawless fit and protection.",
    gallery: [skincarePkgImg, liquorPkgImg, packagingGluerImg],
    benefits: [
      "Rapid structural 3D CAD sample prototyping",
      "Tailored cushioning inserts for drop protection",
      "Unlimited custom dimensions & shapes"
    ],
    applications: [
      "Cosmetics & Skincare Bottle Kits",
      "Liquor & Wine Presentation Cases",
      "Apparel & Footwear Packaging"
    ],
    materialsUsed: ["Custom Combination Board", "Acrylic", "Kappa Board"],
    finishingOptions: ["3D Foil", "Soft Touch Lamination", "Custom Latches"]
  },
  {
    id: "jewellery-box",
    title: "Jewellery Box",
    category: "packaging",
    image: jewelleryBoxPkgImg,
    shortDesc: "Luxury velvet-wrapped and leatherette rigid jewellery presentation boxes with plush ring and necklace slots.",
    longDesc: "Protect and showcase precious gold, diamond, and designer jewelry with plush velvet, leatherette, and satin-lined rigid presentation boxes.",
    gallery: [jewelleryBoxPkgImg, rigidGiftBoxImg, selectPkgThreeImg],
    benefits: [
      "High-density plush velvet & leatherette wrap options",
      "Die-cut ring, pendant, and bangles slots",
      "Precision metal spring hinge or magnetic lid"
    ],
    applications: [
      "Gold & Diamond Jewelry Retail",
      "High-End Fashion Accessories",
      "Luxury Coin & Bar Presentation"
    ],
    materialsUsed: ["Heavy Kappa Board", "Plush Microfiber Velvet", "PU Leather"],
    finishingOptions: ["Gold Leaf Stamping", "Satin Interior Lining"]
  },
  {
    id: "mono-carton",
    title: "Mono Carton / Duplex Boxes",
    category: "packaging",
    image: monoCartonImg,
    shortDesc: "Folding duplex cartons with metallic foil embellishments, window patching, and crash-lock bottom construction.",
    longDesc: "High-speed automated mono carton manufacturing. Ideal for fast-moving retail consumer goods (FMCG), pharmaceuticals, and cosmetics.",
    gallery: [monoCartonImg, foodPkgTwoImg, packagingGluerImg],
    benefits: [
      "High-speed automated die-cutting & gluing",
      "Crash-lock bottom for instant assembly on packing lines",
      "Window patching film for in-store product visibility"
    ],
    applications: [
      "Pharmaceutical Medicine Cartons",
      "FMCG Retail Product Boxes",
      "Personal Care & Toothpaste Packaging"
    ],
    materialsUsed: ["250-450 GSM Duplex / FBB / MetPET Board"],
    finishingOptions: ["MetPET Foil Drip Effect", "Braille Embossing", "Window Patching"]
  },
  {
    id: "cake-boxes",
    title: "Cake & Bakery Boxes",
    category: "packaging",
    image: cakeBakeryBoxPkgImg,
    shortDesc: "Sturdy food-safe bakery packaging with clear view windows, greaseproof coating, and easy-carry handles.",
    longDesc: "Engineered specifically for bakeries and cake artisans. Featuring grease-resistant internal barriers, top PET view windows, and easy-carry pop-up handles.",
    gallery: [cakeBakeryBoxPkgImg, foodPkgImg, monoCartonImg],
    benefits: [
      "Food-safe virgin board with moisture barrier",
      "Transparent window panel for cake decoration view",
      "Heavy load-bearing base prevents bottom collapse"
    ],
    applications: [
      "Custom Cake & Pastry Transport",
      "Gourmet Cupcake & Donut Hampers",
      "Artisanal Bakery Delivery"
    ],
    materialsUsed: ["350-400 GSM Food Grade Virgin SBS Board"],
    finishingOptions: ["Clear PET Window", "Custom Handle Die-Cut"]
  },
  {
    id: "mdf-boxes",
    title: "MDF Wooden Boxes",
    category: "packaging",
    image: mdfWoodenBoxPkgImg,
    shortDesc: "Ultra-durable laser-engraved or paper-wrapped MDF boxes for high-end liquor, dry fruits, and luxury hampers.",
    longDesc: "When maximum structural strength is required. Engineered from precision-cut MDF wood wrapped in metallic art paper or laser engraved with intricate filigree patterns.",
    gallery: [mdfWoodenBoxPkgImg, liquorPkgImg, rigidGiftBoxImg],
    benefits: [
      "Uncompromising heavy-duty structural strength",
      "Precision CNC laser engraving and cutwork",
      "Brass antique hinges and lock latches"
    ],
    applications: [
      "Prestige Single Malt & Wine Hampers",
      "Royal Dry Fruit & Spice Boxes",
      "Collector's Edition Heritage Items"
    ],
    materialsUsed: ["3mm - 6mm Engineered MDF Board"],
    finishingOptions: ["Laser Engraving", "PU Paint Finish", "Brass Latches"]
  },
  {
    id: "corrugation-boxes",
    title: "Corrugated Boxes & E-Flute Mailers",
    category: "packaging",
    image: foodPkgTwoImg,
    shortDesc: "E-Flute and 3/5-ply corrugated printed mailer boxes engineered for safe e-commerce shipping.",
    longDesc: "Protect your products during courier transit with high burst-strength corrugated mailer boxes featuring offset printed outer wraps and self-locking tabs.",
    gallery: [foodPkgTwoImg, monoCartonImg, logisticsVanImg],
    benefits: [
      "High Burst Strength (BS) and Edge Crush Test (ECT) ratings",
      "E-Flute, B-Flute, and 3/5-Ply flute options",
      "High-resolution offset printed outer liner for branding"
    ],
    applications: [
      "E-Commerce Shipping Mailers",
      "Subscription Box Packaging",
      "Heavy Consumer Appliance Shipping"
    ],
    materialsUsed: ["Craft Liner", "E-Flute / B-Flute Corrugated Board"],
    finishingOptions: ["Waterproof Varnish", "Self-Locking Die Cut"]
  },
  {
    id: "tshirt-printing",
    title: "T-Shirt Printing",
    category: "packaging",
    image: tshirtPrintingImg,
    shortDesc: "Custom t-shirt printing for corporate uniforms, events and merchandise using screen and DTF printing.",
    longDesc: "Bulk and short-run t-shirt printing on combed cotton and poly-blend fabrics. We use screen printing for high-volume solid colour work and DTF/DTG for photographic, multi-colour artwork with soft hand feel and strong wash durability.",
    gallery: [tshirtPrintingImg, shirtLogoPrintingImg],
    benefits: [
      "Screen, DTF and DTG printing options",
      "Wash-durable, crack-resistant inks",
      "Bulk corporate and event quantities",
      "Accurate brand colour matching"
    ],
    applications: [
      "Corporate Uniforms & Staff Tees",
      "Event, Marathon & Campaign Merchandise",
      "Promotional Giveaways",
      "College & Institutional Apparel"
    ],
    materialsUsed: ["Combed Cotton", "Poly-Cotton Blend", "Dri-Fit Polyester"],
    finishingOptions: ["Screen Print", "DTF Transfer", "Puff / Raised Print"]
  },
  {
    id: "shirt-logo-printing",
    title: "Shirt Logo Printing",
    category: "packaging",
    image: shirtLogoPrintingImg,
    shortDesc: "Precision logo branding on formal shirts and workwear via embroidery and heat-press transfer.",
    longDesc: "Small-format brand identity application on corporate formal shirts, polos and workwear. Chest, sleeve and collar placements are produced with digitised embroidery or heat-press transfers for crisp, professional and long-lasting branding.",
    gallery: [shirtLogoPrintingImg, tshirtPrintingImg],
    benefits: [
      "Digitised embroidery for a premium finish",
      "Heat-press transfer for fine detail logos",
      "Chest, sleeve, collar and cuff placements",
      "Consistent placement across bulk orders"
    ],
    applications: [
      "Corporate Formal Shirts & Polos",
      "Hospitality & Retail Staff Uniforms",
      "Industrial Workwear Branding",
      "Executive Gifting Apparel"
    ],
    materialsUsed: ["Cotton Poplin", "Twill", "Polyester Blend Workwear"],
    finishingOptions: ["Embroidery", "Heat-Press Transfer", "Woven Label"]
  },
  {
    id: "mug-printing",
    title: "Mug Printing",
    category: "packaging",
    image: mugPrintingImg,
    shortDesc: "Custom printed ceramic and magic mugs with full-wrap sublimation branding.",
    longDesc: "Personalised ceramic mug printing using dye-sublimation for photo-quality, dishwasher-safe full wrap graphics. Available in classic white, inner-colour, matte black and heat-reveal magic mugs for gifting and retail merchandise.",
    gallery: [mugPrintingImg, cupPrintingImg],
    benefits: [
      "Photo-quality full wrap sublimation",
      "Dishwasher and microwave safe prints",
      "Single-piece personalisation supported",
      "Gift-box packaging available in-house"
    ],
    applications: [
      "Corporate Gifting & Diwali Hampers",
      "Employee Onboarding Kits",
      "Cafe & Retail Merchandise",
      "Personalised Photo Gifts"
    ],
    materialsUsed: ["Grade-A Coated Ceramic", "Magic Heat-Reveal Coating"],
    finishingOptions: ["Full Wrap Sublimation", "Inner & Handle Colour", "Matte Finish"]
  },
  {
    id: "cup-printing",
    title: "Cup Printing",
    category: "packaging",
    image: cupPrintingImg,
    shortDesc: "Branded paper and ripple cups printed food-safe for cafes, events and QSR chains.",
    longDesc: "Food-grade printed paper cups produced on flexo and offset lines with food-safe inks and PE/PLA barrier coatings. Available in 65ml to 350ml sizes with single or double-wall ripple construction for hot and cold beverages.",
    gallery: [cupPrintingImg, mugPrintingImg],
    benefits: [
      "Food-safe inks and barrier coatings",
      "Single wall, double wall and ripple options",
      "65ml to 350ml size range",
      "High-volume flexo production runs"
    ],
    applications: [
      "Cafes, QSR & Cloud Kitchens",
      "Corporate Pantries & Offices",
      "Exhibitions & Event Catering",
      "Hotel & Banquet Service"
    ],
    materialsUsed: ["Food-Grade Cup Board", "PE / PLA Coated Paper"],
    finishingOptions: ["Flexo Print", "Offset Print", "Matte Food-Safe Varnish"]
  },
  {
    id: "bottle-printing",
    title: "Bottle Printing",
    category: "packaging",
    image: bottlePrintingImg,
    shortDesc: "Custom branded steel, glass and PET bottles printed with UV, screen and laser engraving.",
    longDesc: "Merchandise bottle branding on insulated steel, glass and PET bodies using cylindrical UV printing, curved screen printing and laser engraving for durable, scratch-resistant logos that survive daily use and washing.",
    gallery: [bottlePrintingImg, mugPrintingImg],
    benefits: [
      "Cylindrical UV, screen and laser options",
      "Scratch and wash-resistant branding",
      "Matte, gloss and metallic bottle finishes",
      "Custom gift boxing for hampers"
    ],
    applications: [
      "Corporate Gifting & Welcome Kits",
      "Fitness, Sports & Event Merchandise",
      "Hotel & Wellness Amenities",
      "Retail Branded Drinkware"
    ],
    materialsUsed: ["Insulated Stainless Steel", "Borosilicate Glass", "Food-Grade PET"],
    finishingOptions: ["Cylindrical UV Print", "Curved Screen Print", "Laser Engraving"]
  }
];

