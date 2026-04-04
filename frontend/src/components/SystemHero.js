import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import InteractiveNodes from './InteractiveNodes';
import { Button } from './ui/button';

const SystemHero = ({ data }) => {
  return (
    <section className="relative min-h-screen flex items-center pt-32 md:pt-40 overflow-hidden">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">

        
        {/* Left Content */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl"
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="flex items-center space-x-3 mb-4 text-primary font-mono text-[10px] uppercase tracking-[0.4em]"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_8px_rgba(var(--primary),0.8)]" />
            <span>Operator: Suriyakanth Raja</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-border bg-secondary/30 backdrop-blur-sm mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span className="text-xs font-medium tracking-tight text-muted-foreground/80">Available for 0→1 Projects</span>
          </motion.div>


          <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-8 text-balance">
            {data.headline}
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground font-light mb-10 leading-relaxed max-w-xl">
            {data.subtext}
          </p>

          <div className="flex flex-wrap gap-4">
            <Button 
              size="lg" 
              className="rounded-full px-8 h-14 text-base font-semibold group transition-all duration-300"
              onClick={() => document.getElementById('work').scrollIntoView({ behavior: 'smooth' })}
            >
              {data.cta}
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <a 
              href={data.resumeLink || "#"} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center h-14 px-8 text-base font-medium rounded-full border border-border hover:bg-secondary transition-colors"
            >
              View Logic
            </a>
          </div>
        </motion.div>

        {/* Right Visual */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="hidden lg:block relative"
        >
          <div className="absolute -inset-20 bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
          <InteractiveNodes />
        </motion.div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
};

export default SystemHero;
