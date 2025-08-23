import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Trending from "./pages/Trending";
import Settings from "./pages/Settings";
import Education from "./pages/Education";
import Health from "./pages/Health";
import Business from "./pages/Business";
import Personal from "./pages/Personal";
import Technology from "./pages/Technology";
import Finance from "./pages/Finance";
import Marketing from "./pages/Marketing";
import Leadership from "./pages/Leadership";
import Communication from "./pages/Communication";
import Creativity from "./pages/Creativity";
import Psychology from "./pages/Psychology";
import Relationships from "./pages/Relationships";
import Career from "./pages/Career";
import Fitness from "./pages/Fitness";
import Nutrition from "./pages/Nutrition";
import MentalHealth from "./pages/MentalHealth";
import Productivity from "./pages/Productivity";
import Innovation from "./pages/Innovation";
import Entrepreneurship from "./pages/Entrepreneurship";
import Login from "./pages/Login";
import Help from "./pages/Help";
import Contact from "./pages/Contact";
import About from "./pages/About";
import FAQ from "./pages/FAQ";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Blog from "./pages/Blog";
import Careers from "./pages/Careers";
import Team from "./pages/Team";
import Press from "./pages/Press";
import Research from "./pages/Research";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/trending" element={<Trending />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/education" element={<Education />} />
          <Route path="/health" element={<Health />} />
          <Route path="/business" element={<Business />} />
          <Route path="/personal" element={<Personal />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="/finance" element={<Finance />} />
          <Route path="/marketing" element={<Marketing />} />
          <Route path="/leadership" element={<Leadership />} />
          <Route path="/communication" element={<Communication />} />
          <Route path="/creativity" element={<Creativity />} />
          <Route path="/psychology" element={<Psychology />} />
          <Route path="/relationships" element={<Relationships />} />
          <Route path="/career" element={<Career />} />
          <Route path="/fitness" element={<Fitness />} />
          <Route path="/nutrition" element={<Nutrition />} />
          <Route path="/mental-health" element={<MentalHealth />} />
          <Route path="/productivity" element={<Productivity />} />
          <Route path="/innovation" element={<Innovation />} />
          <Route path="/entrepreneurship" element={<Entrepreneurship />} />
          <Route path="/login" element={<Login />} />
          <Route path="/help" element={<Help />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/team" element={<Team />} />
          <Route path="/press" element={<Press />} />
          <Route path="/research" element={<Research />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
