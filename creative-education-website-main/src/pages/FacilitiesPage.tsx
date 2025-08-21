import { Helmet } from 'react-helmet-async';
import Header from '../components/Header';
import Facilities from '../components/Facilities';
import Footer from '../components/Footer';

const FacilitiesPage = () => {
  return (
    <>
      <Helmet>
        <title>Facilities - St. Maria School | Modern Infrastructure</title>
        <meta name="description" content="Discover St. Maria School's world-class facilities including science labs, library, computer lab, sports facilities, and more." />
      </Helmet>
      
      <Header />
      <main className="pt-8">
        <Facilities />
      </main>
      <Footer />
    </>
  );
};

export default FacilitiesPage;