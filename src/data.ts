/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface ProductSection {
  title: string;
  items: string[];
}

export const MAINLINE_PACKAGING: string[] = [
  "Rigid Box",
  "Gift box",
  "Chocolate Box",
  "Customized Box",
  "Jewellery box",
  "Mono Carton/ Duplex Boxes",
  "Cake boxes",
  "MDF boxes",
  "Corrugation boxes"
];

export const COMMERCIAL_PRINTING: string[] = [
  "Catalogue Printing",
  "Brochure Printing",
  "Leaflet",
  "Standy",
  "flex printing",
  "Folder",
  "Book Printing",
  "Wall / Table Calendar",
  "Diaries",
  "Tent Card",
  "Dangler",
  "Marketing Collaterals",
  "Coffee Table Book",
  "Writing Pad",
  "Poster",
  "Pamphlets",
  "Annual Reports"
];

export interface IndustryItem {
  id: string;
  label: string;
}

export const INDUSTRIES: IndustryItem[] = [
  { id: "it", label: "IT" },
  { id: "art", label: "ART" },
  { id: "fmcg", label: "FMCG" },
  { id: "pharma", label: "PHARMA" },
  { id: "banking", label: "BANKING" },
  { id: "telecom", label: "TELECOM" },
  { id: "education", label: "EDUCATION" },
  { id: "hospitality", label: "HOSPITALITY" },
  { id: "automotive", label: "AUTOMOTIVE" },
  { id: "real_estate", label: "REAL ESTATE" },
  { id: "spirits", label: "SPIRITS & LIQUOR" },
  { id: "food", label: "FOOD & BEVERAGES" },
  { id: "beauty", label: "BEAUTY & SKINCARE" },
  { id: "fashion", label: "FASHION & JEWELLERY" }
];

export interface ServiceItem {
  id: string;
  title: string;
}

export const SERVICES_LIST: ServiceItem[] = [
  { id: "design", title: "DESIGN" },
  { id: "print", title: "PRINT" },
  { id: "packaging", title: "PACKAGING" },
  { id: "display", title: "DISPLAY SYSTEMS" },
  { id: "logistics", title: "LOGISTICS & WAREHOUSING" },
  { id: "photography", title: "PHOTOGRAPHY" }
];

export interface ClientItem {
  name: string;
}

export const CLIENT_LOGOS: ClientItem[] = [
  { name: "KILCHOMAN" },
  { name: "BELVEDERE VODKA" },
  { name: "Glenfiddich" },
  { name: "Ballantine's" }
];
