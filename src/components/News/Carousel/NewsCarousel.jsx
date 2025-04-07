import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from '../../../assets/NewsHero.jpeg';
import News2 from '../../../assets/News2.png';
import "./NewsCarousel.css";

const slides = [
  {
    image: ExampleCarouselImage,
    heading: "First slide label",
    subheading: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
  },
  {
    image: News2,
    heading: "Second slide label",
    subheading: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    image: ExampleCarouselImage,
    heading: "Third slide label",
    subheading: "Praesent commodo cursus magna, vel scelerisque nisl consectetur.",
  }
];

export const NewsCarousel = () => {
  return (
    <div className='d-flex flex-column justify-content-center align-items-center'>
      <h2 className='text-center heading1'>OUR ACHIEVEMENTS</h2>
      <Carousel className='carousel'>
        {slides.map((slide, index) => (
          <Carousel.Item key={index}>
            <div className="carouselImage">
              <div className="carouselImageInner">
                <img
                  className="d-block w-100"
                  src={slide.image}
                  alt={`Slide ${index + 1}`}
                />
              </div>
            </div>
            <Carousel.Caption>
              <div className="carouselImageHeading">
                <h1>{slide.heading}</h1>
                <h4>{slide.subheading}</h4>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};
