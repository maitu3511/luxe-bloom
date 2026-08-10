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
 * Lazy, scroll-aware looping video.
 * - Nothing is downloaded until the block scrolls into view (preload="none").
 * - Plays automatically while visible, pauses when scrolled away (saves CPU/data).
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
  const [inView, setInView] = React.useState(false);
  const [failed, setFailed] = React.useState(false);

  React.useEffect(() => {
    const node = wrapRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setInView(entry.isIntersecting);
          const video = videoRef.current;
          if (!video) return;
          if (entry.isIntersecting) {
            const play = video.play();
            if (play && typeof play.catch === "function") play.catch(() => {});
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.35 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

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
      <video
        ref={videoRef}
        src={src}
        muted
        loop
        autoPlay
        playsInline
        preload={inView ? "auto" : "metadata"}
        onError={() => setFailed(true)}
        className="w-full h-full object-cover object-center bg-black"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent pointer-events-none" />

      <div className="absolute top-3 right-3 bg-black/75 backdrop-blur-md px-2.5 py-1 border border-white/20 text-white text-[9px] font-mono tracking-widest uppercase flex items-center gap-1.5 rounded-xs">
        <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
        <span>{badgeLabel}</span>
      </div>

      {title && (
        <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5">
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
