import React, { useEffect } from "react";
import { Routes, Route, useLocation, useNavigationType } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import "./App.css";
import { Toaster } from "./components/ui/toaster";
import Home from "./pages/Home";
import LabPage from "./pages/LabPage";
import PoliticsPage from "./pages/PoliticsPage";
import Header from "./components/Header";

function App() {
  const location = useLocation();
  const navType = useNavigationType();

  // Save scroll position for every route continuously
  useEffect(() => {
    const saveScroll = () => {
      sessionStorage.setItem(`scrollY:${location.pathname}`, window.scrollY);
    };
    window.addEventListener('scroll', saveScroll, { passive: true });
    return () => window.removeEventListener('scroll', saveScroll);
  }, [location.pathname]);

  // On route change: restore saved position (POP) or go to top (PUSH)
  useEffect(() => {
    if (navType === 'POP') {
      const saved = sessionStorage.getItem(`scrollY:${location.pathname}`);
      if (saved) {
        const y = parseInt(saved, 10);
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            window.scrollTo({ top: y, behavior: 'instant' });
          });
        });
      }
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }
  }, [location.pathname, navType]);

  return (
    <div className="App selection:bg-primary selection:text-primary-foreground min-h-screen">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lab" element={<LabPage />} />
        <Route path="/politics" element={<PoliticsPage />} />
      </Routes>

      <Toaster />

      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/2 rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] bg-primary/2 rounded-full blur-[100px]" />
      </div>

      <div className="fixed inset-0 noise opacity-[.015] pointer-events-none z-[60]" />
    </div>
  );
}

export default App;
