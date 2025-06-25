import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

const MegaMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);      // whole menu offcanvas
  const [servicesOpen, setServicesOpen] = useState(false); // inside mobile: toggle mega items
  const [proOpen, setProOpen] = useState(false); // inside mobile: toggle mega items
  

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  return (
    <nav className="bg-white relative z-50">
      <div className="max-w-7xl mx-auto px-4 py-0 flex justify-between items-center">
        <Link to="/Home"><img src='src/assets/images/logo-ebizfiling-sm.png' className='h-16 py-2 md:py-0'></img></Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 items-center">
          <li className="relative group">
            <a href="#" className="font-medium hover:text-blue-600 py-8">Services</a>
            <div className="absolute right-0 top-full pt-5 hidden group-hover:grid grid-cols-3 gap-6 bg-white shadow-lg w-[600px] p-6 z-20 mt-8">
              <MegaMenuContent />
            </div>
          </li>
          <li className="relative group">
            <a href='#' className="font-medium hover:text-blue-600 py-8">Products</a>
            <div className="absolute right-0 top-full pt-5 hidden group-hover:grid grid-cols-3 gap-6 bg-white shadow-lg w-[600px] p-6 z-20 mt-8">
              <MegaMenuContentt />
            </div>
          </li>



          <li className="font-medium hover:text-blue-600 py-8"><a href='#'>About</a></li>
          <li className="font-medium hover:text-blue-600 py-8"><a href='#'>Contact</a></li>
        </ul>

        {/* Hamburger Icon - Mobile */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(true)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Offcanvas Mobile Menu */}
      <div className={`fixed top-0 left-0 h-full w-4/5 max-w-xs bg-white shadow-lg z-50 transform transition-transform duration-300 ${menuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex justify-between items-center px-4 py-3 border-b">
          <h2 className="text-lg font-bold">Menu</h2>
          <button onClick={() => setMenuOpen(false)} className="text-2xl text-gray-600">×</button>
        </div>
        <div className="p-4 space-y-4">
          <div>
            <button onClick={() => setServicesOpen(!servicesOpen)} className="w-full text-left font-medium">
              Services {servicesOpen ? '▲' : '▼'}
            </button>
            {servicesOpen && (
              <div className="mt-2 pl-2 space-y-4 text-sm text-gray-700">
                <MegaMenuContent />
              </div>
            )}
          </div>

          <div>
            <button onClick={() => setProOpen(!proOpen)} className="w-full text-left font-medium">
              Products {proOpen ? '▲' : '▼'}
            </button>
            {proOpen && (
              <div className="mt-2 pl-2 space-y-4 text-sm text-gray-700">
                <MegaMenuContentt />
              </div>
            )}
          </div>
          <div className="font-medium">About</div>
          <div className="font-medium">Contact</div>
        </div>
      </div>

      {/* Overlay */}
      {menuOpen && (
        <div
          onClick={() => setMenuOpen(false)}
          className="fixed inset-0 bg-black bg-opacity-40 z-40 md:hidden"
        />
      )}
    </nav>
  );
};

// Reusable MegaMenu content
const MegaMenuContent = () => (
  <>
    <div>
      <h4 className="font-bold mb-1">Design</h4>
      <ul className="space-y-1">
        <li>Logo</li>
        <li>Branding</li>
        <li>UI/UX</li>
      </ul>
    </div>
    <div>
      <h4 className="font-bold mb-1">Development</h4>
      <ul className="space-y-1">
        <li>React</li>
        <li>WordPress</li>
        <li>Shopify</li>
      </ul>
    </div>
    <div>
      <h4 className="font-bold mb-1">Marketing</h4>
      <ul className="space-y-1">
        <li>SEO</li>
        <li>Email</li>
        <li>Social Media</li>
      </ul>
    </div>
  </>
);

// Reusable MegaMenu content
const MegaMenuContentt = () => (
  <>
    <div>
      <h4 className="font-bold mb-1">Design</h4>
      <ul className="space-y-1">
        <li>Logo</li>
        <li>Branding</li>
        <li>UI/UX</li>
      </ul>
    </div>
    <div>
      <h4 className="font-bold mb-1">Development</h4>
      <ul className="space-y-1">
        <li>React</li>
        <li>WordPress</li>
        <li>Shopify</li>
      </ul>
    </div>
    <div>
      <h4 className="font-bold mb-1">Marketing</h4>
      <ul className="space-y-1">
        <li>SEO</li>
        <li>Email</li>
        <li>Social Media</li>
      </ul>
    </div>
  </>
);

export default MegaMenu;
