/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";

// Shared SVG properties for high-end line-art look
const strokeProps = {
  stroke: "currentColor",
  strokeWidth: "1.2",
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  fill: "none",
};

// 1. IT Icon: Monitor with code lines
export const ITIcon = () => (
  <svg viewBox="0 0 48 48" className="w-12 h-12 text-gray-700" {...strokeProps}>
    <rect x="6" y="8" width="36" height="24" rx="2" />
    <path d="M16 38h16M24 32v6" />
    <path d="M13 14h6M13 18h14M13 22h4" />
    <path d="M31 16l4 4-4 4" />
  </svg>
);

// 2. Art Icon: Palette and brush
export const ArtIcon = () => (
  <svg viewBox="0 0 48 48" className="w-12 h-12 text-gray-700" {...strokeProps}>
    <path d="M14 36c-4.4 0-8-3.6-8-8 0-7.2 6.8-13 15-13 3.3 0 6.4.9 9 2.5 1.5-.9 3.2-1.5 5-1.5 4.4 0 8 3.6 8 8 0 6-6.3 12-14 12h-10" />
    <circle cx="15" cy="22" r="1.5" fill="currentColor" />
    <circle cx="21" cy="27" r="1.5" fill="currentColor" />
    <circle cx="28" cy="22" r="1.5" fill="currentColor" />
    <path d="M30 14l8-8M35 11l2-2" />
  </svg>
);

// 3. FMCG Icon: Grocery bags and tags
export const FmcgIcon = () => (
  <svg viewBox="0 0 48 48" className="w-12 h-12 text-gray-700" {...strokeProps}>
    <path d="M10 16h18v24H10z" />
    <path d="M15 16v-4c0-2.2 1.8-4 4-4s4 1.8 4 4v4" />
    <path d="M32 20h8v16h-8" />
    <circle cx="16" cy="24" r="1.5" fill="currentColor" />
    <path d="M20 24h4M16 29h8" />
    <path d="M35 24h2" />
  </svg>
);

// 4. Pharma Icon: Pill bottles and ampoule
export const PharmaIcon = () => (
  <svg viewBox="0 0 48 48" className="w-12 h-12 text-gray-700" {...strokeProps}>
    <rect x="8" y="18" width="14" height="22" rx="2" />
    <path d="M11 18v-4h8v4" />
    <path d="M15 24v10M10 29h10" />
    <path d="M32 12c-1.5 0-3 1.5-3 3v20c0 1.5 1.5 3 3 3s3-1.5 3-3V15c0-1.5-1.5-3-3-3zM32 24h6" />
    <circle cx="32" cy="18" r="1" fill="currentColor" />
  </svg>
);

// 5. Banking Icon: Columns
export const BankingIcon = () => (
  <svg viewBox="0 0 48 48" className="w-12 h-12 text-gray-700" {...strokeProps}>
    <path d="M6 16l18-10 18 10M8 16v22M40 16v22M15 20v14M24 20v14M33 20v14" />
    <path d="M5 38h38M4 42h40" />
  </svg>
);

// 6. Telecom Icon: Signal tower
export const TelecomIcon = () => (
  <svg viewBox="0 0 48 48" className="w-12 h-12 text-gray-700" {...strokeProps}>
    <path d="M20 42L24 12l4 30M16 42h16M22 24h4M21 32h6" />
    <circle cx="24" cy="9" r="2" fill="currentColor" />
    <path d="M18 15a8 8 0 0112 0M14 19a14 14 0 0120 0M10 23a20 20 0 0128 0" />
  </svg>
);

// 7. Education Icon: Graduation Cap and book
export const EducationIcon = () => (
  <svg viewBox="0 0 48 48" className="w-12 h-12 text-gray-700" {...strokeProps}>
    <path d="M24 8L6 16l18 8 18-8z" />
    <path d="M12 21v10c0 4 5.4 6 12 6s12-2 12-6V21M38 18v14M38 24h2" />
  </svg>
);

