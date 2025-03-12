
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { 
  BookOpen, 
  Dumbbell, 
  Beaker, 
  Bus, 
  Presentation, 
  Laptop, 
  Music, 
  Heart 
} from 'lucide-react';

const Facilities = () => {
  const headingRef = useScrollAnimation();
  const textRef = useScrollAnimation({ threshold: 0.2 });
  
  return (
    <section id="facilities" className="py-20 bg-school-navy text-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 
            ref={headingRef as React.RefObject<HTMLHeadingElement>} 
            className="section-title mx-auto flex flex-col items-center justify-center"
          >
            State-of-the-Art Facilities
            <span className="after:bg-school-gold after:mx-auto"></span>
          </h2>
          
          <p 
            ref={textRef as React.RefObject<HTMLParagraphElement>} 
            className="text-white/80"
          >
            We provide modern facilities designed to enhance the learning experience and 
            support the holistic development of our students.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <FacilityCard 
            icon={<BookOpen size={24} />}
            title="Modern Library"
            description="Extensive collection of books, journals, and digital resources"
            delay={0}
          />
          
          <FacilityCard 
            icon={<Beaker size={24} />}
            title="Science Labs"
            description="Well-equipped physics, chemistry and biology laboratories"
            delay={100}
          />
          
          <FacilityCard 
            icon={<Laptop size={24} />}
            title="Computer Lab"
            description="Advanced IT infrastructure with latest software and hardware"
            delay={200}
          />
          
          <FacilityCard 
            icon={<Dumbbell size={24} />}
            title="Sports Complex"
            description="Indoor and outdoor facilities for various sports activities"
            delay={300}
          />
          
          <FacilityCard 
            icon={<Music size={24} />}
            title="Art & Music"
            description="Dedicated spaces for creative and performing arts"
            delay={400}
          />
          
          <FacilityCard 
            icon={<Bus size={24} />}
            title="Transportation"
            description="Safe and convenient bus service covering major routes"
            delay={500}
          />
          
          <FacilityCard 
  icon={<Presentation size={24} />} 
  title="Conference Room"
  description="Well-equipped space for meetings and events"
  delay={600}
/>

          
          <FacilityCard 
            icon={<Heart size={24} />}
            title="Medical Room"
            description="On-campus medical facility with qualified staff"
            delay={700}
          />
        </div>
        
        {/* Virtual Tour CTA */}

      </div>
    </section>
  );
};

const FacilityCard = ({ 
  icon, 
  title, 
  description, 
  delay 
}: { 
  icon: React.ReactNode, 
  title: string, 
  description: string, 
  delay: number 
}) => {
  const cardRef = useScrollAnimation({ 
    animationType: 'fade-in-up',
    threshold: 0.2
  });
  
  return (
    <div 
      ref={cardRef as React.RefObject<HTMLDivElement>}
      className="p-6 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 transition-all duration-300 hover:bg-white/10"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="mb-4 text-school-gold">
        {icon}
      </div>
      <h3 className="text-xl font-serif font-medium mb-2 text-white">{title}</h3>
      <p className="text-white/70 text-sm">{description}</p>
    </div>
  );
};

export default Facilities;
