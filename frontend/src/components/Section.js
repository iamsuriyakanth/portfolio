import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../lib/utils';

const Section = ({ 
  children, 
  className, 
  id,
  fullWidth = false,
  noPadding = false 
}) => {
  return (
    <section 
      id={id}
      className={cn(
        "relative py-24 md:py-32 overflow-hidden",
        !noPadding && "px-6 md:px-12 lg:px-24",
        className
      )}
    >
      <div className={cn(
        "mx-auto",
        !fullWidth && "max-w-7xl"
      )}>
        {children}
      </div>
    </section>
  );
};

export default Section;
