import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import StudentPortal from "./pages/StudentPortal";
import EmployeeServices from "./pages/EmployeeServices";
import Academics from "./pages/Academics";
import UGAdmissions from "./pages/admissions/UGAdmissions";
import PGAdmissions from "./pages/admissions/PGAdmissions";
import DiplomaAdmissions from "./pages/admissions/DiplomaAdmissions";
import AdmissionNotifications from "./pages/admissions/AdmissionNotifications";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/student-portal" element={<StudentPortal />} />
          <Route path="/employee-services" element={<EmployeeServices />} />
          <Route path="/academics" element={<Academics />} />
          <Route path="/admissions/ug" element={<UGAdmissions />} />
          <Route path="/admissions/pg" element={<PGAdmissions />} />
          <Route path="/admissions/diploma" element={<DiplomaAdmissions />} />
          <Route path="/admissions/notifications" element={<AdmissionNotifications />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
