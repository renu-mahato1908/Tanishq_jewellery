import React from 'react'
import './Gifting.css';
import { Container, Row, Col, Carousel } from 'react-bootstrap';

const Gifting = () => {

    const slides = [
        {
            img: "https://staticimg.tanishq.co.in/microsite/gifting/assets/images/banner/banner-desktop.jpg"
        }
    ]
    return (
        <div>
            <section className='slidearea'>
                <Container fluid>
                    <Row>
                        <Col>

                            <Carousel>
                                {
                                    slides.map((slide, index) => {
                                        return (
                                            <Carousel.Item key={index}>
                                                <img src={slide.img} className='img-fluid' />
                                                <Carousel.Caption>

                                                </Carousel.Caption>
                                            </Carousel.Item>
                                        )
                                    })
                                }

                            </Carousel>
                        </Col>
                    </Row>

                </Container>
            </section>

            <section>
                <Container>
                    <div className='area2'>
                        <Row>
                            <Col>
                                <h3>Find the Perfect Piece to Celebrate Life’s Special Moments</h3>
                                <img src='https://staticimg.tanishq.co.in/microsite/gifting/assets/images/seperator.png'></img>
                               
                                <h4>Gift by Range</h4>
                                <p>Explore the gifting range that fits your budget</p>

                            </Col>

                        </Row>
                    </div>

                </Container>
            </section>

            <section>
                <Container>

                    <div>
                        <Row>
                            <Col xs md={3}>
                                <div className='xyz'>
                                    <img src='https://staticimg.tanishq.co.in/microsite/gifting/assets/images/giftbyRange/under25k-d.jpg'></img>
                                    <div className='text'>
                                        <h5>under25k</h5>
                                    </div>
                                </div>


                            </Col>
                            <Col xs md={3}>
                                <div className='xyz'>
                                    <img src='https://staticimg.tanishq.co.in/microsite/gifting/assets/images/giftbyRange/25k-50k-d.jpg'></img>
                                    <div className='text'>
                                        <h5>25k-30k</h5>

                                    </div>
                                </div>

                            </Col>
                            <Col xs md={3}>
                                <div className='xyz'>
                                    <img src='https://staticimg.tanishq.co.in/microsite/gifting/assets/images/giftbyRange/25k-50k-d.jpg'></img>
                                    <div className='text'>
                                        <h5>30k-50k</h5>
                                    </div>

                                </div>
                            </Col>
                            <Col xs md={3}>
                                <div className='xyz'>
                                    <img src='https://staticimg.tanishq.co.in/microsite/gifting/assets/images/giftbyRange/1l-above-d.jpg'></img>
                                    <div className='text'>
                                        <h5>under25k</h5>


                                    </div>

                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </section>

            <section >
                <Container>
                <Row className=' shop_by_occasion'>
                    <Col>
                    <h2>Shop by Occasion</h2>
                    <h4>Explore the curated Gifting List for Every Occasion</h4>
                    </Col>
                </Row>

                <Row className='occasion'>
                    <Col md={6}>
                    <div>
                        <img src='https://staticimg.tanishq.co.in/microsite/gifting/assets/images/shopbyOccasion/wedding-desktop.jpg'></img>
                        
                            <h3>Wedding</h3>
                
                    </div>
                    </Col>

                    <Col md={6}>
                    <img src='https://staticimg.tanishq.co.in/microsite/gifting/assets/images/shopbyOccasion/engagement-d.jpg' alt=''/>
                    <h3>Engagement</h3>
                    </Col>
                </Row>

                <Row className='occasion'>
                    <Col md={6}>
                    <img src='https://staticimg.tanishq.co.in/microsite/gifting/assets/images/shopbyOccasion/birthday-desktop.jpg' alt=''/>
                    <h3>Birthday</h3>
                    </Col>

                    <Col md={6}>
                    <img src='https://staticimg.tanishq.co.in/microsite/gifting/assets/images/shopbyOccasion/anniversary-desktop.jpg' alt=''/>
                    <h3>Anniversary</h3>
                    </Col>
                </Row>


                </Container>
            </section>

            <section>
                <Container>
                    <Row>
                        <Col>



                            {/* 
                        <div class="polaroid">
                            <img src="https://www.w3schools.com/css/img_5terre.jpg" alt="5 Terre"/>
                                <div class="abc">
                                    <p>Cinque Terre</p>
                                    <button>buy</button>
                                </div>
                        </div>

                        <div class="polaroid">
                            <img src="https://www.w3schools.com/css/lights600x400.jpg" alt="Norther Lights"/>
                                <div class="abc">
                                    <p>Northern Lights</p>
                                </div>
                        </div> */}
                        </Col>
                    </Row>

                </Container>
            </section>
        </div >
    )
}

export default Gifting
