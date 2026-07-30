import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import VideoSection from './components/VideoSection';
import Services from './components/Services';
import Features from './components/Features';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="bg-[#000B66] min-h-screen font-sans selection:bg-[#0014B4] selection:text-white">
      <Header />
      
      <main className="pt-20"> {/* Padding top to account for fixed header */}
        <Hero />
        <VideoSection />
        <Services />
        <Features />
      </main>

      <Footer />
    </div>
  );
}
