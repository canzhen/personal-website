import React from 'react';
import { sportsGallery } from '../config/sportsGallery';

interface SportGalleryProps {
  sport: string;
  images: string[];
}

export function SportGallery({ sport, images }: SportGalleryProps) {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {images.map((image, index) => (
          <div key={index} className="relative h-48 overflow-hidden rounded-lg">
            <img
              src={image}
              alt={`${sport} ${index + 1}`}
              className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
}