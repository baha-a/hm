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
    <div className="relative">
      <div className="relative overflow-hidden carousel-image rounded-lg m-4 mt-0 opacity-60">
        {images.map((image, index) => (
          <div key={image} className={`ease-in-out duration-700`}  hidden={index !== currentIndex}>
            <img
              src={image}
              alt={`Image ${index + 1}`}
              className=' block w-full carousel-image'
            />
          </div>
        ))}
      </div>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToImage(index)}
            className={`w-6 h-1 rounded-full ${index === currentIndex ? 'bg-gray-100' : 'bg-gray-400'}`}
          />
        ))}
      </div>

      <button type="button" className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" onClick={prevImage}>
        <svg className="w-7 h-7 text-white dark:text-black rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M5 1 1 5l4 4" />
        </svg>
        <span className="sr-only">Previous</span>
      </button>

      <button type="button" className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" onClick={nextImage}>
        <svg className="w-7 h-7 text-white dark:text-black rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="m1 9 4-4-4-4" />
        </svg>
        <span className="sr-only">Next</span>
      </button>

    </div>
  );
};

export default Carousel;
