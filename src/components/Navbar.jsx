import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
    setIsOpen(false);
  };

  const navItems = [
    { name: 'Home', id: 'hero' },
    { name: 'Ourservices', id: 'services' },
    { name: 'About Us', id: 'about' },
    { name: 'Contact Us', id: 'contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md' : 'bg-white'
    }`}>
      <div className="max-w-7xl mx-auto px-1">
        <div className="flex justify-between items-centre h-20 md:h-24">
          
          <div className="flex items-center h-full">
            <img
              src="src/components/satyoslogo.avif"
              alt="SATYOS Logo"
              className="h-[60%] w-auto object-contain"
            />
          </div>

          
          <div className="hidden md:flex items-center space-x-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-base font-medium border-b-2 transition-all duration-200 ${
                  activeSection === item.id
                    ? 'border-black'
                    : 'border-transparent'
                } hover:border-black text-black`}
              >
                {item.name}
              </button>
            ))}
          </div>

         
          <div className="md:hidden">
            <button onClick={() => setIsOpen(true)} className="text-black">
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="fixed top-0 right-0 h-full w-3/5 bg-white shadow-lg z-50 transition-all duration-300">
          <div className="flex justify-between items-start p-6">
            <div className="space-y-6">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block text-left text-lg font-medium text-black ${
                    activeSection === item.id ? 'underline underline-offset-4' : ''
                  } hover:underline`}
                >
                  {item.name}
                </button>
              ))}
            </div>
            <button onClick={() => setIsOpen(false)} className="text-black">
              <X className="h-6 w-6" />
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
