import React from 'react';
import { Languages } from 'lucide-react';

interface LanguageToggleProps {
  currentLang: string;
  onToggle: () => void;
}

export function LanguageToggle({ currentLang, onToggle }: LanguageToggleProps) {
  return (
    <button
      onClick={onToggle}
      className="flex items-center space-x-1 px-3 py-2 rounded-md bg-gray-100 hover:bg-gray-200 transition-colors"
    >
      <Languages className="w-4 h-4" />
      <span className="text-sm font-medium">{currentLang.toUpperCase()}</span>
    </button>
  );
}