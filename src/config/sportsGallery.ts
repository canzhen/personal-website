import type { HobbyMedia } from '../types/media';

const CDN_URL = 'https://pub-55805ded2e404a67ac0617e03517fec6.r2.dev';

export const sportsGallery: HobbyMedia = {
  bouldering: [
    {
      type: 'video',
      url: `${CDN_URL}/boudering1.mov`,
      mimeType: 'video/mp4',
      aspectRatio: 'landscape',
      poster: `${CDN_URL}/bouldering1.png`
    }
  ],
  badminton: [
    {
      type: 'video',
      url: `${CDN_URL}/badminton1.mov`,
      mimeType: 'video/mp4',
      aspectRatio: 'landscape',
      poster: `${CDN_URL}/badminton1.jpg`
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
      mimeType: 'video/mp4',
      aspectRatio: 'landscape',
      poster: `${CDN_URL}/cycling1.jpeg`
    },
    {
      type: 'video',
      url: `${CDN_URL}/cycling2.MOV`,
      mimeType: 'video/mp4',
      aspectRatio: 'landscape',
      poster: `${CDN_URL}/cycling1.jpeg`
    }
  ],
  singing: [
    {
      type: 'video',
      url: `${CDN_URL}/singing.mov`,
      mimeType: 'video/mp4',
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
      mimeType: 'video/mp4',
      aspectRatio: 'landscape',
      poster: `${CDN_URL}/snowboarding.jpeg`
    },
    {
      type: 'video',
      url: `${CDN_URL}/snowboarding2.mov`,
      mimeType: 'video/mp4',
      aspectRatio: 'landscape',
      poster: `${CDN_URL}/snowboarding.jpeg`
    }
  ]
};