// 8. Hospitality Icon: Catering cart
export const HospitalityIcon = () => (
  <svg viewBox="0 0 48 48" className="w-12 h-12 text-gray-700" {...strokeProps}>
    <path d="M12 20h26v16H12zM8 14h4M10 14v22" />
    <path d="M18 20V12c0-3 3-5 6-5s6 2 6 5v8" />
    <circle cx="16" cy="40" r="3" />
    <circle cx="34" cy="40" r="3" />
    <path d="M18 26h12" />
  </svg>
);

// 9. Automotive Icon: Car Profile
export const AutomotiveIcon = () => (
  <svg viewBox="0 0 48 48" className="w-12 h-12 text-gray-700" {...strokeProps}>
    <path d="M8 28h32M14 20l3-6c1-2 2-3 4-3h12c2 0 3 1 4 3l3 6M6 28l2-5c1-2 2-3 4-3h24c2 0 3 1 4 3l2 5c1 1 1 2 1 3v6H5v-6" />
    <circle cx="15" cy="36" r="4" />
    <circle cx="33" cy="36" r="4" />
  </svg>
);

// 10. Real Estate Icon: Hand holding house
export const RealEstateIcon = () => (
  <svg viewBox="0 0 48 48" className="w-12 h-12 text-gray-700" {...strokeProps}>
    <path d="M18 16l8-6 8 6M21 16v14h10V16" />
    <path d="M24 22h4v8h-4z" />
    <path d="M6 34c4-4 8-1 12-3s4 4 10 2 8-3 14 1" />
  </svg>
);

// 11. Spirits & Liquor Icon: Bottle and Glass
export const SpiritsIcon = () => (
  <svg viewBox="0 0 48 48" className="w-12 h-12 text-gray-700" {...strokeProps}>
    <path d="M14 20h12v22H14zM17 20v-8c0-1 1-2 2-2h2c1 0 2 1 2 2v8M17 10h6" />
    <path d="M30 28h8v10c0 2.2-1.8 4-4 4s-4-1.8-4-4V28z" />
    <path d="M30 32h8" />
  </svg>
);

// 12. Food & Beverages Icon: Soda and Burger
export const FoodIcon = () => (
  <svg viewBox="0 0 48 48" className="w-12 h-12 text-gray-700" {...strokeProps}>
    <path d="M10 20l3 20c.3 2 1.7 3 3.7 3h4.6c2 0 3.4-1 3.7-3l3-20M9 20h18" />
    <path d="M22 10l-4-5M18 20v-7h4v7M29 28c3 0 5-1.5 5-3.5S32 21 29 21c-2 0-3 1.5-3 3.5s2 3.5 3 3.5zm-3 8h10M25 32c0-3 3-5 6-5s6 2 6 5v1h-12z" />
  </svg>
);

// 13. Beauty & Skincare Icon: Cosmetics
export const BeautyIcon = () => (
  <svg viewBox="0 0 48 48" className="w-12 h-12 text-gray-700" {...strokeProps}>
    <rect x="10" y="22" width="12" height="20" rx="2" />
    <path d="M13 22v-6c0-2 2-3 4-3s4 1 4 3v6M13 16h8" />
    <path d="M26 28h12v14H26zM28 28c0-4 3-6 6-6s6 2 6 6" />
  </svg>
);

// 14. Fashion & Jewellery Icon: Necklace on stand
export const FashionIcon = () => (
  <svg viewBox="0 0 48 48" className="w-12 h-12 text-gray-700" {...strokeProps}>
    <path d="M14 12c4 4 8 5 10 5s6-1 10-5c3 4 4 10 4 16H10c0-6 1-12 4-16z" />
    <path d="M18 14c2.5 3 4 4 6 4s3.5-1 6-4" />
    <circle cx="24" cy="22" r="2" fill="currentColor" />
    <path d="M24 24v10M18 42h12M24 34v8" />
  </svg>
);

// 15. Design Service Icon: Monitor with Vector pen path
export const DesignServiceIcon = () => (
  <svg viewBox="0 0 48 48" className="w-16 h-16 text-gray-800" {...strokeProps} strokeWidth="1.5">
    <rect x="5" y="6" width="38" height="26" rx="2" />
    <path d="M14 42h20M24 32v10" />
    <circle cx="16" cy="18" r="2.5" />
    <circle cx="32" cy="18" r="2.5" />
    <path d="M18.5 18H29.5M24 13.5v9" />
    <path d="M22 11.5l2-2 2 2" strokeWidth="1.2" />
  </svg>
);

