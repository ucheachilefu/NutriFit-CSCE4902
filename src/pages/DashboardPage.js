import React from 'react';
import ThemeProv from '../context/ThemeProv';
import Header from '../components/Header';
import Footer from '../components/Footer';
import DashboardStats from './dashboard/DashboardStats';

export default function DashboardPage() {
  return (
    <ThemeProv>
      <Header />
      <div style={{ padding: '2rem' }}>
        <h1>Dashboard</h1>
        <DashboardStats />
      </div>
      <Footer />
    </ThemeProv>
  );
}