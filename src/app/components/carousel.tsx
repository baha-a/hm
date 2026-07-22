'use client';
import { useEffect, useState } from 'react';

const Carousel = ({ images }: {
  images: string[];
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, [currentIndex, images.length]);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToImage = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="group relative overflow-hidden rounded-2xl border border-gray-200/80 bg-gray-100 shadow-soft">
      <div className="relative carousel-image">
        {images.map((image, index) => (
          <img
            key={image}
            src={image}
            alt={`Dellbrück Haushaltsgeräte – Bild ${index + 1}`}
            className={`absolute inset-0 h-full w-full object-contain transition-opacity duration-700 ease-in-out ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
              }`}
          />
        ))}
      </div>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 z-20 flex -translate-x-1/2 gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToImage(index)}
            aria-label={`Zu Bild ${index + 1}`}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              index === currentIndex ? 'w-7 bg-gray-900' : 'w-2.5 bg-gray-900/30 hover:bg-gray-900/50'
            }`}
          />
        ))}
      </div>

      {/* Arrows */}
      <button
        type="button"
        onClick={prevImage}
        aria-label="Vorheriges Bild"
        className="absolute left-3 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 text-gray-800 opacity-0 shadow-soft backdrop-blur transition hover:bg-white group-hover:opacity-100 focus-visible:opacity-100"
      >
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m15 19-7-7 7-7" />
        </svg>
      </button>
      <button
        type="button"
        onClick={nextImage}
        aria-label="Nächstes Bild"
        className="absolute right-3 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 text-gray-800 opacity-0 shadow-soft backdrop-blur transition hover:bg-white group-hover:opacity-100 focus-visible:opacity-100"
      >
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m9 5 7 7-7 7" />
        </svg>
      </button>
    </div>
  );
};

export default Carousel;
