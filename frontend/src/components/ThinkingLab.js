import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FlaskConical, ChevronRight, Binary, ArrowRight } from 'lucide-react';
import Section from './Section';
import { cn } from '../lib/utils';

const LabCard = ({ item, index }) => {
  const CardWrapper = item.url ? motion.a : motion.div;
  const wrapperProps = item.url ? { href: item.url, target: "_blank", rel: "noopener noreferrer" } : {};

  return (
    <CardWrapper
      {...wrapperProps}
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="group block p-6 rounded-2xl border border-border bg-card/50 backdrop-blur-sm hover:border-primary/40 hover:bg-secondary/20 transition-all duration-300 cursor-pointer"
    >
      <div className="flex items-start justify-between">
        <div className="flex items-start space-x-4">
          <div className="p-2 border border-border rounded-lg bg-background mt-1 flex-shrink-0">
            <Binary size={18} className="text-primary/70 group-hover:text-primary transition-colors" />
          </div>
          <div>
            <h4 className="font-bold text-lg tracking-tight group-hover:text-primary transition-colors">{item.title}</h4>
            <div className="flex items-center space-x-2 mt-1 mb-4">
              <span className={cn(
                "text-[10px] font-mono px-1.5 py-0.5 rounded uppercase tracking-wider",
                item.status === 'In progress' ? "bg-amber-500/10 text-amber-500" : "bg-primary/10 text-primary/70"
              )}>
                {item.status}
              </span>
            </div>
            <p className="text-sm text-muted-foreground font-light leading-relaxed max-w-xl">
              {item.summary}
            </p>
          </div>
        </div>

        <div className="text-muted-foreground/60 mt-1 ml-4 flex-shrink-0 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-primary transition-all">
          <ArrowRight size={20} className="-rotate-45" />
        </div>
      </div>
    </CardWrapper>
  );
};

const ThinkingLab = ({ items, isTeaser = false }) => {
  const visibleItems = isTeaser ? items.slice(0, 3) : items;

  return (
    <Section id="lab" className="bg-background/50 relative border-t border-border/50 border-b border-border/10">
      <div className="flex flex-col lg:flex-row gap-16 lg:items-start">
        {/* Left header */}
        <div className="lg:w-1/3">
          <div className="inline-flex items-center space-x-2 text-primary/50 mb-6">
            <FlaskConical size={20} />
            <span className="font-mono text-xs uppercase tracking-[0.3em]">Thinking Lab</span>
          </div>
          <h2 className="text-4xl font-bold tracking-tight mb-6">
            Exploring <br /> the edge.
          </h2>
          <p className="text-muted-foreground font-light leading-relaxed max-w-xs">
            A live feed of products, concepts, prototypes, and architectural patterns I'm currently exploring.
          </p>
        </div>

        {/* Right content list */}
        <div className="lg:w-2/3">
          <div className="grid gap-4">
            <AnimatePresence mode="popLayout">
              {visibleItems.map((item, i) => (
                <LabCard key={item.id} item={item} index={i} />
              ))}
            </AnimatePresence>
          </div>

          {isTeaser && items.length > 3 && (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="mt-12 flex justify-center lg:justify-start"
            >
              <Link
                to="/lab"
                className="group flex items-center space-x-3 text-sm font-mono uppercase tracking-[0.3em] font-bold bg-primary text-primary-foreground transition-all duration-300 py-3 px-6 rounded-full hover:opacity-80"
              >
                <span>Full Archive</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          )}
        </div>
      </div>
    </Section>
  );
};

export default ThinkingLab;
