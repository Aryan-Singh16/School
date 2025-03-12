
import { useEffect, useState } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Academics from '../components/Academics';
import Facilities from '../components/Facilities';
import Gallery from '../components/Gallery';
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
        <title>St. Maria School - Excellence in Education | Agarpara</title>
        <meta name="description" content="St. Maria School in Agarpara provides quality education with a focus on academic excellence, character development, and holistic growth. Join our prestigious institution with world-class facilities." />
        <meta name="keywords" content="St. Maria School, Agarpara, best school in Agarpara, CBSE school, school admission, quality education" />
        <meta name="author" content="St. Maria School" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.stmariaschool.edu/" />
        <meta property="og:title" content="St. Maria School - Excellence in Education | Agarpara" />
        <meta property="og:description" content="Join St. Maria School in Agarpara for quality education with a focus on academic excellence and holistic development." />
        <meta property="og:image" content="/og-image.png" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.stmariaschool.edu/" />
        <meta property="twitter:title" content="St. Maria School - Excellence in Education | Agarpara" />
        <meta property="twitter:description" content="Join St. Maria School in Agarpara for quality education with a focus on academic excellence and holistic development." />
        <meta property="twitter:image" content="/og-image.png" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://www.stmariaschool.edu/" />
        <link rel="icon" href="/favicon.ico" />
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
          <Gallery />
          <Testimonials />
          <Admission />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
