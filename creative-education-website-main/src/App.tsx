import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import AboutPage from "./pages/AboutPage";
import PrincipalDesk from "./pages/PrincipalDesk";
import GalleryPage from "./pages/GalleryPage";
import RulesPage from "./pages/RulesPage";
import AcademicsPage from "./pages/AcademicsPage";
import AdmissionPage from "./pages/AdmissionPage";
import FacilitiesPage from "./pages/FacilitiesPage";
import React from "react";

// Create a new QueryClient instance for React Query
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
    },
  },
});

const App = () => {
  console.log("App component rendering");

  return (
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <HelmetProvider>
          <Helmet>
            {/* Primary Meta Tags */}
            <title>St. Maria School - Agarpara | Excellence in Education</title>
            <meta
              name="description"
              content="St. Maria School in Agarpara offers high-quality education, shaping bright futures with dedicated teachers and modern facilities."
            />
            <meta
              name="keywords"
              content="St. Maria School, Agarpara, best school in Agarpara, quality education, CBSE school, ICSE school, admissions open"
            />
            <meta name="author" content="St. Maria School" />
            <meta name="robots" content="index, follow" />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta
              property="og:title"
              content="St. Maria School - Agarpara | Excellence in Education"
            />
            <meta
              property="og:description"
              content="Join St. Maria School in Agarpara for quality education and a bright future."
            />
            <meta property="og:image" content="https://yourdomain.com/og-image.jpg" />
            <meta property="og:url" content="https://yourdomain.com/" />

            {/* Twitter Meta Tags */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta
              name="twitter:title"
              content="St. Maria School - Agarpara | Excellence in Education"
            />
            <meta
              name="twitter:description"
              content="Join St. Maria School in Agarpara for quality education and a bright future."
            />
            <meta name="twitter:image" content="https://yourdomain.com/og-image.jpg" />

            {/* Canonical URL */}
            <link rel="canonical" href="https://yourdomain.com/" />
          </Helmet>

          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/academics" element={<AcademicsPage />} />
              <Route path="/principal-desk" element={<PrincipalDesk />} />
              <Route path="/gallery" element={<GalleryPage />} />
              <Route path="/rules" element={<RulesPage />} />
              <Route path="/admissions" element={<AdmissionPage />} />
              <Route path="/facilities" element={<FacilitiesPage />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
            <Toaster />
            <Sonner />
          </BrowserRouter>
        </HelmetProvider>
      </QueryClientProvider>
    </React.StrictMode>
  );
};

export default App;
