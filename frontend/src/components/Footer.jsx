import React from 'react';
import { Github, Linkedin, Twitter, Facebook, Instagram } from 'lucide-react';

const Footer = ({ socialLinks }) => {
  const socialIcons = {
    github: Github,
    linkedin: Linkedin,
    twitter: Twitter,
    facebook: Facebook,
    instagram: Instagram
  };

  return (
    <footer className="bg-black border-t border-gray-900 py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Copyright */}
          <p className="text-gray-400 text-sm">
            © 2025 Suriyakanth R. Built with passion for AI and Innovation.
          </p>

          {/* Social links */}
          <div className="flex gap-6">
            {Object.entries(socialLinks).map(([platform, url]) => {
              const Icon = socialIcons[platform];
              return (
                <a
                  key={platform}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-cyan-400 transition-all duration-300 transform hover:scale-110"
                >
                  <Icon className="h-5 w-5" />
                </a>
              );
            })}
          </div>
        </div>

        {/* Made with Emergent badge */}
        <div className="mt-6 flex justify-center">
          <a
            href="https://emergent.sh"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-gray-900/50 border border-gray-800 rounded-full text-sm text-gray-400 hover:text-cyan-400 hover:border-cyan-500/30 transition-all duration-300"
          >
            <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></span>
            Made with Emergent
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
