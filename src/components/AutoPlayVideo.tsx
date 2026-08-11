/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useMemo } from "react";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export type CinematicPresetKey = "A" | "B" | "C" | "D" | "E" | "F" | "G" | "H";

interface CinematicImageProps {
  src: string;
  alt: string;
  title?: string;
  categoryTag?: string;
  presetIndex?: number;
  presetKey?: CinematicPresetKey;
  className?: string;
  aspectRatioClass?: string;
  onClick?: () => void;
  showHoverAction?: boolean;
  hoverActionText?: string;
  isVideo?: boolean;
  videoSrc?: string;
  /**
   * Set true only for the first / above-the-fold card on a page (hero,
   * or the first item in a grid). That one loads at full priority
   * immediately. Every other card defaults to false, which means:
   *  - images use native lazy-loading (browser fetches them once they're
   *    actually near the viewport) instead of every image on the page
   *    being forced to "high" priority at once.
   *  - embedded videos pre-buffer once ~600px from the viewport instead
   *    of all starting to download the moment the page opens.
   * This is what stops Service/Machinery pages (which render many of
   * these cards) from having every video/image fight for bandwidth
   * simultaneously, which was making playback feel slow to start.
   */
  priority?: boolean;
}

// 8 Cinematic Motion Presets with varying pan directions and subtle zoom factors
const MOTION_PRESETS = [
  // Preset A: Slow Zoom In + Pan Left
  {
    scale: [1, 1.08, 1.03, 1],
    x: ["0%", "-3.5%", "-1.5%", "0%"],
    y: ["0%", "1.5%", "-1%", "0%"],
    duration: 11,
  },
  // Preset B: Slow Zoom Out + Pan Right
  {
    scale: [1.08, 1.01, 1.05, 1.08],
    x: ["0%", "3.5%", "1.5%", "0%"],
    y: ["0%", "-1.5%", "1%", "0%"],
    duration: 10,
  },
  // Preset C: Zoom In + Vertical Pan Up
  {
    scale: [1.01, 1.09, 1.04, 1.01],
    x: ["0%", "-1%", "1%", "0%"],
    y: ["0%", "-4%", "-1.5%", "0%"],
    duration: 12,
  },
  // Preset D: Zoom Out + Vertical Pan Down
  {
    scale: [1.08, 1.02, 1.06, 1.08],
    x: ["0%", "1%", "-1%", "0%"],
    y: ["0%", "4%", "1.5%", "0%"],
    duration: 9.5,
  },
  // Preset E: Diagonal Parallax
  {
    scale: [1.02, 1.08, 1.03, 1.02],
    x: ["0%", "-3%", "2%", "0%"],
    y: ["0%", "-3%", "2%", "0%"],
    duration: 11.5,
  },
  // Preset F: Very Slow Center Zoom
  {
    scale: [1, 1.08, 1.02, 1],
    x: ["0%", "0%", "0%", "0%"],
    y: ["0%", "0%", "0%", "0%"],
    duration: 10,
  },
  // Preset G: Gentle Focus & Floating Drift
  {
    scale: [1.03, 1.07, 1.01, 1.03],
    x: ["0%", "2.5%", "-2%", "0%"],
    y: ["0%", "-2%", "2%", "0%"],
    duration: 12,
  },
  // Preset H: Slow Cinematic Push-In
  {
    scale: [1.01, 1.09, 1.05, 1.01],
    x: ["0%", "-2%", "2%", "0%"],
    y: ["0%", "-1.5%", "-0.5%", "0%"],
    duration: 10.5,
  },
];

