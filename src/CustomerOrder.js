import React, { useEffect } from "react";
import { Container, Row, Col } from 'react-bootstrap'
import { useNavigate } from "react-router";
import { useSelector, useDispatch } from "react-redux";

const CustomerOrder = () => {

    let navigate = useNavigate();
    const dispatch = useDispatch();
    const { user: currentUser } = useSelector((state) => state.auth);
    
    useEffect(() => {
        if (currentUser) {
            console.log(currentUser);
        }
        else {
            navigate("/Login");
        }

    }, []);
    return (
        <div>
            <section>
                <Container>
                    <Row>
                        <Col md={8}>
                            <div >
                                <h3>Customer Details</h3>
                                {/* {
                                    currentUser ?
                                        <div>
                                            <p>Mobile : {currentUser.username}</p>
                                            <p>Email : {currentUser.email}</p>
                                            <p>Name:  {currentUser.}</p>
                                        </div> : ""
                                } */}


                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
    )
}

export default CustomerOrder