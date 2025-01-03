import React from 'react';
import { lifestyleInfo } from '../config/lifestyle';
import { HobbyCard } from './HobbyCard';
import { DynamicIcon } from './icons/DynamicIcon';

interface LifeOutsideWorkProps {
  t: (key: string) => string;
}

export function LifeOutsideWork({ t }: LifeOutsideWorkProps) {
  return (
    <section id="lifestyle" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center mb-12">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            {t('lifestyle.title')}
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            {t('lifestyle.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {lifestyleInfo.sports.map((hobby) => (
            <HobbyCard key={hobby.name} hobby={hobby} />
          ))}
          
          {lifestyleInfo.funFacts.map((fact) => (
            <div key={fact.name} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img 
                src={fact.image} 
                alt={fact.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center mb-2">
                  <DynamicIcon name={fact.icon} />
                  <h3 className="text-xl font-semibold text-gray-900 ml-2">{fact.name}</h3>
                </div>
                <p className="text-gray-500">{fact.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}