export default function CinematicImage({
  src,
  alt,
  title,
  categoryTag,
  presetIndex = 0,
  presetKey,
  className = "",
  aspectRatioClass = "min-h-[360px] sm:min-h-[440px] lg:min-h-[500px]",
  onClick,
  showHoverAction = true,
  hoverActionText = "EXPLORE DETAILS",
  isVideo = false,
  videoSrc,
  priority = false,
}: CinematicImageProps) {
  const wrapRef = React.useRef<HTMLDivElement | null>(null);
  const [isLoaded, setIsLoaded] = React.useState(false);
  // Non-priority videos wait until they're about to scroll into view
  // before they start downloading, so they don't compete with every
  // other video/image on the page from the moment it opens.
  const [shouldLoadVideo, setShouldLoadVideo] = React.useState(
    priority || !isVideo
  );

  React.useEffect(() => {
    if (!isVideo || priority) return;
    const node = wrapRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShouldLoadVideo(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0, rootMargin: "600px 0px" }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [isVideo, priority]);

  // Determine preset configuration
  const preset = useMemo(() => {
    if (presetKey) {
      const keyMap: Record<CinematicPresetKey, number> = {
        A: 0, B: 1, C: 2, D: 3, E: 4, F: 5, G: 6, H: 7
      };
      return MOTION_PRESETS[keyMap[presetKey]] || MOTION_PRESETS[0];
    }
    return MOTION_PRESETS[Math.abs(presetIndex) % MOTION_PRESETS.length];
  }, [presetIndex, presetKey]);

  return (
    <motion.div
      ref={wrapRef}
      initial={{ opacity: 0, scale: 1.02 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      onClick={onClick}
      className={`relative w-full overflow-hidden bg-neutral-900 rounded-xs group border border-gray-200/80 shadow-2xl select-none ${
        onClick ? "cursor-pointer" : ""
      } ${aspectRatioClass} ${className}`}
    >
      {/* Skeleton Shimmer Loading Placeholder - sits BEHIND the image (z-0)
          so it never covers/delays the picture itself; it just fills the
          tiny gap before the very first bytes paint. For videos it shows
          the thumbnail (src) as a poster while the clip buffers. */}
      {!isLoaded && (
        <div
          className="absolute inset-0 z-0 flex items-center justify-center bg-cover bg-center"
          style={isVideo && src ? { backgroundImage: `url(${src})` } : undefined}
        >
          {!(isVideo && src) && (
            <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-neutral-900 via-neutral-800 to-neutral-900" />
          )}
          {isVideo && src && <div className="absolute inset-0 bg-black/35" />}
          <div className="relative w-10 h-10 border-2 border-[#f5b800]/40 border-t-[#f5b800] rounded-full animate-spin" />
        </div>
      )}

      {/* 1. CINEMATIC VIDEO / IMAGE CONTAINER */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        {isVideo && videoSrc ? (
          shouldLoadVideo && (
            <video
              src={videoSrc}
              poster={src}
              autoPlay
              muted
              loop
              playsInline
              preload={priority ? "auto" : "metadata"}
              onCanPlay={() => setIsLoaded(true)}
              onLoadedData={() => setIsLoaded(true)}
              onError={() => setIsLoaded(true)}
              className="w-full h-full object-cover object-center filter brightness-95"
            />
          )
        ) : (
          <motion.img
            src={src}
            alt={alt}
            // Only the priority card (first/hero) fetches immediately at
            // high priority. Everything else uses native lazy-loading so
            // the browser fetches it as it actually nears the viewport
            // instead of every image on a busy page loading at once.
            loading={priority ? "eager" : "lazy"}
            decoding="async"
            {...(priority
              ? ({ fetchpriority: "high" } as Record<string, string>)
              : {})}
            onLoad={() => setIsLoaded(true)}
            onError={(e) => {
              setIsLoaded(true);
              const target = e.currentTarget as HTMLImageElement;
              if (!target.src.includes("premium-pack-co-logo")) {
                target.src = "/images/logo/premium-pack-co-logo.jpg";
              }
            }}
            animate={{
              scale: preset.scale,
              x: preset.x,
              y: preset.y,
            }}
            transition={{
              duration: preset.duration,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut" as const,
            }}
            style={{ willChange: "transform" }}
            className="relative z-10 w-full h-full object-cover object-center filter brightness-[0.96] contrast-[1.03]"
            referrerPolicy="no-referrer"
          />
        )}
      </div>

      {/* 2. PERMANENT CINEMATIC GRADIENT OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent pointer-events-none transition-opacity duration-500 group-hover:opacity-90" />

      {/* 3. GOLD AMBIENT BORDER GLOW ON HOVER */}
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#f5b800]/80 transition-colors duration-500 pointer-events-none rounded-xs" />

      {/* 4. TOP TAG BADGE */}
      {categoryTag && (
        <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-md px-3.5 py-1.5 border border-[#f5b800]/40 text-[#f5b800] text-[10px] font-extrabold tracking-[0.2em] uppercase font-display z-10 rounded-xs shadow-md">
          {categoryTag}
        </div>
      )}

      {/* 5. LIVE VIDEO / CINEMATIC MOTION BADGE */}
      <div className="absolute top-4 right-4 bg-black/75 backdrop-blur-md px-2.5 py-1 border border-white/20 text-white text-[9px] font-mono tracking-widest uppercase z-10 flex items-center gap-1.5 rounded-xs">
        <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
        <span>{isVideo ? "LIVE VIDEO" : "CINEMATIC"}</span>
      </div>

      {/* 6. BOTTOM CONTENT & VIEW MORE ACTION BUTTON */}
      <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 text-white z-10 flex flex-col justify-end transition-all duration-300">
        {title && (
          <h3 className="text-base sm:text-xl font-extrabold tracking-wide uppercase font-display text-white group-hover:text-[#f5b800] transition-colors duration-300 drop-shadow-md">
            {title}
          </h3>
        )}

        {/* Sliding Interactive Button on Hover */}
        {showHoverAction && (
          <div className="mt-3">
            <div className="opacity-85 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-2 text-xs font-black tracking-widest text-[#f5b800] uppercase font-display">
              <span>{hoverActionText}</span>
              <ArrowRight size={14} className="transform group-hover:translate-x-1.5 transition-transform duration-300" />
            </div>
          </div>
        )}

      </div>
    </motion.div>
  );
}
