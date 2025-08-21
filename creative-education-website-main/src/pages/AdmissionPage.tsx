import { Helmet } from 'react-helmet-async';
import Header from '../components/Header';
import Admission from '../components/Admission';
import Footer from '../components/Footer';

const AdmissionPage = () => {
  return (
    <>
      <Helmet>
        <title>Admissions - St. Maria School | Apply Now</title>
        <meta name="description" content="Apply for admission to St. Maria School, Agarpara. Learn about our admission process, requirements, and how to join our school community." />
      </Helmet>
      
      <Header />
      <main className="pt-8">
        <Admission />
      </main>
      <Footer />
    </>
  );
};

export default AdmissionPage;