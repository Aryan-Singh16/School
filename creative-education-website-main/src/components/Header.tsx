import { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown, Phone, Mail, Clock, MapPin, GraduationCap } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);
  const location = useLocation();
  const headerRef = useRef<HTMLElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  const handleDropdownToggle = (dropdown: string) => {
    setDropdownOpen(dropdownOpen === dropdown ? null : dropdown);
  };
  
  const closeDropdown = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      setDropdownOpen(null);
    }, 150);
  };

  const keepDropdownOpen = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    const handleClickOutside = (event: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setDropdownOpen(null);
        setIsMenuOpen(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <header ref={headerRef} className="w-full relative z-50">
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white py-2 lg:py-3 shadow-md">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col lg:flex-row justify-between items-center text-xs lg:text-sm">
            {/* Contact Info */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-2 sm:gap-6 mb-2 lg:mb-0">
              <a 
                href="tel:+919088193101" 
                className="flex items-center gap-2 hover:text-blue-300 transition-all duration-300 hover:scale-105 group"
              >
                <Phone size={14} className="group-hover:animate-pulse" />
                <span className="font-medium">+91 9088193101</span>
              </a>
              <a 
                href="mailto:st.maria45@yahoo.com" 
                className="flex items-center gap-2 hover:text-blue-300 transition-all duration-300 hover:scale-105 group"
              >
                <Mail size={14} className="group-hover:animate-pulse" />
                <span className="font-medium">st.maria45@yahoo.com</span>
              </a>
            </div>
            
            {/* Info Section */}
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
              <div className="flex items-center gap-2 text-blue-200">
                <Clock size={14} />
                <span className="hidden sm:inline">Mon - Fri: 9:30 AM - 2:30 PM</span>
                <span className="sm:hidden">9:30AM - 2:30PM</span>
              </div>
              <div className="flex items-center gap-2 text-blue-200">
                <MapPin size={14} />
                <span>Agarpara</span>
              </div>
              <div className="flex items-center gap-2 text-green-300 font-semibold">
                <GraduationCap size={14} />
                <span>WB493</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main Navigation */}
      <nav 
        className={`bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 w-full transition-all duration-500 shadow-lg ${
          isScrolled 
            ? 'fixed top-0 shadow-2xl z-50 backdrop-blur-lg bg-opacity-95' 
            : 'relative'
        }`}
      >
        <div className="container mx-auto px-4 max-w-7xl py-3 lg:py-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link 
              to="/" 
              className="flex items-center gap-3 hover:scale-105 transition-all duration-300 group"
              onClick={() => setIsMenuOpen(false)}
            >
              <div className="relative">
                <img 
                  src="/logo.png" 
                  alt="St. Maria School Logo" 
                  className="h-12 lg:h-16 drop-shadow-2xl group-hover:drop-shadow-3xl transition-all duration-300" 
                />
                <div className="absolute inset-0 bg-white/20 rounded-full blur-xl group-hover:bg-white/30 transition-all duration-300"></div>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-lg lg:text-2xl font-serif font-bold text-white drop-shadow-lg group-hover:text-blue-100 transition-colors duration-300">
                  ST. Maria School
                </h1>
                <p className="text-xs lg:text-sm text-blue-100 font-medium">Agarpara</p>
                <p className="text-xs lg:text-sm text-green-300 font-semibold drop-shadow-md">
                  Affiliated to ICSE (CISCE) • Code: WB493
                </p>
              </div>
            </Link>
            
            {/* Mobile Logo Text */}
            <div className="sm:hidden flex-1 ml-3">
              <h1 className="text-base font-serif font-bold text-white drop-shadow-lg">
                ST. Maria School
              </h1>
              <p className="text-xs text-green-300 font-semibold">ICSE • WB493</p>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-6 xl:gap-8">
              <NavLink to="/" isActive={location.pathname === '/'}>Home</NavLink>
              
              {/* About Dropdown */}
              <div className="relative group">
                <button 
                  className="flex items-center gap-2 py-3 px-3 font-semibold text-white hover:text-yellow-300 transition-all duration-300 hover:scale-105 hover:bg-white/10 rounded-lg"
                  onClick={() => handleDropdownToggle('about')}
                  onMouseEnter={() => {
                    keepDropdownOpen();
                    setDropdownOpen('about');
                  }}
                >
                  About 
                  <ChevronDown 
                    size={16} 
                    className={`transition-transform duration-300 ${dropdownOpen === 'about' ? 'rotate-180' : ''}`}
                  />
                </button>
                
                {dropdownOpen === 'about' && (
                  <div 
                    className="absolute top-full left-0 mt-2 bg-white rounded-2xl shadow-2xl py-3 min-w-64 z-50 border border-blue-100 animate-in slide-in-from-top-2 duration-200"
                    onMouseEnter={keepDropdownOpen}
                    onMouseLeave={closeDropdown}
                  >
                    <div className="absolute -top-2 left-6 w-4 h-4 bg-white border-l border-t border-blue-100 rotate-45"></div>
                    
                    <DropdownLink to="/about" icon="🏫" onClick={() => setDropdownOpen(null)}>
                      About Us
                    </DropdownLink>
                    <DropdownLink to="/principal-desk" icon="👩‍💼" onClick={() => setDropdownOpen(null)}>
                      From Principal's Desk
                    </DropdownLink>
                    <DropdownLink to="/rules" icon="📋" onClick={() => setDropdownOpen(null)}>
                      Rules & Regulations
                    </DropdownLink>
                  </div>
                )}
              </div>
              
              {/* Academics Dropdown */}
              <div className="relative group">
                <button 
                  className="flex items-center gap-2 py-3 px-3 font-semibold text-white hover:text-yellow-300 transition-all duration-300 hover:scale-105 hover:bg-white/10 rounded-lg"
                  onClick={() => handleDropdownToggle('academics')}
                  onMouseEnter={() => {
                    keepDropdownOpen();
                    setDropdownOpen('academics');
                  }}
                >
                  Academics 
                  {/* <ChevronDown 
                    size={16} 
                    className={`transition-transform duration-300 ${dropdownOpen === 'academics' ? 'rotate-180' : ''}`}
                  /> */}
                </button>
                
                {/* {dropdownOpen === 'academics' && (
                  <div 
                    className="absolute top-full left-0 mt-2 bg-white rounded-2xl shadow-2xl py-3 min-w-64 z-50 border border-blue-100 animate-in slide-in-from-top-2 duration-200"
                    onMouseEnter={keepDropdownOpen}
                    onMouseLeave={closeDropdown}
                  >
                    <div className="absolute -top-2 left-6 w-4 h-4 bg-white border-l border-t border-blue-100 rotate-45"></div>
                    
                    <DropdownLink to="/curriculum" icon="📚" onClick={() => setDropdownOpen(null)}>
                      Curriculum
                    </DropdownLink>
                    <DropdownLink to="/faculty" icon="👨‍🏫" onClick={() => setDropdownOpen(null)}>
                      Faculty
                    </DropdownLink>
                    <DropdownLink to="/achievements" icon="🏆" onClick={() => setDropdownOpen(null)}>
                      Achievements
                    </DropdownLink>
                  </div>
                )} */}
              </div>
              
              <NavLink to="/facilities" isActive={location.pathname === '/facilities'}>
                Facilities
              </NavLink>
              <NavLink to="/gallery" isActive={location.pathname === '/gallery'}>
                Gallery
              </NavLink>
              
              <Link 
                to="/admissions" 
                className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-blue-900 px-4 lg:px-6 py-3 rounded-full font-bold hover:from-yellow-300 hover:to-yellow-400 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl border-2 border-yellow-300 whitespace-nowrap"
              >
                Admission
              </Link>
            </div>
            
            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden text-white p-2 hover:bg-white/20 rounded-lg transition-all duration-300 relative"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <div className={`transition-all duration-300 ${isMenuOpen ? 'rotate-180' : ''}`}>
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </div>
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        <div 
          className={`lg:hidden bg-gradient-to-b from-blue-50 via-white to-blue-50 absolute w-full shadow-2xl border-t border-blue-200 transition-all duration-500 ease-in-out ${
            isMenuOpen 
              ? 'max-h-screen opacity-100 visible transform translate-y-0' 
              : 'max-h-0 opacity-0 invisible overflow-hidden transform -translate-y-4'
          }`}
        >
          <div className="container mx-auto px-4 py-6 flex flex-col gap-1 max-h-96 overflow-y-auto">
            <MobileNavLink to="/" onClick={toggleMenu} isActive={location.pathname === '/'}>
              🏠 Home
            </MobileNavLink>
            
            {/* Mobile About Section */}
            <div className="border-b border-blue-100 pb-3 mb-2">
              <div className="font-semibold text-blue-800 mb-2 px-4 text-sm uppercase tracking-wide">
                About
              </div>
              <MobileNavLink to="/about" onClick={toggleMenu} isSubmenu>
                About Us
              </MobileNavLink>
              <MobileNavLink to="/principal-desk" onClick={toggleMenu} isSubmenu>
                From Principal's Desk
              </MobileNavLink>
              <MobileNavLink to="/rules" onClick={toggleMenu} isSubmenu>
                Rules & Regulations
              </MobileNavLink>
            </div>
            
            {/* Mobile Academics Section */}
            <div className="border-b border-blue-100 pb-3 mb-2">
              <div className="font-semibold text-blue-800 mb-2 px-4 text-sm uppercase tracking-wide">
                Academics
              </div>
              <MobileNavLink to="/curriculum" onClick={toggleMenu} isSubmenu>
                Curriculum
              </MobileNavLink>
              <MobileNavLink to="/faculty" onClick={toggleMenu} isSubmenu>
                Faculty
              </MobileNavLink>
              <MobileNavLink to="/achievements" onClick={toggleMenu} isSubmenu>
                Achievements
              </MobileNavLink>
            </div>
            
            <MobileNavLink 
              to="/facilities" 
              onClick={toggleMenu}
              isActive={location.pathname === '/facilities'}
            >
              🏢 Facilities
            </MobileNavLink>
            <MobileNavLink 
              to="/gallery" 
              onClick={toggleMenu}
              isActive={location.pathname === '/gallery'}
            >
              📸 Gallery
            </MobileNavLink>
            
            <Link 
              to="/admissions" 
              className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-blue-900 px-6 py-4 rounded-xl font-bold hover:from-yellow-300 hover:to-yellow-400 transition-all duration-300 shadow-lg text-center mt-4 border-2 border-yellow-300 hover:scale-105"
              onClick={toggleMenu}
            >
              🎓 Apply for Admission
            </Link>
          </div>
        </div>
      </nav>
      
      {/* Scroll Padding for Fixed Header */}
      {isScrolled && <div className="h-20 lg:h-24"></div>}
    </header>
  );
};

