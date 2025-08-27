import { Helmet } from 'react-helmet-async';
import Header from '../components/Header';
import Academics from '../components/Academics';
import Footer from '../components/Footer';

const AcademicsPage = () => {
  return (
    <>
      <Helmet>
        <title>Academics - St. Maria School | ICSE (CISCE) Affiliated School</title>
        <meta name="description" content="Explore St. Maria School's academic programs, curriculum, and educational approach. ICSE (CISCE) affiliated school offering quality education." />
      </Helmet>
      
      <Header />
      <main className="pt-8">
        <Academics />
      </main>
      <Footer />
    </>
  );
};

export default AcademicsPage;