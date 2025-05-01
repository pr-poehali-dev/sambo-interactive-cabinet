
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Progress from "./pages/Progress";
import Materials from "./pages/Materials";
import VideoTasks from "./pages/VideoTasks";
import Challenges from "./pages/Challenges";

import NavBar from "./components/NavBar";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen flex flex-col">
          <NavBar />
          <main className="flex-1 container mx-auto px-4 py-6 mb-16 sm:mb-0">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/progress" element={<Progress />} />
              <Route path="/materials" element={<Materials />} />
              <Route path="/video-tasks" element={<VideoTasks />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
