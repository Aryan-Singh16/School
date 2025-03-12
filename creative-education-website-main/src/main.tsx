
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { TooltipProvider } from "@/components/ui/tooltip"

// Make sure we have a valid DOM element to render into
const rootElement = document.getElementById("root");
if (!rootElement) throw new Error('Failed to find the root element');

createRoot(rootElement).render(
  <TooltipProvider>
    <App />
  </TooltipProvider>
);
