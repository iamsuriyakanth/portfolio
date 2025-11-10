import React from 'react';
import { Github, Linkedin, Twitter, Facebook, Instagram } from 'lucide-react';

const Footer = ({ socialLinks }) => {
  // Custom Kaggle SVG icon component
  const KaggleIcon = () => (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M18.825 23.859c-.022.092-.117.141-.281.141h-3.139c-.187 0-.351-.082-.492-.248l-5.178-6.589-1.448 1.374v5.111c0 .235-.117.352-.351.352H5.505c-.236 0-.354-.117-.354-.352V.353c0-.233.118-.353.354-.353h2.431c.234 0 .351.12.351.353v14.343l6.203-6.272c.165-.165.33-.246.495-.246h3.239c.144 0 .236.06.285.18.046.149.034.266-.036.334l-6.555 6.344 6.836 8.507c.095.104.117.208.07.358"/>
    </svg>
  );

  const socialIcons = {
    github: Github,
    linkedin: Linkedin,
    twitter: Twitter,
    facebook: Facebook,
    instagram: Instagram,
    kaggle: KaggleIcon
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
