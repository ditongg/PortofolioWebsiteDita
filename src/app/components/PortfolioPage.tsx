import pijarImg from "../../imports/Pijar.png";
import setorImg from "../../imports/Setor.in.png";
import nimonsImg from "../../imports/NimonsCooked.png";

interface Project {
  id: number;
  image: string;
  alt: string;
  title: string;
  tags: string[];
  description: string;
  link: string;
}

const projects: Project[] = [
  {
    id: 1,
    image: pijarImg,
    alt: "Pijar — competition platform",
    title: "Pijar",
    tags: ["Web Development", "Product Planning"],
    link: "https://pijar.stei.my.id/",
    description:
      "A centralized platform connecting competition organizers with student seekers to streamline the entire event lifecycle. Organizers can publish events and manage applicants through a dedicated dashboard, while participants benefit from smart filtering, one click apply registration, and automated deadline reminders. This project was my space to learn end to end web development and think through how a website can be built to last, including how data flows through the system. I handled the product planning documentation and developed the Partner Matching and Team Finder feature, designing the profile matching logic and the team invitation workflow.",
  },
  {
    id: 2,
    image: setorImg,
    alt: "Setor.in — waste bank desktop app",
    title: "Setor.in",
    tags: ["Software Engineering", "Java"],
    link: "https://github.com/greeyash/setor.in",
    description:
      "A desktop application built for waste bank operators to digitize and manage their daily operational records. This project was where our team learned software engineering from the ground up, going step by step through planning, design, and implementation until it became a fully working application. Built with JavaFX and SQLite following the MVC architecture, with a focus on data integrity and clear separation of concerns.",
  },
  {
    id: 3,
    image: nimonsImg,
    alt: "NimonsCooked — pixel art cooking game",
    title: "NimonsCooked",
    tags: ["Game Design", "OOP"],
    link: "https://github.com/NadineArindy/if2010-tubes-2025-k02-h",
    description:
      "A pixel art, time management cooking game inspired by Overcooked, where players manage kitchen stations and complete customer orders under pressure. This project was built with a strong focus on Object Oriented Programming, applying core concepts such as abstraction, inheritance, polymorphism, and encapsulation to design the game's class structure and systems.",
  },
];

function ProjectTile({ project }: { project: Project }) {
  return (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        borderRadius: "1rem",
        overflow: "hidden",
        backgroundColor: "#fff",
        boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
        display: "flex",
        flexDirection: "column",
        transition: "transform 0.2s, box-shadow 0.2s",
        textDecoration: "none",
        cursor: "pointer",
      }}
      onMouseEnter={e => {
        (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-4px)";
        (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 8px 32px rgba(0,0,0,0.16)";
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)";
        (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 4px 20px rgba(0,0,0,0.1)";
      }}
    >
      {/* Thumbnail */}
      <img
        src={project.image}
        alt={project.alt}
        style={{ width: "100%", height: "200px", objectFit: "cover", objectPosition: "top", display: "block", flexShrink: 0 }}
      />

      {/* Info panel */}
      <div style={{ padding: "1rem 1.1rem 1.3rem", display: "flex", flexDirection: "column", gap: "0.55rem", flex: 1 }}>
        {/* Title */}
        <p style={{
          fontFamily: "var(--font-display)", fontSize: "1.1rem",
          fontWeight: 700, color: "#2d5016", margin: 0,
        }}>
          {project.title}
        </p>

        {/* Tags */}
        <div style={{ display: "flex", gap: "0.3rem", flexWrap: "wrap" }}>
          {project.tags.map(tag => (
            <span key={tag} style={{
              backgroundColor: "#e87c9e", color: "#fff",
              fontSize: "0.68rem", fontWeight: 500,
              padding: "0.18rem 0.6rem", borderRadius: "9999px",
            }}>
              {tag}
            </span>
          ))}
        </div>

        {/* Description */}
        <p style={{
          fontFamily: "var(--font-body)", fontSize: "0.82rem",
          color: "#444", lineHeight: 1.75, margin: 0,
        }}>
          {project.description}
        </p>
      </div>
    </a>
  );
}

export function PortfolioPage() {
  return (
    <div style={{
      minHeight: "calc(100vh - 60px)",
      backgroundColor: "#d0e8f5",
      fontFamily: "var(--font-body)",
      padding: "4rem 2rem 5rem",
    }}>
      <div style={{ maxWidth: "1080px", margin: "0 auto" }}>

        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <h2 style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(3rem, 8vw, 6rem)",
            fontWeight: 700, color: "#2d5016",
            lineHeight: 0.95, marginBottom: "0.5rem",
          }}>
            Projek
          </h2>
          <p style={{
            fontFamily: "var(--font-body)", fontSize: "1rem", color: "#4a6a8a",
            fontWeight: 400, maxWidth: "440px", margin: "0 auto", lineHeight: 1.7,
          }}>
            A collection of work across design, analytics, and product development.
          </p>
        </div>

        {/* 3-column responsive grid — cards stretch to equal height */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(290px, 1fr))",
          gap: "1.5rem",
          alignItems: "start",
        }}>
          {projects.map(project => (
            <ProjectTile key={project.id} project={project} />
          ))}
        </div>

        <p style={{
          textAlign: "center", fontFamily: "var(--font-body)",
          fontSize: "0.82rem", color: "#5a7a9a", marginTop: "2.5rem",
        }}>
          © 2026 Narandita · More coming soon
        </p>
      </div>
    </div>
  );
}
