
import React, { useState, useEffect } from "react";


import { Container, Row, Col } from 'react-bootstrap'
import earing from './earing.png'
import finger_ring from './finger_ring.png'
import pendants from './pendants.png'
import mangalsutra from './mangalsutra.png'
import bangles from './bangles.png'
import bracelets from './bracelets.png'
import chain from './chain.png'
import Carousel from 'react-bootstrap/Carousel';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Navigate } from "react-router-dom";
import { Link } from 'react-router';

// import ExampleCarouselImage from 'components/ExampleCarouselImage';

const Home = () => {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const { user: currentUser } = useSelector((state) => state.auth);
  useEffect(() => {
    if (currentUser) {
      console.log(currentUser);
    }
    if (currentUser && currentUser.roles[0] === "ROLE_ADMIN") {
      console.log(currentUser.roles[0]);

      navigate("/Dashboard");
    }
  }, []);

  const slides = [
    {
      id: "1",
      image: "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dwb84a9317/homepage/HeroBanner/mriganka-wo-desktop.jpg ",

    },
    {
      id: 2,
      image: "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dwa85a00d2/homepage/HeroBanner/festive-edit-desktop.jpg",

    },
    {
      id: 3,
      image: "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw32e1f8d0/homepage/HeroBanner/floral-bloom-desktop.jpg",

    }
    ,
    {
      id: 4,
      image: "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dwd8ef7708/homepage/HeroBanner/mriganka-wo-desktop-new.jpg",

    },
    {
      id: 5,
      image: "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dwb3ca7843/homepage/HeroBanner/dailywear-desktop1.jpg",

    }

  ]


  return (
    <div>



      <section className='slidearea'>
        <Container fluid >
          <Row>
            <Col>

              <Carousel>
                {
                  slides.map((slide, index) => {
                    return (
                      <Carousel.Item key={index}>
                        <img src={slide.image} className='img-fluid' />
                        <Carousel.Caption>
                          <h3>{slide.label}</h3>
                          <h3>{slide.description}</h3>
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
      {/* <section>

        <Container>
          <Row>
            <Col className='collection'>
              <h3> Tanishq Collection</h3>
              <h4>Explore our Newly launched collection</h4>
            </Col>

            <Row>
              <Col md={6} >
                <div className=''>

                  <img src='https://www.tanishq.co.in/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dwc5b6b963/homepage/tanishq-collections/festive-edit-desktop.jpg' alt='' className='img-fluid'/>
                </div>
              </Col>


              <Col md={6}>
                <div className='collection2'>
                  <img src='https://www.tanishq.co.in/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dwfba22b76/homepage/tanishq-collections/stunning-every-ear.jpg' alt='' className='collection2 img-fluid'/>
                </div>
                <div className='collection2'>
                  <img src='https://www.tanishq.co.in/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw43869af4/homepage/tanishq-collections/floral-bloom.jpg' alt='' className='img-fluid' />
                </div>
              </Col>
            </Row>
          </Row>
        </Container>
      </section> */}
      <section>
        <Container>
          <Row>
            <Col className='collection'>
              <h3> Tanishq Collection</h3>
              <h4>Explore our Newly launched collection</h4>
            </Col>
          </Row>
          <Row className="align-items-stretch">
            <Col md={6}>
              <div className="collection-box big">
                <img
                  src="https://www.tanishq.co.in/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dwc5b6b963/homepage/tanishq-collections/festive-edit-desktop.jpg"
                  alt=""
                />
              </div>
            </Col>

            <Col md={6}>
              <div className="right-column">
                <div className="collection-box small">
                  <img
                    src="https://www.tanishq.co.in/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dwfba22b76/homepage/tanishq-collections/stunning-every-ear.jpg"
                    alt=""
                  />
                </div>

                <div className="collection-box small">
                  <img
                    src="https://www.tanishq.co.in/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw43869af4/homepage/tanishq-collections/floral-bloom.jpg"
                    alt=""
                  />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col className='categories'>

              <h3>Find Your Perfect Match</h3>
              <h4>Shop by Categories</h4>
            </Col>
          </Row>

          <Row className='category1'>
            <Col md={3} >
              <div>
                <Link to="/Earrings" className="text-decoration-none text-dark">
                  <img src={earing} alt='earing' />
                  <h4>EARINGS</h4>
                </Link>

              </div></Col>
            <Col md={3}>

              <div>
                <Link to="/Rings" className="text-decoration-none text-dark">
                  <img src={finger_ring} alt='finger_ring' />
                  <h4>FINGER RINGS</h4>
                </Link>

              </div></Col>
            <Col md={3}>

              <div>
                <Link to="/Pendant" className="text-decoration-none text-dark">
                  <img src={pendants} alt='pendants' />
                  <h4>PENDANTS</h4>
                </Link>
              </div></Col>
            <Col md={3}>
              <div>
                <Link to="/Mangalsutra" className="text-decoration-none text-dark">
                  <img src={mangalsutra} alt='mangalsutra'></img>
                  <h4>MANGALSUTRA</h4>
                </Link>
              </div></Col>
          </Row>

          <Row className='category2'>
            <Col md={3}>
              <div>
                <Link className="text-decoration-none text-dark">
                  <img src={bracelets} alt='bracelets' />
                  <h4>BRACELETS</h4>
                </Link>

              </div></Col>
            <Col md={3}>
              <div>
                <Link className="text-decoration-none text-dark">
                  <img src={bangles} alt='bangles' />
                  <h4>BANGLES</h4>
                </Link>

              </div></Col>
            <Col md={3}>
              <div>
                <Link className="text-decoration-none text-dark">
                  <img src={chain} alt='chain' />
                  <h4>CHAIN</h4>
                </Link>
              </div></Col>
            <Col md={3} className='view_all' >

              <h3>10+</h3>

              <p>categories to choose all</p>
              <div>
                <h4>VIEW ALL</h4>
              </div></Col>
          </Row>
        </Container>
      </section>

      <section className='tending'>
        <Container>
          <Row>
            <Col>
              <h2>Trending Now</h2>
              <h3>Jewellery pieces everyone’s eyeing right now</h3>
            </Col>
          </Row>

          <Row className='auspicious'>
            <Col md={4}>
              <div>

                <img src='./auspicious.png' />
                <h4>Auspicious Occasion</h4></div></Col>
            <Col md={4}>
              <div>

                <img src='./gifting.png' />
                <h4>Gifting Jewellery</h4></div></Col>
            <Col md={4}>
              <div>

                <img src='./ring.png' />
                <h4>Drop of Radiance</h4></div></Col>
          </Row>
        </Container>
      </section>

      <section className='tworld'>
        <Container>
          <Row>
            <Col>
              <h2>Tanishq World</h2>
              <h3>A companion for every occasion</h3>
            </Col>
          </Row>

          <Row>
            <Col md={6}>
              <div>
                <Link to='/Wedding' className="text-decoration-none text-dark">
                  <img src='./wedding.png' className="img-fluid" />
                  <h4>WEDDING</h4>

                </Link>

              </div>
              <div>
                <Link to="/Gold" className="text-decoration-none text-dark">
                  <img src='./gold.png' className="img-fluid" />
                  <h4>GOLD</h4>
                </Link>


              </div>
            </Col>
            <Col md={6}>

              <div>
                <Link to='/Diamond' className="text-decoration-none text-dark">
                  <img src='./diamond.png' className="img-fluid" />
                  <h4>DIAMOND</h4>
                </Link>

              </div>

              <div>
                <Link to="/Dailywear" className="text-decoration-none text-dark">
                  <img src='./dailywear.png' className="img-fluid" />
                  <h4>DAILY WEAR</h4>
                </Link>

              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className='videoarea'>
        <Container>
          <Row>
            <Col>

              <h2>Styling 101 With Diamonds</h2>
              <h3>Trendsetting diamond jewellery suited for every occasion</h3></Col>
          </Row>
        </Container>
      </section>

      {/* <section className='video1'>
        <Container>
          <Row>
            <Col>
              <video src='./ge-dt.mp4'></video>
              <p>Trust us to be part of your precious moments and to deliver jewellery that you'll cherish forever.</p>
            </Col>
          </Row>
        </Container>
      </section> */}

      <section className='img4'>
        <Container>
          <Row>
            <Col md={3}>
              <div>

                <img src='https://www.tanishq.co.in/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dwd2ac5b8e/homepage/assurance/tanishq-exchange-logo.svg' />
                <p>Tanishq
                  Exchange</p></div></Col>
            <Col md={3}>
              <div>

                <img src='https://www.tanishq.co.in/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw346e1c29/homepage/assurance/tanishq-purity-logo.svg' />
                <p>The Purity
                  Guarantee</p></div></Col>
            <Col md={3} >
              <div>

                <img src='https://www.tanishq.co.in/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw8fc1a591/homepage/assurance/tanishq-trust-logo.svg' />
                <p>Complete
                  Transparency
                  and Trust</p></div></Col>
            <Col md={3}>
              <div>

                <img src='https://www.tanishq.co.in/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dwbedd999e/homepage/assurance/tanishq-lifetime-logo.svg' />

                <p>Lifetime
                  Maintenance</p></div></Col>
          </Row>
        </Container>
      </section>

      <section className='shop_by_gender'>
        <Container>
          <Row>
            <Col>

              <h3>Curated For You</h3>
              <h5>Shop By Gender</h5></Col>
          </Row>

          <Row>
            <Col md={4}>
              <div>
                <img src='https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw811805ad/homepage/ShopByGender/sbg-women.jpg'></img>
                <h5>Women Jewellery</h5></div></Col>
            <Col md={4}>
              <div>
                <img src='https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dwe6fec18e/homepage/ShopByGender/sbg-men.jpg'></img>
                <h5>Men Jewellery</h5></div></Col>
            <Col md={4}>
              <div>
                <img src='https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw1e976d94/homepage/ShopByGender/sbg-kids.jpg'></img>
                <h5>Kids Jewellery</h5></div></Col>
          </Row>
        </Container>
      </section>
      <section className='experience'>
        <Container>
          <Row>
            <Col>
              <h3>Tanishq Experience</h3>
              <h4>Find a Boutique or Book a Consultation</h4>
            </Col>
          </Row>

          <Row>
            <Col md={4}>
              <div>
                <img src='https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw93bac46c/homepage/tanishq-experience/store-locator.jpg' />
                <h6>VISIT OUR STORE</h6>
              </div></Col>
            <Col md={4}>
              <div>
                <img src='https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dwa5fbf111/homepage/tanishq-experience/book-an-appointment.jpg' />
                <h6>BOOK AN APPOINTMENT</h6>
              </div>
            </Col>
            <Col md={4}>
              <div>
                <img src='https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dwe51566e5/homepage/tanishq-experience/talk-to-expert.png'></img>
                <h6>TALK TO AN EXPERT</h6>
              </div>
            </Col>
          </Row>

          <Row>
            <Col md={4}>
              <div>
                <img src='https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw52758e7c/homepage/tanishq-experience/Digigold.jpg'></img>
                <h6>DIGI GOLD</h6>
              </div>
            </Col>
            <Col md={4}>
              <div>
                <img src='https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dwbf8657ec/homepage/tanishq-experience/blogs.jpg'></img>
                <h6>BLOGS</h6>
              </div>
            </Col>

            <Col md={4}>
              <div>
                <img src='https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw8c17e244/homepage/tanishq-experience/jewellery-care-guide.jpg'></img>
                <h6>
                  JEWELLERY GUIDE
                </h6>
              </div>
            </Col>
          </Row>



        </Container>
      </section>
    </div>
  )
}

export default Home
