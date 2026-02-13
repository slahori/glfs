
import React from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Mortgages from './pages/Mortgages';
import Insurance from './pages/Insurance';
import About from './pages/About';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const MortgageWarning = () => {
  const location = useLocation();
  // Remove the warning from the top of the home page as requested
  if (location.pathname === '/') return null;

  return (
    <div className="bg-red-700 text-white text-center py-4 px-6 font-bold text-sm tracking-wide">
      YOUR HOME MAY BE REPOSSESED IF YOU DO NOT KEEP UP WITH YOUR MORTGAGE PAYMENTS
    </div>
  );
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Header />
        {/*<MortgageWarning /> */} 
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/mortgages" element={<Mortgages />} />
            <Route path="/insurance" element={<Insurance />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;
