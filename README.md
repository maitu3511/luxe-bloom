FIXED FILES — WHAT TO DO WITH THEM
====================================

This zip has ONLY the files that changed. Copy these into your existing
project, replacing the old ones at the same paths:

1. src/App.tsx
   -> replace your existing src/App.tsx with this one.
   Changes:
   - Removed the ParallaxBanner ("GIVING LIFE TO PRINT WITH THE RIGHT
     TECH") section from the homepage — client requested this removed
     since the printing machine image behind it was not visible.
   - Added real routing (react-router-dom) so every page now has its
     own proper URL instead of one single URL for the whole site:
       /            Home
       /about       About
       /services    Services
       /projects    Projects
       /machinery   Machinery
       /faqs        FAQs
       /contact     Contact
   - Title, meta description, canonical URL, and Open Graph URL now
     update automatically per page/route (better for Google indexing).

2. public/sitemap.xml
   -> replace your existing public/sitemap.xml with this one.
   Changes:
   - Previously only listed the homepage. Now lists all 7 real page
     URLs above so Google can discover and index every page.

3. DELETE this file from your project (it is no longer used):
   src/components/ParallaxBanner.tsx

After copying these in, just run your normal build:
   npm install
   npm run build

No other files were touched — everything else in your project stays
exactly as it was.
