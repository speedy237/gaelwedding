// src/components/Navbar.tsx
import { Link, NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-inner">
        <div className="navbar-brand" style={{ whiteSpace: 'nowrap' }} >H &amp; G</div>
        <nav className="navbar-links">
          <NavLink to="/" className={({isActive}) => isActive ? 'active' : ''}>Accueil</NavLink>
          <NavLink to="/rsvp" className={({isActive}) => isActive ? 'active' : ''}>RSVP</NavLink>
          <NavLink to="/cagnotte" className={({isActive}) => isActive ? 'active' : ''}>Cagnotte</NavLink>
        </nav>
      </div>
    </header>
  );
}
