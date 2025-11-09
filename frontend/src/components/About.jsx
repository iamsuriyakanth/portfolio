import React, { useEffect, useRef, useState } from 'react';
import { User } from 'lucide-react';
import { Card } from './ui/card';

const About = ({ data }) => {
  const [isVisible, setIsVisible] = useState(false);
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

  return (
    <section id="about" ref={sectionRef} className="py-24 bg-black relative">
      <div className="container mx-auto px-6">
        <div className={`max-w-5xl mx-auto transition-all duration-1000 transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {/* Section heading */}
          <div className="flex items-center gap-3 mb-12">
            <User className="h-8 w-8 text-cyan-400" />
            <h2 className="text-4xl md:text-5xl font-bold text-white">About Me</h2>
          </div>

          {/* Content card */}
          <Card className="bg-gray-900/50 border border-gray-800/50 p-8 md:p-12 backdrop-blur-sm hover:border-cyan-500/30 transition-all duration-500 hover:shadow-xl hover:shadow-cyan-500/10">
            <p className="text-lg text-gray-300 leading-relaxed">
              {data.description}
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
