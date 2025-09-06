// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import RsvpPage from './pages/RsvpPage';
import CagnottePage from './pages/CagnottePage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProgrammePage from './pages/ProgrammePage';
import TravelPage from './pages/TravelPage';
import FaqPage from './pages/FaqPage';

const App: React.FC = () => (
  <Router basename="/gaelwedding/">
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/programme" element={<ProgrammePage />} />
          <Route path="/rsvp" element={<RsvpPage />} />
          <Route path="/travel" element={<TravelPage />} />
          <Route path="/cagnotte" element={<CagnottePage />} />
          <Route path="/faq" element={<FaqPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  </Router>
);

export default App;
