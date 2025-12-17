import React from 'react'
import './Wedding.css';
import { Container, Row, Col, Image } from 'react-bootstrap';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Wedding = () => {

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <div>
            <section className='area1'>
                <Container>
                    <Row>
                        <Col>
                            <img src='https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dwb3239666/rivaahpage/rivaahwj-desktop.jpg' alt='' />

                        </Col>
                    </Row>
                </Container>
            </section>

            <section>
                <Container>
                    <Row>
                        <Col>
                            <img src='https://staticimg.tanishq.co.in/microsite/rivaah-homepage/assets/images/common/leaf.png' alt=''></img>
                            <h3>For a sparkling new beginning</h3>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className='responsive'>
                <Container>
                    <Row>
                        <Col>

                            <Carousel responsive={responsive}>
                                <div><img src='https://staticimg.tanishq.co.in/microsite/rivaah-homepage/assets/images/journey/bengali-bride.jpg' alt='' />
                                    <div className='txt'>
                                        <h5>Bengoli bride</h5>
                                    </div>
                                </div>
                                <div><img src='https://staticimg.tanishq.co.in/microsite/rivaah-homepage/assets/images/journey/punjabi-bride.jpg' alt='' />
                                    <div className='txt'>
                                        <h4>Punjabi bride</h4>

                                    </div>
                                </div>
                                <div><img src='https://staticimg.tanishq.co.in/microsite/rivaah-homepage/assets/images/journey/8.png' alt='' />
                                    <div className='txt'>
                                        <h4>UP bride</h4>

                                    </div>
                                </div>
                                <div><img src='https://staticimg.tanishq.co.in/microsite/rivaah-homepage/assets/images/journey/marwari-bride.jpg' alt='' />
                                    <div className='txt'>
                                        <h4>Marwari bride</h4>

                                    </div>
                                </div>
                                <div><img src='https://staticimg.tanishq.co.in/microsite/rivaah-homepage/assets/images/journey/12.png' alt=''></img>
                                    <div className='txt'>
                                        <h4>Telegu Bride</h4>

                                    </div>
                                </div>
                                <div><img src='https://staticimg.tanishq.co.in/microsite/rivaah-homepage/assets/images/journey/3.png' alt='' />
                                    <div className='txt'>
                                        <h4>Marathi Bride</h4>
                                    </div>
                                </div>
                            </Carousel>;
                        </Col>
                    </Row>
                </Container>
            </section>


             <section>
                <Container>
                    <Row>
                        <Col>
                        <video controls width='100%'>
                            <source src='https://staticimg.tanishq.co.in/microsite/rivaah-brides/bengali-bride/assets/bengali-desktop.mp4'/>
                            
                            </video> 
                        </Col>
                    </Row>
                </Container>
            </section> 

            
            <section>
                <Container>


                    <Row>
                        <Col className='bngoli_bride'>
                            <h2>Bengoli Bride Jwellery</h2>
                        </Col>
                    </Row>
                  

                        <Row>


                            <Col md={4}>
                                <div className='bride'>
                                    <Image src='https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw98b278d5/images/hi-res/51AG71VAG1AP1_2.jpg?sw=480&sh=480' alt='' thumbnail />
                                    <div className='detail'>
                                        <h4>Traditional Gold Pola  for  Bengali Bride</h4>
                                        <h5>₹40 807</h5>
                                    </div>
                                    <button>Buy now</button>
                                </div>
                            </Col>
                            
                             <Col md={4}>
                                <div className='bride'>
                                    <Image src='https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwae2785d8/images/hi-res/511031NMHAA00_2.jpg?sw=480&sh=480' alt='' thumbnail />
                                    <div className='detail'>
                                        <h4>Stately Gold Necklace for the Bengali Bride</h4>
                                        <h5>₹ 749865</h5>
                                    </div>
                                    <button>Buy now</button>
                                </div>
                            </Col>

                            <Col md={4}>
                                <div className='bride' >
                                    <Image src='https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw16eefa81/images/hi-res/5114182ERABA00_2.jpg?sw=480&sh=480' alt='' thumbnail />
                                    <div className='detail' >
                                        <h4>Sculpted Radiance Gold Necklace Set</h4>
                                        <h5>₹ 49865</h5>
                                    </div>
                                    <button>Buy now</button>
                                </div>
                            </Col>
                        </Row>
                    

                </Container>
            </section>

        </div>
    )
}

export default Wedding
