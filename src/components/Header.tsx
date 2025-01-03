import React from 'react';
import { Menu, X, Github, Linkedin } from 'lucide-react';
import { personalInfo } from '../config/personal';
import { LanguageToggle } from './LanguageToggle';

interface HeaderProps {
  currentLang: string;
  onToggleLanguage: () => void;
}

export function Header({ currentLang, onToggleLanguage }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const navItems = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#lifestyle", label: "Lifestyle" },
    { href: "#recaps", label: "Recaps" },
    { href: "#contact", label: "Contact" }
  ];

  return (
    <header className="fixed w-full bg-white/80 backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <a href="#home" className="text-xl font-bold text-gray-900">{personalInfo.name}</a>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            {navItems.map(item => (
              <a 
                key={item.href} 
                href={item.href} 
                className="text-gray-600 hover:text-gray-900"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <LanguageToggle currentLang={currentLang} onToggle={onToggleLanguage} />
            <a href={personalInfo.social.github} className="text-gray-600 hover:text-gray-900">
              <Github className="w-5 h-5" />
            </a>
            <a href={personalInfo.social.linkedin} className="text-gray-600 hover:text-gray-900">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>

          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map(item => (
              <a 
                key={item.href}
                href={item.href} 
                className="block px-3 py-2 text-gray-600"
              >
                {item.label}
              </a>
            ))}
            <div className="px-3 py-2">
              <LanguageToggle currentLang={currentLang} onToggle={onToggleLanguage} />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}