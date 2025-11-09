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
        </div>
      </div>
    </footer>
  );
};

export default Footer;
