import { Project } from "./Project";
import { projects } from "../data/projects";

export const ProjectList = () => {
  return (
    <div className="project-list">
      <h1>Projects</h1>
      <div className="projects-grid">
        {projects.map((project) => (
          <Project
            key={project.slug}
            slug={project.slug}
            title={project.title}
            tagline={project.tagline}
            tags={project.tags}
          />
        ))}
      </div>
    </div>
  );
};
