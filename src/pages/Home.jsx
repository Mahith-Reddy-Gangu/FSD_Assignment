import { useState, useEffect } from 'react';
import photo from '../assets/photo.jpg';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  // Side Effect 1: Simulate loading on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000); // 1 second delay

    // Cleanup function
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <section className="loading-screen">
        <h2>Loading profile...</h2>
      </section>
    );
  }

  return (
    <section id="introduction" className="hero-section">
      <div className="hero-copy">
        <p className="eyebrow">Computer Science and Engineering Student</p>
        <h2>Building practical systems with a strong interest in AI, software, and problem solving.</h2>
        <p>Hello, I am Mahith. I studied at Glendale Academy International and Narayana Junior College, and I am currently pursuing my BTech in Computer Science and Engineering at the National Institute of Technology, Warangal. I enjoy taking on new challenges, working in teams, and learning by building. Outside academics, I like basketball, cricket, Formula One, watching movies and anime, and hanging out with friends.</p>
        <div className="hero-tags">
          <span>Basketball</span>
          <span>Cricket</span>
          <span>Formula One</span>
          <span>Movies</span>
          <span>Anime</span>
          <span>Friends</span>
        </div>
      </div>
      <div className="image-gallery hero-image">
        <img src={photo} alt="Portrait of Mahith Reddy Gangu" />
      </div>
    </section>
  );
}