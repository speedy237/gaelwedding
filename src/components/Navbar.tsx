// src/components/Navbar.tsx
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-inner">
        <div className="navbar-brand" style={{ whiteSpace: 'nowrap' }}></div>
        <nav className="navbar-links flex flex-wrap justify-center gap-4">
          <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>Accueil</NavLink>
          <NavLink to="/programme">Programme</NavLink>
          <NavLink to="/rsvp" className={({ isActive }) => (isActive ? 'active' : '')}>RSVP</NavLink>
          <NavLink to="/travel" className={({ isActive }) => (isActive ? 'active' : '')}>Voyager</NavLink>
          <NavLink to="/cagnotte" className={({ isActive }) => (isActive ? 'active' : '')}>Cadeaux</NavLink>
          <NavLink to="/faq" className={({ isActive }) => (isActive ? 'active' : '')}>FAQ</NavLink>
        </nav>
      </div>
    </header>
  );
}
