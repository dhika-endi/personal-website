import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import PortfolioLayout from "./pages/portfolio/PortfolioLayout";
import PortfolioHome from "./pages/portfolio/PortfolioHome";
import PortfolioAbout from "./pages/portfolio/PortfolioAbout";
import PortfolioContact from "./pages/portfolio/PortfolioContact";
import PortfolioCaseStudies from "./pages/portfolio/PortfolioCaseStudies";
import DesignSystemCaseStudy from "./pages/portfolio/case-studies/DesignSystemCaseStudy";
import ComponentDocsCaseStudy from "./pages/portfolio/case-studies/ComponentDocsCaseStudy";
import TokenAirtableCaseStudy from "./pages/portfolio/case-studies/TokenAirtableCaseStudy";
import PortfolioPlayground from "./pages/portfolio/PortfolioPlayground";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<PortfolioLayout />}>
              <Route index element={<PortfolioHome />} />
              <Route path="about" element={<PortfolioAbout />} />
              <Route path="contact" element={<PortfolioContact />} />
              <Route path="case-studies" element={<PortfolioCaseStudies />} />
              <Route path="case-studies/design-system" element={<DesignSystemCaseStudy />} />
              <Route path="case-studies/component-docs" element={<ComponentDocsCaseStudy />} />
              <Route path="case-studies/token-airtable" element={<TokenAirtableCaseStudy />} />
              <Route path="playground" element={<PortfolioPlayground />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
