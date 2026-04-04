import React from 'react';
import PersonalHero from "../components/PersonalHero";
import ProfessionalSection from "../components/ProfessionalSection";
import ThinkingLab from "../components/ThinkingLab";
import AboutContact from "../components/AboutContact";
import { portfolioData } from "../mockData";

const Home = () => {
  return (
    <main className="relative z-10">
      <PersonalHero data={portfolioData.hero} />
      
      <ProfessionalSection 
        capabilities={portfolioData.capabilities} 
        projects={portfolioData.selectedWork} 
      />
      
      <ThinkingLab items={portfolioData.lab} isTeaser />
      
      <AboutContact 
        about={portfolioData.about} 
        contact={portfolioData.contact} 
      />
    </main>
  );
};

export default Home;
