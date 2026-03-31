
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Container, Row, Col, Table } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from "react-router-dom";



import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Navigate } from "react-router-dom";
import Breadcrumb from 'react-bootstrap/Breadcrumb';



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
// import { Container, Row, Col, Breadcrumb } from 'react-bootstrap';


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
            position: "top"
        },
        title: {
            display: true,
            text: "Top Selling Products"
        }
    },
    scales: {
        x: {
            display: true,
            ticks: {
                autoSkip: false
            }

        },
        y: {
            display: true
        }
    }
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

    // const [show, setShow] = useState(false);

    // const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);

    const [totalOrders, setTotalOrders] = useState(0);


    useEffect(() => {

        axios.get("http://localhost:8090/api/ssorders")
            .then((response) => {
                console.log(response.data)
                setTotalOrders(response.data.length);
            })

    }, [])

    const [reportSummary, setReportSummary] = useState(null);

    useEffect(() => {
        axios.get("http://localhost:8090/api/ssorders/reports/summary")
            .then((response) => {
                setReportSummary(response.data);
                console.log("Report summart", response.data)
            })
    }, []);

    // chart data


    // const chartdata = {
    //     labels: [

    //     ],
    //     datasets: [{
    //         label: 'Dataset',
    //         data: [{
    //             "label": "order statistics",
    //             "data": [
    //                 1918718
    //             ],
    //             "backgroundColor": "rgba(75, 192, 192, 0.5)",
    //             "borderColor": "rgba(75, 192, 192, 1)",
    //             "borderWidth": 1
    //         }],
    //         backgroundColor: [
    //             'rgb(255, 99, 132)',
    //             'rgb(54, 162, 235)',
    //             'rgb(255, 205, 86)',
    //             '#91E7E7',
    //             '#ccc',
    //             '#aaa',
    //         ],
    //         hoverOffset: 4
    //     }]
    // };
    // 


    const [chartData, setChartData] = useState(null);

    useEffect(() => {
        axios.get("http://localhost:8090/api/ssorders/chartdata")
            .then((response) => {
                console.log("Chart API Data:", response.data);


                setChartData(response.data);

            })
            .catch((error) => {
                console.log("API Error:", error);
            });
    }, []);



    // top selling

    const [topProducts, setTopProducts] = useState([]);

    useEffect(() => {

        axios
            .get("http://localhost:8090/api/ssorders/top-selling-products")
            .then((response) => {

                console.log("Top Products:", response.data);

                setTopProducts(response.data);

            })
            .catch((error) => {
                console.log(error);
            });

    }, []);


    const TopsellingData = {
        labels: topProducts.map((item) => item.productName),
        datasets: [
            {
                label: "Top Selling Products",
                data: topProducts.map((item) => item.totalSold),
                backgroundColor: [
                    "#36A2EB",
                    "#FF6384",
                    "#FFCE56",
                    "#4BC0C0",
                    "#9966FF"
                ]
            }
        ]
    };


    //   Daily report
    const [dailyReports, setDailyReports] = useState(null);


    useEffect(() => {
        axios.get("http://localhost:8090/api/ssorders/reports/daily")
            .then((response) => {
                console.log("Daily Report API:", response.data);
                setDailyReports(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);









    return (
        <div>

            <section>
                <Container>
                    <Row>
                        <Col>

                            <Breadcrumb>
                                <Breadcrumb.Item>
                                    <Link to="/Dashboard">Dashboard</Link>
                                </Breadcrumb.Item>

                                <Breadcrumb.Item>
                                    <Link to="/Products">Products</Link>
                                </Breadcrumb.Item>

                                <Breadcrumb.Item>
                                    <Link to="/Addproduct"> Add Products</Link>
                                </Breadcrumb.Item>

                                <Breadcrumb.Item>
                                    <Link to="/AddCategory">Add category</Link>
                                </Breadcrumb.Item>

                                <Breadcrumb.Item>
                                    <Link to="/OrdersDetail"> Customer Orders Details</Link>
                                </Breadcrumb.Item>
                            </Breadcrumb>

                        </Col>
                    </Row>
                </Container>
            </section>
            <section >
                <Container>

                    <Row className="canvas2">
                        <Col md={3}>
                            <ListGroup>

                                <ListGroup.Item className="menuItem">
                                    <Link to="/Dashboard">
                                        <img src="https://cdn-icons-png.flaticon.com/512/1946/1946488.png" alt="" />
                                        <span><h6>Dashboard</h6></span>
                                    </Link>
                                </ListGroup.Item>

                                <ListGroup.Item className="menuItem">
                                    <Link to="/Account">
                                        <img src="https://icon-library.com/images/account-icon-png/account-icon-png-10.jpg" alt="" />
                                        <span><h6>Account</h6></span>
                                    </Link>
                                </ListGroup.Item>

                                <ListGroup.Item className="menuItem">
                                    <Link to="/Addproduct">
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1Tr9fKwJjakFaxvBR7WFtttuKJq4lXwfnpA&s" alt="" />
                                        <span><h6>Add Product</h6></span>
                                    </Link>
                                </ListGroup.Item>

                                <ListGroup.Item className="menuItem">
                                    <Link to="/Products">
                                        <img src="https://cdn-icons-png.flaticon.com/512/1311/1311095.png" alt="" />
                                        <span><h6>Products</h6></span>
                                    </Link>
                                </ListGroup.Item>

                                <ListGroup.Item className="menuItem">
                                    <Link to="/AddCategory">
                                        <img src="https://static.vecteezy.com/system/resources/thumbnails/029/163/312/small/add-files-glyph-icon-add-folder-symbol-empty-folder-new-directory-for-document-portfolio-storage-online-gallery-flat-logo-pictogram-illustration-design-on-white-background-eps-10-vector.jpg" alt="" />
                                        <span><h6>Add Category</h6></span>
                                    </Link>
                                </ListGroup.Item>


                                <ListGroup.Item className="menuItem">
                                    <Link to="/OrdersDetail">
                                        <img src="https://static.vecteezy.com/system/resources/thumbnails/029/163/312/small/add-files-glyph-icon-add-folder-symbol-empty-folder-new-directory-for-document-portfolio-storage-online-gallery-flat-logo-pictogram-illustration-design-on-white-background-eps-10-vector.jpg" alt="" />
                                        <span><h6>Customer Orders Details</h6></span>
                                    </Link>
                                </ListGroup.Item>

                            </ListGroup>
                        </Col>

                        <Col md={8}>



                            <Row className="g-4 mt-2">

                                <Col md={4}>
                                    <div className="box-a">
                                        <h6>Total Orders</h6>
                                        <h4>{totalOrders}</h4>
                                    </div>
                                </Col>

                                <Col md={4}>
                                    <div className="box-a">
                                        {reportSummary ? (
                                            <>
                                                <p>Total Sales</p>
                                                <h4>₹ {reportSummary.totalRevenue}</h4>
                                            </>
                                        ) : (
                                            <p>Loading...</p>
                                        )}
                                    </div>
                                </Col>

                                <Col md={4}>
                                    <div className="box-a">
                                        <h6>Daily Report</h6>

                                        {dailyReports ? (
                                            <>
                                                <p>Date: {dailyReports?.date}</p>
                                                <p>Total Orders: {dailyReports?.totalOrders}</p>
                                                {/* <p>Total Sales: ₹ {dailyReports?.totalRevenue}</p> */}
                                                {/* <p>Total Sales: ₹ {dailyReports?.orders.products.totalAmount}</p> */}

                                            </>
                                        ) : (
                                            <p>Loading...</p>
                                        )}
                                    </div>
                                </Col>

                            </Row>
                        </Col>











                    </Row>


                    <Row>
                        <Col md={3}></Col>

                        <Col className='graph' md={8}>

                            {chartData ? (
                                <Bar data={chartData} options={options} />
                            ) : (
                                <p>Loading chart...</p>
                            )}
                        </Col>

                    </Row>


                </Container>
            </section>

            <section>
                <Container>
                    <Row>
                        <Col>


                            {/* <Col>
                            <Bar options={options} data={data1}></Bar>
                        </Col> */}
                        </Col>
                    </Row>
                </Container>
            </section>

            <section>
                <Container>
                    <Row>
                        {/* <Col md={3}></Col>

                        <Col className='graph' md={8}>

                            {chartData ? (
                                <Bar data={chartData} options={options} />
                            ) : (
                                <p>Loading chart...</p>
                            )}
                        </Col> */}



                    </Row>
                </Container>
            </section>

            <section>
                <Container>
                    <Row>

                        <Col md={3}></Col>

                        <Col md={9}>

                            <h4>Top Selling Products</h4>
                            <div className="selling">



                                <Table striped bordered hover>
                                    <thead>
                                        <tr>
                                            <th>Sl no.</th>
                                            <th>Product Name</th>
                                            <th>Total Sold</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        {topProducts.map((item, index) => (
                                            <tr key={index}>
                                                <td>{index + 1}</td>
                                                <td>{item.productDetails?.productName}</td>
                                                <td>{item.totalSold}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </Table>
                            </div>
                        </Col>











                    </Row>
                </Container>
            </section>


        </div >
    )
}

export default Dashboard








