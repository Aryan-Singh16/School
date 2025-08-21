import { Helmet } from 'react-helmet-async';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const PrincipalDesk = () => {
  const headingRef = useScrollAnimation();
  const textRef = useScrollAnimation({ threshold: 0.2 });

  return (
    <>
      <Helmet>
        <title>From Principal's Desk - ST. Maria School</title>
        <meta name="description" content="A message from our Principal about St. Maria School's commitment to excellence in education and student development." />
      </Helmet>
      
      <Header />
      <main className="pt-8">
        <section className="py-20 bg-gradient-to-br from-school-cream to-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h1 
                ref={headingRef as React.RefObject<HTMLHeadingElement>}
                className="section-title text-center mx-auto flex flex-col items-center justify-center"
              >
                From Principal's Desk
                <span className="after:mx-auto"></span>
              </h1>
              
              <div className="grid md:grid-cols-3 gap-8 items-start">
                <div className="md:col-span-1">
                  <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                    <div className="w-48 h-48 mx-auto mb-4 bg-gray-200 rounded-lg flex items-center justify-center">
                      <span className="text-gray-500">Principal Photo</span>
                    </div>
                    <h3 className="text-xl font-semibold text-school-maroon mb-2">Rakesh Kumar Singh</h3>
                    <p className="text-gray-600 font-medium">Principal</p>
                    <p className="text-sm text-gray-500 mt-2"><br/>25+ Years Experience</p>
                  </div>
                </div>
                
                <div className="md:col-span-2">
                  <div 
                    ref={textRef as React.RefObject<HTMLDivElement>}
                    className="bg-white rounded-lg shadow-lg p-8"
                  >
                    <h2 className="text-2xl font-serif font-semibold text-school-maroon mb-6">
                      Welcome to ST. Maria School Family
                    </h2>
                    
                    <div className="space-y-4 text-gray-700 leading-relaxed">
                      <p>
                        Dear Parents and Students,
                      </p>
                      
                      <p>
                        It gives me immense pleasure to welcome you to St. Maria School, where we believe in nurturing young minds to become responsible global citizens. Our school, affiliated with the Council for the Indian School Certificate Examinations (CISCE), is committed to providing quality education that goes beyond textbooks.
                      </p>
                      
                      <p>
                        At ST. Maria School, we foster an environment where every child is encouraged to explore, learn, and grow. Our dedicated faculty works tirelessly to ensure that each student receives personalized attention and guidance to reach their full potential.
                      </p>
                      
                      <p>
                        We believe in holistic development that encompasses academic excellence, character building, sports, arts, and community service. Our modern facilities and innovative teaching methodologies prepare our students for the challenges of tomorrow.
                      </p>
                      
                      <p>
                        I invite you to be part of our journey in shaping the leaders of tomorrow. Together, we can make a difference in your child's educational journey.
                      </p>
                      
                      <p className="mt-6 font-medium">
                        Warm regards,<br/>
                        Rakesh Kumar Singh<br/>
                        Principal, ST. Maria School
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default PrincipalDesk;