import { Helmet } from 'react-helmet-async';
import Header from '../components/Header';
import About from '../components/About';
import Footer from '../components/Footer';

const AboutPage = () => {
  return (
    <>
      <Helmet>
        <title>About Us - St. Maria School | Excellence in Education</title>
        <meta name="description" content="Learn about St. Maria School's mission, vision, and commitment to providing quality education in Agarpara. Affiliated with ICSE (CISCE)." />
      </Helmet>
      
      <Header />
      <main className="pt-8">
        <About />
      </main>
      <Footer />
    </>
  );
};

export default AboutPage;