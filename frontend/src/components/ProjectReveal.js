import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Terminal, Box, ExternalLink } from 'lucide-react';
import { cn } from '../lib/utils';

const ProjectReveal = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative bg-card border border-border rounded-2xl overflow-hidden min-h-[380px] md:min-h-[400px] transition-all duration-500 hover:shadow-2xl hover:border-primary/20"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      {/* Background Subtle Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      
      {/* Noise Texture */}
      <div className="absolute inset-0 noise opacity-5 pointer-events-none" />

      {/* Decorative Default Background */}
      <div className="absolute top-0 right-0 w-40 h-40 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none transition-opacity duration-500 group-hover:opacity-0" />

      {/* Default State: Role & Company */}
      <div className={cn(
        "absolute inset-0 p-8 flex flex-col transition-all duration-500",
        isHovered ? "opacity-0 translate-y-10 scale-95" : "opacity-100 translate-y-0 scale-100"
      )}>
        {/* Top Header */}
        <div className="flex justify-between items-start w-full">
          <div className="flex items-center space-x-2 text-[10px] font-mono text-muted-foreground uppercase tracking-[0.2em] bg-secondary/50 px-3 py-1.5 rounded-full border border-border/50">
            <Terminal size={10} className="text-primary" />
            <span>{project.period}</span>
          </div>

          <div className="w-12 h-12 rounded-xl bg-background border border-border flex items-center justify-center overflow-hidden p-2 shadow-sm relative z-10">
             {project.logo ? (
                <img 
                  src={`${process.env.PUBLIC_URL}/${project.logo}`} 
                  alt={`${project.company} Logo`} 
                  className="w-full h-full object-contain"
                />
             ) : (
                <div className="flex w-full h-full items-center justify-center text-xs font-bold text-muted-foreground uppercase">
                   {project.company.substring(0, 2)}
                </div>
             )}
          </div>
        </div>
        
        {/* Text Details locked to bottom */}
        <div className="mt-auto">
          <h3 className="text-3xl lg:text-4xl font-bold tracking-tight mb-4 text-foreground leading-[1.1]">
            {project.role}
          </h3>
          <div className="space-y-1">
            <div className="text-lg text-foreground font-semibold">{project.company}</div>
            <div className="text-xs font-mono text-muted-foreground uppercase tracking-[0.1em]">{project.descriptor}</div>
          </div>
        </div>
      </div>

      {/* Hover Reveal State: Systems Built Deep Dive */}
      <div className={cn(
        "absolute inset-0 p-6 md:p-8 flex flex-col justify-between transition-all duration-500 bg-card/95 backdrop-blur-sm",
        isHovered ? "opacity-100 translate-y-0 scale-100 pointer-events-auto" : "opacity-0 -translate-y-10 scale-95 pointer-events-none"
      )}>
        <div className="space-y-4 overflow-y-auto pr-2 custom-scrollbar">
          <h4 className="text-[10px] font-bold uppercase tracking-widest text-primary/60 mb-2 flex items-center">
            <Box size={10} className="mr-2" /> Systems Architected
          </h4>
          
          <div className="space-y-3">
            {project.systems && project.systems.map((system, idx) => (
              <div key={idx} className="relative pl-3 border-l-2 border-primary/20 hover:border-primary transition-colors">
                <h5 className="text-sm font-bold text-foreground mb-1">{system.name}</h5>
                <p className="text-xs text-muted-foreground leading-snug">
                  {system.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Footer: Context & External Link */}
        <div className="pt-4 border-t border-border/50 mt-4 shrink-0 flex justify-between items-center">
          <div className="flex flex-col">
            <span className="text-sm font-bold tracking-tight text-foreground">{project.role}</span>
            <div className="text-[10px] text-muted-foreground flex items-center space-x-2 mt-0.5">
              <span>{project.company}</span>
              <span className="text-border">•</span>
              <span className="lowercase">{project.period}</span>
            </div>
          </div>
          {project.url && (
            <a 
              href={project.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 bg-primary/10 text-primary border border-primary/20 rounded-full hover:scale-110 hover:bg-primary hover:text-primary-foreground transition-all shrink-0"
              title={`Visit ${project.company}`}
            >
              <ExternalLink size={14} />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectReveal;
