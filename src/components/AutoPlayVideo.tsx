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
  /**
   * Set true ONLY for the first / above-the-fold video on a page (e.g. the
   * hero video on Machinery/Services). That one starts fetching the
   * instant it mounts. Every other video on the page defaults to false,
   * which means it starts buffering as soon as it's about to scroll into
   * view (well before the visitor reaches it) instead of every single
   * video on the page fighting for bandwidth from the moment the page
   * opens. That bandwidth contention was why playback felt slow to start
   * on pages with many videos.
   */
  priority?: boolean;
}

/**
 * Instant looping video.
 * - The `priority` video (pass it only on the first/hero clip per page)
 *   starts fetching and playing the moment it mounts.
 * - Every other video pre-buffers once it's ~600px from entering the
 *   viewport, so it's already ready by the time the visitor scrolls to
 *   it, without competing with off-screen videos elsewhere on the page.
 * - Plays automatically once loaded, keeps looping continuously, and
 *   multiple event hooks (canplay/loadeddata/loadedmetadata) all retry
 *   play() so slow networks or browsers that fire events in a different
 *   order still start playback immediately once ready.
 * - Also retries play() if scrolled back into view after being paused by
 *   the browser (e.g. background tab throttling).
 * - Shows the poster image immediately behind the loading spinner so the
 *   card never looks blank/frozen while the clip buffers.
 * - Silently unmounts itself if the file is missing so layout never breaks.
 */
export default function AutoPlayVideo({
  src,
  poster,
  title,
  badgeLabel = "LIVE WORKING VIDEO",
  className = "",
  heightClass = "h-[240px] sm:h-[330px] lg:h-[380px]",
  priority = false,
}: AutoPlayVideoProps) {
  const wrapRef = React.useRef<HTMLDivElement | null>(null);
  const videoRef = React.useRef<HTMLVideoElement | null>(null);
  const isInViewRef = React.useRef(true);
  const [failed, setFailed] = React.useState(false);
  const [isReady, setIsReady] = React.useState(false);
  const [shouldLoad, setShouldLoad] = React.useState(priority);

  const attemptPlay = React.useCallback(() => {
    const video = videoRef.current;
    if (!video) return;
    // Ensure muted is set as a property too (some mobile browsers ignore
    // the HTML attribute alone and block autoplay without this).
    video.muted = true;
    const playPromise = video.play();
    if (playPromise && typeof playPromise.catch === "function") {
      playPromise.catch(() => {
        // Autoplay was blocked (rare with muted video) - retry shortly.
        window.setTimeout(() => {
          video.play().catch(() => {});
        }, 250);
      });
    }
  }, []);

  // Decide WHEN this video is allowed to start downloading.
  // priority=true -> immediately. Otherwise -> once it's ~600px from
  // entering the viewport, so a page full of videos doesn't try to pull
  // all of them down at once.
  React.useEffect(() => {
    if (priority) {
      setShouldLoad(true);
      return;
    }
    const node = wrapRef.current;
    if (!node) return;

    const preloadObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShouldLoad(true);
            preloadObserver.disconnect();
          }
        });
      },
      { threshold: 0, rootMargin: "600px 0px" }
    );
    preloadObserver.observe(node);
    return () => preloadObserver.disconnect();
  }, [priority]);

  // Once loading is allowed and the <video> element exists, kick off
  // playback right away.
  React.useEffect(() => {
    if (shouldLoad) attemptPlay();
  }, [shouldLoad, attemptPlay]);

  // Keep tracking visibility so we can resume playback if the browser
  // pauses the video while it's on screen (e.g. tab throttling).
  React.useEffect(() => {
    const node = wrapRef.current;
    if (!node) return;

    const visibilityObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          isInViewRef.current = entry.isIntersecting;
          if (entry.isIntersecting) attemptPlay();
        });
      },
      { threshold: 0.05, rootMargin: "150px 0px" }
    );

    visibilityObserver.observe(node);
    return () => visibilityObserver.disconnect();
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
        <div
          className="absolute inset-0 z-0 flex items-center justify-center bg-cover bg-center"
          style={poster ? { backgroundImage: `url(${poster})` } : undefined}
        >
          {!poster && (
            <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-neutral-900 via-neutral-800 to-neutral-900" />
          )}
          {poster && <div className="absolute inset-0 bg-black/35" />}
          <div className="relative w-8 h-8 border-2 border-[#D4AF37]/40 border-t-[#D4AF37] rounded-full animate-spin" />
        </div>
      )}

      {shouldLoad && (
        <video
          ref={videoRef}
          // src + preload are only set once shouldLoad flips true, so
          // this video doesn't start pulling bytes until it's actually
          // allowed to (priority video: instantly; others: near-viewport).
          src={src}
          poster={poster}
          muted
          loop
          autoPlay
          playsInline
          preload="auto"
          onCanPlay={handleReady}
          onLoadedData={handleReady}
          onLoadedMetadata={handleReady}
          onPause={handlePauseWhileVisible}
          onError={() => setFailed(true)}
          className="relative z-10 w-full h-full object-cover object-center bg-black"
        />
      )}

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

