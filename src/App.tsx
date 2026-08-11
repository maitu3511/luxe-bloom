/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Introduction from "./components/Introduction";
import TwoColumnBanner from "./components/TwoColumnBanner";
import ProductsWeOffer from "./components/ProductsWeOffer";
import IndustriesWeCaterTo from "./components/IndustriesWeCaterTo";
import OurServices from "./components/OurServices";
import SocialAndClients from "./components/SocialAndClients";
import ParallaxBanner from "./components/ParallaxBanner";
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

/** Unique title + description per in-app page (keeps tab/share context accurate). */
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

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageKey>("home");

  React.useEffect(() => {
    const meta = PAGE_META[currentPage];
    document.title = meta.title;
    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute("content", meta.description);
  }, [currentPage]);


  const handleNavigate = (targetId: string) => {
    if (targetId === "services") {
      setCurrentPage("services");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (targetId === "projects") {
      setCurrentPage("projects");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (targetId === "about") {
      setCurrentPage("about");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (targetId === "machinery") {
      setCurrentPage("machinery");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (targetId === "faqs") {
      setCurrentPage("faqs");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (targetId === "contact") {
      setCurrentPage("contact");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (targetId === "home") {
      setCurrentPage("home");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      // If we are on secondary pages and need to scroll to a section on home page
      setCurrentPage("home");
      setTimeout(() => {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 150);
    }
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
            key={currentPage}
            initial={{ opacity: 0, y: 16, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -16, filter: "blur(4px)" }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            {currentPage === "home" ? (
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

                {/* 9. Parallax Technology Banner */}
                <ParallaxBanner />
              </>
            ) : (
              <React.Suspense fallback={<div className="min-h-[70vh] flex items-center justify-center bg-black"><div className="w-10 h-10 border-2 border-[#f5b800] border-t-transparent rounded-full animate-spin" /></div>}>
              {currentPage === "services" ? (
              <ServicesPage onNavigateContact={() => handleNavigate("contact")} />
            ) : currentPage === "projects" ? (
              <ProjectsPage />
            ) : currentPage === "about" ? (
              <AboutPage />
            ) : currentPage === "machinery" ? (
              <MachineryPage onNavigateContact={() => handleNavigate("contact")} />
            ) : currentPage === "faqs" ? (
              <FaqsPage onNavigateContact={() => handleNavigate("contact")} />
            ) : (
              <ContactPage />
            )}
              </React.Suspense>
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
