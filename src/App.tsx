// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import RsvpPage from './pages/RsvpPage';
import CagnottePage from './pages/CagnottePage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App: React.FC = () => (
  <Router>
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/rsvp" element={<RsvpPage />} />
          <Route path="/cagnotte" element={<CagnottePage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  </Router>
);

export default App;
