import profileImg from "../../imports/IMG_4645.JPG";

const PAPER_BG = "https://images.unsplash.com/photo-1616410731303-6affae095a0a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxwYXBlciUyMHRleHR1cmUlMjBjcmVhbSUyMGJlaWdlJTIwYmFja2dyb3VuZCUyMGxpZ2h0fGVufDF8fHx8MTc4MTM3NzcwNnww&ixlib=rb-4.1.0&q=80&w=1080";

interface AboutPage1Props {
  onNext: () => void;
}

function Highlight({ children, color = "#ffd6e7" }: { children: React.ReactNode; color?: string }) {
  return (
    <mark style={{
      backgroundColor: color,
      color: "inherit",
      padding: "0 3px",
      borderRadius: "3px",
      fontWeight: 600,
    }}>
      {children}
    </mark>
  );
}

function PhoneMockup() {
  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      {/* Speech bubble */}
      <div style={{
        position: "absolute", top: "-58px", left: "50%", transform: "translateX(-50%)",
        backgroundColor: "#fff", border: "2px solid #e87c9e",
        borderRadius: "16px", padding: "8px 18px", whiteSpace: "nowrap",
        fontFamily: "var(--font-body)", fontSize: "0.85rem", fontWeight: 600,
        color: "#e87c9e", zIndex: 10,
        boxShadow: "0 2px 8px rgba(232,124,158,0.2)",
      }}>
        Hi, I'm Narandita! 👋
        <div style={{
          position: "absolute", bottom: "-10px", left: "50%", transform: "translateX(-50%)",
          width: 0, height: 0,
          borderLeft: "8px solid transparent",
          borderRight: "8px solid transparent",
          borderTop: "10px solid #e87c9e",
        }} />
        <div style={{
          position: "absolute", bottom: "-7px", left: "50%", transform: "translateX(-50%)",
          width: 0, height: 0,
          borderLeft: "6px solid transparent",
          borderRight: "6px solid transparent",
          borderTop: "8px solid #fff",
        }} />
      </div>

      {/* Phone bezel */}
      <div style={{
        width: "clamp(180px, 22vw, 240px)",
        height: "clamp(340px, 42vw, 460px)",
        backgroundColor: "#1c1c2e",
        borderRadius: "36px",
        padding: "12px 10px",
        boxShadow: "0 12px 48px rgba(0,0,0,0.35), inset 0 0 0 1px rgba(255,255,255,0.08)",
        position: "relative",
      }}>
        <div style={{
          position: "absolute", top: "10px", left: "50%", transform: "translateX(-50%)",
          width: "60px", height: "18px", backgroundColor: "#0a0a14",
          borderRadius: "9999px", zIndex: 5,
        }} />
        <div style={{
          width: "100%", height: "100%",
          borderRadius: "28px", overflow: "hidden",
          backgroundColor: "#fce4ec",
        }}>
          <img
            src={profileImg}
            alt="Narandita — profile photo"
            style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top", display: "block" }}
          />
        </div>
        <div style={{
          position: "absolute", bottom: "6px", left: "50%", transform: "translateX(-50%)",
          width: "40%", height: "4px", backgroundColor: "rgba(255,255,255,0.3)",
          borderRadius: "9999px",
        }} />
      </div>
    </div>
  );
}

export function AboutPage1({ onNext }: AboutPage1Props) {
  return (
    <div style={{
      minHeight: "calc(100vh - 60px)",
      backgroundImage: `url('${PAPER_BG}')`,
      backgroundSize: "cover", backgroundPosition: "center",
      fontFamily: "var(--font-body)",
      position: "relative",
    }}>
      <div style={{ position: "absolute", inset: 0, backgroundColor: "rgba(253,246,235,0.82)" }} />

      <div style={{
        position: "relative", zIndex: 1,
        maxWidth: "1100px", margin: "0 auto",
        padding: "5rem 2rem 4rem",
        display: "flex", alignItems: "flex-start",
        gap: "clamp(2.5rem, 6vw, 5rem)", flexWrap: "wrap",
      }}>

        {/* Left: Phone mockup */}
        <div style={{ flex: "0 0 auto", display: "flex", justifyContent: "center", paddingTop: "70px" }}>
          <PhoneMockup />
        </div>

        {/* Right: Bio */}
        <div style={{ flex: "1 1 300px", paddingTop: "1rem" }}>
          <span style={{
            display: "inline-block",
            backgroundColor: "#2d5016", color: "#fff",
            fontSize: "0.72rem", fontWeight: 500,
            letterSpacing: "0.12em", textTransform: "uppercase",
            padding: "0.3rem 1rem", borderRadius: "9999px", marginBottom: "1.25rem",
          }}>
            About Me · 1 of 2
          </span>

          <h2 style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(3rem, 7vw, 5rem)",
            fontWeight: 700, color: "#2d5016",
            lineHeight: 1, marginBottom: "1.5rem",
          }}>
            Hello!
          </h2>

          <p style={{ fontSize: "0.95rem", color: "#333", lineHeight: 1.9, marginBottom: "1rem" }}>
            I'm <Highlight color="#ffd6e7">Narandita</Highlight>. I've always been naturally curious about how people work, why organizations thrive or fall apart, what makes a team truly function, and how{" "}
            <Highlight color="#fff3cd">the right person in the right role</Highlight> can change everything.
          </p>

          <p style={{ fontSize: "0.95rem", color: "#333", lineHeight: 1.9, marginBottom: "1rem" }}>
            Studying <Highlight color="#d4edda">Information Systems & Technology at ITB</Highlight> opened my eyes to the power of data and systems. But what pulled me in most wasn't the code — it was the human side.
          </p>

          <p style={{ fontSize: "0.95rem", color: "#333", lineHeight: 1.9, marginBottom: "1rem" }}>
            I found myself drawn to <Highlight color="#ffd6e7">Human Resources</Highlight>: how it uses data to make smarter hiring decisions, how it structures processes to find the right fit, how it keeps the internal pulse of an organization healthy. There's something deeply satisfying about building systems that take care of people.
          </p>

          <p style={{ fontSize: "0.95rem", color: "#333", lineHeight: 1.9, marginBottom: "1rem" }}>
            Beyond HR, I genuinely enjoy the challenge of <Highlight color="#d4edda">business</Highlight> — dissecting a case, spotting the gap in a strategy, and building something from the ground up. I've joined business case and business plan competitions, and every time I walk away thinking sharper than before.
          </p>

          <p style={{ fontSize: "0.95rem", color: "#555", lineHeight: 1.9, marginBottom: "2rem" }}>
            What drives me most is figuring things out. Whether it's untangling an organizational problem, analyzing data, or designing a process that actually works — I'm the kind of person who wants to understand the <em><strong>why</strong></em> behind everything, and then do something about it.
          </p>

          <button onClick={onNext} style={{
            backgroundColor: "#e87c9e", color: "#fff",
            border: "none", borderRadius: "9999px",
            padding: "0.7rem 1.8rem",
            fontFamily: "var(--font-body)", fontSize: "0.9rem", fontWeight: 500,
            cursor: "pointer", boxShadow: "0 3px 12px rgba(232,124,158,0.35)",
          }}>
            View Skills & Education →
          </button>
        </div>
      </div>
    </div>
  );
}
