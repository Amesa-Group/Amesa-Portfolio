import React, { useState, useEffect } from "react";
import SliderData from "../data/SliderData";
import { Link } from "react-router-dom";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

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
    <div
      id="Works"
      className="w-full h-[90vh] flex flex-col items-center justify-center py-8 px-6"
    >
      {/* Title */}
      <div className="my-4">
        <h1 className="font-bold text-3xl text-[#f5c32c] text-center">
          Our <span className="text-slate-800 dark:text-white">Works</span>
        </h1>
      </div>

      {/* Image Slide */}
      <div className="flex items-center justify-center gap-8 w-full max-w-md mx-auto">
        <div className="w-20 h-10 bg-[#f5c32c] rounded-full shadow cursor-pointer hidden md:flex items-center justify-center text-lg text-white">
          <FaAngleLeft onClick={prevSlide} />
        </div>

        <Link to={SliderData[currentSlide].url}>
          <div className="bg-white shadow-xl rounded-lg overflow-hidden border dark:border-none dark:bg-slate-800 transition-all">
            <img
              src={SliderData[currentSlide].urlImage}
              alt={SliderData[currentSlide].Title}
              className=" w-full"
            />
            <div className="p-2 px-3 pb-5 text-justify">
              <h2 className="font-bold text-xl text-[#f5c32c]">
                {SliderData[currentSlide].Title}
              </h2>
              <p className="dark:text-white">
                {SliderData[currentSlide].Description}
              </p>
            </div>
          </div>
        </Link>

        <div className="w-20 h-10 bg-[#f5c32c] rounded-full shadow cursor-pointer hidden md:flex items-center justify-center text-lg text-white">
          <FaAngleRight onClick={prevSlide} />
        </div>
      </div>

      {/* Arrows and Dots */}
      <div
        className="w-full mt-4 flex items-center justify-center space-x-4"
        onMouseEnter={() => setAutoplayPaused(true)}
        onMouseLeave={() => setAutoplayPaused(false)}
      >
        {/* Left Arrow */}
        <FaAngleLeft
          onClick={prevSlide}
          size={30}
          className="flex md:hidden cursor-pointer text-white bg-[#f5c32c] rounded-full p-2"
        />

        {/* Dots */}
        <div className="flex items-center justify-center space-x-2">
          {SliderData.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              onClick={() => dotSlide(slideIndex)}
              className="text-sm cursor-pointer"
            >
              <div
                className={` w-3 h-3 rounded-full
                  ${
                    slideIndex === currentSlide ? "bg-[#f5c32c]" : "bg-slate-800"
                  }
                `}
              />
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <FaAngleRight
          onClick={nextSlide}
          size={30}
          className="flex md:hidden cursor-pointer text-white bg-[#f5c32c] rounded-full p-2"
        />
      </div>
    </div>
  );
}

export default Works;
