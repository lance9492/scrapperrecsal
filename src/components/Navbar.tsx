import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, Recycle } from 'lucide-react';
import UserMenu from './UserMenu';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="flex items-center transition-transform group-hover:scale-110">
                <Recycle className="w-8 h-8 text-[#FF3B81]" />
              </div>
              <span className="text-2xl font-bold text-gray-900">Scrapper</span>
            </Link>
            <div className="hidden sm:ml-8 sm:flex sm:items-center sm:space-x-8">
              <Link 
                to="/marketplace" 
                className={`relative px-3 py-2 transition-colors ${
                  isActive('/marketplace') 
                    ? 'text-[#FF3B81]' 
                    : 'text-gray-600 hover:text-[#FF3B81]'
                }`}
              >
                <span className="relative z-10">RecycleMart</span>
                {isActive('/marketplace') && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#FF3B81]"></span>
                )}
              </Link>
              <Link 
                to="/salvage" 
                className={`relative px-3 py-2 transition-colors ${
                  isActive('/salvage') 
                    ? 'text-[#FF3B81]' 
                    : 'text-gray-600 hover:text-[#FF3B81]'
                }`}
              >
                <span className="relative z-10">SalvageHub</span>
                {isActive('/salvage') && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#FF3B81]"></span>
                )}
              </Link>
              <Link 
                to="/about" 
                className={`relative px-3 py-2 transition-colors ${
                  isActive('/about') 
                    ? 'text-[#FF3B81]' 
                    : 'text-gray-600 hover:text-[#FF3B81]'
                }`}
              >
                <span className="relative z-10">About Us</span>
                {isActive('/about') && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#FF3B81]"></span>
                )}
              </Link>
              <Link 
                to="/pricing" 
                className={`relative px-3 py-2 transition-colors ${
                  isActive('/pricing') 
                    ? 'text-[#FF3B81]' 
                    : 'text-gray-600 hover:text-[#FF3B81]'
                }`}
              >
                <span className="relative z-10">Pricing</span>
                {isActive('/pricing') && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#FF3B81]"></span>
                )}
              </Link>
              <Link 
                to="/contact" 
                className={`relative px-3 py-2 transition-colors ${
                  isActive('/contact') 
                    ? 'text-[#FF3B81]' 
                    : 'text-gray-600 hover:text-[#FF3B81]'
                }`}
              >
                <span className="relative z-10">Contact</span>
                {isActive('/contact') && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#FF3B81]"></span>
                )}
              </Link>
            </div>
          </div>
          <div className="flex items-center">
            <UserMenu />
            <button 
              onClick={toggleMenu}
              className="ml-2 p-2 rounded-lg text-gray-500 hover:bg-gray-100 sm:hidden"
            >
              <Menu size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="sm:hidden bg-white border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <div className="space-y-1">
              <Link 
                to="/marketplace" 
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-[#FF3B81] hover:bg-gray-50 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                RecycleMart
              </Link>
              <Link 
                to="/marketplace/prices" 
                className="block px-6 py-2 text-sm text-gray-600 hover:text-[#FF3B81] hover:bg-gray-50 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Live Prices
              </Link>
              <Link 
                to="/marketplace/materials" 
                className="block px-6 py-2 text-sm text-gray-600 hover:text-[#FF3B81] hover:bg-gray-50 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Materials
              </Link>
              <Link 
                to="/marketplace/recyclers" 
                className="block px-6 py-2 text-sm text-gray-600 hover:text-[#FF3B81] hover:bg-gray-50 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Recyclers
              </Link>
            </div>
            <Link 
              to="/salvage" 
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-[#FF3B81] hover:bg-gray-50 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              SalvageHub
            </Link>
            <Link 
              to="/about" 
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-[#FF3B81] hover:bg-gray-50 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            <Link 
              to="/pricing" 
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-[#FF3B81] hover:bg-gray-50 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link 
              to="/contact" 
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-[#FF3B81] hover:bg-gray-50 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;