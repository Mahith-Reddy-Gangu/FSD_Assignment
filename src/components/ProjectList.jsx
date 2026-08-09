import ProjectCard from './ProjectCard';

export default function ProjectList({ projects }) {
  return (
    <div className="projects-container">
      {projects.map(project => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}