const SKY_BG = "https://images.unsplash.com/photo-1566321343730-237ec35e53f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibHVlJTIwc2t5JTIwY2xvdWRzJTIwc29mdCUyMHBhc3RlbCUyMG5hdHVyZSUyMGJhY2tncm91bmR8ZW58MXx8fHwxNzgxMzc3NzA1fDA&ixlib=rb-4.1.0&q=80&w=1080";

interface AboutPage2Props {
  onBack: () => void;
}

function PaperclipSVG() {
  return (
    <svg width="48" height="80" viewBox="0 0 48 80" fill="none" xmlns="http://www.w3.org/2000/svg"
      style={{ position: "absolute", top: "-40px", left: "50%", transform: "translateX(-50%)", filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.2))" }}>
      <rect x="18" y="0" width="12" height="50" rx="6" fill="#b0b8c1" />
      <rect x="22" y="4" width="4" height="44" rx="2" fill="#d8dee4" />
      <rect x="10" y="30" width="28" height="10" rx="5" fill="#b0b8c1" />
      <rect x="10" y="30" width="28" height="5" rx="4" fill="#c8d0d8" />
      <rect x="10" y="55" width="28" height="10" rx="5" fill="#b0b8c1" />
    </svg>
  );
}

function Dot({ color }: { color: string }) {
  return <span style={{ color, flexShrink: 0, marginTop: "0.1em" }}>◆</span>;
}

function SkillItem({ text }: { text: string }) {
  return (
    <li style={{ fontFamily: "var(--font-body)", fontSize: "0.84rem", color: "#333", lineHeight: 1.75, listStyle: "none", display: "flex", gap: "0.4rem" }}>
      <Dot color="#e87c9e" />{text}
    </li>
  );
}

function ToolItem({ text }: { text: string }) {
  return (
    <li style={{ fontFamily: "var(--font-body)", fontSize: "0.84rem", color: "#333", lineHeight: 1.75, listStyle: "none", display: "flex", gap: "0.4rem" }}>
      <Dot color="#2d5016" />{text}
    </li>
  );
}

function ColHeader({ children, color = "#2d5016" }: { children: React.ReactNode; color?: string }) {
  return (
    <p style={{
      fontFamily: "var(--font-body)", fontSize: "0.68rem", fontWeight: 700,
      color, textTransform: "uppercase", letterSpacing: "0.1em",
      marginBottom: "0.35rem", marginTop: "0.9rem",
      borderBottom: `2px solid ${color}`, paddingBottom: "0.2rem",
    }}>
      {children}
    </p>
  );
}

