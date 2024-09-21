import React, { useState, useEffect } from "react";
import "./Carousel.css"; // Import the CSS for styling

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    "https://www.molcomconcepts.com/wp-content/uploads/2016/02/ihs.png",
    "https://www.molcomconcepts.com/wp-content/uploads/2016/05/client-logo3.png",
    "https://www.molcomconcepts.com/wp-content/uploads/2016/05/client-logo2.png",
    "https://www.molcomconcepts.com/wp-content/uploads/2016/02/alcatel.png",
    "https://www.molcomconcepts.com/wp-content/uploads/2016/05/client-logo6.png",
    "https://www.molcomconcepts.com/wp-content/uploads/2016/02/url.jpg",
    "https://www.molcomconcepts.com/wp-content/uploads/2016/02/url-1.jpg",
    "https://www.molcomconcepts.com/wp-content/uploads/2016/05/client-logo5.png",
    "https://www.molcomconcepts.com/wp-content/uploads/2016/05/client-logo4.png",

    "https://www.molcomconcepts.com/wp-content/uploads/2016/05/client-logo1.png",
    "https://www.molcomconcepts.com/wp-content/uploads/2016/02/abuja.png",

    "https://www.molcomconcepts.com/wp-content/uploads/2016/02/micro.png",
    "https://www.molcomconcepts.com/wp-content/uploads/2016/02/phcn.png",
    "https://www.molcomconcepts.com/wp-content/uploads/2016/02/pnb.png",
  ];

  const itemsToShow = 7; // Number of images to show at once
  const imageWidth = 100; // Width of each image in pixels
  const imageMargin = 20; // Margin between images in pixels
  const carouselWidth = itemsToShow * (imageWidth + imageMargin); // Total width of the carousel in pixels

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(
        (prevIndex) => (prevIndex + 1) % (images.length - itemsToShow + 1)
      );
    }, 7000); // Change slide every 7 seconds

    return () => clearInterval(interval);
  }, [images.length, itemsToShow]);

  const nextSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex + 1) % (images.length - itemsToShow + 1)
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - itemsToShow : prevIndex - 1
    );
  };

  return (
    <section className="carousel-section">
      <div className="carousel-container">
        <button className="carousel-button prev" onClick={prevSlide}>
          &#10094;
        </button>
        <div
          className="carousel-wrapper"
          style={{ width: "90%"}}
        >
          <div
            className="carousel-images"
            style={{
              transform: `translateX(-${
                currentIndex * (imageWidth + imageMargin)
              }px)`,
            }}
          >
            {images.map((img, index) => (
              <div className="carousel-image" key={index}>
                <img src={img} alt={`Slide ${index}`} />
              </div>
            ))}
          </div>
        </div>
        <button className="carousel-button next" onClick={nextSlide}>
          &#10095;
        </button>
      </div>
    </section>
  );
};

export default Carousel;
