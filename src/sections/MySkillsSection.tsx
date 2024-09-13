import { Typography } from "@mui/material";

export const MySkillsSection = () => (
  <section className="three">
    <div className="abstract-heading">MY SKILLS</div>
    <div className="skills-content">
      <Typography variant="h5" component="h2" fontWeight={1000}>
        PROGRAMMING LANGUAGES
      </Typography>
      <p> C#, Java, JavaScript(Typescript), Python, C, Haskell</p>

      <Typography variant="h5" component="h2" fontWeight={1000}>
        FRONT END
      </Typography>
      <p> HTML, CSS, React, ASP.NET (Razor Pages), Swing, WinForms</p>

      <Typography variant="h5" component="h2" fontWeight={1000}>
        BACK END
      </Typography>
      <p> ASP.NET Core, .NET Core, Express.js, Node.js, REST API, GraphQL</p>

      <Typography variant="h5" component="h2" fontWeight={1000}>
        DATABASE MANAGEMENT
      </Typography>
      <p> PostgreSQL, Microsoft SQL Server, H2, Entity Framework, Prisma </p>

      <Typography variant="h5" component="h2" fontWeight={1000}>
        OTHERS
      </Typography>
      <p> Git, GitHub, GitLab, GitLab CI, Docker, Azure Devops, Nginx</p>
    </div>
  </section>
);
