import React from 'react'
import './gallery.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";


const Gallery = () => {

    const carouselData = [
        {
            label: `Trimeru Tempest, a charismatic slime in "That Time I Got Reincarnated as a Slime," embodies
            friendship, wisdom, and power. From slime to sage, Rimuru's journey captivates with humor,
            heart, and growth`,
            alt: "image1",
            url: "https://images.pexels.com/photos/2167039/pexels-photo-2167039.jpeg"
        },
        {
            label: `Trimeru Tempest, a charismatic slime in "That Time I Got Reincarnated as a Slime," embodies
            friendship, wisdom, and power. From slime to sage, Rimuru's journey captivates with humor,
            heart, and growth`,
            alt: "image2",
            url: "https://images.pexels.com/photos/15076765/pexels-photo-15076765/free-photo-of-white-chinned-sapphire-perched-on-a-branch.jpeg"
        },
        {
            label: `Trimeru Tempest, a charismatic slime in "That Time I Got Reincarnated as a Slime," embodies
            friendship, wisdom, and power. From slime to sage, Rimuru's journey captivates with humor,
            heart, and growth`,
            alt: "image3",
            url: "https://images.pexels.com/photos/10360957/pexels-photo-10360957.jpeg"
        },
    ];

    const renderSlides = carouselData.map((image) => (
        <div key={image.alt}>
            <img src={image.url} alt={image.alt} />
            <p className="gallery-content">{image.label}</p>
        </div>
    ));




    return (
        <div class="gallery-container">
            <h2 class="gallery-heading">Our Gallery</h2>
            <div class="gallery-row">
               
                    <Carousel
                        showArrows={true}
                        autoPlay={true}
                        infiniteLoop={true}
                        showThumbs={false}
                        swipeable={true}
                        showStatus={false}
                        showIndicators={false}
                        className="gallery-item"
                    >
                        {renderSlides}
                    </Carousel>
                    <Carousel
                        showArrows={true}
                        autoPlay={true}
                        infiniteLoop={true}
                        showThumbs={false}
                        swipeable={true}
                        showStatus={false}
                        showIndicators={true}
                        className="gallery-item"
                    >
                        {renderSlides}
                    </Carousel>
                    <Carousel
                        showArrows={true}
                        autoPlay={true}
                        infiniteLoop={true}
                        showThumbs={false}
                        swipeable={true}
                        showStatus={false}
                        showIndicators={false}
                        className="gallery-item"
                    >
                        {renderSlides}
                    </Carousel>
                
                {/* <div class="gallery-item">
                    <img src="https://images5.alphacoders.com/100/1002716.jpg" alt="Image 1" />
                    <div class="gallery-content">
                        <p>Trimeru Tempest, a charismatic slime in "That Time I Got Reincarnated as a Slime," embodies
                            friendship, wisdom, and power. From slime to sage, Rimuru's journey captivates with humor,
                            heart, and growth.</p>
                    </div>
                </div>
                <div class="gallery-item">
                    <img src="https://images5.alphacoders.com/100/1002716.jpg" alt="Image 1" />
                    <div class="gallery-content">
                        <p>Trimeru Tempest, a charismatic slime in "That Time I Got Reincarnated as a Slime," embodies
                            friendship, wisdom, and power. From slime to sage, Rimuru's journey captivates with humor,
                            heart, and growth.</p>
                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default Gallery
