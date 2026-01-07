import { Helmet } from 'react-helmet-async';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, X, Filter, Search, ZoomIn, Heart, Share2, Download } from 'lucide-react';

// Gallery images data
const galleryImages = [
  {
    src: "/images/academics.jpeg",
    alt: "classroom",
    category: "Academics",
    description: "Modern classroom environment fostering interactive learning"
  },
  {
    src: "/images/CR-1.jpeg",
    alt: "christmas carnival",
    category: "Christmas Carnival",
    description: "Christmas Carnival celebrations filled with joy and festive decorations"
  },
  {
    src: "/images/CR-2.jpeg",
    alt: "christmas carnival",
    category: "Christmas Carnival",
    description: "Students and staff enjoying the vibrant Christmas Carnival atmosphere"
  },
  {
    src: "/images/CR-3.jpeg",
    alt: "christmas carnival",
    category: "Christmas Carnival",
    description: "Colorful stalls and activities during the Christmas Carnival"
  },
  {
    src: "/images/CR-4.jpeg",
    alt: "christmas carnival",
    category: "Christmas Carnival",
    description: "Fun games and festive moments from the Christmas Carnival"
  },
  {
    src: "/images/CR-5.jpeg",
    alt: "christmas carnival",
    category: "Christmas Carnival",
    description: "Students participating enthusiastically in Christmas Carnival events"
  },
  {
    src: "/images/CR-6.jpeg",
    alt: "christmas carnival",
    category: "Christmas Carnival",
    description: "Beautifully decorated spaces for the Christmas Carnival celebration"
  },
  {
    src: "/images/CR-7.jpeg",
    alt: "christmas carnival",
    category: "Christmas Carnival",
    description: "Lively performances and cheerful gatherings at the Christmas Carnival"
  },
  {
    src: "/images/CR-8.jpeg",
    alt: "christmas carnival",
    category: "Christmas Carnival",
    description: "Memorable moments captured during the Christmas Carnival festivities"
  },
  {
    src: "/images/SCHOOL_BUILDING_FRONT.jpg",
    alt: "school building front",
    category: "Campus",
    description: "Front view of the school building showcasing the campus architecture"
  },
  {
    src: "/images/BIOLOGY.jpg",
    alt: "biology lab",
    category: "Academics",
    description: "Biology laboratory equipped for practical and experimental learning"
  },
  {
    src: "/images/CHEMISTRY.jpg",
    alt: "chemistry lab",
    category: "Academics",
    description: "Chemistry lab designed for safe and effective scientific experiments"
  },
  {
    src: "/images/COMPUTER.jpg",
    alt: "computer lab",
    category: "Academics",
    description: "Computer lab with modern systems supporting digital education"
  },
  {
    src: "/images/EXAMINATION_HALL.jpg",
    alt: "examination hall",
    category: "Facilities",
    description: "Spacious examination hall ensuring a calm and organized environment"
  },
  {
    src: "/images/FRONT_GROUND.jpg",
    alt: "school ground",
    category: "Sports",
    description: "Front ground area used for sports and outdoor activities"
  },
  {
    src: "/images/LIBRARY.jpg",
    alt: "school library",
    category: "Facilities",
    description: "Well-stocked library encouraging reading and independent learning"
  },
  {
    src: "/images/PHYSICS.jpg",
    alt: "physics lab",
    category: "Academics",
    description: "Physics lab supporting hands-on learning and experimentation"
  },
  {
    src: "/images/SCHOOL_BUILDING_BACK1.jpg",
    alt: "school building back",
    category: "Campus",
    description: "Rear view of the school building highlighting campus infrastructure"
  },
  {
    src: "/images/acad.jpeg",
    alt: "classroom",
    category: "Academics",
    description: "Well-equipped academic spaces for quality education"
  },
  {
    src: "/images/science.jpeg",
    alt: "Science lab",
    category: "Science",
    description: "State-of-the-art science laboratory for hands-on experiments"
  },
  {
    src: "/images/science1.jpeg",
    alt: "Science lab",
    category: "Science",
    description: "Advanced scientific equipment for comprehensive learning"
  },
  {
    src: "/images/science2.jpeg",
    alt: "Science lab",
    category: "Science",
    description: "Modern laboratory facilities promoting scientific inquiry"
  },
  {
    src: "/images/science3.jpeg",
    alt: "Science lab",
    category: "Science",
    description: "Professional-grade science lab for innovative research"
  }
];

