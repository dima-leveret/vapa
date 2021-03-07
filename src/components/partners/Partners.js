import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import '../partners/Partners.css'

function Partners() {
    return(
    <>
        <div className='partnersContainer' >
            <div>
                <h1>
                    Our partners and off-line shops
                </h1>
                <h4>
                    Here you can find eco products in your city
                </h4>
            </div>
            <div className='partners' >
                <div>
                    <a href='https://www.instagram.com/lisa_i_kapers/' target='blank' >
                        <img src='https://thumb.tildacdn.com/tild3630-3735-4035-a635-663466363665/-/resize/360x/-/format/webp/__.png' alt='instagram => lisa_i_kapers' />
                    </a>
                    <h5>Fox & Capers</h5>
                    <p>Odessa</p>
                </div>
                <div>
                    <a href='https://www.instagram.com/zone.eco/' target='blank' >
                        <img src='https://thumb.tildacdn.com/tild3330-6665-4366-a364-356130663633/-/resize/360x/-/format/webp/zone_eco.png' alt='instagram => zone.eco' />
                    </a>
                    <h5>Zone Eco</h5>
                    <p>Cherkassy</p>
                </div>
                <div>
                    <a href='https://www.instagram.com/zerowastelviv/' target='blank' >
                        <img src='https://thumb.tildacdn.com/tild3131-3766-4735-a364-333933393561/-/resize/360x/-/format/webp/Zero_Waste_Shop_Lviv.png' alt='instagram => zerowastelviv' />
                    </a>
                    <h5>Zero Waste Shop Lviv</h5>
                    <p>Lviv</p>
                </div>
                <div>
                    <a href='https://www.instagram.com/gorokh_eco/' target='blank' >
                        <img src='https://thumb.tildacdn.com/tild3235-6633-4161-b865-643635373939/-/resize/360x/-/format/webp/Gorokh.png' alt='instagram => gorokh_eco' />
                    </a>
                    <h5>Gorokh</h5>
                    <p>Khmelnytskyi</p>
                </div>
                <div>
                    <a href='https://www.instagram.com/organity.ua/' target='blank' >
                        <img src='https://thumb.tildacdn.com/tild6537-3264-4662-b830-336330346432/-/resize/360x/-/format/webp/Organity.png' alt='instagram => organity.ua' />
                    </a>
                    <h5>Organity</h5>
                    <p>Cherkassy</p>
                </div>
                <div>
                    <a href='https://www.instagram.com/vegvam_/' target='blank' >
                        <img src='https://thumb.tildacdn.com/tild3338-3131-4639-b731-623365363337/-/resize/360x/-/format/webp/Vegvam.png' alt='instagram => vegvam_' />
                    </a>
                    <h5>Vegvam</h5>
                    <p>Kiev</p>
                </div>
                <div>
                    <a href='https://www.instagram.com/mavka.be.eco/' target='blank' >
                        <img src='https://thumb.tildacdn.com/tild6134-6562-4032-b062-653566646137/-/resize/360x/-/format/webp/Mavka.png' alt='instagram => mavka.be.eco' />
                    </a>
                    <h5>Mavka</h5>
                    <p>Kiev</p>
                </div>
                <div>
                    <a href='https://www.instagram.com/ecosoul.store/' target='blank' >
                        <img src='https://thumb.tildacdn.com/tild6663-6438-4235-b231-663231636138/-/resize/360x/-/format/webp/Ecosoul.png' alt='instagram => ecosoul.store' />
                    </a>
                    <h5>Ecosoul Store</h5>
                    <p>Kiev</p>
                </div>
            </div>
        </div>

        {/* <Container fluid>
            <Row>
                <Col>
                <a href='https://www.instagram.com/lisa_i_kapers/' target='blank' >
                        <img src='https://thumb.tildacdn.com/tild3630-3735-4035-a635-663466363665/-/resize/360x/-/format/webp/__.png' alt='instagram => lisa_i_kapers' />
                    </a>
                    <h5>Fox & Capers</h5>
                    <p>Odessa</p>
                </Col>
                <Col>
                <a href='https://www.instagram.com/zone.eco/' target='blank' >
                        <img src='https://thumb.tildacdn.com/tild3330-6665-4366-a364-356130663633/-/resize/360x/-/format/webp/zone_eco.png' alt='instagram => zone.eco' />
                    </a>
                    <h5>Zone Eco</h5>
                    <p>Cherkassy</p>
                </Col>
                <Col>
                <a href='https://www.instagram.com/zerowastelviv/' target='blank' >
                        <img src='https://thumb.tildacdn.com/tild3131-3766-4735-a364-333933393561/-/resize/360x/-/format/webp/Zero_Waste_Shop_Lviv.png' alt='instagram => zerowastelviv' />
                    </a>
                    <h5>Zero Waste Shop Lviv</h5>
                    <p>Lviv</p>
                </Col>
                <Col>
                <a href='https://www.instagram.com/gorokh_eco/' target='blank' >
                        <img src='https://thumb.tildacdn.com/tild3235-6633-4161-b865-643635373939/-/resize/360x/-/format/webp/Gorokh.png' alt='instagram => gorokh_eco' />
                    </a>
                    <h5>Gorokh</h5>
                    <p>Khmelnytskyi</p>
                </Col>
            </Row>
            <Row>
                <Col>
                <a href='https://www.instagram.com/organity.ua/' target='blank' >
                        <img src='https://thumb.tildacdn.com/tild6537-3264-4662-b830-336330346432/-/resize/360x/-/format/webp/Organity.png' alt='instagram => organity.ua' />
                    </a>
                    <h5>Organity</h5>
                    <p>Cherkassy</p>
                </Col>
                <Col>
                <a href='https://www.instagram.com/vegvam_/' target='blank' >
                        <img src='https://thumb.tildacdn.com/tild3338-3131-4639-b731-623365363337/-/resize/360x/-/format/webp/Vegvam.png' alt='instagram => vegvam_' />
                    </a>
                    <h5>Vegvam</h5>
                    <p>Kiev</p>
                </Col>
                <Col>
                <a href='https://www.instagram.com/mavka.be.eco/' target='blank' >
                        <img src='https://thumb.tildacdn.com/tild6134-6562-4032-b062-653566646137/-/resize/360x/-/format/webp/Mavka.png' alt='instagram => mavka.be.eco' />
                    </a>
                    <h5>Mavka</h5>
                    <p>Kiev</p>
                </Col>
                <Col>
                <a href='https://www.instagram.com/ecosoul.store/' target='blank' >
                        <img src='https://thumb.tildacdn.com/tild6663-6438-4235-b231-663231636138/-/resize/360x/-/format/webp/Ecosoul.png' alt='instagram => ecosoul.store' />
                    </a>
                    <h5>Ecosoul Store</h5>
                    <p>Kiev</p>
                </Col>
            </Row>
        </Container> */}

    </> 
    )
}

export default Partners;