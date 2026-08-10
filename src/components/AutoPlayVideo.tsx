/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";

interface AutoPlayVideoProps {
  /** Video file URL served from /public (works on Netlify & any static host) */
  src: string;
  /** Poster image shown before the clip starts (usually the item image) */
  poster?: string;
  title?: string;
  badgeLabel?: string;
  className?: string;
  heightClass?: string;
}

/**
 * Instant, scroll-aware looping video.
 * - Starts downloading right away (preload="auto") so it is ready to play
 *   the moment it scrolls into view instead of buffering on demand.
 * - Plays automatically as soon as it is visible (and as soon as it has
 *   enough data), keeps looping continuously the whole time the person
 *   stays on the section, and pauses when scrolled away (saves CPU/data).
 * - Multiple event hooks (canplay/loadeddata/loadedmetadata) all retry
 *   play() so slow networks or browsers that fire events in a different
 *   order still start playback immediately once ready.
 * - Silently unmounts itself if the file is missing so layout never breaks.
 */
export default function AutoPlayVideo({
  src,
  title,
  badgeLabel = "LIVE WORKING VIDEO",
  className = "",
  heightClass = "h-[240px] sm:h-[330px] lg:h-[380px]",
}: AutoPlayVideoProps) {
  const wrapRef = React.useRef<HTMLDivElement | null>(null);
  const videoRef = React.useRef<HTMLVideoElement | null>(null);
  const isInViewRef = React.useRef(false);
  const [failed, setFailed] = React.useState(false);
  const [isReady, setIsReady] = React.useState(false);

  const attemptPlay = React.useCallback(() => {
    const video = videoRef.current;
    if (!video || !isInViewRef.current) return;
    // Ensure muted is set as a property too (some mobile browsers ignore
    // the HTML attribute alone and block autoplay without this).
    video.muted = true;
    const playPromise = video.play();
    if (playPromise && typeof playPromise.catch === "function") {
      playPromise.catch(() => {
        // Autoplay was blocked (rare with muted video) - retry shortly.
        window.setTimeout(() => {
          if (isInViewRef.current) {
            video.play().catch(() => {});
          }
        }, 250);
      });
    }
  }, []);

  React.useEffect(() => {
    const node = wrapRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          isInViewRef.current = entry.isIntersecting;
          const video = videoRef.current;
          if (!video) return;
          if (entry.isIntersecting) {
            attemptPlay();
          } else {
            video.pause();
          }
        });
      },
      // Start slightly before the block is fully on-screen and trigger on
      // the very first sliver of visibility so playback begins instantly.
      { threshold: 0.05, rootMargin: "150px 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [attemptPlay]);

  // Re-attempt play whenever the browser reports the video has enough
  // data, regardless of which order these events fire in.
  const handleReady = React.useCallback(() => {
    setIsReady(true);
    attemptPlay();
  }, [attemptPlay]);

  // Keep playback going continuously - if it ever stalls or pauses for a
  // buffering hiccup while still on screen, resume automatically.
  const handlePauseWhileVisible = React.useCallback(() => {
    if (isInViewRef.current) attemptPlay();
  }, [attemptPlay]);

  if (failed) return null;

  return (
    <motion.div
      ref={wrapRef}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5 }}
      className={`relative w-full overflow-hidden rounded-xs border border-neutral-800 bg-black shadow-xl ${heightClass} ${className}`}
    >
      {!isReady && (
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-900 via-neutral-800 to-neutral-900 animate-pulse z-0 flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-[#D4AF37]/40 border-t-[#D4AF37] rounded-full animate-spin" />
        </div>
      )}

      <video
        ref={videoRef}
        src={src}
        muted
        loop
        autoPlay
        playsInline
        // Fetch the file immediately (not just metadata) so it's ready to
        // play the instant it becomes visible, instead of buffering then.
        preload="auto"
        onCanPlay={handleReady}
        onLoadedData={handleReady}
        onLoadedMetadata={handleReady}
        onPause={handlePauseWhileVisible}
        onError={() => setFailed(true)}
        className="relative z-10 w-full h-full object-cover object-center bg-black"
      />

      <div className="absolute inset-0 z-20 bg-gradient-to-t from-black/75 via-transparent to-transparent pointer-events-none" />

      <div className="absolute top-3 right-3 z-20 bg-black/75 backdrop-blur-md px-2.5 py-1 border border-white/20 text-white text-[9px] font-mono tracking-widest uppercase flex items-center gap-1.5 rounded-xs">
        <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
        <span>{badgeLabel}</span>
      </div>

      {title && (
        <div className="absolute bottom-0 left-0 right-0 z-20 p-4 sm:p-5">
          <p className="text-[10px] font-black tracking-[0.2em] uppercase text-[#f5b800] font-display mb-1">
            HOW IT WORKS
          </p>
          <h4 className="text-sm sm:text-lg font-extrabold text-white uppercase font-display tracking-wide drop-shadow-md">
            {title}
          </h4>
        </div>
      )}
    </motion.div>
  );
}
