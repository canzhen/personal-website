import React, { useState } from 'react';
import { DynamicIcon } from './icons/DynamicIcon';
import { HobbyDetail } from './HobbyDetail';
import { MediaPlayer } from './MediaPlayer';
import { sportsGallery } from '../config/sportsGallery';
import { Play } from 'lucide-react';
import type { MediaItem } from '../types/media';

interface HobbyCardProps {
  hobby: {
    name: string;
    icon: string;
    description: string;
  };
}

export function HobbyCard({ hobby }: HobbyCardProps) {
  const [showDetail, setShowDetail] = useState(false);
  const media = sportsGallery[hobby.name.toLowerCase()];
  const previewMedia = media?.[0];
  
  return (
    <>
      <div 
        className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer transform transition-transform hover:scale-105"
        onClick={() => setShowDetail(true)}
      >
        <div className="relative aspect-w-16 aspect-h-9 bg-gray-100">
          <div className="relative w-full h-64">
            <MediaPlayer media={previewMedia} title={hobby.name} />
            {previewMedia?.type === 'video' && (
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
                <Play className="w-12 h-12 text-white" />
              </div>
            )}
          </div>
        </div>
        <div className="p-6">
          <div className="flex items-center mb-2">
            <DynamicIcon name={hobby.icon} />
            <h3 className="text-xl font-semibold text-gray-900 ml-2">{hobby.name}</h3>
          </div>
          <p className="text-gray-500 line-clamp-2">{hobby.description}</p>
        </div>
      </div>

      <HobbyDetail
        hobby={hobby}
        isOpen={showDetail}
        onClose={() => setShowDetail(false)}
      />
    </>
  );
}