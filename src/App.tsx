import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import GettingStartedHome from "./pages/getting-started/GettingStartedHome";
import GettingStartedSetup from "./pages/getting-started/GettingStartedSetup";
import LearnTheBasics from "./pages/getting-started/LearnTheBasics";
import ColorPage from "./pages/foundations/ColorPage";
import TypographyPage from "./pages/foundations/TypographyPage";
import SpacingPage from "./pages/foundations/SpacingPage";
import RadiusPage from "./pages/foundations/RadiusPage";
import ElevationPage from "./pages/foundations/ElevationPage";
import TokenOverviewPage from "./pages/foundations/tokens/TokenOverviewPage";
import TokenBuilderPage from "./pages/foundations/tokens/TokenBuilderPage";
import TokenSpecificationsPage from "./pages/foundations/tokens/TokenSpecificationsPage";
import TokenUsagePage from "./pages/foundations/tokens/TokenUsagePage";
import TaxonGlossaryPage from "./pages/foundations/tokens/TaxonGlossaryPage";
import ButtonPage from "./pages/components/ButtonPage";
import CheckboxPage from "./pages/components/CheckboxPage";
import InputPage from "./pages/components/InputPage";
import RadioPage from "./pages/components/RadioPage";
import SelectPage from "./pages/components/SelectPage";
import SwitchPage from "./pages/components/SwitchPage";
import TextareaPage from "./pages/components/TextareaPage";
import PortfolioLayout from "./pages/portfolio/PortfolioLayout";
import PortfolioHome from "./pages/portfolio/PortfolioHome";
import PortfolioAbout from "./pages/portfolio/PortfolioAbout";
import PortfolioContact from "./pages/portfolio/PortfolioContact";
import PortfolioCaseStudies from "./pages/portfolio/PortfolioCaseStudies";
import DesignSystemCaseStudy from "./pages/portfolio/case-studies/DesignSystemCaseStudy";
import ComponentDocsCaseStudy from "./pages/portfolio/case-studies/ComponentDocsCaseStudy";
import TokenAirtableCaseStudy from "./pages/portfolio/case-studies/TokenAirtableCaseStudy";
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
            {/* Portfolio routes (main site) */}
            <Route path="/" element={<PortfolioLayout />}>
              <Route index element={<PortfolioHome />} />
              <Route path="about" element={<PortfolioAbout />} />
              <Route path="contact" element={<PortfolioContact />} />
              <Route path="case-studies" element={<PortfolioCaseStudies />} />
              <Route path="case-studies/design-system" element={<DesignSystemCaseStudy />} />
              <Route path="case-studies/component-docs" element={<ComponentDocsCaseStudy />} />
              <Route path="case-studies/token-airtable" element={<TokenAirtableCaseStudy />} />
            </Route>
            
            {/* Design System routes */}
            <Route path="/design-system" element={<GettingStartedHome />} />
            <Route path="/design-system/getting-started/setup" element={<GettingStartedSetup />} />
            <Route path="/design-system/getting-started/learn" element={<LearnTheBasics />} />
            <Route path="/design-system/foundations/color" element={<ColorPage />} />
            <Route path="/design-system/foundations/typography" element={<TypographyPage />} />
            <Route path="/design-system/foundations/spacing" element={<SpacingPage />} />
            <Route path="/design-system/foundations/radius" element={<RadiusPage />} />
            <Route path="/design-system/foundations/elevation" element={<ElevationPage />} />
            <Route path="/design-system/foundations/tokens/overview" element={<TokenOverviewPage />} />
            <Route path="/design-system/foundations/tokens/builder" element={<TokenBuilderPage />} />
            <Route path="/design-system/foundations/tokens/specifications" element={<TokenSpecificationsPage />} />
            <Route path="/design-system/foundations/tokens/usage" element={<TokenUsagePage />} />
            <Route path="/design-system/foundations/tokens/glossary" element={<TaxonGlossaryPage />} />
            <Route path="/design-system/components/button" element={<ButtonPage />} />
            <Route path="/design-system/components/checkbox" element={<CheckboxPage />} />
            <Route path="/design-system/components/input" element={<InputPage />} />
            <Route path="/design-system/components/radio" element={<RadioPage />} />
            <Route path="/design-system/components/select" element={<SelectPage />} />
            <Route path="/design-system/components/switch" element={<SwitchPage />} />
            <Route path="/design-system/components/textarea" element={<TextareaPage />} />
            
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
