export function Footer() {
  return (
    <footer style={{
      backgroundColor: "#2d5016",
      color: "#fff",
      fontFamily: "var(--font-body)",
      textAlign: "center",
      padding: "1.4rem 2rem",
    }}>
      <p style={{ fontSize: "0.85rem", fontWeight: 400, marginBottom: "0.2rem", opacity: 0.9 }}>© 2026 Narandita &middot; Business &amp; HR Enthusiast</p>
      <p style={{ fontSize: "0.8rem", opacity: 0.65 }}>
        <a href="mailto:mb.narandita@gmail.com" style={{
          color: "#fff", textDecoration: "none",
          borderBottom: "1px solid rgba(255,255,255,0.35)",
        }}>
          mb.narandita@gmail.com
        </a>
      </p>
    </footer>
  );
}
