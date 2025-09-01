import React, { useState, useEffect } from 'react';
import { X, Star, Sparkles } from 'lucide-react';

const AnnouncementPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    // Show popup after a short delay for better UX
    const showTimer = setTimeout(() => {
      setIsVisible(true);
      setIsAnimating(true);
    }, 500);

    // Hide popup after 4 seconds
    const hideTimer = setTimeout(() => {
      setIsAnimating(false);
      // Wait for animation to complete before removing from DOM
      setTimeout(() => setIsVisible(false), 300);
    }, 4500);

    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  const handleClose = () => {
    setIsAnimating(false);
    setTimeout(() => setIsVisible(false), 300);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className={`absolute inset-0 bg-black transition-opacity duration-300 ${
          isAnimating ? 'opacity-50' : 'opacity-0'
        }`}
      />
      
      {/* Popup */}
      <div 
        className={`relative bg-white rounded-2xl shadow-2xl max-w-md w-full mx-4 transform transition-all duration-300 ${
          isAnimating 
            ? 'scale-100 opacity-100 translate-y-0' 
            : 'scale-95 opacity-0 translate-y-4'
        }`}
      >
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 transition-colors duration-200 z-10"
        >
          <X className="h-5 w-5 text-gray-500" />
        </button>

        {/* Header with decorative elements */}
        <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 rounded-t-2xl overflow-hidden">
          <div className="absolute top-0 right-0 opacity-20">
            <Sparkles className="h-16 w-16" />
          </div>
          <div className="absolute bottom-0 left-0 opacity-10">
            <Star className="h-12 w-12" />
          </div>
          
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-2">
              <Star className="h-5 w-5 text-yellow-300" />
              <span className="text-sm font-semibold uppercase tracking-wide">
                Special Announcement
              </span>
            </div>
            <h2 className="text-xl font-bold">
              Admission Open for 2026-27
            </h2>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <p className="text-gray-700 mb-4 leading-relaxed">
            Admissions for the next academic year are now open. Secure your child's future with quality education.
          </p>
          
          {/* Highlighted discount section */}
          <div className="bg-gradient-to-r from-orange-50 to-red-50 border-l-4 border-orange-500 rounded-r-lg p-4 mb-4">
            <div className="flex items-center gap-2 mb-1">
              <span className="inline-block w-2 h-2 bg-orange-500 rounded-full animate-pulse"></span>
              <span className="text-orange-800 font-semibold text-sm uppercase tracking-wide">
                Limited Time Offer
              </span>
            </div>
            <p className="text-orange-800 font-bold text-lg">
              Special Discount for admission before 31st October 2025
            </p>
          </div>

          {/* Call to action */}
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-500">
              📅 Valid until: Oct 31, 2025
            </span>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200">
              Learn More
            </button>
          </div>
        </div>

        {/* Progress bar showing remaining time */}
        <div className="h-1 bg-gray-200 rounded-b-2xl overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-4000 ease-linear"
            style={{ 
              width: isAnimating ? '0%' : '100%',
              transition: isAnimating ? 'width 4s linear' : 'none'
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default AnnouncementPopup;