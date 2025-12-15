import React from 'react';

export interface ImageItem {
  src: string;
  alt: string;
  category?: string;
}

export interface FeatureItem {
  title: string;
  description: string;
  icon: React.ReactNode;
}