import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import "./App.css";
import { Toaster } from "./components/ui/toaster";
import Home from "./pages/Home";
import LabPage from "./pages/LabPage";
import PoliticsPage from "./pages/PoliticsPage";
import Header from "./components/Header";

function App() {
  const location = useLocation();

  useEffect(() => {
    // Rely on next-themes for theme management. Removed forced dark mode.
  }, []);

  return (
    <div className="App selection:bg-primary selection:text-primary-foreground min-h-screen">
      <Header />
      
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/lab" element={<LabPage />} />
        <Route path="/politics" element={<PoliticsPage />} />
      </Routes>


      <Toaster />
      
      {/* Global Background Depth Elements (only on home for now if preferred, or globally) */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/2 rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] bg-primary/2 rounded-full blur-[100px]" />
      </div>

      {/* Noise Texture Global Overlay */}
      <div className="fixed inset-0 noise opacity-[.015] pointer-events-none z-[60]" />
    </div>
  );
}

export default App;
