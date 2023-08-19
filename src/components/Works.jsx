import React, { useState, useEffect } from 'react';
import SliderData from '../data/SliderData';
import { Link } from 'react-router-dom';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import { FaDotCircle } from 'react-icons/fa';

function Works() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [autoplayPaused, setAutoplayPaused] = useState(false);
  const sliderLength = SliderData.length;
  const autoplayInterval = 5000;
  let autoplayTimer = null;

  useEffect(() => {
    if (!autoplayPaused) {
      startAutoplay();
    }

    return () => {
      stopAutoplay();
    };
  }, [currentSlide, autoplayPaused]);

  const startAutoplay = () => {
    autoplayTimer = setInterval(nextSlide, autoplayInterval);
  };

  const stopAutoplay = () => {
    clearInterval(autoplayTimer);
  };

  const prevSlide = () => {
    const newIndex = (currentSlide - 1 + sliderLength) % sliderLength;
    setCurrentSlide(newIndex);
  };

  const nextSlide = () => {
    const newIndex = (currentSlide + 1) % sliderLength;
    setCurrentSlide(newIndex);
  };

  const dotSlide = (slideIndex) => {
    setCurrentSlide(slideIndex);
    setAutoplayPaused(true);
  };

  return (
    <div  id="Works"  className='flex flex-col items-center justify-center py-8'>


      {/* Title */}
      <div className='my-4'>
        <h1 className='font-bold text-3xl text-[#f5c32c] text-center'>
          Our <span className='text-slate-800 dark:text-white'>Works</span>
        </h1>
      </div>

      {/* Image Slide */}
      <div className='w-full max-w-md mx-auto'>
        <Link to={SliderData[currentSlide].url}>
          <div className='bg-white shadow-xl rounded-lg p-5 border dark:border-none dark:bg-slate-800'>
            <img
              src={SliderData[currentSlide].urlImage}
              alt={SliderData[currentSlide].Title}
              className='rounded w-full'
            />
            <div className='p-2 text-justify'>
              <h2 className='font-bold text-xl text-[#f5c32c]'>
                {SliderData[currentSlide].Title}
              </h2>
              <p className='dark:text-white'>
                {SliderData[currentSlide].Description}
              </p>
            </div>
          </div>
        </Link>
      </div>


      {/* Arrows and Dots */}
      <div
        className='mt-4 flex items-center justify-center space-x-4'
        onMouseEnter={() => setAutoplayPaused(true)}
        onMouseLeave={() => setAutoplayPaused(false)} 
      >

        {/* Left Arrow */}
        <BsArrowLeft
          onClick={prevSlide}
          size={30}
          className='cursor-pointer text-white bg-[#f5c32c] rounded p-2'
        />

        {/* Dots */}
        <div className='flex space-x-2'>
          {SliderData.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              onClick={() => dotSlide(slideIndex)}
              className='text-sm cursor-pointer'
            >
              <FaDotCircle
                className={
                  slideIndex === currentSlide
                    ? 'text-[#f5c32c]'
                    : 'text-gray-400'
                }
              />
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <BsArrowRight
          onClick={nextSlide}
          size={30}
          className='cursor-pointer text-white bg-[#f5c32c] rounded p-2'
        />
      </div>

    </div>
  );
}

export default Works;

