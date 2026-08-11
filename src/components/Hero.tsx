/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useRef } from "react";

/**
 * Hero — clean, text-free showcase of the live production video.
 * The video keeps a reserved aspect ratio so it never causes layout shift,
 * and no text/gradient overlay hides the printing machine.
 */
export default function Hero() {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const v = videoRef.current;
    if (v) {
      v.play().catch(() => {});
    }
  }, []);

  return (
    <section
      id="home"
      aria-label="Premium Pack Co live printing production floor"
      className="relative w-full overflow-hidden bg-black"
    >
      {/* Primary page heading kept for SEO/screen readers without any visible
          text over the hero video (client requirement: clean video only). */}
      <h1 className="sr-only">
        Premium Pack Co — Box Printing &amp; Packaging Manufacturer in Okhla Phase-II, New Delhi
      </h1>

      <div className="relative w-full aspect-[16/9] max-h-[86vh] mx-auto">

        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          poster="/images/hero/hero-poster.jpg"
          onCanPlay={(e) => e.currentTarget.play().catch(() => {})}
          className="absolute inset-0 w-full h-full object-cover object-center"
        >
          <source src="/videos/hero-production.mp4" type="video/mp4" />
        </video>
      </div>
    </section>
  );
}
