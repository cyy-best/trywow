import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // 引入轮播图样式
import { Carousel } from 'react-responsive-carousel';
import './css/carousel.css'

function MyCarousel() {
    return (
        <Carousel showArrows={true} showThumbs={false} infiniteLoop={true} autoPlay={true} interval={5000} transitionTime={500}>
            <div className='carousel-cards carousel-image1'>
            </div>
            <div className='carousel-cards carousel-image2'>
            </div>
            <div className='carousel-cards carousel-image3'>
            </div>
            <div className='carousel-cards carousel-image4'>
            </div>


        </Carousel>
    );
}

export default MyCarousel;
