/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 *
 * Working-process video mapping.
 * Files live in /public/videos/** so they are served as plain static files
 * (works identically on Lovable, Netlify or any static host).
 */

const SERVICE_VIDEO_IDS = [
  "catalogue-printing",
  "brochure-printing",
  "leaflet-printing",
  "standee-printing",
  "flex-printing",
  "folder-printing",
  "book-printing",
  "wall-calendar",
  "table-calendar",
  "diaries",
  "tent-cards",
  "danglers",
  "marketing-collaterals",
  "coffee-table-books",
  "writing-pads",
  "poster-printing",
  "pamphlets",
  "annual-reports",
  "custom-printing-solutions",
  "rigid-box",
  "gift-box",
  "chocolate-box",
  "customized-box",
  "jewellery-box",
  "mono-carton",
  "cake-boxes",
  "mdf-boxes",
  "corrugation-boxes",
] as const;

const MACHINE_VIDEO_IDS = [
  "heidelberg-6-color",
  "heidelberg-4-color",
  "heidelberg-1-color-a",
  "heidelberg-1-color-b",
  "konica-minolta-digital",
  "thermal-lamination",
  "normal-lamination",
  "cutting-machine",
  "binding-machine",
  "spot-uv-screen",
  "creasing-folding",
  "case-making",
  "grooving-machine",
  "sheet-pasting-gluing",
  "corner-cutting",
  "embossing-gold-foiling",
  "automatic-box-machine",
] as const;

const serviceSet = new Set<string>(SERVICE_VIDEO_IDS);
const machineSet = new Set<string>(MACHINE_VIDEO_IDS);

/** Returns the working video URL for a service id, or null when none exists. */
export function getServiceVideo(id: string): string | null {
  return serviceSet.has(id) ? `/videos/services/${id}.mp4` : null;
}

/** Returns the "how it works" video URL for a machine id, or null when none exists. */
export function getMachineVideo(id: string): string | null {
  return machineSet.has(id) ? `/videos/machines/${id}.mp4` : null;
}
