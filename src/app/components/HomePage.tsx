const GRASS_BG = "https://images.unsplash.com/photo-1422651355218-53453822ebb8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmVlbiUyMGdyYXNzJTIwbmF0dXJlJTIwbHVzaCUyMG1lYWRveSUyMHRvcCUyMHZpZXd8ZW58MXx8fHwxNzgxMzc3NzAxfDA&ixlib=rb-4.1.0&q=80&w=1080";

interface HomePageProps {
  onNavigate: (page: "home" | "about1" | "about2" | "portfolio" | "contact") => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  return (
    <div style={{ fontFamily: "var(--font-body)", backgroundColor: "#fdf8f0" }}>

      {/* ── Hero: grass background + overlapping title ── */}
      <div style={{ position: "relative", width: "100%", overflow: "hidden" }}>

        {/* Grass image */}
        <div style={{
          width: "100%",
          height: "clamp(320px, 45vw, 520px)",
          backgroundImage: `url('${GRASS_BG}')`,
          backgroundSize: "cover",
          backgroundPosition: "center 30%",
          position: "relative",
        }}>
          {/* Dark overlay */}
          <div style={{
            position: "absolute", inset: 0,
            background: "linear-gradient(to bottom, rgba(0,0,0,0.08) 0%, rgba(0,0,0,0.35) 100%)",
          }} />
        </div>

        {/* "Porto Folio" unified title — overlaps the grass bottom edge */}
        <div style={{
          position: "absolute",
          bottom: "-0.04em",
          left: "50%",
          transform: "translateX(-50%)",
          width: "100%",
          textAlign: "center",
          pointerEvents: "none",
        }}>
          {/* Pink ribbon */}
          <div style={{
            position: "absolute",
            bottom: "0.14em",
            left: "50%",
            transform: "translateX(-50%)",
            width: "clamp(320px, 80%, 760px)",
            height: "clamp(44px, 8vw, 84px)",
            backgroundColor: "#e87c9e",
            borderRadius: "8px",
            zIndex: 1,
          }} />
          <h1 style={{
            position: "relative",
            zIndex: 2,
            fontFamily: "var(--font-display)",
            fontSize: "clamp(4rem, 13vw, 11rem)",
            fontWeight: 700,
            lineHeight: 0.92,
            color: "#fff",
            textShadow: "0 4px 24px rgba(0,0,0,0.25)",
            margin: 0,
            whiteSpace: "nowrap",
            letterSpacing: "-0.01em",
          }}>
            Portofolio
          </h1>
        </div>
      </div>

      {/* ── Name + intro block ── */}
      <div style={{
        backgroundColor: "#fdf8f0",
        paddingTop: "3.5rem",
        paddingBottom: "4rem",
        paddingLeft: "2rem",
        paddingRight: "2rem",
        textAlign: "center",
      }}>
        <p style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(1.4rem, 4vw, 2.2rem)",
          color: "#2d5016",
          fontWeight: 600,
          marginBottom: "0.4rem",
        }}>
          Narandita
        </p>
        <p style={{
          fontFamily: "var(--font-body)",
          fontSize: "clamp(0.9rem, 2vw, 1.05rem)",
          color: "#666",
          fontWeight: 400,
          maxWidth: "460px",
          margin: "0 auto 2.5rem",
          lineHeight: 1.7,
        }}>
          Business &amp; Technology Enthusiast &middot; Information Systems &amp; Technology, ITB
        </p>

        {/* CTA buttons */}
        <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
          <button
            onClick={() => onNavigate("about1")}
            onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-2px)"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.transform = "translateY(0)"; }}
            style={{
              backgroundColor: "#2d5016", color: "#fff",
              border: "none", borderRadius: "9999px",
              padding: "0.75rem 2rem",
              fontFamily: "var(--font-body)", fontSize: "0.92rem", fontWeight: 500,
              cursor: "pointer", boxShadow: "0 3px 12px rgba(45,80,22,0.3)",
              transition: "transform 0.15s, box-shadow 0.15s",
            }}
          >
            About Me
          </button>
          <button
            onClick={() => onNavigate("portfolio")}
            onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-2px)"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.transform = "translateY(0)"; }}
            style={{
              backgroundColor: "#e87c9e", color: "#fff",
              border: "none", borderRadius: "9999px",
              padding: "0.75rem 2rem",
              fontFamily: "var(--font-body)", fontSize: "0.92rem", fontWeight: 500,
              cursor: "pointer", boxShadow: "0 3px 12px rgba(232,124,158,0.35)",
              transition: "transform 0.15s",
            }}
          >
            My Projects
          </button>
        </div>
      </div>

      {/* ── Wave divider ── */}
      <div style={{ lineHeight: 0, overflow: "hidden" }}>
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" style={{ width: "100%", height: "60px", display: "block" }}>
          <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" fill="#fce4ec" />
        </svg>
      </div>

      {/* ── Quick stats ribbon ── */}
      <div style={{
        backgroundColor: "#fce4ec",
        padding: "2rem 2rem 2.5rem",
        display: "flex",
        justifyContent: "center",
        gap: "clamp(2rem, 6vw, 5rem)",
        flexWrap: "wrap",
      }}>
        {[
          { num: "3+", label: "Projects" },
          { num: "ITB", label: "University" },
          { num: "HR", label: "Passion" },
        ].map(({ num, label }) => (
          <div key={label} style={{ textAlign: "center" }}>
            <p style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.8rem, 4vw, 2.6rem)",
              fontWeight: 700, color: "#2d5016", margin: 0, lineHeight: 1,
            }}>
              {num}
            </p>
            <p style={{
              fontFamily: "var(--font-body)", fontSize: "0.85rem",
              color: "#777", marginTop: "0.25rem", fontWeight: 500,
              letterSpacing: "0.08em", textTransform: "uppercase",
            }}>
              {label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
