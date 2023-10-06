import './App.css'
import React, { useState } from 'react'
const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    )
  }

  return (
    <div className="carousel-container">
      <div className="image-container">
        <img
          onClick={prevImage}
          src="https://www.svgrepo.com/show/403757/left-arrow.svg"
          alt="Next"
          className="image"
        />
      </div>

      <div className="carousel">
        {images.map((image, index) => (
          <div
            key={index}
            className={`carousel-item ${
              index === currentIndex ? 'active' : ''
            }`}
          >
            <img src={image} alt={`Image ${index}`} className="image" />
          </div>
        ))}
      </div>
      <div className="image-container">
        <img
          onClick={nextImage}
          src="https://www.svgrepo.com/show/404064/right-arrow.svg"
          alt="Next"
          className="image"
        />
      </div>
    </div>
  )
}
export default Carousel
