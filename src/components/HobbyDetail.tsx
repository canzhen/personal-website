import React from 'react';
import { X } from 'lucide-react';
import { DynamicIcon } from './icons/DynamicIcon';
import { MediaPlayer } from './MediaPlayer';
import type { MediaItem } from '../types/media';
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

  const media = sportsGallery[hobby.name.toLowerCase()];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black bg-opacity-50">
      <div className="min-h-screen px-4 text-center">
        <div className="fixed inset-0" onClick={onClose}></div>
        
        <div className="inline-block w-full max-w-4xl my-8 text-left align-middle transition-all transform bg-white rounded-lg shadow-xl">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-500"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="p-6">
            <div className="flex items-center mb-6">
              <DynamicIcon name={hobby.icon} className="w-8 h-8 mr-3 text-indigo-600" />
              <h2 className="text-2xl font-bold text-gray-900">{hobby.name}</h2>
            </div>

            <p className="text-gray-600 mb-8">{hobby.description}</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {media?.map((item: MediaItem, index: number) => (
                <div 
                  key={index}
                  className={`relative rounded-lg overflow-hidden ${
                    item.aspectRatio === 'portrait' ? 'row-span-2' : ''
                  }`}
                >
                  <div className={`${
                    item.aspectRatio === 'portrait' ? 'h-[600px]' : 'h-[300px]'
                  }`}>
                    <MediaPlayer 
                      media={item} 
                      title={`${hobby.name} ${index + 1}`}
                      showControls={true}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}