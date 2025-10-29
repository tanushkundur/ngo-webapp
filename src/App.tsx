import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminLayout from "./components/AdminLayout";
import Index from "./pages/Index";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NGOLogin from "./pages/NGOLogin";
import NGORegister from "./pages/NGORegister";
import DonorLogin from "./pages/DonorLogin";
import DonorRegister from "./pages/DonorRegister";
import BrowseRequests from "./pages/BrowseRequests";
import NGODashboard from "./pages/NGODashboard";
import NGOProfile from "./pages/NGOProfile";
import CreateRequest from "./pages/CreateRequest";
import ManageRequests from "./pages/ManageRequests";
import DonorDashboard from "./pages/DonorDashboard";
import DonorProfile from "./pages/DonorProfile";
import DonorDonations from "./pages/DonorDonations";
import NotFound from "./pages/NotFound";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/ngo/login" element={<NGOLogin />} />
          <Route path="/ngo/register" element={<NGORegister />} />
          <Route path="/ngo/dashboard" element={<NGODashboard />} />
          <Route path="/ngo/profile" element={<NGOProfile />} />
          <Route path="/ngo/create-request" element={<CreateRequest />} />
          <Route path="/ngo/requests" element={<ManageRequests />} />
          <Route path="/donor/login" element={<DonorLogin />} />
          <Route path="/donor/register" element={<DonorRegister />} />
          <Route path="/donor/dashboard" element={<DonorDashboard />} />
          <Route path="/donor/profile" element={<DonorProfile />} />
          <Route path="/donor/donations" element={<DonorDonations />} />
          <Route path="/browse" element={<BrowseRequests />} />
          
          {/* Admin Routes - Public login */}
          <Route path="/admin/login" element={<AdminLogin />} />
          
          {/* Protected Admin Routes */}
          <Route path="/admin" element={<AdminLayout />}>
            <Route path="dashboard" element={<AdminDashboard />} />
          </Route>
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
