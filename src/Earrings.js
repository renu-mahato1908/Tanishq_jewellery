import axios from 'axios';

import React, { useState, useEffect } from 'react'

import './Component.css';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { FiHeart } from "react-icons/fi";
import { HiOutlineShoppingCart } from "react-icons/hi";



const Earrings = () => {
    // const [liked, setLiked] = useState();

    // <FiHeart
    //     className="wishlist-icon"
    //     color={liked ? "red" : "gray"}
    //     onClick={() => setLiked(!liked)}


    // />

    const [products, setproducts] = useState([]);




    return (
        <div>
            <section >
                <Container>
                    <Row>
                        <Col md={4}>
                            <div className="polaroid">
                                <button className='wishlist-btn'><FiHeart className="wishlist-icon" /></button>
                                                                <button className='addtocart-btn'><HiOutlineShoppingCart  className='add-icon'/></button>
                                


                                <Image src='https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw215576f3/images/hi-res/51F1D1SERAGACZ_2.jpg?sw=480&sh=480' thumbnail></Image>
                                <div className="details">


                                    <p>Girlish Star Shaped Gold Stud Earrings</p>
                                    <h5>₹30217</h5>
                                </div>
                                <button className='buy-btn'>Buy now</button>

                            </div>
                        </Col>

                        <Col md={4}>
                            <div className="polaroid">
                                {/* <FiHeart className="wishlist-icon" /> */}
                                <button className='wishlist-btn'><FiHeart className="wishlist-icon" /></button>
                                                                <button className='addtocart-btn'><HiOutlineShoppingCart  className='add-icon'/></button>
                                
                                


                                <Image src='https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwa25216a5/images/hi-res/50F1D1SIGAGA32_2.jpg?sw=480&sh=480' thumbnail></Image>
                                <div className="details">

                                    <p>Breathtaking Onyx Stone Diamond  Earrings </p>
                                    {/* <p>Breathtaking Onyx Stone Diamond Stud Earrings for Kids</p> */}
                                    <h5>₹47456</h5>
                                </div>
                                <button className='buy-btn'>Buy now</button>

                            </div>
                        </Col>

                        <Col md={4}>
                            <div className="polaroid">
                                <button className='wishlist-btn'><FiHeart className="wishlist-icon" /></button>
                                                                <button className='addtocart-btn'><HiOutlineShoppingCart  className='add-icon'/></button>
                                


                                <Image src='https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw59dfaef7/images/hi-res/50F1D1SGDAGA02_2.jpg?sw=480&sh=480' thumbnail></Image>
                                <div className="details">

                                    <p>Swirl Pattern Diamond Stud Earrings</p>
                                    <h5>₹41601</h5>
                                </div>
                                <button className='buy-btn'>Buy now</button>
                            </div>
                        </Col>
                    </Row>

                    <Row>
                        <Col md={4}>
                            <div className="polaroid">
                                <button className='wishlist-btn'><FiHeart className="wishlist-icon" /></button>
                                                                <button className='addtocart-btn'><HiOutlineShoppingCart  className='add-icon'/></button>
                                

                                <Image src='https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwceb6a671/images/hi-res/51D5B2DAJABA00_2.jpg?sw=480&sh=480' thumbnail></Image>
                                <div className="details">

                                    <p>Golden Petal Gold Drop Earrings</p>
                                    <h5>₹77144</h5>
                                </div>
                                <button className='buy-btn'>Buy now</button>
                            </div>
                        </Col>



                        <Col md={8} className='img'>
                            <div className="product">
                                <Image src='https://www.tanishq.co.in/on/demandware.static/-/Sites/default/dw15e57d11/images/espot/festive-earrings-desktop.jpg' thumbnail></Image>

                            </div>
                        </Col>
                    </Row>

                    <Row>
                        <Col md={4}>
                            <div className="polaroid">
                                <button className='wishlist-btn'><FiHeart className="wishlist-icon" /></button>
                                                                <button className='addtocart-btn'><HiOutlineShoppingCart  className='add-icon'/></button>
                                


                                <Image src='https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw38c18270/images/hi-res/50K4I2JAGAGA02_2.jpg?sw=480&sh=480' thumbnail></Image>
                                <div className="details">

                                    <p>Twinkle Dome Diamond Jhumka Earrings</p>
                                    <h5>₹69291</h5>
                                </div>
                                <button className='buy-btn'>Buy now</button>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="polaroid">
                                <button className='wishlist-btn'><FiHeart className="wishlist-icon" /></button>
                                                                <button className='addtocart-btn'><HiOutlineShoppingCart  className='add-icon'/></button>
                                

                                <Image src='https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwd738918f/images/hi-res/51D5P1DNGABA00_2.jpg?sw=480&sh=480' thumbnail></Image>
                                <div className="details">

                                    <p>Floral Swing Gold Drop Earrings</p>
                                    <h5>₹88015</h5>
                                </div>
                                <button className='buy-btn'>Buy now</button>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="polaroid">
                                <button className='wishlist-btn'><FiHeart className="wishlist-icon" /></button>
                                                                <button className='addtocart-btn'><HiOutlineShoppingCart  className='add-icon'/></button>
                                

                                <Image src='https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw85d3074b/images/hi-res/50D4B3SMRAGA02_2.jpg?sw=480&sh=480' thumbnail></Image>
                                <div className="details">

                                    <p>Whimsical Cluster Diamond Stud Earrings</p>
                                    <h5>₹71226</h5>
                                </div>
                                <button className='buy-btn'>Buy now</button>
                            </div>
                        </Col>
                    </Row>


                    <Row>
                        <Col md={4}>
                            <div className="polaroid">
                                <button className='wishlist-btn'><FiHeart className="wishlist-icon" /></button>
                                                                <button className='addtocart-btn'><HiOutlineShoppingCart  className='add-icon'/></button>
                                

                                <Image src='https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwb971485e/images/hi-res/51D5B1DVTABA00_1.jpg?sw=640&sh=640' thumbnail></Image>
                                <div className="details">

                                    <p>Sunset Squares Gold Drop Earrings</p>
                                    <h5>₹91025</h5>
                                </div>
                                <button className='buy-btn'>Buy now</button>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="polaroid">
                                <button className='wishlist-btn'><FiHeart className="wishlist-icon" /></button>
                                                                <button className='addtocart-btn'><HiOutlineShoppingCart  className='add-icon'/></button>
                                

                                <Image src='https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwcb32c8d4/images/hi-res/51D5B2SCOABA00_1.jpg?sw=640&sh=640' thumbnail></Image>
                                <div className="details">

                                    <p>Radiant Rhombus Gold Stud Earrings</p>
                                    <h5>₹102050</h5>
                                </div>
                                <button className='buy-btn'>Buy now</button>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="polaroid">
                                <button className='wishlist-btn'><FiHeart className="wishlist-icon" /></button>
                                                                <button className='addtocart-btn'><HiOutlineShoppingCart  className='add-icon'/></button>
                                

                                <Image src='https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwd8d0b69f/images/hi-res/504025HMQAAA00.jpg?sw=640&sh=640' thumbnail></Image>
                                <div className="details">

                                    <p>Concentric Beads Drop Earrings</p>
                                    <h5>₹70374</h5>
                                </div>
                                <button className='buy-btn'>Buy now</button>
                            </div>
                        </Col>
                    </Row>


                    <Row>
                        <Col md={4}>
                            <div className="polaroid">
                                <button className='wishlist-btn'><FiHeart className="wishlist-icon" /></button>
                                                                <button className='addtocart-btn'><HiOutlineShoppingCart  className='add-icon'/></button>
                                

                                <Image src='https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwce99648b/images/hi-res/50D5FFDAAABA32_2.jpg?sw=480&sh=480' thumbnail></Image>
                                <div className="details">

                                    <p>Pink Paradise Diamond Drop Earrings</p>
                                    <h5>₹105845</h5>
                                </div>
                                <button className='buy-btn'>Buy now</button>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="polaroid">
                                <button className='wishlist-btn'><FiHeart className="wishlist-icon" /></button>
                                                                <button className='addtocart-btn'><HiOutlineShoppingCart  className='add-icon'/></button>
                                

                                <Image src='https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwe353af63/images/hi-res/50D5L1HEIABA29_1.jpg?sw=640&sh=640' thumbnail></Image>
                                <div className="details">

                                    <p>Blush Bloom Diamond Hoop Earrings</p>
                                    <h5>₹57329</h5>
                                </div>
                                <button className='buy-btn'>Buy now</button>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="polaroid">
                                <button className='wishlist-btn'><FiHeart className="wishlist-icon" /></button>
                                                                <button className='addtocart-btn'><HiOutlineShoppingCart  className='add-icon'/></button>
                                


                                <Image src='https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwa6e97c0d/images/hi-res/50D5L1DEKABA29_2.jpg?sw=480&sh=480' thumbnail></Image>
                                <div className="details">

                                    <p>Dewlight Floral Diamond Drop Earrings
                                    </p>
                                    <h5>₹86076</h5>
                                </div>
                                <button className='buy-btn'>Buy now</button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
    )
}

export default Earrings
