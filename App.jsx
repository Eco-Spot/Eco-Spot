import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import FeaturedArticles from './components/FeaturedArticles';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <FeaturedArticles />
      </main>
      <Footer />
    </div>
  );
}

export default App;

