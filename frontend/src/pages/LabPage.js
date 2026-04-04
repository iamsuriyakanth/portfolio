import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronLeft, FlaskConical, Binary } from 'lucide-react';
import LabGridCard from '../components/LabGridCard';
import Section from '../components/Section';
import { portfolioData } from '../mockData';

const LabPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Background Systematic Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/2 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="pt-40 px-6 md:px-12 lg:px-24">
        {/* Page Header */}

        <section className="py-24 max-w-7xl mx-auto relative">
          <Link 
            to="/" 
            className="inline-flex items-center space-x-2 text-xs font-mono tracking-widest text-muted-foreground hover:text-primary transition-colors mb-16 group absolute -top-4 left-0"
          >
            <ChevronLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            <span>RETURN TO INDEX</span>
          </Link>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 mt-8">
            The Thinking Lab.
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground font-light leading-relaxed max-w-2xl mb-12">
            A comprehensive archive of technical research, conceptual prototypes, and architecture artifacts focusing on AI/ML exploration.
          </p>
          <div className="h-[1px] bg-border/50 w-full" />
        </section>

        {/* Labs Grid */}
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6 pb-48">
          {portfolioData.lab.map((item, index) => (
            <LabGridCard key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>

      {/* Noise Texture Global Overlay */}
      <div className="fixed inset-0 noise opacity-5 pointer-events-none z-50" />
    </div>
  );
};

export default LabPage;
