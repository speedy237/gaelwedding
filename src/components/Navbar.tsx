// src/components/Navbar.tsx
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-inner">
        <div className="navbar-brand" style={{ whiteSpace: 'nowrap' }} ></div>
        <nav className="navbar-links">
          <NavLink to="/" className={({isActive}) => isActive ? 'active' : ''}>Accueil</NavLink>
          <NavLink to="/programme">Programme</NavLink>
          <NavLink to="/rsvp" className={({isActive}) => isActive ? 'active' : ''}>RSVP</NavLink>
          <NavLink to="/travel" className={({ isActive }) => isActive ? 'font-bold' : undefined}>Travel</NavLink>

          <NavLink to="/cagnotte" className={({isActive}) => isActive ? 'active' : ''}>Cadeaux</NavLink>
          <NavLink to="/faq" className={({ isActive }) => isActive ? 'font-bold' : undefined}>
  FAQ
</NavLink>

        </nav>
      </div>
    </header>
  );
}
