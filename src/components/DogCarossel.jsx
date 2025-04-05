import React, { useRef, useEffect, useState } from 'react';
import './DogCarossel.css';

import dog1 from '../assets/banho_tosa.jpg';
import dog2 from '../assets/banho_tosa.jpg';
import dog3 from '../assets/banho_tosa.jpg';
import dog4 from '../assets/banho_tosa.jpg';
import dog5 from '../assets/banho_tosa.jpg';

const DogCarousel = () => {
  const images = [dog1, dog2, dog3, dog4, dog5];
  const carouselRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = () => {
    const scrollLeft = carouselRef.current.scrollLeft;
    const width = carouselRef.current.offsetWidth;
    const index = Math.round(scrollLeft / (carouselRef.current.scrollWidth / images.length));
    setActiveIndex(index);
  };

  useEffect(() => {
    const carousel = carouselRef.current;
    carousel.addEventListener('scroll', handleScroll);
    return () => carousel.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollLeft = () => {
    carouselRef.current.scrollBy({ left: -carouselRef.current.offsetWidth * 0.9, behavior: 'smooth' });
  };

  const scrollRight = () => {
    carouselRef.current.scrollBy({ left: carouselRef.current.offsetWidth * 0.9, behavior: 'smooth' });
  };

  return (
    <section className="dog-carousel">
      <h3>Nossos Clientes 🐾</h3>

      <div className="carousel-wrapper">
        <button className="nav-btn left" onClick={scrollLeft}>‹</button>

        <div className="carousel-track" ref={carouselRef}>
          {images.map((img, idx) => (
            <div className="carousel-item" key={idx}>
              <img src={img} alt={`Cachorro ${idx + 1}`} />
            </div>
          ))}
        </div>

        <button className="nav-btn right" onClick={scrollRight}>›</button>
      </div>

      <div className="carousel-indicators">
        {images.map((_, idx) => (
          <span key={idx} className={`dot ${idx === activeIndex ? 'active' : ''}`} />
        ))}
      </div>

      <button className="btn-see-all">Ver galeria completa</button>
    </section>
  );
};

export default DogCarousel;
