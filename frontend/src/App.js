import React, { useEffect } from "react";
import "./App.css";
import { Toaster } from "./components/ui/toaster";
import Hero from "./components/Hero";
import About from "./components/About";
import TechStack from "./components/TechStack";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { portfolioData } from "./mockData";

function App() {
  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <div className="App bg-black min-h-screen">
      <Hero data={portfolioData.hero} />
      <About data={portfolioData.about} />
      <TechStack data={portfolioData.techStack} />
      <Experience data={portfolioData.experience} />
      <Projects data={portfolioData.projects} />
      <Education data={portfolioData.education} />
      <Contact data={portfolioData.contact} />
      <Footer socialLinks={portfolioData.hero.socialLinks} />
      <Toaster />
    </div>
  );
}

export default App;
