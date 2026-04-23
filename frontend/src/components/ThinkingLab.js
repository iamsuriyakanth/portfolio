import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FlaskConical, ArrowRight } from 'lucide-react';
import Section from './Section';
import { cn } from '../lib/utils';

const ITEM_H  = 68; // px — row height
const GAP     = 8;  // px — gap between rows
const SPEED   = 45; // px per second — consistent regardless of item count

const statusConfig = (status) => {
  if (status === 'In progress') return { bar: 'bg-amber-500',  badge: 'text-amber-500/75 bg-amber-500/10 border-amber-500/20' };
  if (status === 'Production')  return { bar: 'bg-primary/60', badge: 'text-primary/60  bg-primary/10  border-primary/20'  };
  return                               { bar: 'bg-border',     badge: 'text-muted-foreground/45 bg-secondary/20 border-border/50' };
};

const TickerRow = ({ item }) => {
  const { bar, badge } = statusConfig(item.status);
  const Inner = item.url ? 'a' : 'div';
  const linkProps = item.url ? { href: item.url, target: '_blank', rel: 'noopener noreferrer' } : {};

  return (
    <Inner
      {...linkProps}
      className="group flex items-center gap-4 border border-border/40 rounded-xl bg-card/40 hover:bg-secondary/20 hover:border-primary/25 transition-all duration-200 cursor-pointer px-5 overflow-hidden"
      style={{ height: ITEM_H, marginBottom: GAP }}
    >
      {/* left status bar */}
      <div className={cn('w-[3px] rounded-full flex-shrink-0 self-stretch my-4', bar)} />

      {/* title */}
      <span className="text-[15px] font-semibold tracking-tight flex-shrink-0 group-hover:text-primary transition-colors">
        {item.title}
      </span>

      {/* summary — fills space, truncates */}
      <span className="text-[13px] text-muted-foreground/60 font-light flex-1 min-w-0 truncate hidden sm:block">
        {item.summary}
      </span>

      {/* status badge */}
      <span className={cn(
        'flex-shrink-0 text-[10px] font-mono px-2.5 py-1 rounded-full uppercase tracking-[0.15em] border',
        badge,
      )}>
        {item.status}
      </span>

      {/* arrow */}
      {item.url && (
        <span className="flex-shrink-0 text-muted-foreground/20 group-hover:text-primary text-base transition-colors">↗</span>
      )}
    </Inner>
  );
};

const ThinkingLab = ({ items, isTeaser = false }) => {
  const n            = items.length;
  const loopH        = n * (ITEM_H + GAP);          // height of one full set
  const duration     = loopH / SPEED;               // seconds per loop
  const tickerHeight = Math.min(loopH, 4 * (ITEM_H + GAP)); // show ≤4 rows
  const doubled      = [...items, ...items];         // duplicate for seamless loop

  const [paused, setPaused] = useState(false);

  return (
    <Section id="lab" className="bg-background/50 relative border-t border-border/50 border-b border-border/10">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 lg:items-start">

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

        {/* Right — infinite ticker */}
        <div className="lg:w-2/3 flex flex-col gap-6">
          <div
            className="relative overflow-hidden"
            style={{ height: tickerHeight }}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            {/* top fade */}
            <div className="pointer-events-none absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-background/80 to-transparent z-10" />
            {/* bottom fade */}
            <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-background/80 to-transparent z-10" />

            <motion.div
              animate={{ y: paused ? undefined : [0, -loopH] }}
              transition={{
                duration,
                repeat: Infinity,
                ease: 'linear',
                repeatType: 'loop',
              }}
            >
              {doubled.map((item, i) => (
                <TickerRow key={`${item.id}-${i}`} item={item} />
              ))}
            </motion.div>
          </div>

          {isTeaser && (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="flex justify-center lg:justify-start"
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