export function AboutPage2({ onBack }: AboutPage2Props) {
  return (
    <div style={{
      minHeight: "calc(100vh - 60px)",
      backgroundImage: `url('${SKY_BG}')`,
      backgroundSize: "cover", backgroundPosition: "center",
      display: "flex", alignItems: "center", justifyContent: "center",
      padding: "3rem 1.5rem 4rem",
      fontFamily: "var(--font-body)",
    }}>
      <div style={{
        position: "relative",
        backgroundColor: "rgba(252, 228, 236, 0.97)",
        borderRadius: "2rem",
        padding: "3rem 2.5rem 2.5rem",
        maxWidth: "920px", width: "100%",
        boxShadow: "0 12px 60px rgba(0,0,0,0.18)",
        marginTop: "40px",
      }}>
        <PaperclipSVG />

        <div style={{ textAlign: "center", marginBottom: "1.5rem" }}>
          <span style={{
            display: "inline-block", backgroundColor: "#2d5016", color: "#fff",
            fontSize: "0.72rem", fontWeight: 500, letterSpacing: "0.12em",
            textTransform: "uppercase", padding: "0.3rem 1rem", borderRadius: "9999px",
          }}>
            About Me · 2 of 2
          </span>
        </div>

        <h2 style={{
          fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 5vw, 3rem)",
          fontWeight: 700, color: "#2d5016", textAlign: "center",
          marginBottom: "2rem", lineHeight: 1.1,
        }}>
          Skills, Tools & Education
        </h2>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1.5rem" }}>

          {/* ── Skills ── */}
          <div>
            <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.4rem", color: "#e87c9e", fontWeight: 700, marginBottom: "0.5rem" }}>
              Skills
            </h3>

            <ColHeader color="#e87c9e">HR & Operations</ColHeader>
            <ul style={{ margin: 0, padding: 0 }}>
              {["Performance Evaluation", "Recruitment & Selection", "Candidate Screening",
                "Team Supervision", "Internal Competency Assessment", "Workflow Optimization"].map(s => <SkillItem key={s} text={s} />)}
            </ul>

            <ColHeader color="#e87c9e">Business</ColHeader>
            <ul style={{ margin: 0, padding: 0 }}>
              {["Business Case Analysis", "Business Plan Development",
                "Strategic Communication", "Problem Solving"].map(s => <SkillItem key={s} text={s} />)}
            </ul>

            <ColHeader color="#e87c9e">Data & Analytics</ColHeader>
            <ul style={{ margin: 0, padding: 0 }}>
              {["Google Sheets (Advanced)", "Budget Planning & Cashflow (RAB)",
                "Data Tracking & Reporting"].map(s => <SkillItem key={s} text={s} />)}
            </ul>
          </div>

          {/* ── Tools ── */}
          <div>
            <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.4rem", color: "#2d5016", fontWeight: 700, marginBottom: "0.5rem" }}>
              Tools
            </h3>

            <ColHeader>Programming</ColHeader>
            <ul style={{ margin: 0, padding: 0 }}>
              {["Python", "Java", "C"].map(t => <ToolItem key={t} text={t} />)}
            </ul>

            <ColHeader>Design & Content</ColHeader>
            <ul style={{ margin: 0, padding: 0 }}>
              {["Figma", "Canva", "Copywriting", "Social Media Content"].map(t => <ToolItem key={t} text={t} />)}
            </ul>

            <ColHeader>Productivity</ColHeader>
            <ul style={{ margin: 0, padding: 0 }}>
              {["Microsoft Office", "Google Workspace"].map(t => <ToolItem key={t} text={t} />)}
            </ul>
          </div>

          {/* ── Education ── */}
          <div>
            <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.4rem", color: "#2d5016", fontWeight: 700, marginBottom: "0.5rem" }}>
              Education
            </h3>

            <div style={{
              backgroundColor: "rgba(255,255,255,0.72)",
              borderRadius: "0.75rem", padding: "1rem 1.1rem",
              borderLeft: "4px solid #e87c9e", marginBottom: "1rem",
            }}>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "0.72rem", color: "#888", fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "0.35rem" }}>
                2024 – 2028
              </p>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "0.95rem", fontWeight: 700, color: "#2d5016", marginBottom: "0.2rem" }}>
                Information Systems & Technology
              </p>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "0.85rem", color: "#555" }}>
                Institut Teknologi Bandung
              </p>
            </div>

            <div style={{ backgroundColor: "rgba(255,255,255,0.55)", borderRadius: "0.75rem", padding: "1rem", marginTop: "1.5rem" }}>
              <p style={{ fontFamily: "var(--font-display)", fontSize: "1rem", color: "#e87c9e", fontWeight: 600, lineHeight: 1.5 }}>
                "The right person in the right role can change everything."
              </p>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "0.75rem", color: "#888", marginTop: "0.3rem" }}>
                — what drives me
              </p>
            </div>
          </div>
        </div>

        <div style={{ marginTop: "2rem", textAlign: "center" }}>
          <button onClick={onBack} style={{
            backgroundColor: "transparent", color: "#2d5016",
            border: "2px solid #2d5016", borderRadius: "9999px",
            padding: "0.6rem 1.75rem",
            fontFamily: "var(--font-body)", fontSize: "0.88rem", fontWeight: 500,
            cursor: "pointer", transition: "all 0.2s",
          }}
            onMouseEnter={e => { const b = e.currentTarget; b.style.backgroundColor = "#2d5016"; b.style.color = "#fff"; }}
            onMouseLeave={e => { const b = e.currentTarget; b.style.backgroundColor = "transparent"; b.style.color = "#2d5016"; }}
          >
            ← Back to Bio
          </button>
        </div>
      </div>
    </div>
  );
}
