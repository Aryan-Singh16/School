import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin, ChevronRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-school-navy text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* School Info */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <img 
                src="/logo.png" 
                alt="St. Maria School Logo" 
                className="h-12 sm:h-14 bg-white rounded-full p-1 flex-shrink-0" 
              />
              <div>
                <h3 className="text-lg sm:text-xl font-serif font-bold text-white">ST. Maria School</h3>
                <p className="text-xs text-white/70">Agarpara</p>
              </div>
            </div>
            
            <p className="text-white/80 mb-6 text-sm sm:text-base leading-relaxed">
              Providing quality education and shaping the future of our children since 2001. 
              ST. Maria School is committed to academic excellence and holistic development.
            </p>
            
            <div className="flex gap-3 sm:gap-4">
              <SocialIcon icon={<Facebook size={18} />} href="#" label="Facebook" />
              <SocialIcon icon={<Twitter size={18} />} href="#" label="Twitter" />
              <SocialIcon icon={<Instagram size={18} />} href="#" label="Instagram" />
              <SocialIcon icon={<Youtube size={18} />} href="#" label="YouTube" />
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="order-2 sm:order-none">
            <h3 className="text-lg font-serif font-semibold mb-6 text-white border-b border-school-gold/30 pb-2">
              Quick Links
            </h3>
            <ul className="grid grid-cols-1 gap-3">
              <FooterLink href="/about" label="About Us" />
              <FooterLink href="/academics" label="Academics" />
              <FooterLink href="/facilities" label="Facilities" />
              <FooterLink href="/admission" label="Admission" />
              <FooterLink href="/events" label="Events & News" />
              <FooterLink href="/alumni" label="Alumni" />
              <FooterLink href="/careers" label="Careers" />
              <FooterLink href="/contact" label="Contact Us" />
            </ul>
          </div>
          
          {/* Contact Information */}
          <div className="order-1 sm:order-none">
            <h3 className="text-lg font-serif font-semibold mb-6 text-white border-b border-school-gold/30 pb-2">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <MapPin size={20} className="shrink-0 text-school-gold mt-0.5" />
                <p className="text-white/80 text-sm sm:text-base leading-relaxed">
                  Tarapukur Main Road, Agarpara, Kolkata-700109
                </p>
              </li>
              <li className="flex gap-3">
                <Phone size={20} className="shrink-0 text-school-gold mt-0.5" />
                <div className="space-y-1">
                  <a href="tel:+919088193101" className="text-white/80 hover:text-school-gold transition-colors text-sm sm:text-base block">
                    +91 9088193101
                  </a>
                  <a href="tel:03325950106" className="text-white/80 hover:text-school-gold transition-colors text-sm sm:text-base block">
                    033-25950106
                  </a>
                </div>
              </li>
              <li className="flex gap-3">
                <Mail size={20} className="shrink-0 text-school-gold mt-0.5" />
                <div>
                  <a href="mailto:st.maria45@yahoo.com" className="text-white/80 hover:text-school-gold transition-colors text-sm sm:text-base break-all">
                    st.maria45@yahoo.com
                  </a>
                </div>
              </li>
            </ul>
          </div>
          
          {/* School Hours */}
          <div className="order-3 sm:order-none">
            <h3 className="text-lg font-serif font-semibold mb-6 text-white border-b border-school-gold/30 pb-2">
              School Hours
            </h3>
            <div className="space-y-4">
              <div className="bg-white/5 p-4 rounded-lg border-l-4 border-school-gold">
                <h4 className="font-semibold mb-2 text-school-gold text-sm sm:text-base">Office Hours</h4>
                <p className="text-white/80 text-sm">Monday to Friday</p>
                <p className="text-white/80 text-sm font-medium">9:00 AM - 3:00 PM</p>
              </div>
              
              <div className="bg-white/5 p-4 rounded-lg border-l-4 border-school-gold">
                <h4 className="font-semibold mb-2 text-school-gold text-sm sm:text-base">Class Hours</h4>
                <div className="space-y-1">
                  <p className="text-white/80 text-sm">Primary: 8:00 AM - 11:00 AM</p>
                  <p className="text-white/80 text-sm">Secondary: 11:30 AM - 4:00 PM</p>
                </div>
              </div>
              
              <a 
                href="#contact" 
                className="inline-flex items-center gap-2 text-school-gold hover:text-white transition-colors text-sm font-medium mt-3 group"
              >
                Contact for more information
                <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Copyright */}
      <div className="bg-black/20 py-4 border-t border-white/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-white/70 text-sm">
            <p className="text-center sm:text-left">
              © {new Date().getFullYear()} ST. Maria School, Agarpara. All Rights Reserved.
            </p>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 text-center">
              <a href="/privacy-policy" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <span className="hidden sm:inline">|</span>
              <a href="/terms" className="hover:text-white transition-colors">
                Terms of Use
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

const SocialIcon = ({ 
  icon, 
  href, 
  label 
}: { 
  icon: React.ReactNode, 
  href: string, 
  label: string 
}) => {
  return (
    <a 
      href={href} 
      aria-label={label}
      className="w-9 h-9 sm:w-10 sm:h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-school-gold hover:text-school-navy transition-all duration-300 hover:scale-110"
    >
      {icon}
    </a>
  );
};

const FooterLink = ({ 
  href, 
  label 
}: { 
  href: string, 
  label: string 
}) => {
  return (
    <li>
      <a 
        href={href} 
        className="text-white/80 hover:text-school-gold transition-colors duration-300 flex items-center gap-2 py-1 group text-sm sm:text-base"
      >
        <ChevronRight size={14} className="text-school-gold opacity-0 group-hover:opacity-100 transition-opacity -ml-4 group-hover:ml-0" />
        {label}
      </a>
    </li>
  );
};

export default Footer;