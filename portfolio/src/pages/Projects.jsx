import { useEffect, useState } from 'react';
import ProjectList from '../components/ProjectList';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000';

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const loadProjects = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/api/projects`);
        const payload = await response.json();
        if (!response.ok) {
          throw new Error(payload.error || 'Unable to load projects.');
        }
        setProjects(payload);
      } catch (requestError) {
        setError(requestError.message || 'Unable to connect to the backend.');
      } finally {
        setIsLoading(false);
      }
    };

    loadProjects();
  }, []);

  return (
    <section id="projects">
      <h2>Projects</h2>
      {isLoading && <p role="status">Loading projects from the backend...</p>}
      {!isLoading && error && <p role="alert">Could not load projects: {error}</p>}
      {!isLoading && !error && <ProjectList projects={projects} />}
    </section>
  );
}