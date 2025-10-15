import React, { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("Home");
  const [isPagesOpen, setIsPagesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Features", href: "#features" },
    { name: "About", href: "#about" },
  ];

  const pageItems = [
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Team", href: "#team" },
    { name: "Pricing", href: "#pricing" },
  ];

  return (
    <nav className="fixed top-6 left-0 right-0 z-50 bg-transparent backdrop-blur-2xl">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#" className="flex items-center">
              <img 
                src="/SailsLogoLight1.png" 
                alt="Sails Software" 
                className="h-15 w-auto"
              />
            </a>
          </div>

          {/* Navigation Links - Center */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setActiveLink(link.name)}
                className={`text-sm font-normal transition-colors duration-200 ${
                  activeLink === link.name
                    ? "text-white"
                    : "text-gray-300 hover:text-white"
                }`}
                style={{ fontFamily: 'Inter, system-ui, -apple-system, sans-serif' }}
              >
                {link.name}
              </a>
            ))}

            {/* Pages Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => setIsPagesOpen(true)}
              onMouseLeave={() => setIsPagesOpen(false)}
            >
              <button
                className="flex items-center space-x-1 text-sm font-normal text-gray-300 hover:text-white transition-colors duration-200"
                style={{ fontFamily: 'Inter, system-ui, -apple-system, sans-serif' }}
              >
                <span>Pages</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isPagesOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Dropdown Menu */}
              {isPagesOpen && (
                <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 w-48 bg-gray-900/95 backdrop-blur-xl border border-gray-700/50 rounded-lg shadow-2xl py-2 animate-in fade-in slide-in-from-top-2 duration-200">
                  {pageItems.map((item, index) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-800/50 transition-all duration-200"
                      style={{ fontFamily: 'Inter, system-ui, -apple-system, sans-serif' }}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              )}
            </div>

            <a
              href="#blog"
              onClick={() => setActiveLink("Blog")}
              className={`text-sm font-normal transition-colors duration-200 ${
                activeLink === "Blog"
                  ? "text-white"
                  : "text-gray-300 hover:text-white"
              }`}
              style={{ fontFamily: 'Inter, system-ui, -apple-system, sans-serif' }}
            >
              Blog
            </a>
          </div>

          {/* Contact Button */}
          <div className="hidden md:block">
            <button 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full px-8 py-3 text-lg font-poppins transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 transform"
              style={{ fontFamily: 'Inter, system-ui, -apple-system, sans-serif' }}
            >
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-300 hover:text-white transition-colors"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-gray-900/95 backdrop-blur-xl border-t border-gray-700/50">
          <div className="px-6 py-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => {
                  setActiveLink(link.name);
                  setIsMobileMenuOpen(false);
                }}
                className={`block py-2 text-sm font-normal transition-colors ${
                  activeLink === link.name
                    ? "text-white"
                    : "text-gray-300"
                }`}
                style={{ fontFamily: 'Inter, system-ui, -apple-system, sans-serif' }}
              >
                {link.name}
              </a>
            ))}

            {/* Mobile Pages Section */}
            <div className="py-2">
              <button
                onClick={() => setIsPagesOpen(!isPagesOpen)}
                className="flex items-center justify-between w-full text-sm font-normal text-gray-300"
                style={{ fontFamily: 'Inter, system-ui, -apple-system, sans-serif' }}
              >
                <span>Pages</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${isPagesOpen ? 'rotate-180' : ''}`} />
              </button>
              {isPagesOpen && (
                <div className="mt-2 ml-4 space-y-2">
                  {pageItems.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="block py-2 text-sm text-gray-400 hover:text-gray-300"
                      onClick={() => setIsMobileMenuOpen(false)}
                      style={{ fontFamily: 'Inter, system-ui, -apple-system, sans-serif' }}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              )}
            </div>

            <a
              href="#blog"
              onClick={() => {
                setActiveLink("Blog");
                setIsMobileMenuOpen(false);
              }}
              className={`block py-2 text-sm font-normal transition-colors ${
                activeLink === "Blog" ? "text-white" : "text-gray-300"
              }`}
              style={{ fontFamily: 'Inter, system-ui, -apple-system, sans-serif' }}
            >
              Blog
            </a>

            <button 
              className="w-full mt-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full px-6 py-2 text-sm font-medium transition-all duration-300 hover:scale-105 transform"
              style={{ fontFamily: 'Inter, system-ui, -apple-system, sans-serif' }}
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
