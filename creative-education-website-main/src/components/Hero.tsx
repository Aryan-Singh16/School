import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { ArrowRight, ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';

const Hero = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  const titleRef = useScrollAnimation({ animationType: 'fade-in' });
  const subtitleRef = useScrollAnimation({ 
    animationType: 'fade-in-up',
    threshold: 0.2 
  });
  const ctaRef = useScrollAnimation({ 
    animationType: 'fade-in-up',
    threshold: 0.3,
  });

  // Array of background images with motivational quotes
  const backgroundImages = [
    {
      src: '/images/front1.jpeg',
      quote: "Education is the most powerful weapon which you can use to change the world."
    },
    {
      src: '/images/front.jpeg',
      quote: "The beautiful thing about learning is that no one can take it away from you."
    },
    {
      src: '/images/campus.jpeg',
      quote: "Education is not preparation for life; education is life itself."
    },
    {
      src: '/images/campus2.jpeg',
      quote: "Play is the highest form of research and the foundation of all learning."
    },
    {
      src: '/images/lib.jpeg',
      quote: "A room without books is like a body without a soul."
    }
  ];

  // Auto-scroll images every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentImageIndex]);

  const nextImage = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    
    setTimeout(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
      );
      setIsTransitioning(false);
    }, 300);
  };

  const prevImage = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    
    setTimeout(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === 0 ? backgroundImages.length - 1 : prevIndex - 1
      );
      setIsTransitioning(false);
    }, 300);
  };

  const goToImage = (index: number) => {
    if (isTransitioning || index === currentImageIndex) return;
    setIsTransitioning(true);
    
    setTimeout(() => {
      setCurrentImageIndex(index);
      setIsTransitioning(false);
    }, 300);
  };

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  const scrollToNextSection = () => {
    const nextSection = document.querySelector('#about') || document.querySelector('section:nth-child(2)');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
    <section 
      id="home" 
      className={`relative flex items-center overflow-hidden transition-all duration-700 ease-in-out ${
        isCollapsed ? 'h-[40vh]' : 'h-[90vh]'
      }`}
    >
      {/* Image Carousel Background */}
      <div className="absolute inset-0 overflow-hidden">
        {backgroundImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center bg-no-repeat parallax-scroll transition-all duration-700 ${
              index === currentImageIndex 
                ? 'opacity-100 scale-100' 
                : 'opacity-0 scale-105'
            } ${isTransitioning ? 'transition-opacity duration-300' : ''}`}
            style={{
              backgroundImage: `url('${image.src}')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              filter: isCollapsed ? 'brightness(0.8)' : 'brightness(0.9)'
            }}
          ></div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button 
        onClick={prevImage}
        className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 z-30 p-2 sm:p-3 rounded-full bg-white/20 backdrop-blur-md hover:bg-white/30 transition-all duration-300 group"
        aria-label="Previous image"
      >
        <ChevronLeft size={20} className="sm:hidden text-white group-hover:scale-110 transition-transform" />
        <ChevronLeft size={24} className="hidden sm:block text-white group-hover:scale-110 transition-transform" />
      </button>
      
      <button 
        onClick={nextImage}
        className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 z-30 p-2 sm:p-3 rounded-full bg-white/20 backdrop-blur-md hover:bg-white/30 transition-all duration-300 group"
        aria-label="Next image"
      >
        <ChevronRight size={20} className="sm:hidden text-white group-hover:scale-110 transition-transform" />
        <ChevronRight size={24} className="hidden sm:block text-white group-hover:scale-110 transition-transform" />
      </button>

      {/* Image Indicators */}
      <div className={`absolute left-1/2 transform -translate-x-1/2 z-30 flex gap-2 ${
        isCollapsed ? 'bottom-4' : 'bottom-8'
      }`}>
        {backgroundImages.map((_, index) => (
          <button
            key={index}
            onClick={() => goToImage(index)}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
              index === currentImageIndex 
                ? 'bg-white scale-125' 
                : 'bg-white/50 hover:bg-white/70'
            }`}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>
      
      {/* Glass Content Container */}
<div className="container-custom relative z-20 flex items-center h-full px-4 sm:px-6 lg:px-8">
  <div
    className={`transition-all duration-700 w-full ${
      isCollapsed ? "text-center" : "text-left"
    }`}
  >
    {/* Main Content Glass Box with Gradient Transparency */}
    <div
      className={`backdrop-blur-sm border border-white/10 rounded-xl sm:rounded-2xl shadow-2xl transition-all duration-500 ${
        isCollapsed ? "opacity-0 h-0 overflow-hidden p-0" : "opacity-100 p-4 sm:p-6 md:p-8 lg:p-12"
      }`}
      style={{
        background: isCollapsed ? 'transparent' : 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 50%, rgba(0,0,0,0.02) 100%)'
      }}
    >
      <h1
        ref={titleRef as React.RefObject<HTMLHeadingElement>}
        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-serif font-bold mb-4 sm:mb-6 leading-tight text-blue-400 drop-shadow-2xl opacity-100"
        style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.8), 0 0 20px rgba(0,0,0,0.5)' }}
      >
        Nurturing Excellence, Shaping Future Leaders
      </h1>

      <p
        ref={subtitleRef as React.RefObject<HTMLParagraphElement>}
        className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 text-blue-200 drop-shadow-xl leading-relaxed opacity-100"
        style={{ textShadow: '1px 1px 6px rgba(0,0,0,0.8), 0 0 15px rgba(0,0,0,0.4)' }}
      >
        ST. Maria School in Agarpara provides world-class education with Indian
        values, preparing students for global challenges through holistic
        development.
      </p>

      {/* Achievement Badge */}
      <div 
        className="backdrop-blur-md border border-purple-400/40 rounded-lg sm:rounded-xl p-3 sm:p-4 mb-6 sm:mb-8 inline-block"
        style={{
          background: 'linear-gradient(135deg, rgba(147,51,234,0.3) 0%, rgba(79,70,229,0.2) 100%)'
        }}
      >
        <p 
          className="text-white font-medium text-sm sm:text-base lg:text-lg opacity-100"
          style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.8)' }}
        >
          ✨ Affiliated with CISCE
        </p>
      </div>

      <div
        ref={ctaRef as React.RefObject<HTMLDivElement>}
        className="flex flex-col sm:flex-row gap-3 sm:gap-4"
      >
        <a
          href="#admission"
          className="bg-gradient-to-r from-orange-500/80 to-red-600/80 hover:from-orange-600/90 hover:to-red-700/90 text-white py-3 px-6 sm:px-8 rounded-lg sm:rounded-xl font-medium shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 backdrop-blur-sm opacity-100 border border-orange-400/30 text-sm sm:text-base"
        >
          Apply Now <ArrowRight size={16} className="sm:hidden" /><ArrowRight size={18} className="hidden sm:block" />
        </a>
        <a
          href="#about"
          className="text-white py-3 px-6 sm:px-8 rounded-lg sm:rounded-xl font-medium shadow-lg hover:shadow-xl transition-all duration-300 backdrop-blur-sm border border-teal-400/40 hover:border-teal-300/60 opacity-100 text-center sm:text-left text-sm sm:text-base"
          style={{
            background: 'linear-gradient(135deg, rgba(20,184,166,0.3) 0%, rgba(6,182,212,0.2) 100%)'
          }}
        >
          Discover More
        </a>
      </div>
    </div>

    {/* Collapsed Content Glass Box */}
    <div
      className={`backdrop-blur-sm border border-emerald-400/20 rounded-lg sm:rounded-xl shadow-2xl transition-all duration-500 ${
        isCollapsed ? "opacity-100 p-4 sm:p-6" : "opacity-0 h-0 overflow-hidden p-0"
      }`}
      style={{
        background: isCollapsed ? 'linear-gradient(135deg, rgba(16,185,129,0.15) 0%, rgba(5,150,105,0.1) 50%, rgba(4,120,87,0.05) 100%)' : 'transparent'
      }}
    >
      <h2 
        className="text-xl sm:text-2xl md:text-3xl font-serif font-bold text-emerald-300 drop-shadow-2xl opacity-100"
        style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.8), 0 0 20px rgba(0,0,0,0.5)' }}
      >
        ST. Maria School, Agarpara
      </h2>
      <p 
        className="text-xs sm:text-sm md:text-base mt-2 text-emerald-200 drop-shadow-xl opacity-100"
        style={{ textShadow: '1px 1px 6px rgba(0,0,0,0.8), 0 0 15px rgba(0,0,0,0.4)' }}
      >
        Excellence in Education Since Our Foundation
      </p>
    </div>
  </div>
</div>

      {/* Collapse/Expand Button */}
      <button 
        onClick={toggleCollapse}
        className="absolute top-2 sm:top-4 right-2 sm:right-4 z-30 p-2 sm:p-3 rounded-full bg-white/20 backdrop-blur-md hover:bg-white/30 transition-all duration-300 group"
        aria-label={isCollapsed ? "Expand hero section" : "Collapse hero section"}
      >
        <ChevronDown 
          size={20} 
          className={`sm:hidden text-white transition-transform duration-300 ${
            isCollapsed ? 'rotate-180' : ''
          } group-hover:scale-110`} 
        />
        <ChevronDown 
          size={24} 
          className={`hidden sm:block text-white transition-transform duration-300 ${
            isCollapsed ? 'rotate-180' : ''
          } group-hover:scale-110`} 
        />
      </button>

      {/* Scroll Down Indicator - Only when not collapsed */}
      {!isCollapsed && (
        <button 
          onClick={scrollToNextSection}
          className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-30 animate-bounce"
          aria-label="Scroll to next section"
        >
          <div className="w-6 h-10 sm:w-8 sm:h-12 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-2 sm:h-3 bg-white/70 rounded-full mt-1 sm:mt-2 animate-pulse"></div>
          </div>
        </button>
      )}
    </section>

    {/* Motivational Quotes Section - Below the Hero */}
    <section className="relative bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 py-6 sm:py-8 md:py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div 
            className="backdrop-blur-lg rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 text-center border border-indigo-400/30 transition-all duration-700 shadow-2xl"
            style={{
              background: 'linear-gradient(135deg, rgba(99,102,241,0.2) 0%, rgba(67,56,202,0.15) 100%)'
            }}
          >
            <div className="mb-3 sm:mb-4">
              <span className="inline-block w-8 h-8 sm:w-10 sm:h-10 bg-indigo-500/30 rounded-full flex items-center justify-center mb-2 sm:mb-3 mx-auto">
                <span className="text-lg sm:text-xl">💡</span>
              </span>
              <h3 className="text-indigo-300 text-xs sm:text-sm font-semibold uppercase tracking-wider mb-2">
                Daily Inspiration
              </h3>
            </div>
            
            <blockquote 
              className="text-white text-sm sm:text-base md:text-lg lg:text-xl font-medium italic opacity-100 leading-relaxed"
              style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.8)' }}
            >
              "{backgroundImages[currentImageIndex].quote}"
            </blockquote>
            
            <div className="mt-4 sm:mt-6 flex justify-center">
              <div className="flex gap-1 sm:gap-2">
                {backgroundImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToImage(index)}
                    className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                      index === currentImageIndex 
                        ? 'bg-indigo-400 scale-125' 
                        : 'bg-white/30 hover:bg-white/50'
                    }`}
                    aria-label={`View quote ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
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
      className="glass-panel py-4 px-6 text-center floating-card"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <h3 className="text-2xl md:text-3xl font-serif font-bold mb-1 text-blue-primary">
        {number}
      </h3>
      <p className="text-sm text-blue-secondary">{text}</p>
    </div>
  );
};

export default Hero;