import React, { useEffect, useRef, useState } from 'react';
import { Sparkles, Code2, Zap, ArrowRight } from 'lucide-react';

const About = ({ data }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef(null);
  const cardRef = useRef(null);

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

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePosition({ x, y });
  };

  return (
    <section 
      id="about" 
      ref={sectionRef} 
      className="py-32 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '2s' }}></div>
        
        {/* Floating geometric shapes */}
        <div className="absolute top-20 right-20 w-32 h-32 border border-cyan-500/10 rounded-lg rotate-12 animate-float"></div>
        <div className="absolute bottom-32 left-16 w-24 h-24 border border-purple-500/10 rounded-full animate-float-delayed"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className={`max-w-7xl mx-auto transition-all duration-1000 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}>
          
          {/* Asymmetric split layout */}
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            
            {/* Left side - Decorative icon section */}
            <div className={`lg:col-span-4 transition-all duration-1000 delay-100 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}>
              <div className="relative">
                {/* Glowing orb background */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-blue-500/20 to-purple-500/20 rounded-3xl blur-3xl"></div>
                
                {/* Icon container */}
                <div className="relative bg-gradient-to-br from-white/[0.05] to-white/[0.02] backdrop-blur-2xl rounded-3xl border border-white/10 p-12 aspect-square flex flex-col items-center justify-center">
                  {/* Rotating ring */}
                  <div className="absolute inset-8 border-2 border-dashed border-cyan-500/20 rounded-full animate-spin-slow"></div>
                  
                  {/* Main icon */}
                  <div className="relative z-10 mb-6">
                    <div className="absolute inset-0 bg-cyan-500/30 rounded-2xl blur-xl"></div>
                    <div className="relative p-6 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl border border-cyan-500/30">
                      <Sparkles className="h-16 w-16 text-cyan-400" />
                    </div>
                  </div>
                  
                  {/* Floating particles */}
                  <div className="absolute top-8 right-8 w-2 h-2 bg-cyan-400 rounded-full animate-ping"></div>
                  <div className="absolute bottom-12 left-12 w-2 h-2 bg-purple-400 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
                  <div className="absolute top-16 left-8 w-1.5 h-1.5 bg-blue-400 rounded-full animate-ping" style={{ animationDelay: '2s' }}></div>
                  
                  {/* Stats or badges */}
                  <div className="space-y-3 text-center">
                    <div className="flex items-center justify-center gap-2 text-cyan-400">
                      <Code2 className="h-5 w-5" />
                      <span className="text-sm font-medium">AI Engineer</span>
                    </div>
                    <div className="flex items-center justify-center gap-2 text-purple-400">
                      <Zap className="h-5 w-5" />
                      <span className="text-sm font-medium">Full Stack</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side - Content section */}
            <div className={`lg:col-span-8 transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}>
              {/* Premium badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-full mb-6 group hover:scale-105 transition-transform cursor-default">
                <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-cyan-400">Innovator & Problem Solver</span>
              </div>

              {/* Title with gradient */}
              <h2 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
                <span className="bg-gradient-to-r from-white via-cyan-200 to-blue-200 bg-clip-text text-transparent">
                  About Me
                </span>
              </h2>

              {/* Glassmorphic content card with interactive gradient */}
              <div 
                ref={cardRef}
                onMouseMove={handleMouseMove}
                className="relative group"
              >
                {/* Dynamic gradient that follows mouse */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"
                  style={{
                    background: `radial-gradient(600px circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(6, 182, 212, 0.1), transparent 40%)`
                  }}
                ></div>

                {/* Glass card */}
                <div className="relative bg-gradient-to-br from-white/[0.07] to-white/[0.02] backdrop-blur-2xl rounded-3xl border border-white/10 p-10 shadow-2xl group-hover:border-cyan-500/30 transition-all duration-500">
                  {/* Top shine effect */}
                  <div className="absolute top-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                  
                  {/* Content */}
                  <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8 font-light">
                    {data.description}
                  </p>

                  {/* Feature highlights */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-white/5">
                    <div className="flex items-center gap-3 group/item cursor-default">
                      <div className="p-2 bg-cyan-500/10 rounded-lg border border-cyan-500/20 group-hover/item:scale-110 transition-transform">
                        <Code2 className="h-4 w-4 text-cyan-400" />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-white">Research</div>
                        <div className="text-xs text-gray-500">AI Systems</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 group/item cursor-default">
                      <div className="p-2 bg-purple-500/10 rounded-lg border border-purple-500/20 group-hover/item:scale-110 transition-transform">
                        <Zap className="h-4 w-4 text-purple-400" />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-white">Engineering</div>
                        <div className="text-xs text-gray-500">Production Ready</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 group/item cursor-default">
                      <div className="p-2 bg-blue-500/10 rounded-lg border border-blue-500/20 group-hover/item:scale-110 transition-transform">
                        <ArrowRight className="h-4 w-4 text-blue-400" />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-white">Impact</div>
                        <div className="text-xs text-gray-500">Real Results</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Add custom animations to global CSS */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(12deg); }
          50% { transform: translateY(-20px) rotate(12deg); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default About;
