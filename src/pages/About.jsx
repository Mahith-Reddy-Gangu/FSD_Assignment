import basketball from '../assets/basketball.jpeg';

export default function About() {
  return (
    <section id="about">
      <h2>About Me</h2>
      <p>I am currently pursuing my BTech in Computer Science and Engineering at the National Institute of Technology, Warangal. I value teamwork, consistency, and steady improvement, and I enjoy working on ideas that turn into useful products.</p>
      
      <h3>Achievements & Extracurriculars</h3>
      <div className="image-gallery">
        <img src={basketball} alt="Mahith with basketball at the Inter-NIT tournament in Surathkal" />
      </div>
      <ul>
        <li>Represented the college basketball team at the All India Inter-NIT Basketball Tournament at NIT Surathkal.</li>
        <li>Won first place in the district-level KITS Trophy basketball competition in Warangal.</li>
        <li>Reached the quarterfinals in the Under-14 SFA Basketball Tournament while representing Glendale Academy International in Hyderabad.</li>
      </ul>
    </section>
  );
}