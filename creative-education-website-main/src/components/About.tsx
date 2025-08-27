import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Award, BookOpen, GraduationCap, HeartHandshake, Shield, Star, Users, Trophy } from 'lucide-react';

const About = () => {
  const headingRef = useScrollAnimation();
  const textRef = useScrollAnimation({ threshold: 0.2 });
  const imageRef = useScrollAnimation({
    animationType: 'slide-in-right',
    threshold: 0.3
  });
  const statsRef = useScrollAnimation({ threshold: 0.3 });

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-blue-50/50 via-white to-yellow-50/30 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-20 h-20 bg-blue-200/20 rounded-full blur-xl"></div>
        <div className="absolute top-32 right-20 w-32 h-32 bg-yellow-200/20 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-red-200/20 rounded-full blur-xl"></div>
      </div>

      <div className="container-custom relative z-10">
        {/* School Code Badge */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-blue-800 text-white px-8 py-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105">
            <Shield className="w-6 h-6 text-yellow-300" />
            <span className="text-lg font-bold">ICSE School Code: WB493</span>
            <Star className="w-6 h-6 text-yellow-300" />
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2 ref={headingRef as React.RefObject<HTMLHeadingElement>} className="text-4xl lg:text-5xl font-serif font-bold text-gray-800 mb-8 leading-tight">
              About 
              <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent"> ST. Maria School</span>
            </h2>

            <div ref={textRef as React.RefObject<HTMLDivElement>}>
              {/* Affiliation Badge */}
              <div className="bg-gradient-to-r from-red-600 to-red-700 text-white p-6 rounded-2xl mb-8 shadow-xl border border-red-200">
                <div className="flex items-center justify-center gap-3 mb-2">
                  <Trophy className="w-6 h-6 text-yellow-300" />
                  <span className="text-xl font-bold">Affiliated To ICSE (CISCE)</span>
                  <Trophy className="w-6 h-6 text-yellow-300" />
                </div>
                <p className="text-center text-red-100 text-sm">
                  Council for the Indian School Certificate Examinations
                </p>
              </div>
              
              <div className="prose prose-lg max-w-none">
                <p className="mb-6 text-gray-700 leading-relaxed text-lg">
                  ST. Maria School in Agarpara has been a <span className="font-semibold text-blue-800">pillar of educational excellence for over 24+ years</span>. Our institution is dedicated to shaping young minds through a well-rounded approach that fosters academic excellence, strong character, and cultural values.
                </p>

                <p className="mb-8 text-gray-700 leading-relaxed text-lg">
                  At ST. Maria, we believe in providing a <span className="font-semibold text-red-600">holistic education</span> that prepares students not just for examinations, but for life's challenges. Our curriculum combines traditional wisdom with modern educational practices, encouraging critical thinking, creativity, and a global perspective while remaining rooted in Indian values.
                </p>
              </div>

              {/* Stats Section */}
              {/* <div ref={statsRef as React.RefObject<HTMLDivElement>} className="grid grid-cols-3 gap-6 mb-10 p-6 bg-gradient-to-r from-blue-50 to-yellow-50 rounded-2xl border border-blue-100">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">24+</div>
                  <div className="text-sm font-medium text-gray-600">Years of Excellence</div>
                </div>
                <div className="text-center border-x border-blue-200">
                  <div className="text-3xl font-bold text-red-600 mb-2">100%</div>
                  <div className="text-sm font-medium text-gray-600">Pass Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-600 mb-2">500+</div>
                  <div className="text-sm font-medium text-gray-600">Happy Students</div>
                </div>
              </div> */}

              {/* Values Grid */}
              <div className="grid sm:grid-cols-2 gap-6 mb-10">
                <ValueCard
                  icon={<BookOpen className="text-blue-600" />}
                  title="Academic Excellence"
                  description="ICSE curriculum designed to inspire intellectual curiosity and achieve outstanding academic success."
                  gradient="from-blue-50 to-blue-100"
                  borderColor="border-blue-200"
                />

                <ValueCard
                  icon={<HeartHandshake className="text-red-600" />}
                  title="Character Building"
                  description="Focus on developing strong moral values, integrity, and respect for diversity in our community."
                  gradient="from-red-50 to-red-100"
                  borderColor="border-red-200"
                />

                <ValueCard
                  icon={<GraduationCap className="text-green-600" />}
                  title="Holistic Development"
                  description="Perfect balance of academics, sports, arts, and community service for comprehensive growth."
                  gradient="from-green-50 to-green-100"
                  borderColor="border-green-200"
                />

                <ValueCard
                  icon={<Award className="text-purple-600" />}
                  title="Value-Based Learning"
                  description="Education rooted in Indian cultural values while embracing modern global perspectives."
                  gradient="from-purple-50 to-purple-100"
                  borderColor="border-purple-200"
                />
              </div>

              {/* CTA Buttons
              <div className="flex flex-wrap gap-4">
                <a 
                  href="#academics" 
                  className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-full font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Explore Our Approach
                </a>
                <a 
                  href="#admissions" 
                  className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white px-8 py-4 rounded-full font-semibold hover:from-yellow-600 hover:to-yellow-700 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Apply Now
                </a>
              </div> */}
            </div>
          </div>

          {/* Enhanced Image Section */}
          <div
            ref={imageRef as React.RefObject<HTMLDivElement>}
            className="relative"
          >
            {/* Decorative Elements */}
            <div className="absolute -top-8 -left-8 w-32 h-32 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-gradient-to-br from-red-500 to-red-600 rounded-full opacity-20 animate-pulse" style={{animationDelay: '1s'}}></div>
            <div className="absolute top-1/2 -left-4 w-24 h-24 bg-gradient-to-br from-blue-400 to-blue-500 rounded-full opacity-20 animate-pulse" style={{animationDelay: '2s'}}></div>

            {/* Main Image Container */}
            <div className="relative z-10 group">
              <img
                src="/images/front.jpg"
                alt="Students at St. Maria School - ICSE Education Excellence"
                className="w-full h-auto rounded-2xl shadow-2xl relative z-10 object-cover group-hover:scale-105 transition-transform duration-500"
                style={{ height: '700px' }}
              />
              
              {/* Overlay Badge */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg z-20">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-bold text-gray-800 mb-1">ST. Maria School</h4>
                    <p className="text-sm text-gray-600">Excellence in ICSE Education</p>
                  </div>
                  <div className="flex items-center gap-2 bg-blue-100 px-3 py-1 rounded-full">
                    <Users className="w-4 h-4 text-blue-600" />
                    <span className="text-sm font-medium text-blue-600">WB493</span>
                  </div>
                </div>
              </div>

              {/* Corner Accent */}
              <div className="absolute top-6 right-6 bg-gradient-to-br from-yellow-400 to-yellow-500 w-16 h-16 rounded-full flex items-center justify-center shadow-lg z-20">
                <Star className="w-8 h-8 text-white" />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Achievement Banner */}
        <div className="mt-20 bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800 text-white rounded-3xl p-8 shadow-2xl">
          <div className="text-center">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              Recognized Excellence in Education
            </h3>
            <p className="text-gray-300 text-lg mb-6 max-w-3xl mx-auto">
              As an ICSE affiliated institution with school code <span className="text-yellow-400 font-bold">WB493</span>, 
              we maintain the highest standards of education, preparing students for success in their academic journey and beyond.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-green-400" />
                <span>ICSE (CISCE) Affiliated</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-yellow-400" />
                <span>24+ Years Experience</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-blue-400" />
                <span>Excellence in Teaching</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ValueCard = ({
  icon,
  title,
  description,
  gradient,
  borderColor
}: {
  icon: React.ReactNode,
  title: string,
  description: string,
  gradient: string,
  borderColor: string
}) => {
  return (
    <div className={`p-6 rounded-2xl bg-gradient-to-br ${gradient} border ${borderColor} hover:shadow-lg transition-all duration-300 hover:scale-105 group`}>
      <div className="flex items-start gap-4">
        <div className="mt-1 p-3 bg-white rounded-full shadow-md group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        <div className="flex-1">
          <h3 className="font-serif font-bold text-xl mb-3 text-gray-800 group-hover:text-gray-900 transition-colors duration-300">
            {title}
          </h3>
          <p className="text-gray-700 leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;