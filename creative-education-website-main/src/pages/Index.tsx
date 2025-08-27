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
              "@type": "Tarapukur Main Road, Agarpara, Kolkata-700109",
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
    </>
  );
};

export default Index;