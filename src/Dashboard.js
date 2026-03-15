// import axios from 'axios';
// import { useState, useEffect } from 'react';
// import { Container, Row, Col } from 'react-bootstrap';


// import Offcanvas from 'react-bootstrap/Offcanvas';
// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate, Navigate, Link } from "react-router-dom";
// import Breadcrumb from 'react-bootstrap/Breadcrumb';



// import {
//     Chart as ChartJS,
//     ArcElement,
//     PointElement,
//     CategoryScale,
//     LinearScale,
//     BarElement,
//     Title,
//     Tooltip,
//     Legend,
//     RadialLinearScale,

// } from 'chart.js';
// import { Bar, Pie, PolarArea, Scatter } from 'react-chartjs-2';
// // import { Container, Row, Col, Breadcrumb } from 'react-bootstrap';


// ChartJS.register(
//     CategoryScale,
//     ArcElement,
//     PointElement,
//     LinearScale,
//     BarElement,
//     Title,
//     Tooltip,
//     Legend,
//     RadialLinearScale,

// );





// export const options = {
//     responsive: true,
//     plugins: {
//         legend: {
//             position: "top"
//         },
//         title: {
//             display: true,
//             text: "Top Selling Products"
//         }
//     },
//     scales: {
//         x: {
//             display: true,
//             ticks: {
//                 autoSkip: false
//             }
//         },
//         y: {
//             display: true
//         }
//     }
// };
// // const data = {
// //     labels: ["Gold", "Diamond", "Earrings", "Rings", "Daily wear", "Gifting"],
// //     datasets: [
// //         {
// //             label: "Sales",
// //             data: [12000, 19000, 3000, 5000, 2000, 6000],
// //             backgroundColor: "rgba(75, 192, 192, 0.5)",
// //             borderColor: "rgba(75, 192, 192, 1)",
// //             borderWidth: 1
// //         }
// //     ]
// // };

// const data1 = {
//     labels: [
//         'Gold',
//         'Diamond',
//         'Earrings',
//         'Rings',
//         'Daily wear',
//         'Gifting',
//     ],
//     datasets: [{
//         label: 'My First Dataset',
//         data: [40, 50, 35, 45, 20, 55],
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

// const Dashboard = () => {

//     let navigate = useNavigate();
//     const dispatch = useDispatch();
//     const { user: currentUser } = useSelector((state) => state.auth);
//     useEffect(() => {
//         if (currentUser) {
//             console.log(currentUser);
//         }
//         if (currentUser && currentUser.roles[0] !== "ROLE_ADMIN") {
//             console.log(currentUser.roles[0]);

//             navigate("/Home");
//         }
//     }, []);

//     const [show, setShow] = useState(false);

//     const handleClose = () => setShow(false);
//     const handleShow = () => setShow(true);

//     const [reportSummary, setReportSummary] = useState(null);

//     useEffect(() => {
//         axios.get("http://localhost:8090/api/ssorders/reports/summary")
//             .then((response) => {
//                 setReportSummary(response.data);
//             })
//     }, []);

//     // chart data
//     const [chartData, setChartData] = useState([]);




//     useEffect(() => {
//         axios.get("http://localhost:8090/api/ssorders/chartdata")
//             .then((response) => {
//                 console.log("Chart API Data:", response.data);
//                 setChartData(response.data);
//             })
//             .catch((error) => {
//                 console.log(error);
//             })
//     }, []);

//     // top selling

//     const [topProducts, setTopProducts] = useState([]);

//     useEffect(() => {

//         axios
//             .get("http://localhost:8090/api/ssorders/top-selling-products")
//             .then((response) => {

//                 console.log("Top Products:", response.data);

//                 setTopProducts(response.data);

//             })
//             .catch((error) => {
//                 console.log(error);
//             });

//     }, []);


//     const TopsellingData = {
//         labels: topProducts.map((item) => item.productName),
//         datasets: [
//             {
//                 label: "Top Selling Products",
//                 data: topProducts.map((item) => item.totalSold),
//                 backgroundColor: [
//                     "#36A2EB",
//                     "#FF6384",
//                     "#FFCE56",
//                     "#4BC0C0",
//                     "#9966FF"
//                 ]
//             }
//         ]
//     };


//     //   Daily report
//     const [dailyReport, setDailyReport] = useState([]);

//     useEffect(() => {

//         axios.get("http://localhost:8090/api/ssorders/reports/daily")
//             .then((response) => {

//                 console.log("Daily Report:", response.data);

//                 setDailyReport(response.data);