// Floating Image Component for Hero Section
const FloatingImage = ({ src, alt, index, delay }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition({
        x: Math.random() * 100,
        y: Math.random() * 100
      });
    }, 3000 + Math.random() * 2000);

    // Initial position
    setTimeout(() => {
      setPosition({
        x: Math.random() * 100,
        y: Math.random() * 100
      });
    }, delay);

    return () => clearInterval(interval);
  }, [delay]);

  const size = 80 + Math.random() * 120; // Random size between 80-200px

  return (
    <div
      className="absolute rounded-2xl overflow-hidden shadow-2xl border-4 border-white/50 backdrop-blur-sm
        transform transition-all duration-[3000ms] ease-in-out opacity-70 hover:opacity-100
        hover:scale-110 cursor-pointer"
      style={{
        left: `${position.x}%`,
        top: `${position.y}%`,
        width: `${size}px`,
        height: `${size * 0.75}px`,
        transform: `translate(-50%, -50%) rotate(${Math.random() * 20 - 10}deg)`,
        zIndex: Math.floor(Math.random() * 5) + 1
      }}
    >
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
      />
    </div>
  );
};

// Gallery Card Component
const GalleryCard = ({ image, index, onClick, onToggleFavorite, isFavorite }) => {
  return (
    <div className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl
      transform hover:scale-[1.02] transition-all duration-500 border border-slate-200/50">
      <div className="relative h-64 overflow-hidden">
        <img
          src={image.src}
          alt={image.alt}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent
          opacity-0 group-hover:opacity-100 transition-all duration-500">

          {/* Action Buttons */}
          <div className="absolute top-3 right-3 flex gap-2">
            <button
              onClick={(e) => {
                e.stopPropagation();
                onToggleFavorite();
              }}
              className={`p-2 rounded-full backdrop-blur-sm border transition-all duration-200 ${
                isFavorite
                  ? 'bg-red-500 border-red-400 text-white'
                  : 'bg-white/20 border-white/30 text-white hover:bg-white/30'
              }`}
            >
              <Heart size={16} fill={isFavorite ? 'currentColor' : 'none'} />
            </button>

            <button
              onClick={onClick}
              className="p-2 rounded-full bg-white/20 border border-white/30 text-white
                backdrop-blur-sm hover:bg-white/30 transition-all duration-200"
            >
              <ZoomIn size={16} />
            </button>
          </div>

          {/* Content */}
          <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-2
            group-hover:translate-y-0 transition-transform duration-500">
            <h3 className="font-semibold mb-1 truncate">{image.alt}</h3>
            <p className="text-sm opacity-90 line-clamp-2">{image.description}</p>
            <span className="inline-block mt-2 px-3 py-1 bg-blue-500/80 rounded-full text-xs font-medium">
              {image.category}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

// Lightbox Component
const Lightbox = ({ images, currentIndex, onClose, onPrev, onNext }) => {
  const currentImage = images[currentIndex];

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [onClose, onPrev, onNext]);

  return (
    <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4">
      {/* Close Button */}
      <button
        className="absolute top-6 right-6 text-white hover:text-blue-400 z-10 p-2 rounded-full
          bg-black/20 backdrop-blur-sm"
        onClick={onClose}
      >
        <X size={24} />
      </button>

      {/* Navigation */}
      <button
        className="absolute left-6 top-1/2 transform -translate-y-1/2 text-white hover:text-blue-400
          p-3 rounded-full bg-black/20 backdrop-blur-sm z-10"
        onClick={onPrev}
      >
        <ChevronLeft size={32} />
      </button>

      <button
        className="absolute right-6 top-1/2 transform -translate-y-1/2 text-white hover:text-blue-400
          p-3 rounded-full bg-black/20 backdrop-blur-sm z-10"
        onClick={onNext}
      >
        <ChevronRight size={32} />
      </button>

      {/* Image Container */}
      <div className="max-w-6xl max-h-[80vh] mx-auto relative">
        <img
          src={currentImage.src}
          alt={currentImage.alt}
          className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
        />

        {/* Image Info */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent
          text-white p-6 rounded-b-lg">
          <h3 className="text-xl font-semibold mb-2">{currentImage.alt}</h3>
          <p className="text-white/90 mb-2">{currentImage.description}</p>
          <div className="flex items-center justify-between">
            <span className="px-3 py-1 bg-blue-500/80 rounded-full text-sm">
              {currentImage.category}
            </span>
            <span className="text-sm text-white/70">
              {currentIndex + 1} of {images.length}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

const GalleryPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [filter, setFilter] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [favorites, setFavorites] = useState(new Set());
  const [isLoading, setIsLoading] = useState(true);
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const filteredImages = galleryImages.filter(img => {
    const matchesFilter = filter === "All" || img.category === filter;
    const matchesSearch = img.alt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      img.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const categories = ["All", ...new Set(galleryImages.map(img => img.category))];

  const toggleFavorite = (index) => {
    const newFavorites = new Set(favorites);
    if (newFavorites.has(index)) {
      newFavorites.delete(index);
    } else {
      newFavorites.add(index);
    }
    setFavorites(newFavorites);
  };

  return (
    <>
      <Helmet>
        <title>Gallery - St. Maria School | Campus Life & Events</title>
        <meta name="description" content="Explore St. Maria School's photo gallery showcasing campus life, events, facilities, and achievements of our students." />
      </Helmet>
      
      <Header />
      <main className="pt-8">
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
          {/* Hero Section with Floating Image Cloud */}
          <section className="relative h-screen overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-blue-100/30 to-slate-100/50"></div>

            {/* Floating Images Cloud */}
            <div className="absolute inset-0">
              {galleryImages.slice(0, 12).map((image, index) => (
                <FloatingImage
                  key={index}
                  src={image.src}
                  alt={image.alt}
                  index={index}
                  delay={index * 200}
                />
              ))}
            </div>

            {/* Hero Content */}
            <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
              <div className="backdrop-blur-md bg-white/20 rounded-3xl p-8 md:p-12 border border-white/30 shadow-2xl">
                <h1 className="text-4xl md:text-6xl font-bold text-slate-800 mb-4 tracking-tight">
                  School Gallery
                </h1>
                <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-2xl">
                  Discover the beauty of learning through our comprehensive collection of campus moments,
                  achievements, and memorable experiences.
                </p>
                <button
                  onClick={() => document.getElementById('gallery-section').scrollIntoView({ behavior: 'smooth' })}
                  className="px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-full
                    font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  Explore Gallery
                </button>
              </div>
            </div>
          </section>

          {/* Gallery Section */}
          <section id="gallery-section" className="py-20 px-4">
            <div className="max-w-7xl mx-auto">
              {/* Gallery Header */}
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
                  Our Visual Journey
                </h2>
                <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                  Each image tells a story of growth, discovery, and excellence. Browse through our
                  carefully curated collection of school life moments.
                </p>
              </div>

              {/* Search and Filter Controls */}
              <div className="mb-12">
                <div className="flex flex-col md:flex-row gap-4 items-center justify-between bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-white/50 shadow-lg">
                  {/* Search Bar */}
                  <div className="relative flex-1 max-w-md">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" size={20} />
                    <input
                      type="text"
                      placeholder="Search images..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 focus:border-blue-400
                        focus:ring-2 focus:ring-blue-200 transition-all duration-200 bg-white/80"
                    />
                  </div>

                  {/* Filter Toggle */}
                  <button
                    onClick={() => setShowFilters(!showFilters)}
                    className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-slate-100 to-blue-100
                      rounded-xl border border-slate-200 hover:border-blue-300 transition-all duration-200"
                  >
                    <Filter size={18} />
                    <span>Filters</span>
                  </button>
                </div>

                {/* Category Filters */}
                {showFilters && (
                  <div className="mt-6 flex flex-wrap gap-3 justify-center animate-fadeIn">
                    {categories.map((category) => (
                      <button
                        key={category}
                        onClick={() => setFilter(category)}
                        className={`px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
                          filter === category
                            ? 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-lg'
                            : 'bg-white/80 text-slate-600 hover:bg-blue-50 border border-slate-200'
                        }`}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Gallery Grid */}
              {isLoading ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {Array.from({ length: 8 }).map((_, index) => (
                    <div key={index} className="h-64 bg-gradient-to-br from-slate-200 to-blue-200 rounded-xl animate-pulse"></div>
                  ))}
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {filteredImages.map((image, index) => (
                    <GalleryCard
                      key={index}
                      image={image}
                      index={index}
                      onClick={() => setSelectedImage(index)}
                      onToggleFavorite={() => toggleFavorite(index)}
                      isFavorite={favorites.has(index)}
                    />
                  ))}
                </div>
              )}

              {filteredImages.length === 0 && !isLoading && (
                <div className="text-center py-16">
                  <div className="text-6xl mb-4">🔍</div>
                  <h3 className="text-xl font-semibold text-slate-600 mb-2">No images found</h3>
                  <p className="text-slate-500">Try adjusting your search or filter criteria</p>
                </div>
              )}
            </div>
          </section>

          {/* Lightbox Modal */}
          {selectedImage !== null && (
            <Lightbox
              images={filteredImages}
              currentIndex={selectedImage}
              onClose={() => setSelectedImage(null)}
              onPrev={() => setSelectedImage(selectedImage === 0 ? filteredImages.length - 1 : selectedImage - 1)}
              onNext={() => setSelectedImage(selectedImage === filteredImages.length - 1 ? 0 : selectedImage + 1)}
            />
          )}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default GalleryPage;