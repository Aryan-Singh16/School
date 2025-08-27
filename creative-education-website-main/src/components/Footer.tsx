import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin, ChevronRight, Clock, Calendar } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-school-navy text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          
          {/* School Info - Enhanced */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-4 mb-6">
              <img 
                src="/logo.png" 
                alt="St. Maria School Logo" 
                className="h-16 sm:h-18 bg-white rounded-full p-2 shadow-lg flex-shrink-0" 
              />
              <div>
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-white">
                  ST. Maria School
                </h3>
                <p className="text-sm text-white/70">Agarpara, Kolkata</p>
                <div className="flex items-center gap-2 mt-2">
                  <div className="w-2 h-2 bg-school-gold rounded-full"></div>
                  <p className="text-xs sm:text-sm text-school-gold font-medium">
                    ICSE (CISCE) | Code: WB493
                  </p>
                </div>
              </div>
            </div>
            
            <p className="text-white/80 mb-6 text-sm sm:text-base leading-relaxed">
              Providing quality education and shaping the future of our children since 2001. 
              ST. Maria School is committed to academic excellence and holistic development.
            </p>

            {/* Social Media Links */}
            {/* <div className="mb-6">
              <h4 className="text-sm font-semibold mb-3 text-school-gold">Follow Us</h4>
              <div className="flex gap-3">
                <SocialIcon 
                  icon={<Facebook size={18} />} 
                  href="https://facebook.com/stmariaschool" 
                  label="Facebook" 
                />
                <SocialIcon 
                  icon={<Instagram size={18} />} 
                  href="https://instagram.com/stmariaschool" 
                  label="Instagram" 
                />
                <SocialIcon 
                  icon={<Youtube size={18} />} 
                  href="https://youtube.com/stmariaschool" 
                  label="YouTube" 
                />
                <SocialIcon 
                  icon={<Twitter size={18} />} 
                  href="https://twitter.com/stmariaschool" 
                  label="Twitter" 
                />
              </div>
            </div> */}

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/5 p-3 rounded-lg text-center">
                <div className="text-school-gold font-bold text-lg">24+</div>
                <div className="text-white/70 text-xs">Years of Excellence</div>
              </div>
              <div className="bg-white/5 p-3 rounded-lg text-center">
                <div className="text-school-gold font-bold text-lg">1000+</div>
                <div className="text-white/70 text-xs">Happy Students</div>
              </div>
            </div>
          </div>
          
          {/* Contact Information - Enhanced */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-serif font-semibold mb-6 text-white border-b border-school-gold/30 pb-2">
              Get In Touch
            </h3>
            
            <div className="space-y-5">
              {/* Address */}
              <div className="flex gap-3">
                <div className="shrink-0">
                  <div className="w-10 h-10 bg-school-gold/20 rounded-full flex items-center justify-center">
                    <MapPin size={20} className="text-school-gold" />
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">Visit Us</h4>
                  <p className="text-white/80 text-sm leading-relaxed">
                    Tarapukur Main Road<br />
                    Agarpara, Kolkata-700109<br />
                    West Bengal, India
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-3">
                <div className="shrink-0">
                  <div className="w-10 h-10 bg-school-gold/20 rounded-full flex items-center justify-center">
                    <Phone size={20} className="text-school-gold" />
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">Call Us</h4>
                  <div className="space-y-1">
                    <a href="tel:+919088193101" className="text-white/80 hover:text-school-gold transition-colors text-sm block">
                      +91 9088193101 (Mobile)
                    </a>
                    <a href="tel:03325950106" className="text-white/80 hover:text-school-gold transition-colors text-sm block">
                      033-25950106 (Landline)
                    </a>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-3">
                <div className="shrink-0">
                  <div className="w-10 h-10 bg-school-gold/20 rounded-full flex items-center justify-center">
                    <Mail size={20} className="text-school-gold" />
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">Email Us</h4>
                  <a href="mailto:st.maria45@yahoo.com" className="text-white/80 hover:text-school-gold transition-colors text-sm break-all">
                    st.maria45@yahoo.com
                  </a>
                </div>
              </div>
            </div>

            {/* School Hours - Compact */}
            <div className="mt-8 bg-gradient-to-r from-school-gold/10 to-transparent p-4 rounded-lg border-l-4 border-school-gold">
              <h4 className="font-semibold mb-3 text-school-gold flex items-center gap-2">
                <Clock size={16} />
                School Hours
              </h4>
              <div className="grid grid-cols-1 gap-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-white/70">Office:</span>
                  <span className="text-white">9:30 AM - 2:30 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/70">Primary:</span>
                  <span className="text-white">8:00 AM - 11:00 AM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/70">Secondary:</span>
                  <span className="text-white">11:30 AM - 4:00 PM</span>
                </div>
                <div className="text-white/60 text-xs mt-1 flex items-center gap-1">
                  <Calendar size={12} />
                  Monday to Friday
                </div>
              </div>
            </div>
          </div>
          
          {/* Map Section */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-serif font-semibold mb-6 text-white border-b border-school-gold/30 pb-2">
              Find Us Here
            </h3>
            
            {/* Interactive Map */}
            <div className="bg-white/10 rounded-lg overflow-hidden mb-6 shadow-lg">
              <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3681.19240469633!2d88.38904547499433!3d22.683880328883173!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f89c17fa245aa3%3A0x200a4488fa6c6879!2sSt.%20Maria%20School%20(Nursery%20to%20Class-XII)!5e0!3m2!1sen!2sin!4v1756294373611!5m2!1sen!2sin"
  width="100%"
  height="250"
  style={{ border: 0 }}
  allowFullScreen
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
  title="ST. Maria School Location"
  className="hover:opacity-90 transition-opacity rounded-lg shadow-md"
/>

            </div>

            {/* Location Info */}
            <div className="space-y-4">
              <div className="bg-white/5 p-4 rounded-lg">
                <h4 className="font-semibold text-school-gold mb-2 flex items-center gap-2">
                  <MapPin size={16} />
                  Location Details
                </h4>
                <ul className="text-sm text-white/80 space-y-1">
                  <li>• Near Agarpara Railway Station</li>
                  <li>• Well connected by bus & train</li>
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <a 
                  href="https://maps.google.com/?q=ST.+Maria+School+Agarpara" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-school-gold text-school-navy px-4 py-2 rounded-lg font-medium text-sm text-center hover:bg-white transition-colors flex items-center justify-center gap-2"
                >
                  <MapPin size={16} />
                  Get Directions
                </a>
                <a 
                  href="#contact" 
                  className="flex-1 border border-school-gold text-school-gold px-4 py-2 rounded-lg font-medium text-sm text-center hover:bg-school-gold hover:text-school-navy transition-colors flex items-center justify-center gap-2"
                >
                  <Phone size={16} />
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Enhanced Copyright Section */}
      <div className="bg-black/30 py-6 border-t border-white/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-white/70 text-sm">
              <p className="text-center sm:text-left">
                © {new Date().getFullYear()} ST. Maria School, Agarpara. All Rights Reserved.
              </p>
              <div className="hidden sm:block w-1 h-1 bg-white/30 rounded-full"></div>
              <p className="text-xs text-white/50">
                Affiliated to CISCE | ICSE Code: WB493
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <a href="/privacy-policy" className="text-white/70 hover:text-school-gold transition-colors">
                Privacy Policy
              </a>
              <span className="text-white/30">•</span>
              <a href="/terms" className="text-white/70 hover:text-school-gold transition-colors">
                Terms of Use
              </a>
              <span className="text-white/30">•</span>
              <a href="/sitemap" className="text-white/70 hover:text-school-gold transition-colors">
                Sitemap
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
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-school-gold hover:text-school-navy transition-all duration-300 hover:scale-110 hover:shadow-lg"
    >
      {icon}
    </a>
  );
};

export default Footer;