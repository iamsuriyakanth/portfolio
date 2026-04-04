import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import ThemeSwitcher from './ThemeSwitcher';
import { cn } from '../lib/utils';

const Header = () => {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const location = useLocation();
  const isLab = location.pathname === '/lab';

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-[100] transition-all duration-300 pointer-events-none",
      isScrolled ? "bg-background/80 backdrop-blur-xl border-b border-border/50 py-4" : "py-8"
    )}>
      <div className="container mx-auto px-6 md:px-12 h-full flex justify-between items-center w-full">
        {/* Name / Logo */}
        <div className="flex-1 flex items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="pointer-events-auto"
          >
            <Link to="/" className="group flex flex-col">
              <span className="text-sm font-bold tracking-[0.3em] uppercase">Suriyakanth Raja</span>
            </Link>
          </motion.div>
        </div>

        {/* Global Metadata / Active State (Centered) */}
        <div className="hidden md:flex flex-1 justify-center items-center">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex items-center space-x-4 bg-secondary/50 border border-border/50 backdrop-blur-md px-4 py-2 rounded-full pointer-events-auto"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-primary/60">
              Status: System Active
            </span>
          </motion.div>
        </div>

        {/* Right Actions */}
        <div className="flex-1 flex justify-end items-center pointer-events-auto">
          <ThemeSwitcher />
        </div>
      </div>

    </header>
  );
};


export default Header;
