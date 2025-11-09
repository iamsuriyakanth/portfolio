import React, { useEffect, useRef, useState } from 'react';
import { GraduationCap, Award } from 'lucide-react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';

const Education = ({ data }) => {
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
    <section id="education" ref={sectionRef} className="py-24 bg-black relative">
      <div className="container mx-auto px-6">
        <div className={`max-w-6xl mx-auto transition-all duration-1000 transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {/* Section heading */}
          <div className="flex items-center gap-3 mb-12">
            <GraduationCap className="h-7 w-7 text-cyan-400" />
            <h2 className="text-3xl md:text-4xl font-bold text-white">Education</h2>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-blue-500 to-transparent"></div>

            {/* Education items */}
            <div className="space-y-12">
              {data.map((edu, index) => (
                <div
                  key={edu.id}
                  className={`relative pl-8 md:pl-20 transition-all duration-700 transform ${
                    isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-6 top-0 w-5 h-5 bg-cyan-400 rounded-full border-4 border-black shadow-lg shadow-cyan-400/50 animate-pulse"></div>

                  <Card className="bg-gray-900/50 border border-gray-800/50 p-6 md:p-8 backdrop-blur-sm hover:border-cyan-500/30 transition-all duration-500 hover:shadow-xl hover:shadow-cyan-500/10 transform hover:-translate-y-1">
                    {/* Period */}
                    <div className="mb-3">
                      <span className="text-sm text-gray-400">{edu.period}</span>
                    </div>

                    {/* Degree */}
                    <h3 className="text-2xl font-bold text-white mb-2">{edu.degree}</h3>

                    {/* Institution and location */}
                    <p className="text-cyan-400 font-semibold mb-1">{edu.institution}</p>
                    <p className="text-gray-400 text-sm mb-4">{edu.location}</p>

                    {/* Description */}
                    <p className="text-gray-300 leading-relaxed mb-6">{edu.description}</p>

                    {/* Achievements */}
                    {edu.achievements && edu.achievements.length > 0 && (
                      <div>
                        <div className="flex items-center gap-2 mb-3">
                          <Award className="h-4 w-4 text-cyan-400" />
                          <h4 className="text-sm font-semibold text-white">Achievements</h4>
                        </div>
                        <div className="space-y-2">
                          {edu.achievements.map((achievement, idx) => (
                            <div key={idx} className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                              <p className="text-gray-300 text-sm">{achievement}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
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

export default Education;
