FIXED FILES — WHAT TO DO WITH THEM
====================================

This zip contains ONLY the files that changed in this round (video +
image loading fix). Copy each file into your project at the exact same
path shown below, replacing the existing file:

src/components/AutoPlayVideo.tsx
  - This is the video player used across the site (Machinery/Services
    pages etc). Earlier it deliberately waited until a video scrolled
    close to the screen before it even started downloading, which is
    why playback felt delayed.
  - Now every video starts downloading and playing the moment its
    section mounts on the page — no more waiting to scroll near it.

src/components/CinematicImage.tsx
  - This is the reusable image/video card used in many sections.
  - Every image now loads "eager" + high priority instead of being
    lazy-loaded, so it renders immediately instead of only when
    scrolled near.

src/components/ContactPage.tsx
src/components/ProductsWeOffer.tsx
src/components/ProjectsPage.tsx
src/components/ServiceDetailPage.tsx
src/components/SocialAndClients.tsx
  - These had a few individual images set to loading="lazy". Changed
    all of them to load immediately (eager) too, so no image on any
    page waits for scroll.

NOTE (important trade-off):
Loading everything immediately/eagerly means the browser now starts
downloading every video and every image on a page as soon as it opens,
instead of spacing it out as the visitor scrolls. On pages with many
videos/images (like Machinery or Services), this can make the very
first page load feel a bit heavier/slower on slow mobile connections,
because everything is competing for bandwidth at once. This was done
exactly as requested — flagging it so it's a known trade-off, not a bug.

After copying these files in, just run your normal build:
   npm install
   npm run build

