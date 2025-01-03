export interface MediaItem {
  type: 'image' | 'video';
  url: string;
  aspectRatio?: 'landscape' | 'portrait';
  mimeType?: string;
  poster?: string;
}

export interface HobbyMedia {
  [key: string]: MediaItem[];
}