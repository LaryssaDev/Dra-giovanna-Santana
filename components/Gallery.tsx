import React, { useState } from 'react';
import { X, ZoomIn } from 'lucide-react';
import { ImageItem } from '../types';

interface GalleryProps {
  images: ImageItem[];
  title: string;
  disclaimer?: string;
}

export const Gallery: React.FC<GalleryProps> = ({ images, title, disclaimer }) => {
  const [selectedImage, setSelectedImage] = useState<ImageItem | null>(null);

  return (
    <div className="w-full">
      <h3 className="text-2xl font-serif font-bold text-center mb-8 text-primary">{title}</h3>
      
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((img, idx) => (
          <div 
            key={idx} 
            className="group relative aspect-square overflow-hidden rounded-xl bg-slate-200 cursor-pointer shadow-sm hover:shadow-md transition-all"
            onClick={() => setSelectedImage(img)}
          >
            <img 
              src={img.src} 
              alt={img.alt} 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
              <ZoomIn className="text-white drop-shadow-md" size={32} />
            </div>
            {img.category && (
              <span className="absolute bottom-2 left-2 bg-white/90 text-primary text-[10px] font-bold px-2 py-1 rounded-md uppercase tracking-wider">
                {img.category}
              </span>
            )}
          </div>
        ))}
      </div>

      {disclaimer && (
        <p className="text-center text-xs text-slate-400 mt-6 italic border-t border-slate-200 pt-4 w-full max-w-md mx-auto">
          {disclaimer}
        </p>
      )}

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[60] bg-black/95 flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-4 right-4 text-white/70 hover:text-white p-2"
            onClick={() => setSelectedImage(null)}
          >
            <X size={40} />
          </button>
          
          <div 
            className="relative max-w-4xl w-full max-h-screen flex flex-col items-center"
            onClick={(e) => e.stopPropagation()} 
          >
            <img 
              src={selectedImage.src} 
              alt={selectedImage.alt} 
              className="max-h-[85vh] w-auto rounded-lg shadow-2xl object-contain"
            />
            <p className="text-white/90 mt-4 text-lg font-medium">{selectedImage.category || "Detalhes do resultado"}</p>
          </div>
        </div>
      )}
    </div>
  );
};