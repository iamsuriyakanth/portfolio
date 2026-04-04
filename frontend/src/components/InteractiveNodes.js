import React from 'react';
import { motion } from 'framer-motion';

const InteractiveNodes = () => {
  return (
    <div className="relative w-full h-full min-h-[400px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 noise z-0" />
      <svg width="100%" height="100%" viewBox="0 0 400 400" className="opacity-40">
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        
        {/* Connection Lines */}
        {[...Array(6)].map((_, i) => (
          <motion.line
            key={`line-${i}`}
            x1={100 + i * 40}
            y1={100}
            x2={300 - i * 40}
            y2={300}
            stroke="currentColor"
            strokeWidth="0.5"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ 
              pathLength: [0, 1, 0], 
              opacity: [0, 0.5, 0],
              x1: [100 + i * 40, 150 + i * 30, 100 + i * 40],
              y2: [300, 250, 300]
            }}
            transition={{ 
              duration: 5 + i, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
          />
        ))}

        {/* Nodes */}
        {[...Array(12)].map((_, i) => (
          <motion.circle
            key={`node-${i}`}
            cx={50 + Math.random() * 300}
            cy={50 + Math.random() * 300}
            r="2"
            fill="currentColor"
            filter="url(#glow)"
            animate={{
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1],
              transition: {
                duration: 2 + Math.random() * 3,
                repeat: Infinity,
                delay: Math.random() * 2
              }
            }}
          />
        ))}

        {/* Floating Ring */}
        <motion.circle
          cx="200"
          cy="200"
          r="100"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.2"
          strokeDasharray="5,10"
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        />
      </svg>
      
      {/* Central Focal Point */}
      <motion.div 
        className="absolute w-24 h-24 border border-primary/20 rounded-full"
        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 4, repeat: Infinity }}
      />
    </div>
  );
};

export default InteractiveNodes;
