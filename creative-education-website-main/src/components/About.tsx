
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Award, BookOpen, GraduationCap, HeartHandshake } from 'lucide-react';

const About = () => {
  const headingRef = useScrollAnimation();
  const textRef = useScrollAnimation({ threshold: 0.2 });
  const imageRef = useScrollAnimation({
    animationType: 'slide-in-right',
    threshold: 0.3
  });

  return (
    <section id="about" className="py-20 bg-school-cream/30">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 ref={headingRef as React.RefObject<HTMLHeadingElement>} className="section-title">
              About ST. Maria School
            </h2>

            <div ref={textRef as React.RefObject<HTMLDivElement>}>
              <p className="mb-6 text-gray-700 leading-relaxed">
                ST. Maria School in Agarpara has been a pillar of educational excellence for over 24+ years. Our institution is dedicated to shaping young minds through a well-rounded approach that fosters academic excellence, strong character, and cultural values.
              </p>

              <p className="mb-8 text-gray-700 leading-relaxed">
                At ST. Maria, we believe in providing a holistic education that prepares students not just for examinations,
                but for life's challenges. Our curriculum combines traditional wisdom with modern educational practices,
                encouraging critical thinking, creativity, and a global perspective while remaining rooted in Indian values.
              </p>

              {/* Values */}
              <div className="grid sm:grid-cols-2 gap-5 mb-8">
                <ValueCard
                  icon={<BookOpen className="text-school-maroon" />}
                  title="Academic Excellence"
                  description="Rigorous curriculum designed to inspire intellectual curiosity and achieve academic success."
                />

                <ValueCard
                  icon={<HeartHandshake className="text-school-maroon" />}
                  title="Character Building"
                  description="Focus on developing strong moral values, integrity, and respect for diversity."
                />

                <ValueCard
                  icon={<GraduationCap className="text-school-maroon" />}
                  title="Holistic Development"
                  description="Balance of academics, sports, arts, and community service for well-rounded growth."
                />

                <ValueCard
                  icon={<Award className="text-school-maroon" />}
                  title="Value-Based Learning"
                  description="Education rooted in Indian cultural values while embracing global perspectives."
                />
              </div>

              <a href="#academics" className="btn-primary">Explore Our Approach</a>
            </div>
          </div>

          {/* Image */}
          <div
            ref={imageRef as React.RefObject<HTMLDivElement>}
            className="relative"
          >
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-school-gold rounded-full opacity-20"></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-school-maroon rounded-full opacity-20"></div>

            <img
              src="https://images.unsplash.com/photo-1581078426770-6d336e5de7bf?q=80&w=1770&auto=format&fit=crop"
              alt="Students at St. Maria School"
              className="w-full h-auto rounded-lg shadow-xl relative z-10 object-cover"
              style={{ height: '500px' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const ValueCard = ({
  icon,
  title,
  description
}: {
  icon: React.ReactNode,
  title: string,
  description: string
}) => {
  return (
    <div className="flex gap-3">
      <div className="mt-1">
        {icon}
      </div>
      <div>
        <h3 className="font-serif font-medium text-lg mb-1 text-school-navy">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default About;