//             })
//             .catch((error) => {
//                 console.log(error);
//             });

//     }, []);



//     return (
//         <div>

//             <section>
//                 <Container>
//                     <Row>
//                         <Col>

//                             <Breadcrumb>
//                                 <Breadcrumb.Item>
//                                     <Link to="/Dashboard">Dashboard</Link>
//                                 </Breadcrumb.Item>

//                                 <Breadcrumb.Item>
//                                     <Link to="/Products">Products</Link>
//                                 </Breadcrumb.Item>

//                                 <Breadcrumb.Item>
//                                     <Link to="/Addproduct"> Add Products</Link>
//                                 </Breadcrumb.Item>

//                                 <Breadcrumb.Item>
//                                     <Link to="/AddCategory">Add category</Link>
//                                 </Breadcrumb.Item>
//                             </Breadcrumb>

//                         </Col>
//                     </Row>
//                 </Container>
//             </section>
//             <section >
//                 <Container>
//                     <Row className='canvas'>
//                         <Col md={8}>
//                             <>
//                                 <img src="/menu.png" alt='' onClick={handleShow}>



//                                 </img>

//                                 <Offcanvas show={show} onHide={handleClose}>
//                                     <Offcanvas.Header closeButton>
//                                         {/* <Offcanvas.Title>Offcanvas</Offcanvas.Title> */}
//                                     </Offcanvas.Header>
//                                     <Offcanvas.Body>
//                                         <Row className='canvas2'>
//                                             <Col md={2}>
//                                                 <img src='https://cdn-icons-png.flaticon.com/512/1946/1946488.png' alt=''></img>
//                                                 <img src='https://icon-library.com/images/account-icon-png/account-icon-png-10.jpg' alt=''></img>
//                                                 <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1Tr9fKwJjakFaxvBR7WFtttuKJq4lXwfnpA&s' alt=''></img>
//                                                 <img src='https://cdn-icons-png.flaticon.com/512/1311/1311095.png' alt=''></img>
//                                                 <img src='https://static.vecteezy.com/system/resources/thumbnails/029/163/312/small/add-files-glyph-icon-add-folder-symbol-empty-folder-new-directory-for-document-portfolio-storage-online-gallery-flat-logo-pictogram-illustration-design-on-white-background-eps-10-vector.jpg' alt=''></img>


//                                             </Col>
//                                             <Col>
//                                                 <h3>Dashboard</h3>
//                                                 <Link to={"/Account"}><h3>Account</h3></Link>
//                                                 <Link to={"/Addproduct"}><h3>Addproduct</h3></Link>
//                                                 <Link to={"/Products"}><h3> Products</h3></Link>
//                                                 <Link to={"/AddCategory"}> <h3>Add category</h3></Link>


//                                             </Col>
//                                         </Row>




//                                     </Offcanvas.Body>
//                                 </Offcanvas>
//                             </>
//                         </Col>
//                         <Col md={4} className='info'>

//                             <img src='search.jpeg' alt=''></img>
//                             <img src='user.jpeg' alt=''></img>
//                         </Col>
//                     </Row>
//                 </Container>
//             </section>

//             <section>
//                 <Container>
//                     <Row >
//                         <Col md={3} className='box'>
//                             <h4>Total sales</h4>
//                             <Pie options={options} data={data1} />

//                         </Col>

//                         <Col md={3} className='box'>
//                             {/* <h4>Monthly sales</h4>
//                             <Bar options={options} data={data1} /> */}

//                             <h4>Daily report</h4>
//                             {Array.isArray(dailyReport) ? (
//                                 dailyReport.map((item, index) => (
//                                     <p key={index}>
//                                         {item.date} ,  {item.totalSales}
//                                     </p>
//                                 ))
//                             ) : (
//                                 <p>No data</p>
//                             )}

//                         </Col>
//                         <Col md={3} className='box'>
//                             {/* <h4>Weekly sales</h4>
//                             <Scatter options={options} data={data1} /> */}
//                             <h4>Top selling products</h4>
//                             {/* <Bar options={options} data={productChart} /> */}
//                             {topProducts.length > 0 ? (
//                                 <Bar options={options} data={TopsellingData} />
//                             ) : (
//                                 <p>Loading...</p>
//                             )}

//                         </Col>
//                         {/* <Col md={3} className='box'>
//                             <h4>Yearly sales</h4>
//                             <PolarArea options={options} data={data1} />



//                         </Col> */}

//                         <Col md={3} className='box'>
//                             <h4>Report summart</h4>


//                             {/* <PolarArea options={options} data={data1} /> */}

