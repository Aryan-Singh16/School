import { useEffect, useState } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Academics from '../components/Academics';
import Facilities from '../components/Facilities';
import Testimonials from '../components/Testimonials';
import NoticeBoard from '../components/NoticeBoard';
import Admission from '../components/Admission';
import Footer from '../components/Footer';
import Loader from '../components/Loader';
import { Helmet } from 'react-helmet-async';
import { X, Star, Sparkles, Calendar, Clock } from 'lucide-react';

// Enhanced Announcement Popup Component with Visible Timer
const AnnouncementPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [timeLeft, setTimeLeft] = useState(7); // 7 seconds countdown
  const [progress, setProgress] = useState(100); // Progress percentage

  useEffect(() => {
    // Show popup after loader completes + small delay
    const showTimer = setTimeout(() => {
      setIsVisible(true);
      setIsAnimating(true);
    }, 2500); // Shows after loader (2000ms) + 500ms delay

    return () => clearTimeout(showTimer);
  }, []);

  useEffect(() => {
    if (!isAnimating) return;

    // Countdown and progress tracking
    const interval = setInterval(() => {
      setTimeLeft(prev => {
        const newTime = prev - 0.1;
        setProgress((newTime / 7) * 100);
        
        if (newTime <= 0) {
          setIsAnimating(false);
          setTimeout(() => setIsVisible(false), 300);
          return 0;
        }
        return newTime;
      });
    }, 100); // Update every 100ms for smooth animation

    return () => clearInterval(interval);
  }, [isAnimating]);

  const handleClose = () => {
    setIsAnimating(false);
    setTimeout(() => setIsVisible(false), 300);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className={`absolute inset-0 bg-black transition-opacity duration-300 ${
          isAnimating ? 'opacity-50' : 'opacity-0'
        }`}
        onClick={handleClose}
      />
      
      {/* Enhanced Popup with visible timer */}
      <div 
        className={`relative bg-white rounded-3xl shadow-2xl max-w-sm sm:max-w-md lg:max-w-lg w-full mx-4 transform transition-all duration-300 ${
          isAnimating 
            ? 'scale-100 opacity-100 translate-y-0' 
            : 'scale-95 opacity-0 translate-y-4'
        }`}
      >
        {/* Enhanced Close button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 p-3 rounded-full bg-white bg-opacity-90 hover:bg-opacity-100 transition-all duration-200 z-20 shadow-lg hover:shadow-xl group"
        >
          <X className="h-5 w-5 text-gray-600 group-hover:text-gray-800 transition-colors" />
        </button>

        {/* Circular Timer in top-left corner */}
        {/* <div className="absolute top-4 left-4 z-20">
          <div className="relative w-12 h-12 sm:w-14 sm:h-14"> */}
            {/* Background circle */}
            {/* <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
              <path
                className="text-white opacity-30"
                stroke="currentColor"
                strokeWidth="3"
                fill="none"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              /> */}
              {/* Progress circle */}
              {/* <path
                className="text-white transition-all duration-100 ease-linear"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                fill="none"
                strokeDasharray={`${progress}, 100`}
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              />
            </svg> */}
            {/* Timer number */}
            {/* <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-white font-bold text-xs sm:text-sm">
                {Math.ceil(timeLeft)}
              </span>
            </div>
          </div>
        </div>  */}

        {/* Header with enhanced beauty */}
        <div className="relative bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 text-white p-6 sm:p-8 rounded-t-3xl overflow-hidden">
          {/* Animated background elements */}
          <div className="absolute top-0 right-0 opacity-30 animate-pulse">
            <Sparkles className="h-16 sm:h-20 w-16 sm:w-20" />
          </div>
          <div className="absolute bottom-0 left-0 opacity-20 animate-bounce">
            <Star className="h-12 sm:h-16 w-12 sm:w-16" />
          </div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-10">
            <div className="w-24 sm:w-32 h-24 sm:h-32 rounded-full border-4 border-white animate-spin" style={{animationDuration: '20s'}}></div>
          </div>
          
          <div className="relative z-10 text-center pt-4">
            <div className="flex items-center justify-center gap-2 mb-3">
              <Star className="h-5 sm:h-6 w-5 sm:w-6 text-yellow-300 animate-pulse" />
              <span className="text-xs sm:text-sm font-bold uppercase tracking-wider bg-white bg-opacity-20 px-3 py-1 rounded-full">
                🎉 Special Announcement
              </span>
              <Star className="h-5 sm:h-6 w-5 sm:w-6 text-yellow-300 animate-pulse" />
            </div>
            <h2 className="text-xl sm:text-2xl font-bold mb-2 animate-pulse">
              Admission Open for 2026-27
            </h2>
            <div className="w-20 sm:w-24 h-1 bg-yellow-300 mx-auto rounded-full"></div>
          </div>
        </div>

        {/* Enhanced Content with better responsiveness */}
        <div className="p-6 sm:p-8">
          {/* Timer indicator banner */}
          {/* <div className="mb-4 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-3 sm:p-4">
            <div className="flex items-center justify-center gap-2 text-blue-700">
              <Clock className="h-4 w-4 animate-pulse" />
              <span className="text-sm font-medium">
                Auto-closing in {Math.ceil(timeLeft)} seconds
              </span>
            </div>
            {/* Horizontal progress bar */}
            {/* <div className="mt-2 w-full bg-blue-100 rounded-full h-2 overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-blue-400 to-indigo-500 transition-all duration-100 ease-linear rounded-full"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div> */}

          <div className="text-center mb-6">
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
              🌟 Admissions for the next academic year are now open! 
            </p>
            <p className="text-gray-600 mt-2 text-sm sm:text-base">
              Secure your child's future with quality ICSE education at ST. Maria School.
            </p>
          </div>
          
          {/* Beautiful highlighted discount section */}
          <div className="relative overflow-hidden bg-gradient-to-br from-orange-100 via-red-50 to-pink-100 border-2 border-orange-300 rounded-2xl p-4 sm:p-6 mb-6 shadow-lg">
            {/* Decorative background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-full h-full" 
                   style={{backgroundImage: 'radial-gradient(circle at 20% 80%, rgba(255,165,0,0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255,69,0,0.3) 0%, transparent 50%)'}}>
              </div>
            </div>
            
            <div className="relative z-10">
              <div className="flex items-center justify-center gap-2 sm:gap-3 mb-3">
                <span className="inline-block w-2 sm:w-3 h-2 sm:h-3 bg-orange-500 rounded-full animate-ping"></span>
                <span className="text-orange-800 font-bold text-xs sm:text-sm uppercase tracking-wider bg-orange-200 px-3 sm:px-4 py-1 rounded-full shadow-sm">
                  🎁 Limited Time Offer
                </span>
                <span className="inline-block w-2 sm:w-3 h-2 sm:h-3 bg-orange-500 rounded-full animate-ping"></span>
              </div>
              
              <div className="text-center">
                <p className="text-orange-900 font-bold text-lg sm:text-xl mb-2 leading-tight">
                  Special Discount for admission
                </p>
                <p className="text-orange-800 font-bold text-base sm:text-lg">
                  before 30th November 2025
                </p>
              </div>
              
              <div className="mt-4 flex items-center justify-center">
                <div className="bg-orange-200 px-3 sm:px-4 py-2 rounded-full">
                  <span className="text-orange-800 font-semibold text-xs sm:text-sm flex items-center gap-1">
                    <Calendar className="h-3 sm:h-4 w-3 sm:w-4" />
                    Hurry! Offer ends Nov 30 , 2025
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* School highlight */}
          <div className="text-center">
            <p className="text-gray-600 text-xs sm:text-sm font-medium">
              🏫 ICSE (CISCE) Affiliated Institution • Quality Education Since Years
            </p>
          </div>
        </div>

        {/* Enhanced bottom progress bar with gradient and glow */}
        <div className="h-3 bg-gradient-to-r from-gray-100 to-gray-200 rounded-b-3xl overflow-hidden relative">
          <div 
            className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 transition-all ease-linear shadow-lg relative overflow-hidden"
            style={{ 
              width: `${progress}%`,
              transitionDuration: '100ms',
              boxShadow: '0 0 15px rgba(168, 85, 247, 0.6)'
            }}
          >
            {/* Animated shimmer effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 animate-pulse"></div>
          </div>
          
          {/* Floating timer badge */}
          <div className="absolute right-2 top-1/2 transform -translate-y-1/2">
            <div className="bg-white rounded-full px-2 py-1 shadow-md border border-gray-200">
              <span className="text-xs font-bold text-gray-700">
                {Math.ceil(timeLeft)}s
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Index = () => {
  console.log("Index component rendering");
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    console.log("Index component mounted");
    // Hide loader after animation completes
    const timer = setTimeout(() => {
      console.log("Setting showLoader to false");
      setShowLoader(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Helmet>
        <title>ST. Maria School - ICSE (CISCE) Affiated | Excellence in Education | Agarpara</title>
        <meta name="description" content="ST. Maria School in Agarpara is a premier ICSE (CISCE) affiliated institution providing quality education with focus on academic excellence, character development, and holistic growth. Join our prestigious ICSE school with world-class facilities." />
        <meta name="keywords" content="ST. Maria School, Agarpara, best school in Agarpara, ICSE (CISCE) school, ICSE school, ICSE (CISCE) affiliated school, school admission, quality education, ICSE board, ISC board, Agarpara ICSE (CISCE) school" />
        <meta name="author" content="ST. Maria School" />
        
        {/* Structured Data for School */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "EducationalOrganization",
            "name": "ST. Maria School",
            "description": "Premier ICSE (CISCE) affiliated school in Agarpara providing quality ICSE and ICSE (CISCE) education",
            "url": "https://www.stmariaschool.in/",
            // "logo": "https://www.stmariaschool.in/logo.png",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Tarapukur Main Road, Agarpara, Kolkata-700109",
              "addressLocality": "Agarpara",
              "addressRegion": "West Bengal",
              "addressCountry": "IN"
            },
            "educationalCredentialAwarded": ["ICSE", "ICSE (CISCE)"],
            "hasCredential": "ICSE (CISCE) Affiliated"
          })}
        </script>

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.stmariaschool.in/" />
        <meta property="og:title" content="St. Maria School - Premier ICSE (CISCE) Affiliated School | Agarpara" />
        <meta property="og:description" content="Join St. Maria School in Agarpara - a prestigious ICSE (CISCE) affiliated institution offering ICSE and ISC education with focus on academic excellence and holistic development." />
        <meta property="og:image" content="/og-image.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="St. Maria School - ICSE (CISCE) Affiliated School in Agarpara" />
        <meta property="og:site_name" content="St. Maria School" />
        <meta property="og:locale" content="en_IN" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.stmariaschool.in/" />
        <meta property="twitter:title" content="ST. Maria School - Premier ICSE (CISCE) Affiliated School | Agarpara" />
        <meta property="twitter:description" content="Join ST. Maria School in Agarpara - a prestigious ICSE (CISCE) affiliated institution offering ICSE and ICSE (CISCE) education with focus on academic excellence and holistic development." />
        <meta property="twitter:image" content="/og-image.png" />
        <meta property="twitter:image:alt" content="ST. Maria School - ICSE (CISCE) Affiliated School in Agarpara" />

        {/* Additional SEO Meta Tags */}
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow" />
        <meta name="bingbot" content="index, follow" />
        <meta name="geo.region" content="IN-WB" />
        <meta name="geo.placename" content="Agarpara" />
        <meta name="geo.position" content="22.6536;88.3706" />
        <meta name="ICBM" content="22.6536, 88.3706" />
        
        {/* Educational specific meta tags */}
        <meta name="education.curriculum" content="ICSE (CISCE), ICSE, ISC" />
        <meta name="education.level" content="Primary, Secondary, Higher Secondary" />
        <meta name="education.type" content="Private School" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://www.stmariaschool.in/" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </Helmet>

      {showLoader && <Loader />}

      <div className={`transition-opacity duration-500 ${showLoader ? 'opacity-0' : 'opacity-100'}`}>
        <Header />
        <main>
          <Hero />
          <About />
          <Academics />
          <Facilities />
          <NoticeBoard />
          <Testimonials />
          <Admission />
        </main>
        <Footer />
      </div>

      {/* Announcement Popup - Only shows after loader completes */}
      {!showLoader && <AnnouncementPopup />}
    </>
  );
};

export default Index;