import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function ProjectCard({ project }) {
  // Independent state per card
  const [showMore, setShowMore] = useState(false);

  return (
    <article className="project-card">
      <h3>{project.title}</h3>
      <p>
        {showMore ? project.description : `${project.description.substring(0, 80)}...`}
      </p>
      
      <div className="card-actions">
        <button onClick={() => setShowMore(!showMore)} className="btn-small">
          {showMore ? 'Show Less' : 'View Details'}
        </button>
        <Link to={`/projects/${project.id}`} className="btn-small outline">Full Page</Link>
      </div>
    </article>
  );
}