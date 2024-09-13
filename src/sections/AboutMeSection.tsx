import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import ArticleIcon from "@mui/icons-material/Article";
import EmailIcon from "@mui/icons-material/Email";

import { Box, Typography } from "@mui/material";
import { IconLink } from "../components/IconLink";

export const AboutMeSection = () => (
  <section className="one">
    <div className="abstract-heading">ABOUT ME</div>
    <div className="about-me-content">
      <p className="about">
        Hi :), my name is Matthew and I am a software developer with a Bc. from
        Masaryk University in{" "}
        <a
          href="https://www.fi.muni.cz/admission/bc/programming-and-development.html.cs"
          target="_blank"
          rel="noopener noreferrer"
          style={{ fontWeight: "bold", textDecoration: "none" }}
        >
          Programming and Application Development
        </a>
        . Currently, I'm studying{" "}
        <a
          href="https://www.fi.muni.cz/admission/mgr/software-engineering.html.cs"
          target="_blank"
          rel="noopener noreferrer"
          style={{ fontWeight: "bold", textDecoration: "none" }}
        >
          Software Systems Design and Development
        </a>{" "}
        at Masaryk University. I am passionate about open source and a Liverpool
        FC fan (here is my{" "}
        <a
          href="https://fantasy.premierleague.com/entry/7602821/history"
          target="_blank"
          rel="noopener noreferrer"
          style={{ fontWeight: "bold", textDecoration: "none" }}
        >
          FPL
        </a>
        ). I enjoy sports like football, running, basketball, darts, and I like
        to listen to music, mainly hip-hop and EDM.
      </p>
      <Typography className="signature">@2024 mf-16</Typography>
      <Box className="icons">
        <IconLink
          href="mailto:formanekmato@gmail.com"
          label="Email"
          icon={<EmailIcon />}
        />
        <IconLink
          href="https://github.com/mf-16"
          label="GitHub"
          icon={<GitHubIcon />}
        />
        <IconLink
          href="https://www.linkedin.com/in/matúš-formánek-ab547027a"
          label="LinkedIn"
          icon={<LinkedInIcon />}
        />
        <IconLink
          href="https:/my-cv-is-not-here-yet.com"
          label="CV"
          icon={<ArticleIcon />}
        />
      </Box>
    </div>
  </section>
);
