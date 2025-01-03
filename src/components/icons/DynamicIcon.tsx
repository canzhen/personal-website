import React from 'react';
import * as Icons from 'lucide-react';

interface DynamicIconProps {
  name: string;
  className?: string;
}

export function DynamicIcon({ name, className = "w-5 h-5 text-indigo-600" }: DynamicIconProps) {
  const IconComponent = (Icons as any)[name];
  return IconComponent ? <IconComponent className={className} /> : null;
}