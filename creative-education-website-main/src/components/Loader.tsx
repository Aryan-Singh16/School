
import { useEffect, useState } from 'react';

const Loader = () => {
  console.log("Loader component rendering");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("Loader mounted");
    // Simulate loading time
    const timer = setTimeout(() => {
      console.log("Setting loader's loading state to false");
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (!loading) {
    console.log("Loader not showing because loading is false");
    return null;
  }

  return (
    <div className="fixed inset-0 bg-white z-50 flex flex-col items-center justify-center transition-opacity duration-500">
      <div className="mb-6">
        <img 
          src="/logo.png" 
          alt="St. Maria School Logo" 
          className="h-24 animate-pulse-subtle" 
          onError={(e) => {
            console.error("Failed to load logo image");
            e.currentTarget.src = '/placeholder.svg';
          }}
        />
      </div>
      <h2 className="text-2xl font-serif text-school-maroon mb-4">ST. Maria School</h2>
      <div className="flex space-x-2">
        <div className="h-3 w-3 rounded-full bg-school-maroon animate-bounce" style={{ animationDelay: '0ms' }}></div>
        <div className="h-3 w-3 rounded-full bg-school-gold animate-bounce" style={{ animationDelay: '150ms' }}></div>
        <div className="h-3 w-3 rounded-full bg-school-teal animate-bounce" style={{ animationDelay: '300ms' }}></div>
      </div>
    </div>
  );
};

export default Loader;

