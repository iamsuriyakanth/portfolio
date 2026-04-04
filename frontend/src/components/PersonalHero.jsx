import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from './ui/button';

const PersonalHero = ({ data }) => {
  return (
    <section className="relative min-h-[90vh] pt-32 pb-24 lg:flex lg:items-center md:pt-40 overflow-hidden bg-background">
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
            className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-border bg-secondary/30 backdrop-blur-sm mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span className="text-sm font-medium tracking-tight text-foreground/80">Shipping Impact, Not Just Code</span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-6 text-foreground">
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
              href={data.socialLinks?.linkedin || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center h-14 px-8 text-base font-medium rounded-full border border-border text-foreground hover:bg-secondary/50 transition-colors"
            >
              Let's Connect
            </a>
          </div>
        </motion.div>

        {/* Right Visual - Modern Innovative Display */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative flex justify-center items-center mt-12 lg:mt-0 w-full lg:-ml-8"
        >
          {/* Main Container */}
          <div className="relative w-[18rem] h-[24rem] sm:w-[22rem] sm:h-[28rem] md:w-[26rem] md:h-[32rem]">

            {/* Background Glow */}
            <div className="absolute inset-x-0 bottom-0 top-1/4 bg-primary/20 blur-[80px] rounded-full" />

            {/* Offset Decorative Wireframe Layer */}
            <motion.div
              className="absolute inset-0 border border-primary/30 rounded-3xl translate-x-4 translate-y-4"
              animate={{ rotate: [0, 1.5, 0], x: [16, 20, 16], y: [16, 20, 16] }}
              transition={{ duration: 6, ease: "easeInOut", repeat: Infinity }}
            />

            {/* Second solid backdrop layer */}
            <div className="absolute inset-0 bg-secondary/80 rounded-3xl -translate-x-3 -translate-y-3 shadow-md" />

            {/* The Actual Image Card */}
            <motion.div
              className="relative w-full h-full rounded-3xl overflow-hidden border border-border/50 shadow-2xl bg-secondary z-10"
              animate={{ y: [-4, 4, -4] }}
              transition={{ duration: 7, ease: "easeInOut", repeat: Infinity }}
            >
              <div className="w-full h-full">
                <img
                  src={`${process.env.PUBLIC_URL}/profile_natural.png`}
                  alt="Suriyakanth Raja"
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                />
              </div>
            </motion.div>

            {/* Floating UI Element 1: Top Right */}
            <motion.div
              className="absolute -right-2 md:-right-20 lg:-right-24 -top-6 md:top-16 z-20 bg-background/90 backdrop-blur-xl border border-border px-3 py-2 md:px-4 md:py-3 rounded-xl md:rounded-2xl shadow-xl flex items-center gap-2 md:gap-3 scale-90 md:scale-100 origin-bottom-left"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, ease: "easeInOut", repeat: Infinity, delay: 1 }}
            >
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary border border-primary/20">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
              </div>
              <div>
                <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-wider">Specialty</p>
                <p className="text-sm font-semibold text-foreground">AI & Scalability</p>
              </div>
            </motion.div>

            {/* Floating UI Element 2: Bottom Left */}
            <motion.div
              className="absolute -left-2 md:-left-20 lg:-left-24 -bottom-6 md:bottom-20 z-20 bg-background/90 backdrop-blur-xl border border-border px-3 py-2 md:px-4 md:py-3 rounded-xl md:rounded-2xl shadow-xl flex items-center gap-2 md:gap-3 scale-90 md:scale-100 origin-top-right"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 6, ease: "easeInOut", repeat: Infinity, delay: 0.5 }}
            >
              <div className="flex -space-x-3">
                <div className="w-8 h-8 rounded-full bg-[#3178C6] flex items-center justify-center border-2 border-background text-white text-[10px] font-bold shadow-sm">TS</div>
                <div className="w-8 h-8 rounded-full bg-[#61DAFB] flex items-center justify-center border-2 border-background text-black text-[10px] font-bold shadow-sm">Re</div>
                <div className="w-8 h-8 rounded-full bg-[#3776AB] flex items-center justify-center border-2 border-background text-white text-[10px] font-bold shadow-sm">Py</div>
              </div>
              <div className="ml-1">
                <p className="text-sm font-semibold text-foreground">Full Stack</p>
                <p className="text-[10px] text-muted-foreground font-medium">Engineering</p>
              </div>
            </motion.div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PersonalHero;
