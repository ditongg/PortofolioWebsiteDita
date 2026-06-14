import { useState } from "react";
import { Menu, X } from "lucide-react";

type Page = "home" | "about1" | "about2" | "portfolio" | "contact";

interface NavbarProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

export function Navbar({ currentPage, onNavigate }: NavbarProps) {
  const [open, setOpen] = useState(false);
  const isAbout = currentPage === "about1" || currentPage === "about2";

  const items: { label: string; page: Page }[] = [
    { label: "Home", page: "home" },
    { label: "About Me", page: "about1" },
    { label: "Portfolio", page: "portfolio" },
    { label: "Contact", page: "contact" },
  ];

  return (
    <nav style={{
      position: "sticky", top: 0, zIndex: 100,
      backgroundColor: "rgba(255,255,255,0.95)",
      backdropFilter: "blur(8px)",
      boxShadow: "0 1px 12px rgba(0,0,0,0.08)",
      fontFamily: "var(--font-body)",
    }}>
      <div style={{
        maxWidth: "1200px", margin: "0 auto",
        padding: "0 2rem", height: "60px",
        display: "flex", alignItems: "center", justifyContent: "space-between",
      }}>
        <button onClick={() => onNavigate("home")} style={{
          background: "none", border: "none", cursor: "pointer",
          fontFamily: "var(--font-display)", fontSize: "1.4rem", fontWeight: 700,
          color: "var(--forest)", letterSpacing: "0.01em",
        }}>naranditaa</button>

        <div className="hidden md:flex" style={{ gap: "2.5rem", alignItems: "center" }}>
          {items.map(({ label, page }) => {
            const active = page === currentPage || (page === "about1" && isAbout);
            return (
              <button key={page} onClick={() => onNavigate(page)} style={{
                background: "none", border: "none", cursor: "pointer",
                fontFamily: "var(--font-body)", fontSize: "0.92rem",
                fontWeight: active ? 600 : 400,
                color: active ? "var(--forest)" : "#444",
                borderBottom: active ? "2px solid var(--forest)" : "2px solid transparent",
                paddingBottom: "2px", transition: "all 0.2s",
              }}>
                {label}
              </button>
            );
          })}
        </div>

        <button className="md:hidden" onClick={() => setOpen(!open)} style={{
          background: "none", border: "none", cursor: "pointer", color: "#444",
        }}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden" style={{
          backgroundColor: "#fff", borderTop: "1px solid #eee",
          padding: "1rem 2rem", display: "flex", flexDirection: "column", gap: "0.85rem",
        }}>
          {items.map(({ label, page }) => (
            <button key={page} onClick={() => { onNavigate(page); setOpen(false); }} style={{
              background: "none", border: "none", cursor: "pointer", textAlign: "left",
              fontFamily: "var(--font-body)", fontSize: "1rem", color: "#333",
            }}>
              {label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
