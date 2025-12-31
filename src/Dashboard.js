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
            <section className='canvas'>
                <Container>
                    <Row>
                        <Col>
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
                    </Row>
                </Container>
            </section>
            <section>
                <Container>


                    <Row>
                        <Col>

                            <Breadcrumb>
                                <Breadcrumb.Item href="#">Dashboard</Breadcrumb.Item>
                                <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
                                    Library
                                </Breadcrumb.Item>
                                <Breadcrumb.Item active>Data</Breadcrumb.Item>
                            </Breadcrumb></Col>
                    </Row>
                    <Row>
                        <Col>
                            return <Bar options={options} data={data} />;
                        </Col>
                    </Row>


                </Container>
            </section>
        </div>
    )
}

export default Dashboard
