import React, { useEffect, useRef, useState } from 'react';
import { Code2, Braces, Wrench, Zap, Cpu } from 'lucide-react';

const TechStack = ({ data }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
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

  const categories = [
    {
      title: "Programming Languages",
      icon: Code2,
      items: data.programming,
      delay: 0,
      gradient: "from-cyan-500/20 to-blue-500/20"
    },
    {
      title: "AI & Machine Learning",
      icon: Cpu,
      items: data.ai_ml,
      delay: 100,
      gradient: "from-purple-500/20 to-pink-500/20"
    },
    {
      title: "Frameworks & Libraries",
      icon: Zap,
      items: data.frameworks_libraries,
      delay: 200,
      gradient: "from-green-500/20 to-emerald-500/20"
    },
    {
      title: "Integrations",
      icon: Braces,
      items: data.integrations,
      delay: 300,
      gradient: "from-orange-500/20 to-red-500/20"
    },
    {
      title: "Tools & Platforms",
      icon: Wrench,
      items: data.tools_platforms,
      delay: 400,
      gradient: "from-blue-500/20 to-indigo-500/20"
    }
  ];

  return (
    <section id="tech-stack" ref={sectionRef} className="py-32 bg-black relative overflow-hidden">
      {/* Premium background with grid pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_60%,transparent_100%)] opacity-20"></div>
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/3 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className={`max-w-7xl mx-auto transition-all duration-1000 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}>
          {/* Premium section header */}
          <div className="mb-16 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-full mb-6">
              <Code2 className="h-4 w-4 text-cyan-400" />
              <span className="text-sm font-medium text-cyan-400">Technology Arsenal</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
              Tech Stack
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Cutting-edge tools and frameworks powering innovation
            </p>
          </div>

          {/* Bento-style grid - responsive layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {categories.map((category, index) => {
              const Icon = category.icon;
              const isHovered = hoveredCard === index;
              
              return (
                <div
                  key={category.title}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                  className={`group relative rounded-2xl border border-white/5 bg-gradient-to-br from-white/[0.03] to-white/[0.01] backdrop-blur-xl p-6 transition-all duration-500 hover:scale-[1.02] ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ 
                    transitionDelay: `${category.delay}ms`,
                    boxShadow: isHovered ? '0 20px 60px -15px rgba(6, 182, 212, 0.3)' : 'none'
                  }}
                >
                  {/* Gradient glow on hover */}
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl`}></div>
                  
                  {/* Card content */}
                  <div className="relative z-10">
                    {/* Header with icon */}
                    <div className="flex items-center gap-3 mb-6">
                      <div className="relative">
                        <div className="absolute inset-0 bg-cyan-500/20 rounded-xl blur-md group-hover:blur-lg transition-all"></div>
                        <div className="relative p-2.5 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-xl">
                          <Icon className="h-5 w-5 text-cyan-400" />
                        </div>
                      </div>
                      <h3 className="text-base font-semibold text-white/90 tracking-tight">
                        {category.title}
                      </h3>
                    </div>

                    {/* Premium pill badges */}
                    <div className="flex flex-wrap gap-2">
                      {category.items.map((item, idx) => (
                        <span
                          key={idx}
                          className="inline-flex items-center px-3 py-1.5 text-xs font-medium rounded-full bg-white/5 text-gray-300 border border-white/10 hover:bg-white/10 hover:border-cyan-500/30 hover:text-cyan-400 transition-all duration-300 cursor-default backdrop-blur-sm"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Subtle border gradient on hover */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500/0 via-cyan-500/0 to-blue-500/0 group-hover:from-cyan-500/20 group-hover:via-transparent group-hover:to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
