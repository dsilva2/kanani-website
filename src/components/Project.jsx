import { Link } from "react-router-dom";

export const Project = ({ slug, title, tagline, tags }) => {
  return (
    <Link to={`/projects/${slug}`} className="project">
      <div className="project-info">
        <h3>{title}</h3>
        <p>{tagline}</p>
        <div className="technologies">
          {tags.map((tag, index) => (
            <span key={index} className="tech-tag">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
};
