import React, { useEffect, useRef, useState } from 'react';
import { Rocket, Calendar, MapPin, Building2 } from 'lucide-react';

const Experience = ({ data }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [expandedJobs, setExpandedJobs] = useState({});
  const sectionRef = useRef(null);

  const toggleExpanded = (jobId) => {
    setExpandedJobs(prev => ({
      ...prev,
      [jobId]: !prev[jobId]
    }));
  };

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
    <section id="experience" ref={sectionRef} className="py-24 bg-black relative overflow-hidden">
      {/* Premium background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_60%,transparent_100%)] opacity-20"></div>
        <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-[100px] animate-pulse"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className={`max-w-6xl mx-auto transition-all duration-1000 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}>
          {/* Premium section header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-full mb-6">
              <Rocket className="h-4 w-4 text-cyan-400" />
              <span className="text-sm font-medium text-cyan-400">Professional Journey</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Experience</h2>
          </div>

          {/* Timeline with premium cards */}
          <div className="relative">
            {/* Gradient timeline line */}
            <div className="absolute left-0 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-blue-500 to-transparent"></div>

            {/* Experience items */}
            <div className="space-y-8">
              {data.map((job, index) => {
                const isHovered = hoveredIndex === index;
                
                return (
                  <div
                    key={job.id}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    className={`relative pl-8 md:pl-20 transition-all duration-700 ${
                      isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                    }`}
                    style={{ transitionDelay: `${index * 150}ms` }}
                  >
                    {/* Timeline dot with glow */}
                    <div className="absolute left-0 md:left-6 top-6 w-5 h-5 bg-cyan-400 rounded-full border-4 border-black shadow-lg shadow-cyan-400/50 animate-pulse"></div>

                    {/* Premium card */}
                    <div 
                      className="relative group bg-gradient-to-br from-white/[0.05] to-white/[0.02] backdrop-blur-xl rounded-2xl border border-white/10 p-6 md:p-8 transition-all duration-500 hover:border-cyan-500/30"
                      style={{
                        boxShadow: isHovered ? '0 20px 60px -15px rgba(6, 182, 212, 0.2)' : 'none'
                      }}
                    >
                      {/* Gradient glow on hover */}
                      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl`}></div>
                      
                      {/* Top shine */}
                      <div className="absolute top-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

                      <div className="relative z-10">
                        {/* Header */}
                        <div className="flex flex-wrap items-center gap-3 mb-4">
                          <div className="flex items-center gap-2 text-gray-400 text-sm">
                            <Calendar className="h-4 w-4" />
                            <span>{job.period}</span>
                          </div>
                          {job.isCurrent && (
                            <span className="inline-flex items-center px-3 py-1 text-xs font-medium rounded-full bg-green-500/10 text-green-400 border border-green-500/20">
                              <span className="w-1.5 h-1.5 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                              Current
                            </span>
                          )}
                        </div>

                        {/* Position */}
                        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">{job.position}</h3>

                        {/* Company info */}
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-4">
                          <div className="flex items-center gap-2 text-cyan-400 font-medium">
                            <Building2 className="h-4 w-4" />
                            <span>{job.company}</span>
                          </div>
                          <div className="flex items-center gap-2 text-gray-400 text-sm">
                            <MapPin className="h-4 w-4" />
                            <span>{job.location}</span>
                          </div>
                        </div>

                        {/* Description */}
                        <p className="text-gray-300 leading-relaxed mb-6 text-sm">{job.description}</p>

                        {/* Tags - pill style with expand */}
                        <div className="flex flex-wrap gap-2">
                          {(expandedJobs[job.id] ? job.tags : job.tags.slice(0, 8)).map((tag, idx) => (
                            <span
                              key={idx}
                              className="inline-flex items-center px-3 py-1 text-xs font-medium rounded-full bg-white/5 text-gray-300 border border-white/10 hover:bg-white/10 hover:border-cyan-500/30 hover:text-cyan-400 transition-all duration-300 cursor-default backdrop-blur-sm"
                            >
                              {tag}
                            </span>
                          ))}
                          {job.tags.length > 8 && (
                            <button
                              onClick={() => toggleExpanded(job.id)}
                              className="inline-flex items-center px-3 py-1 text-xs font-medium rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 hover:bg-cyan-500/20 hover:border-cyan-500/30 transition-all duration-300 cursor-pointer"
                            >
                              {expandedJobs[job.id] ? 'Show less' : `+${job.tags.length - 8} more`}
                            </button>
                          )}
                        </div>
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

export default Experience;
