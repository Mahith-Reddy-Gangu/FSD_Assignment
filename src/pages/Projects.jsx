import { projects } from '../data/projects';
import ProjectList from '../components/ProjectList';

export default function Projects() {
  return (
    <section id="projects">
      <h2>Projects</h2>
      {/* Passing data down (Prop drilling Level 1) */}
      <ProjectList projects={projects} />
    </section>
  );
}