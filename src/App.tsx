
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/hooks/useTheme";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import InfosPage from "./pages/InfosPage";
import QuizPage from "./pages/QuizPage";
import ApoioPage from "./pages/ApoioPage";
import ContatoPage from "./pages/ContatoPage";
import EmBreve from "./pages/EmBreve";
import LembretePage from "./pages/LembretePage";
import OpcoesPage from "./pages/OpcoesPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/infos" element={<InfosPage />} />
            <Route path="/quiz" element={<QuizPage />} />
            <Route path="/apoio" element={<ApoioPage />} />
            <Route path="/contato" element={<ContatoPage />} />
            <Route path="/locais" element={<EmBreve />} />
            <Route path="/lembrete" element={<LembretePage />} />
            <Route path="/opcoes" element={<OpcoesPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
