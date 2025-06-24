import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./contexts/LanguageContext";
import Index from "./pages/Index";
import FirstAid from "./pages/FirstAid";
import Medicines from "./pages/Medicines";
import Equipment from "./pages/Equipment";
import Emergency from "./pages/Emergency";
import NotFound from "./pages/NotFound";
import VideoPage from "./pages/Video";
import BoneAid from "./pages/BoneAid";
import BoneAidVideo from "./pages/BoneAidVideo";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <LanguageProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/first-aid" element={<FirstAid />} />
            <Route path="/medicines" element={<Medicines />} />
            <Route path="/equipment" element={<Equipment />} />
            <Route path="/emergency" element={<Emergency />} />
            <Route path="/video" element={<VideoPage />} />
            <Route path="/bone-aid" element={<BoneAid />} />
            <Route path="/bone-aid-video" element={<BoneAidVideo />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </LanguageProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
