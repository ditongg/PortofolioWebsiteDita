import { Mail, Linkedin, Github } from "lucide-react";

const SKY_BG = "https://images.unsplash.com/photo-1498354136128-58f790194fa7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxibHVlJTIwc2t5JTIwY2xvdWRzJTIwc29mdCUyMHBhc3RlbCUyMG5hdHVyZSUyMGJhY2tncm91bmR8ZW58MXx8fHwxNzgxMzc3NzA1fDA&ixlib=rb-4.1.0&q=80&w=1080";

export function ContactPage() {
  return (
    <div style={{
      minHeight: "calc(100vh - 60px)",
      backgroundImage: `url('${SKY_BG}')`,
      backgroundSize: "cover", backgroundPosition: "center",
      display: "flex", alignItems: "center", justifyContent: "center",
      padding: "4rem 2rem",
      fontFamily: "var(--font-body)",
    }}>
      <div style={{
        backgroundColor: "rgba(252,228,236,0.96)",
        borderRadius: "2rem",
        padding: "3rem 2.5rem",
        maxWidth: "560px", width: "100%",
        boxShadow: "0 12px 60px rgba(0,0,0,0.15)",
        textAlign: "center",
      }}>
        <h2 style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(2.5rem, 7vw, 4rem)",
          fontWeight: 700, color: "#2d5016",
          marginBottom: "0.75rem", lineHeight: 1,
        }}>
          Let's connect
        </h2>
        <p style={{
          fontSize: "0.95rem", color: "#555",
          lineHeight: 1.8, marginBottom: "2.5rem",
          maxWidth: "380px", margin: "0 auto 2.5rem",
        }}>
          Whether you have an opportunity, a question, or just want to say hi — I'd love to hear from you.
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem", alignItems: "center" }}>
          <a href="mailto:mb.narandita@gmail.com" style={{
            display: "flex", alignItems: "center", gap: "0.6rem",
            backgroundColor: "#2d5016", color: "#fff",
            textDecoration: "none", borderRadius: "9999px",
            padding: "0.8rem 2rem",
            fontSize: "0.92rem", fontWeight: 500,
            boxShadow: "0 3px 12px rgba(45,80,22,0.3)",
          }}>
            <Mail size={17} /> mb.narandita@gmail.com
          </a>

          <div style={{ display: "flex", gap: "0.75rem" }}>
            <a href="https://www.linkedin.com/in/maria-brigitta-adyanti-narandita/" target="_blank" rel="noopener noreferrer" style={{
              display: "flex", alignItems: "center", gap: "0.45rem",
              backgroundColor: "#fff", color: "#2d5016",
              textDecoration: "none", borderRadius: "9999px",
              padding: "0.6rem 1.4rem",
              fontSize: "0.85rem", fontWeight: 500,
              border: "1.5px solid #d0e4c0",
              boxShadow: "0 1px 6px rgba(0,0,0,0.07)",
            }}>
              <Linkedin size={15} /> LinkedIn
            </a>
            <a href="https://github.com/ditongg?tab=repositories" target="_blank" rel="noopener noreferrer" style={{
              display: "flex", alignItems: "center", gap: "0.45rem",
              backgroundColor: "#fff", color: "#2d5016",
              textDecoration: "none", borderRadius: "9999px",
              padding: "0.6rem 1.4rem",
              fontSize: "0.85rem", fontWeight: 500,
              border: "1.5px solid #d0e4c0",
              boxShadow: "0 1px 6px rgba(0,0,0,0.07)",
            }}>
              <Github size={15} /> GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
