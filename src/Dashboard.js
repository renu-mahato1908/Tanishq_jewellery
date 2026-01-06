import React from 'react'
import { useState ,useEffect} from 'react';

import Offcanvas from 'react-bootstrap/Offcanvas';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Navigate, Link } from "react-router-dom";


import {
    Chart as ChartJS,
    ArcElement,
    PointElement,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    RadialLinearScale,

} from 'chart.js';
import { Bar, Pie, PolarArea, Scatter } from 'react-chartjs-2';
import { Container, Row, Col, Breadcrumb } from 'react-bootstrap';


ChartJS.register(
    CategoryScale,
    ArcElement,
    PointElement,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    RadialLinearScale,

);

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: true,

        },
    },
};

const data = {
    labels: ["Gold", "Diamond", "Earrings", "Rings", "Daily wear", "Gifting"],
    datasets: [
        {
            label: "Sales",
            data: [12000, 19000, 3000, 5000, 2000, 6000],
            backgroundColor: "rgba(75, 192, 192, 0.5)",
            borderColor: "rgba(75, 192, 192, 1)",
            borderWidth: 1
        }
    ]
};

const data1 = {
    labels: [
        'Gold',
        'Diamond',
        'Earrings',
        'Rings',
        'Daily wear',
        'Gifting',
    ],
    datasets: [{
        label: 'My First Dataset',
        data: [40, 50, 35, 45, 20, 55],
        backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)',
            '#91E7E7',
            '#ccc',
            '#aaa',
        ],
        hoverOffset: 4
    }]
};

const Dashboard = () => {

let navigate = useNavigate();
  const dispatch = useDispatch();
  const { user: currentUser } = useSelector((state) => state.auth);
  useEffect(() => {
    if (currentUser) {
      console.log(currentUser);
    }
    if (currentUser && currentUser.roles[0] !== "ROLE_ADMIN") {
      console.log(currentUser.roles[0]);

      navigate("/Home");
    }
  }, []);

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
                                <img src="/menu.png" alt='' onClick={handleShow}>



                                </img>

                                <Offcanvas show={show} onHide={handleClose}>
                                    <Offcanvas.Header closeButton>
                                        <Offcanvas.Title>Offcanvas</Offcanvas.Title>
                                    </Offcanvas.Header>
                                    <Offcanvas.Body>
                                        <Row className='canvas2'>
                                            <Col md={2}>
                                                <img src='https://cdn-icons-png.flaticon.com/512/1946/1946488.png' alt=''></img>
                                                <img src='https://icon-library.com/images/account-icon-png/account-icon-png-10.jpg' alt=''></img>    
                                                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1Tr9fKwJjakFaxvBR7WFtttuKJq4lXwfnpA&s' alt=''></img>   
                                                <img src='https://cdn-icons-png.flaticon.com/512/1311/1311095.png' alt=''></img>                                       
                                               

                                            </Col>
                                            <Col>
                                                <h3>Dashboard</h3>
                                                <Link to={"/Account"}><h3>Account</h3></Link>
                                                <Link to={"/AdminOrders"}><h3>Admin orders</h3></Link>
                                                <Link to={"/AllProducts"}><h3>All products</h3></Link>
                                               

                                            </Col>
                                        </Row>




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
                            <Pie options={options} data={data1} />

                        </Col>

                        <Col md={3} className='box'>
                            <h4>Monthly sales</h4>
                            <Bar options={options} data={data1} />

                        </Col>
                        <Col md={3} className='box'>
                            <h4>Weekly sales</h4>
                            <Scatter options={options} data={data1} />

                        </Col>
                        <Col md={3} className='box'>
                            <h4>Yearly sales</h4>
                            <PolarArea options={options} data={data1} />



                        </Col>
                    </Row>
                </Container>
            </section>
            <section >
                <Container>



                    <Row className='graph'>
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
