import React from 'react';
import { VideoRecap } from './VideoRecap';
import { videoRecaps } from '../config/videos';

interface YearlyRecapsProps {
  t: (key: string) => string;
}

export function YearlyRecaps({ t }: YearlyRecapsProps) {
  return (
    <section id="recaps" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            {t('recaps.title')}
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            {t('recaps.subtitle')}
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2">
          {videoRecaps.recaps.map((recap) => (
            <VideoRecap
              key={recap.year}
              year={recap.year}
              title={recap.title}
              videoId={recap.videoId}
              description={recap.description}
              status={recap.status}
            />
          ))}
        </div>
      </div>
    </section>
  );
}