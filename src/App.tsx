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
import CPR from './pages/CPR';
import WoundCare from './pages/WoundCare';
import Shock from './pages/Shock';
import Burns from './pages/Burns';
import Choking from './pages/Choking';
import DiagnosticTools from './pages/DiagnosticTools';
import SurgicalInstruments from './pages/SurgicalInstruments';
import EmergencyEquipment from './pages/EmergencyEquipment';
import TraumaAssessment from './pages/TraumaAssessment';
import MassCasualty from './pages/MassCasualty';
import CombatMedicine from './pages/CombatMedicine';

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
            <Route path="/cpr" element={<CPR />} />
            <Route path="/wound-care" element={<WoundCare />} />
            <Route path="/shock" element={<Shock />} />
            <Route path="/burns" element={<Burns />} />
            <Route path="/choking" element={<Choking />} />
            <Route path="/diagnostic-tools" element={<DiagnosticTools />} />
            <Route path="/surgical-instruments" element={<SurgicalInstruments />} />
            <Route path="/emergency-equipment" element={<EmergencyEquipment />} />
            <Route path="/trauma-assessment" element={<TraumaAssessment />} />
            <Route path="/mass-casualty" element={<MassCasualty />} />
            <Route path="/combat-medicine" element={<CombatMedicine />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </LanguageProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
