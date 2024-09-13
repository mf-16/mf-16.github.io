import "./App.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import GitHubIcon from "@mui/icons-material/GitHub";
import ArticleIcon from "@mui/icons-material/Article";
import LockIcon from "@mui/icons-material/Lock";
import { IconButton, Link, Tooltip } from "@mui/material";
import { AboutMeSection } from "./sections/AboutMeSection";
import { MyProjectsSection } from "./sections/MyProjectsSection";
import { MySkillsSection } from "./sections/MySkillsSection";

const theme = createTheme({
  typography: {
    fontFamily: "Space Mono, monospace",
  },
});
function App() {
  const projects = [
    {
      id: 1,
      title: "HOUSE SCOUT",
      description:
        "A Discord bot designed for real estate scouting, enabling users to set custom filters and receive notifications about new properties matching their criteria.",
      technologies: [
        "C#",
        ".NET Core",
        "Discord.Net",
        "EF",
        "docker",
        "PostgreSQL",
        "RabbitMQ",
      ],
      icon: (
        <div className="icon">
          <Link
            href="https://github.com/xforman2/HouseScout"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconButton>
              <GitHubIcon />
            </IconButton>
          </Link>
        </div>
      ),
    },
    {
      id: 2,
      title: "MY BACHELOR THESIS",
      description:
        "Evaluation of compatibility between two libraries implementing PROV-DM (ProvToolbox, Prov Python). It was presented at Extended Semantic Web Conference 2024.",
      technologies: ["Python", "Java", "C#", "ASP.NET", "Maven", "docker"],
      icon: (
        <div className="icon">
          <Link
            href="https://is.muni.cz/th/hi60s/?lang=en"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconButton>
              <ArticleIcon />
            </IconButton>
          </Link>
        </div>
      ),
    },
    {
      id: 3,
      title: "MY PORTFOLIO",
      description:
        "A personal portfolio website showcasing my background, projects, and technical skills, offering a well-rounded view of my professional experience and expertise.",
      technologies: [
        "React",
        "Typescript",
        "HTML",
        "CSS",
        "Material UI",
        "npm",
        "Vite",
      ],
      icon: (
        <div className="icon">
          <Link
            href="https://github.com/mf-16/portfolio"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconButton>
              <GitHubIcon />
            </IconButton>
          </Link>
        </div>
      ),
    },
    {
      id: 4,
      title: "LEAGUE MAKER",
      description:
        "A console application for managing football leagues, allowing users to create leagues, schedule and track matches, record results, generate statistics, and much more.",
      technologies: ["C#", ".NET Core", "EF", "MSSQL"],
      icon: (
        <div className="icon">
          <Link
            href="https://gitlab.fi.muni.cz/xforman3/pv178_project"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconButton>
              <GitHubIcon />
            </IconButton>
          </Link>
        </div>
      ),
    },
    {
      id: 5,
      title: "PROTO REPOSITORY",
      description:
        "Repository similar to npmjs.org where .proto files are published.",
      technologies: [
        "React",
        "Typescript",
        "HTML",
        "CSS",
        "Prisma",
        "Express.js",
        "Node.js",
        "nginx",
        "npm",
        "Vite",
        "JWT",
        "docker",
      ],
      icon: (
        <div className="icon">
          <Tooltip
            title="This is a private school project and cannot be shared"
            arrow
          >
            <IconButton>
              <LockIcon />
            </IconButton>
          </Tooltip>
        </div>
      ),
    },
    {
      id: 6,
      title: "SHARE CAR RIDE",
      description:
        "A desktop application designed to track personal rides. It helps monitor fuel expenses, track the number of passengers, and calculate the distance traveled, providing insights into travel habits and costs.",
      technologies: ["Java", "Swing", "Maven", "H2"],
      icon: (
        <div className="icon">
          <Tooltip
            title="This is a private school project and cannot be shared"
            arrow
          >
            <IconButton>
              <LockIcon />
            </IconButton>
          </Tooltip>
        </div>
      ),
    },
  ];

  return (
    <ThemeProvider theme={theme}>
      <div className="container">
        <AboutMeSection />
        <MyProjectsSection projects={projects} />
        <MySkillsSection />
        <section className="four">
          <p>:)</p>
        </section>
      </div>
    </ThemeProvider>
  );
}

export default App;
