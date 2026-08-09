import { NavLink } from 'react-router-dom';

export default function Navbar({ theme, toggleTheme }) {
  return (
    <header>
      <h1>Mahith Reddy Gangu</h1>
      <nav>
        <ul>
          <li><NavLink to="/">Intro</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/projects">Projects</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
          <li>
            <button onClick={toggleTheme} className="theme-toggle">
              {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}