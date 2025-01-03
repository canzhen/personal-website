import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';

interface ContactProps {
  t: (key: string) => string;
}

export function Contact({ t }: ContactProps) {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            {t('contact.title')}
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  {t('contact.form.name')}
                </label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  {t('contact.form.email')}
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  {t('contact.form.message')}
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                {t('contact.form.send')}
              </button>
            </form>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="space-y-8">
              <div className="flex items-start">
                <Mail className="flex-shrink-0 h-6 w-6 text-indigo-600" />
                <div className="ml-3">
                  <p className="text-lg font-medium text-gray-900">Email</p>
                  <p className="mt-1 text-gray-500">canzhenzhou@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start">
                <MapPin className="flex-shrink-0 h-6 w-6 text-indigo-600" />
                <div className="ml-3">
                  <p className="text-lg font-medium text-gray-900">Location</p>
                  <p className="mt-1 text-gray-500">Fremont, CA, USA</p>
                </div>
              </div>
              <div className="flex items-start">
                <Phone className="flex-shrink-0 h-6 w-6 text-indigo-600" />
                <div className="ml-3">
                  <p className="text-lg font-medium text-gray-900">Phone</p>
                  <p className="mt-1 text-gray-500">+1 (858)-997-7089</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}