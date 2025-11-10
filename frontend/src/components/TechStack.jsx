import React, { useEffect, useRef, useState } from 'react';
import { Code2, Cpu, Zap, Braces, Wrench } from 'lucide-react';

const TechStack = ({ data }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);
  const [rotation, setRotation] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Auto-rotate animation
  useEffect(() => {
    const interval = setInterval(() => {
      setRotation(prev => (prev + 0.2) % 360);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const categories = [
    {
      id: 'programming',
      title: "Languages",
      shortTitle: "Lang",
      icon: Code2,
      items: data.programming,
      color: "cyan",
      angle: 0
    },
    {
      id: 'ai_ml',
      title: "AI & ML",
      shortTitle: "AI",
      icon: Cpu,
      items: data.ai_ml,
      color: "purple",
      angle: 72
    },
    {
      id: 'frameworks',
      title: "Frameworks",
      shortTitle: "FW",
      icon: Zap,
      items: data.frameworks_libraries,
      color: "green",
      angle: 144
    },
    {
      id: 'integrations',
      title: "Integrations",
      shortTitle: "INT",
      icon: Braces,
      items: data.integrations,
      color: "orange",
      angle: 216
    },
    {
      id: 'tools',
      title: "Tools",
      shortTitle: "Tools",
      icon: Wrench,
      items: data.tools_platforms,
      color: "blue",
      angle: 288
    }
  ];

  const colorMap = {
    cyan: { text: 'text-cyan-400', bg: 'bg-cyan-500', border: 'border-cyan-500', glow: 'shadow-cyan-500' },
    purple: { text: 'text-purple-400', bg: 'bg-purple-500', border: 'border-purple-500', glow: 'shadow-purple-500' },
    green: { text: 'text-green-400', bg: 'bg-green-500', border: 'border-green-500', glow: 'shadow-green-500' },
    orange: { text: 'text-orange-400', bg: 'bg-orange-500', border: 'border-orange-500', glow: 'shadow-orange-500' },
    blue: { text: 'text-blue-400', bg: 'bg-blue-500', border: 'border-blue-500', glow: 'shadow-blue-500' }
  };

  const getOrbitPosition = (angle, radius) => {
    const radian = (angle * Math.PI) / 180;
    return {
      x: Math.cos(radian) * radius,
      y: Math.sin(radian) * radius
    };
  };

  return (
    <section id="tech-stack" ref={sectionRef} className="py-32 bg-black relative overflow-hidden min-h-screen flex items-center">
      {/* Premium background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_60%,transparent_100%)] opacity-20"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-500/5 rounded-full blur-[150px] animate-pulse"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className={`max-w-7xl mx-auto transition-all duration-1000 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}>
          
          {/* Circular Layout */}
          <div className="relative">
            
            {/* Central Hub */}
            <div className="flex flex-col items-center justify-center mb-16 lg:mb-0">
              <div className="relative w-full max-w-[900px] aspect-square mx-auto flex items-center justify-center">
                
                {/* Orbital rings */}
                <div className="absolute inset-0 flex items-center justify-center">
                  {[1, 2, 3].map((ring, idx) => (
                    <div
                      key={ring}
                      className="absolute rounded-full border border-white/5"
                      style={{
                        width: `${30 + idx * 25}%`,
                        height: `${30 + idx * 25}%`,
                        animation: `spin-slow ${30 + idx * 10}s linear infinite ${idx % 2 === 0 ? 'reverse' : ''}`
                      }}
                    />
                  ))}
                </div>

                {/* Center Title */}
                <div className="relative z-20 text-center">
                  <div className="mb-6">
                    <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-full backdrop-blur-xl">
                      <Code2 className="h-5 w-5 text-cyan-400" />
                      <span className="text-sm font-medium text-cyan-400">Technology Arsenal</span>
                    </div>
                  </div>
                  <h2 className="text-5xl md:text-6xl font-bold text-white mb-4 tracking-tight bg-gradient-to-r from-white via-cyan-200 to-blue-200 bg-clip-text text-transparent">
                    Tech Stack
                  </h2>
                  <p className="text-gray-400 text-base max-w-md mx-auto">
                    Click on any category to explore
                  </p>
                </div>

                {/* Orbiting Category Nodes */}
                {categories.map((category, idx) => {
                  const Icon = category.icon;
                  const colors = colorMap[category.color];
                  const isActive = activeCategory === category.id;
                  const radius = 42; // percentage
                  const position = getOrbitPosition(category.angle + rotation * 0.3, radius);

                  return (
                    <div
                      key={category.id}
                      onClick={() => setActiveCategory(isActive ? null : category.id)}
                      className={`absolute cursor-pointer transition-all duration-500 ${
                        isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
                      }`}
                      style={{
                        left: `calc(50% + ${position.x}%)`,
                        top: `calc(50% + ${position.y}%)`,
                        transform: 'translate(-50%, -50%)',
                        transitionDelay: `${idx * 100}ms`,
                        zIndex: isActive ? 30 : 10
                      }}
                    >
                      {/* Glow effect */}
                      <div className={`absolute inset-0 ${colors.bg}/20 rounded-2xl blur-2xl ${isActive ? 'animate-pulse' : ''}`}></div>

                      {/* Node */}
                      <div className={`relative group ${isActive ? 'scale-110' : 'hover:scale-110'} transition-transform duration-300`}>
                        <div className={`bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl border-2 ${isActive ? `${colors.border}/50` : 'border-white/10'} p-4 min-w-[120px]`}>
                          {/* Top shine */}
                          <div className="absolute top-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
                          
                          <div className="flex flex-col items-center gap-2">
                            <div className={`p-3 ${colors.bg}/20 rounded-xl ${isActive ? `${colors.border}/30 shadow-lg ${colors.glow}/50` : ''} border ${colors.border}/20 transition-all`}>
                              <Icon className={`h-6 w-6 ${colors.text}`} />
                            </div>
                            <div className="text-center">
                              <div className={`text-xs font-bold ${isActive ? colors.text : 'text-white'} transition-colors`}>
                                {category.shortTitle}
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Connection line to center */}
                        <div 
                          className={`absolute top-1/2 left-1/2 w-0.5 ${colors.bg}/20 origin-left transition-opacity ${isActive ? 'opacity-100' : 'opacity-0'}`}
                          style={{
                            height: '2px',
                            transform: `rotate(${-category.angle - rotation * 0.3}deg)`,
                            width: `${radius * 4.5}px`
                          }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Expanded Content */}
            {activeCategory && (
              <div className="mt-12 animate-fade-in">
                {categories
                  .filter(cat => cat.id === activeCategory)
                  .map(category => {
                    const colors = colorMap[category.color];
                    return (
                      <div key={category.id} className="max-w-5xl mx-auto">
                        <div className="relative group">
                          {/* Glow */}
                          <div className={`absolute inset-0 ${colors.bg}/10 rounded-2xl blur-2xl`}></div>
                          
                          {/* Content card */}
                          <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-8">
                            {/* Top shine */}
                            <div className="absolute top-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
                            
                            <h3 className={`text-2xl font-bold ${colors.text} mb-6`}>{category.title}</h3>
                            <div className="flex flex-wrap gap-3">
                              {category.items.map((item, idx) => (
                                <span
                                  key={idx}
                                  className={`inline-flex items-center px-4 py-2 text-sm font-medium rounded-full bg-white/5 text-gray-300 border border-white/10 hover:bg-white/10 hover:${colors.border}/30 hover:${colors.text} transition-all duration-300 cursor-default backdrop-blur-sm`}
                                  style={{ animationDelay: `${idx * 30}ms` }}
                                >
                                  {item}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Custom animations */}
      <style jsx>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }
      `}</style>
    </section>
  );
};

export default TechStack;
