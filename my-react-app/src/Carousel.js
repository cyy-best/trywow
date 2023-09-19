import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // 引入轮播图样式
import { Carousel } from 'react-responsive-carousel';
import './css/carousel.css'

function MyCarousel() {
    return (
        <Carousel showArrows={true} showThumbs={false} infiniteLoop={true} autoPlay={true} interval={5000} transitionTime={500}>
            <div className='carousel-image image1'>
                <img src={process.env.PUBLIC_URL + '/slide1.jpg'} alt='Slide 1' className="carousel-image" />
                <p className="legend">Legend 1</p>
            </div>
            <div>
                <img src={process.env.PUBLIC_URL + '/slide2.jpg'} alt='Slide 2' className="carousel-image" />
                <p className="legend">Legend 2</p>
            </div>
            <div>
                <img src={process.env.PUBLIC_URL + '/slide3.jpg'} alt='Slide 3' className="carousel-image" />
                <p className="legend">Legend 3</p>
            </div>
        </Carousel>
    );
}

export default MyCarousel;
