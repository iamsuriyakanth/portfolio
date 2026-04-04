import React from 'react';
import CapabilitiesGrid from './CapabilitiesGrid';
import SelectedWork from './SelectedWork';

const ProfessionalSection = ({ capabilities, projects }) => {
  return (
    <div className="bg-background relative border-y border-border/50">
      {/* Unified Background Grid for Professional Section */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
      
      <div className="pt-32 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto flex items-center space-x-4 text-primary/30 mb-20">
          <span className="font-mono text-[10px] uppercase tracking-[0.5em]">Professional Impact</span>
          <div className="h-[1px] bg-border/50 flex-grow" />
        </div>

        {/* Capabilities (Strategic Positioning) */}
        <CapabilitiesGrid capabilities={capabilities} isSubSection />

        {/* Case Studies (Evidence) */}
        <SelectedWork projects={projects} isSubSection />
      </div>
      
      <div className="pb-32" />
    </div>
  );
};

export default ProfessionalSection;
