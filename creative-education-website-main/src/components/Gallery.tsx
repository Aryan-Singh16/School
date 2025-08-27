import { useState, useRef, useEffect } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

const galleryImages = [
  {
    src: "/images/academics.jpeg",
    alt: "classroom",
    category: "Academics"
  },
  {
    src: "/images/acad.jpeg",
    alt: "classroom",
    category: "Academics"
  },
  {
    src: "/images/lib.jpeg",
    alt: "Students studying in library",
    category: "Library"
  },
  {
    src: "/images/science.jpeg",
    alt: "Science lab ",
    category: "Science"
  },
  {
    src: "/images/science1.jpeg",
    alt: "Science lab ",
    category: "Science"
  },
  {
    src: "/images/science2.jpeg",
    alt: "Science lab ",
    category: "Science"
  },
  {
    src: "/images/science3.jpeg",
    alt: "Science lab ",
    category: "Science"
  },
  {
    src: "/images/campus.jpeg",
    alt: "School campus",
    category: "Campus"
  },
  {
    src: "/images/campus2.jpeg",
    alt: "School campus",
    category: "Campus"
  },
  {
    src: "/images/campus3.jpeg",
    alt: "School campus",
    category: "Campus"
  },
  {
    src: "/images/tech.jpeg",
    alt: "Computer lab",
    category: "Technology"
  },
  {
    src: "/images/tech2.jpeg",
    alt: "Computer lab",
    category: "Technology"
  }
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [filter, setFilter] = useState("All");
  
  const headingRef = useScrollAnimation();
  const textRef = useScrollAnimation({ threshold: 0.2 });
  
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  
  const filteredImages = filter === "All" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === filter);
    
  const handleImageClick = (index: number) => {
    setSelectedImage(index);
  };
  
  const handleCloseModal = () => {
    setSelectedImage(null);
  };
  
  const handlePrev = () => {
    if (selectedImage === null) return;
    setSelectedImage(selectedImage === 0 ? filteredImages.length - 1 : selectedImage - 1);
  };
  
  const handleNext = () => {
    if (selectedImage === null) return;
    setSelectedImage(selectedImage === filteredImages.length - 1 ? 0 : selectedImage + 1);
  };
  
  const categories = ["All", ...new Set(galleryImages.map(img => img.category))];
  
  return (
    <section id="gallery" className="py-20 gradient-bg">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 
            ref={headingRef as React.RefObject<HTMLHeadingElement>} 
            className="section-title mx-auto flex flex-col items-center justify-center text-white"
          >
            School Gallery
            <span className="after:mx-auto after:bg-school-gold"></span>
          </h2>
          
          <p 
            ref={textRef as React.RefObject<HTMLParagraphElement>} 
            className="text-white/90 text-lg"
          >
            Glimpses of life at St. Maria School - celebrating learning, achievements, and joyful moments.
          </p>
        </div>
        
        {/* Filter Categories */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 ${
                filter === category 
                  ? 'bg-school-gold text-school-navy shadow-lg' 
                  : 'glass-panel text-white hover:bg-white/20'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredImages.map((image, index) => (
            <GalleryImage 
              key={index}
              image={image}
              onClick={() => handleImageClick(index)}
              delay={index * 50}
            />
          ))}
        </div>
        
        {/* Lightbox Modal */}
        {selectedImage !== null && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <button 
              className="absolute top-4 right-4 text-white hover:text-school-gold"
              onClick={handleCloseModal}
            >
              <X size={24} />
            </button>
            
            <button 
              className="absolute left-4 text-white hover:text-school-gold"
              onClick={handlePrev}
            >
              <ChevronLeft size={32} />
            </button>
            
            <img 
              src={filteredImages[selectedImage].src} 
              alt={filteredImages[selectedImage].alt}
              className="max-h-[80vh] max-w-full object-contain" 
            />
            
            <button 
              className="absolute right-4 text-white hover:text-school-gold"
              onClick={handleNext}
            >
              <ChevronRight size={32} />
            </button>
            
            <p className="absolute bottom-6 text-white text-center w-full">
              {filteredImages[selectedImage].alt} - {filteredImages[selectedImage].category}
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

const GalleryImage = ({ 
  image, 
  onClick,
  delay 
}: { 
  image: { src: string; alt: string; category: string }; 
  onClick: () => void;
  delay: number;
}) => {
  const imageRef = useScrollAnimation({ 
    animationType: 'fade-in',
    threshold: 0.1
  });
  
  return (
    <div 
      ref={imageRef as React.RefObject<HTMLDivElement>}
      className="floating-card relative overflow-hidden rounded-xl cursor-pointer group h-64 md:h-72"
      onClick={onClick}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <img 
        src={image.src} 
        alt={image.alt} 
        className="w-full h-full object-cover transition-all duration-700 group-hover:scale-125 group-hover:rotate-2" 
      />
      
      <div className="absolute inset-0 bg-gradient-to-t from-school-maroon/80 via-transparent to-school-navy/20 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6">
        <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
          <p className="text-white text-lg font-medium mb-1">{image.alt}</p>
          <span className="text-school-gold text-sm font-medium px-3 py-1 bg-white/20 rounded-full backdrop-blur-sm">
            {image.category}
          </span>
        </div>
      </div>
      
      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="w-8 h-8 bg-school-gold rounded-full flex items-center justify-center">
          <span className="text-school-navy text-sm">🔍</span>
        </div>
      </div>
    </div>
  );
};

export default Gallery;