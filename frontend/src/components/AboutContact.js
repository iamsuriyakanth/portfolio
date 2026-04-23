import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, MapPin, ArrowUpRight, Github, Twitter, Instagram, Facebook } from 'lucide-react';
import { Link } from 'react-router-dom';
import Section from './Section';
import { Button } from './ui/button';

const AboutContact = ({ about, contact }) => {
  return (
    <Section id="about" className="bg-background">
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-14 items-start">
        {/* Left: Focused Bio */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div className="space-y-6">
            <h2 className="text-4xl font-bold tracking-tight">Systems over outputs.</h2>
            <p className="text-xl text-muted-foreground font-light leading-relaxed max-w-lg">
              {about.text}
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center space-x-3 text-sm text-muted-foreground">
              <MapPin size={16} />
              <span>{contact.location}</span>
            </div>
          </div>
        </motion.div>

        {/* Right: Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="p-8 rounded-3xl bg-secondary/30 border border-border flex flex-col items-center text-center group overflow-hidden relative"
        >
          <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

          <h3 className="text-3xl font-bold mb-6 tracking-tight">Ready to build something ambitious?</h3>
          <p className="text-muted-foreground mb-6 max-w-xs font-light">
            Building something real with AI or data? Let’s talk.
          </p>

          <div className="flex flex-col w-full space-y-4">
            <Button
              size="lg"
              className="h-14 rounded-full text-base group"
              onClick={() => window.location.href = `mailto:${contact.email}`}
            >
              Start Protocol <Mail className="ml-2 w-5 h-5 group-hover:scale-110 transition-transform" />
            </Button>

            <a
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center p-4 rounded-full border border-border hover:bg-secondary transition-colors text-sm font-medium"
            >
              Connect on LinkedIn <ArrowUpRight className="ml-2 w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Expansive Footer */}
      <div className="mt-20 pt-8 border-t border-border">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
          <div className="space-y-4">
            <h4 className="font-bold text-primary">Sitemap</h4>
            <div className="flex flex-col space-y-2">
              <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:text-primary transition-colors hover:translate-x-1 w-fit transform ease-in-out duration-300">Home</Link>
              <Link to="/lab" className="hover:text-primary transition-colors hover:translate-x-1 w-fit transform ease-in-out duration-300">Thinking Lab</Link>
              <Link to="/politics" className="hover:text-primary transition-colors hover:translate-x-1 w-fit transform ease-in-out duration-300">Politics & Stance</Link>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-bold text-primary">Socials</h4>
            <div className="flex flex-col space-y-2">
              <a href={contact.linkedin || "#"} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors flex items-center hover:translate-x-1 w-fit transform ease-in-out duration-300">
                <Linkedin size={12} className="mr-2" /> LinkedIn
              </a>
              <a href="https://github.com/iamsuriyakanth" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors flex items-center hover:translate-x-1 w-fit transform ease-in-out duration-300">
                <Github size={12} className="mr-2" /> GitHub
              </a>
              <a href="https://x.com/Suriyakanth2711" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors flex items-center hover:translate-x-1 w-fit transform ease-in-out duration-300">
                <Twitter size={12} className="mr-2" /> Twitter
              </a>
              <a href="https://www.instagram.com/iamsuriyakanth" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors flex items-center hover:translate-x-1 w-fit transform ease-in-out duration-300">
                <Instagram size={12} className="mr-2" /> Instagram
              </a>
              <a href="https://www.facebook.com/iamsuriyakanth" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors flex items-center hover:translate-x-1 w-fit transform ease-in-out duration-300">
                <Facebook size={12} className="mr-2" /> Facebook
              </a>
            </div>
          </div>

          <div className="space-y-4 flex flex-col md:items-end">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="hover:text-primary transition-colors flex items-center mb-8"
            >
              Back to Origin <ArrowUpRight className="ml-1 w-3 h-3 rotate-[-90deg]" />
            </button>
            <span className="opacity-50">© 2026 Suriyakanth.</span>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default AboutContact;