// 16. Print Service Icon: CMYK Ink Droplets
export const PrintServiceIcon = () => (
  <svg viewBox="0 0 48 48" className="w-16 h-16 text-gray-800" {...strokeProps} strokeWidth="1.5">
    <path d="M15 28c0 4.4 3.6 8 8 8s8-3.6 8-8c0-7-8-16-8-16s-8 9-8 16z" />
    <path d="M26 31c0 3 2.5 5.5 5.5 5.5s5.5-2.5 5.5-5.5c0-4.8-5.5-11-5.5-11s-5.5 6.2-5.5 11z" />
    <path d="M11 32.5c0 2.5 2 4.5 4.5 4.5s4.5-2 4.5-4.5c0-4-4.5-9-4.5-9s-4.5 5-4.5 9z" />
  </svg>
);

// 17. Packaging Service Icon: Carton Box with Bottles
export const PackagingServiceIcon = () => (
  <svg viewBox="0 0 48 48" className="w-16 h-16 text-gray-800" {...strokeProps} strokeWidth="1.5">
    <path d="M8 18l16-8 16 8M8 18v20l16 10M40 18v20l-16 10M8 18l16 9 16-9M24 27v21" />
    <path d="M14 14l5 3M34 14l-5 3" />
  </svg>
);

// 18. Display Service Icon: Shelves
export const DisplayServiceIcon = () => (
  <svg viewBox="0 0 48 48" className="w-16 h-16 text-gray-800" {...strokeProps} strokeWidth="1.5">
    <path d="M8 8h32M8 20h32M8 32h32M8 44h32M12 8v36M36 8v36" />
    <rect x="15" y="12" width="6" height="8" rx="1" />
    <rect x="27" y="11" width="6" height="9" rx="1" />
    <rect x="16" y="24" width="7" height="8" rx="1" />
    <rect x="25" y="25" width="8" height="7" rx="1" />
  </svg>
);

// 19. Logistics Service Icon: Warehouse & Truck
export const LogisticsServiceIcon = () => (
  <svg viewBox="0 0 48 48" className="w-16 h-16 text-gray-800" {...strokeProps} strokeWidth="1.5">
    <path d="M6 24V14l10-6 10 6v10" />
    <path d="M10 24h12M6 18h20M24 16l3-2" />
    <rect x="28" y="22" width="14" height="14" rx="1" />
    <circle cx="32" cy="39" r="3" />
    <circle cx="38" cy="39" r="3" />
    <path d="M28 29h6v4h-6M38 22v7" />
  </svg>
);

// 20. Photography Service Icon: Camera with light
export const PhotographyServiceIcon = () => (
  <svg viewBox="0 0 48 48" className="w-16 h-16 text-gray-800" {...strokeProps} strokeWidth="1.5">
    <path d="M9 16h6l3-5h12l3 5h6a3 3 0 013 3v20a3 3 0 01-3 3H9a3 3 0 01-3-3V19a3 3 0 013-3z" />
    <circle cx="24" cy="27" r="8" />
    <circle cx="24" cy="27" r="4" />
    <circle cx="36" cy="20" r="1.5" fill="currentColor" />
  </svg>
);

// Mapping of helper components for easy access in our grid layouts
export const IndustryIconMap: Record<string, React.ComponentType> = {
  it: ITIcon,
  art: ArtIcon,
  fmcg: FmcgIcon,
  pharma: PharmaIcon,
  banking: BankingIcon,
  telecom: TelecomIcon,
  education: EducationIcon,
  hospitality: HospitalityIcon,
  automotive: AutomotiveIcon,
  real_estate: RealEstateIcon,
  spirits: SpiritsIcon,
  food: FoodIcon,
  beauty: BeautyIcon,
  fashion: FashionIcon,
};

export const ServiceIconMap: Record<string, React.ComponentType> = {
  design: DesignServiceIcon,
  print: PrintServiceIcon,
  packaging: PackagingServiceIcon,
  display: DisplayServiceIcon,
  logistics: LogisticsServiceIcon,
  photography: PhotographyServiceIcon,
};
