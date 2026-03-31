import axios from 'axios';
import { useState, useEffect } from 'react';
import { Container, Row, Col, Table } from 'react-bootstrap';
// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate, Navigate } from "react-router-dom";
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const OrdersDetail = () => {

    // let navigate = useNavigate();
    // const dispatch = useDispatch();
    // const { user: currentUser } = useSelector((state) => state.auth);
    // useEffect(() => {
    //     if (currentUser) {
    //         console.log(currentUser);
    //     }
    //     if (currentUser && currentUser.roles[0] !== "ROLE_ADMIN") {
    //         console.log(currentUser.roles[0]);

    //         navigate("/Home");
    //     }
    // }, []);



    const [orders, setOrders] = useState([]);
    const [orderId, setOrderId] = useState("");

    useEffect(() => {
        axios.get("http://localhost:8090/api/ssorders")
            .then((response) => {
                console.log("orders", response.data);
                setOrders(response.data);
            })

    }, []);


     const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false)
    //// update

    ///
    setOrderId("")
  };
  const handleShow = (id) => {
    setShow(true)
    setOrderId(id)
    console.log(id)
  };

    return (
        <div>
            <section>
                <Container>
                    <Row>
                        <Col className='orders'>
                            <h3>Orders</h3>

                           

                            <Accordion defaultActiveKey="0">
                                {orders.length > 0 ? (
                                    orders.map((order, orderIndex) => (
                                    <Accordion.Item eventKey={orderIndex.toString()} key={orderIndex}>
                                        
                                        <Accordion.Header>
                                        {/* Order {orderIndex + 1}  */}
                                        <p> <b>Order ID</b>: {order.id}</p>
                                        &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;
                                        <p><b>User:</b> {order.userName}</p>
                                        </Accordion.Header>

                                        <Accordion.Body>
                                        <Table striped bordered hover>
                                            <thead>
                                            <tr>
                                                <th>Sl</th>
                                                <th>Product Name</th>
                                                <th>Image</th>
                                                <th>Price</th>
                                                <th>Quantity</th>
                                                <th>Total</th>
                                                <th>status</th>
                                            </tr>
                                            </thead>

                                            <tbody>
                                            {order.products && order.products.length > 0 ? (
                                                order.products.map((product, index) => (
                                                <tr key={index}>
                                                    <td>{index + 1}</td>
                                                    <td>{product.productName}</td>
                                                    <td>{product.productImage}</td>

                                                    <td>₹{product.price}</td>
                                                    <td>{product.quantity}</td>
                                                    <td>₹{product.price * product.quantity}</td>
                                                    <td>
                                                        
                                                    </td>
                                                </tr>
                                                ))
                                            ) : (
                                                <tr>
                                                <td colSpan="5">No products</td>
                                                </tr>
                                            )}

                                           
                                           
                                            </tbody>
                                        </Table>
                                         <>
      <Button variant="primary" onClick={()=>handleShow(order.id)}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
                                        </Accordion.Body>

                                    </Accordion.Item>
                                    ))
                                ) : (
                                    <p>No Orders Found</p>
                                )}
                                </Accordion>


                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
    )
}

export default OrdersDetail








// import axios from 'axios';
// import { useState, useEffect } from 'react';
// import { Container, Row, Col, Table } from 'react-bootstrap';
// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";

// const CustomerOrders = () => {

//     const navigate = useNavigate();
//     const dispatch = useDispatch();
//     const { user: currentUser } = useSelector((state) => state.auth);

//     const [orders, setOrders] = useState([]);
//     const [products, setProducts] = useState([]);

//     // ✅ API Call
//     useEffect(() => {

//         // Orders API
//         axios.get("http://localhost:8090/api/ssorders")
//             .then((response) => {
//                 console.log("orders", response.data);
//                 setOrders(response.data);
//             })
//             .catch((err) => console.log(err));

        
//         axios.get("http://localhost:8090/api/ssproducts")
//             .then((response) => {
//                 console.log("products", response.data);
//                 setProducts(response.data);
//             })
//             .catch((err) => console.log(err));

//     }, []);

    
//     const getProductDetails = (productId) => {
//         return products.find(p => p._id === productId);
//     };

//     return (
//         <div>
//             <section>
//                 <Container>
//                     <Row>
//                         <Col className='orders'>
//                             <h3>Orders</h3>

//                             <Table striped bordered hover>
//                                 <thead>
//                                     <tr>
//                                         <th>Product Name</th>
//                                         <th>Product Image</th>
//                                         <th>Quantity</th>
//                                         <th>Price</th>
//                                         <th>Status</th>
//                                     </tr>
//                                 </thead>

//                                 {/* <tbody>
//                                     {orders.length > 0 ? (
//                                         orders.map((item, index) => (
//                                             item.products?.map((product, i) => {

//                                                 const productData = getProductDetails(product.productId);

//                                                 return (
//                                                     <tr key={`${index}-${i}`}>

//                                                         <td>
//                                                             {productData ? productData.name : "Loading..."}
//                                                         </td>


//                                                         <td>
//                                                             {productData?.image ? (
//                                                                 <img
//                                                                     src={`http://localhost:8090/${productData.image}`}
//                                                                     alt="product"
//                                                                     width="60"
//                                                                 />
//                                                             ) : (
//                                                                 "No Image"
//                                                             )}
//                                                         </td>

//                                                         <td>{product.quantity}</td>


//                                                         <td>&#8377;{product.price}</td>


//                                                         <td>
//                                                             <span className="badge bg-success">
//                                                                 {item.status}
//                                                             </span>
//                                                         </td>
//                                                     </tr>
//                                                 );
//                                             })
//                                         ))
//                                     ) : (
//                                         <tr>
//                                             <td colSpan="5" className="text-center">
//                                                 No Orders Found
//                                             </td>
//                                         </tr>
//                                     )}
//                                 </tbody> */}



//                                 <tbody>
//                                     {orders.map((item, index) =>
//                                         item.products.map((product, i) => (
//                                             <tr key={i}>
//                                                 <td>{product.productId?.name}</td>

//                                                 <td>
//                                                     <img
//                                                         src={`http://localhost:8090/${product.productId?.image}`}
//                                                         width="60"
//                                                         alt="product"
//                                                     />
//                                                 </td>

//                                                 <td>{product.quantity}</td>
//                                                 <td>&#8377;{product.price}</td>

//                                                 <td>
//                                                     <span className="badge bg-success">
//                                                         {item.status}
//                                                     </span>
//                                                 </td>
//                                             </tr>
//                                         ))
//                                     )}
//                                 </tbody>

//                             </Table>

//                         </Col>
//                     </Row>
//                 </Container>
//             </section>
//         </div>
//     );
// };

// export default CustomerOrders;













