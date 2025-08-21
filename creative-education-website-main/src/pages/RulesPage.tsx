import { Helmet } from 'react-helmet-async';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const RulesPage = () => {
  const headingRef = useScrollAnimation();
  const contentRef = useScrollAnimation({ threshold: 0.1 });

  const rules = [
    {
      title: "Attendance & Punctuality",
      items: [
        "Students must maintain a minimum of 85% attendance",
        "Late arrival should be avoided; gates close at 8:15 AM",
        "Early dismissal requires prior approval from the office",
        "Medical certificates required for absences exceeding 3 days"
      ]
    },
    {
      title: "Dress Code & Uniform",
      items: [
        "Complete school uniform is mandatory on all working days",
        "Sports uniform on designated PE days",
        "Proper grooming and personal hygiene expected",
        "No jewelry except for girls - small ear studs allowed"
      ]
    },
    {
      title: "Academic Conduct",
      items: [
        "Complete all assignments and submit on time",
        "Maintain discipline during classes and examinations",
        "No use of mobile phones during school hours",
        "Respect for teachers and school property"
      ]
    },
    {
      title: "Behavioral Guidelines",
      items: [
        "Respectful behavior towards peers and staff",
        "No bullying or harassment will be tolerated",
        "Use of polite language at all times",
        "Report any issues to class teacher or counselor"
      ]
    },
    {
      title: "Safety & Security",
      items: [
        "Follow all safety protocols during emergencies",
        "Do not bring prohibited items to school",
        "Inform office of any medical conditions or allergies",
        "Use designated entry and exit points only"
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>School Rules & Regulations - St. Maria School</title>
        <meta name="description" content="View the comprehensive rules and regulations for St. Maria School students covering attendance, dress code, academic conduct, and behavioral guidelines." />
      </Helmet>
      
      <Header />
      <main className="pt-8">
        <section className="py-20 bg-gradient-to-br from-white to-school-cream">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h1 
                ref={headingRef as React.RefObject<HTMLHeadingElement>}
                className="section-title text-center mx-auto flex flex-col items-center justify-center mb-8"
              >
                School Rules & Regulations
                <span className="after:mx-auto"></span>
              </h1>
              
              <div 
                ref={contentRef as React.RefObject<HTMLDivElement>}
                className="bg-white rounded-lg shadow-lg p-8 mb-8"
              >
                <div className="text-center mb-8">
                  <p className="text-lg text-gray-700 mb-4">
                    At St. Maria School, we believe that a structured environment promotes learning and character development. 
                    These guidelines help maintain a positive atmosphere for all members of our school community.
                  </p>
                  <div className="bg-school-maroon text-white p-4 rounded-md">
                    <p className="font-medium">Affiliated with CISCE (Council for the Indian School Certificate Examinations)</p>
                  </div>
                </div>
                
                <div className="space-y-8">
                  {rules.map((section, index) => (
                    <div key={index} className="border-l-4 border-school-maroon pl-6">
                      <h2 className="text-2xl font-serif font-semibold text-school-maroon mb-4">
                        {section.title}
                      </h2>
                      <ul className="space-y-2">
                        {section.items.map((rule, ruleIndex) => (
                          <li key={ruleIndex} className="flex items-start gap-3">
                            <span className="w-2 h-2 bg-school-gold rounded-full mt-2 flex-shrink-0"></span>
                            <span className="text-gray-700">{rule}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-school-maroon mb-3">Important Notes:</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Violation of any rules may result in disciplinary action</li>
                    <li>• Parents will be notified of any serious misconduct</li>
                    <li>• School reserves the right to modify rules as necessary</li>
                    <li>• For clarifications, contact the school office</li>
                  </ul>
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

export default RulesPage;