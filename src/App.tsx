import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";

// Main Website Pages
import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";

// Service Detail Pages
import RoofingPage from "./pages/services/RoofingPage";
import CommercialPage from "./pages/services/CommercialPage";
import ResidentialPage from "./pages/services/ResidentialPage";
import ElectricalPage from "./pages/services/ElectricalPage";
import DrywallPage from "./pages/services/DrywallPage";
import PlumbingPage from "./pages/services/PlumbingPage";
import PaintingPage from "./pages/services/PaintingPage";

// Lead Gen Landing Page (independent)
import Index from "./pages/Index";
import ThankYou from "./pages/ThankYou";

// Admin
import NotFound from "./pages/NotFound";
import Login from "./pages/admin/Login";
import { ProtectedRoute } from "./components/admin/ProtectedRoute";
import { DashboardLayout } from "./components/admin/DashboardLayout";
import { LeadsTable } from "./components/admin/LeadsTable";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            {/* Main Website */}
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />

            {/* Service Detail Pages */}
            <Route path="/services/roofing" element={<RoofingPage />} />
            <Route path="/services/commercial" element={<CommercialPage />} />
            <Route path="/services/residential" element={<ResidentialPage />} />
            <Route path="/services/electrical" element={<ElectricalPage />} />
            <Route path="/services/drywall" element={<DrywallPage />} />
            <Route path="/services/plumbing" element={<PlumbingPage />} />
            <Route path="/services/painting" element={<PaintingPage />} />

            {/* Lead Gen Landing Page (independent) */}
            <Route path="/free-inspection" element={<Index />} />
            <Route path="/roofing" element={<Index />} />
            <Route path="/thank-you" element={<ThankYou />} />

            {/* Auth */}
            <Route path="/login" element={<Login />} />

            {/* Protected Admin Routes */}
            <Route path="/admin" element={
              <ProtectedRoute>
                <DashboardLayout>
                  <LeadsTable />
                </DashboardLayout>
              </ProtectedRoute>
            } />

            {/* 404 */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
