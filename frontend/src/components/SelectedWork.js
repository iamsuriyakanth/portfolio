import React from 'react';
import Section from './Section';
import ProjectReveal from './ProjectReveal';

const SelectedWork = ({ projects, isSubSection = false }) => {
  const Container = isSubSection ? 'div' : Section;

  return (
    <Container id="work" className={isSubSection ? "pt-32" : "bg-background"}>
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
        <div className="max-w-xl">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Professional Experience</h2>
          <p className="text-lg text-muted-foreground font-light leading-relaxed">
            Evidence of building from scratch, scaling intelligence, and delivering product outcomes.
          </p>
        </div>
        <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground/40 mb-2">
          Protocol: Deployment // Status: Verified
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((role) => (
          <ProjectReveal key={role.id} project={role} />
        ))}
      </div>
    </Container>
  );
};

export default SelectedWork;
