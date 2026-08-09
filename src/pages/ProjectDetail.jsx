import { useParams, Link } from 'react-router-dom';
import { projects } from '../data/projects';

export default function ProjectDetail() {
  const { projectId } = useParams();
  const project = projects.find(p => p.id === projectId);

  if (!project) {
    return (
      <section>
        <h2>Project not found</h2>
        <Link to="/projects">Back to Projects</Link>
      </section>
    );
  }

  return (
    <section className="project-detail">
      <h2>{project.title}</h2>
      <div className="hero-tags">
        {project.techStack.map(tech => (
          <span key={tech}>{tech}</span>
        ))}
      </div>
      <p style={{ marginTop: '2rem' }}>{project.description}</p>
      <Link to="/projects" className="btn-small outline" style={{ display: 'inline-block', marginTop: '2rem' }}>
        &larr; Back to Projects
      </Link>
    </section>
  );
}