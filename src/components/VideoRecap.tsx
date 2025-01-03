import React from 'react';
import { Play, Clock } from 'lucide-react';

interface VideoRecapProps {
  year: number;
  title: string;
  videoId?: string;
  description: string;
  status?: string;
}

export function VideoRecap({ year, title, videoId, description, status }: VideoRecapProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="relative">
        {videoId ? (
          <div className="aspect-w-16 aspect-h-9 h-[400px]">
            <iframe
              src={`https://www.youtube.com/embed/${videoId}`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
        ) : (
          <div className="aspect-w-16 aspect-h-9 bg-gray-100 flex items-center justify-center h-[400px]">
            <div className="text-center">
              <Clock className="w-12 h-12 text-gray-400 mx-auto mb-2" />
              <p className="text-gray-500">Coming Soon</p>
            </div>
          </div>
        )}
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
          <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium">
            {year}
          </span>
        </div>
        <p className="text-gray-500">{description}</p>
        {videoId && (
          <a
            href={`https://www.youtube.com/watch?v=${videoId}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center text-indigo-600 hover:text-indigo-500"
          >
            <Play className="w-4 h-4 mr-2" />
            Watch on YouTube
          </a>
        )}
      </div>
    </div>
  );
}