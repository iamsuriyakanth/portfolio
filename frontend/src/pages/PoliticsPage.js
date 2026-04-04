import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, FileText } from 'lucide-react';

const PoliticsPage = () => {
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
        <section className="pt-24 pb-12 max-w-4xl mx-auto relative">
          <Link
            to="/"
            className="inline-flex items-center space-x-2 text-xs font-mono tracking-widest text-muted-foreground hover:text-primary transition-colors mb-16 group absolute -top-4 left-0"
          >
            <ChevronLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            <span>RETURN TO INDEX</span>
          </Link>


          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
            Political Stance.
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground font-light leading-relaxed mb-12">
            My foundational civic principles and personal stance.
          </p>
          <div className="h-[1px] bg-border/50 w-full" />
        </section>

        {/* Content Section */}
        <section className="max-w-4xl mx-auto pb-48">
          <article className="max-w-none text-muted-foreground font-light text-lg">
            <div className="pt-8 pb-12 max-w-2xl">
              <p className="text-xl md:text-2xl text-foreground font-medium mb-16 leading-relaxed">
                Social justice. Rational thought.<br/>
                Systems that serve everyone.
              </p>
              <blockquote className="pl-6 md:pl-10 border-l border-primary/30 relative">
                <span className="text-8xl text-primary/10 font-serif absolute -top-10 -left-6 md:-left-8 select-none">"</span>

                <p className="text-2xl md:text-3xl font-medium text-foreground mb-8 tracking-tight">Dear brother,</p>

                <div className="space-y-3 text-xl md:text-2xl leading-relaxed tracking-wide italic">
                  <p>Go to the people.</p>
                  <p>Live among them,</p>
                  <p>Learn from them,</p>
                  <p>Love them,</p>
                  <p>Serve them,</p>
                  <p>Plan with them,</p>
                  <p>Start with what they know,</p>
                  <p>Build on what they have.</p>
                </div>

                <footer className="mt-12 text-lg font-mono tracking-[0.2em] uppercase text-primary/80">
                  — C.N. Annadurai
                </footer>
              </blockquote>
            </div>
          </article>
        </section>
      </div>

      {/* Noise Texture Global Overlay */}
      <div className="fixed inset-0 noise opacity-5 pointer-events-none z-50" />
    </div>
  );
};

export default PoliticsPage;
