import React, { useState } from 'react';
import type { MediaItem } from '../types/media';
import { ImageOff, Play } from 'lucide-react';

interface MediaPlayerProps {
  media?: MediaItem;
  title: string;
  showControls?: boolean;
}

export function MediaPlayer({ media, title, showControls = false }: MediaPlayerProps) {
  const [hasError, setHasError] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  if (!media || hasError) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-gray-100">
        <div className="text-center text-gray-400">
          <ImageOff className="w-8 h-8 mx-auto mb-2" />
          <p className="text-sm">Media not available</p>
        </div>
      </div>
    );
  }

  if (media.type === 'video') {
    return (
      <div className="relative w-full h-full">
        <video
          controls={showControls || isPlaying}
          className="w-full h-full object-cover"
          preload="metadata"
          playsInline
          poster={media.poster}
          onError={() => setHasError(true)}
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
        >
          <source src={media.url} type={media.mimeType} />
          Your browser does not support the video tag.
        </video>
        {!showControls && !isPlaying && (
          <div 
            className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 cursor-pointer"
            onClick={() => {
              const video = document.querySelector('video');
              if (video) {
                video.play();
              }
            }}
          >
            <Play className="w-12 h-12 text-white" />
          </div>
        )}
      </div>
    );
  }

  return (
    <img
      src={media.url}
      alt={title}
      onError={() => setHasError(true)}
      className={`w-full h-full object-cover ${
        media.aspectRatio === 'portrait' ? 'object-top' : 'object-center'
      }`}
    />
  );
}