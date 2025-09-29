
import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import AnimatedBackground from './components/AnimatedBackground';

// Static imports instead of lazy loading to fix module resolution issues.
import Home from './pages/Home';
import Services from './pages/Services';
import Company from './pages/Company';
import AiPlatform from './pages/AiPlatform';
import Investor from './pages/Investor';

const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="relative min-h-screen w-full overflow-x-hidden bg-black">
        <AnimatedBackground />
        <div className="relative z-10">
          <Header />
          <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-28">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/company" element={<Company />} />
              <Route path="/ai-platform" element={<AiPlatform />} />
              <Route path="/investor" element={<Investor />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </div>
    </HashRouter>
  );
};

export default App;
