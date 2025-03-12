
import { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Raj Sharma",
    role: "Parent",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTj6uP3fZoDdG0RnXn2QvF60Z0gW2e46yFcpA&s",
    quote: "ST. Maria School has been instrumental in shaping my child's future. The teachers are dedicated, and the emphasis on both academics and values creates a perfect learning environment."
  },
  {
    id: 2,
    name: "Priya",
    role: "Alumni",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfw5cJc5mF3hBxgu8bmFaMHhnQLUIcNSlZcw&s",
    quote: "My years at ST. Maria were transformative. The school nurtured my talents and provided me with the skills and confidence to excel in university and beyond. I am forever grateful for the foundation they gave me."
  },
  {
    id: 3,
    name: "Amit Roy",
    role: "Parent",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOtu74pEiq7ofeQeTsco0migV16zZoBwSlGg&s",
    quote: "What sets ST. Maria apart is their holistic approach to education. My children are not just academically strong but are also learning important life skills and values that will help them succeed in life."
  }
  // {
  //   id: 4,
  //   name: "Sonia Gupta",
  //   role: "Alumni, Batch of 2015",
  //   image: "https://images.unsplash.com/photo-1614644147798-f8c0fc9da7f6?q=80&w=1972&auto=format&fit=crop",
  //   quote: "St. Maria School prepared me not just for academic success but for life's challenges. The values instilled during my school years continue to guide me in my professional journey."
  // }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const headingRef = useScrollAnimation();
  const textRef = useScrollAnimation({ threshold: 0.2 });
  const testimonialRef = useScrollAnimation({ 
    animationType: 'fade-in',
    threshold: 0.3
  });
  
  const handlePrev = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };
  
  const handleNext = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };
  
  return (
    <section id="testimonials" className="py-20 bg-school-cream/50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 
            ref={headingRef as React.RefObject<HTMLHeadingElement>} 
            className="section-title mx-auto flex flex-col items-center justify-center"
          >
            What People Say
            <span className="after:mx-auto"></span>
          </h2>
          
          <p 
            ref={textRef as React.RefObject<HTMLParagraphElement>} 
            className="text-gray-700"
          >
            Hear from our parents, students, and alumni about their experiences at St. Maria School.
          </p>
        </div>
        
        <div 
          ref={testimonialRef as React.RefObject<HTMLDivElement>}
          className="max-w-4xl mx-auto relative"
        >
          <div className="absolute -top-8 -left-8 text-school-maroon opacity-20">
            <Quote size={64} />
          </div>
          
          <div className="bg-white rounded-lg shadow-xl p-8 md:p-12 relative z-10">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="w-24 h-24 md:w-32 md:h-32 shrink-0">
                <img 
                  src={testimonials[activeIndex].image} 
                  alt={testimonials[activeIndex].name}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              
              <div className="flex-1">
                <p className="text-gray-700 italic mb-6">
                  {testimonials[activeIndex].quote}
                </p>
                
                <div>
                  <h4 className="text-xl font-serif font-semibold text-school-navy">
                    {testimonials[activeIndex].name}
                  </h4>
                  <p className="text-school-maroon">
                    {testimonials[activeIndex].role}
                  </p>
                </div>
              </div>
            </div>
            
            <div className="flex justify-between mt-8">
              <button 
                onClick={handlePrev}
                className="p-2 rounded-full bg-school-navy/10 text-school-navy hover:bg-school-navy hover:text-white transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={20} />
              </button>
              
              <div className="flex gap-2">
                {testimonials.map((t, index) => (
                  <button
                    key={t.id}
                    onClick={() => setActiveIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      activeIndex === index ? 'bg-school-maroon scale-125' : 'bg-gray-300'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
              
              <button 
                onClick={handleNext}
                className="p-2 rounded-full bg-school-navy/10 text-school-navy hover:bg-school-navy hover:text-white transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
