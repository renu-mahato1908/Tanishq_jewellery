import { useState } from 'react';
import React from 'react'
import './Trial.css';

import { Container, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import ListGroup from 'react-bootstrap/ListGroup';
import Pagination from 'react-bootstrap/Pagination';



const Trial = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div>
            <section>
                <Container>
                    <Row>
                        <Col>
                            <>
                                <Button variant="primary" onClick={handleShow}>
                                    Launch
                                </Button>

                                <Offcanvas show={show} onHide={handleClose}>
                                    <Offcanvas.Header closeButton>
                                        <Offcanvas.Title>Offcanvas</Offcanvas.Title>
                                    </Offcanvas.Header>
                                    <Offcanvas.Body>
                                        {/* Some text as placeholder. In real life you can have the elements you
                                        have chosen. Like, text, images, lists, etc. */}
                                        <ul>
                                            <li>Gold</li>
                                            <li>Diamond</li>
                                            <li>Silver</li>
                                        </ul>

                                        <p>Price</p>
                                        <ul className='list'>
                                            <li> ₹25000</li>&nbsp;&nbsp;

                                        </ul>

                                        <ListGroup>
                                            <ListGroup.Item>All jewellery</ListGroup.Item>
                                            <ListGroup.Item>Diamond</ListGroup.Item>
                                            <ListGroup.Item>Occational</ListGroup.Item>
                                            <ListGroup.Item>Gold</ListGroup.Item>
                                            <ListGroup.Item>Collection</ListGroup.Item>
                                        </ListGroup>


                                    </Offcanvas.Body>
                                </Offcanvas>

                            </>


                        </Col>
                    </Row>
                </Container>
            </section>

        </div>
    )
}

export default Trial
