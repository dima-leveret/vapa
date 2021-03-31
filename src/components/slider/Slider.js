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
                        <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item className="slide">
                        <img
                        className="slideImg"
                        src={slide2}
                        alt="Second slide"
                        />

                        <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item className="slide">
                        <img
                        className="slideImg"
                        src={slide3}
                        alt="Third slide"
                        />

                        <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </>

        )
    }

}

export default Slider;