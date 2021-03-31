import React from 'react';

import '../slider/Slider.css';
import slide1 from '../../img/slide1.jpg'
import slide2 from '../../img/slide2.jpg'
import slide3 from '../../img/slide3.jpg'

import Carousel from 'react-bootstrap/Carousel';


class Slider extends React.Component {


    render () {
        return (
            <>
                <Carousel className="carouselBody" fade>
                    <Carousel.Item className="slide">
                        <img
                        className="slideImg"
                        src={slide1}
                        alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item className="slide">
                        <img
                        className="slideImg"
                        src={slide2}
                        alt="Second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item className="slide">
                        <img
                        className="slideImg"
                        src={slide3}
                        alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel>
            </>
        )
    }

}

export default Slider;