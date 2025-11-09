import React, { useEffect, useRef, useState } from 'react';
import { Code2, Braces, Wrench, Zap } from 'lucide-react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';

const TechStack = ({ data }) => {
  const [isVisible, setIsVisible] = useState(false);
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
      title: "Core Skills",
      icon: Braces,
      items: data.coreSkills,
      delay: 0
    },
    {
      title: "Languages",
      icon: Code2,
      items: data.languages,
      delay: 200
    },
    {
      title: "Tools",
      icon: Wrench,
      items: data.tools,
      delay: 400
    },
    {
      title: "Frameworks & Libraries",
      icon: Zap,
      items: data.frameworks,
      delay: 600
    }
  ];

  return (
    <section id="tech-stack" ref={sectionRef} className="py-24 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className={`max-w-6xl mx-auto transition-all duration-1000 transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {/* Section heading */}
          <div className="flex items-center gap-3 mb-12">
            <Code2 className="h-7 w-7 text-cyan-400" />
            <h2 className="text-3xl md:text-4xl font-bold text-white">Tech Stack</h2>
          </div>

          {/* Tech categories grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {categories.map((category, index) => {
              const Icon = category.icon;
              return (
                <Card
                  key={category.title}
                  className={`bg-gray-900/50 border border-gray-800/50 p-6 backdrop-blur-sm hover:border-cyan-500/30 transition-all duration-500 hover:shadow-xl hover:shadow-cyan-500/10 transform hover:-translate-y-1 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${category.delay}ms` }}
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-cyan-500/10 rounded-lg">
                      <Icon className="h-6 w-6 text-cyan-400" />
                    </div>
                    <h3 className="text-xl font-semibold text-white">{category.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.items.map((item, idx) => (
                      <Badge
                        key={idx}
                        className="bg-gray-800/50 text-gray-300 border border-gray-700/50 px-3 py-1.5 hover:bg-cyan-500/10 hover:text-cyan-400 hover:border-cyan-500/30 transition-all duration-300 cursor-default"
                      >
                        {item}
                      </Badge>
                    ))}
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
