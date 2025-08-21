import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Academics = () => {
  const headingRef = useScrollAnimation();
  const textRef = useScrollAnimation({ threshold: 0.2 });
  
  // Get current day to highlight Friday
  const currentDay = new Date().toLocaleDateString('en-US', { weekday: 'long' });
  
  return (
    <section id="academics" className="py-12 md:py-20">
      <div className="container-custom">
        <div className="text-center max-w-4xl mx-auto mb-8 md:mb-12 px-4">
          <h2 ref={headingRef as React.RefObject<HTMLHeadingElement>} className="section-title mx-auto flex flex-col items-center justify-center">
            Academic Excellence
            <span className="after:mx-auto"></span>
          </h2>
          
          <p ref={textRef as React.RefObject<HTMLParagraphElement>} className="text-gray-700 text-sm md:text-base">
            Our comprehensive curriculum is designed to foster intellectual growth, critical thinking,
            and a lifelong love for learning in every student.
          </p>
        </div>
        
        {/* Academic Level Cards */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto px-4 mb-12 md:mb-16">
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
            level="Secondary School"
            grades="Grades: 9 - 10"
            description="ICSE curriculum with focus on comprehensive learning, practical applications, and preparation for higher secondary education."
            image="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2032&auto=format&fit=crop"
            delay={200}
          />
        </div>
        
        {/* Curriculum Highlights */}
        <div className="mt-12 md:mt-20 px-4">
          <h3 className="text-xl md:text-2xl font-serif font-semibold text-center mb-8 md:mb-10 text-school-navy">Curriculum Highlights</h3>
          
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-6xl mx-auto mb-12 md:mb-16">
            <CurriculumFeature
              title="Digital Learning"
              description="Smart classrooms with interactive learning tools and resources for enhanced understanding."
              delay={0}
            />
            
            <CurriculumFeature
              title="CISCE Affiliation"
              description="Affiliated with Council for the Indian School Certificate Examinations for quality education standards."
              delay={100}
            />
            
            <CurriculumFeature
              title="STEM Education"
              description="Special emphasis on Science, Technology, Engineering, and Mathematics through practical applications."
              delay={200}
            />
          </div>
        </div>

        {/* Information Sections */}
        <div className="grid lg:grid-cols-3 gap-6 md:gap-8 mt-12 md:mt-16 px-4">
          <SyllabusSection />
          <SchoolTimingSection />
          <RoutineSection currentDay={currentDay} />
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
      className="bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 mx-auto max-w-sm lg:max-w-none"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="h-40 md:h-48 overflow-hidden">
        <img 
          src={image} 
          alt={level} 
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" 
        />
      </div>
      
      <div className="p-4 md:p-6">
        <h3 className="text-lg md:text-xl font-serif font-semibold mb-1 text-school-navy">{level}</h3>
        <p className="text-xs md:text-sm text-school-maroon font-medium mb-2 md:mb-3">{grades}</p>
        <p className="text-gray-600 text-xs md:text-sm leading-relaxed">{description}</p>
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
      className="floating-card bg-school-cream p-4 md:p-6 rounded-xl text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <h4 className="text-base md:text-lg font-serif font-medium mb-2 md:mb-3 text-school-maroon">{title}</h4>
      <p className="text-gray-700 text-xs md:text-sm leading-relaxed">{description}</p>
    </div>
  );
};

const SyllabusSection = () => {
  const sectionRef = useScrollAnimation({ animationType: 'slide-in-left' });
  
  return (
    <div ref={sectionRef as React.RefObject<HTMLDivElement>} className="floating-card glass-panel p-4 md:p-6 rounded-xl">
      <h3 className="text-lg md:text-xl font-serif font-semibold mb-3 md:mb-4 text-school-maroon">📚 Syllabus</h3>
      <div className="space-y-3 md:space-y-4">
        <div className="border-l-4 border-school-gold pl-3 md:pl-4">
          <h4 className="font-medium text-school-navy text-sm md:text-base">CISCE Curriculum</h4>
          <p className="text-xs md:text-sm text-gray-600">Following ICSE and ISC Board standards</p>
        </div>
        <div className="border-l-4 border-school-teal pl-3 md:pl-4">
          <h4 className="font-medium text-school-navy text-sm md:text-base">Core Subjects</h4>
          <p className="text-xs md:text-sm text-gray-600">English, Mathematics, Science, Social Studies</p>
        </div>
        <div className="border-l-4 border-school-maroon pl-3 md:pl-4">
          <h4 className="font-medium text-school-navy text-sm md:text-base">Languages</h4>
          <p className="text-xs md:text-sm text-gray-600">Hindi, Bengali</p>
        </div>
      </div>
    </div>
  );
};

const SchoolTimingSection = () => {
  const sectionRef = useScrollAnimation({ animationType: 'fade-in-up' });
  
  return (
    <div ref={sectionRef as React.RefObject<HTMLDivElement>} className="floating-card glass-panel p-4 md:p-6 rounded-xl">
      <h3 className="text-lg md:text-xl font-serif font-semibold mb-3 md:mb-4 text-school-maroon">🕒 School Timing</h3>
      <div className="space-y-2 md:space-y-3">
        <div className="p-2 md:p-3 bg-school-cream rounded-lg">
          <div className="text-center font-semibold text-school-navy text-sm md:text-base mb-2">Morning Session</div>
          <div className="flex justify-between items-center">
            <span className="font-medium text-school-navy text-xs md:text-sm">Classes</span>
            <span className="text-school-maroon text-xs md:text-sm font-medium">8:00 AM - 11:00 AM</span>
          </div>
        </div>
        
        <div className="p-2 md:p-3 bg-white rounded-lg border-l-4 border-school-teal">
          <div className="text-center font-semibold text-school-navy text-sm md:text-base mb-2">Day Section</div>
          <div className="flex justify-between items-center">
            <span className="font-medium text-school-navy text-xs md:text-sm">Classes</span>
            <span className="text-school-maroon text-xs md:text-sm font-medium">11:30 AM - 4:00 PM</span>
          </div>
        </div>
        
        <div className="p-2 md:p-3 bg-school-gold/20 rounded-lg mt-3 md:mt-4">
          <p className="text-xs md:text-sm text-school-navy text-center">
            <strong>Office Hours:</strong> 9:00 AM - 3:00 PM
          </p>
        </div>
      </div>
    </div>
  );
};

const RoutineSection = ({ currentDay }: { currentDay: string }) => {
  const sectionRef = useScrollAnimation({ animationType: 'slide-in-right' });
  const weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
  
  return (
    <div ref={sectionRef as React.RefObject<HTMLDivElement>} className="floating-card glass-panel p-4 md:p-6 rounded-xl">
      <h3 className="text-lg md:text-xl font-serif font-semibold mb-3 md:mb-4 text-school-maroon">📅 Weekly Routine</h3>
      <div className="space-y-2">
        {weekDays.map((day, index) => {
          const isToday = day === currentDay;
          return (
            <div 
              key={day} 
              className={`flex justify-between items-center p-2 md:p-3 rounded-lg transition-all duration-300 ${
                isToday 
                  ? 'bg-school-gold text-white shadow-md ring-2 ring-school-gold/50 transform scale-105' 
                  : 'hover:bg-school-cream'
              }`}
            >
              <span className={`font-medium text-xs md:text-sm ${
                isToday ? 'text-white font-bold' : 'text-school-navy'
              }`}>
                {day} {isToday && '(Today)'}
              </span>
              <span className={`text-xs md:text-sm ${
                isToday ? 'text-white/90 font-medium' : 'text-gray-600'
              }`}>
                Office: 9:00 AM - 3:00 PM
              </span>
            </div>
          );
        })}
        
        <div className="mt-3 md:mt-4 p-2 md:p-3 bg-school-teal/20 rounded-lg border border-school-teal/30">
          <p className="text-xs md:text-sm text-school-navy text-center">
            <strong>Weekend:</strong> Saturday & Sunday - Closed
          </p>
        </div>
      </div>
    </div>
  );
};

export default Academics;