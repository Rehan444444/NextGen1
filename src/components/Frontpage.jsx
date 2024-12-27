import React, { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";  // Import react-spring for animations
import Services from './Services';

function FrontPage() {
  const images = [
    "./assets/custom-conveyor.jpg", 
    "./assets/installation-maintenance.jpg", 
    "./assets/images3.jpg",
    "./assets/automated-handling.jpg",
    "./assets/images4.jpg",
    "./assets/images5.jpg",
    "./assets/images6.jpg",
    "./assets/custom-conveyor.jpg", 
    "./assets/installation-maintenance.jpg", 
    "./assets/images3.jpg",
    "./assets/automated-handling.jpg",
    "./assets/images4.jpg",
    "./assets/images5.jpg",
    "./assets/images6.jpg"
  ];

  const imagesToShow = 3;
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length); // Loop through images
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length); // Loop backwards
  };

  useEffect(() => {
    const intervalId = setInterval(nextImage, 5000); // Change image every 5 seconds
    return () => clearInterval(intervalId); // Clear interval on component unmount
  }, []);

  // Animation for header text (fade-in and scale-up)
  const headerAnimation = useSpring({
    opacity: 1,
    transform: 'scale(1)',
    from: { opacity: 0, transform: 'scale(0.8)' },
    config: { tension: 250, friction: 30 }
  });

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header Section with rotating background image */}
      <header
        className="bg-cover bg-center text-black text-center py-40 transition-all duration-1000"
        style={{ backgroundImage: `url(${images[currentIndex]})` }}
      >
        <div className="flex flex-col items-center">
          <animated.h1 style={headerAnimation} className="text-4xl font-bold text-white">
            NextGen Conveyer Solution Pvt. Ltd
          </animated.h1>
          <animated.p style={headerAnimation} className="mt-2 text-lg text-white px-4 md:px-0">
            Transform Your Vision into Reality with NextGen Conveyer Solution
          </animated.p>
        </div>
      </header>

      {/* About Section */}
      <section className="py-16 px-6 md:px-20">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
          About Us
        </h2>
        <p className="text-gray-700 text-center md:text-lg leading-relaxed">
          At XYZ Mechanical Solutions, we specialize in providing high-quality
          mechanical components and services to meet industrial demands. With
          years of expertise, our team ensures excellence and precision in
          every project we undertake.
        </p>
      </section>

      {/* Image Slider Section */}
      <section className="py-16 px-6 md:px-20">
        <div className="relative">
          <div className="flex justify-between items-center">
            {images.slice(currentIndex, currentIndex + imagesToShow).map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`slider-image-${index}`}
                className="w-1/3 h-96 object-cover rounded-lg shadow-lg mx-2"
              />
            ))}
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevImage}
            className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white bg-black p-2 rounded-full opacity-75 hover:opacity-100"
          >
            &#10094;
          </button>
          <button
            onClick={nextImage}
            className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white bg-black p-2 rounded-full opacity-75 hover:opacity-100"
          >
            &#10095;
          </button>
        </div>
      </section>

      {/* Services Section */}
      <div><Services /></div>

      {/* Footer Section */}
      <footer className="bg-teal-700 text-white text-center py-16 px-6">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Contact Us</h2>
        <p className="text-lg mb-6">We would love to hear from you!</p>
        <p>Email: <a href="mailto:contact@xyzmechanical.com" className="underline">contact@xyzmechanical.com</a></p>
        <p className="mt-2">Phone: +1 234 567 890</p>
        <p className="mt-6">© 2024 XYZ Mechanical Solutions. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default FrontPage;
