import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Image as ImageIcon } from 'lucide-react';

interface GalleryImage {
  src: string;
  alt: string;
}

const MovingGallery = () => {
  const [images, setImages] = useState<GalleryImage[]>([]);

  useEffect(() => {
    // List of available images from the images folder
    const galleryImages: GalleryImage[] = [
      { src: '/images/acad.jpeg', alt: 'Academic' },
      { src: '/images/academics.jpeg', alt: 'Academics' },
      { src: '/images/BIOLOGY.jpg', alt: 'Biology Lab' },
      { src: '/images/CHEMISTRY.jpg', alt: 'Chemistry Lab' },
      { src: '/images/COMPUTER.jpg', alt: 'Computer Lab' },
      { src: '/images/CR-1.jpeg', alt: 'Carnival 1' },
      { src: '/images/CR-2.jpeg', alt: 'Carnival 2' },
      { src: '/images/CR-3.jpeg', alt: 'Carnival 3' },
      { src: '/images/CR-4.jpeg', alt: 'Carnival 4' },
      { src: '/images/CR-5.jpeg', alt: 'Carnival 5' },
      { src: '/images/CR-6.jpeg', alt: 'Carnival 6' },
      { src: '/images/CR-7.jpeg', alt: 'Carnival 7' },
      { src: '/images/CR-8.jpeg', alt: 'Carnival 8' },
      { src: '/images/EXAMINATION_HALL.jpg', alt: 'Examination Hall' },
      { src: '/images/front.jpeg', alt: 'Front' },
      { src: '/images/front.jpg', alt: 'Front' },
      { src: '/images/front1.jpeg', alt: 'Front 1' },
      { src: '/images/FRONT_GROUND.jpg', alt: 'Front Ground' },
      { src: '/images/LIBRARY.jpg', alt: 'Library' },
      { src: '/images/PHYSICS.jpg', alt: 'Physics Lab' },
      { src: '/images/SCHOOL_BUILDING_BACK1.jpg', alt: 'School Building Back 1' },
      { src: '/images/SCHOOL_BUILDING_BACK2.jpg', alt: 'School Building Back 2' },
      { src: '/images/SCHOOL_BUILDING_FRONT.jpg', alt: 'School Building Front' },
      { src: '/images/science.jpeg', alt: 'Science Lab' },
      { src: '/images/science1.jpeg', alt: 'Science Lab 1' },
      { src: '/images/science2.jpeg', alt: 'Science Lab 2' },
      { src: '/images/science3.jpeg', alt: 'Science Lab 3' },
    ];

    setImages(galleryImages);
  }, []);

  if (images.length === 0) return null;

  return (
    <section className="py-8 bg-gradient-to-r from-school-navy via-school-maroon to-school-navy">
      <div className="container-custom">
        <div className="flex items-center justify-between gap-4">
          {/* Gallery Strip Label */}
          <div className="flex items-center gap-3">
            <ImageIcon className="text-school-gold" size={24} />
            <h3 className="text-white font-bold text-lg md:text-xl">School Gallery</h3>
          </div>

          {/* Moving Images Strip */}
          <div className="flex-1 overflow-hidden rounded-lg shadow-lg">
            <div className="flex animate-scroll gap-2 hover:pause">
              {[...images, ...images].map((image, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 h-24 w-32 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* View Gallery Button */}
          <Link
            to="/gallery"
            className="flex-shrink-0 px-6 py-2.5 bg-school-gold text-school-navy font-semibold rounded-lg hover:bg-yellow-400 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 whitespace-nowrap text-sm md:text-base"
          >
            View All
          </Link>
        </div>
      </div>

      {/* CSS Animation */}
      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        .animate-scroll {
          animation: scroll 30s linear infinite;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default MovingGallery;

