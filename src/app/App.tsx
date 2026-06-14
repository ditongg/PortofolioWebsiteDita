import { useState } from "react";
import { Navbar } from "./components/Navbar";
import { HomePage } from "./components/HomePage";
import { AboutPage1 } from "./components/AboutPage1";
import { AboutPage2 } from "./components/AboutPage2";
import { PortfolioPage } from "./components/PortfolioPage";
import { ContactPage } from "./components/ContactPage";
import { Footer } from "./components/Footer";

type Page = "home" | "about1" | "about2" | "portfolio" | "contact";

export default function App() {
  /* MARKER-MAKE-KIT-INVOKED */
  const [currentPage, setCurrentPage] = useState<Page>("home");

  const navigate = (page: Page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", fontFamily: "var(--font-body)" }}>
      <style>{`
        .tile-overlay { opacity: 0; transition: opacity 0.25s; }
        .tile-overlay:hover { opacity: 1 !important; }
        *:focus-visible { outline: 2px solid var(--forest); outline-offset: 2px; }
      `}</style>

      <Navbar currentPage={currentPage} onNavigate={navigate} />

      <main style={{ flex: 1 }}>
        {currentPage === "home"      && <HomePage onNavigate={navigate} />}
        {currentPage === "about1"    && <AboutPage1 onNext={() => navigate("about2")} />}
        {currentPage === "about2"    && <AboutPage2 onBack={() => navigate("about1")} />}
        {currentPage === "portfolio" && <PortfolioPage />}
        {currentPage === "contact"   && <ContactPage />}
      </main>

      <Footer />
    </div>
  );
}
