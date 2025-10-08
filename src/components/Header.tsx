import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const navItems = [
    {label: "Inicio", href: "#home"},
    {label: "Cómo funciona", href: "#how"},
    {label: "Plataforma", href: "#plataforma"},
    {label: "FAQ", href: "#faq"},
    {label: "Acceso", href: "#acceso"},
    {label: "Contacto", href: "#contacto"}
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button 
              onClick={() => scrollToSection('#home')}
              className="flex items-center"
            >
              <span className="text-2xl font-bold text-red-600">INMOINSIDER</span>
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="text-gray-700 hover:text-red-600 transition-colors duration-200 font-medium"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button
              onClick={() => {
                const newWindow = window.open('https://remax-buro.notion.site/1f318dc466d68051852acc770cff4bc5?pvs=105', '_blank');
                if (newWindow) newWindow.opener = null;
              }}
              className="bg-red-600 text-white px-6 py-2 rounded-xl font-semibold hover:bg-red-700 transition-all duration-200 transform hover:scale-105"
            >
              Obtén tu acceso
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-gray-900"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left px-3 py-2 text-gray-700 hover:text-red-600 hover:bg-gray-50 rounded-lg transition-colors duration-200"
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => {
                  const newWindow = window.open('https://remax-buro.notion.site/1f318dc466d68051852acc770cff4bc5?pvs=105', '_blank');
                  if (newWindow) newWindow.opener = null;
                }}
                className="block w-full text-left bg-red-600 text-white px-3 py-2 rounded-lg font-semibold hover:bg-red-700 transition-colors duration-200 mt-2"
              >
                Obtén tu acceso
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;