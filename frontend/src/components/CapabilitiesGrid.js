import React from 'react';
import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';
import Section from './Section';
import { cn } from '../lib/utils';

const CapabilityCard = ({ capability, index }) => {
  const Icon = Icons[capability.icon] || Icons.Code;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group p-6 rounded-2xl bg-secondary/30 border border-border hover:bg-secondary/50 hover:border-primary/20 transition-all duration-300"
    >
      <div className="w-10 h-10 rounded-xl bg-background flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
        <Icon size={20} strokeWidth={1.5} />
      </div>

      <h3 className="text-lg font-bold mb-2 tracking-tight">
        {capability.title}
      </h3>

      <p className="text-sm text-muted-foreground font-light leading-relaxed mb-4">
        {capability.description}
      </p>

      {/* Expandable Detail on Hover */}
      <div className="h-0 group-hover:h-20 opacity-0 group-hover:opacity-100 transition-all duration-500 overflow-hidden">
        <p className="text-sm font-medium pt-4 border-t border-border">
          {capability.details}
        </p>
      </div>
    </motion.div>
  );
};

const CapabilitiesGrid = ({ capabilities, isSubSection = false }) => {
  const Container = isSubSection ? 'div' : Section;
  
  return (
    <Container id="capabilities" className={isSubSection ? "relative" : "bg-background relative overflow-hidden"}>
      <div className="relative z-10">
        <div className="mb-10 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Designing systems that <span className="text-primary italic">actually</span> execute.
          </h2>
          <p className="text-lg text-muted-foreground font-light max-w-xl mx-auto">
            Focusing on the interaction layering between core models and product outcomes.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {capabilities.map((c, i) => (
            <CapabilityCard key={c.id} capability={c} index={i} />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default CapabilitiesGrid;
