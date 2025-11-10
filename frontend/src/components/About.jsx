import React, { useEffect, useRef, useState } from 'react';
import { Settings, Zap, Lightbulb, Code2 } from 'lucide-react';

const About = ({ data }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
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

  const tabs = [
    {
      icon: Settings,
      label: "Engineering",
      subtitle: "Scalable Platforms"
    },
    {
      icon: Zap,
      label: "Execution",
      subtitle: "Tangible Outcomes"
    },
    {
      icon: Lightbulb,
      label: "Innovation",
      subtitle: "AI at Work"
    }
  ];

  return (
    <section 
      id="about" 
      ref={sectionRef} 
      className="py-24 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className={`max-w-6xl mx-auto transition-all duration-1000 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}>
          
          {/* Section header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-full mb-6">
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-cyan-400">Philosophy & Approach</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">About Me</h2>
          </div>

          {/* Equal height layout */}
          <div className="grid lg:grid-cols-2 gap-6">
            
            {/* Left card - Icon section */}
            <div className={`transition-all duration-1000 delay-100 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}>
              <div className="relative h-full">
                {/* Glowing background */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-purple-500/10 rounded-2xl blur-2xl"></div>
                
                {/* Card */}
                <div className="relative h-full bg-gradient-to-br from-white/[0.05] to-white/[0.02] backdrop-blur-xl rounded-2xl border border-white/10 p-8 flex flex-col items-center justify-center min-h-[400px]">
                  {/* Rotating ring */}
                  <div className="absolute inset-12 border-2 border-dashed border-cyan-500/20 rounded-full animate-spin-slow"></div>
                  
                  {/* Main icon */}
                  <div className="relative z-10 mb-8">
                    <div className="absolute inset-0 bg-cyan-500/20 rounded-xl blur-xl"></div>
                    <div className="relative p-5 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-xl border border-cyan-500/20">
                      <Code2 className="h-12 w-12 text-cyan-400" />
                    </div>
                  </div>
                  
                  {/* Floating particles */}
                  <div className="absolute top-8 right-8 w-2 h-2 bg-cyan-400 rounded-full animate-ping"></div>
                  <div className="absolute bottom-12 left-12 w-2 h-2 bg-purple-400 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
                  <div className="absolute top-16 left-8 w-1.5 h-1.5 bg-blue-400 rounded-full animate-ping" style={{ animationDelay: '2s' }}></div>
                  
                  {/* Badges */}
                  <div className="space-y-3 text-center z-10">
                    <div className="flex items-center justify-center gap-2 px-4 py-2 bg-cyan-500/10 rounded-full border border-cyan-500/20">
                      <Code2 className="h-4 w-4 text-cyan-400" />
                      <span className="text-sm font-medium text-cyan-400">AI Engineer</span>
                    </div>
                    <div className="flex items-center justify-center gap-2 px-4 py-2 bg-purple-500/10 rounded-full border border-purple-500/20">
                      <Zap className="h-4 w-4 text-purple-400" />
                      <span className="text-sm font-medium text-purple-400">Full Stack</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right card - Content section */}
            <div className={`transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}>
              <div className="relative h-full bg-gradient-to-br from-white/[0.05] to-white/[0.02] backdrop-blur-xl rounded-2xl border border-white/10 p-8 min-h-[400px]">
                {/* Top shine */}
                <div className="absolute top-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                
                {/* Content */}
                <p className="text-base text-gray-300 leading-relaxed mb-8">
                  {data.description}
                </p>

                {/* Tab sections */}
                <div className="space-y-4">
                  {tabs.map((tab, idx) => {
                    const Icon = tab.icon;
                    const isActive = activeTab === idx;
                    
                    return (
                      <div
                        key={idx}
                        onClick={() => setActiveTab(idx)}
                        className={`group cursor-pointer p-4 rounded-xl border transition-all duration-300 ${
                          isActive 
                            ? 'bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border-cyan-500/30' 
                            : 'bg-white/[0.02] border-white/5 hover:border-cyan-500/20'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div className={`p-2 rounded-lg transition-all ${
                            isActive 
                              ? 'bg-cyan-500/20 border border-cyan-500/30' 
                              : 'bg-white/5 border border-white/10 group-hover:bg-cyan-500/10'
                          }`}>
                            <Icon className={`h-4 w-4 transition-colors ${
                              isActive ? 'text-cyan-400' : 'text-gray-400 group-hover:text-cyan-400'
                            }`} />
                          </div>
                          <div>
                            <div className={`text-sm font-medium ${
                              isActive ? 'text-white' : 'text-gray-300 group-hover:text-white'
                            }`}>
                              {tab.label}
                            </div>
                            <div className="text-xs text-gray-500">{tab.subtitle}</div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom animations */}
      <style jsx>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default About;
