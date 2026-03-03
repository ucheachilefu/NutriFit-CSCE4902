// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// Pages
import DashboardPage from './pages/DashboardPage';
import ProfilePage from './pages/ProfilePage';
import SettingsPage from './pages/SettingsPage';
import LogEntryPage from './pages/LogEntryPage';

function App() {
  return (
    <Router>
      <div style={{ fontFamily: 'Arial, sans-serif' }}>
        <nav style={{ padding: '1rem', borderBottom: '1px solid #ccc' }}>
          <Link to="/" style={{ marginRight: '1rem' }}>Dashboard</Link>
          <Link to="/profile" style={{ marginRight: '1rem' }}>Profile</Link>
          <Link to="/settings" style={{ marginRight: '1rem' }}>Settings</Link>
          <Link to="/log-entry">Log Entry</Link>
        </nav>

        <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/log-entry" element={<LogEntryPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;