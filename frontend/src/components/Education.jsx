import React, { useEffect, useRef, useState } from 'react';
import { GraduationCap, Award, Calendar, MapPin, BookOpen } from 'lucide-react';

const Education = ({ data }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
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
    <section id="education" ref={sectionRef} className="py-24 bg-black relative overflow-hidden">
      {/* Premium background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_60%,transparent_100%)] opacity-20"></div>
        <div className="absolute bottom-1/3 left-1/4 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-[100px] animate-pulse"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className={`max-w-6xl mx-auto transition-all duration-1000 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}>
          {/* Premium section header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-full mb-6">
              <GraduationCap className="h-4 w-4 text-purple-400" />
              <span className="text-sm font-medium text-purple-400">Academic Background</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Education</h2>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Gradient timeline line */}
            <div className="absolute left-0 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-pink-500 to-transparent"></div>

            {/* Education items */}
            <div className="space-y-8">
              {data.map((edu, index) => {
                const isHovered = hoveredIndex === index;
                
                return (
                  <div
                    key={edu.id}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    className={`relative pl-8 md:pl-20 transition-all duration-700 ${
                      isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                    }`}
                    style={{ transitionDelay: `${index * 150}ms` }}
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-0 md:left-6 top-6 w-5 h-5 bg-purple-400 rounded-full border-4 border-black shadow-lg shadow-purple-400/50 animate-pulse"></div>

                    {/* Premium card */}
                    <div 
                      className="relative group bg-gradient-to-br from-white/[0.05] to-white/[0.02] backdrop-blur-xl rounded-2xl border border-white/10 p-6 md:p-8 transition-all duration-500 hover:border-purple-500/30"
                      style={{
                        boxShadow: isHovered ? '0 20px 60px -15px rgba(168, 85, 247, 0.2)' : 'none'
                      }}
                    >
                      {/* Gradient glow */}
                      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl`}></div>
                      
                      {/* Top shine */}
                      <div className="absolute top-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

                      <div className="relative z-10">
                        {/* Header */}
                        <div className="flex items-center gap-2 text-gray-400 text-sm mb-3">
                          <Calendar className="h-4 w-4" />
                          <span>{edu.period}</span>
                        </div>

                        {/* Degree */}
                        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">{edu.degree}</h3>

                        {/* Institution info */}
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-4">
                          <div className="flex items-center gap-2 text-purple-400 font-medium">
                            <BookOpen className="h-4 w-4" />
                            <span>{edu.institution}</span>
                          </div>
                          <div className="flex items-center gap-2 text-gray-400 text-sm">
                            <MapPin className="h-4 w-4" />
                            <span>{edu.location}</span>
                          </div>
                        </div>

                        {/* Description */}
                        <p className="text-gray-300 leading-relaxed mb-6 text-sm">{edu.description}</p>

                        {/* Achievements */}
                        {edu.achievements && edu.achievements.length > 0 && (
                          <div className="bg-white/[0.02] rounded-xl border border-white/5 p-4">
                            <div className="flex items-center gap-2 mb-3">
                              <Award className="h-4 w-4 text-purple-400" />
                              <h4 className="text-sm font-semibold text-white">Achievements</h4>
                            </div>
                            <div className="space-y-2">
                              {edu.achievements.map((achievement, idx) => (
                                <div key={idx} className="flex items-start gap-2">
                                  <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                                  <p className="text-gray-300 text-sm">{achievement}</p>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
