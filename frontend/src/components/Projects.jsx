import React, { useEffect, useRef, useState } from 'react';
import { FolderGit2, ExternalLink, Github } from 'lucide-react';

const Projects = ({ data }) => {
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
    <section id="projects" ref={sectionRef} className="py-24 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
      {/* Premium background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_60%,transparent_100%)] opacity-20"></div>
        <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-[100px] animate-pulse"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className={`max-w-6xl mx-auto transition-all duration-1000 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}>
          {/* Premium section header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-full mb-6">
              <FolderGit2 className="h-4 w-4 text-cyan-400" />
              <span className="text-sm font-medium text-cyan-400">Featured Work</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Projects</h2>
          </div>

          {/* Projects grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {data.map((project, index) => {
              const isHovered = hoveredIndex === index;
              
              return (
                <div
                  key={project.id}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className={`group relative transition-all duration-700 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  {/* Glow effect */}
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl`}></div>

                  {/* Card */}
                  <div 
                    className="relative bg-gradient-to-br from-white/[0.05] to-white/[0.02] backdrop-blur-xl rounded-2xl border border-white/10 p-6 transition-all duration-500 group-hover:border-cyan-500/30 h-full flex flex-col"
                    style={{
                      boxShadow: isHovered ? '0 20px 60px -15px rgba(6, 182, 212, 0.3)' : 'none'
                    }}
                  >
                    {/* Top shine */}
                    <div className="absolute top-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

                    {/* Header */}
                    <div className="flex justify-between items-start mb-4">
                      <div className="relative">
                        <div className="absolute inset-0 bg-cyan-500/20 rounded-xl blur-md group-hover:blur-lg transition-all"></div>
                        <div className="relative p-3 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-xl group-hover:scale-110 transition-transform duration-300">
                          <FolderGit2 className="h-6 w-6 text-cyan-400" />
                        </div>
                      </div>
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-gray-400 hover:text-cyan-400 transition-all duration-300 hover:scale-110"
                      >
                        <ExternalLink className="h-5 w-5" />
                      </a>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-300 leading-relaxed mb-6 text-sm flex-grow">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="inline-flex items-center px-3 py-1 text-xs font-medium rounded-full bg-white/5 text-gray-300 border border-white/10 hover:bg-white/10 hover:border-cyan-500/30 hover:text-cyan-400 transition-all duration-300 cursor-default backdrop-blur-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
