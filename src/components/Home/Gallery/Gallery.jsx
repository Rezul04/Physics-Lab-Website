import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './gallery.css';
import images from "../../../../data/gallery.json"

const Gallery = () => {
  // const images = [
  //   {
  //     label: "Description 1",
  //     url: "https://images.pexels.com/photos/2167039/pexels-photo-2167039.jpeg",
  //   },
  //   {
  //     label: "Description 2",
  //     url: "https://images.pexels.com/photos/15076765/pexels-photo-15076765/free-photo-of-white-chinned-sapphire-perched-on-a-branch.jpeg",
  //   },
  //   {
  //     label: "Description 3",
  //     url: "https://images.pexels.com/photos/10360957/pexels-photo-10360957.jpeg",
  //   },
  //   {
  //     label: "Description 4",
  //     url: "https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg",
  //   },
  //   {
  //     label: "Description 5",
  //     url: "https://images.pexels.com/photos/355465/pexels-photo-355465.jpeg",
  //   },
  //   {
  //     label: "Description 6",
  //     url: "https://images.pexels.com/photos/1103970/pexels-photo-1103970.jpeg",
  //   },
  // ];

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3, // Show 3 images at once
      slidesToSlide: 3 // Slide 3 at a time
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1
    }
  };

  return (
    <div className="gallery-container">
      <h2 className="gallery-heading">Our Gallery</h2>
      <Carousel
        swipeable={true}
        draggable={true}
        showDots={false}
        responsive={responsive}
        ssr={true}
        infinite={true}
        autoPlay={false}
        keyBoardControl={true}
        customTransition="all .5s"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >

        {images.gallery.map((img, index) => (
          <div className="gallery-item" key={index}>
            <img src={img.images[0]} alt={`slide-${index}`} className="gallery-image" />
            {/* <p className="gallery-content">{img.desc}</p> */}
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Gallery;
