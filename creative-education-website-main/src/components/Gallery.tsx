
import { useState, useRef } from 'react';
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
    <section id="gallery" className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 
            ref={headingRef as React.RefObject<HTMLHeadingElement>} 
            className="section-title mx-auto flex flex-col items-center justify-center"
          >
            School Gallery
            <span className="after:mx-auto"></span>
          </h2>
          
          <p 
            ref={textRef as React.RefObject<HTMLParagraphElement>} 
            className="text-gray-700"
          >
            Glimpses of life at St. Maria School - celebrating learning, achievements, and joyful moments.
          </p>
        </div>
        
        {/* Filter Categories */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                filter === category 
                  ? 'bg-school-maroon text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredImages.map((image, index) => (
            <GalleryImage 
              key={index}
              image={image}
              onClick={() => handleImageClick(index)}
              delay={index * 100}
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
      className="relative overflow-hidden rounded-lg cursor-pointer group h-48 md:h-56"
      onClick={onClick}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <img 
        src={image.src} 
        alt={image.alt} 
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
      />
      
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
        <p className="text-white text-sm font-medium">{image.alt}</p>
        <span className="text-white/70 text-xs">{image.category}</span>
      </div>
    </div>
  );
};

export default Gallery;
