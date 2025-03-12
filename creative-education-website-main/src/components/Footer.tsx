
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-school-navy text-white">
      {/* Main Footer */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* School Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <img src="/logo.png" alt="St. Maria School Logo" className="h-14 bg-white rounded-full p-1" />
              <div>
                <h3 className="text-xl font-serif font-bold text-white">ST. Maria School</h3>
                <p className="text-xs text-white/70">Agarpara</p>
              </div>
            </div>
            
            <p className="text-white/80 mb-6">
              Providing quality education and shaping the future of our children since 2001. 
              ST. Maria School is committed to academic excellence and holistic development.
            </p>
            
            {/* <div className="flex gap-4">
              <SocialIcon icon={<Facebook size={18} />} href="#" label="Facebook" />
              <SocialIcon icon={<Twitter size={18} />} href="#" label="Twitter" />
              <SocialIcon icon={<Instagram size={18} />} href="#" label="Instagram" />
              <SocialIcon icon={<Youtube size={18} />} href="#" label="YouTube" />
            </div> */}
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-serif font-semibold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
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
          <div>
            <h3 className="text-lg font-serif font-semibold mb-6 text-white">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <MapPin size={20} className="shrink-0 text-school-gold" />
                <p className="text-white/80">
                Tarapukur Main Road, Agarpara, Kolkata-700109
                </p>
              </li>
              <li className="flex gap-3">
                <Phone size={20} className="shrink-0 text-school-gold" />
                <div>
                  <p className="text-white/80">+91 9088193101</p>
                  <p className="text-white/80">033-25950106</p>
                </div>
              </li>
              <li className="flex gap-3">
                <Mail size={20} className="shrink-0 text-school-gold" />
                <div>
                  <p className="text-white/80">st.maria45@yahoo.com</p>
                  {/* <p className="text-white/80">admissions@stmaria.edu</p> */}
                </div>
              </li>
            </ul>
          </div>
          
          {/* School Hours */}
          <div>
            <h3 className="text-lg font-serif font-semibold mb-6 text-white">School Hours</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium mb-1 text-school-gold">Office Hours</h4>
                <p className="text-white/80">Monday to Friday: 9:00 AM - 3:3 PM</p>
                {/* <p className="text-white/80">Saturday: 8:00 AM - 12:30 PM</p> */}
              </div>
              
              <div>
                <h4 className="font-medium mb-1 text-school-gold">Class Hours</h4>
                <p className="text-white/80">Primary: 8:00 AM - 11:00 PM</p>
                <p className="text-white/80">Secondary: 11:30 AM - 4:00 PM</p>
              </div>
              
              <a href="#contact" className="inline-block mt-2 text-school-gold hover:underline">
                Contact for more information
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Copyright */}
      <div className="bg-black/20 py-4">
        <div className="container-custom text-center text-white/70 text-sm">
          <p>© {new Date().getFullYear()} ST. Maria School, Agarpara. All Rights Reserved.</p>
          <p className="mt-1">
            <a href="/privacy-policy" className="hover:text-white">Privacy Policy</a> | 
            <a href="/terms" className="hover:text-white"> Terms of Use</a>
          </p>
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
      className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-school-gold hover:text-school-navy transition-colors duration-300"
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
        className="text-white/80 hover:text-school-gold transition-colors duration-300"
      >
        {label}
      </a>
    </li>
  );
};

export default Footer;