//                             {reportSummary ? (
//                                 <div>
//                                     <p>Total Orders: {reportSummary.totalOrders}</p>
//                                     <p>Total Sales: {reportSummary.totalSales}</p>
//                                 </div>
//                             ) : (
//                                 <p>Loading...</p>
//                             )}



//                         </Col>
//                     </Row>
//                 </Container>
//             </section>
//             <section >
//                 <Container>



//                     <Row className='graph'>
//                         <Col>
//                             {/* <Bar options={options} data={data} />; */}
//                             {/* <Bar options={options} data={chartData} /> */}




//                             {chartData && chartData.labels && (
//                                 <Bar options={options} data={chartData} />
//                             )}
//                         </Col>
//                     </Row>




//                 </Container>
//             </section>
//         </div>
//     )
// }

// export default Dashboard







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

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [reportSummary, setReportSummary] = useState();

    useEffect(() => {
        axios.get("http://localhost:8090/api/ssorders/reports/summary")
            .then((response) => {
                setReportSummary(response.data);
                console.log("Report summart", response.data)
            })
    }, []);

    // chart data
    const [chartData, setChartData] = useState([]);




    useEffect(() => {
        axios.get("http://localhost:8090/api/ssorders/chartdata")
            .then((response) => {
                console.log("Chart API Data:", response.data);
                setChartData(response.data);
            })
            .catch((error) => {
                console.log(error);
            })
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
    const [dailyReport, setDailyReport] = useState([]);


    useEffect(() => {

        axios.get("http://localhost:8090/api/ssorders/reports/daily")
            .then((response) => {

                console.log("Daily Report API:", response.data);


                // if (Array.isArray(response.data)) {
                //     setDailyReport(response.data);
                // }

                // else if (Array.isArray(response.data.data)) {
                //     setDailyReport(response.data.data);
                // }
                // else {
                //     setDailyReport([]);
                // }

            })
        // .catch((error) => {
        //     console.log(error);
        // });

    }, []);


    // order


    const [orders, setOrders] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8090/api/ssorders")
            .then((response) => {
                console.log("orders", response.data);
                setOrders(response.data);
            })

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

                            </ListGroup>
                        </Col>




                        <Col className='graph' md={9}>





                            {chartData && chartData.labels && (
                                <Bar options={options} data={chartData} />
                            )}
                        </Col>




                    </Row>


                </Container>
            </section>

            <section>
                <Container>
                    <Row>
                        <Col className='orders'>
                            <h3>Orders</h3>

                            <   Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th>User ID</th>
                                        <th> Product Id</th>

                                        <th>Quantity</th>
                                        <th>Price</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {orders.map((item, index) => (
                                        item.products?.map((product, i) => (
                                            <tr key={i}>
                                                <td>{item.userId}</td>
                                                <td>{product.productId}</td>

                                                <td>{product.quantity}</td>
                                                <td>&#8377;{product.price}</td>
                                                <td><span className="badge bg-success">{item.status}</span>
                                                </td>


                                            </tr>
                                        ))
                                    ))}
                                </tbody>

                            </Table>


                        </Col>
                    </Row>
                </Container>
            </section>

            <section>
                <Container>
                    <Row>


                        <Col md={4} className='fetching data' >
                            <h4>Daily Report</h4>

                            <div className="box">







                                <Table striped bordered hover>
                                    <thead>
                                        <tr>
                                            <th>Sl no</th>
                                            <th>Date</th>
                                            <th>Total Sales</th>
                                        </tr>
                                    </thead>

                                    <tbody>

                                        {dailyReport.length > 0 ? (

                                            dailyReport.map((item, index) => (
                                                <tr key={index}>
                                                    <td>{index + 1}</td>
                                                    <td>{item.date}</td>
                                                    <td>₹ {item.totalSales}</td>
                                                </tr>
                                            ))

                                        ) : (

                                            <tr>
                                                <td colSpan="3">No Data Available</td>
                                            </tr>

                                        )}

                                    </tbody>

                                </Table>
                            </div>




                        </Col>
                        <Col md={4}>

                            <h4>Top Selling Products</h4>
                            <div className="box">



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


                        <Col md={4}>
                            <h4>Report summary</h4>
                            <div className="box">




                                {reportSummary ? (
                                    <div>
                                        <p>Total Orders: {reportSummary.totalOrders}</p>
                                        <p>Total Sales: &#8377;{reportSummary.totalRevenue}</p>
                                    </div>
                                ) : (
                                    <p>Loading...</p>
                                )}


                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>


        </div>
    )
}

export default Dashboard

