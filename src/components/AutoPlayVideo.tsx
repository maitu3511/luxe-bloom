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
 * - Every machine/service page can have 15-25 of these videos in the DOM
 *   at once. Previously every single one carried preload="auto" from the
 *   moment it mounted, so the browser tried to download every clip on the
 *   page in parallel the instant the page opened - the one actually on
 *   screen had to fight 20+ other downloads for bandwidth, which is why
 *   playback did not start immediately. Now the <video> has no `src` at
 *   all until it gets within ~800px of the viewport, so the browser never
 *   requests it until it's actually about to be needed.
 * - Once it is within that 800px pre-load range, the file starts fetching
 *   right away (preload="auto") so it has a head start and is fully ready
 *   by the time it scrolls into the visible play zone.
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
  const hasStartedLoadRef = React.useRef(false);
  const [failed, setFailed] = React.useState(false);
  const [isReady, setIsReady] = React.useState(false);
  // Becomes true only once the video is close to the viewport - this is
  // what gates whether the <video> tag gets a `src` at all (see below).
  const [shouldLoad, setShouldLoad] = React.useState(false);

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

  // Early "start downloading" observer - fires well before the video is
  // visible so the file has a head start buffering, without competing
  // with every other video on the page for bandwidth from the moment the
  // page loads.
  React.useEffect(() => {
    const node = wrapRef.current;
    if (!node) return;

    const preloadObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasStartedLoadRef.current) {
            hasStartedLoadRef.current = true;
            setShouldLoad(true);
            preloadObserver.disconnect();
          }
        });
      },
      { threshold: 0, rootMargin: "800px 0px" }
    );

    preloadObserver.observe(node);
    return () => preloadObserver.disconnect();
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
        // No `src` until shouldLoad flips true (~800px before the video
        // reaches the viewport) - this is what stops the browser from
        // requesting every video on the page at once.
        src={shouldLoad ? src : undefined}
        muted
        loop
        autoPlay
        playsInline
        // Once loading has started, fetch the whole file (not just
        // metadata) so it's fully buffered by the time it becomes visible.
        preload={shouldLoad ? "auto" : "none"}
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
