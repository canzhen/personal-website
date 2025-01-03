import React from 'react';
import { personalInfo } from '../config/personal';

interface AboutProps {
  t: (key: string) => string;
}

export function About({ t }: AboutProps) {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            {t('about.title')}
          </h2>
          <div className="mt-10 flex flex-col lg:flex-row items-center gap-10">
            <div className="lg:w-1/3">
              <img
                className="rounded-lg shadow-lg object-cover"
                src={personalInfo.about.image}
                alt="Profile"
              />
            </div>
            <div className="lg:w-2/3 space-y-4 text-gray-500 text-left">
              {[0, 1, 2].map((index) => (
                <p key={index}>{t(`about.description.${index}`)}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}