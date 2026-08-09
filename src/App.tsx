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
import ServicesPage from "./components/ServicesPage";
import ProjectsPage from "./components/ProjectsPage";
import AboutPage from "./components/AboutPage";
import MachineryPage from "./components/MachineryPage";
import FaqsPage from "./components/FaqsPage";
import ContactPage from "./components/ContactPage";
import WhatsAppButton from "./components/WhatsAppButton";
import {
  ScrollProgress,
  MouseFollower,
  LuxuryLoader,
  BackgroundParticleCanvas,
} from "./components/GlobalAnimations";

export default function App() {
  const [currentPage, setCurrentPage] = useState<"home" | "services" | "projects" | "about" | "machinery" | "faqs" | "contact">("home");

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
            ) : currentPage === "services" ? (
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
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
