import React, { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { motion } from 'framer-motion';
import { Sun, Moon, Monitor } from 'lucide-react';
import { cn } from '../lib/utils';

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const themes = [
    { id: 'light', icon: Sun },
    { id: 'dark', icon: Moon },
    { id: 'system', icon: Monitor },
  ];

  return (
    <div className="flex items-center">
      <div className="flex bg-secondary/80 backdrop-blur-md border border-border p-1 rounded-full shadow-sm">



        {themes.map((t) => {
          const Icon = t.icon;
          const isActive = theme === t.id;
          
          return (
            <button
              key={t.id}
              onClick={() => {
                if (!document.startViewTransition) { setTheme(t.id); return; }
                document.startViewTransition(() => setTheme(t.id));
              }}
              className={cn(
                "relative p-2 rounded-full transition-colors duration-200 focus:outline-none flex items-center justify-center",
                isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"
              )}
              aria-label={`Switch to ${t.id} theme`}
            >

              {isActive && (
                <motion.div
                  layoutId="activeTheme"
                  className="absolute inset-0 bg-background rounded-full shadow-sm border border-border"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <Icon size={18} className="relative z-10" />
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default ThemeSwitcher;
