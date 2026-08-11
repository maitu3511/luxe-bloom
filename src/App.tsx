/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { BrowserRouter, Routes, Route, Navigate, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Introduction from "./components/Introduction";
import TwoColumnBanner from "./components/TwoColumnBanner";
import ProductsWeOffer from "./components/ProductsWeOffer";
import IndustriesWeCaterTo from "./components/IndustriesWeCaterTo";
import OurServices from "./components/OurServices";
import SocialAndClients from "./components/SocialAndClients";
import Footer from "./components/Footer";
const ServicesPage = React.lazy(() => import("./components/ServicesPage"));
const ProjectsPage = React.lazy(() => import("./components/ProjectsPage"));
const AboutPage = React.lazy(() => import("./components/AboutPage"));
const MachineryPage = React.lazy(() => import("./components/MachineryPage"));
const FaqsPage = React.lazy(() => import("./components/FaqsPage"));
const ContactPage = React.lazy(() => import("./components/ContactPage"));
import WhatsAppButton from "./components/WhatsAppButton";
import {
  ScrollProgress,
  MouseFollower,
  LuxuryLoader,
  BackgroundParticleCanvas,
} from "./components/GlobalAnimations";

type PageKey = "home" | "services" | "projects" | "about" | "machinery" | "faqs" | "contact";

const SITE_URL = "https://primiumpackco.netlify.app";

/** Every in-app page now has its own real, crawlable URL (fixes multi-page SEO / sitemap indexing). */
const PAGE_TO_PATH: Record<PageKey, string> = {
  home: "/",
  about: "/about",
  services: "/services",
  projects: "/projects",
  machinery: "/machinery",
  faqs: "/faqs",
  contact: "/contact",
};

const PATH_TO_PAGE: Record<string, PageKey> = {
  "/": "home",
  "/about": "about",
  "/services": "services",
  "/projects": "projects",
  "/machinery": "machinery",
  "/faqs": "faqs",
  "/contact": "contact",
};

/** Unique title + description per page (also drives per-page canonical/OG tags). */
const PAGE_META: Record<PageKey, { title: string; description: string }> = {
  home: {
    title: "Premium Pack Co | Box Printing & Packaging, Okhla Delhi",
    description:
      "Offset & digital printing, luxury rigid boxes, mono cartons and complete in-house box making in Okhla Phase-II, New Delhi.",
  },
  about: {
    title: "About Premium Pack Co | Jai Maa Trading, New Delhi",
    description:
      "Learn about Premium Pack Co (Jai Maa Trading) — our Okhla Phase-II plant, in-house printing and box-making capability, and quality standards.",
  },
  services: {
    title: "Printing & Packaging Services | Premium Pack Co",
    description:
      "Catalogues, brochures, calendars, rigid boxes, mono cartons plus t-shirt, mug, cup and bottle printing — all produced in-house.",
  },
  projects: {
    title: "Our Projects & Portfolio | Premium Pack Co",
    description:
      "Browse printed catalogues, luxury rigid boxes, corporate gift sets and speciality finishes such as Scodix foiling, spot UV and gold leafing.",
  },
  machinery: {
    title: "Our Machinery & Plant | Premium Pack Co",
    description:
      "Heidelberg offset presses, Konica digital press, lamination, die-cutting, foiling and box-making machinery with live working videos.",
  },
  faqs: {
    title: "FAQs | Printing & Packaging Questions | Premium Pack Co",
    description:
      "Answers on minimum order quantity, turnaround time, artwork formats, materials, finishing options and delivery for print and packaging orders.",
  },
  contact: {
    title: "Contact Premium Pack Co | Okhla Phase-II, New Delhi",
    description:
      "Get a quote for box printing and packaging. Call +91 7503899662 or message us on WhatsApp — Okhla Phase-II, New Delhi.",
  },
};

/** Keeps <title>, meta description, canonical and OG/Twitter tags in sync with the current route. */
function usePageMeta() {
  const location = useLocation();

  React.useEffect(() => {
    const page = PATH_TO_PAGE[location.pathname] ?? "home";
    const meta = PAGE_META[page];
    const canonicalHref = `${SITE_URL}${location.pathname}`;

    document.title = meta.title;

    const setAttr = (selector: string, attr: string, value: string) => {
      const el = document.querySelector(selector);
      if (el) el.setAttribute(attr, value);
    };

    setAttr('meta[name="description"]', "content", meta.description);
    setAttr('link[rel="canonical"]', "href", canonicalHref);
    setAttr('meta[property="og:title"]', "content", meta.title);
    setAttr('meta[property="og:description"]', "content", meta.description);
    setAttr('meta[property="og:url"]', "content", canonicalHref);
    setAttr('meta[name="twitter:title"]', "content", meta.title);
    setAttr('meta[name="twitter:description"]', "content", meta.description);

    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);
}

function AppShell() {
  const location = useLocation();
  const navigate = useNavigate();
  usePageMeta();

  const currentPage = PATH_TO_PAGE[location.pathname] ?? "home";

  const handleNavigate = (targetId: string) => {
    const page = (targetId as PageKey) in PAGE_TO_PATH ? (targetId as PageKey) : "home";
    navigate(PAGE_TO_PATH[page]);
  };

  return (
    <div className="min-h-screen bg-black text-gray-800 antialiased selection:bg-[#D4AF37] selection:text-black relative">
      {/* Global Interactive FX & Logo Loader Splash */}
      <LuxuryLoader />
      <ScrollProgress />
      <MouseFollower />
      <BackgroundParticleCanvas />
      <WhatsAppButton />

      {/* Header & Navigation */}
      <Header currentPage={currentPage} onNavigate={handleNavigate} />

      <main className="overflow-hidden bg-white">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 16, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -16, filter: "blur(4px)" }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <React.Suspense
              fallback={
                <div className="min-h-[70vh] flex items-center justify-center bg-black">
                  <div className="w-10 h-10 border-2 border-[#f5b800] border-t-transparent rounded-full animate-spin" />
                </div>
              }
            >
              <Routes location={location}>
                <Route
                  path="/"
                  element={
                    <>
                      {/* 2. Hero Section */}
                      <Hero />

                      {/* 3. Introduction block */}
                      <Introduction />

                      {/* 4. Two-Column Solution Banner */}
                      <TwoColumnBanner />

                      {/* 5. Products we Offer Section */}
                      <ProductsWeOffer />

                      {/* 6. Industries We Cater To Section */}
                      <IndustriesWeCaterTo />

                      {/* 7. Our Services block */}
                      <OurServices />

                      {/* 8. Our Social Space & Our Clients section */}
                      <SocialAndClients />

                      {/* Parallax "printing machine" banner removed per client request —
                          the machine image was unreadable behind the dark overlay and
                          added no value here. */}
                    </>
                  }
                />
                <Route
                  path="/services"
                  element={<ServicesPage onNavigateContact={() => handleNavigate("contact")} />}
                />
                <Route path="/projects" element={<ProjectsPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route
                  path="/machinery"
                  element={<MachineryPage onNavigateContact={() => handleNavigate("contact")} />}
                />
                <Route
                  path="/faqs"
                  element={<FaqsPage onNavigateContact={() => handleNavigate("contact")} />}
                />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </React.Suspense>
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppShell />
    </BrowserRouter>
  );
}
