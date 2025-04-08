import React, { useRef, useEffect, useState } from 'react';
import './DogCarossel.css';

import dog1 from '../assets/dog1.jpeg';
import dog2 from '../assets/dog2.jpeg';
import dog3 from '../assets/dog3.jpeg';
import dog4 from '../assets/dog4.jpeg';
import dog7 from '../assets/dog7.jpeg';
import dog8 from '../assets/dog8.jpeg';
import dog9 from '../assets/dog9.jpeg';

const DogCarousel = () => {
  const images = [dog1, dog2, dog3, dog4, dog7, dog8, dog9];
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
    <section className="dog-carousel" id="clientes">
      <h3 data-aos="fade-up">Nossos Clientes</h3>

      <div className="carousel-wrapper" data-aos="fade-up" data-aos-delay="150" data-aos-duration="1000">
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

      <div className="carousel-indicators" data-aos="fade-up" data-aos-delay="300">
        {images.map((_, idx) => (
          <span key={idx} className={`dot ${idx === activeIndex ? 'active' : ''}`} />
        ))}
      </div>
    </section>
  );
};

export default DogCarousel;
