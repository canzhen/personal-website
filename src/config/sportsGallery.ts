import type { HobbyMedia } from '../types/media';

const CDN_URL = 'https://pub-55805ded2e404a67ac0617e03517fec6.r2.dev';

export const sportsGallery: HobbyMedia = {
  bouldering: [
    {
      type: 'video',
      url: `${CDN_URL}/boudering1.mov`,
      mimeType: 'video/quicktime',
      aspectRatio: 'landscape',
      poster: `${CDN_URL}/bouldering1.png?auto=format&fit=crop&w=800&h=600`
    }
  ],
  badminton: [
    {
      type: 'video',
      url: `${CDN_URL}/badminton1.mov`,
      mimeType: 'video/quicktime',
      aspectRatio: 'landscape',
      poster: `${CDN_URL}/badminton1.jpg?auto=format&fit=crop&w=800&h=600`
    }
  ],
  "brazilian jiu jitsu": [
    {
      type: 'image',
      url: `${CDN_URL}/bjj1.JPG`,
      aspectRatio: 'landscape'
    },
    {
      type: 'image',
      url: `${CDN_URL}/bjj2.jpeg`,
      aspectRatio: 'portrait'
    }
  ],
  cycling: [
    {
      type: 'video',
      url: `${CDN_URL}/cyling1.MOV`,
      mimeType: 'video/quicktime',
      aspectRatio: 'landscape',
      poster: `${CDN_URL}/cycling1.jpeg?auto=format&fit=crop&w=800&h=600`
    },
    {
      type: 'video',
      url: `${CDN_URL}/cycling2.MOV`,
      mimeType: 'video/quicktime',
      aspectRatio: 'landscape',
      poster: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=800&h=600'
    }
  ],
  singing: [
    {
      type: 'video',
      url: `${CDN_URL}/singing.mov`,
      mimeType: 'video/quicktime',
      aspectRatio: 'landscape',
      poster: `${CDN_URL}/singing.png`
    }
  ],
  hiking: [
    {
      type: 'image',
      url: `${CDN_URL}/hiking.jpeg`,
      aspectRatio: 'landscape'
    }
  ],
  snowboarding: [
    {
      type: 'video',
      url: `${CDN_URL}/snowboarding1.mov`,
      mimeType: 'video/quicktime',
      aspectRatio: 'landscape',
      poster: 'https://images.unsplash.com/photo-1478700485868-972b69dc3fc4?auto=format&fit=crop&w=800&h=600'
    },
    {
      type: 'video',
      url: `${CDN_URL}/snowboarding2.mov`,
      mimeType: 'video/quicktime',
      aspectRatio: 'landscape',
      poster: 'https://images.unsplash.com/photo-1478700485868-972b69dc3fc4?auto=format&fit=crop&w=800&h=600'
    }
  ]
};