import { Box, Card, CardContent, Chip, Typography } from "@mui/material";
import { ReactNode } from "react";

export type Project = {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  icon: ReactNode;
};

export type MyProjectsSectionProps = {
  projects: Project[];
};

const ProjectCard = ({ project }: { project: Project }) => (
  <Card
    key={project.id}
    sx={{
      height: "20rem",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      backgroundColor: "#334736",
      outline: "2px solid white",
      transition: "transform 0.3s ease, box-shadow 0.3s ease",
      "&:hover": {
        transform: "scale(1.05)",
        boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.3)",
      },
    }}
  >
    <CardContent
      sx={{ display: "flex", flexDirection: "column", height: "100%" }}
    >
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography variant="h5" sx={{ color: "white", fontWeight: "1000" }}>
          {project.title}
        </Typography>
        {project.icon}
      </Box>

      <Typography
        variant="body2"
        sx={{ color: "white", textAlign: "left", marginTop: "1rem", flex: "1" }}
      >
        {project.description}
      </Typography>

      <Box
        mt={1}
        display="flex"
        justifyContent="center"
        flexWrap="wrap"
        sx={{ paddingTop: "1rem" }}
      >
        {project.technologies.map((tech, index) => (
          <Chip key={index} label={tech} sx={{ margin: 0.5, color: "white" }} />
        ))}
      </Box>
    </CardContent>
  </Card>
);

export const MyProjectsSection = ({ projects }: MyProjectsSectionProps) => (
  <section className="two">
    <div className="abstract-heading">MY PROJECTS</div>
    <div className="projects">
      <Box
        display="grid"
        gridTemplateColumns="repeat(auto-fit, minmax(350px, 1fr))"
        gap="2rem"
        justifyContent="center"
        alignItems="start"
        sx={{ width: "90vw", margin: "auto" }}
      >
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </Box>
    </div>
  </section>
);
