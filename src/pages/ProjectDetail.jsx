import { Link, useParams } from "react-router-dom";
import { projects } from "../data/projects";

export const ProjectDetail = () => {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="project-detail-page">
        <div className="subhome">
          <p>Project not found.</p>
          <Link to="/projects" className="back-link">
            &larr; Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="project-detail-page">
      <div className="subhome">
        <Link to="/projects" className="back-link">
          &larr; Back to Projects
        </Link>
        <h1>{project.title}</h1>
        <div className="technologies">
          {project.tags.map((tag, index) => (
            <span key={index} className="tech-tag">
              {tag}
            </span>
          ))}
        </div>

        {project.sections.map((section, index) => (
          <div className="project-section" key={index}>
            {section.heading && <h2>{section.heading}</h2>}
            {section.paragraphs &&
              section.paragraphs.map((paragraph, pIndex) => (
                <p key={pIndex}>{paragraph}</p>
              ))}
            {section.list && (
              <ol>
                {section.list.map((item, lIndex) => (
                  <li key={lIndex}>{item}</li>
                ))}
              </ol>
            )}
            {section.figures && (
              <div className="figures-grid">
                {section.figures.map((figure, fIndex) => (
                  <div className="figure-placeholder" key={fIndex}>
                    {figure.image ? (
                      <img
                        src={figure.image}
                        alt={figure.caption}
                        className="figure-image"
                      />
                    ) : (
                      <div className="figure-box" aria-hidden="true" />
                    )}
                    <p className="figure-caption">{figure.caption}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
