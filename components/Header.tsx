import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;

  const navItems = [
    { name: 'Mortgages', path: '/mortgages' },
    { name: 'Insurance', path: '/insurance' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        
        {/* Logo + Tagline */}
        <Link to="/" className="flex items-center space-x-4">
          <img 
            src="/logos/GreaterLondonLogo2.png"
            alt="Greater London Financial Services"
            className="h-16 w-auto object-contain"
          />
          <span className="hidden lg:block text-[10px] text-gray-500 font-medium tracking-[0.25em] uppercase leading-tight">
            Mortgage &amp; Insurance Specialists
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`text-sm font-semibold transition-colors ${
                isActive(item.path)
                  ? 'text-blue-900 border-b-2 border-blue-900'
                  : 'text-gray-600 hover:text-blue-900'
              } pb-1`}
            >
              {item.name}
            </Link>
          ))}

          <a
            href="https://glfsl.myfinancecentre.com/Authentication/Login?ReturnUrl=%2f"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-900 text-white px-5 py-2.5 rounded-full text-sm font-bold hover:bg-blue-800 transition-all shadow-md active:scale-95"
          >
            Portal Log-in 
          </a>
        </nav>

        {/* Mobile Menu Button (Hamburger) */}
        <div className="md:hidden flex items-center">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-blue-900 focus:outline-none p-2"
          >
            <div className="w-6 h-5 flex flex-col justify-between items-end">
              <span className={`h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'w-6 translate-y-2 rotate-45' : 'w-6'}`}></span>
              <span className={`h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'w-4'}`}></span>
              <span className={`h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'w-6 -translate-y-2.5 -rotate-45' : 'w-5'}`}></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div 
        className={`md:hidden absolute w-full bg-white border-b border-gray-100 transition-all duration-300 ease-in-out origin-top ${
          isMenuOpen ? 'scale-y-100 opacity-100 visible' : 'scale-y-0 opacity-0 invisible'
        }`}
      >
        <nav className="flex flex-col p-4 space-y-4 shadow-xl">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              onClick={() => setIsMenuOpen(false)}
              className={`text-base font-bold px-4 py-2 rounded-xl transition-all ${
                isActive(item.path)
                  ? 'bg-blue-50 text-blue-900'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              {item.name}
            </Link>
          ))}
          <div className="pt-2 border-t border-gray-50">
            <a
              href="https://glfsl.myfinancecentre.com/Authentication/Login?ReturnUrl=%2f"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center bg-blue-900 text-white py-4 rounded-2xl font-black uppercase tracking-widest text-xs shadow-lg"
            >
              Portal Log-in 
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;