// Helper component for desktop navigation links
const NavLink = ({ 
  to, 
  children, 
  isActive 
}: { 
  to: string, 
  children: React.ReactNode, 
  isActive: boolean 
}) => (
  <Link 
    to={to} 
    className={`relative py-3 px-3 font-semibold transition-all duration-300 hover:scale-105 rounded-lg hover:bg-white/10 after:content-[''] after:absolute after:w-0 after:h-1 after:bg-yellow-300 after:left-1/2 after:bottom-0 after:transition-all after:duration-300 after:transform after:-translate-x-1/2 hover:after:w-full whitespace-nowrap ${
      isActive 
        ? 'text-yellow-300 after:w-full shadow-lg bg-white/10' 
        : 'text-white hover:text-yellow-300'
    }`}
  >
    {children}
  </Link>
);

// Helper component for dropdown links
const DropdownLink = ({ 
  to, 
  children, 
  icon, 
  onClick 
}: { 
  to: string, 
  children: React.ReactNode, 
  icon: string,
  onClick: () => void
}) => (
  <Link 
    to={to} 
    className="flex items-center gap-3 px-6 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-all duration-200 hover:translate-x-1 font-medium border-b last:border-b-0 border-gray-100/50"
    onClick={onClick}
  >
    <span className="text-lg">{icon}</span>
    {children}
  </Link>
);

// Helper component for mobile navigation links
const MobileNavLink = ({ 
  to, 
  children, 
  onClick, 
  isSubmenu = false,
  isActive = false
}: { 
  to: string, 
  children: React.ReactNode, 
  onClick: () => void,
  isSubmenu?: boolean,
  isActive?: boolean
}) => (
  <Link 
    to={to} 
    className={`py-3 px-4 hover:bg-blue-100 hover:text-blue-600 transition-all duration-200 rounded-lg font-medium border-l-4 border-transparent hover:border-blue-400 ${
      isSubmenu 
        ? 'ml-4 text-gray-600 text-sm hover:ml-6' 
        : 'text-gray-700'
    } ${
      isActive 
        ? 'bg-blue-100 text-blue-600 border-blue-400 shadow-sm' 
        : ''
    }`}
    onClick={onClick}
  >
    {children}
  </Link>
);

export default Header;