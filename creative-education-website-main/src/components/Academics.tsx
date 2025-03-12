
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Academics = () => {
  const headingRef = useScrollAnimation();
  const textRef = useScrollAnimation({ threshold: 0.2 });
  
  return (
    <section id="academics" className="py-20">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 ref={headingRef as React.RefObject<HTMLHeadingElement>} className="section-title mx-auto flex flex-col items-center justify-center">
            Academic Excellence
            <span className="after:mx-auto"></span>
          </h2>
          
          <p ref={textRef as React.RefObject<HTMLParagraphElement>} className="text-gray-700">
            Our comprehensive curriculum is designed to foster intellectual growth, critical thinking,
            and a lifelong love for learning in every student.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <AcademicLevelCard 
            level="Primary School"
            grades="Grades: KG - 5"
            description="Foundation years focused on developing fundamental skills, curiosity, and a joy for learning through activity-based approaches."
            image="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2022&auto=format&fit=crop"
            delay={0}
          />
          
          <AcademicLevelCard 
            level="Middle School"
            grades="Grades: 6 - 8"
            description="Transition phase emphasizing deeper subject understanding, critical thinking, and introduction to specialized areas of study."
            image="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=2070&auto=format&fit=crop"
            delay={100}
          />
          
          <AcademicLevelCard 
            level="High School"
            grades="Grades: 9 - 12"
            description="Rigorous preparation for board examinations with specialized teaching, career guidance, and personality development."
            image="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1932&auto=format&fit=crop"
            delay={200}
          />
        </div>
        
        {/* Curriculum Highlights */}
        <div className="mt-20">
          <h3 className="text-2xl font-serif font-semibold text-center mb-10 text-school-navy">Curriculum Highlights</h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <CurriculumFeature
              title="CBSE Curriculum"
              description="Following the Central Board of Secondary Education curriculum with enhanced learning modules."
              delay={0}
            />
            
            <CurriculumFeature
              title="Digital Learning"
              description="Smart classrooms with interactive learning tools and resources for enhanced understanding."
              delay={100}
            />
            
            <CurriculumFeature
              title="Languages"
              description="Strong focus on English, Hindi, and Bengali to develop multilingual proficiency."
              delay={200}
            />
            
            <CurriculumFeature
              title="STEM Education"
              description="Special emphasis on Science, Technology, Engineering, and Mathematics through practical applications."
              delay={300}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const AcademicLevelCard = ({ 
  level, 
  grades, 
  description, 
  image,
  delay 
}: { 
  level: string, 
  grades: string, 
  description: string, 
  image: string,
  delay: number 
}) => {
  const cardRef = useScrollAnimation({ 
    animationType: 'fade-in-up',
    threshold: 0.2
  });
  
  return (
    <div 
      ref={cardRef as React.RefObject<HTMLDivElement>}
      className="bg-white rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="h-48 overflow-hidden">
        <img 
          src={image} 
          alt={level} 
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" 
        />
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-serif font-semibold mb-1 text-school-navy">{level}</h3>
        <p className="text-sm text-school-maroon font-medium mb-3">{grades}</p>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </div>
  );
};

const CurriculumFeature = ({ 
  title, 
  description, 
  delay 
}: { 
  title: string, 
  description: string, 
  delay: number 
}) => {
  const featureRef = useScrollAnimation({ 
    animationType: 'fade-in-up',
    threshold: 0.2
  });
  
  return (
    <div 
      ref={featureRef as React.RefObject<HTMLDivElement>}
      className="bg-school-cream p-6 rounded-lg text-center transition-all duration-300 hover:shadow-md"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <h4 className="text-lg font-serif font-medium mb-3 text-school-maroon">{title}</h4>
      <p className="text-gray-700 text-sm">{description}</p>
    </div>
  );
};

export default Academics;
