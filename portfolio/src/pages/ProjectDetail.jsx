import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000';

export default function ProjectDetail() {
  const { projectId } = useParams();
  const [project, setProject] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const loadProject = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/api/projects/${projectId}`);
        const payload = await response.json();
        if (!response.ok) {
          throw new Error(payload.error || 'Project not found.');
        }
        setProject(payload);
      } catch (requestError) {
        setError(requestError.message || 'Unable to load this project.');
      } finally {
        setIsLoading(false);
      }
    };

    loadProject();
  }, [projectId]);

  if (isLoading) {
    return <section><p role="status">Loading project...</p></section>;
  }

  if (error || !project) {
    return (
      <section>
        <h2>Project not found</h2>
        <p role="alert">{error || 'The requested project does not exist.'}</p>
        <Link to="/projects">Back to Projects</Link>
      </section>
    );
  }

  return (
    <section className="project-detail">
      <h2>{project.title}</h2>
      <div className="hero-tags">
        {project.techStack.map((tech) => (
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