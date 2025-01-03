import React from 'react';
import { X } from 'lucide-react';
import { DynamicIcon } from './icons/DynamicIcon';
import { sportsGallery } from '../config/sportsGallery';

interface HobbyDetailProps {
  hobby: {
    name: string;
    icon: string;
    description: string;
  };
  isOpen: boolean;
  onClose: () => void;
}

export function HobbyDetail({ hobby, isOpen, onClose }: HobbyDetailProps) {
  if (!isOpen) return null;

  const images = (sportsGallery as any)[hobby.name.toLowerCase()];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black bg-opacity-50 flex items-center justify-center">
      <div className="relative bg-white rounded-lg max-w-3xl w-full m-4 p-6">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-500"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="flex items-center mb-6">
          <DynamicIcon name={hobby.icon} className="w-8 h-8 mr-3 text-indigo-600" />
          <h2 className="text-2xl font-bold text-gray-900">{hobby.name}</h2>
        </div>

        <p className="text-gray-600 mb-8">{hobby.description}</p>

        {images && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {images.map((image: string, index: number) => (
              <img
                key={index}
                src={image}
                alt={`${hobby.name} ${index + 1}`}
                className="rounded-lg w-full h-64 object-cover"
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}