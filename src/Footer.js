import React from 'react'
import './Footer.css';
import { Row, Col, Container } from 'react-bootstrap';

const Footer = () => {
  return (
    <div>
      <section className='footer'>
        <Container>
          <Row>
            <Col md={3}>
              <img src='https://www.tanishq.co.in/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dwcfc0b576/images/footer/tanishq-footer-logo.svg'></img>
              <h5>Download the Tanishq App Now</h5>
              <img src='https://www.tanishq.co.in/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw0fa1b94a/images/footer/tanishq-app-QR-code.svg'></img>
            </Col>
            <Col md={3} className='link'>

              <ul >
                <h4>Useful links</h4>
                <li>Delivery Information</li>
                <li>International Shipping</li>
                <li>Payment Options</li>
                <li>Track your Order</li>
                <li>Returns</li>
                <li>Find a Store</li>
              </ul>

            </Col>

            <Col md={3} className='link'>
              <ul>
                <h4>Information</h4>
                <li>Blog</li>
                <li>Offers & Contest Details</li>
                <li>Help & FAQs</li>
                <li>About Tanishq</li>
              </ul>
            </Col>

            <Col md={3} className='link'>
              <ul>
                <h4>Contact Us</h4>
                <li>1800-266-0123</li>
                <h4>Chat With Us</h4>

                <u><li>+91 8147349242</li></u>
              </ul>

              <ul className='social_media'>
                <li>
                  <a href='https://www.whatsapp.com/'> <img src='https://www.tanishq.co.in/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dwd94cc295/images/footer/footer-whatsapp.svg'></img>
                  </a>
                </li>
                <li>

                 <a href='https://mail.google.com/'> <img src='https://www.tanishq.co.in/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dwca9d87e8/images/footer/footer-writetous.svg'></img></a>
                </li>
                <li>

                  <img src='https://www.tanishq.co.in/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw69956d76/images/footer/footer-chatwithus.svg'></img>
                </li>
              </ul>
            </Col>


          </Row>
        </Container>
      </section>




























    </div>
  )
}

export default Footer
