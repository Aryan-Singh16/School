
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const titleRef = useScrollAnimation({ animationType: 'fade-in' });
  const subtitleRef = useScrollAnimation({ 
    animationType: 'fade-in-up',
    threshold: 0.2
  });
  const ctaRef = useScrollAnimation({ 
    animationType: 'fade-in-up',
    threshold: 0.3,
  });

  return (
    <section id="home" className="relative h-[90vh] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 bg-black/30 z-10"></div>
      <div 
  className="absolute inset-0 bg-cover bg-center bg-no-repeat"
  style={{ 
    backgroundImage: "url('/images/front1.jpeg')",
    width: "100%",
    backgroundSize: "contain",  // ✅ Ensures full image fits inside
    backgroundPosition: "center", 
    backgroundRepeat: "no-repeat"
  }}
></div>
      
      {/* Content */}
      <div className="container-custom relative z-20 text-white flex items-center h-full">
  <div className="w-full md:w-1/2 pl-8">
    <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-4 leading-tight">
      Nurturing Excellence, Shaping Future Leaders
    </h1>
    
    <p className="text-lg md:text-xl mb-8 text-white/90 max-w-2xl">
      ST. Maria School in Agarpara provides world-class education with Indian values, 
      preparing students for global challenges through holistic development.
    </p>
    
    <div className="flex flex-wrap gap-4">
      <a href="#admission" className="btn-primary flex items-center gap-2">
        Apply Now <ArrowRight size={18} />
      </a>
      <a href="#about" className="btn-secondary">Discover More</a>
    </div>
          
          {/* School Achievements */}
          
        </div>
      </div>
    </section>
  );
};

const AchievementCard = ({ number, text, delay }: { number: string, text: string, delay: number }) => {
  const cardRef = useScrollAnimation({ 
    animationType: 'fade-in-up',
    threshold: 0.3
  });
  
  return (
    <div 
      ref={cardRef as React.RefObject<HTMLDivElement>}
      className="glass-panel py-4 px-6 text-center" 
      style={{ transitionDelay: `${delay}ms` }}
    >
      <h3 className="text-2xl md:text-3xl font-serif font-bold mb-1 text-school-gold">{number}</h3>
      <p className="text-sm">{text}</p>
    </div>
  );
};

export default Hero;
