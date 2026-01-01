import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { FaSearch } from "react-icons/fa";

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { Container, Row, Col, Breadcrumb } from 'react-bootstrap';


ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'Chart.js Bar Chart',
        },
    },
};

const data = {
    labels: ["January", "February", "March", "April", "May"],
    datasets: [
        {
            label: "Sales",
            data: [12000, 19000, 3000, 5000, 2000],
            backgroundColor: "rgba(75, 192, 192, 0.5)",
            borderColor: "rgba(75, 192, 192, 1)",
            borderWidth: 1
        }
    ]
};

const Dashboard = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div>
            <section >
                <Container>
                    <Row className='canvas'>
                        <Col md={8}>
                            <>
                                  <img src="/menu.png"   alt='' onClick={handleShow}>

                                  

                                    </img>

                                <Offcanvas show={show} onHide={handleClose}>
                                    <Offcanvas.Header closeButton>
                                        <Offcanvas.Title>Offcanvas</Offcanvas.Title>
                                    </Offcanvas.Header>
                                    <Offcanvas.Body>
                                        <ul>
                                            <li>Profile</li>
                                            <li>Login</li>
                                            <li>logout</li>
                                        </ul>
                                    </Offcanvas.Body>
                                </Offcanvas>
                            </>
                        </Col>
                        <Col md={4} className='info'>
                      
                        <img src='search.jpeg' alt=''></img>
                        <img src='user.jpeg' alt=''></img>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section>
                <Container>
                    <Row >
                        <Col md={3} className='box'>
                        <h4>Total sales</h4>
                        </Col>

                         <Col md={3} className='box'>
                        <h4>Monthly sales</h4>
                        </Col>
                         <Col md={3} className='box'>
                        <h4>Weekly sales</h4>
                        </Col>
                         <Col md={3} className='box'>
                                               <h4>Yearly sales</h4>

                        </Col>
                    </Row>
                </Container>
            </section>
            <section>
                <Container>


                    <Row>
                        <Col>

                           </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Bar options={options} data={data} />;
                        </Col>
                    </Row>


                </Container>
            </section>
        </div>
    )
}

export default Dashboard
