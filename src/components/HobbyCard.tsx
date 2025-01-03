import React, { useState } from 'react';
import { DynamicIcon } from './icons/DynamicIcon';
import { HobbyDetail } from './HobbyDetail';
import { sportsGallery } from '../config/sportsGallery';

interface HobbyCardProps {
  hobby: {
    name: string;
    icon: string;
    description: string;
  };
}

export function HobbyCard({ hobby }: HobbyCardProps) {
  const [showDetail, setShowDetail] = useState(false);
  const images = (sportsGallery as any)[hobby.name.toLowerCase()];
  
  return (
    <>
      <div 
        className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer transform transition-transform hover:scale-105"
        onClick={() => setShowDetail(true)}
      >
        <div className="aspect-w-16 aspect-h-9">
          <img
            src={images?.[0]}
            alt={hobby.name}
            className="w-full h-64 object-cover"
          />
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