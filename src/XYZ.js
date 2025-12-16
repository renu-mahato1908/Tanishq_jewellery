import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import './XYZ.css';




const XYZ = () => {

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
            <section className='responsive_img'>
                <Container>
                    <Row>
                        <Col>

                            <Carousel responsive={responsive}>
                                <div>
                                    <img src='https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw57f5c07f/images/hi-res/504025HMTAAA00_1.jpg?sw=480&sh=480' alt='' />
                                    
                                </div>
                                <div>
                                    <img src='https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw0d15c996/images/hi-res/50D4I1FNLAA09_2.jpg?sw=480&sh=480' alt='' />
                                </div>
                                <div>
                                    <img src='https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw61bb6c70/images/hi-res/2923SYV.jpg?sw=640&sh=640' alt='' />
                                </div>
                                <div>
                                    <img src='https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwcb90297e/images/hi-res/501163PWFAAB09_1.jpg?sw=640&sh=640' alt='' />
                                </div>
                            </Carousel>;
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
    )
}

export default XYZ