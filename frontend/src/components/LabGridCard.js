import React from 'react';
import { motion } from 'framer-motion';
import { Binary, ArrowUpRight } from 'lucide-react';
import { cn } from '../lib/utils';

const LabGridCard = ({ item }) => {
  const CardWrapper = item.url ? motion.a : motion.div;
  const wrapperProps = item.url ? {
    href: item.url,
    target: "_blank",
    rel: "noopener noreferrer"
  } : {};

  return (
    <CardWrapper
      {...wrapperProps}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative p-8 rounded-3xl bg-secondary/30 border border-border hover:bg-secondary/50 hover:border-primary/20 transition-all duration-300 flex flex-col justify-between h-full cursor-pointer"
    >
      <div className="absolute inset-0 noise opacity-5 pointer-events-none" />
      
      <div>
        <div className="flex justify-between items-start mb-6">
          <div className="p-3 border border-border rounded-xl bg-background">
            <Binary size={24} className="text-primary/70" />
          </div>
          <span className={cn(
            "text-[10px] font-mono px-2 py-1 rounded-full uppercase tracking-wider",
            item.status === 'In progress' ? "bg-amber-500/10 text-amber-500" : "bg-primary/10 text-primary/70"
          )}>
            {item.status}
          </span>
        </div>

        <h3 className="text-2xl font-bold mb-4 tracking-tight group-hover:text-primary transition-colors">
          {item.title}
        </h3>
        
        <p className="text-muted-foreground font-light leading-relaxed text-sm line-clamp-4" title={item.summary}>
          {item.summary}
        </p>
      </div>

      <div className="mt-8 pt-6 border-t border-border/50 flex justify-end items-center text-xs font-mono text-muted-foreground/60">
        {item.url && <span className="mr-2 group-hover:text-primary transition-colors">View Project</span>}
        <ArrowUpRight size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform group-hover:text-primary" />
      </div>
    </CardWrapper>
  );
};

export default LabGridCard;
