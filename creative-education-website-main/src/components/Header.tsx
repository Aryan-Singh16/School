
import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Phone, Mail, Clock } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="w-full">
      {/* Top Bar */}
      <div className="bg-school-navy text-white py-2">
        <div className="container-custom flex flex-col sm:flex-row justify-between items-center text-sm">
          <div className="flex flex-wrap justify-center sm:justify-start gap-4 mb-2 sm:mb-0">
            <a href="tel:+910123456789" className="flex items-center gap-1 hover:text-school-gold transition-colors">
              <Phone size={14} />
              <span>+91 9088193101</span>
            </a>
            <a href="mailto:info@stmaria.edu" className="flex items-center gap-1 hover:text-school-gold transition-colors">
              <Mail size={14} />
              <span>st.maria45@yahoo.com</span>
            </a>
          </div>
          
          <div className="flex items-center gap-1">
            <Clock size={14} />
            <span>Mon - Fri: 9:00 AM - 3:00 PM</span>
          </div>
        </div>
      </div>
      
      {/* Main Navigation */}
      <nav 
        className={`bg-green-100 w-full transition-all duration-300 ${
          isScrolled ? 'sticky top-0 shadow-md z-40' : ''
        }`}
      >
        <div className="container-custom py-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <a href="/" className="flex items-center gap-3">
              <img src="/logo.png" alt="St. Maria School Logo" className="h-14" />
              <div>
                <h1 className="text-xl font-serif font-bold text-school-maroon">ST. Maria School</h1>
                <p className="text-xs text-school-navy">Agarpara</p>
              </div>
            </a>
            
            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-6">
              <NavLink href="#home">Home</NavLink>
              <NavLink href="#about">About Us</NavLink>
              <NavLink href="#academics">Academics</NavLink>
              <NavLink href="#facilities">Facilities</NavLink>
              <NavLink href="#gallery">Gallery</NavLink>
              <NavLink href="#testimonials">Testimonials</NavLink>
              <a href="#admission" className="btn-primary">Admission</a>
            </div>
            
            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden text-school-navy"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        <div 
          className={`lg:hidden bg-white absolute z-30 w-full shadow-md transition-all duration-300 ${
            isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
          }`}
        >
          <div className="container-custom py-4 flex flex-col gap-4">
            <a href="#home" className="py-2 border-b border-gray-100 hover:text-school-maroon transition-colors" onClick={toggleMenu}>Home</a>
            <a href="#about" className="py-2 border-b border-gray-100 hover:text-school-maroon transition-colors" onClick={toggleMenu}>About Us</a>
            <a href="#academics" className="py-2 border-b border-gray-100 hover:text-school-maroon transition-colors" onClick={toggleMenu}>Academics</a>
            <a href="#facilities" className="py-2 border-b border-gray-100 hover:text-school-maroon transition-colors" onClick={toggleMenu}>Facilities</a>
            <a href="#gallery" className="py-2 border-b border-gray-100 hover:text-school-maroon transition-colors" onClick={toggleMenu}>Gallery</a>
            <a href="#testimonials" className="py-2 border-b border-gray-100 hover:text-school-maroon transition-colors" onClick={toggleMenu}>Testimonials</a>
            <a href="#admission" className="btn-primary self-start" onClick={toggleMenu}>Admission</a>
          </div>
        </div>
      </nav>
    </header>
  );
};

// Helper component for navigation links
const NavLink = ({ href, children }: { href: string, children: React.ReactNode }) => (
  <a 
    href={href} 
    className="relative py-2 font-medium text-school-navy hover:text-school-maroon transition-colors duration-300 after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-school-maroon after:left-0 after:bottom-0 after:transition-all hover:after:w-full"
  >
    {children}
  </a>
);

export default Header;
