
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-school-cream/30 p-4">
      <div className="text-center max-w-md">
        <img src="/logo.png" alt="St. Maria School Logo" className="h-20 mx-auto mb-4" />
        <h1 className="text-5xl font-serif font-bold mb-4 text-school-maroon">404</h1>
        <p className="text-xl text-school-navy mb-6">
          Oops! The page you're looking for doesn't exist.
        </p>
        <p className="text-gray-600 mb-8">
          The page you are trying to access might have been removed, had its name changed, 
          or is temporarily unavailable.
        </p>
        <a 
          href="/" 
          className="btn-primary inline-flex items-center gap-2"
        >
          <ArrowLeft size={18} />
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
