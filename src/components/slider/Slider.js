import React from 'react';

import '../slider/Slider.css';
import DesctopBanner1 from '../../img/DesctopBanner1.jpg'
import DesctopBanner2 from '../../img/DesctopBanner2.jpg'
import DesctopBanner3 from '../../img/DesctopBanner3.jpg'


import Carousel from 'react-bootstrap/Carousel';


class Slider extends React.Component {


    render () {
        return (
            <>
                <Carousel className="carouselBody" fade>
                    <Carousel.Item className="slide">
                        <img
                        className="slideImg"
                        src={DesctopBanner1}
                        alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item className="slide">
                        <img
                        className="slideImg"
                        src={DesctopBanner2}
                        alt="Second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item className="slide">
                        <img
                        className="slideImg"
                        src={DesctopBanner3}
                        alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel>
            </>
        )
    }

}

export default Slider;