import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from '../../assets/NewsHero.jpeg';
import "./NewsCarousel.css";

export const NewsCarousel = () => {
  return (
    <div className='d-flex flex-column justify-conetnt-center align-items-center'>
      <h2 className='text-center heading1'>OUR ACHIEVEMENTS</h2>
    <Carousel className='carousel'>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={ExampleCarouselImage}
          alt="First slide"
        />
        <Carousel.Caption>
          <h1>First slide label</h1>
          <h4>Nulla vitae elit libero, a pharetra augue mollis interdum.</h4>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={ExampleCarouselImage}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h1>Second slide label</h1>
          <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h4>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={ExampleCarouselImage}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h1>Third slide label</h1>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
};
