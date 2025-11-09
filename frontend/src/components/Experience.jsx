import React, { useEffect, useRef, useState } from 'react';
import { Rocket } from 'lucide-react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';

const Experience = ({ data }) => {
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

  return (
    <section id="experience" ref={sectionRef} className="py-24 bg-black relative">
      <div className="container mx-auto px-6">
        <div className={`max-w-6xl mx-auto transition-all duration-1000 transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {/* Section heading */}
          <div className="flex items-center gap-3 mb-16">
            <Rocket className="h-8 w-8 text-cyan-400" />
            <h2 className="text-4xl md:text-5xl font-bold text-white">Experience</h2>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-blue-500 to-transparent"></div>

            {/* Experience items */}
            <div className="space-y-12">
              {data.map((job, index) => (
                <div
                  key={job.id}
                  className={`relative pl-8 md:pl-20 transition-all duration-700 transform ${
                    isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-6 top-0 w-5 h-5 bg-cyan-400 rounded-full border-4 border-black shadow-lg shadow-cyan-400/50 animate-pulse"></div>

                  <Card className="bg-gray-900/50 border border-gray-800/50 p-6 md:p-8 backdrop-blur-sm hover:border-cyan-500/30 transition-all duration-500 hover:shadow-xl hover:shadow-cyan-500/10 transform hover:-translate-y-1">
                    {/* Period and badge */}
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <span className="text-sm text-gray-400">{job.period}</span>
                      {job.isCurrent && (
                        <Badge className="bg-green-500/20 text-green-400 border border-green-500/30 text-xs">
                          Current
                        </Badge>
                      )}
                    </div>

                    {/* Position */}
                    <h3 className="text-2xl font-bold text-white mb-2">{job.position}</h3>

                    {/* Company and location */}
                    <p className="text-cyan-400 font-semibold mb-1">{job.company}</p>
                    <p className="text-gray-400 text-sm mb-4">{job.location}</p>

                    {/* Description */}
                    <p className="text-gray-300 leading-relaxed mb-6">{job.description}</p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {job.tags.map((tag, idx) => (
                        <Badge
                          key={idx}
                          className="bg-gray-800/50 text-gray-300 border border-gray-700/50 px-3 py-1 text-xs hover:bg-cyan-500/10 hover:text-cyan-400 hover:border-cyan-500/30 transition-all duration-300 cursor-default"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
