import React, { useState, useEffect } from 'react';
import { X, Star, Sparkles } from 'lucide-react';

const AnnouncementPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  useEffect(() => {
    const showDelay = 500; // ms before showing
    const visibleDuration = 5000; // visible time in ms (4s + 1s extra)

    // Show popup after a short delay for better UX
    const showTimer = setTimeout(() => {
      setIsVisible(true);
      setIsAnimating(true);
    }, showDelay);

    // Hide popup after the visible duration
    const hideTimer = setTimeout(() => {
      setIsAnimating(false);
      // Wait for animation to complete before removing from DOM
      setTimeout(() => setIsVisible(false), 300);
    }, showDelay + visibleDuration);

    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  const handleClose = () => {
    setIsAnimating(false);
    setTimeout(() => setIsVisible(false), 300);
  };

  return (
    <>
      {isVisible && (
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
              Admissions Open for 2027–2028
            </h2>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <p className="text-gray-700 mb-6 leading-relaxed text-center text-base">
            Admissions for the 2027–2028 academic year are now open. A special discount is available for admissions completed before 14 December 2026. Secure your child's place today.
          </p>
          
          {/* Call to action section */}
          <div className="space-y-4">
            <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 rounded-lg font-semibold transition-all duration-200 shadow-md hover:shadow-lg transform hover:scale-105">
              Learn More
            </button>
            <p className="text-xs text-gray-500 text-center">
              📅 Discount valid until: 14 Dec, 2026
            </p>
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